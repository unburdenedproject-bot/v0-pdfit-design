---
name: Integration Test Suite
description: 84 Playwright integration tests across 8 spec files, testing real Supabase + Stripe against localhost:3000
type: project
---

Integration test suite added April 2026. Uses Playwright `request` fixture (not browser, not Vitest).

**Why Playwright, not Vitest:** Supabase SSR uses chunked cookies that are nearly impossible to reconstruct in raw fetch. Playwright handles cookies natively.

**How to apply:**
- Tests live in `e2e/integration/` (8 spec files) + `e2e/integration/nightly/` (1 spec file)
- Helpers in `e2e/integration/helpers/` (test-users.ts, stripe-helpers.ts, supabase-admin.ts)
- Run with `pnpm test:integration` (needs dev server + .env.test with test Supabase credentials)
- CI: `test-integration` job in `.github/workflows/ci.yml`
- Nightly: `.github/workflows/nightly.yml` (Mon-Fri 6am UTC, real paid API keys)
- Requires a SEPARATE Supabase project for tests (not production)
- Test users prefixed `inttest-*@pdfit-test.local`
