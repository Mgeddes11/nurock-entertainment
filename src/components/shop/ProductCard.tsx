import { Link } from "react-router-dom";
import type { Product } from "../../types/commerce";
import { formatMoney } from "./formatMoney";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

type Props = {
  product: Product;
};

export function ProductCard({ product }: Props) {
  return (
    <Link
      to={`/shop/product/${product.slug}`}
      className="nre-product-card group block focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50"
    >
      <div className="relative overflow-hidden border border-white/8 bg-black/40">
        <ProductImagePlaceholder image={product.featuredImage} className="transition-transform duration-700 group-hover:scale-[1.03]" />
        {product.hoverImage ? (
          <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
            <ProductImagePlaceholder image={product.hoverImage} />
          </div>
        ) : null}
        <div className="absolute left-3 top-3 flex flex-wrap gap-2">
          {product.isNew ? (
            <span className="bg-white px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-black">New</span>
          ) : null}
          {product.isLimited ? (
            <span className="bg-primary px-2 py-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-primary-content">Limited</span>
          ) : null}
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.26em] text-white/45">{product.designFamily}</p>
        <h3 className="text-sm font-semibold uppercase tracking-[0.08em] text-base-content md:text-[0.95rem]">{product.name}</h3>
        <p className="text-sm text-primary">{formatMoney(product.price)}</p>
        <div className="flex gap-1.5 pt-1" aria-label="Available colors">
          {product.colors.map((c) => (
            <span
              key={c.id}
              title={c.name}
              className="h-3 w-3 rounded-full border border-white/25"
              style={{ backgroundColor: c.hex }}
            />
          ))}
        </div>
      </div>
    </Link>
  );
}
