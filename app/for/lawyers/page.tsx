import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Scale, Shield, FileSignature, EyeOff, FileSearch, GitCompare, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF Tools for Lawyers — Redact, eSign & Compare Legal Documents | PDF.it",
  description:
    "PDF tools built for legal teams. Permanently redact privileged data, eSign contracts, compare document versions, and password-protect filings. Files deleted immediately after download.",
  keywords: [
    "PDF tools for lawyers",
    "PDF redaction for legal",
    "legal document eSign",
    "compare PDF versions lawyers",
    "password protect legal PDF",
    "PDF for law firms",
    "Bates numbering alternative",
    "privileged document redaction",
    "court filing PDF tools",
    "Adobe Acrobat alternative for lawyers",
  ],
  openGraph: {
    title: "PDF Tools for Lawyers — Redact, eSign & Compare Legal Documents | PDF.it",
    description:
      "PDF tools built for legal teams. Permanently redact privileged data, eSign contracts, compare document versions, and password-protect filings.",
    url: "https://pdf.it.com/for/lawyers",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it for Lawyers" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools for Lawyers — Redact, eSign & Compare Legal Documents",
    description:
      "Redact privileged data, eSign contracts, compare versions, and protect filings. Files deleted immediately after download.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/for/lawyers",
    languages: {
      en: "https://pdf.it.com/for/lawyers",
      es: "https://pdf.it.com/es/para/abogados",
      pt: "https://pdf.it.com/br/para/advogados",
    },
  },
}

const faqs = [
  {
    q: "Is PDF.it's redaction permanent?",
    a: "Yes. Our redaction tool permanently removes the selected text and images from the PDF — it doesn't just cover them with a black box. After redaction the content is gone from the file, which means opposing counsel can't copy-paste hidden text or inspect the underlying object.",
  },
  {
    q: "Can I use PDF.it for court filings?",
    a: "Yes. PDF.it produces standards-compliant PDFs suitable for most court e-filing systems. You can flatten form fields, redact privileged content, password-protect sensitive exhibits, and compress files below the size limits that CM/ECF and state e-filing portals enforce.",
  },
  {
    q: "Does PDF.it store my documents?",
    a: "No. Files are processed in real time and deleted as soon as you download the result. All transfers are SSL-encrypted. We never store, read, index, or share your documents.",
  },
  {
    q: "Can I compare two versions of a contract?",
    a: "Yes — our PDF compare tool shows side-by-side differences between two versions, highlighting changed, added, and removed text. It's useful for contract redlining, markup reviews, and confirming that counterparty edits match what you negotiated.",
  },
  {
    q: "What plan should a solo practitioner or small firm pick?",
    a: "The Business plan covers most legal workflows: redaction, eSign, PDF compare, files up to 1GB, and table extraction for discovery schedules. Larger firms handling high-volume discovery should consider Enterprise for the 2,000-page/month table extraction and priority processing queue.",
  },
]

export default function ForLawyersPage() {
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
                <Scale className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Tools Built for Legal Teams</h1>
              <p className="text-xl text-slate-300 mb-8">
                Redact privileged content, eSign contracts, compare revisions, and prepare court filings — without installing Acrobat. Files are deleted immediately after download.
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
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">The Document Problems Legal Teams Deal With Daily</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Most legal document work is repetitive, time-sensitive, and high-stakes. A missed redaction, a version mix-up, or a filing that exceeds the portal's size limit can derail an entire day. PDF.it fixes the five problems law firms hit most often.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Redaction that actually removes text", desc: "Black boxes drawn in Word or Preview don't remove the underlying content — opposing counsel can often recover it. Permanent, object-level redaction matters." },
                { title: "Version confusion in long contracts", desc: "When a deal has five redlines across three counterparties, tracking what changed between v4 and v5 by eye is slow and error-prone." },
                { title: "Court portal size limits", desc: "CM/ECF, PACER, and most state portals cap uploads between 10MB and 50MB. Exhibits often exceed the limit on the first try." },
                { title: "Signing chains that drag for days", desc: "Printing, signing, scanning, and emailing a contract back is a half-day of lost productivity per party." },
                { title: "Discovery schedules trapped in PDFs", desc: "Tables inside scanned productions or exported exhibit lists have to be re-keyed into Excel when the underlying data isn't machine-readable." },
                { title: "Privileged content sent in editable formats", desc: "Word docs and unlocked PDFs can be altered after you send them. Password-protection and flattening lock the file down." },
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">The Five Tools You'll Use Every Week</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Every tool below runs in your browser. No installs, no plugins, no file storage.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: EyeOff, title: "PDF Redaction", desc: "Permanently remove names, SSNs, account numbers, and privileged text from any PDF. The redacted content is deleted from the file — not just visually covered.", href: "/pdf-redaction", cta: "Redact a PDF" },
                { icon: FileSignature, title: "eSign", desc: "Send contracts for signature in seconds. Session-only signatures — we never store reusable signature libraries on our servers.", href: "/esign", cta: "Sign a document" },
                { icon: GitCompare, title: "PDF Compare", desc: "Side-by-side diff between two PDF versions. Changed, added, and removed text is highlighted so you can redline in minutes.", href: "/pdf-compare", cta: "Compare versions" },
                { icon: Lock, title: "Password Protect & Encrypt", desc: "AES-256 encryption on any PDF before it leaves your desk. Flatten forms so fields can't be edited by the recipient.", href: "/encrypt-pdf", cta: "Protect a PDF" },
                { icon: FileSearch, title: "Table Extraction to Excel", desc: "Pull exhibit lists, discovery schedules, and deposition tables out of PDFs and straight into XLSX. Works on scanned docs too.", href: "/table-extraction", cta: "Extract tables" },
                { icon: Shield, title: "Compress for E-Filing", desc: "Shrink exhibits to fit CM/ECF, PACER, and state court portal limits without turning scanned documents unreadable.", href: "/compress-pdf", cta: "Compress a PDF" },
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
              These are the exact sequences small firms and in-house legal teams run on PDF.it every week.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Redacting a client production",
                  steps: [
                    "Upload the PDF to /pdf-redaction.",
                    "Select the names, account numbers, and privileged text to remove.",
                    "Apply redactions — content is deleted at the object level, not covered.",
                    "Download the redacted PDF. The original never leaves your browser.",
                  ],
                },
                {
                  title: "Comparing contract revisions",
                  steps: [
                    "Open /pdf-compare and upload v4 and v5 of the contract.",
                    "Review the side-by-side diff — added, removed, and changed text is highlighted.",
                    "Export a summary of the changes for your redline memo.",
                  ],
                },
                {
                  title: "Preparing a filing for CM/ECF",
                  steps: [
                    "Merge the brief + exhibits at /merge-pdf.",
                    "Compress the combined file at /compress-pdf to get under the 50MB portal limit.",
                    "Flatten any fillable fields so the court can't accidentally edit the form.",
                    "Upload to CM/ECF in one go instead of splitting into parts.",
                  ],
                },
                {
                  title: "Signing an NDA with a counterparty",
                  steps: [
                    "Open /esign and upload the NDA.",
                    "Sign with a session-only signature — no library stored server-side.",
                    "Email the signed PDF to the counterparty. Password-protect first if the NDA is sensitive.",
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">Which Plan Fits a Legal Team?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              Redaction, eSign, and PDF compare are all Business-tier features. Most small firms and in-house teams land here.
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
                  <span className="text-slate-400 text-sm">— recommended for lawyers</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "PDF redaction (permanent, object-level)",
                    "eSign with session-only signatures",
                    "PDF compare (side-by-side diff)",
                    "Password protect & AES-256 encryption",
                    "Table extraction — 200 pages/month",
                    "Files up to 1GB",
                    "Unlimited conversions",
                    "Batch processing",
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
                <p className="text-xs text-slate-400 mt-4">High-volume discovery? Enterprise unlocks 2,000 pages/month of table extraction + priority queue.</p>
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
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Privilege and Confidentiality, Built In</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it processes your files in real time and deletes them the moment you download the result. We never store, read, index, or share documents. All transfers are SSL-encrypted. Redactions are permanent and object-level, not cosmetic overlays.
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
                  "No indexing, no analytics on your document contents",
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
              Start with the full Business tier — redaction, eSign, compare, table extraction, 1GB files. No charge for 30 days. Cancel any time.
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
