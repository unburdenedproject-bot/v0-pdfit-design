import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Unlock a PDF Online (Remove Restrictions) | OmnisPDF",
  description:
    "Learn how to unlock a PDF and remove restrictions like printing, copying, and editing. Step-by-step guide to removing PDF passwords online — fast and free.",
  keywords: "unlock pdf online, remove pdf restrictions, unlock pdf for editing, remove pdf password",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I unlock a PDF online for free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Upload your locked PDF to OmnisPDF's Unlock PDF tool, enter the password if prompted, and download the unrestricted version. No software installation needed — it works right in your browser." }
    },
    {
      "@type": "Question",
      "name": "What PDF restrictions can be removed?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF can remove permissions restrictions that prevent printing, copying text, editing, and annotating. If the PDF has an open password (required to view the file), you'll need to enter that password first." }
    },
    {
      "@type": "Question",
      "name": "Is it legal to unlock a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "If you own the document or have authorization to access it, removing restrictions is perfectly legal. OmnisPDF is designed for users who need to unlock their own files — for example, when you set a password and later need to remove it." }
    },
    {
      "@type": "Question",
      "name": "Will unlocking a PDF change its content?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Unlocking a PDF only removes the security restrictions. The content, layout, images, and formatting remain exactly the same. Your document will look identical — it just won't have restrictions anymore." }
    },
    {
      "@type": "Question",
      "name": "Can I unlock a PDF without the password?",
      "acceptedAnswer": { "@type": "Answer", "text": "If the PDF only has permissions restrictions (no open password), OmnisPDF can remove those restrictions without needing a password. If the PDF requires a password to open, you'll need to provide that password." }
    },
    {
      "@type": "Question",
      "name": "Does unlocking work on all PDF files?",
      "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF works with standard PDF encryption (40-bit, 128-bit, and 256-bit AES). It handles most PDFs created by Adobe Acrobat, Microsoft Office, scanners, and other common tools." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Unlock a PDF Online",
  "description": "Remove PDF restrictions in 3 simple steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Upload your locked PDF",
      "text": "Go to OmnisPDF's Unlock PDF tool and upload the PDF file that has restrictions you want to remove."
    },
    {
      "@type": "HowToStep",
      "name": "Enter the password if required",
      "text": "If the PDF has an open password, enter it when prompted. If it only has permissions restrictions, OmnisPDF will handle it automatically."
    },
    {
      "@type": "HowToStep",
      "name": "Download the unlocked PDF",
      "text": "Click Unlock and download your restriction-free PDF. You can now print, copy, edit, and annotate the document freely."
    }
  ]
}

export default function HowToUnlockPDFPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Unlock PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Unlock a PDF Online (Remove Restrictions)</h1>
              <p className="text-xl text-slate-300">
                Stuck with a PDF you can&apos;t print, copy, or edit? Here&apos;s how to remove PDF restrictions in seconds — no software needed.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to unlock? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unlock PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* What are PDF restrictions */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Are PDF Restrictions?</h2>
              <p className="text-slate-600 mb-4">
                PDF files can have two types of password protection. Understanding the difference is key to unlocking your document:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Open password (user password).</strong> This prevents anyone from opening the PDF without entering the correct password. You must know this password to view the file at all.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Permissions password (owner password).</strong> This lets you view the PDF but blocks specific actions like printing, copying text, editing, or annotating. This is the most common type of restriction people need to remove.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Most locked PDFs you encounter have permissions restrictions — you can open and read them, but you can&apos;t print or copy text. OmnisPDF&apos;s <Link href="/unlock-pdf" className="text-orange-600 hover:underline">Unlock PDF</Link> tool handles both types.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Unlock a PDF (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload your locked PDF",
                    desc: "Go to the Unlock PDF tool and drag your file into the upload area, or click to browse. Files up to 25MB are free — Pro users can upload files up to 200MB.",
                  },
                  {
                    title: "Enter the password if needed",
                    desc: "If the PDF has an open password, you'll be asked to enter it. If the file only has permissions restrictions (you can view it but can't print or copy), OmnisPDF removes those automatically — no password entry needed.",
                  },
                  {
                    title: "Download the unlocked PDF",
                    desc: "Click Unlock and download your restriction-free file. You can now print, copy text, edit, fill in forms, and do anything you need with the document.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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

            {/* Common reasons to unlock */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common Reasons People Need to Unlock PDFs</h2>
              <p className="text-slate-600 mb-4">
                PDF restrictions are often added with good intentions, but they can become a roadblock when you legitimately need to work with the file:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Printing for a meeting.</strong> Your colleague sent a report as a restricted PDF and you need to print copies for a presentation. Use OmnisPDF to remove the print restriction.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Copying text for research.</strong> Academic papers or government documents sometimes have copy restrictions. Unlock the PDF, then copy the text you need for citations.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Editing a document you created.</strong> You set a password on a PDF months ago and now need to make changes. Upload it to the <Link href="/unlock-pdf" className="text-orange-600 hover:underline">Unlock PDF</Link> tool, enter your password, and get an editable version.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Filling out forms.</strong> Some PDF forms are locked, preventing you from typing in the fields. Unlocking the PDF lets you fill in the form and save your changes.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Converting to another format.</strong> If you need to convert a locked PDF to Word or Excel, unlock it first with OmnisPDF, then use <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link> or <Link href="/pdf-to-excel" className="text-orange-600 hover:underline">PDF to Excel</Link> for the conversion.</span>
                </li>
              </ul>
            </section>

            {/* What to do after unlocking */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What to Do After Unlocking Your PDF</h2>
              <p className="text-slate-600 mb-4">
                Once your PDF is unlocked, you have full control. Here are some useful next steps:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Edit the content.</strong> Convert it to Word using <Link href="/pdf-to-word" className="text-orange-600 hover:underline">PDF to Word</Link>, make your changes, then convert back to PDF with <Link href="/word-to-pdf" className="text-orange-600 hover:underline">Word to PDF</Link>.</li>
                <li>✓ <strong>Compress the file.</strong> If the unlocked PDF is too large for email, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce the file size.</li>
                <li>✓ <strong>Add new protection.</strong> Need to re-protect the file with a different password? Use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> to set your own permissions.</li>
                <li>✓ <strong>Flatten the file.</strong> If the PDF has form fields or annotations, use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link> to lock those elements in place before sharing.</li>
                <li>✓ <strong>Extract images.</strong> Use <Link href="/extract-images-from-pdf" className="text-orange-600 hover:underline">Extract Images</Link> to pull out photos, charts, or diagrams from the unlocked file.</li>
              </ul>
            </section>

            {/* Security and privacy */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Is It Safe to Unlock PDFs Online?</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Your Files Are Processed Securely</h3>
                  <p className="text-slate-600">
                    OmnisPDF processes your files over an encrypted connection (HTTPS) and automatically deletes them from the server after processing. Your documents are never stored permanently or shared with anyone.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Legal Considerations</h3>
                  <p className="text-slate-600">
                    Unlocking PDFs that you own or have authorization to access is completely legal. OmnisPDF is designed for legitimate use cases — removing restrictions from your own files, accessing documents shared with you by colleagues, or recovering access to files where you&apos;ve forgotten the password.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">When to Use Protect Instead</h3>
                  <p className="text-slate-600">
                    If you&apos;re creating PDFs and want to control who can print or edit them, use <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link> to add your own password and permissions. This gives you full control over your document security.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Unlock Your PDF?</h2>
            <p className="text-slate-300 mb-6">Remove restrictions and get full access to your document in seconds — free, no signup required.</p>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Unlock PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "Unlock a PDF for Printing (Remove Print Restrictions)", href: "/learn/unlock-pdf-for-printing" },
                { title: "Forgot Your PDF Password? Here's What You Can Do", href: "/learn/unlock-pdf-forgot-password" },
                { title: "Unlock a PDF on Your Phone (iPhone & Android)", href: "/learn/unlock-pdf-on-mobile" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "How do I unlock a PDF online for free?", a: "Upload your locked PDF to OmnisPDF's Unlock PDF tool, enter the password if prompted, and download the unrestricted version. No software installation needed — it works right in your browser." },
                { q: "What PDF restrictions can be removed?", a: "OmnisPDF can remove permissions restrictions that prevent printing, copying text, editing, and annotating. If the PDF has an open password (required to view the file), you'll need to enter that password first." },
                { q: "Is it legal to unlock a PDF?", a: "If you own the document or have authorization to access it, removing restrictions is perfectly legal. OmnisPDF is designed for users who need to unlock their own files — for example, when you set a password and later need to remove it." },
                { q: "Will unlocking a PDF change its content?", a: "No. Unlocking a PDF only removes the security restrictions. The content, layout, images, and formatting remain exactly the same. Your document will look identical — it just won't have restrictions anymore." },
                { q: "Can I unlock a PDF without the password?", a: "If the PDF only has permissions restrictions (no open password), OmnisPDF can remove those restrictions without needing a password. If the PDF requires a password to open, you'll need to provide that password." },
                { q: "Does unlocking work on all PDF files?", a: "OmnisPDF works with standard PDF encryption (40-bit, 128-bit, and 256-bit AES). It handles most PDFs created by Adobe Acrobat, Microsoft Office, scanners, and other common tools." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
