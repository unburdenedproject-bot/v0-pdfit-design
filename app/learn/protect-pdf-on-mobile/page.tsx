import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Password-Protect a PDF on Your Phone (iPhone & Android) | PDF.it",
  description:
    "Learn how to password-protect a PDF on your iPhone or Android phone. No app required — add encryption to any PDF directly in your mobile browser with PDF.it.",
  keywords: "protect pdf on phone, password protect pdf iphone, lock pdf android, secure pdf mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I password-protect a PDF on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Safari or Chrome, go to PDF.it's Protect PDF tool, upload your PDF from Files or iCloud Drive, set a password, and download the protected file. No app installation needed." }
    },
    {
      "@type": "Question",
      "name": "Can I password-protect a PDF on Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Chrome or any mobile browser, go to PDF.it's Protect PDF tool, upload your PDF from your device or Google Drive, set a password, and download the encrypted file." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install an app to protect a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it works entirely in your mobile browser. There is nothing to install, no account required for basic use, and your files are processed securely and deleted after processing." }
    },
    {
      "@type": "Question",
      "name": "Where do protected PDFs get saved on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "On iPhone, downloaded files go to the Files app in the Downloads folder. On Android, they go to the Downloads folder accessible from the Files app or notification tray." }
    },
    {
      "@type": "Question",
      "name": "Can I protect a PDF I received via WhatsApp or email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Save the PDF to your phone first (tap and hold the file, then save to Files or Downloads), then upload it to PDF.it's Protect PDF tool in your browser." }
    },
    {
      "@type": "Question",
      "name": "Is the mobile version of PDF.it free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You get 3 free conversions without signing up, and 10 per day with a free account. Files up to 25MB are supported on the free tier. Pro users get unlimited conversions and files up to 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Password-Protect a PDF on Your Phone",
  "description": "Add password protection to a PDF on iPhone or Android in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Open Safari (iPhone) or Chrome (Android) and go to pdf.it.com/protect-pdf. The tool works fully in your mobile browser — no app needed."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your PDF and set a password",
      "text": "Tap the upload area and select your PDF from Files, iCloud Drive, Google Drive, or your Downloads folder. Enter a strong password and choose your encryption level."
    },
    {
      "@type": "HowToStep",
      "name": "Download the protected file",
      "text": "Tap Protect PDF and download the encrypted file. On iPhone it saves to Files > Downloads. On Android it goes to your Downloads folder."
    }
  ]
}

export default function ProtectPDFOnMobilePage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Protect PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Password-Protect a PDF on Your Phone (iPhone & Android)</h1>
              <p className="text-xl text-slate-300">
                Need to lock a PDF right from your phone? Whether you are on an iPhone or Android, you can add password protection in under a minute — no app required.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone now? Go straight to the tool.</p>
            </div>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Protect PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Might Need to Protect a PDF on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                More and more work happens on mobile devices. You might receive a contract while commuting, get a tax document notification while away from your desk, or need to send sensitive files while traveling. Here are common mobile scenarios:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Sharing documents on the go.</strong> You receive a PDF via WhatsApp or email and need to forward it securely to someone else — adding a password before sharing.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Protecting phone scans.</strong> You just scanned a document with your phone camera and need to lock it before uploading to a portal or sending by email.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Quick business tasks.</strong> A client asks for a protected version of a proposal while you are away from your computer. Handle it in 60 seconds from your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Travel documents.</strong> Protect passport copies, boarding passes with personal information, and hotel booking confirmations before storing them on your device.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Protect a PDF on Your Phone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in your mobile browser",
                    desc: "Open Safari on iPhone or Chrome on Android and navigate to pdf.it.com/protect-pdf. The tool is fully responsive and works exactly the same as on desktop — no app download needed.",
                  },
                  {
                    title: "Upload your PDF and set a password",
                    desc: "Tap the upload area to open your file picker. Select your PDF from Files (iPhone), Google Drive, iCloud Drive, or your Downloads folder. Enter a strong password — at least 12 characters with a mix of letters, numbers, and symbols.",
                  },
                  {
                    title: "Download the protected file",
                    desc: "Tap Protect PDF. Your encrypted file will download in seconds. On iPhone, find it in Files > Downloads. On Android, check your Downloads folder or the download notification. You can now share the protected PDF via email, WhatsApp, or any other app.",
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
              <p className="text-slate-600 mb-4">
                Protecting PDFs on an iPhone is straightforward, but there are a few things to know about how iOS handles files:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Safari for the best experience.</strong> Safari integrates with the Files app, making it easy to upload PDFs from iCloud Drive, On My iPhone, or third-party cloud storage.</li>
                <li>&#10003; <strong>Find your downloads.</strong> After downloading the protected PDF, open the Files app and go to "On My iPhone" &gt; "Downloads" to find it.</li>
                <li>&#10003; <strong>Share directly from Files.</strong> Tap the protected PDF in Files, then use the share button to send it via Mail, Messages, WhatsApp, or AirDrop.</li>
                <li>&#10003; <strong>Protect scanned documents.</strong> If you scanned a document using the iPhone camera or Notes app, save it as a PDF first, then upload it to PDF.it. For better scan quality, try <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> before protecting.</li>
              </ul>
            </section>

            {/* Android specific */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Android-Specific Tips</h2>
              <p className="text-slate-600 mb-4">
                Android gives you more flexibility with file management. Here is how to get the best experience:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use Chrome for reliability.</strong> Chrome is the default browser on most Android devices and handles file uploads and downloads smoothly with PDF.it.</li>
                <li>&#10003; <strong>Upload from Google Drive.</strong> When the file picker opens, you can browse Google Drive directly without downloading the file to your phone first.</li>
                <li>&#10003; <strong>Check notifications for downloads.</strong> After the protected PDF downloads, you will see a notification in the tray. Tap it to open the file or find it in your Downloads folder.</li>
                <li>&#10003; <strong>Share via any app.</strong> Open your Files app, long-press the protected PDF, and tap Share. Android lets you send files through Gmail, WhatsApp, Telegram, Slack, and dozens of other apps.</li>
              </ul>
            </section>

            {/* Other mobile tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other PDF Tools That Work on Mobile</h2>
              <p className="text-slate-600 mb-4">
                PDF.it is fully responsive — every tool works on your phone just like it does on desktop. Here are some tools that pair well with password protection on mobile:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress Before Protecting</h3>
                  <p className="text-slate-600">
                    Mobile email apps often have stricter attachment limits. Use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> to shrink your file before adding password protection. Or go directly to <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:underline">Compress PDF for Email</Link> for automatic optimization.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Clean Up Phone Scans</h3>
                  <p className="text-slate-600">
                    Photos of documents taken with your phone camera often look unprofessional. Use <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:underline">Phone Scan Cleanup</Link> to straighten, brighten, and sharpen the scan, then protect the cleaned-up version.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge Then Protect</h3>
                  <p className="text-slate-600">
                    Need to send multiple documents securely? Use <Link href="/merge-pdf" className="text-[#14D8C4] hover:underline">Merge PDF</Link> to combine them into one file, then <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">protect the merged result</Link>. One password covers all documents.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unlock a Protected PDF</h3>
                  <p className="text-slate-600">
                    Received a locked PDF and have the password? Use <Link href="/unlock-pdf" className="text-[#14D8C4] hover:underline">Unlock PDF</Link> on your phone to remove the password and save an unprotected copy.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Protect Your PDF Right Now</h2>
            <p className="text-slate-300 mb-6">Works on any phone — iPhone, Android, or tablet. No app needed, just your browser.</p>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Shield className="h-5 w-5" /> Protect PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Password-Protect a PDF Online (Step-by-Step)", href: "/learn/how-to-password-protect-pdf" },
                { title: "PDF Password Best Practices (Strong Passwords & Permissions)", href: "/learn/pdf-password-best-practices" },
                { title: "How to Protect a PDF Before Sending by Email", href: "/learn/protect-pdf-before-sending" },
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
                { q: "Can I password-protect a PDF on my iPhone?", a: "Yes. Open Safari or Chrome, go to PDF.it's Protect PDF tool, upload your PDF from Files or iCloud Drive, set a password, and download the protected file. No app installation needed." },
                { q: "Can I password-protect a PDF on Android?", a: "Yes. Open Chrome or any mobile browser, go to PDF.it's Protect PDF tool, upload your PDF from your device or Google Drive, set a password, and download the encrypted file." },
                { q: "Do I need to install an app to protect a PDF on my phone?", a: "No. PDF.it works entirely in your mobile browser. There is nothing to install, no account required for basic use, and your files are processed securely and deleted after processing." },
                { q: "Where do protected PDFs get saved on my phone?", a: "On iPhone, downloaded files go to the Files app in the Downloads folder. On Android, they go to the Downloads folder accessible from the Files app or notification tray." },
                { q: "Can I protect a PDF I received via WhatsApp or email?", a: "Yes. Save the PDF to your phone first (tap and hold the file, then save to Files or Downloads), then upload it to PDF.it's Protect PDF tool in your browser." },
                { q: "Is the mobile version of PDF.it free?", a: "Yes. You get 3 free conversions without signing up, and 10 per day with a free account. Files up to 25MB are supported on the free tier. Pro users get unlimited conversions and files up to 200MB." },
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
