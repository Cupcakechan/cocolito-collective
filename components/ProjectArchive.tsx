"use client";

import { useMemo, useState } from "react";
import { projects } from "@/data/projects";
import CategoryFilter, { type Filter } from "@/components/CategoryFilter";
import ProjectCard from "@/components/ProjectCard";

const FILTERS: Filter[] = ["All", "Games", "Apps", "Prototypes"];

// The full catalog: every project as an equal-sized card (no featured hero —
// that treatment lives on the home shelf). Reuses ProjectCard + CategoryFilter.
export default function ProjectArchive() {
  const [active, setActive] = useState<Filter>("All");

  const visible = useMemo(
    () =>
      active === "All"
        ? projects
        : projects.filter((project) => project.category === active),
    [active],
  );

  return (
    <div className="mt-6">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <CategoryFilter options={FILTERS} active={active} onChange={setActive} />
        <span className="font-mono text-xs uppercase tracking-[0.18em] text-muted">
          {visible.length} {visible.length === 1 ? "project" : "projects"}
        </span>
      </div>

      {visible.length > 0 ? (
        <div className="mt-8">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((project) => (
              <ProjectCard
                key={project.slug}
                project={project}
                // indexOf the full list keeps catalog numbers (CC · 01…) in
                // step with the home shelf, regardless of the active filter.
                index={projects.indexOf(project)}
              />
            ))}
          </div>
          <ShelfLedge />
        </div>
      ) : (
        <p className="mt-8 text-cream/60">No projects in this category yet.</p>
      )}
    </div>
  );
}

/** The thin warm line the cards rest on — the shelf signature. Mirrors the
 *  ledge in components/ProjectShelf.tsx; keep the two in sync if restyled. */
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
