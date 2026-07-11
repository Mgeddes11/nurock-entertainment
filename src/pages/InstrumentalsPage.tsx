import { ArtistSection } from "../components/organisms/ArtistSection";
import { musicPageCopy } from "../data/musicPageCopy";

export function InstrumentalsPage() {
  const { pageTitle } = musicPageCopy;

  const PAGE_BG =
    "https://images.unsplash.com/photo-1506157786151-b8491531f063?w=1920&q=80";

  return (
    <div className="relative overflow-hidden py-8 pb-16 sm:py-10">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${PAGE_BG})` }}
        aria-hidden
      />
      <div className="absolute inset-0 bg-base-100/62" aria-hidden />
      <div className="relative z-10 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-2 text-base-content">
            {pageTitle}
          </h1>
          <div className="h-1 w-24 bg-primary mb-16" />
          <ArtistSection />
        </div>
      </div>
    </div>
  );
}
