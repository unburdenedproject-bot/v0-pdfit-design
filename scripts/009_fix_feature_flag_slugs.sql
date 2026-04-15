-- Amendment to 008: align feature flag slugs with actual /api/* directory names
-- so the isToolEnabled() lookup matches the API route path exactly.
--
-- Run AFTER 008 (idempotent — safe to re-run).

-- Remove slugs that don't correspond to a real API route.
DELETE FROM feature_flags WHERE tool_slug IN ('jpg-to-pdf', 'png-to-pdf', 'redact-pdf', 'esign-pdf');

-- Add slugs that were missing (all match /app/api/<slug>/route.ts directories).
INSERT INTO feature_flags (tool_slug) VALUES
  ('esign'),                        -- was seeded as 'esign-pdf' (fixed)
  ('pdf-redaction'),                -- was seeded as 'redact-pdf' (fixed)
  ('excel-to-pdf'),
  ('extract-images-from-pdf'),
  ('flatten-pdf'),
  ('generate-resume'),              -- backs /create-resume and /ats-optimizer's rewrite mode
  ('office-to-pdf'),
  ('powerpoint-to-pdf'),
  ('upload-ready-pdf')
ON CONFLICT (tool_slug) DO NOTHING;
