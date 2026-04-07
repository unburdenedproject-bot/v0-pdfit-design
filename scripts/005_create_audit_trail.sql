-- ============================================================
-- 005_create_audit_trail.sql
-- User audit trail: logs plan and billing column changes
-- Run this in Supabase SQL Editor (single execution)
-- ============================================================

-- 1. Create the audit log table
CREATE TABLE IF NOT EXISTS public.user_audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  changed_column TEXT NOT NULL,
  old_value TEXT,
  new_value TEXT,
  changed_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. Indexes for fast lookups
CREATE INDEX IF NOT EXISTS idx_user_audit_user_id
  ON public.user_audit_log(user_id);

CREATE INDEX IF NOT EXISTS idx_user_audit_changed_at
  ON public.user_audit_log(changed_at DESC);

-- 3. Trigger function: fires after every UPDATE on users
--    Logs changes to plan, stripe_customer_id,
--    stripe_subscription_id, and cancel_at_period_end.
--    Each changed column produces its own audit row.
CREATE OR REPLACE FUNCTION public.audit_user_changes()
RETURNS TRIGGER AS $$
BEGIN
  -- plan changed
  IF OLD.plan IS DISTINCT FROM NEW.plan THEN
    INSERT INTO public.user_audit_log (user_id, changed_column, old_value, new_value)
    VALUES (NEW.id, 'plan', OLD.plan, NEW.plan);
  END IF;

  -- stripe_customer_id changed
  IF OLD.stripe_customer_id IS DISTINCT FROM NEW.stripe_customer_id THEN
    INSERT INTO public.user_audit_log (user_id, changed_column, old_value, new_value)
    VALUES (NEW.id, 'stripe_customer_id', OLD.stripe_customer_id, NEW.stripe_customer_id);
  END IF;

  -- stripe_subscription_id changed
  IF OLD.stripe_subscription_id IS DISTINCT FROM NEW.stripe_subscription_id THEN
    INSERT INTO public.user_audit_log (user_id, changed_column, old_value, new_value)
    VALUES (NEW.id, 'stripe_subscription_id', OLD.stripe_subscription_id, NEW.stripe_subscription_id);
  END IF;

  -- cancel_at_period_end changed
  IF OLD.cancel_at_period_end IS DISTINCT FROM NEW.cancel_at_period_end THEN
    INSERT INTO public.user_audit_log (user_id, changed_column, old_value, new_value)
    VALUES (NEW.id, 'cancel_at_period_end', OLD.cancel_at_period_end::TEXT, NEW.cancel_at_period_end::TEXT);
  END IF;

  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- 4. Attach the trigger to the users table
--    DROP first so re-running this script is safe
DROP TRIGGER IF EXISTS users_audit_trigger ON public.users;

CREATE TRIGGER users_audit_trigger
  AFTER UPDATE ON public.users
  FOR EACH ROW
  EXECUTE FUNCTION public.audit_user_changes();

-- 5. Row Level Security: users can only read their own audit rows
ALTER TABLE public.user_audit_log ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "users_can_read_own_audit" ON public.user_audit_log;

CREATE POLICY "users_can_read_own_audit"
  ON public.user_audit_log
  FOR SELECT
  USING (user_id = auth.uid());
