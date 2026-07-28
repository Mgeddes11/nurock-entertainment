import { Link } from "react-router-dom";
import { ArtistSection } from "../components/organisms/ArtistSection";
import { CredibilitySection } from "../components/organisms/CredibilitySection";
import { ButtonPrimary } from "../components/atoms/ButtonPrimary";
import { musicPageCopy } from "../data/musicPageCopy";

export function InstrumentalsPage() {
  const { pageTitle, buyoutsSection, pageIntro } = musicPageCopy;

  const PAGE_BG =
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80";

  return (
    <div className="relative overflow-hidden py-8 pb-16 sm:py-10">
      <div
        className="absolute inset-0 section-photo-bg"
        style={{ backgroundImage: `url(${PAGE_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-base-100/38 md:bg-base-100/62" aria-hidden />
      <div className="relative z-10 px-6">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 md:mb-16">
            <h1 className="mb-3 text-4xl font-black uppercase tracking-tighter text-base-content md:text-5xl">
              {pageTitle}
            </h1>
            <div className="mb-6 h-1 w-24 bg-primary" />
            <p className="max-w-3xl text-base leading-8 text-base-content/75 md:text-lg md:leading-9">
              {pageIntro}
            </p>
          </header>

          <CredibilitySection />

          <section id="buyouts" className="mb-16 scroll-mt-28 md:mb-20">
            <div className="panel-surface rounded-[2rem] p-6 sm:p-8 md:p-10">
              <span className="eyebrow-label mb-4">{buyoutsSection.eyebrow}</span>
              <h2 className="lux-heading mb-3 text-3xl uppercase text-base-content md:text-5xl">
                {buyoutsSection.title}
              </h2>
              <div className="gold-rule mb-6" />
              <p className="mb-10 max-w-3xl text-base leading-8 text-base-content/72">
                {buyoutsSection.intro}
              </p>

              <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
                {buyoutsSection.cards.map((card) => (
                  <div
                    key={card.id}
                    className="rounded-[1.5rem] border border-white/8 bg-white/[0.03] p-6 md:p-7"
                  >
                    <h3 className="mb-4 text-xl font-black uppercase tracking-tight text-base-content md:text-2xl">
                      {card.title}
                    </h3>
                    <p className="mb-1 text-2xl font-black uppercase tracking-tight text-primary md:text-3xl">
                      {card.rate}
                    </p>
                    <p className="mb-5 text-sm uppercase tracking-[0.2em] text-base-content/58">
                      {card.detail}
                    </p>
                    <p className="text-sm leading-7 text-base-content/72 md:text-[0.98rem]">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>

              <Link to={buyoutsSection.ctaHref}>
                <ButtonPrimary className="px-8 py-4 text-[0.78rem]">
                  {buyoutsSection.ctaLabel}
                </ButtonPrimary>
              </Link>
            </div>
          </section>

          <ArtistSection />
        </div>
      </div>
    </div>
  );
}
