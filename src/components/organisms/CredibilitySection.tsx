import { Link } from "react-router-dom";
import { credentialsCopy, type Credential } from "../../data/credentialsCopy";

type Props = {
  variant?: "full" | "home";
};

const markClass: Record<string, string> = {
  ae: "font-serif text-[1.65rem] font-bold tracking-[0.12em] md:text-[1.85rem]",
  "x-factor": "text-[0.95rem] font-black tracking-[0.08em] md:text-[1.05rem]",
  "us-radio": "text-[0.82rem] font-bold tracking-[0.22em] md:text-[0.88rem]",
  "bbc-radio": "text-[0.82rem] font-bold tracking-[0.2em] md:text-[0.88rem]",
  "skee-lodge": "text-[0.78rem] font-bold tracking-[0.16em] md:text-[0.84rem]",
};

export function CredibilitySection({ variant = "full" }: Props) {
  const isHome = variant === "home";
  const eyebrow = isHome ? credentialsCopy.homeEyebrow : credentialsCopy.eyebrow;
  const title = isHome ? credentialsCopy.homeTitle : credentialsCopy.title;
  const intro = isHome ? credentialsCopy.homeIntro : credentialsCopy.intro;

  return (
    <section
      className={isHome ? "relative overflow-hidden py-16 md:py-20" : "mb-16 scroll-mt-28 md:mb-20"}
      id={isHome ? "credentials" : "placements"}
      aria-labelledby="credentials-heading"
    >
      {isHome ? (
        <>
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(221,178,74,0.1),transparent_55%)]"
            aria-hidden
          />
          <div className="page-section relative z-10">
            <CredibilityInner
              eyebrow={eyebrow}
              title={title}
              intro={intro}
              headingId="credentials-heading"
              compact
              showMusicLink
            />
          </div>
        </>
      ) : (
        <div className="panel-surface rounded-[2rem] p-6 sm:p-8 md:p-10">
          <CredibilityInner
            eyebrow={eyebrow}
            title={title}
            intro={intro}
            headingId="credentials-heading"
          />
        </div>
      )}
    </section>
  );
}

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

function CredibilityInner({
  eyebrow,
  title,
  intro,
  headingId,
  compact = false,
  showMusicLink = false,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  headingId: string;
  compact?: boolean;
  showMusicLink?: boolean;
}) {
  return (
    <>
      <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
        <div className="max-w-2xl">
          <span className="eyebrow-label mb-4">{eyebrow}</span>
          <h2
            id={headingId}
            className={`lux-heading uppercase text-base-content ${
              compact ? "text-3xl md:text-4xl" : "text-3xl md:text-5xl"
            }`}
          >
            {title}
          </h2>
          <div className="gold-rule mt-5 mb-6" />
          <p className="text-base leading-8 text-base-content/72">{intro}</p>
        </div>
        {!compact ? (
          <img
            src="/logo.svg"
            alt="NuRock Entertainment"
            className="hidden h-9 w-auto shrink-0 opacity-90 md:block"
            style={{ filter: "brightness(0) invert(1)" }}
          />
        ) : null}
      </div>

      <ul className="mt-10 grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-5">
        {credentialsCopy.items.map((item) => (
          <li
            key={item.id}
            className="group flex flex-col items-center justify-between rounded-[1.25rem] border border-white/10 bg-gradient-to-b from-white/[0.05] to-black/30 px-3 py-5 text-center transition duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_18px_40px_rgba(0,0,0,0.35)] sm:px-4 sm:py-6"
          >
            <PressMark item={item} />
            <div className="mt-4">
              <p className="text-[0.62rem] font-bold uppercase tracking-[0.22em] text-primary/90">
                {item.caption}
              </p>
              <p className="mt-2 text-[0.72rem] leading-5 text-base-content/68 sm:text-xs sm:leading-5">
                {item.detail}
              </p>
            </div>
          </li>
        ))}
      </ul>

      {!compact ? (
        <ul className="mt-10 space-y-3 border-t border-white/8 pt-8">
          {credentialsCopy.items.map((item) => (
            <li
              key={`${item.id}-line`}
              className="flex flex-col gap-1 border-b border-white/5 pb-3 last:border-0 sm:flex-row sm:items-baseline sm:justify-between sm:gap-6"
            >
              <span className="text-sm font-bold uppercase tracking-[0.18em] text-base-content">
                {item.name}
              </span>
              <span className="text-sm leading-6 text-base-content/65 sm:text-right">
                {item.detail}
              </span>
            </li>
          ))}
        </ul>
      ) : null}

      {showMusicLink ? (
        <div className="mt-10">
          <Link
            to="/instrumentals#placements"
            className="inline-flex text-xs font-bold uppercase tracking-[0.24em] text-primary underline underline-offset-4"
          >
            See full music credentials
          </Link>
        </div>
      ) : null}
    </>
  );
}
