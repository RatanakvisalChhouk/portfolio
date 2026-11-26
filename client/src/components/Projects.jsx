import { useEffect, useState } from "react";
import Section from "./Section";
import { fallbackProjects } from "../data/profile";

const ICONS = {
  web: (
    <>
      <rect x="3" y="4" width="18" height="16" rx="2" />
      <path d="M3 9h18M7 6.5h.01M10 6.5h.01" />
    </>
  ),
  design: (
    <>
      <path d="M12 19l7-7 3 3-7 7-3-3Z" />
      <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5Z" />
      <path d="M2 2l7.6 7.6" />
      <circle cx="11" cy="11" r="2" />
    </>
  ),
  data: (
    <path d="M4 20V10M10 20V4M16 20v-7M22 20H2" />
  ),
};
ICONS.other = ICONS.web;

function Icon({ category, className }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      {ICONS[category] ?? ICONS.web}
    </svg>
  );
}

function Links({ p, light }) {
  if (!p.liveUrl && !p.repoUrl) return null;
  const cls = `underline decoration-2 underline-offset-[6px] ${light ? "decoration-white/40 hover:decoration-white" : "decoration-accent/40 hover:decoration-accent"}`;
  return (
    <p className="mt-5 flex gap-6 font-medium">
      {p.liveUrl && <a href={p.liveUrl} target="_blank" rel="noreferrer" className={cls} aria-label={`Visit the ${p.title.split(":")[0]} website (opens in a new tab)`}>Visit site ↗</a>}
      {p.repoUrl && <a href={p.repoUrl} target="_blank" rel="noreferrer" className={cls}>View code</a>}
    </p>
  );
}

export default function Projects() {
  // Start with local data so the section never looks empty, then swap in the API data
  const [projects, setProjects] = useState(fallbackProjects);

  useEffect(() => {
    const ctrl = new AbortController();
    fetch("/api/projects", { signal: ctrl.signal })
      .then((r) => (r.ok ? r.json() : Promise.reject(r)))
      .then((data) => data.length && setProjects(data))
      .catch(() => {});
    return () => ctrl.abort();
  }, []);

  const [featured, ...rest] = [...projects].sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0));

  return (
    <Section id="projects" title="Projects" tone="tint" intro="My capstone, plus work from my IT traineeship.">
      {featured && (
        <article className="relative overflow-hidden rounded-3xl bg-accent-deep p-8 text-white md:p-11">
          {/* "University" in Khmer, the root of the name Sakol */}
          <span
            lang="km"
            aria-hidden
            className="pointer-events-none absolute -bottom-6 -right-4 select-none font-khmer text-[7rem] leading-none text-white/[0.045] md:text-[9.5rem]"
          >
            សាកលវិទ្យាល័យ
          </span>
          <div className="relative">
            <p className="inline-flex rounded-full bg-gold px-3 py-1 text-sm font-semibold text-ink">Capstone project</p>
            <h3 className="mt-5 max-w-[24ch] text-2xl font-semibold leading-snug tracking-tight md:text-[2rem] md:leading-tight">
              {featured.title}
            </h3>
            <p className="mt-5 max-w-[60ch] text-white/80">{featured.summary}</p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {featured.tags?.map((t) => (
                <li key={t} className="rounded-full bg-white/10 px-3 py-1 text-sm text-white/90">{t}</li>
              ))}
            </ul>
            <Links p={featured} light />
          </div>
        </article>
      )}

      <div className="mt-6 grid gap-6 sm:grid-cols-2">
        {rest.map((p) => (
          <article
            key={p._id}
            className="flex flex-col rounded-3xl bg-white p-7 shadow-[0_1px_0_var(--color-line),0_12px_32px_-20px_rgba(10,77,73,.35)] transition hover:-translate-y-1 hover:shadow-[0_1px_0_var(--color-line),0_20px_40px_-20px_rgba(10,77,73,.45)]"
          >
            <span className="grid h-11 w-11 place-items-center rounded-xl bg-accent-soft text-accent">
              <Icon category={p.category} className="h-5 w-5" />
            </span>
            <h3 className="mt-5 text-lg font-semibold tracking-tight">{p.title}</h3>
            <p className="mt-2 flex-1 text-muted">{p.summary}</p>
            <ul className="mt-5 flex flex-wrap gap-2">
              {p.tags?.map((t) => (
                <li key={t} className="rounded-full bg-tint px-2.5 py-1 text-sm text-accent-deep">{t}</li>
              ))}
            </ul>
            <Links p={p} />
          </article>
        ))}
      </div>
    </Section>
  );
}
