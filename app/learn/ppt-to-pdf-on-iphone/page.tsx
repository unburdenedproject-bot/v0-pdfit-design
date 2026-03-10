import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Smartphone, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PPT to PDF on iPhone (Fast Method) | OmnisPDF",
  description:
    "Learn how to convert PowerPoint to PDF on iPhone using Safari and OmnisPDF. No app needed — open your PPTX from email or Files, convert online, and save or share the PDF.",
  keywords: "ppt to pdf iphone, convert powerpoint to pdf on iphone, pptx to pdf iphone, powerpoint pdf ios, convert ppt to pdf mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert PowerPoint to PDF on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Safari on your iPhone, go to OmnisPDF's PowerPoint to PDF tool, upload your PPTX file, and download the converted PDF. No app installation needed — everything works in the browser." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install an app to convert PPT to PDF on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF works directly in Safari or any mobile browser. You don't need to download any app from the App Store. Just visit the website, upload your file, and convert." }
    },
    {
      "@type": "Question",
      "name": "How do I open a PPTX file on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can open PPTX files from the Files app, email attachments, iCloud Drive, Google Drive, or Dropbox. If you receive a PPTX via email, tap the attachment to download it, then use the share button to save it to Files for easy access." }
    },
    {
      "@type": "Question",
      "name": "Where does the converted PDF save on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "When you tap the download button in Safari, the PDF saves to your Downloads folder in the Files app. You can also tap the downloaded file notification in Safari's toolbar to open it immediately, then share or save it wherever you want." }
    },
    {
      "@type": "Question",
      "name": "Can I share the PDF directly from my iPhone after converting?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After downloading the PDF, open it from the Files app and tap the share button. You can send it via email, iMessage, AirDrop, WhatsApp, Slack, or any other app that accepts file sharing." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit for converting on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can convert files up to 25MB. Pro users can upload files up to 200MB. If your PPTX is very large and you're on a slow connection, consider using Wi-Fi for a faster upload." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PPT to PDF on iPhone",
  "description": "Convert a PowerPoint file to PDF directly on your iPhone using Safari — no app needed.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open OmnisPDF in Safari",
      "text": "Open Safari on your iPhone and go to omnispdf.com/powerpoint-to-pdf. The tool works on any iPhone running iOS 15 or later."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your PPTX file",
      "text": "Tap the upload area and select your PowerPoint file from Files, iCloud Drive, email downloads, or any connected cloud storage."
    },
    {
      "@type": "HowToStep",
      "name": "Download and share the PDF",
      "text": "Tap Convert, then download the PDF. It saves to your Downloads folder in Files. Open it and use the share button to send via email, iMessage, AirDrop, or any app."
    }
  ]
}

export default function PPTToPDFOnIPhonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PowerPoint to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PPT to PDF on iPhone (Fast Method)</h1>
              <p className="text-xl text-slate-300">
                You're on your phone and need to send a presentation as a PDF — fast. Here's how to convert PowerPoint to PDF on your iPhone in under a minute, no app needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Smartphone className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your iPhone right now? Go straight to the tool.</p>
            </div>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PPT to PDF <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Need to Convert PPT to PDF on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                There are plenty of situations where you need to convert a PowerPoint on the go:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>A client or professor needs it now.</strong> You got the request while away from your computer. Convert and send from your phone in under a minute.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>You received a PPTX by email.</strong> Someone sent you a presentation, but you need a PDF to forward it to someone who doesn't have PowerPoint.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Upload portal requires PDF.</strong> A job application or submission form only accepts PDF, and the deadline is in minutes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>You want to review slides on the go.</strong> PDFs are easier to read on a phone than PowerPoint files — no zooming in and out of individual slides.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PPT to PDF on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Safari and go to OmnisPDF",
                    desc: "Open Safari (or Chrome) on your iPhone and visit omnispdf.com/powerpoint-to-pdf. The page is fully mobile-optimized — everything works on your phone screen.",
                  },
                  {
                    title: "Upload your PowerPoint file",
                    desc: "Tap the upload area. Your iPhone will show options to select a file from Files, iCloud Drive, or other connected storage. If the PPTX came via email, save it to Files first (tap the attachment > share > Save to Files).",
                  },
                  {
                    title: "Convert and download the PDF",
                    desc: "Tap Convert. In a few seconds, your PDF is ready. Tap Download — the file saves to your Downloads folder in the Files app. You can open it immediately from Safari's download indicator.",
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

            {/* Getting the PPTX onto your iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Get Your PPTX File on Your iPhone</h2>
              <p className="text-slate-600 mb-4">
                The hardest part is usually finding your file. Here's where to look depending on how you received it:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">From email (Gmail, Outlook, Apple Mail)</h3>
                  <p className="text-slate-600">
                    Open the email with the attachment. Tap the PPTX file to preview it, then tap the <strong>share button</strong> and select <strong>"Save to Files"</strong>. Choose a folder (Downloads is fine). Now you can upload it to OmnisPDF.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">From iCloud Drive</h3>
                  <p className="text-slate-600">
                    If the file is on your iCloud Drive, it will appear directly when you tap the upload area on OmnisPDF. Select "iCloud Drive" in the file picker and navigate to your presentation.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">From Google Drive or Dropbox</h3>
                  <p className="text-slate-600">
                    If you have the Google Drive or Dropbox app installed, they appear as locations in the iPhone Files app. When OmnisPDF asks you to pick a file, browse to your cloud storage and select the PPTX.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">From WhatsApp or iMessage</h3>
                  <p className="text-slate-600">
                    If someone sent the file through a messaging app, tap and hold the file, then select <strong>"Share"</strong> and <strong>"Save to Files."</strong> Then upload from Files to OmnisPDF.
                  </p>
                </div>
              </div>
            </section>

            {/* Sharing the PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Sharing the PDF After Conversion</h2>
              <p className="text-slate-600 mb-4">
                Once you've downloaded the PDF, sharing it is straightforward:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Email:</strong> Open Mail or Gmail, compose a message, tap the attachment icon, and select your PDF from the Downloads folder.</li>
                <li>&#10003; <strong>iMessage or WhatsApp:</strong> Open the conversation, tap the + button, select "Document," and pick your PDF.</li>
                <li>&#10003; <strong>AirDrop:</strong> Open the PDF in Files, tap the share button, and select the nearby Apple device.</li>
                <li>&#10003; <strong>Upload to a portal:</strong> Open the submission website in Safari, and when it asks for a file upload, select your PDF from Downloads.</li>
              </ul>
            </section>

            {/* Tips for mobile conversion */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for the Best Results on iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Wi-Fi for large files.</strong> If your PPTX is over 10MB, Wi-Fi will be much faster than cellular data.</li>
                <li>&#10003; <strong>Check the PDF before sending.</strong> Open it in the Files app and scroll through the pages to make sure everything looks right.</li>
                <li>&#10003; <strong>Compress if needed.</strong> If the PDF is too large for email (over 20MB), use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> — it also works on your iPhone.</li>
                <li>&#10003; <strong>Bookmark OmnisPDF.</strong> Add omnispdf.com to your home screen for instant access: in Safari, tap the share button and select "Add to Home Screen."</li>
              </ul>
            </section>

            {/* Other conversions on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other Conversions You Can Do on iPhone</h2>
              <p className="text-slate-600 mb-4">
                OmnisPDF's entire suite works on your phone. Here are the most popular mobile conversions:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link> — Convert DOCX files to PDF on your phone.</li>
                <li>&#10003; <Link href="/excel-to-pdf" className="text-orange-600 hover:underline">Excel to PDF</Link> — Convert spreadsheets while keeping table layouts.</li>
                <li>&#10003; <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> — One tool for any Microsoft Office file.</li>
                <li>&#10003; <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> — Reduce PDF file size for email or uploads.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Convert on Your iPhone?</h2>
            <p className="text-slate-300 mb-6">Open the tool in Safari, upload your PPTX, and get the PDF in seconds — no app needed.</p>
            <Link
              href="/powerpoint-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Smartphone className="h-5 w-5" /> Convert PPT to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert PowerPoint to PDF Online (PPTX to PDF)", href: "/learn/convert-ppt-to-pdf" },
                { title: "PPT to PDF for Printing: Best Layout + Quality Tips", href: "/learn/ppt-to-pdf-for-printing" },
                { title: "Do PowerPoint Animations Work in PDF? What Converts (and What Doesn't)", href: "/learn/ppt-to-pdf-animations" },
                { title: "PPTX to PDF Missing Fonts? Fix Font Embedding and Substitutions", href: "/learn/pptx-to-pdf-missing-fonts" },
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
                { q: "Can I convert PowerPoint to PDF on my iPhone?", a: "Yes. Open Safari on your iPhone, go to OmnisPDF's PowerPoint to PDF tool, upload your PPTX file, and download the converted PDF. No app installation needed — everything works in the browser." },
                { q: "Do I need to install an app to convert PPT to PDF on iPhone?", a: "No. OmnisPDF works directly in Safari or any mobile browser. You don't need to download any app from the App Store. Just visit the website, upload your file, and convert." },
                { q: "How do I open a PPTX file on iPhone?", a: "You can open PPTX files from the Files app, email attachments, iCloud Drive, Google Drive, or Dropbox. If you receive a PPTX via email, tap the attachment to download it, then use the share button to save it to Files." },
                { q: "Where does the converted PDF save on iPhone?", a: "When you tap the download button in Safari, the PDF saves to your Downloads folder in the Files app. You can also tap the downloaded file notification in Safari's toolbar to open it immediately." },
                { q: "Can I share the PDF directly from my iPhone after converting?", a: "Yes. After downloading the PDF, open it from the Files app and tap the share button. You can send it via email, iMessage, AirDrop, WhatsApp, Slack, or any other app that accepts file sharing." },
                { q: "Is there a file size limit for converting on iPhone?", a: "Free users can convert files up to 25MB. Pro users can upload files up to 200MB. If your PPTX is very large and you're on a slow connection, consider using Wi-Fi for a faster upload." },
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
