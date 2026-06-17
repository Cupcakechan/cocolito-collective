// components/AboutPreview.tsx
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export default function AboutPreview() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <SectionHeader
        id="about"
        eyebrow="{ about }"
        title="About the studio"
        label="CC · studio"
      />

      <div className="mt-6 max-w-2xl">
        <p className="text-lg leading-relaxed text-peach">
          Daniel Dilena builds small games, useful apps, and digital experiments
          under Cocolito Collective. The work blends practical tools, retro game
          inspiration, cozy visual design, and a hands-on, still-learning
          approach &mdash; made because they&apos;re worth making, not to chase a
          trend.
        </p>

        <Link
          href="/about"
          className="mt-6 inline-flex items-center gap-1 font-medium text-brand transition-colors hover:text-brand-deep"
        >
          More about Daniel
          <span aria-hidden>→</span>
        </Link>
      </div>
    </section>
  );
}
