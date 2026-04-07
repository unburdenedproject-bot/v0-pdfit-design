import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Password-Protect a PDF Online (Step-by-Step) | PDF.it",
  description:
    "Learn how to add password protection to any PDF online. Step-by-step guide covering open passwords, permission passwords, and encryption levels — free, no software needed.",
  keywords: "password protect pdf, add password to pdf, lock pdf with password, secure pdf online",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I password-protect a PDF for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your PDF to PDF.it's Protect PDF tool, enter a password, choose your encryption level, and click Protect. Download the locked file — no signup required for your first 3 files." }
    },
    {
      "@type": "Question",
      "name": "What is the difference between an open password and a permissions password?",
      "acceptedAnswer": { "@type": "Answer", "text": "An open password (user password) prevents anyone from opening the PDF without the password. A permissions password (owner password) lets people open the file but restricts actions like printing, copying, or editing." }
    },
    {
      "@type": "Question",
      "name": "Can I remove the password from a protected PDF later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. If you know the password, you can use PDF.it's Unlock PDF tool to remove the password and create an unprotected copy of the file." }
    },
    {
      "@type": "Question",
      "name": "What encryption level should I choose?",
      "acceptedAnswer": { "@type": "Answer", "text": "For most purposes, 128-bit AES encryption is sufficient. For highly sensitive documents like legal or financial files, choose 256-bit AES encryption for maximum security." }
    },
    {
      "@type": "Question",
      "name": "Will password-protecting a PDF change its contents?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Password protection adds an encryption layer around the file but does not alter the content, formatting, or layout of your PDF in any way." }
    },
    {
      "@type": "Question",
      "name": "Can I password-protect a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in any mobile browser. Upload your PDF, set a password, and download the protected file directly on your phone — no app needed." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Password-Protect a PDF Online",
  "description": "Add password protection to any PDF in 3 simple steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your PDF",
      "text": "Go to PDF.it's Protect PDF tool and upload the file you want to protect by clicking or dragging it into the upload area."
    },
    {
      "@type": "HowToStep",
      "name": "Set your password and options",
      "text": "Enter a strong password and choose your encryption level. Optionally set a permissions password to restrict printing, copying, or editing."
    },
    {
      "@type": "HowToStep",
      "name": "Download the protected PDF",
      "text": "Click Protect PDF and download your password-locked file. Share it securely — only people with the password can open it."
    }
  ]
}

export default function HowToPasswordProtectPDFPage() {
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Protect PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Password-Protect a PDF Online (Step-by-Step)</h1>
              <p className="text-xl text-slate-300">
                Need to lock a PDF so only authorized people can open it? Whether you are sharing contracts, financial records, or personal documents — here is how to add password protection in seconds.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to protect? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Protect PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why password-protect */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Should Password-Protect Your PDFs</h2>
              <p className="text-slate-600 mb-4">
                PDFs are the standard format for sharing important documents, but sending them unprotected is like mailing an unsealed envelope. Here are common situations where password protection is essential:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Contracts and legal documents.</strong> Protect signed agreements from unauthorized access. A password ensures only the intended parties can view the document.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Financial records.</strong> Tax returns, invoices, and bank statements contain sensitive data that should never be shared without encryption.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Medical documents.</strong> Patient records and insurance claims are protected by privacy regulations. Adding a password helps maintain compliance.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Employee files and HR documents.</strong> Offer letters, performance reviews, and payroll information should be locked before sending internally.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Intellectual property.</strong> Draft manuscripts, business plans, and design specs need protection when shared with external reviewers.</span>
                </li>
              </ul>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Password-Protect a PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your PDF file",
                    desc: "Go to the Protect PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Set your password and encryption options",
                    desc: "Enter a strong password. Choose between an open password (required to open the file) or a permissions password (restricts printing, copying, and editing). Select your preferred encryption level — 128-bit or 256-bit AES.",
                  },
                  {
                    title: "Download the protected PDF",
                    desc: "Click Protect PDF and your encrypted file will be ready to download in seconds. Share the password separately with the intended recipient — never include the password in the same email as the file.",
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

            {/* Types of passwords */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Open Password vs. Permissions Password</h2>
              <p className="text-slate-600 mb-4">
                PDF security supports two distinct types of passwords, and understanding the difference is critical for choosing the right protection:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Open Password (User Password)</h3>
                  <p className="text-slate-600">
                    This is the most common type. An open password completely locks the PDF — nobody can view a single page without entering the correct password first. Use this when the contents of the document are confidential and only specific people should see them at all.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Permissions Password (Owner Password)</h3>
                  <p className="text-slate-600">
                    A permissions password lets anyone open and read the PDF, but restricts what they can do with it. You can prevent printing, copying text, editing, or extracting pages. This is ideal when you want people to read a document but not modify or redistribute it. For example, a company handbook that employees can read but should not alter.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Using Both Together</h3>
                  <p className="text-slate-600">
                    For maximum security, you can set both an open password and a permissions password. The viewer needs the open password to access the file, and even then, they cannot print or copy text unless they also have the permissions password. PDF.it's <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF tool</Link> supports both options.
                  </p>
                </div>
              </div>
            </section>

            {/* Encryption levels */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Understanding Encryption Levels</h2>
              <p className="text-slate-600 mb-4">
                When you protect a PDF, the encryption level determines how strong the lock is. Here is what each level means:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>128-bit AES.</strong> Strong encryption suitable for most business and personal documents. Fast processing and compatible with all modern PDF readers.</li>
                <li>&#10003; <strong>256-bit AES.</strong> The strongest encryption available. Use this for highly sensitive files like legal contracts, financial records, or medical data. Takes slightly longer to process but provides military-grade security.</li>
                <li>&#10003; <strong>40-bit RC4 (legacy).</strong> An older standard that some tools still offer. Not recommended — it can be cracked with modern hardware. Always choose AES encryption instead.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                For more on choosing strong passwords and setting the right permissions, read our guide on <Link href="/learn/pdf-password-best-practices" className="text-[#14D8C4] hover:underline">PDF password best practices</Link>.
              </p>
            </section>

            {/* After protecting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Protecting Your PDF</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF is locked, here are some additional steps to ensure everything goes smoothly:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Test the password.</strong> Open the protected file yourself and enter the password to confirm it works correctly before sending.</li>
                <li>&#10003; <strong>Share the password separately.</strong> Send the PDF via email and the password via text message or a phone call. Never put both in the same message.</li>
                <li>&#10003; <strong>Compress if needed.</strong> Encryption adds minimal overhead, but if the file was already large, use <Link href="/compress-pdf" className="text-[#14D8C4] hover:underline">Compress PDF</Link> before or after protecting.</li>
                <li>&#10003; <strong>Flatten first for extra security.</strong> If your PDF has form fields or annotations, <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">flatten the PDF</Link> before protecting to prevent hidden data from being extracted.</li>
                <li>&#10003; <strong>Need to remove the password later?</strong> Use <Link href="/unlock-pdf" className="text-[#14D8C4] hover:underline">Unlock PDF</Link> to create an unprotected copy when you need to share the file more broadly.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Lock Your PDF?</h2>
            <p className="text-slate-300 mb-6">Upload your file and add password protection in seconds — free, no signup required.</p>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Lock className="h-5 w-5" /> Protect PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "PDF Password Best Practices (Strong Passwords & Permissions)", href: "/learn/pdf-password-best-practices" },
                { title: "How to Protect a PDF Before Sending by Email", href: "/learn/protect-pdf-before-sending" },
                { title: "Password-Protect a PDF on Your Phone (iPhone & Android)", href: "/learn/protect-pdf-on-mobile" },
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
                { q: "How do I password-protect a PDF for free?", a: "Upload your PDF to PDF.it's Protect PDF tool, enter a password, choose your encryption level, and click Protect. Download the locked file — no signup required for your first 3 files." },
                { q: "What is the difference between an open password and a permissions password?", a: "An open password (user password) prevents anyone from opening the PDF without the password. A permissions password (owner password) lets people open the file but restricts actions like printing, copying, or editing." },
                { q: "Can I remove the password from a protected PDF later?", a: "Yes. If you know the password, you can use PDF.it's Unlock PDF tool to remove the password and create an unprotected copy of the file." },
                { q: "What encryption level should I choose?", a: "For most purposes, 128-bit AES encryption is sufficient. For highly sensitive documents like legal or financial files, choose 256-bit AES encryption for maximum security." },
                { q: "Will password-protecting a PDF change its contents?", a: "No. Password protection adds an encryption layer around the file but does not alter the content, formatting, or layout of your PDF in any way." },
                { q: "Can I password-protect a PDF on my phone?", a: "Yes. PDF.it works in any mobile browser. Upload your PDF, set a password, and download the protected file directly on your phone — no app needed." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
