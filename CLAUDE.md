# OmnisPDF - Project Memory

## What This Project Is
OmnisPDF (omnispdf.com) is a PDF tools SaaS competing with SmallPDF.
Built with Next.js, deployed on Vercel, using iLoveAPI for PDF processing.
Owner: Paula Vargas (paula.vargas3@gmail.com)
Goal: 10,000 paid subscribers
Positioning: "Fix any document problem instantly" — not just "PDF tools"

## Tech Stack
- Frontend: Next.js (built in V0)
- Hosting: Vercel
- PDF Processing: iLoveAPI (except pdf-to-word, pdf-to-excel, pdf-to-powerpoint which use CloudConvert)
- Auth: Custom signup/login with hCaptcha
- Payments: Stripe
- Storage: Vercel Blob (migrating to Cloudflare R2)

## Pricing Tiers
- Free: 10 conversions/day (3 anonymous, then must log in), files up to 25MB, basic PDF tools, single file, standard processing
- Pro ($7.99/month): Unlimited conversions, files up to 200MB, all PDF tools, batch processing, advanced controls, priority support
- Business ($13.99/month): Everything in Pro + workflow automation, table extraction to Excel, PDF comparison, eSign, PDF redaction

## Packaging Strategy
- Free: Flatten PDF, basic Extract Images, single file, moderate size limits
- Paid: batch processing, larger files, faster queue, higher limits, bulk download/export options
- We can't give everything for free — free tools are funnels to Pro/Business

---

## ACCOMPLISHED (What's Done)

### Core Tools (All Working)
- /merge-pdf, /split-pdf, /rotate-pdf
- /compress-pdf, /compress-pdf-to-5mb, /compress-pdf-to-2mb, /compress-pdf-for-email
- /protect-pdf, /unlock-pdf, /watermark-pdf (Pro)
- /pdf-to-jpg, /pdf-to-png, /pdf-to-txt
- /word-to-pdf, /excel-to-pdf, /powerpoint-to-pdf, /office-to-pdf
- /pdf-to-word (Pro, CloudConvert), /pdf-to-excel (Pro, CloudConvert), /pdf-to-powerpoint (Pro, CloudConvert)
- /ocr-scanner (Pro), /qr-code (Pro)
- /extract-images-from-pdf, /flatten-pdf
- /upload-ready-pdf (Blue Ocean #1 — chains flatten + compress)

### Infrastructure Done
- hCaptcha integration (signup + login pages)
- Batch processing (Pro/Business: multi-file select, per-file progress, Download All as ZIP; Free: single file + upgrade banner)
- Pricing page updated (Free / Pro $7.99 / Business $13.99)
- Business tools LIVE: /workflow-automation, /pdf-redaction, /esign
- Business tools Coming Soon: /table-extraction, /pdf-compare

### SEO Pages Done
- /compress-pdf-to-5mb, /compress-pdf-to-2mb, /compress-pdf-for-email
- /extract-images-from-pdf, /flatten-pdf, /upload-ready-pdf

### Pages Already Indexed (DO NOT BREAK)
- omnispdf.com
- omnispdf.com/merge-pdf, /split-pdf, /rotate-pdf
- omnispdf.com/protect-pdf, /unlock-pdf, /watermark-pdf
- omnispdf.com/pdf-to-jpg, /pdf-to-png, /pdf-to-txt
- omnispdf.com/word-to-pdf, /excel-to-pdf, /powerpoint-to-pdf, /office-to-pdf
- omnispdf.com/ocr-scanner, /qr-code
- omnispdf.com/compress-pdf-to-5mb, /compress-pdf-to-2mb, /compress-pdf-for-email
- omnispdf.com/extract-images-from-pdf, /flatten-pdf, /upload-ready-pdf
- omnispdf.com/pdf-redaction
- omnispdf.com/pricing, /about, /privacy-policy, /terms-conditions

---

## TODO — By Priority

### Priority 1: Build Remaining Business Tools (2 left)
These justify the $13.99/month Business tier.
1. ~~Workflow Automation~~ — DONE, live at /workflow-automation
2. ~~PDF Redaction~~ — DONE, live at /pdf-redaction
3. ~~eSign Documents~~ — DONE, live at /esign
4. PDF Compare — render pages with pdf.js, compare visually (medium, no API needed)
5. Table Extraction to Excel — needs Google Document AI API (hardest, paid API)

### Priority 2: Long Tail SEO Pages (~80 /learn/ articles)
Full plan in LONG-TAIL-PAGES.md. Covers all 16 tool categories.
Build BEFORE Spanish layer so template is ready to duplicate.

### Priority 3: SEO Cluster Pages (~100 tool pages)
Full plan in SEO-MAP.md. 6 clusters: Compression, Conversion, Editing, Organization, Security, Extraction.
~22 of ~120 pages built so far.

### Priority 4: Spanish Layer
Duplicate all tool pages + long tail pages into Spanish for LATAM market.
The sooner Spanish is live, the sooner Google starts indexing.

### Priority 5: Blue Ocean Tools
- Phone Scan Cleanup (OpenCV + Tesseract) — huge in LATAM
- Resume ATS Optimizer (OpenAI API)

### Priority 6: Infrastructure Migration
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

## Rules - Always Follow
- Never break already indexed pages
- Use iLoveAPI for PDF processing (except pdf-to-word/excel/powerpoint which use CloudConvert)
- Target both USA and LATAM markets
- Keep Spanish SEO in mind for future
- Paula is non-technical — explain things simply

## Deployment Process
- After every fix or change, remind Paula to run:
  git add .
  git commit -m "describe what was changed"
  git push
- After git push, Vercel deploys automatically
- Always give Paula the exact commit message to use
- Never assume she knows when to deploy — always tell her explicitly
