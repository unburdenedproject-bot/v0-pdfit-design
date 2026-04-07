import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Office Files to PDF on Mobile (iPhone & Android) | PDF.it",
  description:
    "Learn how to convert Word, Excel, and PowerPoint files to PDF on your iPhone or Android phone. No app needed — use PDF.it in any mobile browser.",
  keywords: "convert office to pdf on phone, word to pdf iphone, excel to pdf android, office to pdf mobile, convert to pdf on phone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert a Word file to PDF on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Safari or Chrome, go to PDF.it's Office to PDF tool, upload your .docx file, and download the converted PDF. No app installation required." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install an app to convert Office files to PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it works entirely in your mobile browser — Safari, Chrome, or Firefox. Upload your file, convert it, and download the PDF without installing anything." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Excel files to PDF on Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open any browser on your Android phone, go to PDF.it, upload your .xlsx file, and get a PDF back in seconds. The tool preserves your table formatting and layout." }
    },
    {
      "@type": "Question",
      "name": "Where does the converted PDF get saved on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "On iPhone, the PDF downloads to your Files app or the Downloads folder in Safari. On Android, it goes to your Downloads folder. You can also share it directly from the browser via email or messaging apps." }
    },
    {
      "@type": "Question",
      "name": "Is the quality the same as converting on a computer?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it processes files on the server, not on your device. The conversion quality is identical whether you upload from a phone, tablet, or desktop computer." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple files to PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can convert one file at a time on mobile. Pro users get batch processing, which allows converting multiple Office files to PDF in a single operation even on a phone." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Office Files to PDF on Mobile",
  "description": "Convert Word, Excel, or PowerPoint files to PDF on your phone in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Open Safari (iPhone) or Chrome (Android) and go to pdf.it.com. Navigate to the Office to PDF tool."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your Office file",
      "text": "Tap the upload area and select your .docx, .xlsx, or .pptx file from your phone's file browser, cloud storage, or email attachments."
    },
    {
      "@type": "HowToStep",
      "name": "Download the PDF",
      "text": "Tap Convert, wait a few seconds, and download your PDF. It will be saved to your Downloads folder or Files app."
    }
  ]
}

export default function OfficeToQdfOnMobilePage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Office to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Office Files to PDF on Mobile (iPhone & Android)</h1>
              <p className="text-xl text-slate-300">
                You are on your phone, someone just asked for a PDF version of your document, and you do not have a computer nearby. No problem — here is how to convert any Office file to PDF right from your phone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <FileText className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone right now? Convert directly in your browser.</p>
            </div>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Might Need to Convert on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                More and more work happens on mobile devices. Here are the most common situations where you need to convert an Office file to PDF on your phone:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Urgent email requests.</strong> Your boss or client needs a PDF version of a report right now, and you only have your phone. Convert and reply in under a minute.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Job applications on the go.</strong> You found a job posting with a tight deadline and need to submit your Word resume as a PDF. Convert it from your phone without waiting to get home.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Uploading to portals.</strong> Government, university, and insurance portals often require PDF uploads. If the file is on your phone, convert it right there instead of transferring it to a computer first.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Sharing via messaging apps.</strong> PDFs are easier to view in WhatsApp, Telegram, and iMessage than raw Office files. Convert before sharing for a better experience.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Office Files to PDF on Your Phone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in your mobile browser",
                    desc: "Open Safari (iPhone), Chrome (Android), or any mobile browser and go to pdf.it.com. Tap the menu to find the Office to PDF tool, or go directly to pdf.it.com/office-to-pdf.",
                  },
                  {
                    title: "Upload your file",
                    desc: "Tap the upload area. Your phone will let you choose a file from your device storage, iCloud Drive, Google Drive, Dropbox, or recent email attachments. Select your .docx, .xlsx, or .pptx file.",
                  },
                  {
                    title: "Download the converted PDF",
                    desc: "Tap Convert and wait a few seconds. The PDF will download to your Downloads folder (Android) or Files app (iPhone). You can also share it directly via email, WhatsApp, or any other app.",
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

            {/* iPhone specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">iPhone-Specific Tips</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Finding Your Downloaded PDF</h3>
                  <p className="text-slate-600">
                    After downloading, the PDF may not appear automatically. Open the Files app and check the &quot;Downloads&quot; folder under &quot;On My iPhone&quot; or your iCloud Drive. In Safari, you can also tap the download icon (arrow) in the toolbar to see recent downloads.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Uploading from iCloud Drive</h3>
                  <p className="text-slate-600">
                    When you tap the upload area, select &quot;Browse&quot; and navigate to your iCloud Drive folder. This is especially useful if your Office files sync from your Mac. You can also access Google Drive and Dropbox if those apps are installed.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sharing Directly from Safari</h3>
                  <p className="text-slate-600">
                    After downloading the PDF, you can tap &quot;Open in...&quot; to share it directly via Mail, WhatsApp, or AirDrop without needing to find it in the Files app first.
                  </p>
                </div>
              </div>
            </section>

            {/* Android specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Android-Specific Tips</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Check your Downloads folder.</strong> After converting, the PDF goes to your Downloads folder by default. Pull down the notification shade to see the download notification and tap to open.</li>
                <li>&#10003; <strong>Upload from Google Drive.</strong> When you tap the upload area in Chrome, you can browse Google Drive directly. This is the fastest way to convert a file stored in the cloud.</li>
                <li>&#10003; <strong>Use &quot;Share&quot; from other apps.</strong> If you receive an Office file in Gmail or WhatsApp, long-press the attachment, tap &quot;Share,&quot; then &quot;Open in Chrome&quot; to navigate to PDF.it and upload it.</li>
                <li>&#10003; <strong>Samsung users:</strong> Samsung Internet browser works just as well as Chrome for uploading and converting files on PDF.it.</li>
              </ul>
            </section>

            {/* What to do after converting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Converting on Mobile</h2>
              <p className="text-slate-600 mb-4">
                Once you have your PDF on your phone, you might need a few additional steps:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Compress the PDF</strong> if it is too large for email or a portal. Use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> or <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> — both work on mobile.</li>
                <li>&#10003; <strong>Merge multiple PDFs</strong> into one document using <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link>. This works on mobile too — upload all your files and combine them.</li>
                <li>&#10003; <strong>Add password protection</strong> with <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> before sharing sensitive documents.</li>
                <li>&#10003; <strong>Check formatting.</strong> Open the PDF on your phone to make sure everything looks right. If you see formatting issues, read our guide on <Link href="/learn/office-to-pdf-keep-formatting" className="text-[#14D8C4] hover:underline">keeping formatting when converting to PDF</Link>.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Office Files on Your Phone</h2>
            <p className="text-slate-300 mb-6">No app needed. Open PDF.it in your mobile browser, upload your file, and get a PDF in seconds.</p>
            <Link
              href="/office-to-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Convert to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Office to PDF Converter: DOCX, XLSX, PPTX to PDF", href: "/learn/office-to-pdf-converter" },
                { title: "Convert DOCX, XLSX & PPTX to PDF — All Office Formats", href: "/learn/convert-docx-xlsx-pptx-to-pdf" },
                { title: "Best Format to Send Documents (PDF vs DOCX vs Other)", href: "/learn/best-format-to-send-documents" },
                { title: "How to Keep Formatting When Converting Office to PDF", href: "/learn/office-to-pdf-keep-formatting" },
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
                { q: "Can I convert a Word file to PDF on my iPhone?", a: "Yes. Open Safari or Chrome, go to PDF.it's Office to PDF tool, upload your .docx file, and download the converted PDF. No app installation required." },
                { q: "Do I need to install an app to convert Office files to PDF on my phone?", a: "No. PDF.it works entirely in your mobile browser — Safari, Chrome, or Firefox. Upload your file, convert it, and download the PDF without installing anything." },
                { q: "Can I convert Excel files to PDF on Android?", a: "Yes. Open any browser on your Android phone, go to PDF.it, upload your .xlsx file, and get a PDF back in seconds. The tool preserves your table formatting and layout." },
                { q: "Where does the converted PDF get saved on my phone?", a: "On iPhone, the PDF downloads to your Files app or the Downloads folder in Safari. On Android, it goes to your Downloads folder. You can also share it directly from the browser via email or messaging apps." },
                { q: "Is the quality the same as converting on a computer?", a: "Yes. PDF.it processes files on the server, not on your device. The conversion quality is identical whether you upload from a phone, tablet, or desktop computer." },
                { q: "Can I convert multiple files to PDF on my phone?", a: "Free users can convert one file at a time on mobile. Pro users get batch processing, which allows converting multiple Office files to PDF in a single operation even on a phone." },
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
