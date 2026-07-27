import type { ProductImage } from "../../types/commerce";

type Props = {
  image?: ProductImage;
  label?: string;
  className?: string;
};

export function ProductImagePlaceholder({ image, label, className = "" }: Props) {
  const text = label || image?.alt || "Campaign image placeholder";
  return (
    <div
      className={
        "nre-product-placeholder relative flex aspect-[4/5] w-full items-end overflow-hidden bg-[linear-gradient(160deg,#0a0a0a_0%,#1a1510_55%,#12100e_100%)] " +
        className
      }
      role="img"
      aria-label={text}
    >
      <div className="absolute inset-0 opacity-30" aria-hidden>
        <div className="grain-overlay absolute inset-0" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(184,138,24,0.12),transparent_45%)]" />
      </div>
      <div className="relative z-10 w-full border-t border-white/10 bg-black/55 p-4 backdrop-blur-sm">
        <p className="text-[0.62rem] font-bold uppercase tracking-[0.28em] text-primary/90">NRE</p>
        <p className="mt-2 text-xs leading-5 text-white/70">{text}</p>
      </div>
    </div>
  );
}
