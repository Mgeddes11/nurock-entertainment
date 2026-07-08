type Props = {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  layout?: "image-left" | "image-right";
};

export function StudioFeatureCard({
  title,
  description,
  imageUrl,
  imageAlt,
  layout = "image-left",
}: Props) {
  const isReversed = layout === "image-right";

  return (
    <div
      className={`panel-surface reveal-lift grid items-center gap-8 rounded-[2rem] p-5 md:grid-cols-2 md:gap-14 md:p-7 lg:p-8 ${isReversed ? "md:grid-flow-dense" : ""}`}
    >
      <div className={isReversed ? "md:col-start-2" : ""}>
        <div className="overflow-hidden rounded-[1.6rem] border border-white/10 bg-base-200 shadow-[0_24px_60px_rgba(0,0,0,0.32)]">
          <img
            src={imageUrl}
            alt={imageAlt}
            className="aspect-[4/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
            loading="lazy"
          />
        </div>
      </div>
      <div className={isReversed ? "md:col-start-1 md:row-start-1" : ""}>
        <span className="eyebrow-label mb-5">NuRock Experience</span>
        <h2 className="mb-5 text-3xl font-black uppercase tracking-tight text-base-content md:text-4xl">
          {title}
        </h2>
        {description ? (
          <p className="max-w-xl text-base leading-8 text-base-content/72 md:text-[1.04rem]">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
