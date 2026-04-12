/**
 * Shared pre-AI validation for extracted PDF text.
 *
 * Protects paid AI endpoints (summarizer, translator, smart-extraction,
 * chat-with-pdf, question-generator, ats-optimizer) from processing raw PDF
 * binary, metadata strings, or image-stream dictionary data that survived
 * the ASCII-strip fallback. Without this guard, the model "summarizes"
 * strings like "/Creator /Producer /DCTDecode endstream" for blank or
 * image-only PDFs.
 */

// PDF dictionary keys and stream markers commonly found when raw binary
// is coerced to UTF-8. If these appear, the "text" is really PDF internals.
const PDF_STREAM_PATTERN =
  /\b(stream|endstream|xref|startxref|endobj|\/Filter|\/ColorSpace|\/DCTDecode|\/FlateDecode|\/ICCBased|\/Length\s|MuPDF|obj\s*<<)\b/;

// Metadata dictionary entries that get picked up from even truly-blank PDFs
// that still have an Info dictionary (Adobe/DOJ/Office creator tags, etc.).
const PDF_METADATA_PATTERN =
  /\/(Creator|Producer|Author|Title|Subject|Keywords|ModDate|CreationDate|Trapped|PTEX|PDFKit|PTEX\.Fullbanner)[^\n]*/gi;

// Minimum meaningful character count AFTER sanitization. 50 was too permissive
// (a single "/Creator (Microsoft Word 2019)" string is ~33 chars and a handful
// of metadata entries cleared the old gate).
const MIN_CONTENT_CHARS = 150;

// Minimum number of word-like tokens. Binary-as-text produces mostly spaces
// plus short dictionary tokens — real documents have many multi-letter words.
const MIN_WORD_TOKENS = 20;

export interface ContentGuardResult {
  ok: boolean;
  sanitized: string;
  reason?: "empty" | "image_only" | "binary_stream" | "metadata_only";
  userMessage?: string;
}

/**
 * Sanitize extracted text and determine whether it's safe to send to an AI.
 *
 * Returns `ok: false` with a specific reason + user-facing message when the
 * text is empty, metadata-only, or contains PDF stream artifacts. Callers
 * should return an HTTP error using `userMessage` rather than forward to AI.
 */
export function guardPdfContent(rawText: string | null | undefined): ContentGuardResult {
  if (!rawText || typeof rawText !== "string") {
    return {
      ok: false,
      sanitized: "",
      reason: "empty",
      userMessage: "This PDF appears to be empty. Please upload a PDF with readable text.",
    };
  }

  // Reject early if raw text contains PDF stream/structure tokens.
  if (PDF_STREAM_PATTERN.test(rawText)) {
    return {
      ok: false,
      sanitized: "",
      reason: "binary_stream",
      userMessage:
        "This PDF contains only images or scanned pages with no readable text. Please run OCR first, then try again.",
    };
  }

  // Strip PDF metadata dictionary entries.
  let cleaned = rawText.replace(PDF_METADATA_PATTERN, "");

  // Collapse long runs of whitespace produced by the ASCII-strip fallback.
  cleaned = cleaned.replace(/\s{10,}/g, " ").trim();

  if (cleaned.length < MIN_CONTENT_CHARS) {
    return {
      ok: false,
      sanitized: cleaned,
      reason: cleaned.length === 0 ? "empty" : "metadata_only",
      userMessage: "This PDF doesn't contain enough readable text. Please upload a PDF with actual content.",
    };
  }

  // Word-density check: reject mostly-junk strings.
  const wordTokens = cleaned.match(/\b[a-zA-Z]{3,}\b/g) || [];
  if (wordTokens.length < MIN_WORD_TOKENS) {
    return {
      ok: false,
      sanitized: cleaned,
      reason: "image_only",
      userMessage:
        "This PDF appears to contain only images and no readable text. Please run OCR first, then try again.",
    };
  }

  return { ok: true, sanitized: cleaned };
}
