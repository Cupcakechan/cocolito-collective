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
    featured: true, // shows in the large "featured" card on the shelf
    description:
      "A spooky-cute top-down survival arena: a witch dodges enemy waves while her ghost-cat familiar does the fighting — and powers her upgrades.",
    notes: "Should feel magical, purple, ghostly, cute, and chaotic.",
    links: {
      itch: "https://mrcanela.itch.io/familiar-frenzy",
      play: "https://mrcanela.itch.io/familiar-frenzy",
    },
    // Newest entries first (the page also sorts by date, so order is forgiving).
    devlog: [
      {
        date: "2026-06-17",
        title: "v1.6.0 — The Hive Warden 🐝",
        intro: "A new terror takes wing, and the dungeon floor grows older and stranger.",
        sections: [
          {
            heading: "🐝 A New Boss — The Hive Warden",
            items: [
              "A monstrous spirit-bee now drifts into the arena, hovering just out of reach.",
              "⚡ It charges with a rising buzz, then looses a volley of sharp stingers — sometimes a tight cone you can circle past, but more often a radial burst that fills the air around you. Don't get caught standing in the ring.",
              "🎯 Watch for the wind-up: the grunt and the gathering glow are your cue to move.",
              "🔊 New sounds give it real presence — a warning buzz as it charges, and a sharp snap as the stingers fly.",
              "🎲 The Hive Warden joins Elder Wisp and the Watching Hand in the boss rotation, so every run keeps you guessing which one you'll face.",
              "📖 Logged in the Bestiary for study.",
            ],
          },
          {
            heading: "🕯️ Atmospheric Depths",
            items: [
              "✨ The dungeon floor is no longer so bare — faint arcane runes now scatter naturally across the ancient stone.",
              "💀 And the depths feel more haunted: rare finds like bones, skulls, mushrooms, candles, and creeping moss now turn up as occasional discoveries underfoot.",
            ],
          },
        ],
      },
      {
        date: "2026-06-15",
        title: "v1.5.0 — Crystals & Collars 🔮",
        sections: [
          {
            heading: "💎 Spirit Crystals & the Wardrobe",
            items: [
              "Defeat bosses to earn ✨ Spirit Crystals — treasure that carries over between runs.",
              "Spend them in the brand-new 🧥 Wardrobe (now on the main menu) on Outfits and Collars.",
            ],
          },
          {
            heading: "🧙 New — Outfits (a fresh look, plus a little perk)",
            items: [
              "🪄 Apprentice Robe — your humble starting robe.",
              "🔥 Emberheart Robe — flasks heal more.",
              "📘 Sage's Weave — gain more EXP.",
              "👑 Gilded Mantle — earn more score.",
            ],
          },
          {
            heading: "🐈‍⬛ New — Familiar Collars (change how your cat fights)",
            items: [
              "✨ Spirit Collar — the classic rune bolts.",
              "🌙 Moon Beam Collar — a quick beam that strikes everything in a line.",
              "⚗️ Alchemist Collar — hurls flasks that burst into lingering acid puddles.",
              "Your build still matters: 'spread' gives your beam/flasks extra targets, and 'pierce' widens the beam and grows the puddles.",
            ],
          },
          {
            heading: "📚 Arcane Archive",
            items: [
              "The Grimoire and Bestiary now share one shelf in the new Arcane Archive.",
            ],
          },
          {
            heading: "⚔️ Tweaks & polish",
            items: [
              "👹 The Goblin Bonker now winds up and slams a telegraphed ground stomp — watch for the ring and step clear.",
              "👻 The Elder Wisp's dash is fairer to read and dodge.",
              "✨ Menu spacing and UI cleanup throughout.",
            ],
          },
        ],
      },
      {
        date: "2026-06-14",
        title: "v1.4.0 — The Coven Grows 🐈‍⬛✨",
        sections: [
          {
            heading: "🆕 New creatures & power",
            items: [
              "🦴 Bone Mage — a spellcaster that curses the ground beneath you. Watch the telegraph and step clear before the cursed patch detonates! 💥",
              "🟢 Goblin Bonker — a hulking brute that lumbers in and winds up a heavy club swing that knocks you flying. Don't just back away — it lunges into the swing!",
              "🌟 Spirit Volley — a new familiar evolution: max out Restless Wisp and Spirit Focus to fire a three-bolt spread instead of a single bolt.",
            ],
          },
          {
            heading: "✨ Improved",
            items: [
              "📖 Grimoire is now browse-to-read — highlight any upgrade or evolution to see its details instantly, no extra button.",
              "🐾 Bestiary scrolls smoothly and reveals each creature's portrait and lore as you browse.",
              "⭐ Level up! now lands with a celebratory gold flourish.",
              "🔊 Sound — every creature has its own voice now, the Gutter Gecko's throw and the Elder Wisp's charge have their own cues, and the menus and the battlefield play different music.",
              "⌨️ How to Play controls are easier to read at a glance.",
            ],
          },
          {
            heading: "🔧 Fixed",
            items: [
              "🧪 Health flasks shimmer when they drop and are easier to spot, and the familiar no longer points you toward a flask that's off-screen.",
              "The familiar now introduces each creature only the first time you meet it, instead of every run.",
            ],
          },
        ],
      },
      {
        date: "2026-06-13",
        title: "The Watching Hand 🖐️👁️",
        intro: "The biggest content update yet — a new boss, a field guide, and a stack of polish!",
        sections: [
          {
            heading: "🖐️ New Boss: The Watching Hand",
            items: [
              "Survive to Wave 20 in Endless Mode and you'll meet a giant, many-eyed hand that crawls the arena and does NOT want visitors.",
              "It hops around and slams down with a telegraphed strike — watch for the red ring and get clear before the fist lands.",
              "As you wear it down, it summons bursts of Gutter Geckos to keep the pressure on while you dodge.",
            ],
          },
          {
            heading: "🎲 Bosses Now Appear at Random",
            items: [
              "Deeper Endless runs no longer face the same boss in the same place every time — the Elder Wisp and the Watching Hand now show up in a shuffled order, so you never quite know who's waiting.",
            ],
          },
          {
            heading: "📖 New: Enemy Bestiary",
            items: [
              "A field guide to the dungeon's creatures, right from the main menu. Entries start as shadowy silhouettes and reveal themselves once you've faced each foe in battle. Can you discover them all?",
            ],
          },
          {
            heading: "🐾 A Chattier Familiar",
            items: [
              "Your ghost cat now introduces new enemies AND bosses in Endless Mode too, not just the Tutorial — with special warnings tailored to each boss.",
            ],
          },
          {
            heading: "🏆 Personal Bests & Run Recaps",
            items: [
              "Beat your best Endless wave or score and you'll get a celebratory callout on the Game Over screen — your records have always been saved, and now they're impossible to miss!",
              "The Endless Game Over screen now shows a fuller recap: wave, level, score, enemies and bosses defeated, and any evolutions you unlocked.",
            ],
          },
          {
            heading: "✨ Menu Tidy-Up",
            items: [
              "'How to Play' now lives with the play modes (Tutorial / Endless / How to Play), keeping the main menu clean.",
            ],
          },
        ],
        outro: "Keep moving, trust your familiar, and don't get pinned. 🐾",
      },
      {
        date: "2026-06-12",
        title: "v1.2.0 — Geckos, Sounds & Spirit 🦎🔊✨",
        intro: "The biggest update yet — a new creature, a louder dungeon, and a deadly new bond!",
        sections: [
          {
            items: [
              "NEW ENEMY — the Gutter Gecko: from Wave 5, this ranged menace skulks at a distance and flings projectiles from its pouch. Its shots are slow enough to dodge — if you keep moving.",
              "NEW EVOLUTION — Spirit Bond: max out Spirit Heart and Spirit Focus, and the glowing link between witch and familiar becomes a golden blade that cuts any enemy crossing it while Spirit Imbued is active.",
              "New sound effects: level-ups, healing, the Spirit Magnet's pull, eerie chittering from the dungeon's creatures, and a chirp for every line of cat wisdom — plus a new SFX volume slider in Settings.",
              "Spirit Imbued is impossible to miss now: a golden spark dances over the witch and the meter glows when it's ready. Press SPACE!",
              "Balance tuning: motes now pull toward you slightly from the start, Spirit Imbued takes a touch longer to charge, and late-run leveling breathes better.",
            ],
          },
        ],
      },
      {
        date: "2026-06-11",
        title: "Your Familiar Speaks! 🐾",
        body: [
          "The ghost cat has found its voice! The Tutorial now opens with a calm moment in the dark — take a breath, learn to move, and let your familiar walk you through the basics with its own little words of encouragement. Lessons arrive one at a time, right when they matter: your first mote, your first flask, your first taste of Spirit Imbued.",
          "New players get a gentler welcome. Veterans lose nothing — Endless Mode is untouched, and the wisps are just as relentless as ever.",
          "A few small visual touch-ups round things out, including a crisper title banner.",
        ],
        outro: "Thanks for playing — and trust the cat. It knows what it's doing. ✨",
      },
    ],
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
