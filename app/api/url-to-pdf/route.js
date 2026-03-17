export const runtime = "nodejs";
export const maxDuration = 60;

import { NextResponse } from "next/server";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  let browser = null;

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

    // Basic URL validation
    try {
      const parsed = new URL(url);
      if (!["http:", "https:"].includes(parsed.protocol)) {
        return errorResponse("Only HTTP and HTTPS URLs are supported.", 400);
      }
    } catch {
      return errorResponse("Invalid URL format.", 400);
    }

    // Launch headless Chrome via Puppeteer
    const chromium = await import("@sparticuz/chromium-min");
    const puppeteer = await import("puppeteer-core");

    browser = await puppeteer.default.launch({
      args: chromium.default.args,
      defaultViewport: chromium.default.defaultViewport,
      executablePath: await chromium.default.executablePath(
        "https://github.com/Sparticuz/chromium/releases/download/v143.0.0/chromium-v143.0.0-pack.tar"
      ),
      headless: chromium.default.headless,
    });

    const page = await browser.newPage();

    // Set a reasonable timeout and navigate
    await page.goto(url, {
      waitUntil: "networkidle2",
      timeout: 30000,
    });

    // Wait a moment for any lazy-loaded content
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // Generate PDF with full page content
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      margin: {
        top: "10mm",
        right: "10mm",
        bottom: "10mm",
        left: "10mm",
      },
    });

    await browser.close();
    browser = null;

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
    if (browser) {
      try { await browser.close(); } catch {}
    }

    console.error("url-to-pdf route error:", err);

    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";

    return errorResponse(message, 500);
  }
}
