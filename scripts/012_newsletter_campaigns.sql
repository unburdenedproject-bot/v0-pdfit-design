-- Newsletter campaigns: Paula writes a subject + body in this table,
-- then triggers /api/send-broadcast to send it to all subscribers at once.
--
-- Usage:
--   1. Supabase Table Editor → newsletter_campaigns → insert a row
--   2. Set subject, body_html (use the branded template), status = 'draft'
--   3. When ready, call POST /api/send-broadcast with the campaign ID
--   4. Status flips to 'sending' then 'sent' with a count

CREATE TABLE IF NOT EXISTS public.newsletter_campaigns (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subject TEXT NOT NULL,
  body_html TEXT NOT NULL,             -- Full HTML email body (use emailWrapper from newsletter-emails.ts as reference)
  status TEXT NOT NULL DEFAULT 'draft', -- draft | sending | sent | failed
  sent_count INT DEFAULT 0,
  error_count INT DEFAULT 0,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  sent_at TIMESTAMPTZ
);

ALTER TABLE newsletter_campaigns ENABLE ROW LEVEL SECURITY;
-- No public policies — service role only (Paula via dashboard + API route)
