# PDF.it - Accomplished Work

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

### Performance & Branding Fixes (March 29, 2026)
- **Google Fonts → next/font** — Switched from render-blocking `<link>` to self-hosted `next/font/google` (Inter + Sora); eliminated preconnect hints to fonts.googleapis.com
- **GTM deferred** — Changed from `afterInteractive` to `lazyOnload` strategy for better mobile performance
- **Package imports optimized** — Added `optimizePackageImports` for lucide-react and recharts
- **Page titles fixed** — Removed "fastest PDF tools on the planet" claims from all 3 layout files; replaced with brand positioning "Fix Any Document Problem Instantly" (EN/ES/BR); updated OpenGraph and Twitter card titles to match

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
- Pricing page: 4 tiers (Free / Pro $7.99 / Business $13.99 / Enterprise $49.99) with comparison table
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
