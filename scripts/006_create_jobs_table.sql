-- Job queue table for async PDF processing
-- Phase 1 of infrastructure migration (INFRASTRUCTURE.md)

CREATE TABLE IF NOT EXISTS public.processing_jobs (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
  tool TEXT NOT NULL,
  status TEXT NOT NULL DEFAULT 'pending',  -- pending, processing, completed, failed
  input_blob_url TEXT,
  input_params JSONB DEFAULT '{}',
  output_blob_url TEXT,
  output_filename TEXT,
  error_message TEXT,
  progress INT DEFAULT 0,  -- 0-100
  priority INT DEFAULT 0,  -- 0=free, 1=pro, 2=business, 3=enterprise
  attempts INT DEFAULT 0,
  max_attempts INT DEFAULT 3,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  started_at TIMESTAMPTZ,
  completed_at TIMESTAMPTZ,
  expires_at TIMESTAMPTZ DEFAULT (NOW() + INTERVAL '1 hour')
);

-- Indexes for common queries
CREATE INDEX IF NOT EXISTS idx_jobs_status ON processing_jobs(status);
CREATE INDEX IF NOT EXISTS idx_jobs_user_id ON processing_jobs(user_id);
CREATE INDEX IF NOT EXISTS idx_jobs_created_at ON processing_jobs(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_jobs_priority_status ON processing_jobs(priority DESC, status, created_at);

-- Auto-cleanup: jobs older than 24 hours
-- (handled by cleanup cron, not DB trigger)

-- RLS: users can only see their own jobs
ALTER TABLE processing_jobs ENABLE ROW LEVEL SECURITY;

CREATE POLICY "users_read_own_jobs" ON processing_jobs
  FOR SELECT USING (user_id = auth.uid());

CREATE POLICY "service_role_all" ON processing_jobs
  FOR ALL USING (true)
  WITH CHECK (true);
