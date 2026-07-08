import { ArtistCard } from "../molecules/ArtistCard";
import { musicPageCopy } from "../../data/musicPageCopy";

export function ArtistSection() {
  const { title, intro, items } = musicPageCopy.artistSection;

  return (
    <section className="py-16 md:py-20">
      <span className="eyebrow-label mb-4">Featured Artists</span>
      <h2 className="mb-3 text-4xl font-black tracking-tight text-base-content md:text-5xl">
        {title}
      </h2>
      <div className="gold-rule mb-6" />
      <p className="mb-10 max-w-2xl text-base leading-8 text-base-content/66">{intro}</p>
      {items.length === 0 ? (
        <p className="text-sm text-base-content/50">
          Add artists in <code className="text-primary">src/data/musicPageCopy.ts</code> (artistSection.items): name, imageUrl, trackTitle, trackSrc.
        </p>
      ) : (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {items.map((artist) => (
            <ArtistCard key={artist.id} {...artist} />
          ))}
        </div>
      )}
    </section>
  );
}
