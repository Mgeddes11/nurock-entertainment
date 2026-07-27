import { Link } from "react-router-dom";
import { getCommerceProvider } from "../../commerce";
import { useCart } from "../../commerce/cartContext";
import { ProductImagePlaceholder } from "../../components/shop/ProductImagePlaceholder";
import { formatMoney } from "../../components/shop/formatMoney";
import { shopConfig } from "../../data/shop/shopConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";
import { useState } from "react";

export function CartPage() {
  const { lines, subtotal, setQuantity, removeItem, count } = useCart();
  const [checkoutMsg, setCheckoutMsg] = useState("");
  useDocumentMeta({ title: "Cart — NRE Apparel", description: "Your NRE Apparel cart." });

  const onCheckout = async () => {
    const result = await getCommerceProvider().createCheckout(lines);
    setCheckoutMsg(result.ok ? `Redirect: ${result.checkoutUrl}` : result.reason);
  };

  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-12">
      <div className="mx-auto max-w-4xl">
        <h1 className="lux-heading text-4xl uppercase md:text-5xl">Cart ({count})</h1>
        <p className="mt-3 text-sm text-white/50">{shopConfig.cartNote}</p>

        {lines.length === 0 ? (
          <div className="mt-16 border border-white/10 p-12 text-center">
            <p className="text-white/60">Your cart is empty.</p>
            <Link to="/shop/collections/nre-vol-001" className="premium-button mt-6 inline-flex px-6 py-3 text-[0.7rem]">
              Continue shopping
            </Link>
          </div>
        ) : (
          <>
            <ul className="mt-10 space-y-6">
              {lines.map((line) => (
                <li key={line.key} className="flex gap-4 border-b border-white/10 pb-6">
                  <div className="w-24 shrink-0 border border-white/10">
                    <ProductImagePlaceholder image={line.image} className="aspect-square" />
                  </div>
                  <div className="flex-1">
                    <Link to={`/shop/product/${line.slug}`} className="font-semibold uppercase tracking-wide hover:text-primary">
                      {line.name}
                    </Link>
                    <p className="mt-1 text-sm text-white/50">{line.colorName} / {line.size}</p>
                    <p className="mt-2 text-primary">{formatMoney(line.price)}</p>
                    <div className="mt-3 flex items-center gap-3">
                      <div className="inline-flex border border-white/15">
                        <button type="button" className="px-3 py-1" onClick={() => setQuantity(line.key, line.quantity - 1)} aria-label="Decrease">−</button>
                        <span className="min-w-8 text-center">{line.quantity}</span>
                        <button type="button" className="px-3 py-1" onClick={() => setQuantity(line.key, line.quantity + 1)} aria-label="Increase">+</button>
                      </div>
                      <button type="button" className="text-xs uppercase tracking-[0.18em] text-white/45 underline" onClick={() => removeItem(line.key)}>
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>

            <div className="mt-10 border border-white/10 bg-black/40 p-6">
              <div className="flex justify-between text-lg">
                <span>Subtotal</span>
                <span className="text-primary">{formatMoney(subtotal)}</span>
              </div>
              <p className="mt-3 text-xs text-white/45">Shipping calculated at checkout (when connected).</p>
              <button type="button" onClick={onCheckout} className="premium-button mt-6 w-full justify-center py-4 text-[0.74rem]">
                {shopConfig.checkoutEnabled ? "Checkout" : "Checkout (coming soon)"}
              </button>
              {checkoutMsg ? <p className="mt-3 text-sm text-white/60" role="status">{checkoutMsg}</p> : null}
              <p className="mt-3 text-xs text-white/40">{shopConfig.checkoutComingSoonMessage}</p>
              <Link to="/shop" className="mt-6 inline-block text-xs uppercase tracking-[0.2em] text-primary underline">
                Continue shopping
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
