import { useEffect, useState } from "react";
import { getProductBySlug } from "../data/shop/products";
import type { Product } from "../types/commerce";

const KEY = "nre-recent-v1";
const MAX = 6;

export function useRecentlyViewed(currentSlug?: string) {
  const [items, setItems] = useState<Product[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      const slugs: string[] = raw ? JSON.parse(raw) : [];
      if (currentSlug) {
        const next = [currentSlug, ...slugs.filter((s) => s !== currentSlug)].slice(0, MAX);
        localStorage.setItem(KEY, JSON.stringify(next));
        setItems(
          next
            .filter((s) => s !== currentSlug)
            .map((s) => getProductBySlug(s))
            .filter(Boolean) as Product[],
        );
      } else {
        setItems(slugs.map((s) => getProductBySlug(s)).filter(Boolean) as Product[]);
      }
    } catch {
      setItems([]);
    }
  }, [currentSlug]);

  return items;
}
