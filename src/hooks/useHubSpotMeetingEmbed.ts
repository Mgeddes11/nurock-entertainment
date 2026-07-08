import { useEffect, useRef } from "react";

const MEETINGS_SCRIPT = "https://static.hsappstatic.net/MeetingsEmbed/ex/MeetingsEmbedCode.js";

declare global {
  interface Window {
    hsMeetingEmbed?: { initialize: (opts: { widgetPosition: string; targetSelector: string }) => void };
  }
}

export function useHubSpotMeetingEmbed(meetingUrl: string) {
  const containerRef = useRef<HTMLDivElement>(null);
  const loadedRef = useRef(false);

  useEffect(() => {
    if (!meetingUrl || loadedRef.current) return;

    const init = () => {
      if (window.hsMeetingEmbed && containerRef.current) {
        window.hsMeetingEmbed.initialize({
          widgetPosition: "inline",
          targetSelector: ".hubspot-meetings-container",
        });
        loadedRef.current = true;
      }
    };

    if (document.querySelector(`script[src="${MEETINGS_SCRIPT}"]`)) {
      init();
      return;
    }

    const script = document.createElement("script");
    script.src = MEETINGS_SCRIPT;
    script.async = true;
    script.onload = init;
    document.body.appendChild(script);
  }, [meetingUrl]);

  return containerRef;
}
