export const runtime = "nodejs"
export const maxDuration = 300

import { NextRequest, NextResponse } from "next/server"
import sharp from "sharp"
import { PDFDocument } from "pdf-lib"
import { del } from "@vercel/blob"

function jsonError(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status })
}

export async function POST(req: NextRequest) {
  let blobUrl: string | undefined

  try {
    // ── Usage check ──
    const { checkUsageAndAuth, logUsage } = await import("@/lib/usage-check")
    const usage = await checkUsageAndAuth("image-to-pdf")

    if (!usage.allowed) {
      return NextResponse.json(
        { error: usage.error || "upgrade_required" },
        { status: 403 }
      )
    }

    // ── Parse input ──
    const contentType = req.headers.get("content-type") || ""
    if (!contentType.includes("application/json")) {
      return jsonError("Expected JSON body.", 400)
    }

    const body = await req.json()
    blobUrl = body.blobUrl

    if (!blobUrl || typeof blobUrl !== "string") {
      return jsonError('JSON body must include "blobUrl".', 400)
    }

    // ── Fetch image from blob ──
    const fetchRes = await fetch(blobUrl)
    if (!fetchRes.ok) {
      return jsonError(`Failed to fetch uploaded file (${fetchRes.status}).`, 502)
    }

    const buffer = Buffer.from(await fetchRes.arrayBuffer())

    // Validate that it's an image Sharp can process
    let metadata: sharp.Metadata
    try {
      metadata = await sharp(buffer).metadata()
    } catch {
      return jsonError("Unsupported image format. Please upload a JPG, PNG, or WEBP file.", 400)
    }

    if (!metadata.width || !metadata.height) {
      return jsonError("Could not read image dimensions.", 400)
    }

    // ── Process with Sharp (minimal — just clean embed) ──
    const processedBuffer = await sharp(buffer)
      .rotate() // auto-rotate based on EXIF
      .resize(4000, 4000, { fit: "inside", withoutEnlargement: true })
      .png()
      .toBuffer()

    const processedMeta = await sharp(processedBuffer).metadata()
    const imgW = processedMeta.width!
    const imgH = processedMeta.height!

    // ── Create PDF ──
    // Fit image to Letter size page (8.5" x 11") with 0.5" margins
    const LETTER_W = 612
    const LETTER_H = 792
    const MARGIN = 36 // 0.5 inch
    const isLandscape = imgW > imgH

    const pageW = isLandscape ? LETTER_H : LETTER_W
    const pageH = isLandscape ? LETTER_W : LETTER_H

    const maxW = pageW - MARGIN * 2
    const maxH = pageH - MARGIN * 2
    const scale = Math.min(maxW / imgW, maxH / imgH)
    const drawW = imgW * scale
    const drawH = imgH * scale
    const drawX = (pageW - drawW) / 2
    const drawY = (pageH - drawH) / 2

    const pdfDoc = await PDFDocument.create()
    const image = await pdfDoc.embedPng(processedBuffer)
    const page = pdfDoc.addPage([pageW, pageH])
    page.drawImage(image, { x: drawX, y: drawY, width: drawW, height: drawH })

    const pdfBytes = await pdfDoc.save()

    // ── Derive filename ──
    let originalName = "image"
    try {
      const pathname = new URL(blobUrl).pathname
      const segments = pathname.split("/").filter(Boolean)
      if (segments.length > 0) {
        const raw = decodeURIComponent(segments[segments.length - 1])
        originalName = raw.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/, "") || "image"
      }
    } catch {
      // keep default
    }

    // ── Cleanup blob ──
    await del(blobUrl).catch(() => {})

    // ── Log usage ──
    await logUsage(usage.userId, "image-to-pdf")

    // ── Return PDF ──
    const response = new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${originalName}.pdf"`,
        "Cache-Control": "no-store",
      },
    })

    // Set cookie for anonymous users
    if (usage.anonCookie) {
      response.cookies.set(
        usage.anonCookie.name,
        usage.anonCookie.value,
        usage.anonCookie.options
      )
    }

    return response
  } catch (err: unknown) {
    // Clean up uploaded blob on failure
    if (blobUrl) await del(blobUrl).catch(() => {})
    const message = err instanceof Error ? err.message : String(err)
    console.error("Image to PDF conversion failed:", message)
    return jsonError("Processing failed. Please try a different image.", 500)
  }
}
