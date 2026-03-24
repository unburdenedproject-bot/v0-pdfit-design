import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Merge Documents Online — Combine Files Into One PDF | PDF.it",
  description:
    "Merge documents online with PDF.it. Combine multiple files into a single PDF for sharing, printing, or archiving — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge documents online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF documents to PDF.it, arrange them in order, and click Merge. Your combined document will be ready to download in seconds — no software needed." }
    },
    {
      "@type": "Question",
      "name": "What document types can I merge?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it merges PDF files directly. If you have Word, Excel, or PowerPoint files, use PDF.it's conversion tools to convert them to PDF first, then merge them into one document." }
    },
    {
      "@type": "Question",
      "name": "Is merging documents online safe?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it uses encrypted connections and deletes all uploaded files after your session ends. Your documents are never stored permanently on our servers." }
    },
    {
      "@type": "Question",
      "name": "Can I merge documents without installing software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it is 100% browser-based. No downloads, no plugins, no desktop software — just upload, merge, and download." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit for merging documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload files up to 25MB each. Pro users get a 200MB per-file limit for handling large documents like presentations, reports, and manuals." }
    },
    {
      "@type": "Question",
      "name": "Why should I merge documents online instead of using desktop software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Online merging is faster, requires no installation, and works on any device. You can merge documents from your phone, tablet, or any computer with a browser — no Adobe Acrobat or paid software needed." }
    }
  ]
}

export default function MergeDocumentsOnlinePage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge Documents Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine multiple documents into a single PDF for sharing, printing, or archiving. No software to install — merge documents directly in your browser, fast and free.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Merging</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Merging your documents..."
          successMessage="Your merged document is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Stop juggling multiple files. PDF.it lets you merge documents online into a single PDF — perfect for combining reports, contracts, presentations, and reference materials into one professional file. No desktop software, no subscriptions, no hassle.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Merge any PDF documents into one file</li>
              <li>✓ Convert Word, Excel, or PowerPoint to PDF first, then merge</li>
              <li>✓ No quality loss — formatting and layout preserved</li>
              <li>✓ Works on any device with a modern browser</li>
              <li>✓ No software installation or account required</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Reports Into One Professional Document</h2>
              <p className="text-slate-600">
                Assembling a quarterly report, project update, or research paper from multiple files? Upload each section, arrange them in order, and merge into one clean document ready for distribution.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Contracts and Legal Documents</h2>
              <p className="text-slate-600">
                Combine signed agreements, addendums, exhibits, and supporting documents into a single PDF for legal records. One file means less confusion and easier archiving.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Create Document Bundles for Sharing</h2>
              <p className="text-slate-600">
                Sending multiple files to a client or colleague? Merge everything into one PDF bundle — easier to share via email, upload to portals, or print as a single packet.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Merge Documents Online</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF documents into PDF.it.",
                "Arrange the documents in your preferred order.",
                "Click Merge and download your combined PDF document.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Combine PDF", href: "/combine-pdf-files", desc: "Combine files into one" },
                { name: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word docs" },
                { name: "Office to PDF", href: "/office-to-pdf", desc: "Convert Office files" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I merge documents online?", a: "Upload your PDF documents to PDF.it, arrange them in order, and click Merge. Your combined document will be ready to download in seconds — no software needed." },
                { q: "What document types can I merge?", a: "PDF.it merges PDF files directly. If you have Word, Excel, or PowerPoint files, use PDF.it's conversion tools to convert them to PDF first, then merge them into one document." },
                { q: "Is merging documents online safe?", a: "Yes. PDF.it uses encrypted connections and deletes all uploaded files after your session ends. Your documents are never stored permanently on our servers." },
                { q: "Can I merge documents without installing software?", a: "Yes. PDF.it is 100% browser-based. No downloads, no plugins, no desktop software — just upload, merge, and download." },
                { q: "Is there a file size limit for merging documents?", a: "Free users can upload files up to 25MB each. Pro users get a 200MB per-file limit for handling large documents like presentations, reports, and manuals." },
                { q: "Why should I merge documents online instead of using desktop software?", a: "Online merging is faster, requires no installation, and works on any device. You can merge documents from your phone, tablet, or any computer with a browser — no Adobe Acrobat or paid software needed." },
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
