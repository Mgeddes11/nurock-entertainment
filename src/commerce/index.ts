import { mockProvider } from "./providers/mockProvider";
import { shopifyAdapter } from "./providers/shopifyAdapter";
import { tapstitchAdapter } from "./providers/tapstitchAdapter";
import type { CommerceProvider, CommerceProviderName } from "./providers/types";

const providerName = (import.meta.env.VITE_COMMERCE_PROVIDER as CommerceProviderName) || "mock";

export function getCommerceProvider(): CommerceProvider {
  switch (providerName) {
    case "shopify":
      return shopifyAdapter;
    case "tapstitch":
      return tapstitchAdapter;
    default:
      return mockProvider;
  }
}

export type { CommerceProvider, CommerceProviderName };
