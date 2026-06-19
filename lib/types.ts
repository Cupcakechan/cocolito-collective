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

/** A small attribution shown low on the detail page (asset packs, jams, tools). */
export interface ProjectCredit {
  label: string; // e.g. "Sprites by PixelLab.ai"
  href?: string; // optional external link
}

// ── DevLog ──────────────────────────────────────────────
// A devlog entry is dated, optionally versioned, and can mix:
//   - intro:    one scene-setting line
//   - body:     prose paragraphs (for narrative entries)
//   - sections: bulleted sections with optional headings
//   - outro:    a closing sign-off line
// For game projects, emoji belong in the strings (playful voice);
// apps stay plain (measured voice).

export interface DevlogSection {
  /** e.g. "🏮 A New Stage" — omit for plain, headingless bullets. */
  heading?: string;
  /** Bullet lines; emoji allowed inline. The page draws the bullet itself. */
  items: string[];
}

export interface DevlogEntry {
  version?: string; // e.g. "v0.4.0"
  date: string; // "YYYY-MM-DD" — used for newest-first sorting
  title: string;
  intro?: string; // opening scene-setting line
  body?: string[]; // prose paragraphs (narrative entries without bullets)
  sections?: DevlogSection[]; // bulleted sections
  outro?: string; // closing sign-off line
  images?: ProjectImage[];
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
  featured?: boolean; // shows in the large card on the shelf
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

  // --- Devlog (optional; the DevLog section renders only if entries exist) ---
  devlog?: DevlogEntry[];

  // --- Links (optional) ---
  links?: ProjectLinks;

  // --- Credits (optional; a subtle attribution line on the detail page) ---
  credits?: ProjectCredit[];
}

// ── Art Corner ──────────────────────────────────────────
// Pixel art pieces shown on /art. GIFs animate; PNGs are static.
export type ArtKind = "animation" | "still";

export interface ArtPiece {
  /** e.g. "/images/art/captain-bee.gif" */
  src: string;
  /** Required for accessibility — describe what the piece shows. */
  alt: string;
  /** Short label shown under the piece, e.g. "Captain Bee". */
  caption?: string;
  /** Optional source label, e.g. "Honey River Raid". */
  from?: string;
  /** "animation" (GIF) or "still" (PNG). */
  kind: ArtKind;
}
