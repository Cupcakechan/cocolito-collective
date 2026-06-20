# Cocolito Collective — Website Handoff

*Source-of-truth for the next session. Web track (Next.js). Read alongside Daniel's **dev-method** skill (and its `references/web.md`). If anything here conflicts with Daniel's current instruction, his current instruction wins.*

*Last updated: 2026-06-20.*

---

## 1. What this is

**Cocolito Collective** — the indie-studio portfolio site of **Daniel Dilena**, showcasing his games, apps, prototypes, and pixel art.

- **Concept:** "The Playable Shelf" — a warm, handmade studio *archive*. Deliberately **not** a generic/AI-looking dev portfolio.
- **Tagline:** "Small games. Useful apps. Built with care."
- **Name origin:** the studio is named after Daniel's late cat **Cocolito** (a tabby who died young of feline leukemia). The About page carries a short tribute — handle this topic warmly if it comes up.
- **Spirit:** built for love of the craft, not money. Daniel uses AI to build but sincerely respects creators who work without it — there is now a dedicated **/how-i-use-ai** page about this, in addition to the note on the About page.

## 2. Live URLs, accounts, hosting

- **Live site:** https://cocolitocollective.com (also reachable at `cocolito-collective.vercel.app`).
- **Domain:** bought **through Vercel** (DNS auto-managed; HTTPS active). DNS records are edited in the **account-level Domains** section, *not* project Settings → Domains.
- **Host:** Vercel, account **cupcakechan**. Auto-deploys on every `git push` to `main` — shipping = push.
- **Repo:** GitHub **github.com/Cupcakechan**, repo **cocolito-collective** (public). **Dependabot is enabled** (alerts + security update PRs).
- **itch.io:** **mrcanela.itch.io** (profile displays as "CocolitoCollective").

## 3. Tech stack

- **Next.js 16.2.9 (App Router) + React 19.2.4 + TypeScript + Tailwind CSS v4** (CSS-first config in `app/globals.css` — there is **no** JS Tailwind config file). Tailwind only, no UI component libraries.
- `next/font` (Fraunces + Hanken Grotesk) and `next/image`.
- **Frontend-only — no backend for this site** (no Supabase here; Savory Shelf is a *separate* app that happens to use Supabase). Contact uses a third-party form service (§8).
- **Two data files** drive content: `data/projects.ts` (projects) and `data/art.ts` (the Art Corner).
- `next.config.ts` now sets **baseline security headers** (§8).
- Scaffolded with `create-next-app` defaults (TS, ESLint, App Router, `@/*` alias, no `src` dir).
- Project root on Daniel's machine: `C:\Users\danie\Documents\Code\cocolito-collective`.

> **Next.js version caution (from `AGENTS.md`/`CLAUDE.md`):** treat this as "not the Next.js you know." Before writing config/API code, verify against the installed docs. A handy way to read them without a full install: `npm pack next@16.2.9`, then extract `package/dist/docs/...` from the tarball.

## 4. Design system

**Palette (CSS tokens in `globals.css`):** espresso bg `#0E0A07`, panel `#18110D`, panel-warm `#241812`, brand orange `#EA6218`, brand-deep `#B4450A`, brand-shadow `#7A2F08`, cream `#FFF9F1`, paper `#F4E9D8`, peach `#EAD9CF`, ink `#251405`, muted `#756D68`.

**Per-project accent colors** (read from data, applied via inline CSS var `--accent`) — **all confirmed:** honey `#F2A540`, spirit purple `#6B5EA8`, savory green `#4A7C59`, Red Mask `#C24A3A`, Key Pong `#2E9CA6`, Sprite Alive blue `#5AA7FF`.

**Fonts:** **Fraunces** (display/headings), **Hanken Grotesk** (body), monospace for eyebrows/labels. (Inter was switched off early — reads as an "AI default.")

**Visual language (intentional anti-generic choices):** dark espresso "room" with cream/paper "artifact" cards; crisp corners (`rounded-[5px]`/`[6px]`); warm soft shadows, **no glow, no gradients**; asymmetric hero; a thin "shelf-ledge" line under card rows (signature); accent "book-spine" on each card; hover-reveal/zoom; `{ }` and `</>` bracket motifs echoing the logo. Accessibility is a standing requirement (semantic HTML, real `button`/`label`, visible focus, alt text, `prefers-reduced-motion`). **The brand is non-salesy — no CTA-style prompts.**

## 5. Routes (all live)

| Route | Page | Notes |
|---|---|---|
| `/` | Home | Hero + Playable Shelf (filterable) + About preview + Contact |
| `/about` | About | Story + Cocolito tribute panel + inline link to `/how-i-use-ai` |
| `/how-i-use-ai` | On AI | Honest stance on AI-assisted building + the PixelLab/Aseprite art workflow |
| `/art` | The Art Corner | Pixel-art gallery (click-to-enlarge); credits PixelLab.ai + Aseprite |
| `/projects` | Projects index | Filterable archive of all projects (`ProjectArchive`); real destination for the "Projects" nav link |
| `/projects/[slug]` | Project detail | Hero, gallery+lightbox, body sections, tech chips, devlog, credits |
| `/sitemap.xml`, `/robots.txt` | generated | see §9 |

## 6. Architecture / file inventory

```
app/
  layout.tsx        Fraunces+Hanken fonts; wraps SiteHeader/SiteFooter; metadata
                    (title, description, metadataBase, openGraph, twitter)
  page.tsx          Home (Hero + ProjectShelf + AboutPreview + ContactSection)
  globals.css       Tailwind v4 @theme tokens + base styles + focus-visible + reduced-motion
  about/page.tsx
  how-i-use-ai/page.tsx
  art/page.tsx                 -> ArtGallery
  projects/page.tsx            -> ProjectArchive  (the /projects index)
  projects/[slug]/page.tsx     dynamic detail (generateStaticParams, async params,
                               notFound, generateMetadata)
  sitemap.ts, robots.ts
components/
  SiteHeader (CLIENT — desktop nav + mobile hamburger dropdown, Esc-to-close),
  SiteFooter (itch+GitHub; id="site-footer"), LogoMark,
  HeroSection, SectionHeader, ProjectBadge,
  ProjectCard (heroImage when present, else </> placeholder; hover zoom),
  CategoryFilter, ProjectShelf (client; featured card + ShelfLedge),
  ProjectArchive (client; /projects index grid + filter),
  AboutPreview, ProjectHero, ProjectLinks (inline SVG icons; renders only links present),
  ProjectGallery (client; click-to-enlarge LIGHTBOX),
  ArtGallery (client; pixel-art grid + lightbox; uses inline imageRendering: pixelated
              and a plain <img> for GIF control),
  DevLog (newest-first by date)
  ContactSection (client; Web3Forms form + itch/GitHub links)
lib/types.ts        Category, ProjectStatus, ProjectImage, ProjectLinks, ProjectCredit,
                    DevlogSection, DevlogEntry, Project (+ credits?), ArtKind, ArtPiece
data/projects.ts    Central project data (6 projects)
data/art.ts         Art Corner data (8 pieces)
next.config.ts      Security headers (§8)
public/
  og.png            1200x630 Open Graph share image (at public ROOT)
  images/logo/      cocolito-dark.png (hero), cocolito-light.png
  images/projects/<slug>/   screenshots for familiar-frenzy, honey-river-run,
                            red-mask-flyer, key-pong, savory-shelf
  images/art/       8 GIFs (see §7)
```

**Conventions:** server components by default (`'use client'` only where interactive — SiteHeader, ProjectShelf, ProjectArchive, ProjectGallery, ArtGallery, ContactSection). Central data files drive everything (add a project/art piece = edit data only). Optional fields marked `?` so the UI renders only what exists. Design tokens centralized; per-item variation via inline `--accent`.

> Note on the working copy: Claude keeps a source-of-truth clone and delivers **replace-all files** to `/mnt/user-data/outputs/`. Image **binaries** live in Daniel's repo (he places them); the clone tracks code/data.

## 7. The data

### `data/projects.ts` — 6 projects

| Title (display) | slug | category | status | stack | accent | media | case study | credits | links |
|---|---|---|---|---|---|---|---|---|---|
| Honey River Raid | honey-river-run | Games | Released | Unity 6 | `#F2A540` | hero + 3 | yes | PixelLab.ai | itch, play |
| **Familiar Frenzy** | familiar-frenzy | Games | In Progress | HTML Canvas, JS | `#6B5EA8` | hero + 5, **devlog ×9** | yes | AI Game Jam 3, PixelLab.ai | itch, play |
| Red Mask Flyer | red-mask-flyer | Games | Released | Unity 6 | `#C24A3A` | hero + 2 | yes | ELV Games | itch, play |
| Key Pong | key-pong | Games | Released | Unity 6 | `#2E9CA6` | hero + 2 | yes | ELV Games | itch, play |
| Savory Shelf | savory-shelf | Apps | In Progress | SwiftUI, Supabase, Next.js API, **Grok** | `#4A7C59` | hero | yes | — | website |
| Sprite Alive | sprite-alive | Prototypes | In Progress | JS, Canvas, HTML | `#5AA7FF` | — | yes | — | — |

- `featured: true` on **Familiar Frenzy** (the big shelf card).
- **Cyber Crusader was removed** — do not reintroduce.
- "Case study" = `summary` / `whatIBuilt` / `whatMakesItInteresting` copy (all six now have it).
- **Credits** render as a subtle attribution line low on the detail page. URLs: PixelLab.ai → `https://www.pixellab.ai/`, ELV Games → `https://elvgames.itch.io/`, AI Game Jam 3 → `https://itch.io/jam/ai-game-jam-3`.
- **Grok** appears **only** in Savory Shelf's stack chips — it was deliberately scrubbed from all prose.
- Savory Shelf links to its live site **https://www.savoryshelf.com/** (the web version is being retired once the SwiftUI iOS app ships).

### `data/art.ts` — 8 pieces (order as-is)

Familiar Frenzy: The Watching Hand, Bone Mage — casting, Gutter Gecko, The Witch, The Familiar, **Hourkeeper — idle**. Iju Cola Courier (in development): Cola Courier — idle, Cola Courier — walk.

- Every piece is `kind: "animation"` (GIF). PNGs would use `kind: "still"`.
- Files use kebab-case except the Hourkeeper, which Daniel added directly: `hourkeeper_idle_.gif`, caption `"Hourkeeper - idle"` (straight hyphen). See §13 — optional cleanup.

## 8. Contact + security

**Contact:** working **Web3Forms** form (free tier, 250 msgs/mo) in `ContactSection.tsx`, plus itch + GitHub links. The public-safe access key is hardcoded in the `WEB3FORMS_ACCESS_KEY` constant (intended to be public; routes to Daniel's inbox, never exposes his email; the form runs client-side, which is how Web3Forms wants it). Honeypot included. **Confirmed working.** No env vars needed.

**Security pass (done this session):**
- **`next.config.ts` baseline headers** on every route (`source: "/:path*"`): `X-Content-Type-Options: nosniff`, `X-Frame-Options: DENY`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`, `Strict-Transport-Security: max-age=31536000; includeSubDomains`.
- **Dependabot enabled** on the repo.
- Repo scanned — **no committed secrets**; `.env*` is gitignored.
- Web3Forms key being public is fine. **Domain restriction is a paid Pro feature**, so on free tier the protections are the honeypot + Web3Forms' own spam firewall; the free escalation if spam ever appears is a **captcha** (Cloudflare Turnstile / hCaptcha).
- **Deferred:** a Content-Security-Policy (was "Option 2"). Revisit only if a third-party embed/analytics/script is added. Note `next/font` self-hosts the Google fonts, so a future CSP would mainly need `'self'` + `https://api.web3forms.com` (and `'unsafe-inline'` for the inline styles + Next's hydration script).

## 9. SEO / indexing

- `sitemap.ts` + `robots.ts` are **live**. Sitemap auto-includes `/`, `/about`, `/how-i-use-ai`, `/art`, `/projects`, and every `/projects/<slug>`. Base URL `https://cocolitocollective.com`.
- **Google Search Console:** Domain property **verified** via DNS TXT (in Vercel DNS). Sitemap **submitted** using the **full URL** (`https://cocolitocollective.com/sitemap.xml` — a bare path is rejected for Domain properties). A fresh "Couldn't fetch" is normal for 24–48h. Progress check: `site:cocolitocollective.com`.
- **Open Graph / social:** `metadataBase` + `openGraph` + `twitter` in `layout.tsx`; `og.png` at public root; page title kept under 60 chars. Verify previews with **opengraph.xyz**. The OG "missing CTA" warning was **intentionally skipped** (non-salesy brand).

## 10. DevLog feature & workflow

- DevLog renders **only on a project's detail page**, and only if it has `devlog` entries.
- **`DevlogEntry`** fields: `version?`, `date` ("YYYY-MM-DD", drives newest-first sort), `title`, `intro?`, `body?` (prose paragraphs), `sections?` (bullet `items` w/ optional `heading`), `outro?`, `images?`.
- **Voice:** games = playful, emoji-friendly, versioned; apps = measured.
- **Confirmed workflow:** Daniel **pastes raw devlog text (or gives the itch devlog URL); Claude formats it** into entry objects (strip markdown `**bold**`/`*italic*` — the component renders plain strings). Never ask him to hand-structure the data.
- **Familiar Frenzy devlog (9 entries, newest→oldest):** v1.9.0 Cursed Mode (06-20), v1.8.0 The Hourkeeper (06-19), v1.7.0 The Pronggeist (06-18), v1.6.0 The Hive Warden (06-17), v1.5.0 Crystals & Collars (06-15), v1.4.0 The Coven Grows (06-14), The Watching Hand (06-13), v1.2.0 Geckos/Sounds/Spirit (06-12), Your Familiar Speaks! (06-11).
- ⚠️ **Unresolved version label:** the itch "Update 1.9.0" post's *body* is headed "v1.10.0." The site entry is labeled **v1.9.0** to match the post title; confirm with Daniel whether it should be v1.10.0 (and if so, fix the itch heading too).

## 11. How Daniel works (critical)

- **Windows**, **Command Prompt** (not PowerShell); **Python is not installed** — Windows/Node commands only (`copy`, not `cp`; no commas; backslashes). iOS work, if any, is macOS + Xcode.
- **Beginner-friendly is mandatory:** exact step-by-step, full file paths, full menu/GUI paths, and a clear **"new file vs replace all"** label for every file.
- **File delivery:** complete **replace-all files** as downloadable artifacts + placement table + testing steps + expected result + a git checkpoint. Reserve targeted 1–2 line edits for trivial changes in long files (quote the exact line).
- **Options protocol:** for any non-trivial feature/UI, present **2–3 named options + a firm recommendation, then stop and wait**. Short approvals ("go") suffice; if he names the approach, just build it.
- **One feature per pass.** MVP first. Verify current tooling/menus before giving steps.
- Daniel owns all **commits and deploys** — suggest the git commands, never run them.
- **Don't bundle a file deliverable with an interactive/tappable widget in the same turn** — it can hide the download.
- **Keep deliveries visually clean** (learned this session): explanation in plain sentences; a **single** copy-block only for things actually copied; **don't nest commands inside numbered lists** (renders raggedly, esp. on mobile); comment code sparingly (the *why*, not the *what*). He often reads/sends from iOS.
- Recap outstanding items at the end of a phase.

## 12. Gotchas & fixes (learned on this project)

- **ESLint `no-unescaped-entities`** fails the Vercel build on raw `'` / `"` / `>` in **JSX text** (not attributes, not string literals, not `.ts` data files). Use curly punctuation (`’ “ ” —`) or HTML entities. `next build` fails on lint **errors**, not warnings.
- **`{" "}`** is the bulletproof JSX space: a newline right after a tag (e.g. `</em>`) silently drops a trailing space.
- **Run `npm run build` locally before deploying** — dev mode is lenient about lint/type errors.
- **GIF timing is baked into the file** — CSS/JS **cannot** change playback speed. Smoothness = frame count + per-frame duration, set in **Aseprite on export**. Rough guide: idles ~160–250 ms/frame; walks/flies ~80–120 ms. Fix = re-export same filename → drop in `public/` → no code change.
- **`next.config.ts` changes are NOT hot-reloaded** — restart `npm run dev` to see header changes. **HSTS is only honored over HTTPS** (no effect on `http://localhost`, but the header still shows).
- **next/image** with local `/public` images needs no `remotePatterns`. Use **lowercase filenames** (Vercel/Linux are case-sensitive).
- **PowerShell** blocks `npx`/npm scripts → use Command Prompt.
- **Stray `node_modules`/lockfile in a parent folder** breaks workspace-root detection → keep deps only inside the project.
- **Stale `.next` cache** → "module not found"/"ComponentMod.handler is not a function" → delete `.next` + `node_modules` + lockfile, reinstall.
- **Git remotes:** "no configured push destination" → add remote; "remote origin already exists" → `git remote set-url`. Create the GitHub repo **empty**.
- **Vercel DNS** for a Vercel-purchased domain lives in the **account-level Domains** area.

## 13. Open items (mostly cosmetic / non-blocking)

- ⚠️ **Confirm the v1.9.0 vs v1.10.0** devlog label (§10).
- **Witch + Familiar GIF speed:** `witch.gif` and `familiar-cat.gif` are 4 frames @ ~100 ms (≈400 ms loop, reads choppy). Slow to ~160 ms/frame in Aseprite and re-export (same filenames, no code change).
- **Hourkeeper entry (optional):** caption uses a straight hyphen — `"Hourkeeper - idle"` — vs em-dashes elsewhere; filename `hourkeeper_idle_.gif` breaks the kebab-case convention; and it currently sits **last** (after the Cola Courier pieces) rather than grouped with the other Familiar Frenzy art. All cosmetic.
- **Honey River Raid** display title shows **"Raid"** (itch name); slug stays `honey-river-run`. Effectively settled unless Daniel says otherwise.
- **Savory Shelf** status is "In Progress" (web version retiring once the iOS app ships).

## 14. What's next

Most of the previous roadmap is **done** (lightbox; screenshots + galleries for all games; the `/projects` index; case-study copy for all six; per-project credits; the Art Corner; the On-AI page; the mobile menu; security headers). Remaining / optional:

1. **More games / more art** — same flow: drop binaries in `public/images/...`, append to the data file, write good `alt`/`caption`. New screenshots flow into cards + galleries (and the lightbox) automatically.
2. **Iju Cola Courier** — future game; ape sprites already in the Art Corner.
3. **Optional polish (mentioned, not scheduled):** embed the live **Sprite Alive** HTML tool in an iframe on its detail page; a cat-version `og.png` (if Daniel uploads the logo for compositing); a CSP (§8) if third-party scripts are ever added; a sprite-sheet + CSS approach if web-controlled GIF speed is ever wanted (deferred — Aseprite re-export is simpler); a custom cursor (deferred — gimmick risk).