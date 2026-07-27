import { useState } from "react";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function UnlockPage() {
  const [code, setCode] = useState("");
  const [msg, setMsg] = useState("");
  useDocumentMeta({
    title: "Unlock — NRE",
    description: "Future QR unlock for exclusive NRE music, sessions, and drops.",
  });

  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-20">
      <div className="mx-auto max-w-lg text-center">
        <p className="text-[0.7rem] uppercase tracking-[0.34em] text-primary">Digital unlock</p>
        <h1 className="mt-4 text-4xl font-black uppercase md:text-5xl">Enter access code</h1>
        <p className="mt-5 text-sm leading-7 text-white/55">
          Packaging QR unlocks (exclusive songs, demos, tutorials, early drops) will live here. No locked content is active yet.
        </p>
        <form
          className="mt-10 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            setMsg(code.trim() ? "This code is not active yet. Unlock content launches with fulfillment packaging." : "Enter a code.");
          }}
        >
          <label className="sr-only" htmlFor="unlock-code">Access code</label>
          <input
            id="unlock-code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            className="premium-input input input-bordered w-full bg-base-100 text-center uppercase tracking-[0.2em]"
            placeholder="ACCESS CODE"
          />
          <button type="submit" className="premium-button w-full justify-center py-4 text-[0.72rem]">
            Unlock
          </button>
        </form>
        {msg ? <p className="mt-4 text-sm text-white/60" role="status">{msg}</p> : null}
      </div>
    </div>
  );
}
