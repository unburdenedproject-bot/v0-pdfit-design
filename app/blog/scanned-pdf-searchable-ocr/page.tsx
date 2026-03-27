import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft, ArrowRight, ScanLine, FileText, Smartphone, FileDown, Shield } from "lucide-react"

export const metadata = {
  title: "How to Make a Scanned PDF Searchable with OCR | PDF.it Blog",
  description:
    "Turn scanned documents into searchable, copyable PDFs using OCR. Works with receipts, contracts, old paperwork, and documents in 16+ languages.",
  openGraph: {
    title: "How to Make a Scanned PDF Searchable with OCR | PDF.it Blog",
    description:
      "Turn scanned PDFs into searchable text with OCR.",
    url: "https://pdf.it.com/blog/scanned-pdf-searchable-ocr",
    siteName: "PDF.it",
    type: "article",
  },
  alternates: {
    canonical: "https://pdf.it.com/blog/scanned-pdf-searchable-ocr",
  },
}

export default function ScannedPdfSearchableOcrPage() {
  return (
    <div className="min-h-screen bg-[#0E0F1E]">
      <Header />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden bg-[#0E0F1E] text-white pt-24 pb-16">
          <div
            className="absolute inset-0 opacity-40"
            style={{
              background:
                "radial-gradient(ellipse at 20% 50%, rgba(10,74,92,0.5) 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, rgba(30,111,217,0.3) 0%, transparent 60%)",
            }}
          />
          <svg className="absolute inset-0 w-full h-full opacity-[0.03]" xmlns="http://www.w3.org/2000/svg">
            <filter id="grain-ocr">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-ocr)" />
          </svg>
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm mb-6"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Blog
              </Link>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-bold px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(20,216,196,0.1)",
                    border: "1px solid rgba(20,216,196,0.3)",
                    color: "#14D8C4",
                  }}
                >
                  Guide
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  February 12, 2025
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black mb-4">
                How to Make a Scanned PDF Searchable with OCR
              </h1>
              <p className="text-lg text-slate-300">
                Scanned PDFs are just images trapped in a PDF wrapper. OCR unlocks the text inside them,
                making your documents searchable, copyable, and infinitely more useful.
              </p>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                You scan a contract, a receipt, or an old document. The result is a PDF file, but try selecting
                any text in it — nothing happens. That is because scanned PDFs are essentially photographs.
                The file format is PDF, but the content is an image. You cannot search it, copy text from it,
                or highlight important sections. OCR changes that.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                What Is OCR and Why Do You Need It?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                OCR stands for Optical Character Recognition. It is a technology that analyzes the pixels in an
                image, identifies letter shapes, and converts them into actual text characters that a computer
                can understand. Without OCR, a scanned PDF is just a collection of pictures — your computer
                cannot distinguish the letter &quot;A&quot; from any other group of pixels.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                After OCR processing, the same PDF contains an invisible text layer underneath the original
                image. The document looks exactly the same, but now you can search for words, copy paragraphs,
                and even extract the full text content. This is what makes a scanned PDF &quot;searchable.&quot;
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Common Use Cases
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                OCR is not just a nice-to-have feature — it is essential for anyone who works with scanned
                documents regularly:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Receipts for expense reports:</strong> Scan paper receipts and make them searchable for expense tracking and tax preparation</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Contracts and legal filings:</strong> Search through lengthy contracts for specific clauses, dates, or dollar amounts — courts often require searchable PDFs for electronic filing</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Old archived documents:</strong> Digitize years of paper records into searchable, organized PDF files you can actually find later</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Lecture notes and textbooks:</strong> Extract text from scanned academic materials, journal articles, and historical documents for research</span>
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                How to OCR a PDF with PDF.it
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Making a scanned PDF searchable with PDF.it takes four simple steps:
              </p>
              <ol className="space-y-3 text-slate-600 mb-6 list-decimal list-inside">
                <li>
                  <strong>Upload your scanned PDF.</strong> Go to the{" "}
                  <Link href="/ocr-scanner" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    OCR Scanner
                  </Link>{" "}
                  tool and drag your file onto the upload area, or click to browse.
                </li>
                <li>
                  <strong>Choose the document language.</strong> Select the primary language of the text in your
                  scanned document. PDF.it supports 16+ languages to ensure accurate recognition.
                </li>
                <li>
                  <strong>Click Run OCR.</strong> The OCR engine analyzes every page, identifies text characters,
                  and builds a searchable text layer underneath the original image.
                </li>
                <li>
                  <strong>Download your searchable PDF.</strong> The result is a PDF that looks identical to the
                  original but now contains selectable, searchable, and copyable text.
                </li>
              </ol>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                16+ Languages Supported
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                PDF.it&apos;s OCR engine supports more than 16 languages, making it useful for multilingual offices and
                international teams. Whether your document is in English, Spanish, Portuguese, French, German,
                Italian, Dutch, Russian, Chinese, Japanese, Korean, Arabic, Hindi, Turkish, Polish, or Czech,
                the OCR engine can recognize and extract the text accurately.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                For best results, select the correct language before processing. Mixed-language documents work
                too, but accuracy is highest when you specify the primary language of the document.
              </p>

              {/* Pro Tip Callout */}
              <div
                className="rounded-2xl p-6 my-8"
                style={{
                  background: "linear-gradient(135deg, rgba(14,15,30,0.95), rgba(19,21,42,0.95))",
                  border: "1px solid rgba(20,216,196,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-2">Pro Tip: Clean Up Phone Scans First</h3>
                <p className="text-slate-300 leading-relaxed">
                  If your scan is from a phone camera, the image might have shadows, skewed angles, or uneven
                  lighting that hurt OCR accuracy. Run it through the{" "}
                  <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    Phone Scan Cleanup
                  </Link>{" "}
                  tool first to straighten the image, remove shadows, and enhance contrast. Then run OCR on the
                  cleaned-up version for significantly better text recognition results.
                </p>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Extract Just the Text
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Sometimes you do not need a searchable PDF at all — you just need the raw text. If you want to
                pull the text out of a scanned document and paste it into an email, spreadsheet, or report, use
                the{" "}
                <Link href="/pdf-to-txt" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  PDF to TXT
                </Link>{" "}
                tool instead. It extracts all text content from any PDF (including OCR-processed ones) and gives
                you a clean plain text file you can use anywhere.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                This is especially useful for researchers, journalists, and anyone who needs to quote or
                reference specific passages from scanned documents without dealing with PDF formatting.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                OCR Accuracy: What to Expect
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Modern OCR engines are highly accurate — typically 95-99% for cleanly printed documents. However,
                accuracy depends on several factors: image resolution, print quality, font style, and whether the
                document has handwriting. Typed text on a clean scan will produce near-perfect results. Faded
                documents, unusual fonts, or handwritten notes will have lower accuracy.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                For the best results, scan at 300 DPI or higher, ensure even lighting, and keep the document
                flat against the scanner glass. If you are using a phone camera, the{" "}
                <Link href="/phone-scan-cleanup" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  Phone Scan Cleanup
                </Link>{" "}
                tool can dramatically improve OCR accuracy by correcting perspective and enhancing contrast.
              </p>

              {/* Privacy Callout */}
              <div
                className="rounded-2xl p-6 my-8"
                style={{
                  background: "linear-gradient(135deg, rgba(14,15,30,0.95), rgba(19,21,42,0.95))",
                  border: "1px solid rgba(20,216,196,0.2)",
                }}
              >
                <div className="flex items-start gap-3">
                  <Shield className="h-5 w-5 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                  <div>
                    <h3 className="text-lg font-bold text-white mb-2">Your Documents Stay Private</h3>
                    <p className="text-slate-300 leading-relaxed">
                      PDF.it processes your scanned documents securely and deletes all files immediately after
                      download. We never store, read, or share your content. Your sensitive receipts, contracts,
                      and legal documents are safe.
                    </p>
                  </div>
                </div>
              </div>
            </article>
          </div>
        </section>

        {/* Related Tools */}
        <section className="relative overflow-hidden bg-[#0E0F1E] py-16">
          <div
            className="absolute inset-0 opacity-30"
            style={{
              background:
                "radial-gradient(ellipse at 30% 50%, rgba(10,74,92,0.5) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(30,111,217,0.4) 0%, transparent 50%)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-black text-white mb-8 text-center">Try These Tools</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { href: "/ocr-scanner", icon: ScanLine, title: "OCR Scanner", desc: "Turn scanned PDFs and images into searchable, selectable text" },
                  { href: "/phone-scan-cleanup", icon: Smartphone, title: "Phone Scan Cleanup", desc: "Fix shadows, angles, and lighting on phone camera scans" },
                  { href: "/pdf-to-txt", icon: FileText, title: "PDF to TXT", desc: "Extract all text from any PDF into a plain text file" },
                  { href: "/compress-pdf", icon: FileDown, title: "Compress PDF", desc: "Reduce any PDF file size with Light, Medium, or Extreme compression" },
                ].map((tool) => (
                  <Link key={tool.href} href={tool.href} className="group">
                    <div
                      className="rounded-2xl p-[1px] h-full"
                      style={{
                        background: "linear-gradient(135deg, rgba(20,216,196,0.3), rgba(30,111,217,0.2), rgba(232,129,58,0.15))",
                      }}
                    >
                      <div
                        className="rounded-2xl p-5 h-full transition-all duration-300 group-hover:-translate-y-1"
                        style={{ background: "rgba(255,255,255,0.05)", backdropFilter: "blur(12px)" }}
                      >
                        <tool.icon className="h-6 w-6 text-[#14D8C4] mb-3" />
                        <h3 className="font-bold text-white mb-1 group-hover:text-[#14D8C4] transition-colors">
                          {tool.title}
                        </h3>
                        <p className="text-sm text-slate-400">{tool.desc}</p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto text-center">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Make Your Scanned PDFs Searchable</h2>
              <p className="text-slate-600 mb-6">
                Upload a scanned document and get a searchable PDF in seconds. No signup required.
              </p>
              <Link
                href="/ocr-scanner"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold text-white transition-all duration-200 hover:brightness-110"
                style={{ background: "linear-gradient(135deg, #14D8C4, #0A4A5C)" }}
              >
                Start OCR for Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Privacy Footer */}
        <section className="bg-[#0E0F1E] py-8 border-t border-white/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-slate-500 text-sm">
              <Shield className="h-4 w-4" />
              Your documents are never stored. Files deleted immediately after download.
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
