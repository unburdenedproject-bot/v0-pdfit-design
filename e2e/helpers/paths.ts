import { join } from "path";

/** Single source of truth for fixture file paths */
export const FIXTURES_DIR = join(__dirname, "..", "fixtures", "sample-files");

/** Get the absolute path to a test fixture file */
export function fixturePath(filename: string): string {
  return join(FIXTURES_DIR, filename);
}
