export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    throw new Error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
  }

  let name = "input.pdf";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      name = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default name
  }

  const buffer = Buffer.from(await res.arrayBuffer());
  const id = randomUUID();
  const tmpPath = join("/tmp", `${id}-${name}`);
  await writeFile(tmpPath, buffer);
  return { tmpPath, name };
}

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  let tmpPath = null;
  let uploadedBlobUrl = null;

  try {
    // Usage check: auth + daily limit
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("unlock-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("Missing ILOVEAPI keys", 500);
    }

    // -----------------------------------------------------------
    // Detect request type: JSON (blob URL) or multipart (file)
    // -----------------------------------------------------------
    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";
    let password = "";

    if (isJson) {
      // ---- JSON path: { blobUrl, password } ----
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }

      password = body.password;
      if (!password || typeof password !== "string" || password.trim().length === 0) {
        return errorResponse("Password is required to unlock this PDF.", 400);
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = result.name;
    } else {
      // ---- Multipart path: formData key "file" (backwards compat) ----
      const formData = await request.formData();
      const file = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse(
          'No file provided. Send a PDF file under the key "file".',
          400
        );
      }

      originalName = file.name || "input.pdf";
      const ext = originalName.split(".").pop()?.toLowerCase() || "";

      if (ext !== "pdf") {
        return errorResponse(
          `Invalid file type ".${ext}". Only PDF files are accepted.`,
          400
        );
      }

      password = formData.get("password");
      if (!password || typeof password !== "string" || password.trim().length === 0) {
        return Response.json(
          { error: "Password is required to unlock this PDF." },
          { status: 400 }
        );
      }

      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // ── Reject blank PDFs before hitting paid API ──
    const { readFile: readTmpFile } = await import("fs/promises");
    const pdfBytes = await readTmpFile(tmpPath);
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(pdfBytes);
      if (blank) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
        return errorResponse("This file appears to be empty. Please upload a PDF with content.", 400);
      }
    } catch {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
      return errorResponse("This file appears to be empty or unreadable. Please upload a PDF with content.", 400);
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF unlock task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (
      await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")
    ).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("unlock");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    pdfFile.params = { password: password.trim() };
    await task.addFile(pdfFile);

    await task.process();

    const data = await task.download();

    // Clean up uploaded blob from Vercel Blob storage
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    // Clean up temp file
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "");

    // Log successful usage
    if (usage) await logUsage(usage.userId, "unlock-pdf");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-unlocked.pdf"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    console.error("unlock-pdf route error:", err);

    const rawMessage =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    const lower = rawMessage.toLowerCase();
    if (
      lower.includes("password") ||
      lower.includes("decrypt") ||
      lower.includes("unlock") ||
      lower.includes("encrypted")
    ) {
      return Response.json(
        {
          error: "Unlock failed",
          details:
            "The password is incorrect or this PDF is not password-protected. Please check and try again.",
        },
        { status: 400 }
      );
    }

    return Response.json(
      { error: "Unlock failed", details: rawMessage },
      { status: 502 }
    );
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
