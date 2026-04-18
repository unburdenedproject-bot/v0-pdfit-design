# PDF.it — Post-Launch Roadmap

Last updated: April 19, 2026 (Sunday, pre-launch growth engine kickoff)
Status: Planning — do not build any of this before reaching 1,000 paid subscribers.

## Already Shipped Post-Launch (not part of the Phase 1–4 gates)

- **April 19, 2026 — Phase 2 Growth Engine kickoff.** 9 industry landing pages shipped (`/for/lawyers`, `/for/accountants`, `/for/hr-teams` × EN/ES/BR), 5 long-tail SEO articles shipped (`/learn/pdf-still-too-large-after-compression`, `/learn/protect-pdf-vs-watermark`, `/learn/why-qr-code-not-scanning`, `/learn/make-scanned-pdf-searchable`, `/learn/rotate-one-page-in-pdf`), "For"/"Para" navigation dropdown added to header (EN/ES/BR — desktop + mobile). Industry pages converted from EN templates by parallel general-purpose translator agents. All 14 new URLs added to `lib/route-map.ts` and `app/sitemap-data.ts`. Page count: 602 → 617.
- **April 15, 2026 (evening) — Solo builder priorities kickoff.** New SOLO-PRIORITIES.md doc. Kill switch infrastructure: `feature_flags` Supabase table + `lib/feature-flags.ts` + all 35 tool API routes wired with `isToolEnabled` check + SoftErrorCard auto-detects 503 "unavailable" messages. Paula can now disable any tool from Supabase with no redeploy. Observability helper `lib/analytics.ts` shipped and instrumented in 3 interfaces (covers 28 tools). `/weekly-review` Claude Code slash command created. SEO cron false-positive fix (hreflang case sensitivity). See COMPLETED.md for details.
- **April 16, 2026 — Newsletter automation shipped.** 5-email drip (welcome, day 3, 7, 14, 30) with branded HTML templates. Daily cron sends next eligible email per subscriber. Welcome fires instantly on signup. Style: LinkSplasher aesthetic (gradient header, clean body, pill CTA).
- **April 16, 2026 — Dashboard growth asset shipped.** Time-saved stat, favorite tool, AI discovery banner for paid users (EN/ES/BR). Cancel survey live end-to-end (Supabase table + webhook capture + Stripe portal configured).
- **April 16, 2026 — 4 scheduled remote triggers.** Daily health check (8am PT), weekly review reminder (Mon 9am), monthly churn query (1st of month), Stripe CLI re-auth (July 10).
- **April 17, 2026 — Phase 1 launch prep complete.** Unsubscribe page + API (CAN-SPAM), homepage newsletter signup (EN/ES/BR), broadcast campaign mechanism. Introductory pricing (Year 1 vs Year 2+) added to all 3 pricing pages. Stripe Year 2 reminder scheduled March 31, 2027.
- **April 17, 2026 — 7 Supabase auth email templates redesigned.** LinkSplasher-style branded HTML (gradient header, pill CTA, minimal footer). Subject format: `PDF.it™ ◆ [Action]`.
- **April 17, 2026 — Spanish grammar sweep.** ~100+ missing accents fixed across all ES components, pages, tool interfaces, /learn/ articles, and brand guide. ñ, á/é/í/ó/ú, interrogatives, language names, professional terms.
- **April 17, 2026 — Brand guide PDF regenerated** with correct Spanish, updated pricing (Year 1 + Year 2+ tables), ™ branding.
- **April 16, 2026 — Brand: ™ added to PDF.it everywhere.** Footers updated © 2025 PDF.it™ (EN/ES/BR).
- **April 16, 2026 — Upstash rate limiter recreated + reconnected.** Middleware accepts both KV_ and UPSTASH_ env vars. Supabase RLS hardened. Kill switch activated (37 flags). All 16 tools instrumented for GA4. CI fixed. Cost alerts on all services.
- **April 15, 2026 — No-red audit sweep (38 files).** Brand rule expanded: red is no longer used for any user-facing message (errors, warnings, tips, validation). New shared component `components/processing/soft-error-card.tsx` plus an `isUserInputError` guard rolled into 13 tool interfaces. Auth pages (EN/ES/BR), contact forms (EN/ES/BR), dashboard billing errors, newsletter, and every inline error banner now use the premium soft card. Red is reserved for genuine backend failures only. Documented in BRAND.md > Error & Info Messages and CLAUDE.md.
- **April 15, 2026 — Header redesign:** removed About/Contact links from nav (moved to footer only), added compact tool search in all 3 locales that routes to the tools page with `?q=`. EN `/tools` filters by the query; ES/BR lands on tools page (filtering gap on those locales — follow-up only if requested).
- **April 15, 2026 — About CTA:** added "Compare all plans →" teal button on `/about`, `/es/acerca`, `/br/sobre` below the plan preview cards.
- **April 15, 2026 — Upload size-limit labels:** every dropzone now shows plan-aware max file size. Added to 4 tools (esign, pdf-compare, workflow, phone-scan-cleanup) that didn't have it.
- **April 15, 2026 — Specific error headings:** "File Too Large" / "Unsupported File Type" / "Empty File" now fires correctly across every tool (validator messages prepended with "File too large" so the matcher picks them up). No more generic "Protection Failed" / "Processing Failed" for user-input issues.
- **April 15, 2026 — Pdf-summarizer + question-generator premium cards.** Summarizer shows "We couldn't read this PDF" soft card for blank/image-only PDFs (EN/ES/BR). Question-generator's OpenAI call now forces JSON response and returns 422 with the soft card for unreadable PDFs (replaces "AI returned invalid format" red banner).
- **April 15, 2026 — Question-generator prominent download bar** (TXT + PDF promoted from tiny header links to filled-teal primary + outlined secondary in a bottom action bar).
- **April 15, 2026 — Footer: X (Twitter) removed** in all 3 locales (no X account yet).
- **April 14, 2026 — AI tools migrated to OpenAI Files API** (`question-generator`, `ats-optimizer`, `smart-extraction`, `chat-with-pdf`, `translate-pdf`). Previous text-extraction chain was failing on Vercel for real user resumes and PDFs with custom fonts. See COMPLETED.md for the full changelog.
- **April 14, 2026 — Table-extraction upgraded to Layout Parser** (was Form Parser — accuracy now correct on borderless/merged-cell tables).
- **April 14, 2026 — Smart-extraction multi-format downloads** (Excel, CSV, JSON — Excel is the new primary).
- **April 14, 2026 — Premium error cards** on ats-optimizer, translate-pdf, chat-with-pdf for blank/unreadable PDFs (replaces red system-error banners).
- **April 14, 2026 — Contact form fail-soft rate limiter** (Upstash outage no longer blocks submissions).

---

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

### 1A. Deferred Code Fixes

These were intentionally skipped pre-launch. Fix in this order:

- **Batch server-side guard** — free users can bypass the UI and call `/api/merge-pdf` directly with multiple files. Add a file-count check inside the route.
- **File size re-validation in processing routes** — all 26 routes trust the blobUrl without re-checking size. Add a size check after blob fetch.
- **Apply `lib/retry.ts` to AI routes** — all 6 AI routes currently have no retry on OpenAI failures. If OpenAI has a 10-minute outage, every AI tool returns 5xx. Wrap each OpenAI call in the retry helper.
- **Per-plan AI quota** — paid-tier AI routes (ats-optimizer, chat-with-pdf, pdf-summarizer, translate-pdf, smart-extraction, question-generator, generate-resume) have auth check but no `checkUsageAndAuth` quota. Paid users have unmetered usage. Cost risk, not reliability.
- **Paid users logging unnecessary DB writes** — `logUsage` fires for paid users even though it's never checked. Minor cleanup, low priority.

### 1B. New Language — Indonesian 🇮🇩

**Why Indonesian first:**
- 270 million people, fast-growing digital economy
- Asia-Pacific is the fastest-growing PDF software region globally
- iLovePDF/Smallpdf have Indonesian UI translations but almost zero native SEO content depth
- Mobile-first user base — aligns with PDF.it's browser-based approach
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
- Pro annual: $39.90/year (saves ~$16 vs monthly)
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

- Developers can call PDF.it tools programmatically
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
