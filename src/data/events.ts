export type Event = {
  id: string;
  title: string;
  venue: string;
  date: string;
  ticketUrl?: string;
};

export const events: Event[] = [
  {
    id: "1",
    title: "NuRock Live Night",
    venue: "Soundwave Lounge, NY",
    date: "2025-03-15",
    ticketUrl: "https://example.com/tickets",
  },
  {
    id: "2",
    title: "Producer Showcase",
    venue: "The Basement, Brooklyn",
    date: "2025-04-01",
    ticketUrl: "https://example.com/tickets",
  },
];
