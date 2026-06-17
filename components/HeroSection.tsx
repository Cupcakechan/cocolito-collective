// components/HeroSection.tsx
import Link from "next/link";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-12">
      {/* text block (wider, left) */}
      <div className="md:col-span-7">
        <p className="font-mono text-xs uppercase tracking-[0.22em] text-brand">
          {"{ studio · by Daniel Dilena }"}
        </p>

        <h1 className="mt-5 font-display text-4xl font-semibold leading-[1.05] text-cream sm:text-5xl lg:text-6xl">
          Small games.
          <br />
          Useful apps.
          <br />
          Built with care.
        </h1>

        <p className="mt-6 max-w-md text-lg leading-relaxed text-peach">
          Cocolito Collective is a small archive of games, apps, and digital
          experiments — built slowly, by hand, one project at a time.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/#shelf"
            className="rounded-[4px] bg-brand px-5 py-2.5 font-medium text-espresso transition-colors hover:bg-brand-deep"
          >
            View projects
          </Link>
          <Link
            href="/#about"
            className="rounded-[4px] border border-paper/25 px-5 py-2.5 font-medium text-cream transition-colors hover:border-brand hover:text-brand"
          >
            About Daniel
          </Link>
        </div>
      </div>

      {/* illustrated logo (narrower, right) */}
      <div className="md:col-span-5">
        <Image
          src="/images/logo/cocolito-dark.png"
          alt="Cocolito Collective — an orange cat sitting on a shelf line, framed by code brackets"
          width={877}
          height={877}
          priority
          className="mx-auto h-auto w-full max-w-sm"
        />
      </div>
    </section>
  );
}
