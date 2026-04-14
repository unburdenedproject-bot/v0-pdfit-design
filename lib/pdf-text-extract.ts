/**
 * Serverless-safe PDF text extraction fallback.
 *
 * Used by AI routes (question-generator, chat-with-pdf, ats-optimizer,
 * pdf-summarizer) when iLoveAPI's extract tool returns 400 on a PDF that
 * actually has real selectable text.
 *
 * Strategy:
 *   1. pdf-parse@2 proper API (`new PDFParse({ data }).getText()`).
 *      The old `pdf-parse/lib/pdf-parse.js` default export does NOT exist
 *      in v2 — that path returns `ERR_PACKAGE_PATH_NOT_EXPORTED` and was
 *      producing empty text on Vercel.
 *   2. pdfjs-dist legacy build, iterating pages with `getTextContent()`.
 *      `serverComponentsExternalPackages: ['pdfjs-dist']` in next.config
 *      keeps the worker resolvable on Vercel. We set `workerSrc = ""` and
 *      `useWorkerFetch: false` to avoid the "Cannot find module
 *      './pdf.worker.js'" error on serverless.
 *
 * Both libs are already in package.json; no new deps.
 */

export async function extractPdfText(buffer: Buffer): Promise<string> {
  // 1) pdf-parse v2 (self-contained bundle, ships its own pdfjs+worker)
  try {
    const mod: any = await import("pdf-parse");
    const PDFParse = mod.PDFParse || mod.default?.PDFParse || mod.default;
    if (PDFParse) {
      const parser = new PDFParse({ data: new Uint8Array(buffer) });
      try {
        const result = await parser.getText();
        const text = String(result?.text || "").trim();
        if (text.length >= 50) {
          return text;
        }
      } finally {
        try { await parser.destroy(); } catch {}
      }
    }
  } catch (err) {
    console.error("[pdf-text-extract] pdf-parse v2 failed:", err);
  }

  // 2) pdfjs-dist direct — same entry point that blank-pdf-check.js uses
  try {
    const pdfjsLib: any = await import("pdfjs-dist/legacy/build/pdf.js");
    if (pdfjsLib?.GlobalWorkerOptions) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = "";
    }
    const doc = await pdfjsLib.getDocument({
      data: new Uint8Array(buffer),
      disableFontFace: true,
      isEvalSupported: false,
      useWorkerFetch: false,
      useSystemFonts: false,
    }).promise;

    const pieces: string[] = [];
    for (let i = 1; i <= doc.numPages; i++) {
      const page = await doc.getPage(i);
      const content = await page.getTextContent();
      const pageText = (content.items || [])
        .map((item: any) => ("str" in item ? item.str : ""))
        .join(" ")
        .replace(/\s+/g, " ")
        .trim();
      if (pageText) pieces.push(pageText);
      page.cleanup();
    }
    doc.destroy();
    return pieces.join("\n\n").trim();
  } catch (err) {
    console.error("[pdf-text-extract] pdfjs-dist fallback failed:", err);
  }

  return "";
}
