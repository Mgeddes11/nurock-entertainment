import { Link } from "react-router-dom";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

const PTB = "/assets/shop/pretty-things-bite";

const frames = [
  {
    title: "Fame Bite",
    family: "Pretty Things Bite",
    product: "/shop/product/fame-bite-tee",
    image: `${PTB}/fame-bite-front.jpg`,
  },
  {
    title: "After Midnight",
    family: "Pretty Things Bite",
    product: "/shop/product/after-midnight-heavyweight-tee",
    image: `${PTB}/after-midnight-front.jpg`,
  },
  {
    title: "Face Hidden. Teeth Loud.",
    family: "Pretty Things Bite",
    product: "/shop/product/face-hidden-teeth-loud-tee",
    image: `${PTB}/face-hidden-front.jpg`,
  },
  {
    title: "Smile for the Flash",
    family: "Pretty Things Bite",
    product: "/shop/product/fame-bite-tee",
    image: `${PTB}/fame-bite-back.jpg`,
  },
];

export function LookbookPage() {
  useDocumentMeta({
    title: "Lookbook — Pretty Things Bite · NRE Vol. 001",
    description: "Editorial lookbook for NRE Pretty Things Bite — Fame Bite, After Midnight, Face Hidden Teeth Loud.",
  });

  return (
    <div className="nre-shop bg-[#080706]">
      <section className="px-6 py-16 md:py-24">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-[0.7rem] uppercase tracking-[0.34em] text-primary">Lookbook</p>
          <h1 className="mt-4 text-5xl font-black uppercase tracking-tight md:text-7xl">Pretty Things Bite</h1>
          <p className="mt-5 text-white/55">NRE Vol. 001 · Edition 001 · 280GSM · Vintage Washed Black</p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl space-y-16 px-6 pb-24">
        {frames.map((frame, i) => (
          <article
            key={frame.title}
            className={"grid gap-8 md:grid-cols-2 md:items-center " + (i % 2 ? "md:[&>*:first-child]:order-2" : "")}
          >
            <div className="overflow-hidden border border-white/10">
              <img src={frame.image} alt={frame.title} className="aspect-[4/5] w-full object-cover" />
            </div>
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
