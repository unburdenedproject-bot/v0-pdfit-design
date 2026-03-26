import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Calendar, ArrowLeft, Shield, Lock, EyeOff, Stamp, FileCheck } from "lucide-react"

export const metadata = {
  title: "How to Protect Sensitive Documents Before Sharing | PDF.it Blog",
  description:
    "Three layers of PDF security: password protection, permanent redaction, and watermarking. Learn when to use each to keep sensitive data safe before sharing.",
  openGraph: {
    title: "How to Protect Sensitive Documents Before Sharing | PDF.it Blog",
    description:
      "Password protection, redaction, and watermarking for PDF security.",
    url: "https://pdf.it.com/blog/protect-sensitive-documents",
    siteName: "PDF.it",
    type: "article",
  },
  alternates: {
    canonical: "https://pdf.it.com/blog/protect-sensitive-documents",
  },
}

export default function ProtectSensitiveDocumentsPage() {
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
            <filter id="grain-protect">
              <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
            </filter>
            <rect width="100%" height="100%" filter="url(#grain-protect)" />
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
                  Security
                </span>
                <div className="flex items-center gap-1.5 text-sm text-slate-400">
                  <Calendar className="h-3.5 w-3.5" />
                  April 20, 2026
                </div>
              </div>
              <h1 className="text-3xl sm:text-4xl font-black mb-4">
                How to Protect Sensitive Documents Before Sharing
              </h1>
              <p className="text-lg text-slate-300">
                Password protection, permanent redaction, and watermarking — three layers of PDF security
                that keep confidential data safe every time you share a file.
              </p>
            </div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-[#F3F4FF] py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <article className="max-w-3xl mx-auto">
              <p className="text-slate-600 mb-4 leading-relaxed text-lg">
                Every day, professionals share PDFs containing Social Security numbers, financial statements,
                medical records, and legal case details. Most of the time, those files leave the sender&apos;s
                hands with zero protection. That is a risk you can eliminate in under a minute.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Why Document Security Matters
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                A single exposed document can trigger identity theft, compliance violations, or legal
                liability. If your PDF contains any of the following, it needs protection before it leaves
                your device:
              </p>
              <ul className="space-y-2 text-slate-600 mb-6">
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Social Security or tax ID numbers</strong></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Financial data</strong> — bank statements, invoices, salary information</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Medical records</strong> — patient information protected under HIPAA</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#14D8C4] font-bold mt-0.5">&#10003;</span>
                  <span><strong>Legal case details</strong> — privileged communications, court filings</span>
                </li>
              </ul>
              <p className="text-slate-600 mb-4 leading-relaxed">
                The good news is that PDF.it gives you three distinct layers of security, and you can combine
                all of them on the same file. Here is when and how to use each one.
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Layer 1: Password Protection
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Password protection is the simplest form of access control. When you protect a PDF with a
                password, anyone who receives the file must enter the correct password before they can open
                it. Without it, the file is unreadable.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                This is ideal for confidential reports, client documents, and internal files that should only
                be viewed by specific people. Send the PDF in one channel and the password in another — for
                example, email the file and text the password — so a single interception does not expose the
                content.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>Best for:</strong> sharing confidential reports, client deliverables, and internal
                company files.{" "}
                <Link href="/protect-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  Protect your PDF with a password now
                </Link>
                .
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Layer 2: Permanent Redaction
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Redaction goes further than password protection. Instead of restricting who can open the file,
                redaction permanently deletes sensitive information from the document itself. This is not the
                same as placing a black box over text in a word processor — true PDF redaction removes the
                underlying data entirely. The redacted text cannot be selected, copied, searched, or recovered
                by anyone, ever.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Redaction is essential when you need to share a document but must hide specific details —
                Social Security numbers in an HR file, account numbers in a financial statement, or patient
                names in a medical record. Courts, government agencies, and healthcare organizations rely on
                redaction to meet HIPAA, FOIA, and other regulatory requirements.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>Best for:</strong> legal filings, HR records, medical documents, and HIPAA
                compliance.{" "}
                <Link href="/pdf-redaction" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  Redact sensitive data from your PDF
                </Link>
                .
              </p>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Layer 3: Watermarking
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Watermarking adds visible text across every page of your PDF — words like CONFIDENTIAL,
                DRAFT, or DO NOT COPY — or your company logo. A watermark does not prevent someone from
                opening the file, but it serves as a clear visual deterrent against unauthorized sharing
                or redistribution.
              </p>
              <p className="text-slate-600 mb-4 leading-relaxed">
                Watermarks also create accountability. If a watermarked document leaks, the visible marking
                makes it obvious that the file was meant to be controlled. This is especially useful for
                proposals, contracts under negotiation, and internal drafts that should not be forwarded
                outside your organization.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                <strong>Best for:</strong> proposals, contracts, internal drafts, and any document you want
                to mark as controlled.{" "}
                <Link href="/watermark-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  Add a watermark to your PDF
                </Link>
                .
              </p>

              {/* Comparison Callout */}
              <div
                className="rounded-2xl p-6 my-8"
                style={{
                  background: "linear-gradient(135deg, rgba(14,15,30,0.95), rgba(19,21,42,0.95))",
                  border: "1px solid rgba(20,216,196,0.2)",
                }}
              >
                <h3 className="text-lg font-bold text-white mb-4">When to Use Each Method</h3>
                <ul className="space-y-3 text-slate-300">
                  <li className="flex items-start gap-3">
                    <Lock className="h-5 w-5 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Password Protection</strong> — Controls <em>who</em> can open the file. Use when the entire document is confidential.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <EyeOff className="h-5 w-5 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Redaction</strong> — Removes <em>what</em> is visible. Use when you must share the document but hide specific data.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Stamp className="h-5 w-5 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span><strong className="text-white">Watermarking</strong> — Deters unauthorized sharing. Use when you want recipients to know the document is controlled.</span>
                  </li>
                </ul>
                <p className="text-slate-400 mt-4 text-sm">
                  You can combine all three on the same PDF for maximum protection.
                </p>
              </div>

              <h2 className="text-2xl font-black text-slate-900 mb-4 mt-10">
                Flatten Before Sharing
              </h2>
              <p className="text-slate-600 mb-4 leading-relaxed">
                After you have applied your security layers, there is one more step worth taking: flatten
                the PDF. Flattening permanently locks all form fields, annotations, and interactive elements
                into the page. This means nobody can edit a filled-in form, move an annotation, or tamper
                with the document after you send it.
              </p>
              <p className="text-slate-600 mb-6 leading-relaxed">
                Think of flattening as sealing an envelope. The content is final.{" "}
                <Link href="/flatten-pdf" className="text-[#14D8C4] hover:text-[#2EE6D6] font-medium">
                  Flatten your PDF before sharing
                </Link>
                .
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
                    <h3 className="text-lg font-bold text-white mb-2">PDF.it Never Stores Your Files</h3>
                    <p className="text-slate-300 leading-relaxed">
                      Privacy is the foundation of every PDF.it tool. Your files are processed in memory and
                      deleted immediately after you download the result. All transfers are encrypted with SSL.
                      We never read, analyze, or share your content — because a security tool that is not
                      private is not secure.
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
                  { href: "/protect-pdf", icon: Lock, title: "Protect PDF", desc: "Add password protection to control who can open your document" },
                  { href: "/pdf-redaction", icon: EyeOff, title: "PDF Redaction", desc: "Permanently remove sensitive text, numbers, and data from any PDF" },
                  { href: "/watermark-pdf", icon: Stamp, title: "Watermark PDF", desc: "Add CONFIDENTIAL, DRAFT, or your logo across every page" },
                  { href: "/flatten-pdf", icon: FileCheck, title: "Flatten PDF", desc: "Lock form fields and annotations permanently before sharing" },
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
