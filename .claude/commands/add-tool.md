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
9. **Tier** — `free` or `pro` or `business`
10. **API route** — e.g. `/api/rotate-pdf`
11. **Homepage category** — which category group it belongs to (e.g. "Convert", "Organize", "Optimize")

Do NOT proceed until all 11 items are confirmed.

---

## Step 1 — Read Brand and Localization Rules

Read these two files before writing any code:
- `BRAND.md` — voice, color system, design rules
- `LOCALIZATION.md` — route map rules, component references, trilingual build checklist

---

## Step 2 — Create the English Tool Page

Create `app/[en-slug]/page.tsx`.

Follow the existing tool page pattern:
- `metadata` block with `title`, `description`, `keywords`
- Hero section: dark navy gradient (`from-slate-900 to-slate-800`), H1, subtitle
- Upload/action area (or placeholder pointing to API route)
- How It Works — 3 steps
- FAQ section (4–6 questions) with FAQPage schema
- Footer CTA with orange button
- Use `text-orange-500/600` for CTAs and highlights
- Import `Header` and `Footer` from `@/components/`
- Tier gate: if `pro` or `business`, wrap the tool UI with the appropriate plan check

---

## Step 3 — Create the Spanish Tool Page

Create `app/es/[es-slug]/page.tsx`.

Same structure as English. Write copy natively in Spanish — do NOT translate EN copy word for word. Adjust tone for LATAM market (professional, direct).

---

## Step 4 — Create the Brazilian Portuguese Tool Page

Create `app/br/[br-slug]/page.tsx`.

Same structure as English. Write copy natively in Brazilian Portuguese. Use BR-specific phrasing, not PT-PT.

---

## Step 5 — Update English Homepage Categories

Edit `app/page.tsx`.

Find the categories array and add the new tool to the correct category group:
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

## Step 6 — Update Spanish Homepage Categories

Edit `app/es/page.tsx`.

Find the **inline** categories array (this file does NOT use FeaturesGridEs — it has its own array). Add:
```ts
{
  name: "[ES Tool Name]",
  href: "/es/[es-slug]",
  icon: [IconName],
  description: "[ES description]",
  tier: "[free|pro|business]",
}
```

---

## Step 7 — Update Brazilian Homepage Categories

Edit `app/br/page.tsx`.

Find the **inline** categories array (this file does NOT use FeaturesGridBr — it has its own array). Add:
```ts
{
  name: "[BR Tool Name]",
  href: "/br/[br-slug]",
  icon: [IconName],
  description: "[BR description]",
  tier: "[free|pro|business]",
}
```

---

## Step 8 — Update FeaturesGridEs

Edit `components/features-grid-es.tsx`.

This component is used by `/es/herramientas` (All Tools page). Add the tool to the correct category group — same Spanish data as Step 6.

---

## Step 9 — Update FeaturesGridBr

Edit `components/features-grid-br.tsx`.

This component is used by `/br/ferramentas` (All Tools page). Add the tool to the correct category group — same BR data as Step 7.

---

## Step 10 — Update Route Map

Edit `lib/route-map.ts`.

Add a trilingual tuple so the language switcher can route between the three pages:
```ts
["/[en-slug]", "/es/[es-slug]", "/br/[br-slug]"],
```

Find the correct alphabetical or categorical position in the file. Do not append blindly to the end.

---

## Step 11 — Verification Checklist

Before finishing, confirm every item:

- [ ] `app/[en-slug]/page.tsx` created
- [ ] `app/es/[es-slug]/page.tsx` created
- [ ] `app/br/[br-slug]/page.tsx` created
- [ ] `app/page.tsx` — tool added to categories array
- [ ] `app/es/page.tsx` — tool added to inline categories array
- [ ] `app/br/page.tsx` — tool added to inline categories array
- [ ] `components/features-grid-es.tsx` — tool added
- [ ] `components/features-grid-br.tsx` — tool added
- [ ] `lib/route-map.ts` — trilingual tuple added
- [ ] All three slugs use correct prefixes (`/`, `/es/`, `/br/`)
- [ ] Icons match across all files
- [ ] Tier gate consistent across all three pages

---

## Step 12 — Give Paula the Commit Command

Always end with the exact commands to run:

```
git add .
git commit -m "add [tool name] tool (EN/ES/BR)"
git push
```
