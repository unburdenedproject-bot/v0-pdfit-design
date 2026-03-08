import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileImage, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to PNG Converter — Free & No Login Required | OmnisPDF",
  description:
    "Convert PDF to PNG in seconds with OmnisPDF. Export each page as a high-quality PNG image—great for sharp text, graphics, and transparency.",
}

export default function PDFToPNGPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileImage className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to PNG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert a PDF into high-quality PNG images — perfect for sharp text, screenshots, design assets, and clean page exports.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>High Resolution</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Files Deleted After Session</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>No Login Required</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PNG"
          outputFormat="PNG"
          processingMessage="Converting your PDF to PNG images..."
          successMessage="Your PNG images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use OmnisPDF's PDF to PNG converter to export PDF pages as PNG images — fast. PNG is ideal when you need crisp text, clean graphics, and consistent quality for presentations, documents, and web use. Upload your PDF, convert, and download your PNGs instantly.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convert PDF to PNG with sharp, readable results</li>
              <li>✓ Great for text-heavy pages, charts, and line art</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — runs in your browser</li>
              <li>✓ Easy downloads for single pages or full documents</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convert PDF Pages to PNG Images</h2>
              <p className="text-slate-600">
                Turn every page of a PDF into a separate PNG file. Each page becomes an image you can drop into slides, emails, docs, design tools, or websites.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Why Choose PNG Instead of JPG?</h2>
              <p className="text-slate-600">
                PNG produces cleaner text and graphics than JPG because it avoids heavy compression artifacts. If you need smaller file sizes, try our PDF to JPG tool instead.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">High-Quality Output for Design and Sharing</h2>
              <p className="text-slate-600">
                PNG exports are great for diagrams, UI mockups, receipts, forms, and any PDF where clarity matters.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Works Anywhere — Desktop and Mobile</h2>
              <p className="text-slate-600">
                Convert PDF to PNG online from any modern browser. No apps, no downloads, no complicated steps.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to PNG</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into OmnisPDF.",
                "Click Convert PDF to PNG.",
                "Download your PNG images — one per page.",
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
                { name: "PDF to JPG", href: "/pdf-to-jpg", desc: "Smaller file sizes" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size before converting" },
                { name: "Split PDF", href: "/split-pdf", desc: "Convert only the pages you need" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extract text from scanned PDFs" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center"
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
                {
                  q: "Can I convert a multi-page PDF to PNG?",
                  a: "Yes. OmnisPDF converts each PDF page into its own PNG image so you can download pages individually.",
                },
                {
                  q: "Why should I use PNG instead of JPG?",
                  a: "PNG is better for sharp text, charts, and graphics because it doesn't use aggressive compression. JPG is usually smaller and better for photo-heavy pages.",
                },
                {
                  q: "Can I convert PDF to PNG on iPhone or Android?",
                  a: "Yes. OmnisPDF works in mobile browsers — upload, convert, and download your PNG images.",
                },
                {
                  q: "Why do my PNG files look blurry?",
                  a: "Blurry PNGs usually come from a low-quality source PDF, especially scanned documents. Try our OCR Scanner for scanned PDFs.",
                },
                {
                  q: "Is it safe to upload my PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session.",
                },
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
