import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Organize PDF Pages Online — Sort, Rearrange & Manage PDFs | PDF.it",
  description:
    "Organize your PDF pages with PDF.it. Split, merge, rotate, and rearrange pages to create perfectly ordered documents — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What tools does PDF.it offer for organizing PDF pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it offers four key tools for organizing PDFs: Split PDF to extract pages or sections, Merge PDF to combine multiple files into one, Rotate PDF to fix page orientation, and Reorder Pages to rearrange the page sequence." }
    },
    {
      "@type": "Question",
      "name": "How do I rearrange pages in a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use the Reorder Pages tool to rearrange your PDF pages. You can also split your PDF into individual pages with Split PDF, then merge them back in any order using Merge PDF." }
    },
    {
      "@type": "Question",
      "name": "Can I remove specific pages from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use Split PDF to extract only the pages you want to keep, leaving out the pages you want to remove. Then merge the remaining pages into a clean document." }
    },
    {
      "@type": "Question",
      "name": "Can I organize PDF pages on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All PDF.it tools work in mobile browsers — split, merge, rotate, and reorder your PDF pages on iPhone or Android without installing any app." }
    },
    {
      "@type": "Question",
      "name": "Is organizing PDF pages free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's Split, Merge, and Rotate tools are free to use with no login required. Free users can process single files up to 25MB. Pro users get batch processing and larger file limits." }
    },
    {
      "@type": "Question",
      "name": "Can I combine organizing steps into a workflow?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can chain multiple tools together — for example, split a PDF to remove unwanted pages, rotate any sideways pages, then merge everything back into a single organized document." }
    }
  ]
}

export default function OrganizePDFPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Organize PDF Pages Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sort, rearrange, and manage your PDF pages with PDF.it. Split, merge, rotate, and reorder pages to create perfectly organized documents — all in your browser.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Multiple Tools</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section — Choose Your Tool */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Choose Your Tool</h2>
            <p className="text-slate-600 mb-8">Use these tools to organize your PDF pages:</p>
            <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
              <Link href="/split-pdf" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Split PDF
              </Link>
              <Link href="/merge-pdf" className="inline-flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Merge PDF
              </Link>
              <Link href="/rotate-pdf" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Rotate PDF
              </Link>
              <Link href="/reorder-pdf-pages" className="inline-flex items-center justify-center bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Reorder Pages
              </Link>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Disorganized PDFs waste time and look unprofessional. Whether you need to remove extra pages, fix sideways scans, reorder chapters, or combine files from different sources, PDF.it gives you the tools to get your document in order — without installing any software.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Split PDFs to extract or remove specific pages</li>
              <li>&#10003; Merge multiple PDFs into one organized document</li>
              <li>&#10003; Rotate pages to fix orientation issues</li>
              <li>&#10003; Reorder pages to get the right sequence</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Scanned Documents</h2>
              <p className="text-slate-600">
                Scanned documents often come through with pages out of order, upside down, or with blank pages mixed in. Use Split to remove unwanted pages, Rotate to fix orientation, and Merge to reassemble everything in the correct order.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepare Submissions and Applications</h2>
              <p className="text-slate-600">
                Job applications, university submissions, and official filings often require documents in a specific page order. Organize your transcript, cover letter, resume, and supporting documents into a single, properly ordered PDF before submitting.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Clean Up Merged Files</h2>
              <p className="text-slate-600">
                After merging multiple PDFs together, you may end up with duplicate pages, blank pages, or sections in the wrong order. Use Split and Reorder to clean up the final document and remove anything that does not belong.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Organize PDF Pages</h2>
            <div className="space-y-4">
              {[
                "Identify what you need — remove pages, reorder, rotate, or combine files.",
                "Choose the right tool above — Split, Merge, Rotate, or Reorder Pages.",
                "Upload your PDF, make your changes, and download the organized document.",
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
                { name: "Split PDF", href: "/split-pdf", desc: "Extract or remove pages" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine files into one" },
                { name: "Rotate PDF", href: "/rotate-pdf", desc: "Fix page orientation" },
                { name: "Reorder Pages", href: "/reorder-pdf-pages", desc: "Rearrange page order" },
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
                { q: "What tools does PDF.it offer for organizing PDF pages?", a: "PDF.it offers four key tools for organizing PDFs: Split PDF to extract pages or sections, Merge PDF to combine multiple files into one, Rotate PDF to fix page orientation, and Reorder Pages to rearrange the page sequence." },
                { q: "How do I rearrange pages in a PDF?", a: "Use the Reorder Pages tool to rearrange your PDF pages. You can also split your PDF into individual pages with Split PDF, then merge them back in any order using Merge PDF." },
                { q: "Can I remove specific pages from a PDF?", a: "Yes. Use Split PDF to extract only the pages you want to keep, leaving out the pages you want to remove. Then merge the remaining pages into a clean document." },
                { q: "Can I organize PDF pages on my phone?", a: "Yes. All PDF.it tools work in mobile browsers — split, merge, rotate, and reorder your PDF pages on iPhone or Android without installing any app." },
                { q: "Is organizing PDF pages free?", a: "Yes. PDF.it's Split, Merge, and Rotate tools are free to use with no login required. Free users can process single files up to 25MB. Pro users get batch processing and larger file limits." },
                { q: "Can I combine organizing steps into a workflow?", a: "Yes. You can chain multiple tools together — for example, split a PDF to remove unwanted pages, rotate any sideways pages, then merge everything back into a single organized document." },
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
