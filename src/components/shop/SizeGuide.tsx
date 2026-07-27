import { useEffect, useId, useState } from "react";
import { sizeGuide } from "../../data/shop/shopConfig";

type Props = {
  open: boolean;
  onClose: () => void;
};

export function SizeGuide({ open, onClose }: Props) {
  const titleId = useId();
  const [unit, setUnit] = useState<"in" | "cm">("in");

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  if (!open) return null;

  const rows = unit === "in" ? sizeGuide.tees.rowsIn : sizeGuide.tees.rowsCm;

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center sm:items-center" role="presentation">
      <button type="button" className="absolute inset-0 bg-black/70" aria-label="Close size guide" onClick={onClose} />
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative z-10 max-h-[90vh] w-full max-w-lg overflow-y-auto border border-white/10 bg-[#12100e] p-6 shadow-2xl sm:rounded-2xl"
      >
        <div className="mb-5 flex items-start justify-between gap-4">
          <div>
            <h2 id={titleId} className="text-xl font-black uppercase tracking-tight text-base-content">
              Size guide
            </h2>
            <p className="mt-2 text-xs leading-5 text-white/50">{sizeGuide.disclaimer}</p>
          </div>
          <button type="button" onClick={onClose} className="premium-button-ghost h-10 w-10" aria-label="Close">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <div className="mb-4 inline-flex rounded-full border border-white/10 p-1" role="group" aria-label="Unit">
          {(["in", "cm"] as const).map((u) => (
            <button
              key={u}
              type="button"
              onClick={() => setUnit(u)}
              className={
                "rounded-full px-4 py-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] " +
                (unit === u ? "bg-white text-black" : "text-white/60")
              }
            >
              {u}
            </button>
          ))}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[280px] text-left text-sm">
            <thead>
              <tr className="border-b border-white/10 text-[0.65rem] uppercase tracking-[0.2em] text-white/45">
                {sizeGuide.tees.headers.map((h) => (
                  <th key={h} className="py-3 pr-3 font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row) => (
                <tr key={row[0]} className="border-b border-white/5 text-white/80">
                  {row.map((cell) => (
                    <td key={cell} className="py-3 pr-3">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
