import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Excel to PDF Converter — Fast & No Login Required | OmnisPDF",
  description:
    "Convert Excel to PDF in seconds with OmnisPDF. Turn XLS or XLSX spreadsheets into a clean, shareable PDF—fast, easy, browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can OmnisPDF convert both XLS and XLSX to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF supports both .xls and .xlsx file formats." }
    },
    {
      "@type": "Question",
      "name": "Will my Excel formatting stay the same in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "In most cases, yes. Complex spreadsheets with very wide sheets or custom fonts can look slightly different depending on the file." }
    },
    {
      "@type": "Question",
      "name": "Why are columns cut off in my Excel-to-PDF conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "This usually happens when the sheet is wider than the PDF page. Try using a fit-to-page print layout in Excel before uploading." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Excel to PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload the XLSX file and download the PDF." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my Excel file?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro and Business accounts can upload files up to 200MB." }
    }
  ]
}

export default function ExcelToPDFPage() {
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
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Excel to PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert XLS/XLSX to PDF with OmnisPDF — ideal for sharing reports, invoices, and spreadsheets in a consistent, print-ready format.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-orange-500" /><span>Tables Preserved</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>XLS & XLSX Supported</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".xls,.xlsx"
          toolName="Excel to PDF"
          outputFormat="PDF"
          processingMessage="Converting your spreadsheet..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use OmnisPDF's Excel to PDF converter to turn an XLS or XLSX spreadsheet into a PDF you can share anywhere. Great for reporting, printing, emailing, and submitting files — convert in seconds and download your PDF instantly.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert Excel to PDF online in seconds</li>
              <li>✓ Supports .xls and .xlsx spreadsheets</li>
              <li>✓ Create shareable, print-ready PDFs for email and submissions</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No software installation — browser-based conversion</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Export XLSX to PDF for Easy Sharing</h2>
              <p className="text-slate-600">
                PDF is the simplest way to share spreadsheets without layout surprises. Convert Excel to PDF so recipients can view it consistently — no Excel required.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Print-Ready PDFs for Reports and Invoices</h2>
              <p className="text-slate-600">
                Turn spreadsheets into PDFs that are easier to print, attach to emails, or upload to portals for accounting, school, and work.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Keep Tables Readable</h2>
              <p className="text-slate-600">
                OmnisPDF converts your sheets into a PDF optimized for standard viewing and printing, keeping your data clear and organized.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert Excel to PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your XLS/XLSX file into OmnisPDF.",
                "Click Convert Excel to PDF.",
                "Download your PDF.",
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
                { name: "Word to PDF", href: "/word-to-pdf", desc: "Convert Word docs to PDF" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce your PDF size" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine multiple PDFs" },
                { name: "PowerPoint to PDF", href: "/powerpoint-to-pdf", desc: "Convert presentations to PDF" },
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
                  q: "Can OmnisPDF convert both XLS and XLSX to PDF?",
                  a: "Yes. OmnisPDF supports both .xls and .xlsx file formats.",
                },
                {
                  q: "Will my Excel formatting stay the same in the PDF?",
                  a: "In most cases, yes. Complex spreadsheets with very wide sheets or custom fonts can look slightly different depending on the file.",
                },
                {
                  q: "Why are columns cut off in my Excel-to-PDF conversion?",
                  a: "This usually happens when the sheet is wider than the PDF page. Try using a fit-to-page print layout in Excel before uploading.",
                },
                {
                  q: "Can I convert Excel to PDF on mobile?",
                  a: "Yes. OmnisPDF works in mobile browsers — upload the XLSX file and download the PDF.",
                },
                {
                  q: "Is it safe to upload my Excel file?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can convert?",
                  a: "Pro and Business accounts can upload files up to 200MB.",
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
