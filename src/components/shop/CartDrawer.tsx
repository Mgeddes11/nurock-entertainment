import { Link } from "react-router-dom";
import { useCart } from "../../commerce/cartContext";
import { shopConfig } from "../../data/shop/shopConfig";
import { formatMoney } from "./formatMoney";
import { ProductImagePlaceholder } from "./ProductImagePlaceholder";

export function CartDrawer() {
  const { isOpen, closeCart, lines, subtotal, setQuantity, removeItem, count } = useCart();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[70]" role="presentation">
      <button type="button" className="absolute inset-0 bg-black/70" aria-label="Close cart" onClick={closeCart} />
      <aside
        className="absolute inset-y-0 right-0 flex w-full max-w-md flex-col border-l border-white/10 bg-[#0e0c0a] shadow-2xl"
        role="dialog"
        aria-modal="true"
        aria-label="Shopping cart"
      >
        <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">
          <h2 className="text-sm font-black uppercase tracking-[0.24em]">Cart ({count})</h2>
          <button type="button" onClick={closeCart} className="premium-button-ghost h-10 w-10" aria-label="Close cart">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {lines.length === 0 ? (
            <div className="py-16 text-center">
              <p className="text-sm text-white/60">Your cart is empty.</p>
              <Link to="/shop/collections/nre-vol-001" onClick={closeCart} className="mt-6 inline-flex premium-button px-5 py-3 text-[0.68rem]">
                Continue shopping
              </Link>
            </div>
          ) : (
            <ul className="space-y-5">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 border-b border-white/8 pb-5">
                  <div className="w-20 shrink-0 overflow-hidden border border-white/10">
                    <ProductImagePlaceholder image={line.image} className="aspect-square" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <Link to={`/shop/product/${line.slug}`} onClick={closeCart} className="text-sm font-semibold uppercase tracking-wide hover:text-primary">
                      {line.name}
                    </Link>
                    <p className="mt-1 text-xs text-white/50">
                      {line.colorName} / {line.size}
                    </p>
                    <p className="mt-2 text-sm text-primary">{formatMoney(line.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex items-center border border-white/15">
                        <button type="button" className="px-2 py-1 text-sm" aria-label="Decrease quantity" onClick={() => setQuantity(line.key, line.quantity - 1)}>
                          −
                        </button>
                        <span className="min-w-8 text-center text-sm">{line.quantity}</span>
                        <button type="button" className="px-2 py-1 text-sm" aria-label="Increase quantity" onClick={() => setQuantity(line.key, line.quantity + 1)}>
                          +
                        </button>
                      </div>
                      <button type="button" className="text-xs uppercase tracking-[0.18em] text-white/45 underline" onClick={() => removeItem(line.key)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {lines.length > 0 ? (
          <div className="border-t border-white/10 px-5 py-5">
            <div className="mb-2 flex justify-between text-sm">
              <span className="text-white/60">Subtotal</span>
              <span className="font-semibold text-primary">{formatMoney(subtotal)}</span>
            </div>
            <p className="mb-4 text-xs leading-5 text-white/45">{shopConfig.cartNote}</p>
            <p className="mb-4 text-xs text-white/40">
              {subtotal >= shopConfig.freeShippingThreshold
                ? "You've reached the free-shipping threshold (when shipping launches)."
                : `Free shipping threshold: ${formatMoney(shopConfig.freeShippingThreshold)} (config).`}
            </p>
            <Link to="/shop/cart" onClick={closeCart} className="premium-button mb-3 flex w-full justify-center py-4 text-[0.72rem]">
              View cart / checkout
            </Link>
            <button type="button" onClick={closeCart} className="w-full text-center text-xs uppercase tracking-[0.2em] text-white/50 underline">
              Continue shopping
            </button>
          </div>
        ) : null}
      </aside>
    </div>
  );
}
