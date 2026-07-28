import { Link } from "react-router-dom";
import { siteCopy } from "../../data/siteCopy";
import { shopConfig } from "../../data/shop/shopConfig";
import { useShopChrome } from "../../hooks/useShopChrome";

const shopLinks = [
  { label: "Shop", to: "/shop" },
  { label: "NRE Vol. 001", to: "/shop/collections/nre-vol-001" },
  { label: "Lookbook", to: "/shop/lookbook" },
  { label: "Size Guide", to: "/shop/faq" },
  { label: "Shipping", to: "/shop/shipping" },
  { label: "Returns", to: "/shop/returns" },
];

const legalLinksWithShop = [
  { label: "Privacy", to: "/shop/privacy" },
  { label: "Terms", to: "/shop/terms" },
  { label: "FAQ", to: "/shop/faq" },
];

export function Footer() {
  const { footer } = siteCopy;
  const showShop = useShopChrome();
  const legalLinks = showShop ? legalLinksWithShop : [];

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[linear-gradient(180deg,rgba(30,24,18,0.92),rgba(18,14,10,0.94))] py-6 md:py-8">
      <div className="absolute inset-0 opacity-70" aria-hidden>
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute left-1/2 top-0 h-40 w-40 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
      </div>

      <div className="page-section relative">
        <div className="panel-surface flex flex-col justify-between gap-6 rounded-[1.5rem] p-5 sm:gap-7 sm:p-6 md:gap-8 md:p-6">
          <div
            className={`grid gap-6 sm:gap-7 md:gap-8 lg:items-stretch ${
              showShop ? "lg:grid-cols-[1.1fr_0.9fr_0.9fr]" : "lg:grid-cols-[1.15fr_0.85fr]"
            }`}
          >
            <div className="flex min-w-0 flex-col justify-center">
              <p className="max-w-xl text-sm leading-6 text-base-content/66 md:text-[0.9rem]">
                {footer.tagline}
              </p>
              {showShop ? (
                <p className="mt-2 text-[0.65rem] font-bold uppercase tracking-[0.28em] text-primary">
                  {shopConfig.brand.tagline}
                </p>
              ) : null}
              <div className="mt-3 flex flex-wrap gap-2.5">
                <a className="premium-button-ghost inline-flex h-8 w-8 items-center justify-center" href="#" aria-label="Facebook">
                  <span className="material-symbols-outlined text-[1rem]">facebook</span>
                </a>
                <a
                  className="premium-button-ghost inline-flex h-8 w-8 items-center justify-center"
                  href={shopConfig.social.instagram}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <span className="material-symbols-outlined text-[1rem]">photo_camera</span>
                </a>
                <a className="premium-button-ghost inline-flex h-8 w-8 items-center justify-center" href="#" aria-label="Music">
                  <span className="material-symbols-outlined text-[1rem]">music_note</span>
                </a>
              </div>
            </div>

            {showShop ? (
              <div className="flex flex-col justify-center">
                <span className="eyebrow-label mb-3">NRE Apparel</span>
                <ul className="space-y-2">
                  {shopLinks.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-sm uppercase tracking-[0.18em] text-base-content/70 hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="flex min-w-0 w-full flex-col justify-center rounded-[1.25rem] border border-white/8 bg-white/3 p-4 sm:p-5">
              <span className="eyebrow-label mb-3">Contact</span>
              <a
                href={`mailto:${footer.connect.email}`}
                className="block max-w-full overflow-x-auto whitespace-nowrap text-[0.7rem] font-semibold normal-case leading-6 tracking-normal text-base-content/82 hover:text-primary sm:text-sm sm:leading-7"
              >
                {footer.connect.email}
              </a>
              {legalLinks.length > 0 ? (
                <ul className="mt-4 space-y-2">
                  {legalLinks.map((l) => (
                    <li key={l.to}>
                      <Link to={l.to} className="text-xs uppercase tracking-[0.18em] text-base-content/55 hover:text-primary">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          </div>

          <div className="flex flex-col justify-center gap-2 border-t border-white/8 pt-5 text-[0.65rem] uppercase tracking-[0.18em] text-base-content/45 sm:pt-6 sm:text-xs md:flex-row md:items-center md:justify-between">
            <p>{footer.legal}</p>
            {showShop ? <p>NRE Apparel · NuRock Entertainment</p> : <p>NuRock Entertainment</p>}
          </div>
        </div>
      </div>
    </footer>
  );
}
