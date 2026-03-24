import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Merge PDF Files Online — Combine PDFs Into One | PDF.it",
  description:
    "Merge PDF files into one document with PDF.it. Combine PDFs online, reorder pages, and download a single PDF—fast and simple.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I merge multiple PDF files into one?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDFs to PDF.it, reorder them as needed, then click Merge PDFs to download one combined file." }
    },
    {
      "@type": "Question",
      "name": "Can I reorder PDFs before merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Upload your files and sort them into the correct order — PDF.it merges them in that sequence." }
    },
    {
      "@type": "Question",
      "name": "Can I merge PDFs on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, merge, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Can I merge password-protected PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Password-protected PDFs need to be unlocked before merging. Use our Unlock PDF tool first." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size for merging?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB each. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB each." }
    }
  ]
}

export default function MergePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Merge PDF Files Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine multiple PDFs into a single file with PDF.it. Upload, reorder, merge, and download — quick, clean, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Unlimited Files</span></div>
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
          processingMessage="Merging your PDF files..."
          successMessage="Your merged PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Merge PDF tool to combine PDFs into one file in seconds. Upload multiple PDF documents, arrange them in the right order, and download a single merged PDF — perfect for submissions, contracts, invoices, and reports.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Merge multiple PDF files into one PDF</li>
              <li>✓ Reorder files before merging for the correct page sequence</li>
              <li>✓ Great for reports, receipts, invoices, and forms</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — merge PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine PDFs Into One Document</h2>
              <p className="text-slate-600">
                Merge PDFs into a single, shareable file. Ideal for sending one attachment instead of many, or submitting a complete packet to schools, banks, or employers.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reorder PDF Files Before Merging</h2>
              <p className="text-slate-600">
                Upload your files and sort them into the exact order you want. PDF.it merges them in the sequence you choose.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Merge PDFs for Printing and Sharing</h2>
              <p className="text-slate-600">
                Create one clean PDF for printing, emailing, archiving, or uploading — without juggling multiple files.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Merge PDFs</h2>
            <div className="space-y-4">
              {[
                "Upload two or more PDF files to PDF.it.",
                "Drag to reorder them in the correct sequence.",
                "Click Merge PDFs.",
                "Download the combined PDF.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Divide a PDF into parts" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after merging" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
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
                  q: "How do I merge multiple PDF files into one?",
                  a: "Upload your PDFs to PDF.it, reorder them as needed, then click Merge PDFs to download one combined file.",
                },
                {
                  q: "Can I reorder PDFs before merging?",
                  a: "Yes. Upload your files and sort them into the correct order — PDF.it merges them in that sequence.",
                },
                {
                  q: "Can I merge PDFs on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload, merge, and download on iPhone or Android.",
                },
                {
                  q: "Can I merge password-protected PDFs?",
                  a: "Password-protected PDFs need to be unlocked before merging. Use our Unlock PDF tool first.",
                },
                {
                  q: "Is it safe to upload my PDFs?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size for merging?",
                  a: "Free accounts can upload files up to 25MB each. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB each.",
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
