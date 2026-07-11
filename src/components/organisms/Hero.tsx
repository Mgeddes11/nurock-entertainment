import { siteCopy } from "../../data/siteCopy";

export function Hero() {
  const { hero } = siteCopy;

  return (
    <section className="relative overflow-hidden py-8 sm:py-12 md:min-h-[85vh] md:py-16 lg:min-h-screen lg:py-20">
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=1920&q=80)`,
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(221,178,74,0.18),transparent_36%)]" aria-hidden />
        <div className="absolute inset-0 bg-base-100/34 z-[1]" aria-hidden />
        <div
          className="absolute inset-0 z-[2]"
          style={{
            background:
              "linear-gradient(90deg, rgba(7,6,5,0.82) 0%, rgba(7,6,5,0.54) 42%, rgba(7,6,5,0.18) 68%, rgba(7,6,5,0.54) 100%)",
          }}
          aria-hidden
        />
        <div className="grain-overlay absolute inset-0 z-[3]" aria-hidden />
      </div>

      <div className="page-section relative z-20">
        <div className="panel-surface max-w-4xl rounded-[2rem] p-6 sm:p-8 md:p-10 lg:p-12">
          <span className="eyebrow-label mb-6">NuRock Entertainment</span>
          <h1 className="mb-6 md:mb-10">
            <img
              src="/logo-hero.svg"
              alt="NuRock Entertainment"
              className="logo-neon-glow h-16 w-auto max-w-full object-contain object-left sm:h-20 md:h-28 lg:h-32"
            />
          </h1>
          <p className="max-w-3xl text-base leading-8 text-base-content/82 md:text-lg md:leading-9">
            {hero.tagline.split("NuRock Entertainment").map((part, i, arr) =>
              i < arr.length - 1 ? (
                <span key={i}>
                  {part}
                  <span className="uppercase text-primary">NuRock Entertainment</span>
                </span>
              ) : (
                <span key={i}>{part}</span>
              )
            )}
          </p>
        </div>
      </div>
    </section>
  );
}
