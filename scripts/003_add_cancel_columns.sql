-- Add cancellation tracking columns to users table
ALTER TABLE users ADD COLUMN IF NOT EXISTS cancel_at_period_end boolean DEFAULT false;
ALTER TABLE users ADD COLUMN IF NOT EXISTS current_period_end timestamptz NULL;
