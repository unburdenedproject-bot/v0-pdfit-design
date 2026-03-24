import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert Word to PDF on iPhone (DOCX to PDF in Minutes) | PDF.it",
  description:
    "Learn how to convert Word to PDF on iPhone using Safari and PDF.it. No app needed — open your DOCX from email or Files, convert it, and share the PDF in minutes.",
  keywords: "word to pdf iphone, convert docx to pdf iphone, word to pdf on phone, docx to pdf mobile, convert word document iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert Word to PDF on iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works directly in Safari (or any iPhone browser). Go to pdf.it.com/word-to-pdf, upload your .docx file, and download the converted PDF. No app installation needed." }
    },
    {
      "@type": "Question",
      "name": "How do I open a DOCX file on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can open DOCX files using the Files app, from email attachments (tap and hold > Share), or from cloud storage apps like Google Drive, Dropbox, or OneDrive. You can also open them directly in the Microsoft Word app if you have it installed." }
    },
    {
      "@type": "Question",
      "name": "Will the PDF keep the same formatting as my Word document?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it preserves fonts, images, tables, and layout during conversion. For best results, make sure your Word document uses standard fonts like Arial or Calibri, which convert reliably across all devices." }
    },
    {
      "@type": "Question",
      "name": "Can I convert Word to PDF using the Files app on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "The Files app can open DOCX files for viewing but doesn't have a built-in PDF converter. You can use the Print menu trick (share > Print > pinch to zoom the preview > share as PDF), but this often changes margins and drops hyperlinks. PDF.it gives a more accurate conversion." }
    },
    {
      "@type": "Question",
      "name": "How do I share the converted PDF from my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "After downloading the PDF from PDF.it, tap the share icon to send it via email, iMessage, AirDrop, WhatsApp, or any other app. You can also save it to the Files app or upload it to cloud storage." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit for converting on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload files up to 25MB. Pro users can upload up to 200MB. Most Word documents are well under 25MB, so the free tier works for the vast majority of conversions." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert Word to PDF on iPhone",
  "description": "Convert a DOCX file to PDF on your iPhone using Safari and PDF.it — no app needed.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in Safari",
      "text": "Open Safari on your iPhone and go to pdf.it.com/word-to-pdf. Tap the upload area to browse for your .docx file."
    },
    {
      "@type": "HowToStep",
      "name": "Select and upload your Word file",
      "text": "Navigate to your file in the Files app, email attachment, or cloud storage. Select the .docx file — it will upload automatically."
    },
    {
      "@type": "HowToStep",
      "name": "Download and share the PDF",
      "text": "Tap Convert to PDF, wait a few seconds, then tap Download. Use the share button to send the PDF via email, iMessage, AirDrop, or save it to Files."
    }
  ]
}

export default function WordToPdfOnIphonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Word to PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert Word to PDF on iPhone</h1>
              <p className="text-xl text-slate-300">
                Need to convert a Word document to PDF right from your iPhone? No app needed — just Safari, your file, and 60 seconds.
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
              <p className="text-slate-700 font-semibold">Ready to convert? Open this link on your iPhone.</p>
            </div>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Word to PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When You Need to Convert on the Go</h2>
              <p className="text-slate-600 mb-4">
                You're away from your computer and someone sends you a Word document that needs to be a PDF — a contract to sign, a resume to submit, a report to share. Or maybe you wrote something in the Word app on your phone and need to save it as PDF before sending.
              </p>
              <p className="text-slate-600 mb-4">
                The iPhone doesn't have a built-in Word-to-PDF converter. The Files app can <em>open</em> .docx files, but it can't reliably <em>convert</em> them to PDF with accurate formatting. And downloading a dedicated app just for one conversion feels like overkill.
              </p>
              <p className="text-slate-600">
                That's where PDF.it comes in. It works entirely in your browser — no app to install, no account required for your first conversions.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert Word to PDF on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in Safari",
                    desc: "Open Safari and go to pdf.it.com/word-to-pdf. The page is fully mobile-optimized — it works exactly like the desktop version, just sized for your phone screen.",
                  },
                  {
                    title: "Upload your Word file",
                    desc: "Tap the upload area. iOS will show you options: choose \"Browse\" to find your file in the Files app, or navigate to a cloud storage location (iCloud Drive, Google Drive, Dropbox). Select your .docx file and it will upload automatically.",
                  },
                  {
                    title: "Convert and download",
                    desc: "Tap Convert to PDF. In a few seconds, the download button appears. Tap it to save the PDF to your iPhone. iOS may ask where to save it — choose the Files app or a specific folder.",
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

            {/* Finding your file */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Where to Find Your Word File on iPhone</h2>
              <p className="text-slate-600 mb-4">
                Not sure where your .docx file is? Here are the most common places:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Email attachment.</strong> Open the email with the Word file, tap and hold the attachment, then tap "Share" and choose "Save to Files." Now you can find it in the Files app when uploading to PDF.it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Files app.</strong> Open the Files app and check "On My iPhone," "iCloud Drive," or any connected cloud storage. If someone sent you the file via AirDrop or Messages, it's usually in the Downloads folder.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Cloud storage apps.</strong> If the file is in Google Drive, Dropbox, or OneDrive, you can access it directly from the iOS file picker when uploading to PDF.it — these services integrate with the Files app.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Microsoft Word app.</strong> If you created the document in the Word app, open it there, tap Share, and choose "Save to Files" to make it accessible for upload.</span>
                </li>
              </ul>
            </section>

            {/* Sharing the PDF */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Share the Converted PDF</h2>
              <p className="text-slate-600 mb-4">
                Once you've downloaded the PDF, sharing it is straightforward:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Email:</strong> Open Mail or Gmail, create a new message, tap the attachment icon, and select your PDF from the Files app.</li>
                <li>&#10003; <strong>iMessage:</strong> Open Messages, tap the + button, choose the PDF from Files, and send.</li>
                <li>&#10003; <strong>AirDrop:</strong> Open the PDF in Files, tap Share, and select the nearby Apple device.</li>
                <li>&#10003; <strong>WhatsApp / Slack / Teams:</strong> Use the attachment button in any messaging app and browse to your PDF.</li>
                <li>&#10003; <strong>Upload portal:</strong> If you need to upload the PDF to a website (like a job application), open the site in Safari, tap the upload button, and select your PDF from Files.</li>
              </ul>
            </section>

            {/* Print to PDF trick */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The "Print to PDF" Trick (and Why It's Not Great)</h2>
              <p className="text-slate-600 mb-4">
                You might have heard about converting to PDF using iPhone's print menu: open the file, tap Share &gt; Print, then pinch-to-zoom on the print preview to create a PDF.
              </p>
              <p className="text-slate-600 mb-4">
                This works in a pinch, but it has real drawbacks:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Margins change.</strong> The print layout often adds different margins than your original document.</li>
                <li>&#10003; <strong>Hyperlinks are lost.</strong> All clickable links become plain text.</li>
                <li>&#10003; <strong>Font quality drops.</strong> Text may look slightly blurry compared to a proper conversion.</li>
                <li>&#10003; <strong>Metadata is lost.</strong> Document properties like title, author, and keywords are stripped.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For a quick internal note, the print trick is fine. For anything professional — resumes, contracts, client deliverables — use <Link href="/word-to-pdf" className="text-orange-600 hover:underline">PDF.it's Word to PDF converter</Link> for accurate results.
              </p>
            </section>

            {/* Other things you can do */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other Things You Can Do on iPhone</h2>
              <p className="text-slate-600 mb-4">
                PDF.it's tools all work in mobile Safari, so you can handle your entire PDF workflow from your phone:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> — reduce file size if the PDF is too large to email or upload.</li>
                <li>&#10003; <Link href="/office-to-pdf" className="text-orange-600 hover:underline">Office to PDF</Link> — convert Excel spreadsheets and PowerPoint presentations too.</li>
                <li>&#10003; <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> — combine multiple PDFs into one document.</li>
                <li>&#10003; <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> — add a password to sensitive documents before sharing.</li>
              </ul>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for the Best Results on iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Safari.</strong> While Chrome and Firefox work too, Safari integrates best with the iOS file picker and download system.</li>
                <li>&#10003; <strong>Check your WiFi.</strong> Uploading and downloading on a strong connection is faster and more reliable than cellular data for larger files.</li>
                <li>&#10003; <strong>Save to Files, not Photos.</strong> When iOS asks where to save the PDF, choose the Files app — PDFs saved to Photos can be harder to find and share.</li>
                <li>&#10003; <strong>Verify before sending.</strong> Open the downloaded PDF in the Files app to confirm formatting looks correct before sharing with anyone.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Word to PDF on Your iPhone</h2>
            <p className="text-slate-300 mb-6">Open this link in Safari on your iPhone — upload, convert, and share in under a minute.</p>
            <Link
              href="/word-to-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <FileText className="h-5 w-5" /> Word to PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Convert Word to PDF Online (DOCX to PDF)", href: "/learn/convert-word-to-pdf" },
                { title: "DOCX to PDF Without Formatting Issues (Fonts, Spacing, Images)", href: "/learn/docx-to-pdf-keep-formatting" },
                { title: "Word to PDF Formatting Changed? Fix These 7 Causes", href: "/learn/word-to-pdf-common-formatting-fixes" },
                { title: "Convert a Resume from Word to PDF (ATS-Friendly Tips)", href: "/learn/convert-resume-word-to-pdf" },
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
                { q: "Can I convert Word to PDF on iPhone without an app?", a: "Yes. PDF.it works directly in Safari (or any iPhone browser). Go to pdf.it.com/word-to-pdf, upload your .docx file, and download the converted PDF. No app installation needed." },
                { q: "How do I open a DOCX file on my iPhone?", a: "You can open DOCX files using the Files app, from email attachments (tap and hold > Share), or from cloud storage apps like Google Drive, Dropbox, or OneDrive. You can also open them directly in the Microsoft Word app if you have it installed." },
                { q: "Will the PDF keep the same formatting as my Word document?", a: "Yes. PDF.it preserves fonts, images, tables, and layout during conversion. For best results, make sure your Word document uses standard fonts like Arial or Calibri, which convert reliably across all devices." },
                { q: "Can I convert Word to PDF using the Files app on iPhone?", a: "The Files app can open DOCX files for viewing but doesn't have a built-in PDF converter. You can use the Print menu trick (share > Print > pinch to zoom the preview > share as PDF), but this often changes margins and drops hyperlinks. PDF.it gives a more accurate conversion." },
                { q: "How do I share the converted PDF from my iPhone?", a: "After downloading the PDF from PDF.it, tap the share icon to send it via email, iMessage, AirDrop, WhatsApp, or any other app. You can also save it to the Files app or upload it to cloud storage." },
                { q: "Is there a file size limit for converting on iPhone?", a: "Free users can upload files up to 25MB. Pro users can upload up to 200MB. Most Word documents are well under 25MB, so the free tier works for the vast majority of conversions." },
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
