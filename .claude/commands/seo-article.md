# Write SEO Article for OmnisPDF

Write a complete `/learn/` article as a ready-to-save `page.tsx` file.

**Usage:** `/seo-article`

---

## Step 0 — Gather Info

Ask the user for:
1. **Topic / keyword** — e.g. "how to compress a PDF for email"
2. **EN slug** — e.g. `compress-pdf-for-email`
3. **Target tool** — the OmnisPDF tool the article funnels to, e.g. `/compress-pdf`
4. **Target tool name** — e.g. "Compress PDF"
5. **Icon name** from lucide-react — e.g. `FileDown`
6. **3–5 related articles** — slugs + titles for the Related Articles section
7. **Tier** — is the tool `free`, `pro`, or `business`? (used in inline CTA copy)

Do NOT proceed until all 7 items are confirmed.

---

## Step 1 — Read Brand Rules

Read `BRAND.md` before writing any copy. Apply:
- Voice: professional, simple, fast
- Colors: orange CTAs (`orange-500`/`orange-600`), dark navy hero (`from-slate-900 to-slate-800`)
- Audience: business teams, legal/accounting, students — USA, LATAM, Brazil
- Never use jargon; explain the benefit, not the technology

---

## Step 2 — Plan the Article

Before writing, outline:
- **H1** — exact keyword phrase, action-oriented
- **6 FAQ questions** — realistic questions a user would Google
- **3 HowTo steps** — map to the tool's actual workflow
- **Comparison table** — 3 rows (e.g. levels, methods, or formats being compared)
- **4 extra techniques** — related tips with internal links to other OmnisPDF tools
- **3 troubleshooting scenarios** — common problems with short answers

---

## Step 3 — Write the Complete page.tsx

Output a single, complete `page.tsx` file for `app/learn/[slug]/page.tsx`.

### File structure (in order):

**Imports**
```ts
import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { [Icon], ArrowRight } from "lucide-react"
```

**Metadata**
```ts
export const metadata = {
  title: "[H1 exact match] | OmnisPDF",
  description: "[1–2 sentences, keyword-rich, under 160 chars]",
  keywords: "[4–5 comma-separated keyword phrases]",
}
```

**FAQPage schema** — 6 Q&A pairs (must exactly match the FAQ section rendered below)

**HowTo schema** — 3 steps (must exactly match the How To section rendered below)

**Page component** with these 10 sections:

---

### Section 1 — Hero
- `bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16`
- Breadcrumb: `Learn / [Category]` in `text-orange-400`
- H1: `text-4xl lg:text-5xl font-black`
- Subtitle: 1 sentence, `text-xl text-slate-300`, addresses the user's pain point directly

### Section 2 — Inline CTA
- `bg-orange-50 border-b border-orange-100 py-8`
- Left: icon in orange square + short line ("Skip the guide — go straight to the tool")
- Right: orange button → tool URL
- Copy changes if tool is Pro/Business: "Available on Pro" badge

### Section 3 — What Is X
- H2: `text-2xl font-black text-slate-900`
- 2 paragraphs explaining the concept
- Numbered list (3–4 items) with bold term + explanation
- At least 1 internal link to a related tool using `text-orange-600 hover:underline`

### Section 4 — How To (Step by Step)
- H2 + intro sentence
- 3 numbered cards: `bg-gray-50 rounded-xl p-5 border border-gray-200`
- Orange circle number, bold step title, short description
- Rendered from inline array

### Section 5 — Comparison Table
- H2 + 1-sentence intro
- Table: `border border-gray-200 rounded-xl overflow-hidden`
- Header row: `bg-slate-900 text-white`
- 3 data rows, first column in `text-orange-600 font-semibold`
- Follow-up paragraph explaining the recommendation

### Section 6 — Extra Techniques
- H2 + intro sentence
- 4 checklist items using `&#10003;` prefix
- Each item has a bold technique name + explanation
- Each links to a relevant OmnisPDF tool with `text-orange-600 hover:underline`

### Section 7 — Troubleshooting
- H2 + intro sentence
- 3 sub-sections with H3 (`text-lg font-bold text-slate-900 mb-2`)
- Each H3 = a common problem; body = short fix with optional internal link

### Section 8 — Tool CTA
- `bg-gradient-to-br from-slate-900 to-slate-800 py-12`
- Centered: H2 white, subtitle `text-slate-300`, orange button with icon
- Copy: "Ready to [verb]? Upload your PDF — free, no signup required."
- If Pro/Business tool, adjust copy accordingly

### Section 9 — Related Articles
- `bg-gray-50 py-16`
- H2 + grid of 4 link cards
- Card: `bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40`
- Arrow icon on right, title on left, orange on hover

### Section 10 — FAQ
- `bg-white py-16`
- H2 centered
- 6 Q&A cards: `bg-gray-50 rounded-xl p-6 border border-gray-200`
- Bold question, `text-slate-600 text-sm` answer
- Rendered from inline array
- **Must exactly match the FAQPage schema at the top of the file**

---

## Step 4 — Quality Check

Before outputting, verify:
- [ ] Schema FAQ questions match rendered FAQ questions word-for-word
- [ ] HowTo steps match the How To section word-for-word
- [ ] All internal links use OmnisPDF paths (no external links)
- [ ] Orange is used only for CTAs, highlights, and links — not decorative
- [ ] H1 contains the exact target keyword
- [ ] Meta description is under 160 characters
- [ ] No jargon — every term is explained in plain language
- [ ] Tone is professional and direct, not chatty

---

## Step 5 — Output Instructions

Tell Paula:
1. Save the file to `app/learn/[slug]/page.tsx`
2. Add the article to the sitemap if it isn't auto-discovered
3. Run:
```
git add .
git commit -m "add /learn/[slug] SEO article"
git push
```
