# PDF.it — Solo Builder Priorities

Suggestions I made to Paula on April 15, 2026 about things a solo non-technical founder tends to miss. Items are ordered by value for her situation (2 days post-launch, pushing for 10K paid subscribers).

**Owner:** Paula. **Implementation help:** Claude, when asked.

---

## 1. Observability beyond errors

**Problem:** Sentry catches crashes, BetterUptime catches downtime — neither tells us what users are actually *doing*. We're flying blind on:
- The upload → process → download funnel (where do people drop off?)
- Re-upload rate (sign the result was unsatisfactory)
- Cost per user per tier (is one Free user burning $0.40/mo in iLoveAPI credits?)
- Which tools convert Free → Pro (not just which tools are used most)

**First step:** Add a `trackToolEvent(tool, event, data)` helper (`lib/analytics.ts`) that wraps `gtag("event", ...)` and emit: `tool_opened`, `file_selected`, `process_start`, `process_complete`, `result_downloaded`, `error_shown`, `upgrade_clicked`. Then build a funnel in GA4 Explore.

**Status:** ✅ Complete (April 16, 2026) — helper shipped and instrumented across all 16 tool interfaces. Every tool now fires `file_selected`, `process_start`, `process_complete`, `process_error` to GA4.

**What's done:**
- `lib/analytics.ts` — `trackToolEvent(tool, event, data)` helper + `classifyError(status, message)` categorizer. Pushes to the existing GTM dataLayer under a single event name `tool_event` with dimensions `tool`, `tool_event`, `tier`, plus optional `file_size_mb`, `latency_ms`, `error_type`, `format`, etc.
- **Instrumented: `components/processing-interface.tsx`** — fires `file_selected`, `process_start`, `process_complete`, `process_error`, `result_downloaded`. Covers ~26 tools that use this shared component (compress, merge, split, rotate, protect, unlock, watermark, OCR, pdf-to-word/excel/ppt/jpg/png/txt, image-to-pdf, flatten, office-to-pdf, powerpoint-to-pdf, excel-to-pdf, extract-images, etc.)
- **Instrumented: `components/pdf-summarizer-interface.tsx`** — full lifecycle on the AI Business tool
- **Instrumented: `components/question-generator-interface.tsx`** — full lifecycle including `result_downloaded` with `format: "pdf" | "txt"`

**All 16 tool interfaces now instrumented.** Full list in COMPLETED.md. Follow-ups (lower priority): add `result_downloaded` events to download handlers; add per-turn events to chat-with-pdf chat sends; add rewrite-step events to ats-optimizer.

**How to use in GA4:**
1. Wait 24h for events to flow
2. Explore → Blank → add `tool_event` as the event name filter
3. Funnel: `file_selected` → `process_start` → `process_complete` → `result_downloaded`, segmented by `tier`
4. Drop-off from `process_start` → `process_complete` is the error funnel — pivot by `error_type` to see which tools have the highest real-failure rate

---

## 2. Emergency runbook

**Problem:** As a non-technical solo operator, the scariest failure mode is *not knowing what to do at 2 a.m.* when something is on fire.

**First step:** Write a single-page Notion doc (or a `RUNBOOK.md` in this repo) with:
- Stripe webhook failing → verify signing secret, check Stripe dashboard > Webhooks > Recent deliveries
- Vercel deploy broken → `vercel rollback` command + how to revert to previous commit on GitHub
- OpenAI API key leaked → rotate key in OpenAI dashboard + update in Vercel env vars + redeploy
- Supabase down → status.supabase.com, temporarily disable signup, email affected users
- iLoveAPI quota exhausted → temporary soft-disable tools via feature flags (see #3)
- Domain/DNS issue → Vercel > Settings > Domains, Cloudflare records
- Database corruption → Supabase daily backups location + restore steps

**Status:** ✅ Complete (April 16, 2026) — `RUNBOOK.md` in repo root covers 13 incident types with symptom → steps → verification pattern. Starts with a "Quick Tool Disable" section so a single-tool issue can be defused in 30 seconds before debugging.

---

## 3. Kill switch per tool (feature flags)

**Problem:** If iLoveAPI or OpenAI has a 3-hour outage, every affected tool throws red errors and users churn. Currently the only way to disable a tool is a code change + redeploy.

**First step:**
- Create Supabase table `feature_flags` (`tool_slug` text PK, `enabled` boolean default true, `disabled_message` text, `updated_at` timestamp)
- `lib/feature-flags.ts` helper exposes `isToolEnabled(slug)` → `{enabled, message}`
- Each API route calls the check first; returns 503 with a friendly message if disabled
- Client-side: render the premium soft card ("Temporarily unavailable — usually restored within an hour") instead of a red error
- Paula flips the flag in Supabase dashboard (no redeploy needed) and the tool goes dark gracefully

**Status:** ✅ Complete + ACTIVATED (April 16, 2026) — all 35 tool API routes now check the flag at the top and return 503 with a soft-card message if disabled. Client automatically renders the "Temporarily Unavailable" soft card via auto-detection in `SoftErrorCard`. Migrations `008` + `009` executed in Supabase; 37 rows in `feature_flags` all default to `enabled = true`.

**What's done:**
- `scripts/008_create_feature_flags.sql` — new table `public.feature_flags` seeded with all 32 tool slugs
- `lib/feature-flags.ts` — `isToolEnabled(slug)` helper with 30s in-memory cache + fail-open on Supabase errors
- `components/processing/soft-error-card.tsx` — new `variant="unavailable"` renders "Temporarily Unavailable" heading with Clock icon
- **Reference impl:** `app/api/chat-with-pdf/route.ts` checks the flag at the top and returns 503 with the soft-card-friendly message. Client already shows inline soft card for any error, so the 503 renders correctly.

**How to flip the kill switch (Paula):**
1. Open Supabase dashboard → Table editor → `feature_flags`
2. Find the row for the tool slug (e.g., `chat-with-pdf`)
3. Toggle `enabled` to `false` and optionally set `disabled_message` (user-facing) and `reason` (your note)
4. Within 30 seconds, the tool will start returning a soft "Temporarily Unavailable" card on every request. No redeploy, no code change.

**To replicate in a new API route:**
```ts
import { isToolEnabled } from "@/lib/feature-flags"

// At the very top of POST(), before auth/body parsing:
const flag = await isToolEnabled("<tool-slug>")
if (!flag.enabled) {
  return NextResponse.json({ error: flag.message }, { status: 503 })
}
```
Then in the corresponding interface component, add a `503` branch that sets `hasError`/`errorMessage` (same as 422 handling). If the tool uses the full-page `<SoftErrorCard />` via `isUserInputError`, add a separate check for `response.status === 503` and render `<SoftErrorCard variant="unavailable" ... />`.

**All 35 tool routes wired** (see `scripts/009_fix_feature_flag_slugs.sql` for the canonical slug list matching `/app/api/<slug>/` directory names).

---

## 4. Dashboard as growth asset

**Problem:** The dashboard currently shows billing info. It's a wasted opportunity for retention + upsell.

**Ideas to add:**
- "You processed 47 PDFs this month (saved ~3 hours)" — stickiness
- "Your favorite tool: Compress PDF" — personalization
- "New in Business: PDF Compare — try it" — upsell on logged-in users who haven't upgraded
- Recent activity: last 10 files processed with quick re-download (if still cached)
- Usage graph: conversions per day over last 30 days
- Next billing date + "Save 17% with annual" button for monthly subscribers

**Status:** ✅ Complete (April 16, 2026) — Monthly stat card shows "~X hours saved" and "Favorite: [tool]"; AI discovery banner surfaces for paid users who haven't tried any AI tool yet; all 3 locales (EN/ES/BR). Recent activity, usage graph, and annual-upsell are deferred — revisit if engagement data (via #1 observability) shows Pro users aren't returning.

---

## 5. Real user conversations + cancel survey

**Problem:** Solo builders drift into building features nobody asked for. We have zero structured feedback.

**First step:**
- One-question prompt after the 3rd tool use: "30-second feedback? Reply to this email and Paula reads every one" → routes to `contact@pdf.it.com`
- Cancel flow in Stripe customer portal: require a dropdown reason (too expensive / didn't use it / missing feature X / found alternative / other), save to Supabase `cancellation_reasons` table
- Monthly review: open that table, read every reason, ship one thing in response

**Status:** ✅ Cancel survey complete (April 16, 2026) — `cancellation_reasons` table live, webhook captures Stripe's `cancellation_details.feedback` + `.comment`, Stripe Customer Portal configured to ask reason + comment on every cancellation. In-app "3rd use" feedback prompt deferred (would touch `processing-interface.tsx` which is load-bearing; revisit if cancellation data shows patterns we can't explain).

**Monthly ritual:** Query `cancellation_reasons` monthly to see top churn drivers:
```sql
SELECT reason_code, COUNT(*) FROM cancellation_reasons
WHERE cancelled_at > NOW() - INTERVAL '30 days'
GROUP BY reason_code ORDER BY count DESC;
```
Then read the `reason_comment` field on the most common code for the actual user voice.

---

## 6. Cost alerts + spend caps

**Problem:** Vercel / OpenAI / iLoveAPI can spike 10× overnight if a bot finds your endpoints, a Free user scripts abuse, or an AI route has a runaway loop.

**First step (today, 15 min total):**
- Vercel: Settings > Billing > Usage Alerts → $50, $100, $200 thresholds
- OpenAI: Settings > Billing > Usage Limits → hard monthly cap (e.g., $300) + email alert at $150
- iLoveAPI: Dashboard > Alerts → email at 80% of monthly quota
- Stripe: Settings > Notifications → alert on any refund/dispute event

**Status:** ✅ Complete (April 16, 2026) — Vercel $200→$300 budget + alerts; OpenAI $100 cap + 80/100% alerts; iLoveAPI low-credits alerts; Stripe alerts on disputes, unexpected refunds, Radar fraud, negative balance, elevated-risk payments + $10 minimum balance.

---

## 7. Weekly operations ritual

**Problem:** Solo builders without discipline drift into busy-work.

**First step:** Every Monday, 60-minute block:
- Revenue delta vs. last week
- Churn count + cancellation reasons (when #5 exists)
- Top 3 support emails
- Top 3 Sentry error types
- Ship **one** thing based on what you saw — not three, not ten — one

**Status:** ◐ Skill shipped — `/weekly-review` slash command available in Claude Code. Run it every Monday. Paula still needs to form the ritual (behavioral).

**How to use:** In Claude Code, type `/weekly-review` every Monday morning. Claude will produce the report in the format documented in `~/.claude/commands/weekly-review.md`. Skim in under 60 seconds, pick one experiment, and ship it.

---

## Implementation plan (when asked)

Claude starts with #3 (stability-critical, non-breaking to today's UX work). Then #1 (observability). Items #2 and #6 are Paula's to do directly (they're account config + personal runbook — not code). Items #4, #5, #7 are bigger and can be phased later based on business priorities.

When implementing any of these, rule: **do not touch or regress the April 15 UX polish wave** (soft error cards, header search, size limits, premium cards, no-red rule). All new work should be additive.
