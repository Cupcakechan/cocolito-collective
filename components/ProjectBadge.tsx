// components/ProjectBadge.tsx

type Props = {
  children: React.ReactNode;
  tone?: "default" | "status";
  /** hex color for the status dot */
  accent?: string;
};

export default function ProjectBadge({ children, tone = "default", accent }: Props) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-[3px] border border-ink/15 px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-[0.12em] text-ink/70">
      {tone === "status" && accent ? (
        <span
          aria-hidden
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: accent }}
        />
      ) : null}
      {children}
    </span>
  );
}
