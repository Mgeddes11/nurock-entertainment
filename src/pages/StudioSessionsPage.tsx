import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { StudioFeatureCard } from "../components/molecules/StudioFeatureCard";
import { HubSpotMeetingEmbed } from "../components/organisms/HubSpotMeetingEmbed";
import { hubspot } from "../config/hubspot";
import { studioSessionsCopy } from "../data/studioSessionsCopy";

const INTRO_BG_IMAGE =
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80";

export function StudioSessionsPage() {
  const { intro, cta, features } = studioSessionsCopy;
  const meetingUrl = hubspot.meetingUrlSessions;
  const location = useLocation();

  useEffect(() => {
    if (location.hash !== "#book") return;
    const timer = window.setTimeout(() => {
      document.getElementById("book")?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
    return () => window.clearTimeout(timer);
  }, [location.hash]);

  return (
    <div className="py-8 pb-16 sm:py-10">
      <section className="page-section mb-16 overflow-hidden md:mb-20">
        <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] border border-white/8">
          <div
            className="absolute inset-0 section-photo-bg"
            style={{ backgroundImage: `url(${INTRO_BG_IMAGE})` }}
            aria-hidden
          />
          <div className="absolute inset-0 bg-base-100/36 md:bg-base-100/58" aria-hidden />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(221,178,74,0.22),transparent_32%)] max-md:opacity-70" aria-hidden />
          <div className="relative z-10 p-7 md:p-10 lg:p-12">
            <span className="eyebrow-label mb-4">Studio Sessions</span>
            <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">
              {intro.headline}
            </h1>
            <div className="gold-rule mt-5 mb-8" />
            <p className="mb-6 max-w-3xl text-xl leading-8 text-base-content/84">{intro.tagline2}</p>
            <p className="mb-10 max-w-2xl text-base leading-8 text-base-content/58">{intro.subline}</p>
            <a
              href="#book"
              className="premium-button inline-flex items-center gap-2 px-8 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.26em]"
            >
              {cta.label}
              <span className="material-symbols-outlined text-xl inline-block" aria-hidden>
                calendar_month
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="book" className="page-section mb-16 md:mb-20 scroll-mt-28">
        <div className="panel-surface mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-5 sm:p-7 md:p-8">
          <span className="eyebrow-label mb-4">Book a session</span>
          <h2 className="lux-heading mb-6 text-3xl uppercase text-base-content md:text-4xl">
            Choose your time
          </h2>
          <HubSpotMeetingEmbed meetingUrl={meetingUrl} />
        </div>
      </section>

      <section className="page-section">
        <div className="space-y-16 md:space-y-20">
          {features.map((feature, index) => (
            <StudioFeatureCard
              key={feature.id}
              title={feature.title}
              description={feature.description}
              imageUrl={feature.imageUrl}
              imageAlt={feature.imageAlt}
              layout={index % 2 === 0 ? "image-left" : "image-right"}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
