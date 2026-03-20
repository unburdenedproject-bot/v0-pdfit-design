CREATE TABLE IF NOT EXISTS esign_signatures (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  kind text NOT NULL CHECK (kind IN ('signature', 'initials')),
  method text NOT NULL CHECK (method IN ('typed', 'drawn', 'uploaded')),
  asset_url text NOT NULL,
  preview_url text,
  asset_mime text NOT NULL,
  width integer NOT NULL,
  height integer NOT NULL,
  aspect_ratio numeric NOT NULL,
  color text,
  font_family text,
  stroke_width numeric,
  svg_markup text,
  consented_at timestamptz NOT NULL DEFAULT now(),
  metadata jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS idx_esign_signatures_user_updated
  ON esign_signatures (user_id, updated_at DESC);

ALTER TABLE esign_signatures ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "Users can view own signatures" ON esign_signatures;
CREATE POLICY "Users can view own signatures"
  ON esign_signatures FOR SELECT
  USING (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can insert own signatures" ON esign_signatures;
CREATE POLICY "Users can insert own signatures"
  ON esign_signatures FOR INSERT
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can update own signatures" ON esign_signatures;
CREATE POLICY "Users can update own signatures"
  ON esign_signatures FOR UPDATE
  USING (auth.uid() = user_id)
  WITH CHECK (auth.uid() = user_id);

DROP POLICY IF EXISTS "Users can delete own signatures" ON esign_signatures;
CREATE POLICY "Users can delete own signatures"
  ON esign_signatures FOR DELETE
  USING (auth.uid() = user_id);

CREATE OR REPLACE FUNCTION set_esign_signatures_updated_at()
RETURNS trigger AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

DROP TRIGGER IF EXISTS trg_esign_signatures_updated_at ON esign_signatures;
CREATE TRIGGER trg_esign_signatures_updated_at
BEFORE UPDATE ON esign_signatures
FOR EACH ROW EXECUTE FUNCTION set_esign_signatures_updated_at();
