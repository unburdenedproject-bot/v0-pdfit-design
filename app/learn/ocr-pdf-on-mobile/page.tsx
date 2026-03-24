import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR a PDF on Your Phone (iPhone & Android) | PDF.it",
  description:
    "Learn how to run OCR on a PDF from your phone. No app needed — use PDF.it in Safari or Chrome on iPhone and Android to make scanned PDFs searchable.",
  keywords: "ocr pdf on phone, ocr pdf iphone, scan document ocr android, ocr pdf mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I run OCR on my iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it's OCR Scanner works in Safari, Chrome, or any mobile browser on iPhone. Upload your scanned PDF, select the language, run OCR, and download the searchable version — all without installing any app." }
    },
    {
      "@type": "Question",
      "name": "Does OCR work on Android phones?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works on Android in Chrome, Firefox, or any other mobile browser. The process is the same — upload your PDF, run OCR, and download the searchable result." }
    },
    {
      "@type": "Question",
      "name": "Can I scan a document with my phone camera and OCR it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use your phone's built-in scanner (Notes on iPhone, Google Drive on Android) to capture the document as a PDF, then upload it to PDF.it's OCR Scanner. For better results, run the scan through Phone Scan Cleanup first." }
    },
    {
      "@type": "Question",
      "name": "How big of a file can I OCR on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it Pro users can process PDFs up to 200MB on any device, including mobile. If your file is large and your connection is slow, consider compressing the PDF first to speed up the upload." }
    },
    {
      "@type": "Question",
      "name": "Will OCR on mobile be slower than on a computer?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OCR processing happens on PDF.it's servers, not on your device. The speed is the same whether you use a phone, tablet, or desktop computer. The only difference is upload and download speed, which depends on your internet connection." }
    },
    {
      "@type": "Question",
      "name": "Is OCR on mobile a free feature?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR Scanner is a Pro feature on PDF.it, available for $7.99/month. This applies to both mobile and desktop use. Pro includes unlimited conversions, files up to 200MB, batch processing, and all advanced tools." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to OCR a PDF on Your Phone",
  "description": "Make a scanned PDF searchable from your iPhone or Android in 3 steps using PDF.it's browser-based OCR Scanner.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Go to pdf.it.com/ocr-scanner in Safari (iPhone) or Chrome (Android). No app installation is needed."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your scanned PDF and run OCR",
      "text": "Tap the upload area, select your scanned PDF from Files or your photo library, choose the document language, and tap the OCR button."
    },
    {
      "@type": "HowToStep",
      "name": "Download the searchable PDF",
      "text": "Once processing finishes, download your searchable PDF. You can now search for text, copy content, and share the improved document."
    }
  ]
}

export default function OCRPDFOnMobilePage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR a PDF on Your Phone (iPhone & Android)</h1>
              <p className="text-xl text-slate-300">
                No computer? No problem. You can scan a document with your phone camera and run OCR on it right from your browser — no app needed.
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
              <p className="text-slate-700 font-semibold">Open OCR Scanner on your phone right now (Pro feature).</p>
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

            {/* Why mobile OCR */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why OCR on Your Phone?</h2>
              <p className="text-slate-600 mb-4">
                You are not always near a computer — but you almost always have your phone. Here are the most common situations where mobile OCR saves the day:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>On-the-go document capture.</strong> You receive a printed document at a meeting, scan it with your phone camera, and immediately OCR it so you can search the text later.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Receipts and expenses.</strong> Photograph a receipt at a restaurant or store, convert it to PDF, and run OCR to extract amounts and dates for expense reports.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Quick text extraction.</strong> Need to copy a paragraph from a printed page into a text message or email? Scan, OCR, copy, and paste — all from your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Travel documents.</strong> Scan boarding passes, hotel confirmations, or visa documents while traveling and make them searchable for easy reference.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Student notes and textbooks.</strong> Photograph textbook pages or class handouts and OCR them so you can search for specific terms when studying.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to OCR a PDF on Your Phone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Scan or select your document",
                    desc: "Use your phone's built-in scanner (Notes on iPhone, Google Drive on Android) to capture a clean PDF of your document. Or select an existing scanned PDF from your Files app. For the best results, run the scan through Phone Scan Cleanup first.",
                  },
                  {
                    title: "Open PDF.it's OCR Scanner",
                    desc: "Go to pdf.it.com/ocr-scanner in Safari (iPhone) or Chrome (Android). Tap the upload area and select your PDF. Choose the document language from the dropdown menu.",
                  },
                  {
                    title: "Process and download",
                    desc: "Tap the OCR button. Processing happens on PDF.it's servers, so it is fast regardless of your phone model. When it finishes, tap Download to save the searchable PDF to your device.",
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

            {/* iPhone tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">OCR Tips for iPhone Users</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scan with the Notes App</h3>
                  <p className="text-slate-600">
                    Open Notes, create a new note, tap the camera icon, and select &quot;Scan Documents.&quot; The built-in scanner automatically detects page edges, corrects perspective, and saves as a clean PDF. This gives much better results than a regular photo.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Save to Files for Easy Upload</h3>
                  <p className="text-slate-600">
                    After scanning in Notes, share the scan and save it to Files. When you open PDF.it's OCR Scanner in Safari, you can browse Files directly to select your PDF. This avoids the confusion of searching through your Camera Roll.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Safari for Best Compatibility</h3>
                  <p className="text-slate-600">
                    While PDF.it works in any browser, Safari is the default on iPhone and offers the smoothest file upload experience. Chrome and Firefox also work, but Safari integrates more naturally with the Files app and iCloud Drive.
                  </p>
                </div>
              </div>
            </section>

            {/* Android tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">OCR Tips for Android Users</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Scan with Google Drive</h3>
                  <p className="text-slate-600">
                    Open Google Drive, tap the + button, and select &quot;Scan.&quot; Google Drive&apos;s scanner has excellent edge detection and automatic image enhancement. The resulting PDF is saved directly to your Drive, making it easy to access from any device.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Chrome for File Uploads</h3>
                  <p className="text-slate-600">
                    Chrome on Android handles file uploads reliably. When you tap the upload area on PDF.it, you can browse your Downloads folder, Google Drive, or any other file manager to find your scanned PDF.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check Your Downloads</h3>
                  <p className="text-slate-600">
                    After OCR processing, the searchable PDF downloads to your Downloads folder by default. Open your Files or Downloads app to find it. You can then share it via email, WhatsApp, or any other app directly from your phone.
                  </p>
                </div>
              </div>
            </section>

            {/* Getting better results on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Getting Better OCR Results on Mobile</h2>
              <p className="text-slate-600 mb-4">
                Phone-scanned documents often have quality issues that reduce OCR accuracy. Here is how to get the best results:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Phone Scan Cleanup first.</strong> Before running OCR, upload your phone scan to PDF.it&apos;s <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> tool. It automatically corrects shadows, improves contrast, and straightens the image.</li>
                <li>&#10003; <strong>Scan in good lighting.</strong> Natural daylight works best. Avoid scanning under fluorescent lights which can create flickering shadows, and never use flash, which creates bright hotspots.</li>
                <li>&#10003; <strong>Hold the phone directly above.</strong> Shooting at an angle creates perspective distortion that reduces OCR accuracy. Hold your phone parallel to the document surface.</li>
                <li>&#10003; <strong>Use the built-in scanner apps.</strong> Notes (iPhone) and Google Drive (Android) have document scanning modes that automatically crop, straighten, and enhance the scan. These always produce better results than a regular camera photo.</li>
                <li>&#10003; <strong>Select the right language.</strong> This is just as important on mobile as on desktop. Always set the correct document language in the OCR Scanner settings. For more tips, see our <Link href="/learn/ocr-accuracy-tips" className="text-orange-600 hover:underline">OCR Accuracy Tips</Link> guide.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">OCR Any PDF From Your Phone</h2>
            <p className="text-slate-300 mb-6">Open PDF.it in your mobile browser, upload a scanned PDF, and get a searchable version in seconds. No app needed.</p>
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
                { title: "OCR Accuracy Tips (Get Better Text Recognition Results)", href: "/learn/ocr-accuracy-tips" },
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
                { q: "Can I run OCR on my iPhone without an app?", a: "Yes. PDF.it's OCR Scanner works in Safari, Chrome, or any mobile browser on iPhone. Upload your scanned PDF, select the language, run OCR, and download the searchable version — all without installing any app." },
                { q: "Does OCR work on Android phones?", a: "Yes. PDF.it works on Android in Chrome, Firefox, or any other mobile browser. The process is the same — upload your PDF, run OCR, and download the searchable result." },
                { q: "Can I scan a document with my phone camera and OCR it?", a: "Yes. Use your phone's built-in scanner (Notes on iPhone, Google Drive on Android) to capture the document as a PDF, then upload it to PDF.it's OCR Scanner. For better results, run the scan through Phone Scan Cleanup first." },
                { q: "How big of a file can I OCR on mobile?", a: "PDF.it Pro users can process PDFs up to 200MB on any device, including mobile. If your file is large and your connection is slow, consider compressing the PDF first to speed up the upload." },
                { q: "Will OCR on mobile be slower than on a computer?", a: "No. OCR processing happens on PDF.it's servers, not on your device. The speed is the same whether you use a phone, tablet, or desktop computer. The only difference is upload and download speed, which depends on your internet connection." },
                { q: "Is OCR on mobile a free feature?", a: "OCR Scanner is a Pro feature on PDF.it, available for $7.99/month. This applies to both mobile and desktop use. Pro includes unlimited conversions, files up to 200MB, batch processing, and all advanced tools." },
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
