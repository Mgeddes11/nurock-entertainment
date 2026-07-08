import { Link } from "react-router-dom";
import { siteCopy } from "../../data/siteCopy";

const MIXING_CONSOLE_IMAGE =
  "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?w=1920&q=80";

export function CTASection() {
  const { cta } = siteCopy;

  return (
    <section className="relative overflow-hidden py-20 md:py-28">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${MIXING_CONSOLE_IMAGE})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-base-100/54" aria-hidden />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,178,74,0.22),transparent_36%)]" aria-hidden />

      <div className="page-section relative z-10">
        <div className="panel-surface mx-auto max-w-4xl rounded-[2rem] px-6 py-12 text-center md:px-12 md:py-16">
          <span className="eyebrow-label mb-5 justify-center">Ready When You Are</span>
          <h2 className="mx-auto mb-8 max-w-3xl text-4xl font-black uppercase tracking-tight text-base-content md:text-5xl lg:text-6xl">
            {cta.headline}
          </h2>
          <Link
            to="/studio-sessions"
            className="premium-button inline-flex items-center justify-center px-8 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.28em]"
          >
            {cta.button}
          </Link>
        </div>
      </div>
    </section>
  );
}
