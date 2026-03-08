-- Create usage table for tracking daily conversion counts (atomic upsert pattern)
CREATE TABLE IF NOT EXISTS public.usage (
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  date DATE NOT NULL DEFAULT CURRENT_DATE,
  count INTEGER NOT NULL DEFAULT 0,
  PRIMARY KEY (user_id, date)
);

ALTER TABLE public.usage ENABLE ROW LEVEL SECURITY;

-- Users can read their own usage
CREATE POLICY "usage_select_own" ON public.usage
  FOR SELECT USING (auth.uid() = user_id);

-- Service role key handles inserts/updates (bypasses RLS),
-- but add insert/update policies for safety
CREATE POLICY "usage_insert_own" ON public.usage
  FOR INSERT WITH CHECK (auth.uid() = user_id);
CREATE POLICY "usage_update_own" ON public.usage
  FOR UPDATE USING (auth.uid() = user_id);

-- Index for fast lookups by user + date
CREATE INDEX IF NOT EXISTS idx_usage_user_date
  ON public.usage (user_id, date);
