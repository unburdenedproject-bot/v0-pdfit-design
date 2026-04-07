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

## Analytics
- GTM ID: GTM-PNR9LXC2
- GA4: G-PWD4YNY710
