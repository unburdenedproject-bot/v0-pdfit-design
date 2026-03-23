# Project Learnings

## 2026-03-22 — Split CLAUDE.md into focused context files

**What:** Broke CLAUDE.md into CLAUDE.md, COMPLETED.md, ENVIRONMENT.md, and LOCALIZATION.md.
**Why it matters:** Keeps Claude's loaded context lean — it only pulls in what's relevant to the task at hand rather than one massive file.
**Apply when:** Any time CLAUDE.md grows beyond ~200 lines or contains sections that are rarely needed together.

## 2026-03-22 — BRAND.md as the Business Brain

**What:** Created BRAND.md containing audience, voice, positioning, and color decisions. All skills reference it automatically.
**Why it matters:** Ensures brand consistency across every skill without having to re-state identity details in each one.
**Apply when:** Adding any new skill that produces user-facing content — make sure it reads BRAND.md first.

## 2026-03-22 — /add-tool skill for cross-locale tool rollout

**What:** Built a `/add-tool` skill that adds any new PDF tool across EN, ES, and BR in a single command.
**Why it matters:** Eliminates the manual, error-prone process of duplicating tool additions across three locales.
**Apply when:** Any new tool is being added to PrecisionConvert — use `/add-tool` instead of editing locale files manually.

## 2026-03-22 — /seo-research then /seo-article workflow

**What:** Built two separate skills: `/seo-research` (research first) and `/seo-article` (write after). They are always run in sequence, never combined.
**Why it matters:** Separating research from writing ensures the article is grounded in real keyword data, not guesses.
**Apply when:** Any SEO content task — always run `/seo-research` before `/seo-article`, never skip straight to writing.

## 2026-03-22 — seo-agent sub-agent for isolated SEO work

**What:** Built a dedicated `seo-agent` sub-agent so SEO work runs independently.
**Why it matters:** Keeps SEO research and writing out of the main conversation context, preventing context bloat when doing long-form content work.
**Apply when:** Any SEO task that would otherwise clutter the main context — delegate to seo-agent.

## 2026-03-22 — Global /wrap-up skill

**What:** Created a global `/wrap-up` skill to run at the end of every session.
**Why it matters:** Ensures learnings are captured consistently before closing out, building a durable knowledge base over time.
**Apply when:** End of every working session — run `/wrap-up` before closing Claude Code.

## 2026-03-22 — Global /multilingual-page skill

**What:** Created a global `/multilingual-page` skill for adding or updating pages across all supported locales.
**Why it matters:** Standardizes the multilingual workflow so no locale gets missed when new pages are added.
**Apply when:** Any time a new page or content block needs to exist in multiple languages.

## 2026-03-22 — Global hooks: auto-format on save and command logging

**What:** Added global hooks to auto-format files on save and log all commands run during a session.
**Why it matters:** Removes manual formatting steps and creates an audit trail of what Claude did without extra effort.
**Apply when:** Already active globally — no action needed, but be aware logs exist if debugging unexpected changes.
