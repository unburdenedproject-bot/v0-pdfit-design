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

## 2026-03-23 — API routes are .js, not .ts — grep must include both extensions

**What:** All processing API routes (`/api/compress-pdf`, `/api/watermark-pdf`, etc.) are `.js` files. Only a handful of utility routes (`/api/upload`, `/api/qr-code`, `/api/pdf-to-txt`) are `.ts`. Grepping only `--include="*.ts"` misses the majority of routes.
**Why it matters:** An audit that only searched `.ts` would report false "all clear" on 25+ routes that hold all the plan-gating and logUsage logic.
**Apply when:** Any time searching or auditing API routes — always grep `--include="*.ts" --include="*.js"` together.

## 2026-03-23 — Client-side plan gates must always include "enterprise" alongside "business"

**What:** The QR code pages had `plan !== "pro" && plan !== "business"` but were missing `&& plan !== "enterprise"`. The API correctly included enterprise; the page component did not. Enterprise users saw a locked UI even though the API would have served them.
**Why it matters:** Enterprise must have access to all Pro and Business features. A missing tier in a client-side check silently blocks paying users without any server error — it's invisible in logs.
**Apply when:** Any time adding or reviewing a client-side plan gate — check that all three paid tiers (pro, business, enterprise) are explicitly listed. The pattern `isPro = plan === "pro" || plan === "business" || plan === "enterprise"` from dashboard-client.tsx is the correct template.

## 2026-03-23 — Every paid API route needs both a plan gate AND logUsage

**What:** `qr-code/route.ts` had the plan gate but no `logUsage` call. Usage for that tool was completely invisible in the database.
**Why it matters:** Without logUsage, there's no analytics, no way to detect abuse, and no daily-count enforcement for free users if a tool ever moves tiers.
**Apply when:** When adding or reviewing any gated API route — confirm both pieces are present: (1) plan check with upgrade_required, (2) `await logUsage(user.id, "tool-name")` on the success path.

## 2026-03-23 — Table extraction: pre-check PDF page count before calling Document AI

**What:** Document AI charges $0.03/page regardless of whether the request ultimately succeeds. The page cap check was happening after the API call. Fixed by using `pdf-lib` to count pages from the buffer first, rejecting before the API call if the user's remaining quota is too low.
**Why it matters:** A Business user with 10 pages remaining uploading a 200-page PDF was getting charged ~$6 for a request that would be rejected. pdf-lib is already a project dependency and page counting is cheap.
**Apply when:** Any time a third-party API charges per unit of input (pages, tokens, conversions) — always validate the input size against quotas before calling the API, not after.

## 2026-03-23 — Run a full audit before shipping a new tier

**What:** The Enterprise tier was added and believed complete, but a targeted audit found 6 bugs — including Enterprise users actively locked out of a tool they paid for, a missing timeout that would cause failures for large paid-tier files, and a cost leak in table extraction.
**Why it matters:** Tier additions touch many files across API routes, page components, and admin tools. It's easy to miss one spot, especially client-side gates that don't produce server errors.
**Apply when:** After any new pricing tier is added — run a sweep of (1) all API routes for missing tier in plan gate, (2) all client-side page components for missing tier, (3) all admin/dashboard pages for display logic, (4) maxDuration on any new or modified processing routes.

## 2026-03-23 — Delegate deep multi-file audits to the Explore sub-agent

**What:** A tier-limits audit across 14 routes, 3 components, and 2 lib files was delegated to the Explore sub-agent in a single prompt. It returned exact file:line findings for all 5 audit areas without consuming the main context window.
**Why it matters:** Reading 14+ files sequentially in the main conversation bloats context and risks losing earlier findings. The sub-agent returns a structured report and discards its working memory.
**Apply when:** Any audit that requires reading more than ~5 files and cross-referencing findings — delegate to Explore with a precise, structured prompt listing exactly what to check and what format to report in.

## 2026-03-23 — anonCookie is returned, not set — each route must call res.cookies.set()

**What:** `checkUsageAndAuth()` returns the cookie object but does not set it. Every route that calls `checkUsageAndAuth` must explicitly call `res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options)` before returning. If a route forgets, the anon counter never increments and that tool gives unlimited free anonymous access.
**Why it matters:** A missing cookie set is silent — no error, no log. The function always returns `allowed: true` for the first 3 anonymous calls, so the user just keeps getting through.
**Apply when:** Any time a new free/anonymous-accessible route is added — verify the anonCookie block is present. Pattern: `if (usage?.anonCookie) { res.cookies.set(...) }` immediately before `return res`.

## 2026-03-23 — Batch processing is UI-only; free users can bypass it via direct API calls

**What:** The multi-file batch gate lives entirely in `processing-interface.tsx` (client-side). No API route checks how many files are in the request. A free user calling `/api/merge-pdf` directly with 50 blobUrls would succeed — counted as 1 daily conversion.
**Why it matters:** This is a known architectural gap. It's not critical because the daily conversion cap still applies, but it means batch is a UX restriction, not a billing control.
**Apply when:** If batch ever becomes a hard billing feature (e.g., a per-batch charge), server-side enforcement will be required. For now, document this as a known limitation and do not rely on it as a revenue control.

## 2026-03-23 — POST-LAUNCH.md as the single source of truth for deferred work

**What:** Created POST-LAUNCH.md with 4 milestone gates (1K/3K/5K/10K subscribers), each unlocking a phase of work. Deferred audit fixes, new languages, new tools, infrastructure migration, and team plans all live here with explicit "do not build until" gates.
**Why it matters:** Without a gated document, post-launch scope creep is likely — every good idea feels urgent. The rule at the bottom ("Growth first. Complexity second.") creates a forcing function to stay focused on acquiring subscribers before building more complexity.
**Apply when:** Any time a good idea comes up that isn't needed for the current launch milestone — add it to POST-LAUNCH.md under the correct phase gate instead of building it now.
