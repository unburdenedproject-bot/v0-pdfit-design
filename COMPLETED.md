# PDF.it - Accomplished Work

## Launch Week Prep — Newsletter Automation, Dashboard Growth, Cancel Survey, Marketing, Brand (April 16, 2026)

Massive ops + marketing day. All 7 solo-builder priorities completed, newsletter email system built, launch-week deliverables drafted.

### Newsletter email automation (end-to-end, like LinkSplasher)
- `lib/newsletter-emails.ts` — 5-email drip sequence with branded HTML templates (LinkSplasher aesthetic: bold gradient header, clean white body, teal numbered lists, one rounded pill CTA, minimal footer)
- Welcome email fires instantly on newsletter signup (modified `/api/newsletter/route.ts`)
- Daily cron `/api/cron/newsletter-drip` runs at 9 AM PT, sends the next eligible email per subscriber (Day 3 nudge, Day 7 AI tools, Day 14 upgrade prompt, Day 30 feedback ask)
- Deduplication via `newsletter_emails_sent` Supabase table (`scripts/011_newsletter_emails_sent.sql`)
- Added to `vercel.json` cron schedule
- Email style iterated 3 times before Paula approved — final design matches LinkSplasher's clean aesthetic. Style preference saved to memory for all future emails.

### Dashboard as growth asset (#4) — EN/ES/BR
- Monthly stats card now shows "~X hours saved" (3 min per conversion)
- Shows "Favorite: [tool name]" when there's activity history
- AI discovery banner for paid users who haven't tried any AI tool yet — different CTAs for Pro vs Business/Enterprise tier
- All 3 locale dashboards updated (dashboard-client.tsx, dashboard-client-es.tsx, dashboard-client-br.tsx) + all 3 server pages pass new props

### Cancel survey (#5) — complete end-to-end
- `scripts/010_create_cancellation_reasons.sql` — Supabase table with Stripe event ID dedupe
- Webhook handler (`/api/webhook/route.ts`) captures `cancellation_details.feedback` + `.comment` from Stripe when user marks for cancellation
- Non-blocking insert (doesn't break subscription flow if it fails)
- Uses `previous_attributes` check to fire only on the actual cancellation transition
- Stripe Customer Portal configured by Paula to ask reason + comment on every cancel

### Scheduled triggers (4 remote agents)
- Daily health check — 8 AM PT, pings homepage/sitemap/robots.txt, emails report via Gmail MCP
- Weekly review reminder — Mondays 9 AM PT, emails dashboard links + "run /weekly-review" prompt
- Monthly churn review — 1st of month, emails the SQL queries for cancellation_reasons
- Stripe CLI re-auth reminder — July 10 annually, emails renewal nudge

### Launch-week marketing deliverables (text, not code)
- Personal launch email template (3 subject lines, warm-intro body for Gmail BCC batches)
- Product Hunt listing (tagline, description, first comment)
- LinkedIn personal post
- Reddit post (r/Entrepreneur, r/SideProject)
- Hacker News "Show HN" post
- All saved in conversation history; Paula will copy-paste on launch day

### Brand updates
- ™ added to PDF.it across all emails + website footers (EN/ES/BR)
- Copyright year updated 2024 → 2025 per Paula's instruction
- CLAUDE.md rule updated to reflect new copyright standard

### Infrastructure completed today
- Upstash rate limiter recreated and reconnected (UPSTASH_ env vars now accepted by middleware + contact route)
- Kill switch activated — 37 feature flags in Supabase, SQL migrations 008+009 run
- Observability sweep completed — all 16 tool interfaces instrumented with trackToolEvent → GA4
- CI workflow fixed — E2E + Integration tests skip on push (secrets not configured)
- RUNBOOK.md reviewed and corrected (factual errors + new sections added)
- Env var compatibility: middleware + contact route accept both KV_REST_API_* and UPSTASH_REDIS_REST_* naming
- Cost alerts configured: Vercel $300 cap, OpenAI $100 cap, iLoveAPI alerts, Stripe fraud/dispute/refund alerts
- Supabase RLS hardened: webhook_events, newsletter_subscribers, contact_messages, user_feedback
- "Prevent leaked passwords" enabled in Supabase Auth

## Solo Builder Priorities — Kill Switch, Observability, Weekly Review (April 15, 2026 — evening)

Second session of the day, focused on solo-operator infrastructure gaps identified in a strategy conversation.

### New doc: `SOLO-PRIORITIES.md`
Framework of 7 priorities a non-technical solo founder tends to miss: observability, emergency runbook, kill switches, dashboard as growth asset, cancel survey, cost alerts, weekly ritual. Each with status, first step, and replication pattern.

### Priority #3 — Kill switch per tool (COMPLETE)
Paula can now disable any tool instantly from Supabase without a redeploy. Fails open if Supabase is unreachable.
- `scripts/008_create_feature_flags.sql` — Supabase table `feature_flags` seeded with all tool slugs (32 rows)
- `scripts/009_fix_feature_flag_slugs.sql` — amendment to align seed slugs with actual `/api/<slug>/` directory names (removed 4 wrong, added 9 missing)
- `lib/feature-flags.ts` — `isToolEnabled(slug)` helper with 30s in-memory cache + fail-open on Supabase errors
- 35 tool API routes wired with the flag check at the top (one agent-driven sweep — commit `a8e32de`)
- `components/processing/soft-error-card.tsx` — new optional `variant` prop + auto-detection of "temporarily unavailable" messages so 503 responses route to the "Temporarily Unavailable" Clock-icon card automatically. No caller changes needed.
- Reference implementation: `app/api/chat-with-pdf/route.ts`

### Priority #1 — Observability (PARTIAL)
- `lib/analytics.ts` — `trackToolEvent(tool, event, data)` + `classifyError(status, message)` helpers. Pushes to the existing GTM dataLayer under a single event name `tool_event` with dimensions `tool`, `tool_event`, `tier`, `file_size_mb`, `latency_ms`, `error_type`, `format`.
- **Instrumented:** `processing-interface.tsx` (covers ~26 tools), `pdf-summarizer-interface.tsx`, `question-generator-interface.tsx`.
- **Remaining to wire** (mechanical copy-paste): chat-with-pdf, translate-pdf, ats-optimizer, smart-extraction, table-extraction, resume-builder, esign, pdf-compare, phone-scan-cleanup, redaction, workflow, url-pdf, qr-code.
- **How to use in GA4:** Wait 24h, then GA4 → Explore → filter event name `tool_event` → build a funnel `file_selected → process_start → process_complete → result_downloaded` segmented by `tier`.

### Priority #7 — Weekly review skill (SHIPPED)
- `~/.claude/commands/weekly-review.md` — new `/weekly-review` slash command. Produces a structured Monday ops report (revenue delta, top tools, top errors, support themes, costs, one experiment for the week). Instructions tell Claude to be honest, keep experiment to one thing, and end with specific pep not generic motivation.

### SEO cron false-positive fix
`app/api/cron/seo-health/route.ts` was reporting "Homepage missing hreflang" because it checked lowercase but Next.js emits `hrefLang` (camelCase). Changed to case-insensitive check. Also applies to og:title and canonical for future framework updates. Commit `d31f941`.

### Upstash rate limiter gap discovered
The Upstash Redis DB `pdfit-ratelimit` (internal name `decent-bobcat`) is marked DELETED. Rate limiting is silently OFF across the site (middleware is fail-open by design). Documented in `CONTINUE-HERE.md` as urgent. Fix: create new DB via Vercel's Upstash integration → env vars auto-populate → redeploy.

### New docs created
- `CONTINUE-HERE.md` — single-source status brief and to-do list for resuming in the next session
- `SOLO-PRIORITIES.md` — the 7-priority framework + per-item status

### CLAUDE.md updates
- Added "Feature Flags (Kill Switch Per Tool)" section: every new API route must check `isToolEnabled(slug)`

---

## UX Polish Wave — No-Red Messages, Header Search, About CTA, File-Size Labels (April 15, 2026)

End-to-end polish pass focused on tester feedback and the "no red for user messages" brand rule.

### No-Red Audit Sweep (commits `ee81ead`, `3e31c31`, `429791b`)
Removed red alert-dot styling from **every user-facing message** across the codebase. Red reads as a system failure; Paula's rule is now: red is reserved for truly unrecoverable backend failures only.

- **New shared component:** `components/processing/soft-error-card.tsx` — exports `<SoftErrorCard />` and `isUserInputError(msg)` guard. Teal→indigo gradient icon circle on pastel-blue background, matching the invalid-PDF cards on ats-optimizer / translate-pdf / summarizer / question-generator.
- **38 files total in the sweep** (commit `429791b`):
  - Auth pages (EN/ES/BR): signup, login, reset-password, register/registro/cadastro — dark-theme variant of the soft card
  - Auth error pages (EN/ES/BR): full-page red circle → teal→indigo gradient circle
  - Contact forms (EN/ES/BR), dashboard billing errors (EN/ES/BR), newsletter signup
  - 13 tool interfaces with inline red banners (ats-optimizer had 5 instances)
- **Soft-card guard added to 9 more tools** (esign, ocr-pdf, phone-scan-cleanup, redaction, split-pdf, rotate-pdf, unlock-pdf, watermark-pdf, workflow) so user-input errors (File Too Large, Unsupported, Empty) never hit their red full-page failure screen. Red screens now only fire for genuine backend failures.
- **Error heading matcher** now routes "File too large" messages to the specific "File Too Large" heading (commits `f2f2d3d`, `4135385`) by prepending the string to both `lib/client-file-validator.ts` and `lib/upload-to-blob.ts` error messages — so every tool's `isUserInputError` picks it up correctly.
- **Documented in 3 places** for permanence: new "Error & Info Messages" section in BRAND.md, new rule line in CLAUDE.md, and a feedback memory file (`memory/feedback_soft_error_card.md`) that survives across sessions.

### Header redesign (commit `26bbc3c`)
- **Removed About + Contact** from desktop + mobile nav in all 3 locales (they remain in the footer, which is the conventional placement)
- **Added compact tool search** in all 3 headers — Search icon + input (`w-44 lg:w-52`) between Blog and the Language dropdown. On Enter, navigates to the locale's tools page with `?q=<query>`:
  - EN → `/tools?q=...`
  - ES → `/es/herramientas?q=...`
  - BR → `/br/ferramentas?q=...`
- `components/tool-search.tsx` now accepts an `initialQuery` prop; `components/features-grid.tsx` reads `?q=` via `useSearchParams` and seeds the in-page filter. Wrapped `<FeaturesGrid />` in `<Suspense>` on `/` and `/tools` (Next.js requirement when a client child uses `useSearchParams`).
- Known gap: ES/BR `features-grid` components don't yet have an in-page search, so `?q=` is ignored on those locales for now (user still lands on the tools page). Follow-up only if requested.

### About page CTA (commit `1c1b8f3`)
Added a **"Compare all plans →"** teal button below the 4 plan cards on `/about`, `/es/acerca`, `/br/sobre`, linking to the relevant `/pricing` route. Subtitle reminds about the 30-day free trial. Gives users a clear next step instead of a dead end after reading the plan previews.

### Upload size-limit labels (commit `aa35254`)
Every upload dropzone now displays the plan-aware max file size (`up to 25MB` / `up to 200MB` / `up to 1GB`). Added `getSizeLimitLabel(userPlan)` rendering to the 4 tools that didn't already have it:
- `esign-interface.tsx`
- `pdf-compare-interface.tsx` (both dropzones)
- `workflow-interface.tsx`
- `phone-scan-cleanup-interface.tsx` (added `userPlan` fetch since it wasn't tracking plan)

All other tools (8 AI + everything using `processing-interface.tsx`) already had it via the shared `file-dropzone.tsx`.

### Pdf-summarizer premium card (commit `294d97e`)
Added `isInvalidPdf` state + premium soft card (EN/ES/BR copy) so blank/image-only PDFs show "We couldn't read this PDF" with export/OCR tips instead of a harsh error. Matches the pattern already used on ats-optimizer and translate-pdf.

### Question-generator hardening + download bar (commits `9952992`, `7a55a10`)
- **Forced JSON response** from OpenAI by adding `response_format: { type: "json_object" }` + prompt-level instruction to return `{"is_valid": false}` for blank/unreadable PDFs
- Parse-failure OR `is_valid: false` OR empty questions array now returns HTTP 422 with friendly message → client renders the premium soft card (EN/ES/BR copy) instead of the old "AI returned invalid format" red banner
- **Download bar promoted** from tiny text-link buttons in the header to a prominent `bg-slate-50 border-t` footer bar inside the result card: PDF as filled brand-teal primary, TXT as outlined teal secondary. Set the pattern documented in CLAUDE.md's "download buttons must be visually prominent" rule.

### Footer cleanup (commit `f3fb70e`)
Removed the X (Twitter) icon + link from all 3 footers (`footer.tsx`, `footer-es.tsx`, `footer-br.tsx`) plus the unused `XLogo` helper. Facebook, Instagram, LinkedIn remain.

### BRAND.md updates (commits `ee81ead`, `3e31c31`)
- New "Error & Info Messages" section documenting the no-red rule, the soft-card pattern (exact colors, component reference), specific-heading requirements, and toned-down voice ("We couldn't read this PDF" over "ERROR: PDF INVALID")
- CLAUDE.md "Rules - Always Follow" updated with a mirror line so future sessions don't regress

## AI Tools Migrated to OpenAI Files API + Bug Sweep (April 14, 2026)

A large post-launch stability pass. Root cause of most AI-tool failures: text-extraction chain (iLoveAPI → pdf-parse → pdfjs-dist → Document AI) is fragile on Vercel serverless. Custom fonts, scanned pages, or unusual PDFs consistently broke all four extractors. Fix: send the PDF directly to OpenAI's Files API and let GPT-4o-mini read it natively.

### Routes rewritten to OpenAI Files API (no more text extraction)
- `app/api/question-generator/route.ts` — commit `2b2b938`
- `app/api/ats-optimizer/route.ts` — commit `f0f37b9` (+ premium "invalid resume" card, commit `7b9c9f5`)
- `app/api/smart-extraction/route.ts` — commit `4faf6c1`
- `app/api/chat-with-pdf/route.ts` — commit `51715b2` (file uploaded once, reused via `fileId` across chat turns)
- `app/api/translate-pdf/route.ts` — commits `d12bc55`, `f36f4a6`, `09c8565`

Pattern: `POST /v1/files` with `purpose=user_data` → reference via `{type:"file", file:{file_id}}` in chat completions → `DELETE /v1/files/{id}` in finally block. Error-sanitizer regex now scrubs "OpenAI" alongside iLoveAPI/Document AI/CloudConvert.

### New user-visible features
- **Question-generator:** PDF + TXT download options (commit `141147a`)
- **Smart-extraction:** Excel + CSV + JSON downloads with a prominent download bar (commits `1862870`, `c8f61ad`)
- **Premium "can't read" cards:** ats-optimizer and translate-pdf now show a soft gradient card with tips (Word/Docs export, OCR first, password check) instead of red system-error banners when the PDF is blank/scanned

### Bug fixes in this wave
- **Generate-resume hallucinations** — SKILLS section was being invented when user typed "No Skills". Fixed with dynamic section whitelist: only sections with real content are passed to the model (commit `211ce68`).
- **Table-extraction 500 → working** — resolved a chain of issues: OpenSSL decoder error from malformed `GOOGLE_CLOUD_PRIVATE_KEY` (missing `-----BEGIN PRIVATE KEY-----` markers), trailing space in `GOOGLE_CLOUD_PROCESSOR_ID`, and Form Parser's poor accuracy on borderless/merged-cell tables. Fixed by re-pasting the service account key, trimming the processor ID, and switching the processor to Google's **Layout Parser**.
- **Contact form "An unexpected error occurred"** — Upstash Redis rate-limit fetch was throwing. Made rate limiter fail-soft so contact form submits even during Upstash outages (commit `f7ea16f`).
- **Billing portal error messages** — replaced hardcoded `paula.vargas3@gmail.com` with `contact@pdf.it.com` in user-facing errors (commit `2ba6ef0`). Internal cron-job alert emails still route to Paula's personal address.
- **Blank-PDF check fail-soft** — `lib/blank-pdf-check.js` relies on pdfjs-dist, which can't load its worker on Vercel. When the check threw, routes were rejecting valid PDFs as "corrupted or password-protected". All 5 AI routes now log and continue when the check fails.
- **Broken pdf-parse v2 import** — earlier fallback used `pdf-parse/lib/pdf-parse.js` which is a removed export in v2. Replaced with new `lib/pdf-text-extract.ts` helper (three-tier: pdf-parse v2 → pdfjs-dist → Document AI).

### Docs & tooling
- **New CLAUDE.md rule:** download buttons must be visually prominent (filled/outlined) in a dedicated bar, never tiny text-links in a header (commit `7599122`).
- **Layout Parser** is now the Document AI processor of record for `/table-extraction` (config change only, no code).

## Repo Cleanup — Removed Committed Junk (April 14, 2026)

Commit `d722e8b` removed 20,582 lines of accidentally-committed artifacts from the repo (result of a prior `git add .` sweep):
- **Hard deleted**: Lighthouse HTML reports (Desktop + Mobile April 8 + `_files/`), `PDFit-ok.rar`
- **Untracked but kept on disk**: `PDFit-ok/` logo source folder, `PDFit_LOGOS/`, `manual-tests/AI PDF Tools Bug Document (1).xlsx` + `(2).xlsx` (kept `(3).xlsx` — active QA doc), `.claude/projects/` (Claude Code local memory)

Updated `.gitignore` to block future recurrence. New patterns ignored: `Lighthouse Report*`, `*.rar`, `PDFit-ok/`, `PDFit_LOGOS/`, `manual-tests/AI PDF Tools Bug Document (1).xlsx`, `manual-tests/AI PDF Tools Bug Document (2).xlsx`, `N2N-*.pdf`, `.claude/projects/`.

## Footer Social Links Fixed (April 13, 2026)

Footer social icons were pointing at non-existent handles (`/pdfit`). Replaced with Paula's real accounts in all 3 footers (EN/ES/BR):
- Instagram: `https://www.instagram.com/pdf_it/`
- LinkedIn: `https://www.linkedin.com/company/pdf-it/about/`
- Facebook: `https://www.facebook.com/profile.php?id=61573353488905`

Also removed stray `N2N-2024-question-list-compressed.pdf` test file that had been accidentally committed to the repo root.

## Launch Day Prep — 30 QA Bugs + Dashboard Search + Mobile Perf (April 12, 2026)

Shipped 12 commits closing the final QA round from `manual-tests/AI PDF Tools Bug Document (3).xlsx` tab `10042026`. All 30 OP_xxx issues resolved and documented in the xlsx (Status + DEV comments columns).

### Batches A–B — AI route content guard
- New `lib/pdf-content-guard.ts`: strips PDF metadata, detects binary streams, enforces word-density and 150-char content floor
- Wired into all 6 AI routes: `ats-optimizer`, `chat-with-pdf`, `pdf-summarizer`, `question-generator`, `smart-extraction`, `translate-pdf`
- Replaces the old weak `length < 50` check — prevents binary PDF data from reaching OpenAI
- Strict `isBlankPdf()` guard added to all 6 routes (was missing on ats-optimizer)
- Fixes OP_012, OP_013, OP_018, OP_020, OP_021, OP_022

### Batch C — Client-side upload validation + size-limit label
- New `lib/client-file-validator.ts`: validates empty/too-large/not-a-PDF BEFORE upload
- Wired into processing-interface (generic) + 6 AI-tool interfaces
- `components/processing/file-dropzone.tsx` now shows "Max file size: 25MB/200MB/1GB" (plan-aware)
- Fixes OP_009, OP_018, OP_030, upload-side of OP_001

### Batch D — Resume builder validation + prompt fidelity
- `app/api/generate-resume/route.ts` prompt rewritten: "Use ONLY the information provided. Do NOT invent employers, titles, dates, metrics, skills." Removed "create realistic metrics" instruction
- Server-side required-field check (Full Name, Email, Experience, Education, Skills), email regex, phone pattern (7-20 digits)
- Client-side mirror validation in `resume-builder-interface.tsx` + `ats-optimizer-interface.tsx`
- `isEmptyIntent()` helper: literal "No Skills" / "None" / "N/A" inputs cause that section to be OMITTED from the generated resume (instead of AI adding defaults)
- Fixes OP_006, OP_007, OP_008, OP_010, OP_011

### Batch E — Upload reliability + specific PDF-read errors
- Table Extraction: pre-upload validation + size-limit label
- PDF Compare: pdfjs `PasswordException` → "This PDF is password-protected"; `InvalidPDFException` → "Not a valid PDF"
- Fixes OP_003, OP_005

### Batch F — Signup + URL-to-PDF security hardening
- Strong password (uppercase + lowercase + digit + special char) enforced on EN/ES/BR signup + reset-password. Hint text added under password field
- Duplicate-email detection via `data.user.identities.length === 0` on all 3 signup pages (Supabase hides this to prevent enumeration; we surface it)
- Google Safe Browsing v4 integration via new `checkUrlSafety()` helper. Blocks phishing/malware/social-engineering URLs in url-to-pdf. Env var: `GOOGLE_SAFE_BROWSING_API_KEY` (set on Vercel and verified live with `testsafebrowsing.appspot.com/s/phishing.html`)
- Fixes OP_002, OP_014, OP_015

### Batch G — Translation chunking
- `app/api/translate-pdf/route.ts` now splits input at 3000-char paragraph boundaries, translates up to 4 chunks in parallel, rejoins. Input cap raised 12k → 40k chars
- Eliminates silent truncation by model's max_tokens output cap on long documents
- Fixes OP_017, improves OP_019 (parallel = faster)

### Batch H — Billing portal + contact form clarity
- `create-portal-session` returns tailored messages for null `stripe_customer_id` (enterprise manual upgrade), missing portal configuration, and missing Stripe customer — all instruct users to email Paula
- Contact form now surfaces the actual API error (rate-limit, validation, Supabase status) instead of generic "Failed to send"
- Fixes OP_004, OP_016

### Batch I — AI output quality + question download
- Question Generator: Download button added next to Copy All. Generates `<original-pdf>-questions.txt` with all questions + answers + explanations
- Smart Extraction: `response_format: { type: "json_object" }` enforced, temperature dropped 0.1→0, prompt hardened ("Use EXACT strings, don't paraphrase, leave ambiguous fields out")
- Fixes OP_023, OP_024

### Batch J — Polish (X logo, legal links, captcha centering)
- Twitter icon replaced with inline X logo SVG in all 3 footers
- Privacy Policy + Terms links now `target="_blank" rel="noopener noreferrer"` in footers + cookie banner (EN/ES/BR) — prevents form-state loss mid-flow
- hCaptcha widget centered via `<div className="flex justify-center">` on all 3 signup pages
- Fixes OP_026, OP_027, OP_029

### Batch K — Pricing card alignment + blog CTA
- Pricing (EN/ES/BR): Free plan gets "Free Forever" badge with `pt-10` matching Pro/Business/Enterprise. Equal-height cards via `min-h-[20px]` placeholder on Free. Contrast bumped (slate-400 → slate-300, "$0" → white). "Everything in X, plus:" now uses plan accent color. All paid CTAs unified to "Start 30-Day Free Trial"
- Blog "N articles" pill (all 3 locales) converted from static `<div>` to `<a href="#articles">` with hover state and smooth-scroll to the articles grid
- Fixes OP_025, OP_028

### Dashboard Tool Search
- New `lib/dashboard-tool-catalog.ts`: 38 primary tools with EN/ES/BR labels, hrefs, and cross-language keywords
- New `components/dashboard-search.tsx`: live filtering, keyboard support (Enter = open top match, Escape = clear), diacritic-insensitive matching
- Wired into all 3 dashboard clients above the Stats Row

### Mobile Performance (81 → 93 on PSI Mobile)
- All 17 `<img>` tags got explicit `width` + `height` attributes (fixes CLS)
- Above-fold logos get `fetchPriority="high" decoding="async"`; below-fold get `loading="lazy"`
- Removed render-blocking Google Fonts `<link>` — switched to `next/font/google` (self-hosted Inter, weights 400-900). Eliminated the ~200ms render-blocking request
- Dropped Sora from font stylesheet (was loaded but never referenced anywhere in code)
- New `components/deferred-cookie-consent.tsx` wraps CookieConsent in `next/dynamic({ ssr: false })` + `requestIdleCallback` — keeps the banner code out of initial JS bundle

### Anonymous cookie tracking verification
- Live-tested `pdfit_uses_YYYY-MM-DD` cookie against production. Confirmed: calls 1-3 set cookie correctly with `HttpOnly`, `SameSite=lax`, 24h expiry. Call 4 blocked with `signup_required` 403.

### Pre-launch audit (4 parallel specialist agents)
- Sacred systems (sitemap, robots, webhook, crons, blank-pdf-check) all confirmed untouched by today's 12 commits
- All 30 bug fixes traced end-to-end in code; 9/10 highest-risk fixes PASS; 1 cosmetic consistency note on pdf-compare using inline validation instead of shared helper (non-blocker — fix is in place)
- 4 production confirmations all green: env vars on Vercel, Stripe webhook URL + 7 events, sitemap live, compress-PDF smoke test

---

## Payment Gating, Sitemap Fix & Launch Prep (April 9, 2026)

### Stripe Webhook Hardening
- Added `charge.refunded` handler (full refunds only — partial refunds don't downgrade)
- Added `charge.dispute.created` handler with charge-object fallback for customer resolution
- Added `invoice.payment_failed` → sends "update your card" email via Resend
- Added `customer.subscription.trial_will_end` → sends "trial ends in 3 days" email
- Removed aggressive `past_due` instant downgrade — users keep access while Stripe retries
- `unpaid` status still triggers downgrade (all retries exhausted)
- Idempotency record inserted AFTER processing (not before) so Stripe retries work on failure

### Reconcile Cron Improvements
- Full Stripe auto-pagination (was capped at 100 subscribers, would silently miss users)
- Sweep: paid users in Supabase with no active Stripe subscription → auto-downgrade to free
- Email report to Paula now includes both mismatches and expired subscription downgrades

### Server-Side Batch Gate
- Merge PDF: free users limited to 2 files, 3+ requires Pro
- Plan returned from `checkUsageAndAuth()` so API routes can check tier

### Anonymous Usage Fix
- Cookie changed from `pdfit_uses` (30-day, never reset) to `pdfit_uses_YYYY-MM-DD` (daily reset)
- Cookie set directly inside `checkUsageAndAuth()` — works on all code paths (async, error, success)

### Blank PDF Check Fix
- 20 API routes: catch block now logs and continues instead of rejecting valid PDFs
- If pdfjs-dist throws for any reason, file passes through to iLoveAPI

### Async Job Queue Disabled
- `ASYNC_ENABLED_TOOLS` set to empty — all tools use sync processing for launch reliability
- Polling timeout added to `useJobPolling` (5 min max) as safety net

### Sitemap 404 Fixed
- Deleted conflicting Next.js convention-based `app/sitemap.ts` (renamed to `app/sitemap-data.ts`)
- Created explicit route handler at `app/sitemap.xml/route.ts` that generates XML from URL data
- Middleware updated to exclude `sitemap.xml` and `robots.txt` from Supabase auth processing

## UX Improvements & Social Proof (April 8, 2026)

### Homepage Tool Search & Filter
- Search bar with real-time filtering by tool name, description, and category
- Tier filter pills (All/Free/Pro/Business) for quick plan-based browsing
- Empty state with "No tools match" and clear button

### Trust Section Redesign
- Live stats bar pulls real data from /api/stats (cached 1 hour)
- Shows "30+ PDF tools" until 10K+ processed, then switches to live count
- "100% Private — no files stored" replaces misleading "0s stored"
- "Built for Professionals" with 6 industry icons (Law, Accounting, Consulting, Students, Healthcare, Small Business)
- Stronger feature cards: Zero File Storage, Instant Processing, Pro When You Need It, Professional Quality

### Post-Download Feedback System
- Star rating prompt appears after every successful file download
- 4-5 stars → asks for testimonial quote (name + role optional)
- Saves to Supabase `user_feedback` table with `approved` flag
- Manual approval in Supabase before displaying on homepage
- CSRF protected, graceful failure

### Favicon Upgrade
- Full icon set: favicon.ico, favicon.svg, favicon-96x96.png, apple-touch-icon.png
- Clean "PDF" text with teal swirl on dark background

### Shareable Result Cards (April 8, 2026)
- After every file download, users see share buttons (Twitter/X, LinkedIn, Copy Link)
- Compression tools show stats: "You saved 72% (5.8MB → 1.6MB)"
- Pre-written tweets with stats + tool URL. Does NOT share user files.
- Every happy user becomes a free marketing channel

### Cookie Consent Banner (April 8, 2026)
- GDPR/LGPD compliant consent on every page
- Google Consent Mode v2 — analytics blocked until user clicks Accept
- Returning visitors not prompted again (localStorage)

### Sitemap Index Fix (April 8, 2026)
- /sitemap.xml was returning 404. Added manual sitemap index route.

### Footer Fix
- © 2024 (was showing dynamic year 2026)

---

## Backend Architecture Hardening (April 7, 2026)

### 28 of 28 Audit Items Fixed (Score: 4.5/10 → 9.1/10)
Full audit by 5 specialist agents (security, database, performance, reliability, architecture).

### Security Fixes
- Blob delete/download endpoints: added Vercel Blob domain validation (prevents arbitrary file access)
- Blob URL ownership: validated in 32 API routes (prevents cross-user file access + SSRF)
- CSRF protection: origin checking on contact, newsletter, forgot-password endpoints
- CRON_SECRET: rejects requests when secret not set (was bypassed when empty)
- SSRF validation: fails closed on DNS error (was fail-open)
- Error messages sanitized: 34 routes no longer leak internal service names (CloudConvert, iLoveAPI, Document AI)

### Database & Data Integrity Fixes
- Newsletter subscribers table created in Supabase
- Stripe customer ID index added (prevents full table scan on every payment)
- Webhook idempotency: `webhook_events` table prevents duplicate processing on Stripe retries
- Atomic usage counting: Postgres `increment_usage()` function (eliminates race condition)
- Foreign key on `usage_logs` → `auth.users` (prevents orphaned records)
- User audit trail: Postgres trigger logs plan/subscription changes automatically
- Usage log retention: monthly cron deletes logs older than 90 days

### Reliability Fixes
- Webhook returns 500 on DB failure (Stripe retries instead of losing the upgrade)
- Orphaned blob cleanup: `finally` blocks in 29 API routes (files cleaned up on error)
- Retry utility: `lib/retry.ts` with exponential backoff for transient API failures
- Contact form rate limiting: 3 submissions/hour per IP via Upstash Redis
- Stripe-Supabase reconciliation: weekly cron auto-fixes plan mismatches
- GDPR deletion endpoint: `/api/delete-my-data` removes all user data on request

### Performance Fixes
- Streaming file downloads: 26 routes use Node.js streams instead of full-file buffering (memory: 2.5GB → 50MB at 50 concurrent users)
- Image optimization enabled: `unoptimized: false` in next.config.mjs
- Per-user rate limiting: 300 req/min for authenticated users (was 100/IP blocking offices)

### Code Quality Fixes
- TypeScript migration: all 32 .js API routes converted to .ts (100% type coverage, 51 total routes)
- Shared utilities: `lib/api/blob-handler.js` + `lib/api/error-handler.js` (5 routes migrated, pattern for remaining 43)
- Component decomposition: ProcessingInterface split into 5 subcomponents (1,501 → 1,177 lines)

### Async Job Queue — COMPLETE (April 7, 2026)
- `processing_jobs` table with priority, retry (3 attempts), progress tracking
- 32 processor files extracted into `lib/processors/`
- All 32 API routes support `{ async: true }` mode (returns jobId + 202)
- Status polling endpoint, background cron (5 jobs/min), CRON_SECRET protected
- Frontend `useJobPolling` hook — ProcessingInterface polls every 2 seconds
- 19 tools enabled for async in frontend. Existing sync mode unchanged.
- **28/28 backend audit items COMPLETE. Score: 4.5/10 → 9.1/10**

---

## Brand Migration & Design Audit (April 6, 2026)

### New Logo Deployment (13 files)
- Replaced text-based "PDF.it" logo with new SVG image logo across all headers (EN/ES/BR), footers (EN/ES/BR), login pages (EN/ES/BR), signup pages (EN/ES/BR), and reset-password page
- `public/logo.svg` + `public/logo-white.svg`: new PDFit swirl logo (teal/blue gradient)
- `public/og-logo.png`: replaced old OmnisPDF blue/orange logo with new PDFit logo
- `public/favicon.png`: new Internet Tab Logo for browser tab
- Deleted legacy files: `PDF_it_LOGO_Vector.svg`, `placeholder-logo.svg`, old `favicon.ico`

### Complete Orange-to-Teal Brand Migration (437 files)
- Replaced ALL instances of orange-50/100/200/300/400/500/600/700 with brand teal (#14D8C4)
- 418 app/ pages + 19 components/ files = 437 total
- Zero orange Tailwind classes remaining in entire codebase
- Patterns: bg-orange-500 → bg-[#14D8C4], text-orange-500 → text-[#14D8C4], icon boxes → dark gradient with teal glow

### 149 Tool Pages Fully Rewritten to Canonical Format (April 6-7, 2026)
- **49 EN pages**: all tool pages rewritten from old flat layout to Page_Format.md canonical format
- **50 ES pages**: all Spanish tool pages rewritten with HeaderEs/FooterEs, natively Spanish text, /es/ hrefs, alternates metadata
- **50 BR pages**: all Portuguese tool pages rewritten with HeaderBr/FooterBr, natively Brazilian Portuguese text, /br/ hrefs, alternates metadata
- Each page now has: cinematic dark hero (#0E0F1E + radial gradients + noise grain), intro section, ProcessingInterface, 3 glassmorphism feature cards, 3 horizontal steps, 4 metallic Related Tools, wave-color FAQ with frosted glass cards, JSON-LD schema at bottom
- Convergence audit: sampled 26 pages (10 EN + 8 ES + 8 BR) — all passed except 14 BR pages missing canonical in alternates (fixed)
- Remaining with old layout: ~243 learn articles (EN/ES/BR) + 3 blog posts — need separate format approach

### 246 Learn Articles + Blog Posts Updated (April 7, 2026)
- Hero sections: bg-[#191B4D] → dark #0E0F1E with radial gradients across 81 EN + 81 ES + 81 BR learn articles + 3 blog posts
- Tool CTA sections: bg-[#191B4D] → dark #0E0F1E
- FAQ cards in learn articles: light bg-gray-50 → frosted glass dark style
- Related articles sections: bg-gray-50 → bg-[#F3F4FF]
- Fixed broken JSX in 243 files (trailing quote from sed FAQ replacement)
- Fixed missing Download import in 5 files (office-to-pdf EN/ES/BR, pdf-a-google-sheets, pdf-a-google-docs)
- Zero bg-[#191B4D] remaining in codebase (except tools index page)

### Learn Index Pages (April 7, 2026)
- Created `/learn` index page — 81 articles organized by 9 categories (Compress, Merge & Split, Convert, Office to PDF, Rotate, Protect & Unlock, Watermark, OCR, QR Codes)
- Created `/es/aprender` index page — same 81 articles in Spanish with translated category names
- Created `/br/aprender` index page — same 81 articles in Brazilian Portuguese
- Previously `/learn` returned 404 — individual articles existed but no landing page

### Newsletter Signup (April 7, 2026)
- New API route: `/api/newsletter` — saves email to Supabase `newsletter_subscribers` table (upsert)
- New component: `newsletter-signup.tsx` — trilingual form (EN/ES/BR) with email input, loading/success/error states
- Replaced dead "Follow Our Blog" button (linked to same page) with working newsletter signup on all 3 blog pages
- Requires Supabase table: `CREATE TABLE newsletter_subscribers (email TEXT PRIMARY KEY, subscribed_at TIMESTAMPTZ DEFAULT NOW())`

### Design Audit Fixes
- 404 page: replaced all orange OmnisPDF colors with brand teal
- Header dashboard button (EN/ES/BR): orange → teal
- OG image metadata dimensions: updated from 1200×630 to 1736×846 (matching actual file) across 8 files
- Accessibility fix: removed conflicting `text-white` from Dashboard button (contrast ratio 2.9:1 → 10.2:1)

### QA Bug Verification — All 24 Issues Code-Verified
- 2 verification agents read every fix in the actual codebase (not trusting labels)
- 17 bugs: FIXED and verified in code
- 3 issues: NOT A BUG / BY DESIGN (OP_017 anchor scroll, OP_018 SPA logo, OP_019 FAQ accordion)
- 1 issue: WON'T FIX (OP_011 — copy email is intentional design)
- 1 issue: FEATURE REQUEST (OP_022 — split edit option)
- 1 issue: DEFERRED (OP_023 — file persistence on refresh, excluded by owner)
- 1 issue: was already handled (OP_024 = same fix as OP_012)
- Updated Excel sheet `manual-tests/AI PDF Tools Bug Document (2).xlsx` with Status + DEV comments for all 24 rows

### Sentry Status Update
- @sentry/nextjs removed from package.json — incompatible with Node.js v24 (local dev)
- Sentry DSN still configured on Vercel (Vercel uses Node 20, where it works)
- Global error page (`app/global-error.tsx`) kept without Sentry import
- Can be re-added when Node 24 support is available from Sentry

---

## Production Infrastructure (April 6, 2026)

### GitHub Actions CI Pipeline
- Build, unit test, and E2E test jobs run on every push to `main`
- Playwright installs Chromium with deps in CI, runs with `--reporter=github`
- Failed test reports uploaded as artifacts (7-day retention)
- File: `.github/workflows/ci.yml`

### Sentry Error Tracking — CONFIGURED (Vercel-side only)
- NEXT_PUBLIC_SENTRY_DSN configured on Vercel
- @sentry/nextjs package removed from codebase (incompatible with Node.js v24 locally)
- Global error page (`app/global-error.tsx`) provides user-friendly error boundary
- Sentry captures errors on Vercel production (Node 20) via platform integration

### Trial Email Drip Sequence — LIVE
- Vercel Cron runs daily at 9am UTC (`/api/cron/trial-emails`)
- Queries Stripe for all trialing subscriptions, calculates days since trial start
- Day 7: feature discovery email (batch processing, OCR, PDF to Word, compress for email)
- Day 25: "5 days left" warning with cancel/continue info
- Day 30: "trial ends today" with next steps
- All emails branded with PDF.it design, personalized with name and plan label
- Protected by `CRON_SECRET` env var

### Weekly SEO Health Check — LIVE
- Vercel Cron runs Mondays at 8am UTC (`/api/cron/seo-health`)
- Checks 30+ pages across EN/ES/BR for HTTP status codes
- Validates sitemap accessibility and content, robots.txt Sitemap directive
- Checks homepage for og:title, canonical, and hreflang meta tags
- Calculates health score (% of pages passing)
- Emails branded HTML report to paula.vargas3@gmail.com
- Protected by `CRON_SECRET` env var

### BetterUptime Monitoring — LIVE
- External uptime monitoring pings site every minute
- SMS/email alerts when site goes down

### Enhanced /add-tool Skill
- Expanded from 12 to 14 steps, 18-point verification checklist
- Now includes: Page_Format.md reading, API route creation with blank PDF check, sitemap updates, pricing page updates, hero banner updates
- Prevents the #1 bug source: missing files when adding new tools

### New /pre-deploy Skill
- Runs tests → build check → commit → push in one command
- Blocks deploy if tests fail or build breaks
- Analyzes diff to write commit message if none provided

### Setup Guide
- Created `SETUP-GUIDE.md` with step-by-step instructions for Sentry, BetterUptime, and CRON_SECRET

### Launch-Critical Tests (24 new E2E tests, 180 total)
- **Checkout URL mapping (8 tests):** all 3 tiers × monthly/annual CTAs verified to link to correct `/upgrade` paths
- **Price accuracy (2 tests):** monthly ($3.99/$13.99/$49.99) and annual ($39.90/$139.90/$499.90) verified
- **Contact form (3 tests):** form fields present, valid submission shows "Message Sent!", API failure shows error
- **Global error / 404 page (2 tests):** 404 renders helpful content with back-to-home link
- **Console error detection (8 tests):** 8 critical pages (homepage, compress-pdf, pricing, login, signup, contact, /es, /br) verified zero JS console errors
- **Cron endpoint auth (3 tests):** trial-emails and seo-health reject unauthenticated requests, health endpoint returns valid JSON

### Multi-Specialist Pre-Launch Audit — CONVERGED
- 3 specialist agents (infrastructure gaps, payment flow, critical user journeys) identified 30+ gaps
- 24 highest-impact tests built from findings (all passing)
- Synthesis agent declared convergence: "Suite is sufficient for a safe launch"
- Remaining gaps (Stripe checkout completion, email confirmation click-through) are infeasible in E2E without real backends — handled by manual QA checklist

---

## E2E Test Suite Expansion (April 5, 2026)

### Test Suite: 94 → 156 tests (+66%)
- Built 14 new Playwright spec files covering 7 new areas
- Multi-specialist audit (8 agents in 2 waves) verified quality and fixed 7 issues
- All 156 tests passing (155 green, 1 expected skip for sitemap in dev mode)

### New Test Coverage
- **Tool pages (5 files):** merge-pdf (multi-file upload, corrupted validation), split-pdf (page-range input, single-page rejection), esign (Business tier gating, upload flow), url-to-pdf (Pro gating, URL input form), table-extraction (Business+Enterprise gating)
- **Auth (2 files):** password-reset (forgot-password toggle, form validation, min 8 chars), protected-routes (dashboard redirect to login, signup-required page CTAs)
- **Accessibility (1 file):** WCAG AA axe-core audits on 6 key pages (homepage, compress-pdf, pricing, signup, login, about) — color-contrast excluded for gradient backgrounds
- **SEO (2 files):** structured-data (JSON-LD FAQPage on learn articles, OG tags, Twitter cards, canonical URLs), localized-seo (hreflang for EN/ES/BR, lang attribute, sitemap language coverage)
- **i18n (3 files):** localized-content (no English leak on ES/BR pages), navigation-switching (links preserve /es/ and /br/ context), fallback-and-404 (invalid locale prefix returns 404)
- **Content (1 file):** blog index, blog post, about, privacy policy, terms, learn article — data-driven h1 assertions
- **Health expansion:** added 9 missing pages (esign, url-to-pdf, table-extraction, pdf-to-excel, flatten-pdf, privacy-policy, terms-conditions, reset-password, signup-required)

### New Infrastructure
- `e2e/helpers/accessibility.ts` — axe-core wrapper with WCAG AA filtering, excludes third-party iframes
- `mockUserPlan()` in `e2e/helpers/api-mocks.ts` — mock `/api/user-plan` for tier-gated feature testing
- `playwright.config.ts` — `fullyParallel: true`, CI workers increased from 2 to 4

### Audit Fixes Applied
- Removed dead `seo.ts` helper (4 unused exports)
- Fixed silent-pass pattern in split-pdf (conditional `if` → hard `expect().toBeVisible()`)
- Fixed duplicate test in protected-routes (now actually verifies redirect query param)
- Tightened content.spec.ts assertions (broad body regex → specific h1 matching)
- Removed language-neutral "pdf" from Spanish locale check
- Replaced flaky `networkidle` with `main` element visibility in axe audits

---

## Bug Fixes & Security Hardening (April 5, 2026)

### Blank PDF Rejection (all paid API routes)
- Created shared `lib/blank-pdf-check.js` using pdfjs-dist operator list (pure JS, no native deps)
- Checks each page for text-showing and image-drawing operators — rejects visually blank PDFs before any paid API call
- Applied to all 20 paid API routes: compress, extract-images, split, pdf-to-txt, pdf-to-jpg, pdf-to-png, flatten, watermark, protect, unlock, rotate, ocr, chat-with-pdf, translate-pdf, pdf-summarizer, question-generator, smart-extraction, pdf-to-word, pdf-to-excel, pdf-to-powerpoint
- Error heading shows "Empty File" (not "Processing Failed")
- Previous failed approaches: global threshold, %PDF header, content stream operators, Font/XObject resources, pdf-parse text extraction, @napi-rs/canvas rasterization — all failed due to PDF generators embedding default resources on blank pages or native deps not deploying on Vercel

### Image-to-PDF: Combined/Separate Output Mode
- Users can now choose "One PDF" (all images as pages in a single file) or "Separate PDFs" (each image as its own file)
- Mode selector only appears when 2+ images are uploaded; single image works as before
- API updated to accept `blobUrls` array for combined mode, backwards compatible with single `blobUrl`
- Files changed: `components/image-to-pdf-interface.tsx`, `app/api/image-to-pdf/route.ts`

### Password Reset Email Reliability
- Added Resend delivery error logging (email ID on success, error details on failure)
- Added automatic Supabase fallback: if Resend fails, triggers Supabase's built-in `resetPasswordForEmail`
- File changed: `app/api/forgot-password/route.ts`

### Already-Verified Email Confirmation Link
- Clicking an already-used confirmation link now redirects to `/login?message=already-verified` instead of silently going to home page
- Login pages show green banner: "Your email is already verified. Please log in." (EN/ES/BR)
- `/auth/confirm` page detects "already used" or "expired" token errors and shows appropriate message
- Files changed: `app/auth/confirm/page.tsx`, `lib/supabase/middleware.ts`, login pages (EN/ES/BR)

### Error Heading Accuracy (all tool interfaces)
- "Processing Failed" / "Conversion Failed" / "Cleanup Failed" replaced with specific headings: "Unsupported File Type", "File Too Large", "Empty File"
- Applied to: `processing-interface.tsx`, `phone-scan-cleanup-interface.tsx`, `image-to-pdf-interface.tsx`, `pdf-to-word-interface.tsx`

### Privacy Message Correction
- Changed "files deleted after 1 hour" → "files deleted after download" across 11 interface files

### Signup Validation
- Name field now rejects numbers and special characters (allows Unicode letters, spaces, hyphens, apostrophes)
- CAPTCHA invalidated when email is changed after verification
- Minimum password length increased from 6 to 8 characters (signup EN/ES/BR + reset password)

### Remove File X Button Fix
- Clicking X to remove a file in phone-scan-cleanup now clears error state instead of showing "Cleanup Failed"

### pnpm Lockfile Fix
- Discovered project uses pnpm, not npm — all previous `npm install` commands broke the lockfile and silently prevented Vercel deploys
- Synced `pnpm-lock.yaml` to fix all pending deployments

## Phone Scan Cleanup & Signup CAPTCHA Fix (April 5, 2026)

### Phone Scan Cleanup — Adaptive Background Removal (LOCKED benchmark)
- Both B&W and Color modes use division-based adaptive background removal
- **B&W pipeline:** grayscale → median(3) → raw pixels + blur(50) background estimate → pixel division → normalize → sharpen(1.2) → gamma(1.8) → PNG
- **Color pipeline:** median(3) → raw pixels + blur(50) background estimate → per-channel pixel division → normalize → sharpen(1.2) → gamma(1.6) → PNG
- DO NOT use global threshold, CLAHE, or modulate for scan cleanup — these were tested and failed
- Benchmark: clean white background, sharp printed text, legible handwriting, intact signatures/stamps/seals — professional flatbed scanner quality
- Validated on: phone-photographed mixed-content documents with printed text, handwriting, and official marks under uneven illumination
- File changed: `app/api/phone-scan-cleanup/route.ts`

### Signup CAPTCHA Revalidation on Email Change
- CAPTCHA is now invalidated when user changes email after completing verification
- Email onChange handler clears captchaToken state and resets the hCaptcha widget
- Applied to all 3 languages: `app/signup/page.tsx`, `app/es/registro/page.tsx`, `app/br/cadastro/page.tsx`

## 30-Day Free Trial & Pricing Update (April 1, 2026)

### Pro Tier Price Reduction
- Changed Pro monthly from $3.99 to **$3.99/month**
- Changed Pro annual from $39.90 to **$39.90/year** ($3.33/mo equivalent)
- Updated across all 66 files site-wide (pricing pages, tool pages, FAQs, learn articles, about pages, blog, structured data — EN/ES/BR)

### 30-Day Free Trial (Stripe)
- Added `subscription_data.trial_period_days: 30` to `/app/upgrade/page.tsx` (the actual checkout route)
- Also added to `/app/api/create-checkout/route.ts` (secondary route)
- Users add a payment method at checkout but are NOT charged for 30 days
- Stripe shows subscription status as "Trialing" with first charge on day 31
- If user cancels during trial, they keep access until trial ends — never charged

### Free Trial Banner (Gold)
- Added gold-bordered banner card to **pricing pages** (EN/ES/BR) between subtitle and billing toggle
- Added same banner to **homepage hero sections** (EN/ES/BR) after trust icons, before the wave
- 3-line stacked layout: "FREE TRIAL" (gold, bold uppercase) → "Try any plan free for 30 days" (white, large) → "No commitment, cancel anytime..." (slate)
- Uses Pro tier gold gradient border (#E0C27A/#D6B36A) matching the Pro card design

### Welcome Email on Checkout
- Added Resend-powered welcome email in `/app/api/webhook/route.ts` on `checkout.session.completed`
- Branded HTML email matching PDF.it design (same style as password reset email)
- Subject: "Welcome to PDF.it [Plan] — your 30-day free trial has started!"
- Includes plan-specific feature list, "Go to Your Dashboard" CTA, trial reassurance
- Sent from `noreply@pdf.it.com`

### Dashboard Auto-Refresh After Checkout
- Dashboard now polls Supabase every 2 seconds (up to 30 seconds) after `?success=true` redirect
- Plan badge and status message update live when webhook completes — no page refresh needed
- Applied to all 3 dashboard components (EN/ES/BR)

### Stripe Webhook Fix
- Webhook endpoint was returning **307 redirect** (pdf.it.com → www.pdf.it.com)
- Fixed by updating webhook URL in Stripe to `https://www.pdf.it.com/api/webhook`

### Files Changed
`app/upgrade/page.tsx`, `app/api/create-checkout/route.ts`, `app/api/webhook/route.ts`, `app/pricing/page.tsx`, `app/es/precios/page.tsx`, `app/br/precos/page.tsx`, `components/hero-section.tsx`, `components/hero-section-es.tsx`, `components/hero-section-br.tsx`, `components/dashboard-client.tsx`, `components/dashboard-client-es.tsx`, `components/dashboard-client-br.tsx`, `CLAUDE.md`, + 63 files with price updates

---

## GA4 Analytics Verified (March 31, 2026)
- GA4 (G-PWD4YNY710) confirmed working and recording data in production
- GTM container (GTM-PNR9LXC2) active

---

## QA Bug Fix Sprint (March 30, 2026) — 32 Bugs Resolved

External QA tester reported 39 bugs (32 unique after deduplication). All addressed across 20+ files, 3 languages (EN/ES/BR).

### Priority 1 — High (Fixed)
- **BUG-001**: Forgot password email not received — full fix:
  - Built custom `/api/forgot-password` route that sends reset emails through Resend directly (bypasses Supabase's built-in email sender which wasn't reaching users)
  - Branded HTML email template matching PDF.it design, sent from `noreply@pdf.it.com`
  - Installed `resend` package (requires `RESEND_API_KEY` env var on Vercel)
  - Built `/reset-password` page with password form, eye toggle, validation
  - Reset link routes through `/auth/confirm` to exchange token for session before landing on `/reset-password` (same proven flow as signup confirmation)
  - Added "check junk/spam folder" message on the reset email sent screen
- **BUG-002**: Footer social media icons had `href="#"` — replaced with real URLs (placeholder until accounts created), all 3 languages
- **BUG-003**: Generic 400 error on corrupted PDF in PDF-to-TXT — added user-friendly error messages in `api/pdf-to-txt/route.ts`
- **BUG-004**: Edit/pencil icon not clickable after upload — now focuses and selects filename input on click
- **BUG-005**: Language switcher not working — confirmed working after dropdown conversion (BUG-037)
- **BUG-006**: Pricing card text cut off after language change — removed `overflow-hidden` from card divs (EN/ES/BR pricing pages)
- **BUG-007**: 400 error splitting single-page PDF — added page count validation with `pdf-lib` before calling API, friendly error message
- **BUG-008**: Eye icon missing in PDF password field — outside scope (browser's native PDF viewer)
- **BUG-009**: No validation on contact form name field — added `minLength`, `pattern`, trim validation on form + API
- **BUG-010**: FAQ accordion no collapse icon — already working (ChevronUp/ChevronDown with toggle)
- **BUG-011**: Captcha error persists after verification — `onVerify` callback now clears error state (signup + login)
- **BUG-013**: Navigation allowed during file upload — added `beforeunload` warning during processing
- **BUG-016 + BUG-036**: Mobile hamburger menu text invisible — changed `text-slate-700` to `text-white/80` (all 3 headers)
- **BUG-019**: "Limit Exceeded" on signup — friendly message for Supabase rate limit errors
- **BUG-020**: JPG/PNG to PDF labeled FREE but gated as Pro — removed Pro pre-gate from `image-to-pdf-interface.tsx`

### Priority 2 — Medium (Fixed)
- **BUG-021**: "Email Us" button broken without email client — replaced `mailto:` with copy-to-clipboard button showing email address
- **BUG-022**: Missing asterisks on Email/Password fields in signup — added `*` indicators
- **BUG-023**: Duplicate footer links (Privacy, Terms, Contact) — removed duplicate bottom bar links
- **BUG-024**: Page bottom visible during PDF-to-JPG upload — added `min-h-[60vh]` to processing state
- **BUG-025**: File disappears on refresh — added privacy message explaining files are cleared on refresh
- **BUG-026**: Layout shift on language change — expected behavior (full page navigation)
- **BUG-027**: Header logo not linking home — already fixed (was wrapped in `<Link href="/">`)
- **BUG-028 + BUG-032**: Footer logo not clickable — wrapped in `<Link>` (all 3 languages)
- **BUG-029**: No hover effect on A-Z alphabet letters — added `hover:text-[#14D8C4] hover:bg-white/5`
- **BUG-030 + BUG-034**: Upload button not disabled after first file — free users: new file replaces old; paid users: "Add more files" button below file list; big upload zone hides after first file
- **BUG-031 + BUG-033**: Active nav state not highlighted — added `usePathname()` check with teal highlight for current page

### Priority 3 — Low (Fixed)
- **BUG-035**: Background scrolls when hamburger menu open — added `overflow: hidden` to body (all 3 headers)
- **BUG-037**: Language selector as flag row — converted to dropdown menu with globe icon, flag + language name (all 3 headers, desktop + mobile)
- **BUG-038**: Blog card dates not visible — improved contrast from `text-slate-500` to `text-slate-400`
- **BUG-039**: "Back to Dashboard" button text invisible — changed to teal text with teal border

### Additional Improvements
- **BUG-014**: A-Z scroll offset — increased `scroll-mt` from 32 to 36 for sticky nav clearance
- **BUG-017**: Back navigation arrow on mobile — added `←` button next to logo on all pages except homepage (all 3 languages)

### Files Changed (20+)
`components/header.tsx`, `header-es.tsx`, `header-br.tsx`, `footer.tsx`, `footer-es.tsx`, `footer-br.tsx`, `processing-interface.tsx`, `image-to-pdf-interface.tsx`, `faq-section.tsx`, `comprehensive-faq-section.tsx`, `app/signup/page.tsx`, `app/login/page.tsx`, `app/contact/page.tsx`, `app/api/contact/route.ts`, `app/api/forgot-password/route.ts` (new), `app/api/pdf-to-txt/route.ts`, `app/api/split-pdf/route.js`, `app/pricing/page.tsx`, `app/es/precios/page.tsx`, `app/br/precos/page.tsx`, `app/tools-a-z/page.tsx`, `app/blog/page.tsx`, `middleware.ts`

---

## AI Tools Suite (March 29, 2026) — 5 New AI-Powered Tools

### Chat with PDF (Business tier)
- `/chat-with-pdf`, `/es/chat-con-pdf`, `/br/chat-com-pdf`
- Upload a PDF, ask unlimited questions, get AI answers from the document content
- Uses OpenAI GPT-4o-mini with conversation history (10 messages)
- Text extracted once via iLoveAPI, cached client-side for follow-up questions
- Blob deleted immediately after text extraction
- ~$0.01-0.03 per question

### Smart Data Extraction (Business tier)
- `/smart-extraction`, `/es/extraccion-inteligente`, `/br/extracao-inteligente`
- Upload a PDF, AI extracts: people (names + roles), organizations, dates, amounts, contact info (emails/phones/addresses), key-value fields, important clauses
- Results displayed in organized categories with JSON download
- Uses OpenAI GPT-4o-mini with structured JSON output
- ~$0.02-0.05 per document

### AI PDF Summarizer (Business tier)
- `/pdf-summarizer`, `/es/resumidor-pdf`, `/br/resumidor-pdf`
- Upload a PDF, choose summary length (short/medium/detailed) and language (same/English/Spanish/Portuguese)
- One-click copy to clipboard
- Uses OpenAI GPT-4o-mini with adjustable max_tokens per length
- ~$0.01-0.03 per summary

### AI Question Generator (Pro tier)
- `/question-generator`, `/es/generador-preguntas`, `/br/gerador-perguntas`
- Upload a PDF, choose question type (mixed/multiple choice/short answer/true-false), count (5-20), difficulty (easy/medium/hard)
- Answers hidden by default with reveal toggle per question
- Copy all questions + answers with one click
- Uses OpenAI GPT-4o-mini
- ~$0.01-0.03 per generation

### Translate PDF (Business tier)
- `/translate-pdf`, `/es/traducir-pdf`, `/br/traduzir-pdf`
- Upload a PDF, choose from 13 target languages (English, Spanish, Portuguese, French, German, Italian, Dutch, Chinese, Japanese, Korean, Arabic, Russian, Hindi)
- Copy or download translation as TXT
- Uses OpenAI GPT-4o-mini with professional translation prompting
- ~$0.02-0.05 per translation

### AI Tools Infrastructure
- All 5 tools follow identical architecture: upload → iLoveAPI text extraction → OpenAI GPT-4o-mini → structured response
- All tools added to all 5 homepage grids (3 features-grid components + 2 inline ES/BR homepage grids)
- All tools added to all 3 hero banners ("7 AI-Powered Tools" with clickable links)
- Purple "AI-Powered" badge (Sparkles icon) on all AI tool cards in homepage grids
- All tool pages follow Page_Format.md (Hero → Intro → Interface → Features → How It Works → Related Tools → FAQ → Schema)
- Route map updated with all trilingual routes
- Page_Format.md updated with new Pro and Business tool lists

### SEO Fixes (March 29, 2026)
- **Sitemap** — Added 15 new URLs (5 AI tools × 3 languages) to sitemap.ts
- **Pricing pages** — Added AI tools to Pro features (Question Generator) and Business features (Chat with PDF, Summarizer, Smart Extraction, Translate PDF) across EN/ES/BR pricing pages; added 5 new rows to EN comparison table
- **Tools A-Z** — Added 7 new tool entries alphabetically (5 AI tools + Create Resume) with proper icons and tier badges
- **Homepage keywords** — Added 11 new keywords (chat with pdf, pdf summarizer, translate pdf, ai question generator, smart extraction, etc.); updated description to mention 7 AI tools

### Performance & Branding Fixes (March 29, 2026)
- **Google Fonts loading** — Kept non-blocking `<link>` with `media="print" onLoad="this.media='all'"` trick (tested `next/font/google` but it generated an extra render-blocking CSS file that dropped desktop from 100 to 77 — reverted)
- **GTM deferred** — Changed from `afterInteractive` to `lazyOnload` strategy for better mobile performance
- **Package imports optimized** — Added `optimizePackageImports` for lucide-react and recharts in next.config.mjs
- **Page titles fixed** — Removed "fastest PDF tools on the planet" claims from all 3 layout files; replaced with brand positioning "Fix Any Document Problem Instantly" (EN/ES/BR); updated OpenGraph and Twitter card titles to match
- **Lighthouse scores restored** — Desktop: 100 Performance, 100 Best Practices after reverting next/font

## Pre-Launch Audit & Fixes (March 27, 2026)
- **OmnisPDF → PDF.it rebrand cleanup** — Replaced all remaining "OmnisPDF" references across 15 documentation and config files (SEO-MAP, ROADMAP, LOCALIZATION, agent configs, command templates, etc.)
- **Pro tool metadata fix** — Removed "Free & No Login" from PDF to Word and PDF to Excel metadata titles (both are Pro tools)
- **Signup success pages** — Added "check your Spam/Junk folder" note to EN/ES/BR signup success pages
- **SMTP fix** — Configured Resend as custom SMTP provider in Supabase (was using built-in mailer which failed); fixed sender email from noreply@pdf.it to noreply@pdf.it.com
- **Workflow Automation tier fix** — Changed from Enterprise-only to Business + Enterprise (API route, client-side gate, upgrade copy, FAQ answers, features grid labels) across all 3 languages
- **Blog dates backdated** — All 6 blog articles changed from April 2026 to 2024–2025 dates across EN/ES/BR listings and individual article pages
- **Footer copyright** — Changed from dynamic current year to fixed "© 2024 PDF.it"
- **Tagline rebrand** — Homepage hero changed from "Free PDF Tools." to "Built for Professionals." (EN/ES/BR); footer now reads "Built for professionals, trusted by professionals."; About page H1 updated in all 3 languages
- **Full tier gate audit** — Verified all API routes, tool pages, pricing page, and feature grids match the correct tier structure (Free/Pro/Business/Enterprise)
- **SEO keywords — audience targeting** — Added "PDF for accountants/lawyers/professionals/students/freelancers" to homepage meta keywords, about page meta keywords (EN/ES/BR), and woven naturally into about page "Built for" card titles and descriptions
- **SEO keywords — expanded** — Added 17 new homepage keywords: competitor alternatives (iLovePDF/SmallPDF/Adobe Acrobat alternative), industry audiences (teachers, real estate, HR, healthcare, small business), problem-based terms (reduce PDF size, extract tables, sign without account, batch processing, make scanned PDF searchable)
- **About page — 2 new audience cards** — "PDF for Teachers & Educators" and "PDF for HR & Real Estate" added to "Built for Real Workflows" section (EN/ES/BR), naturally incorporating competitor alternative and privacy keywords
- **Pricing page metadata** — Created layout.tsx files for EN/ES/BR pricing pages with SEO-rich titles, descriptions, and keywords targeting competitor alternatives, batch processing, workflow automation, and privacy terms

## Core Tools (All Working)
- /merge-pdf, /split-pdf, /rotate-pdf
- /compress-pdf, /compress-pdf-to-5mb, /compress-pdf-to-2mb, /compress-pdf-for-email
- /protect-pdf, /unlock-pdf, /watermark-pdf (Pro)
- /pdf-to-jpg, /pdf-to-png, /pdf-to-txt
- /jpg-to-pdf, /png-to-pdf
- /word-to-pdf, /excel-to-pdf, /powerpoint-to-pdf, /office-to-pdf
- /pdf-to-word (Pro, CloudConvert), /pdf-to-excel (Pro, CloudConvert), /pdf-to-powerpoint (Pro, CloudConvert)
- /ocr-scanner (Pro), /qr-code (Pro)
- /url-to-pdf (Pro — CloudConvert capture-website with Chrome engine, public URLs only, ~$0.02/conversion)
- /ats-optimizer (Pro — "Optimize Your Resume", OpenAI GPT-4o-mini, iLoveAPI extract for text, ~$0.03/analysis)
  - Analysis returns: score, 6 section scores, improvements, missing/matched keywords, format risks, bullet rewrites, section rewrites
  - Selectable improvements and keywords — user toggles which ones AI applies
  - "Fix My Resume" button → form to add extra experience/education/skills → AI rewrites → Word .docx download
  - Cover letter checkbox generates matching cover letter as second page
- /create-resume (Pro — "Create a Resume", standalone page, no upload needed)
  - Full form: name, email, phone, location, LinkedIn, target job, summary, experience, education, skills, certifications, languages, additional
  - AI generates resume as Word .docx, optional cover letter
  - Uses /api/generate-resume with mode "build"
- /extract-images-from-pdf, /flatten-pdf
- /upload-ready-pdf (Blue Ocean #1 — chains flatten + compress)
- /phone-scan-cleanup (Blue Ocean #2 — Sharp image processing, free with limits)

## Business & Enterprise Tools (All Working)
- /workflow-automation — chain tools (flatten, compress, watermark, rotate, protect), 4 preset workflows for Business + 5 Enterprise-only templates (Legal Doc Prep, Court Filing, Invoice Archive, Draft Review, Lab Report)
- /table-extraction — Google Document AI Form Parser → ExcelJS, Business: 200 pages/month, Enterprise: 2,000 pages/month, monthly tracking via usage_logs table
- /pdf-compare — client-side text diff, side-by-side/overlay/differences views
- /esign — session-only eSign flow with typed styles, draw, upload, and PDF placement
- /pdf-redaction — canvas-based area selection, flattened image replacement

## Enterprise Tier (COMPLETE)
- Pricing page: 4 tiers with dark premium Enterprise card (amber/gold accent)
- Full comparison table with 15 feature rows on pricing pages (EN/ES/BR)
- Stripe checkout integration (monthly + annual)
- Webhook detects Enterprise subscriptions → sets plan="enterprise" in Supabase
- All 13 API routes recognize "enterprise" plan
- Table extraction: 2,000 pages/month for Enterprise (vs 200 for Business)
- 5 Enterprise-only workflow templates with gold badge
- Homepage feature grids show Enterprise tools with amber badge
- Upload limits, usage checks, dashboard labels all support Enterprise
- Billing toggle in hero section controls all paid tiers

## Infrastructure Done
- hCaptcha integration (signup + login pages)
- Batch processing (Pro/Business/Enterprise: multi-file select, per-file progress, Download All as ZIP; Free: single file + upgrade banner)
- Pricing page: 4 tiers (Free / Pro $3.99 / Business $13.99 / Enterprise $49.99) with comparison table
- Rate limiting: 100 req/min per IP via Upstash Redis middleware
- Usage logging: daily counts in usage table, monthly page tracking in usage_logs for table extraction

## Spanish Layer (COMPLETE)
- Spanish homepage (/es) with full tool grid and correct /es/ routes
- Spanish header (header-es.tsx) and footer (footer-es.tsx)
- Dynamic language switcher: flag links navigate to equivalent page in other language (lib/route-map.ts)
- Spain flag for Spanish, US flag for English
- Spanish auth pages: /es/login, /es/registro, /es/registro/exito, /es/registro-requerido, /es/auth/confirmar, /es/auth/error
- Spanish legal pages: /es/politica-de-privacidad, /es/terminos-y-condiciones
- Spanish dashboard: /es/dashboard (dashboard-client-es.tsx)
- Spanish static pages: /es/acerca, /es/contacto, /es/precios, /es/herramientas
- Spanish core tool pages: ALL tool pages from the homepage have Spanish equivalents
- Spanish Business tool pages: /es/automatizacion, /es/comparar-pdf, /es/firma-electronica, /es/redaccion-pdf, /es/extraccion-de-tabelas
- Spanish SEO cluster pages: 48 pages across 7 clusters (compression, merge, split, extract, security, edit, conversion)
- Spanish /es/aprender/ articles: 81 articles across 16 categories (mirrors English /learn/)
- Route map (lib/route-map.ts): 111 trilingual EN↔ES↔BR route triplets
- Sitemaps submitted to Google Search Console — 200 pages discovered

## Brazilian Layer (COMPLETE)
- Brazilian homepage (/br) with full tool grid and correct /br/ routes
- Brazilian header (header-br.tsx) and footer (footer-br.tsx)
- Trilingual language switcher: all 3 headers show 2 flags for the other 2 languages
- Brazil flag for Portuguese, Spain flag for Spanish, US flag for English
- Brazilian auth pages: /br/login, /br/cadastro, /br/cadastro/sucesso, /br/cadastro-necessario, /br/auth/confirmar, /br/auth/erro
- Brazilian legal pages: /br/politica-de-privacidade, /br/termos-e-condicoes
- Brazilian dashboard: /br/painel (dashboard-client-br.tsx)
- Brazilian static pages: /br/sobre, /br/contato, /br/precos, /br/ferramentas
- Brazilian core tool pages: ALL tool pages from the homepage have Brazilian equivalents
- Brazilian Business tool pages: /br/automacao, /br/comparar-pdf, /br/assinatura-eletronica, /br/redacao-pdf, /br/extracao-de-tabelas
- Brazilian SEO cluster pages: 54 pages across 7 clusters (compression, merge, split, extract, security, edit, conversion)
- Brazilian /br/aprender/ articles: 81 articles across 16 categories (mirrors English /learn/ and Spanish /es/aprender/)
- Total: 180 Brazilian pages

## Signup & Auth Fixes Done
- First name required on signup (validation + stored in Supabase user_metadata)
- Stripe webhook no longer overwrites user names (changed upsert → update)
- Suspense boundary fix for useSearchParams() in auth/confirm pages
- All PDF.it branding removed, replaced with PDF.it

## SEO Cluster Pages Done (All 6 Clusters — ~100 pages)
- Cluster 1 (Compression): 18 pages built
- Cluster 2 (Conversion): 20 pages built
- Cluster 3 (Document Editing): 6 pages built
- Cluster 4 (Organization): 11 pages built
- Cluster 5 (Security): 7 pages built
- Cluster 6 (Data Extraction): 9 pages built

## Long-Tail SEO Articles Done (~82 /learn/ articles)
- PDF to JPG (5), PDF to PNG (5), PDF to TXT (5)
- Word to PDF (5), Excel to PDF (5), PowerPoint to PDF (5)
- Office to PDF (5), Merge PDF (5), Split PDF (6)
- Rotate PDF (4), Protect PDF (4), Unlock PDF (4), Watermark PDF (5)
- Compress PDF (5), OCR PDF (6), QR Code (7)

## Error Handling & Locale-Aware Routing (COMPLETE)
- processing-interface.tsx: All 11 tool branches now handle upgrade_required (redirects to /pricing)
- processing-interface.tsx: All redirects (pricing, signup-required, dashboard) are locale-aware — ES users stay on /es/, BR users stay on /br/
- phone-scan-cleanup-interface.tsx: Fixed signup_required redirect (was /pricing, now /signup-required)
- image-to-pdf-interface.tsx: Same fix
- watermark-pdf-interface.tsx: Pricing links are locale-aware
- Fallback upgrade UI with Crown icon added to processing-interface error render
- Fixed hardcoded English links in /es/codigo-qr, /br/codigo-qr, /es/precios pages

## Accessibility Fixes (COMPLETE)
- PRO badge contrast: text darkened from #B45309 to #92400E (5.5:1 ratio) — 5 files
- Footer logo "PDF" contrast: #F97316 → #FB923C on dark bg (5.7:1 ratio) — 3 footers
- Header logo "PDF" contrast: #F97316 → #EA580C on white bg (4.6:1 ratio) — 3 headers
- Social media icons: aria-label added to all 12 icons across 3 footers (EN/ES/BR)
- Footer small text: text-slate-500 → text-slate-400 on dark bg — 3 footers
- Orange button contrast: Tailwind config updated — orange-500 now #EA580C (4.6:1 on white, passes WCAG AA)
- Hardcoded #F97316 buttons updated in signup-required, registro-requerido, cadastro-necessario, pro pages

## Branding & Logo (COMPLETE)
- Professional logo SVG integrated site-wide (public/logo.svg — viewBox cropped to 75 230 680 140)
- Swirl icon for footers and small contexts (public/icon.svg)
- Favicon: app/favicon.ico
- Apple touch icon: app/apple-icon.png
- OG/Twitter social sharing image: public/og-logo.png (1200x630)
- Headers (all 3 languages): use `<img src="/logo.svg">` — h-8 w-auto
- Footers (all 3 languages): use icon.svg + styled "PDF.it" text on dark bg
- Login pages (EN/ES/BR): use logo.svg centered above form
- Signup pages (EN/ES/BR): use logo.svg centered above form
- app/layout.tsx: full metadata with favicon, apple-icon, OG image, Twitter card

## Analytics (COMPLETE)
- Google Tag Manager (GTM-PNR9LXC2) loads via next/script with afterInteractive strategy
- GA4 (G-PWD4YNY710) loads directly alongside GTM for redundancy
- google-analytics.tsx is a "use client" component for proper Next.js App Router hydration
- GTM noscript fallback in body

## Hero Section (UPDATED 2026-03-17)
- Headline: "PDF Tools Built for Legal, Accounting, Business Teams and for Your Everyday Student"
- Subtitle: "Compress, convert, extract tables, sign, and redact — in English, Spanish, and Portuguese. Trusted by professionals across the world."
- Responsive text: text-3xl (mobile) → text-4xl (sm) → text-6xl (lg)
- Translated to ES and BR with same structure

## Performance Optimization (COMPLETE — 2026-03-18)
- Lighthouse Mobile: FCP 1.3s, LCP 1.8s, TBT 260ms, CLS 0, Speed Index 1.3s
- Lighthouse Desktop: FCP 0.4s, LCP 0.4s, TBT 0ms, CLS 0.005, Speed Index 0.4s
- Removed global * transition rule (caused 420ms→130ms TBT improvement)
- Added width/height to all logo images (eliminated CLS)
- Added fetchPriority="high" to header logos, loading="lazy" to footer logos
- Preload logo.svg and dns-prefetch googletagmanager in layout head
- Converted homepage from client to server component (reduced first load JS by 7KB)
- Homepage uses ScrollToTools tiny client component for hash navigation

## URL to PDF Tool (COMPLETE — 2026-03-17)
- Uses CloudConvert capture-website with Chrome engine (~$0.02/conversion)
- Public URLs only — login-protected pages won't work (noted in interface)
- Pro/Business/Enterprise tier
- Pages: /url-to-pdf, /es/url-a-pdf, /br/url-para-pdf

## Usage Logging Fixes (COMPLETE)
- Fixed broken logging in excel-to-pdf, office-to-pdf, powerpoint-to-pdf routes (undefined `usage` variable)
- All Pro/Business routes now properly import and call logUsage with user.id

## Bug Fixes — March 23 2026
- **Enterprise locked out of QR Code (all 3 languages)** — `app/tools/qr-code/page.tsx`, `app/es/codigo-qr/page.tsx`, `app/br/codigo-qr/page.tsx`: client-side plan check was missing `"enterprise"`, blocking $49.99/month subscribers from accessing the tool
- **pdf-to-txt missing maxDuration** — `app/api/pdf-to-txt/route.ts`: added `maxDuration = 300` to match all other processing routes; without it Vercel defaulted to 60s and Business/Enterprise users with large files would time out
- **qr-code API wrong error format for unauthenticated users** — `app/api/qr-code/route.ts`: changed response from `{ error: "You must be logged in..." }` / 401 to `{ error: "upgrade_required" }` / 403 so the frontend correctly redirects to /pricing
- **qr-code API missing logUsage** — `app/api/qr-code/route.ts`: added `logUsage(user.id, "qr-code")` after successful generation; Pro/Business/Enterprise QR code usage was invisible in the database
- **Admin limits page showed "10" for Enterprise users** — `app/admin/limits/page.tsx`: added `"enterprise"` to the Unlimited condition; Enterprise subscribers saw "10 daily conversions" instead of "Unlimited"
- **Table extraction charged Document AI before enforcing page cap** — `app/api/table-extraction/route.js`: added pdf-lib pre-flight page count after buffer download; if the PDF exceeds the user's remaining monthly quota it now rejects before calling Document AI instead of after, eliminating wasted API cost (~$0.03/page)

## Bug Fixes — March 24 2026 (QA Report — Critical)
- **SB-01: Signup confirmation email failing** — Added `captchaToken` to `supabase.auth.signUp()` options in all 3 signup pages (EN/ES/BR); without it Supabase rejected the request server-side when hCaptcha was enabled
- **SB-15/22: Missing Forgot Password on login** — Added "Forgot Password" button with `resetPasswordForEmail` flow to all 3 login pages; created `app/reset-password/page.tsx` for new password entry; also fixed missing `captchaToken` in `signInWithPassword()` on all 3 login pages
- **SB-28: Missing password eye icon on signup** — Added Eye/EyeOff visibility toggle to Password and Confirm Password fields on all 3 signup pages
- **SB-11: Merge PDF only allows 1 file** — Fixed `processing-interface.tsx`: free users now get 2 files for merge (was 1), paid users unlimited; `multiple` attribute enabled on file input for merge tool
- **SB-27: "Email Us Directly" button not working** — Added explicit `onClick` with `window.location.href` for mailto on all 3 homepage FAQ buttons; fixed BR page from `suporte@` to `contact@pdf.it.com`
- **SB-30: Captcha misaligned on login** — Added `overflow-hidden` to hCaptcha wrapper div on all 3 login pages

## Bug Fixes — March 24 2026 (QA Report — Medium)
- **SB-02: OCR Scanner blank after removing file** — `removeFile()` in `ocr-pdf-interface.tsx` now resets all state variables (processing, error, complete, progress, processedFile), not just the file
- **SB-03: Same file cannot be re-uploaded after deletion** — Added `input.value = ""` reset in OCR `removeFile()` and `resetInterface()`; added `onClick` value reset to all 12 file input components project-wide
- **SB-06: Password eye icon disappears after full entry** — Hidden native browser password reveal buttons (`[&::-ms-reveal]:hidden`, `[&::-webkit-credentials-auto-fill-button]:hidden`) and added `z-10` to custom eye button on all 3 login pages
- **SB-09: Split PDF fails on single-page PDF** — Already had pdf-lib pre-check in `split-pdf-interface.tsx` (validates page count before upload, shows "This PDF has only 1 page and cannot be split")
- **SB-29: Selected file removed when canceling file dialog** — Added `onClick={(e) => { (e.target as HTMLInputElement).value = "" }}` to all 12 file input elements; resets value before dialog opens so cancel doesn't trigger onChange

## Bug Fixes — March 24 2026 (QA Report — Low Priority)
- **SB-05/07: Social media footer icons scroll to top** — Converted `Link` to `<a>` with `target="_blank"` `rel="noopener noreferrer"` and `onClick={(e) => e.preventDefault()}` in all 3 footers
- **SB-08: Vague error messages on upload** — Added specific messages in `processing-interface.tsx` catch block: file too large, unsupported format, network error
- **SB-17: Screen flickers on nav click** — Added placeholder `div` with matching dimensions in all 3 headers while auth state loads, preventing layout shift
- **SB-24: Yearly plan resets to monthly** — Billing toggle selection now persists to `localStorage` and restores on page load in `app/pricing/page.tsx`
- **SB-19: Download button misaligned on mobile** — Changed file result card to `flex-col sm:flex-row` layout; download button goes full-width on mobile (`w-full sm:w-auto`)
- **SB-32/33: Contact form fields cut off** — Changed name/email grid from `md:grid-cols-2` to single column to prevent placeholder truncation
- **SB-35/36: Email and filename overflow on mobile** — Added `truncate`, `max-w-[200px]`, and `break-all` to file names and email addresses
- **SB-37: UI distorted on mobile after conversion** — Added `overflow-x-hidden` on success state section in `processing-interface.tsx`

## PDF.it Rebrand (COMPLETE — March 24 2026)
- Global find-and-replace: PDF.it → PDF.it across all pages, components, metadata
- Tailwind config: remapped `orange` color key to teal (#14D8C4) hex values
- Background color: replaced all `bg-slate-50`/`bg-white` page wrappers with `#F3F4FF`
- Header: text wordmark with "PDF" in dark indigo (#191B4D) + ".it" in teal (#14D8C4)
- Footer: text wordmark with "PDF" in white + ".it" in teal on dark (#0E0F1E) background
- Fonts: Sora (headings), Inter (body) via BRAND.md
- GA4 measurement ID updated to G-PWD4YNY710
- GTM container ID updated to GTM-PNR9LXC2

## Premium Visual Redesign (March 24 2026)
- **Brand identity locked** — CLAUDE.md + BRAND.md rewritten with final PDF.it palette: #0E0F1E dark, #13152A secondary, #F3F4FF surface, #14D8C4 CTA, #6B7CFF support blue, iridescent wave gradient (#0A4A5C → #1E6FD9 → #E8813A)
- **Sora + Inter fonts** — Google Fonts loaded in layout.tsx; Sora for headings (h1-h6), Inter for body; Tailwind config updated with font-sans and font-heading
- **Dark cinematic homepage** — Hero: 4-layer radial gradient glows (teal 22%, orange 8%, purple 14%), SVG grain texture, gradient "Instantly." headline (teal → purple → orange)
- **3D CTA buttons** — Primary: linear-gradient teal, inset highlight, breathing pulse glow animation (ctaGlow keyframes), 3D box-shadow with color; Secondary: glass outline with blur
- **Glassmorphism tool cards** — Dark section bg (#0E0F1E) with atmospheric glows; cards wrapped in 1px gradient border (teal → purple → orange metallic); inner card: rgba(255,255,255,0.07) + backdrop-blur(12px); hover: translateY(-4px) + colored shadow
- **Icon containers** — Gradient backgrounds (linear-gradient #1a1f5e → #252A6A) with teal glow shadows (0 0 20px rgba(20,216,196,0.35))
- **Trust section** — Fully dark with glass social proof badges, gradient icon containers, iridescent CTA box
- **Iridescent wave** — Updated gradient stops to full brand palette (#0A4A5C → #14D8C4 → #6B7CFF → #E8813A)
- **Dark navbar** — Solid #0E0F1E background, white nav text, teal Sign In button with glow shadow
- **Tools A-Z page** — Full cinematic treatment: atmospheric hero with grain, gradient "A-Z" text, glass letter nav, metallic-bordered tool cards, gradient letter markers with teal glow, colored tier badges (green/teal/purple/orange), 3D CTA at bottom
- **"Still have questions?" boxes** — Replaced beige/cream (from-orange-50 to-orange-100) with dark navy (#191B4D) + white text + teal CTA buttons across all pages and locales
- **Category headers** — font-extrabold (800) white titles, #6B7CFF purple subtitles
- **Dark-on-dark text fix** — Fixed unreadable text-slate-800 on bg-[#191B4D] in Our Mission box across EN/ES/BR about pages
- **User-facing PDF.it cleanup** — Replaced "OmniSPDF" in eSign modal (4 instances), batch zip filename, and cookie key with PDF.it equivalents
- **Blog rename** — /blog/welcome-to-omnispdf → /blog/welcome-to-pdfit; updated slugs in EN/ES/BR blog listings and sitemap
- **Sitemap cleanup** — Removed duplicate /tools/qr-code and /tools/word-to-pdf entries
- **Footer social links build fix** — Removed onClick handlers from server component footer social links (was causing Next.js build failure)

## Supabase Schema (March 24 2026)
- Generated complete SQL schema at scripts/pdfit_complete_schema.sql for new PDF.it Supabase project
- Tables: users (with plan check constraint), usage (daily counts), usage_logs (per-attempt audit), contact_messages
- Includes RLS policies, indexes, auto-create trigger on auth.users signup
- Code uses "users" table (not "profiles" from old migrations)

## Bug Fixes — March 24 2026 (Additional)
- **SB-34: "More Files" no scroll on mobile** — `resetInterface()` now scrolls to `#file-upload-zone` after reset
- **SB-16: Pricing card text clipped on annual** — Added `min-h-[20px]` wrapper around conditional annual text in EN/ES/BR pricing pages
- **SB-13/21: Language switcher** — Confirmed working; `getAlternateRoute()` logic and flag links are correct
- **Billing toggle localStorage** — Added to ES and BR pricing pages (EN already had it)
- **Processing error messages** — Specific messages for 413/too large, 415/unsupported format, and network errors

## Trilingual Parity Audit (March 25 2026)
- Full audit of EN, ES, and BR locales — all three are in parity
- All 97+ main PDF tool pages present in all 3 locales
- All 81 /learn/ (EN), /aprender/ (ES), /aprender/ (BR) articles present in all 3 locales
- Auth flows complete: login, signup, confirmation, error pages in all 3 locales
- Legal pages (privacy policy, terms) present in all 3 locales
- Static pages (about, contact, pricing, tools, tools A-Z) present in all 3 locales
- Dashboard pages present in all 3 locales
- All BR-specific components confirmed: header-br.tsx, footer-br.tsx, features-grid-br.tsx, dashboard-client-br.tsx
- Route map (lib/route-map.ts) trilingual tuples verified correct
- No missing pages found

## Premium Dark Cinematic Redesign (COMPLETE — March 25 2026)

### Page_Format.md — Canonical tool page format
- Created `Page_Format.md` as the single source of truth for tool page structure
- Referenced in `CLAUDE.md` under Rules and Strategy Documents
- Defines 8-section order: Hero → Intro → Processing Interface → Feature Blocks → How It Works → Related Tools → FAQ → Schema
- Documents 3 processing interface variants (standard, image-to-pdf, url-to-pdf)
- Includes Prohibited Elements section and full Color Reference

### Tool pages redesigned to Page_Format.md (all 3 languages: EN, ES, BR)
- `/pdf-to-txt`, `/pdf-to-png`, `/pdf-to-word`, `/pdf-to-excel`, `/pdf-to-powerpoint`
- `/extract-images-from-pdf`, `/word-to-pdf`, `/excel-to-pdf`, `/powerpoint-to-pdf`
- `/jpg-to-pdf`, `/png-to-pdf`, `/url-to-pdf`
- `/merge-pdf`, `/split-pdf`, `/rotate-pdf`, `/flatten-pdf`
- `/protect-pdf`, `/unlock-pdf`, `/watermark-pdf`
- Total: 19 tools × 3 languages = 57 page files rewritten

### Design changes applied per page
- Hero: `#0E0F1E` with radial gradients + noise grain SVG (was `#191B4D`)
- Icon: dark gradient box with teal glow (was `bg-orange-500`)
- Badges: `text-[#14D8C4]` teal icons (was `text-orange-500`)
- Intro: plain `✓` checklist in 2-column grid on `bg-[#F3F4FF]` (was various old styles)
- Feature Blocks: 3 dark glassmorphism cards on `#0E0F1E` (was light `bg-[#F3F4FF]` text sections)
- How It Works: horizontal flex with dark gradient circles + teal numbers (was vertical lists with orange circles)
- Related Tools: 4 metallic border cards with glassmorphism (was various old styles)
- FAQ: wave-color dark background with frosted glass cards (was `bg-gray-50` white cards)
- Schema: moved to bottom of `<main>` (was at top of component)
- Removed: CTA sections, Use Cases sections, TrustBadges, 8-tool grids

### Tier pre-gate cards (upgrade cards shown to free users)
- **Pro** (gold `#E0C27A`): Crown icon, "Most Popular" badge, gold glow
  - Components: `processing-interface.tsx` (via `requiresPlan="pro"` prop), `url-pdf-interface.tsx`, `pdf-to-word-interface.tsx`, `ocr-pdf-interface.tsx`, `image-to-pdf-interface.tsx`, `ats-optimizer-interface.tsx`, `resume-builder-interface.tsx`
  - Pages: `/pdf-to-word`, `/pdf-to-excel`, `/pdf-to-powerpoint`, `/word-to-pdf`, `/excel-to-pdf`, `/powerpoint-to-pdf`, `/url-to-pdf`, `/ocr-scanner`, `/jpg-to-pdf`, `/png-to-pdf`, `/ats-optimizer`, `/create-resume`
- **Business** (sapphire `#6B7CFF`): Crown icon, "Business Feature" badge, blue glow
  - Components: `esign-interface.tsx`, `pdf-compare-interface.tsx`, `redaction-interface.tsx`
  - Pages: `/esign`, `/pdf-compare`, `/pdf-redaction`
- **Enterprise** (platinum `#C0C5CE` + teal): Crown icon, "Enterprise Feature" badge, platinum glow
  - Components: `table-extraction-interface.tsx`, `workflow-interface.tsx`
  - Pages: `/table-extraction`, `/workflow-automation`
- Also redesigned: upgrade-required and daily-limit-reached error cards in `processing-interface.tsx`

## Full Aesthetic Overhaul — March 26 2026

### Tool Pages Rewritten to Page_Format.md (additional batch)
- `/compress-pdf`, `/compress-pdf-for-email`, `/upload-ready-pdf`, `/ocr-scanner`, `/phone-scan-cleanup` — all 3 languages (15 files)
- `/tools/qr-code`, `/ats-optimizer`, `/create-resume` — all 3 languages (9 files + new `qr-code-interface.tsx` component)
- `/pdf-compare`, `/esign`, `/pdf-redaction`, `/workflow-automation`, `/extract-tables-from-pdf`, `/table-extraction` — all 3 languages (18 files)
- QR Code page split from client-only to server page + client interface for SEO metadata support

### Pro Tier Gate Cards Updated
- `/watermark-pdf`, `/ats-optimizer`, `/create-resume` — changed from old flat white cards to dark glassmorphism with gold accents (`#E0C27A`)
- QR Code interface (`qr-code-interface.tsx`) — new component with proper Pro gold gate card

### Business Tier Gate Cards Updated
- `/esign`, `/pdf-redaction`, `/pdf-compare`, `/table-extraction` — sapphire (`#6B7CFF`) glassmorphism cards

### Enterprise Tier Gate Cards Updated
- `/workflow-automation` — platinum (`#C0C5CE`) gate, gates at Enterprise only (`userPlan === "enterprise"`)
- `/high-volume-table-extraction` — new Enterprise page created (EN/ES/BR) with `enterpriseMode` prop on `TableExtractionInterface`
- `/table-extraction` — Business gate (200 pages/month), separate from Enterprise high-volume version

### New Page: /high-volume-table-extraction (Enterprise)
- Created EN, ES (`/es/extraccion-tablas-alto-volumen`), BR (`/br/extracao-tabelas-alto-volume`) pages
- Homepage features-grid updated to point Enterprise "High-Volume Table Extraction" to new route
- `TableExtractionInterface` updated with `enterpriseMode` prop for dual gating

### Homepage Updates
- Hero slogan changed to: "Free PDF Tools. Zero File Storage." / "Convert, compress, and edit PDFs in seconds — files deleted immediately after you download."
- Translated to ES and BR
- Hero sections converted from client to server components (reduced JS bundle)
- TierBadge colors updated across all 3 features-grid files (EN/ES/BR): Free=gray, Pro=gold, Business=sapphire, Enterprise=sky blue (`#38BDF8`)
- Language flags now show initials underneath (EN/ES/BR) in white

### Static Pages Redesigned (dark cinematic aesthetic, all 3 languages)
- `/about` — dark hero, glassmorphism feature cards, tier cards with tier-specific colors (gray/gold/sapphire/platinum), privacy commitment section, "Everything in..." text changed to readable blue
- `/pricing` — dark hero with teal billing toggle, `p-[1px]` gradient border tier cards matching about page, dark comparison table with tier-colored headers and teal checkmarks
- `/contact` — dark hero with badges, dark glassmorphism contact info card, white form card with teal focus rings, privacy footer section
- `/blog` — dark hero with BookOpen icon, featured post card, glassmorphism blog grid, newsletter CTA section, Blog structured data (JSON-LD)
- `/login` — full dark page with glassmorphism form card, teal accents, dark inputs
- `/signup` — same dark treatment with trust points below form
- `/signup/success` — dark cinematic with glowing CheckCircle, "Thank You for Joining PDF.it!" message, email instruction card, trust points
- `/dashboard` — full dark redesign: glassmorphism stat cards, dark tool grid, teal progress bars, tier-colored plan badges, subtle red hover on Sign Out

### Blog Articles Added (SEO-rich)
- `/blog/compress-pdf-email` — "How to Compress a PDF for Email Attachments" (Guide)
- `/blog/scanned-pdf-searchable-ocr` — "How to Make a Scanned PDF Searchable with OCR" (Guide)
- `/blog/protect-sensitive-documents` — "How to Protect Sensitive Documents Before Sharing" (Security)
- Blog listings updated with 6 total posts, featured post layout, structured data

### Performance Improvements
- Google Fonts deferred with `media="print" onLoad` trick — eliminated render-blocking (~320ms saved)
- Removed duplicate GA4 gtag.js scripts (GTM already loads GA4) — 1 fewer network request
- Hero sections converted to server components (EN/ES/BR) — less JS shipped
- FAQ section lazy-loaded with `next/dynamic`

### Branding Fixes
- Replaced PDF.it logo.svg with PDF.it inline text logo on login, signup, and reset-password pages (7 files)
- Login page background CSS syntax fixed (color must come after gradients)

### Mobile Fixes
- Hamburger menu icon set to white on all 3 headers
- Contact page email overflow fixed on ES/BR (responsive text + break-all)
- Tier badge "Best for Teams" wrapping fixed with whitespace-nowrap

### System Audit — March 26 2026
- Full audit of all 38 API routes, 14 interface components, and `checkUsageAndAuth()` function
- All Pro+ API routes correctly include `enterprise` in allowed plans
- All Business+ API routes correctly include `enterprise` in allowed plans
- `checkUsageAndAuth()` correctly gives unlimited access to Pro/Business/Enterprise
- File size limits correctly gated: Free=25MB, Pro=200MB, Business=1GB, Enterprise=1GB (in `lib/upload-to-blob.ts`)
- **Fixed**: Workflow API (`app/api/workflow/route.js`) was allowing Business users through — changed to Enterprise-only to match UI gate

### Sitemap Fix — March 26 2026
- Converted from single `sitemap()` to `generateSitemaps()` index pattern (Next.js 15)
- Split 542 URLs into 3 sub-sitemaps of 200 each (`/sitemap/0.xml`, `/sitemap/1.xml`, `/sitemap/2.xml`)
- Google was only discovering 200 of 536 URLs due to single-sitemap limitation
- Added 6 missing URLs: `/high-volume-table-extraction` (EN/ES/BR), 3 new blog articles
- Total: 542 URLs across EN/ES/BR

### Remaining Pages Fixed — March 26 2026
- `/signup-required` (EN/ES/BR) — rewritten with dark cinematic glassmorphism card, teal CTA, privacy note
- `/reset-password` — rewritten with dark glassmorphism, dark inputs, teal accents, password show/hide toggles
- `public/logo.svg` — replaced PDF.it SVG with PDF.it text logo ("PDF" in dark + ".it" in teal)

### Legal Pages Redesigned — March 26 2026
- `/privacy-policy` (EN/ES/BR) — dark cinematic hero, glassmorphism policy card on dark bg, teal accents, teal bullet markers, privacy footer section. All legal text preserved exactly.
- `/terms-conditions` (EN/ES/BR) — same dark cinematic treatment: glassmorphism card, teal bullets, teal links, privacy footer. All legal text preserved exactly.

## Google Search Console Status
- Sitemap index with 542 URLs across EN/ES/BR — 3 sub-sitemaps of 200 each
- DO NOT break any existing indexed pages
- English, Spanish, and Brazilian pages all included in sitemap
