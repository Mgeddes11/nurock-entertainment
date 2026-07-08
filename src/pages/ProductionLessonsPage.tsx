import { StudioFeatureCard } from "../components/molecules/StudioFeatureCard";
import { hubspot } from "../config/hubspot";
import { productionLessonsCopy } from "../data/productionLessonsCopy";

export function ProductionLessonsPage() {
  const { intro, cta, features } = productionLessonsCopy;
  const meetingUrl = hubspot.meetingUrlLessons || hubspot.meetingUrlSessions;

  return (
    <div className="pb-24 pt-32">
      <section className="page-section mb-16 md:mb-20">
        <div className="panel-surface mx-auto max-w-4xl rounded-[2rem] p-7 md:p-10 lg:p-12">
          <span className="eyebrow-label mb-4">NuRock Academy</span>
          <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">
            {intro.headline}
          </h1>
          <div className="gold-rule mt-5 mb-8" />
          <p className="mb-6 text-xl leading-8 text-base-content/84">{intro.tagline}</p>
          <p className="mb-10 text-base leading-8 text-base-content/58">{intro.subline}</p>
          {meetingUrl && (
            <a
              href={meetingUrl}
              target="_blank"
              rel="noreferrer noopener"
              className="premium-button inline-flex items-center gap-2 px-8 py-4 text-[0.78rem] font-extrabold uppercase tracking-[0.26em]"
            >
              {cta.label}
              <span className="material-symbols-outlined text-xl inline-block" aria-hidden>
                open_in_new
              </span>
            </a>
          )}
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
