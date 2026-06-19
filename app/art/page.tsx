// app/art/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ArtGallery from "@/components/ArtGallery";

export const metadata: Metadata = {
  title: "The Art Corner — Cocolito Collective",
  description:
    "Pixel art and sprite animations by Daniel Dilena — characters and creatures from Cocolito Collective games, made frame by frame in Aseprite.",
};

export default function ArtCornerPage() {
  return (
    <main className="mx-auto max-w-5xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-[3px] text-sm text-cream/60 transition-colors hover:text-brand"
      >
        <span aria-hidden>←</span> Back home
      </Link>

      <div className="mt-6">
        <SectionHeader
          eyebrow="{ the art corner }"
          title="The Art Corner"
          label="CC · gallery"
        />
      </div>

      <p className="mt-6 max-w-2xl text-lg leading-relaxed text-peach">
        Sprite work and animations from my games — and a few from games still
        taking shape. The sprites start as generations from{" "}
        <a
          href="https://www.pixellab.ai/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-brand underline underline-offset-2 transition-colors hover:text-brand-deep"
        >
          PixelLab.ai
        </a>
        ; every frame is then placed, and re-placed, by hand in Aseprite.
      </p>

      <ArtGallery />
    </main>
  );
}
