import { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { StudioFeatureCard } from "../components/molecules/StudioFeatureCard";
import { studioSessionsCopy } from "../data/studioSessionsCopy";

const INTRO_BG_IMAGE =
  "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80";

export function StudioSessionsPage() {
  const { intro, pricing, cta, features } = studioSessionsCopy;
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.hash === "#book" || location.hash === "#request") {
      navigate("/booking", { replace: true });
    }
  }, [location.hash, navigate]);

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
            <p className="mb-8 max-w-2xl text-base leading-8 text-base-content/58">{intro.subline}</p>
            <div className="mb-10 max-w-md rounded-[1.5rem] border border-primary/25 bg-primary/8 px-6 py-5 md:px-7 md:py-6">
              <p className="mb-2 text-[0.72rem] font-bold uppercase tracking-[0.28em] text-primary">
                {pricing.label}
              </p>
              <p className="text-2xl font-black uppercase tracking-tight text-base-content md:text-3xl">
                {pricing.rate}
              </p>
              <p className="mt-2 text-sm uppercase tracking-[0.2em] text-base-content/68">
                {pricing.detail}
              </p>
            </div>
            <Link
              to="/booking"
              className="premium-button inline-flex items-center gap-2 px-8 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.26em]"
            >
              {cta.label}
              <span className="material-symbols-outlined text-xl inline-block" aria-hidden>
                calendar_month
              </span>
            </Link>
          </div>
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
