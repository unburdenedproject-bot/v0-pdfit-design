# Continue Here — PDF.it Status Brief

**Last updated:** April 16, 2026 (end of day)
**Read this first when resuming.**

---

## Where we are

PDF.it launches next week. All 7 solo-builder priorities are complete. Newsletter automation is live. Marketing assets are drafted. Infrastructure is hardened.

**What's working right now:**
- 30+ PDF tools + 7 AI tools, all live on pdf.it.com
- Kill switch on every tool (37 Supabase feature flags)
- Rate limiting active (Upstash, middleware accepts both env var naming conventions)
- Observability on every tool (16 interfaces → GA4 tool_event)
- 5-email drip sequence fires automatically on newsletter signup
- 4 scheduled remote agents (daily health check, Monday review, monthly churn, Stripe CLI reminder)
- Cancel survey capturing reasons via Stripe webhook
- Cost alerts on Vercel, OpenAI, iLoveAPI, Stripe
- RUNBOOK.md covering 13 incident types
- /weekly-review + /daily-health + /monthly-churn skills ready

---

## 🔴 Paula's to-do list (before launch)

### Spam fix — Resend DNS verification (5 min, CRITICAL)
The welcome email landed in spam. This is because SPF/DKIM/DMARC DNS records may not be configured for pdf.it.com.
- [ ] Go to **Resend → Domains → pdf.it.com**
- [ ] Check if SPF, DKIM, and DMARC all show **green/verified**
- [ ] If any are pending/red → Resend shows the exact DNS records to add. Add them at your domain registrar (wherever you bought pdf.it.com)
- [ ] Wait 1-24 hours for DNS propagation, then test by signing up with a different email
- [ ] **Without this fix, all marketing emails will land in spam.** This blocks everything.

### Save launch-day posts (2 min)
- [ ] Copy the launch email template + Product Hunt + LinkedIn + Reddit + Hacker News posts from today's chat into a Google Doc
- [ ] They're ready to paste — no edits needed unless you want to personalize

### Optional polish
- [ ] GA4 Explore: after 24h of data, build the `tool_event` funnel segmented by tier
- [ ] Check if the ™ looks right on the live footer at pdf.it.com
- [ ] Decide: add ™ to the SVG logo image too, or leave it text-only?

---

## 🟡 Next session — building toward a powerful SaaS

### Phase 1: Launch week (this week)
Claude is ready to help with:
1. **Newsletter signup on homepage** — currently only on blog pages. Add a prominent signup section on the homepage hero or below tools grid. More signups = more drip emails = more conversions.
2. **Unsubscribe endpoint** — the email footer links to `/unsubscribe?email=...` but the route doesn't exist yet. Build it before launch to stay CAN-SPAM compliant.
3. **Weekly broadcast mechanism** — after launch, Paula will want to send a "tool of the week" email to all subscribers. Build a simple `/api/send-broadcast` endpoint or Supabase-based campaign table.

### Phase 2: Growth engine (weeks 2-4)
4. **SEO article pipeline** — use `/seo-article` skill to publish 3-5 `/learn/` articles per week targeting long-tail keywords where SmallPDF/iLovePDF don't rank. This is the #1 organic growth lever.
5. **Comparison pages** — `/vs/smallpdf`, `/vs/ilovepdf`, `/vs/adobe-acrobat`. High-intent search traffic from people already looking for alternatives.
6. **Industry landing pages** — `/for/lawyers`, `/for/accountants`, `/for/hr-teams`. Enterprise conversion pages tied to the workflow templates.
7. **Product Hunt launch optimization** — Paula posts on launch day, Claude monitors + responds to comments in real-time.

### Phase 3: Retention + revenue (month 2+)
8. **Weekly broadcast newsletter** — "Tool of the week" + tips + user stories. Keeps subscribers engaged between drip emails.
9. **In-app feedback prompt** — after 3rd tool use, ask "How was this?" (deferred from earlier — needs processing-interface.tsx changes, medium risk)
10. **Annual billing upsell** — detect monthly subscribers and show "Save 17% with annual" banner in dashboard + email at month 3
11. **Referral program** — "Give 1 month free, get 1 month free" — Stripe coupon-based, simple UI
12. **Re-engagement emails** — detect users who haven't logged in for 30 days, send a "we miss you" nudge with their favorite tool highlighted

### Phase 4: Scale (when you hit 1,000 subscribers)
See POST-LAUNCH.md Phase 1-4 gates for the full roadmap (new languages, infrastructure migration, team plans, API access tier).

---

## Recurring reminders
- **Every morning ~8 AM PT:** daily health check email lands in your inbox (automated)
- **Every Monday ~9 AM PT:** weekly review reminder email (automated) — open Claude Code and run `/weekly-review`
- **Every 1st of month ~9 AM PT:** monthly churn email with SQL queries (automated)
- **Before July 15, 2026:** run `stripe login` to re-auth CLI (reminder email will fire July 10)

---

## 📁 Where things live

| Doc | What it covers |
|---|---|
| CONTINUE-HERE.md | This file — where to resume |
| SOLO-PRIORITIES.md | 7-priority framework (all ✅) |
| COMPLETED.md | Full changelog of shipped work |
| POST-LAUNCH.md | Roadmap with subscriber gates |
| BRAND.md | Visual rules, no-red rule, email style |
| CLAUDE.md | Project memory + always-follow rules |
| RUNBOOK.md | 13 incident types with step-by-step |
| ENVIRONMENT.md | Env vars + credentials reference |
| lib/newsletter-emails.ts | Email templates (LinkSplasher style) |
| scripts/008-011 | Supabase migrations (all run) |
