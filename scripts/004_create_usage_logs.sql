-- Create usage_logs table for per-attempt logging
CREATE TABLE IF NOT EXISTS usage_logs (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  tool text NOT NULL,
  allowed boolean NOT NULL DEFAULT true,
  block_reason text,
  created_at timestamptz NOT NULL DEFAULT now()
);

-- Index for querying by user + time (admin page)
CREATE INDEX IF NOT EXISTS idx_usage_logs_user_created
  ON usage_logs (user_id, created_at DESC);
