// /data/projects.ts
// Central, data-driven source of truth for all Cocolito Collective projects.
// Add a new project by appending an object here — the site builds the rest.

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "honey-river-run",
    title: "Honey River Run",
    type: "Game",
    category: "Games",
    status: "In Progress",
    stack: ["Unity 6"],
    accent: "#F2A540", // honey gold
    featured: true,
    description:
      "Retro vertical-scrolling shooter inspired by River Raid — rebuilt with honey-river theming, NES-era restraint, fuel pressure, checkpoints, and high-score chasing.",
    notes: "Should feel warm, golden, retro, and arcade-like.",

    // We'll write these case-study sections together, per project:
    // summary: "...",
    // whatIBuilt: "...",
    // whatMakesItInteresting: "...",
    // buildNotes: "...",

    // Add real media later (files go in /public/images/projects/honey-river-run):
    // heroImage: { src: "/images/projects/honey-river-run/hero.png", alt: "..." },
    // gallery: [{ src: "...", alt: "..." }],

    // Add links as they go live (only present links render):
    // links: { itch: "https://mrcanela.itch.io/honey-river-run", github: "..." },
  },
  {
    slug: "familiar-frenzy",
    title: "Familiar Frenzy",
    type: "Browser Game / Game Jam",
    category: "Games",
    status: "In Progress",
    stack: ["HTML Canvas", "JavaScript"],
    accent: "#6B5EA8", // spirit purple
    featured: true,
    description:
      "Top-down survival arena where a witch dodges enemy waves while her ghost-cat familiar becomes the source of her attacks and upgrades.",
    notes: "Should feel magical, purple, ghostly, cute, and chaotic.",
  },
  {
    slug: "savory-shelf",
    title: "Savory Shelf",
    type: "App",
    category: "Apps",
    status: "In Progress",
    stack: ["SwiftUI", "Supabase", "Next.js API Routes"],
    accent: "#4A7C59", // soft green
    featured: true,
    description:
      "A recipe and cooking companion focused on clean recipe saving, practical cooking workflows, and distraction-free organization.",
    notes:
      "Should feel clean, calm, cozy, and useful — food-adjacent without being overly decorative.",
  },
  {
    slug: "cyber-crusader",
    title: "Cyber Crusader",
    type: "Game Prototype",
    category: "Prototypes",
    status: "Prototype",
    stack: ["Unity"],
    accent: "#5AA7FF", // neon blue
    featured: true,
    description:
      "A sci-fi fantasy 2D platformer prototype exploring 16-bit pixel-art vibes, neon tech, fantasy enemies, and classic action-platformer movement.",
    notes: "Should feel neon, retro, and experimental.",
  },
];

/** Look up a single project by its slug (used by the dynamic detail route). */
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

/** All slugs — handy for generateStaticParams on the detail page. */
export function getAllProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}
