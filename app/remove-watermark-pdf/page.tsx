import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Droplets, Zap, AlertTriangle, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remove Watermark from PDF — How to Delete PDF Watermarks | PDF.it",
  description:
    "Learn how to handle watermarked PDFs. PDF.it offers tools to add watermarks, but removing watermarks from PDFs you don't own may violate copyright.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can PDF.it remove watermarks from PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it does not offer watermark removal because it could enable copyright infringement and piracy. Instead, PDF.it offers tools to add your own watermarks to protect your documents." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to remove a watermark from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends. If you own the original document and added the watermark yourself, you can remove it. However, removing watermarks from documents you do not own — such as stock photos, licensed content, or trial software — typically violates copyright law and terms of service." }
    },
    {
      "@type": "Question",
      "name": "Why do PDFs have watermarks?",
      "acceptedAnswer": { "@type": "Answer", "text": "Watermarks serve several purposes: protecting intellectual property, marking documents as drafts or confidential, branding documents with a company logo, deterring unauthorized copying, and indicating the document's status (e.g., SAMPLE, DRAFT, APPROVED)." }
    },
    {
      "@type": "Question",
      "name": "How can I get a PDF without the watermark?",
      "acceptedAnswer": { "@type": "Answer", "text": "The legitimate way is to purchase or license the full version of the document. For draft watermarks, ask the author for the final version. For trial watermarks, purchase the software license. For stock content, buy the full-resolution version." }
    },
    {
      "@type": "Question",
      "name": "Can I add my own watermark to a PDF with PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's Watermark PDF tool (available on the Pro plan) lets you add custom text or image watermarks to your PDFs. You can control the position, opacity, rotation, and size of the watermark." }
    },
    {
      "@type": "Question",
      "name": "What should I do if I accidentally watermarked my own PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you added a watermark to your own document and still have the original unwatermarked file, simply use that version. If you only have the watermarked version, you may need to recreate the document from the source file (Word, PowerPoint, etc.) and export a new PDF without the watermark." }
    }
  ]
}

export default function RemoveWatermarkPDFPage() {
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
                <Droplets className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remove Watermark from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Learn about PDF watermarks — why they exist, when they can be legitimately removed, and how to work with watermarked documents.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Understand Watermarks</span></div>
                <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-orange-500" /><span>Know Your Rights</span></div>
                <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-orange-500" /><span>Legitimate Options</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDF watermarks are text or image overlays placed on document pages to indicate ownership, status, or licensing. While there are legitimate reasons to remove a watermark from your own documents, PDF.it does not offer watermark removal as a tool because it could facilitate copyright infringement. This page explains your options.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Understand why PDFs have watermarks</li>
              <li>&#10003; Learn when watermark removal is legitimate</li>
              <li>&#10003; Find alternatives to removing watermarks</li>
              <li>&#10003; Add your own watermarks to protect your documents</li>
              <li>&#10003; Know the legal implications of watermark removal</li>
            </ul>
          </div>
        </section>

        {/* CTA */}
        <section className="py-12 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Need to Work with Watermarks?</h2>
            <p className="text-slate-600 mb-6">Add your own professional watermarks to protect your documents, or flatten PDFs to lock in existing content.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/watermark-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Add Watermark (Pro)
              </Link>
              <Link href="/flatten-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">
                Flatten PDF (Free)
              </Link>
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Why Do PDFs Have Watermarks?</h2>
              <p className="text-slate-600">
                Watermarks serve important purposes: protecting intellectual property, marking documents as drafts or confidential, branding content with a company logo, deterring unauthorized copying, and indicating a document's approval status. They are widely used in legal, corporate, publishing, and stock content industries.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Legitimate Removal Scenarios</h2>
              <p className="text-slate-600">
                You can legitimately remove a watermark if you are the original author and added it yourself, if you have purchased a license and received the unwatermarked version, or if the watermark was added by mistake. In most cases, the simplest approach is to go back to the original source file (Word, PowerPoint, etc.) and export a clean PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Alternatives to Watermark Removal</h2>
              <p className="text-slate-600">
                Instead of trying to remove someone else's watermark, consider these alternatives: purchase the full licensed version of the content, contact the document owner for an unwatermarked copy, use the watermarked version for preview purposes only, or create your own original content. If you need to protect your own documents, use PDF.it's Watermark PDF tool.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Handle Watermarked PDFs</h2>
            <div className="space-y-4">
              {[
                "Determine who owns the document and why the watermark was added.",
                "If you own the source file, re-export the PDF without the watermark.",
                "If it is licensed content, purchase the full version to receive clean files.",
                "To protect your own documents, use PDF.it's Watermark PDF tool to add custom watermarks.",
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Add watermarks (Pro)" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Lock in content" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Password-protect PDFs" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "Can PDF.it remove watermarks from PDFs?", a: "No. PDF.it does not offer watermark removal because it could enable copyright infringement and piracy. Instead, PDF.it offers tools to add your own watermarks to protect your documents." },
                { q: "Is it legal to remove a watermark from a PDF?", a: "It depends. If you own the original document and added the watermark yourself, you can remove it. However, removing watermarks from documents you do not own — such as stock photos, licensed content, or trial software — typically violates copyright law and terms of service." },
                { q: "Why do PDFs have watermarks?", a: "Watermarks serve several purposes: protecting intellectual property, marking documents as drafts or confidential, branding documents with a company logo, deterring unauthorized copying, and indicating the document's status (e.g., SAMPLE, DRAFT, APPROVED)." },
                { q: "How can I get a PDF without the watermark?", a: "The legitimate way is to purchase or license the full version of the document. For draft watermarks, ask the author for the final version. For trial watermarks, purchase the software license. For stock content, buy the full-resolution version." },
                { q: "Can I add my own watermark to a PDF with PDF.it?", a: "Yes. PDF.it's Watermark PDF tool (available on the Pro plan) lets you add custom text or image watermarks to your PDFs. You can control the position, opacity, rotation, and size of the watermark." },
                { q: "What should I do if I accidentally watermarked my own PDF?", a: "If you added a watermark to your own document and still have the original unwatermarked file, simply use that version. If you only have the watermarked version, you may need to recreate the document from the source file (Word, PowerPoint, etc.) and export a new PDF without the watermark." },
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
