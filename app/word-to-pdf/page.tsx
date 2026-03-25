import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Word to PDF Converter — Fast & No Login Required | PDF.it",
  description:
    "Convert Word to PDF in seconds with PDF.it. Turn DOC or DOCX into a clean PDF you can share anywhere—fast, easy, no installs.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert both DOC and DOCX to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it supports both .doc and .docx file formats." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF keep my Word formatting?",
      "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes — PDF.it preserves layout, fonts, and spacing. Complex documents with custom fonts or unusual tables can sometimes shift slightly." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Word to PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload your Word file and download the PDF." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my Word document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    },
    {
      "@type": "Question",
      "name": "My PDF looks different from my Word file — why?",
      "acceptedAnswer": { "@type": "Answer", "text": "Differences can occur due to embedded fonts or complex formatting. Try simplifying spacing, using standard fonts, or exporting again." }
    }
  ]
}

export default function WordToPDFPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Word to PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert DOC/DOCX to PDF with PDF.it — fast, simple, and built for clean, shareable documents.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Formatting Preserved</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>DOC & DOCX Supported</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".doc,.docx"
          toolName="Word to PDF"
          outputFormat="PDF"
          processingMessage="Converting your Word document..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Word to PDF converter to turn a DOC or DOCX into a PDF in seconds. Perfect for resumes, reports, contracts, and school documents — convert, download, and share a PDF that works everywhere.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert Word to PDF online in seconds</li>
              <li>✓ Supports DOC and DOCX files</li>
              <li>✓ Creates share-ready PDFs for email, printing, and uploads</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — browser-based conversion</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert DOCX to PDF While Keeping Layout</h2>
              <p className="text-slate-600">
                PDF.it converts Word documents into PDFs designed for consistent viewing across devices. Great for sending files where formatting should stay stable.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Make Word Documents Easy to Share and Print</h2>
              <p className="text-slate-600">
                PDFs are the standard for submissions, printing, and official documents. Convert your Word file to PDF so recipients see the same layout — no matter what software they use.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fast Online Conversion — No Apps Needed</h2>
              <p className="text-slate-600">
                Upload a Word file, convert to PDF, and download right away — no downloads, no installations, and no complicated steps.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert Word to PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your DOC/DOCX file into PDF.it.",
                "Click Convert Word to PDF.",
                "Download your new PDF.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDF back to Word" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce your PDF size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
                { name: "Excel to PDF", href: "/excel-to-pdf", desc: "Convert spreadsheets to PDF" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "Can I convert both DOC and DOCX to PDF?", a: "Yes. PDF.it supports both .doc and .docx file formats." },
                { q: "Will the PDF keep my Word formatting?", a: "In most cases, yes — PDF.it preserves layout, fonts, and spacing. Complex documents with custom fonts or unusual tables can sometimes shift slightly." },
                { q: "Can I convert Word to PDF on mobile?", a: "Yes. PDF.it works in mobile browsers — upload your Word file and download the PDF." },
                { q: "Is it safe to upload my Word document?", a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." },
                { q: "What is the maximum file size I can convert?", a: "Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." },
                { q: "My PDF looks different from my Word file — why?", a: "Differences can occur due to embedded fonts or complex formatting. Try simplifying spacing, using standard fonts, or exporting again." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
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
