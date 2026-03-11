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
- /phone-scan-cleanup (Blue Ocean #2 — Sharp image processing, free with limits)

### Infrastructure Done
- hCaptcha integration (signup + login pages)
- Batch processing (Pro/Business: multi-file select, per-file progress, Download All as ZIP; Free: single file + upgrade banner)
- Pricing page updated (Free / Pro $7.99 / Business $13.99)
- Business tools LIVE: /workflow-automation, /pdf-redaction, /esign
- Business tools LIVE: /pdf-compare
- Business tools Coming Soon: /table-extraction
- SEO cluster pages: all 6 clusters built (~100 pages)
- Long-tail /learn/ articles: ~82 articles built across 16 categories

### SEO Cluster Pages Done (All 6 Clusters — ~100 pages)
- Cluster 1 (Compression): 18 pages built
- Cluster 2 (Conversion): 20 pages built
- Cluster 3 (Document Editing): 6 pages built
- Cluster 4 (Organization): 11 pages built
- Cluster 5 (Security): 7 pages built
- Cluster 6 (Data Extraction): 9 pages built

### Long-Tail SEO Articles Done (~82 /learn/ articles)
- PDF to JPG (5), PDF to PNG (5), PDF to TXT (5)
- Word to PDF (5), Excel to PDF (5), PowerPoint to PDF (5)
- Office to PDF (5), Merge PDF (5), Split PDF (6)
- Rotate PDF (4), Protect PDF (4), Unlock PDF (4), Watermark PDF (5)
- Compress PDF (5), OCR PDF (6), QR Code (7)

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
- omnispdf.com/phone-scan-cleanup
- omnispdf.com/pdf-compare
- omnispdf.com/pricing, /about, /privacy-policy, /terms-conditions

---

## TODO — By Priority

### Priority 1: Spanish Layer
Duplicate all tool pages + long tail pages into Spanish for LATAM market.
The sooner Spanish is live, the sooner Google starts indexing.

### Priority 2: Remaining Tools
- Table Extraction to Excel — needs Google Document AI API (hardest, paid API, Business tier)
- Resume ATS Optimizer (OpenAI API, Blue Ocean)

### Priority 3: Infrastructure Migration
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
