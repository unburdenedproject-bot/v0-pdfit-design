import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { RedactionInterface } from "@/components/redaction-interface"
import { Shield, Zap, Eye, Lock, FileText, Merge, Layers, Repeat, ArrowLeftRight } from "lucide-react"

export const metadata = {
  title: "Redact PDFs Online — Permanently Remove Sensitive Information | OmnisPDF",
  description:
    "Permanently redact sensitive text, SSNs, addresses, and confidential data from PDFs. Visual redaction editor — draw boxes directly on your document. Upload, redact, and download securely. OmnisPDF Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is PDF redaction?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF redaction is the process of permanently removing sensitive information from a PDF. Unlike placing a black box over text, true redaction deletes the underlying content so it cannot be recovered." }
    },
    {
      "@type": "Question",
      "name": "Is the redaction permanent?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After you apply redactions, the original content is permanently removed from the PDF. The redacted areas appear as solid black boxes, and the hidden text underneath is deleted." }
    },
    {
      "@type": "Question",
      "name": "What information should I redact?",
      "acceptedAnswer": { "@type": "Answer", "text": "You should redact any sensitive or confidential information, including Social Security numbers, addresses, phone numbers, bank details, account numbers, medical information, case details, and other personally identifiable information." }
    },
    {
      "@type": "Question",
      "name": "How is redaction different from covering text with a black box?",
      "acceptedAnswer": { "@type": "Answer", "text": "A simple black box may only hide text visually while leaving the original content in the file. Proper PDF redaction removes the actual data underneath, making it inaccessible to search, copy, and extraction tools." }
    },
    {
      "@type": "Question",
      "name": "Can I redact multiple pages in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can move through your document page by page and add redactions wherever sensitive content appears before applying all redactions at once." }
    },
    {
      "@type": "Question",
      "name": "Is PDF Redaction free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF Redaction is available as a Business plan feature for $13.99/month. It includes the visual redaction editor along with other Business tools like Workflow Automation, Table Extraction, PDF Compare, and eSign." }
    },
    {
      "@type": "Question",
      "name": "How do I redact a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF, draw black redaction boxes over the areas you want to remove, review all pages, and click Apply Redaction. Once applied, the sensitive content is permanently deleted from the document." }
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Redact PDFs Online Securely</h1>
              <p className="text-xl text-slate-300 mb-4">
                Permanently remove sensitive information from PDF documents with a simple visual redaction tool. Upload your file, draw redaction boxes over confidential content, and apply permanent redactions so the underlying text cannot be copied, searched, or recovered.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Protect personal data, confidential business information, legal case details, medical records, and other private content before sharing or filing your PDFs.
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
        <RedactionInterface locale="en" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload Your PDF", desc: "Drag and drop your PDF into the upload area to open it in the redaction editor." },
                { step: "2", title: "Draw Redactions", desc: "Click and drag to place black redaction boxes over text or areas you want to remove. Review each page and add redactions wherever sensitive information appears." },
                { step: "3", title: "Apply and Download", desc: "Click Apply Redaction to permanently delete the underlying content from the PDF. Then download your redacted file, ready to share securely." },
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

        {/* Why Use PDF Redaction */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Use PDF Redaction?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Proper PDF redaction does more than hide text visually. It permanently removes the underlying information from the document so it cannot be selected, copied, searched, or recovered later.
              </p>
              <p className="text-slate-600 text-center">
                This makes PDF redaction essential for sharing documents that contain personal, financial, legal, medical, or confidential business information.
              </p>
            </div>
          </div>
        </section>

        {/* Common Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Legal and Court Documents</h3>
                <p className="text-slate-600">
                  Redact witness names, case numbers, signatures, addresses, and other sensitive information before filing or sharing legal documents. Proper redaction helps law firms, legal teams, and court users protect confidential details and meet privacy requirements.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">HR and Employee Records</h3>
                <p className="text-slate-600">
                  Remove Social Security numbers, salary details, home addresses, contact information, and other employee data before sending records to auditors, vendors, or outside partners.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Healthcare and HIPAA Compliance</h3>
                <p className="text-slate-600">
                  Redact patient names, medical record numbers, treatment details, dates of birth, and other protected health information to support HIPAA compliance and protect patient privacy.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Financial and Business Documents</h3>
                <p className="text-slate-600">
                  Remove bank account numbers, payment details, tax IDs, invoices, contract data, and other confidential business information before sharing documents internally or externally.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What is PDF redaction?", a: "PDF redaction is the process of permanently removing sensitive information from a PDF. Unlike placing a black box over text, true redaction deletes the underlying content so it cannot be recovered." },
                { q: "Is the redaction permanent?", a: "Yes. After you apply redactions, the original content is permanently removed from the PDF. The redacted areas appear as solid black boxes, and the hidden text underneath is deleted." },
                { q: "What information should I redact?", a: "You should redact any sensitive or confidential information, including Social Security numbers, addresses, phone numbers, bank details, account numbers, medical information, case details, and other personally identifiable information." },
                { q: "How is redaction different from covering text with a black box?", a: "A simple black box may only hide text visually while leaving the original content in the file. Proper PDF redaction removes the actual data underneath, making it inaccessible to search, copy, and extraction tools." },
                { q: "Can I redact multiple pages in a PDF?", a: "Yes. You can move through your document page by page and add redactions wherever sensitive content appears before applying all redactions at once." },
                { q: "Is PDF Redaction free?", a: "PDF Redaction is available as a Business plan feature for $13.99/month. It includes the visual redaction editor along with other Business tools." },
                { q: "How do I redact a PDF?", a: "Upload your PDF, draw black redaction boxes over the areas you want to remove, review all pages, and click Apply Redaction. Once applied, the sensitive content is permanently deleted from the document." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Redact Sensitive Information with Confidence</h2>
            <p className="text-slate-300 text-lg mb-8">
              Use PDF Redaction to securely remove confidential content from your documents before sharing, filing, or storing them. It is a simple way to protect private information and ensure sensitive text is permanently removed from your PDF.
            </p>
            <Link
              href="/pdf-redaction"
              className="inline-block bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Start Redacting Now
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Protect PDF", desc: "Add password protection to your documents.", href: "/protect-pdf", icon: Lock },
                { name: "Flatten PDF", desc: "Lock form fields and annotations into a flat PDF.", href: "/flatten-pdf", icon: Layers },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one file.", href: "/merge-pdf", icon: Merge },
                { name: "Workflow Automation", desc: "Chain multiple PDF tools into one automated workflow.", href: "/workflow-automation", icon: Repeat },
                { name: "PDF Compare", desc: "Compare two PDFs side-by-side and highlight differences.", href: "/pdf-compare", icon: ArrowLeftRight },
                { name: "PDF to JPG", desc: "Convert PDF pages to high-quality JPG images.", href: "/pdf-to-jpg", icon: FileText },
                { name: "Compress PDF", desc: "Reduce file size without losing quality.", href: "/compress-pdf", icon: FileText },
                { name: "Split PDF", desc: "Divide a PDF into separate files.", href: "/split-pdf", icon: FileText },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
