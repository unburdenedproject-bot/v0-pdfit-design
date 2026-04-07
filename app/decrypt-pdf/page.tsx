import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Decrypt PDF Online — Remove PDF Encryption | PDF.it",
  description:
    "Decrypt a password-protected PDF with PDF.it. Enter the password to remove encryption and download an unprotected file — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between decrypting and unlocking a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "They are the same thing. Decrypting a PDF means removing its password-based encryption so the file can be opened without entering a password. PDF.it's Unlock PDF tool performs this exact operation." }
    },
    {
      "@type": "Question",
      "name": "Do I need the password to decrypt a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it requires you to enter the correct password to decrypt the file. It does not crack, bypass, or brute-force passwords — this ensures only authorized users can remove encryption." }
    },
    {
      "@type": "Question",
      "name": "Is decrypting a PDF safe?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Your files are processed securely and deleted from PDF.it servers after your session ends. We never store your passwords or share your documents." }
    },
    {
      "@type": "Question",
      "name": "Will decrypting a PDF change its content?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Decryption removes the password requirement without altering the content, images, formatting, or quality of the PDF. The document remains identical." }
    },
    {
      "@type": "Question",
      "name": "Can I decrypt a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers on iPhone and Android. Upload your encrypted PDF, enter the password, and download the decrypted file — no app installation needed." }
    },
    {
      "@type": "Question",
      "name": "Can I re-encrypt a PDF after decrypting it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. After decrypting your PDF, you can use PDF.it's Protect PDF tool to add a new password. This is useful if you want to change the password or share the file with a different recipient." }
    }
  ]
}

export default function DecryptPdfPage() {
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
                <Unlock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Decrypt PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Remove encryption from a password-protected PDF. Enter the password you already know, and PDF.it will strip the encryption so your file opens freely — no password prompts, no restrictions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Instant Decryption</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <UnlockPdfInterface />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Encrypted PDFs require a password every time you open them. If you have the password and want to remove the encryption permanently, PDF.it makes it simple — upload, enter the password, and download a clean, unencrypted copy of your document.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remove PDF encryption permanently</li>
              <li>✓ Content, formatting, and quality fully preserved</li>
              <li>✓ Requires the correct password — no bypassing</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — decrypt PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Decrypt PDFs for Editing and Annotation</h2>
              <p className="text-slate-600">
                Encrypted PDFs often block editing, form filling, and annotation. Decrypt the file to regain full access — highlight text, add comments, fill out forms, and make changes without restrictions.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove Encryption for Long-Term Archival</h2>
              <p className="text-slate-600">
                Passwords get lost over time. If you have old encrypted PDFs and still know the passwords, decrypt them now for safe archival. Storing unencrypted copies ensures you can always access your documents in the future.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Decrypt Shared Documents for Team Access</h2>
              <p className="text-slate-600">
                When a colleague sends an encrypted PDF and the whole team needs access, decrypt it once and share the unprotected version internally. This saves everyone from entering the password individually.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Decrypt a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your encrypted PDF into PDF.it.",
                "Enter the current password when prompted.",
                "Click Unlock PDF — the encryption is removed instantly.",
                "Download your decrypted PDF and use it without restrictions.",
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
                { name: "Unlock PDF", href: "/unlock-pdf", desc: "Remove PDF passwords" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
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
                { q: "What is the difference between decrypting and unlocking a PDF?", a: "They are the same thing. Decrypting a PDF means removing its password-based encryption so the file can be opened without entering a password. PDF.it's Unlock PDF tool performs this exact operation." },
                { q: "Do I need the password to decrypt a PDF?", a: "Yes. PDF.it requires you to enter the correct password to decrypt the file. It does not crack, bypass, or brute-force passwords — this ensures only authorized users can remove encryption." },
                { q: "Is decrypting a PDF safe?", a: "Yes. Your files are processed securely and deleted from PDF.it servers after your session ends. We never store your passwords or share your documents." },
                { q: "Will decrypting a PDF change its content?", a: "No. Decryption removes the password requirement without altering the content, images, formatting, or quality of the PDF. The document remains identical." },
                { q: "Can I decrypt a PDF on my phone?", a: "Yes. PDF.it works in mobile browsers on iPhone and Android. Upload your encrypted PDF, enter the password, and download the decrypted file — no app installation needed." },
                { q: "Can I re-encrypt a PDF after decrypting it?", a: "Yes. After decrypting your PDF, you can use PDF.it's Protect PDF tool to add a new password. This is useful if you want to change the password or share the file with a different recipient." },
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
