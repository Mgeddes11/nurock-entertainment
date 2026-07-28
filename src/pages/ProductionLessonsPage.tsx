import { Link } from "react-router-dom";
import { StudioFeatureCard } from "../components/molecules/StudioFeatureCard";
import { productionLessonsCopy } from "../data/productionLessonsCopy";

export function ProductionLessonsPage() {
  const { intro, cta, features } = productionLessonsCopy;

  return (
    <div className="py-8 pb-16 sm:py-10">
      <section className="page-section mb-16 md:mb-20">
        <div className="panel-surface mx-auto max-w-4xl rounded-[2rem] p-7 md:p-10 lg:p-12">
          <span className="eyebrow-label mb-4">NuRock Academy</span>
          <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">
            {intro.headline}
          </h1>
          <div className="gold-rule mt-5 mb-8" />
          <p className="mb-6 text-xl leading-8 text-base-content/84">{intro.tagline}</p>
          <p className="mb-10 text-base leading-8 text-base-content/58">{intro.subline}</p>
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
