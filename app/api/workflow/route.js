export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";
import { writeFile, unlink, readFile } from "fs/promises";
import { join } from "path";
import { randomUUID } from "crypto";
import { del } from "@vercel/blob";
import { isValidBlobUrl } from "@/lib/validate-blob-url";

async function blobUrlToTmp(blobUrl) {
  const res = await fetch(blobUrl);
  if (!res.ok) {
    console.error(`Failed to fetch blob URL (${res.status}): ${blobUrl}`);
    throw new Error("Failed to retrieve your uploaded file. Please try uploading again.");
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

// Map of supported workflow steps to iLoveAPI task configs
const SUPPORTED_STEPS = {
  flatten: {
    taskType: "pdfa",
    getParams: () => ({ conformance: "pdfa-2b" }),
  },
  compress: {
    taskType: "compress",
    getParams: (params) => ({
      compression_level: params.compression_level || "recommended",
    }),
  },
  watermark: {
    taskType: "watermark",
    getParams: (params) => ({
      mode: "text",
      text: params.text || "CONFIDENTIAL",
      transparency: params.transparency ?? 50,
      font_family: "Arial",
      font_size: params.fontSize || 48,
      font_color: params.fontColor || "#000000",
      rotation: 315,
      vertical_position: "middle",
      horizontal_position: "center",
      layer: "above",
    }),
  },
  rotate: {
    taskType: "rotate",
    getParams: (params) => ({
      rotate: params.rotate || 90,
    }),
  },
  protect: {
    taskType: "protect",
    getParams: (params) => ({
      password: params.password || "",
    }),
  },
};

/**
 * Workflow Automation API
 *
 * Chains multiple iLoveAPI tasks in sequence.
 * Business and Enterprise plans.
 *
 * Body: { blobUrl: string, originalName?: string, steps: Array<{ tool: string, params?: object }> }
 */
export async function POST(request) {
  let tmpPath = null;
  const tempFiles = [];
  let uploadedBlobUrl = null;

  try {
    // Auth: Business or Enterprise plan
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;
    if (!publicKey || !secretKey) {
      return errorResponse("The processing service is temporarily unavailable. Please try again later.", 500);
    }

    // Parse request
    const body = await request.json();
    const blobUrl = body.blobUrl;
    uploadedBlobUrl = blobUrl;

    if (!blobUrl || typeof blobUrl !== "string") {
      return errorResponse("Missing blobUrl in JSON body.", 400);
    }
    if (!isValidBlobUrl(blobUrl)) {
      return errorResponse("Invalid file URL.", 400);
    }

    const steps = body.steps;
    if (!Array.isArray(steps) || steps.length < 1 || steps.length > 5) {
      return errorResponse("Steps must be an array of 1-5 items.", 400);
    }

    // Validate all steps before processing
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      if (!step.tool || !SUPPORTED_STEPS[step.tool]) {
        return errorResponse(`Invalid tool "${step.tool}" at step ${i + 1}. Supported: ${Object.keys(SUPPORTED_STEPS).join(", ")}`, 400);
      }
      // Protect must be last step
      if (step.tool === "protect" && i !== steps.length - 1) {
        return errorResponse("Password protection must be the last step in the workflow.", 400);
      }
    }

    // Download input file
    const result = await blobUrlToTmp(blobUrl);
    tmpPath = result.tmpPath;
    tempFiles.push(tmpPath);

    const originalName = (body.originalName && typeof body.originalName === "string")
      ? body.originalName
      : result.name;

    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;
    const ILovePDFFile = (await import("@ilovepdf/ilovepdf-nodejs/ILovePDFFile")).default;

    let currentPath = tmpPath;

    // Process each step sequentially
    for (let i = 0; i < steps.length; i++) {
      const step = steps[i];
      const config = SUPPORTED_STEPS[step.tool];
      const params = config.getParams(step.params || {});

      const instance = new ILovePDFApi(publicKey, secretKey);
      const task = instance.newTask(config.taskType);

      await task.start();
      await task.addFile(new ILovePDFFile(currentPath));
      await task.process(params);

      const data = await task.download();

      const nextPath = join("/tmp", `${randomUUID()}-step${i + 1}.pdf`);
      await writeFile(nextPath, data);
      tempFiles.push(nextPath);

      currentPath = nextPath;
    }

    // Read final result
    const finalData = await readFile(currentPath);

    // Clean up
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    for (const f of tempFiles) {
      await unlink(f).catch(() => {});
    }

    const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "");

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "workflow-automation");

    return new NextResponse(finalData, {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${baseName}-workflow.pdf"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("workflow route error:", err);

    const raw = err && typeof err === "object" && err.message ? err.message : "";
    const safe = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob.vercel/i.test(raw)
      ? "An error occurred while processing your file. Please try again."
      : (raw || "An unexpected error occurred.");

    return errorResponse(safe, 500);
  } finally {
    if (uploadedBlobUrl) {
      await del(uploadedBlobUrl).catch(() => {});
    }
    for (const f of tempFiles) {
      await unlink(f).catch(() => {});
    }
  }
}
