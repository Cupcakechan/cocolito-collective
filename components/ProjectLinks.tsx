// components/ProjectLinks.tsx
import type { ProjectLinks as Links } from "@/lib/types";

function PlayIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M7 17 17 7M9 7h8v8" />
    </svg>
  );
}

export default function ProjectLinks({ links }: { links: Links }) {
  // Order is intentional; each renders only if its URL exists.
  const secondary = [
    { href: links.website, label: "Website" },
    { href: links.itch, label: "itch.io" },
    { href: links.github, label: "GitHub" },
    { href: links.appStore, label: "App Store" },
    { href: links.caseStudy, label: "Case study" },
  ].filter((link) => Boolean(link.href));

  return (
    <div className="flex flex-wrap items-center gap-3">
      {links.play ? (
        <a
          href={links.play}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-[4px] bg-brand px-5 py-2.5 font-medium text-espresso transition-colors hover:bg-brand-deep"
        >
          <PlayIcon />
          Play
        </a>
      ) : null}

      {secondary.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-[4px] border border-ink/25 px-4 py-2.5 font-medium text-ink transition-colors hover:border-brand hover:text-brand-deep"
        >
          {link.label}
          <ExternalIcon />
        </a>
      ))}
    </div>
  );
}
