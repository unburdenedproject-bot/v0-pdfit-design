import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF to Excel Converter Online — Free & No Login | PDF.it",
  description: "Convert PDF to Excel spreadsheets with PDF.it. Extract tables and data from PDFs into .xlsx files — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a PDF to Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Convert, and download your Excel spreadsheet." }
    },
    {
      "@type": "Question",
      "name": "Will my table data be extracted accurately?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extracts tables and structured data as accurately as possible. Results may vary depending on how the original PDF was created." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs require OCR to extract text and tables. Use PDF.it's OCR Scanner tool first, then convert to Excel." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to Excel on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can convert?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function PDFToExcelPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF to Excel Converter</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extract data from your PDFs into Excel spreadsheets. Perfect for data analysis and reporting.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Table Extraction</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>No Login Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Converting your PDF to Excel..."
          successMessage="Your Excel file is ready!"
        />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's PDF to Excel tool to extract tables and data from PDF files into editable spreadsheets. Upload your PDF, convert it, and download a .xlsx file ready for analysis — no software required.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF tables and data to Excel spreadsheets</li>
              <li>✓ Great for financial reports, invoices, and data exports</li>
              <li>✓ Download a .xlsx file ready to open in Excel or Google Sheets</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — convert PDFs in your browser</li>
            </ul>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDF to editable doc" },
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert pages to images" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before converting" },
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

        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                { q: "How do I convert a PDF to Excel?", a: "Upload your PDF to PDF.it, click Convert, and download your Excel spreadsheet." },
                { q: "Will my table data be extracted accurately?", a: "PDF.it extracts tables and structured data as accurately as possible. Results may vary depending on how the original PDF was created." },
                { q: "Can I convert a scanned PDF to Excel?", a: "Scanned PDFs require OCR to extract text and tables. Use PDF.it's OCR Scanner tool first, then convert to Excel." },
                { q: "Can I convert PDF to Excel on my phone?", a: "Yes. PDF.it works in mobile browsers — upload, convert, and download on iPhone or Android." },
                { q: "Is it safe to upload my PDF?", a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." },
                { q: "What is the maximum file size I can convert?", a: "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." },
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
