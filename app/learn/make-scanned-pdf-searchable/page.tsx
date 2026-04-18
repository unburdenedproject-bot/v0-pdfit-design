import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Make a Scanned PDF Searchable (Step-by-Step OCR Guide) | PDF.it",
  description:
    "Learn how to make a scanned PDF searchable using OCR. Add a text layer so you can find, copy, and extract text from any scanned document.",
  keywords: "make scanned pdf searchable, searchable pdf, ocr scanned pdf, add text layer to pdf, scanned pdf search text",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I make a scanned PDF searchable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Upload your scanned PDF to PDF.it's OCR Scanner (Pro feature), select your document language, and click the OCR button. The tool analyzes every page, recognizes the text, and adds a hidden text layer. You can then press Ctrl+F to search any word in the document."
      }
    },
    {
      "@type": "Question",
      "name": "How do I know if my PDF is already searchable?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Open the PDF and try to click and drag to select a word. If you can highlight text, the PDF already has a text layer and is searchable. If clicking produces no selection — or if pressing Ctrl+F finds nothing — the PDF is image-only and needs OCR."
      }
    },
    {
      "@type": "Question",
      "name": "What scan quality do I need for accurate OCR?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Scan at 300 DPI minimum for standard text documents. Make sure the page is straight, evenly lit, and in focus. Blurry, shadowed, or low-contrast scans will produce OCR errors. For phone-captured scans, use PDF.it's Phone Scan Cleanup tool before running OCR."
      }
    },
    {
      "@type": "Question",
      "name": "Will OCR change how my PDF looks?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. OCR adds an invisible text layer behind the scan image. The PDF looks exactly the same as the original — you just gain the ability to search, select, and copy the text."
      }
    },
    {
      "@type": "Question",
      "name": "Can OCR read handwritten text?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "OCR is designed for printed text and works best with clear, typed characters. Handwriting recognition is possible for neat, consistent handwriting but accuracy drops significantly compared to printed documents. Messy or cursive handwriting produces unreliable results."
      }
    },
    {
      "@type": "Question",
      "name": "What languages does PDF.it's OCR Scanner support?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "PDF.it's OCR Scanner supports dozens of languages including English, Spanish, Portuguese, French, German, Italian, Dutch, and more. Always select the correct language before processing — using the wrong language model causes widespread recognition errors."
      }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Make a Scanned PDF Searchable",
  "description": "Add a searchable text layer to a scanned PDF using OCR in 3 steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your scanned PDF",
      "text": "Go to PDF.it's OCR Scanner and upload the scanned PDF. Pro users can process files up to 200MB. If your file is too large, compress it first with the Compress PDF tool."
    },
    {
      "@type": "HowToStep",
      "name": "Select the document language and run OCR",
      "text": "Choose the language that matches the text in your document, then click the OCR button. The engine reads every page image, recognizes each character, and builds a hidden text layer."
    },
    {
      "@type": "HowToStep",
      "name": "Download the searchable PDF",
      "text": "Download your processed PDF. It looks identical to the original scan but now supports Ctrl+F search, text selection, copy-paste, and accurate conversion to Word or plain text."
    }
  ]
}

export default function MakeScannedPdfSearchablePage() {
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
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">
                Learn / OCR PDF
              </p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                Make a Scanned PDF Searchable (Step-by-Step OCR Guide)
              </h1>
              <p className="text-xl text-slate-300">
                A scanned PDF is just a photo of a document — your computer cannot read the text inside it. OCR fixes that by adding a real text layer. Here is exactly how to do it.
              </p>
            </div>
          </div>
        </section>

        {/* Inline CTA */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanText className="h-5 w-5 text-white" />
              </div>
              <div>
                <p className="text-slate-700 font-semibold">Make your scanned PDF searchable right now.</p>
                <p className="text-slate-500 text-xs">Pro feature — 30-day free trial included.</p>
              </div>
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

            {/* What "searchable" means */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Does "Searchable PDF" Actually Mean?</h2>
              <p className="text-slate-600 mb-4">
                When a document is scanned — using a flatbed scanner, a multifunction printer, or a phone camera — the result is an image embedded in a PDF container. On screen it looks like a normal document, but to your computer it is a photograph. There is no text data, only pixels.
              </p>
              <p className="text-slate-600 mb-4">
                A <strong>searchable PDF</strong> contains two layers: the original scan image (which you see) and an invisible text layer that sits on top of it. That hidden layer is what allows your PDF viewer to respond to Ctrl+F, highlight words, let you select and copy sentences, and convert the document accurately to Word or plain text.
              </p>
              <p className="text-slate-600">
                OCR (Optical Character Recognition) is the process that creates that text layer. The OCR engine analyzes each page image, identifies every character, and writes the recognized text at the matching position. Nothing about the visual appearance changes — you just gain full text functionality. Learn more in our{" "}
                <Link href="/learn/what-is-ocr" className="text-[#14D8C4] hover:underline">
                  What Is OCR?
                </Link>{" "}
                guide.
              </p>
            </section>

            {/* How to steps */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Make a Scanned PDF Searchable (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your scanned PDF",
                    desc: "Go to PDF.it's OCR Scanner and upload the scanned PDF. Pro users can process files up to 200MB. If your file is too large, compress it first with the Compress PDF tool.",
                  },
                  {
                    title: "Select the document language and run OCR",
                    desc: "Choose the language that matches the text in your document, then click the OCR button. The engine reads every page image, recognizes each character, and builds a hidden text layer.",
                  },
                  {
                    title: "Download the searchable PDF",
                    desc: "Download your processed PDF. It looks identical to the original scan but now supports Ctrl+F search, text selection, copy-paste, and accurate conversion to Word or plain text.",
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

            {/* Comparison table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Image-Only PDF vs. Searchable PDF vs. Editable PDF</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Type</th>
                      <th className="text-left px-4 py-3 font-semibold">Can search text?</th>
                      <th className="text-left px-4 py-3 font-semibold">Can copy text?</th>
                      <th className="text-left px-4 py-3 font-semibold">Can edit text?</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Image-only PDF</td>
                      <td className="px-4 py-3 text-slate-600">No</td>
                      <td className="px-4 py-3 text-slate-600">No</td>
                      <td className="px-4 py-3 text-slate-600">No</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Searchable PDF (after OCR)</td>
                      <td className="px-4 py-3 text-slate-600">Yes</td>
                      <td className="px-4 py-3 text-slate-600">Yes</td>
                      <td className="px-4 py-3 text-slate-600">No (looks the same)</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Editable PDF / Word doc</td>
                      <td className="px-4 py-3 text-slate-600">Yes</td>
                      <td className="px-4 py-3 text-slate-600">Yes</td>
                      <td className="px-4 py-3 text-slate-600">Yes</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm mt-4">
                If you need to change the actual words in the document, run OCR first to get a searchable PDF, then use{" "}
                <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">
                  PDF to Word
                </Link>{" "}
                to convert it to an editable format.
              </p>
            </section>

            {/* Extra techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Get More Out of Your Searchable PDF</h2>
              <ul className="space-y-3 text-slate-700">
                <li>
                  &#10003;{" "}
                  <strong>Extract all text at once.</strong> Use{" "}
                  <Link href="/extract-text-from-pdf" className="text-[#14D8C4] hover:underline">
                    Extract Text from PDF
                  </Link>{" "}
                  to pull the entire text layer into a plain-text file for analysis, translation, or data pipelines.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Convert to an editable Word document.</strong> Once OCR has added a text layer, the{" "}
                  <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">
                    PDF to Word
                  </Link>{" "}
                  converter produces much more accurate output than trying to convert an image-only PDF directly.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Improve a bad scan before OCR.</strong> Phone-captured scans often have shadows and perspective distortion. Run them through{" "}
                  <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">
                    Phone Scan Cleanup
                  </Link>{" "}
                  first to flatten and sharpen the image, then apply OCR for better results.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Convert scanned PDFs to other text formats.</strong> Use{" "}
                  <Link href="/convert-scanned-pdf" className="text-[#14D8C4] hover:underline">
                    Convert Scanned PDF
                  </Link>{" "}
                  to export the recognized text to TXT, DOCX, or other formats in one step.
                </li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Troubleshooting Common OCR Problems</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">OCR ran but the text is full of errors</h3>
                  <p className="text-slate-600">
                    The most common cause is low scan resolution. If the original scan was captured below 200 DPI, the character edges are too blurry for the OCR engine to read reliably. For phone scans, uneven lighting and perspective distortion make things worse. Run the file through{" "}
                    <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">
                      Phone Scan Cleanup
                    </Link>{" "}
                    to fix the image, then re-run OCR. For a full list of accuracy fixes, see our{" "}
                    <Link href="/learn/ocr-accuracy-tips" className="text-[#14D8C4] hover:underline">
                      OCR accuracy tips
                    </Link>{" "}
                    guide.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Ctrl+F still finds nothing after OCR</h3>
                  <p className="text-slate-600">
                    Make sure you downloaded the processed file that PDF.it returned — not the original you uploaded. Some PDF viewers also cache the file; try closing and reopening the document, or open it in a different viewer. If you opened the result in a browser tab directly from the download link, save it first and open the saved copy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">OCR does not recognize the language correctly</h3>
                  <p className="text-slate-600">
                    If the recognized text looks scrambled or uses the wrong characters, you likely ran OCR with the wrong language selected. Each language uses a different character set and dictionary model. Go back to the{" "}
                    <Link href="/ocr-scanner" className="text-[#14D8C4] hover:underline">
                      OCR Scanner
                    </Link>
                    , select the correct language, and process the file again.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section
          className="py-12"
          style={{
            background: `radial-gradient(ellipse 70% 60% at 50% 0%, rgba(20,216,196,0.12) 0%, transparent 70%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">
              Turn Any Scanned PDF Into a Searchable Document
            </h2>
            <p className="text-slate-300 mb-6">
              Upload your scanned PDF and PDF.it adds a full text layer in seconds. Search, copy, and convert any scanned document — no desktop software needed.
            </p>
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
                { title: "OCR Accuracy Tips (Get Better Text Recognition Results)", href: "/learn/ocr-accuracy-tips" },
                { title: "How to OCR a Scanned Document (Step-by-Step)", href: "/learn/ocr-scanned-document" },
                { title: "OCR a PDF on Your Phone (iPhone & Android)", href: "/learn/ocr-pdf-on-mobile" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">
                    {article.title}
                  </span>
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
                {
                  q: "How do I make a scanned PDF searchable?",
                  a: "Upload your scanned PDF to PDF.it's OCR Scanner (Pro feature), select your document language, and click the OCR button. The tool analyzes every page, recognizes the text, and adds a hidden text layer. You can then press Ctrl+F to search any word in the document.",
                },
                {
                  q: "How do I know if my PDF is already searchable?",
                  a: "Open the PDF and try to click and drag to select a word. If you can highlight text, the PDF already has a text layer and is searchable. If clicking produces no selection — or if pressing Ctrl+F finds nothing — the PDF is image-only and needs OCR.",
                },
                {
                  q: "What scan quality do I need for accurate OCR?",
                  a: "Scan at 300 DPI minimum for standard text documents. Make sure the page is straight, evenly lit, and in focus. Blurry, shadowed, or low-contrast scans will produce OCR errors. For phone-captured scans, use PDF.it's Phone Scan Cleanup tool before running OCR.",
                },
                {
                  q: "Will OCR change how my PDF looks?",
                  a: "No. OCR adds an invisible text layer behind the scan image. The PDF looks exactly the same as the original — you just gain the ability to search, select, and copy the text.",
                },
                {
                  q: "Can OCR read handwritten text?",
                  a: "OCR is designed for printed text and works best with clear, typed characters. Handwriting recognition is possible for neat, consistent handwriting but accuracy drops significantly compared to printed documents. Messy or cursive handwriting produces unreliable results.",
                },
                {
                  q: "What languages does PDF.it's OCR Scanner support?",
                  a: "PDF.it's OCR Scanner supports dozens of languages including English, Spanish, Portuguese, French, German, Italian, Dutch, and more. Always select the correct language before processing — using the wrong language model causes widespread recognition errors.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
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
