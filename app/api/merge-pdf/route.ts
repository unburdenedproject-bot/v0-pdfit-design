import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { type NextRequest, NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { areValidBlobUrls } from "@/lib/validate-blob-url";

/**
 * Fetch a Vercel Blob URL and write it to /tmp.
 * Returns { tmpPath, name }.
 */
async function blobUrlToTmp(blobUrl: string, index: number): Promise<{ tmpPath: string; name: string }> {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
  }

  // Derive a filename from the URL pathname or Content-Disposition header
  let name = `file-${index}.pdf`;
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
  const tmpPath = join("/tmp", `${id}-${index}-${name}`);
  await writeFile(tmpPath, buffer);
  return { tmpPath, name };
}

export async function POST(request: NextRequest): Promise<NextResponse | Response> {
  const tmpPaths: string[] = [];
  let uploadedBlobUrls: string[] = [];

  try {
    // Usage check: auth + daily limit
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("merge-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey: string | undefined = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey: string | undefined = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return Response.json(
        { error: "The processing service is temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    // -----------------------------------------------------------
    // Detect request type: JSON (blob URLs) or multipart (files)
    // -----------------------------------------------------------
    const contentType: string = request.headers.get("content-type") || "";
    const isJson: boolean = contentType.includes("application/json");

    if (isJson) {
      // ---- JSON path: { blobUrls: string[] } ----
      const body = await request.json();
      const blobUrls: string | string[] = body.blobUrls || body.blobUrl;

      const urls: string[] = Array.isArray(blobUrls) ? blobUrls : blobUrls ? [blobUrls] : [];
      uploadedBlobUrls = urls;

      if (urls.length < 2) {
        return Response.json(
          { error: "At least 2 blob URLs are required to merge." },
          { status: 400 }
        );
      }
      if (!areValidBlobUrls(urls)) {
        return Response.json(
          { error: "Invalid file URL." },
          { status: 400 }
        );
      }

      // Fetch each blob URL and write to /tmp
      for (let i = 0; i < urls.length; i++) {
        const { tmpPath } = await blobUrlToTmp(urls[i], i);
        tmpPaths.push(tmpPath);
      }
    } else {
      // ---- Multipart path: formData key "files" (backwards compat) ----
      const formData = await request.formData();
      const files = formData.getAll("files");

      if (!files || files.length === 0) {
        return Response.json(
          { error: 'No files provided. Send PDF files under the key "files".' },
          { status: 400 }
        );
      }

      if (files.length < 2) {
        return Response.json(
          { error: "At least 2 PDF files are required to merge." },
          { status: 400 }
        );
      }

      // Validate all files are PDFs
      for (const file of files) {
        if (typeof file === "string") {
          return Response.json(
            { error: "Invalid file entry received." },
            { status: 400 }
          );
        }
        const name: string = file.name || "unknown";
        const ext: string = name.split(".").pop()?.toLowerCase() || "";
        if (ext !== "pdf") {
          return Response.json(
            { error: `Invalid file type ".${ext}" for "${name}". Only PDF files are accepted.` },
            { status: 400 }
          );
        }
      }

      // Write all files to /tmp
      const id: string = randomUUID();
      for (let i = 0; i < files.length; i++) {
        const file = files[i] as File;
        const name: string = file.name || `file-${i}.pdf`;
        const tmpPath: string = join("/tmp", `${id}-${i}-${name}`);
        const buffer: Buffer = Buffer.from(await file.arrayBuffer());
        await writeFile(tmpPath, buffer);
        tmpPaths.push(tmpPath);
      }
    }

    // -----------------------------------------------------------
    // Common: run iLovePDF merge task
    // -----------------------------------------------------------
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (
      await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")
    ).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("merge");

    await task.start();

    for (const tmpPath of tmpPaths) {
      const pdfFile = new ILovePDFFile(tmpPath);
      await task.addFile(pdfFile);
    }

    await task.process();

    const data = await task.download();

    // Clean up uploaded blobs from Vercel Blob storage
    for (const url of uploadedBlobUrls) {
      if (url) await del(url).catch(() => {});
    }

    // Clean up temp files
    for (const tmpPath of tmpPaths) {
      await unlink(tmpPath).catch(() => {});
    }

    // Log successful usage
    if (usage) await logUsage(usage.userId, "merge-pdf");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="merged.pdf"`,
        "Cache-Control": "no-store",
      },
    })
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options)
    }
    return res;
  } catch (err) {
    console.error("merge-pdf route error:", err);

    return Response.json({ error: "An error occurred while merging your files. Please try again." }, { status: 500 });
  } finally {
    for (const url of uploadedBlobUrls) {
      if (url) await del(url).catch(() => {});
    }
    for (const tmpPath of tmpPaths) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
