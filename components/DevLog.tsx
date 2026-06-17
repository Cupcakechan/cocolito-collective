// components/DevLog.tsx
import type { DevlogEntry } from "@/lib/types";

export default function DevLog({ entries }: { entries: DevlogEntry[] }) {
  // Newest first. "YYYY-MM-DD" sorts correctly as plain strings.
  const sorted = [...entries].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="mt-14">
      <div className="flex items-end justify-between gap-4">
        <h2 className="font-display text-2xl font-semibold text-cream sm:text-3xl">
          DevLog
        </h2>
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          newest first
        </span>
      </div>
      <div className="mt-4 h-px w-full bg-paper/12" />

      <div className="mt-6 space-y-5">
        {sorted.map((entry, index) => (
          <article
            key={`${entry.date}-${index}`}
            className="rounded-[6px] bg-paper p-6 text-ink"
          >
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              {entry.version ? (
                <span className="font-mono text-sm text-ink/50">
                  {entry.version}
                </span>
              ) : null}
              <h3 className="font-display text-xl font-semibold text-ink">
                {entry.title}
              </h3>
              <time className="font-mono text-xs uppercase tracking-[0.14em] text-ink/40">
                {entry.date}
              </time>
            </div>

            {entry.intro ? <p className="mt-3 text-ink/70">{entry.intro}</p> : null}

            <div className="mt-4 space-y-4">
              {entry.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                  {section.heading ? (
                    <h4 className="font-medium text-ink">{section.heading}</h4>
                  ) : null}
                  <ul className="mt-1.5 space-y-1 text-ink/70">
                    {section.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex gap-2">
                        <span aria-hidden className="text-ink/30">
                          –
                        </span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
