import { ServiceCard } from "../molecules/ServiceCard";
import { siteCopy } from "../../data/siteCopy";

const GRAFFITI_BG =
  "/assets/services-grid-bg.png";

export function ServicesGrid() {
  const { services } = siteCopy;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${GRAFFITI_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-base-100/62" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(221,178,74,0.2),transparent_28%)]" aria-hidden />

      <div className="page-section relative z-10">
        <div className="mb-14 flex flex-col gap-6 md:mb-16 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="eyebrow-label mb-4">What We Do</span>
            <h2 className="lux-heading text-4xl uppercase text-base-content md:text-5xl">
              {services.title}
            </h2>
            <div className="gold-rule mt-5" />
          </div>
          <p className="max-w-sm text-sm uppercase tracking-[0.26em] text-base-content/58 md:text-right">
            {services.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.items.map((item) => (
            <ServiceCard
              key={item.title}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
