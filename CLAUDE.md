# OmnisPDF - Project Memory

## What This Project Is
OmnisPDF (omnispdf.com) is a PDF tools SaaS competing with SmallPDF.
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
- Analytics: Google Tag Manager (GTM-T7LDGB3J) + GA4 direct (G-DQRW3BJMX1)
- Database: Supabase (users, usage tracking)
- Rate Limiting: Upstash Redis

## Pricing Tiers
- Free: 10 conversions/day (3 anonymous, then must log in), files up to 25MB, basic PDF tools, single file, standard processing
- Pro ($7.99/month, $79.90/year): Unlimited conversions, files up to 200MB, all PDF tools (OCR, QR, PDF to Word/Excel/PPT), batch processing, priority speed
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
- ~~Stripe portal fallback domain~~ DONE — changed from pdfit.io to omnispdf.com
- ~~ILOVEAPI_SECRET_KEY~~ DONE — confirmed on Vercel
- ~~robots.txt~~ DONE — app/robots.ts already existed
- ~~FAQ section~~ DONE — updated with current product info (all 4 tiers, eSign, table extraction)
- ~~GA4 measurement ID~~ DONE — updated to G-DQRW3BJMX1
- ~~Sitemap~~ DONE — 1,130+ URLs including URL to PDF
- ~~Performance~~ DONE — Mobile LCP 1.8s, Desktop LCP 0.4s, CLS 0
- ~~Upgrade flow~~ DONE — existing subscribers upgrade instantly with proration
- ~~Database constraint~~ DONE — added "enterprise" to users_plan_check
- ~~All API timeouts~~ DONE — 26 routes at 300s for Enterprise large files
- ~~Workflow validation~~ DONE — inline warnings instead of "Workflow Failed"
- ~~Social proof~~ DONE — added to homepage

### Still needs Paula's verification:
- Verify GA4 Realtime is recording data
- Test full payment flow end-to-end
- Test table extraction with a real PDF
- Verify NEXT_PUBLIC_SITE_URL=https://omnispdf.com on Vercel
- Verify Stripe webhook endpoint is https://omnispdf.com/api/webhook

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

## Architecture Notes
- Table extraction uses REST API to Document AI (not gRPC) to avoid private key format issues on Vercel
- Enterprise workflow templates are gated by userPlan in workflow-interface.tsx (enterpriseOnly flag)
- Resume tools: /ats-optimizer (analyze+fix) and /create-resume (build from scratch) are separate pages with separate interfaces
- Resume output is Word .docx via docx npm package (not PDF) — editable by users
- /api/generate-resume handles both "rewrite" and "build" modes, optional cover letter as second page
- Homepage shows 2 resume tools: "Optimize Your Resume" → /ats-optimizer, "Create a Resume" → /create-resume
- eSign signatures are privacy-first and session-only: never persist reusable signature libraries server-side
- See LOCALIZATION.md

## Rules - Always Follow
- Never break already indexed pages
- Use iLoveAPI for PDF processing (except pdf-to-word/excel/powerpoint which use CloudConvert)
- Table extraction uses Google Document AI Form Parser
- See LOCALIZATION.md
- Enterprise users must have access to ALL Business features — check for both "business" AND "enterprise" in tier gates
- Paula is non-technical — explain things simply

## Deployment Process
- After every fix or change, remind Paula to run:
  git add .
  git commit -m "describe what was changed"
  git push
- After git push, Vercel deploys automatically
- Always give Paula the exact commit message to use
- Never assume she knows when to deploy — always tell her explicitly
