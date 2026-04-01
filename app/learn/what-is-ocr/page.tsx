import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "What Is OCR? (Optical Character Recognition Explained) | PDF.it",
  description:
    "Learn what OCR (Optical Character Recognition) is, how it works, and why it matters for scanned PDFs. Understand how OCR turns images of text into editable, searchable content.",
  keywords: "what is ocr, optical character recognition, ocr explained, how does ocr work",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does OCR stand for?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR stands for Optical Character Recognition. It is a technology that converts images of text — such as scanned documents, photos, or PDFs — into machine-readable and searchable text." }
    },
    {
      "@type": "Question",
      "name": "How does OCR work?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR software analyzes the shapes, patterns, and pixel arrangements in an image to identify individual characters (letters, numbers, symbols). Modern OCR uses machine learning to improve accuracy across different fonts, languages, and layouts." }
    },
    {
      "@type": "Question",
      "name": "Can OCR handle multiple languages?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Most modern OCR tools, including PDF.it's OCR Scanner, support dozens of languages including English, Spanish, French, German, Portuguese, and many more. You can select the document language before processing for better accuracy." }
    },
    {
      "@type": "Question",
      "name": "Is OCR 100% accurate?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR is typically 95-99% accurate on clean, high-resolution scans with standard printed fonts. Accuracy decreases with low-resolution images, handwritten text, unusual fonts, or heavily formatted documents. You can improve results by scanning at 300 DPI or higher." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install software to use OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it's OCR Scanner works entirely in your browser. Upload your scanned PDF, select the language, and download a searchable PDF — no software installation required." }
    },
    {
      "@type": "Question",
      "name": "Is OCR a Pro feature on PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. OCR Scanner is available to Pro and Business subscribers. Pro costs $3.99/month and includes unlimited conversions, files up to 200MB, batch processing, and all advanced tools including OCR." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Use OCR on a Scanned PDF",
  "description": "Convert a scanned PDF into searchable text in 3 simple steps using PDF.it's OCR Scanner.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your scanned PDF",
      "text": "Go to PDF.it's OCR Scanner tool and upload the scanned PDF you want to make searchable."
    },
    {
      "@type": "HowToStep",
      "name": "Select your language and run OCR",
      "text": "Choose the language of the document text and click the OCR button to start processing."
    },
    {
      "@type": "HowToStep",
      "name": "Download your searchable PDF",
      "text": "Once OCR processing is complete, download your new searchable PDF. You can now find text, copy content, and select words in the document."
    }
  ]
}

export default function WhatIsOCRPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">What Is OCR? (Optical Character Recognition Explained)</h1>
              <p className="text-xl text-slate-300">
                OCR is the technology that turns scanned documents and images into text you can search, copy, and edit. Here is everything you need to know about how it works and why it matters.
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
              <p className="text-slate-700 font-semibold">Want to try OCR right now? Use PDF.it's OCR Scanner (Pro).</p>
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

            {/* What is OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Does OCR Actually Do?</h2>
              <p className="text-slate-600 mb-4">
                OCR stands for Optical Character Recognition. It is a technology that looks at an image — a scanned page, a photograph of a document, or a PDF made from a scanner — and identifies the letters, numbers, and symbols in it.
              </p>
              <p className="text-slate-600 mb-4">
                Without OCR, a scanned PDF is just a picture. You cannot search for a word, copy a paragraph, or select any text. The file looks like a document, but to your computer it is just a flat image — no different from a photograph of a sunset.
              </p>
              <p className="text-slate-600">
                After OCR processing, an invisible text layer is placed on top of the image. Now you can press Ctrl+F to find words, copy text into another document, or extract the content into a <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">plain text file</Link> or <Link href="/pdf-to-word" className="text-orange-600 hover:underline">Word document</Link>.
              </p>
            </section>

            {/* How OCR works */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How OCR Works (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Image preprocessing",
                    desc: "The OCR engine first cleans up the image — adjusting contrast, removing noise, straightening skewed text, and converting to grayscale. This is why scan quality matters so much for accuracy.",
                  },
                  {
                    title: "Character recognition",
                    desc: "The software breaks the image into individual characters and compares each one against known letter shapes. Modern OCR uses machine learning models trained on millions of text samples across different fonts and languages.",
                  },
                  {
                    title: "Text reconstruction",
                    desc: "Recognized characters are assembled back into words, sentences, and paragraphs. The engine considers context — for example, 'tbe' is likely 'the' — to correct ambiguous characters and produce cleaner output.",
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

            {/* Why OCR matters for PDFs */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why OCR Matters for PDFs</h2>
              <p className="text-slate-600 mb-4">
                PDFs are the most common format for scanned documents. Every time you scan a contract, receipt, old report, or ID — the result is almost always a PDF. But those scanned PDFs are image-only. Here is why running OCR on them is important:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Searchability.</strong> Without OCR, you cannot find a specific word in a 50-page scanned contract. With OCR, press Ctrl+F and find it instantly.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Copy and paste.</strong> Need a quote, a number, or a paragraph from a scanned document? OCR lets you select and copy text instead of manually retyping it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Accessibility.</strong> Screen readers cannot read image-only PDFs. OCR makes your documents accessible to people who use assistive technology.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Archiving and compliance.</strong> Many organizations require searchable PDFs for legal and regulatory compliance. OCR transforms archived scans into properly indexed documents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Format conversion.</strong> Once a PDF has a text layer, you can convert it to <Link href="/pdf-to-word" className="text-orange-600 hover:underline">Word</Link>, <Link href="/pdf-to-excel" className="text-orange-600 hover:underline">Excel</Link>, or <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">plain text</Link> with much better results.</span>
                </li>
              </ul>
            </section>

            {/* When you need OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Situations Where You Need OCR</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scanned Contracts and Legal Documents</h3>
                  <p className="text-slate-600">
                    Law firms and businesses scan contracts constantly. OCR makes those scans searchable so you can find specific clauses, dates, or dollar amounts without reading every page manually.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Receipts and Financial Records</h3>
                  <p className="text-slate-600">
                    Scanning receipts for expense reports or tax records? OCR lets you extract amounts and dates. If you also need to clean up phone-scanned receipts, try the <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> tool first.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Old Books, Papers, and Archives</h3>
                  <p className="text-slate-600">
                    Libraries and researchers digitize old documents regularly. OCR turns those scans into searchable text archives. For best results, scan at 300 DPI or higher and ensure even lighting.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Photos of Whiteboards or Notes</h3>
                  <p className="text-slate-600">
                    Took a photo of meeting notes on a whiteboard? Convert the image to PDF, then run OCR to extract the text. Keep in mind that <Link href="/learn/ocr-handwritten-text" className="text-orange-600 hover:underline">handwritten text</Link> is harder for OCR to read accurately.
                  </p>
                </div>
              </div>
            </section>

            {/* How to OCR with PDF.it */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Run OCR on PDF.it</h2>
              <p className="text-slate-600 mb-4">
                PDF.it's <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link> is a Pro feature that converts scanned PDFs into searchable documents. Here is what you get:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Upload any scanned PDF — the tool detects image-only pages automatically.</li>
                <li>&#10003; Select the document language for better recognition accuracy.</li>
                <li>&#10003; Download a searchable PDF with an invisible text layer on top of the original scan.</li>
                <li>&#10003; Process files up to 200MB with a Pro subscription ($3.99/month).</li>
                <li>&#10003; After OCR, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> if the file is too large for email or upload portals.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                OCR Scanner is available on the <Link href="/pricing" className="text-orange-600 hover:underline">Pro and Business plans</Link>. Free users can explore all other PDF.it tools with generous daily limits.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Make Your PDFs Searchable?</h2>
            <p className="text-slate-300 mb-6">Upload a scanned PDF and let OCR Scanner extract every word — so you can search, copy, and edit your documents.</p>
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
                { title: "OCR a PDF to Make It Searchable (Find Text in Scanned PDFs)", href: "/learn/ocr-pdf-to-searchable-text" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What does OCR stand for?", a: "OCR stands for Optical Character Recognition. It is a technology that converts images of text — such as scanned documents, photos, or PDFs — into machine-readable and searchable text." },
                { q: "How does OCR work?", a: "OCR software analyzes the shapes, patterns, and pixel arrangements in an image to identify individual characters (letters, numbers, symbols). Modern OCR uses machine learning to improve accuracy across different fonts, languages, and layouts." },
                { q: "Can OCR handle multiple languages?", a: "Yes. Most modern OCR tools, including PDF.it's OCR Scanner, support dozens of languages including English, Spanish, French, German, Portuguese, and many more. You can select the document language before processing for better accuracy." },
                { q: "Is OCR 100% accurate?", a: "OCR is typically 95-99% accurate on clean, high-resolution scans with standard printed fonts. Accuracy decreases with low-resolution images, handwritten text, unusual fonts, or heavily formatted documents. You can improve results by scanning at 300 DPI or higher." },
                { q: "Do I need to install software to use OCR?", a: "No. PDF.it's OCR Scanner works entirely in your browser. Upload your scanned PDF, select the language, and download a searchable PDF — no software installation required." },
                { q: "Is OCR a Pro feature on PDF.it?", a: "Yes. OCR Scanner is available to Pro and Business subscribers. Pro costs $3.99/month and includes unlimited conversions, files up to 200MB, batch processing, and all advanced tools including OCR." },
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
