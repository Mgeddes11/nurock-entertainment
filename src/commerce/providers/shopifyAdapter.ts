/**
 * Shopify Storefront adapter (stub).
 * Recommended: Shopify for cart/checkout, Tapstitch for POD fulfillment.
 *
 * Client-safe vars (Storefront API only):
 *   VITE_SHOPIFY_STORE_DOMAIN=
 *   VITE_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
 *   VITE_SHOPIFY_API_VERSION=2024-10
 *
 * Never put Admin API tokens in Vite client env.
 */
import { mockProvider } from "./mockProvider";
import type { CommerceProvider } from "./types";

export const shopifyAdapter: CommerceProvider = {
  name: "shopify",
  listProducts: mockProvider.listProducts,
  getProductBySlug: mockProvider.getProductBySlug,
  async createCheckout() {
    return {
      ok: false,
      reason:
        "Shopify Storefront checkout is not configured. Add VITE_SHOPIFY_* vars and implement cartCreate/checkoutUrl.",
    };
  },
};
