import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR Accuracy Tips (Get Better Text Recognition Results) | PDF.it",
  description:
    "Learn how to improve OCR accuracy with better scan quality, resolution, contrast, and language settings. Get cleaner text recognition from scanned PDFs every time.",
  keywords: "ocr accuracy, improve ocr results, ocr quality tips, better text recognition",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What resolution should I scan at for OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scan at 300 DPI for standard text documents. For documents with small fonts (below 10pt), scan at 400-600 DPI. Scanning below 200 DPI will produce noticeably worse OCR results." }
    },
    {
      "@type": "Question",
      "name": "Does color vs. grayscale affect OCR accuracy?",
      "acceptedAnswer": { "@type": "Answer", "text": "For text-only documents, grayscale or black-and-white scans often produce better OCR results because there is more contrast between the text and background. Color scans are better when the document has colored text or colored backgrounds that affect readability." }
    },
    {
      "@type": "Question",
      "name": "Why is my OCR output full of errors?",
      "acceptedAnswer": { "@type": "Answer", "text": "Common causes include low scan resolution (below 200 DPI), skewed or rotated pages, poor lighting causing shadows, low contrast between text and background, or selecting the wrong language in the OCR settings. Fix these issues and re-run OCR for better results." }
    },
    {
      "@type": "Question",
      "name": "Can I improve OCR results on a document I already scanned?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can improve an existing scan by adjusting contrast, straightening skewed pages, and removing noise using image editing software or PDF.it's Phone Scan Cleanup tool. Then re-run OCR on the improved version." }
    },
    {
      "@type": "Question",
      "name": "Does the font type affect OCR accuracy?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Standard fonts like Arial, Times New Roman, and Calibri produce the highest OCR accuracy. Decorative, script, or very thin fonts are harder to recognize. Handwritten text is the most challenging — see our guide on OCR and handwriting." }
    },
    {
      "@type": "Question",
      "name": "How accurate is modern OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "On clean, high-resolution scans with standard printed text, modern OCR achieves 95-99% character accuracy. This means on a page of 2,000 characters, you might see 20-100 that need correction. Accuracy drops with poor scan quality, unusual fonts, or complex layouts." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Improve OCR Accuracy",
  "description": "Get better OCR text recognition results in 3 steps by optimizing your scan quality and settings.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Optimize your scan quality",
      "text": "Scan at 300 DPI or higher, use even lighting, and ensure the document is flat and straight. For phone scans, use the Phone Scan Cleanup tool."
    },
    {
      "@type": "HowToStep",
      "name": "Select the correct language",
      "text": "In the OCR Scanner tool, choose the language that matches your document. This ensures the engine uses the right character set and dictionary for recognition."
    },
    {
      "@type": "HowToStep",
      "name": "Review and verify the output",
      "text": "After OCR processing, search for a few key words in the PDF to verify accuracy. For critical documents, spot-check important sections like names, dates, and numbers."
    }
  ]
}

export default function OCRAccuracyTipsPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR Accuracy Tips (Get Better Text Recognition Results)</h1>
              <p className="text-xl text-slate-300">
                OCR is not magic — the quality of your results depends on scan quality, settings, and preparation. Here are the proven tips to get the most accurate text recognition from your scanned PDFs.
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
              <p className="text-slate-700 font-semibold">Apply these tips and try PDF.it's OCR Scanner (Pro).</p>
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

            {/* Resolution */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Scan at the Right Resolution (DPI Matters)</h2>
              <p className="text-slate-600 mb-4">
                Resolution is the single biggest factor in OCR accuracy. DPI (dots per inch) determines how much detail your scanner captures. Here is what to aim for:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>300 DPI — the standard.</strong> This is the recommended resolution for most text documents. It provides enough detail for OCR to recognize characters accurately without creating unnecessarily large files.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>400-600 DPI — for small text.</strong> If your document has footnotes, fine print, or text smaller than 10 points, increase the resolution. The extra detail helps OCR distinguish between similar characters like &apos;l&apos; and &apos;1&apos;, or &apos;O&apos; and &apos;0&apos;.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Below 200 DPI — avoid this.</strong> Low-resolution scans produce blurry characters that OCR cannot reliably recognize. If you receive a low-resolution scan from someone else, there is limited improvement possible without rescanning.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Above 600 DPI — diminishing returns.</strong> Scanning above 600 DPI creates much larger files but does not significantly improve OCR accuracy for standard printed text. Save storage space and processing time by staying at 300-600 DPI.</span>
                </li>
              </ul>
            </section>

            {/* Lighting and contrast */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Optimize Lighting and Contrast</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Use even, consistent lighting",
                    desc: "Uneven lighting creates shadows across the page that confuse OCR. Flatbed scanners provide the best lighting. For phone scans, use natural daylight and position the document flat under even illumination — no desk lamps creating diagonal shadows.",
                  },
                  {
                    title: "Maximize text-to-background contrast",
                    desc: "Black text on white paper gives the best OCR results. If your document has light gray text, a colored background, or a yellowed page, increase the contrast in your scanner settings. Higher contrast makes character edges sharper and easier to recognize.",
                  },
                  {
                    title: "Clean up phone scans first",
                    desc: "Phone cameras introduce perspective distortion, shadows, and uneven exposure. Before running OCR, use PDF.it's Phone Scan Cleanup tool to automatically correct these issues. The cleaned-up version will produce significantly better OCR results.",
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

            {/* Page orientation */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Fix Page Orientation and Skew</h2>
              <p className="text-slate-600 mb-4">
                OCR engines expect text to run in straight horizontal lines. When a page is skewed (slightly rotated) or upside down, accuracy drops dramatically. Here is how to fix common orientation problems:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Straighten skewed pages.</strong> Even a 2-3 degree skew can cause OCR errors. If your scan looks slightly tilted, use <Link href="/rotate-pdf" className="text-orange-600 hover:underline">Rotate PDF</Link> to correct the orientation before running OCR.</li>
                <li>&#10003; <strong>Fix upside-down pages.</strong> If any pages in your PDF are rotated 180 degrees, OCR will either fail completely or produce gibberish. Rotate them right-side-up first.</li>
                <li>&#10003; <strong>Handle mixed orientations.</strong> Some documents mix portrait and landscape pages. Make sure each page is oriented so the text reads left-to-right, top-to-bottom before processing.</li>
                <li>&#10003; <strong>Use Phone Scan Cleanup for auto-correction.</strong> The <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> tool automatically detects and corrects skew in phone-captured documents, saving you the manual effort.</li>
              </ul>
            </section>

            {/* Language selection */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Select the Correct Language</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Why Language Selection Matters</h3>
                  <p className="text-slate-600">
                    OCR engines use language-specific models that include character sets, dictionaries, and grammar rules. When you tell the OCR tool that your document is in English, it knows to look for the Latin alphabet and uses an English dictionary to resolve ambiguous characters. Setting the wrong language forces the engine to use the wrong character set, which can cause widespread errors.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Multilingual Documents</h3>
                  <p className="text-slate-600">
                    If your document contains text in multiple languages (for example, an English document with Spanish names or French legal terms), select the primary language. The OCR engine will handle occasional words from other Latin-based languages reasonably well. For documents that are roughly half in each language, you may need to run OCR twice with different language settings.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Non-Latin Scripts</h3>
                  <p className="text-slate-600">
                    Documents in Chinese, Japanese, Korean, Arabic, Hindi, or other non-Latin scripts require selecting the specific language. The character recognition models for these languages are completely different from Latin-based models, and using the wrong one will produce meaningless output.
                  </p>
                </div>
              </div>
            </section>

            {/* Document preparation */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Prepare Your Document Before Scanning</h2>
              <p className="text-slate-600 mb-4">
                A few minutes of preparation before scanning can save you from hours of manual correction after OCR. Here are the highest-impact steps:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten the page.</strong> Wrinkles, folds, and curled edges create shadows and distortion. Place the document flat and use a book or glass to hold it down if needed.</li>
                <li>&#10003; <strong>Clean the scanner glass.</strong> Dust, smudges, and fingerprints on the scanner glass appear as noise in the scan and can be mistaken for characters or punctuation by the OCR engine.</li>
                <li>&#10003; <strong>Use the best copy available.</strong> If you have access to multiple copies of a document (original, photocopy, fax), always scan the one with the sharpest, darkest text.</li>
                <li>&#10003; <strong>Remove staples and paper clips.</strong> These create shadows and can cause the page to sit unevenly on the scanner, producing skewed scans.</li>
                <li>&#10003; <strong>Consider the output format.</strong> If you need to extract data into a spreadsheet after OCR, use <Link href="/pdf-to-excel" className="text-orange-600 hover:underline">PDF to Excel</Link>. For editable text, use <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link>. For raw text, use <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Get Accurate OCR Results?</h2>
            <p className="text-slate-300 mb-6">Apply these tips and upload your scanned PDF to PDF.it's OCR Scanner for the best possible text recognition.</p>
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
                { title: "OCR a PDF to Make It Searchable (Find Text in Scanned PDFs)", href: "/learn/ocr-pdf-to-searchable-text" },
                { title: "How to OCR a Scanned Document (Step-by-Step)", href: "/learn/ocr-scanned-document" },
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
                { q: "What resolution should I scan at for OCR?", a: "Scan at 300 DPI for standard text documents. For documents with small fonts (below 10pt), scan at 400-600 DPI. Scanning below 200 DPI will produce noticeably worse OCR results." },
                { q: "Does color vs. grayscale affect OCR accuracy?", a: "For text-only documents, grayscale or black-and-white scans often produce better OCR results because there is more contrast between the text and background. Color scans are better when the document has colored text or colored backgrounds that affect readability." },
                { q: "Why is my OCR output full of errors?", a: "Common causes include low scan resolution (below 200 DPI), skewed or rotated pages, poor lighting causing shadows, low contrast between text and background, or selecting the wrong language in the OCR settings. Fix these issues and re-run OCR for better results." },
                { q: "Can I improve OCR results on a document I already scanned?", a: "Yes. You can improve an existing scan by adjusting contrast, straightening skewed pages, and removing noise using image editing software or PDF.it's Phone Scan Cleanup tool. Then re-run OCR on the improved version." },
                { q: "Does the font type affect OCR accuracy?", a: "Yes. Standard fonts like Arial, Times New Roman, and Calibri produce the highest OCR accuracy. Decorative, script, or very thin fonts are harder to recognize. Handwritten text is the most challenging — see our guide on OCR and handwriting." },
                { q: "How accurate is modern OCR?", a: "On clean, high-resolution scans with standard printed text, modern OCR achieves 95-99% character accuracy. This means on a page of 2,000 characters, you might see 20-100 that need correction. Accuracy drops with poor scan quality, unusual fonts, or complex layouts." },
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
