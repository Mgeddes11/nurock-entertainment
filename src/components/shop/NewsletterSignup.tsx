import { useState } from "react";
import { shopConfig } from "../../data/shop/shopConfig";
import { contactFormEndpoint } from "../../config/hubspot";

export function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const { newsletter } = shopConfig;

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");
    const form = e.currentTarget;
    const email = String(new FormData(form).get("email") || "");
    try {
      const res = await fetch(contactFormEndpoint, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify({
          _subject: "NRE Inner Circle signup",
          _template: "table",
          _captcha: "false",
          list: "NRE Apparel Inner Circle",
          email,
        }),
      });
      if (!res.ok) throw new Error("fail");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section className="border-y border-white/10 bg-black/50 px-6 py-16 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow-label mb-4 justify-center">{shopConfig.brand.primary}</p>
        <h2 className="lux-heading text-3xl uppercase text-base-content md:text-5xl">{newsletter.heading}</h2>
        <p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65 md:text-base">{newsletter.copy}</p>
        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
          <label className="sr-only" htmlFor="nre-email">Email</label>
          <input
            id="nre-email"
            name="email"
            type="email"
            required
            placeholder="Email address"
            className="premium-input input input-bordered w-full flex-1 bg-base-100"
          />
          <button
            type="submit"
            disabled={status === "loading"}
            className="premium-button px-6 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.24em] disabled:opacity-50"
          >
            {status === "loading" ? "Joining..." : "Join"}
          </button>
        </form>
        <p className="mt-3 text-xs text-white/40">{newsletter.consent}</p>
        {status === "success" ? <p className="mt-3 text-sm text-emerald-300" role="status">You're in. Welcome to the inner circle.</p> : null}
        {status === "error" ? <p className="mt-3 text-sm text-red-300" role="alert">Could not subscribe. Email Hollynurock@nurockentertainment.com.</p> : null}
      </div>
    </section>
  );
}
