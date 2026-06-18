// app/projects/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import SectionHeader from "@/components/SectionHeader";
import ProjectArchive from "@/components/ProjectArchive";

export const metadata: Metadata = {
  title: "Projects — Cocolito Collective",
  description:
    "The full archive of Cocolito Collective — games, apps, and prototypes by Daniel Dilena.",
};

export default function ProjectsPage() {
  return (
    <main className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
      <Link
        href="/"
        className="inline-flex items-center gap-1 rounded-[3px] text-sm text-cream/60 transition-colors hover:text-brand"
      >
        <span aria-hidden>←</span> Back home
      </Link>

      <div className="mt-6">
        <SectionHeader
          eyebrow="{ the full shelf }"
          title="All Projects"
          label="CC · catalog"
        />
      </div>

      <ProjectArchive />
    </main>
  );
}
