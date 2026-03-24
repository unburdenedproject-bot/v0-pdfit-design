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

## 2026-03-23 — pnpm virtual store can ship incomplete packages; use .npmrc hoisting

**What:** The `v0-pdfit-design` build failed on Vercel because pnpm's virtual store had an incomplete React package (only LICENSE and README, no actual modules). Adding `public-hoist-pattern[]=*react*` and `public-hoist-pattern[]=*react-dom*` to `.npmrc` forces React to the top-level node_modules, fixing resolution.
**Why it matters:** A corrupted pnpm virtual store causes `TypeError: Cannot read properties of null (reading 'useContext')` — a misleading error that looks like a code bug but is actually a package resolution issue. Local `pnpm install` may fix it temporarily, but Vercel installs fresh every time.
**Apply when:** Any Next.js project using pnpm that hits mysterious `useContext` null errors during build — check if `.npmrc` hoists react and react-dom.

## 2026-03-23 — tailwind.config.ts must be committed to git

**What:** The `tailwind.config.ts` was untracked in v0-pdfit-design. Local builds worked because the file existed locally, but Vercel builds failed with "border-border class does not exist" because the config wasn't in the repo.
**Why it matters:** Without the Tailwind config, all custom CSS variables (`border`, `background`, etc.) defined in globals.css have no corresponding Tailwind utilities. The error message doesn't mention the missing config file.
**Apply when:** After cloning or forking a v0-generated project — run `git status` and verify all config files (tailwind.config.ts, postcss.config.mjs, tsconfig.json) are tracked.

## 2026-03-23 — Global sed find-and-replace can break JavaScript identifiers

**What:** Replacing "OmnisPDF" → "PDF.it" across 564 files turned the function name `WelcomeToOmnisPDFPage` into `WelcomeToPDF.itPage` — invalid JS because dots aren't allowed in identifiers. Build failed with a cryptic "Expected '(', got '.'" error.
**Why it matters:** Brand names with dots (PDF.it) are safe in strings and metadata but will break any code identifier (function names, variable names, class names) that incorporates the brand name.
**Apply when:** Any global find-and-replace where the replacement string contains special characters (dots, hyphens, etc.) — always grep for the pattern in code identifiers (function/class/const declarations) separately and fix those manually.

## 2026-03-23 — Remap legacy Tailwind color keys instead of renaming every class

**What:** Instead of changing every `orange-500` class to `teal-500` across 500+ files, remapped the `orange` key in tailwind.config.ts to point to teal hex values. Existing `bg-orange-500` classes now render as `#14D8C4` automatically.
**Why it matters:** Saves hundreds of file edits and prevents missed references. The config is the single source of truth for colors, so changing it once propagates everywhere.
**Apply when:** Any full-codebase rebrand where one color family replaces another — remap in tailwind.config.ts first, then only do targeted edits for hardcoded hex values or cases where the semantic meaning needs to change.

## 2026-03-24 — SVG files dropped into the project root don't serve from Next.js

**What:** A logo SVG placed in the project root (`PDF.it LOGO_Vector.svg`) won't load in the browser. It must be in the `public/` folder and referenced as `/filename.svg`. The filename also can't contain spaces or dots (other than the extension) — rename to underscores before copying.
**Why it matters:** The file existed locally and git showed it as untracked, but the deployed site returned a 404 because Next.js only serves static files from `public/`.
**Apply when:** Any time adding a static asset (image, font, SVG) — always place it in `public/` and verify the path matches the `src` attribute exactly.

## 2026-03-24 — Use text wordmark as fallback when SVG logo fails to load

**What:** When an SVG logo can't be confirmed working, replace the `<img>` tag with a styled text wordmark (`<span>` with inline styles) as a reliable fallback. Revert to `<img>` once the final file is verified.
**Why it matters:** A broken `<img>` renders as a missing image icon — worse than no logo. A text wordmark looks intentional and keeps the brand visible.
**Apply when:** Any time a logo file change is unverified or a designer hasn't delivered the final asset yet.

## 2026-03-24 — Header logo text color must match the header background

**What:** When the header background switched from dark (`#0E0F1E`) to light (`#F3F4FF`), the text wordmark color for "PDF" had to change from `#ffffff` (invisible on light) to `#191B4D` (dark indigo). The `.it` teal stays the same on both.
**Why it matters:** Logo color is tied to the surface it sits on — a color that works on dark will be invisible on light.
**Apply when:** Any time the header background color changes — always check that the wordmark colors have sufficient contrast against the new background.

## 2026-03-24 — For codebase-wide color replacements, target semantic patterns not raw class names

**What:** Rather than replacing all `bg-white` (which would break cards, modals, and form inputs), targeted the page-level patterns: `min-h-screen bg-white` (page wrappers) and `py-N bg-white` / `bg-white py-N` (section backgrounds). Also updated the named `surface` color in `tailwind.config.ts` to propagate via `bg-surface`.
**Why it matters:** `bg-white` appears 500+ times in this codebase across elements that should stay white (cards on dark backgrounds, input fields, modals). A blanket replace would break the UI.
**Apply when:** Any codebase-wide background color swap — identify the structural patterns (page wrappers, section containers) and target those specifically, not the raw class.

## 2026-03-24 — Lock brand identity in CLAUDE.md and BRAND.md before building UI

**What:** Updated CLAUDE.md Brand section and fully rewrote BRAND.md to reflect the final locked PDF.it palette (#0E0F1E dark, #14D8C4 CTA, iridescent wave gradient, Sora/Inter fonts, GTM/GA4 IDs). BRAND.md now has a role-tagged color table instead of a list.
**Why it matters:** Without a single locked source of truth, color values drift across components as new UI is built. CLAUDE.md and BRAND.md together are the authoritative reference — all future UI work should pull from here, not from memory.
**Apply when:** Before any new page, component, or design pass — verify hex values against BRAND.md. If a color decision changes, update BRAND.md and CLAUDE.md first, then propagate to code.

## 2026-03-24 — Applying the same QA fixes across two sibling projects requires checking existing state

**What:** OmnisPDF and PDF.it are sibling codebases with the same architecture but different drift. When applying 6 critical + 5 medium QA bugs from OmnisPDF to PDF.it, 3 of the 6 critical bugs were already partially fixed in PDF.it (eye icons, forgot password, merge multi-file) and 1 of the 5 medium bugs was already done (split single-page validation). Blindly applying all fixes would have created duplicates or conflicts.
**Why it matters:** The two projects are maintained separately and diverge over time. Always read the target file before editing — never assume the same bug exists in both projects.
**Apply when:** Any time porting fixes between OmnisPDF and PDF.it — check each file's current state first, skip what's already done.

## 2026-03-24 — removeFile in custom interfaces must reset ALL state, not just the file

**What:** The OCR interface's `removeFile()` only called `setFile(null)`, leaving `hasError`, `isProcessing`, `isComplete`, `progress`, and `processedFile` in their previous state. If any of those were truthy, the component rendered the wrong UI branch (error screen, processing screen, or success screen) instead of the upload drop zone.
**Why it matters:** React components that use state flags to switch between UI branches (upload → processing → success → error) must reset ALL flags when returning to the initial state, not just the data that changed.
**Apply when:** Any custom tool interface with `removeFile`/`resetInterface` — verify every state variable is reset. Use `resetInterface` as the reference pattern and make `removeFile` match it.

## 2026-03-24 — Reset file input value onClick, not onRemove, to fix both re-upload and cancel bugs

**What:** Adding `onClick={(e) => { (e.target as HTMLInputElement).value = "" }}` to the `<input type="file">` element solves two bugs at once: (1) re-uploading the same file after deletion, and (2) canceling the file dialog not clearing existing selections. The value is cleared before the dialog opens, so onChange only fires when a file is actually selected.
**Why it matters:** The previous approach (resetting in `removeFile`) only fixed re-upload. The onClick approach fixes both and is simpler — one line on the input element instead of getElementById calls scattered across handlers.
**Apply when:** Every `<input type="file">` in the project should have this onClick handler. There are 12 file input components total.

## 2026-03-24 — Browser native password reveal buttons overlap custom eye icons

**What:** Edge's `::-ms-reveal` and Chrome's `::-webkit-credentials-auto-fill-button` pseudo-elements render native password toggle buttons that overlap custom Eye/EyeOff icons. Fix with `[&::-ms-reveal]:hidden [&::-webkit-credentials-auto-fill-button]:hidden` on the input and `z-10` on the custom button.
**Why it matters:** The custom eye icon "disappears" only after the user types — because the browser's native button appears on top. QA reports this as "eye icon disappears after full entry" which is misleading.
**Apply when:** Any password field with a custom visibility toggle — always add the CSS to suppress native browser reveal buttons.

## 2026-03-24 — Auth loading placeholder prevents nav layout shift (flicker)

**What:** The header conditionally renders the Sign In / Dashboard button only when `loading` is false. During the auth check (~100-300ms), nothing renders in that spot, causing all nav items to shift right then snap back. Fix: render a fixed-size placeholder `<div className="w-[100px] h-9" />` while loading.
**Why it matters:** QA reported this as "screen flickers when clicking navigation" — a vague symptom. The root cause is a Cumulative Layout Shift from the auth button appearing after hydration.
**Apply when:** Any sticky header with conditional auth UI — always reserve space with a placeholder during loading state. Match the placeholder width to the widest possible button text (e.g., 120px for "Iniciar Sesión" in ES).

## 2026-03-24 — Persist pricing billing toggle in localStorage

**What:** The pricing page's monthly/annual toggle used `useState("monthly")` which reset on every navigation. Wrapping it with a `useEffect` that reads from `localStorage` on mount and a setter that writes on change preserves the user's selection.
**Why it matters:** Users who select "Annual" and then navigate away lose their selection, which feels broken and biases toward the monthly (lower-revenue) option.
**Apply when:** Any toggle or preference that the user explicitly sets and expects to persist across page navigations — use localStorage.

## 2026-03-24 — COMPLETED.md must be updated with brand-correct references

**What:** After the OmnisPDF → PDF.it rebrand, COMPLETED.md still had "OmnisPDF" in the header and stale GA4/GTM IDs. Line 87 ("All PDF.it branding removed, replaced with OmnisPDF") describes the *original* v0-generated project's state and must stay as-is — reversing it changes the historical meaning.
**Why it matters:** A global find-and-replace on "OmnisPDF" → "PDF.it" in COMPLETED.md inverts the meaning of historical entries that describe what *was* replaced. Historical notes should reflect what happened at that time, not the current brand.
**Apply when:** When updating documentation after a rebrand — only change the document header and forward-looking sections. Leave historical entries that describe past actions as they were.
