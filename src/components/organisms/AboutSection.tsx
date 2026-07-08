import { siteCopy } from "../../data/siteCopy";

export function AboutSection() {
  const { about } = siteCopy;
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <div className="text-[12rem] md:text-[20rem] font-black uppercase stencil-text -rotate-12 translate-x-[-10%] translate-y-[20%]">
          UNDERGROUND
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 md:gap-20 items-center relative z-10">
        <div className="relative">
          <div className="absolute inset-0 bg-white/10 -rotate-3 rounded-lg" />
          <div className="relative z-10 w-full aspect-video bg-[#333330] rounded-lg flex items-center justify-center text-white/30">
            [ Image: Street art / studio ]
          </div>
          <div className="absolute -bottom-6 -right-6 z-20 bg-primary text-primary-content p-6 font-black uppercase text-2xl rotate-3">
            {about.established}
          </div>
        </div>
        <div>
          <h2 className="text-4xl md:text-6xl font-extrabold uppercase mb-8 leading-none">
            The <span className="text-primary italic">{about.titleAccent}</span>
          </h2>
          <p className="text-xl text-white/70 mb-6 leading-relaxed">
            {about.body1}
          </p>
          <p className="text-lg text-white/50 mb-10">{about.body2}</p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
<span className="text-4xl font-bold text-primary leading-none">
              {about.stat1.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/40 mt-1">
                {about.stat1.label}
              </span>
            </div>
            <div className="w-px h-12 bg-white/10" />
            <div className="flex flex-col">
              <span className="text-4xl font-bold text-primary leading-none">
                {about.stat2.value}
              </span>
              <span className="text-xs uppercase tracking-widest text-white/40 mt-1">
                {about.stat2.label}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
