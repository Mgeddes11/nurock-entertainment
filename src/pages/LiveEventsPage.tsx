import { EventCard } from "../components/molecules/EventCard";
import { events } from "../data/events";

export function LiveEventsPage() {
  return (
    <section className="relative overflow-hidden py-8 pb-16 sm:py-10">
      <div className="page-section">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12">
            <span className="eyebrow-label mb-4">NuRock In The Room</span>
            <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">Live Events</h1>
            <div className="gold-rule mt-5 mb-8" />
            <p className="max-w-2xl text-base leading-8 text-base-content/66">
              Upcoming and past NuRock events. See you in the room.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
            {events.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
