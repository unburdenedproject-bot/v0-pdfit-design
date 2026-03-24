import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Protect PDF With Password — Encrypt PDF Online | PDF.it",
  description:
    "Protect a PDF with a password using PDF.it. Encrypt your PDF online, restrict access, and download a secured file in seconds.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does Protect PDF mean?",
      "acceptedAnswer": { "@type": "Answer", "text": "It means adding password-based security to the PDF so only people with the password can open it." }
    },
    {
      "@type": "Question",
      "name": "What happens if I forget the password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Password-protected PDFs generally can't be recovered without the password. PDF.it can't retrieve it — store it somewhere safe." }
    },
    {
      "@type": "Question",
      "name": "Can I remove the password later?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Use PDF.it's Unlock PDF tool to remove password protection from any PDF you own the password for." }
    },
    {
      "@type": "Question",
      "name": "Can I protect a PDF on my phone?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. PDF.it works in mobile browsers — upload the PDF, set a password, and download the secured file." }
    },
    {
      "@type": "Question",
      "name": "Is it safe to upload sensitive PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum file size I can protect?",
      "acceptedAnswer": { "@type": "Answer", "text": "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB." }
    }
  ]
}

export default function ProtectPDFPage() {
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
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Protect a PDF With a Password</h1>
              <p className="text-xl text-slate-300 mb-8">
                Add a password to a PDF with PDF.it. Encrypt your document for safer sharing, storage, and submissions — fast and browser-based.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Strong Encryption</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Files Deleted After Session</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>No Login Required</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Protect Interface */}
        <ProtectPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use PDF.it's Protect PDF tool to password protect and encrypt a PDF in seconds. Add a password before emailing, uploading, or storing sensitive files like contracts, bank statements, invoices, or personal documents.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Password protect PDF files online</li>
              <li>✓ Encrypt PDFs for safer sharing and storage</li>
              <li>✓ Great for contracts, statements, medical forms, and IDs</li>
              <li>✓ Works on Mac, Windows, iOS, Android, and Linux</li>
              <li>✓ No installation — protect PDFs in your browser</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Add a Password to a PDF</h2>
              <p className="text-slate-600">
                Set a password to restrict who can open your PDF. PDF.it secures the file using standard PDF password protection so the contents are not accessible without the password.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protect Sensitive Documents Before Sharing</h2>
              <p className="text-slate-600">
                PDF password protection is useful when sending confidential files by email or uploading to services where you want an extra layer of access control.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Download a Protected PDF Instantly</h2>
              <p className="text-slate-600">
                After protection is applied, download your secured PDF and share it with the intended recipient — share the password separately via a safer channel.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How to Password Protect a PDF</h2>
            <div className="space-y-4">
              {[
                "Upload your PDF to PDF.it.",
                "Enter a strong password and confirm it.",
                "Click Protect PDF.",
                "Download your password-protected PDF.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Unlock PDF", href: "/unlock-pdf", desc: "Remove password protection" },
                { name: "Merge PDF", href: "/merge-pdf", desc: "Combine then protect" },
                { name: "Split PDF", href: "/split-pdf", desc: "Extract pages before protecting" },
                { name: "Compress PDF", href: "/compress-pdf", desc: "Reduce size after protecting" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
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
                  q: "What does Protect PDF mean?",
                  a: "It means adding password-based security to the PDF so only people with the password can open it.",
                },
                {
                  q: "What happens if I forget the password?",
                  a: "Password-protected PDFs generally can't be recovered without the password. PDF.it can't retrieve it — store it somewhere safe.",
                },
                {
                  q: "Can I remove the password later?",
                  a: "Yes. Use PDF.it's Unlock PDF tool to remove password protection from any PDF you own the password for.",
                },
                {
                  q: "Can I protect a PDF on my phone?",
                  a: "Yes. PDF.it works in mobile browsers — upload the PDF, set a password, and download the secured file.",
                },
                {
                  q: "Is it safe to upload sensitive PDFs?",
                  a: "Yes. All transfers are SSL encrypted and your files are deleted immediately after your session. We never store or share your documents.",
                },
                {
                  q: "What is the maximum file size I can protect?",
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
