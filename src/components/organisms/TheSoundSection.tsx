import { theSoundCopy } from "../../data/theSoundCopy";

export function TheSoundSection() {
  const { services, standardHeading, standard, closing } = theSoundCopy;

  return (
    <section className="relative py-24 md:py-32">
      <div className="page-section">
        <div className="panel-surface rounded-[2rem] p-7 md:p-10 lg:p-14">
          <div className="mb-20 md:mb-24">
            <span className="eyebrow-label mb-6">The NuRock Standard</span>
            <ul className="space-y-10 md:space-y-12">
              {services.map((service) => (
                <li key={service.title} className="rounded-[1.5rem] border border-white/6 bg-white/[0.02] p-6 md:p-7">
                  <h4 className="mb-4 border-l-2 border-primary pl-5 text-[0.82rem] font-bold uppercase tracking-[0.28em] text-primary">
                    {service.title}
                  </h4>
                  <p className="max-w-3xl pl-5 text-base leading-8 text-base-content/74 md:text-[1.04rem]">
                    {service.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-20 border-t border-white/8 pt-14 md:mb-24 md:pt-16">
            <h3 className="section-heading mb-8 text-base-content">{standardHeading}</h3>
            <div className="space-y-6 max-w-3xl">
              {standard.map((paragraph, i) => (
                <p key={i} className="text-base leading-8 text-base-content/84 md:text-[1.05rem]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          <div className="space-y-3 border-t border-white/8 pt-10">
            {closing.map((line, i) => (
              <p
                key={i}
                className={
                  i === 0
                    ? "text-sm font-semibold uppercase tracking-[0.26em] text-base-content/58 md:text-base"
                    : "text-3xl font-black uppercase tracking-tight text-primary md:text-5xl"
                }
              >
                {line}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
