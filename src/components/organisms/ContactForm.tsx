import { useState } from "react";

const INQUIRY_OPTIONS = [
  { value: "", label: "Select inquiry type..." },
  { value: "music-production", label: "Music Production" },
  { value: "artist-recording", label: "Artist Recording" },
  { value: "music-academy", label: "Music Academy" },
  { value: "beat-buyouts-licensing", label: "Beat buyouts and licensing" },
  { value: "booking", label: "Book a Session / Lesson" },
] as const;

const DIRECT_EMAIL = "Hollynurock@nurockentertainment.com";

type Props = {
  action?: string;
  className?: string;
};

export function ContactForm({ action = "", className = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!action) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const formData = new FormData(form);

    const isFormSubmit = action.includes("formsubmit.co");
    let body: FormData | string;
    let headers: HeadersInit = { Accept: "application/json" };

    if (isFormSubmit) {
      const inquiry = formData.get("inquiry") as string;
      const label = INQUIRY_OPTIONS.find((o) => o.value === inquiry)?.label ?? inquiry;
      const email = String(formData.get("email") || "");
      const payload = {
        _subject: `NuRock Contact: ${label}`,
        _template: "table",
        _replyto: email,
        _captcha: "false",
        inquiry: label,
        name: formData.get("name"),
        email,
        phone: formData.get("phone") || "",
        message: formData.get("message"),
      };
      body = JSON.stringify(payload);
      headers = { ...headers, "Content-Type": "application/json" };
    } else {
      body = formData;
    }

    try {
      const res = await fetch(action, {
        method: "POST",
        body,
        headers,
      });
      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`panel-surface rounded-[2rem] p-6 md:p-8 space-y-6 ${className}`}>
      <div>
        <label htmlFor="inquiry" className="mb-2 block text-sm font-medium text-base-content/90">
          What would you like to inquire about?
        </label>
        <select id="inquiry" name="inquiry" required className="premium-select select select-bordered w-full bg-base-100">
          {INQUIRY_OPTIONS.map((opt) => (
            <option key={opt.value || "placeholder"} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm font-medium text-base-content/90">
            Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Your name"
            className="premium-input input input-bordered w-full bg-base-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm font-medium text-base-content/90">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="premium-input input input-bordered w-full bg-base-100"
          />
        </div>
      </div>

      <div>
        <label htmlFor="phone" className="mb-2 block text-sm font-medium text-base-content/90">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="(555) 555-5555"
          className="premium-input input input-bordered w-full bg-base-100"
        />
      </div>

      <div>
        <label htmlFor="message" className="mb-2 block text-sm font-medium text-base-content/90">
          Message *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          placeholder="Tell us about your project or question..."
          className="premium-textarea textarea textarea-bordered w-full resize-none bg-base-100"
        />
      </div>

      {/* Honeypot */}
      <input type="text" name="_honey" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden />

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          Thanks for reaching out. Your message was sent to {DIRECT_EMAIL}. We&apos;ll get back to you soon.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">
          {action ? (
            <>
              Something went wrong. Please email us directly at{" "}
              <a className="underline" href={`mailto:${DIRECT_EMAIL}`}>
                {DIRECT_EMAIL}
              </a>
              .
            </>
          ) : (
            "Contact form is not configured yet."
          )}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="premium-button inline-flex items-center justify-center px-7 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send"}
      </button>

      <p className="text-center text-xs text-base-content/50">
        Or email{" "}
        <a className="text-primary underline" href={`mailto:${DIRECT_EMAIL}`}>
          {DIRECT_EMAIL}
        </a>
      </p>
    </form>
  );
}
