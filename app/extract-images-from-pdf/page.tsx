import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { Image, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extract Images from PDF Online — Free Image Extractor | PDF.it",
  description:
    "Extract all images from PDF files with PDF.it. Pull out photos, logos, and graphics from any PDF — fast, browser-based, no login required.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I extract images from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it, click Extract, and download a ZIP file containing all the images found in your PDF." }
    },
    {
      "@type": "Question",
      "name": "What image formats are extracted?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it extracts images in their original format — typically JPG or PNG. The images are downloaded as a ZIP file." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between extracting images and converting PDF to JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF to JPG converts each page into an image. Extract Images pulls out only the embedded photos, logos, and graphics — not the full page layout." }
    },
    {
      "@type": "Question",
      "name": "Can I extract images from a scanned PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Scanned PDFs treat the entire page as one image. You can extract it, but it will be the full page scan rather than individual graphics." }
    },
    {
      "@type": "Question",
      "name": "Can I extract images from a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, extract, and download on iPhone or Android." }
    },
    {
      "@type": "Question",
      "name": "Is it free to extract images from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Free accounts get 10 extractions per day. Pro accounts get unlimited extractions." }
    }
  ]
}

export default function ExtractImagesFromPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Image className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extract Images from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Pull out every photo, logo, and graphic embedded in your PDF. Download them all as a ZIP file — instant and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>All Images Extracted</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Images from PDF"
          outputFormat="ZIP"
          processingMessage="Extracting images from your PDF..."
          successMessage="Your images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Need the photos or graphics from a PDF without the text and layout? PDF.it's image extractor pulls out every embedded image — photos, logos, charts, diagrams — and delivers them as a ZIP file you can use anywhere.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extract all embedded images from any PDF</li>
              <li>✓ Images saved in their original format (JPG, PNG)</li>
              <li>✓ Perfect for reusing photos, logos, and graphics</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — extract images in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reuse Photos and Graphics from PDFs</h2>
              <p className="text-slate-600">
                Received a brochure, presentation, or report as a PDF? Extract the images to reuse in your own documents, slides, or social media posts without screenshots.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extract Logos and Brand Assets</h2>
              <p className="text-slate-600">
                Pull logos, icons, and brand graphics from PDF brand guides, marketing materials, and corporate documents — get the original image files instantly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Different from PDF to JPG</h2>
              <p className="text-slate-600">
                PDF to JPG converts entire pages into images. Image extraction pulls out only the embedded graphics — photos, charts, logos — separate from the page layout.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Extract Images from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Click Extract Images — all embedded images are detected automatically.",
                "Download the ZIP file containing all extracted images.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Convert pages to images" },
                { name: "PDF to PNG", href: "/pdf-to-png", desc: "Convert pages to PNG" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scans" },
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
                { q: "How do I extract images from a PDF?", a: "Upload your PDF to PDF.it, click Extract, and download a ZIP file containing all the images found in your PDF." },
                { q: "What image formats are extracted?", a: "PDF.it extracts images in their original format — typically JPG or PNG. The images are downloaded as a ZIP file." },
                { q: "What is the difference between extracting images and converting PDF to JPG?", a: "PDF to JPG converts each page into an image. Extract Images pulls out only the embedded photos, logos, and graphics — not the full page layout." },
                { q: "Can I extract images from a scanned PDF?", a: "Scanned PDFs treat the entire page as one image. You can extract it, but it will be the full page scan rather than individual graphics." },
                { q: "Can I extract images from a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers — upload, extract, and download on iPhone or Android." },
                { q: "Is it free to extract images from a PDF?", a: "Yes. Free accounts get 10 extractions per day. Pro accounts get unlimited extractions." },
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
