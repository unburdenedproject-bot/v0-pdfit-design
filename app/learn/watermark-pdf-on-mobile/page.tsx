import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Stamp, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Add a Watermark to a PDF on Your Phone (iPhone & Android) | PDF.it",
  description:
    "Learn how to add a watermark to a PDF from your iPhone or Android phone. No app needed — use PDF.it in your mobile browser to stamp PDFs on the go.",
  keywords: "watermark pdf on phone, add watermark pdf iphone, watermark pdf android, watermark pdf mobile",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I add a watermark to a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser — Safari on iPhone, Chrome on Android, or any other browser. Upload your PDF, add a text or image watermark, and download the result directly on your phone." }
    },
    {
      "@type": "Question",
      "name": "Do I need to download an app to watermark a PDF on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it is a web-based tool that runs entirely in your browser. No app installation, no account required for basic features. Just open pdf.it.com on your phone and start watermarking." }
    },
    {
      "@type": "Question",
      "name": "Does it work the same on iPhone and Android?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it is fully responsive and works identically on iPhone (Safari, Chrome) and Android (Chrome, Firefox, Samsung Internet). The interface adapts to your screen size automatically." }
    },
    {
      "@type": "Question",
      "name": "Can I upload a logo watermark from my phone's camera roll?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. When you select Image Watermark in PDF.it, your phone will let you browse your camera roll or files. Select your logo image (PNG recommended for best results) and it will be used as the watermark." }
    },
    {
      "@type": "Question",
      "name": "Where does the watermarked PDF get saved on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "The watermarked PDF downloads to your phone's default download location. On iPhone, check the Files app under Downloads. On Android, check the Downloads folder or your browser's download manager." }
    },
    {
      "@type": "Question",
      "name": "Is the Watermark PDF tool free on mobile?",
      "acceptedAnswer": { "@type": "Answer", "text": "Watermark PDF is available to Pro ($7.99/month) and Business ($13.99/month) users on all devices, including mobile. Both tiers include unlimited watermarking and files up to 200MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Add a Watermark to a PDF on Your Phone",
  "description": "Watermark any PDF from your iPhone or Android in 3 simple steps using PDF.it in your mobile browser.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it on your phone",
      "text": "Open Safari, Chrome, or any browser on your phone and go to pdf.it.com. Tap the Watermark PDF tool."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your PDF and add a watermark",
      "text": "Tap the upload area to select a PDF from your files. Choose a text watermark (type any phrase) or image watermark (select a logo from your camera roll). Adjust opacity and position."
    },
    {
      "@type": "HowToStep",
      "name": "Download the watermarked PDF",
      "text": "Tap Apply Watermark and download the result. Find it in your Downloads folder or Files app."
    }
  ]
}

export default function WatermarkPDFOnMobilePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Watermark PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Add a Watermark to a PDF on Your Phone (iPhone & Android)</h1>
              <p className="text-xl text-slate-300">
                Need to watermark a PDF while away from your computer? PDF.it works in any mobile browser — no app download needed. Here is how to stamp a PDF from your phone in under a minute.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Stamp className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your phone right now? Go straight to the tool.</p>
            </div>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Watermark PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why watermark on mobile */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">When Would You Need to Watermark a PDF on Your Phone?</h2>
              <p className="text-slate-600 mb-4">
                More and more work happens on mobile devices. Here are common situations where you might need to watermark a PDF from your phone:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Urgent email while traveling.</strong> A client needs a proposal marked as DRAFT before a meeting, and you are on a train or in an airport. Watermark it from your phone and send it immediately.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Marking documents at a job site.</strong> Construction managers, real estate agents, and field engineers often need to stamp documents as CONFIDENTIAL or add a company logo while on location.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Last-minute submission requirements.</strong> You realized a document needs a watermark just before a deadline, and your laptop is not available. Your phone browser is all you need.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Working from a tablet.</strong> iPads and Android tablets work just as well. The responsive interface adapts to larger screens, giving you an experience close to desktop.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Watermark a PDF on Your Phone (Step by Step)</h2>
              <p className="text-slate-600 mb-4">
                Watermark PDF is available to Pro and Business users. <Link href="/pricing" className="text-orange-600 hover:underline">See pricing</Link> for details.
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in your mobile browser",
                    desc: "Open Safari (iPhone), Chrome (Android), or any mobile browser and navigate to pdf.it.com. Tap the Watermark PDF tool from the homepage or tools menu. The interface is fully responsive and designed for touch screens.",
                  },
                  {
                    title: "Upload your PDF and configure the watermark",
                    desc: "Tap the upload area to select a PDF from your phone's Files app, Google Drive, iCloud, or other storage. Choose between a text watermark (type DRAFT, CONFIDENTIAL, or any phrase) or an image watermark (select a logo from your camera roll). Adjust the opacity, size, and position using the touch-friendly controls.",
                  },
                  {
                    title: "Apply and download the watermarked PDF",
                    desc: "Tap Apply Watermark and wait a few seconds for processing. Download the result to your phone. On iPhone, find it in the Files app under Downloads. On Android, check the Downloads folder or your browser's download manager.",
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

            {/* iPhone specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for iPhone Users</h2>
              <p className="text-slate-600 mb-4">
                Safari on iPhone handles PDF uploads and downloads smoothly, but there are a few things to know:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Upload from Files or iCloud.</strong> When you tap the upload area, choose &quot;Browse&quot; to access your Files app. You can upload PDFs stored locally, in iCloud Drive, Google Drive, Dropbox, or any other file provider connected to your iPhone.</li>
                <li>&#10003; <strong>Find your download.</strong> After the watermarked PDF is ready, Safari will show a download icon in the top-right corner. Tap it to view and open your file. It saves to the Downloads folder in the Files app by default.</li>
                <li>&#10003; <strong>Share directly from Safari.</strong> After downloading, you can tap the share button to send the watermarked PDF via email, Messages, AirDrop, or any other app without leaving Safari.</li>
                <li>&#10003; <strong>Use a logo from your Photos.</strong> If you choose an image watermark, your iPhone will let you pick an image from your Photos library. Make sure your logo is saved as a photo or in your Files app.</li>
              </ul>
            </section>

            {/* Android specific tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Android Users</h2>
              <p className="text-slate-600 mb-4">
                Chrome on Android provides a seamless experience for watermarking PDFs:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Upload from anywhere.</strong> Tapping the upload area opens your file picker, which gives you access to local storage, Google Drive, OneDrive, and other cloud providers. Select your PDF from any location.</li>
                <li>&#10003; <strong>Check the notification bar.</strong> After the watermarked PDF is processed, Chrome will show a download notification. Tap it to open the file directly, or find it in your Downloads folder.</li>
                <li>&#10003; <strong>Share via any app.</strong> Open the downloaded file and use Android&apos;s share menu to send it through Gmail, WhatsApp, Slack, or any installed app.</li>
                <li>&#10003; <strong>Works on Samsung Internet too.</strong> If you use Samsung&apos;s default browser instead of Chrome, PDF.it works just the same. The tool is compatible with all modern mobile browsers.</li>
              </ul>
            </section>

            {/* Other mobile PDF tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other PDF Tools You Can Use on Mobile</h2>
              <p className="text-slate-600 mb-4">
                PDF.it is designed to work fully on mobile for all its tools, not just watermarking. Here are some tools that pair well with watermarking on your phone:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flatten your watermark.</strong> After watermarking, use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> on your phone to make the watermark permanent — all from the same browser session.</li>
                <li>&#10003; <strong>Compress before emailing.</strong> Large PDFs can be slow to send from mobile. Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the file size before attaching it to an email.</li>
                <li>&#10003; <strong>Protect with a password.</strong> Add an extra layer of security with <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> — set an open password or restrict editing and printing.</li>
                <li>&#10003; <strong>Merge documents together.</strong> Need to combine a watermarked document with other files? Use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> right from your phone.</li>
                <li>&#10003; <strong>Clean up phone scans.</strong> If you scanned a document with your phone camera, use <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> to improve the image quality before watermarking.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For the best practices on watermark settings like opacity and placement, check out our <Link href="/learn/watermark-pdf-best-practices" className="text-orange-600 hover:underline">watermark best practices guide</Link>.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Watermark a PDF Right From Your Phone</h2>
            <p className="text-slate-300 mb-6">Open PDF.it in your mobile browser, upload your PDF, and add a watermark in seconds. No app download needed. Available for Pro and Business users.</p>
            <Link
              href="/watermark-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Stamp className="h-5 w-5" /> Watermark PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Add a Watermark to a PDF Online", href: "/learn/how-to-add-watermark-to-pdf" },
                { title: "Add a 'Confidential' Watermark to a PDF (Quick Guide)", href: "/learn/watermark-pdf-confidential" },
                { title: "Add Your Logo as a Watermark on a PDF", href: "/learn/watermark-pdf-with-logo" },
                { title: "PDF Watermark Best Practices (Size, Opacity & Placement)", href: "/learn/watermark-pdf-best-practices" },
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
                { q: "Can I add a watermark to a PDF on my phone?", a: "Yes. PDF.it works in any mobile browser — Safari on iPhone, Chrome on Android, or any other browser. Upload your PDF, add a text or image watermark, and download the result directly on your phone." },
                { q: "Do I need to download an app to watermark a PDF on mobile?", a: "No. PDF.it is a web-based tool that runs entirely in your browser. No app installation, no account required for basic features. Just open pdf.it.com on your phone and start watermarking." },
                { q: "Does it work the same on iPhone and Android?", a: "Yes. PDF.it is fully responsive and works identically on iPhone (Safari, Chrome) and Android (Chrome, Firefox, Samsung Internet). The interface adapts to your screen size automatically." },
                { q: "Can I upload a logo watermark from my phone's camera roll?", a: "Yes. When you select Image Watermark in PDF.it, your phone will let you browse your camera roll or files. Select your logo image (PNG recommended for best results) and it will be used as the watermark." },
                { q: "Where does the watermarked PDF get saved on my phone?", a: "The watermarked PDF downloads to your phone's default download location. On iPhone, check the Files app under Downloads. On Android, check the Downloads folder or your browser's download manager." },
                { q: "Is the Watermark PDF tool free on mobile?", a: "Watermark PDF is available to Pro ($7.99/month) and Business ($13.99/month) users on all devices, including mobile. Both tiers include unlimited watermarking and files up to 200MB." },
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
