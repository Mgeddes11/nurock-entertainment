import type { PopUpEvent } from "../../data/popUps";

type Props = {
  event: PopUpEvent;
  featured?: boolean;
};

export function PopUpEventCard({ event, featured = false }: Props) {
  return (
    <article
      className={`panel-surface overflow-hidden rounded-[1.75rem] ${
        featured ? "md:grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]" : ""
      }`}
    >
      <div className={`bg-black/40 ${featured ? "" : "aspect-[3/4] max-h-[28rem]"}`}>
        <img
          src={event.flyerUrl}
          alt={event.flyerAlt}
          className={`h-full w-full object-cover object-top ${featured ? "md:min-h-full" : ""}`}
        />
      </div>

      <div className="flex flex-col p-6 sm:p-8 md:p-9">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className="eyebrow-label mb-0">Pop Up</span>
          {event.presentedBy ? (
            <span className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-base-content/50">
              {event.presentedBy}
            </span>
          ) : null}
        </div>

        <h2 className="lux-heading text-3xl uppercase text-base-content md:text-4xl">{event.title}</h2>
        {event.subtitle ? (
          <p className="mt-2 text-sm font-bold uppercase tracking-[0.24em] text-primary">{event.subtitle}</p>
        ) : null}

        <div className="gold-rule mt-5 mb-6" />

        <dl className="space-y-3 text-sm leading-6 text-base-content/75">
          <div>
            <dt className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-base-content/45">When</dt>
            <dd className="mt-1 font-medium text-base-content/88">
              {event.dateLabel}
              <span className="block text-base-content/70">{event.timeLabel}</span>
              {event.gatesLabel ? <span className="block text-base-content/55">{event.gatesLabel}</span> : null}
            </dd>
          </div>
          <div>
            <dt className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-base-content/45">Where</dt>
            <dd className="mt-1 font-medium text-base-content/88">
              {event.venue}
              <span className="block text-base-content/70">{event.address}</span>
            </dd>
          </div>
          {event.host ? (
            <div>
              <dt className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-base-content/45">Host</dt>
              <dd className="mt-1 font-medium text-base-content/88">{event.host}</dd>
            </div>
          ) : null}
        </dl>

        {event.lineup.length > 0 ? (
          <div className="mt-7">
            <p className="mb-3 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary">Lineup</p>
            <ul className="space-y-2">
              {event.lineup.map((act) => (
                <li
                  key={`${act.name}-${act.time}`}
                  className="flex flex-wrap items-baseline justify-between gap-2 border-b border-white/6 pb-2 text-sm last:border-0"
                >
                  <span className="font-bold uppercase tracking-wide text-base-content">{act.name}</span>
                  <span className="text-xs uppercase tracking-[0.16em] text-base-content/50">{act.time}</span>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        {event.pricing.length > 0 ? (
          <div className="mt-7 grid gap-3 sm:grid-cols-2">
            {event.pricing.map((p) => (
              <div key={p.label} className="rounded-[1rem] border border-primary/20 bg-primary/8 px-4 py-3">
                <p className="text-base font-black uppercase tracking-tight text-base-content">{p.label}</p>
                {p.detail ? <p className="mt-1 text-xs text-base-content/55">{p.detail}</p> : null}
              </div>
            ))}
          </div>
        ) : null}

        {event.notes && event.notes.length > 0 ? (
          <ul className="mt-6 space-y-1.5 text-sm text-base-content/60">
            {event.notes.map((note) => (
              <li key={note}>· {note}</li>
            ))}
          </ul>
        ) : null}

        <div className="mt-8 flex flex-wrap gap-3">
          {event.ticketUrl ? (
            <a
              href={event.ticketUrl}
              target="_blank"
              rel="noreferrer"
              className="premium-button inline-flex px-6 py-3 text-[0.7rem]"
            >
              Get tickets
            </a>
          ) : (
            <a href="/contacts" className="premium-button inline-flex px-6 py-3 text-[0.7rem]">
              Inquire about tickets
            </a>
          )}
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(`${event.venue}, ${event.address}`)}`}
            target="_blank"
            rel="noreferrer"
            className="premium-button-ghost inline-flex rounded-full px-6 py-3 text-[0.7rem] font-extrabold uppercase tracking-[0.22em]"
          >
            Directions
          </a>
        </div>
      </div>
    </article>
  );
}
