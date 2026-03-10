import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convert Scanned PDF to Searchable Text — OCR Online | OmnisPDF",
  description:
    "Convert scanned PDFs into searchable, editable documents with OmnisPDF's OCR technology. Turn image-based PDFs into text you can copy and search — fast and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a scanned PDF to searchable text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your scanned PDF to OmnisPDF, select the document language, and click Run OCR. OmnisPDF's OCR engine reads the text from the scanned images and produces a searchable, copyable PDF." }
    },
    {
      "@type": "Question",
      "name": "What is the quality of OCR conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Conversion quality depends on scan resolution and clarity. High-resolution, well-lit scans produce excellent results. Low-quality scans, handwritten text, or unusual fonts may reduce accuracy." }
    },
    {
      "@type": "Question",
      "name": "Can I convert the scanned PDF to an editable Word document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. First, use OmnisPDF's OCR to make your scanned PDF searchable. Then use the PDF to Word tool to convert it into an editable Word document you can modify freely." }
    },
    {
      "@type": "Question",
      "name": "Can I batch convert multiple scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Batch OCR conversion is available for Pro subscribers. Upload multiple scanned PDFs at once and convert them all to searchable documents with a single click." }
    },
    {
      "@type": "Question",
      "name": "Does OCR work on handwritten documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR works best on printed text. Handwritten documents may produce limited or inaccurate results depending on handwriting clarity. Neatly printed handwriting may work, but cursive is generally not supported." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF works in mobile browsers — upload your scanned PDF, run OCR conversion, and download the searchable result on iPhone or Android." }
    }
  ]
}

export default function ConvertScannedPDFPage() {
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
                <Scan className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Scanned PDF to Searchable Text</h1>
              <p className="text-xl text-slate-300 mb-8">
                Turn image-based PDFs into searchable, editable documents with OCR technology. Convert old scans, photos, and archived PDFs into text you can copy, search, and reuse.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Advanced OCR Engine</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Searchable Output</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <OcrPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Scanned PDFs look like regular documents, but they are actually images — you cannot select, search, or copy any text. OmnisPDF's OCR converts these image-based PDFs into fully searchable, copyable documents you can work with.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Convert scanned PDFs into searchable, selectable text</li>
              <li>&#10003; OCR technology reads text from images and photos</li>
              <li>&#10003; Multi-language support for international documents</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — convert scans in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert Old Archives to Searchable Documents</h2>
              <p className="text-slate-600">
                Have boxes of scanned paperwork sitting in PDF form? Convert them into searchable documents so you can find specific information with Ctrl+F instead of scrolling through hundreds of pages manually.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Make Scanned Documents Accessible</h2>
              <p className="text-slate-600">
                Scanned PDFs are not accessible to screen readers or text-to-speech tools. Converting them with OCR adds a text layer, making your documents accessible to people with visual impairments and compliant with accessibility standards.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepare Scanned PDFs for Editing</h2>
              <p className="text-slate-600">
                Want to edit a scanned document? First convert it with OCR to make the text selectable, then use OmnisPDF's PDF to Word tool to create an editable document you can modify in Microsoft Word or Google Docs.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert a Scanned PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your scanned PDF into OmnisPDF.",
                "Select the document language and click Run OCR.",
                "Download your searchable PDF or convert it further to Word or TXT.",
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
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Full OCR processing" },
                { name: "PDF to Word", href: "/pdf-to-word", desc: "Convert PDF to editable Word" },
                { name: "PDF to TXT", href: "/pdf-to-txt", desc: "Extract text from PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce scanned PDF size" },
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
                { q: "How do I convert a scanned PDF to searchable text?", a: "Upload your scanned PDF to OmnisPDF, select the document language, and click Run OCR. OmnisPDF's OCR engine reads the text from the scanned images and produces a searchable, copyable PDF." },
                { q: "What is the quality of OCR conversion?", a: "Conversion quality depends on scan resolution and clarity. High-resolution, well-lit scans produce excellent results. Low-quality scans, handwritten text, or unusual fonts may reduce accuracy." },
                { q: "Can I convert the scanned PDF to an editable Word document?", a: "Yes. First, use OmnisPDF's OCR to make your scanned PDF searchable. Then use the PDF to Word tool to convert it into an editable Word document you can modify freely." },
                { q: "Can I batch convert multiple scanned PDFs?", a: "Batch OCR conversion is available for Pro subscribers. Upload multiple scanned PDFs at once and convert them all to searchable documents with a single click." },
                { q: "Does OCR work on handwritten documents?", a: "OCR works best on printed text. Handwritten documents may produce limited or inaccurate results depending on handwriting clarity. Neatly printed handwriting may work, but cursive is generally not supported." },
                { q: "Can I convert a scanned PDF on my phone?", a: "Yes. OmnisPDF works in mobile browsers — upload your scanned PDF, run OCR conversion, and download the searchable result on iPhone or Android." },
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
