export type DesignFamily = "vampire" | "studio" | "no-signal" | "midnight";
export type ProductCategory =
  | "tee"
  | "hoodie"
  | "sweatpants"
  | "crewneck"
  | "hat"
  | "socks"
  | "accessory";
export type ProductStatus = "draft" | "active" | "sold-out" | "coming-soon";
export type CurrencyCode = "USD";

export type ProductColor = {
  id: string;
  name: string;
  hex: string;
};

export type ProductImage = {
  src: string;
  alt: string;
  kind: "front" | "back" | "detail" | "lifestyle" | "placeholder";
};

export type TapstitchVariantMapping = {
  size: string;
  colorId: string;
  tapstitchVariantId?: string;
  sku?: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  subtitle?: string;
  description: string;
  collection: string;
  designFamily: DesignFamily;
  category: ProductCategory;
  price: number;
  compareAtPrice?: number;
  currency: CurrencyCode;
  colors: ProductColor[];
  sizes: string[];
  images: ProductImage[];
  featuredImage: ProductImage;
  hoverImage?: ProductImage;
  materials: string;
  fit: string;
  weightGsm?: number;
  careInstructions: string[];
  features: string[];
  tags: string[];
  isFeatured: boolean;
  isNew: boolean;
  isLimited: boolean;
  tapstitchProductId?: string;
  tapstitchVariantMappings?: TapstitchVariantMapping[];
  /** Internal only — never render publicly */
  baseProductionCost?: number;
  estimatedFulfillmentDays?: string;
  blankGarmentName?: string;
  printLocations?: string[];
  embroideryLocations?: string[];
  sku?: string;
  status: ProductStatus;
};

export type CartLine = {
  key: string;
  productId: string;
  slug: string;
  name: string;
  price: number;
  currency: CurrencyCode;
  quantity: number;
  size: string;
  colorId: string;
  colorName: string;
  image: ProductImage;
};

export type CartState = {
  lines: CartLine[];
  updatedAt: string;
};
