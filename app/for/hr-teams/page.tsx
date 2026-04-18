import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Users, Shield, FileSignature, EyeOff, FileSpreadsheet, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF Tools for HR Teams — eSign Offers, Redact PII & Process Onboarding Packets | PDF.it",
  description:
    "PDF tools built for HR and People Ops. eSign offer letters, redact PII from applications, merge onboarding packets, and extract form data to Excel. Files deleted immediately after download.",
  keywords: [
    "PDF tools for HR",
    "HR onboarding PDF tools",
    "eSign offer letters",
    "redact PII applicant PDF",
    "PDF form data extraction HR",
    "HR document automation",
    "employee onboarding packet PDF",
    "I-9 form PDF tools",
    "W-4 form PDF tools",
    "secure HR PDF tools",
  ],
  openGraph: {
    title: "PDF Tools for HR Teams — eSign Offers, Redact PII & Process Onboarding Packets | PDF.it",
    description:
      "eSign offer letters, redact PII from applications, merge onboarding packets, and extract form data to Excel. Files deleted immediately.",
    url: "https://pdf.it.com/for/hr-teams",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it for HR Teams" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools for HR Teams — eSign Offers, Redact PII & Process Onboarding Packets",
    description:
      "eSign offers, redact PII, merge onboarding packets, and extract form data. Files deleted immediately.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/for/hr-teams",
    languages: {
      en: "https://pdf.it.com/for/hr-teams",
      es: "https://pdf.it.com/es/para/recursos-humanos",
      pt: "https://pdf.it.com/br/para/equipes-rh",
    },
  },
}

const faqs = [
  {
    q: "Can I eSign an offer letter on PDF.it?",
    a: "Yes. Upload the offer letter, add signature fields, and send it to the candidate. Signatures are session-only — we never store reusable signature libraries server-side, which keeps candidate data out of any vendor database.",
  },
  {
    q: "Can HR redact PII from applicant materials for blind review?",
    a: "Yes. Our redaction tool permanently removes names, addresses, photos, and any other identifying information from applicant PDFs. The redacted content is deleted at the object level — it's not just covered with a black box.",
  },
  {
    q: "Does PDF.it store employee documents?",
    a: "No. Files are processed in real time and deleted as soon as you download the result. All transfers are SSL-encrypted. I-9s, W-4s, offer letters, and performance reviews never sit on our servers.",
  },
  {
    q: "Can I extract form data from a stack of onboarding PDFs?",
    a: "Yes. Use smart extraction to request specific fields — legal name, start date, department, emergency contact — and get a structured output you can push into your HRIS or a new-hire spreadsheet.",
  },
  {
    q: "What plan should an HR team pick?",
    a: "The Business plan covers most People Ops workflows: redaction, eSign, smart extraction, 1GB files, and unlimited conversions. Enterprise is the right fit for HR teams at larger organizations running workflow automation across dozens of hires per month.",
  },
]

export default function ForHrTeamsPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <Header />
      <main>
        {/* ── Hero ── */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Users className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Tools Built for HR & People Ops</h1>
              <p className="text-xl text-slate-300 mb-8">
                Send offer letters for signature, redact PII for blind reviews, merge onboarding packets, and extract form data — without installing software. Files are deleted immediately after download.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Start free trial <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  See pricing
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Where HR Spends More Time Than It Should</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Hiring, onboarding, and employee lifecycle events are full of PDFs that need to be signed, redacted, merged, or parsed. PDF.it fixes the six problems that eat up the most time in a People Ops week.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Offer letters sitting unsigned", desc: "Print-sign-scan-email cycles stretch the time between offer and accepted offer. Candidates disengage when it takes days to move paperwork." },
                { title: "PII in applicant reviews", desc: "Blind review processes need names, photos, and identifying details removed — permanently, not covered with a shape." },
                { title: "Onboarding packets in ten pieces", desc: "I-9, W-4, handbook acknowledgment, direct deposit, emergency contact, benefits forms — new hires receive these as separate files that should be one packet." },
                { title: "Forms that have to become spreadsheet rows", desc: "When 40 new hires submit paper forms, turning that stack into an HRIS upload is a manual slog." },
                { title: "Employee documents that must stay private", desc: "Salary info, SSNs, medical leave paperwork — these can't sit on a third-party vendor's servers or go out over unsecured channels." },
                { title: "Large benefits guides and handbooks", desc: "Benefits packages and employee handbooks run into hundreds of pages. They exceed email limits and slow down new-hire email chains." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Core Tools ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">The Six Tools HR Uses Every Week</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Every tool below runs in your browser. No desktop installs, no uploaded files left on a vendor's server.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSignature, title: "eSign Offer Letters", desc: "Send offers for signature in seconds. Session-only signatures — nothing persists on our servers. Candidates sign in their browser and you get a signed PDF back.", href: "/esign", cta: "Send for signature" },
                { icon: EyeOff, title: "PDF Redaction", desc: "Permanently remove names, photos, and identifying details from applicant materials for blind reviews. Object-level redaction — content is gone, not covered.", href: "/pdf-redaction", cta: "Redact a PDF" },
                { icon: Archive, title: "Merge Onboarding Packets", desc: "Combine I-9, W-4, handbook acknowledgment, and benefits forms into one onboarding PDF. New hires see a clean, single file instead of ten attachments.", href: "/merge-pdf", cta: "Merge documents" },
                { icon: FileSpreadsheet, title: "Smart Extraction", desc: "Pull specific fields out of stacks of onboarding forms — name, start date, department, emergency contact — and get structured data ready for your HRIS.", href: "/smart-extraction", cta: "Extract data" },
                { icon: Lock, title: "Password Protect", desc: "AES-256 encryption on performance reviews, salary letters, and termination paperwork. Share sensitive PDFs without worrying about forwarded attachments.", href: "/encrypt-pdf", cta: "Protect a PDF" },
                { icon: FileSpreadsheet, title: "Compress Benefits Guides", desc: "Shrink 200-page benefits packages so they fit in welcome emails and don't bounce off inbox size limits.", href: "/compress-pdf", cta: "Compress a PDF" },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <tool.icon className="h-6 w-6 text-[#14D8C4]" />
                      <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6]">
                      {tool.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflows ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Four Real Workflows</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              These are the sequences HR teams and People Ops run on PDF.it during hiring, onboarding, and employee lifecycle events.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Sending an offer letter and getting it back signed",
                  steps: [
                    "Open /esign and upload the offer letter.",
                    "Add signature and date fields for the candidate.",
                    "Send via email link. Candidate signs in their browser.",
                    "Download the signed PDF for the employee file. Original and signed versions never persist on our servers.",
                  ],
                },
                {
                  title: "Prepping a blind review of applicant materials",
                  steps: [
                    "Upload each applicant's packet to /pdf-redaction.",
                    "Redact name, photo, school names, and any other identifying content.",
                    "Download the redacted versions and hand them to the interview panel.",
                  ],
                },
                {
                  title: "Building a new-hire onboarding packet",
                  steps: [
                    "Combine I-9, W-4, handbook acknowledgment, direct deposit, and benefits forms at /merge-pdf.",
                    "Compress the merged packet at /compress-pdf so it fits in the welcome email.",
                    "Password-protect if you're including bank or salary info.",
                  ],
                },
                {
                  title: "Turning a stack of paper forms into HRIS rows",
                  steps: [
                    "Scan new-hire forms at 300 DPI.",
                    "Run them through /ocr-scanner to add a text layer.",
                    "Use /smart-extraction to request name, start date, department, emergency contact as fields.",
                    "Download the structured data and upload to your HRIS.",
                  ],
                },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{w.title}</h3>
                  <ol className="space-y-2">
                    {w.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14D8C4]/15 text-[#0B9B8B] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plan Pick ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">Which Plan Fits an HR Team?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              eSign, redaction, and smart extraction are all Business-tier. That's where most People Ops teams land.
            </p>
            <div
              className="rounded-xl p-[1px]"
              style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}
            >
              <div
                className="rounded-[11px] p-8"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Business</h3>
                  <span className="text-[#6B7CFF] font-semibold">$13.99/month</span>
                  <span className="text-slate-400 text-sm">— recommended for HR & People Ops</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "eSign with session-only signatures",
                    "PDF redaction (object-level)",
                    "Smart extraction for forms",
                    "OCR scanner",
                    "Password protect & AES-256 encryption",
                    "Files up to 1GB",
                    "Unlimited conversions & batch processing",
                    "Table extraction — 200 pages/month",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/signup"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Start 30-day free trial
                  </Link>
                  <Link
                    href="/pricing"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Compare all plans
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">Hiring at scale? Enterprise unlocks workflow automation templates, 2,000 pages/month of table extraction, and priority processing.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Compliance ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-[#14D8C4] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Employee Data Stays Private</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it processes your files in real time and deletes them the moment you download the result. We never store, read, index, or share your documents. SSNs, I-9s, W-4s, salary letters, and performance reviews never sit on our servers.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Files deleted immediately after download",
                  "SSL-encrypted transfers",
                  "AES-256 encryption on password-protected PDFs",
                  "No reusable signature libraries stored server-side",
                  "No file storage, ever",
                  "No indexing, no analytics on document contents",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="text-[#14D8C4] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Days of Business Plan, Free</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Start with the full Business tier — eSign, redaction, smart extraction, 1GB files. No charge for 30 days. Cancel any time.
            </p>
            <Link
              href="/signup"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Start free trial <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
