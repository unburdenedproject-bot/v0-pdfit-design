/**
 * Pre-written weekly newsletter templates.
 *
 * Paula picks one, inserts it into `newsletter_campaigns` table,
 * then triggers /api/send-broadcast to send to all subscribers.
 *
 * Each email follows the approved LinkSplasher aesthetic:
 * bold gradient header, clean white body, one teal pill CTA, minimal footer.
 *
 * Usage:
 *   1. Pick an email from this file
 *   2. Insert into Supabase: newsletter_campaigns (subject, body_html, status='draft')
 *   3. Copy the campaign UUID
 *   4. Ask Claude: "Send broadcast campaign <UUID>"
 *   5. Or curl: POST /api/send-broadcast -H "Authorization: Bearer $CRON_SECRET" -d '{"campaignId":"<UUID>"}'
 */

const SITE = "https://www.pdf.it.com"
const TEAL = "#14D8C4"
const DARK = "#0E0F1E"
const INDIGO = "#6B7CFF"

function wrap(content: string, preheader: string): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"></head>
<body style="margin:0;padding:0;background-color:#F0F0F5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
<div style="display:none;max-height:0;overflow:hidden;">${preheader}</div>
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#F0F0F5;">
<tr><td align="center" style="padding:40px 16px;">
<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width:520px;background-color:#ffffff;border-radius:16px;overflow:hidden;">
<tr><td style="background:linear-gradient(135deg, ${DARK} 0%, #1a1f5e 50%, ${INDIGO} 100%);padding:28px 32px;text-align:center;">
<span style="font-size:22px;font-weight:800;color:#ffffff;letter-spacing:0.5px;">PDF</span><span style="font-size:22px;font-weight:800;color:${TEAL};letter-spacing:0.5px;">.it</span><span style="font-size:11px;font-weight:600;color:#ffffff;vertical-align:super;">™</span>
</td></tr>
<tr><td style="padding:36px 36px 32px 36px;">
${content}
</td></tr>
<tr><td style="padding:0 36px 28px 36px;text-align:center;">
<p style="margin:0;font-size:12px;line-height:18px;color:#A0A0B0;">
You're receiving this because you signed up at <a href="${SITE}" style="color:${INDIGO};text-decoration:none;">pdf.it.com</a>
</p>
</td></tr>
</table>
</td></tr>
</table>
</body>
</html>`
}

function cta(text: string, href: string): string {
  return `<table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="margin:28px 0 8px 0;">
<tr><td align="center">
<a href="${href}" style="display:inline-block;background-color:${TEAL};color:${DARK};font-size:15px;font-weight:700;text-decoration:none;padding:14px 36px;border-radius:50px;">${text}</a>
</td></tr>
</table>`
}

export const WEEKLY_NEWSLETTERS = [
  {
    week: 1,
    subject: "PDF.it™ ◆ Tool of the week: Compress PDF",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Tool of the week: Compress PDF</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Ever get that "file too large" bounce-back when emailing a PDF? Compress PDF fixes it in one click — no quality loss, no signup needed.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">1.</span> Upload your PDF
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">2.</span> Pick your compression level (Light, Medium, or Extreme)
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">3.</span> Download — typically 50-80% smaller
</p>
${cta("Try Compress PDF", `${SITE}/compress-pdf`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Shrink any PDF for email in one click"),
  },

  {
    week: 2,
    subject: "PDF.it™ ◆ Tool of the week: Merge PDF",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Tool of the week: Merge PDF</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Stop sending 5 separate attachments. Merge PDF combines multiple files into one clean document — perfect for reports, applications, and client packages.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">1.</span> Upload 2 or more PDFs
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">2.</span> Drag to reorder pages
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">3.</span> Download one combined file
</p>
${cta("Try Merge PDF", `${SITE}/merge-pdf`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Combine multiple PDFs into one document"),
  },

  {
    week: 3,
    subject: "PDF.it™ ◆ Did you know? You can chat with any PDF",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Chat with any PDF using AI</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Instead of reading a 50-page contract or report, just ask it questions. Chat with PDF uses AI to give you instant answers from any document.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Ask:</span> "What are the key terms of this contract?"
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Ask:</span> "Summarize the findings on page 12"
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Ask:</span> "What deadlines are mentioned?"
</p>
<p style="margin:0 0 4px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Available on the Business plan with a <strong>30-day free trial</strong>.
</p>
${cta("Try Chat with PDF", `${SITE}/chat-with-pdf`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Ask questions about any document — AI answers instantly"),
  },

  {
    week: 4,
    subject: "PDF.it™ ◆ Job hunting? Your resume might be getting filtered out",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Is your resume getting past the ATS?</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
75% of resumes are rejected by Applicant Tracking Systems before a human ever sees them. Our ATS Resume Optimizer analyzes your resume and tells you exactly what to fix.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">1.</span> Upload your resume PDF
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">2.</span> Get a score + specific fixes (formatting, keywords, sections)
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">3.</span> Download the optimized version as a Word doc
</p>
${cta("Check your resume now", `${SITE}/ats-optimizer`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "75% of resumes get filtered by ATS — check yours"),
  },

  {
    week: 5,
    subject: "PDF.it™ ◆ Extract tables from PDFs to Excel in seconds",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Tables stuck in a PDF? Get them into Excel</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
If you've ever manually retyped data from a PDF table into a spreadsheet, this one's for you. Table Extraction uses AI to pull structured data directly into Excel — even from scanned documents.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">Works on:</span> Financial statements, invoices, lab reports, government forms
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${TEAL};font-weight:700;">Output:</span> Clean Excel file (.xlsx) ready to use
</p>
${cta("Try Table Extraction", `${SITE}/table-extraction`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Pull tables from PDFs into Excel — no retyping"),
  },

  {
    week: 6,
    subject: "PDF.it™ ◆ Translate any PDF to 13 languages with AI",
    html: wrap(`
<h1 style="margin:0 0 16px 0;font-size:24px;font-weight:800;color:${DARK};line-height:1.3;">Translate entire documents in seconds</h1>
<p style="margin:0 0 24px 0;font-size:15px;line-height:25px;color:#4A4A5A;">
Working with documents in another language? Translate PDF converts entire documents to any of 13 languages using AI — keeping the meaning and context intact.
</p>
<p style="margin:0 0 10px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Languages:</span> English, Spanish, Portuguese, French, German, Italian, Dutch, Chinese, Japanese, Korean, Arabic, Russian, Hindi
</p>
<p style="margin:0 0 24px 0;font-size:15px;line-height:24px;color:#4A4A5A;">
<span style="color:${INDIGO};font-weight:700;">Perfect for:</span> Contracts, research papers, reports, immigration documents
</p>
${cta("Try Translate PDF", `${SITE}/translate-pdf`)}
<p style="margin:24px 0 0 0;font-size:14px;font-weight:600;color:${DARK};">— Paula</p>
`, "Translate entire PDFs to 13 languages with AI"),
  },
]
