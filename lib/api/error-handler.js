/**
 * Regex to detect service-internal names that should not leak to users.
 */
const SERVICE_NAME_RE = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i;

/**
 * Sanitize an error message so internal service names are never exposed.
 */
export function sanitizeError(raw) {
  if (!raw || typeof raw !== "string") return "An unexpected error occurred.";
  if (SERVICE_NAME_RE.test(raw)) {
    return "An error occurred while processing your file. Please try again.";
  }
  return raw;
}

/**
 * Return a JSON error Response with optional status code.
 * Sanitizes the message to avoid leaking service names.
 */
export function errorResponse(message, status = 500) {
  const safeMessage = sanitizeError(message);
  return Response.json({ error: safeMessage }, { status });
}

/**
 * Extract a safe error message from a caught error object.
 * Use in catch blocks: `return errorResponse(safeMessageFrom(err), 500)`
 */
export function safeMessageFrom(err) {
  const raw = err && typeof err === "object" && err.message ? err.message : "";
  return sanitizeError(raw);
}
