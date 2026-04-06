export const runtime = "nodejs"
export const maxDuration = 60

import { NextRequest, NextResponse } from "next/server"
import { Resend } from "resend"

/**
 * Vercel Cron Job: runs every Monday at 8am UTC.
 * Checks site health: page status codes, sitemap validity, meta tags.
 * Emails a report to the site owner.
 *
 * Configured in vercel.json:
 *   { "path": "/api/cron/seo-health", "schedule": "0 8 * * 1" }
 */

const CRON_SECRET = process.env.CRON_SECRET
const OWNER_EMAIL = "paula.vargas3@gmail.com"
const SITE_URL = "https://www.pdf.it.com"

// Critical pages to check (sample from each category)
const PAGES_TO_CHECK = [
  // Core pages
  "/", "/pricing", "/about", "/contact", "/blog", "/tools", "/tools-a-z",
  "/login", "/signup",
  // Top tools (EN)
  "/compress-pdf", "/merge-pdf", "/split-pdf", "/pdf-to-jpg", "/pdf-to-word",
  "/ocr-scanner", "/esign", "/table-extraction", "/url-to-pdf",
  // Spanish
  "/es", "/es/comprimir-pdf", "/es/combinar-archivos-pdf", "/es/herramientas",
  // Portuguese
  "/br", "/br/comprimir-pdf", "/br/combinar-arquivos-pdf", "/br/ferramentas",
  // Legal
  "/privacy-policy", "/terms-conditions",
  // Learn (sample)
  "/learn/what-is-ocr", "/learn/how-to-compress-a-pdf",
]

export async function GET(request: NextRequest) {
  const authHeader = request.headers.get("authorization")
  if (CRON_SECRET && authHeader !== `Bearer ${CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  const issues: string[] = []
  const passed: string[] = []

  // 1. Check page status codes
  for (const path of PAGES_TO_CHECK) {
    try {
      const res = await fetch(`${SITE_URL}${path}`, {
        method: "HEAD",
        redirect: "follow",
        signal: AbortSignal.timeout(10000),
      })
      if (res.status >= 400) {
        issues.push(`[${res.status}] ${path}`)
      } else {
        passed.push(path)
      }
    } catch (err) {
      issues.push(`[TIMEOUT] ${path}`)
    }
  }

  // 2. Check sitemap is accessible
  let sitemapOk = false
  try {
    const sitemapRes = await fetch(`${SITE_URL}/sitemap.xml`, {
      signal: AbortSignal.timeout(10000),
    })
    if (sitemapRes.ok) {
      const text = await sitemapRes.text()
      if (text.includes("<url>") || text.includes("<sitemap>")) {
        sitemapOk = true
      } else {
        issues.push("[SITEMAP] Accessible but contains no URLs")
      }
    } else {
      issues.push(`[SITEMAP] Status ${sitemapRes.status}`)
    }
  } catch {
    issues.push("[SITEMAP] Failed to fetch")
  }

  // 3. Check robots.txt
  let robotsOk = false
  try {
    const robotsRes = await fetch(`${SITE_URL}/robots.txt`, {
      signal: AbortSignal.timeout(10000),
    })
    if (robotsRes.ok) {
      const text = await robotsRes.text()
      if (text.includes("Sitemap:")) {
        robotsOk = true
      } else {
        issues.push("[ROBOTS] Missing Sitemap directive")
      }
    } else {
      issues.push(`[ROBOTS] Status ${robotsRes.status}`)
    }
  } catch {
    issues.push("[ROBOTS] Failed to fetch")
  }

  // 4. Check homepage meta tags
  try {
    const homeRes = await fetch(SITE_URL, {
      signal: AbortSignal.timeout(10000),
    })
    if (homeRes.ok) {
      const html = await homeRes.text()
      if (!html.includes('og:title')) issues.push("[META] Homepage missing og:title")
      if (!html.includes('canonical')) issues.push("[META] Homepage missing canonical")
      if (!html.includes('hreflang')) issues.push("[META] Homepage missing hreflang")
    }
  } catch {
    issues.push("[META] Failed to fetch homepage for meta check")
  }

  // Build report
  const date = new Date().toISOString().split("T")[0]
  const score = Math.round((passed.length / PAGES_TO_CHECK.length) * 100)
  const status = issues.length === 0 ? "ALL CLEAR" : `${issues.length} ISSUES FOUND`

  const report = `
    <div style="font-family: 'Inter', -apple-system, sans-serif; max-width: 600px; margin: 0 auto; padding: 40px 24px;">
      <div style="text-align: center; margin-bottom: 24px;">
        <span style="font-weight: 800; color: #0E0F1E; font-size: 24px;">PDF<span style="color: #14D8C4;">.it</span></span>
        <span style="color: #94A3B8; font-size: 14px; margin-left: 8px;">Weekly SEO Health</span>
      </div>

      <div style="background: ${issues.length === 0 ? '#F0FDFA' : '#FEF2F2'}; border: 1px solid ${issues.length === 0 ? '#14D8C4' : '#EF4444'}; border-radius: 12px; padding: 20px; margin-bottom: 24px; text-align: center;">
        <p style="font-size: 32px; font-weight: 800; margin: 0; color: ${issues.length === 0 ? '#0D9488' : '#DC2626'};">${score}%</p>
        <p style="font-size: 14px; color: #64748B; margin: 4px 0 0 0;">${passed.length}/${PAGES_TO_CHECK.length} pages healthy &mdash; ${status}</p>
      </div>

      <table style="width: 100%; border-collapse: collapse; font-size: 13px; margin-bottom: 24px;">
        <tr style="background: #F8FAFC;">
          <td style="padding: 8px 12px; font-weight: 600; color: #0E0F1E;">Sitemap</td>
          <td style="padding: 8px 12px; color: ${sitemapOk ? '#0D9488' : '#DC2626'};">${sitemapOk ? 'OK' : 'ISSUE'}</td>
        </tr>
        <tr>
          <td style="padding: 8px 12px; font-weight: 600; color: #0E0F1E;">Robots.txt</td>
          <td style="padding: 8px 12px; color: ${robotsOk ? '#0D9488' : '#DC2626'};">${robotsOk ? 'OK' : 'ISSUE'}</td>
        </tr>
        <tr style="background: #F8FAFC;">
          <td style="padding: 8px 12px; font-weight: 600; color: #0E0F1E;">Pages checked</td>
          <td style="padding: 8px 12px;">${PAGES_TO_CHECK.length}</td>
        </tr>
      </table>

      ${issues.length > 0 ? `
        <h3 style="font-size: 16px; font-weight: 700; color: #DC2626; margin-bottom: 12px;">Issues</h3>
        <ul style="font-size: 13px; color: #475569; line-height: 2; padding-left: 20px; margin-bottom: 24px;">
          ${issues.map(i => `<li><code>${i}</code></li>`).join('')}
        </ul>
      ` : ''}

      <p style="font-size: 12px; color: #94A3B8; text-align: center;">
        Report generated ${date} &mdash; <a href="${SITE_URL}" style="color: #14D8C4;">pdf.it.com</a>
      </p>
    </div>
  `

  // Send email report
  const resendKey = process.env.RESEND_API_KEY
  if (resendKey) {
    try {
      const resend = new Resend(resendKey)
      await resend.emails.send({
        from: "PDF.it <noreply@pdf.it.com>",
        to: OWNER_EMAIL,
        subject: `PDF.it SEO Health: ${score}% — ${status} (${date})`,
        html: report,
      })
    } catch (emailErr) {
      console.error("Failed to send SEO health email:", emailErr)
    }
  }

  return NextResponse.json({
    ok: true,
    score,
    pagesChecked: PAGES_TO_CHECK.length,
    passed: passed.length,
    issues,
    sitemapOk,
    robotsOk,
  })
}
