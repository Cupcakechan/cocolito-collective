// components/ProjectCard.tsx
import Link from "next/link";
import Image from "next/image";
import type { Project } from "@/lib/types";
import ProjectBadge from "@/components/ProjectBadge";

type Props = {
  project: Project;
  /** position in the full project list, for the catalog number (CC · 01) */
  index: number;
  /** render the wide, oversized variant */
  featured?: boolean;
};

export default function ProjectCard({ project, index, featured = false }: Props) {
  const catalog = `CC · ${String(index + 1).padStart(2, "0")}`;
  // Expose the project accent as a CSS variable so hover styles can use it.
  const accentStyle = { "--accent": project.accent } as React.CSSProperties;
  // Use the project's hero screenshot on the card when it exists.
  const hero = project.heroImage;

  return (
    <Link
      href={`/projects/${project.slug}`}
      style={accentStyle}
      className={`group relative block overflow-hidden rounded-[5px] bg-paper text-ink shadow-[0_10px_30px_-18px_rgba(0,0,0,0.7)] transition-transform duration-200 hover:-translate-y-1 ${
        featured ? "sm:grid sm:grid-cols-2" : ""
      }`}
    >
      {/* accent spine (the "book spine" on the shelf) */}
      <span
        aria-hidden
        className="absolute left-0 top-0 z-10 h-full w-[5px] bg-[var(--accent)]"
      />

      {/* preview area — real hero screenshot when present, accent placeholder otherwise */}
      <div
        className={`relative overflow-hidden ${
          featured ? "min-h-[220px]" : "aspect-[16/10]"
        } ${hero ? "" : "flex items-center justify-center"}`}
        style={hero ? undefined : { backgroundColor: `${project.accent}1f` }}
      >
        {hero ? (
          <>
            <Image
              src={hero.src}
              alt={hero.alt}
              fill
              sizes="(min-width: 640px) 50vw, 100vw"
              className="object-cover transition-transform duration-300 group-hover:scale-[1.03]"
            />
            {/* keep the catalog tag legible on top of the photo */}
            <span className="absolute bottom-3 left-4 rounded bg-espresso/60 px-2 py-0.5 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-cream/90">
              {catalog}
            </span>
          </>
        ) : (
          <>
            <span
              aria-hidden
              className="font-mono text-4xl text-ink/15 transition-colors duration-200 group-hover:text-[var(--accent)]"
            >
              {"</>"}
            </span>
            <span className="absolute bottom-3 left-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink/35">
              {catalog}
            </span>
          </>
        )}
      </div>

      {/* body */}
      <div className={featured ? "p-7 sm:flex sm:flex-col sm:justify-center" : "p-5"}>
        <div className="flex flex-wrap items-center gap-2">
          <ProjectBadge>{project.type}</ProjectBadge>
          <ProjectBadge tone="status" accent={project.accent}>
            {project.status}
          </ProjectBadge>
        </div>

        <h3
          className={`mt-3 font-display font-semibold leading-tight text-ink ${
            featured ? "text-3xl" : "text-xl"
          }`}
        >
          {project.title}
        </h3>

        <p className={`mt-2 text-ink/70 ${featured ? "text-base" : "text-sm"}`}>
          {project.description}
        </p>

        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-ink/50 transition-colors duration-200 group-hover:text-[var(--accent)]">
          View project
          <span
            aria-hidden
            className="transition-transform duration-200 group-hover:translate-x-0.5"
          >
            →
          </span>
        </span>
      </div>
    </Link>
  );
}
