import Section from "./Section";
import { experience, volunteering } from "../data/profile";

export default function Journey() {
  return (
    <Section id="experience" title="Experience">
      {experience.map((x) => (
        <article key={x.company} className="rounded-2xl p-6 shadow-[inset_0_0_0_1px_var(--color-line)] md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-2">
            <div>
              <h3 className="text-xl font-semibold tracking-tight">{x.role}</h3>
              <p className="text-muted">{x.company}</p>
            </div>
            <p className="rounded-full bg-tint px-3 py-1 text-sm text-accent-deep">{x.period}</p>
          </div>
          <ul className="mt-6 space-y-3">
            {x.points.map((p) => (
              <li key={p} className="flex gap-3">
                <svg viewBox="0 0 20 20" className="mt-1 h-5 w-5 shrink-0 text-accent" fill="currentColor" aria-hidden>
                  <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4l3.3 3.3 7.3-7.3a1 1 0 0 1 1.4 0Z" clipRule="evenodd" />
                </svg>
                <span>{p}</span>
              </li>
            ))}
          </ul>
        </article>
      ))}

      <h3 className="mt-16 text-xl font-semibold tracking-tight">Volunteering</h3>
      <ol className="relative mt-6 space-y-7 border-l-2 border-accent-soft pl-7">
        {volunteering.map((v) => (
          <li key={v.event + v.date} className="relative">
            <span aria-hidden className="absolute -left-[2.15rem] top-1.5 h-3.5 w-3.5 rounded-full border-[3px] border-page bg-accent" />
            <p className="text-sm text-muted tabular-nums">{v.date}</p>
            <p className="mt-0.5 font-medium">{v.event}</p>
            <p className="text-muted">{v.role}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}
