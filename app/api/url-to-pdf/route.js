export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  try {
    // Auth: Pro/Business/Enterprise only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single();
    if (
      profile?.plan !== "pro" &&
      profile?.plan !== "business" &&
      profile?.plan !== "enterprise"
    ) {
      return NextResponse.json(
        { error: "upgrade_required" },
        { status: 403 }
      );
    }

    // Parse request
    const body = await request.json();
    const url = body.url;

    if (!url || typeof url !== "string") {
      return errorResponse("Missing URL.", 400);
    }

    // URL validation — blocks SSRF (internal IPs, cloud metadata, non-HTTP schemes)
    const { validateUrlForCapture } = await import("@/lib/url-validation");
    const validation = await validateUrlForCapture(url);
    if (!validation.valid) {
      return errorResponse(validation.reason, 400);
    }

    const apiKey = process.env.CLOUDCONVERT_API_KEY;
    if (!apiKey) {
      return errorResponse("Server is not configured with CloudConvert credentials.", 500);
    }

    // Step 1: Create CloudConvert job — capture website as PDF → export
    const jobRes = await fetch("https://api.cloudconvert.com/v2/jobs", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        tasks: {
          "capture-1": {
            operation: "capture-website",
            url: url,
            output_format: "pdf",
            engine: "chrome",
            page_orientation: "portrait",
            page_size: "A4",
            margin_top: 10,
            margin_bottom: 10,
            margin_left: 10,
            margin_right: 10,
            print_background: true,
            wait_until: "networkidle0",
            wait_time: 3000,
          },
          "export-1": {
            operation: "export/url",
            input: "capture-1",
          },
        },
      }),
    });

    if (!jobRes.ok) {
      const err = await jobRes.json().catch(() => ({}));
      throw new Error(`CloudConvert job creation failed: ${err.message || jobRes.status}`);
    }

    const job = await jobRes.json();
    const jobId = job.data.id;

    // Step 2: Poll for job completion
    let finished = null;
    for (let i = 0; i < 60; i++) {
      await new Promise((r) => setTimeout(r, 2000));

      const pollRes = await fetch(
        `https://api.cloudconvert.com/v2/jobs/${jobId}`,
        { headers: { Authorization: `Bearer ${apiKey}` } }
      );
      if (!pollRes.ok) continue;

      const pollData = await pollRes.json();
      const status = pollData.data.status;

      if (status === "finished") {
        finished = pollData.data;
        break;
      }
      if (status === "error") {
        const failedTask = pollData.data.tasks?.find((t) => t.status === "error");
        throw new Error(
          `Conversion failed: ${failedTask?.message || "Unknown error"}`
        );
      }
    }

    if (!finished) {
      throw new Error("Conversion timed out. Please try again.");
    }

    // Step 3: Download the result
    const exportTask = finished.tasks.find((t) => t.name === "export-1");
    const fileUrl = exportTask?.result?.files?.[0]?.url;
    if (!fileUrl) {
      throw new Error("No output file was produced.");
    }

    const fileRes = await fetch(fileUrl);
    if (!fileRes.ok) {
      throw new Error(`Failed to download converted file (${fileRes.status})`);
    }

    const pdfBuffer = await fileRes.arrayBuffer();

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "url-to-pdf");

    // Extract domain for filename
    let filename = "webpage.pdf";
    try {
      const parsed = new URL(url);
      filename = `${parsed.hostname.replace(/\./g, "-")}.pdf`;
    } catch {
      // keep default
    }

    return new NextResponse(Buffer.from(pdfBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("url-to-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
