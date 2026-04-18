# PDF.it - Localization

## Target Markets
- USA (English — no prefix)
- LATAM (Spanish — `/es/` prefix)
- Brazil (Brazilian Portuguese — `/br/` prefix, NOT `/pt/`)

## Route Map
- Language switcher routes live in `lib/route-map.ts`
- Routes are trilingual [EN, ES, BR] tuples
- **Must update `lib/route-map.ts` every time a new page is added**

## URL Prefix Rules
- English: no prefix (e.g., `/compress-pdf`)
- Spanish: `/es/` prefix with translated slugs (e.g., `/es/comprimir-pdf`)
- Brazilian Portuguese: `/br/` prefix with Portuguese slugs (e.g., `/br/comprimir-pdf`)

## Trilingual Build Instructions
When adding any new tool or page, update ALL of the following:
1. English page under `app/`
2. `app/es/page.tsx` — inline categories array (does NOT use FeaturesGridEs)
3. `app/br/page.tsx` — inline categories array (does NOT use FeaturesGridBr)
4. `components/features-grid-es.tsx` — used by `/es/herramientas` (All Tools page)
5. `components/features-grid-br.tsx` — used by `/br/ferramentas` (All Tools page)
6. `lib/route-map.ts` — trilingual route tuple

## Homepage Architecture
- Spanish homepage (`app/es/page.tsx`) has its OWN inline categories array — does NOT use FeaturesGridEs
- Brazilian homepage (`app/br/page.tsx`) has its OWN inline categories array — does NOT use FeaturesGridBr
- FeaturesGridEs is only used by `/es/herramientas` (All Tools page)
- FeaturesGridBr is only used by `/br/ferramentas` (All Tools page)

## Language-Specific Components
| Locale | Header | Footer | Features Grid | Dashboard |
|--------|--------|--------|---------------|-----------|
| EN | header.tsx | footer.tsx | features-grid.tsx | dashboard-client.tsx |
| ES | *(shared)* | *(shared)* | features-grid-es.tsx | *(shared)* |
| BR | header-br.tsx | footer-br.tsx | features-grid-br.tsx | dashboard-client-br.tsx |

## Component Locale Awareness
- Shared business-tool components must be locale-aware when mounted under EN / ES / BR routes
- Do not rely on translated page wrappers alone to handle locale context

## Page Count
- Total pages: 617 (EN/ES/BR combined) — last bumped April 19, 2026 (+9 industry landing pages, +5 EN /learn/ articles, +1 route-map fix)
