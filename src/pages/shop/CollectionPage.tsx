import { useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ProductCard } from "../../components/shop/ProductCard";
import { getCollection } from "../../data/shop/collections";
import { products } from "../../data/shop/products";
import type { DesignFamily, Product } from "../../types/commerce";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

type SortKey = "featured" | "newest" | "price-asc" | "price-desc";

const families: DesignFamily[] = ["vampire", "studio", "no-signal", "midnight"];
const allSizes = ["S", "M", "L", "XL", "2XL", "OS"];

export function CollectionPage() {
  const { slug = "nre-vol-001" } = useParams();
  const collection = getCollection(slug) ?? getCollection("nre-vol-001");
  const [family, setFamily] = useState<DesignFamily | "all">(
    families.includes(slug as DesignFamily) ? (slug as DesignFamily) : "all",
  );
  const [size, setSize] = useState<string>("all");
  const [color, setColor] = useState<string>("all");
  const [sort, setSort] = useState<SortKey>("featured");
  const [filtersOpen, setFiltersOpen] = useState(false);

  useDocumentMeta({
    title: `${collection?.name ?? "Collection"} — NRE Apparel`,
    description: collection?.description,
  });

  const colors = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => p.colors.forEach((c) => map.set(c.id, c.name)));
    return [...map.entries()];
  }, []);

  const filtered = useMemo(() => {
    let list: Product[] = products.filter((p) => p.status === "active");
    if (slug === "nre-vol-001") {
      list = list.filter((p) => p.collection === "nre-vol-001");
    } else if (families.includes(slug as DesignFamily)) {
      list = list.filter((p) => p.designFamily === slug);
    }
    if (family !== "all") list = list.filter((p) => p.designFamily === family);
    if (size !== "all") list = list.filter((p) => p.sizes.includes(size));
    if (color !== "all") list = list.filter((p) => p.colors.some((c) => c.id === color));
    switch (sort) {
      case "price-asc":
        list = [...list].sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list = [...list].sort((a, b) => b.price - a.price);
        break;
      case "newest":
        list = [...list].sort((a, b) => Number(b.isNew) - Number(a.isNew));
        break;
      default:
        list = [...list].sort((a, b) => Number(b.isFeatured) - Number(a.isFeatured));
    }
    return list;
  }, [slug, family, size, color, sort]);

  const Filters = (
    <div className="space-y-5">
      <div>
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/45">Family</p>
        <select className="premium-select select select-bordered w-full bg-base-100" value={family} onChange={(e) => setFamily(e.target.value as DesignFamily | "all")}>
          <option value="all">All</option>
          {families.map((f) => (
            <option key={f} value={f}>{f}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/45">Size</p>
        <select className="premium-select select select-bordered w-full bg-base-100" value={size} onChange={(e) => setSize(e.target.value)}>
          <option value="all">All</option>
          {allSizes.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/45">Color</p>
        <select className="premium-select select select-bordered w-full bg-base-100" value={color} onChange={(e) => setColor(e.target.value)}>
          <option value="all">All</option>
          {colors.map(([id, name]) => (
            <option key={id} value={id}>{name}</option>
          ))}
        </select>
      </div>
      <div>
        <p className="mb-2 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-white/45">Sort</p>
        <select className="premium-select select select-bordered w-full bg-base-100" value={sort} onChange={(e) => setSort(e.target.value as SortKey)}>
          <option value="featured">Featured</option>
          <option value="newest">Newest</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </div>
    </div>
  );

  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-10 md:py-14">
      <div className="mx-auto max-w-7xl">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary">
          <Link to="/shop" className="hover:underline">Shop</Link> / {collection?.name}
        </p>
        <h1 className="mt-4 lux-heading text-4xl uppercase md:text-6xl">{collection?.name}</h1>
        <p className="mt-4 max-w-2xl text-base leading-8 text-white/60">{collection?.description}</p>
        <p className="mt-2 text-sm text-white/40">{filtered.length} products</p>

        <div className="mt-8 flex items-center justify-between lg:hidden">
          <button type="button" className="premium-button-ghost rounded-full px-5 py-3 text-[0.68rem] font-bold uppercase tracking-[0.2em]" onClick={() => setFiltersOpen(true)}>
            Filters
          </button>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[220px_1fr]">
          <aside className="hidden lg:block">{Filters}</aside>
          <div>
            {filtered.length === 0 ? (
              <div className="border border-white/10 p-10 text-center text-white/55">No products match these filters.</div>
            ) : (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {filtersOpen ? (
        <div className="fixed inset-0 z-[70] lg:hidden">
          <button type="button" className="absolute inset-0 bg-black/70" aria-label="Close filters" onClick={() => setFiltersOpen(false)} />
          <div className="absolute inset-x-0 bottom-0 max-h-[80vh] overflow-y-auto border-t border-white/10 bg-[#12100e] p-6" role="dialog" aria-label="Filters">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-sm font-black uppercase tracking-[0.24em]">Filters</h2>
              <button type="button" onClick={() => setFiltersOpen(false)} aria-label="Close">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            {Filters}
            <button type="button" className="premium-button mt-6 w-full py-4 text-[0.7rem]" onClick={() => setFiltersOpen(false)}>
              Show {filtered.length} products
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}
