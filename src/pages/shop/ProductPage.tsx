import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../../commerce/cartContext";
import { ProductCard } from "../../components/shop/ProductCard";
import { ProductImagePlaceholder } from "../../components/shop/ProductImagePlaceholder";
import { SizeGuide } from "../../components/shop/SizeGuide";
import { formatMoney } from "../../components/shop/formatMoney";
import { shopConfig } from "../../data/shop/shopConfig";
import { getProductBySlug, getRelatedProducts } from "../../data/shop/products";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { useRecentlyViewed } from "../../hooks/useRecentlyViewed";

export function ProductPage() {
  const { slug = "" } = useParams();
  const product = getProductBySlug(slug);
  const { addItem } = useCart();
  const recent = useRecentlyViewed(slug);
  const related = product ? getRelatedProducts(product) : [];

  const [imageIdx, setImageIdx] = useState(0);
  const [size, setSize] = useState(product?.sizes[0] ?? "");
  const [colorId, setColorId] = useState(product?.colors[0]?.id ?? "");
  const [qty, setQty] = useState(1);
  const [sizeOpen, setSizeOpen] = useState(false);
  const [added, setAdded] = useState(false);
  const [openAcc, setOpenAcc] = useState<string>("fit");

  useDocumentMeta({
    title: product ? `${product.name} — NRE Apparel` : "Product — NRE Apparel",
    description: product?.description,
  });

  const images = useMemo(() => product?.images ?? [], [product]);

  if (!product) {
    return (
      <div className="nre-shop px-6 py-24 text-center">
        <h1 className="text-2xl font-black uppercase">Product not found</h1>
        <Link to="/shop" className="mt-6 inline-flex text-primary underline">Back to shop</Link>
      </div>
    );
  }

  const onAdd = () => {
    if (!size || !colorId) return;
    addItem({ product, size, colorId, quantity: qty });
    setAdded(true);
    window.setTimeout(() => setAdded(false), 1800);
  };

  const accordion = [
    { id: "fit", title: "Fit & construction", body: product.fit + (product.weightGsm ? ` Approx. ${product.weightGsm} GSM (placeholder).` : "") },
    { id: "materials", title: "Materials", body: product.materials },
    { id: "care", title: "Care", body: product.careInstructions.join(" · ") },
    { id: "ship", title: "Shipping", body: shopConfig.shippingBlurb },
    { id: "returns", title: "Returns", body: shopConfig.returnsBlurb },
    { id: "production", title: "Production", body: `Method: print-on-demand ready via Tapstitch (pending connection). Fulfillment estimate: ${product.estimatedFulfillmentDays ?? "TBD"}.` },
  ];

  return (
    <div className="nre-shop bg-[#080706] pb-28 md:pb-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 lg:grid-cols-2 lg:gap-14 lg:py-14">
        <div>
          <div className="overflow-hidden border border-white/10">
            <ProductImagePlaceholder image={images[imageIdx] ?? product.featuredImage} />
          </div>
          <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
            {images.map((img, i) => (
              <button
                key={`${img.kind}-${i}`}
                type="button"
                onClick={() => setImageIdx(i)}
                className={"w-20 shrink-0 border " + (imageIdx === i ? "border-primary" : "border-white/10")}
                aria-label={`View ${img.kind} image`}
              >
                <ProductImagePlaceholder image={img} className="aspect-square" />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary">{product.designFamily} · {product.collection}</p>
          <h1 className="mt-3 text-3xl font-black uppercase tracking-tight md:text-5xl">{product.name}</h1>
          {product.subtitle ? <p className="mt-2 text-sm text-white/50">{product.subtitle}</p> : null}
          <p className="mt-5 text-2xl font-semibold text-primary">{formatMoney(product.price)}</p>
          <p className="mt-6 text-sm leading-7 text-white/70">{product.description}</p>

          <fieldset className="mt-8">
            <legend className="mb-3 text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/45">Color</legend>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((c) => (
                <button
                  key={c.id}
                  type="button"
                  onClick={() => setColorId(c.id)}
                  className={"flex items-center gap-2 border px-3 py-2 text-xs uppercase tracking-[0.16em] " + (colorId === c.id ? "border-primary text-white" : "border-white/15 text-white/60")}
                  aria-pressed={colorId === c.id}
                >
                  <span className="h-3 w-3 rounded-full border border-white/30" style={{ backgroundColor: c.hex }} />
                  {c.name}
                </button>
              ))}
            </div>
          </fieldset>

          <fieldset className="mt-6">
            <legend className="mb-3 flex w-full items-center justify-between text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/45">
              <span>Size</span>
              <button type="button" className="text-primary underline" onClick={() => setSizeOpen(true)}>
                Size guide
              </button>
            </legend>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => setSize(s)}
                  className={"min-w-12 border px-3 py-2 text-xs font-bold uppercase tracking-[0.16em] " + (size === s ? "border-primary bg-primary text-primary-content" : "border-white/15 text-white/70")}
                  aria-pressed={size === s}
                >
                  {s}
                </button>
              ))}
            </div>
          </fieldset>

          <div className="mt-6 flex items-center gap-4">
            <label className="text-[0.65rem] font-bold uppercase tracking-[0.22em] text-white/45" htmlFor="qty">Qty</label>
            <div className="inline-flex items-center border border-white/15">
              <button type="button" className="px-3 py-2" aria-label="Decrease" onClick={() => setQty((q) => Math.max(1, q - 1))}>−</button>
              <input id="qty" className="w-12 bg-transparent text-center" value={qty} readOnly />
              <button type="button" className="px-3 py-2" aria-label="Increase" onClick={() => setQty((q) => q + 1)}>+</button>
            </div>
          </div>

          <button type="button" onClick={onAdd} className="premium-button mt-8 hidden w-full justify-center py-4 text-[0.74rem] md:inline-flex">
            {added ? "Added" : "Add to cart"}
          </button>
          <p className="mt-3 hidden text-xs text-white/40 md:block">{shopConfig.checkoutComingSoonMessage}</p>

          <div className="mt-10 divide-y divide-white/10 border-y border-white/10">
            {accordion.map((item) => (
              <div key={item.id}>
                <button
                  type="button"
                  className="flex w-full items-center justify-between py-4 text-left text-sm font-bold uppercase tracking-[0.18em]"
                  aria-expanded={openAcc === item.id}
                  onClick={() => setOpenAcc((v) => (v === item.id ? "" : item.id))}
                >
                  {item.title}
                  <span className="material-symbols-outlined text-base">{openAcc === item.id ? "remove" : "add"}</span>
                </button>
                {openAcc === item.id ? <p className="pb-4 text-sm leading-7 text-white/60">{item.body}</p> : null}
              </div>
            ))}
          </div>
        </div>
      </div>

      {related.length ? (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="lux-heading mb-8 text-2xl uppercase md:text-3xl">Related</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}

      {recent.length ? (
        <section className="mx-auto max-w-7xl px-6 pb-16">
          <h2 className="lux-heading mb-8 text-2xl uppercase md:text-3xl">Recently viewed</h2>
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            {recent.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      ) : null}

      {/* Sticky mobile ATC */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 bg-[#0e0c0a]/95 p-3 backdrop-blur md:hidden" style={{ paddingBottom: "calc(0.75rem + env(safe-area-inset-bottom, 0px))" }}>
        <button type="button" onClick={onAdd} className="premium-button w-full justify-center py-4 text-[0.72rem]">
          {added ? "Added" : `Add to cart · ${formatMoney(product.price)}`}
        </button>
      </div>

      <SizeGuide open={sizeOpen} onClose={() => setSizeOpen(false)} />
    </div>
  );
}
