const BIO_IMAGE = "/assets/holly-bio.jpg";

export function MeetHollyPage() {
  return (
    <section className="relative overflow-hidden pt-nav-roomy pb-24">
      <div className="page-section">
        <div className="panel-surface mx-auto max-w-5xl rounded-[2rem] p-6 md:p-8 lg:p-10">
          <span className="eyebrow-label mb-4">NuRock Entertainment Founder</span>
          <h1 className="lux-heading text-5xl uppercase text-base-content md:text-6xl">Meet Holly</h1>
          <div className="gold-rule mt-5 mb-10" />

          <div className="flex flex-col items-start gap-10 md:flex-row md:gap-14 lg:gap-16">
            <div className="w-full shrink-0 md:w-[22rem]">
              <div className="overflow-hidden rounded-[1.75rem] border border-white/10 bg-base-200 shadow-[0_30px_70px_rgba(0,0,0,0.35)]">
                <img
                  src={BIO_IMAGE}
                  alt="Holly NuRock"
                  className="aspect-square w-full object-cover object-center"
                />
              </div>
            </div>

            <div className="min-w-0 flex-1">
              <h2 className="mb-6 text-3xl font-black text-base-content md:text-4xl">Holly NuRock</h2>
              <div className="space-y-5 text-base leading-8 text-base-content/82 md:text-[1.03rem]">
                <p>
                  Born and raised in Southern California, Holly NuRock comes from the heart of the Los Angeles underground hip-hop scene. That foundation shaped his sound: raw, honest, emotional, and built on feel.
                </p>
                <p>
                  Holly is more than a producer. He is a muse to the artist. His gift is helping artists unlock what already lives inside them: their voice, their story, their sonic palette, and the colors that make them different. Through music production, songwriting, mentorship, and deep creative direction, Holly helps artists tap into who they truly are and transform raw emotion into fully realized records.
                </p>
                <p>
                  Whether working with an A-list artist, an underground talent, or someone just beginning their creative journey, Holly has the ability to meet artists where they are and help pull out what they may not even know is inside them. From breaking through writer&apos;s block to giving a song, project, or album that final push it needs, he creates the space for artists to go deeper, trust their instincts, and bring their vision fully to life.
                </p>
                <p>
                  Holly produces across every genre, from Hip-Hop and Dark Trap to R&amp;B, Pop, EDM, and Cinematic records. He adapts to the artist while still bringing his own identity, taste, and energy to every track. Having worked with a wide range of artists, Holly knows how to create the kind of space that pulls the best out of every session.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
