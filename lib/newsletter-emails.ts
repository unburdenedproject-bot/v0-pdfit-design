/**
 * Newsletter drip email definitions — branded HTML templates.
 *
 * Each email has a slug (for deduplication), a delay (days after signup),
 * a subject, and an HTML body builder. Styled to match PDF.it brand:
 * dark nav, teal CTAs, clean typography.
 *
 * Add new emails here. The cron at /api/cron/newsletter-drip checks which
 * subscribers are eligible for each email and sends via Resend.
 */

export interface NewsletterEmail {
  slug: string
  delayDays: number
  subject: string
  html: (name?: string) => string
}

const SITE = "https://www.pdf.it.com"

function emailWrapper(content: string, preheader: string = ""): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>PDF.it</title>
<!--[if mso]><style>body,table,td{font-family:Arial,Helvetica,sans-serif!important}</style><![endif]-->
</head>
<body style="margin:0;padding:0;background-color:#F3F4FF;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
${preheader ? `<div style="display:none;max-height:0;overflow:hidden;mso-hide:all">${preheader}</div>` : ""}
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F3F4FF;">
<tr><td align="center" style="padding:32px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;background-color:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.06);">

<!-- Header -->
<tr>
<td style="background-color:#0E0F1E;padding:24px 32px;text-align:center;">
<img src="${SITE}/logo.svg" alt="PDF.it" width="57" height="28" style="display:inline-block;height:28px;width:auto;">
</td>
</tr>

<!-- Content -->
<tr>
<td style="padding:32px 32px 24px 32px;">
${content}
</td>
</tr>

<!-- Footer -->
<tr>
<td style="padding:0 32px 32px 32px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0">
<tr><td style="border-top:1px solid #E2E8F0;padding-top:20px;">
<p style="margin:0;font-size:12px;line-height:18px;color:#94A3B8;text-align:center;">
You're receiving this because you signed up at <a href="${SITE}" style="color:#6B7CFF;text-decoration:none;">pdf.it.com</a>.<br>
<a href="${SITE}/unsubscribe?email={{email}}" style="color:#94A3B8;text-decoration:underline;">Unsubscribe</a> &middot;
<a href="${SITE}/privacy-policy" style="color:#94A3B8;text-decoration:underline;">Privacy Policy</a>
</p>
<p style="margin:12px 0 0 0;font-size:11px;line-height:16px;color:#CBD5E1;text-align:center;">
PDF.it &middot; V.A.M. Outfitters, LLC
</p>
</td></tr>
</table>
</td>
</tr>

</table>
</td></tr>
</table>
</body>
</html>`
}

function ctaButton(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" style="margin:24px 0;">
<tr><td style="background-color:#14D8C4;border-radius:10px;padding:14px 28px;">
<a href="${href}" style="color:#0E0F1E;font-size:15px;font-weight:700;text-decoration:none;display:inline-block;">${text}</a>
</td></tr>
</table>`
}

function toolLink(label: string, path: string): string {
  return `<a href="${SITE}${path}" style="color:#6B7CFF;font-weight:600;text-decoration:none;">${label}</a>`
}

export const DRIP_EMAILS: NewsletterEmail[] = [
  {
    slug: "welcome",
    delayDays: 0,
    subject: "Welcome to PDF.it — here's how to get started",
    html: (name) => emailWrapper(`
<p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#14D8C4;text-transform:uppercase;letter-spacing:1px;">Welcome to PDF.it</p>
<h1 style="margin:0 0 16px 0;font-size:22px;font-weight:800;color:#0E0F1E;line-height:1.3;">Hey${name ? ` ${name}` : ""} — let's get you started</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#475569;">
You just joined a PDF toolkit built for people who actually work with documents. Here are 3 tools to try right now — no account needed:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:14px 16px;background-color:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;margin-bottom:8px;">
<p style="margin:0;font-size:14px;font-weight:700;color:#0E0F1E;">1. ${toolLink("Compress PDF", "/compress-pdf")}</p>
<p style="margin:4px 0 0 0;font-size:13px;color:#64748B;">Shrink files for email attachments</p>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:14px 16px;background-color:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;">
<p style="margin:0;font-size:14px;font-weight:700;color:#0E0F1E;">2. ${toolLink("Merge PDF", "/merge-pdf")}</p>
<p style="margin:4px 0 0 0;font-size:13px;color:#64748B;">Combine multiple files into one</p>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:14px 16px;background-color:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;">
<p style="margin:0;font-size:14px;font-weight:700;color:#0E0F1E;">3. ${toolLink("PDF to Word", "/pdf-to-word")}</p>
<p style="margin:4px 0 0 0;font-size:13px;color:#64748B;">Make any PDF editable</p>
</td></tr>
</table>

<p style="margin:0 0 4px 0;font-size:15px;line-height:24px;color:#475569;">
All free, up to 10 conversions per day. Files are deleted immediately after download.
</p>

${ctaButton("Try a tool now", SITE)}

<p style="margin:0;font-size:14px;line-height:22px;color:#64748B;">
Questions? Just reply to this email — I read every one.
</p>
<p style="margin:12px 0 0 0;font-size:14px;font-weight:600;color:#0E0F1E;">
— Paula, Founder of PDF.it
</p>
`, "Welcome to PDF.it — 3 free tools to try right now"),
  },

  {
    slug: "day3_nudge",
    delayDays: 3,
    subject: "Quick question — did you get a chance to try PDF.it?",
    html: (name) => emailWrapper(`
<p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#14D8C4;text-transform:uppercase;letter-spacing:1px;">Hey${name ? ` ${name}` : ""}</p>
<h1 style="margin:0 0 16px 0;font-size:22px;font-weight:800;color:#0E0F1E;line-height:1.3;">Quick nudge</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#475569;">
Have you had a chance to try any of the tools yet? If you're not sure where to start, here's what most people use first:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr>
<td style="padding:12px 16px;background-color:#F0FDFA;border-radius:8px;border-left:3px solid #14D8C4;">
<p style="margin:0;font-size:14px;color:#0E0F1E;">${toolLink("Compress PDF", "/compress-pdf")} — for email attachments</p>
</td>
</tr>
<tr><td style="height:6px;"></td></tr>
<tr>
<td style="padding:12px 16px;background-color:#F0FDFA;border-radius:8px;border-left:3px solid #14D8C4;">
<p style="margin:0;font-size:14px;color:#0E0F1E;">${toolLink("Merge PDF", "/merge-pdf")} — combine multiple files</p>
</td>
</tr>
<tr><td style="height:6px;"></td></tr>
<tr>
<td style="padding:12px 16px;background-color:#F0FDFA;border-radius:8px;border-left:3px solid #14D8C4;">
<p style="margin:0;font-size:14px;color:#0E0F1E;">${toolLink("PDF to JPG", "/pdf-to-jpg")} — extract pages as images</p>
</td>
</tr>
</table>

<p style="margin:0 0 4px 0;font-size:15px;line-height:24px;color:#475569;">
Takes about 30 seconds. No signup needed.
</p>

${ctaButton("Try it now — 30 seconds", SITE)}

<p style="margin:0;font-size:14px;line-height:22px;color:#64748B;">
If something didn't work right, I'd genuinely love to hear about it — just reply.
</p>
<p style="margin:12px 0 0 0;font-size:14px;font-weight:600;color:#0E0F1E;">
— Paula
</p>
`, "Quick nudge — have you tried any of the PDF tools yet?"),
  },

  {
    slug: "day7_ai_tools",
    delayDays: 7,
    subject: "3 AI tools most people don't know PDF.it has",
    html: (name) => emailWrapper(`
<p style="margin:0 0 6px 0;font-size:13px;font-weight:700;color:#6B7CFF;text-transform:uppercase;letter-spacing:1px;">Did you know?</p>
<h1 style="margin:0 0 16px 0;font-size:22px;font-weight:800;color:#0E0F1E;line-height:1.3;">PDF.it has AI-powered tools</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#475569;">
Most people find PDF.it for the basics — compress, merge, convert. But we also have AI tools that go way beyond that:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;background:linear-gradient(135deg,#F0F9FF,#F5F3FF);border-radius:10px;border:1px solid #DBEAFE;">
<p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#0E0F1E;">${toolLink("ATS Resume Optimizer", "/ats-optimizer")}</p>
<p style="margin:0;font-size:13px;color:#64748B;">Upload your resume and get instant feedback on how to beat applicant tracking systems</p>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:16px;background:linear-gradient(135deg,#F0F9FF,#F5F3FF);border-radius:10px;border:1px solid #DBEAFE;">
<p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#0E0F1E;">${toolLink("Chat with PDF", "/chat-with-pdf")}</p>
<p style="margin:0;font-size:13px;color:#64748B;">Ask questions about any document and get instant AI-powered answers</p>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:16px;background:linear-gradient(135deg,#F0F9FF,#F5F3FF);border-radius:10px;border:1px solid #DBEAFE;">
<p style="margin:0 0 4px 0;font-size:15px;font-weight:700;color:#0E0F1E;">${toolLink("Smart Data Extraction", "/smart-extraction")}</p>
<p style="margin:0;font-size:13px;color:#64748B;">Pull structured data from invoices, receipts, or forms into Excel/CSV/JSON</p>
</td></tr>
</table>

<p style="margin:0 0 4px 0;font-size:15px;line-height:24px;color:#475569;">
These are available on paid plans with a <strong>30-day free trial</strong> — no charge until day 31.
</p>

${ctaButton("Start your free trial", `${SITE}/pricing`)}

<p style="margin:0;font-size:14px;font-weight:600;color:#0E0F1E;">
— Paula
</p>
`, "PDF.it has AI tools you might not know about"),
  },

  {
    slug: "day14_upgrade",
    delayDays: 14,
    subject: "A quick thought on upgrading",
    html: (name) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:22px;font-weight:800;color:#0E0F1E;line-height:1.3;">Hey${name ? ` ${name}` : ""} — a quick thought</h1>
<p style="margin:0 0 20px 0;font-size:15px;line-height:24px;color:#475569;">
You've been on PDF.it for about two weeks now. I hope it's been useful.
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#475569;">
If you've been hitting the 10/day free limit, or you've wanted to try the AI tools, every paid plan comes with a <strong>30-day free trial</strong>:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:16px;border-radius:10px;border:1px solid #E2E8F0;">
<table role="presentation" width="100%"><tr>
<td style="vertical-align:top;">
<p style="margin:0;font-size:16px;font-weight:800;color:#E0C27A;">Pro</p>
<p style="margin:4px 0 0 0;font-size:13px;color:#64748B;">$3.99/mo</p>
</td>
<td style="vertical-align:top;text-align:right;">
<p style="margin:0;font-size:12px;color:#475569;">Unlimited conversions, OCR, QR, batch processing, PDF to Word/Excel/PPT</p>
</td>
</tr></table>
</td></tr>
<tr><td style="height:8px;"></td></tr>
<tr><td style="padding:16px;border-radius:10px;border:1px solid #DBEAFE;background:linear-gradient(135deg,#F0F9FF,#F5F3FF);">
<table role="presentation" width="100%"><tr>
<td style="vertical-align:top;">
<p style="margin:0;font-size:16px;font-weight:800;color:#6B7CFF;">Business</p>
<p style="margin:4px 0 0 0;font-size:13px;color:#64748B;">$13.99/mo</p>
</td>
<td style="vertical-align:top;text-align:right;">
<p style="margin:0;font-size:12px;color:#475569;">Everything in Pro + AI tools, eSign, redaction, translation, data extraction</p>
</td>
</tr></table>
</td></tr>
</table>

<p style="margin:0 0 4px 0;font-size:15px;line-height:24px;color:#475569;">
No charge for 30 days. Cancel anytime.
</p>

${ctaButton("Start your free trial", `${SITE}/pricing`)}

<p style="margin:0;font-size:14px;line-height:22px;color:#64748B;">
And if PDF.it isn't the right fit, no hard feelings — I'd still love to hear what you were looking for. Just reply.
</p>
<p style="margin:12px 0 0 0;font-size:14px;font-weight:600;color:#0E0F1E;">
— Paula
</p>
`, "Upgrade to Pro or Business — 30-day free trial"),
  },

  {
    slug: "day30_recap",
    delayDays: 30,
    subject: "One month with PDF.it — how's it going?",
    html: (name) => emailWrapper(`
<h1 style="margin:0 0 16px 0;font-size:22px;font-weight:800;color:#0E0F1E;line-height:1.3;">One month in</h1>
<p style="margin:0 0 20px 0;font-size:15px;line-height:24px;color:#475569;">
Hey${name ? ` ${name}` : ""} — it's been about a month since you joined PDF.it. Quick question:
</p>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="margin-bottom:24px;">
<tr><td style="padding:20px;background-color:#F8FAFC;border-radius:10px;border:1px solid #E2E8F0;text-align:center;">
<p style="margin:0;font-size:18px;font-weight:700;color:#0E0F1E;">Is there a tool or feature you wish we had?</p>
<p style="margin:8px 0 0 0;font-size:14px;color:#64748B;">Just reply to this email — I read every one.</p>
</td></tr>
</table>

<p style="margin:0 0 20px 0;font-size:15px;line-height:24px;color:#475569;">
I'm a solo founder and I build based on what real users ask for. Your reply goes directly to my inbox — no support queue, no ticket system, just me.
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#475569;">
If you've been enjoying PDF.it, the single most helpful thing you can do is <strong>forward this email to one colleague</strong> who works with PDFs. That's how a small tool grows.
</p>

${ctaButton("Visit PDF.it", SITE)}

<p style="margin:0;font-size:14px;line-height:22px;color:#64748B;">
Thank you for being here.
</p>
<p style="margin:12px 0 0 0;font-size:14px;font-weight:600;color:#0E0F1E;">
— Paula
</p>
`, "One month — is there a feature you wish we had?"),
  },
]

/**
 * Get which drip email (if any) a subscriber is eligible for today.
 * Returns the first unsent email whose delay has elapsed, or null.
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
