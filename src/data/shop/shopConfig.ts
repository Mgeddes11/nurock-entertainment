export const shopConfig = {
  brand: {
    primary: "NRE",
    expanded: "NuRock Entertainment",
    storeLabel: "NRE Apparel",
    tagline: "Music. Art. Culture. Streetwear.",
    supporting:
      "Designed by artists, producers, and creators—not by a traditional fashion company.",
  },
  announcement: "NRE VOL. 001 — LIMITED FIRST RELEASE",
  freeShippingThreshold: 150,
  currency: "USD" as const,
  hero: {
    headline: "NRE VOL. 001",
    subheadline: "Uniforms for the creatively restless.",
    supporting: "Born inside the studio. Built for everywhere after midnight.",
    primaryCta: { label: "Shop the collection", to: "/shop/collections/nre-vol-001" },
    secondaryCta: { label: "View lookbook", to: "/shop/lookbook" },
  },
  manifesto:
    "NRE was built in studios, late-night sessions, unfinished songs, broken rules, and the moments when artists finally discover who they are. These pieces are an extension of that world.",
  studioToStreet: {
    heading: "From the session to the street",
    copy: "NRE Apparel translates the energy of independent music, production, and creative culture into limited garments designed to live beyond the studio.",
  },
  newsletter: {
    heading: "Enter the inner circle",
    copy: "Get early access to drops, private music, studio content, and limited collaborations.",
    consent: "By joining, you agree to receive NRE updates. Unsubscribe anytime.",
  },
  packaging: {
    heading: "The package is part of the drop",
    copy: "Every order is designed to feel like an artifact from the NRE universe—not a generic shipment from a print-on-demand warehouse.",
    items: [
      "Black recyclable poly mailer",
      "Matte tissue paper",
      "Sticker pack",
      "Thank-you card",
      "QR unlock (coming soon)",
      "Access to exclusive digital content (coming soon)",
    ],
  },
  cartNote: "Produced specifically for your order. Please verify your size before checkout.",
  shippingBlurb:
    "Print-on-demand production typically begins after your order is placed. Fulfillment times vary by garment and destination. Final windows will be confirmed against Tapstitch + checkout provider.",
  returnsBlurb:
    "Because pieces are produced to order, returns for sizing may be limited. Defective or incorrect items require photo documentation. Final policy requires legal review before launch.",
  social: {
    instagram: "https://www.instagram.com/holly_nurock/",
  },
  checkoutEnabled: false,
  checkoutComingSoonMessage: "Checkout connects next via Shopify + Tapstitch. Your cart is saved locally.",
} as const;

export const designFamilies = [
  {
    id: "vampire" as const,
    name: "Vampire",
    slug: "vampire",
    description: "Minimal lips, bite marks, and late-night provocation—kept sophisticated.",
  },
  {
    id: "studio" as const,
    name: "Studio",
    slug: "studio",
    description: "Waveforms, cables, meters, and session language from the booth.",
  },
  {
    id: "no-signal" as const,
    name: "No Signal",
    slug: "no-signal",
    description: "Static, glitch, and interrupted transmission—editorial monochrome.",
  },
  {
    id: "midnight" as const,
    name: "Midnight",
    slug: "midnight",
    description: "Black-on-black tonal embroidery and understated construction.",
  },
];

export const sizeGuide = {
  disclaimer:
    "Placeholder measurements — confirm against final Tapstitch blank specs before launch.",
  units: ["in", "cm"] as const,
  tees: {
    headers: ["Size", "Chest", "Length", "Sleeve"],
    rowsIn: [
      ["S", "40", "28", "8.5"],
      ["M", "42", "29", "8.75"],
      ["L", "44", "30", "9"],
      ["XL", "46", "31", "9.25"],
      ["2XL", "48", "32", "9.5"],
    ],
    rowsCm: [
      ["S", "102", "71", "22"],
      ["M", "107", "74", "22"],
      ["L", "112", "76", "23"],
      ["XL", "117", "79", "23"],
      ["2XL", "122", "81", "24"],
    ],
  },
};
