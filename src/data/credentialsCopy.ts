export type Credential = {
  id: string;
  name: string;
  markSrc: string;
  caption: string;
  detail: string;
};

export const credentialsCopy = {
  eyebrow: "Credits",
  title: "Placements & Rooms",
  intro:
    "From network television and international radio to rooms that shaped modern hip-hop culture — Holly NuRock’s work has lived beyond the session.",
  items: [
    {
      id: "ae",
      name: "A&E",
      markSrc: "/assets/press/ae.svg",
      caption: "Television",
      detail: "Music placements on A&E",
    },
    {
      id: "x-factor",
      name: "X Factor",
      markSrc: "/assets/press/x-factor.svg",
      caption: "Artist development",
      detail: "Worked with artists featured on X Factor",
    },
    {
      id: "us-radio",
      name: "US Radio",
      markSrc: "/assets/press/us-radio.svg",
      caption: "Broadcast",
      detail: "Radio placements across the United States",
    },
    {
      id: "bbc-radio",
      name: "BBC Radio",
      markSrc: "/assets/press/bbc-radio.svg",
      caption: "International radio",
      detail: "Placements on BBC Radio",
    },
    {
      id: "skee-lodge",
      name: "Skee Lodge",
      markSrc: "/assets/press/skee-lodge.svg",
      caption: "Production",
      detail: "Producer at DJ Skee’s Skee Lodge",
    },
  ] as Credential[],
};
