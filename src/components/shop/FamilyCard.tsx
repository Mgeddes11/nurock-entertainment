import { Link } from "react-router-dom";
import type { designFamilies } from "../../data/shop/shopConfig";

type Family = (typeof designFamilies)[number];

export function FamilyCard({ family }: { family: Family }) {
  return (
    <Link
      to={`/shop/collections/${family.slug}`}
      className="group relative block min-h-[280px] overflow-hidden border border-white/10 bg-[#0a0908] p-6 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 md:min-h-[340px]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(185,34,34,0.18),transparent_40%)] opacity-70 transition-opacity group-hover:opacity-100" aria-hidden />
      <div className="grain-overlay absolute inset-0 opacity-40" aria-hidden />
      <div className="relative z-10 flex h-full flex-col justify-end">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.3em] text-primary">Family</p>
        <h3 className="mt-3 text-3xl font-black uppercase tracking-tight text-white md:text-4xl">{family.name}</h3>
        <p className="mt-3 max-w-sm text-sm leading-6 text-white/60">{family.description}</p>
      </div>
    </Link>
  );
}
