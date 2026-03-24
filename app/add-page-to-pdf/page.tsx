import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Add Pages to PDF Online — Insert Pages into a PDF | PDF.it",
  description:
    "Add pages to an existing PDF with PDF.it. Upload multiple PDFs, combine them into one file, and insert pages exactly where you need them — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I add pages to an existing PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your original PDF first, then upload the PDF containing the pages you want to add. PDF.it merges them in order — your original document followed by the new pages. Click Merge and download the combined file." }
    },
    {
      "@type": "Question",
      "name": "Can I insert pages at a specific position in my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "To insert pages at a specific position, first use Split PDF to separate your original document at the insertion point. Then use Merge PDF to combine the first part, the new pages, and the second part in that order." }
    },
    {
      "@type": "Question",
      "name": "Can I add blank pages to a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Create a blank PDF using any word processor (like Google Docs or Word), save it as PDF, then upload it along with your original PDF to merge them together." }
    },
    {
      "@type": "Question",
      "name": "Can I combine pages from different PDF files?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upload as many PDFs as you need — PDF.it merges all of them into one document in the order you arrange them." }
    },
    {
      "@type": "Question",
      "name": "Can I add pages to a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload your PDFs, merge them, and download the result on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    }
  ]
}

export default function AddPageToPDFPage() {
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
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Add Pages to PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Insert additional pages into an existing PDF, append documents, or combine multiple PDFs into one file — quick, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Upload Multiple PDFs</span></div>
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
          processingMessage="Adding pages to your PDF..."
          successMessage="Your updated PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              To add pages, upload the PDFs you want to combine. PDF.it merges them in order — place the original first, then the pages you want to add. The result is a single PDF with all pages included, ready to download, share, or print.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Add pages from one PDF to another</li>
              <li>✓ Append extra documents to an existing file</li>
              <li>✓ Combine cover pages, appendices, and attachments</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — add pages directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Append Appendices and Attachments</h2>
              <p className="text-slate-600">
                Need to add supporting documents to a report or application? Upload your main PDF first, then the appendix or attachment. PDF.it combines them into one clean file — perfect for submissions, proposals, and grant applications.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Insert a Cover Page or Title Page</h2>
              <p className="text-slate-600">
                Add a professional cover page to any PDF. Upload the cover page first, then the main document. PDF.it merges them in sequence so your cover page appears at the front.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Reports and Multi-Part Documents</h2>
              <p className="text-slate-600">
                Working with quarterly reports, multi-chapter documents, or invoices from different sources? Upload all the parts and merge them into a single PDF. No more juggling multiple files.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Add Pages to a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your original PDF to PDF.it.",
                "Upload the PDF containing the pages you want to add.",
                "Arrange the files in the correct order.",
                "Click Merge PDFs and download your updated document.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
                { name: "Split PDF", href: "/split-pdf", desc: "Extract pages from a PDF" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Lock form fields in place" },
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
                {
                  q: "How do I add pages to an existing PDF?",
                  a: "Upload your original PDF first, then upload the PDF containing the pages you want to add. PDF.it merges them in order — your original document followed by the new pages. Click Merge and download the combined file.",
                },
                {
                  q: "Can I insert pages at a specific position in my PDF?",
                  a: "To insert pages at a specific position, first use Split PDF to separate your original document at the insertion point. Then use Merge PDF to combine the first part, the new pages, and the second part in that order.",
                },
                {
                  q: "Can I add blank pages to a PDF?",
                  a: "Yes. Create a blank PDF using any word processor (like Google Docs or Word), save it as PDF, then upload it along with your original PDF to merge them together.",
                },
                {
                  q: "Can I combine pages from different PDF files?",
                  a: "Yes. Upload as many PDFs as you need — PDF.it merges all of them into one document in the order you arrange them.",
                },
                {
                  q: "Can I add pages to a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload your PDFs, merge them, and download the result on iPhone or Android.",
                },
                {
                  q: "Is it safe to upload my PDFs?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
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
