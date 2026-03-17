export const runtime = "nodejs";
export const maxDuration = 60;

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

    const publicKey = process.env.ILOVEAPI_PUBLIC_KEY;
    const secretKey = process.env.ILOVEAPI_SECRET_KEY;

    if (!publicKey || !secretKey) {
      return errorResponse(
        "Server is not configured with iLoveAPI credentials.",
        500
      );
    }

    // Parse request
    const body = await request.json();
    const url = body.url;

    if (!url || typeof url !== "string") {
      return errorResponse("Missing URL.", 400);
    }

    // Basic URL validation
    try {
      const parsed = new URL(url);
      if (!["http:", "https:"].includes(parsed.protocol)) {
        return errorResponse("Only HTTP and HTTPS URLs are supported.", 400);
      }
    } catch {
      return errorResponse("Invalid URL format.", 400);
    }

    // Create iLoveAPI htmlpdf task
    const ILovePDFApi = (await import("@ilovepdf/ilovepdf-nodejs")).default;

    const instance = new ILovePDFApi(publicKey, secretKey);
    const task = instance.newTask("htmlpdf");

    await task.start();

    // Add URL to the task
    await task.addFile(url);

    // Process (htmlpdf has no extra parameters)
    await task.process();

    const data = await task.download();

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

    return new NextResponse(data, {
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
