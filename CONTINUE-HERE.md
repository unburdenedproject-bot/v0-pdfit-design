# Continue Here — PDF.it Status Brief

**Last updated:** April 17, 2026 (end of day)
**Next session:** Sunday, April 19, 2026
**Read this first when resuming.**

---

## Where we are

PDF.it launches next week. All infrastructure is hardened, all 7 solo-builder priorities are complete, Phase 1 launch prep is done, email system is live, Spanish grammar is fixed, pricing is updated, brand guide is ready for marketing team.

**What's live and working:**
- 30+ PDF tools + 7 AI tools on pdf.it.com
- Kill switch on every tool (37 flags, Supabase)
- Rate limiting active (Upstash)
- Observability on all 16 tools → GA4
- 5-email drip sequence + welcome email on signup
- Unsubscribe page (CAN-SPAM compliant)
- Homepage newsletter signup (EN/ES/BR)
- Broadcast campaign endpoint ready
- Dashboard growth features (time saved, favorite tool, AI upsell banner)
- Cancel survey capturing reasons via Stripe webhook
- 5 scheduled remote triggers (daily health, weekly review, monthly churn, Stripe CLI, Year 2 pricing)
- 7 branded Supabase auth email templates
- Introductory pricing (Year 1 + Year 2+) on all 3 pricing pages
- Spanish grammar corrected across entire ES layer
- Brand guide PDF ready for marketing team

---

## 🔴 Paula's to-do list (before launch)

### Spam fix — CRITICAL (5 min)
Newsletter emails are landing in spam. This MUST be fixed before launch.
- [ ] Go to **Resend → Domains → pdf.it.com**
- [ ] Verify SPF, DKIM, and DMARC all show **green/verified**
- [ ] If any are pending → add the DNS records Resend shows you at your domain registrar
- [ ] Without this, all marketing emails go to spam. Blocks everything.

### Run SQL migration for broadcast campaigns
- [ ] Supabase SQL Editor → paste and run `scripts/012_newsletter_campaigns.sql`

### Save launch-day posts
- [ ] Copy the launch email + Product Hunt + LinkedIn + Reddit + Hacker News posts from April 16 chat into a Google Doc

---

## 🟡 Sunday priorities for Claude (April 19)

### Phase 2: Growth Engine — ready to build

**Priority 1: SEO article pipeline (highest leverage)**
Use the `/seo-article` skill to publish 3-5 `/learn/` articles targeting long-tail keywords where SmallPDF/iLovePDF don't rank. This is the #1 organic growth lever. Topics to start with:
- "how to compress PDF for email" (high search volume, Free tool funnel)
- "ATS resume checker free" (AI tool upsell)
- "PDF to Word without losing formatting" (Pro tool funnel)
- "how to merge PDF files" (Free tool funnel)
- "extract tables from PDF to Excel" (Business tool funnel)

**Priority 2: Comparison pages**
Create `/vs/smallpdf`, `/vs/ilovepdf`, `/vs/adobe-acrobat` (+ ES/BR equivalents). These target high-intent search traffic from people actively looking for alternatives. Each page should:
- Compare features side-by-side
- Highlight PDF.it™ advantages (privacy, AI tools, pricing)
- Include CTA to try tools + start free trial

**Priority 3: Industry landing pages**
Create `/for/lawyers`, `/for/accountants`, `/for/hr-teams`, `/for/students`, `/for/freelancers` (+ ES/BR). These are enterprise conversion pages tied to the workflow templates. Each should:
- Address industry-specific pain points
- Show relevant tools and workflows
- Include testimonial slots (fill when feedback comes in)
- CTA to Business/Enterprise plans

**Priority 4: Portuguese grammar audit**
Same sweep we did for Spanish — check all BR Portuguese for missing accents (ã, ç, é, ê, í, ó, ô, ú, à). The BR layer likely has similar issues.

### Phase 3: Retention (week 2+, after launch data comes in)
5. Weekly broadcast newsletter — first "Tool of the week" email after 100+ subscribers
6. Annual billing upsell — detect monthly subscribers, show "Save 17%" banner at month 3
7. Referral program — "Give 1 month free, get 1 month free" via Stripe coupons
8. Re-engagement emails — "We miss you" nudge after 30 days inactive

---

## Recurring reminders
- **Every morning ~8 AM PT:** daily health check email (automated)
- **Every Monday ~9 AM PT:** weekly review reminder (automated) → run `/weekly-review`
- **Every 1st of month ~9 AM PT:** monthly churn email (automated)
- **Before July 15, 2026:** `stripe login` to re-auth CLI
- **March 31, 2027:** Stripe Year 2 pricing transition (automated reminder)

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
| PDF.it-Guía-de-Marca.pdf | Brand guide for marketing team (Spanish) |
| lib/newsletter-emails.ts | Email templates (LinkSplasher style) |
| scripts/008-012 | Supabase migrations |

---

## Last commits

- `0b656ba` — Brand guide PDF: fix all remaining Spanish accents + regenerate
- `7372116` — Spanish accents sweep: ~100+ fixes across all ES layer
- `b21bb82` — Pricing: Year 1 intro + Year 2+ regular pricing (EN/ES/BR)
- `7152114` — Phase 1 launch prep: unsubscribe, homepage signup, broadcast mechanism
