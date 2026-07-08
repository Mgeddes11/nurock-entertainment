type Props = {
  icon: string;
  title: string;
  description: string;
};

export function ServiceCard({ icon, title, description }: Props) {
  return (
    <div className="panel-surface reveal-lift group rounded-[1.75rem] p-8 md:p-10">
      <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl border border-primary/20 bg-primary/10 text-primary shadow-[0_12px_30px_rgba(184,138,24,0.14)] transition-transform duration-300 group-hover:scale-105">
        <span className="material-symbols-outlined text-[1.9rem]">{icon}</span>
      </div>
      <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-base-content md:text-[1.75rem]">
        {title}
      </h3>
      <p className="text-sm leading-7 text-base-content/68 md:text-[0.98rem]">
        {description}
      </p>
    </div>
  );
}
