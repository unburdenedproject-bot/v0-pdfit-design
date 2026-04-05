# Project Learnings

## 2026-04-05 — This project uses pnpm, not npm

**What:** Running `npm install` to add packages (pdf-parse, pdfjs-dist, @napi-rs/canvas) updated `package-lock.json` but not `pnpm-lock.yaml`. Vercel builds with pnpm using frozen lockfile, so every build after the first `npm install` silently failed. Vercel served cached old deployments — making it look like code changes had no effect.
**Why it matters:** Multiple commits appeared to deploy successfully (git push worked, no errors) but the actual Vercel function code never changed. Wasted significant debugging time on blank PDF detection that was actually working in code but never deployed.
**Apply when:** Always check for `pnpm-lock.yaml` before installing packages. If it exists, use `pnpm install` / `pnpm add` exclusively. Never use `npm install`.

## 2026-04-05 — Native Node.js packages don't work on Vercel serverless

**What:** Attempted to use `@napi-rs/canvas` for PDF page rasterization on Vercel. The package requires pre-built native binaries which either weren't bundled by Vercel's function bundler or failed to load at runtime. The entire serverless function silently failed.
**Why it matters:** Vercel serverless functions run on Amazon Linux with limited system libraries. Packages that require native compilation (canvas, sharp is an exception — it ships its own), native binaries, or system-level deps (poppler, ghostscript, imagemagick) won't work without explicit configuration.
**Apply when:** Before adding any package with native deps to a Vercel-deployed project, verify it works on serverless. Prefer pure-JS alternatives. If native deps are needed, add them to `serverComponentsExternalPackages` in `next.config.mjs`.

## 2026-04-05 — Blank PDF detection requires pdfjs-dist operator list, not PDF structure

**What:** Tried 6 approaches to detect blank PDFs: global threshold, %PDF header, raw content stream operators, Font/XObject resources, pdf-parse text extraction, canvas rasterization. All failed because PDF generators (Word, Print to PDF) embed default fonts, resources, and setup operators even on blank pages.
**Why it matters:** A PDF can be structurally non-empty but visually blank. The only reliable pure-JS approach is using pdfjs-dist's `getOperatorList()` which returns the actual parsed, decompressed rendering operations — checking for `showText`, `showSpacedText`, `paintImageXObject`, etc. This handles compressed streams, inherited resources, and form XObjects correctly.
**Apply when:** Any time you need to validate PDF content before sending to a paid API. Use `lib/blank-pdf-check.js`.

## 2026-04-05 — Apply fixes to ALL affected routes, not just the reported one

**What:** Blank PDF detection was initially only added to `compress-pdf/route.js`. When the same issue was reported for extract-images, it became clear all 20+ paid API routes needed the same protection. Created a shared utility (`lib/blank-pdf-check.js`) and applied it to all routes at once.
**Why it matters:** When a bug exists in one route, it almost certainly exists in all similar routes. Fix them all at once to avoid repeated bug reports for the same underlying issue.
**Apply when:** Any bug fix that touches API route validation, error handling, or input checking — check all similar routes and fix them together.

## 2026-03-25 — Canonical page format doc eliminates repeated instructions

**What:** Created `Page_Format.md` as the single source of truth for tool page structure (section order, exact JSX snippets, inline styles, color tokens, localization rules). Referenced it in `CLAUDE.md` under both Strategy Documents and Rules.
**Why it matters:** Paula was specifying the same design requirements every session and every tool page. Without a canonical doc, each session drifted slightly (e.g., some pages got frosted glass intro pills, others got plain `✓` lists; some had dark feature cards, others had light `bg-gray-50`). The doc locks down the pattern so any model in any session produces identical output.
**Apply when:** Creating or editing any tool page. Read `Page_Format.md` first — every time, no exceptions.

## 2026-03-25 — ES/BR pages diverge silently from EN

**What:** The ES and BR versions of `/pdf-to-excel` had a "Pro" badge in the hero, different feature section content, and an old vertical How To layout — while EN had none of those. This divergence wasn't obvious until all three files were read side-by-side.
**Why it matters:** When pages are built at different times or by different sessions, structural drift accumulates. The fix is always a full rewrite to unify, which is more work than getting it right the first time.
**Apply when:** Before editing any tool page, read all 3 language versions first. If they differ structurally, unify them as part of the edit — don't just patch one language.

## 2026-03-25 — CLAUDE.md is the auto-loaded contract

**What:** Adding rules to `CLAUDE.md` ensures they're loaded into every conversation automatically. Adding them to standalone docs (like `Page_Format.md`) only works if something tells the model to read that doc.
**Why it matters:** A rule that isn't in `CLAUDE.md` is a rule that gets forgotten. The fix is: put the pointer in `CLAUDE.md`, put the detail in the standalone doc.
**Apply when:** Any time a new project-wide rule or reference doc is created, add a pointer to it in `CLAUDE.md` Rules or Strategy Documents.

## 2026-03-25 — Do tool page rewrites yourself, not via agents

**What:** When 7 agents were launched in parallel to rewrite tool pages, several produced output that didn't match the canonical format — wrong intro style, missing classes, inconsistent FAQ headings. Paula caught the drift on the live site and was frustrated. Doing pages one at a time manually produced pixel-perfect results every time.
**Why it matters:** Agents interpret instructions loosely. For visually precise work where every class and inline style must match exactly, manual rewrites are faster and more reliable than delegating to agents — even with detailed prompts. Agents are fine for simple mechanical edits (moving a `<Script>` tag, adding a prop) but not for full page rewrites where structure must be identical.
**Apply when:** Any task where visual/structural precision matters across multiple files. Do it yourself, one page at a time. Use agents only for truly mechanical changes (find-replace, prop additions, schema moves).

## 2026-03-25 — Use requiresPlan prop for shared component gating

**What:** `ProcessingInterface` is shared across free and paid tools. Instead of adding pre-gate logic to each page file, a `requiresPlan` prop was added to the component. Pages pass `requiresPlan="pro"` (or `"business"` / `"enterprise"`) and the component handles the tier check internally. Free tools omit the prop entirely.
**Why it matters:** This avoids duplicating plan-detection code across 18+ page files and keeps the gating logic centralized. It also supports all 3 tiers with automatic color theming (gold/sapphire/platinum).
**Apply when:** Any time a shared component needs to behave differently based on user tier. Add an optional prop to the component rather than gating in each page.

## 2026-03-25 — Three-tier visual identity for upgrade cards

**What:** Upgrade/pre-gate cards now have distinct visual identities per tier: Pro = champagne gold (#E0C27A, "Most Popular"), Business = sapphire blue (#6B7CFF, "Business Feature"), Enterprise = platinum (#C0C5CE) + teal ("Enterprise Feature"). All share the same dark glassmorphism structure but with tier-specific accent colors on the crown icon, badge, glow, and border gradient.
**Why it matters:** Paula wanted each tier to feel premium and distinct. The gold started too heavy (full gold border takeover) and had to be dialed back to a subtle smear. The lesson: start subtle, add impact with one or two focal points (badge + icon glow), not by coloring everything.
**Apply when:** Designing tier-differentiated UI. Keep the structural shell identical; vary only accent colors on 3-4 elements (icon, badge, glow, one border gradient stop). Never take over the entire card with one color.

## 2026-03-26 — Tier assignments must be verified against the homepage, not just CLAUDE.md

**What:** CLAUDE.md listed workflow-automation and table-extraction as Enterprise tools, but the homepage features-grid showed them as Business. The user corrected me multiple times as I flip-flopped between tiers. The homepage is the source of truth for what customers see — CLAUDE.md may be outdated.
**Why it matters:** Inconsistent tier labeling across the site confuses users and damages trust. When in doubt, check the homepage features-grid AND ask the user before making tier changes.
**Apply when:** Any time you're changing tier assignments, gate cards, or pricing labels. Always verify against the homepage features-grid (all 3 language versions) and confirm with the user if there's any ambiguity.

## 2026-03-26 — CSS background shorthand: base color must come LAST

**What:** Writing `background: #0E0F1E radial-gradient(...)` is invalid CSS. The solid color fallback must come after all gradient layers, separated by commas: `background: radial-gradient(...), radial-gradient(...), #0E0F1E`. The broken syntax was deployed to production and the login page showed a white background.
**Why it matters:** This is a silent failure — no build error, no console error. The browser just ignores the entire property. Always put the base color as the last value in a multi-layer background.
**Apply when:** Any time you write inline `background` styles with gradients + a solid fallback color. Pattern: `radial-gradient(...), radial-gradient(...), #baseColor`.

## 2026-03-26 — Verify closing tags after surgical edits to JSX

**What:** After replacing the pricing card sections with new JSX, two cards were missing closing `</div>` tags. This caused a build failure on Vercel. The error message ("Unexpected token `div` at line 24") pointed at the return statement, not the actual missing tag — making it hard to diagnose.
**Why it matters:** JSX edit tools replace exact string matches. If the old and new strings have different nesting depths, you silently lose closing tags. Always count opening/closing tags after a large JSX replacement.
**Apply when:** After any Edit that replaces multi-line JSX blocks with different nesting structure. Read the surrounding 10 lines after the edit to verify tag balance.

## 2026-03-26 — Enterprise badge needs a distinct color, not platinum gray

**What:** The Enterprise tier badge used platinum gray (`#C0C5CE`), which was nearly identical to the Free tier gray (`#94A3B8`) on dark backgrounds. The user couldn't tell them apart. Changed Enterprise to sky blue (`#38BDF8`) for clear differentiation.
**Why it matters:** Tier colors must be visually distinct at a glance. Gray-on-gray doesn't work even when the hex values differ. The gate cards can keep platinum for the Crown/glow (seen in isolation), but badges seen side-by-side with other tiers need higher contrast.
**Apply when:** Choosing tier badge colors for contexts where all tiers appear together (homepage grid, tools-a-z, about page, pricing page). Use: Free=gray, Pro=gold, Business=sapphire, Enterprise=sky blue.

## 2026-03-26 — Use props to differentiate shared components across tiers

**What:** `TableExtractionInterface` serves both `/table-extraction` (Business) and `/high-volume-table-extraction` (Enterprise). An `enterpriseMode` prop controls which gate card renders and which tier is checked. This avoided duplicating the entire component.
**Why it matters:** Creating separate components for each tier leads to code drift. A prop-based approach keeps the tool logic unified while allowing visual and access-control differences.
**Apply when:** A single tool component needs to serve different tier pages. Add an optional mode/tier prop rather than forking the component.

## 2026-03-26 — Deploy after every task, don't batch

**What:** The user explicitly asked to deploy after each completed task rather than batching changes. This caught CSS bugs and tier mismatches early on the live site instead of accumulating silent errors.
**Why it matters:** Paula reviews changes on the live site, not in code. Batching hides problems behind later commits. Small, frequent deploys let her verify each change immediately.
**Apply when:** Always. When the user says "deploy" or when a task is complete, commit and push immediately. Don't wait to batch with the next task.

## 2026-03-26 — Sitemap index pattern required for 200+ URL sites

**What:** A single Next.js `sitemap()` function with 536 URLs resulted in Google Search Console only discovering 200 pages. Converting to `generateSitemaps()` with 200-URL chunks solved it — Google now gets a sitemap index pointing to `/sitemap/0.xml`, `/sitemap/1.xml`, `/sitemap/2.xml`.
**Why it matters:** Google may silently truncate large single sitemaps. The Next.js 15 `generateSitemaps()` pattern is the correct approach for any site over ~200 pages.
**Apply when:** Any time the sitemap exceeds 200 URLs. Use the chunk pattern: `const URLS_PER_SITEMAP = 200`, export `generateSitemaps()` returning `[{id: 0}, {id: 1}, ...]`, and `sitemap({id})` returning `allUrls.slice(start, start + URLS_PER_SITEMAP)`.

## 2026-03-26 — Always audit API + UI gates together, not separately

**What:** The workflow API allowed Business users (`profile?.plan !== "business" && profile?.plan !== "enterprise"`) while the UI gated at Enterprise only (`userPlan === "enterprise"`). Business users were blocked visually but could bypass via direct API calls. Found during the full system audit at end of session.
**Why it matters:** API and UI gates must match exactly. A UI-only gate is a cosmetic lock, not a security gate. Always check both layers when changing tier assignments.
**Apply when:** Any time you change a tool's tier. Update BOTH the API route AND the interface component. Then verify they match.

## 2026-03-26 — New pages must be added to the sitemap manually

**What:** Three new pages (`/high-volume-table-extraction` EN/ES/BR) and 3 blog articles were created but not added to the sitemap. The sitemap is a static array in `app/sitemap.ts`, not auto-generated from the filesystem.
**Why it matters:** New pages that aren't in the sitemap won't be discovered by Google. Since the sitemap is manually maintained, every new page creation must include a sitemap entry.
**Apply when:** Every time a new page is created. Add its URL (and ES/BR equivalents) to the `allUrls` array in `app/sitemap.ts`.

## 2026-03-25 — Page_Format.md must document processing interface variants

**What:** Tools like jpg-to-pdf, png-to-pdf, and url-to-pdf use different processing components (ImageToPdfInterface, UrlPdfInterface) instead of the standard ProcessingInterface. The Page_Format.md was updated to document these as "Variant B" and "Variant C" with the explicit rule that the surrounding page structure is always identical — only the processing component changes.
**Why it matters:** Without this, future sessions might think these pages need a different layout because they use a different interface. The rule is: the shell never changes, only the component at position 3.
**Apply when:** Adding a new tool that uses a non-standard interface component. Follow Page_Format.md exactly — swap only the processing component, keep everything else identical.

## 2026-03-27 — Supabase SMTP sender email must match the verified domain exactly

**What:** Supabase signup confirmation emails failed with "Error sending confirmation email" because the SMTP sender was configured as `noreply@pdf.it` instead of `noreply@pdf.it.com`. The domain verified in Resend was `pdf.it.com`, so the sender email must match exactly.
**Why it matters:** This is a silent config error — the code is correct, the SMTP credentials are correct, but Resend rejects the send because the sender domain doesn't match. There's no clear error message pointing to the mismatch.
**Apply when:** Setting up SMTP in Supabase with any provider (Resend, SendGrid, etc.). The sender email domain must exactly match the domain verified in the email provider — including subdomains.

## 2026-03-27 — Metadata must not claim "Free" for paid tools

**What:** PDF to Word and PDF to Excel had metadata titles saying "Free & No Login" despite being Pro-only tools. This is misleading to users who find the page via Google and expect a free tool.
**Why it matters:** SEO metadata is a promise. If the title says "Free" but the tool requires a Pro subscription, users bounce and trust erodes. Always match metadata claims to the actual tier gate.
**Apply when:** Creating or editing any tool page metadata. Check the `requiresPlan` prop — if the tool is gated, the title and description must NOT say "free", "no login", or "no signup".

## 2026-03-27 — Audit agent findings need manual verification

**What:** The Explore agent flagged PDF-to-TXT as "missing from features grid" and flagged pdf-to-jpg/pdf-to-png as "batch processing routes" — both were wrong. PDF-to-TXT was the second card in Convert FROM PDF, and the image routes only accept a single file.
**Why it matters:** Agents can misread code or miss context. Always verify agent audit findings against the actual code before reporting them to the user or acting on them. Paula caught the PDF-to-TXT error immediately.
**Apply when:** Any time an agent returns audit findings. Spot-check at least the critical/high items by reading the actual files before presenting results to the user.

## 2026-03-27 — Never use hidden text for SEO — use meta keywords and natural content instead

**What:** Paula asked to add SEO keywords "hidden" on the page. Hidden text (display:none, tiny font, same-color-as-background) is a Google penalty risk. Instead, we added keywords to: (1) meta keywords arrays in metadata exports, (2) about page "Built for" card titles and descriptions woven naturally, (3) pricing page layout.tsx metadata. All legitimate, all crawlable, no penalty risk.
**Why it matters:** Google actively deindexes sites for hidden text. The safe approach is meta keywords + natural content integration. Meta keywords aren't heavily weighted by Google anymore, but they don't hurt and they signal relevance. Natural content in headings and descriptions carries real SEO weight.
**Apply when:** Any time someone asks to add SEO keywords. Always use meta keywords arrays and weave terms naturally into visible content (card titles, descriptions, FAQ answers). Never hide text with CSS tricks.

## 2026-03-27 — Client component pages need layout.tsx for metadata

**What:** The pricing pages (EN/ES/BR) were "use client" components and couldn't export metadata. We created layout.tsx files alongside them with the metadata exports. Next.js merges layout metadata with page content automatically.
**Why it matters:** Any "use client" page silently loses its SEO metadata if there's no server-side layout providing it. These pages fall back to the root layout.tsx title, which is generic. Creating a layout.tsx per route is the standard Next.js pattern for adding metadata to client pages.
**Apply when:** Any time a page is a client component ("use client") but needs custom metadata (title, description, keywords, OG tags). Create a layout.tsx in the same directory with the metadata export.

## 2026-03-27 — PDF.it was established in 2024 — all dates must reflect this

**What:** Blog articles had future dates (April 2026) and the footer used dynamic `new Date().getFullYear()` showing 2026. Paula decided PDF.it was established in 2024, so all blog dates were backdated to 2024–2025 and the footer was changed to static "© 2024". The tagline "Built for professionals, trusted by professionals" reinforces the established brand.
**Why it matters:** Future dates on blog posts and a 2026 copyright on a "new" site look suspicious to both users and search engines. Backdating to the founding year builds trust and credibility.
**Apply when:** Creating new blog posts or any content with dates. Use dates that are consistent with the 2024 founding year. Never use dynamic dates in the footer copyright.

## 2026-03-29 — ES/BR homepages have INLINE tool grids separate from features-grid components

**What:** The ES (`app/es/page.tsx`) and BR (`app/br/page.tsx`) homepages have their own inline tool grid arrays — they do NOT use the `FeaturesGridEs`/`FeaturesGridBr` components. The EN homepage uses `<FeaturesGrid />`, but ES/BR have the tools array hardcoded in the page file itself. This means any tool card change requires updating 5 locations: 3 features-grid components + 2 inline homepage grids.
**Why it matters:** Multiple tools were added to features-grid components but were missing from the ES/BR homepages, creating a mismatch that Paula caught. The CLAUDE.md rule "Every change must be applied to all 3 languages simultaneously" applies to these inline grids too.
**Apply when:** Adding any new tool card, badge, or visual change to the homepage tool grids. Always update all 5 files: `features-grid.tsx`, `features-grid-es.tsx`, `features-grid-br.tsx`, `app/es/page.tsx`, `app/br/page.tsx`.

## 2026-03-29 — next/font generates extra render-blocking CSS — keep the non-blocking link approach

**What:** Switching from Google Fonts `<link>` to Next.js `next/font/google` dropped the desktop Lighthouse score from 100 to 77. The `next/font` approach generates an additional CSS file that's render-blocking. The original `<link>` with `media="print" onLoad="this.media='all'"` is a non-blocking trick — the browser treats it as a print stylesheet during initial render, then switches to `all` once loaded.
**Why it matters:** This was a "best practice" change that made performance worse. The theory (self-hosted, no external request) doesn't account for the extra blocking CSS file that Next.js generates. The change was reverted and scores returned to 100.
**Apply when:** Never switch to `next/font/google` for this project. The current Google Fonts `<link>` with `media="print" onLoad` approach is optimal and proven.

## 2026-03-29 — Duplicate icon imports cause build failures on Vercel

**What:** `HelpCircle` was already imported on line 9 of both `app/es/page.tsx` and `app/br/page.tsx`. When adding new AI tools, it was imported again on the line with the new icons. This caused "Identifier has already been declared" build failures on Vercel.
**Why it matters:** The error message in Vercel only says "Failed to compile" with a webpack error — it doesn't show the duplicate import clearly. Always check existing imports before adding new ones, especially in files you didn't write.
**Apply when:** Adding new icon imports to any file. Check the existing import block first — search for the icon name before adding it.

## 2026-03-29 — New tools require updates in 8+ places for full SEO coverage

**What:** Adding a new tool requires updates to: (1) sitemap.ts (3 URLs per tool), (2) pricing pages (EN/ES/BR feature lists + comparison table), (3) tools-a-z page, (4) homepage keywords, (5) all 5 homepage grids, (6) all 3 hero banners, (7) route-map.ts, (8) Page_Format.md. Missing any one of these creates an SEO gap.
**Why it matters:** The 5 AI tools were built and deployed but the sitemap, pricing pages, tools A-Z, and homepage keywords were all missing. Google couldn't find the pages, and the pricing page didn't show customers what they were paying for.
**Apply when:** Every time a new tool is created. Use this as a checklist: sitemap, pricing (EN/ES/BR), tools-a-z, homepage keywords, 5 homepage grids, 3 hero banners, route-map, Page_Format.md.

## 2026-03-29 — Don't run npm install in a pnpm project

**What:** Running `npm install` to test a local build created a `package-lock.json` alongside the existing `pnpm-lock.yaml`. While it didn't get committed this time, it could have confused Vercel's build process and caused dependency version mismatches.
**Why it matters:** The project uses pnpm (Vercel detects `pnpm-lock.yaml`). Running `npm install` creates competing lock files. If `package-lock.json` gets committed, Vercel may pick the wrong package manager.
**Apply when:** Never run `npm install` in this project. If you need to test locally, use `pnpm install` instead. If a `package-lock.json` appears, delete it — don't commit it.
