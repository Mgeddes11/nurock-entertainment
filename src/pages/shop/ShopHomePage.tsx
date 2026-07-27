import { Link } from "react-router-dom";
import { AnnouncementBar } from "../../components/shop/AnnouncementBar";
import { FamilyCard } from "../../components/shop/FamilyCard";
import { NewsletterSignup } from "../../components/shop/NewsletterSignup";
import { ProductCard } from "../../components/shop/ProductCard";
import { ProductImagePlaceholder } from "../../components/shop/ProductImagePlaceholder";
import { designFamilies, shopConfig } from "../../data/shop/shopConfig";
import { getFeaturedProducts } from "../../data/shop/products";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function ShopHomePage() {
  const featured = getFeaturedProducts().slice(0, 6);
  useDocumentMeta({
    title: "NRE Apparel — NuRock Entertainment Streetwear",
    description: "NRE Vol. 001: premium music-inspired streetwear from NuRock Entertainment. Music. Art. Culture. Streetwear.",
  });

  return (
    <div className="nre-shop bg-[#080706] text-base-content">
      <AnnouncementBar />

      <section className="relative min-h-[78vh] overflow-hidden border-b border-white/10">
        <div className="absolute inset-0">
          <img
            src="/assets/shop/pretty-things-bite/design-board.jpg"
            alt="NRE Pretty Things Bite design board"
            className="h-full min-h-[78vh] w-full object-cover object-center"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/25" aria-hidden />
        <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:pb-24">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.34em] text-primary">{shopConfig.brand.tagline}</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-black uppercase leading-[0.92] tracking-tight text-white md:text-7xl lg:text-8xl">
            {shopConfig.hero.headline}
          </h1>
          <p className="mt-5 text-lg uppercase tracking-[0.18em] text-white/80 md:text-xl">{shopConfig.hero.subheadline}</p>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/65">{shopConfig.hero.supporting}</p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <Link to={shopConfig.hero.primaryCta.to} className="premium-button inline-flex justify-center px-8 py-4 text-[0.74rem]">
              {shopConfig.hero.primaryCta.label}
            </Link>
            <Link to={shopConfig.hero.secondaryCta.to} className="premium-button-ghost inline-flex justify-center rounded-full px-8 py-4 text-[0.74rem] font-extrabold uppercase tracking-[0.24em]">
              {shopConfig.hero.secondaryCta.label}
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between gap-6">
          <div>
            <p className="eyebrow-label mb-3">Featured drop</p>
            <h2 className="lux-heading text-3xl uppercase md:text-5xl">NRE Vol. 001</h2>
          </div>
          <Link to="/shop/collections/nre-vol-001" className="hidden text-xs font-bold uppercase tracking-[0.24em] text-primary underline sm:inline">
            View all
          </Link>
        </div>
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-black px-6 py-20 md:py-28">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-[0.7rem] font-bold uppercase tracking-[0.34em] text-primary">Manifesto</p>
          <p className="mt-8 text-2xl font-medium leading-relaxed text-white/88 md:text-4xl md:leading-[1.35]">{shopConfig.manifesto}</p>
          <p className="mt-8 text-sm uppercase tracking-[0.22em] text-white/45">{shopConfig.brand.supporting}</p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <p className="eyebrow-label mb-3">Design families</p>
        <h2 className="lux-heading mb-10 text-3xl uppercase md:text-5xl">Choose your frequency</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {designFamilies.map((f) => (
            <FamilyCard key={f.id} family={f} />
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="eyebrow-label mb-3">Ecosystem</p>
            <h2 className="lux-heading text-3xl uppercase md:text-5xl">{shopConfig.studioToStreet.heading}</h2>
            <p className="mt-6 max-w-lg text-base leading-8 text-white/65">{shopConfig.studioToStreet.copy}</p>
            <Link to="/shop/about" className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.24em] text-primary underline">
              About NRE Apparel
            </Link>
          </div>
          <ProductImagePlaceholder label="Studio-to-street editorial image placeholder" />
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <p className="eyebrow-label mb-3">Lookbook</p>
            <h2 className="lux-heading text-3xl uppercase md:text-5xl">Vol. 001 frames</h2>
          </div>
          <Link to="/shop/lookbook" className="text-xs font-bold uppercase tracking-[0.24em] text-primary underline">
            Full lookbook
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {["Made after hours", "Transmission interrupted", "Wear the session", "No rules exist"].map((caption) => (
            <figure key={caption} className="space-y-3">
              <ProductImagePlaceholder label={`Lookbook image — ${caption}`} className="aspect-[3/4]" />
              <figcaption className="text-[0.65rem] uppercase tracking-[0.22em] text-white/45">{caption}</figcaption>
            </figure>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-16 md:pb-24">
        <div className="border border-white/10 bg-black/40 p-8 md:p-12">
          <p className="eyebrow-label mb-3">Packaging</p>
          <h2 className="lux-heading text-3xl uppercase md:text-4xl">{shopConfig.packaging.heading}</h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-white/65">{shopConfig.packaging.copy}</p>
          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {shopConfig.packaging.items.map((item) => (
              <li key={item} className="border-l border-primary/40 pl-4 text-sm text-white/70">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <NewsletterSignup />
    </div>
  );
}
