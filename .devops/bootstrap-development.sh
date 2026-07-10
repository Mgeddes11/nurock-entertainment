#!/usr/bin/env bash
set -euo pipefail

ROOT_DIR="$(cd "$(dirname "$0")/.." && pwd)"
TF_DIR="$ROOT_DIR/.devops/terraform"
WORKSPACE="development-us-east-1"
GITHUB_REPO="Mgeddes11/nurock-entertainment"
GITHUB_ENV="development"

export PATH="$HOME/.local/bin:$HOME/Library/Python/3.9/bin:$PATH"

echo "==> Checking AWS credentials"
aws sts get-caller-identity >/dev/null

echo "==> Initializing Terraform"
cd "$TF_DIR"
terraform init -input=false
terraform workspace select "$WORKSPACE" 2>/dev/null || terraform workspace new "$WORKSPACE"

echo "==> Applying development infrastructure"
terraform apply -input=false -auto-approve

BUCKET="$(terraform output -raw website_bucket_id)"
DISTRIBUTION="$(terraform output -raw cloudfront_website_id)"
ACCESS_KEY="$(terraform output -raw github_actions_aws_access_key_id)"
SECRET_KEY="$(terraform output -raw github_actions_aws_secret_access_key)"

echo "==> Syncing GitHub environment secrets for $GITHUB_ENV"
python3 "$ROOT_DIR/.devops/github_set_secret.py" \
  --repo "$GITHUB_REPO" \
  --environment "$GITHUB_ENV" \
  --name AWS_ACCESS_KEY_ID \
  --value "$ACCESS_KEY"

python3 "$ROOT_DIR/.devops/github_set_secret.py" \
  --repo "$GITHUB_REPO" \
  --environment "$GITHUB_ENV" \
  --name AWS_SECRET_ACCESS_KEY \
  --value "$SECRET_KEY"

set_var() {
  local name="$1"
  local value="$2"
  CREDS=$(printf "protocol=https\nhost=github.com\n\n" | git credential-osxkeychain get)
  TOKEN=$(printf "%s" "$CREDS" | awk -F= '/^password=/{print $2}')
  curl -s -X POST \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$GITHUB_REPO/environments/$GITHUB_ENV/variables" \
    -d "$(python3 -c "import json; print(json.dumps({'name':'$name','value':'$value'}))")" >/dev/null 2>&1 || \
  curl -s -X PATCH \
    -H "Authorization: Bearer $TOKEN" \
    -H "Accept: application/vnd.github+json" \
    "https://api.github.com/repos/$GITHUB_REPO/environments/$GITHUB_ENV/variables/$name" \
    -d "$(python3 -c "import json; print(json.dumps({'name':'$name','value':'$value'}))")" >/dev/null
}

set_var AWS_S3_BUCKET "$BUCKET"
set_var AWS_CLOUDFRONT_DISTRIBUTION_ID "$DISTRIBUTION"

echo
echo "Development infrastructure is ready."
echo "S3 bucket: $BUCKET"
echo "CloudFront distribution: $DISTRIBUTION"
echo
echo "Route 53 nameservers:"
terraform output -json route53_name_servers
echo
echo "Next: add dev.nurockentertainment.com DNS in Wix, or move nameservers when ready for production."
