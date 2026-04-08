import { createWriteStream } from "fs";
import { Readable } from "stream";
import { pipeline } from "stream/promises";
export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";
import { readFile, writeFile, unlink } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

async function blobUrlToTmp(blobUrl: string): Promise<{ tmpPath: string; name: string }> {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
  }

  let name: string = "input.pdf";
  try {
    const pathname = new URL(blobUrl).pathname;
    const segments = pathname.split("/").filter(Boolean);
    if (segments.length > 0) {
      name = decodeURIComponent(segments[segments.length - 1]);
    }
  } catch {
    // keep default name
  }

  const id: string = randomUUID();
  const tmpPath: string = join("/tmp", `${id}-${name}`);
  if (res.body) { const nodeStream = Readable.fromWeb(res.body as any); await pipeline(nodeStream, createWriteStream(tmpPath)); } else { const buf: Buffer = Buffer.from(await res.arrayBuffer()); await writeFile(tmpPath, buf); }
  return { tmpPath, name };
}

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

/**
 * Convert PDF to XLSX using CloudConvert REST API.
 */
async function convertWithCloudConvert(fileBuffer: Buffer, fileName: string): Promise<Buffer> {
  const apiKey: string | undefined = process.env.CLOUDCONVERT_API_KEY;
  if (!apiKey) {
    console.error("CLOUDCONVERT_API_KEY is not set");
    throw new Error("The conversion service is temporarily unavailable. Please try again later.");
  }

  // Step 1: Create the job
  const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      tasks: {
        "import-1": { operation: "import/upload" },
        "convert-1": {
          operation: "convert",
          input: "import-1",
          input_format: "pdf",
          output_format: "xlsx",
        },
        "export-1": {
          operation: "export/url",
          input: "convert-1",
        },
      },
    }),
  });

  if (!jobRes.ok) {
    const err = await jobRes.json().catch(() => ({}));
    console.error("Conversion job creation failed:", err.message || jobRes.status);
    throw new Error("An error occurred while processing your file. Please try again.");
  }

  const job = await jobRes.json();
  const importTask = job.data.tasks.find((t: any) => t.name === "import-1");
  if (!importTask || !importTask.result || !importTask.result.form) {
    console.error("Conversion service did not return an upload URL");
    throw new Error("An error occurred while processing your file. Please try again.");
  }

  // Step 2: Upload the file
  const form = importTask.result.form;
  const uploadUrl: string = form.url;
  const formData = new FormData();
  for (const [key, value] of Object.entries(form.parameters || {})) {
    formData.append(key, value as string);
  }
  formData.append("file", new Blob([fileBuffer]), fileName);

  const uploadRes = await fetch(uploadUrl, { method: "POST", body: formData });
  if (!uploadRes.ok && uploadRes.status !== 201 && uploadRes.status !== 204) {
    console.error("File upload to conversion service failed:", uploadRes.status);
    throw new Error("An error occurred while processing your file. Please try again.");
  }

  // Step 3: Poll for job completion
  const jobId: string = job.data.id;
  let finished: any = null;
  for (let i: number = 0; i < 60; i++) {
    await new Promise((r) => setTimeout(r, 2000));

    const pollRes = await fetch(`https://api.cloudconvert.com/v2/jobs/${jobId}`, {
      headers: { Authorization: `Bearer ${apiKey}` },
    });
    if (!pollRes.ok) continue;

    const pollData = await pollRes.json();
    const status: string = pollData.data.status;

    if (status === "finished") {
      finished = pollData.data;
      break;
    }
    if (status === "error") {
      const failedTask = pollData.data.tasks.find((t: any) => t.status === "error");
      console.error("Conversion failed:", failedTask?.message || "unknown error");
      throw new Error("File conversion failed. Please try again or use a different file.");
    }
  }

  if (!finished) {
    throw new Error("Conversion timed out. Please try again with a smaller file.");
  }

  // Step 4: Download the result
  const exportTask = finished.tasks.find((t: any) => t.name === "export-1");
  const fileUrl: string | undefined = exportTask?.result?.files?.[0]?.url;
  if (!fileUrl) {
    console.error("Conversion service did not return a download URL");
    throw new Error("An error occurred while processing your file. Please try again.");
  }

  const downloadRes = await fetch(fileUrl);
  if (!downloadRes.ok) {
    console.error("Failed to download converted file:", downloadRes.status);
    throw new Error("An error occurred while retrieving the converted file. Please try again.");
  }

  return Buffer.from(await downloadRes.arrayBuffer());
}

export async function POST(request: NextRequest) {
  let tmpPath: string | null = null;
  let uploadedBlobUrl: string | null = null;

  try {
    // Pro/Business-only gate
    const { createClient } = await import("@/lib/supabase/server");
    const { logUsage } = await import("@/lib/usage-check");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "pro" && profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    const contentType: string = request.headers.get("content-type") || "";
    const isJson: boolean = contentType.includes("application/json");

    let originalName: string = "input.pdf";

    if (isJson) {
      const body = await request.json();
      const blobUrl: string = body.blobUrl;
      uploadedBlobUrl = blobUrl;

      if (!blobUrl || typeof blobUrl !== "string") {
        return errorResponse("Missing blobUrl in JSON body.", 400);
      }
      if (!isValidBlobUrl(blobUrl)) {
        return errorResponse("Invalid file URL.", 400);
      }

      // ---- Async mode: create a job and return immediately ----
      if (body.async === true) {
        const { createJob } = await import("@/lib/job-queue");
        const result = await createJob({
          userId: user.id,
          userPlan: profile?.plan,
          tool: "pdf-to-excel",
          inputBlobUrl: blobUrl,
          inputParams: { original_name: body.originalName || "input.pdf" },
        });
        if ("error" in result) {
          return errorResponse(result.error, 500);
        }
        await logUsage(user.id, "pdf-to-excel");
        return Response.json({ jobId: result.jobId, status: "pending" }, { status: 202 });
      }

      const result = await blobUrlToTmp(blobUrl);
      tmpPath = result.tmpPath;
      originalName = (body.originalName && typeof body.originalName === "string")
        ? body.originalName
        : result.name;
    } else {
      const formData = await request.formData();
      const file: FormDataEntryValue | null = formData.get("file");
      if (!file || typeof file === "string") {
        return errorResponse('No file provided. Send a PDF file under the key "file".', 400);
      }

      originalName = file.name || "input.pdf";
      const id: string = randomUUID();
      tmpPath = join("/tmp", `${id}-${originalName}`);
      const buffer: Buffer = Buffer.from(await file.arrayBuffer());
      await writeFile(tmpPath, buffer);
    }

    const fileBuffer: Buffer = await readFile(tmpPath);

    // ── Reject blank PDFs before hitting paid API ──
    try {
      const { isBlankPdf } = await import("@/lib/blank-pdf-check");
      const { blank } = await isBlankPdf(fileBuffer);
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

    const data: Buffer = await convertWithCloudConvert(fileBuffer, originalName);

    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    await unlink(tmpPath).catch(() => {});
    tmpPath = null;

    const baseName: string = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    await logUsage(user.id, "pdf-to-excel");

    const res = new NextResponse(data, {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "Content-Disposition": `attachment; filename="${baseName}.xlsx"`,
        "Cache-Control": "no-store",
      },
    });
    return res;
  } catch (err: unknown) {
    console.error("pdf-to-excel route error:", err);

    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    if (tmpPath) {
      await unlink(tmpPath).catch(() => {});
    }
  }
}
