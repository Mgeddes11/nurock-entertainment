import { Link } from "react-router-dom";
import { shopConfig } from "../../data/shop/shopConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function AboutApparelPage() {
  useDocumentMeta({
    title: "About NRE Apparel — NuRock Entertainment",
    description: "NRE Apparel is the streetwear division of NuRock Entertainment — music, art, culture, and independent expression.",
  });

  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-16 md:py-24">
      <div className="mx-auto max-w-3xl">
        <p className="text-[0.7rem] uppercase tracking-[0.34em] text-primary">{shopConfig.brand.storeLabel}</p>
        <h1 className="mt-4 text-4xl font-black uppercase tracking-tight md:text-6xl">About NRE Apparel</h1>
        <div className="mt-10 space-y-6 text-base leading-8 text-white/70 md:text-[1.05rem]">
          <p>
            NRE began as a music and creative-development company. Apparel emerged naturally from the same environment: recording sessions, artist identity, visual experimentation, and the belief that creative people should not have to separate what they make from how they live.
          </p>
          <p>
            These garments are designed as an extension of NRE’s music, artwork, and culture — wearable artifacts from late nights, unfinished songs, and the discipline of building something original.
          </p>
          <p className="text-white/90">{shopConfig.brand.tagline}</p>
          <p>{shopConfig.brand.supporting}</p>
        </div>
        <Link to="/shop/collections/nre-vol-001" className="premium-button mt-12 inline-flex px-8 py-4 text-[0.74rem]">
          Shop Vol. 001
        </Link>
      </div>
    </div>
  );
}
