// components/ProjectHero.tsx
import type { Project } from "@/lib/types";
import ProjectBadge from "@/components/ProjectBadge";
import ProjectLinks from "@/components/ProjectLinks";

export default function ProjectHero({ project }: { project: Project }) {
  // Expose the accent for the spine.
  const accentStyle = { "--accent": project.accent } as React.CSSProperties;

  return (
    <header
      style={accentStyle}
      className="mt-6 overflow-hidden rounded-[6px] border-l-4 border-[var(--accent)] bg-cream p-6 text-ink sm:p-8"
    >
      <div className="flex flex-wrap items-center gap-2">
        <ProjectBadge>{project.type}</ProjectBadge>
        <ProjectBadge tone="status" accent={project.accent}>
          {project.status}
        </ProjectBadge>
      </div>

      <h1 className="mt-4 font-display text-4xl font-semibold leading-tight text-ink sm:text-5xl">
        {project.title}
      </h1>

      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink/70">
        {project.description}
      </p>

      {project.links ? (
        <div className="mt-6">
          <ProjectLinks links={project.links} />
        </div>
      ) : null}
    </header>
  );
}
