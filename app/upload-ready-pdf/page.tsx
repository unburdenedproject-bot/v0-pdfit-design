import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Upload, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Upload-Ready PDF — Fix & Optimize PDFs for Upload Portals | PDF.it",
  description:
    "Make your PDF upload-ready in one click. PDF.it flattens forms, compresses file size, and fixes common upload issues — works with any portal, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Upload-Ready PDF do?",
      "acceptedAnswer": { "@type": "Answer", "text": "It automatically flattens form fields and annotations, compresses file size, and optimizes the PDF structure — all in one click. The result is a clean PDF that works with any upload portal." }
    },
    {
      "@type": "Question",
      "name": "Why does my PDF get rejected when I upload it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Common reasons include: file too large, interactive form fields that don't display correctly, unsupported PDF features, or corrupted structure. Upload-Ready PDF fixes all of these automatically." }
    },
    {
      "@type": "Question",
      "name": "Which upload portals does this work with?",
      "acceptedAnswer": { "@type": "Answer", "text": "Any portal — government forms, university applications, job sites, visa applications, insurance claims, court filings, and more. The output is a universally compatible PDF." }
    },
    {
      "@type": "Question",
      "name": "Will my filled-in form data be preserved?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All your filled-in data, signatures, and annotations are permanently merged into the PDF. Nothing is lost — it just becomes non-editable." }
    },
    {
      "@type": "Question",
      "name": "Is this different from just compressing a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Compression only reduces file size. Upload-Ready PDF also flattens forms, merges annotations, and optimizes the PDF structure to prevent upload rejections caused by interactive elements." }
    },
    {
      "@type": "Question",
      "name": "Is it free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts get 10 conversions per day with automatic optimization. Pro accounts get unlimited conversions with advanced controls like target file size and compression level." }
    }
  ]
}

export default function UploadReadyPDFPage() {
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
                <Upload className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Upload-Ready PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                One click to fix and optimize your PDF for any upload portal. Flattens forms, compresses size, and fixes common rejection issues — automatically.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>One-Click Optimization</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Works With Any Portal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Upload Ready PDF"
          outputFormat="PDF"
          processingMessage="Making your PDF upload-ready..."
          successMessage="Your upload-ready PDF is ready!"
        />

        {/* What It Does */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">What Happens When You Click Upload-Ready</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Flatten", desc: "Form fields, annotations, and layers are merged into the page so nothing appears blank." },
                { step: "2", title: "Compress", desc: "File size is reduced to fit within upload limits while keeping text sharp and readable." },
                { step: "3", title: "Optimize", desc: "PDF structure is cleaned up for maximum compatibility with upload portals." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Tired of upload portals rejecting your PDF? PDF.it's Upload-Ready tool fixes the most common problems in one click — oversized files, blank form fields, unsupported annotations, and incompatible PDF features. The result is a clean, universally compatible PDF that works everywhere.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Automatically flattens form fields so data displays correctly</li>
              <li>✓ Compresses file size for portals with upload limits</li>
              <li>✓ Fixes blank fields that appear in some PDF viewers</li>
              <li>✓ Works with government, university, job, and visa portals</li>
              <li>✓ No installation — optimize PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Government & Visa Applications</h2>
              <p className="text-slate-600">
                Government portals are strict about PDF format and size. Upload-Ready ensures your forms are flattened, compressed, and compatible — no more rejected submissions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Job Applications & University Submissions</h2>
              <p className="text-slate-600">
                HR portals and university systems often reject PDFs with interactive form fields or large file sizes. One click makes your resume, transcript, or essay upload-ready.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Insurance, Legal & Court Filings</h2>
              <p className="text-slate-600">
                Legal portals require flat, non-editable PDFs with all signatures and annotations permanently embedded. Upload-Ready handles this automatically.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Make a PDF Upload-Ready</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Upload-Ready PDF — flattening and compression happen automatically.",
                "Download your optimized PDF and upload it to any portal.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
                { name: "Compress to 5MB", href: "/compress-pdf-to-5mb", desc: "Meet 5MB upload limits" },
                { name: "Compress to 2MB", href: "/compress-pdf-to-2mb", desc: "Meet 2MB upload limits" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Flatten forms only" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size only" },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What does Upload-Ready PDF do?", a: "It automatically flattens form fields and annotations, compresses file size, and optimizes the PDF structure — all in one click. The result is a clean PDF that works with any upload portal." },
                { q: "Why does my PDF get rejected when I upload it?", a: "Common reasons include: file too large, interactive form fields that don't display correctly, unsupported PDF features, or corrupted structure. Upload-Ready PDF fixes all of these automatically." },
                { q: "Which upload portals does this work with?", a: "Any portal — government forms, university applications, job sites, visa applications, insurance claims, court filings, and more. The output is a universally compatible PDF." },
                { q: "Will my filled-in form data be preserved?", a: "Yes. All your filled-in data, signatures, and annotations are permanently merged into the PDF. Nothing is lost — it just becomes non-editable." },
                { q: "Is this different from just compressing a PDF?", a: "Yes. Compression only reduces file size. Upload-Ready PDF also flattens forms, merges annotations, and optimizes the PDF structure to prevent upload rejections caused by interactive elements." },
                { q: "Is it free?", a: "Yes. Free accounts get 10 conversions per day with automatic optimization. Pro accounts get unlimited conversions with advanced controls like target file size and compression level." },
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
