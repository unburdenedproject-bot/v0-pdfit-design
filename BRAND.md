# OmnisPDF — Brand Identity

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

## Color System
**Brand palette (custom, defined in tailwind.config.ts):**
| Role | Color | Hex |
|------|-------|-----|
| Brand dark background | Slate 900 | `#0f172a` |
| Brand dark accent | Slate 800 | `#1a365d` |
| CTA / highlight | Orange 400 | `#F97316` |
| CTA hover | Orange 500 | `#EA580C` |
| CTA strong | Orange 600 | `#C2410C` |
| CTA pressed | Orange 700 | `#9A3412` |
| Soft orange | Orange 300 | `#FB923C` |

**UI base (CSS variables, light/dark mode via shadcn/ui):**
- Background: white (`hsl(0 0% 100%)`) / dark: deep navy (`hsl(222.2 84% 4.9%)`)
- Primary: dark navy `hsl(222.2 47.4% 11.2%)`
- Border radius: `0.5rem`
- Font: system-ui stack (no custom web font)

## Key Design Rules
- Orange is the action color — CTAs, upload buttons, conversion triggers
- Dark navy backgrounds for hero sections and marketing surfaces
- White/light gray for tool interfaces — keep them clean and utilitarian
- Smooth scroll, 8px custom scrollbar, `scroll-behavior: smooth`
- Mobile-first — LCP target: under 2s mobile, under 0.5s desktop
- Never hide tools behind a login wall before the 3-free-anonymous-conversion limit
- Free tier is a funnel, not a full product — scarcity drives Pro upgrades
