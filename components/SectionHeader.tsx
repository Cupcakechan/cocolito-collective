// components/SectionHeader.tsx

type Props = {
  title: string;
  eyebrow?: string;
  /** small right-aligned catalog label, e.g. "CC · archive" */
  label?: string;
  /** id used as a scroll anchor target */
  id?: string;
};

export default function SectionHeader({ title, eyebrow, label, id }: Props) {
  return (
    <div id={id} className="scroll-mt-24">
      <div className="flex items-end justify-between gap-4">
        <div>
          {eyebrow ? (
            <p className="font-mono text-xs uppercase tracking-[0.2em] text-brand">
              {eyebrow}
            </p>
          ) : null}
          <h2 className="mt-2 font-display text-3xl font-semibold text-cream sm:text-4xl">
            {title}
          </h2>
        </div>
        {label ? (
          <span className="hidden font-mono text-xs uppercase tracking-[0.18em] text-muted sm:inline">
            {label}
          </span>
        ) : null}
      </div>
      <div className="mt-4 h-px w-full bg-paper/12" />
    </div>
  );
}
