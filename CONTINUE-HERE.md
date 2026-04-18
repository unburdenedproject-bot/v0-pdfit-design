# Continue Here — PDF.it Status Brief

**Last updated:** April 19, 2026 (end of day, Sunday)
**Next session:** Monday, April 20, 2026 (or whenever Paula resumes)
**Read this first when resuming.**

---

## Where we are

PDF.it launches Wednesday April 22, 2026. All infrastructure is hardened. Phase 1 launch prep is complete. Newsletter system is live. Spanish grammar is fixed. Pricing is updated. Brand guide is ready for marketing team.

**Sunday April 19 progress (Phase 2 Growth Engine kickoff):**
- ✅ Priority 1: 5 long-tail SEO articles shipped (`/learn/pdf-still-too-large-after-compression`, `/learn/protect-pdf-vs-watermark`, `/learn/why-qr-code-not-scanning`, `/learn/make-scanned-pdf-searchable`, `/learn/rotate-one-page-in-pdf`)
- ✅ Priority 3: 9 industry landing pages shipped (`/for/lawyers`, `/for/accountants`, `/for/hr-teams` × EN/ES/BR)
- ✅ Bonus: "For" / "Para" dropdown added to header (EN/ES/BR), desktop + mobile

**What's live and working:**
- 30+ PDF tools + 7 AI tools on pdf.it.com
- 9 industry landing pages surfaced via header "For" dropdown
- 87 long-tail /learn/ articles (was 82)
- Kill switch on every tool (37 flags, Supabase)
- Rate limiting active (Upstash)
- Observability on all 16 tools → GA4
- 5-email drip sequence + welcome email on signup
- Unsubscribe page (CAN-SPAM compliant)
- Homepage newsletter signup (EN/ES/BR)
- Broadcast campaign endpoint ready
- Dashboard growth features (time saved, favorite tool, AI upsell banner)
- Cancel survey capturing reasons via Stripe webhook
- 5 scheduled remote triggers
- 7 branded Supabase auth email templates
- Introductory pricing (Year 1 + Year 2+) on all 3 pricing pages
- Spanish grammar corrected across entire ES layer
- Brand guide PDF ready for marketing team

---

## 🔴 Paula's to-do list (before launch Wednesday)

### Spam fix — CRITICAL (5 min)
Newsletter emails are landing in spam. This MUST be fixed before launch.
- [ ] Go to **Resend → Domains → pdf.it.com**
- [ ] Verify SPF, DKIM, and DMARC all show **green/verified**
- [ ] If any are pending → add the DNS records Resend shows you at your domain registrar
- [ ] Without this, all marketing emails go to spam. Blocks everything.

### Save launch-day posts
- [ ] Copy the launch email + Product Hunt + LinkedIn + Reddit + Hacker News posts from April 16 chat into a Google Doc

---

## 🟡 Next session priorities for Claude

### Phase 2: Growth Engine — remaining items

**Priority 1: Comparison pages (next highest leverage)**
Create `/vs/smallpdf`, `/vs/ilovepdf`, `/vs/adobe-acrobat` (+ ES/BR equivalents). High-intent search traffic from people actively looking for alternatives. Each page should:
- Compare features side-by-side
- Highlight PDF.it™ advantages (privacy, AI tools, pricing)
- Include CTA to try tools + start free trial

**Priority 2: Activate weekly newsletter**
- Run `scripts/012_newsletter_campaigns.sql` in Supabase
- Test by sending Week 1 email ("Tool of the Week: Compress PDF") via `/send-newsletter`
- 6 pre-written weekly emails ready in `lib/weekly-newsletters.ts` — one per week for first 6 weeks

**Priority 3: Portuguese grammar audit**
Same sweep we did for Spanish — check all BR Portuguese for missing accents (ã, ç, é, ê, í, ó, ô, ú, à). The BR layer likely has similar issues.

**Priority 4: More long-tail SEO articles**
Plenty of gaps still in LONG-TAIL-PAGES.md:
- `/learn/url-to-qr-code`
- `/learn/ocr-receipts-and-invoices`
- `/learn/when-to-use-ocr-vs-pdf-to-txt`
- `/learn/reduce-pdf-size-for-upload`
- `/learn/qr-code-size-for-printing`

**Priority 5: 2 more industry pages**
- `/for/students` and `/for/freelancers` (EN/ES/BR each = 6 more pages). Same pattern as the 3 we shipped Sunday.

### Phase 3: Retention (week 2+, after launch data comes in)
- Weekly broadcast newsletter — first "Tool of the week" email after 100+ subscribers
- Annual billing upsell — detect monthly subscribers, show "Save 17%" banner at month 3
- Referral program — "Give 1 month free, get 1 month free" via Stripe coupons
- Re-engagement emails — "We miss you" nudge after 30 days inactive

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

- `b1df669` — Add "For" dropdown to header (EN/ES/BR)
- `f05df78` — Add 3 industry landing pages (/for/lawyers, /for/accountants, /for/hr-teams) in EN/ES/BR + 5 long-tail SEO articles
- `b2c0e7a` — CONTINUE-HERE: move newsletter activation + SQL migration to Sunday priorities
- `f170a2e` — Newsletter ready to send: 6 pre-written weekly Tool of the Week templates
