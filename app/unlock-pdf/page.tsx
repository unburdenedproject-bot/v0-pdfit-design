import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unlock PDF Online — Remove PDF Password Protection | PDF.it",
  description:
    "Unlock a password-protected PDF with PDF.it. Remove PDF password security (with permission) and download an unlocked PDF in seconds.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can PDF.it remove a PDF password without knowing it?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it requires the correct password. It can't recover or bypass unknown passwords." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to unlock a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "You should only unlock PDFs you own or have explicit permission to unlock. PDF.it is designed for legitimate use cases." }
    },
    {
      "@type": "Question",
      "name": "Can I re-protect my PDF after unlocking it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use PDF.it's Protect PDF tool to add a new password to any PDF whenever you need to." }
    },
    {
      "@type": "Question",
      "name": "Can I unlock a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload, enter password, unlock, and download." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload a protected PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can unlock?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function UnlockPDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unlock a PDF (Remove Password Protection)</h1>
              <p className="text-xl text-slate-300 mb-8">
                Use PDF.it to unlock a password-protected PDF when you have the password. Remove restrictions and download an unlocked PDF for editing, printing, or sharing.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Instant Unlocking</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Interface */}
        <UnlockPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Unlock PDF tool to remove password protection from a PDF when you know the password. Upload the file, enter the password, and download an unlocked PDF you can edit, print, merge, or compress.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Unlock PDF files you own or have permission to edit</li>
              <li>✓ Remove password protection when you know the password</li>
              <li>✓ Make PDFs easier to edit, print, merge, and sign</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — unlock PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Remove PDF Password (With Permission)</h2>
              <p className="text-slate-600">
                If you have the correct password, PDF.it can decrypt the PDF and save a new version without the password requirement. This tool is designed for files you own or have legitimate access to.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Unlock PDFs for Editing and Printing</h2>
              <p className="text-slate-600">
                Unlocked PDFs are easier to use with tools like PDF editors, printers, merge and split tools, and e-signature workflows.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Fast Online Unlocking</h2>
              <p className="text-slate-600">
                Upload, enter password, unlock, download. A simple flow designed to get you a usable PDF quickly.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Unlock a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your password-protected PDF into PDF.it.",
                "Enter the correct password.",
                "Click Unlock PDF.",
                "Download the unlocked PDF.",
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
                { name: "Protect PDF", href: "/protect-pdf", desc: "Add password protection" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine after unlocking" },
                { name: "Split PDF", href: "/split-pdf", desc: "Extract pages after unlocking" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after unlocking" },
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
                {
                  q: "Can PDF.it remove a PDF password without knowing it?",
                  a: "No. PDF.it requires the correct password. It can't recover or bypass unknown passwords.",
                },
                {
                  q: "Is it legal to unlock a PDF?",
                  a: "You should only unlock PDFs you own or have explicit permission to unlock. PDF.it is designed for legitimate use cases.",
                },
                {
                  q: "Can I re-protect my PDF after unlocking it?",
                  a: "Yes. Use PDF.it's Protect PDF tool to add a new password to any PDF whenever you need to.",
                },
                {
                  q: "Can I unlock a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload, enter password, unlock, and download.",
                },
                {
                  q: "Is it safe to upload a protected PDF?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can unlock?",
                  a: "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB.",
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
