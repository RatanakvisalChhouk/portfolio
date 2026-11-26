import { profile } from "../data/profile";

function Portrait({ className = "" }) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        srcSet="/images/ratanakvisal-480.webp 480w, /images/ratanakvisal-796.webp 796w"
        sizes="(min-width: 768px) 480px, 80vw"
      />
      <img
        src="/images/ratanakvisal-796.jpg"
        srcSet="/images/ratanakvisal-480.jpg 480w, /images/ratanakvisal-796.jpg 796w"
        sizes="(min-width: 768px) 480px, 80vw"
        width="796"
        height="1024"
        alt={`Portrait of ${profile.name}`}
        fetchPriority="high"
        // multiply turns the white studio background into the panel's soft teal
        className="absolute left-1/2 top-8 w-[125%] max-w-none -translate-x-1/2 mix-blend-multiply"
      />
    </picture>
  );
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      {/* Soft background wash behind the photo side */}
      <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[40%] bg-tint md:block" />

      <div className="relative mx-auto grid max-w-5xl items-center gap-12 px-6 pb-20 pt-28 md:grid-cols-[1fr_22rem] md:px-10 md:pb-28 md:pt-36 lg:grid-cols-[1fr_24rem]">
        <div className="hero-in max-w-2xl">
          <p className="inline-flex items-center gap-2 rounded-full bg-white px-3.5 py-1.5 text-sm font-medium shadow-[0_0_0_1px_var(--color-line)]">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-50 motion-reduce:hidden" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for an internship
          </p>
          <p lang="km" className="mt-6 font-khmer text-6xl leading-[1.35] text-accent md:text-8xl">
            សួស្តី
          </p>
          <h1 className="mt-3 text-3xl font-semibold leading-tight tracking-tight md:text-5xl md:leading-[1.1]">
            I'm Ratanakvisal, a recent information systems graduate in Phnom Penh.
          </h1>
          <p className="mt-6 text-lg text-muted md:text-xl md:leading-relaxed">{profile.tagline}</p>
          <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-4">
            <a
              href="#contact"
              className="rounded-full bg-accent px-7 py-3.5 font-medium text-white shadow-[0_8px_24px_-8px_rgba(15,110,104,.55)] transition hover:-translate-y-0.5 hover:bg-accent-deep"
            >
              Contact me
            </a>
            <a
              href="#projects"
              className="rounded-full bg-white px-6 py-3.5 font-medium shadow-[inset_0_0_0_1.5px_var(--color-line)] transition hover:shadow-[inset_0_0_0_1.5px_var(--color-ink)]"
            >
              View projects
            </a>
            {profile.links.resume && (
              <a href={profile.links.resume} download className="px-2 font-medium underline decoration-line decoration-2 underline-offset-[6px] hover:decoration-accent">
                Download CV
              </a>
            )}
          </div>
        </div>

        <div className="photo-in relative order-first mx-auto mb-4 w-60 sm:w-72 md:order-none md:mb-0 md:w-full">
          <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] bg-gradient-to-b from-accent-soft to-[#d3e7e2] md:aspect-[4/5.4]">
            <Portrait className="relative block h-full w-full" />
          </div>
          {/* Degree card overlapping the photo */}
          <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-2xl bg-white p-2.5 pr-4 shadow-[0_12px_32px_-12px_rgba(27,31,36,.3)] md:-left-10 md:translate-x-0 md:p-3.5 md:pr-5">
            <div className="flex items-center gap-3">
              <span className="grid h-9 w-9 md:h-10 md:w-10 shrink-0 place-items-center rounded-xl bg-gold/20 text-[#8a5d0c]">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
                  <path d="M22 10 12 5 2 10l10 5 10-5Z" />
                  <path d="M6 12v5c3 2 9 2 12 0v-5" />
                </svg>
              </span>
              <div className="leading-tight">
                <p className="text-sm font-semibold md:text-[0.95rem]">B.Sc. Information Systems</p>
                <p className="text-xs text-muted md:text-sm">Paragon Int'l University, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
