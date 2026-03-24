import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Merge Multiple PDFs Into One File — Free Online Tool | PDF.it",
  description:
    "Merge multiple PDF files into a single document with PDF.it. Combine 2, 5, or 10+ PDFs into one file — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge multiple PDFs into one file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload all your PDF files to PDF.it, arrange them in the order you want, and click Merge. Your combined PDF will be ready to download in seconds." }
    },
    {
      "@type": "Question",
      "name": "Can I merge more than 10 PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Pro users can merge large batches of PDFs with batch processing. Free users can merge files one at a time and combine the results." }
    },
    {
      "@type": "Question",
      "name": "Does merging PDFs change the file order?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it preserves the exact order you set. Drag and drop your files to rearrange them before merging." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit when merging multiple PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload files up to 25MB each. Pro users get a 200MB per-file limit, which handles even the largest documents." }
    },
    {
      "@type": "Question",
      "name": "Will the merged PDF be too large to email?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the total size of your files. If the merged PDF is too large, use PDF.it's Compress PDF tool to reduce the file size before sending." }
    },
    {
      "@type": "Question",
      "name": "Can I merge PDFs on my phone or tablet?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it is fully browser-based and works on iPhone, iPad, Android, and any device with a modern browser." }
    }
  ]
}

export default function MergeMultiplePDFsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge Multiple PDFs Into One File</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine 2, 5, or 10+ PDF files into a single document. Upload your files, set the order, and download one merged PDF — fast, free, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Batch Merging (Pro)</span></div>
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
          processingMessage="Merging your PDFs..."
          successMessage="Your merged PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Whether you need to merge two contracts or combine dozens of report chapters, PDF.it handles it all. Upload your PDF files, arrange them in the right order, and get one clean merged document. Pro users unlock batch processing for merging large numbers of files at once.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Merge 2, 5, 10, or 50+ PDFs into one document</li>
              <li>✓ Batch processing available for Pro users</li>
              <li>✓ Drag and drop to control file order</li>
              <li>✓ No quality loss — all pages stay exactly as they are</li>
              <li>✓ Works on any device with a browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Dozens of Files With Batch Processing</h2>
              <p className="text-slate-600">
                Need to combine a large batch of invoices, reports, or certificates? Pro users can select multiple files at once and merge them in a single operation. No more merging two at a time.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Keep Your Pages in the Right Order</h2>
              <p className="text-slate-600">
                After uploading, drag and drop files to set the exact sequence. PDF.it preserves your chosen order so every chapter, section, or appendix appears exactly where it should.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge Then Compress for Easy Sharing</h2>
              <p className="text-slate-600">
                Merging many PDFs can result in a large file. After combining, use PDF.it's Compress PDF tool to shrink the result for email, uploads, or cloud storage without losing quality.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Merge Multiple PDFs</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop all your PDF files into PDF.it.",
                "Drag files to rearrange them in your preferred order.",
                "Click Merge and download your single combined PDF.",
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
                { name: "Combine PDF", href: "/combine-pdf-files", desc: "Combine files into one" },
                { name: "Split PDF", href: "/split-pdf", desc: "Extract or split pages" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Flatten form fields" },
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
                { q: "How do I merge multiple PDFs into one file?", a: "Upload all your PDF files to PDF.it, arrange them in the order you want, and click Merge. Your combined PDF will be ready to download in seconds." },
                { q: "Can I merge more than 10 PDFs at once?", a: "Yes. Pro users can merge large batches of PDFs with batch processing. Free users can merge files one at a time and combine the results." },
                { q: "Does merging PDFs change the file order?", a: "No. PDF.it preserves the exact order you set. Drag and drop your files to rearrange them before merging." },
                { q: "Is there a file size limit when merging multiple PDFs?", a: "Free users can upload files up to 25MB each. Pro users get a 200MB per-file limit, which handles even the largest documents." },
                { q: "Will the merged PDF be too large to email?", a: "It depends on the total size of your files. If the merged PDF is too large, use PDF.it's Compress PDF tool to reduce the file size before sending." },
                { q: "Can I merge PDFs on my phone or tablet?", a: "Yes. PDF.it is fully browser-based and works on iPhone, iPad, Android, and any device with a modern browser." },
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
