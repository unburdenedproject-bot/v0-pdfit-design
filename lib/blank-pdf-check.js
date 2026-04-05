/**
 * Checks if a PDF file is visually blank (no text, no images, no visible content).
 * Uses pdfjs-dist operator list (pure JS, no native deps) to inspect each page.
 * Returns { blank: true } if blank, { blank: false } if content found.
 */
export async function isBlankPdf(pdfBytes) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.js");
  pdfjsLib.GlobalWorkerOptions.workerSrc = "";

  const doc = await pdfjsLib.getDocument({
    data: new Uint8Array(pdfBytes),
    disableFontFace: true,
    isEvalSupported: false,
  }).promise;

  if (doc.numPages === 0) {
    doc.destroy();
    return { blank: true };
  }

  const OPS = pdfjsLib.OPS;
  const VISIBLE_OPS = new Set([
    OPS.showText,
    OPS.showSpacedText,
    OPS.paintImageXObject,
    OPS.paintInlineImageXObject,
    OPS.paintInlineImageXObjectGroup,
    OPS.paintJpegXObject,
    OPS.paintFormXObjectBegin,
  ]);

  for (let i = 1; i <= doc.numPages; i++) {
    const page = await doc.getPage(i);
    const opList = await page.getOperatorList();
    const textContent = await page.getTextContent();
    const pageText = textContent.items
      .map((item) => ("str" in item ? item.str : ""))
      .join("")
      .trim();

    let visibleOpCount = 0;
    for (const fn of opList.fnArray) {
      if (VISIBLE_OPS.has(fn)) {
        visibleOpCount++;
      }
    }

    if (pageText.length > 0 || visibleOpCount > 0) {
      page.cleanup();
      doc.destroy();
      return { blank: false };
    }
    page.cleanup();
  }

  doc.destroy();
  return { blank: true };
}
