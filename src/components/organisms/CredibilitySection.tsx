import { credentialsCopy, type Credential } from "../../data/credentialsCopy";

const markClass: Record<string, string> = {
  ae: "font-serif text-[1.65rem] font-bold tracking-[0.12em] md:text-[1.85rem]",
  "x-factor": "text-[0.95rem] font-black tracking-[0.08em] md:text-[1.05rem]",
  "us-radio": "text-[0.82rem] font-bold tracking-[0.22em] md:text-[0.88rem]",
  "bbc-radio": "text-[0.82rem] font-bold tracking-[0.2em] md:text-[0.88rem]",
  "skee-lodge": "text-[0.78rem] font-bold tracking-[0.16em] md:text-[0.84rem]",
};

function PressMark({ item }: { item: Credential }) {
  return (
    <div
      className={`flex h-12 items-center justify-center text-base-content ${markClass[item.id] ?? "text-sm font-bold tracking-widest"}`}
      aria-hidden
    >
      {item.name.toUpperCase()}
    </div>
  );
}

export function CredibilitySection() {
  const { eyebrow, title, intro, items } = credentialsCopy;

  return (
    <section id="placements" className="mb-16 scroll-mt-28 md:mb-20" aria-labelledby="credentials-heading">
      <div className="panel-surface rounded-[2rem] p-6 sm:p-8 md:p-10">
        <span className="eyebrow-label mb-4">{eyebrow}</span>
        <h2 id="credentials-heading" className="lux-heading text-3xl uppercase text-base-content md:text-5xl">
          {title}
        </h2>
        <div className="gold-rule mt-5 mb-6" />
        <p className="max-w-3xl text-base leading-8 text-base-content/72">{intro}</p>

        <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex flex-col items-center rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/30 px-3 py-5 text-center sm:px-4 sm:py-6"
            >
              <PressMark item={item} />
              <p className="mt-4 text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary/90">
                {item.caption}
              </p>
              <p className="mt-2 text-[0.72rem] leading-5 text-base-content/68 sm:text-xs">
                {item.detail}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
