import { getProductBySlug, products } from "../../data/shop/products";
import type { CommerceProvider } from "./types";

export const mockProvider: CommerceProvider = {
  name: "mock",
  async listProducts() {
    return products.filter((p) => p.status === "active");
  },
  async getProductBySlug(slug) {
    return getProductBySlug(slug);
  },
  async createCheckout() {
    return {
      ok: false,
      reason: "Checkout is not connected yet. Connect Shopify Storefront API when ready.",
    };
  },
};
