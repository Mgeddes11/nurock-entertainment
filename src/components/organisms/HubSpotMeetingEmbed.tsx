import { useCallback, useEffect, useId, useState } from "react";

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

function loadHubSpotScript(): Promise<void> {
  return new Promise((resolve) => {
    const existing = document.querySelector<HTMLScriptElement>(`script[src="${MEETINGS_SCRIPT}"]`);
    if (existing) {
      resolve();
      return;
    }
    const script = document.createElement("script");
    script.src = MEETINGS_SCRIPT;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

export function HubSpotMeetingEmbed({ meetingUrl, className = "" }: Props) {
  const trimmed = meetingUrl.trim();
  const embedUrl = toEmbedUrl(trimmed);
  const reactId = useId().replace(/:/g, "");
  const [reloadKey, setReloadKey] = useState(0);

  const remountCalendar = useCallback(() => {
    setReloadKey((value) => value + 1);
  }, []);

  useEffect(() => {
    if (!embedUrl) return;

    let cancelled = false;
    const host = document.getElementById(`hubspot-meeting-host-${reactId}`);
    if (!host) return;

    host.innerHTML = "";

    const mount = document.createElement("div");
    mount.className = "meetings-iframe-container";
    mount.setAttribute("data-src", `${embedUrl}&__hsreload=${reloadKey}`);
    host.appendChild(mount);

    void loadHubSpotScript().then(() => {
      if (cancelled) return;
      // Fresh script node forces HubSpot to rescan for .meetings-iframe-container
      const script = document.createElement("script");
      script.src = `${MEETINGS_SCRIPT}?r=${reloadKey}`;
      script.async = true;
      host.appendChild(script);
    });

    return () => {
      cancelled = true;
      host.innerHTML = "";
    };
  }, [embedUrl, reactId, reloadKey]);

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
          For the most reliable booking experience, open the full calendar. Use <strong className="text-base-content">Start over</strong> if the embedded calendar gets stuck after going back.
        </p>
        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <a
            href={trimmed}
            target="_blank"
            rel="noreferrer noopener"
            className="premium-button inline-flex items-center justify-center gap-2 px-6 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.22em]"
          >
            Book now — open calendar
            <span className="material-symbols-outlined text-xl" aria-hidden>
              open_in_new
            </span>
          </a>
          <button
            type="button"
            onClick={remountCalendar}
            className="premium-button-ghost inline-flex items-center justify-center gap-2 px-6 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.22em]"
          >
            Start over
            <span className="material-symbols-outlined text-xl" aria-hidden>
              refresh
            </span>
          </button>
        </div>
      </div>

      <div
        id={`hubspot-meeting-host-${reactId}`}
        className="min-h-[720px] overflow-hidden rounded-lg border border-white/10 bg-white/5 md:min-h-[780px]"
      />

      <div className="mt-4 flex flex-col items-center gap-2 text-center text-sm text-base-content/55 sm:flex-row sm:justify-center sm:gap-4">
        <button type="button" onClick={remountCalendar} className="text-primary underline">
          Calendar stuck? Start over
        </button>
        <span className="hidden sm:inline" aria-hidden>
          ·
        </span>
        <a className="text-primary underline" href={trimmed} target="_blank" rel="noreferrer noopener">
          Open booking link
        </a>
      </div>
    </div>
  );
}
