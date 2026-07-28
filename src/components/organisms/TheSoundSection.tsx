import { theSoundCopy } from "../../data/theSoundCopy";

export function TheSoundSection() {
  const { standardHeading, standard, closing } = theSoundCopy;

  return (
    <section className="relative py-24 md:py-32">
      <div className="page-section">
        <div className="panel-surface rounded-[2rem] p-7 md:p-10 lg:p-14">
          <div className="mb-14 md:mb-16">
            <h3 className="section-heading mb-8 text-base-content">{standardHeading}</h3>
            <div className="max-w-3xl space-y-6">
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
