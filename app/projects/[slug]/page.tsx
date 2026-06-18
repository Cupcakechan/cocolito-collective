// app/projects/[slug]/page.tsx
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getProjectBySlug, getAllProjectSlugs } from "@/data/projects";
import ProjectHero from "@/components/ProjectHero";
import ProjectGallery from "@/components/ProjectGallery";
import DevLog from "@/components/DevLog";

// Pre-build a static page for every project slug.
export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

// In Next.js 15+/16, `params` is async — it must be awaited.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return { title: "Project not found — Cocolito Collective" };
  return {
    title: `${project.title} — Cocolito Collective`,
    description: project.description,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  // Body sections only appear if their copy exists.
  const sections = [
    { heading: "Summary", body: project.summary },
    { heading: "What I built", body: project.whatIBuilt },
    { heading: "What makes it interesting", body: project.whatMakesItInteresting },
    { heading: "Build notes", body: project.buildNotes },
  ].filter((section) => Boolean(section.body));

  return (
    <main className="mx-auto max-w-4xl px-5 py-10 sm:px-8">
      <Link
        href="/#shelf"
        className="inline-flex items-center gap-1 rounded-[3px] text-sm text-cream/60 transition-colors hover:text-brand"
      >
        <span aria-hidden>←</span> Back to the shelf
      </Link>

      <ProjectHero project={project} />

      <ProjectGallery project={project} />

      {sections.length > 0 ? (
        <div className="mt-12 space-y-8">
          {sections.map((section) => (
            <section key={section.heading}>
              <h2 className="font-display text-2xl font-semibold text-cream">
                {section.heading}
              </h2>
              <p className="mt-3 whitespace-pre-line leading-relaxed text-peach">
                {section.body}
              </p>
            </section>
          ))}
        </div>
      ) : null}

      <section className="mt-12">
        <h2 className="font-display text-2xl font-semibold text-cream">
          Tech stack
        </h2>
        <ul className="mt-4 flex flex-wrap gap-2">
          {project.stack.map((tech) => (
            <li
              key={tech}
              className="rounded-[3px] border border-paper/20 px-3 py-1 text-sm text-cream/80"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.devlog && project.devlog.length > 0 ? (
        <DevLog entries={project.devlog} />
      ) : null}

      {project.credits && project.credits.length > 0 ? (
        <p className="mt-12 border-t border-paper/10 pt-6 text-sm text-cream/40">
          {project.credits.map((credit, index) => (
            <span key={index}>
              {index > 0 ? <span aria-hidden> · </span> : null}
              {credit.href ? (
                <a
                  href={credit.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-4 transition-colors hover:text-brand"
                >
                  {credit.label}
                </a>
              ) : (
                credit.label
              )}
            </span>
          ))}
        </p>
      ) : null}
    </main>
  );
}
