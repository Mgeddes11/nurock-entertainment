import type { CartLine, Product } from "../../types/commerce";

/**
 * Provider-agnostic commerce interface.
 * UI consumes this — never raw Tapstitch/Shopify responses.
 */
export type CommerceProviderName = "mock" | "tapstitch" | "shopify";

export type CheckoutResult =
  | { ok: true; checkoutUrl: string }
  | { ok: false; reason: string };

export interface CommerceProvider {
  name: CommerceProviderName;
  listProducts: () => Promise<Product[]>;
  getProductBySlug: (slug: string) => Promise<Product | undefined>;
  createCheckout: (lines: CartLine[]) => Promise<CheckoutResult>;
}
