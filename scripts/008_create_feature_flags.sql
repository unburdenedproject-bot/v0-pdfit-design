-- Feature flags: kill switch per tool.
-- Paula can disable a tool instantly (no code deploy) by flipping `enabled` in
-- Supabase dashboard. Clients render a premium "temporarily unavailable" card
-- instead of the red error, so users churn less during upstream outages.

CREATE TABLE IF NOT EXISTS public.feature_flags (
  tool_slug TEXT PRIMARY KEY,
  enabled BOOLEAN NOT NULL DEFAULT true,
  disabled_message TEXT,  -- User-facing message when enabled=false. NULL = use default.
  reason TEXT,            -- Internal note for Paula: why was it disabled? (e.g. "iLoveAPI outage")
  updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_feature_flags_enabled ON feature_flags(tool_slug) WHERE enabled = false;

-- Seed every tool so they appear in the dashboard and Paula can toggle without inserting rows.
INSERT INTO feature_flags (tool_slug) VALUES
  ('compress-pdf'),
  ('merge-pdf'),
  ('split-pdf'),
  ('rotate-pdf'),
  ('protect-pdf'),
  ('unlock-pdf'),
  ('watermark-pdf'),
  ('pdf-to-jpg'),
  ('pdf-to-png'),
  ('pdf-to-word'),
  ('pdf-to-excel'),
  ('pdf-to-powerpoint'),
  ('pdf-to-txt'),
  ('jpg-to-pdf'),
  ('png-to-pdf'),
  ('image-to-pdf'),
  ('ocr-pdf'),
  ('qr-code'),
  ('url-to-pdf'),
  ('phone-scan-cleanup'),
  ('redact-pdf'),
  ('esign-pdf'),
  ('pdf-compare'),
  ('workflow'),
  ('ats-optimizer'),
  ('create-resume'),
  ('chat-with-pdf'),
  ('pdf-summarizer'),
  ('translate-pdf'),
  ('smart-extraction'),
  ('table-extraction'),
  ('question-generator')
ON CONFLICT (tool_slug) DO NOTHING;

-- Row-level security: flags are read by anonymous clients, written by Paula only via dashboard.
ALTER TABLE feature_flags ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_read_flags" ON feature_flags
  FOR SELECT USING (true);

-- No INSERT/UPDATE/DELETE policy for public — only service role + dashboard can modify.
