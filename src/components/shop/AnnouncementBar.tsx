import { shopConfig } from "../../data/shop/shopConfig";

export function AnnouncementBar() {
  return (
    <div className="border-b border-white/10 bg-black px-4 py-2 text-center">
      <p className="text-[0.65rem] font-bold uppercase tracking-[0.32em] text-white/85">{shopConfig.announcement}</p>
    </div>
  );
}
