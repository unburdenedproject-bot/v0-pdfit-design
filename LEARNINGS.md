# OmnisPDF — Learnings

Decisions, patterns, and lessons worth remembering. Add an entry whenever something non-obvious is figured out.

---

## 2026-03-22 — Split CLAUDE.md into focused reference files

**What:** Extracted localization rules into `LOCALIZATION.md` and created `BRAND.md` as a standalone identity file. CLAUDE.md now references both with a single line each.

**Why it matters:** CLAUDE.md was becoming a catch-all. When it holds too much, Claude reads everything and applies nothing carefully. Focused files let each skill load only what it needs — brand rules for copy tasks, localization rules for build tasks.

**Apply when:** Any time a section of CLAUDE.md grows past ~10 lines on a single topic, it's a candidate to extract.

---

## 2026-03-22 — BRAND.md as the Business Brain

**What:** Created `BRAND.md` with target audience (legal/accounting/business teams + students, USA/LATAM/Brazil), brand voice (professional, simple, fast), positioning tagline, multilingual identity rules, full color system pulled from `tailwind.config.ts` and `globals.css`, and key design rules.

**Why it matters:** Without a single brand reference, skills and articles drift — wrong tone, wrong colors, wrong audience assumptions. Every skill that touches copy or UI should read BRAND.md first.

**Apply when:** Writing any new page, article, or component. Building any slash command that produces copy or UI code.

---

## 2026-03-22 — Trilingual identity, not translation

**What:** Documented in both `BRAND.md` and `LOCALIZATION.md` that EN, ES, and BR are three equal, first-class language identities — not translations of English.

**Why it matters:** Auto-translated copy sounds wrong to native speakers and hurts SEO in LATAM and Brazil. Each locale needs copy written natively for its market.

**Apply when:** Writing Spanish or Brazilian Portuguese pages. Reviewing any AI-generated copy for ES/BR routes.

---

## 2026-03-22 — /add-tool slash command

**What:** Created `.claude/commands/add-tool.md` — a 12-step skill that gathers tool info, reads BRAND.md and LOCALIZATION.md, creates pages in all 3 languages, updates 5 files (homepage arrays ×3, features-grid-es, features-grid-br), updates lib/route-map.ts, and runs a verification checklist.

**Why it matters:** Adding a tool used to require remembering 9 separate file updates across 3 languages. Missing any one breaks the language switcher or leaves a locale without the tool.

**Apply when:** Any time a new PDF tool is added to the product. Run `/add-tool` instead of updating files manually.

---

## 2026-03-22 — /seo-article slash command

**What:** Created `.claude/commands/seo-article.md` — a skill that writes a complete `page.tsx` for any `/learn/` article following the exact 10-section format: hero, inline CTA, What Is X, How To steps, comparison table, extra techniques, troubleshooting, tool CTA, related articles, FAQ. Reads BRAND.md for voice and colors. Outputs a ready-to-save file.

**Why it matters:** All existing `/learn/` articles follow the same structure and schema pattern. A skill locks in that consistency and prevents schema drift (FAQ schema must match rendered FAQ exactly, HowTo schema must match steps exactly).

**Apply when:** Writing any new SEO article. Always run `/seo-research` first to get the brief, then `/seo-article` to write the page.

---

## 2026-03-22 — /seo-research slash command

**What:** Created `.claude/commands/seo-research.md` — a research skill that runs in a forked context (`context: fork`), searches for competing articles, identifies keywords and search intent, finds content gaps, and returns a structured brief ready to hand off to `/seo-article`.

**Why it matters:** Writing articles without research means guessing at keywords and missing gaps that competitors already cover. The forked context keeps search results out of the main conversation window.

**Apply when:** Before writing any new `/learn/` article. Run `/seo-research [topic]` → get the brief → run `/seo-article`.
