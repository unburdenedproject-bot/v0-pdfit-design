import { NextResponse } from "next/server"

/**
 * GET /sitemap.xml — Sitemap index pointing to numbered sitemap files.
 *
 * Next.js generateSitemaps() creates /sitemap/0.xml, /sitemap/1.xml, etc.
 * but sometimes fails to generate the /sitemap.xml index in production.
 * This route manually serves the index.
 */
export async function GET() {
  const baseUrl = "https://pdf.it.com"

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${baseUrl}/sitemap/0.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap/1.xml</loc>
  </sitemap>
  <sitemap>
    <loc>${baseUrl}/sitemap/2.xml</loc>
  </sitemap>
</sitemapindex>`

  return new NextResponse(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "public, s-maxage=3600, stale-while-revalidate=7200",
    },
  })
}
