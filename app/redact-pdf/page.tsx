import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Zap, Lock, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Redact PDF Online — Permanently Remove Sensitive Information | PDF.it",
  description:
    "Redact sensitive text and data from PDFs with PDF.it. Permanently black out confidential information before sharing — secure, fast, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does it mean to redact a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Redacting a PDF means permanently removing sensitive information — such as names, Social Security numbers, financial data, or confidential text — by blacking it out so it cannot be recovered or copied." }
    },
    {
      "@type": "Question",
      "name": "Is PDF redaction truly permanent?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Unlike simply placing a black rectangle over text, true redaction permanently deletes the underlying data from the file. The redacted content cannot be recovered, copied, or searched." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between redaction and hiding text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Hiding text with a black box is purely visual — the text is still in the file and can be copied or extracted. Redaction permanently removes the data from the PDF, making it impossible to recover." }
    },
    {
      "@type": "Question",
      "name": "Is PDF redaction required for HIPAA and GDPR compliance?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. HIPAA requires that protected health information (PHI) be permanently removed before sharing documents. GDPR requires that personal data be properly anonymized. PDF redaction is the standard method for meeting both requirements." }
    },
    {
      "@type": "Question",
      "name": "Does PDF.it offer PDF redaction?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF Redaction is available on PDF.it's Business plan ($13.99/month). It permanently removes sensitive text, images, and metadata from your documents directly in your browser." }
    },
    {
      "@type": "Question",
      "name": "What types of content can be redacted from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can redact text (names, addresses, account numbers), images (photos, signatures, logos), and metadata (author name, creation date, software info). PDF.it's redaction tool handles all three types." }
    }
  ]
}

export default function RedactPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redact PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Permanently remove sensitive information from PDFs before sharing. True redaction deletes data — not just hides it.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Permanent Removal</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#14D8C4]" /><span>HIPAA & GDPR Compliant</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Browser-Based</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDF redaction is the process of permanently removing sensitive, confidential, or private information from a document. Unlike covering text with a black box, true redaction deletes the underlying data so it can never be recovered, copied, or searched.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Permanently removes text, images, and metadata</li>
              <li>&#10003; Required for HIPAA, GDPR, and legal compliance</li>
              <li>&#10003; Prevents accidental data leaks when sharing documents</li>
              <li>&#10003; Works on contracts, medical records, legal filings, and financial documents</li>
              <li>&#10003; No software to install — redact PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Redact PDFs with PDF.it</h2>
            <p className="text-slate-600 mb-6">PDF Redaction is available on our Business plan. Permanently remove sensitive text, images, and metadata from your documents.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/pdf-redaction" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
                Try PDF Redaction
              </Link>
              <Link href="/pricing" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                See Business Plan
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Legal and Regulatory Compliance</h2>
              <p className="text-slate-600">
                Courts, government agencies, and healthcare organizations require that sensitive data be permanently removed from documents before they are shared or filed publicly. PDF redaction is the standard method for meeting these requirements under HIPAA, GDPR, FOIA, and court rules.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">HIPAA and GDPR Requirements</h2>
              <p className="text-slate-600">
                HIPAA mandates that protected health information (PHI) be permanently removed before sharing medical documents. GDPR requires that personal data be properly anonymized when fulfilling data subject requests. Simply covering information with a black box does not meet these standards — true redaction is required.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Permanent vs. Visual Redaction</h2>
              <p className="text-slate-600">
                Visual redaction (placing a black rectangle over text) is a common mistake. The text remains in the file and can be copied, searched, or extracted using free tools. True redaction permanently deletes the data from the PDF. PDF.it uses true redaction to ensure your sensitive information is completely gone.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Redact a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it's PDF Redaction tool.",
                "Select the text, images, or areas you want to permanently remove.",
                "Apply redaction — the selected content is permanently deleted from the file.",
                "Download your redacted PDF, ready to share securely.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF Redaction", href: "/pdf-redaction", desc: "Redact PDFs (Business)" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Password-protect PDFs" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Lock in content" },
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Add watermarks (Pro)" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What does it mean to redact a PDF?", a: "Redacting a PDF means permanently removing sensitive information — such as names, Social Security numbers, financial data, or confidential text — by blacking it out so it cannot be recovered or copied." },
                { q: "Is PDF redaction truly permanent?", a: "Yes. Unlike simply placing a black rectangle over text, true redaction permanently deletes the underlying data from the file. The redacted content cannot be recovered, copied, or searched." },
                { q: "What is the difference between redaction and hiding text?", a: "Hiding text with a black box is purely visual — the text is still in the file and can be copied or extracted. Redaction permanently removes the data from the PDF, making it impossible to recover." },
                { q: "Is PDF redaction required for HIPAA and GDPR compliance?", a: "Yes. HIPAA requires that protected health information (PHI) be permanently removed before sharing documents. GDPR requires that personal data be properly anonymized. PDF redaction is the standard method for meeting both requirements." },
                { q: "Does PDF.it offer PDF redaction?", a: "Yes. PDF Redaction is available on PDF.it's Business plan ($13.99/month). It permanently removes sensitive text, images, and metadata from your documents directly in your browser." },
                { q: "What types of content can be redacted from a PDF?", a: "You can redact text (names, addresses, account numbers), images (photos, signatures, logos), and metadata (author name, creation date, software info). PDF.it's redaction tool handles all three types." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
