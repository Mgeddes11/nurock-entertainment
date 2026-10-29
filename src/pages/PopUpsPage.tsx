import { PopUpEventCard } from "../components/molecules/PopUpEventCard";
import { getPastPopUps, getUpcomingPopUps } from "../data/popUps";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function PopUpsPage() {
  const upcoming = getUpcomingPopUps();
  const past = getPastPopUps();

  useDocumentMeta({
    title: "Pop Ups — NuRock Entertainment",
    description:
      "Upcoming NuRock pop-up events, shows, and nights out — including Reggae Sunday at Maverick Saloon.",
  });

  return (
    <section className="relative overflow-hidden py-8 pb-16 sm:py-10">
      <div className="page-section">
        <div className="mx-auto max-w-6xl">
          <header className="mb-12 md:mb-14">
            <span className="eyebrow-label mb-4">NuRock Out In The Culture</span>
            <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">Pop Ups</h1>
            <div className="gold-rule mt-5 mb-6" />
            <p className="max-w-2xl text-base leading-8 text-base-content/66">
              Live nights, pop-up events, and culture in the room. Check back here for the next drop.
            </p>
          </header>

          <div className="space-y-10">
            {upcoming.length === 0 ? (
              <div className="panel-surface rounded-[1.75rem] p-8 text-center md:p-10">
                <p className="text-sm uppercase tracking-[0.22em] text-base-content/50">No upcoming pop ups yet</p>
                <p className="mt-3 text-base text-base-content/70">The next one will land here first.</p>
              </div>
            ) : (
              upcoming.map((event, i) => (
                <PopUpEventCard key={event.id} event={event} featured={i === 0} />
              ))
            )}
          </div>

          {past.length > 0 ? (
            <div className="mt-16 md:mt-20">
              <h2 className="lux-heading mb-6 text-3xl uppercase text-base-content md:text-4xl">Past Pop Ups</h2>
              <div className="gold-rule mb-8" />
              <div className="grid gap-6 md:grid-cols-2">
                {past.map((event) => (
                  <PopUpEventCard key={event.id} event={event} />
                ))}
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
}
