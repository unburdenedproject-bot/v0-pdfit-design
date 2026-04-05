export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";

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
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check");
    const usage = await checkUsageAndAuth("extract-images-from-pdf");
    if (!usage.allowed) {
      return NextResponse.json({ error: usage.error || "Daily limit reached." }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse("Server is not configured with iLoveAPI credentials.", 500);
    }

    const contentType = request.headers.get("content-type") || "";
    const isJson = contentType.includes("application/json");

    let originalName = "input.pdf";

    if (isJson) {
      const body = await request.json();
      const blobUrl = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = (body.originalName && typeof body.originalName === "string")
        ? body.originalName
        : result.name;
    } else {
      const formData = await request.formData();
      let file = formData.get("file");
      if (!file) {
        const files = formData.getAll("files");
        if (files.length > 0) file = files[0];
      }

      if (!file || typeof file === "string") {
        return errorResponse('No PDF file provided. Send a file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const id = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    // ── Reject blank/empty PDFs before hitting iLoveAPI ──
    const { readFile: readTmp } = await import("fs/promises");
    const pdfBytes = await readTmp(tmpPath);

    try {
      const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.js");
      pdfjsLib.GlobalWorkerOptions.workerSrc = "";

      const doc = await pdfjsLib.getDocument({
        data: new Uint8Array(pdfBytes),
        disableFontFace: true,
        isEvalSupported: false,
      }).promise;

      let hasVisibleContent = false;
      const OPS = pdfjsLib.OPS;
      const VISIBLE_OPS = new Set([
        OPS.showText, OPS.showSpacedText,
        OPS.paintImageXObject, OPS.paintInlineImageXObject,
        OPS.paintInlineImageXObjectGroup, OPS.paintJpegXObject,
        OPS.paintFormXObjectBegin,
      ]);

      for (let i = 1; i <= doc.numPages; i++) {
        const page = await doc.getPage(i);
        const opList = await page.getOperatorList();
        const textContent = await page.getTextContent();
        const pageText = textContent.items.map((item) => ("str" in item ? item.str : "")).join("").trim();

        let visibleOpCount = 0;
        for (const fn of opList.fnArray) {
          if (VISIBLE_OPS.has(fn)) { visibleOpCount++; }
        }

        if (pageText.length > 0 || visibleOpCount > 0) {
          hasVisibleContent = true;
          page.cleanup();
          break;
        }
        page.cleanup();
      }
      doc.destroy();

      if (!hasVisibleContent) {
        await unlink(tmpPath).catch(() => {});
        tmpPath = null;
        return errorResponse("The uploaded PDF is empty and contains no images to extract.", 400);
      }
    } catch {
      await unlink(tmpPath).catch(() => {});
      tmpPath = null;
      return errorResponse("The uploaded PDF is empty and contains no images to extract.", 400);
    }

    // Use pdfjpg with "extract" mode to extract embedded images
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("pdfjpg");

    await task.start();

    const pdfFile = new ILovePDFFile(tmpPath);
    await task.addFile(pdfFile);

    await task.process({ pdfjpg_mode: "extract" });

    const data = await task.download();

    const JSZip = (await import("jszip")).default;
    const originalBase = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}/g, "");

    const newZip = new JSZip();

    const isZip = data[0] === 0x50 && data[1] === 0x4B;
    if (isZip) {
      const zip = await JSZip.loadAsync(data);
      const entries = Object.keys(zip.files).sort();
      let imgNum = 1;
      for (const entryName of entries) {
        const entry = zip.files[entryName];
        if (!entry.dir) {
          const ext = entryName.split(".").pop() || "jpg";
          const newName = `${originalBase}-image-${String(imgNum).padStart(4, "0")}.${ext}`;
          const content = await entry.async("nodebuffer");
          newZip.file(newName, content);
          imgNum++;
        }
      }
    } else {
      newZip.file(`${originalBase}-image-0001.jpg`, data);
    }

    const renamedData = await newZip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" });

    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }

    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    if (usage) await logUsage(usage.userId, "extract-images-from-pdf");

    const res = new NextResponse(renamedData, {
      status: 200,
      headers: {
        "Content-Type": "application/zip",
        "Content-Disposition": `attachment; filename="${originalBase}-extracted-images.zip"`,
        "Cache-Control": "no-store",
      },
    });
    if (usage?.anonCookie) {
      res.cookies.set(usage.anonCookie.name, usage.anonCookie.value, usage.anonCookie.options);
    }
    return res;
  } catch (err) {
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }

    console.error("extract-images-from-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
