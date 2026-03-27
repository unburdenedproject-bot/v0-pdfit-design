import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft, Shield, FileDown, Mail, Scissors, Upload } from "lucide-react"

export const metadata = {
  title: "How to Compress a PDF for Email Attachments | PDF.it Blog",
  description:
    "Learn how to reduce PDF file size to fit Gmail (25MB), Outlook (20MB), and Yahoo (25MB) attachment limits. Step-by-step guide with compression tips.",
  openGraph: {
    title: "How to Compress a PDF for Email Attachments | PDF.it Blog",
    description: "Reduce PDF file size for email attachments. Step-by-step guide.",
    url: "https://pdf.it.com/blog/compress-pdf-email",
    siteName: "PDF.it",
    type: "article",
  },
  alternates: { canonical: "https://pdf.it.com/blog/compress-pdf-email" },
}

export default function CompressPdfEmailPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Header />
      <main>
        {/* Hero */}
        <section
          className="relative text-white py-16 overflow-hidden"
          style={{ backgroundColor: "#0E0F1E" }}
        >
          {/* Radial gradients */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 60% 50% at 20% 50%, rgba(20,216,196,0.08), transparent), radial-gradient(ellipse 50% 60% at 80% 30%, rgba(107,124,255,0.06), transparent)",
            }}
          />
          {/* Grain overlay */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.03] pointer-events-none">
            <filter id="grain">
              <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain)" />
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
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[rgba(20,216,196,0.15)] text-[#14D8C4] border border-[rgba(20,216,196,0.3)]">
                  Guide
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  October 5, 2024
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black">
                How to Compress a PDF for Email Attachments
              </h1>
              <p className="text-slate-300 mt-4 text-lg leading-relaxed">
                Your PDF is too large to send. Here is how to shrink it in seconds and land in any inbox.
              </p>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Why Your PDF Gets Rejected by Email
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Every email provider enforces a maximum attachment size. Gmail caps attachments at 25MB.
                Outlook limits you to 20MB. Yahoo Mail allows up to 25MB. If your PDF exceeds these
                limits, your email bounces back or the attachment gets stripped entirely &mdash; and the
                recipient never sees your file.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The biggest offenders are scanned documents and image-heavy PDFs. A single scanned page
                can weigh 5&ndash;10MB because scanners save pages as high-resolution images embedded
                inside the PDF. A 10-page scanned contract can easily hit 50MB or more. Presentations
                converted to PDF, design mockups, and photo-rich reports run into the same problem. The
                good news: most of that file size can be reduced without visible quality loss.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                How to Compress a PDF with PDF.it
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Compressing a PDF for email takes three steps:
              </p>
              <ol className="list-decimal list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Upload your PDF.</strong> Go to the{" "}
                  <Link href="/compress-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    Compress PDF
                  </Link>{" "}
                  tool and drag your file into the upload area, or click to browse. Files up to 200MB
                  are supported on Pro plans and above.
                </li>
                <li>
                  <strong>Choose your compression level.</strong> Pick Light, Medium, or Extreme
                  depending on how much you need to reduce the file size. The tool shows the estimated
                  output size before you compress.
                </li>
                <li>
                  <strong>Download the compressed PDF.</strong> Your smaller file is ready in seconds.
                  Attach it to your email and send.
                </li>
              </ol>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Understanding Compression Levels
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Not every PDF needs the same treatment. PDF.it offers three compression levels so you
                can balance quality and file size:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Light compression</strong> &mdash; best quality, minimal size reduction. Use
                  this for documents with charts, diagrams, or fine print where visual clarity matters.
                  Typical reduction: 20&ndash;40%.
                </li>
                <li>
                  <strong>Medium compression</strong> &mdash; balanced. Images are resampled to a
                  reasonable resolution while text stays crisp. This is the best option for most email
                  attachments. Typical reduction: 40&ndash;60%.
                </li>
                <li>
                  <strong>Extreme compression</strong> &mdash; maximum file size reduction. Images are
                  aggressively downsampled. Use this when you need to squeeze a large file under a tight
                  limit and image quality is secondary. Typical reduction: 60&ndash;80%.
                </li>
              </ul>
              <p className="text-slate-600 mb-4 leading-relaxed">
                For most email attachments, Medium compression is the sweet spot. It keeps your document
                readable while getting the file well under the 20&ndash;25MB limit.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                What If My PDF Is Still Too Large?
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Sometimes a PDF is so large that even extreme compression is not enough. Here are three
                alternatives:
              </p>
              <ul className="list-disc list-inside space-y-2 text-slate-600 mb-4">
                <li>
                  <strong>Split it into parts.</strong> Use the{" "}
                  <Link href="/split-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    Split PDF
                  </Link>{" "}
                  tool to break a large document into smaller sections. Send each part as a separate
                  attachment or in follow-up emails.
                </li>
                <li>
                  <strong>Compress specifically for email.</strong> The{" "}
                  <Link href="/compress-pdf-for-email" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    Compress PDF for Email
                  </Link>{" "}
                  tool is tuned to hit email-safe sizes automatically. It targets the common
                  20&ndash;25MB ceiling so you do not have to guess which compression level to pick.
                </li>
                <li>
                  <strong>Use Upload-Ready PDF for portals.</strong> If you are uploading to a web
                  portal instead of attaching to an email, the{" "}
                  <Link href="/upload-ready-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                    Upload-Ready PDF
                  </Link>{" "}
                  tool optimizes your file for online form submissions with strict size requirements.
                </li>
              </ul>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Your Files Stay Private
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Privacy is not optional. When you compress a PDF with PDF.it, your file is processed
                over an SSL-encrypted connection and deleted immediately after you download the result.
                We never store your documents on our servers. No one at PDF.it can access your
                files &mdash; not during processing, not after. Your data is yours.
              </p>

              {/* Back to Blog */}
              <div className="mt-12 pt-8 border-t border-slate-200">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 text-[#14D8C4] hover:text-[#2EE6D6] font-medium"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </section>

        {/* Related Tools */}
        <section
          className="relative py-16 overflow-hidden"
          style={{ backgroundColor: "#0E0F1E" }}
        >
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(20,216,196,0.06), transparent)",
            }}
          />
          <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-black text-white text-center mb-10">Related Tools</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
              {[
                {
                  title: "Compress PDF",
                  description: "Reduce PDF file size with adjustable compression levels.",
                  href: "/compress-pdf",
                  icon: FileDown,
                },
                {
                  title: "Compress for Email",
                  description: "Optimize your PDF to fit email attachment limits.",
                  href: "/compress-pdf-for-email",
                  icon: Mail,
                },
                {
                  title: "Split PDF",
                  description: "Break large PDFs into smaller, sendable parts.",
                  href: "/split-pdf",
                  icon: Scissors,
                },
                {
                  title: "Upload-Ready PDF",
                  description: "Prepare PDFs for web portals with strict size limits.",
                  href: "/upload-ready-pdf",
                  icon: Upload,
                },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group rounded-2xl p-6 border border-white/10 bg-white/[0.03] backdrop-blur-sm hover:bg-white/[0.07] hover:border-[rgba(20,216,196,0.3)] transition-all duration-300"
                >
                  <tool.icon className="h-8 w-8 text-[#14D8C4] mb-3" />
                  <h3 className="text-white font-bold mb-1">{tool.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{tool.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Privacy Footer */}
        <section
          className="py-10 border-t border-white/5"
          style={{ backgroundColor: "#0E0F1E" }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-center gap-2 text-slate-400 text-sm">
              <Shield className="h-4 w-4" />
              <span>Files deleted immediately after download.</span>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
