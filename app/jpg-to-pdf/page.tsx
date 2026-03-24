import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ImageToPdfInterface } from "@/components/image-to-pdf-interface"
import { Image as ImageIcon, Zap, Shield, Upload, FileText, Merge, RotateCw, Scissors, Lock, ScanLine, Camera } from "lucide-react"

export const metadata = {
  title: "JPG to PDF — Convert JPG Images to PDF Online | PDF.it",
  description:
    "Convert JPG and JPEG images to PDF documents online for free. Upload one or multiple images and get a professional PDF instantly. No software to install.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I convert a JPG to PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your JPG image to PDF.it, click Convert to PDF, and download the result. You can upload multiple JPG images at once and each will be converted to its own PDF file." }
    },
    {
      "@type": "Question",
      "name": "Can I convert multiple JPG images to PDF at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Select multiple JPG files when uploading and each image will be converted to a separate PDF. You can download them individually or use the Download All as ZIP button to get them in a single archive." }
    },
    {
      "@type": "Question",
      "name": "Is the JPG to PDF converter free?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can convert several JPG images to PDF for free every day. For unlimited conversions, batch processing, and larger file support, upgrade to the Pro plan at $7.99/month." }
    },
    {
      "@type": "Question",
      "name": "Will converting JPG to PDF reduce image quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it preserves the original resolution and quality of your JPG image when converting to PDF. The resulting PDF contains the full-quality image." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size for JPG to PDF conversion?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free users can upload JPG images up to 25MB each. Pro and Business subscribers can upload images up to 200MB each." }
    },
    {
      "@type": "Question",
      "name": "Can I convert JPEG files too, or only JPG?",
      "acceptedAnswer": { "@type": "Answer", "text": "JPG and JPEG are the same image format with different file extensions. This tool accepts both .jpg and .jpeg files." }
    },
  ]
}

export default function JpgToPdfPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convert JPG to PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Convert JPG and JPEG images to PDF documents. Upload one or multiple images and get a professional PDF instantly.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                No software to install. No signup required. Just upload and convert.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-orange-500" /><span>Multiple Images</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Conversion</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Full Quality Preserved</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Tool Interface */}
        <ImageToPdfInterface
          acceptedTypes={["image/jpeg"]}
          acceptedExtensions=".jpg,.jpeg"
          formatLabel="JPG"
        />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Upload JPG Images", desc: "Drag and drop your JPG or JPEG files, or click to browse. You can select one or multiple images at once." },
                { step: "2", title: "Convert to PDF", desc: "Click the Convert button and each image is transformed into a high-quality PDF document in seconds." },
                { step: "3", title: "Download Your PDFs", desc: "Download each PDF individually, or grab them all at once as a ZIP file. Your original image quality is preserved." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Convert JPG to PDF */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Why Convert JPG to PDF?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                PDF is the universal document format. Converting your JPG images to PDF makes them easier to share, print, and archive. PDFs maintain consistent formatting across all devices and operating systems.
              </p>
              <p className="text-slate-600 text-center">
                Whether you need to submit photos as documents, create printable image collections, or simply share images in a professional format, JPG to PDF conversion is the answer.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Common Use Cases</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Converting Photos to PDF</h3>
                <p className="text-slate-600">
                  Turn phone photos or camera images into PDF documents for easy sharing via email or messaging apps. PDFs are universally viewable and maintain the same appearance on every device.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Creating Photo Albums</h3>
                <p className="text-slate-600">
                  Convert multiple JPG photos into individual PDFs, then use our Merge PDF tool to combine them into a single document. Perfect for creating digital photo albums or image portfolios.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Digitizing Printed Photos</h3>
                <p className="text-slate-600">
                  Scanned or photographed printed photos saved as JPG can be converted to PDF for long-term digital archiving. PDF is a stable, widely-supported format that will remain readable for decades.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Submitting Image Documents</h3>
                <p className="text-slate-600">
                  Many applications, portals, and institutions require documents in PDF format. Convert your JPG images of IDs, certificates, receipts, or forms into PDFs for easy submission.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I convert a JPG to PDF?", a: "Upload your JPG image, click Convert to PDF, and download. You can upload multiple images and each will be converted to its own PDF." },
                { q: "Can I convert multiple JPG images at once?", a: "Yes. Select multiple JPG files and each will be converted to a separate PDF. Download them individually or as a ZIP archive." },
                { q: "Is the JPG to PDF converter free?", a: "You can convert several images for free daily. For unlimited conversions and larger files, upgrade to Pro at $7.99/month." },
                { q: "Will converting reduce image quality?", a: "No. PDF.it preserves the full resolution and quality of your JPG image in the resulting PDF." },
                { q: "What is the maximum file size?", a: "Free users can upload up to 25MB per image. Pro and Business subscribers can upload up to 200MB per image." },
                { q: "Can I convert JPEG files too?", a: "Yes. JPG and JPEG are the same format with different extensions. This tool accepts both .jpg and .jpeg files." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Convert Your JPG Images Now</h2>
            <p className="text-slate-300 text-lg mb-8">
              Fast, free, and secure. Turn any JPG image into a professional PDF in seconds.
            </p>
            <Link
              href="/jpg-to-pdf"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Convert JPG to PDF
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">More PDF Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "PNG to PDF", desc: "Convert PNG images to PDF.", href: "/png-to-pdf", icon: ImageIcon },
                { name: "PDF to JPG", desc: "Convert PDF pages to JPG images.", href: "/pdf-to-jpg", icon: FileText },
                { name: "Merge PDF", desc: "Combine multiple PDFs into one.", href: "/merge-pdf", icon: Merge },
                { name: "Compress PDF", desc: "Reduce PDF file size.", href: "/compress-pdf", icon: FileText },
                { name: "Phone Scan Cleanup", desc: "Turn phone photos into clean PDFs.", href: "/phone-scan-cleanup", icon: Camera },
                { name: "OCR Scanner", desc: "Make scanned PDFs searchable.", href: "/ocr-scanner", icon: ScanLine },
                { name: "Rotate PDF", desc: "Fix sideways or upside-down pages.", href: "/rotate-pdf", icon: RotateCw },
                { name: "Protect PDF", desc: "Add password protection.", href: "/protect-pdf", icon: Lock },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
