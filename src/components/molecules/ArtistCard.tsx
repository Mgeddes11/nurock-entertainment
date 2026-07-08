import { EmbeddedMP3Player } from "../organisms/EmbeddedMP3Player";
import type { ArtistEntry } from "../../data/musicPageCopy";

type Props = ArtistEntry;

export function ArtistCard({
  id,
  name,
  imageUrl,
  imageAlt,
  trackTitle,
  appleMusicEmbedUrl,
  trackSrc,
  appleMusicUrl,
  spotifyUrl,
  songList,
}: Props) {
  const hasEmbed = appleMusicEmbedUrl && appleMusicEmbedUrl.trim() !== "";

  const singleTrack = trackSrc
    ? [{ id, title: trackTitle, artist: name, src: trackSrc, imageUrl }]
    : [];

  return (
    <div className="panel-surface reveal-lift overflow-hidden rounded-[1.75rem]">
      <div className="overflow-hidden">
        <img
          src={imageUrl}
          alt={imageAlt}
          className="aspect-square w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
        />
      </div>
      <div className="p-6 md:p-7">
        <div className="mb-3 flex items-start justify-between gap-4">
          <h3 className="text-2xl font-black uppercase tracking-tight text-base-content">{name}</h3>
          <span className="rounded-full border border-white/10 bg-white/4 px-3 py-1 text-[0.65rem] font-semibold uppercase tracking-[0.22em] text-base-content/58">
            Artist
          </span>
        </div>
        <p className="mb-5 text-sm leading-7 text-base-content/62">
          {songList ? songList.join(", ") : trackTitle}
        </p>
        {hasEmbed && (
          <iframe
            allow="autoplay *; encrypted-media *;"
            frameBorder="0"
            height="450"
            style={{
              width: "100%",
              maxWidth: "660px",
              overflow: "hidden",
              borderRadius: "18px",
            }}
            src={appleMusicEmbedUrl!.trim()}
            title={`Play ${trackTitle} by ${name}`}
          />
        )}
        {!hasEmbed && trackSrc && <EmbeddedMP3Player tracks={singleTrack} className="mb-4" />}
        <div className="mt-5 flex flex-wrap items-center gap-3">
          {appleMusicUrl && (
            <a
              href={appleMusicUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button-ghost inline-flex items-center gap-2 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-base-content/76 hover:no-underline"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              {songList ? "Apple Music" : hasEmbed || trackSrc ? "Apple Music" : "Listen on Apple Music"}
            </a>
          )}
          {spotifyUrl && (
            <a
              href={spotifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="premium-button-ghost inline-flex items-center gap-2 px-4 py-2 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-base-content/76 hover:no-underline"
            >
              <span className="material-symbols-outlined text-base">open_in_new</span>
              Spotify
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
