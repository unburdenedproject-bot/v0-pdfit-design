# PDF.it — Execution Roadmap

## Week 1 (Days 1–7): Infrastructure + Performance

Goal: Prepare system for heavy processing.

### Daily Plan
- Day 1: Set up R2 storage
- Day 2: Implement file upload pipeline (upload → storage → job queue)
- Day 3: Install Redis queue system
- Day 4: Create worker server (Fly.io)
- Day 5: Move heavy processing off Vercel (OCR, compression, image cleanup, table extraction)
- Day 6: Create job status tracking (queued → processing → completed)
- Day 7: Performance optimization (file caching, file size limits, parallel workers)

## Week 2 (Days 8–14): SEO Traffic Engine

**Status: DONE** — ~85 SEO cluster pages + ~82 /learn/ articles built and deployed.

All 6 SEO clusters complete (Compression, Conversion, Editing, Organization, Security, Extraction).
All 16 long-tail article categories complete (PDF to JPG/PNG/TXT, Word/Excel/PPT/Office to PDF, Merge, Split, Rotate, Protect, Unlock, Watermark, Compress, OCR, QR Code).

Each page includes:
- Structured metadata (title, description, keywords)
- FAQPage + HowTo JSON-LD schemas
- Internal linking between tools and articles
- FAQ sections

## Week 3 (Days 15–21): Blue Ocean Tool #1 — Upload-Ready PDF Optimizer

**Status: DONE** (/upload-ready-pdf)

Problem solved: file too large, wrong DPI, wrong page size, upload rejected

Pipeline: analyze PDF → compress → normalize page size → fix DPI → flatten forms

Libraries: Ghostscript, PDFium

## Week 4 (Days 22–30): Blue Ocean Tool #2 — Phone Scan Cleanup

Pipeline: detect edges → deskew → remove shadows → increase contrast → compress → OCR

Libraries: OpenCV, Tesseract (Optional: Google Vision API)

Strong demand in: LATAM small businesses, freelancers, students

## Week 5 (Days 31–37): Batch Processing System

**Status: DONE** (basic infrastructure built)

Features implemented:
- Multi-file upload (Pro/Business only)
- Per-file progress tracking
- Download All as ZIP
- Free users see upgrade banner

## Week 6 (Days 38–45): Monetization + High-Value Tools

### Tool #3 — Table Extraction
- APIs: Google Document AI, AWS Textract
- Outputs: Excel, CSV, JSON

### Tool #4 — Resume ATS Optimizer
- Checks: ATS readability, keyword match, file size, format compatibility
- API: OpenAI

### Tool #5 — PDF Compare
- Libraries: diff-pdf, PDFium, Poppler

## Quality & Testing (Ongoing)

**Status: DONE** — 180 E2E + 41 integration + 6 unit = 227 total tests

- Playwright test suite covering: smoke, tools, auth, payments, SEO, i18n, accessibility, security, mobile, content
- Automated WCAG AA accessibility audits on 6 key pages
- Tier gating verified for Pro (url-to-pdf), Business (esign, table-extraction), and Enterprise tools
- Multi-specialist audit process (8 agents, 2 waves) for test quality verification
- Reusable `/audit` command created for future convergence audits on any repo

## Backend Hardening (April 7, 2026)

**Status: DONE** — 27 of 28 audit items fixed (score: 4.5/10 → 8/10)

- Security: blob auth, CSRF, SSRF, error sanitization, cron auth
- Database: indexes, idempotency, atomic counting, audit trail, foreign keys
- Reliability: webhook retries, blob cleanup, API retry utility, rate limiting
- Performance: streaming (memory 2.5GB → 50MB), image optimization
- Code quality: 100% TypeScript, shared utilities, component decomposition
- Remaining: #26 async job queue (1-week infrastructure migration, post-launch)

## The Only Rule
Every day ship one thing:
- 1 SEO page, OR
- 1 tool improvement, OR
- 1 automation feature

Never end the day without shipping something.
