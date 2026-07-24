import { useState } from "react";
import { contactFormEndpoint } from "../../config/hubspot";

const DIRECT_EMAIL = "Hollynurock@nurockentertainment.com";

const SESSION_TYPES = [
  { value: "", label: "Select session type..." },
  { value: "studio-session", label: "Studio Session" },
  { value: "production-lesson", label: "Music Production Lesson ($150/hr, 2hr min)" },
  { value: "consultation", label: "Consultation" },
] as const;

type Props = {
  className?: string;
};

export function BookingRequestForm({ className = "" }: Props) {
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const action = contactFormEndpoint;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!action) {
      setStatus("error");
      return;
    }
    setStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    const email = String(data.get("email") || "");
    const sessionType =
      SESSION_TYPES.find((o) => o.value === data.get("sessionType"))?.label ?? String(data.get("sessionType"));

    const payload = {
      _subject: `NuRock Booking Request: ${sessionType}`,
      _template: "table",
      _replyto: email,
      _captcha: "false",
      requestType: "Booking Request",
      sessionType,
      name: data.get("name"),
      email,
      phone: data.get("phone") || "",
      preferredDate: data.get("preferredDate") || "",
      preferredTime: data.get("preferredTime") || "",
      message: data.get("message") || "",
    };

    try {
      const res = await fetch(action, {
        method: "POST",
        headers: { Accept: "application/json", "Content-Type": "application/json" },
        body: JSON.stringify(payload),
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
    <form onSubmit={handleSubmit} className={`space-y-5 ${className}`}>
      <div>
        <label htmlFor="sessionType" className="mb-2 block text-sm font-medium text-base-content/90">
          Session type *
        </label>
        <select id="sessionType" name="sessionType" required className="premium-select select select-bordered w-full bg-base-100">
          {SESSION_TYPES.map((opt) => (
            <option key={opt.value || "placeholder"} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="book-name" className="mb-2 block text-sm font-medium text-base-content/90">
            Name *
          </label>
          <input id="book-name" name="name" type="text" required className="premium-input input input-bordered w-full bg-base-100" />
        </div>
        <div>
          <label htmlFor="book-email" className="mb-2 block text-sm font-medium text-base-content/90">
            Email *
          </label>
          <input id="book-email" name="email" type="email" required className="premium-input input input-bordered w-full bg-base-100" />
        </div>
      </div>

      <div>
        <label htmlFor="book-phone" className="mb-2 block text-sm font-medium text-base-content/90">
          Phone
        </label>
        <input id="book-phone" name="phone" type="tel" className="premium-input input input-bordered w-full bg-base-100" />
      </div>

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="preferredDate" className="mb-2 block text-sm font-medium text-base-content/90">
            Preferred date
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className="premium-input input input-bordered w-full bg-base-100" />
        </div>
        <div>
          <label htmlFor="preferredTime" className="mb-2 block text-sm font-medium text-base-content/90">
            Preferred time
          </label>
          <input id="preferredTime" name="preferredTime" type="text" placeholder="e.g. Afternoon, 2pm" className="premium-input input input-bordered w-full bg-base-100" />
        </div>
      </div>

      <div>
        <label htmlFor="book-message" className="mb-2 block text-sm font-medium text-base-content/90">
          Notes
        </label>
        <textarea id="book-message" name="message" rows={3} className="premium-textarea textarea textarea-bordered w-full resize-none bg-base-100" placeholder="What are you working on?" />
      </div>

      {status === "success" && (
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-500/10 p-4 text-sm text-emerald-100">
          Booking request sent to {DIRECT_EMAIL}. Holly will confirm your time soon.
        </div>
      )}
      {status === "error" && (
        <div className="rounded-2xl border border-red-400/20 bg-red-500/10 p-4 text-sm text-red-100">
          Could not send. Email{" "}
          <a className="underline" href={`mailto:${DIRECT_EMAIL}?subject=Booking%20Request`}>
            {DIRECT_EMAIL}
          </a>{" "}
          directly.
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="premium-button inline-flex items-center justify-center px-7 py-3 text-[0.72rem] font-extrabold uppercase tracking-[0.28em] disabled:opacity-50"
      >
        {status === "sending" ? "Sending..." : "Send Booking Request"}
      </button>
    </form>
  );
}
