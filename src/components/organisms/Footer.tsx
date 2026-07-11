import { Logo } from "../atoms/Logo";
import { siteCopy } from "../../data/siteCopy";

export function Footer() {
  const { footer } = siteCopy;

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(30,24,18,0.92),rgba(18,14,10,0.94))] py-16 md:py-20">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="page-section relative">
        <div className="panel-surface rounded-[2rem] p-8 md:p-10 lg:p-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_1fr] lg:items-start">
            <div>
              <Logo to="/" className="mb-6" />
              <p className="max-w-xl text-sm leading-7 text-base-content/66 md:text-[0.95rem]">
                {footer.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center" href="#">
                  <span className="material-symbols-outlined text-[1.15rem]">facebook</span>
                </a>
                <a
                  className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center"
                  href="https://www.instagram.com/holly_nurock/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined text-[1.15rem]">photo_camera</span>
                </a>
                <a className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center" href="#">
                  <span className="material-symbols-outlined text-[1.15rem]">music_note</span>
                </a>
              </div>
            </div>

            <div className="min-w-0 w-full rounded-[1.5rem] border border-white/8 bg-white/3 p-6 md:p-7">
              <span className="eyebrow-label mb-5">Contact</span>
              <a
                href={`mailto:${footer.connect.email}`}
                className="block break-all text-[0.78rem] font-semibold normal-case leading-7 tracking-normal text-base-content/82 hover:text-primary sm:text-sm sm:leading-8"
              >
                {footer.connect.email}
              </a>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-5 border-t border-white/8 pt-7 text-[0.7rem] uppercase tracking-[0.26em] text-base-content/40 md:flex-row md:items-center md:justify-between">
            <p>© {new Date().getFullYear()} NuRock Entertainment. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              {footer.links.map((link) => (
                <a key={link.label} href={link.href} className="hover:text-primary">
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
