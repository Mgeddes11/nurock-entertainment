import type { Event } from "../../data/events";

type Props = {
  event: Event;
};

export function EventCard({ event }: Props) {
  return (
    <div className="panel-surface reveal-lift rounded-[1.75rem] p-6 md:p-7">
      <div className="mb-5 flex items-center justify-between gap-4">
        <span className="eyebrow-label">Live</span>
        <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-primary">
          Event
        </span>
      </div>
      <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-base-content">{event.title}</h3>
      <p className="mb-2 text-base font-medium text-base-content/72">{event.venue}</p>
      <p className="mb-6 text-sm uppercase tracking-[0.22em] text-base-content/42">{event.date}</p>
      {event.ticketUrl && (
        <div className="card-actions mt-2">
          <a
            href={event.ticketUrl}
            target="_blank"
            rel="noreferrer"
            className="premium-button inline-flex items-center justify-center px-5 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.24em]"
          >
            Tickets
          </a>
        </div>
      )}
    </div>
  );
}
