import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF to JPG Converter — PDF.it",
  description: "Convert PDF to JPG in seconds with PDF.it. Export every page as a high-quality JPEG image and download instantly—no installs or software needed.",
}

export default function PDFToJPGPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert PDF to JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convert a PDF into crisp JPG images in seconds with PDF.it—fast, simple, and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>High Resolution Output</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>All Pages Converted</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>ZIP Download</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Convert your PDF into high-quality JPG (JPEG) images with PDF.it. Upload a file, convert in seconds, and download each page as a separate image—perfect for sharing, slides, previews, and email.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Convert entire PDF pages into JPG images</li>
              <li className="flex items-center gap-2">✓ Sharp, readable output for text, charts, and diagrams</li>
              <li className="flex items-center gap-2">✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li className="flex items-center gap-2">✓ No installation — runs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to JPG"
          outputFormat="JPG"
          processingMessage="Converting your PDF to images..."
          successMessage="Your images are ready!"
        />

        {/* Feature Blocks */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Convert PDF Pages to JPG</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Turn every page of your PDF into a JPG image. Each page becomes its own file, so it's easy to use individual pages anywhere.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Keep Layouts Clean and Clear</h3>
                <p className="text-slate-600 text-sm leading-relaxed">PDF.it preserves the page layout so your content stays readable and professional-looking after conversion.</p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Download Instantly</h3>
                <p className="text-slate-600 text-sm leading-relaxed">Download JPGs right away after conversion. All pages are bundled into a ZIP file for easy downloading in one click.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to Convert PDF to JPG</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              <div className="flex-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-black text-lg">1</span>
                </div>
                <p className="font-semibold text-slate-900">Upload your PDF</p>
                <p className="text-sm text-slate-500 mt-1">Drag and drop or click to choose a file</p>
              </div>
              <div className="flex-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-black text-lg">2</span>
                </div>
                <p className="font-semibold text-slate-900">Click Convert</p>
                <p className="text-sm text-slate-500 mt-1">Processing usually takes a few seconds</p>
              </div>
              <div className="flex-1">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <span className="text-orange-600 font-black text-lg">3</span>
                </div>
                <p className="font-semibold text-slate-900">Download your JPGs</p>
                <p className="text-sm text-slate-500 mt-1">Get all pages in a single ZIP file</p>
              </div>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-slate-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <Link href="/pdf-to-png" className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center">
                <div className="font-bold text-[#14D8C4] text-sm mb-1">PDF to PNG</div>
                <div className="text-xs text-slate-500">Lossless image output</div>
              </Link>
              <Link href="/compress-pdf" className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center">
                <div className="font-bold text-[#14D8C4] text-sm mb-1">Compress PDF</div>
                <div className="text-xs text-slate-500">Reduce size before converting</div>
              </Link>
              <Link href="/split-pdf" className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center">
                <div className="font-bold text-[#14D8C4] text-sm mb-1">Split PDF</div>
                <div className="text-xs text-slate-500">Convert only the pages you need</div>
              </Link>
              <Link href="/ocr-scanner" className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center">
                <div className="font-bold text-[#14D8C4] text-sm mb-1">OCR Scanner</div>
                <div className="text-xs text-slate-500">Extract text from scanned PDFs</div>
              </Link>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-10 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I convert a multi-page PDF to JPG?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. PDF.it converts each PDF page into its own JPG image so you can download pages individually.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Can I convert just one page of a PDF to JPG?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. Convert the PDF, then download only the page JPG you need from the ZIP file.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Will converting PDF to JPG reduce quality?</h3>
                <p className="text-slate-600 leading-relaxed">The output quality depends on the source PDF. High-resolution PDFs produce crisp JPGs; low-resolution scans may look softer.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Does PDF.it work on Mac, Windows, iPhone, and Android?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. PDF.it runs in your browser, so it works across modern devices and operating systems.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">What's the difference between JPG and PNG for PDF pages?</h3>
                <p className="text-slate-600 leading-relaxed">JPG usually creates smaller files and is great for sharing. PNG can be better for very sharp text and graphics. Try our <Link href="/pdf-to-png" className="text-orange-500 hover:underline">PDF to PNG</Link> tool if you need lossless output.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Why do my JPG pages look blurry?</h3>
                <p className="text-slate-600 leading-relaxed">Blurriness usually comes from a low-resolution scanned PDF or small text in the original file.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Is it safe to upload my PDF?</h3>
                <p className="text-slate-600 leading-relaxed">Yes. Files are transferred over HTTPS and automatically deleted after your session. We never store or share your documents.</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6 border border-slate-100">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Do you add watermarks?</h3>
                <p className="text-slate-600 leading-relaxed">No. PDF.it does not add watermarks to your converted JPG files.</p>
              </div>
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "Can I convert a multi-page PDF to JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it converts each PDF page into its own JPG image so you can download pages individually." } },
            { "@type": "Question", "name": "Can I convert just one page of a PDF to JPG?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Convert the PDF, then download only the page JPG you need from the ZIP file." } },
            { "@type": "Question", "name": "Will converting PDF to JPG reduce quality?", "acceptedAnswer": { "@type": "Answer", "text": "The output quality depends on the source PDF. High-resolution PDFs produce crisp JPGs; low-resolution scans may look softer." } },
            { "@type": "Question", "name": "Does PDF.it work on Mac, Windows, iPhone, and Android?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it runs in your browser, so it works across modern devices and operating systems." } },
            { "@type": "Question", "name": "What's the difference between JPG and PNG for PDF pages?", "acceptedAnswer": { "@type": "Answer", "text": "JPG usually creates smaller files and is great for sharing. PNG can be better for very sharp text and graphics." } },
            { "@type": "Question", "name": "Why do my JPG pages look blurry?", "acceptedAnswer": { "@type": "Answer", "text": "Blurriness usually comes from a low-resolution scanned PDF or small text in the original file." } },
            { "@type": "Question", "name": "Is it safe to upload my PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Yes. Files are transferred over HTTPS and automatically deleted after your session. We never store or share your documents." } },
            { "@type": "Question", "name": "Do you add watermarks?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it does not add watermarks to your converted JPG files." } }
          ]
        })}} />
      </main>
      <Footer />
    </div>
  )
}
