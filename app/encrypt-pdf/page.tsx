import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Encrypt PDF Online — Add Password Protection to PDF | PDF.it",
  description:
    "Encrypt a PDF with password protection using PDF.it. Secure your documents with encryption before sharing or uploading — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What encryption does PDF.it use to protect PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it uses industry-standard AES encryption to protect your PDF files. This is the same encryption standard used by banks and government agencies to secure sensitive data." }
    },
    {
      "@type": "Question",
      "name": "How do I open an encrypted PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Anyone who receives the encrypted PDF will need to enter the password you set in order to open it. Standard PDF readers like Adobe Acrobat, Preview, and Chrome's built-in viewer all support password-protected PDFs." }
    },
    {
      "@type": "Question",
      "name": "Can I remove the encryption later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use PDF.it's Unlock PDF tool to remove the password protection. You will need to enter the current password to decrypt the file." }
    },
    {
      "@type": "Question",
      "name": "Will encrypting a PDF change its content or quality?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Encryption adds password protection without altering the content, layout, images, or quality of your PDF. The document remains identical — it just requires a password to open." }
    },
    {
      "@type": "Question",
      "name": "Can I encrypt a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers on iPhone and Android. Upload your PDF, set a password, and download the encrypted file — no app required." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to encrypt PDFs with PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your files are processed securely and deleted from our servers after your session ends. We never store your passwords or share your documents." }
    }
  ]
}

export default function EncryptPdfPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Encrypt PDF with Password</h1>
              <p className="text-xl text-slate-300 mb-8">
                Secure sensitive documents with password encryption before sharing or uploading. Set a password and only authorized recipients will be able to open your PDF.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>AES Encryption</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProtectPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Sending sensitive documents by email or uploading them to shared platforms? Encrypt your PDF with a password first. PDF.it adds industry-standard encryption so only people with the password can open your file — protecting contracts, financial records, medical documents, and more.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Add strong password encryption to any PDF</li>
              <li>✓ Industry-standard AES encryption</li>
              <li>✓ Content, formatting, and quality fully preserved</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — encrypt PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Encrypt PDFs Before Sending by Email</h2>
              <p className="text-slate-600">
                Email is not secure by default. Before attaching sensitive contracts, tax documents, or personal records, encrypt them with a password. Share the password separately via text or phone call for maximum security.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Secure Confidential Reports and Financial Documents</h2>
              <p className="text-slate-600">
                Financial statements, audit reports, and internal memos contain information that should only be seen by authorized eyes. Encrypt these PDFs before uploading to cloud storage or sharing with stakeholders.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protect Legal Documents with Encryption</h2>
              <p className="text-slate-600">
                Contracts, NDAs, and legal agreements require confidentiality. Adding password encryption ensures that only the intended parties can access the document, even if the file is intercepted or forwarded.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Encrypt a PDF with a Password</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your PDF into PDF.it.",
                "Enter a strong password to protect your document.",
                "Click Protect PDF — encryption is applied instantly.",
                "Download your encrypted PDF and share it securely.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Unlock PDF", href: "/unlock-pdf", desc: "Remove PDF passwords" },
                { name: "Watermark PDF", href: "/watermark-pdf", desc: "Add visual watermarks" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Flatten form fields" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "What encryption does PDF.it use to protect PDFs?", a: "PDF.it uses industry-standard AES encryption to protect your PDF files. This is the same encryption standard used by banks and government agencies to secure sensitive data." },
                { q: "How do I open an encrypted PDF?", a: "Anyone who receives the encrypted PDF will need to enter the password you set in order to open it. Standard PDF readers like Adobe Acrobat, Preview, and Chrome's built-in viewer all support password-protected PDFs." },
                { q: "Can I remove the encryption later?", a: "Yes. Use PDF.it's Unlock PDF tool to remove the password protection. You will need to enter the current password to decrypt the file." },
                { q: "Will encrypting a PDF change its content or quality?", a: "No. Encryption adds password protection without altering the content, layout, images, or quality of your PDF. The document remains identical — it just requires a password to open." },
                { q: "Can I encrypt a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers on iPhone and Android. Upload your PDF, set a password, and download the encrypted file — no app required." },
                { q: "Is it safe to encrypt PDFs with PDF.it?", a: "Yes. Your files are processed securely and deleted from our servers after your session ends. We never store your passwords or share your documents." },
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
