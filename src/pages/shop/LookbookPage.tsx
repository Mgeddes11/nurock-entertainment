import { Link } from "react-router-dom";
import { ProductImagePlaceholder } from "../../components/shop/ProductImagePlaceholder";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

const frames = [
  { title: "Made after hours", family: "Midnight", product: "/shop/product/blackout-uniform-hoodie" },
  { title: "Transmission interrupted", family: "No Signal", product: "/shop/product/dead-air-oversized-tee" },
  { title: "Wear the session", family: "Studio", product: "/shop/product/studio-ghost-tee" },
  { title: "No rules exist", family: "Vampire", product: "/shop/product/kiss-the-noise-hoodie" },
];

export function LookbookPage() {
  useDocumentMeta({
    title: "Lookbook — NRE Vol. 001",
    description: "Editorial lookbook for NRE Vol. 001 streetwear from NuRock Entertainment.",
  });

  return (
    <div className="nre-shop bg-[#080706]">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-primary">Lookbook</p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight md:text-7xl">NRE Vol. 001</h1>
          <p className="mt-5 text-white/55">Editorial frames — replace placeholders with campaign photography.</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        {frames.map((frame, i) => (
          <article key={frame.title} className={"grid gap-8 md:grid-cols-2 md:items-center " + (i % 2 ? "md:[&>*:first-child]:order-2" : "")}>
            <ProductImagePlaceholder label={`Lookbook — ${frame.title}`} className="aspect-[4/5]" />
            <div>
              <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary">{frame.family}</p>
              <h2 className="mt-4 text-3xl font-black uppercase md:text-5xl">{frame.title}</h2>
              <Link to={frame.product} className="mt-8 inline-flex text-xs font-bold uppercase tracking-[0.24em] text-primary underline">
                Shop the look
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
