import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanLine, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Scanned PDF to Text: When You Need OCR | PDF.it",
  description:
    "Learn how to convert scanned PDFs to editable text using OCR. Understand when PDF to TXT works vs when you need OCR, plus tips for improving scan quality.",
  keywords: "convert scanned pdf to text, scanned pdf to text, ocr pdf, scanned pdf ocr, extract text from scanned pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert a scanned PDF to text without OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Scanned PDFs store pages as images, not text. Standard PDF to TXT tools can only extract existing text data — they can't read text from images. You need OCR (Optical Character Recognition) to convert scanned pages to editable text." }
    },
    {
      "@type": "Question",
      "name": "How accurate is OCR on scanned PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Modern OCR is 95-99% accurate on clean scans with standard fonts. Accuracy drops with poor scan quality, handwriting, unusual fonts, or very small text. You can improve results by scanning at 300 DPI or higher and ensuring good lighting." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between a scanned PDF and a digital PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A digital PDF was created electronically (from Word, Google Docs, etc.) and contains real text data you can select and search. A scanned PDF is a photograph of paper — each page is an image with no text data. You need OCR to extract text from scanned PDFs." }
    },
    {
      "@type": "Question",
      "name": "How do I improve OCR accuracy on my scanned documents?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scan at 300 DPI or higher, use good lighting (no shadows), keep the document flat and aligned, scan in black and white for text-only documents, and clean up phone scans using image processing tools before OCR." }
    },
    {
      "@type": "Question",
      "name": "Can I OCR a phone photo of a document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but phone photos often have perspective distortion, shadows, and lower resolution than flatbed scans. Use PDF.it's Phone Scan Cleanup tool first to straighten and enhance the image, then run OCR for better results." }
    },
    {
      "@type": "Question",
      "name": "Is OCR free on PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR Scanner is a Pro feature on PDF.it. Free users can try basic PDF to TXT (which works on digital PDFs). For scanned documents that require OCR, a Pro subscription ($7.99/month) unlocks the OCR Scanner with unlimited conversions." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert a Scanned PDF to Text with OCR",
  "description": "Extract editable text from scanned PDFs in 3 simple steps using PDF.it's OCR Scanner.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your scanned PDF",
      "text": "Go to PDF.it's OCR Scanner and upload your scanned PDF. The tool accepts PDFs with any number of scanned pages."
    },
    {
      "@type": "HowToStep",
      "name": "Run OCR processing",
      "text": "Click Start OCR. The tool analyzes each page image, recognizes text characters, and converts them to selectable, editable text."
    },
    {
      "@type": "HowToStep",
      "name": "Download the text output",
      "text": "Download the extracted text. You can get it as a searchable PDF (text overlaid on the original images) or as plain text to paste into your documents."
    }
  ]
}

export default function ConvertScannedPdfToTextPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to TXT</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Scanned PDF to Text: When You Need OCR</h1>
              <p className="text-xl text-slate-300">
                Tried converting your PDF to text and got a blank file? Your PDF is probably scanned. Here's the difference between digital and scanned PDFs — and how to get text from both.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanLine className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Have a scanned PDF? Extract text with OCR right now.</p>
            </div>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              OCR Scanner <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Digital vs Scanned */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Digital PDF vs Scanned PDF: What's the Difference?</h2>
              <p className="text-slate-600 mb-4">
                Not all PDFs are created equal. Understanding the difference between digital and scanned PDFs is key to extracting text successfully.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">Digital PDF</th>
                      <th className="text-left py-3 px-4 font-bold">Scanned PDF</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Created from</td>
                      <td className="py-3 px-4">Word, Google Docs, software export</td>
                      <td className="py-3 px-4">Scanner, camera, fax machine</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Contains</td>
                      <td className="py-3 px-4">Real text data (characters, fonts)</td>
                      <td className="py-3 px-4">Images of pages (photographs)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Text selectable?</td>
                      <td className="py-3 px-4">Yes — you can highlight words</td>
                      <td className="py-3 px-4">No — you select the whole image</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Searchable?</td>
                      <td className="py-3 px-4">Yes — Ctrl+F works</td>
                      <td className="py-3 px-4">No — search finds nothing</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Extract text with</td>
                      <td className="py-3 px-4">PDF to TXT (free)</td>
                      <td className="py-3 px-4">OCR Scanner (Pro)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4">
                <strong>Quick test:</strong> Open your PDF and try to highlight a single word. If individual words highlight, it's digital — use <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>. If the whole page selects as one block, or nothing highlights, it's scanned — you need OCR.
              </p>
            </section>

            {/* Why PDF to TXT fails on scans */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Standard PDF to TXT Fails on Scanned Documents</h2>
              <p className="text-slate-600 mb-4">
                Standard text extraction tools like <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link> read the text data embedded in a PDF file. They look for character codes, fonts, and positioning data.
              </p>
              <p className="text-slate-600 mb-4">
                In a scanned PDF, there is no text data — only image data. Each page is a JPEG or PNG-like image of the original paper. The tool finds no characters to extract, so it outputs a blank file or just whitespace.
              </p>
              <p className="text-slate-600">
                This is not a limitation of PDF.it specifically — <em>no</em> standard text extraction tool can read text from images. You need a completely different technology: OCR.
              </p>
            </section>

            {/* What is OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Is OCR and How Does It Work?</h2>
              <p className="text-slate-600 mb-4">
                OCR (Optical Character Recognition) is technology that reads text from images. Instead of looking for text data in the PDF file, it analyzes the visual appearance of each page and recognizes letter shapes, words, and sentences.
              </p>
              <p className="text-slate-600 mb-4">
                Modern OCR engines (like the one PDF.it uses) can:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2713; Recognize text in over 100 languages</li>
                <li>&#x2713; Handle different fonts, sizes, and styles</li>
                <li>&#x2713; Process rotated or slightly skewed pages</li>
                <li>&#x2713; Distinguish between text, images, and tables</li>
                <li>&#x2713; Achieve 95-99% accuracy on clean, well-scanned documents</li>
              </ul>
            </section>

            {/* Step by step OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to OCR a Scanned PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your scanned PDF",
                    desc: "Go to the OCR Scanner tool and drag your scanned PDF into the upload area. Multi-page scanned documents are fully supported.",
                  },
                  {
                    title: "Run OCR processing",
                    desc: "Click Start OCR. The engine analyzes each page image, identifies text regions, and recognizes characters. Processing time depends on page count — a 10-page document typically takes 10-20 seconds.",
                  },
                  {
                    title: "Download and use the text",
                    desc: "Download the extracted text as a searchable PDF or plain text file. Copy the text into your notes, documents, or data systems. Review for any OCR errors, especially on low-quality scans.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Improving scan quality */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Better OCR Results</h2>
              <p className="text-slate-600 mb-4">
                OCR accuracy depends heavily on scan quality. Here's how to get the best results:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Scan at 300 DPI or higher.</strong> Low-resolution scans (150 DPI or less) produce blurry text that OCR struggles to read. 300 DPI is the sweet spot for text documents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Use good lighting for phone scans.</strong> Shadows, uneven lighting, and glare reduce accuracy. If scanning with your phone, use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> to enhance the image before OCR.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Keep the page flat and straight.</strong> Curved pages (from book spines) and tilted scans reduce accuracy. Flatten the document as much as possible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Scan text documents in black and white.</strong> For text-only documents, grayscale or black-and-white mode produces sharper text with better contrast for OCR.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Clean up before OCR.</strong> Remove coffee stains, fold marks, and background noise if possible. Cleaner input produces more accurate output.</span>
                </li>
              </ul>
            </section>

            {/* When OCR isn't perfect */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When OCR Won't Give Perfect Results</h2>
              <p className="text-slate-600 mb-4">
                OCR is powerful but not infallible. Expect lower accuracy with:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Handwritten text</h3>
                  <p className="text-slate-600">
                    OCR works best on printed text. Handwriting recognition is improving but still unreliable, especially for cursive or messy handwriting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Very small or decorative fonts</h3>
                  <p className="text-slate-600">
                    Tiny text (below 8pt) and heavily stylized or decorative fonts can confuse OCR engines. Standard body text in common fonts gives the best results.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Damaged or faded documents</h3>
                  <p className="text-slate-600">
                    Old, faded, or water-damaged documents with low contrast between text and background will produce errors. For critical documents, always proofread the OCR output.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Extract Text from Your Scanned PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your scanned document and get editable text with OCR — fast, accurate, and online.</p>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ScanLine className="h-5 w-5" /> OCR Scanner
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PDF to TXT: Extract Plain Text in Seconds", href: "/learn/convert-pdf-to-txt" },
                { title: "How to Copy Text from a PDF into Notes or Docs (Cleanly)", href: "/learn/copy-text-from-pdf-to-notes" },
                { title: "Why PDF-to-Text Output Looks Garbled (And How to Fix It)", href: "/learn/pdf-text-garbled-fix" },
                { title: "Extract Text from PDF on iPhone/Android (Best Methods)", href: "/learn/extract-text-from-pdf-on-mobile" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
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
                { q: "Can I convert a scanned PDF to text without OCR?", a: "No. Scanned PDFs store pages as images, not text. Standard PDF to TXT tools can only extract existing text data — they can't read text from images. You need OCR (Optical Character Recognition) to convert scanned pages to editable text." },
                { q: "How accurate is OCR on scanned PDFs?", a: "Modern OCR is 95-99% accurate on clean scans with standard fonts. Accuracy drops with poor scan quality, handwriting, unusual fonts, or very small text. You can improve results by scanning at 300 DPI or higher and ensuring good lighting." },
                { q: "What's the difference between a scanned PDF and a digital PDF?", a: "A digital PDF was created electronically (from Word, Google Docs, etc.) and contains real text data you can select and search. A scanned PDF is a photograph of paper — each page is an image with no text data. You need OCR to extract text from scanned PDFs." },
                { q: "How do I improve OCR accuracy on my scanned documents?", a: "Scan at 300 DPI or higher, use good lighting (no shadows), keep the document flat and aligned, scan in black and white for text-only documents, and clean up phone scans using image processing tools before OCR." },
                { q: "Can I OCR a phone photo of a document?", a: "Yes, but phone photos often have perspective distortion, shadows, and lower resolution than flatbed scans. Use PDF.it's Phone Scan Cleanup tool first to straighten and enhance the image, then run OCR for better results." },
                { q: "Is OCR free on PDF.it?", a: "OCR Scanner is a Pro feature on PDF.it. Free users can try basic PDF to TXT (which works on digital PDFs). For scanned documents that require OCR, a Pro subscription ($7.99/month) unlocks the OCR Scanner with unlimited conversions." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
