// app/about/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "About — Cocolito Collective",
  description:
    "Daniel Dilena on a lifelong love of games, a long road to finishing them, and the cat the studio is named after.",
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-[3px] text-sm text-cream/60 transition-colors hover:text-brand"
      >
        <span aria-hidden>←</span> Back home
      </Link>

      <div className="mt-6">
        <SectionHeader
          eyebrow="{ about }"
          title="About"
          label="CC · studio"
        />
      </div>

      {/* Warm lead */}
      <p className="mt-6 text-lg leading-relaxed text-peach">
        I&rsquo;m Daniel Dilena. Cocolito Collective is a small studio &mdash;
        really just me &mdash; where I build the games and apps I&rsquo;ve wanted
        to make for most of my life. I&rsquo;m not building them for money
        &mdash; I build them because I love it.
      </p>
      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            A lifelong player
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            I&rsquo;ve been a gamer for as long as I can remember. The first game
            I truly fell into was <em>Star Wars: Force Commander</em> on my PC
            back in 2000 &mdash; I played it endlessly, and from then on games
            were simply part of my daily life. Somewhere along the way, playing
            them turned into wanting to make them.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            The long road
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            For the past decade or so I&rsquo;ve dabbled in game development as a
            hobby, but I could never quite get anything across the finish line
            &mdash; there was never enough time. Around the same time I became
            a little obsessed with Aseprite, doodling pixel art whenever I could,
            though I never made anything I&rsquo;d call finished or properly
            animated. My father comes from a technology background, and that
            rubbed off on me early. But between one circumstance and another, the
            dream of actually creating and completing a game &mdash; or an app
            &mdash; stayed just out of reach, even as the passion for all of it
            never faded.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            Why now
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            That&rsquo;s finally changing. With the rise of AI, I can keep at the
            hobby I love without pouring in the countless hours I simply
            don&rsquo;t have &mdash; enough, at last, to finish things and put
            them in front of people. Many of my earliest prototypes, from before
            all this, have been lost to time, but I&rsquo;m steadily building a
            whole arsenal of small games for anyone to try.
          </p>
          <p className="mt-4 leading-relaxed text-peach">
            And a note I mean sincerely: even though I lean on AI to help me
            build, I have real respect and admiration for the people who craft
            everything by hand, without any of it. That kind of work is something
            I&rsquo;ll always look up to.
          </p>

          <Link
            href="/how-i-use-ai"
            className="mt-4 inline-flex items-center gap-1 font-medium text-brand transition-colors hover:text-brand-deep"
          >
            More on how I use AI
            <span aria-hidden>→</span>
          </Link>
        </section>

        {/* The namesake — set apart as a warm cream artifact */}
        <section className="rounded-[6px] border-l-4 border-brand bg-paper p-6 text-ink sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            Why &ldquo;Cocolito&rdquo;
          </h2>
          <p className="mt-3 leading-relaxed text-ink/75">
            The name comes from Cocolito &mdash; a precious cat of mine who passed
            away far too young, from complications with feline leukemia. He was a
            beautiful tabby with more love to give than he ever got the chance to.
            Naming the studio after him is my way of keeping a little of that love
            in everything I make.
          </p>
        </section>
      </div>
    </main>
  );
}
