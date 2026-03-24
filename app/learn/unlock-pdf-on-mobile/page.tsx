import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Unlock a PDF on Your Phone (iPhone & Android) | PDF.it",
  description:
    "Learn how to unlock a PDF on your phone — iPhone or Android. Remove PDF restrictions and passwords from your mobile browser. No app installation needed.",
  keywords: "unlock pdf on phone, unlock pdf iphone, remove pdf password android, unlock pdf mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I unlock a PDF on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Safari or Chrome on your iPhone, go to PDF.it's Unlock PDF tool, upload your file, and download the unlocked version. No app installation needed — it works entirely in the browser." }
    },
    {
      "@type": "Question",
      "name": "Can I unlock a PDF on Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Chrome, Firefox, or any browser on your Android phone, go to PDF.it's Unlock PDF tool, tap to upload your PDF, and download the unlocked file. Works on all Android devices." }
    },
    {
      "@type": "Question",
      "name": "Do I need to install an app to unlock PDFs on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it is a web-based tool that works in any mobile browser. You don't need to download or install any app. Just visit pdf.it.com, upload your PDF, and unlock it." }
    },
    {
      "@type": "Question",
      "name": "Where does the unlocked PDF save on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "On iPhone, the file saves to your Downloads folder in the Files app. On Android, it saves to your Downloads folder. You can also find it in your browser's download history." }
    },
    {
      "@type": "Question",
      "name": "Is the file size limited on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload PDFs up to 25MB, which covers most documents you'd have on your phone. Pro users can upload files up to 200MB. Mobile data or Wi-Fi speed may affect upload time for larger files." }
    },
    {
      "@type": "Question",
      "name": "Can I print the unlocked PDF from my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After downloading the unlocked PDF, open it on your phone and use the share button to print. On iPhone, use AirPrint to send it to a nearby printer. On Android, use the built-in print option or Google Cloud Print." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Unlock a PDF on Your Phone",
  "description": "Remove PDF restrictions on iPhone or Android in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in your mobile browser",
      "text": "Open Safari (iPhone) or Chrome (Android) and go to pdf.it.com. Tap on the Unlock PDF tool."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your locked PDF",
      "text": "Tap the upload area to select your PDF from Files (iPhone) or your file manager (Android). Enter the password if the PDF requires one to open."
    },
    {
      "@type": "HowToStep",
      "name": "Download the unlocked PDF",
      "text": "Tap Unlock and download the restriction-free PDF. The file saves to your Downloads folder, ready to print, share, or edit."
    }
  ]
}

export default function UnlockPDFOnMobilePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Unlock PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unlock a PDF on Your Phone (iPhone &amp; Android)</h1>
              <p className="text-xl text-slate-300">
                Need to unlock a PDF but only have your phone? No problem. Here&apos;s how to remove PDF restrictions right from your mobile browser — no app needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone right now? Unlock your PDF in seconds.</p>
            </div>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unlock PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why unlock on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Might Need to Unlock a PDF on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                More and more people handle documents entirely on their phones. You receive a PDF in WhatsApp, email, or a messaging app, and you need to do something with it right now — but the file is locked. Common scenarios:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Someone emailed you a restricted PDF</strong> and you need to copy a section of text for a quick reply. You&apos;re on the subway with only your phone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>You received a PDF you need to print</strong> at a nearby print shop, but the print restriction is blocking you. No laptop available.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>You need to forward an unlocked version</strong> of a document to a colleague or client, and your laptop isn&apos;t accessible.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>You&apos;re traveling</strong> and need to access a password-protected document for a meeting or appointment. Your phone is your only device.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                PDF.it works in any mobile browser — no app download, no account required for basic use. Just upload, unlock, and download.
              </p>
            </section>

            {/* Step by step — iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Unlock a PDF on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Safari and go to PDF.it",
                    desc: "Open Safari (or Chrome) on your iPhone and navigate to pdf.it.com. Tap on \"Unlock PDF\" from the tools menu, or go directly to pdf.it.com/unlock-pdf.",
                  },
                  {
                    title: "Upload your locked PDF",
                    desc: "Tap the upload area. Your iPhone will show you options to browse Files, iCloud Drive, or recent downloads. Select the locked PDF. If the PDF was shared via email or WhatsApp, save it to Files first, then upload from there.",
                  },
                  {
                    title: "Download the unlocked file",
                    desc: "Tap Unlock and wait a few seconds. When the download is ready, tap Download. The file saves to your Downloads folder in the Files app. Open it to verify — you can now print, copy, and share freely.",
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

            {/* Step by step — Android */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Unlock a PDF on Android (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Chrome and go to PDF.it",
                    desc: "Open Chrome (or Firefox, Samsung Internet, or any browser) on your Android phone. Go to pdf.it.com and tap \"Unlock PDF\" from the tools list.",
                  },
                  {
                    title: "Upload your locked PDF",
                    desc: "Tap the upload area. Android will open your file picker — navigate to Downloads, Google Drive, or wherever the PDF is stored. Select the file. If the PDF requires an open password, enter it when prompted.",
                  },
                  {
                    title: "Download the unlocked file",
                    desc: "Tap Unlock and wait for processing. The unlocked PDF downloads to your Downloads folder. You can find it in your notification tray or in the Files/My Files app on your phone.",
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

            {/* Tips for mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Working with PDFs on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF is unlocked, here are some useful things you can do with it on your mobile device:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Print from your phone.</strong> On iPhone, use AirPrint (tap Share, then Print). On Android, use the built-in print option in your PDF viewer or the Share menu.</li>
                <li>✓ <strong>Copy text.</strong> Open the unlocked PDF, long-press on the text you want to copy, and paste it into any app — email, notes, messages.</li>
                <li>✓ <strong>Share via messaging.</strong> Tap the share button to send the unlocked PDF through WhatsApp, Telegram, email, or any messaging app.</li>
                <li>✓ <strong>Compress for easy sharing.</strong> If the PDF is too large to send via email, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> from your phone to reduce the file size.</li>
                <li>✓ <strong>Convert to images.</strong> Need just one page as an image? Use <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> or <Link href="/pdf-to-png" className="text-orange-600 hover:underline">PDF to PNG</Link> — both work on mobile.</li>
              </ul>
            </section>

            {/* Other mobile PDF tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other PDF Tools That Work on Your Phone</h2>
              <p className="text-slate-600 mb-4">
                PDF.it is fully responsive — every tool works on mobile. Here are the most useful ones for phone users:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress PDF</h3>
                  <p className="text-slate-600">
                    Phone photos and scans create large PDFs. Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce file size before sharing via email or messaging apps. You can also target specific sizes like <Link href="/compress-pdf-to-5mb" className="text-orange-600 hover:underline">5MB</Link> or <Link href="/compress-pdf-to-2mb" className="text-orange-600 hover:underline">2MB</Link>.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Phone Scan Cleanup</h3>
                  <p className="text-slate-600">
                    Took a photo of a document with your phone camera? Use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> to straighten, sharpen, and convert it into a clean, professional-looking PDF.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Protect PDF</h3>
                  <p className="text-slate-600">
                    Need to add a password to a PDF before sharing it from your phone? Use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> to set an open password or permissions restrictions — all from your mobile browser.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge PDF</h3>
                  <p className="text-slate-600">
                    Need to combine multiple PDFs on your phone? Use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to join documents together. Great for combining receipts, tickets, or document pages into a single file.
                  </p>
                </div>
              </div>
            </section>

            {/* No app needed */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Don&apos;t Need a PDF App</h2>
              <p className="text-slate-600 mb-4">
                The App Store and Google Play are full of PDF apps that take up storage, show ads, and often require paid subscriptions. PDF.it works differently:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>No download required.</strong> PDF.it runs entirely in your browser. No storage space used on your phone.</li>
                <li>✓ <strong>No account needed for basic use.</strong> Unlock up to 3 PDFs without creating an account. Log in for up to 10 free unlocks per day.</li>
                <li>✓ <strong>Works on any phone.</strong> iPhone, Android, Samsung, Google Pixel, OnePlus — if it has a browser, PDF.it works on it.</li>
                <li>✓ <strong>Always up to date.</strong> No app updates to install. PDF.it is always the latest version when you visit the site.</li>
                <li>✓ <strong>Secure processing.</strong> Your files are processed over HTTPS and automatically deleted after processing. Nothing is stored on our servers.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Unlock Your PDF Right Now</h2>
            <p className="text-slate-300 mb-6">Works on iPhone, Android, and any device with a browser. No app needed — just upload, unlock, and download.</p>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Unlock PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Unlock a PDF Online (Remove Restrictions)", href: "/learn/how-to-unlock-pdf" },
                { title: "Unlock a PDF for Printing (Remove Print Restrictions)", href: "/learn/unlock-pdf-for-printing" },
                { title: "Forgot Your PDF Password? Here's What You Can Do", href: "/learn/unlock-pdf-forgot-password" },
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
                { q: "Can I unlock a PDF on my iPhone?", a: "Yes. Open Safari or Chrome on your iPhone, go to PDF.it's Unlock PDF tool, upload your file, and download the unlocked version. No app installation needed — it works entirely in the browser." },
                { q: "Can I unlock a PDF on Android?", a: "Yes. Open Chrome, Firefox, or any browser on your Android phone, go to PDF.it's Unlock PDF tool, tap to upload your PDF, and download the unlocked file. Works on all Android devices." },
                { q: "Do I need to install an app to unlock PDFs on my phone?", a: "No. PDF.it is a web-based tool that works in any mobile browser. You don't need to download or install any app. Just visit pdf.it.com, upload your PDF, and unlock it." },
                { q: "Where does the unlocked PDF save on my phone?", a: "On iPhone, the file saves to your Downloads folder in the Files app. On Android, it saves to your Downloads folder. You can also find it in your browser's download history." },
                { q: "Is the file size limited on mobile?", a: "Free users can upload PDFs up to 25MB, which covers most documents you'd have on your phone. Pro users can upload files up to 200MB. Mobile data or Wi-Fi speed may affect upload time for larger files." },
                { q: "Can I print the unlocked PDF from my phone?", a: "Yes. After downloading the unlocked PDF, open it on your phone and use the share button to print. On iPhone, use AirPrint to send it to a nearby printer. On Android, use the built-in print option or Google Cloud Print." },
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
