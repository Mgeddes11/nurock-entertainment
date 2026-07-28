/**
 * Music page: Artist section.
 */
export type ArtistEntry = {
  id: string;
  name: string;
  imageUrl: string;
  imageAlt: string;
  trackTitle: string;
  /** Apple Music embed URL for on-page playback (from Share → Embed) */
  appleMusicEmbedUrl?: string;
  /** Hosted audio sample fallback (path or URL) */
  trackSrc?: string;
  /** Link to full track or artist profile on Apple Music */
  appleMusicUrl?: string;
  /** Link to track or artist on Spotify */
  spotifyUrl?: string;
  /** Song titles to display as a list (one Apple Music link goes to artist profile) */
  songList?: string[];
};

export const musicPageCopy = {
  pageTitle: "Music",
  pageIntro:
    "Original production, artist collaborations, and a catalog shaped for artists, labels, and sync.",

  artistSection: {
    eyebrow: "Selected Collaborations",
    title: "Holly NuRock × Artists",
    intro:
      "A curated glimpse into the artists, records, and creative worlds Holly NuRock has helped bring to life.",
    items: [
      {
        id: "lara-wilson",
        name: "Lara Wilson",
        imageUrl: "/assets/artists/lara-wilson.png",
        imageAlt: "Lara Wilson",
        trackTitle: "Eyes closed",
        appleMusicEmbedUrl: "",
        appleMusicUrl: "https://music.apple.com/us/artist/lara-wilson/490371957",
        spotifyUrl: "https://open.spotify.com/artist/3ecwcD0KNfwwyNHNZ9bSym",
        songList: ["Eyes Closed", "Slow", "Twist of Fate", "Trippin", "Feigning"],
      },
      {
        id: "kidd-conez-stevie-stone",
        name: "Kidd Conez ft Stevie Stone",
        imageUrl: "/assets/artists/kidd-conez-stevie-stone.png",
        imageAlt: "Kidd Conez ft Stevie Stone",
        trackTitle: "Hot Box 2",
        appleMusicEmbedUrl: "",
        appleMusicUrl: "https://music.apple.com/us/album/hot-box-2-slots-blocked-single/1804435289",
        spotifyUrl: "https://open.spotify.com/track/4R1BOp6WFRWThVAAesw5I0?si=3ebbc203c1674c18",
        songList: ["Hot Box 2 (Slots Blocked)"],
      },
      {
        id: "myint",
        name: "Myint",
        imageUrl: "/assets/artists/myint.png",
        imageAlt: "Myint",
        trackTitle: "All I See",
        appleMusicEmbedUrl: "",
        appleMusicUrl: "https://music.apple.com/us/album/all-i-see-single/1838208559",
        spotifyUrl: "https://open.spotify.com/track/0F0g1mI59Fh0giW9YTkMSa?si=3e0ca1928cf3452f",
        songList: ["All I See"],
      },
      {
        id: "holly-nurock",
        name: "Holly NuRock",
        imageUrl: "/assets/artists/holly-nurock.png",
        imageAlt: "Holly NuRock",
        trackTitle: "Phantom Lights",
        appleMusicEmbedUrl: "",
        appleMusicUrl: "https://music.apple.com/us/album/phantom-lights-single/1839340556",
        spotifyUrl: "https://open.spotify.com/track/2YwF4LFEvZcJp2Mghxjbs4?si=57127a483ae54ea7",
        songList: ["Phantom Lights", "Can't Quit You"],
      },
    ] as ArtistEntry[],
  },

  buyoutsSection: {
    eyebrow: "Catalog & Rights",
    title: "Exclusive Beat Buyouts & Music Licensing",
    intro:
      "Own production that fits your project — exclusive beats for artists and labels, plus custom licensing for film, TV, commercials, and digital campaigns.",
    cards: [
      {
        id: "beat-buyouts",
        title: "Exclusive Beat Buyouts",
        rate: "Starting @ $2,000 per beat",
        detail: "Plus back-end arrangements",
        description:
          "Full exclusive rights to NuRock instrumentals built for your record. Pricing starts at $2,000 per beat, with additional back-end arrangements based on the project.",
      },
      {
        id: "licensing",
        title: "Music Licensing",
        rate: "Per deal",
        detail: "Custom terms by project",
        description:
          "License original NuRock music for film, television, commercials, games, and digital campaigns. Every license is priced per deal to match usage, territory, and term.",
      },
    ],
    ctaLabel: "Inquire about buyouts or licensing",
    ctaHref: "/contacts",
  },
};
