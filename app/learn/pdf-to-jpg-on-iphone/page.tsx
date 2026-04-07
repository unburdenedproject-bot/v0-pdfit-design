import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ImageIcon, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PDF to JPG on iPhone (No Apps Needed) | PDF.it",
  description:
    "Learn how to convert PDF to JPG on iPhone using just Safari — no apps to download. Step-by-step guide to save PDF pages as images to your Photos app.",
  keywords: "convert pdf to jpg iphone, pdf to jpg ios, pdf to image iphone, save pdf as jpg iphone, pdf to photo iphone",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert PDF to JPG on iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open PDF.it.com in Safari on your iPhone, upload your PDF, and convert it to JPG. The images download directly to your phone — no app installation needed." }
    },
    {
      "@type": "Question",
      "name": "Where do converted JPGs save on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Downloaded JPG files go to your Files app by default (in the Downloads folder). From there, you can open the image and tap the share button to save it to your Photos app." }
    },
    {
      "@type": "Question",
      "name": "Can I convert PDF to JPG on iPad too?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. The same process works on iPad using Safari. Open PDF.it.com, upload your PDF, convert, and download. iPads actually make this easier because of the larger screen." }
    },
    {
      "@type": "Question",
      "name": "How do I share a converted JPG from my iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "After downloading the JPG, open it in Files or Photos and tap the share button. You can send it via iMessage, WhatsApp, email, AirDrop, or any other sharing option available on your iPhone." }
    },
    {
      "@type": "Question",
      "name": "Is there a file size limit for converting on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can convert PDFs up to 25MB. Pro users can handle files up to 200MB. Most PDFs people convert on their phones are well under 25MB, so the free tier works for the majority of use cases." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple PDF pages to JPGs on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. When you convert a multi-page PDF, each page becomes a separate JPG. You can download them all as a ZIP file and then unzip it in your Files app to access each image individually." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to JPG on iPhone",
  "description": "Convert PDF pages to JPG images on your iPhone using Safari — no apps needed.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in Safari",
      "text": "On your iPhone, open Safari and go to pdf.it.com/pdf-to-jpg. The tool works directly in your mobile browser."
    },
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Tap the upload area and select your PDF from Files, iCloud Drive, or any other location on your iPhone."
    },
    {
      "@type": "HowToStep",
      "name": "Convert and download",
      "text": "Tap Convert. Once done, download the JPG images. They save to your Files app, and you can move them to Photos from there."
    }
  ]
}

export default function PdfToJpgOnIphonePage() {
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
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to JPG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to JPG on iPhone (No Apps Needed)</h1>
              <p className="text-xl text-slate-300">
                Your iPhone doesn't have a built-in way to convert PDFs to images. Here's how to do it in Safari in under a minute — no App Store downloads required.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ImageIcon className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your iPhone right now? Open the tool directly.</p>
            </div>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              PDF to JPG Tool <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why no built-in way */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why iPhones Can't Convert PDFs to JPG Natively</h2>
              <p className="text-slate-600 mb-4">
                iOS can <em>view</em> PDFs in Files and Safari, but Apple hasn't included a way to convert PDF pages to images. The Shortcuts app can do it with a custom workflow, but it's complicated to set up and results are often low quality.
              </p>
              <p className="text-slate-600 mb-4">
                The fastest solution is to use a web-based tool in Safari. It works exactly like a desktop converter, but right on your phone. No downloads, no signups, no storage used.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Step-by-Step: Convert PDF to JPG on iPhone</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open Safari and go to PDF.it",
                    desc: "Open Safari on your iPhone and navigate to pdf.it.com/pdf-to-jpg. The tool is fully mobile-optimized and works on any iPhone running iOS 14 or later.",
                  },
                  {
                    title: "Upload your PDF",
                    desc: "Tap the upload area. Your iPhone will show options to choose from: Files, iCloud Drive, Photos (for scanned PDFs), or Browse. Find and select the PDF you want to convert.",
                  },
                  {
                    title: "Convert and download your JPGs",
                    desc: "Tap the Convert button. Once processing is done, tap Download. The JPG images save to your Downloads folder in the Files app. For multi-page PDFs, you'll get a ZIP file containing all the images.",
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

            {/* Saving to Photos */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Save the JPG to Your Photos App</h2>
              <p className="text-slate-600 mb-4">
                By default, Safari saves downloads to the Files app. If you want the JPG in your Photos library (camera roll), follow these extra steps:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span>Open the <strong>Files</strong> app on your iPhone.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span>Go to <strong>On My iPhone &gt; Downloads</strong> (or check iCloud Drive &gt; Downloads).</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span>Find the JPG file and <strong>tap and hold</strong> it.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span>Tap <strong>Share</strong>, then tap <strong>Save Image</strong>. The JPG is now in your Photos app.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Tip:</strong> If you downloaded a ZIP file (multi-page PDF), tap the ZIP in Files to unzip it first, then save each image individually.
              </p>
            </section>

            {/* Common use cases */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Use Cases on iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sharing a Document Page on WhatsApp or iMessage</h3>
                  <p className="text-slate-600">
                    Sending a PDF in a message app often doesn't show a preview — the recipient has to download and open it separately. Convert the page to JPG first, and it displays as an inline image that everyone can see immediately.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Posting a Certificate or Document on Social Media</h3>
                  <p className="text-slate-600">
                    Instagram, Facebook, and LinkedIn don't accept PDF uploads. Convert your certificate, diploma, or achievement to a JPG and post it as a regular image.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Saving a Receipt or Invoice to Photos</h3>
                  <p className="text-slate-600">
                    Many receipts arrive as PDF email attachments. Converting to JPG and saving to Photos makes them easy to find later — no digging through email or Files. Great for expense tracking.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Uploading to a Form That Only Accepts Images</h3>
                  <p className="text-slate-600">
                    Some online forms, ID verification systems, and upload portals require JPG or PNG — they won't accept PDF. Convert on your iPhone and upload the image directly.
                  </p>
                </div>
              </div>
            </section>

            {/* Alternative methods */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Alternative Methods (And Why They're Worse)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Screenshots</h3>
                  <p className="text-slate-600">
                    You can screenshot a PDF page in the Files app or Safari. However, screenshots are limited to your screen resolution and include the status bar, navigation elements, and whatever else is on screen. You'd have to crop carefully, and the quality is much lower than a proper 200 DPI conversion.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">iOS Shortcuts</h3>
                  <p className="text-slate-600">
                    You can build a Shortcut that converts PDF pages to images using the "Make Image from PDF Page" action. It works, but it's tedious to set up, only converts one page at a time by default, and the output quality settings are limited.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Third-Party Apps</h3>
                  <p className="text-slate-600">
                    There are PDF converter apps on the App Store, but most are bloated with ads, require subscriptions, or have limited free tiers. A web tool in Safari avoids all of this — no storage used, no ads, no ongoing subscriptions.
                  </p>
                </div>
              </div>
            </section>

            {/* Tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Best Results on iPhone</h2>
              <ul className="space-y-2 text-slate-700">
                <li>- <strong>Use Wi-Fi</strong> for larger PDFs. Converting a 20-page PDF uploads the file and downloads multiple JPGs — Wi-Fi is faster and won't eat your data.</li>
                <li>- <strong>Use Safari, not Chrome.</strong> Safari handles downloads better on iOS. Chrome sometimes has issues with file saving on iPhones.</li>
                <li>- <strong>Need just one page?</strong> If you only need a single page as a JPG, you don't have to convert the whole PDF. Select just that page to save time. See our guide: <Link href="/learn/save-pdf-page-as-jpg" className="text-[#14D8C4] hover:underline">Save One PDF Page as JPG</Link>.</li>
                <li>- <strong>Choose PNG for text documents.</strong> If the PDF is mostly text and you need it to look sharp, use <Link href="/pdf-to-png" className="text-[#14D8C4] hover:underline">PDF to PNG</Link> instead. PNG preserves text edges better than JPG.</li>
                <li>- <strong>Compress first if the PDF is huge.</strong> If your PDF is over 25MB (the free limit), <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">compress it first</Link> to get it under the limit.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert PDF to JPG on Your iPhone</h2>
            <p className="text-slate-300 mb-6">Open the tool in Safari, upload your PDF, and get JPG images in seconds. No app needed.</p>
            <Link
              href="/pdf-to-jpg"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <ImageIcon className="h-5 w-5" /> PDF to JPG Tool
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to JPG Online (Fast & High Quality)", href: "/learn/convert-pdf-to-jpg" },
                { title: "How to Save One PDF Page as a JPG (Windows, Mac, Mobile)", href: "/learn/save-pdf-page-as-jpg" },
                { title: "Convert PDF to JPG for PowerPoint (Best Settings + Tips)", href: "/learn/pdf-to-jpg-for-powerpoint" },
                { title: "Why Your PDF to JPG Looks Blurry (And How to Fix It)", href: "/learn/why-pdf-to-jpg-looks-blurry" },
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
                { q: "Can I convert PDF to JPG on iPhone without an app?", a: "Yes. Open PDF.it.com in Safari on your iPhone, upload your PDF, and convert it to JPG. The images download directly to your phone — no app installation needed." },
                { q: "Where do converted JPGs save on iPhone?", a: "Downloaded JPG files go to your Files app by default (in the Downloads folder). From there, you can open the image and tap the share button to save it to your Photos app." },
                { q: "Can I convert PDF to JPG on iPad too?", a: "Yes. The same process works on iPad using Safari. Open PDF.it.com, upload your PDF, convert, and download. iPads actually make this easier because of the larger screen." },
                { q: "How do I share a converted JPG from my iPhone?", a: "After downloading the JPG, open it in Files or Photos and tap the share button. You can send it via iMessage, WhatsApp, email, AirDrop, or any other sharing option available on your iPhone." },
                { q: "Is there a file size limit for converting on iPhone?", a: "Free users can convert PDFs up to 25MB. Pro users can handle files up to 200MB. Most PDFs people convert on their phones are well under 25MB, so the free tier works for the majority of use cases." },
                { q: "Can I convert multiple PDF pages to JPGs on iPhone?", a: "Yes. When you convert a multi-page PDF, each page becomes a separate JPG. You can download them all as a ZIP file and then unzip it in your Files app to access each image individually." },
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
