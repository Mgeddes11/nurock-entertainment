type Props = {
  meetingUrl: string;
  className?: string;
};

function toEmbedUrl(url: string) {
  const trimmed = url.trim();
  if (!trimmed) return "";
  if (trimmed.includes("embed=true")) return trimmed;
  return `${trimmed}${trimmed.includes("?") ? "&" : "?"}embed=true`;
}

export function HubSpotMeetingEmbed({ meetingUrl, className = "" }: Props) {
  const trimmed = meetingUrl.trim();
  const embedUrl = toEmbedUrl(trimmed);

  if (!embedUrl) {
    return (
      <div className={`rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white/50 ${className}`}>
        <p>Booking calendar is not configured yet.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-base-content/60">
          Pick a time below, or open the calendar in a new tab if it doesn&apos;t load on your phone.
        </p>
        <a
          href={trimmed}
          target="_blank"
          rel="noreferrer noopener"
          className="premium-button inline-flex shrink-0 items-center justify-center gap-2 px-5 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em]"
        >
          Open calendar
          <span className="material-symbols-outlined text-lg" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>
      <iframe
        src={embedUrl}
        title="Book a session"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        allow="camera; microphone; fullscreen; payment"
        className="w-full min-h-[720px] rounded-lg border border-white/10 bg-white/5 md:min-h-[780px]"
      />
    </div>
  );
}
