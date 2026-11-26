// Résumé-style row: section name on the left, content on the right.
// tone: "plain" (default), "tint" (soft teal band) or "dark" (ink band)
const TONES = {
  plain: "border-t border-line",
  tint: "bg-tint",
  dark: "bg-ink text-white",
};

export default function Section({ id, title, intro, tone = "plain", children }) {
  return (
    <section id={id} className={`py-20 md:py-28 ${TONES[tone]}`}>
      <div className="mx-auto grid max-w-5xl gap-8 px-6 md:grid-cols-[13rem_1fr] md:gap-12 md:px-10">
        <div className="md:sticky md:top-24 md:self-start">
          <h2 className="flex items-center gap-3 text-lg font-semibold tracking-tight">
            <span aria-hidden className={`h-2 w-2 rounded-full ${tone === "dark" ? "bg-gold" : "bg-accent"}`} />
            {title}
          </h2>
          {intro && <p className={`mt-3 text-[0.95rem] ${tone === "dark" ? "text-white/60" : "text-muted"}`}>{intro}</p>}
        </div>
        <div className="min-w-0">{children}</div>
      </div>
    </section>
  );
}
