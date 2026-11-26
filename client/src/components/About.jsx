import Section from "./Section";
import { profile, education, skills } from "../data/profile";

function Chips({ items, strong }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((s) => (
        <li
          key={s}
          className={`rounded-full px-3.5 py-1.5 text-[0.95rem] ${
            strong ? "bg-accent-soft text-accent-deep" : "bg-white text-ink shadow-[inset_0_0_0_1px_var(--color-line)]"
          }`}
        >
          {s}
        </li>
      ))}
    </ul>
  );
}

export default function About() {
  return (
    <Section id="about" title="About">
      <div className="max-w-[65ch] space-y-5 text-lg leading-relaxed">
        {profile.about.map((p, i) => (
          <p key={i} className={i === 0 ? "" : "text-muted"}>
            {p}
          </p>
        ))}
      </div>

      <div className="mt-14 grid gap-5 sm:grid-cols-2">
        {education.map((e, i) => (
          <div key={e.school} className={`rounded-2xl p-6 ${i === 0 ? "bg-tint" : "shadow-[inset_0_0_0_1px_var(--color-line)]"}`}>
            <p className="text-sm text-muted">{e.period}</p>
            <p className="mt-2 font-semibold">{e.school}</p>
            <p className="mt-1 text-muted">{e.degree}</p>
            {e.note && <p className="mt-3 text-sm font-medium text-accent">{e.note}</p>}
          </div>
        ))}
      </div>

      <div className="mt-14 space-y-8">
        <div>
          <h3 className="mb-3 font-semibold">Skills</h3>
          <Chips items={skills.technical} strong />
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Strengths</h3>
          <Chips items={skills.soft} />
        </div>
        <div>
          <h3 className="mb-3 font-semibold">Languages</h3>
          <Chips items={skills.languages.map((l) => `${l.name}, ${l.level.toLowerCase()}`)} />
        </div>
      </div>
    </Section>
  );
}
