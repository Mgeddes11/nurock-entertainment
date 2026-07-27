import { Link } from "react-router-dom";
import { FamilyCard } from "../../components/shop/FamilyCard";
import { designFamilies } from "../../data/shop/shopConfig";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function CollectionsIndexPage() {
  useDocumentMeta({
    title: "Collections — NRE Apparel",
    description: "Browse NRE Vol. 001 and design families: Vampire, Studio, No Signal, Midnight.",
  });
  return (
    <div className="nre-shop min-h-screen bg-[#080706] px-6 py-14">
      <div className="mx-auto max-w-7xl">
        <h1 className="lux-heading text-4xl uppercase md:text-6xl">Collections</h1>
        <div className="mt-10 grid gap-4">
          <Link to="/shop/collections/nre-vol-001" className="border border-white/10 bg-black/40 p-8 transition hover:border-primary/40">
            <p className="text-[0.65rem] uppercase tracking-[0.28em] text-primary">Drop</p>
            <h2 className="mt-3 text-3xl font-black uppercase">NRE Vol. 001</h2>
            <p className="mt-3 text-white/60">Uniforms for the creatively restless.</p>
          </Link>
          <div className="grid gap-4 md:grid-cols-2">
            {designFamilies.map((f) => (
              <FamilyCard key={f.id} family={f} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
