import { useEffect, useId, useRef } from "react";

const MEETINGS_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

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
  const containerRef = useRef<HTMLDivElement>(null);
  const reactId = useId().replace(/:/g, "");
  const targetClass = `hubspot-meetings-${reactId}`;

  useEffect(() => {
    if (!embedUrl || !containerRef.current) return;

    const container = containerRef.current;
    container.innerHTML = "";

    const mount = document.createElement("div");
    mount.className = `meetings-iframe-container ${targetClass}`;
    mount.setAttribute("data-src", embedUrl);
    container.appendChild(mount);

    const existing = document.querySelector<HTMLScriptElement>(`script[src="${MEETINGS_SCRIPT}"]`);
    const run = () => {
      // HubSpot script scans for .meetings-iframe-container on load;
      // re-injecting a fresh script forces a rescan after route changes.
      const script = document.createElement("script");
      script.src = MEETINGS_SCRIPT;
      script.async = true;
      container.appendChild(script);
    };

    if (existing) {
      run();
    } else {
      const script = document.createElement("script");
      script.src = MEETINGS_SCRIPT;
      script.async = true;
      script.onload = run;
      document.body.appendChild(script);
    }

    return () => {
      container.innerHTML = "";
    };
  }, [embedUrl, targetClass]);

  if (!embedUrl) {
    return (
      <div className={`rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white/50 ${className}`}>
        <p>Booking calendar is not configured yet.</p>
      </div>
    );
  }

  return (
    <div className={className}>
      <div className="mb-6 rounded-[1.25rem] border border-primary/25 bg-primary/8 p-5 md:p-6">
        <p className="mb-4 text-sm leading-7 text-base-content/80">
          Best way to book: open the calendar in a new tab. If the embedded calendar looks blank on your phone, use this button.
        </p>
        <a
          href={trimmed}
          target="_blank"
          rel="noreferrer noopener"
          className="premium-button inline-flex w-full items-center justify-center gap-2 px-6 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.22em] sm:w-auto"
        >
          Book now — open calendar
          <span className="material-symbols-outlined text-xl" aria-hidden>
            open_in_new
          </span>
        </a>
      </div>

      <div ref={containerRef} className="min-h-[720px] overflow-hidden rounded-lg border border-white/10 bg-white/5 md:min-h-[780px]" />

      <p className="mt-4 text-center text-sm text-base-content/55">
        Calendar not loading? Use{" "}
        <a className="text-primary underline" href={trimmed} target="_blank" rel="noreferrer noopener">
          this booking link
        </a>{" "}
        or the booking request form below.
      </p>
    </div>
  );
}
