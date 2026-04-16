/**
 * Newsletter drip email definitions.
 *
 * Each email has a slug (for deduplication), a delay (days after signup),
 * a subject, and a plain-text body builder. HTML is deliberately minimal —
 * plain-text emails have higher deliverability and feel more personal
 * from a solo founder.
 *
 * Add new emails here. The cron at /api/cron/newsletter-drip checks which
 * subscribers are eligible for each email and sends via Resend.
 */

export interface NewsletterEmail {
  slug: string
  delayDays: number
  subject: string
  body: (name?: string) => string
}

const SITE = "https://www.pdf.it.com"

export const DRIP_EMAILS: NewsletterEmail[] = [
  {
    slug: "welcome",
    delayDays: 0,
    subject: "Welcome to PDF.it — here's how to get the most out of it",
    body: (name) => `Hi${name ? ` ${name}` : ""} — welcome to PDF.it!

You just joined a PDF toolkit built for people who actually work with documents.

Here are 3 tools to try right now (no account needed):

1. Compress PDF — shrink files for email attachments
   ${SITE}/compress-pdf

2. Merge PDF — combine multiple files into one
   ${SITE}/merge-pdf

3. PDF to Word — make any PDF editable
   ${SITE}/pdf-to-word

All free, up to 10 conversions per day. Files are deleted immediately after download.

If you need more (unlimited conversions, AI tools, batch processing), every paid plan has a 30-day free trial: ${SITE}/pricing

Questions? Just reply to this email — I read every one.

— Paula
Founder, PDF.it`,
  },

  {
    slug: "day3_nudge",
    delayDays: 3,
    subject: "Quick question — did you get a chance to try PDF.it?",
    body: (name) => `Hi${name ? ` ${name}` : ""},

Just checking in — have you had a chance to try any of the tools yet?

If you're not sure where to start, here's what most people use first:

• Compress PDF (for email attachments): ${SITE}/compress-pdf
• Merge PDF (combine multiple files): ${SITE}/merge-pdf
• PDF to JPG (extract pages as images): ${SITE}/pdf-to-jpg

Takes about 30 seconds. No signup needed.

If something didn't work right or felt confusing, I'd genuinely love to hear about it — reply to this email anytime.

— Paula`,
  },

  {
    slug: "day7_ai_tools",
    delayDays: 7,
    subject: "3 AI tools most people don't know PDF.it has",
    body: (name) => `Hi${name ? ` ${name}` : ""},

Most people find PDF.it for the basics — compress, merge, convert. But we also have AI-powered tools that go way beyond that:

1. ATS Resume Optimizer — upload your resume and get instant feedback on how to beat applicant tracking systems
   ${SITE}/ats-optimizer

2. Chat with PDF — ask questions about any document and get instant answers
   ${SITE}/chat-with-pdf

3. Smart Data Extraction — pull structured data from invoices, receipts, or forms into Excel/CSV/JSON
   ${SITE}/smart-extraction

These are available on paid plans with a 30-day free trial (no charge until day 31): ${SITE}/pricing

Worth trying if you work with contracts, invoices, resumes, or research papers.

— Paula`,
  },

  {
    slug: "day14_upgrade",
    delayDays: 14,
    subject: "A quick thought on upgrading",
    body: (name) => `Hi${name ? ` ${name}` : ""},

You've been on PDF.it for about two weeks now. I hope it's been useful.

If you've been hitting the 10/day free limit, or you've wanted to try the AI tools, every paid plan comes with a 30-day free trial:

• Pro ($3.99/mo) — unlimited conversions, PDF to Word/Excel/PPT, OCR, QR codes, batch processing
• Business ($13.99/mo) — everything in Pro + AI tools (chat with PDF, summarizer, translator, data extraction, eSign, redaction)

No charge for 30 days. Cancel anytime.

Start your free trial: ${SITE}/pricing

And if PDF.it isn't the right fit, no hard feelings — I'd still love to hear what you were looking for. Just reply.

— Paula`,
  },

  {
    slug: "day30_recap",
    delayDays: 30,
    subject: "One month with PDF.it — how's it going?",
    body: (name) => `Hi${name ? ` ${name}` : ""},

It's been about a month since you joined PDF.it. Quick question:

Is there a tool or feature you wish we had?

I'm a solo founder and I build based on what real users ask for. Your reply goes directly to my inbox — no support queue, no ticket system, just me.

If you've been enjoying PDF.it, the single most helpful thing you can do is forward this email to one colleague who works with PDFs. That's how a small tool grows.

Thank you for being here.

— Paula
${SITE}`,
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
