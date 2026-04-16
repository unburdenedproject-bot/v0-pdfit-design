# Continue Here — PDF.it Status Brief

**Last updated:** April 16, 2026 (evening)
**Read this first when resuming.**

---

## 🟢 What's Done

### April 15, 2026 — UX polish + solo builder infrastructure
- No-red audit sweep (38 files); premium soft-card pattern everywhere
- Header redesign (EN/ES/BR): removed About/Contact, added tool search
- About CTA "Compare all plans" (EN/ES/BR)
- Footer: removed X icon
- Upload dropzones: plan-aware max file size shown everywhere
- Error headings: "File Too Large", "Unsupported File Type", "Empty File" fire correctly
- Kill switch infra shipped (feature_flags table, `isToolEnabled` helper, 35 tool routes wired)
- `lib/analytics.ts` + instrumentation on 3 interfaces
- `/weekly-review` slash command created
- SEO cron false-positive fixed

### April 16, 2026 — Security hardening + infra + observability
**Paula (security + infra):**
- Supabase RLS enabled on `webhook_events` and `newsletter_subscribers`
- Tightened RLS on `contact_messages` + `user_feedback` (INSERT-only)
- Fixed mutable `search_path` on `increment_usage` and `audit_user_changes` functions
- "Prevent use of leaked passwords" enabled in Supabase Auth (HIBP check)
- Upstash Redis recreated (pdfit-ratelimit, Pay-as-you-go, us-east-1) + reconnected to Vercel
- Vercel on-demand budget raised $200 → $300; email alerts on
- OpenAI $100 monthly cap + 80/100% alerts
- iLoveAPI low-credits alerts
- Stripe alerts: disputes, unexpected refunds, Radar fraud, negative balance, elevated-risk payments, $10 min balance
- Gmail filter: `noreply@pdf.it.com` → never spam
- Ran SQL migrations 008 + 009 → 37 rows in `feature_flags`, kill switch ACTIVE
- Vercel CLI + Stripe CLI confirmed installed and authenticated

**Claude (code):**
- Observability instrumentation complete across all 16 tool interfaces (every tool now fires file_selected / process_start / process_complete / process_error to GA4)
- CI workflow fixed: E2E + Integration skipped on push (secrets not configured); still run on PR + manual dispatch
- Middleware + contact route now accept BOTH `KV_REST_API_*` and `UPSTASH_REDIS_REST_*` env vars (Paula's new Upstash marketplace uses the UPSTASH_ prefix)
- Middleware logs a warning if no Upstash credentials are found (so silent fail-open is visible)
- ENVIRONMENT.md updated to document both env var naming conventions

---

## 🔴 Paula's to-do list (open items)

### ✅ Everything done.

### ✅ Runbook — DONE (April 16, 2026)
Paula wrote a thorough `RUNBOOK.md` covering 13 incident types (Vercel down, Stripe webhook failure, OpenAI key leaked, Supabase outage, iLoveAPI quota, DNS, database restore, Resend down, Upstash down, bot attack, user-paid-no-access, high Vercel bill, OpenAI 429). Claude reviewed and fixed factual errors (env var names, webhook path, X/Twitter removed) + added Quick Tool Disable section + OpenAI 429 section + weekly-review ritual.

### Optional nice-to-haves
- [ ] Verify SPF/DKIM/DMARC green in Resend dashboard → Domains → `pdf.it.com` (reduces spam flagging)
- [ ] GA4 Explore: after 24h of data, build the `tool_event` funnel (`file_selected → process_start → process_complete`) segmented by tier

### Recurring reminders
- **Every Monday:** type `/weekly-review` in Claude Code for the weekly ops report
- **Before July 15, 2026:** run `stripe login` to re-auth CLI (90-day key expiry)

---

## 🟡 Next session tasks for Claude

Pick in order — each is self-contained:

1. **Priority #4 — Dashboard as growth asset.** Add usage graph, favorite tool, "saved X hours" stat, new-tool-unlocked upsell, save-for-annual CTA on monthly subscribers. Medium UI work.

2. **Priority #5 — Cancel survey + feedback prompt.** Supabase `cancellation_reasons` table + dropdown in Stripe portal. One-question in-app prompt after 3rd tool use routing to `contact@pdf.it.com`.

3. **Scaffold RUNBOOK.md** if Paula asks for a template.

4. **Optional follow-ups on observability:** add `result_downloaded` events to each tool's download handler; add per-turn events to chat-with-pdf chat sends; add rewrite-step events to ats-optimizer.

---

## 📁 Where things live

- **SOLO-PRIORITIES.md** — 7-priority framework with per-item status
- **COMPLETED.md** — full changelog
- **POST-LAUNCH.md** — post-launch roadmap with gate conditions
- **BRAND.md** — visual + copy rules (no-red rule, download button rule)
- **CLAUDE.md** — project memory + always-follow rules
- **ENVIRONMENT.md** — env vars + credentials reference (includes both KV_ and UPSTASH_ naming for rate limiter)
- **scripts/008_create_feature_flags.sql** + **009_fix_feature_flag_slugs.sql** — kill switch migrations (already run)

---

## 🤖 Claude memory snapshot

Persistent across sessions:
- No red in user messages — always SoftErrorCard / soft-card pattern
- Download buttons must be prominent (filled/outlined, dedicated bar)
- Stripe CLI expires ~July 15, 2026 — remind Paula to re-auth
- Launched April 13, 2026; site is live
- Kill switch is active; Paula can disable any tool via Supabase Table Editor
- Full observability instrumentation live on all 16 tools; GA4 `tool_event` funnel ready after 24h
