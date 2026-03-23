# OmnisPDF — Post-Launch Roadmap

Last updated: March 23, 2026
Status: Planning — do not build any of this before reaching 1,000 paid subscribers.

---

## Milestone Gates

| Gate | Trigger | Unlock |
|------|---------|--------|
| Phase 1 | 1,000 paid subscribers | New languages + deferred bugs |
| Phase 2 | 3,000 paid subscribers | New high-value tools |
| Phase 3 | 5,000 paid subscribers | Infrastructure migration |
| Phase 4 | 10,000 paid subscribers | Team plans + API access tier |

---

## Phase 1 — After 1,000 Paid Subscribers

### 1A. Deferred Code Fixes (from March 23 audit)

These were intentionally skipped pre-launch. Fix in this order:

- **Batch server-side guard** — free users can bypass the UI and call /api/merge-pdf directly with multiple files. Add a file count check inside the route.
- **File size re-validation in processing routes** — all 26 routes trust the blobUrl without re-checking size. Add a size check after blob fetch.
- **Enterprise dashboard badge color** — dashboard-client.tsx, dashboard-client-es.tsx, dashboard-client-br.tsx line 296. Enterprise shows orange (Pro color) instead of amber/gold. Fix all 3 files.
- **Paid users logging unnecessary DB writes** — logUsage fires for paid users even though it's never checked. Minor cleanup, low priority.

### 1B. New Language — Indonesian 🇮🇩

**Why Indonesian first:**
- 270 million people, fast-growing digital economy
- Asia-Pacific is the fastest-growing PDF software region globally
- iLovePDF/Smallpdf have Indonesian UI translations but almost zero native SEO content depth
- Mobile-first user base — aligns with OmnisPDF's browser-based approach
- Stripe supports Indonesia (IDR)

**What to build:**
- `/id/` URL prefix (e.g., `/id/kompres-pdf`, `/id/gabung-pdf`)
- header-id.tsx + footer-id.tsx
- dashboard-client-id.tsx
- Auth pages: /id/login, /id/daftar, /id/daftar/sukses
- Legal pages: /id/kebijakan-privasi, /id/syarat-dan-ketentuan
- All core tool pages translated natively (not machine-translated — use a native speaker)
- 81 /id/pelajari/ articles mirroring the EN /learn/ structure
- Add ID to lib/route-map.ts as 4th language
- Update sitemap.xml

**Key translation notes:**
- "Kompres PDF" = Compress PDF
- "Gabung PDF" = Merge PDF
- "Pisah PDF" = Split PDF
- "Konversi" = Convert
- Use a native Indonesian freelancer for copy — machine translation will hurt SEO

### 1C. New Language — Turkish 🇹🇷

**Why Turkish second:**
- 85 million people, growing SME digitization
- Strong demand in legal, finance, and education sectors
- Low competition for localized PDF tool SEO content
- Stripe supports Turkey (TRY)

**What to build:**
- `/tr/` URL prefix (e.g., `/tr/pdf-sikistir`, `/tr/pdf-birlestir`)
- Same structure as Indonesian layer above
- 81 /tr/ogren/ articles
- Native Turkish copy — do not use machine translation

**Key translation notes:**
- "PDF Sıkıştır" = Compress PDF
- "PDF Birleştir" = Merge PDF
- "PDF Böl" = Split PDF

---

## Phase 2 — After 3,000 Paid Subscribers

### 2A. New Tools

**Annotate PDF** (Business tier)
- Already on post-launch roadmap in CLAUDE.md
- Tech: PDF.js + SVG overlay + pdf-lib
- Users can highlight, underline, add comments, draw on PDFs
- Gate: Business + Enterprise only

**eSign** (Business tier)
- Already planned — blocked on legal confirmation
- Action required: confirm legal validity of eSign in USA, LATAM, and Indonesia before building
- Do NOT build until legal check is complete (see CLAUDE.md)
- Tech: session-only signature, no server-side storage of reusable signatures

**PDF to HTML**
- Converts PDF pages to clean HTML output
- Useful for developers and content teams
- ilovepdf task type: check docs before building
- Gate: Pro tier

**PDF to CSV**
- Extracts tables directly to CSV (vs Excel in table extraction)
- Lightweight alternative to full table extraction for simple data
- Gate: Pro tier

**PDF to JSON**
- For developers who need structured data from PDFs
- Pairs well with API access tier (Phase 4)
- Gate: Business + Enterprise

### 2B. SEO Expansion — Missing Cluster Pages

From SEO-MAP.md, these pages are still unbuilt (~35 pages remaining):

**Cluster 3 — Document Editing (11 pages remaining):**
- /edit-pdf, /add-text-to-pdf, /annotate-pdf, /highlight-pdf, /draw-on-pdf
- /add-page-to-pdf, /remove-pages-from-pdf, /resize-pdf-pages, /crop-pdf
- /split-pdf-by-pages, /split-pdf-by-size

**Cluster 6 — Data Extraction (7 pages remaining):**
- /extract-text-from-pdf, /extract-fonts-from-pdf, /extract-links-from-pdf
- /pdf-table-to-excel, /pdf-table-to-csv, /extract-data-from-pdf
- /scan-pdf-to-text

**Cluster 2 — Conversion (4 pages remaining):**
- /pdf-to-html, /pdf-to-json, /pdf-to-csv
- /pdf-to-google-docs (complex — requires Google Drive API)

### 2C. Annual Pricing Discount

- Already in CLAUDE.md as post-launch item
- Pro annual: $79.90/year (saves ~$16 vs monthly)
- Business annual: $139.90/year
- Enterprise annual: $499.90/year
- Increases LTV significantly — priority to build after hitting 3K subscribers

---

## Phase 3 — After 5,000 Paid Subscribers

### 3A. Infrastructure Migration

Full plan in INFRASTRUCTURE.md. Summary:

Current system works but won't scale past ~100 concurrent users.

Migration order:
1. Set up Cloudflare R2 (replace Vercel Blob)
2. Add Redis + BullMQ job queue
3. Build worker processors on Fly.io
4. Move heavy tools off Vercel first: OCR, table extraction, compression
5. Migrate remaining tools one by one
6. Implement priority queue for Enterprise (currently marketed but not built)

### 3B. Affiliate / Referral Program

- Accelerates subscriber growth without paid ads
- Users get 1 free month for each referral who upgrades to Pro
- Track via unique referral codes in Supabase
- Build only after conversion funnel is proven

---

## Phase 4 — After 10,000 Paid Subscribers

### 4A. API Access Tier

- Developers can call OmnisPDF tools programmatically
- Priced per conversion or as a monthly credit bundle
- Pairs with PDF to JSON and batch processing
- Requires infrastructure migration to be complete first

### 4B. Team Plans

- Multiple users under one billing account
- Admin can manage seats, usage, and permissions
- Target: law firms, accounting teams, agencies
- Requires Supabase schema changes (teams table, team_members table)

### 4C. Third Language Candidates (research before deciding)

After Indonesian and Turkish are live, evaluate:

| Language | Country | Population | Notes |
|----------|---------|------------|-------|
| French | France + Africa | 300M+ speakers | iLovePDF has FR UI — need deep SEO content to win |
| German | Germany/Austria/CH | 100M speakers | High-value B2B market, strong document culture |
| Vietnamese | Vietnam | 97M | Fast-growing, very low PDF tool SEO competition |
| Arabic | MENA region | 400M+ speakers | RTL layout required — significant extra build work |
| Hindi | India | 600M+ speakers | Enormous market but very price-sensitive |

**Recommendation:** French or Vietnamese next after TR and ID.
- French: large market, strong B2B, SEO content gap exists despite UI translations
- Vietnamese: very low competition, fast-growing digital economy, no major player has deep VI content

---

## Known Technical Debt (fix when time allows)

| Item | File | Notes |
|------|------|-------|
| Priority queue for Enterprise | All 27 processing routes | Marketed feature, not implemented. Needs infrastructure migration first. |
| Batch server-side guard | All API routes | Free users can bypass via direct API call |
| File size re-check in processors | All 26 blobUrl routes | Upload enforces it; processors trust the blob |
| Paid user logUsage writes | lib/usage-check.ts | Harmless but unnecessary DB writes for paid users |

---

## The Rule

Do not build anything in this document until the launch is stable and you have 1,000 paid subscribers.
Growth first. Complexity second.
