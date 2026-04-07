# PDF.it Backend Architecture Audit

**Date:** April 7, 2026
**Audited by:** 5 specialist agents (Security, Database, Performance, Reliability, Architecture)
**Overall Score: 4.5/10 — Works for launch, dangerous at scale**

---

## Scorecard

| Dimension | Score | Key Issue |
|-----------|-------|-----------|
| Security | 4/10 | Unauthenticated blob access, cookie-spoofable limits |
| Database Design | 5/10 | Missing indexes, race conditions, no audit trail |
| Error Handling | 4/10 | Webhook swallows failures, no retries |
| Performance | 5/10 | Memory buffering, no streaming, crashes at ~50 concurrent users |
| Code Organization | 5/10 | 3,300 LOC duplication, 67% untyped (.js) |
| Testing | 7/10 | Strong E2E (227 tests), weak unit tests |
| Observability | 3/10 | Console.log only, no structured logging |
| Scalability | 3/10 | Synchronous processing, no job queue |

---

## CRITICAL — Fix Before Launch

### [ ] 1. Blob Delete/Download Has No Authentication
- **Files:** `app/api/blob/delete/route.ts`, `app/api/download/[filename]/route.ts`
- **Issue:** Anyone can delete or download any user's files by guessing the blob URL
- **Risk:** Data breach, file loss, legal liability
- **Fix:** Add auth check + validate blob URL belongs to current user
- **Effort:** 1 hour

### [ ] 2. Webhook Returns 200 When DB Update Fails
- **File:** `app/api/webhook/route.ts` lines 93-104
- **Issue:** If Supabase is down, user pays but plan never updates. Webhook returns 200 so Stripe won't retry.
- **Risk:** Lost revenue, users stuck on free after paying
- **Fix:** Return 500 on DB error so Stripe retries
- **Effort:** 30 minutes

### [ ] 3. Newsletter Table Doesn't Exist
- **File:** `app/api/newsletter/route.ts` writes to `newsletter_subscribers` — table never created
- **Issue:** All signups silently fail but return "success"
- **Risk:** Zero newsletter subscribers being collected
- **Fix:** `CREATE TABLE newsletter_subscribers (email TEXT PRIMARY KEY, subscribed_at TIMESTAMPTZ DEFAULT NOW())`
- **Effort:** 10 minutes

### [ ] 4. Missing Database Index on stripe_customer_id
- **File:** `app/api/webhook/route.ts` line 184-188
- **Issue:** Webhook looks up users by `stripe_customer_id` — full table scan on every payment
- **Risk:** Slow payment processing, degrades with user count
- **Fix:** `CREATE INDEX idx_users_stripe_customer_id ON users(stripe_customer_id)`
- **Effort:** 10 minutes

### [ ] 5. CRON_SECRET Bypass When Not Set
- **Files:** `app/api/cron/trial-emails/route.ts`, `app/api/cron/seo-health/route.ts`
- **Issue:** If env var is empty, auth check is skipped entirely
- **Risk:** Anyone can trigger email blasts in dev/staging
- **Fix:** Fail if CRON_SECRET is not set, don't skip the check
- **Effort:** 15 minutes

---

## HIGH — Fix Within 2 Weeks

### [ ] 6. Usage Limits Bypassable (Race Condition + Cookie Spoofing)
- **File:** `lib/usage-check.ts` lines 68-89 (cookies) and 106-155 (race condition)
- **Issue:** Anonymous limit uses client-side cookie (clearable). Free user limit has read-modify-write race condition.
- **Risk:** Free tier abuse, lost revenue
- **Fix:** Atomic Postgres increment function + Upstash Redis for anonymous tracking
- **Effort:** 2 hours

### [ ] 7. Webhook Has No Idempotency Protection
- **File:** `app/api/webhook/route.ts`
- **Issue:** Stripe retries process the same event multiple times (duplicate welcome emails, duplicate DB writes)
- **Risk:** Duplicate emails, data inconsistency
- **Fix:** Store processed event IDs in `webhook_events` table, skip duplicates
- **Effort:** 3 hours

### [ ] 8. Orphaned Blob Files Never Cleaned Up
- **Files:** All API routes that upload to Vercel Blob
- **Issue:** If processing fails after upload, files remain in storage forever. No cleanup cron exists.
- **Risk:** Storage cost accumulation ($0.03/GB/month × thousands of files)
- **Fix:** try/finally cleanup in all routes + weekly cleanup cron for files >24h old
- **Effort:** 3 hours

### [ ] 9. No Retry Logic for External APIs
- **Files:** All iLoveAPI, CloudConvert, Document AI routes
- **Issue:** Transient API failures (timeout, 429, 502) immediately fail with no retry
- **Risk:** 100% user failure during any 5-minute API blip
- **Fix:** Exponential backoff with 3 retries
- **Effort:** 3 hours

### [ ] 10. Contact Form Has No Rate Limiting
- **File:** `app/api/contact/route.ts`
- **Issue:** No per-IP throttle. Attacker can spam thousands of messages.
- **Risk:** Database spam, storage costs
- **Fix:** Upstash Redis rate limit: 3 per hour per IP
- **Effort:** 1 hour

### [ ] 11. Memory Will Crash at ~50 Concurrent Users
- **Files:** All PDF processing routes
- **Issue:** Entire files buffered in memory (`Buffer.from(arrayBuffer())`), no streaming
- **Risk:** Vercel Pro 3GB limit = OOM at ~50 concurrent 25MB uploads
- **Fix:** Use Node.js streams instead of full-file buffering
- **Effort:** 4 hours

### [ ] 12. Missing Foreign Keys on usage_logs
- **File:** `scripts/004_create_usage_logs.sql`
- **Issue:** `usage_logs.user_id` has no REFERENCES constraint — orphaned records after user deletion
- **Fix:** `ALTER TABLE usage_logs ADD CONSTRAINT fk_usage_logs_user_id FOREIGN KEY (user_id) REFERENCES auth.users(id) ON DELETE CASCADE`
- **Effort:** 30 minutes

---

## MEDIUM — Fix Within First Month

### [ ] 13. CSRF Protection Missing on POST Endpoints
- **Files:** `/api/contact`, `/api/newsletter`, `/api/forgot-password`, `/api/create-checkout`
- **Issue:** No origin validation. Cross-site form submissions possible.
- **Fix:** Check `Origin` header matches your domain
- **Effort:** 2 hours

### [ ] 14. Error Messages Leak Internal Details
- **Files:** Multiple API routes
- **Issue:** Errors expose "CloudConvert job creation failed", "Document AI API error (403)"
- **Fix:** Generic user-facing errors, detailed server-side logging
- **Effort:** 3 hours

### [ ] 15. No Stripe-Supabase Reconciliation
- **Issue:** No way to detect when Stripe says "paid" but Supabase says "free"
- **Fix:** Weekly cron comparing Stripe subscriptions vs DB plans, emails Paula on mismatch
- **Effort:** 4 hours

### [ ] 16. Unvalidated Blob URL Fetch (Cross-User File Access)
- **Files:** All routes that fetch blobUrl from request body
- **Issue:** User A can pass User B's blob URL to any processing route
- **Fix:** Validate blob URL ownership before processing
- **Effort:** 3 hours

### [ ] 17. /tmp Directory Will Fill Up
- **Issue:** Vercel serverless shares 512MB /tmp. 20 concurrent 25MB uploads = full disk.
- **Fix:** Ensure all error paths unlink temp files, use auto-cleanup patterns
- **Effort:** 2 hours

### [ ] 18. SSRF Validation Fails Open on DNS Error
- **File:** `lib/url-validation.js` lines 111-113
- **Issue:** If DNS resolution fails, URL is allowed through instead of blocked
- **Fix:** Change catch block to return `{ valid: false }`
- **Effort:** 15 minutes

---

## LOWER PRIORITY — Month 2+

### [ ] 19. Extract Shared Utilities (Kill 3,300 LOC Duplication)
- **Issue:** `blobUrlToTmp()` copied 21 times, `errorResponse()` defined 48 times
- **Fix:** Create `lib/api/blob-handler.ts`, `lib/api/error-handler.ts`, API route factory
- **Effort:** 2 days

### [ ] 20. Convert .js API Routes to TypeScript
- **Issue:** 32 of 48 routes are untyped .js — no IDE support, no compile-time safety
- **Fix:** Rename + add types incrementally
- **Effort:** 3-5 days

### [ ] 21. GDPR Deletion Flow
- **Issue:** No mechanism to delete a user's files, usage logs, and contact messages on request
- **Fix:** Deletion request table + processing cron
- **Effort:** 4 hours

### [ ] 22. User Audit Trail
- **Issue:** No log of when/why a user's plan changed
- **Fix:** Postgres trigger that logs plan changes to `user_audit_log` table
- **Effort:** 3 hours

### [ ] 23. Enable Image Optimization
- **File:** `next.config.mjs` line 19: `images: { unoptimized: true }`
- **Issue:** Every image served at full resolution — kills mobile performance
- **Fix:** Set to `false` or remove the line
- **Effort:** 30 minutes

### [ ] 24. Usage Log Retention Policy
- **Issue:** `usage_logs` table grows indefinitely — millions of rows = slow queries
- **Fix:** Cron to archive/delete logs older than 30 days
- **Effort:** 2 hours

### [ ] 25. Webhook Event Deduplication Table
- **Fix:** `CREATE TABLE webhook_events (stripe_event_id TEXT PRIMARY KEY, event_type TEXT, processed_at TIMESTAMPTZ DEFAULT NOW())`
- **Effort:** 30 minutes (table creation, code change is part of #7)

### [ ] 26. Async Job Queue (Replace Synchronous Processing)
- **Issue:** All PDF processing is synchronous in serverless functions — can't scale past ~100 concurrent users
- **Fix:** Redis/BullMQ queue → worker processors (per INFRASTRUCTURE.md plan)
- **Effort:** 1 week

### [ ] 27. Per-User Rate Limiting (Not Per-IP)
- **File:** `middleware.ts` — current 100 req/min is IP-based
- **Issue:** Corporate VPN users all share one IP, all get blocked
- **Fix:** Rate limit by user ID for authenticated users, IP for anonymous
- **Effort:** 2 hours

### [ ] 28. Decompose Giant Components
- **Issue:** `processing-interface.tsx` is 1,501 lines. Top 4 components = 4,663 lines.
- **Fix:** Extract FileUploadZone, ProcessingErrorDialog, base interface
- **Effort:** 3 days

---

## What You Likely Don't Realize Yet

1. **Your rate limiting blocks office buildings.** 100 req/min per IP means one heavy user behind a corporate firewall blocks the entire office.

2. **You're paying triple for every PDF.** Upload to Blob → download by API → send to iLoveAPI = 3 network transfers of the same file.

3. **67% of your backend has zero type safety.** 32 of 48 API routes are .js — TypeScript bugs become production crashes.

4. **3,300 lines of copy-pasted code.** One bug fix in `blobUrlToTmp()` requires editing 21 files.

5. **Your /tmp will fill up at 20 concurrent users.** 512MB shared across all serverless functions.

6. **CloudConvert polling runs for 2 minutes.** URL-to-PDF polls 60 times × 2 seconds with no timeout guard.

7. **No GDPR deletion flow.** EU users can legally demand all their data deleted. You have no mechanism for it.

8. **Images are unoptimized.** `unoptimized: true` in config means every image served at full resolution on mobile.

9. **Upstash Redis is configured but barely used.** You have Redis credentials but only use it for middleware rate limiting — not caching, not session management, not job queues.

10. **There's no reconciliation between Stripe and your database.** If they disagree on a user's plan, nobody knows until the user complains.

---

## Estimated Total Fix Time

| Priority | Items | Effort |
|----------|-------|--------|
| Critical (launch week) | 5 items | ~2 hours |
| High (week 2) | 7 items | ~16 hours |
| Medium (month 1) | 6 items | ~14 hours |
| Lower (month 2+) | 10 items | ~12 days |
| **Total** | **28 items** | **~35 hours + 12 days** |

---

## Scalability Limits

| Concurrent Users | What Happens |
|-----------------|--------------|
| 1-50 | Works fine (current state) |
| 50-100 | Memory pressure, /tmp filling, some OOM errors |
| 100-500 | Supabase connection pool saturated, 40% failure rate |
| 500-1,000 | Rate limiter blocks legitimate users, cascading cold starts |
| 1,000+ | Complete infrastructure failure without job queue architecture |
