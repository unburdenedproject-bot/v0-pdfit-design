import { type NextRequest, NextResponse } from "next/server"
import { downloadFromBlob } from "@/lib/blob-helpers"

export const runtime = "nodejs"

/**
 * GET /api/download/[filename]?url=<blob-url>
 *
 * Streams the file stored at the given Vercel Blob URL back to the browser
 * with proper Content-Disposition headers so it triggers a download dialog.
 *
 * The [filename] segment is used for the downloaded file name.
 */
export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ filename: string }> },
) {
  try {
    const { filename } = await params
    const blobUrl = request.nextUrl.searchParams.get("url")

    if (!blobUrl) {
      return NextResponse.json(
        { error: "Missing \"url\" query parameter." },
        { status: 400 },
      )
    }

    // Validate the URL is a legitimate Vercel Blob URL (prevent SSRF/data exfil)
    const isVercelBlob =
      blobUrl.includes(".vercel-storage.com") ||
      blobUrl.includes(".blob.vercel-storage.com")

    if (!blobUrl.startsWith("https://") || !isVercelBlob) {
      return NextResponse.json(
        { error: "Invalid blob URL." },
        { status: 400 },
      )
    }

    const { body, contentType, contentLength } = await downloadFromBlob(blobUrl)

    const headers = new Headers({
      "Content-Type": contentType,
      "Content-Disposition": `attachment; filename="${encodeURIComponent(filename)}"`,
      "Cache-Control": "private, no-store",
    })

    if (contentLength) {
      headers.set("Content-Length", contentLength)
    }

    return new NextResponse(body, { status: 200, headers })
  } catch (error) {
    console.error("Download error:", error)
    return NextResponse.json(
      { error: "Download failed" },
      { status: 500 },
    )
  }
}
