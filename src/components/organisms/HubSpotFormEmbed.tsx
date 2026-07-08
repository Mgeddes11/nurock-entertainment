import { useEffect, useRef } from "react";

type Props = {
  portalId: string;
  formGuid: string;
  className?: string;
};

export function HubSpotFormEmbed({ portalId, formGuid, className = "" }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!portalId || !formGuid || !containerRef.current) return;

    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/v2.js";
    script.async = true;
    script.onload = () => {
      const win = window as Window & { hbspt?: { forms: { create: (opts: object) => void } } };
      if (win.hbspt?.forms?.create && containerRef.current) {
        win.hbspt.forms.create({
          portalId,
          formId: formGuid,
          target: containerRef.current,
        });
      }
    };
    document.body.appendChild(script);
  }, [portalId, formGuid]);

  if (!portalId || !formGuid) {
    return (
      <div className={`rounded-lg border border-white/10 bg-white/5 p-8 text-center text-white/50 ${className}`}>
        <p>Add VITE_HUBSPOT_PORTAL_ID and VITE_HUBSPOT_FORM_GUID in .env to show the contact form.</p>
      </div>
    );
  }

  return <div ref={containerRef} className={className} />;
}
