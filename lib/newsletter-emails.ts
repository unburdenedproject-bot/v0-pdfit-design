/**
 * Newsletter drip email definitions — branded HTML templates.
 * Style: bold gradient header, clean white body, one CTA, minimal footer.
 * Matches the LinkSplasher email aesthetic Paula approved.
 */

export interface NewsletterEmail {
  slug: string
  delayDays: number
  subject: string
  html: (name?: string, subscriberEmail?: string) => string
}

const SITE = "https://www.pdf.it.com"
const TEAL = "#14D8C4"
const DARK = "#0E0F1E"
const INDIGO = "#6B7CFF"

function emailWrapper(content: string, preheader: string = "", subscriberEmail: string = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PDF.it</title>
</head>
<body style="margin:0;padding:0;background-color:#F0F0F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${preheader}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0F0F5;">
<tr><td align="center" style="padding:40px 16px;">

<!-- Card -->
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:16px;overflow:hidden;">

<!-- Gradient Header -->
<tr>
<td style="background:linear-gradient(135deg, ${DARK} 0%, #1a1f5e 50%, ${INDIGO} 100%);padding:28px 32px;text-align:center;">
<span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:0.5px;">PDF</span><span style="font-size:22px;font-weight:800;color:${TEAL};letter-spacing:0.5px;">.it</span><span style="font-size:11px;font-weight:600;color:#ffffff;vertical-align:super;">&#8482;</span>
</td>
</tr>

<!-- Body -->
<tr>
<td style="padding:36px 36px 32px 36px;">
${content}
</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:0 36px 28px 36px;text-align:center;">
<p style="margin:0;font-size:12px;line-height:18px;color:#A0A0B0;">
You're receiving this because you signed up at <a href="${SITE}" style="color:${INDIGO};text-decoration:none;">pdf.it.com</a>${subscriberEmail ? ` · <a href="${SITE}/unsubscribe?email=${encodeURIComponent(subscriberEmail)}" style="color:#A0A0B0;text-decoration:underline;">Unsubscribe</a>` : ""}
</p>
</td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

function ctaButton(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px 0 8px 0;">
<tr><td align="center">
<a href="${href}" style="display:inline-block;background-color:${TEAL};color:${DARK};font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:50px;">${text}</a>
</td></tr>
</table>`
}

export const DRIP_EMAILS: NewsletterEmail[] = [
  {
    slug: "welcome",
    delayDays: 0,
    subject: "Welcome to PDF.it — here's how to get started",
    html: (name, subscriberEmail) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Welcome aboard${name ? `, ${name}` : ""}!</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Your PDF toolkit is ready. Start converting, compressing, and editing documents — all from your browser, no account needed.
</p>

<p style="margin:0 0 16px 0;font-size:15px;font-weight:700;color:${DARK};">Three things to try right now:</p>

<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">1.</span> Compress a PDF for email attachments
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">2.</span> Merge multiple PDFs into one file
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">3.</span> Convert a PDF to Word so you can edit it
</p>

${ctaButton("Try a tool now", SITE)}

<p style="margin:24px 0 0 0;font-size:14px;line-height:22px;color:#8A8A9A;">
Questions? Just reply to this email — I read every one.
</p>
<p style="margin:8px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Welcome to PDF.it — 3 free tools to try right now", subscriberEmail),
  },

  {
    slug: "day3_nudge",
    delayDays: 3,
    subject: "Quick nudge — have you tried PDF.it yet?",
    html: (name, subscriberEmail) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Hey${name ? ` ${name}` : ""} — quick nudge</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Have you had a chance to try any of the tools yet? Most people start with one of these:
</p>

<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">1.</span> Compress PDF — shrink files for email
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">2.</span> Merge PDF — combine multiple files
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">3.</span> PDF to JPG — extract pages as images
</p>

<p style="margin:0 0 4px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Takes about 30 seconds. No signup needed.
</p>

${ctaButton("Try it now — 30 seconds", SITE)}

<p style="margin:24px 0 0 0;font-size:14px;line-height:22px;color:#8A8A9A;">
If something didn't work right, I'd love to hear about it — just reply.
</p>
<p style="margin:8px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Quick nudge — 30 seconds to try your first PDF tool", subscriberEmail),
  },

  {
    slug: "day7_ai_tools",
    delayDays: 7,
    subject: "3 AI tools most people don't know PDF.it has",
    html: (name, subscriberEmail) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Did you know?</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Most people find PDF.it for the basics. But we also have AI-powered tools that go way beyond compress and merge:
</p>

<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">1.</span> <strong>ATS Resume Optimizer</strong> — fix your resume for applicant tracking systems
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">2.</span> <strong>Chat with PDF</strong> — ask questions about any document
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">3.</span> <strong>Smart Data Extraction</strong> — pull data from invoices into Excel
</p>

<p style="margin:0 0 4px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Available on paid plans with a <strong>30-day free trial</strong> — no charge until day 31.
</p>

${ctaButton("Start your free trial", `${SITE}/pricing`)}

<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "PDF.it has AI tools you might not know about", subscriberEmail),
  },

  {
    slug: "day14_upgrade",
    delayDays: 14,
    subject: "A quick thought on upgrading",
    html: (name, subscriberEmail) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Hey${name ? ` ${name}` : ""}</h1>
<p style="margin:0 0 20px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
You've been on PDF.it for about two weeks. If you've been hitting the 10/day free limit or wanting to try the AI tools, every paid plan has a <strong>30-day free trial</strong>:
</p>

<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">Pro</span> — $3.99/mo — unlimited conversions, OCR, batch processing
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Business</span> — $13.99/mo — everything in Pro + all AI tools, eSign, redaction
</p>

<p style="margin:0 0 4px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
No charge for 30 days. Cancel anytime.
</p>

${ctaButton("Start your free trial", `${SITE}/pricing`)}

<p style="margin:24px 0 0 0;font-size:14px;line-height:22px;color:#8A8A9A;">
If PDF.it isn't the right fit, no hard feelings — I'd still love to hear what you were looking for. Just reply.
</p>
<p style="margin:8px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Upgrade to Pro or Business — 30-day free trial", subscriberEmail),
  },

  {
    slug: "day30_recap",
    delayDays: 30,
    subject: "One month with PDF.it — how's it going?",
    html: (name, subscriberEmail) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">One month in</h1>
<p style="margin:0 0 20px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Hey${name ? ` ${name}` : ""} — it's been about a month since you joined PDF.it. Quick question:
</p>

<p style="margin:0 0 24px 0;font-size:18px;font-weight:700;color:${DARK};text-align:center;">
Is there a tool or feature you wish we had?
</p>

<p style="margin:0 0 20px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
I'm a solo founder and I build based on what real users ask for. Your reply goes directly to my inbox — no support queue, just me.
</p>
<p style="margin:0 0 4px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
If you've been enjoying PDF.it, the most helpful thing you can do is <strong>forward this email to one colleague</strong> who works with PDFs.
</p>

${ctaButton("Visit PDF.it", SITE)}

<p style="margin:24px 0 0 0;font-size:14px;line-height:22px;color:#8A8A9A;">
Thank you for being here.
</p>
<p style="margin:8px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "One month — is there a feature you wish we had?", subscriberEmail),
  },
]

/**
 * Get which drip email (if any) a subscriber is eligible for today.
 */
export function getEligibleEmail(
  subscribedAt: string,
  sentSlugs: Set<string>,
): NewsletterEmail | null {
  const signupDate = new Date(subscribedAt)
  const now = new Date()
  const daysSinceSignup = Math.floor(
    (now.getTime() - signupDate.getTime()) / (1000 * 60 * 60 * 24),
  )

  for (const email of DRIP_EMAILS) {
    if (daysSinceSignup >= email.delayDays && !sentSlugs.has(email.slug)) {
      return email
    }
  }

  return null
}
