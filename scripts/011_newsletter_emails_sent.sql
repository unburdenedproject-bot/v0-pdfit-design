-- Tracks which automated emails have been sent to each newsletter subscriber.
-- Prevents duplicate sends when the drip cron runs daily.
--
-- Each row = one email sent to one subscriber. The cron checks this table
-- before sending to avoid double-sending.

CREATE TABLE IF NOT EXISTS public.newsletter_emails_sent (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  subscriber_email TEXT NOT NULL,
  email_slug TEXT NOT NULL,            -- e.g. "welcome", "day3_nudge", "day7_ai_tools", "day14_upgrade"
  sent_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
  UNIQUE(subscriber_email, email_slug) -- One of each email type per subscriber
);

CREATE INDEX IF NOT EXISTS idx_newsletter_sent_email ON newsletter_emails_sent(subscriber_email);

ALTER TABLE newsletter_emails_sent ENABLE ROW LEVEL SECURITY;
-- No public policies — service role only (cron + API routes)
