import { designFamilies } from "./shopConfig";

export const collections = [
  {
    slug: "nre-vol-001",
    name: "NRE Vol. 001",
    tagline: "Uniforms for the creatively restless.",
    description:
      "The first curated drop from NRE Apparel — limited pieces spanning Vampire, Studio, No Signal, and Midnight.",
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
