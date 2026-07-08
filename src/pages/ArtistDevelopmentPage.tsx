import { Link } from "react-router-dom";
import { siteCopy } from "../data/siteCopy";
import { ButtonPrimary } from "../components/atoms/ButtonPrimary";

const PAGE_BG_IMAGE =
  "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1920&q=80";

export function ArtistDevelopmentPage() {
  const { artistDevelopment } = siteCopy;

  return (
    <section className="relative min-h-[80vh] overflow-hidden pt-32 pb-24">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${PAGE_BG_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-base-100/62" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(221,178,74,0.22),transparent_34%)]" aria-hidden />

      <div className="page-section relative z-10">
        <div className="panel-surface mx-auto max-w-4xl rounded-[2rem] p-7 md:p-10 lg:p-12">
          <span className="eyebrow-label mb-4">Artist Development</span>
          <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">
            {artistDevelopment.title}
          </h1>
          <div className="gold-rule mt-5 mb-8" />
          <p className="mb-6 text-xl uppercase tracking-[0.24em] text-primary">{artistDevelopment.subtitle}</p>
          <div className="mb-10 max-w-3xl space-y-5 text-base leading-8 text-base-content/82 md:text-[1.04rem]">
            {artistDevelopment.body.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
          <Link to="/studio-sessions">
            <ButtonPrimary className="px-8 py-4 text-[0.78rem]">{artistDevelopment.cta}</ButtonPrimary>
          </Link>
        </div>
      </div>
    </section>
  );
}
