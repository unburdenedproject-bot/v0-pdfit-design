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
- Cron Jobs: Vercel Cron — trial email drip (daily 9am UTC), SEO health check (Mondays 8am UTC)

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

## TODO — By Priority

### Priority 0: Pre-Launch Fixes (ALL DONE)
- ~~Contact form~~ DONE — saves to Supabase contact_messages table
- ~~Stripe portal fallback domain~~ DONE — changed from pdfit.io to pdf.it.com
- ~~ILOVEAPI_SECRET_KEY~~ DONE — confirmed on Vercel
- ~~robots.txt~~ DONE — app/robots.ts already existed
- ~~FAQ section~~ DONE — updated with current product info (all 4 tiers, eSign, table extraction)
- ~~GA4 measurement ID~~ DONE — updated to G-PWD4YNY710
- ~~Sitemap~~ DONE — 1,130+ URLs including URL to PDF
- ~~Performance~~ DONE — Mobile LCP 1.8s, Desktop LCP 0.4s, CLS 0
- ~~Upgrade flow~~ DONE — existing subscribers upgrade instantly with proration
- ~~Database constraint~~ DONE — added "enterprise" to users_plan_check
- ~~All API timeouts~~ DONE — 26 routes at 300s for Enterprise large files
- ~~Workflow validation~~ DONE — inline warnings instead of "Workflow Failed"
- ~~Social proof~~ DONE — added to homepage

### Still needs Paula's verification:
- ~~Verify GA4 Realtime is recording data~~ DONE
- Test full payment flow end-to-end
- Test table extraction with a real PDF
- Verify NEXT_PUBLIC_SITE_URL=https://pdf.it.com on Vercel
- Verify Stripe webhook endpoint is https://pdf.it.com/api/webhook

### Priority 1: Remaining Tools
- ~~Resume ATS Optimizer~~ DONE — /ats-optimizer (Optimize Your Resume) + /create-resume (Create a Resume)
  - v1.1 upgrade: matched keywords, format risks, bullet rewrites, section rewrites, Word .docx output, cover letter generation
  - Standalone resume builder at /create-resume (no upload needed)
  - Uses /api/ats-optimizer (analysis) and /api/generate-resume (rewrite/build, Word output via docx npm package)

### Priority 2: Infrastructure Migration
Full plan in INFRASTRUCTURE.md.
Move from Vercel serverless → R2 storage → Redis/BullMQ queue → Worker processors (Fly.io).
Processing libraries: Ghostscript, PDFium, Poppler, OpenCV, Tesseract.
Not urgent yet — current system works but won't scale past ~100 concurrent users.

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
- See LOCALIZATION.md

## Rules - Always Follow
- Never break already indexed pages
- Use iLoveAPI for PDF processing (except pdf-to-word/excel/powerpoint which use CloudConvert)
- Table extraction uses Google Document AI Form Parser
- **All API routes that call paid APIs (iLoveAPI, CloudConvert) must check for blank PDFs using `lib/blank-pdf-check.js` before making the call**
- **Never use "Processing Failed" as an error heading — use specific headings: "Unsupported File Type", "File Too Large", "Empty File"**
- **Minimum password length is 8 characters** (enforced on signup and reset password pages)
- **Always use `pnpm install` / `pnpm add`, NEVER `npm install`** — npm breaks pnpm-lock.yaml and silently prevents Vercel deploys
- See LOCALIZATION.md
- **Every tool page must follow the format in Page_Format.md — read it before creating or editing any tool page**
- **Every change must be applied to all 3 languages (EN, ES, BR) simultaneously — no exceptions**
- Enterprise users must have access to ALL Business features — check for both "business" AND "enterprise" in tier gates
- **Never use orange Tailwind classes (orange-50 through orange-700)** — all were migrated to teal (#14D8C4) brand colors on April 6, 2026. Zero orange remaining in codebase.
- **All 149 tool pages now use canonical Page_Format.md layout** — rewritten April 6-7, 2026. Only ~243 learn articles + 3 blog posts still have old layout.
- **BR pages must have canonical in alternates metadata** — `alternates: { canonical: "https://pdf.it.com/br/...", languages: {...} }` (14 were missing, fixed April 7)
- **Newsletter signup** on blog pages saves to Supabase `newsletter_subscribers` table — requires table creation in Supabase
- Paula is non-technical — explain things simply

## Deployment Process
- After every fix or change, remind Paula to run:
  git add .
  git commit -m "describe what was changed"
  git push
- After git push, Vercel deploys automatically
- Always give Paula the exact commit message to use
- Never assume she knows when to deploy — always tell her explicitly
