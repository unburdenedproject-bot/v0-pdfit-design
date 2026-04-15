# PDF.it - Project Memory

## What This Project Is
PDF.it (pdf.it.com) is a PDF tools SaaS competing with SmallPDF.
Built with Next.js, deployed on Vercel, using iLoveAPI for PDF processing.
Owner: Paula Vargas (paula.vargas3@gmail.com)
Goal: 10,000 paid subscribers
Positioning: "Fix any document problem instantly" — not just "PDF tools"

## Tech Stack
- Frontend: Next.js (built in V0)
- Hosting: Vercel (Pro plan)
- PDF Processing: iLoveAPI (except pdf-to-word, pdf-to-excel, pdf-to-powerpoint which use CloudConvert)
- URL to PDF: CloudConvert capture-website (Chrome engine, ~$0.02/conversion, public URLs only)
- Table Extraction: Google Document AI Form Parser ($0.03/page)
- Auth: Custom signup/login with hCaptcha
- Payments: Stripe
- Storage: Vercel Blob
- Analytics: Google Tag Manager (GTM-PNR9LXC2) + GA4 direct (G-PWD4YNY710)
- Database: Supabase (users, usage tracking)
- Rate Limiting: Upstash Redis
- Testing: Playwright (E2E, 180 tests + 41 integration), Vitest (unit, 6 tests) — 227 total
- Error Tracking: Sentry (Vercel-side only — @sentry/nextjs removed due to Node 24 incompatibility)
- Uptime Monitoring: BetterUptime (LIVE — pings every minute, SMS/email alerts)
- Logo: SVG image logo at `/public/logo.svg` — used in all headers, footers, auth pages via `<img>` tag
- CI: GitHub Actions (build + unit + E2E on every push to main)
- Cron Jobs: Vercel Cron — trial email drip (daily 9am), SEO health (Mon 8am), Stripe reconciliation (Sun 6am), usage log cleanup (1st of month 3am)
- API Routes: 51 total, ALL TypeScript (.ts), zero .js remaining
- Shared Utilities: `lib/api/blob-handler.js` (streaming blobUrlToTmp), `lib/api/error-handler.js` (sanitized errorResponse), `lib/csrf.ts`, `lib/retry.ts`, `lib/validate-blob-url.js`
- Backend Audit Score: 8/10 (was 4.5/10 before April 7 fixes) — see BACKEND-AUDIT.md

## Pricing Tiers
- Free: 10 conversions/day (3 anonymous, then must log in), files up to 25MB, basic PDF tools, single file, standard processing
- Pro ($3.99/month, $39.90/year): Unlimited conversions, files up to 200MB, all PDF tools (OCR, QR, PDF to Word/Excel/PPT), batch processing, priority speed
- Business ($13.99/month, $139.90/year): Everything in Pro + files up to 1GB, workflow automation, table extraction to Excel (200 pages/month), PDF comparison, eSign, PDF redaction
- Enterprise ($49.99/month, $499.90/year): Everything in Business + table extraction (2,000 pages/month), 5 enterprise workflow templates, priority processing queue, dedicated email support, early access to new features

## Stripe Price IDs
- Pro monthly: price_1TAcV8HNTg4nAWfEglc1IwOo
- Pro annual: price_1TAcWMHNTg4nAWfER2mhVnPs
- Business monthly: price_1T8ynmHNTg4nAWfEcMl8vQj3
- Business annual: price_1T8ynmHNTg4nAWfEt4wU7Kgk
- Enterprise monthly: price_1TBZdtHNTg4nAWfEm8KPJDFU
- Enterprise annual: price_1TBZeQHNTg4nAWfE0fSRwNWp

## Packaging Strategy
- Free: Flatten PDF, basic Extract Images, single file, moderate size limits
- Paid: batch processing, larger files, faster queue, higher limits, bulk download/export options
- Enterprise: industry-specific workflow templates (Legal, Court Filing, Invoice Archive, Draft Review, Lab Report)
- We can't give everything for free — free tools are funnels to Pro/Business/Enterprise

## Free Trial
- All paid plans include a 30-day free trial (configured in `/app/upgrade/page.tsx` via `subscription_data.trial_period_days: 30`)
- Stripe collects payment method at checkout but does not charge until day 31
- Welcome email sent via Resend on `checkout.session.completed` webhook
- Stripe webhook URL: `https://www.pdf.it.com/api/webhook` (must use www — non-www returns 307 redirect)

## Cost Structure (at scale)
- iLoveAPI: ~$0.04-0.10 per conversion (2,500 free credits/month)
- Google Document AI: $0.03/page (Form Parser)
- CloudConvert: ~$0.02 per conversion (PDF to Word/Excel/PPT)
- URL to PDF: ~$0.02 per conversion (CloudConvert capture-website, public URLs only — login-protected pages won't work)
- Vercel Pro: $20/month base + bandwidth overage at $0.15/GB after 1TB
- At 10K subscribers: ~$2,500-4,300/month costs vs ~$157,900/month revenue (97% margin)

---

## What's Next

**Launched April 13, 2026.** All pre-launch TODOs completed. For post-launch work, see `POST-LAUNCH.md`. For future infrastructure migration (R2 + Redis + Fly.io workers), see `INFRASTRUCTURE.md` — not urgent until ~100 concurrent users.

---

## Cron Jobs (vercel.json)
- `/api/cron/trial-emails` — daily 9am UTC: sends Day 7, 25, 30 trial drip emails via Stripe + Resend
- `/api/cron/seo-health` — Mondays 8am UTC: checks 30+ pages, sitemap, robots.txt, meta tags; emails report to Paula
- Both protected by `CRON_SECRET` env var (set on Vercel)

## Strategy Documents
- ROADMAP.md — Week-by-week execution plan (6 weeks)
- INFRASTRUCTURE.md — Architecture plan (R2 → Redis/BullMQ → Workers → Fly.io)
- SEO-MAP.md — 120-page SEO cluster map with progress tracking
- LONG-TAIL-PAGES.md — 80 /learn/ articles plan (16 tool categories)
- GROWTH-STRATEGY.md — Pricing funnel, upgrade triggers, revenue model
- COMPLETED.md — All accomplished work (tools, layers, fixes, SEO)
- ENVIRONMENT.md — Vercel environment variables and Google Cloud credentials
- LOCALIZATION.md — Localization patterns, route map rules, language-specific components, trilingual build instructions
- BRAND.md — Target audience, brand voice, positioning, color system, design rules
- **Page_Format.md — Canonical tool page format (section order, exact styles, JSX snippets, color tokens). READ THIS before creating or editing any tool page.**
- SETUP-GUIDE.md — Step-by-step setup for Sentry, BetterUptime, CRON_SECRET (all now configured)
- BACKEND-AUDIT.md — Full backend architecture audit with 28 prioritized fixes, scalability limits, and scorecard

## Brand
- Fonts: Sora (headings), Inter (body)
- Background dark: #0E0F1E (hero, headers, footer, nav)
- Background secondary: #13152A (cards on dark, hover states)
- Surface light: #F5F7FB (tool pages, content sections)
- Primary CTA: #14D8C4 (buttons, icons, logo ".it")
- CTA hover: #2EE6D6
- Support blue: #6B7CFF (links, badges)
- Wave colors: #0A4A5C → #1E6FD9 → #E8813A (iridescent)
- GTM ID: GTM-PNR9LXC2
- GA4: G-PWD4YNY710

## Test Suite — 227 total tests
- **180 E2E tests** (desktop-chrome project): run locally with `npx playwright test --project=desktop-chrome`
- **41 integration tests** (integration project): need real Supabase/Stripe creds, run in CI only
- **6 unit tests** (Vitest): run with `pnpm test:unit`
- Config: `playwright.config.ts` — 3 projects (desktop-chrome, integration, integration-nightly), fullyParallel, 4 CI workers
- Helpers: `e2e/helpers/` — api-mocks (mockPdfApiRoute, mockUserPlan, mockBlobUpload), accessibility (axe-core wrapper), assertions (expectSeoMeta), auth (fillSignupForm), paths (fixturePath)
- Fixtures: auto-generated by `e2e/fixtures/generate-pdfs.ts` (valid.pdf, blank.pdf, multi-page.pdf, single-page.pdf, corrupted.pdf, sample.jpg, sample.png, fake.pdf)
- Tier gating tests use `mockUserPlan(page, "pro"|"business"|"enterprise")` to simulate paid plans
- E2E coverage: smoke (32 health + 8 console error + 6 content + 2 error pages), tools (6 tools), auth (signup, login, password-reset, protected routes), payments (12 checkout URLs + prices + tier gating), SEO (structured data, hreflang, canonical, sitemap), i18n (content, navigation, 404s), accessibility (WCAG AA on 6 pages), security (file upload), mobile (responsive), contact form, cron endpoints
- Integration coverage (CI): API tier gating, usage limits, webhook processing, SSRF blocking, URL-to-PDF security

## Architecture Notes
- Table extraction uses REST API to Document AI (not gRPC) to avoid private key format issues on Vercel
- Enterprise workflow templates are gated by userPlan in workflow-interface.tsx (enterpriseOnly flag)
- Resume tools: /ats-optimizer (analyze+fix) and /create-resume (build from scratch) are separate pages with separate interfaces
- Resume output is Word .docx via docx npm package (not PDF) — editable by users
- /api/generate-resume handles both "rewrite" and "build" modes, optional cover letter as second page
- Homepage shows 2 resume tools: "Optimize Your Resume" → /ats-optimizer, "Create a Resume" → /create-resume
- eSign signatures are privacy-first and session-only: never persist reusable signature libraries server-side
- Phone scan cleanup uses division-based adaptive background removal (blur(50) background estimate → pixel division). DO NOT replace with global threshold, CLAHE, or modulate — these were tested and produced unusable output. Current parameters are locked as the benchmark.
- Sitemap: explicit route handler at `app/sitemap.xml/route.ts` imports `allUrls` from `app/sitemap-data.ts`. NOT using Next.js convention-based sitemap. Middleware excludes sitemap.xml and robots.txt.
- Stripe webhook lifecycle: checkout → subscription.updated → past_due (no downgrade, email only) → unpaid (downgrade) → subscription.deleted (downgrade). Refunds only downgrade on full refund. Disputes resolve customer via charge object fallback.
- Reconcile cron (`app/api/cron/reconcile-stripe/route.ts`): uses Stripe auto-pagination (no limit:100 cap), sweeps paid users with no active subscription → downgrades to free, emails Paula a report.
- See LOCALIZATION.md

## Rules - Always Follow
- **CRITICAL: If something is NOT broken, DO NOT touch it.** Only modify working systems if there is a proven weakness or gap that will hurt the business. Always ask before changing SEO-critical files (robots.txt, sitemap, canonical URLs, redirects, domain config).
- **NEVER touch the sitemap.** The sitemap at `/sitemap.xml` was broken THREE times (April 8-9, 2026) before being fixed. It is now an explicit route handler at `app/sitemap.xml/route.ts` that imports URL data from `app/sitemap-data.ts`. It works. Do NOT rename, refactor, move, or "improve" these files. Do NOT switch to Next.js convention-based sitemap (`app/sitemap.ts`) — that approach was tried and failed. The middleware at `middleware.ts` excludes `sitemap.xml` and `robots.txt` from processing — do NOT remove those exclusions.
- Never break already indexed pages
- Use iLoveAPI for PDF processing (except pdf-to-word/excel/powerpoint which use CloudConvert)
- Table extraction uses Google Document AI Form Parser
- **All API routes that call paid APIs (iLoveAPI, CloudConvert) must check for blank PDFs using `lib/blank-pdf-check.js` before making the call**
- **Never use "Processing Failed" as an error heading — use specific headings: "Unsupported File Type", "File Too Large", "Empty File"**
- **Never use red to communicate with the user** — no `bg-red-*`, no `text-red-*`, no red icons or borders in any user-facing message (errors, warnings, tips, info, empty states). Red reads as a system failure. Always use the premium soft card pattern: pastel gradient background + teal→indigo gradient icon circle + specific slate heading. Shared component: `components/processing/soft-error-card.tsx` (`<SoftErrorCard />` + `isUserInputError(msg)` guard). Inline banners must replicate the same gradient-circle + pastel-bg look — don't fall back to `bg-red-50 + AlertTriangle`. See BRAND.md > Error & Info Messages.
- **Minimum password length is 8 characters** (enforced on signup and reset password pages)
- **Always use `pnpm install` / `pnpm add`, NEVER `npm install`** — npm breaks pnpm-lock.yaml and silently prevents Vercel deploys
- See LOCALIZATION.md
- **Every tool page must follow the format in Page_Format.md — read it before creating or editing any tool page**
- **Every change must be applied to all 3 languages (EN, ES, BR) simultaneously — no exceptions**
- Enterprise users must have access to ALL Business features — check for both "business" AND "enterprise" in tier gates
- **Never use orange Tailwind classes (orange-50 through orange-700)** — all were migrated to teal (#14D8C4) brand colors on April 6, 2026. Zero orange remaining in codebase.
- **All 149 tool pages now use canonical Page_Format.md layout** — rewritten April 6-7, 2026. Only ~243 learn articles + 3 blog posts still have old layout.
- **BR pages must have canonical in alternates metadata** — `alternates: { canonical: "https://pdf.it.com/br/...", languages: {...} }` (14 were missing, fixed April 7)
- **Newsletter signup** on blog pages saves to Supabase `newsletter_subscribers` table
- **All new API routes must be TypeScript (.ts)** — zero .js routes remaining after April 7 migration
- **All API routes must validate blob URLs** — use `isValidBlobUrl()` from `lib/validate-blob-url.js`
- **All API routes must use streaming** — use `blobUrlToTmp()` from `lib/api/blob-handler.js` (streams to disk, no Buffer.from(arrayBuffer()))
- **All API routes must have finally blocks** for blob + /tmp cleanup
- **All POST endpoints must check CSRF** — use `checkCsrf()` from `lib/csrf.ts`
- **Error messages must never expose service names** — use `errorResponse()` from `lib/api/error-handler.js`
- **Webhook must return 500 on DB failure** (so Stripe retries) and check `webhook_events` for idempotency. Idempotency record must be inserted AFTER successful processing, never before — otherwise Stripe retries are silently dropped on failure.
- **Webhook handles 7 Stripe events:** `checkout.session.completed`, `customer.subscription.updated`, `customer.subscription.deleted`, `charge.refunded` (full refunds only), `charge.dispute.created`, `invoice.payment_failed` (sends "update your card" email), `customer.subscription.trial_will_end` (sends "trial ends in 3 days" email). All 7 must be enabled in Stripe dashboard.
- **Do NOT downgrade on `past_due`** — Stripe is still retrying the charge. Only `unpaid` (all retries exhausted) triggers downgrade. `subscription.deleted` is the final safety net.
- **Blank PDF check (`lib/blank-pdf-check.js`) must never reject valid files** — if the check itself throws (pdfjs-dist failure), log the error and continue processing. Let iLoveAPI handle truly invalid files.
- **Async job queue is DISABLED for launch** — `ASYNC_ENABLED_TOOLS` in `processing-interface.tsx` is an empty Set. All tools use sync processing. Do NOT re-enable without thorough testing of the job queue, cron trigger, and polling timeout.
- **Anonymous usage limit is 3/day** — tracked via cookie `pdfit_uses_YYYY-MM-DD` (daily reset). Cookie is set inside `checkUsageAndAuth()` directly, not returned for routes to set.
- **Footer copyright must say © 2024** — PDF.it was established in 2024. Never use dynamic dates.
- **Never show low usage numbers as social proof** — live stats only display "Files processed" when count exceeds 10,000. Below that, shows "30+ PDF tools available"
- **Feedback table requires manual approval** — set `approved = true` in Supabase before testimonials display on homepage
- **New tool interfaces must use the shared client-side validator** — import `validateClientFile` from `lib/client-file-validator.ts` in the drop/select handler and render `getSizeLimitLabel(userPlan)` under the dropzone. Exception: `pdf-compare-interface.tsx` uses inline validation (dual-file flow is different).
- **AI content prompts must forbid invention** — any prompt that produces user-authored content (resumes, summaries, cover letters) must say "Use ONLY the info provided. Do NOT invent employers, titles, dates, metrics, skills, or achievements." Detect literal "No X" / "None" / "N/A" inputs and instruct the model to OMIT the section entirely. Applies to `/api/generate-resume` and any future AI content route.
- **AI routes that analyze PDFs now upload directly to OpenAI Files API — they do NOT extract text on our side.** As of April 14, 2026, `question-generator`, `ats-optimizer`, `smart-extraction`, `chat-with-pdf`, and `translate-pdf` all send the raw PDF to `POST https://api.openai.com/v1/files` with `purpose=user_data`, then reference the returned `file_id` via `{type:"file", file:{file_id}}` in the chat-completions message content. This bypasses iLoveAPI/pdf-parse/pdfjs-dist text extraction entirely, which was unreliable on Vercel serverless for PDFs with custom fonts or scanned pages. Clean up the file with `DELETE /v1/files/{file_id}` in the `finally` block (except chat-with-pdf, where the file persists across turns). Do NOT call `guardPdfContent()` in these routes — let OpenAI handle the PDF content itself; detect refusal patterns or ask the model to return a sentinel like `{"is_valid_resume": false}` for blank/unreadable PDFs.
- **AI route input must pass `guardPdfContent()`** — the shared helper in `lib/pdf-content-guard.ts` strips metadata, detects binary streams, and enforces word-density. Used by the legacy text-extraction AI routes (NOT the 5 routes that migrated to OpenAI Files API — see the rule above).
- **URL-to-PDF must run `checkUrlSafety()`** — Google Safe Browsing v4 check after SSRF validation. Env var: `GOOGLE_SAFE_BROWSING_API_KEY`. Fails open (logs warning) if missing.
- **Signup must detect empty-identities response** — Supabase hides duplicate emails by returning success with `data.user.identities = []`. Check this explicitly and show "account already exists" on all 3 locales.
- **Password must be strong** — uppercase + lowercase + digit + special char on signup (EN/ES/BR) and reset-password, in addition to 8-char minimum.
- **Third-party widgets (CookieConsent etc.) must be deferred** — wrap in `DeferredCookieConsent` pattern using `dynamic({ ssr: false })` + `requestIdleCallback`. Keeps them out of initial JS bundle.
- **Fonts must use `next/font/google`** — self-hosted, not loaded via `<link>`. The `onLoad="this.media='all'"` pattern does not reliably fire in React Server Components.
- **Every new `<img>` tag needs explicit `width` and `height`** — prevents CLS. Above-fold also gets `fetchPriority="high"`; below-fold gets `loading="lazy" decoding="async"`.
- **Download buttons must be visually prominent — never small text links.** Any tool that produces a result the user downloads (PDF, Excel, CSV, JSON, TXT, DOCX, etc.) must render the download options as filled or outlined buttons in their own visible bar/section, not as tiny link-style buttons in a header. If multiple formats are offered, the recommended/most-common format gets the filled brand-teal button; secondary formats get outlined buttons. Apply this rule to every tool, in all 3 languages.
- Paula is non-technical — explain things simply

## Feature Flags (Kill Switch Per Tool)
- Every API route MUST check `isToolEnabled(slug)` from `lib/feature-flags.ts` before starting work. Returns 503 with the user-facing disabled message if the flag is off. Paula flips flags in Supabase `feature_flags` table — no redeploy needed. See SOLO-PRIORITIES.md #3 for replication pattern. Reference implementation: `app/api/chat-with-pdf/route.ts`.
- Client-side: handle `response.status === 503` in the interface. Either render the inline soft card (if the tool uses inline errors) or `<SoftErrorCard variant="unavailable" />` for full-page tools.

## Deployment Process
- After every fix or change, remind Paula to run:
  git add .
  git commit -m "describe what was changed"
  git push
- After git push, Vercel deploys automatically
- Always give Paula the exact commit message to use
- Never assume she knows when to deploy — always tell her explicitly
