# Project Learnings

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
