-- User feedback table for post-download testimonials
CREATE TABLE IF NOT EXISTS public.user_feedback (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  rating INT NOT NULL CHECK (rating >= 1 AND rating <= 5),
  quote TEXT,
  tool TEXT,
  name TEXT,
  role TEXT,
  approved BOOLEAN DEFAULT false,  -- Manual approval before showing on homepage
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE INDEX IF NOT EXISTS idx_feedback_rating ON user_feedback(rating DESC);
CREATE INDEX IF NOT EXISTS idx_feedback_approved ON user_feedback(approved, rating DESC);

-- Allow public inserts (feedback from anonymous users)
ALTER TABLE user_feedback ENABLE ROW LEVEL SECURITY;

CREATE POLICY "anyone_can_submit_feedback" ON user_feedback
  FOR INSERT WITH CHECK (true);

CREATE POLICY "approved_feedback_public" ON user_feedback
  FOR SELECT USING (approved = true);
