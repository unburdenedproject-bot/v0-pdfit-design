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
- URL to PDF: Puppeteer + @sparticuz/chromium-min (headless Chrome, no API cost)
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
- URL to PDF: $0 (Puppeteer runs on Vercel serverless, no external API)
- Vercel Pro: $20/month base + bandwidth overage at $0.15/GB after 1TB
- At 10K subscribers: ~$2,500-4,300/month costs vs ~$157,900/month revenue (97% margin)

---

## ACCOMPLISHED (What's Done)

### Core Tools (All Working)
- /merge-pdf, /split-pdf, /rotate-pdf
- /compress-pdf, /compress-pdf-to-5mb, /compress-pdf-to-2mb, /compress-pdf-for-email
- /protect-pdf, /unlock-pdf, /watermark-pdf (Pro)
- /pdf-to-jpg, /pdf-to-png, /pdf-to-txt
- /jpg-to-pdf, /png-to-pdf
- /word-to-pdf, /excel-to-pdf, /powerpoint-to-pdf, /office-to-pdf
- /pdf-to-word (Pro, CloudConvert), /pdf-to-excel (Pro, CloudConvert), /pdf-to-powerpoint (Pro, CloudConvert)
- /ocr-scanner (Pro), /qr-code (Pro)
- /url-to-pdf (Pro — Puppeteer headless Chrome, renders full multi-page content, no iLoveAPI credits)
- /extract-images-from-pdf, /flatten-pdf
- /upload-ready-pdf (Blue Ocean #1 — chains flatten + compress)
- /phone-scan-cleanup (Blue Ocean #2 — Sharp image processing, free with limits)

### Business & Enterprise Tools (All Working)
- /workflow-automation — chain tools (flatten, compress, watermark, rotate, protect), 4 preset workflows for Business + 5 Enterprise-only templates (Legal Doc Prep, Court Filing, Invoice Archive, Draft Review, Lab Report)
- /table-extraction — Google Document AI Form Parser → ExcelJS, Business: 200 pages/month, Enterprise: 2,000 pages/month, monthly tracking via usage_logs table
- /pdf-compare — client-side text diff, side-by-side/overlay/differences views
- /esign — canvas-based signature placement (draw, type, upload)
- /pdf-redaction — canvas-based area selection, flattened image replacement

### Enterprise Tier (COMPLETE)
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

### Infrastructure Done
- hCaptcha integration (signup + login pages)
- Batch processing (Pro/Business/Enterprise: multi-file select, per-file progress, Download All as ZIP; Free: single file + upgrade banner)
- Pricing page: 4 tiers (Free / Pro $7.99 / Business $13.99 / Enterprise $49.99) with comparison table
- Rate limiting: 100 req/min per IP via Upstash Redis middleware
- Usage logging: daily counts in usage table, monthly page tracking in usage_logs for table extraction

### Spanish Layer (COMPLETE)
- Spanish homepage (/es) with full tool grid and correct /es/ routes
- Spanish header (header-es.tsx) and footer (footer-es.tsx)
- Dynamic language switcher: flag links navigate to equivalent page in other language (lib/route-map.ts)
- Spain flag for Spanish, US flag for English
- Spanish auth pages: /es/login, /es/registro, /es/registro/exito, /es/registro-requerido, /es/auth/confirmar, /es/auth/error
- Spanish legal pages: /es/politica-de-privacidad, /es/terminos-y-condiciones
- Spanish dashboard: /es/dashboard (dashboard-client-es.tsx)
- Spanish static pages: /es/acerca, /es/contacto, /es/precios, /es/herramientas
- Spanish core tool pages: ALL tool pages from the homepage have Spanish equivalents
- Spanish Business tool pages: /es/automatizacion, /es/comparar-pdf, /es/firma-electronica, /es/redaccion-pdf, /es/extraccion-de-tablas
- Spanish SEO cluster pages: 48 pages across 7 clusters (compression, merge, split, extract, security, edit, conversion)
- Spanish /es/aprender/ articles: 81 articles across 16 categories (mirrors English /learn/)
- Route map (lib/route-map.ts): 111 trilingual EN↔ES↔BR route triplets
- Sitemaps submitted to Google Search Console — 200 pages discovered

### Brazilian Layer (COMPLETE)
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

### Signup & Auth Fixes Done
- First name required on signup (validation + stored in Supabase user_metadata)
- Stripe webhook no longer overwrites user names (changed upsert → update)
- Suspense boundary fix for useSearchParams() in auth/confirm pages
- All PDF.it branding removed, replaced with OmnisPDF

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

### Error Handling & Locale-Aware Routing (COMPLETE)
- processing-interface.tsx: All 11 tool branches now handle upgrade_required (redirects to /pricing)
- processing-interface.tsx: All redirects (pricing, signup-required, dashboard) are locale-aware — ES users stay on /es/, BR users stay on /br/
- phone-scan-cleanup-interface.tsx: Fixed signup_required redirect (was /pricing, now /signup-required)
- image-to-pdf-interface.tsx: Same fix
- watermark-pdf-interface.tsx: Pricing links are locale-aware
- Fallback upgrade UI with Crown icon added to processing-interface error render
- Fixed hardcoded English links in /es/codigo-qr, /br/codigo-qr, /es/precios pages

### Accessibility Fixes (COMPLETE)
- PRO badge contrast: text darkened from #B45309 to #92400E (5.5:1 ratio) — 5 files
- Footer logo "PDF" contrast: #F97316 → #FB923C on dark bg (5.7:1 ratio) — 3 footers
- Header logo "PDF" contrast: #F97316 → #EA580C on white bg (4.6:1 ratio) — 3 headers
- Social media icons: aria-label added to all 12 icons across 3 footers (EN/ES/BR)
- Footer small text: text-slate-500 → text-slate-400 on dark bg — 3 footers
- Orange button contrast: Tailwind config updated — orange-500 now #EA580C (4.6:1 on white, passes WCAG AA)
- Hardcoded #F97316 buttons updated in signup-required, registro-requerido, cadastro-necessario, pro pages

### Branding & Logo (COMPLETE)
- Professional logo SVG integrated site-wide (public/logo.svg — viewBox cropped to 75 230 680 140)
- Swirl icon for footers and small contexts (public/icon.svg)
- Favicon: app/favicon.ico
- Apple touch icon: app/apple-icon.png
- OG/Twitter social sharing image: public/og-logo.png (1200x630)
- Headers (all 3 languages): use `<img src="/logo.svg">` — h-8 w-auto
- Footers (all 3 languages): use icon.svg + styled "OmnisPDF" text on dark bg
- Login pages (EN/ES/BR): use logo.svg centered above form
- Signup pages (EN/ES/BR): use logo.svg centered above form
- app/layout.tsx: full metadata with favicon, apple-icon, OG image, Twitter card

### Analytics (COMPLETE)
- Google Tag Manager (GTM-T7LDGB3J) loads via next/script with afterInteractive strategy
- GA4 (G-DQRW3BJMX1) loads directly alongside GTM for redundancy
- google-analytics.tsx is a "use client" component for proper Next.js App Router hydration
- GTM noscript fallback in body

### Usage Logging Fixes (COMPLETE)
- Fixed broken logging in excel-to-pdf, office-to-pdf, powerpoint-to-pdf routes (undefined `usage` variable)
- All Pro/Business routes now properly import and call logUsage with user.id

### Google Search Console Status
- Sitemap with 588+ pages across EN/ES/BR — submitted 2026-03-12
- DO NOT break any existing indexed pages
- English, Spanish, and Brazilian pages all included in sitemap

---

## TODO — By Priority

### Priority 0: Pre-Launch Fixes
- ~~Contact form~~ DONE — saves to Supabase contact_messages table
- ~~Stripe portal fallback domain~~ DONE — changed from pdfit.io to omnispdf.com
- ~~ILOVEAPI_SECRET_KEY~~ DONE — confirmed on Vercel
- ~~robots.txt~~ DONE — app/robots.ts already existed
- ~~FAQ section~~ DONE — updated with current product info (all 4 tiers, eSign, table extraction)
- ~~GA4 measurement ID~~ DONE — updated to G-DQRW3BJMX1
- Verify GA4 is actually recording data in Realtime report
- Test full payment flow: signup → upgrade → manage subscription → cancel (all 3 paid tiers)
- Test table extraction end-to-end with a real PDF
- Test URL to PDF end-to-end

### Priority 1: Remaining Tools
- Resume ATS Optimizer (OpenAI API, Blue Ocean)

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

## Architecture Notes
- Spanish homepage (app/es/page.tsx) has its OWN inline categories array — does NOT use FeaturesGridEs component
- Brazilian homepage (app/br/page.tsx) has its OWN inline categories array — does NOT use FeaturesGridBr component
- FeaturesGridEs is only used by /es/herramientas (All Tools page)
- FeaturesGridBr is only used by /br/ferramentas (All Tools page)
- When adding tools, update app/es/page.tsx, app/br/page.tsx, components/features-grid-es.tsx, AND components/features-grid-br.tsx
- Route map for language switcher: lib/route-map.ts (must be updated when adding new pages — trilingual [EN, ES, BR] tuples)
- All Spanish tool hrefs must use /es/ prefix with translated slugs
- All Brazilian tool hrefs must use /br/ prefix with Portuguese slugs
- Components: header-br.tsx, footer-br.tsx, features-grid-br.tsx, dashboard-client-br.tsx
- Table extraction uses REST API to Document AI (not gRPC) to avoid private key format issues on Vercel
- Enterprise workflow templates are gated by userPlan in workflow-interface.tsx (enterpriseOnly flag)

## Rules - Always Follow
- Never break already indexed pages
- Use iLoveAPI for PDF processing (except pdf-to-word/excel/powerpoint which use CloudConvert)
- Table extraction uses Google Document AI Form Parser
- Target USA, LATAM, and Brazil markets
- When adding new pages, always add to ALL THREE layers: English, Spanish, and Brazilian Portuguese
- Brazilian pages use /br/ prefix (NOT /pt/) — targeting Brazil specifically
- When adding new pages, update lib/route-map.ts for the language switcher
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

## Google Cloud Credentials
- Service Account: omnispdf-docai@project-5fe73bdf-4333-442f-840.iam.gserviceaccount.com
- Project ID: project-5fe73bdf-4333-442f-840
- Processor ID: 41cccb5fc88aa541 (Form Parser)
- Location: us
- JSON key stored in: C:\Users\paula\Dropbox\Paula\V. A. M. Outfitters, LLC\OmnisPDF\Credentials_Google Cloud
