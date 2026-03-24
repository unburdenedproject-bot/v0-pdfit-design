import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Image, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convert PDF to PNG on iPhone (Fast, High-Quality Export) | PDF.it",
  description:
    "Learn how to convert a PDF to PNG images on your iPhone using Safari and PDF.it. No app needed — just open, convert, and save to your Photos library in seconds.",
  keywords: "convert pdf to png iphone, pdf to png on iphone, save pdf as image iphone, pdf to picture iphone, export pdf to png ios",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I convert a PDF to PNG on iPhone without an app?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Open Safari on your iPhone, go to PDF.it's PDF to PNG tool, upload your PDF, convert it, and download the PNG images directly. No app installation needed — it works entirely in your browser." }
    },
    {
      "@type": "Question",
      "name": "Where do converted PNG files save on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Downloaded PNG files go to your Files app by default (in the Downloads folder). You can also save them directly to your Photos app by tapping the share icon and choosing 'Save Image'." }
    },
    {
      "@type": "Question",
      "name": "Is there a free PDF to PNG converter for iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it is free for your first 3 conversions per day without signup. After that, create a free account for 10 conversions per day. The tool works in Safari — no app purchase needed." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple PDF pages to PNG on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it converts every page of your PDF into a separate PNG image. You can download them individually or as a ZIP file. For multi-file batch conversion, upgrade to Pro." }
    },
    {
      "@type": "Question",
      "name": "Will the PNG quality be good on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it produces high-resolution PNG images with sharp text and clean graphics. PNG uses lossless compression, so there's no quality loss during conversion. The output looks great on iPhone's Retina display." }
    },
    {
      "@type": "Question",
      "name": "How do I share a PDF as an image on iPhone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Convert your PDF to PNG using PDF.it in Safari, save the images to your Photos app, then share them via iMessage, WhatsApp, email, or any other app. PNG images are universally supported." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Convert PDF to PNG on iPhone",
  "description": "Turn your PDF into PNG images on iPhone in 3 simple steps.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Open PDF.it in Safari",
      "text": "Open Safari on your iPhone and go to pdf.it.com/pdf-to-png. Tap the upload area to select your PDF from Files, iCloud, or email attachments."
    },
    {
      "@type": "HowToStep",
      "name": "Convert your PDF",
      "text": "Tap Convert. Each page of your PDF is turned into a high-quality PNG image. Wait a few seconds for processing to complete."
    },
    {
      "@type": "HowToStep",
      "name": "Download and save",
      "text": "Tap Download to save the PNG files. They go to your Files app by default. To save to Photos, tap the share icon and choose Save Image."
    }
  ]
}

export default function ConvertPDFtoPNGoniPhonePage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF to PNG</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to PNG on iPhone (Fast, High-Quality Export)</h1>
              <p className="text-xl text-slate-300">
                Need to turn a PDF into images on your iPhone? No app required. Just open your browser, convert, and save sharp PNG images directly to your phone.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">On your iPhone now? Open this tool in Safari to convert.</p>
            </div>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Convert PDF to PNG <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why convert on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Convert PDF to PNG on iPhone?</h2>
              <p className="text-slate-600 mb-4">
                There are plenty of situations where you need a PDF as an image on your phone:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Sharing on messaging apps.</strong> WhatsApp, iMessage, and Instagram don't handle PDFs well. A PNG image is universally viewable — the recipient sees it instantly without opening a separate viewer.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Posting on social media.</strong> Instagram, Twitter, and Facebook accept images but not PDFs. Converting to PNG lets you share document content as a post or story.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Quick reference.</strong> Saving a page as an image in your Photos app makes it easier to find later — no digging through the Files app for PDF documents.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Presentations and reports.</strong> If you need to include a PDF page in a Keynote presentation or email, a PNG image drops in cleanly with no formatting issues.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Convert PDF to PNG on iPhone (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Open PDF.it in Safari",
                    desc: "On your iPhone, open Safari and go to pdf.it.com/pdf-to-png. The tool works directly in your browser — there's nothing to download or install.",
                  },
                  {
                    title: "Upload your PDF",
                    desc: "Tap the upload area. You'll see options to choose from your Files app, iCloud Drive, or recent downloads. You can also upload a PDF you received via email or AirDrop. Files up to 25MB are free.",
                  },
                  {
                    title: "Convert and download",
                    desc: "Tap Convert. In a few seconds, your PDF pages are turned into high-quality PNG images. Tap Download to save them. By default, files go to the Downloads folder in your Files app.",
                  },
                  {
                    title: "Save to Photos (optional)",
                    desc: "To save a PNG to your Camera Roll, open the file in Files, tap the share icon (square with arrow), and choose 'Save Image.' The PNG is now in your Photos library, ready to share anywhere.",
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

            {/* PNG vs JPG on iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PNG or JPG: Which to Use on iPhone?</h2>
              <p className="text-slate-600 mb-4">
                iPhone supports both formats, but they serve different purposes:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Choose PNG When...</th>
                      <th className="text-left py-3 px-4 font-bold">Choose JPG When...</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">Your PDF has text or graphics</td>
                      <td className="py-3 px-4">Your PDF is mostly photos</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4">You want the sharpest quality</td>
                      <td className="py-3 px-4">You want the smallest file size</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4">You're using images in design apps</td>
                      <td className="py-3 px-4">You're sending via messaging apps</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-500 text-sm mt-3">
                For a detailed comparison, read our guide on <Link href="/learn/pdf-to-jpg-vs-png" className="text-orange-600 hover:underline">PDF to JPG vs PNG</Link>. If you need JPG, use our <Link href="/pdf-to-jpg" className="text-orange-600 hover:underline">PDF to JPG</Link> tool.
              </p>
            </section>

            {/* Tips for iPhone */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Tips for Best Results on iPhone</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Safari for the smoothest experience</h3>
                  <p className="text-slate-600">
                    While PDF.it works in Chrome and other iOS browsers, Safari handles file uploads and downloads most smoothly on iPhone. The file picker integrates directly with iCloud and the Files app.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Check your storage before converting large PDFs</h3>
                  <p className="text-slate-600">
                    PNG files are larger than JPGs. A 20-page PDF at high resolution could produce 30-50MB of PNG images. Make sure you have enough free space on your iPhone, or download the ZIP and transfer it to iCloud.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Compress the PDF first if it's huge</h3>
                  <p className="text-slate-600">
                    If your PDF is very large and you want smaller PNGs, <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress the PDF</Link> before converting. This reduces embedded image data, which means smaller PNG output files.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Convert specific pages only</h3>
                  <p className="text-slate-600">
                    If you only need a few pages, there's no need to convert the entire PDF. You can <Link href="/split-pdf" className="text-orange-600 hover:underline">split the PDF</Link> first to extract just the pages you need, then convert those to PNG.
                  </p>
                </div>
              </div>
            </section>

            {/* Sharing tips */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Sharing Your PNG Images from iPhone</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF pages are saved as PNGs, sharing them is straightforward:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>iMessage / WhatsApp:</strong> Open the conversation, tap the attachment icon, and select the PNG from Photos or Files.</li>
                <li>✓ <strong>Email:</strong> Compose a new message, tap the attachment icon, and add the PNG. It shows up as an inline image.</li>
                <li>✓ <strong>Social media:</strong> Open Instagram, Twitter, or Facebook, create a new post, and select the PNG from your Photos library.</li>
                <li>✓ <strong>AirDrop:</strong> Open the PNG in Files or Photos, tap Share, and AirDrop it to a nearby Mac or iPhone.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Convert Your PDF to PNG Right on Your iPhone</h2>
            <p className="text-slate-300 mb-6">No app to install. Open in Safari, upload, convert, and save — it takes seconds.</p>
            <Link
              href="/pdf-to-png"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Image className="h-5 w-5" /> Convert PDF to PNG Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Convert PDF to PNG Online (Sharp Text + Clean Graphics)", href: "/learn/convert-pdf-to-png" },
                { title: "PDF to JPG vs PNG: Which Should You Use (Quality vs Size)", href: "/learn/pdf-to-jpg-vs-png" },
                { title: "Save PDF as PNG on Mac (Quick Methods + Best Results)", href: "/learn/save-pdf-as-png-on-mac" },
                { title: "Convert PDF to PNG for Design Work (Figma, Canva, Web)", href: "/learn/pdf-to-png-for-design" },
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
                { q: "Can I convert a PDF to PNG on iPhone without an app?", a: "Yes. Open Safari on your iPhone, go to PDF.it's PDF to PNG tool, upload your PDF, convert it, and download the PNG images directly. No app installation needed." },
                { q: "Where do converted PNG files save on iPhone?", a: "Downloaded PNG files go to your Files app by default (in the Downloads folder). You can also save them directly to your Photos app by tapping the share icon and choosing 'Save Image'." },
                { q: "Is there a free PDF to PNG converter for iPhone?", a: "Yes. PDF.it is free for your first 3 conversions per day without signup. After that, create a free account for 10 conversions per day. The tool works in Safari — no app purchase needed." },
                { q: "Can I convert multiple PDF pages to PNG on iPhone?", a: "Yes. PDF.it converts every page of your PDF into a separate PNG image. You can download them individually or as a ZIP file." },
                { q: "Will the PNG quality be good on iPhone?", a: "Yes. PDF.it produces high-resolution PNG images with sharp text and clean graphics. PNG uses lossless compression, so there's no quality loss during conversion." },
                { q: "How do I share a PDF as an image on iPhone?", a: "Convert your PDF to PNG using PDF.it in Safari, save the images to your Photos app, then share them via iMessage, WhatsApp, email, or any other app." },
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
