import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import type { Metadata } from "next"
import { Calculator, Shield, FileSpreadsheet, Receipt, FileSearch, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "PDF Tools for Accountants — Extract Tables, Process Invoices & Secure Client Data | PDF.it",
  description:
    "PDF tools built for accounting and bookkeeping teams. Extract tables from bank statements and invoices, convert PDFs to Excel, compress archives, and protect client files. Files deleted immediately.",
  keywords: [
    "PDF tools for accountants",
    "bank statement to Excel",
    "invoice data extraction",
    "PDF to Excel for accountants",
    "PDF table extraction",
    "pdf tools for bookkeeping",
    "secure client PDF tools",
    "tax document PDF tools",
    "CPA PDF tools",
    "Adobe Acrobat alternative accountants",
  ],
  openGraph: {
    title: "PDF Tools for Accountants — Extract Tables, Process Invoices & Secure Client Data | PDF.it",
    description:
      "Extract tables from bank statements and invoices, convert PDFs to Excel, compress archives, and protect client files. Files deleted immediately.",
    url: "https://pdf.it.com/for/accountants",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it for Accountants" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PDF Tools for Accountants — Extract Tables, Process Invoices & Secure Client Data",
    description:
      "Extract tables from bank statements and invoices, convert PDFs to Excel, and protect client files. Files deleted immediately.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/for/accountants",
    languages: {
      en: "https://pdf.it.com/for/accountants",
      es: "https://pdf.it.com/es/para/contadores",
      pt: "https://pdf.it.com/br/para/contadores",
    },
  },
}

const faqs = [
  {
    q: "How accurate is table extraction from bank statements?",
    a: "PDF.it uses Google Document AI's Form Parser under the hood, which handles multi-column bank statements, credit card statements, and vendor invoices with structured tables reliably. For scanned statements, run OCR first so the text is machine-readable, then extract.",
  },
  {
    q: "Can I extract tables from scanned PDFs?",
    a: "Yes. Send the scanned PDF through our OCR scanner first to add a text layer, then run table extraction. The combined workflow turns paper statements, historical archives, and faxed invoices into XLSX files.",
  },
  {
    q: "Does PDF.it store client financial documents?",
    a: "No. Files are processed in real time and deleted the moment you download the result. All transfers are SSL-encrypted. We never store, read, index, or share your documents — which matters when you're handling W-2s, 1099s, bank statements, and tax returns.",
  },
  {
    q: "Can I password-protect tax returns before sending them to clients?",
    a: "Yes. Our encrypt-pdf tool applies AES-256 encryption with a password of your choice. Many CPAs pair the password with the last four digits of the client's SSN or a shared phrase established during onboarding.",
  },
  {
    q: "What plan covers accounting workflows?",
    a: "Business is the right fit for most firms: 200 pages/month of table extraction, 1GB files, unlimited conversions, and eSign for engagement letters. High-volume firms or anyone digitizing historical archives should look at Enterprise for 2,000 pages/month.",
  },
]

export default function ForAccountantsPage() {
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
                <Calculator className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Tools Built for Accounting Teams</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull tables out of bank statements, digitize vendor invoices, convert PDFs to Excel, and protect client returns — all without leaving your browser. Files are deleted immediately after download.
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
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Where Accounting Teams Lose Hours Every Week</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              A surprising amount of an accountant's week is spent moving numbers out of PDFs — bank statements, vendor invoices, expense reports, 1099s. PDF.it cuts that work down to minutes instead of hours.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Bank statements locked in PDFs", desc: "Month-end close means dozens of statements to reconcile. Retyping amounts into Excel is slow and mistake-prone." },
                { title: "Invoices that don't map cleanly to QuickBooks", desc: "Vendor invoices arrive in inconsistent layouts. Getting line items into your accounting software requires manual entry." },
                { title: "Scanned historical archives", desc: "Years of paper statements in file cabinets need to become machine-readable before they're useful for audits or reviews." },
                { title: "Large tax return packages", desc: "Consolidated returns with schedules and K-1s easily exceed 50MB — too big for client portals and email attachments." },
                { title: "Engagement letters that sit unsigned", desc: "Printing, signing, scanning, and emailing engagement letters is a bottleneck at the start of every tax season." },
                { title: "Client data that has to stay private", desc: "SSNs, EIN numbers, and account balances can't be sent over unsecured channels. Password-protection on outgoing PDFs is non-negotiable." },
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">The Six Tools Every Firm Uses</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Every tool below runs in your browser. No plugins, no desktop installs, no uploaded files sitting on a vendor's server.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSpreadsheet, title: "Table Extraction to Excel", desc: "Pull line items out of bank statements, credit card statements, and vendor invoices straight into XLSX. Works on both digital and scanned PDFs.", href: "/table-extraction", cta: "Extract tables" },
                { icon: FileSpreadsheet, title: "PDF to Excel", desc: "Convert entire PDFs to XLSX in one pass. Preserves column structure, headers, and number formatting where possible.", href: "/pdf-to-excel", cta: "Convert PDF to Excel" },
                { icon: Receipt, title: "Smart Extraction", desc: "Ask for specific fields — invoice number, due date, total, vendor name — and get a structured JSON output. Great for batch invoice processing.", href: "/smart-extraction", cta: "Extract data" },
                { icon: FileSearch, title: "OCR Scanner", desc: "Turn scanned statements and faxed invoices into searchable, extractable text. A required first step before pulling tables out of scans.", href: "/ocr-scanner", cta: "Run OCR" },
                { icon: Lock, title: "Password Protect & eSign", desc: "AES-256 encryption on tax returns before you send them. Session-only eSign for engagement letters — no signature library stored server-side.", href: "/encrypt-pdf", cta: "Protect a PDF" },
                { icon: Archive, title: "Compress & Merge Archives", desc: "Combine K-1s, schedules, and worksheets into one clean PDF. Compress large packages to fit client portal upload limits.", href: "/compress-pdf", cta: "Compress a PDF" },
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
              These are sequences bookkeepers, CPAs, and in-house finance teams run on PDF.it during close, audit, and tax season.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Reconciling a month of bank statements",
                  steps: [
                    "Upload each statement to /table-extraction.",
                    "Let Document AI parse the transactions into structured rows.",
                    "Download the XLSX and import into QuickBooks, Xero, or your general ledger.",
                    "Total reconciliation time drops from hours of retyping to minutes of review.",
                  ],
                },
                {
                  title: "Digitizing a stack of vendor invoices",
                  steps: [
                    "Run each invoice through /smart-extraction.",
                    "Request invoice number, date, vendor, subtotal, tax, total as fields.",
                    "Get a clean JSON you can paste into QuickBooks or your AP system.",
                  ],
                },
                {
                  title: "Preparing a consolidated tax return for a client",
                  steps: [
                    "Merge the 1040, schedules, and K-1s at /merge-pdf.",
                    "Compress the merged file at /compress-pdf if it exceeds the client portal's size limit.",
                    "Password-protect the final PDF at /encrypt-pdf before sending.",
                  ],
                },
                {
                  title: "Digitizing a historical paper archive",
                  steps: [
                    "Scan a batch of old statements at 300 DPI.",
                    "Run them through /ocr-scanner to make the text extractable.",
                    "Push the searchable PDFs through /table-extraction to build an audit-ready Excel.",
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">Which Plan Fits an Accounting Firm?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              Table extraction is Business-tier. That's where most firms start. High-volume shops and anyone digitizing archives move to Enterprise for the 2,000 pages/month cap.
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
                  <span className="text-slate-400 text-sm">— recommended for CPAs & bookkeepers</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Table extraction — 200 pages/month",
                    "Smart extraction for invoice fields",
                    "PDF to Excel / Word / PowerPoint",
                    "OCR scanner",
                    "eSign with session-only signatures",
                    "Password protect & AES-256 encryption",
                    "Files up to 1GB",
                    "Unlimited conversions & batch processing",
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
                <p className="text-xs text-slate-400 mt-4">Reconciling more than 200 pages/month? Enterprise unlocks 2,000 pages + priority processing queue.</p>
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
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Client Data Stays Private</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it processes your files in real time and deletes them the moment you download the result. We never store, read, index, or share your documents. All transfers are SSL-encrypted. Tax returns, W-2s, 1099s, and bank statements never sit on our servers.
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
              Start with the full Business tier — table extraction, smart extraction, eSign, 1GB files. No charge for 30 days. Cancel any time.
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
