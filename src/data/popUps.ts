export type PopUpLineupAct = {
  name: string;
  time: string;
};

export type PopUpEvent = {
  id: string;
  slug: string;
  title: string;
  presentedBy?: string;
  subtitle?: string;
  venue: string;
  address: string;
  /** ISO date YYYY-MM-DD for sorting */
  date: string;
  /** Display date, e.g. Sunday, November 15th */
  dateLabel: string;
  timeLabel: string;
  gatesLabel?: string;
  host?: string;
  pricing: { label: string; detail?: string }[];
  notes?: string[];
  lineup: PopUpLineupAct[];
  flyerUrl: string;
  flyerAlt: string;
  ticketUrl?: string;
  status: "upcoming" | "past";
};

export const popUpEvents: PopUpEvent[] = [
  {
    id: "reggae-sunday-2026-11-15",
    slug: "reggae-sunday-maverick-saloon",
    title: "Reggae Sunday",
    presentedBy: "Urth Smoke Experience",
    subtitle: "A Pop Up Event",
    venue: "Maverick Saloon",
    address: "3687 Sagunto Street, Santa Ynez, CA",
    date: "2026-11-15",
    dateLabel: "Sunday, November 15th",
    timeLabel: "1:30 PM – 7:30 PM",
    gatesLabel: "Gates open 1:00 PM",
    host: "Hosted by Kidd Conez",
    pricing: [
      { label: "$30 pre-sale", detail: "Plus taxes and fees" },
      { label: "$40 at the door", detail: "Plus taxes and fees" },
    ],
    notes: ["Local merchants in the parking lot", "Full bar and menu available"],
    lineup: [
      { name: "DJ Davey D", time: "1:30 · 3:30 · 5:30" },
      { name: "Resination", time: "2:00 – 3:30" },
      { name: "Jah Ollin", time: "4:00 – 5:30" },
      { name: "True Zion", time: "6:00 – 7:30" },
    ],
    flyerUrl: "/assets/events/reggae-sunday-nov-15.jpg",
    flyerAlt: "Reggae Sunday flyer — Urth Smoke Experience at Maverick Saloon, November 15",
    status: "upcoming",
  },
];

export function getUpcomingPopUps(): PopUpEvent[] {
  const today = new Date().toISOString().slice(0, 10);
  return popUpEvents
    .filter((e) => e.status === "upcoming" && e.date >= today)
    .sort((a, b) => a.date.localeCompare(b.date));
}

export function getPastPopUps(): PopUpEvent[] {
  const today = new Date().toISOString().slice(0, 10);
  return popUpEvents
    .filter((e) => e.status === "past" || e.date < today)
    .sort((a, b) => b.date.localeCompare(a.date));
}
