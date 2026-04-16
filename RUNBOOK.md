# PDF.it Emergency Runbook
**Owner:** Paula Marshall Vargas  
**Primary alert inbox:** `paula.vargas3@gmail.com` (where cron reports, Vercel alerts, Stripe alerts land)  
**Secondary contact:** `paulamarshall@vamoutfitters.com` (business)  
**GitHub notifications:** `unburdenedproject@gmail.com`  
**Last updated:** April 16, 2026  
**Stack:** Next.js · Vercel · Supabase · Stripe · iLoveAPI · OpenAI · Upstash Redis · Resend · GitHub

> **Rule #1:** Don't panic. Read the symptom. Find the section. Follow the steps in order.  
> **Rule #2:** Never delete and rebuild. Always fix or extend what exists.  
> **Rule #3:** Check logs before touching anything.  
> **Rule #4:** If one tool is broken and users are affected, disable that tool FIRST (see "Quick Tool Disable" below), THEN debug.

---

## 🛑 QUICK TOOL DISABLE — 30 seconds to stop the bleeding

If a single tool is erroring for users (AI tool hallucinating, PDF processor broken, suspicious abuse), **disable it BEFORE debugging**. Users see a calm "Temporarily Unavailable" card instead of red errors.

1. Go to **Supabase → Table Editor → `feature_flags`**
2. Find the row for the tool slug (e.g. `chat-with-pdf`, `pdf-to-word`, `compress-pdf` — matches the `/api/<slug>/` directory name)
3. Set `enabled` to `false`
4. Optionally fill `disabled_message` (user-facing) and `reason` (your note — "iLoveAPI outage", "OpenAI 429s", "investigating")
5. Save. Within 30 seconds all requests to that tool return the soft card.

To re-enable: flip `enabled` back to `true`. Same 30-second propagation.

No redeploy. No code change. Everything else keeps working.

---

## 🚨 QUICK REFERENCE — WHERE TO LOOK FIRST

| Service | Dashboard | Logs location |
|---|---|---|
| Vercel | vercel.com | Dashboard → Project → Functions → Logs |
| Supabase | supabase.com | Dashboard → Logs → Postgres / Edge |
| Stripe | dashboard.stripe.com | Developers → Logs / Webhooks |
| iLoveAPI | developer.ilovepdf.com | Dashboard → Usage |
| Upstash | console.upstash.com | Database → Data Browser |
| Resend | resend.com | Dashboard → Emails / Logs |
| GitHub | github.com/unburdenedproject-bot/v0-pdfit-design | Actions tab |

---

## 1. 🔴 VERCEL DEPLOYMENT BROKEN

**Symptoms:** Site returns 500, deployment failed email, build error in Vercel dashboard.

### Step 1 — Check what failed
- Go to **Vercel → Project → Deployments**
- Click the most recent failed deployment
- Read the build log — look for the first red error line

### Step 2 — Common causes and fixes

**"Environment variable not found"**
- Go to Vercel → Settings → Environment Variables
- Check that all these exist: `ILOVEAPI_PUBLIC_KEY`, `ILOVEAPI_SECRET_KEY`, `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`, `SUPABASE_SERVICE_ROLE_KEY`, `STRIPE_SECRET_KEY`, `STRIPE_WEBHOOK_SECRET`, `UPSTASH_REDIS_REST_URL`, `UPSTASH_REDIS_REST_TOKEN`, `RESEND_API_KEY`, `OPENAI_API_KEY`, `CRON_SECRET`
- If any are missing, re-add them and redeploy

**"Module not found" or build error**
- Do NOT change code yourself
- Open the exact file mentioned in Claude Code and say: "This file has a build error: [paste error]. Fix it without changing anything else."

**"Function timeout"**
- A serverless function ran too long (default 10s on free Vercel)
- Check Vercel → Project → Settings → Functions → increase timeout if on Pro plan

### Step 3 — Emergency rollback
- Go to Vercel → Deployments
- Find the last **successful** deployment (green checkmark)
- Click the three dots → **Promote to Production**
- Site is live again instantly — no code change needed

### Step 4 — Confirm recovery
- Visit pdf.it in incognito
- Upload a file and run a free tool
- Check Vercel logs — no new errors

---

## 2. 🔴 STRIPE WEBHOOK FAILURE

**Symptoms:** Users pay but don't get Pro access. Stripe shows payments but Supabase shows users still on free plan.

### Step 1 — Confirm the problem
- Go to **Stripe → Developers → Webhooks**
- Click your webhook endpoint
- Look at recent events — are they showing "Failed" in red?

### Step 2 — Find the error
- Click a failed event
- Read the response body — it will say exactly what went wrong
- Common errors: 401 (auth), 500 (server error), timeout

### Step 3 — Fixes by error type

**401 Unauthorized — wrong webhook secret**
- Go to Stripe → Developers → Webhooks → click your endpoint → Signing secret → Reveal
- Go to Vercel → Settings → Environment Variables
- Update `STRIPE_WEBHOOK_SECRET` with the correct value
- Redeploy

**500 Server Error**
- Go to Vercel → Functions → Logs
- Filter by `/api/webhook`
- Read the error and open that file in Claude Code

**Webhook URL wrong**
- Stripe → Developers → Webhooks → check the endpoint URL
- Should be: `https://www.pdf.it.com/api/webhook` (note: **www is required** — non-www returns a 307 redirect that Stripe won't follow)
- If wrong, update it

### Step 4 — Replay failed events
- Stripe → Developers → Webhooks → click your endpoint
- Find failed events → click each one → "Resend"
- This re-delivers the payment event and triggers the upgrade

### Step 5 — Manually upgrade a user (emergency only)
- Go to Supabase → Table Editor → users
- Find the user by email
- Change their `plan` field from `free` to `pro`
- This is temporary — fix the webhook properly after

---

## 3. 🔴 OPENAI API KEY LEAKED

**Symptoms:** Unexpected OpenAI charges, email from OpenAI about suspicious usage, key found in public GitHub commit.

**Not this? For AI tools failing with 429 rate-limit errors (not key exposure), see Section 13.**

### DO THIS IMMEDIATELY — within 5 minutes

**Step 1 — Revoke the key**
- Go to **platform.openai.com → API Keys**
- Find the leaked key → click Delete
- Do this BEFORE anything else

**Step 2 — Create a new key**
- platform.openai.com → API Keys → Create new secret key
- Name it `pdfit-production-[date]`
- Copy it immediately — you only see it once

**Step 3 — Update Vercel**
- Vercel → Settings → Environment Variables
- Update `OPENAI_API_KEY` with the new key
- Redeploy

**Step 4 — Check for damage**
- platform.openai.com → Usage → check for unexpected spikes
- If you see charges you didn't make, contact OpenAI support immediately
- openai.com/contact — report unauthorized usage for potential refund

**Step 5 — Check GitHub**
- Go to your repo → search for the key string
- If found in any commit: contact GitHub support to purge from history
- Never try to delete git history yourself — you can make it worse

---

## 4. 🔴 SUPABASE DOWN OR UNREACHABLE

**Symptoms:** Site shows database errors, users can't log in, usage tracking broken.

### Step 1 — Check if it's Supabase or you
- Go to **status.supabase.com**
- If there's an active incident — it's them, not you. Wait it out.
- Post on your social channels (Facebook, LinkedIn, Instagram) if you have active users: "We're experiencing a brief outage due to our database provider. Working on it."

### Step 2 — If it's not a global outage
- Go to Supabase → your project → check the health indicators
- Supabase → Logs → Postgres — look for error patterns

### Step 3 — Connection limit hit
- Supabase free/pro has connection limits
- Symptom: "too many connections" error in logs
- Fix: Supabase → Settings → Database → enable **PgBouncer** connection pooling

### Step 4 — Restore from backup
- Supabase → Settings → Backups
- Pro plan keeps daily backups for 7 days
- Click "Restore" on the most recent clean backup
- **Warning:** This rolls back ALL data — only do this for data corruption, not connectivity issues

### Step 5 — Emergency read-only mode
- If Supabase is completely down for hours:
- Open Claude Code and say: "Add a maintenance mode banner to the homepage that says 'We're experiencing technical difficulties. Please try again in a few minutes.' Do not change anything else."

---

## 5. 🔴 ILOVEAPI QUOTA EXHAUSTED

**Symptoms:** All PDF conversions fail with API errors. Vercel logs show iLoveAPI 429 or quota errors.

### Step 1 — Confirm quota is the issue
- Go to **developer.ilovepdf.com → Dashboard**
- Check credits used vs. total
- If at 100% — this is the problem

### Step 2 — Disable affected tools immediately
- Go to **Supabase → Table Editor → feature_flags**
- Set `enabled = false` for tools that use iLoveAPI (compress, merge, split, rotate, watermark, OCR, conversions)
- Users will see "Temporarily Unavailable" instead of red errors
- This stops the bleeding while you fix the quota

### Step 3 — Add more credits
- developer.ilovepdf.com → Billing → Add credits / upgrade plan
- Choose a plan that covers your expected monthly volume
- Credits restore immediately after payment

### Step 4 — Re-enable tools
- Supabase → Table Editor → feature_flags
- Set `enabled = true` for each tool
- Test one tool on the live site to confirm it works

### Step 5 — Set a higher alert threshold
- developer.ilovepdf.com → Account → Notifications
- Set alert at 60% going forward (not 80%) so you have more warning time

---

## 6. 🔴 DNS ISSUE — SITE NOT LOADING

**Symptoms:** pdf.it or www.pdf.it not loading, DNS errors in browser, "server not found."

### Step 1 — Check if it's DNS or Vercel
- Go to **vercel.com → Project → Domains**
- Do your domains show green checkmarks?
- If red — DNS is misconfigured

### Step 2 — Check DNS settings
- Log into your domain registrar (where you bought pdf.it)
- Verify these DNS records exist:
  - `A` record: `@` → `76.76.21.21` (Vercel's IP)
  - `CNAME` record: `www` → `cname.vercel-dns.com`

### Step 3 — DNS propagation
- DNS changes take up to 48 hours to propagate worldwide
- Check propagation status at: **dnschecker.org**
- If most regions show correct — it's propagating, wait it out

### Step 4 — Vercel domain verification
- Vercel → Project → Settings → Domains
- If domain shows "Invalid Configuration" — click "Refresh"
- Follow Vercel's exact instructions for your registrar

### Step 5 — Emergency fallback
- While DNS is broken, your site is still live at: `v0-pdfit-design.vercel.app`
- Post this temporary URL anywhere you've shared pdf.it links

---

## 7. 🔴 DATABASE RESTORE NEEDED

**Symptoms:** Data corruption, accidental mass deletion, critical table wiped.

### Before you restore — assess the damage
- What exactly was deleted or corrupted?
- When did it happen? (Check Supabase logs for the timestamp)
- Can it be fixed with a SQL query instead of a full restore?

### Option A — Fix with SQL (preferred, no data loss)
- Open Supabase → SQL Editor
- Write a targeted fix — e.g. re-insert missing rows
- Ask Claude Code: "Write a SQL query to [describe what needs fixing]. Do not touch any other tables."

### Option B — Full restore from backup
- Supabase → Settings → Backups
- Choose the most recent backup BEFORE the incident
- Click Restore
- **Warning:** ALL changes after that backup point will be lost
- Inform users if this affects their account data

### After restore — verify
- Supabase → Table Editor → check affected tables look correct
- Test login, tool usage, subscription status on live site
- Check Stripe → confirm subscriber plans still match Supabase plans

---

## 8. 🔴 RESEND EMAIL DOWN — EMAILS NOT SENDING

**Symptoms:** Users not receiving signup confirmation emails, password reset emails not arriving.

### Step 1 — Check Resend status
- Go to **resend.com → Dashboard → Logs**
- Are emails showing "Delivered" or "Failed"?
- Check **status.resend.com** for platform outages

### Step 2 — Check domain verification
- Resend → Domains → pdf.it
- Should show "Verified" in green
- If not verified — DNS records may have been removed accidentally

### Step 3 — Check API key
- Resend → API Keys — confirm key exists and is active
- Vercel → Settings → Environment Variables → confirm `RESEND_API_KEY` matches

### Step 4 — Test manually
- Resend → Dashboard → send a test email to `paula.vargas3@gmail.com`
- If test works but app emails don't — the issue is in the app code

### Step 5 — Inform users
- If email is down for more than 1 hour during active signup periods:
- Add a banner to the site: "Email delivery is temporarily delayed. Your account is created — you can log in now."

---

## 9. 🟡 UPSTASH REDIS DOWN — RATE LIMITING BROKEN

**Symptoms:** Vercel logs show Redis connection errors. Rate limiting not working (users getting unlimited free access).

### Step 1 — Check Upstash
- Go to **console.upstash.com**
- Is pdfit-ratelimit database showing as Active?
- Check status.upstash.com for outages

### Step 2 — If database is deleted again
- Create new database: name `pdfit-ratelimit`, region US-EAST-1, Pay as You Go, Eviction ON
- Copy new `UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN`
- Update both in Vercel → Settings → Environment Variables
- Redeploy

### Step 3 — Temporary workaround
- If Redis is down briefly, rate limiting fails open (users get more free uses)
- This is acceptable for a short outage — not a security emergency
- Monitor and restore as soon as possible

---

## 10. 🟡 SUSPICIOUS TRAFFIC / BOT ATTACK

**Symptoms:** Sudden spike in Vercel function invocations, iLoveAPI credits draining fast, Upstash rate limit maxed.

### Step 1 — Identify the source
- Vercel → Analytics → check which routes are spiking
- Vercel → Functions → Logs → look for repeated IPs or patterns

### Step 2 — Check Upstash rate limiting
- console.upstash.com → your database → Data Browser
- Look for IPs hitting the limit repeatedly

### Step 3 — Block at Vercel level
- Vercel → Project → Settings → Firewall (Pro feature)
- Block specific IPs or countries if needed

### Step 4 — Emergency tool disable
- If a specific tool is being abused:
- Supabase → feature_flags → set `enabled = false` for that tool
- Add a reason: "Bot abuse detected [date]"

### Step 5 — Tighten rate limits
- Open `middleware.ts` in Claude Code
- Say: "Reduce the rate limit from 100 req/min to 20 req/min per IP. Do not change anything else."

---

## 11. 🟡 USER REPORTS THEY CAN'T DOWNLOAD AFTER PAYING

**Symptoms:** User emails saying they paid but can't access Pro features.

### Step 1 — Verify payment in Stripe
- Stripe → Customers → search by email
- Confirm they have an active subscription
- Check subscription status: Active, Past Due, or Cancelled?

### Step 2 — Check Supabase
- Supabase → Table Editor → users
- Find user by email
- Check their `plan` field — does it say `pro` or `business`?
- If it still says `free` — webhook failed for this user

### Step 3 — Manual fix
- Supabase → users → find the row → edit `plan` to `pro`
- This gives them access immediately
- Then investigate why the webhook failed (see Section 2)

### Step 4 — Reply to the user
> "Hi [name], I've manually upgraded your account — you now have full Pro access. I'm sorry for the inconvenience. Please refresh the page and log in again."

---

## 12. 🟡 HIGH VERCEL BILL WARNING

**Symptoms:** Email from Vercel saying you're near your $300 budget.

### Step 1 — Find what's causing the spike
- Vercel → Usage → check which functions are using the most invocations
- Look for runaway loops or unexpected traffic

### Step 2 — Check for abuse
- Follow Section 10 (Suspicious Traffic)

### Step 3 — Raise the budget if legitimate
- Vercel → Settings → Billing → Spend Management
- Raise budget to $400 or $500 if real user traffic is growing
- This is a good problem — it means users are coming

### Step 4 — Optimize if needed
- Ask Claude Code: "Which API routes are being called most frequently? Can any be optimized to reduce function invocations?"

---

## 13. 🔴 OPENAI RATE LIMIT (429) — AI TOOLS FAILING

**Symptoms:** AI tools (chat-with-pdf, pdf-summarizer, translate-pdf, ats-optimizer, smart-extraction, question-generator, create-resume) return errors. Vercel logs show "AI service is temporarily busy" or "OpenAI 429". Your key is fine — this is a usage-rate issue, not a security issue.

### Step 1 — Confirm it's OpenAI rate-limiting, not an outage
- Go to **status.openai.com** — if there's a platform incident, wait it out
- Open **platform.openai.com → Usage** — are you at or near your tier's TPM (tokens per minute) limit?

### Step 2 — Kill switch the affected tool(s) immediately
- Go to **Supabase → Table Editor → `feature_flags`**
- Set `enabled = false` for each AI tool affected (don't try to guess which ones — disable all 7 AI tools if unsure)
- Fill `reason` = "OpenAI 429 rate limits, investigating"
- Users now see "Temporarily Unavailable" card instead of red errors
- This stops compounding: failed requests still count toward rate limits

### Step 3 — Raise your OpenAI usage tier
- platform.openai.com → Settings → Limits
- Tiers increase automatically with payment history — you may need to add a payment method or pre-pay credits
- If you're on Tier 1 or 2, even a small volume of concurrent AI requests hits the limit fast

### Step 4 — Re-enable tools incrementally
- Flip `enabled = true` on ONE AI tool first (pick the most popular)
- Monitor Vercel logs for 5 min — any 429s?
- If clean, re-enable the rest

### Step 5 — Prevent recurrence
- Raise the monthly cap in OpenAI billing if you're getting close to it
- Consider whether a single runaway script or user is driving the volume (see Section 10)

---

## 📋 EMERGENCY CONTACTS & RESOURCES

| Service | Support | Status Page |
|---|---|---|
| Vercel | vercel.com/support | vercel-status.com |
| Supabase | supabase.com/support | status.supabase.com |
| Stripe | support.stripe.com | status.stripe.com |
| iLoveAPI | developer.ilovepdf.com/contact | — |
| Upstash | upstash.com/docs | status.upstash.com |
| Resend | resend.com/support | status.resend.com |
| OpenAI | help.openai.com | status.openai.com |

---

## 📋 KEY CREDENTIALS LOCATION

> **Never store actual keys here. This is a location guide only.**

| Credential | Where to find it |
|---|---|
| All API keys | Vercel → Settings → Environment Variables |
| Supabase keys | Supabase → Project Settings → API |
| Stripe keys | Stripe → Developers → API Keys |
| Stripe webhook secret | Stripe → Developers → Webhooks → endpoint → Signing secret |
| iLoveAPI keys | developer.ilovepdf.com → API Keys |
| Upstash keys | console.upstash.com → database → REST tab |
| Resend API key | resend.com → API Keys |
| OpenAI key | platform.openai.com → API Keys |

### Stripe CLI re-authentication
The Stripe CLI on your Windows machine expires **90 days after last login**. Authenticated April 16, 2026 — **renewal due ~July 15, 2026**.
- Run `stripe login` in terminal to refresh
- Update this date after each re-auth

---

## 📋 DAILY HEALTH CHECK (2 minutes)

Run this every morning once you're live:

1. Visit **pdf.it.com** in incognito — does it load?
2. Try one free tool — does it work?
3. Check **Vercel** → any deployment failures overnight?
4. Check **Stripe** → any failed payments or disputes?
5. Check **paula.vargas3@gmail.com** → any cron/alert emails?

If all 5 are green — you're good. Go build.

---

## 📋 MONDAY WEEKLY REVIEW (60 seconds)

Every Monday morning, open Claude Code and type:

```
/weekly-review
```

Claude produces a structured report: revenue delta, top tools + error rates, top errors, support themes, costs, and **one experiment to ship this week**. Takes 60 seconds to read, gives you the signal you need to decide where to spend the week.

Review the report → pick the one experiment → ship it. Repeat every Monday.

---

*This document is your single source of truth for emergencies. Keep it in the root of your repo as `RUNBOOK.md`.*
