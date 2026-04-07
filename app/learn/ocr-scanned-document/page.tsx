import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to OCR a Scanned Document (Step-by-Step) | PDF.it",
  description:
    "Learn how to run OCR on scanned documents like receipts, contracts, and old papers. Step-by-step guide to digitizing scanned PDFs into searchable, copyable text.",
  keywords: "ocr scanned document, scan and ocr, ocr scanned pdf, digitize scanned document",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of scanned documents can OCR process?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR can process virtually any scanned document — contracts, receipts, invoices, legal papers, old books, letters, forms, and ID documents. As long as the text is printed (not handwritten) and the scan is reasonably clear, OCR will recognize it." }
    },
    {
      "@type": "Question",
      "name": "Do I need a scanner to use OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. You can use your phone camera to photograph a document, save it as a PDF, and then run OCR on it. For better results with phone-scanned documents, use PDF.it's Phone Scan Cleanup tool first to improve contrast and straighten the image." }
    },
    {
      "@type": "Question",
      "name": "How long does OCR processing take?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most documents process in a few seconds to under a minute. Longer documents (50+ pages) or very large files may take a couple of minutes. PDF.it Pro users get priority processing for faster results." }
    },
    {
      "@type": "Question",
      "name": "Can OCR handle old or faded documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR can handle moderately faded text, but very faded or damaged documents may produce lower accuracy. Improving the scan contrast before running OCR helps significantly. Scan at 300 DPI or higher for old documents." }
    },
    {
      "@type": "Question",
      "name": "Is the original scan preserved after OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OCR adds an invisible text layer on top of your original scan. The visual appearance of every page remains exactly the same — only the searchability changes." }
    },
    {
      "@type": "Question",
      "name": "Can I OCR a document in Spanish or another language?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's OCR Scanner supports dozens of languages including Spanish, French, German, Portuguese, Italian, and many more. Select the correct language before processing for the best accuracy." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to OCR a Scanned Document",
  "description": "Digitize a scanned document into searchable text in 3 steps using PDF.it's OCR Scanner.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Scan or upload your document",
      "text": "Scan your document using a scanner or phone camera. Save it as a PDF, then upload it to PDF.it's OCR Scanner tool."
    },
    {
      "@type": "HowToStep",
      "name": "Select the language and run OCR",
      "text": "Choose the language of the text in your document and click the OCR button to start recognition."
    },
    {
      "@type": "HowToStep",
      "name": "Download the digitized document",
      "text": "Download your searchable PDF. You can now find text, copy content, and convert the document to Word, Excel, or plain text."
    }
  ]
}

export default function OCRScannedDocumentPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to OCR a Scanned Document (Step-by-Step)</h1>
              <p className="text-xl text-slate-300">
                Scanned receipts, contracts, old papers, and ID documents are just images inside a PDF. Here is how to run OCR and turn them into real, searchable text.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to digitize your scanned document? Try OCR Scanner (Pro).</p>
            </div>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              OCR Scanner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Types of documents */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Types of Scanned Documents Can You OCR?</h2>
              <p className="text-slate-600 mb-4">
                OCR works on any document where the text was printed (typed, not handwritten). Here are the most common types of scanned documents people run OCR on:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Contracts and agreements.</strong> Scanned legal documents need to be searchable so you can find specific clauses, dates, or names without reading 30 pages manually.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Receipts and invoices.</strong> Expense tracking and tax preparation require extracting amounts, dates, and vendor names from scanned receipts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Old reports and academic papers.</strong> Researchers and businesses digitize archived documents so they can be searched and referenced efficiently.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Government and ID documents.</strong> Passports, driver licenses, and government forms often need to be scanned and made searchable for applications and compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Medical records.</strong> Healthcare providers scan patient documents that need to be indexed and searchable within electronic health record systems.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to OCR a Scanned Document (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Scan or photograph your document",
                    desc: "Use a flatbed scanner (set to 300 DPI for best results) or your phone camera. Save the scan as a PDF. If you used your phone, run the file through Phone Scan Cleanup first to improve contrast and straighten the image.",
                  },
                  {
                    title: "Upload to PDF.it's OCR Scanner",
                    desc: "Open the OCR Scanner tool (Pro feature) and upload your scanned PDF. Select the language of the document — this is important for accuracy, especially for non-English documents.",
                  },
                  {
                    title: "Download and verify your searchable PDF",
                    desc: "Download the processed file. Open it and try Ctrl+F to search for a word you know is in the document. If the text is found, OCR worked correctly. The visual appearance stays identical to your original scan.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Preparing scans */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Preparing Your Scan for Better OCR Results</h2>
              <p className="text-slate-600 mb-4">
                The quality of your scan directly affects OCR accuracy. Here are the most impactful things you can do before running OCR:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Scan at 300 DPI or higher.</strong> Lower resolutions produce blurry characters that OCR struggles to recognize. 300 DPI is the sweet spot for text documents.</li>
                <li>&#10003; <strong>Use good lighting.</strong> Uneven shadows across the page cause OCR errors. Flatbed scanners give the most consistent lighting. For phone scans, use natural light and avoid shadows.</li>
                <li>&#10003; <strong>Straighten the document.</strong> Skewed or rotated text reduces accuracy. Use <Link href="/rotate-pdf" className="text-[#14D8C4] hover:underline">Rotate PDF</Link> to fix orientation before OCR, or use <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> for automatic straightening.</li>
                <li>&#10003; <strong>Increase contrast.</strong> Faded text on a yellowed page is hard for OCR. If the original is faded, increase the contrast in your scanner settings or use image editing before scanning.</li>
                <li>&#10003; <strong>Remove background noise.</strong> Stains, coffee marks, stamps overlapping text, and wrinkled pages all reduce OCR accuracy. Scan the cleanest copy available.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For more detailed guidance, read our full <Link href="/learn/ocr-accuracy-tips" className="text-[#14D8C4] hover:underline">OCR Accuracy Tips</Link> guide.
              </p>
            </section>

            {/* After OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Running OCR</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert to Word or Excel</h3>
                  <p className="text-slate-600">
                    Now that your document has a text layer, converting to other formats gives much better results. Use <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">PDF to Word</Link> for editable documents or <Link href="/pdf-to-excel" className="text-[#14D8C4] hover:underline">PDF to Excel</Link> for tabular data like invoices and financial statements.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Extract Plain Text</h3>
                  <p className="text-slate-600">
                    Need just the raw text without formatting? Use <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:underline">PDF to TXT</Link> to extract all text content from your searchable PDF. This is useful for data analysis, translation, or feeding text into other software.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress the Result</h3>
                  <p className="text-slate-600">
                    OCR processing can sometimes increase file size slightly because of the added text layer. If you need to email the document or upload it to a portal with size limits, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to reduce the file size.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Protect Sensitive Documents</h3>
                  <p className="text-slate-600">
                    If your scanned document contains sensitive information (contracts, financial records, ID copies), consider adding password protection after OCR using <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link>. You can also redact sensitive sections with <Link href="/pdf-redaction" className="text-[#14D8C4] hover:underline">PDF Redaction</Link> (Business plan).
                  </p>
                </div>
              </div>
            </section>

            {/* Phone scanning */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Scanning Documents with Your Phone</h2>
              <p className="text-slate-600 mb-4">
                You do not need a flatbed scanner to digitize documents. Most modern phones take photos good enough for OCR — especially if you follow a few guidelines:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Hold your phone directly above the document (not at an angle) to minimize distortion.</li>
                <li>&#10003; Use natural, even lighting. Avoid flash, which creates hotspots and glare.</li>
                <li>&#10003; Place the document on a dark, contrasting surface so the edges are clearly defined.</li>
                <li>&#10003; Use your phone's built-in document scanner (Notes on iPhone, Google Drive on Android) for automatic cropping and perspective correction.</li>
                <li>&#10003; Run the result through PDF.it's <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> tool before OCR to automatically improve contrast, remove shadows, and straighten the image.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For more on using OCR on mobile devices, see our guide on <Link href="/learn/ocr-pdf-on-mobile" className="text-[#14D8C4] hover:underline">OCR a PDF on Your Phone</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Digitize Your Scanned Documents</h2>
            <p className="text-slate-300 mb-6">Upload any scanned PDF and turn it into a searchable, copyable, convertible document in seconds.</p>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ScanText className="h-5 w-5" /> Try OCR Scanner (Pro)
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "What Is OCR? (Optical Character Recognition Explained)", href: "/learn/what-is-ocr" },
                { title: "OCR a PDF to Make It Searchable (Find Text in Scanned PDFs)", href: "/learn/ocr-pdf-to-searchable-text" },
                { title: "OCR Accuracy Tips (Get Better Text Recognition Results)", href: "/learn/ocr-accuracy-tips" },
                { title: "OCR a PDF on Your Phone (iPhone & Android)", href: "/learn/ocr-pdf-on-mobile" },
                { title: "Can OCR Read Handwritten Text? (What to Expect)", href: "/learn/ocr-handwritten-text" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
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
                { q: "What types of scanned documents can OCR process?", a: "OCR can process virtually any scanned document — contracts, receipts, invoices, legal papers, old books, letters, forms, and ID documents. As long as the text is printed (not handwritten) and the scan is reasonably clear, OCR will recognize it." },
                { q: "Do I need a scanner to use OCR?", a: "No. You can use your phone camera to photograph a document, save it as a PDF, and then run OCR on it. For better results with phone-scanned documents, use PDF.it's Phone Scan Cleanup tool first to improve contrast and straighten the image." },
                { q: "How long does OCR processing take?", a: "Most documents process in a few seconds to under a minute. Longer documents (50+ pages) or very large files may take a couple of minutes. PDF.it Pro users get priority processing for faster results." },
                { q: "Can OCR handle old or faded documents?", a: "OCR can handle moderately faded text, but very faded or damaged documents may produce lower accuracy. Improving the scan contrast before running OCR helps significantly. Scan at 300 DPI or higher for old documents." },
                { q: "Is the original scan preserved after OCR?", a: "Yes. OCR adds an invisible text layer on top of your original scan. The visual appearance of every page remains exactly the same — only the searchability changes." },
                { q: "Can I OCR a document in Spanish or another language?", a: "Yes. PDF.it's OCR Scanner supports dozens of languages including Spanish, French, German, Portuguese, Italian, and many more. Select the correct language before processing for the best accuracy." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
