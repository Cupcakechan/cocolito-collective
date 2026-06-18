// app/how-i-use-ai/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";

export const metadata: Metadata = {
  title: "How I Use AI — Cocolito Collective",
  description:
    "How Daniel Dilena uses AI tools at Cocolito Collective — and where the taste, decisions, and hand-editing stay human.",
};

export default function HowIUseAIPage() {
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
          eyebrow="{ on ai }"
          title="How I Use AI"
          label="CC · process"
        />
      </div>

      <p className="mt-6 text-lg leading-relaxed text-peach">
        AI is a tense subject in games and art right now, and I understand why.
        For a lot of developers and artists, these tools can feel like they
        shortcut — or quietly replace — the very craft they’ve spent years
        building. That worry is fair, and I’m not going to wave it away.
      </p>

      <div className="mt-10 space-y-10">
        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            Where I stand
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            I use AI, and I’d rather be upfront about exactly how. For most of my
            life I’ve wanted to make games and never had the time to finish them
            — AI is what finally closes that gap. But I treat it as a tool I
            direct, not a button I press: every project still runs on my
            decisions, my taste, and a lot of my own hands-on work.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            How the work splits
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            None of it works without a clear division of labor. Here’s exactly
            who does what.
          </p>

          <h3 className="mt-6 font-display text-xl font-semibold text-cream">
            ChatGPT — thinking and planning
          </h3>
          <p className="mt-2 leading-relaxed text-peach">
            I use ChatGPT to think out loud: planning, scope control, art
            direction, writing prompts, reviewing ideas, and turning messy
            project notes into clear next steps. It’s good for getting unstuck
            and pressure-testing whether a feature is actually worth building. In
            its own words: “I don’t make the game for the developer — the taste,
            judgment, editing, coding decisions, playtesting, and final polish
            still have to come from the human.”
          </p>

          <h3 className="mt-6 font-display text-xl font-semibold text-cream">
            Claude — building and writing
          </h3>
          <p className="mt-2 leading-relaxed text-peach">
            I use Claude as a hands-on collaborator for the making: laying out
            features as options before I choose one, writing and structuring the
            actual code, debugging when something breaks, and shaping my rough
            notes into the devlogs and writeups you’re reading. It can produce a
            lot quickly — but always to my direction, and I’m the one who decides
            what’s good enough and what ships.
          </p>

          <h3 className="mt-6 font-display text-xl font-semibold text-cream">
            Me — the part that matters
          </h3>
          <p className="mt-2 leading-relaxed text-peach">
            The ideas are mine. Every creative and design decision is mine. I
            tune the difficulty, choose what’s fun and cut what isn’t, hand-edit
            the art, play-test the builds, and make the final call on every
            release. The AI clears busywork off my plate; the game itself is
            still mine.
          </p>
        </section>

        <section>
          <h2 className="font-display text-2xl font-semibold text-cream">
            About the art
          </h2>
          <p className="mt-3 leading-relaxed text-peach">
            The art deserves its own note, because it’s where the “AI slop”
            worry is loudest — and where I work hardest to earn the opposite.
          </p>
          <p className="mt-4 leading-relaxed text-peach">
            Every sprite in my games starts as a generation from PixelLab.ai. But
            that’s the starting point, not the finish line. I bring each one into
            Aseprite and edit it by hand — fixing what’s off, redrawing what
            doesn’t fit, tuning it until it truly belongs in the game. AI lets me
            skip some of the grind. It doesn’t get to skip the craft. Nothing
            leaves the studio that I haven’t shaped myself.
          </p>
        </section>

        <section className="rounded-[6px] border-l-4 border-brand bg-paper p-6 text-ink sm:p-8">
          <h2 className="font-display text-2xl font-semibold text-ink">
            One honest path, not the only one
          </h2>
          <p className="mt-3 leading-relaxed text-ink/75">
            None of this is a claim that my way is the right way — only that it’s
            honest, and that it’s mine. If you build everything by hand, with none
            of these tools, I admire that more than I can say; it’s the kind of
            work I’ll always look up to. I just found a way to finally finish the
            things I’ve wanted to make for most of my life — and to make them with
            care.
          </p>
        </section>
      </div>
    </main>
  );
}
