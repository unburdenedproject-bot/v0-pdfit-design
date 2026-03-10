import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "How to Protect a PDF Before Sending by Email | OmnisPDF",
  description:
    "Learn how to secure a PDF before sending it by email. Step-by-step guide covering password protection, flattening, metadata removal, and compression for safe email sharing.",
  keywords: "protect pdf before sending, secure pdf for email, lock pdf before sharing, pdf security for email",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How do I protect a PDF before emailing it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use OmnisPDF's Protect PDF tool to add a password, flatten any form fields or annotations, and compress the file to fit email size limits. Share the password separately via text or phone call." }
    },
    {
      "@type": "Question",
      "name": "Should I flatten my PDF before sending it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Flattening removes interactive form fields, annotations, and layers, baking everything into the page. This prevents recipients from editing or extracting hidden data from your document." }
    },
    {
      "@type": "Question",
      "name": "Can email attachments be intercepted?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. Standard email is not encrypted end-to-end. Attachments can potentially be intercepted during transmission or accessed if the recipient's email account is compromised. Password-protecting your PDF adds an essential layer of security." }
    },
    {
      "@type": "Question",
      "name": "What is the maximum PDF size I can send by email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Most email providers limit attachments to 25MB (Gmail, Outlook, Yahoo). If your PDF is larger, use OmnisPDF's Compress PDF tool to reduce the file size before sending." }
    },
    {
      "@type": "Question",
      "name": "How should I share the password with the recipient?",
      "acceptedAnswer": { "@type": "Answer", "text": "Never include the password in the same email as the PDF. Send it through a different channel — a text message, phone call, or encrypted messaging app like Signal or WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "Does OmnisPDF remove metadata from PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Flattening a PDF with OmnisPDF removes interactive elements and embedded data. For additional metadata cleanup, flatten the file and then re-protect it to create a clean, secure version." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Protect a PDF Before Sending by Email",
  "description": "Secure your PDF for email sharing in 3 steps using OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Flatten and clean the PDF",
      "text": "Upload your PDF to OmnisPDF's Flatten PDF tool to remove form fields, annotations, and layers. This prevents hidden data from being extracted by the recipient."
    },
    {
      "@type": "HowToStep",
      "name": "Add password protection",
      "text": "Upload the flattened file to OmnisPDF's Protect PDF tool. Set a strong open password and choose 256-bit AES encryption for maximum security."
    },
    {
      "@type": "HowToStep",
      "name": "Compress and send",
      "text": "If the file exceeds 25MB, compress it using the Compress PDF tool. Attach the protected PDF to your email and send the password separately via text or phone call."
    }
  ]
}

export default function ProtectPDFBeforeSendingPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Protect PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">How to Protect a PDF Before Sending by Email</h1>
              <p className="text-xl text-slate-300">
                Email is not as secure as most people think. Before you hit send on that contract, tax return, or confidential report — here is how to properly secure your PDF.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Lock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to protect? Skip the guide and go straight to the tool.</p>
            </div>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Protect PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Why email is risky */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Email Is Not Secure Enough for Sensitive PDFs</h2>
              <p className="text-slate-600 mb-4">
                Most people assume email is private, but standard email protocols do not encrypt your attachments end-to-end. Here is what can go wrong:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Interception during transit.</strong> Emails pass through multiple servers before reaching the recipient. Without encryption, attachments can be read at any point along the way.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Compromised accounts.</strong> If the recipient's email account is hacked, every unprotected attachment they have ever received is exposed.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Wrong recipient.</strong> It happens more often than you think. Autocomplete fills in the wrong email address, and your confidential document lands in a stranger's inbox.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Forwarding.</strong> Even if you send the file to the right person, they might forward it to someone else. A password ensures only authorized people can open it.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                Password-protecting your PDF before emailing it is the simplest and most effective way to keep your documents safe.
              </p>
            </section>

            {/* Step by step */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Secure a PDF Before Sending (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Flatten your PDF first",
                    desc: "Before adding a password, remove any interactive elements that could leak data. Use OmnisPDF's Flatten PDF tool to bake form fields, comments, and annotations into the page. This prevents anyone from extracting hidden information.",
                  },
                  {
                    title: "Add password protection",
                    desc: "Upload the flattened file to the Protect PDF tool. Set a strong open password (at least 12 characters with mixed case, numbers, and symbols). Choose 256-bit AES encryption for maximum security. Optionally restrict printing and copying.",
                  },
                  {
                    title: "Compress for email and send",
                    desc: "Most email providers limit attachments to 25MB. If your protected PDF is too large, use Compress PDF to shrink it. Attach the file to your email, then send the password separately via text message or phone call.",
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

            {/* Flatten before protecting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why You Should Flatten Before Protecting</h2>
              <p className="text-slate-600 mb-4">
                Many people skip this step, but flattening is critical for true document security. Here is what flattening does and why it matters:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Removes form fields.</strong> Filled-in form data can sometimes be extracted even from password-protected PDFs. <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flattening</Link> converts form data into static page content.</li>
                <li>&#10003; <strong>Bakes in annotations.</strong> Comments, highlights, and sticky notes are removed as separate objects and rendered directly onto the page.</li>
                <li>&#10003; <strong>Eliminates layers.</strong> Multi-layer PDFs (common from design software) can contain hidden content. Flattening merges everything into a single layer.</li>
                <li>&#10003; <strong>Reduces file size.</strong> Removing interactive elements often makes the file smaller, which helps with email attachment limits.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                Think of flattening as cleaning your document before locking it. Use <Link href="/flatten-pdf" className="text-orange-600 hover:underline">OmnisPDF's Flatten tool</Link>, then immediately <Link href="/protect-pdf" className="text-orange-600 hover:underline">protect the result</Link>.
              </p>
            </section>

            {/* Compression for email */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Getting Your PDF Under Email Size Limits</h2>
              <p className="text-slate-600 mb-4">
                Email attachment limits can block your protected PDF from being delivered. Here are the common limits and how to handle them:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Gmail:</strong> 25MB per attachment</li>
                <li>&#10003; <strong>Outlook / Office 365:</strong> 25MB (some corporate accounts limit to 10MB)</li>
                <li>&#10003; <strong>Yahoo Mail:</strong> 25MB per attachment</li>
                <li>&#10003; <strong>Corporate email:</strong> Often 5MB to 10MB for security reasons</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If your file exceeds these limits, use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> to reduce it. For specific targets, try <Link href="/compress-pdf-to-5mb" className="text-orange-600 hover:underline">Compress PDF to 5MB</Link> or <Link href="/compress-pdf-to-2mb" className="text-orange-600 hover:underline">Compress PDF to 2MB</Link>. You can also use <Link href="/compress-pdf-for-email" className="text-orange-600 hover:underline">Compress PDF for Email</Link> for automatic optimization.
              </p>
            </section>

            {/* Checklist */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Pre-Send Security Checklist</h2>
              <p className="text-slate-600 mb-4">
                Before you attach that PDF to your email, run through this quick checklist:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Flattened?</strong> Remove form fields, annotations, and layers with <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten PDF</Link>.</li>
                <li>&#10003; <strong>Redacted?</strong> If the document contains information that should not be shared, use <Link href="/pdf-redaction" className="text-orange-600 hover:underline">PDF Redaction</Link> to permanently remove it before protecting.</li>
                <li>&#10003; <strong>Password protected?</strong> Add a strong open password with <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF</Link>. Use 256-bit AES encryption.</li>
                <li>&#10003; <strong>Under size limit?</strong> Use <Link href="/compress-pdf" className="text-orange-600 hover:underline">Compress PDF</Link> if the file exceeds your email provider's attachment limit.</li>
                <li>&#10003; <strong>Tested?</strong> Open the protected file yourself and enter the password to confirm it works.</li>
                <li>&#10003; <strong>Password shared separately?</strong> Send the password via text, phone call, or secure messaging — never in the same email.</li>
              </ul>
            </section>

            {/* When to use other tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Additional Security Measures</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Add a Watermark</h3>
                  <p className="text-slate-600">
                    If you are sharing confidential documents that might be redistributed, add a watermark with the recipient's name or "CONFIDENTIAL" using <Link href="/watermark-pdf" className="text-orange-600 hover:underline">Watermark PDF</Link>. This discourages unauthorized sharing and helps trace leaks.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Merge Before Protecting</h3>
                  <p className="text-slate-600">
                    Sending multiple documents? Use <Link href="/merge-pdf" className="text-orange-600 hover:underline">Merge PDF</Link> to combine them into a single file first, then protect the merged result. This is easier for the recipient and requires only one password for all documents.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Use Upload-Ready PDF for Submissions</h3>
                  <p className="text-slate-600">
                    If you are sending a PDF for a formal submission (visa, job application, university portal), use <Link href="/upload-ready-pdf" className="text-orange-600 hover:underline">Upload-Ready PDF</Link> to flatten and compress in one step before adding password protection.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Secure Your PDF Before Sending</h2>
            <p className="text-slate-300 mb-6">Flatten, protect, and compress your PDF for safe email sharing — all in one place.</p>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Lock className="h-5 w-5" /> Protect PDF Now
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Password-Protect a PDF Online (Step-by-Step)", href: "/learn/how-to-password-protect-pdf" },
                { title: "PDF Password Best Practices (Strong Passwords & Permissions)", href: "/learn/pdf-password-best-practices" },
                { title: "Password-Protect a PDF on Your Phone (iPhone & Android)", href: "/learn/protect-pdf-on-mobile" },
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
                { q: "How do I protect a PDF before emailing it?", a: "Use OmnisPDF's Protect PDF tool to add a password, flatten any form fields or annotations, and compress the file to fit email size limits. Share the password separately via text or phone call." },
                { q: "Should I flatten my PDF before sending it?", a: "Yes. Flattening removes interactive form fields, annotations, and layers, baking everything into the page. This prevents recipients from editing or extracting hidden data from your document." },
                { q: "Can email attachments be intercepted?", a: "Yes. Standard email is not encrypted end-to-end. Attachments can potentially be intercepted during transmission or accessed if the recipient's email account is compromised. Password-protecting your PDF adds an essential layer of security." },
                { q: "What is the maximum PDF size I can send by email?", a: "Most email providers limit attachments to 25MB (Gmail, Outlook, Yahoo). If your PDF is larger, use OmnisPDF's Compress PDF tool to reduce the file size before sending." },
                { q: "How should I share the password with the recipient?", a: "Never include the password in the same email as the PDF. Send it through a different channel — a text message, phone call, or encrypted messaging app like Signal or WhatsApp." },
                { q: "Does OmnisPDF remove metadata from PDFs?", a: "Flattening a PDF with OmnisPDF removes interactive elements and embedded data. For additional metadata cleanup, flatten the file and then re-protect it to create a clean, secure version." },
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
