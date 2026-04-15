# PDF.it — Brand Identity

## Positioning
**Tagline:** "Fix any document problem instantly"
**Category:** PDF tools SaaS (competing with SmallPDF)
**Differentiator:** Not just a converter — a complete document problem-solver

## Target Audience
- **Primary:** Business teams (legal, accounting, operations) processing documents daily
- **Secondary:** Students preparing reports, theses, and submissions
- **Geography:** USA, LATAM (Spanish-speaking), Brazil (Portuguese-speaking)
- **Pain points:** Slow tools, paywalled basics, desktop software, file size limits

## Brand Voice
- **Professional** — trusted by teams, not just casual users
- **Simple** — no jargon; explain the benefit, not the technology
- **Fast** — every headline implies speed and immediacy
- Write as if talking to a busy professional who has 10 seconds to decide
- Never say "PDF tool" when you can say "fix your document"

## Multilingual Identity
All three languages are **equal, first-class identities** — not translations of English.
- English (`/`) — USA market
- Spanish (`/es/`) — LATAM market (distinct voice, not translated EN copy)
- Brazilian Portuguese (`/br/`) — Brazil market (distinct voice, not translated EN copy)

Copy written for each locale should feel native, not localized.

## Logo
- **Primary logo**: `/public/logo.svg` — PDFit swirl + ".it" in teal/blue gradient on transparent background
- **Favicon**: `/public/favicon.png` — Internet Tab Logo (PDF.it on dark background)
- **OG image**: `/public/og-logo.png` — PDFit logo for social sharing (1736×846)
- **Usage**: All headers, footers, login, signup, reset-password use `<img src="/logo.svg" alt="PDF.it">` — never use text-based spans
- **No orange**: All OmnisPDF orange colors were removed on April 6, 2026. Zero orange Tailwind classes in codebase.

## Color System
**Brand palette (locked):**
| Role | Hex | Usage |
|------|-----|-------|
| Background dark | `#0E0F1E` | Hero, headers, footer, nav |
| Background secondary | `#13152A` | Cards on dark, hover states |
| Surface light | `#F5F7FB` | Tool pages, content sections |
| Primary CTA | `#14D8C4` | Buttons, icons, logo ".it" |
| CTA hover | `#2EE6D6` | Button hover state |
| Support blue | `#6B7CFF` | Links, badges |
| Wave start | `#0A4A5C` | Iridescent wave gradient |
| Wave mid | `#1E6FD9` | Iridescent wave gradient |
| Wave end | `#E8813A` | Iridescent wave gradient |

**Tier accent colors (upgrade/pre-gate cards):**
| Tier | Accent | Crown | Badge |
|------|--------|-------|-------|
| Pro | Gold `#E0C27A` / `#D6B36A` | Gold crown | "Most Popular" |
| Business | Sapphire `#6B7CFF` / `#8B9AFF` | Blue crown | "Business Feature" |
| Enterprise | Platinum `#C0C5CE` + teal `#14D8C4` | Platinum crown | "Enterprise Feature" |

**Typography:**
- Headings: **Sora**
- Body: **Inter**

## Key Design Rules
- Teal (`#14D8C4`) is the action color — CTAs, upload buttons, conversion triggers, logo ".it"
- Dark navy (`#0E0F1E`) for hero sections, headers, footer, and nav
- Light surface (`#F5F7FB`) for tool interfaces — keep them clean and utilitarian
- Iridescent wave gradient (`#0A4A5C → #1E6FD9 → #E8813A`) for decorative wave elements
- Smooth scroll, 8px custom scrollbar, `scroll-behavior: smooth`
- Mobile-first — LCP target: under 2s mobile, under 0.5s desktop
- Never hide tools behind a login wall before the 3-free-anonymous-conversion limit
- Free tier is a funnel, not a full product — scarcity drives Pro upgrades

## Error & Info Messages
- **Never use red to communicate with the user.** No `bg-red-*`, no `text-red-*`, no red icons (AlertCircle in red), no red borders. Red reads as a system failure or broken state — even when the user just picked the wrong file or made a small mistake. Use it only for truly critical backend failures that are rare and unrecoverable.
- Use the **premium soft card** pattern for every user-facing message — errors, warnings, tips, info, empty states. Pastel gradient background (`linear-gradient(135deg, #F0F9FF 0%, #F5F3FF 100%)`), `#DBEAFE` border, a small teal→indigo gradient circle (`linear-gradient(135deg, #14D8C4, #6B7CFF)`) with a white icon (`FileText`, `Info`, or context-appropriate), bold slate-900 heading, slate-600 body text. Same aesthetic as the invalid-PDF cards on ats-optimizer / translate-pdf / summarizer / question-generator.
- Shared component: `components/processing/soft-error-card.tsx` — use `<SoftErrorCard />` with `isUserInputError(message)` guard. For inline banners (not full-page), replicate the same gradient-circle + pastel-background pattern rather than falling back to `bg-red-50 + AlertTriangle`.
- Error headings must be specific: "File Too Large", "Unsupported File Type", "Empty File", "We couldn't read this PDF" — never the generic "Processing Failed" / "Protection Failed" / "Conversion Failed".
- Toned-down language: "We couldn't read this PDF" beats "ERROR: PDF INVALID". Lead with what the user should do, not what broke.

## Analytics
- GTM ID: GTM-PNR9LXC2
- GA4: G-PWD4YNY710
