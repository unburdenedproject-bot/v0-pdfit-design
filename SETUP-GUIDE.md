# PDF.it — Setup Guide for External Services

**STATUS: SETUP COMPLETE** — all services configured as of April 7, 2026. Keep this file as reference for re-configuration if any service breaks.

**April 14, 2026 update — Google Document AI:** the `/table-extraction` tool now uses Google's **Layout Parser** (not Form Parser). If you re-create the processor, pick `Layout Parser` under "General" when creating, region `US (multi-region)`, then copy the processor ID into Vercel env var `GOOGLE_CLOUD_PROCESSOR_ID` with NO trailing spaces. See ENVIRONMENT.md for the private-key format gotcha that caused an OpenSSL decoder error.

This guide covers services that need manual account creation. Each takes 5-15 minutes.

---

## 1. Uptime Monitoring (BetterUptime — Free)

**What it does:** Pings your website every minute. Texts/emails you instantly if it goes down.

**Setup (5 minutes):**

1. Go to https://betteruptime.com and sign up (free plan works)
2. Click "Create Monitor"
3. Set URL to: `https://www.pdf.it.com`
4. Set check interval: 1 minute
5. Add your phone number for SMS alerts
6. Add your email: paula.vargas3@gmail.com
7. Click Save

**Optional monitors to add:**
- `https://www.pdf.it.com/api/user-plan` (API health)
- `https://www.pdf.it.com/es` (Spanish version)
- `https://www.pdf.it.com/br` (Portuguese version)

**Alternative:** UptimeRobot (https://uptimerobot.com) — also free, same setup.

---

## 2. Sentry Error Tracking (Free tier: 5K errors/month)

**What it does:** Catches JavaScript errors and API crashes in real-time. Shows you exactly what broke, on which page, for which user.

**Already installed in the codebase.** Just needs a Sentry account + DSN.

**Setup (10 minutes):**

1. Go to https://sentry.io and sign up (free tier)
2. Create a new project: Platform = "Next.js", Name = "pdfit"
3. Copy the DSN (looks like: `https://abc123@o456.ingest.sentry.io/789`)
4. Go to Vercel Dashboard → Settings → Environment Variables
5. Add: `NEXT_PUBLIC_SENTRY_DSN` = your DSN (all environments)
6. Redeploy (push any commit or click "Redeploy" in Vercel)

**That's it.** Sentry will now capture:
- Client-side JavaScript errors (React crashes, failed fetches)
- Server-side API route errors (failed PDF processing, Stripe issues)
- The global error page (`app/global-error.tsx`) reports crashes automatically

**What to check weekly:**
- Go to https://sentry.io → your project → Issues
- Look for recurring errors (same error happening many times = real bug)
- Ignore one-off errors from bots or old browsers

---

## 3. Vercel Cron Secret (Recommended)

**What it does:** Prevents random people from triggering your cron jobs by visiting the URL directly.

**Setup (2 minutes):**

1. Go to Vercel Dashboard → Settings → Environment Variables
2. Add: `CRON_SECRET` = any random string (e.g., generate one at https://generate-secret.vercel.app)
3. Redeploy

The trial email and SEO health cron jobs will verify this secret automatically.

---

## 4. Environment Variables Checklist

After setting up the above services, your Vercel env vars should include these NEW ones:

| Variable | Value | Required? |
|----------|-------|-----------|
| `NEXT_PUBLIC_SENTRY_DSN` | From Sentry dashboard | Recommended |
| `CRON_SECRET` | Random secret string | Recommended |

All existing env vars (Stripe, Supabase, iLoveAPI, etc.) remain unchanged.
