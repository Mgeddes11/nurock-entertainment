#!/usr/bin/env python3
import argparse
import base64
import json
import subprocess
import sys
import urllib.request

try:
    from nacl import encoding, public
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "--user", "pynacl"])
    from nacl import encoding, public


def git_token() -> str:
    proc = subprocess.run(
        ["git", "credential-osxkeychain", "get"],
        input="protocol=https\nhost=github.com\n\n",
        text=True,
        capture_output=True,
        check=True,
    )
    for line in proc.stdout.splitlines():
        if line.startswith("password="):
            return line.split("=", 1)[1]
    raise RuntimeError("Could not read GitHub token from credential helper")


def encrypt_secret(public_key: str, secret_value: str) -> str:
    public_key_bytes = base64.b64decode(public_key)
    sealed_box = public.SealedBox(public.PublicKey(public_key_bytes))
    encrypted = sealed_box.encrypt(secret_value.encode("utf-8"))
    return base64.b64encode(encrypted).decode("utf-8")


def main() -> None:
    parser = argparse.ArgumentParser()
    parser.add_argument("--repo", required=True)
    parser.add_argument("--environment", required=True)
    parser.add_argument("--name", required=True)
    parser.add_argument("--value", required=True)
    args = parser.parse_args()

    token = git_token()
    owner, repo = args.repo.split("/", 1)
    key_url = (
        f"https://api.github.com/repos/{owner}/{repo}/environments/"
        f"{args.environment}/secrets/public-key"
    )
    req = urllib.request.Request(
        key_url,
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "User-Agent": "nurock-bootstrap",
        },
    )
    with urllib.request.urlopen(req) as resp:
        key_data = json.load(resp)

    encrypted = encrypt_secret(key_data["key"], args.value)
    secret_url = (
        f"https://api.github.com/repos/{owner}/{repo}/environments/"
        f"{args.environment}/secrets/{args.name}"
    )
    body = json.dumps(
        {
            "encrypted_value": encrypted,
            "key_id": key_data["key_id"],
        }
    ).encode("utf-8")
    put_req = urllib.request.Request(
        secret_url,
        data=body,
        method="PUT",
        headers={
            "Authorization": f"Bearer {token}",
            "Accept": "application/vnd.github+json",
            "Content-Type": "application/json",
            "User-Agent": "nurock-bootstrap",
        },
    )
    with urllib.request.urlopen(put_req) as resp:
        print(json.load(resp).get("name", args.name))


if __name__ == "__main__":
    main()
