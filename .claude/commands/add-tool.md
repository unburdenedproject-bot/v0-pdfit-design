# Add New PDF Tool to PDF.it

Add a new tool to all three language layers (EN, ES, BR) and wire everything up correctly.

**Usage:** `/add-tool`

Claude will ask for the required info, then execute all steps.

---

## Step 0 — Gather Info

Ask the user for:
1. **Tool name** (English) — e.g. "Rotate PDF"
2. **EN slug** — e.g. `rotate-pdf`
3. **ES slug** — e.g. `rotar-pdf`
4. **BR slug** — e.g. `girar-pdf`
5. **ES tool name** — e.g. "Rotar PDF"
6. **BR tool name** — e.g. "Girar PDF"
7. **One-line description** (English) — e.g. "Rotate pages in any direction"
8. **Icon name** from lucide-react — e.g. `RotateCcw`
9. **Tier** — `free` or `pro` or `business` or `enterprise`
10. **API route** — e.g. `/api/rotate-pdf`
11. **Homepage category** — which category group it belongs to (e.g. "Convert", "Organize", "Optimize")

Do NOT proceed until all 11 items are confirmed.

---

## Step 1 — Read Required Docs

Read these files before writing any code:
- `Page_Format.md` — canonical tool page format (section order, exact styles, JSX snippets). MANDATORY.
- `BRAND.md` — voice, color system, design rules
- `LOCALIZATION.md` — route map rules, component references, trilingual build checklist

---

## Step 2 — Create the English Tool Page

Create `app/[en-slug]/page.tsx`.

Follow `Page_Format.md` exactly:
- `metadata` block with `title`, `description`, `keywords`
- If tool is paid: do NOT say "free" or "no login" in metadata
- Hero section: dark `#0E0F1E` with radial gradients + noise grain
- Processing Interface with `apiRoute` and optional `requiresPlan`
- Feature Blocks (3 glassmorphism cards)
- How It Works (3 horizontal steps)
- Related Tools (4 metallic cards)
- FAQ section (4-6 questions) with FAQPage JSON-LD schema
- Import `Header` and `Footer` from `@/components/`

---

## Step 3 — Create the Spanish Tool Page

Create `app/es/[es-slug]/page.tsx`.

Same structure as English. Write copy natively in Spanish — do NOT translate EN copy word for word. Adjust tone for LATAM market (professional, direct).

---

## Step 4 — Create the Brazilian Portuguese Tool Page

Create `app/br/[br-slug]/page.tsx`.

Same structure as English. Write copy natively in Brazilian Portuguese. Use BR-specific phrasing, not PT-PT.

---

## Step 5 — Create the API Route (if needed)

Create `app/api/[en-slug]/route.ts` if the tool needs a backend processing endpoint.

- Import and call `isBlankPdf` from `lib/blank-pdf-check.js` before any paid API call
- Import and call `checkUsageAndAuth` for rate limiting
- Use specific error headings ("Unsupported File Type", "File Too Large", "Empty File") — never "Processing Failed"
- Set `maxDuration = 300` for Enterprise large file support

---

## Step 6 — Update English Homepage

Edit `app/page.tsx` — find the `FeaturesGrid` component import. Then edit `components/features-grid.tsx`:

Add the new tool to the correct category group:
```ts
{
  name: "[Tool Name]",
  href: "/[en-slug]",
  icon: [IconName],
  description: "[one-line description]",
  tier: "[free|pro|business]",
}
```

---

## Step 7 — Update Spanish Homepage (BOTH locations)

**7a.** Edit `app/es/page.tsx` — find the **inline** categories array (this file does NOT use FeaturesGridEs). Add the tool with Spanish name/description.

**7b.** Edit `components/features-grid-es.tsx` — this is used by `/es/herramientas`. Add the same tool data.

Both must match.

---

## Step 8 — Update Brazilian Homepage (BOTH locations)

**8a.** Edit `app/br/page.tsx` — find the **inline** categories array (this file does NOT use FeaturesGridBr). Add the tool with Portuguese name/description.

**8b.** Edit `components/features-grid-br.tsx` — this is used by `/br/ferramentas`. Add the same tool data.

Both must match.

---

## Step 9 — Update Route Map

Edit `lib/route-map.ts`.

Add a trilingual tuple so the language switcher can route between the three pages:
```ts
["/[en-slug]", "/es/[es-slug]", "/br/[br-slug]"],
```

Find the correct alphabetical or categorical position in the file.

---

## Step 10 — Update Sitemap

Edit `app/sitemap.ts`.

Add all 3 URLs to the `allUrls` array:
```ts
{ url: "https://pdf.it.com/[en-slug]", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
{ url: "https://pdf.it.com/es/[es-slug]", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
{ url: "https://pdf.it.com/br/[br-slug]", lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
```

---

## Step 11 — Update Pricing Pages (if paid tool)

If the tool is Pro, Business, or Enterprise:

Add the tool name to the feature lists on all 3 pricing pages:
- `app/pricing/page.tsx` (or its `layout.tsx`)
- `app/es/precios/page.tsx` (or its `layout.tsx`)
- `app/br/precos/page.tsx` (or its `layout.tsx`)

Also add to the comparison table if one exists.

---

## Step 12 — Update Hero Banners (if applicable)

If the tool is a headline feature, add it to the AI tools banner in:
- `components/hero-section.tsx`
- `components/hero-section-es.tsx`
- `components/hero-section-br.tsx`

---

## Step 13 — Verification Checklist

Before finishing, confirm every item:

- [ ] `Page_Format.md` was read before creating pages
- [ ] `app/[en-slug]/page.tsx` created
- [ ] `app/es/[es-slug]/page.tsx` created
- [ ] `app/br/[br-slug]/page.tsx` created
- [ ] `app/api/[en-slug]/route.ts` created (if needed)
- [ ] `components/features-grid.tsx` — tool added (EN)
- [ ] `app/es/page.tsx` — tool added to inline categories array
- [ ] `components/features-grid-es.tsx` — tool added
- [ ] `app/br/page.tsx` — tool added to inline categories array
- [ ] `components/features-grid-br.tsx` — tool added
- [ ] `lib/route-map.ts` — trilingual tuple added
- [ ] `app/sitemap.ts` — 3 URLs added
- [ ] Pricing pages updated (if paid tool)
- [ ] All three slugs use correct prefixes (`/`, `/es/`, `/br/`)
- [ ] Icons imported correctly (no duplicates) across all files
- [ ] Tier gate consistent across all three pages
- [ ] Metadata does NOT say "free" for paid tools
- [ ] API route uses `isBlankPdf` check (if calling paid APIs)

---

## Step 14 — Commit and Deploy

Always end with the exact commands:

```
git add .
git commit -m "add [tool name] tool (EN/ES/BR)"
git push
```
