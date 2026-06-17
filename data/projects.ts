// /data/projects.ts
// Central, data-driven source of truth for all Cocolito Collective projects.
// Add a new project by appending an object here — the site builds the rest.

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    // Note: titled "Honey River Raid" on itch.io; slug kept as honey-river-run.
    slug: "honey-river-run",
    title: "Honey River Raid",
    type: "Game",
    category: "Games",
    status: "Released",
    stack: ["Unity 6"],
    accent: "#F2A540", // honey gold
    featured: true,
    description:
      "Pilot Captain Bumble down an endless honey river — dodge hazards, manage fuel, blast through, and chase the high score. A warm, golden take on the NES-era river shooter.",
    notes: "Should feel warm, golden, retro, and arcade-like.",
    links: {
      itch: "https://mrcanela.itch.io/honey-river-run",
      play: "https://mrcanela.itch.io/honey-river-run",
    },
  },
  {
    slug: "familiar-frenzy",
    title: "Familiar Frenzy",
    type: "Browser Game / Game Jam",
    category: "Games",
    status: "In Progress",
    stack: ["HTML Canvas", "JavaScript"],
    accent: "#6B5EA8", // spirit purple
    description:
      "A spooky-cute top-down survival arena: a witch dodges enemy waves while her ghost-cat familiar does the fighting — and powers her upgrades.",
    notes: "Should feel magical, purple, ghostly, cute, and chaotic.",
    links: {
      itch: "https://mrcanela.itch.io/familiar-frenzy",
      play: "https://mrcanela.itch.io/familiar-frenzy",
    },
  },
  {
    slug: "red-mask-flyer",
    title: "Red Mask Flyer",
    type: "Game",
    category: "Games",
    status: "Released",
    stack: ["Unity 6"],
    accent: "#C24A3A", // provisional — warm 16-bit red
    description:
      "A lightning-fast 16-bit endless flyer inspired by Jetpack Joyride. Don the Red Mask and blast through a shifting world of goblins, arrows, and ancient hazards.",
    notes: "20 Games Challenge — Game 2. Art & audio by ELV Games.",
    links: {
      itch: "https://mrcanela.itch.io/red-mask-flyer",
      play: "https://mrcanela.itch.io/red-mask-flyer",
    },
  },
  {
    slug: "key-pong",
    title: "Key Pong",
    type: "Game",
    category: "Games",
    status: "Released",
    stack: ["Unity 6"],
    accent: "#2E9CA6", // provisional — electric teal
    description:
      "A chaotic mechanical-keyboard twist on Pong. Swing a giant Spacebar paddle as the ball morphs into a new key on every bounce — clacks, glowing trails, screen shake, and a 5-minute Time Attack.",
    notes: "20 Games Challenge — Game 1. Art & audio by ELV Games.",
    links: {
      itch: "https://mrcanela.itch.io/key-pong",
      play: "https://mrcanela.itch.io/key-pong",
    },
  },
  {
    slug: "savory-shelf",
    title: "Savory Shelf",
    type: "App",
    category: "Apps",
    status: "In Progress",
    stack: ["SwiftUI", "Supabase", "Next.js API Routes"],
    accent: "#4A7C59", // soft green
    description:
      "A recipe and cooking companion focused on clean recipe saving, practical cooking workflows, and distraction-free organization.",
    notes:
      "Should feel clean, calm, cozy, and useful — food-adjacent without being overly decorative.",
  },
  {
    slug: "sprite-alive",
    title: "Sprite Alive",
    type: "Web Tool",
    category: "Prototypes",
    status: "In Progress",
    stack: ["JavaScript", "Canvas", "HTML"],
    accent: "#5AA7FF", // provisional — tool blue
    description:
      "Most sprite previewers tell you whether an animation is smooth — not whether it'll feel like a game. Sprite Alive closes that gap: a single self-contained HTML file for previewing attacks, idles, walks, and hits with synced placeholder effects — no engine import, nothing uploaded.",
    notes:
      "Should feel like a focused, trustworthy little tool — one thing done well.",
    summary:
      "A single self-contained HTML tool for previewing sprite animations the way they'll actually read in a game: drag-and-drop import, automatic frame slicing, playback controls with onion skinning, purpose presets (Attack, Idle, Walk, Hit), and a small plugin system of placeholder effects with live parameters.",
    whatIBuilt:
      "Vanilla JavaScript and Canvas — zero frameworks, no build step. Effects are defined as small self-contained objects, so a new effect drops in with a single addition. The whole thing is one file you can open locally.",
    whatMakesItInteresting:
      "It leads with a real user need: seeing an attack with a synced beam or impact flash without a full engine import. The single-file design is both a portability choice and a privacy one — because nothing is uploaded, artists protective of unreleased work can use it freely.",
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
