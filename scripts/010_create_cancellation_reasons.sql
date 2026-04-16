-- Cancellation reasons: captures WHY users cancel, so Paula can fix the top reasons
-- instead of guessing at churn drivers.
--
-- Flow:
--   1. User clicks "Cancel" in Stripe Customer Portal
--   2. Stripe portal prompts for a reason (configured in Stripe dashboard — Settings → Billing → Customer Portal → Cancellations)
--   3. Stripe webhook `customer.subscription.updated` (cancel_at_period_end=true) fires
--   4. Webhook handler reads cancellation_reason from the subscription metadata and inserts a row here
--
-- Row is immutable after insert. Paula queries this monthly to see why people leave.

CREATE TABLE IF NOT EXISTS public.cancellation_reasons (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  stripe_event_id TEXT UNIQUE,      -- Natural dedupe key — Stripe webhook event ID
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  plan_at_cancellation TEXT,        -- "pro" | "business" | "enterprise"
  reason_code TEXT,                 -- Stripe's predefined codes: customer_service, low_quality, missing_features, switched_service, too_complex, too_expensive, unused, other
  reason_comment TEXT,              -- Free-text comment if user provided one
  cancelled_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_cancellation_reasons_cancelled_at ON cancellation_reasons(cancelled_at DESC);
CREATE INDEX IF NOT EXISTS idx_cancellation_reasons_reason_code ON cancellation_reasons(reason_code);

-- RLS: only the service role (webhook handler) can write. Paula reads via dashboard UI.
ALTER TABLE cancellation_reasons ENABLE ROW LEVEL SECURITY;

-- No public SELECT/INSERT policies — service role bypasses RLS automatically.
-- Paula can query this table from the Supabase Table Editor or SQL Editor (she's logged in as service role there).
