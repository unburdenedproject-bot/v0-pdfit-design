import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Zap, Eye, Lock } from "lucide-react"

export const metadata = {
  title: "PDF Redaction — Permanently Remove Sensitive Information | OmnisPDF",
  description:
    "Permanently redact sensitive text, SSNs, addresses, and confidential data from PDFs. Visual editor — draw redaction boxes directly on your document. OmnisPDF Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PDF redaction?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF redaction permanently removes sensitive content from a PDF document. Unlike simply covering text with a black box, proper redaction deletes the underlying data so it cannot be recovered, copied, or searched." }
    },
    {
      "@type": "Question",
      "name": "Is the redaction permanent?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once you apply redactions, the original content is permanently deleted from the PDF. The redacted areas are replaced with solid black rectangles and the text underneath is removed. This cannot be undone." }
    },
    {
      "@type": "Question",
      "name": "What kind of information should I redact?",
      "acceptedAnswer": { "@type": "Answer", "text": "Common redactions include Social Security numbers (SSNs), addresses, phone numbers, bank account details, medical information, confidential business data, and any personally identifiable information (PII) required by privacy laws." }
    },
    {
      "@type": "Question",
      "name": "Is PDF Redaction free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF Redaction is a Business plan feature ($13.99/month). It includes the visual redaction editor along with all other Business tools like Workflow Automation, Table Extraction, PDF Compare, and eSign." }
    },
    {
      "@type": "Question",
      "name": "How do I redact a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF, then click and drag on the document to draw black boxes over sensitive areas. You can navigate between pages and redact across the entire document. When done, click Apply Redaction to permanently remove the content." }
    },
  ]
}

export default function PdfRedactionPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-red-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Redaction</h1>
              <p className="text-xl text-slate-300 mb-8">
                Permanently remove sensitive information from your PDFs. Draw redaction boxes directly on the document — the underlying text is deleted, not just hidden.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-red-400" /><span>Visual Editor</span></div>
                <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-red-400" /><span>Permanent Removal</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-red-400" /><span>Multi-Page Support</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Redaction Interface */}
        <RedactionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload PDF", desc: "Drop your PDF into the upload zone." },
                { step: "2", title: "Draw Redactions", desc: "Click and drag to draw black boxes over sensitive areas on any page." },
                { step: "3", title: "Apply & Download", desc: "Click Apply Redaction. The content is permanently removed and your redacted PDF is ready." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-red-600 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Legal & Court Documents</h2>
              <p className="text-slate-600">
                Redact witness information, case numbers, and personal details before filing or sharing legal documents. Courts and law firms require proper redaction to comply with privacy rules.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">HR & Employee Records</h2>
              <p className="text-slate-600">
                Remove Social Security numbers, salary information, and personal addresses from employee documents before sharing with third parties or auditors.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Healthcare & HIPAA Compliance</h2>
              <p className="text-slate-600">
                Redact patient names, medical record numbers, and diagnosis information to comply with HIPAA and other healthcare privacy regulations.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is PDF redaction?", a: "PDF redaction permanently removes sensitive content from a PDF document. Unlike simply covering text with a black box, proper redaction deletes the underlying data so it cannot be recovered, copied, or searched." },
                { q: "Is the redaction permanent?", a: "Yes. Once you apply redactions, the original content is permanently deleted from the PDF. The redacted areas are replaced with solid black rectangles and the text underneath is removed." },
                { q: "What kind of information should I redact?", a: "Common redactions include Social Security numbers, addresses, phone numbers, bank account details, medical information, and any personally identifiable information (PII)." },
                { q: "Is PDF Redaction free?", a: "PDF Redaction is a Business plan feature ($13.99/month). It includes the visual redaction editor along with all other Business tools." },
                { q: "How do I redact a PDF?", a: "Upload your PDF, then click and drag on the document to draw black boxes over sensitive areas. Navigate between pages to redact across the entire document, then click Apply Redaction." },
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
