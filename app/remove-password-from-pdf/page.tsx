import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remove Password from PDF Online — Unlock Protected PDFs | PDF.it",
  description:
    "Remove password protection from a PDF with PDF.it. Enter the password, unlock your file, and download an unprotected PDF — fast, free, and browser-based.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Is it legal to remove a password from a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, as long as you are the owner of the document or have authorization to access it. PDF.it requires you to enter the correct password before removing protection — it does not bypass or crack passwords." }
    },
    {
      "@type": "Question",
      "name": "Do I need to know the password to remove it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it requires you to enter the current password to unlock the PDF. It cannot remove passwords you don't know — this ensures your use is authorized." }
    },
    {
      "@type": "Question",
      "name": "Will removing the password affect the quality of my PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Removing password protection does not alter the content, formatting, or quality of your PDF. The file remains identical — only the password restriction is removed." }
    },
    {
      "@type": "Question",
      "name": "Can I remove passwords from multiple PDFs at once?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it Pro supports batch processing, so you can unlock multiple password-protected PDFs in one session. Free users can process one file at a time." }
    },
    {
      "@type": "Question",
      "name": "Can I remove a PDF password on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers on iPhone and Android — upload your PDF, enter the password, and download the unlocked file." }
    },
    {
      "@type": "Question",
      "name": "What happens to my file after I remove the password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Your files are processed securely and deleted from PDF.it servers after your session ends. We never store or share your documents." }
    }
  ]
}

export default function RemovePasswordFromPdfPage() {
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
                <Unlock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remove Password from PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Enter the password you already know, and PDF.it will remove the protection so you can freely share, edit, and print your PDF without restrictions.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Unlock</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
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
              Password-protected PDFs are great for security, but they can become a hassle when you need to share, print, or edit the file freely. PDF.it lets you remove the password from any PDF — as long as you know the current password — so you can work with your document without restrictions.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remove password protection in seconds</li>
              <li>✓ Original content, formatting, and quality preserved</li>
              <li>✓ Requires the correct password — no cracking or bypassing</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — unlock PDFs directly in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove Restrictions for Easy Sharing</h2>
              <p className="text-slate-600">
                Need to share a PDF with colleagues or clients but don't want them to deal with entering a password every time? Remove the password and share an unrestricted version that anyone can open instantly.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Unlock PDFs for Editing and Printing</h2>
              <p className="text-slate-600">
                Some password-protected PDFs restrict editing, copying text, or printing. By removing the password, you regain full control over your document — annotate, fill forms, extract pages, and print freely.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove Outdated Passwords from Old Files</h2>
              <p className="text-slate-600">
                Over time, password-protected files pile up and remembering each password becomes a chore. If you still have the password, remove it now so you can archive and access your documents without hassle in the future.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Remove a Password from a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload or drag and drop your password-protected PDF into PDF.it.",
                "Enter the current password when prompted.",
                "Click Unlock PDF — the password protection is removed instantly.",
                "Download your unprotected PDF and use it freely.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Unlock PDF", href: "/unlock-pdf", desc: "Remove PDF restrictions" },
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Flatten PDF", href: "/flatten-pdf", desc: "Flatten form fields" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce file size" },
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
                { q: "Is it legal to remove a password from a PDF?", a: "Yes, as long as you are the owner of the document or have authorization to access it. PDF.it requires you to enter the correct password before removing protection — it does not bypass or crack passwords." },
                { q: "Do I need to know the password to remove it?", a: "Yes. PDF.it requires you to enter the current password to unlock the PDF. It cannot remove passwords you don't know — this ensures your use is authorized." },
                { q: "Will removing the password affect the quality of my PDF?", a: "No. Removing password protection does not alter the content, formatting, or quality of your PDF. The file remains identical — only the password restriction is removed." },
                { q: "Can I remove passwords from multiple PDFs at once?", a: "Yes. PDF.it Pro supports batch processing, so you can unlock multiple password-protected PDFs in one session. Free users can process one file at a time." },
                { q: "Can I remove a PDF password on my phone?", a: "Yes. PDF.it works in mobile browsers on iPhone and Android — upload your PDF, enter the password, and download the unlocked file." },
                { q: "What happens to my file after I remove the password?", a: "Your files are processed securely and deleted from PDF.it servers after your session ends. We never store or share your documents." },
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
