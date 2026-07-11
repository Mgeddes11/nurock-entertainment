import { ContactForm } from "../components/organisms/ContactForm";
import { contactFormEndpoint } from "../config/hubspot";

export function ContactsPage() {
  return (
    <section className="relative overflow-hidden py-8 pb-16 sm:py-10">
      <div className="page-section">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10">
            <span className="eyebrow-label mb-4">Get In Touch</span>
            <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">Contact</h1>
            <div className="gold-rule mt-5 mb-8" />
            <p className="text-base leading-8 text-base-content/68">Get in touch with NuRock Entertainment</p>
          </div>
          <ContactForm action={contactFormEndpoint} />
        </div>
      </div>
    </section>
  );
}
