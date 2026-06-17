"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import CategoryFilter, { type Filter } from "@/components/CategoryFilter";
import ProjectCard from "@/components/ProjectCard";

const FILTERS: Filter[] = ["All", "Games", "Apps", "Prototypes"];

export default function ProjectShelf() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  const [featured, ...rest] = visible;

  return (
    <div className="mt-6">
      <CategoryFilter options={FILTERS} active={active} onChange={setActive} />

      {featured ? (
        <div className="mt-8">
          <ProjectCard
            project={featured}
            index={projects.indexOf(featured)}
            featured
          />
          <ShelfLedge />
        </div>
      ) : (
        <p className="mt-8 text-cream/60">No projects in this category yet.</p>
      )}

      {rest.length > 0 ? (
        <div className="mt-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {rest.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                index={projects.indexOf(project)}
              />
            ))}
          </div>
          <ShelfLedge />
        </div>
      ) : null}
    </div>
  );
}

/** The thin warm line the cards appear to rest on — the shelf signature. */
function ShelfLedge() {
  return (
    <div aria-hidden className="mt-5 flex items-center gap-2">
      <span className="h-px flex-1 bg-paper/15" />
      <span className="font-mono text-[0.65rem] uppercase tracking-[0.2em] text-muted">
        shelf
      </span>
      <span className="h-px w-6 bg-paper/15" />
    </div>
  );
}
