import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Layers, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Flatten PDF Online — Remove Form Fields & Annotations | PDF.it",
  description:
    "Flatten PDF files with PDF.it. Lock form fields, annotations, and layers into a flat, non-editable PDF — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does it mean to flatten a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Flattening a PDF merges all interactive elements — form fields, annotations, comments, and layers — into the page content. The result is a static, non-editable PDF that looks the same everywhere." }
    },
    {
      "@type": "Question",
      "name": "When should I flatten a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Flatten a PDF before submitting forms, sharing signed documents, archiving records, or when a recipient sees blank fields. Flattening ensures the content is locked and visible." }
    },
    {
      "@type": "Question",
      "name": "Will flattening change how my PDF looks?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. The visual appearance stays the same. Flattening only removes the ability to edit form fields, annotations, and interactive elements." }
    },
    {
      "@type": "Question",
      "name": "Can I flatten a PDF with filled-in form fields?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All filled-in data is preserved and becomes part of the page content. The fields just can no longer be edited." }
    },
    {
      "@type": "Question",
      "name": "Can I flatten a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, flatten, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it free to flatten a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts get 10 conversions per day. Pro accounts get unlimited usage." }
    }
  ]
}

export default function FlattenPDFPage() {
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
                <Layers className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Flatten PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Lock form fields, annotations, and layers into a flat, non-editable PDF. Perfect for submissions, archiving, and sharing final documents.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Flattening</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Flatten PDF"
          outputFormat="PDF"
          processingMessage="Flattening your PDF..."
          successMessage="Your flattened PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Flattening a PDF merges all form fields, annotations, comments, and interactive layers into the page itself. The result is a clean, static PDF that displays consistently across every device and viewer — no more missing data or blank fields.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Lock filled form fields so they cannot be edited</li>
              <li>✓ Merge annotations and comments into the page</li>
              <li>✓ Fix blank fields that appear in some PDF viewers</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — flatten PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Submit Forms Without Blank Fields</h2>
              <p className="text-slate-600">
                Filled out a PDF form but the recipient sees empty fields? This happens when form data isn't embedded in the page. Flattening locks everything into place so it displays correctly everywhere.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Finalize Signed Documents</h2>
              <p className="text-slate-600">
                After signing a PDF, flatten it to prevent further edits. Signatures, form data, and annotations become permanent parts of the document — perfect for contracts and legal submissions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Archive PDFs for Long-Term Storage</h2>
              <p className="text-slate-600">
                Flattened PDFs are converted to PDF/A format, the international standard for long-term document archiving. This ensures your documents remain readable years from now.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Flatten a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Flatten PDF — all fields and annotations are merged into the page.",
                "Download your flattened, non-editable PDF.",
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
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert pages to images" },
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
                { q: "What does it mean to flatten a PDF?", a: "Flattening a PDF merges all interactive elements — form fields, annotations, comments, and layers — into the page content. The result is a static, non-editable PDF that looks the same everywhere." },
                { q: "When should I flatten a PDF?", a: "Flatten a PDF before submitting forms, sharing signed documents, archiving records, or when a recipient sees blank fields. Flattening ensures the content is locked and visible." },
                { q: "Will flattening change how my PDF looks?", a: "No. The visual appearance stays the same. Flattening only removes the ability to edit form fields, annotations, and interactive elements." },
                { q: "Can I flatten a PDF with filled-in form fields?", a: "Yes. All filled-in data is preserved and becomes part of the page content. The fields just can no longer be edited." },
                { q: "Can I flatten a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers — upload, flatten, and download on iPhone or Android." },
                { q: "Is it free to flatten a PDF?", a: "Yes. Free accounts get 10 conversions per day. Pro accounts get unlimited usage." },
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
