import { credentialsCopy } from "../../data/credentialsCopy";

export function CredibilitySection() {
  const { eyebrow, items } = credentialsCopy;
  const tape = [...items, ...items];

  return (
    <section
      id="placements"
      className="mb-10 scroll-mt-28 md:mb-12"
      aria-label={eyebrow}
    >
      <div className="overflow-hidden rounded-full border border-white/10 bg-black/35 py-2.5 pl-4 pr-0 sm:pl-5">
        <div className="flex items-center gap-4">
          <span className="shrink-0 text-[0.58rem] font-bold uppercase tracking-[0.28em] text-primary">
            {eyebrow}
          </span>
          <span className="hidden h-3 w-px shrink-0 bg-white/15 sm:block" aria-hidden />
          <div
            className="min-w-0 flex-1 overflow-hidden"
            style={{
              maskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
              WebkitMaskImage: "linear-gradient(90deg, transparent, black 6%, black 94%, transparent)",
            }}
          >
            <ul className="credentials-ticker flex w-max items-center gap-0" aria-hidden>
              {tape.map((item, i) => (
                <li
                  key={`${item.id}-${i}`}
                  className="flex items-center gap-3 px-4 text-[0.7rem] font-bold uppercase tracking-[0.2em] text-base-content/80 sm:text-[0.74rem]"
                >
                  <span>{item.name}</span>
                  <span className="text-primary/70" aria-hidden>
                    ·
                  </span>
                </li>
              ))}
            </ul>
            <ul className="sr-only">
              {items.map((item) => (
                <li key={item.id}>
                  {item.name}: {item.detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
