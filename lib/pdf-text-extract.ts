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
    const pdfjsText = pieces.join("\n\n").trim();
    if (pdfjsText.length >= 50) {
      return pdfjsText;
    }
  } catch (err) {
    console.error("[pdf-text-extract] pdfjs-dist fallback failed:", err);
  }

  // 3) Google Document AI — last-resort paid fallback. Handles PDFs with
  //    custom fonts or scanned pages that neither iLoveAPI nor pdfjs can
  //    parse on serverless. ~$0.03/page.
  try {
    const text = await extractViaDocumentAi(buffer);
    if (text && text.length >= 50) {
      return text;
    }
  } catch (err) {
    console.error("[pdf-text-extract] Document AI fallback failed:", err);
  }

  return "";
}

async function extractViaDocumentAi(buffer: Buffer): Promise<string> {
  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID;
  const location = process.env.GOOGLE_CLOUD_LOCATION || "us";
  const processorId = process.env.GOOGLE_CLOUD_PROCESSOR_ID;
  const clientEmail = process.env.GOOGLE_CLOUD_CLIENT_EMAIL;
  const privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, "\n");

  if (!projectId || !processorId || !clientEmail || !privateKey) {
    console.error("[pdf-text-extract] Document AI env vars missing");
    return "";
  }

  const crypto = await import("crypto");
  const now = Math.floor(Date.now() / 1000);
  const header = { alg: "RS256", typ: "JWT" };
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  };
  const encode = (obj: object) => Buffer.from(JSON.stringify(obj)).toString("base64url");
  const unsignedToken = `${encode(header)}.${encode(payload)}`;
  const sign = crypto.createSign("RSA-SHA256");
  sign.update(unsignedToken);
  const signature = sign.sign(privateKey, "base64url");
  const jwt = `${unsignedToken}.${signature}`;

  const tokenRes = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  });
  if (!tokenRes.ok) {
    throw new Error(`Document AI auth failed: ${await tokenRes.text()}`);
  }
  const { access_token } = await tokenRes.json();

  const endpoint = `https://${location}-documentai.googleapis.com/v1/projects/${projectId}/locations/${location}/processors/${processorId}:process`;
  const res = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${access_token}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rawDocument: {
        content: buffer.toString("base64"),
        mimeType: "application/pdf",
      },
    }),
  });

  if (!res.ok) {
    throw new Error(`Document AI call failed ${res.status}: ${await res.text()}`);
  }
  const data = await res.json();
  return String(data?.document?.text || "").trim();
}
