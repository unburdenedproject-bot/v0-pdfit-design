import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FileText, Zap, Shield, Upload, ArrowRight, FileSpreadsheet, Image, Lock, Scissors, Merge, RotateCw, ScanLine } from "lucide-react"

export const metadata = {
  title: "PDF to Google Docs — Open PDFs in Google Docs | PDF.it",
  description: "Learn how to convert a PDF to Google Docs format. Convert PDF to Word with PDF.it, upload to Google Drive, and open in Google Docs for easy editing and collaboration.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I open a PDF directly in Google Docs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Google Drive can open PDFs, but the formatting is often broken. For best results, convert the PDF to a Word DOCX file first using PDF.it, then upload the DOCX to Google Drive and open it with Google Docs. This preserves formatting, tables, and images much better." }
    },
    {
      "@type": "Question",
      "name": "Why should I convert to DOCX before uploading to Google Docs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Google Docs handles DOCX files much better than PDFs. When you open a PDF in Google Docs directly, it often loses layout, fonts, and table structure. Converting to DOCX first with PDF.it preserves the formatting so Google Docs can render it properly." }
    },
    {
      "@type": "Question",
      "name": "Is this method free?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to Word conversion on PDF.it is available to Pro and Business subscribers. Once you have the DOCX file, uploading to Google Drive and opening in Google Docs is completely free with any Google account." }
    },
    {
      "@type": "Question",
      "name": "Will the formatting be preserved in Google Docs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Converting PDF to DOCX with PDF.it preserves most formatting including fonts, tables, images, and layout. Google Docs may make minor adjustments when opening the DOCX, but the result is far better than opening the PDF directly." }
    },
    {
      "@type": "Question",
      "name": "Can I collaborate on the document after converting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once the DOCX is opened in Google Docs, you can share it with others, use real-time collaboration, add comments, suggest edits, and track changes — just like any other Google Docs document." }
    },
    {
      "@type": "Question",
      "name": "Can I do this on a Chromebook?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any browser, including Chrome on Chromebooks. Convert your PDF to DOCX, download it, upload to Google Drive, and open in Google Docs — all without installing any software." }
    }
  ]
}

export default function PDFToGoogleDocsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to Google Docs</h1>
              <p className="text-xl text-slate-300 mb-8">
                Open any PDF in Google Docs with perfect formatting. Convert to Word first with PDF.it, then upload to Google Drive for easy editing and collaboration.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Preserves Formatting</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>100% Secure</span>
                </div>
                <div className="flex items-center gap-2">
                  <Upload className="h-4 w-4 text-orange-500" />
                  <span>Works on Any Device</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Step-by-Step Guide */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Open a PDF in Google Docs</h2>
            <div className="space-y-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    1
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Convert PDF to Word with PDF.it</h3>
                </div>
                <p className="text-slate-600 mb-6">
                  Upload your PDF to PDF.it and convert it to a Word DOCX file. This step preserves your formatting, tables, and images so Google Docs can read them properly.
                </p>
                <Link
                  href="/pdf-to-word"
                  className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors shadow-lg"
                >
                  Convert PDF to Word <ArrowRight className="h-4 w-4" />
                </Link>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    2
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Upload DOCX to Google Drive</h3>
                </div>
                <p className="text-slate-600">
                  Go to <strong>drive.google.com</strong> and click <strong>New &gt; File upload</strong>. Select the DOCX file you just downloaded from PDF.it. Wait for the upload to complete.
                </p>
              </div>

              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg flex-shrink-0">
                    3
                  </div>
                  <h3 className="text-xl font-black text-slate-900">Open with Google Docs</h3>
                </div>
                <p className="text-slate-600">
                  Double-click the uploaded file in Google Drive. It will open in Google Docs automatically. You can now edit, share, comment, and collaborate on the document in real time.
                </p>
              </div>
            </div>

            {/* Prominent CTA */}
            <div className="mt-10 text-center">
              <Link
                href="/pdf-to-word"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg"
              >
                Start: Convert PDF to Word <ArrowRight className="h-5 w-5" />
              </Link>
              <p className="text-sm text-slate-500 mt-3">Step 1 of 3 — Convert your PDF to DOCX first</p>
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Why Not Open PDFs Directly in Google Docs?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Google Drive can technically open PDFs, but the results are often disappointing. Tables break apart, fonts change, images shift, and the layout rarely matches the original. By converting to DOCX first with PDF.it, you get a clean, editable document that Google Docs can render properly — with formatting, tables, and images intact.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Much better formatting than opening PDF directly in Google Docs</li>
              <li>&#10003; Tables, images, and text structure are preserved</li>
              <li>&#10003; Full editing and collaboration in Google Docs</li>
              <li>&#10003; Works on any device with a browser</li>
              <li>&#10003; Share and collaborate in real time with your team</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Collaborative Editing</h3>
                <p className="text-slate-600">
                  Need multiple people to edit a PDF? Convert it to Google Docs format so your entire team can make changes simultaneously with real-time collaboration, comments, and suggestions.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Sharing with Team Members</h3>
                <p className="text-slate-600">
                  Share editable documents with colleagues who use Google Workspace. Instead of sending static PDFs back and forth, give everyone a link to a Google Doc they can edit.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Editing on a Chromebook</h3>
                <p className="text-slate-600">
                  Chromebooks run Google Docs natively but cannot install Microsoft Word. Convert your PDF to DOCX with PDF.it, then open in Google Docs for full editing capability on ChromeOS.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Cloud-Based Workflow</h3>
                <p className="text-slate-600">
                  Keep all your documents in Google Drive for easy access from any device. Convert PDFs to Google Docs format so everything lives in one organized, searchable, cloud-based system.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PDF to Word", desc: "Convert PDF to Word document.", href: "/pdf-to-word", icon: FileText },
                { name: "PDF to DOCX", desc: "Convert PDF to DOCX format.", href: "/pdf-to-docx", icon: FileText },
                { name: "PDF to Excel", desc: "Extract tables to spreadsheet.", href: "/pdf-to-excel", icon: FileSpreadsheet },
                { name: "PDF to Google Sheets", desc: "Open PDF tables in Sheets.", href: "/pdf-to-google-sheets", icon: FileSpreadsheet },
                { name: "OCR Scanner", desc: "Extract text from scanned PDFs.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Merge PDF", desc: "Combine multiple PDFs.", href: "/merge-pdf", icon: Merge },
                { name: "Split PDF", desc: "Extract pages from PDF.", href: "/split-pdf", icon: Scissors },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: Image },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "Can I open a PDF directly in Google Docs?", a: "Google Drive can open PDFs, but the formatting is often broken. For best results, convert the PDF to a Word DOCX file first using PDF.it, then upload the DOCX to Google Drive and open it with Google Docs. This preserves formatting, tables, and images much better." },
                { q: "Why should I convert to DOCX before uploading to Google Docs?", a: "Google Docs handles DOCX files much better than PDFs. When you open a PDF in Google Docs directly, it often loses layout, fonts, and table structure. Converting to DOCX first with PDF.it preserves the formatting so Google Docs can render it properly." },
                { q: "Is this method free?", a: "PDF to Word conversion on PDF.it is available to Pro and Business subscribers. Once you have the DOCX file, uploading to Google Drive and opening in Google Docs is completely free with any Google account." },
                { q: "Will the formatting be preserved in Google Docs?", a: "Converting PDF to DOCX with PDF.it preserves most formatting including fonts, tables, images, and layout. Google Docs may make minor adjustments when opening the DOCX, but the result is far better than opening the PDF directly." },
                { q: "Can I collaborate on the document after converting?", a: "Yes. Once the DOCX is opened in Google Docs, you can share it with others, use real-time collaboration, add comments, suggest edits, and track changes — just like any other Google Docs document." },
                { q: "Can I do this on a Chromebook?", a: "Yes. PDF.it works in any browser, including Chrome on Chromebooks. Convert your PDF to DOCX, download it, upload to Google Drive, and open in Google Docs — all without installing any software." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Ready to Open Your PDF in Google Docs?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Start by converting your PDF to Word — then upload to Google Drive. The whole process takes under a minute.
            </p>
            <Link
              href="/pdf-to-word"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert PDF to Word First <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
