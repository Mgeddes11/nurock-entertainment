import { Link } from "react-router-dom";
import { Logo } from "../atoms/Logo";
import { siteCopy } from "../../data/siteCopy";
import { shopConfig } from "../../data/shop/shopConfig";

const shopLinks = [
  { label: "Shop", to: "/shop" },
  { label: "NRE Vol. 001", to: "/shop/collections/nre-vol-001" },
  { label: "Lookbook", to: "/shop/lookbook" },
  { label: "Size Guide", to: "/shop/faq" },
  { label: "Shipping", to: "/shop/shipping" },
  { label: "Returns", to: "/shop/returns" },
];

const legalLinks = [
  { label: "Privacy", to: "/shop/privacy" },
  { label: "Terms", to: "/shop/terms" },
  { label: "Contact", to: "/contacts" },
  { label: "FAQ", to: "/shop/faq" },
];

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
          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr_0.9fr] lg:items-start">
            <div>
              <Logo to="/" className="mb-6" />
              <p className="max-w-xl text-sm leading-7 text-base-content/66 md:text-[0.95rem]">
                {footer.tagline}
              </p>
              <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-primary">
                {shopConfig.brand.tagline}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center" href="#" aria-label="Facebook">
                  <span className="material-symbols-outlined text-[1.15rem]">facebook</span>
                </a>
                <a
                  className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center"
                  href={shopConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined text-[1.15rem]">photo_camera</span>
                </a>
                <a className="premium-button-ghost inline-flex h-11 w-11 items-center justify-center" href="#" aria-label="Music">
                  <span className="material-symbols-outlined text-[1.15rem]">music_note</span>
                </a>
              </div>
            </div>

            <div>
              <span className="eyebrow-label mb-5">NRE Apparel</span>
              <ul className="space-y-3">
                {shopLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-sm uppercase tracking-[0.18em] text-base-content/70 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="min-w-0 w-full rounded-[1.5rem] border border-white/8 bg-white/3 p-6 md:p-7">
              <span className="eyebrow-label mb-5">Contact</span>
              <a
                href={`mailto:${footer.connect.email}`}
                className="block break-all text-[0.78rem] font-semibold normal-case leading-7 tracking-normal text-base-content/82 hover:text-primary sm:text-sm sm:leading-8"
              >
                {footer.connect.email}
              </a>
              <ul className="mt-6 space-y-2">
                {legalLinks.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-xs uppercase tracking-[0.18em] text-base-content/55 hover:text-primary">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-3 border-t border-white/8 pt-6 text-xs uppercase tracking-[0.18em] text-base-content/45 md:flex-row md:items-center md:justify-between">
            <p>{footer.legal}</p>
            <p>NRE Apparel · NuRock Entertainment</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
