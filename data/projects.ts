// /data/projects.ts
// Central, data-driven source of truth for all Cocolito Collective projects.
// Add a new project by appending an object here — the site builds the rest.

import type { Project } from "@/lib/types";

export const projects: Project[] = [
  {
    slug: "familiar-frenzy",
    title: "Familiar Frenzy",
    type: "Browser Game / Game Jam",
    category: "Games",
    status: "Released",
    stack: ["HTML Canvas", "JavaScript"],
    accent: "#6B5EA8", // spirit purple
    featured: true, // shows in the large "featured" card on the shelf
    description:
      "A spooky-cute top-down survival arena: a witch dodges enemy waves while her ghost-cat familiar does the fighting — and powers her upgrades.",
    notes: "AI Game Jam, 3rd Edition (theme: Familiar). Sprites via PixelLab.ai, hand-edited in Aseprite. Should feel magical, purple, ghostly, cute, and chaotic.",
    summary:
      "Familiar Frenzy is a spooky-cute survival arena where you play a witch who can't fight back — all she can do is dodge. The fighting falls to her ghost-cat familiar, which you feed, upgrade, and evolve as enemy waves and telegraphed bosses close in. Survive long enough to earn Spirit Crystals, then spend them between runs on outfits and familiar collars that reshape how the cat fights.",
    whatIBuilt:
      "Built from scratch in HTML Canvas and JavaScript with no game engine — the technical challenge I set myself this time. It grew into a full little roguelite: a familiar that fights on its own and evolves down upgrade paths, a roster of telegraphed enemies and randomized bosses each logged in a Bestiary, and run-to-run progression through Spirit Crystals and a Wardrobe of outfits and collars. Around that sit personal bests, run recaps, layered sound, and a chatty familiar that introduces each new threat.",
    whatMakesItInteresting:
      "It's my entry for the AI Game Jam (3rd Edition); the theme was 'Familiar,' which I took at face value — a witch and the cat familiar that fights for her. That reversal is the hook: you never attack, you only survive, while the familiar deals the damage, so it all comes down to positioning and which upgrades you feed it. It's the most polished thing I've made — I'm proudest of the bosses and enemies, each posing a different problem to read and dodge, and most of all of the art: every sprite generated with PixelLab.ai, then hand-edited in Aseprite down to the last detail.",
    links: {
      itch: "https://mrcanela.itch.io/familiar-frenzy",
      play: "https://mrcanela.itch.io/familiar-frenzy",
    },
    credits: [
      { label: "Made for AI Game Jam 3", href: "https://itch.io/jam/ai-game-jam-3" },
      { label: "Sprites by PixelLab.ai", href: "https://www.pixellab.ai/" },
    ],
    heroImage: {
      src: "/images/projects/familiar-frenzy/familiar-frenzy-capsule.png",
      alt: "Familiar Frenzy cover art — a witch in a purple hat and robe stands on a glowing rune circle before a swirling purple portal, with her translucent ghost-cat familiar beside her and the game's logo on a banner above.",
    },
    gallery: [
      {
        src: "/images/projects/familiar-frenzy/title-screen.png",
        alt: "Familiar Frenzy title screen showing the game logo and main menu.",
        caption: "Title screen.",
      },
      {
        src: "/images/projects/familiar-frenzy/boss-watching-hand.png",
        alt: "Familiar Frenzy gameplay — the witch and her ghost-cat familiar facing the Watching Hand boss in the dungeon arena.",
        caption: "Facing the Watching Hand boss.",
      },
      {
        src: "/images/projects/familiar-frenzy/goblin-bonker.png",
        alt: "The witch attacks with spirit magic as a Goblin Bonker closes in.",
        caption: "A Goblin Bonker incoming.",
      },
      {
        src: "/images/projects/familiar-frenzy/grimoire.png",
        alt: "The Grimoire screen listing familiar upgrades and evolutions.",
        caption: "The Grimoire of upgrades.",
      },
      {
        src: "/images/projects/familiar-frenzy/paused.png",
        alt: "The pause screen showing run stats — mode, wave, level, score, and health.",
        caption: "Run stats on pause.",
      },
    ],
    // Newest entries first (the page also sorts by date, so order is forgiving).
    devlog: [
      {
        date: "2026-06-23",
        title: "v1.11.0 — The roster is complete 🐦‍⬛🦇",
        intro:
          "Two new spirit companions finish the familiar lineup — and runs now begin with a loadout screen so you'll actually see them. 🔮",
        sections: [
          {
            heading: "🐦‍⬛ Raven Familiar — Grave Tax (10 ◆)",
            items: [
              "The premium survival familiar — your key to pushing deep into Cursed Mode.",
              "💀 Grave Tax (Spirit Imbued) — marks several foes with a death omen; kill a marked enemy before the mark fades and it's guaranteed to drop a healing feather. No free heals — you earn every one.",
              "🪶 Scavenger's Gift (passive) — slain enemies may release a small healing feather, drawing life from the fallen.",
              "🦇 Built for Cursed Mode: feathers fall even under Withering (which blocks normal flasks), rewarding aggressive, skilled play through stacked curses — without making the descent easy.",
            ],
          },
          {
            heading: "🦇 Bat Familiar — Echo Swarm (6 ◆)",
            items: [
              "A sharp-eared spirit for when the swarm closes in.",
              "🔊 Echo Swarm (Spirit Imbued) — looses expanding echo rings that wash over everything nearby. Brutal against packs; it won't bring down a lone boss.",
              "🌙 Night Sense (passive) — draws pickups in from a little farther.",
            ],
          },
          {
            heading: "🧥 A loadout screen before every run",
            items: [
              "Choosing Casual or Cursed now opens the Wardrobe as a loadout screen — titled for your run, your current loadout shown at a glance, and a Start Run button when you're ready. The main-menu Wardrobe is still there as a normal shop, and Tutorial jumps straight in.",
              "Every familiar works with every collar — only the look, the passive, and the Spirit Imbued change. The full lineup: 🐈‍⬛ Cat · 🦉 Owl · 🦊 Fox · 🦇 Bat · 🐦‍⬛ Raven. Your saves carry over. 🐾",
            ],
          },
        ],
      },
      {
        date: "2026-06-22",
        title: "v1.10.0 — Familiars: Owl & Fox 🦉🦊",
        intro:
          "Your ghost cat now has company. The Wardrobe gains a whole new category — Familiars — and two new spirit companions, each with its own passive and its own twist on Spirit Imbued. Plus a Cursed Mode tune-up and a mode rename. 🔮",
        sections: [
          {
            heading: "🐾 New: the Familiars category",
            items: [
              "The Wardrobe is now three tabs — Outfits, Familiars, and Collars. Your collar still decides your familiar's normal attack (Spirit runes, Moon Beam, or Alchemist flasks); your familiar now decides its look, a small passive, and what its Spirit Imbued unleashes.",
              "Mix and match freely — the collar preview even shows your equipped familiar wearing each collar, and the new Familiars page in the Arcane Archive 📖 catalogs them all.",
            ],
          },
          {
            heading: "🦊 Fox Familiar — Foxfire Chain (6 ◆)",
            items: [
              "A sly spirit that spreads foxfire between foes.",
              "🔥 Foxfire Chain (Spirit Imbued) — looses foxfire wisps that bounce from enemy to enemy. Devastating against packs; it won't melt a lone boss. Where the Owl picks one target, the Fox spreads the burn across the crowd.",
              "🍀 Trickster Luck (passive) — rare pickups (health flasks & Spirit Magnets) turn up a little more often. Plays nicely with Lucky Paws, and leaves Spirit Crystals alone.",
            ],
          },
          {
            heading: "🦉 Owl Familiar — Astral Judgment (6 ◆)",
            items: [
              "A wise spirit that sharpens the bond.",
              "✨ Astral Judgment (Spirit Imbued) — strikes the most dangerous foe on the field with arcane precision, favoring bosses and casters over nearby stragglers.",
              "🌙 Star-Eyed Focus (passive) — Spirit Imbued charges a touch faster from the motes you collect.",
            ],
          },
          {
            heading: "😼 Cursed Mode rebalance",
            items: [
              "Cursed runs were a slog of spongy enemies. The cursed are now a little less tanky but hit noticeably harder — faster, sharper, more dangerous fights instead of long grinds. ⚰️",
            ],
          },
          {
            heading: "📛 “Endless” is now “Casual”",
            items: [
              "The endless run mode is renamed Casual to better fit how it plays. Your best waves, scores, and saves all carry over untouched.",
            ],
          },
        ],
        outro:
          "Every existing outfit, collar, the Cat familiar, and your saves are fully intact. 🐈‍⬛",
      },
      {
        date: "2026-06-20",
        title: "v1.9.0 — Cursed Mode 🌑",
        body: [
          "🤖 Tin Bulwark is here — watch out for its attack, as it will push you into danger!",
          "Mastered Endless? Then it's time to go deeper. Cursed Mode is a darker, harder way to run the arena — where survival comes at a price that grows with every boss you fell.",
        ],
        sections: [
          {
            heading: "🔮 Descend into the curse",
            items: [
              "Cursed Mode plays like Endless, but the dungeon turns faster: bosses arrive every five waves instead of ten. Each one you bring down lays a new random curse on your run — and they stack. The deeper you go, the more afflictions pile on. How long can you last as the dark closes in?",
            ],
          },
          {
            heading: "💀 Eight curses to suffer",
            items: [
              "Every descent draws its curses in a different order, so no two runs feel the same. The arena might drown in darkness until only a ring of light follows you… the slain might leave seething pools where they fall… your wards might turn brittle, every wound cutting deeper… or the horde itself might swell and flood the floor. There are eight in all — the rest are yours to uncover.",
            ],
          },
          {
            heading: "👻 Your familiar feels it too",
            items: [
              "When a new curse settles in, your ghost cat calls out a warning, and a row of curse icons on your HUD shows exactly what's gripping your run at a glance.",
            ],
          },
          {
            heading: "📜 The Curses archive",
            items: [
              "A new chapter joins the Arcane Archive — the Curses collection. Every curse you've survived is recorded there with its name and its bite. Suffer all eight to complete it.",
            ],
          },
          {
            heading: "🏆 Its own leaderboard",
            items: [
              "Cursed runs are scored on a separate high-score board — Endless and Cursed each get their own tab on the High Scores screen, so your bravest descents stand on their own.",
            ],
          },
        ],
        outro: "Light a candle, steady your familiar, and see how deep the dark will let you go. 🕯️",
      },
      {
        date: "2026-06-19",
        title: "v1.8.0 — The Hourkeeper 🕰️",
        sections: [
          {
            heading: "⏳ A New Boss — The Hourkeeper",
            items: [
              "A clockwork keeper that bends the fight to its own rhythm — you can't just wail on it.",
              "🌀 It vanishes, and great brass clock hands sweep the arena — step off the line as each one falls.",
              "🔔 Then it returns, vulnerable, and the alarm runes tick… tick… burst — punish it while the alarms ring.",
              "⚖️ As its dial winds down it gets meaner — faster strikes, denser runes, and at low health it sweeps a hand through itself while you punish, so you have to dodge without letting up.",
              "✨ It blinks between sets, and a chime and clockwork clang now mark every cast and strike.",
            ],
          },
          {
            heading: "🖱️ Full mouse support",
            items: [
              "The cursor's back, and every screen is clickable now — hover to highlight, click to choose.",
              "Menus, mode select, upgrade cards, pause, victory, and game over all take the mouse.",
              "The Wardrobe, Grimoire, and Bestiary are clickable too, with scroll wheels and draggable scrollbars; Settings has click-and-drag volume sliders.",
              "Keyboard still does everything — the mouse just adds a second way in.",
            ],
          },
          {
            heading: "🖥️ Fullscreen, properly",
            items: [
              "The game now scales to fill the screen — crisp pixels, correct aspect ratio — so the fullscreen button finally fills your monitor instead of a tiny centered window.",
            ],
          },
        ],
      },
      {
        date: "2026-06-18",
        title: "v1.7.0 — The Pronggeist 🍴",
        intro:
          "The dungeon won't hold still anymore. A new horror joins the swarm, the floor shifts beneath your boots, and the Emberheart Robe has been reforged. 🔮",
        sections: [
          {
            heading: "🍴 New Enemy — The Pronggeist",
            items: [
              "A cursed fork has wandered in, and it does not chase.",
              "🔮 It shuffles into place, plants itself, and locks a four-row spike fork toward wherever you're standing.",
              "⚡ The warning won't follow you — once it locks, commit a real sidestep clear of the whole gold band before the tines erupt.",
              "Joins the rotation from Wave 7.",
            ],
          },
          {
            heading: "🏚️ The Shifting Dungeon",
            items: [
              "🪨 Defeat a boss and the arena floor transforms — ancient stone gives way to creaking wood, and back again, the deeper you push.",
              "🐾 Your familiar will have something to say about it.",
            ],
          },
          {
            heading: "🔥 Emberheart Robe, Reforged",
            items: [
              "🔥 The Emberheart Robe now grants an Emergency Heal — drop below 25% HP and it pulls you back up to 50%, once per wave. No more praying for a flask.",
              "💎 Now costs 8 Spirit Crystals; the Gilded Mantle drops to 6.",
            ],
          },
          {
            heading: "♿ Display & Accessibility",
            items: [
              "New options in Settings:",
              "✨ Reduced Flash Effects — calms bright flashes (level-ups, hits, eruptions, acid pulses) while keeping every danger warning readable.",
              "🟧 High Visibility Warnings — bold, high-contrast outlines on ground danger zones so they pop against any floor.",
              "Both are off by default, flip on instantly, and remember your choice between runs.",
            ],
          },
          {
            heading: "📖 Quality of Life",
            items: [
              "📖 The Bestiary is now reachable straight from the Pause menu, right next to the Grimoire — size up what you're fighting without leaving your run.",
              "👗 Wardrobe outfits are now sorted by price.",
            ],
          },
        ],
        outro: "Move sideways, and mean it. 👁️",
      },
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
    slug: "key-pong",
    title: "Key Pong",
    type: "Game",
    category: "Games",
    status: "Released",
    stack: ["Unity 6"],
    accent: "#2E9CA6", // electric teal
    description:
      "A chaotic mechanical-keyboard twist on Pong. Swing a giant Spacebar paddle as the ball morphs into a new key on every bounce — clacks, glowing trails, screen shake, and a 5-minute Time Attack.",
    notes: "20 Games Challenge — Game 1. Art & audio by ELV Games.",
    summary:
      "Key Pong is a chaotic, clacky take on Pong played across a giant mechanical keyboard. Two Spacebar keys are the paddles, the arena is ringed with keycaps, and the ball is a keycap that morphs into a different key on every bounce — wrapped in mechanical clacks, glowing trails, and screen shake. Two ways to play: an endless Classic mode and a five-minute Time Attack.",
    whatIBuilt:
      "Built in Unity 6 and playable in the browser. The trickiest piece was the key-morph that swaps the ball's keycap on every bounce — I ended up building two of them, one driving the player's side and one for the AI. Around that sit the paddle-and-ball physics, the mechanical juice (clacks, glowing trails, screen shake), and two modes, including a Time Attack that saves your best run. The art and music are from ELV Games asset packs; the code, design, and feel are mine.",
    whatMakesItInteresting:
      "Pong is about the simplest game there is to build, so the point was to make it unmistakably mine. Leaning into a mechanical-keyboard theme — Spacebar paddles, a morphing keycap ball, a clack on every hit — turns a bare rally into something tactile and a little absurd. It's also Game 1 of the 20 Games Challenge: my run at finishing twenty games, each built around a different mechanic, so they reach the shelf instead of stalling half-done, and each one teaches me a new genre.",
    links: {
      itch: "https://mrcanela.itch.io/key-pong",
      play: "https://mrcanela.itch.io/key-pong",
    },
    heroImage: {
      src: "/images/projects/key-pong/key-pong-menu.png",
      alt: "Key Pong title screen — the neon 'KEY PONG' logo over a mechanical-keyboard background, with Classic, Time Attack, How to Play, and Quit menu options and glowing teal and magenta keys.",
      caption: "Title screen.",
    },
    gallery: [
      {
        src: "/images/projects/key-pong/key-pong-gameplay-morph.png",
        alt: "Key Pong gameplay — the ball nears the right spacebar paddle while morphing into a different key, on a dark board ringed with keycaps.",
        caption: "The ball becomes a new key on every bounce.",
      },
      {
        src: "/images/projects/key-pong/key-pong-gameplay-rally.png",
        alt: "Key Pong gameplay — two spacebar-shaped paddles face off across a dark board lined with keycaps as the ball travels down the center.",
        caption: "Spacebar paddles mid-rally.",
      },
    ],
    credits: [
      { label: "Art & audio by ELV Games", href: "https://elvgames.itch.io/" },
    ],
  },
  {
    slug: "savory-shelf",
    title: "Savory Shelf",
    type: "App",
    category: "Apps",
    status: "In Progress",
    stack: ["SwiftUI", "Supabase", "Next.js API Routes", "Grok"],
    accent: "#4A7C59", // soft green — matches the savoryshelf.com brand
    description:
      "A calm, ad-free home for your recipes — save from anywhere or add your own, then turn any recipe into a category-sorted shopping list.",
    notes:
      "Should feel clean, calm, cozy, and useful — food-adjacent without being overly decorative.",
    summary:
      "Savory Shelf is a recipe and cooking companion built around one stubborn idea: a calm, clutter-free home for the food you actually cook — no ads to scroll past, no life story before the ingredients. Paste a recipe URL and it becomes a clean, scalable view; add your own and it's parsed into the same tidy format; then turn anything into a shopping list that already sorts itself by category.",
    whatIBuilt:
      "A native iOS app in SwiftUI, backed by Supabase, with a set of Next.js API routes powering the smarter features. I honestly wasn't sure what to build it on when I started, so I worked through the options with Claude and picked tools that would teach me something and hold up: SwiftUI for a real native feel, Supabase for storage and sync, and serverless routes for the recipe parsing, translation, and ingredient suggestions. The core already works — import a recipe by URL into a clean, scalable view, add your own and have it parsed into the same clean format, organize everything in one place, and build a shopping list that sorts by category. It's live on the web today while I build out the native version.",
    whatMakesItInteresting:
      "Two features I'm proudest of, and both come from real cooking friction rather than a feature checklist. The first is two-way translation between English and Spanish: any recipe can flip between the two, so a dish isn't trapped with whoever first wrote it down. The second is 'Suggest an alternative' — point it at an odd or hard-to-find ingredient and it offers a common one you're more likely to already have. The thread running through all of it is a refusal to waste the cook's time: no ads to swim through, no preamble, no clutter — just the recipe and what you need to make it. That principle is the whole reason it exists.",
    links: {
      website: "https://www.savoryshelf.com/",
    },
    heroImage: {
      src: "/images/projects/savory-shelf/import-screen.png",
      alt: "Savory Shelf's recipe import screen — the Cook it your way headline above a field for pasting a recipe URL and an Import Recipe button.",
      caption: "Importing a recipe by URL.",
    },
  },
  {
    slug: "sprite-alive",
    title: "Sprite Alive",
    type: "Web Tool",
    category: "Prototypes",
    status: "In Progress",
    stack: ["JavaScript", "Canvas", "HTML"],
    accent: "#5AA7FF", // tool blue
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