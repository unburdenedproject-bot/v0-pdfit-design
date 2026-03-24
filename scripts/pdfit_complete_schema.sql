-- =============================================
-- PDF.it — Complete Supabase Schema
-- Run this in the Supabase SQL Editor (new project)
-- =============================================

-- =============================================
-- 1. USERS TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  plan TEXT NOT NULL DEFAULT 'free'
    CONSTRAINT users_plan_check CHECK (plan IN ('free', 'pro', 'business', 'enterprise')),
  stripe_customer_id TEXT,
  stripe_subscription_id TEXT,
  cancel_at_period_end BOOLEAN DEFAULT false,
  current_period_end TIMESTAMPTZ,
  created_at TIMESTAMPTZ DEFAULT now(),
  updated_at TIMESTAMPTZ DEFAULT now()
);

ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_select_own" ON public.users
  FOR SELECT USING (auth.uid() = id);
CREATE POLICY "users_insert_own" ON public.users
  FOR INSERT WITH CHECK (auth.uid() = id);
CREATE POLICY "users_update_own" ON public.users
  FOR UPDATE USING (auth.uid() = id);

-- Auto-create user row on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS trigger
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.users (id, email, plan)
  VALUES (new.id, new.email, 'free')
  ON CONFLICT (id) DO NOTHING;
  RETURN new;
END;
$$;

DROP TRIGGER IF EXISTS on_auth_user_created ON auth.users;
CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW
  EXECUTE FUNCTION public.handle_new_user();

-- =============================================
-- 2. USAGE TABLE (daily conversion counts)
-- =============================================
CREATE TABLE IF NOT EXISTS public.usage (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, date)
);

ALTER TABLE public.usage ENABLE ROW LEVEL SECURITY;

CREATE POLICY "usage_select_own" ON public.usage
  FOR SELECT USING (auth.uid() = user_id);
CREATE POLICY "usage_insert_own" ON public.usage
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "usage_update_own" ON public.usage
  FOR UPDATE USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_usage_user_date
  ON public.usage (user_id, date);

-- =============================================
-- 3. USAGE_LOGS TABLE (per-attempt logging)
-- =============================================
CREATE TABLE IF NOT EXISTS public.usage_logs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL,
  tool TEXT NOT NULL,
  allowed BOOLEAN NOT NULL DEFAULT true,
  block_reason TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.usage_logs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "usage_logs_select_own" ON public.usage_logs
  FOR SELECT USING (auth.uid() = user_id);

CREATE INDEX IF NOT EXISTS idx_usage_logs_user_created
  ON public.usage_logs (user_id, created_at DESC);

-- =============================================
-- 4. CONTACT_MESSAGES TABLE
-- =============================================
CREATE TABLE IF NOT EXISTS public.contact_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  subject TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

-- No SELECT policy — only readable via service role (admin)
-- Allow anonymous inserts from the contact form API
CREATE POLICY "contact_messages_insert" ON public.contact_messages
  FOR INSERT WITH CHECK (true);
