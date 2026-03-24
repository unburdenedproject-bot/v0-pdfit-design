import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Rotate a PDF on iPhone (No App Needed) | PDF.it",
  description:
    "Learn how to rotate PDF pages on your iPhone using Safari — no app download required. Fix sideways or upside-down PDFs directly from your phone in seconds.",
  keywords: "rotate pdf iphone, rotate pdf on phone, turn pdf sideways iphone, rotate pdf ios",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I rotate a PDF on my iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works directly in Safari or any iPhone browser. Upload your PDF, select the rotation angle, and download the fixed file — no app installation needed." }
    },
    {
      "@type": "Question",
      "name": "Does rotating a PDF on iPhone reduce quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotating only changes the page orientation metadata. Your text, images, and formatting stay exactly the same at full quality." }
    },
    {
      "@type": "Question",
      "name": "Can I rotate just one page on my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you select individual pages to rotate. You can fix just one sideways page while leaving the rest of your document untouched." }
    },
    {
      "@type": "Question",
      "name": "Where does the rotated PDF save on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "When you tap Download, Safari saves the file to your Downloads folder in the Files app. You can also choose to save it to iCloud Drive, Google Drive, or share it directly via email or Messages." }
    },
    {
      "@type": "Question",
      "name": "Does this work on iPad too?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works on any device with a web browser — iPhone, iPad, Android phones, tablets, and desktop computers. The experience is the same across all devices." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can rotate PDFs up to 25MB. Pro users get a 200MB limit. Most documents you would handle on a phone are well under 25MB." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Rotate a PDF on iPhone",
  "description": "Fix rotated PDF pages on your iPhone in 3 simple steps using PDF.it in Safari.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in Safari",
      "text": "Open Safari on your iPhone and go to pdf.it.com/rotate-pdf. Tap the upload area to select your PDF from Files, iCloud, or another location."
    },
    {
      "@type": "HowToStep",
      "name": "Select pages and rotation",
      "text": "Choose which pages to rotate and tap the rotation angle — 90° clockwise, 90° counter-clockwise, or 180°. Preview each page to confirm the direction."
    },
    {
      "@type": "HowToStep",
      "name": "Download the rotated PDF",
      "text": "Tap Rotate and then Download. The corrected PDF saves to your iPhone's Downloads folder in the Files app."
    }
  ]
}

export default function RotatePDFOnIPhonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Rotate PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Rotate a PDF on iPhone (No App Needed)</h1>
              <p className="text-xl text-slate-300">
                Got a sideways PDF on your phone? You do not need to download an app or transfer the file to a computer. Here is how to rotate PDF pages directly in Safari in under 30 seconds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your iPhone right now? Go straight to the tool.</p>
            </div>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Rotate PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why this happens on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Are PDFs Sideways on iPhone?</h2>
              <p className="text-slate-600 mb-4">
                There are several reasons you might open a PDF on your iPhone and find the pages rotated the wrong way:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Scanned documents.</strong> If someone scanned a document and placed the paper at the wrong angle, the resulting PDF has rotated pages. This is extremely common with receipts, contracts, and government forms.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Phone camera scans.</strong> Using your iPhone camera or a scanning app can produce rotated pages if you did not hold the phone perfectly straight. <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> can fix contrast and quality, but you may still need to rotate.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Email attachments.</strong> PDFs received as email attachments sometimes display sideways in the iPhone Mail app or Files preview, even though they look fine on a computer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Mixed orientation pages.</strong> A document that combines portrait text pages with landscape charts or tables will have some pages that appear sideways when scrolling on your phone.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Rotate a PDF on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in Safari",
                    desc: "Open Safari on your iPhone and navigate to pdf.it.com/rotate-pdf. Tap the upload area and select your PDF from your Files app, iCloud Drive, email attachment, or any other location on your device.",
                  },
                  {
                    title: "Select the rotation angle",
                    desc: "Choose which pages to rotate — all pages or just specific ones. Then tap the rotation direction: 90° clockwise, 90° counter-clockwise, or 180°. The page preview helps you confirm the correct angle.",
                  },
                  {
                    title: "Download the corrected PDF",
                    desc: "Tap Rotate, then tap Download. Safari saves the file to your Downloads folder in the Files app. From there, you can share it via email, Messages, AirDrop, or save it to iCloud Drive.",
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

            {/* Tips for iPhone users */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Rotating PDFs on iPhone</h2>
              <p className="text-slate-600 mb-4">
                Working with PDFs on a small screen can be tricky. Here are some tips to make it easier:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Turn your phone to landscape</strong> for a better view of the page thumbnails when selecting which pages to rotate.</li>
                <li>&#10003; <strong>Use the Files app</strong> to find your PDF before uploading. If the PDF is in an email, save it to Files first by long-pressing the attachment and selecting Save to Files.</li>
                <li>&#10003; <strong>Bookmark the tool</strong> by tapping the share icon and selecting Add to Home Screen. This puts a shortcut on your home screen so you can access PDF.it instantly next time.</li>
                <li>&#10003; <strong>Works on any iPhone browser</strong> — Safari, Chrome, Firefox, or Edge. PDF.it is a web tool, so there is nothing to install or update.</li>
              </ul>
            </section>

            {/* What else can you do on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Other PDF Tasks You Can Do on iPhone</h2>
              <p className="text-slate-600 mb-4">
                Since you are already handling PDFs on your phone, here are other common tasks you can do with PDF.it without leaving Safari:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress for Email</h3>
                  <p className="text-slate-600">
                    Need to email the PDF but it is too large? Use <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress PDF for Email</Link> to shrink it below the attachment limit. Works great on iPhone — compress and send without touching a computer.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge Documents</h3>
                  <p className="text-slate-600">
                    Received multiple PDFs that need to be combined into one? Use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine them right on your phone. Perfect for job applications or school submissions on the go.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert Photos to PDF</h3>
                  <p className="text-slate-600">
                    Took photos of a document with your iPhone? Convert images to PDF using <Link href="/word-to-pdf" className="text-orange-600 hover:underline">our conversion tools</Link> or clean them up with <Link href="/phone-scan-cleanup" className="text-orange-600 hover:underline">Phone Scan Cleanup</Link> for professional-looking results.
                  </p>
                </div>
              </div>
            </section>

            {/* Why no app needed */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Do Not Need a PDF App</h2>
              <p className="text-slate-600 mb-4">
                The App Store has dozens of PDF editing apps, but most of them have significant drawbacks:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>No storage space wasted.</strong> PDF apps can take 100-300MB of iPhone storage. PDF.it runs in your browser with zero storage footprint.</li>
                <li>&#10003; <strong>No subscriptions to manage.</strong> Many PDF apps charge monthly fees for basic features like rotation. PDF.it lets you rotate PDFs free.</li>
                <li>&#10003; <strong>No account required.</strong> Start rotating immediately — your first 3 files need no signup at all.</li>
                <li>&#10003; <strong>Always up to date.</strong> Web tools update automatically. No waiting for App Store updates or dealing with compatibility issues after iOS updates.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Rotate Your PDF on iPhone?</h2>
            <p className="text-slate-300 mb-6">Open this page on your iPhone, tap the button below, and fix your PDF in seconds.</p>
            <Link
              href="/rotate-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Rotate PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Rotate a PDF Online (90°, 180°, or Custom)", href: "/learn/how-to-rotate-pdf" },
                { title: "Fix an Upside-Down PDF (Rotate 180° Instantly)", href: "/learn/fix-upside-down-pdf" },
                { title: "Rotate a Scanned PDF (Fix Orientation After Scanning)", href: "/learn/rotate-scanned-pdf" },
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
                { q: "Can I rotate a PDF on my iPhone without an app?", a: "Yes. PDF.it works directly in Safari or any iPhone browser. Upload your PDF, select the rotation angle, and download the fixed file — no app installation needed." },
                { q: "Does rotating a PDF on iPhone reduce quality?", a: "No. Rotating only changes the page orientation metadata. Your text, images, and formatting stay exactly the same at full quality." },
                { q: "Can I rotate just one page on my iPhone?", a: "Yes. PDF.it lets you select individual pages to rotate. You can fix just one sideways page while leaving the rest of your document untouched." },
                { q: "Where does the rotated PDF save on iPhone?", a: "When you tap Download, Safari saves the file to your Downloads folder in the Files app. You can also choose to save it to iCloud Drive, Google Drive, or share it directly via email or Messages." },
                { q: "Does this work on iPad too?", a: "Yes. PDF.it works on any device with a web browser — iPhone, iPad, Android phones, tablets, and desktop computers. The experience is the same across all devices." },
                { q: "Is there a file size limit on iPhone?", a: "Free users can rotate PDFs up to 25MB. Pro users get a 200MB limit. Most documents you would handle on a phone are well under 25MB." },
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
