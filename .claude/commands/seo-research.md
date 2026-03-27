---
context: fork
---

# SEO Research Brief for PDF.it

Research a topic and produce a ready-to-use brief for `/seo-article`.

**Usage:** `/seo-research [topic]`
**Example:** `/seo-research how to compress a PDF for email`

Runs in a forked context — does not pollute the main conversation window.

---

## Step 0 — Confirm Topic

If no topic was provided as an argument, ask for it now. Do not proceed without a clear topic.

Topic = `$ARGUMENTS`

---

## Step 1 — Search for Competing Articles

Use WebSearch to find the top results for the topic. Run these searches:

1. `[topic]` — bare keyword search
2. `[topic] site:smallpdf.com OR site:ilovepdf.com OR site:adobe.com` — direct competitor content
3. `[topic] filetype:html` — find how-to guides and articles

For each of the top 5–8 results, note:
- Page title
- Meta description (if visible)
- H2 headings (if visible in snippet)
- Word count estimate
- Whether it has a tool CTA, FAQ, or comparison table

---

## Step 2 — Identify Keywords and Search Intent

From the search results, extract:

**Primary keyword** — the exact phrase most results target in their H1

**Secondary keywords** — 4–6 related phrases that appear across multiple results
(e.g. variations, long-tail versions, "how to", "without", "free", "online")

**Search intent** — classify as one of:
- **Informational** — user wants to learn (answer with a guide)
- **Tool-seeking** — user wants to do it now (lead with the tool CTA)
- **Comparison** — user is choosing between options (lead with a table)

Most `/learn/` articles are informational with a tool-seeking secondary intent.

---

## Step 3 — Analyze Content Gaps

Compare the top results and identify what they are missing. Look for:

- Questions asked in "People Also Ask" that no article answers well
- Missing comparison tables (e.g. nobody compares file size levels)
- No mobile-specific instructions
- No mention of file size limits or tier differences
- Shallow FAQ (fewer than 4 questions)
- No internal linking to related tools
- Generic copy that doesn't speak to business users or students

List 3–5 specific gaps PDF.it's article can fill to outrank competitors.

---

## Step 4 — Define the Content Angles

Based on gaps found, choose 1 primary angle and 1–2 supporting angles:

**Primary angle** — the one thing this article does better than everyone else
(e.g. "Only article that explains compression levels with real % savings")

**Supporting angles** — secondary strengths
(e.g. "Covers mobile use case", "Speaks to business teams sending invoices")

---

## Step 5 — Output the Brief

Return a clean, structured brief in this exact format:

---

### SEO Brief: [Topic]

**Recommended H1:** [exact headline, includes primary keyword, action-oriented]

**Slug:** `/learn/[suggested-slug]`

**Meta description:** [under 160 chars, keyword-rich, ends with a benefit]

**Primary keyword:** [phrase]

**Secondary keywords:**
- [keyword 1]
- [keyword 2]
- [keyword 3]
- [keyword 4]
- [keyword 5]

**Search intent:** [Informational / Tool-seeking / Comparison]

**Primary content angle:** [one sentence]

**Content gaps to fill:**
- [gap 1]
- [gap 2]
- [gap 3]

**Recommended comparison table:** [what 3 things to compare, e.g. "Light vs Medium vs Extreme compression levels"]

**Recommended FAQ questions (6):**
1. [question]
2. [question]
3. [question]
4. [question]
5. [question]
6. [question]

**Recommended HowTo steps (3):**
1. [step title] — [one-line description]
2. [step title] — [one-line description]
3. [step title] — [one-line description]

**Related articles to link (4):** [existing `/learn/` slugs that are relevant]

**Target tool:** [PDF.it tool slug this article funnels to]

**Tier:** [free / pro / business]

**Competitor gap summary:** [2–3 sentences on why this article will outrank the top results]

---

## Step 6 — Hand Off

Tell the user:

> Brief is ready. Run `/seo-article` and paste this brief when asked for the topic and details — or copy the values field by field into the prompts.
