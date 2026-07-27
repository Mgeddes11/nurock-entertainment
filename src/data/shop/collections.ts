import { designFamilies } from "./shopConfig";

export const collections = [
  {
    slug: "nre-vol-001",
    name: "NRE Vol. 001",
    tagline: "Uniforms for the creatively restless.",
    description:
      "Pretty Things Bite leads Vol. 001 — 280GSM oversized tees in vintage washed black, plus Studio, No Signal, and Midnight families.",
  },
  ...designFamilies.map((f) => ({
    slug: f.slug,
    name: f.name,
    tagline: f.name,
    description: f.description,
  })),
];

export function getCollection(slug: string) {
  return collections.find((c) => c.slug === slug);
}
