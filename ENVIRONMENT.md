# PDF.it - Environment Variables & Credentials

## Vercel Environment Variables (confirmed 2026-03-18)
All set on Vercel for Production and Preview:
- STRIPE_SECRET_KEY (sensitive, Production+Preview)
- NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY (all environments)
- STRIPE_WEBHOOK_SECRET (all environments)
- STRIPE_PRICE_ID (Pro monthly)
- STRIPE_PRICE_ID_ANNUAL (Pro annual)
- STRIPE_PRICE_ID_BUSINESS (Business monthly)
- STRIPE_PRICE_ID_BUSINESS_ANNUAL (Business annual)
- STRIPE_PRICE_ID_ENTERPRISE (Enterprise monthly)
- STRIPE_PRICE_ID_ENTERPRISE_ANNUAL (Enterprise annual)
- NEXT_PUBLIC_SITE_URL (Production only)
- SUPABASE_SERVICE_ROLE_KEY (sensitive, Production+Preview)
- NEXT_PUBLIC_SUPABASE_ANON_KEY (all environments)
- NEXT_PUBLIC_SUPABASE_URL (all environments)
- BLOB_READ_WRITE_TOKEN (all environments)
- ILOVEAPI_SECRET_KEY (sensitive, Production+Preview)
- ILOVEAPI_PUBLIC_KEY (all environments)
- CLOUDCONVERT_API_KEY (all environments)
- OPENAI_API_KEY (for ATS optimizer)
- GOOGLE_CLOUD_PROJECT_ID
- GOOGLE_CLOUD_CLIENT_EMAIL
- GOOGLE_CLOUD_PRIVATE_KEY
- GOOGLE_CLOUD_LOCATION
- GOOGLE_CLOUD_PROCESSOR_ID
- HCAPTCHA_SECRET_KEY
- NEXT_PUBLIC_HCAPTCHA_SITE_KEY

## New Environment Variables (April 2026) — ALL CONFIGURED ON VERCEL
- NEXT_PUBLIC_SENTRY_DSN — Sentry error tracking DSN (configured on Vercel; @sentry/nextjs package removed from codebase due to Node 24 incompatibility)
- CRON_SECRET — protects cron job endpoints from unauthorized access (LIVE)
- GOOGLE_SAFE_BROWSING_API_KEY — Google Safe Browsing v4 key for url-to-pdf phishing/malware check (LIVE, verified April 12, 2026 with testsafebrowsing.appspot.com/s/phishing.html → returns 400 "URL is unsafe"). If unset, check is skipped and a console warning is logged; SSRF protection still runs.
- Rate limiting Redis (Upstash) — set EITHER `KV_REST_API_URL` + `KV_REST_API_TOKEN` (legacy Vercel KV marketplace) OR `UPSTASH_REDIS_REST_URL` + `UPSTASH_REDIS_REST_TOKEN` (current Upstash marketplace). The code accepts either naming. If both are unset, rate limiting silently disables (fail-open) and a warning is logged at middleware startup.
- RESEND_API_KEY — transactional emails (trial drip, payment failed, welcome)

## Google Cloud Credentials
- Service Account: omnispdf-docai@project-5fe73bdf-4333-442f-840.iam.gserviceaccount.com
- Project ID: project-5fe73bdf-4333-442f-840
- Processor: **Layout Parser** (switched from Form Parser on April 14, 2026 — Layout Parser handles borderless/merged-cell tables much better; Form Parser was collapsing multi-column tables into a single column). Processor ID rotated at the same time — check Vercel env var `GOOGLE_CLOUD_PROCESSOR_ID` for the current value.
- Location: us
- JSON key stored in: C:\Users\paula\Dropbox\Paula\V. A. M. Outfitters, LLC\PDF.it\Credentials_Google Cloud
- **Private key format note:** the `GOOGLE_CLOUD_PRIVATE_KEY` env var MUST include the `-----BEGIN PRIVATE KEY-----` and `-----END PRIVATE KEY-----` markers with literal `\n` between lines. Re-paste from the raw JSON `private_key` field if you see `error:1E08010C:DECODER routines::unsupported` — that means OpenSSL can't parse the key because the markers are missing.
