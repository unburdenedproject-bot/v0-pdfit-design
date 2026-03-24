import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combine Images Into PDF — Convert Multiple Photos to One PDF | PDF.it",
  description:
    "Combine multiple images into a single PDF with PDF.it. Upload JPG, PNG, or other images and create one PDF document — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What image formats can I combine into a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it supports JPG, JPEG, PNG, and WebP images. Upload any mix of these formats and they will all be combined into a single PDF document." }
    },
    {
      "@type": "Question",
      "name": "Will combining images into a PDF reduce the image quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Your images are embedded into the PDF at their original resolution. The quality of each image remains the same as the original file you uploaded." }
    },
    {
      "@type": "Question",
      "name": "How many images can I combine into one PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can combine images from a single upload. Pro users get batch processing to combine large sets of images into one PDF with no practical limit on the number of images." }
    },
    {
      "@type": "Question",
      "name": "Can I choose the page order of the images in the PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Images are added to the PDF in the order you upload them. Arrange your files in the desired sequence before uploading to control the page order." }
    },
    {
      "@type": "Question",
      "name": "Can I combine images into a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload photos from your camera roll on iPhone or Android and download the combined PDF instantly." }
    },
    {
      "@type": "Question",
      "name": "Is it free to combine images into a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it lets you combine images into a PDF for free with no login required. Pro users get additional features like batch processing and larger file size limits." }
    }
  ]
}

export default function CombineImagesIntoPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Image className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combine Images Into PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Upload multiple photos or images and combine them into a single PDF document. Perfect for creating photo albums, receipt collections, or organized scanned pages.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>JPG, PNG, WebP Supported</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/jpeg", "image/png", "image/webp"]}
          acceptedExtensions=".jpg,.jpeg,.png,.webp"
          formatLabel="Images"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need to turn a folder of photos into a single document? PDF.it combines multiple images — JPG, PNG, or WebP — into one organized PDF. Each image becomes its own page, making it easy to share, print, or archive collections of photos, receipts, or scanned documents.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Supports JPG, JPEG, PNG, and WebP image formats</li>
              <li>&#10003; Each image becomes a full page in the PDF</li>
              <li>&#10003; Original image quality is preserved</li>
              <li>&#10003; Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>&#10003; No installation — combine images in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Create Photo PDFs for Sharing</h2>
              <p className="text-slate-600">
                Sending a batch of photos? Instead of attaching dozens of image files, combine them into one PDF. Recipients get a single, easy-to-view document they can scroll through, print, or save.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Receipts Into One Document</h2>
              <p className="text-slate-600">
                Expense reports, tax filings, and reimbursement claims often require receipts in PDF format. Photograph or scan your receipts, upload the images to PDF.it, and download a single PDF with all receipts organized in order.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Scanned Images Into PDF Pages</h2>
              <p className="text-slate-600">
                Scanned documents, whiteboard photos, and handwritten notes often end up as individual image files. Combine them into a clean PDF for archiving, emailing, or uploading to document management systems.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Combine Images Into a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your images (JPG, PNG, or WebP) into PDF.it.",
                "Arrange the images in the order you want them to appear in the PDF.",
                "Click Convert and download your combined PDF document.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "JPG to PDF", href: "/jpg-to-pdf", desc: "Convert JPG images to PDF" },
                { name: "PNG to PDF", href: "/png-to-pdf", desc: "Convert PNG images to PDF" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine PDFs into one" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce PDF file size" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What image formats can I combine into a PDF?", a: "PDF.it supports JPG, JPEG, PNG, and WebP images. Upload any mix of these formats and they will all be combined into a single PDF document." },
                { q: "Will combining images into a PDF reduce the image quality?", a: "No. Your images are embedded into the PDF at their original resolution. The quality of each image remains the same as the original file you uploaded." },
                { q: "How many images can I combine into one PDF?", a: "Free users can combine images from a single upload. Pro users get batch processing to combine large sets of images into one PDF with no practical limit on the number of images." },
                { q: "Can I choose the page order of the images in the PDF?", a: "Yes. Images are added to the PDF in the order you upload them. Arrange your files in the desired sequence before uploading to control the page order." },
                { q: "Can I combine images into a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers — upload photos from your camera roll on iPhone or Android and download the combined PDF instantly." },
                { q: "Is it free to combine images into a PDF?", a: "Yes. PDF.it lets you combine images into a PDF for free with no login required. Pro users get additional features like batch processing and larger file size limits." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
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
