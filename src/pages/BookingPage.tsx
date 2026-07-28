import { Link } from "react-router-dom";
import { BookingRequestForm } from "../components/organisms/BookingRequestForm";
import { HubSpotMeetingEmbed } from "../components/organisms/HubSpotMeetingEmbed";
import { hubspot, nurockEmail } from "../config/hubspot";
import { useDocumentMeta } from "../hooks/useDocumentMeta";

export function BookingPage() {
  const meetingUrl = hubspot.meetingUrlSessions;

  useDocumentMeta({
    title: "Book a Session — NuRock Entertainment",
    description:
      "Book a NuRock studio session or Academy lesson. Choose a time on the calendar or request a booking by email.",
  });

  return (
    <div className="py-8 pb-16 sm:py-10">
      <section className="page-section">
        <div className="panel-surface mx-auto max-w-5xl overflow-hidden rounded-[2rem] p-5 sm:p-7 md:p-8">
          <span className="eyebrow-label mb-4">Booking</span>
          <h1 className="lux-heading text-4xl uppercase text-base-content md:text-5xl">
            Book a session
          </h1>
          <div className="gold-rule mt-5 mb-6" />
          <p className="mb-8 max-w-2xl text-base leading-7 text-base-content/70">
            Reserve Studio time or an Academy lesson. Pick a slot below, or send a request if you prefer email.
          </p>

          <div className="mb-8 flex flex-wrap gap-3 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-base-content/55">
            <Link to="/studio-sessions" className="rounded-full border border-white/10 px-4 py-2 hover:border-primary/40 hover:text-primary">
              Studio details
            </Link>
            <Link to="/artist-development" className="rounded-full border border-white/10 px-4 py-2 hover:border-primary/40 hover:text-primary">
              Academy details
            </Link>
          </div>

          <HubSpotMeetingEmbed meetingUrl={meetingUrl} />
        </div>
      </section>

      <section className="page-section mt-10 md:mt-12">
        <div className="panel-surface mx-auto max-w-3xl rounded-[2rem] p-5 sm:p-7 md:p-8">
          <span className="eyebrow-label mb-4">Or request by email</span>
          <h2 className="lux-heading mb-3 text-2xl uppercase text-base-content md:text-3xl">
            Can’t find a time?
          </h2>
          <p className="mb-6 text-sm leading-7 text-base-content/65">
            Send a booking request to{" "}
            <span className="text-primary">{nurockEmail}</span> and Holly will follow up.
          </p>
          <BookingRequestForm />
        </div>
      </section>
    </div>
  );
}
