/**
 * Tapstitch adapter (stub).
 *
 * Wire credentials via server-side / build-time env — never expose secrets in the client.
 *
 * Required later:
 *   VITE_COMMERCE_PROVIDER=tapstitch
 *   TAPSTITCH_API_KEY=...          (server only)
 *   TAPSTITCH_STORE_ID=...         (server only)
 *
 * Map Tapstitch product/variant IDs into Product.tapstitchProductId
 * and Product.tapstitchVariantMappings in src/data/shop/products.ts
 * or fetch + normalize here.
 */
import { mockProvider } from "./mockProvider";
import type { CommerceProvider } from "./types";

export const tapstitchAdapter: CommerceProvider = {
  name: "tapstitch",
  listProducts: mockProvider.listProducts,
  getProductBySlug: mockProvider.getProductBySlug,
  async createCheckout() {
    return {
      ok: false,
      reason:
        "Tapstitch checkout is not configured. Set TAPSTITCH_* credentials and implement order creation here.",
    };
  },
};

/** Webhook placeholder — verify signatures server-side when fulfillment events arrive. */
export type TapstitchWebhookEvent = {
  type: "order.created" | "order.fulfilled" | "order.failed" | string;
  payload: unknown;
};
