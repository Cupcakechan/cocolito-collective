// /lib/types.ts
// Shared types for Cocolito Collective project data.

export type Category = "Games" | "Apps" | "Prototypes";

export type ProjectStatus =
  | "In Progress"
  | "Prototype"
  | "Released"
  | "Archived";

export interface ProjectImage {
  /** e.g. "/images/projects/honey-river-run/shot-1.png" */
  src: string;
  /** Required for accessibility — describe what the image shows. */
  alt: string;
  caption?: string;
}

/** Only the links that exist will be rendered on the project page. */
export interface ProjectLinks {
  play?: string;
  website?: string;
  github?: string;
  appStore?: string;
  itch?: string;
  caseStudy?: string;
}

export interface Project {
  // --- Identity & cards ---
  slug: string; // URL: /projects/<slug>
  title: string;
  type: string; // free-text label, e.g. "Browser Game / Game Jam"
  category: Category; // drives the home filter buttons
  status: ProjectStatus;
  stack: string[]; // tech chips
  accent: string; // hex, e.g. "#F2A540"
  featured?: boolean; // include on the home "Playable Shelf"
  description: string; // short pitch (cards + project hero)

  // --- Detail page body (all optional; sections render only when present) ---
  summary?: string;
  whatIBuilt?: string;
  whatMakesItInteresting?: string;
  buildNotes?: string;
  notes?: string; // internal direction note from the brief

  // --- Media (optional until real assets exist) ---
  heroImage?: ProjectImage;
  gallery?: ProjectImage[];

  // --- Links (optional) ---
  links?: ProjectLinks;
}
