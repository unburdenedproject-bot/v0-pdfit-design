import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR a PDF to Make It Searchable (Find Text in Scanned PDFs) | OmnisPDF",
  description:
    "Learn how to use OCR to convert scanned PDFs into searchable documents. Find text in image-only PDFs, copy content, and make your scanned files fully functional.",
  keywords: "ocr pdf searchable, make scanned pdf searchable, search text in scanned pdf, ocr pdf text",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Why can't I search text in my scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs are image-only — they contain pictures of text, not actual text data. Your computer sees them as flat images, so Ctrl+F has nothing to search. Running OCR adds an invisible text layer that makes the content searchable." }
    },
    {
      "@type": "Question",
      "name": "How do I make a scanned PDF searchable?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your scanned PDF to OmnisPDF's OCR Scanner (Pro feature), select the document language, and process it. The tool adds a searchable text layer on top of the original scan. You can then use Ctrl+F to find any word in the document." }
    },
    {
      "@type": "Question",
      "name": "Will OCR change the appearance of my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OCR adds an invisible text layer behind the visible scan image. The document looks exactly the same — but now you can search, select, and copy text from it." }
    },
    {
      "@type": "Question",
      "name": "Can I OCR a PDF with multiple pages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OmnisPDF's OCR Scanner processes all pages in your PDF at once. Whether your document is 1 page or 100 pages, every page gets an OCR text layer." }
    },
    {
      "@type": "Question",
      "name": "What file size limits apply for OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Pro users can process PDFs up to 200MB with the OCR Scanner. If your file is larger, use OmnisPDF's Compress PDF tool first to reduce the file size, then run OCR on the compressed version." }
    },
    {
      "@type": "Question",
      "name": "Can I convert a searchable PDF to Word after OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Once your PDF has a text layer from OCR, you can convert it to Word using OmnisPDF's PDF to Word tool (Pro). The conversion will be much more accurate because the text layer gives the converter actual text to work with." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to OCR a PDF to Make It Searchable",
  "description": "Convert a scanned PDF into a searchable document in 3 steps using OmnisPDF's OCR Scanner.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your scanned PDF",
      "text": "Go to OmnisPDF's OCR Scanner tool and upload the PDF that contains scanned or image-only pages."
    },
    {
      "@type": "HowToStep",
      "name": "Select the language and run OCR",
      "text": "Choose the language of the text in your document for better accuracy, then click the OCR button to start processing."
    },
    {
      "@type": "HowToStep",
      "name": "Download the searchable PDF",
      "text": "Download your newly searchable PDF. You can now use Ctrl+F to find text, select and copy content, and convert to other formats like Word or plain text."
    }
  ]
}

export default function OCRPDFToSearchableTextPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR a PDF to Make It Searchable (Find Text in Scanned PDFs)</h1>
              <p className="text-xl text-slate-300">
                Got a scanned PDF where you cannot find, select, or copy text? OCR fixes that. Here is how to turn any scanned PDF into a fully searchable document.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <ScanText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Make your scanned PDF searchable right now (Pro feature).</p>
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

            {/* The problem */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Your Scanned PDF Is Not Searchable</h2>
              <p className="text-slate-600 mb-4">
                When you scan a document — whether with a flatbed scanner, a multifunction printer, or your phone camera — the result is an image embedded inside a PDF. It looks like text on screen, but to your computer it is just a picture of text.
              </p>
              <p className="text-slate-600 mb-4">
                This means you cannot press Ctrl+F to find a word. You cannot select a paragraph and copy it. You cannot convert it to Word and get actual editable text. The PDF is essentially a photo album pretending to be a document.
              </p>
              <p className="text-slate-600">
                OCR (Optical Character Recognition) solves this by analyzing the image, identifying every character, and creating a hidden text layer that sits behind the scan. The document looks the same, but now your computer can read it. Learn more about the technology in our <Link href="/learn/what-is-ocr" className="text-orange-600 hover:underline">What Is OCR?</Link> guide.
              </p>
            </section>

            {/* How to do it */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Make a Scanned PDF Searchable (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your scanned PDF",
                    desc: "Open OmnisPDF's OCR Scanner and upload your file. The tool accepts PDFs up to 200MB for Pro users. If your file is too large, compress it first using the Compress PDF tool.",
                  },
                  {
                    title: "Select the document language",
                    desc: "Choose the primary language of your document. This helps the OCR engine recognize characters more accurately. OmnisPDF supports dozens of languages including English, Spanish, French, German, and Portuguese.",
                  },
                  {
                    title: "Download the searchable PDF",
                    desc: "Click the OCR button and wait for processing. Download your new PDF — it looks identical to the original but now you can search, select, copy, and highlight text throughout the document.",
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

            {/* What you can do after */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What You Can Do After OCR</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF has a searchable text layer, several new possibilities open up:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Find specific text.</strong> Press Ctrl+F (or Cmd+F on Mac) to search for any word, name, date, or number in the document instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Copy and paste content.</strong> Select any text in the PDF and paste it into emails, reports, spreadsheets, or other documents — no manual retyping needed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Convert to Word.</strong> Use <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> to turn your now-searchable PDF into an editable Word document with much better accuracy than converting an image-only PDF.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Extract plain text.</strong> Use <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link> to pull out all the text content for data processing, translation, or analysis.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Index and archive.</strong> Searchable PDFs can be properly indexed by document management systems, making them easy to find later in large archives.</span>
                </li>
              </ul>
            </section>

            {/* Tips for best results */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Best OCR Results</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Start with a Clean Scan</h3>
                  <p className="text-slate-600">
                    OCR accuracy depends heavily on scan quality. Use at least 300 DPI resolution, make sure the text is not blurry, and avoid shadows or uneven lighting. If you scanned with your phone, run the file through <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> before OCR.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Select the Right Language</h3>
                  <p className="text-slate-600">
                    Always set the correct language in the OCR tool. This helps the engine choose the right character set and dictionary for spell-checking and context correction. For multilingual documents, select the primary language.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check the Output</h3>
                  <p className="text-slate-600">
                    After OCR, open the PDF and try searching for a few words to verify the text layer is accurate. For critical documents, compare key sections against the original to catch any recognition errors. Read our full guide on <Link href="/learn/ocr-accuracy-tips" className="text-orange-600 hover:underline">improving OCR accuracy</Link>.
                  </p>
                </div>
              </div>
            </section>

            {/* Searchable vs editable */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Searchable PDF vs. Editable PDF — What Is the Difference?</h2>
              <p className="text-slate-600 mb-4">
                A searchable PDF keeps the original scan image and adds an invisible text layer. You can find and copy text, but you cannot directly edit the words on the page. The visual appearance stays exactly the same as the original scan.
              </p>
              <p className="text-slate-600">
                An editable PDF (or editable document) lets you change, add, or delete text directly — like working in Word. If you need full editing, run OCR first, then convert to <Link href="/pdf-to-word" className="text-orange-600 hover:underline">Word format</Link> where you can make all the changes you need, and convert back to PDF when finished using <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Make Your Scanned PDFs Searchable</h2>
            <p className="text-slate-300 mb-6">Upload a scanned PDF and get a searchable version in seconds. Find any word, copy any text, convert to any format.</p>
            <Link
              href="/ocr-scanner"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ScanText className="h-5 w-5" /> Try OCR Scanner (Pro)
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "What Is OCR? (Optical Character Recognition Explained)", href: "/learn/what-is-ocr" },
                { title: "How to OCR a Scanned Document (Step-by-Step)", href: "/learn/ocr-scanned-document" },
                { title: "OCR Accuracy Tips (Get Better Text Recognition Results)", href: "/learn/ocr-accuracy-tips" },
                { title: "OCR a PDF on Your Phone (iPhone & Android)", href: "/learn/ocr-pdf-on-mobile" },
                { title: "Can OCR Read Handwritten Text? (What to Expect)", href: "/learn/ocr-handwritten-text" },
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
                { q: "Why can't I search text in my scanned PDF?", a: "Scanned PDFs are image-only — they contain pictures of text, not actual text data. Your computer sees them as flat images, so Ctrl+F has nothing to search. Running OCR adds an invisible text layer that makes the content searchable." },
                { q: "How do I make a scanned PDF searchable?", a: "Upload your scanned PDF to OmnisPDF's OCR Scanner (Pro feature), select the document language, and process it. The tool adds a searchable text layer on top of the original scan. You can then use Ctrl+F to find any word in the document." },
                { q: "Will OCR change the appearance of my PDF?", a: "No. OCR adds an invisible text layer behind the visible scan image. The document looks exactly the same — but now you can search, select, and copy text from it." },
                { q: "Can I OCR a PDF with multiple pages?", a: "Yes. OmnisPDF's OCR Scanner processes all pages in your PDF at once. Whether your document is 1 page or 100 pages, every page gets an OCR text layer." },
                { q: "What file size limits apply for OCR?", a: "Pro users can process PDFs up to 200MB with the OCR Scanner. If your file is larger, use OmnisPDF's Compress PDF tool first to reduce the file size, then run OCR on the compressed version." },
                { q: "Can I convert a searchable PDF to Word after OCR?", a: "Yes. Once your PDF has a text layer from OCR, you can convert it to Word using OmnisPDF's PDF to Word tool (Pro). The conversion will be much more accurate because the text layer gives the converter actual text to work with." },
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
