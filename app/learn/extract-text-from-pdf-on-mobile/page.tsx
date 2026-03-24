import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Extract Text from PDF on iPhone/Android (Best Methods) | PDF.it",
  description:
    "Learn how to extract text from a PDF on your phone. Step-by-step guide for iPhone and Android — no app required. Works for digital and scanned PDFs.",
  keywords: "extract text from pdf on iphone, extract text from pdf android, pdf to text mobile, copy text from pdf on phone, pdf text extraction mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I extract text from a PDF on my iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open PDF.it.com in Safari, upload your PDF to the PDF to TXT tool, and download the plain text file. No app installation needed — it works entirely in your browser." }
    },
    {
      "@type": "Question",
      "name": "How do I copy text from a PDF on Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Open the PDF in Google Drive or your default PDF viewer and try selecting text. If that doesn't work cleanly (broken lines, weird formatting), use PDF.it's PDF to TXT tool in Chrome to get a clean text extraction." }
    },
    {
      "@type": "Question",
      "name": "Can I extract text from a scanned PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, but you need OCR. Standard PDF to TXT won't work on scanned documents. Use PDF.it's OCR Scanner in your mobile browser — upload the scanned PDF and it will extract the text using optical character recognition." }
    },
    {
      "@type": "Question",
      "name": "What's the best PDF text extractor app for iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "You don't need an app. PDF.it works directly in Safari on iPhone — upload your PDF, convert to TXT, and download the text. It's faster than installing an app and works on any iOS version." }
    },
    {
      "@type": "Question",
      "name": "Why does copy-paste from a PDF on mobile give me broken text?",
      "acceptedAnswer": { "@type": "Answer", "text": "Mobile PDF viewers have limited text selection capabilities. They often break lines at visual line endings, merge columns, and include headers/footers. Converting to TXT with PDF.it gives you properly ordered text without these issues." }
    },
    {
      "@type": "Question",
      "name": "Can I save extracted text directly to my Notes app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After downloading the TXT file from PDF.it, open it on your phone and use the share button to send it to Notes (iPhone), Google Keep (Android), or any other notes app. You can also copy all the text and paste it directly." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Extract Text from a PDF on Mobile",
  "description": "Get clean text from any PDF on iPhone or Android in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Go to pdf.it.com in Safari (iPhone) or Chrome (Android) and navigate to the PDF to TXT tool."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Tap the upload area and select your PDF from Files (iPhone), Google Drive, or your Downloads folder. The file uploads directly from your phone."
    },
    {
      "@type": "HowToStep",
      "name": "Download the text",
      "text": "Tap Convert, then download the TXT file. Open it directly or share it to your notes app, email, or messaging app."
    }
  ]
}

export default function ExtractTextFromPdfOnMobilePage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Text from PDF on iPhone/Android (Best Methods)</h1>
              <p className="text-xl text-slate-300">
                Need to pull text from a PDF on your phone? Here's how to do it without installing any apps — works on both iPhone and Android.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone right now? Extract text instantly in your browser.</p>
            </div>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF to TXT Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why mobile is tricky */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Extracting PDF Text on Mobile Is Harder Than Desktop</h2>
              <p className="text-slate-600 mb-4">
                On a computer, you can open a PDF, select text, and copy it — though even that often breaks formatting. On a phone, it's even worse:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Text selection is imprecise.</strong> Selecting specific paragraphs with your finger is difficult. You often end up selecting too much or too little.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Mobile PDF viewers are limited.</strong> The default PDF viewers on iPhone and Android handle basic viewing well, but text selection and copying are afterthoughts.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Multi-page selection is nearly impossible.</strong> Selecting text across multiple pages on a phone is a frustrating experience — the view scrolls unpredictably.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Paste results are messy.</strong> Even when you manage to select text, pasting it into Notes or Messages produces broken lines and random formatting.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                The solution: instead of fighting with copy-paste, use a tool that extracts all the text cleanly in one step.
              </p>
            </section>

            {/* Method 1: PDF.it */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Method 1: Use PDF.it in Your Mobile Browser (Recommended)</h2>
              <p className="text-slate-600 mb-4">
                The fastest and cleanest way to extract text from a PDF on your phone. No app needed — it works in Safari, Chrome, or any mobile browser.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in your browser",
                    desc: "Go to pdf.it.com in Safari (iPhone) or Chrome (Android). Navigate to the PDF to TXT tool from the menu or go directly to pdf.it.com/pdf-to-txt.",
                  },
                  {
                    title: "Upload your PDF",
                    desc: "Tap the upload area. On iPhone, choose from Files, iCloud Drive, or your recent downloads. On Android, browse your device storage or Google Drive. The PDF uploads directly from your phone.",
                  },
                  {
                    title: "Download the clean text",
                    desc: "Tap Convert, wait a few seconds, then download the TXT file. Open it to copy the text, or use the share button to send it directly to Notes, Google Keep, WhatsApp, or email.",
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

            {/* Method 2: Built-in tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Method 2: Use Your Phone's Built-In PDF Viewer</h2>
              <p className="text-slate-600 mb-4">
                For quick, small selections (a sentence or paragraph), your phone's built-in tools might be enough:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iPhone (Files App / Safari)</h3>
                  <p className="text-slate-600">
                    Open the PDF in the Files app or Safari. Long-press on a word to start selection, then drag the handles to expand. Tap "Copy" and paste into your destination. This works for short selections but breaks on full pages or multi-column layouts.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Android (Google Drive / Default Viewer)</h3>
                  <p className="text-slate-600">
                    Open the PDF in Google Drive or your default viewer. Long-press to select text, drag to expand, and copy. Google Drive's PDF viewer handles text selection better than most third-party apps.
                  </p>
                </div>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                <strong>Limitation:</strong> Built-in viewers can't handle scanned PDFs, multi-page selection, or complex layouts. For anything beyond a quick paragraph, use <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF to TXT</Link>.
              </p>
            </section>

            {/* Scanned PDFs on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Extracting Text from Scanned PDFs on Mobile</h2>
              <p className="text-slate-600 mb-4">
                If your PDF is a scanned document (photos of paper pages), standard text extraction won't work — neither copy-paste nor PDF to TXT. You need OCR (Optical Character Recognition).
              </p>
              <p className="text-slate-600 mb-4">
                PDF.it's <Link href="/ocr-scanner" className="text-orange-600 hover:underline">OCR Scanner</Link> works in your mobile browser just like PDF to TXT:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#x2713; Upload your scanned PDF from your phone</li>
                <li>&#x2713; OCR reads the text from each page image</li>
                <li>&#x2713; Download the extracted text or a searchable PDF</li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Pro tip:</strong> If you just took a photo of a document with your phone camera, use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> first to enhance the image quality, then run OCR for better accuracy.
              </p>
            </section>

            {/* Platform comparison */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone vs Android: Which Handles PDF Text Better?</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Feature</th>
                      <th className="text-left py-3 px-4 font-bold">iPhone</th>
                      <th className="text-left py-3 px-4 font-bold">Android</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Default PDF viewer</td>
                      <td className="py-3 px-4">Files app (decent)</td>
                      <td className="py-3 px-4">Google Drive (good)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Text selection quality</td>
                      <td className="py-3 px-4">OK for short selections</td>
                      <td className="py-3 px-4">Slightly better with Drive</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold">Built-in OCR</td>
                      <td className="py-3 px-4">Live Text (iOS 15+, photos only)</td>
                      <td className="py-3 px-4">Google Lens (photos only)</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold">Best for full extraction</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">PDF.it in Safari</td>
                      <td className="py-3 px-4 font-semibold text-orange-600">PDF.it in Chrome</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 mt-4 text-sm">
                Both platforms' built-in OCR features (Live Text and Google Lens) work on photos but not on PDF files. For PDF text extraction, a web tool like <Link href="/pdf-to-txt" className="text-orange-600 hover:underline">PDF.it</Link> is the most reliable option on both platforms.
              </p>
            </section>

            {/* Saving text to different apps */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Save Your Extracted Text</h2>
              <p className="text-slate-600 mb-4">
                Once you've downloaded the TXT file from PDF.it, here's how to get it into your favorite apps:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Apple Notes</h3>
                  <p className="text-slate-600">
                    Open the TXT file, tap the share icon, and select Notes. Or open the file, select all text, copy, and paste into a new note.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Google Keep / Google Docs</h3>
                  <p className="text-slate-600">
                    Share the TXT file to Google Keep for a quick note, or open it in Google Docs for a full document. Both accept plain text cleanly.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Email or Messages</h3>
                  <p className="text-slate-600">
                    Copy the text directly from the TXT file and paste it into an email or message. Plain text pastes cleanly in every messaging app without formatting issues.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Extract PDF Text on Your Phone — Right Now</h2>
            <p className="text-slate-300 mb-6">No app to install. Upload your PDF in your mobile browser and download clean text in seconds.</p>
            <Link
              href="/pdf-to-txt"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> PDF to TXT Now
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
                { title: "Convert Scanned PDF to Text: When You Need OCR", href: "/learn/convert-scanned-pdf-to-text" },
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
                { q: "Can I extract text from a PDF on my iPhone without an app?", a: "Yes. Open PDF.it.com in Safari, upload your PDF to the PDF to TXT tool, and download the plain text file. No app installation needed — it works entirely in your browser." },
                { q: "How do I copy text from a PDF on Android?", a: "Open the PDF in Google Drive or your default PDF viewer and try selecting text. If that doesn't work cleanly (broken lines, weird formatting), use PDF.it's PDF to TXT tool in Chrome to get a clean text extraction." },
                { q: "Can I extract text from a scanned PDF on my phone?", a: "Yes, but you need OCR. Standard PDF to TXT won't work on scanned documents. Use PDF.it's OCR Scanner in your mobile browser — upload the scanned PDF and it will extract the text using optical character recognition." },
                { q: "What's the best PDF text extractor app for iPhone?", a: "You don't need an app. PDF.it works directly in Safari on iPhone — upload your PDF, convert to TXT, and download the text. It's faster than installing an app and works on any iOS version." },
                { q: "Why does copy-paste from a PDF on mobile give me broken text?", a: "Mobile PDF viewers have limited text selection capabilities. They often break lines at visual line endings, merge columns, and include headers/footers. Converting to TXT with PDF.it gives you properly ordered text without these issues." },
                { q: "Can I save extracted text directly to my Notes app?", a: "Yes. After downloading the TXT file from PDF.it, open it on your phone and use the share button to send it to Notes (iPhone), Google Keep (Android), or any other notes app. You can also copy all the text and paste it directly." },
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
