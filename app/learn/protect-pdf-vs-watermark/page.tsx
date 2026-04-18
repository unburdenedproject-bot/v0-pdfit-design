import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { ShieldCheck, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Protect PDF vs Watermark: Which Should You Use (and When)? | PDF.it",
  description:
    "Password protection and watermarks solve different problems. Learn which to use for contracts, drafts, invoices, and more — and when to combine both.",
  keywords: "protect pdf vs watermark, password protect pdf, watermark pdf, pdf security, when to use watermark",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between password-protecting a PDF and watermarking it?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Password protection uses AES encryption to block anyone without the password from opening the file. A watermark is a visible overlay that marks the document — it does not block access but signals ownership, status, or confidentiality. They solve different problems and can be combined."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use password protection instead of a watermark?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use password protection when the contents of the document must stay private — contracts, financial records, medical files, HR documents, or anything where unauthorized viewing is the threat you are guarding against."
      }
    },
    {
      "@type": "Question",
      "name": "When should I use a watermark instead of a password?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Use a watermark when the recipient is authorized to see the document but you want to discourage redistribution, track who received it, mark it as DRAFT or CONFIDENTIAL, or brand it with your company logo."
      }
    },
    {
      "@type": "Question",
      "name": "Can I use both password protection and a watermark on the same PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Combining both gives you the strongest coverage: the password blocks unauthorized access, and the watermark discourages redistribution or misuse if the file is shared. Add the watermark first, then apply password protection."
      }
    },
    {
      "@type": "Question",
      "name": "Can a watermark be removed from a PDF?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A watermark added as an overlay can sometimes be removed with advanced editing tools. To make it harder to remove, flatten the PDF after watermarking using PDF.it's Flatten PDF tool, which bakes the watermark into the page content permanently."
      }
    },
    {
      "@type": "Question",
      "name": "Can password protection on a PDF be bypassed?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "256-bit AES encryption — the standard used by PDF.it's Encrypt PDF tool — is not practically breakable with current technology. Weak or reused passwords are the most common vulnerability, so always use a strong, unique password for sensitive documents."
      }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Decide Between Password Protection and a Watermark for Your PDF",
  "description": "Choose the right PDF security method in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Identify your threat",
      "text": "Ask yourself: am I trying to stop unauthorized people from opening this file, or am I trying to discourage authorized recipients from redistributing it? The first threat calls for password protection. The second calls for a watermark."
    },
    {
      "@type": "HowToStep",
      "name": "Apply the right tool",
      "text": "For access control, upload your PDF to PDF.it's Encrypt PDF tool, set a strong password, and choose 256-bit AES encryption. For distribution control, use PDF.it's Watermark PDF tool to add a CONFIDENTIAL, DRAFT, or logo watermark on every page."
    },
    {
      "@type": "HowToStep",
      "name": "Combine both when the stakes are high",
      "text": "For the highest security, watermark the PDF first, then apply password protection. This blocks unauthorized access and ensures that even authorized recipients are reminded not to share or misuse the document."
    }
  ]
}

export default function ProtectPDFVsWatermarkPage() {
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
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / PDF Security</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">
                Protect PDF vs Watermark: Which Should You Use (and When)?
              </h1>
              <p className="text-xl text-slate-300">
                Password protection and watermarks are not the same thing — and choosing the wrong one leaves gaps in your document security. Here is exactly when to use each, and when to combine both.
              </p>
            </div>
          </div>
        </section>

        {/* Inline CTA */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <ShieldCheck className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Need to secure a PDF right now? Go straight to the tools.</p>
            </div>
            <div className="flex items-center gap-3 flex-shrink-0">
              <Link
                href="/encrypt-pdf"
                className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Encrypt PDF <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/watermark-pdf"
                className="inline-flex items-center gap-2 border-2 border-[#14D8C4] text-[#14D8C4] hover:bg-[#14D8C4] hover:text-[#0E0F1E] font-bold py-2 px-5 rounded-xl text-sm transition-colors whitespace-nowrap"
              >
                Watermark PDF <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* What Is X */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">What Each Method Actually Does</h2>
              <p className="text-slate-600 mb-4">
                People often treat "secure my PDF" as a single task, but password protection and watermarking address completely different threats. Using the wrong one — or only one when you need both — leaves a real gap.
              </p>
              <p className="text-slate-600 mb-6">
                Here is a plain-language breakdown of what each method does and does not do:
              </p>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span>
                    <strong>Password protection (encryption).</strong> Encrypts the file using AES-256 so that anyone without the correct password cannot open it at all. The file is mathematically scrambled — the content is completely inaccessible without the key. Use PDF.it&apos;s{" "}
                    <Link href="/encrypt-pdf" className="text-[#14D8C4] hover:underline">Encrypt PDF</Link> tool to apply this.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span>
                    <strong>Watermark.</strong> Adds a visible overlay to every page — text like DRAFT or CONFIDENTIAL, or an image like your company logo. It does not block access. Anyone you send the file to can still open and read it. The watermark communicates status, ownership, or intent, and discourages redistribution.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span>
                    <strong>Redaction.</strong> Permanently removes sensitive content (names, account numbers, addresses) from the visible text and underlying data. Unlike a watermark or password, redaction{" "}
                    <Link href="/redact-pdf" className="text-[#14D8C4] hover:underline">deletes information entirely</Link> — it cannot be undone.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span>
                    <strong>The key distinction.</strong> Password protection controls <em>who can access</em> the document. A watermark controls <em>how it is perceived and used</em> after access is granted. They are complementary tools, not alternatives.
                  </span>
                </li>
              </ul>
            </section>

            {/* How To */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Decide Which One to Use (Step by Step)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Identify your threat",
                    desc: "Ask yourself: am I trying to stop unauthorized people from opening this file, or am I trying to discourage authorized recipients from redistributing it? The first threat calls for password protection. The second calls for a watermark.",
                  },
                  {
                    title: "Apply the right tool",
                    desc: "For access control, upload your PDF to PDF.it's Encrypt PDF tool, set a strong password, and choose 256-bit AES encryption. For distribution control, use PDF.it's Watermark PDF tool to add a CONFIDENTIAL, DRAFT, or logo watermark on every page.",
                  },
                  {
                    title: "Combine both when the stakes are high",
                    desc: "For the highest security, watermark the PDF first, then apply password protection. This blocks unauthorized access and ensures that even authorized recipients are reminded not to share or misuse the document.",
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

            {/* Comparison Table */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Password Protection vs. Watermark: Side by Side</h2>
              <div className="border border-gray-200 rounded-xl overflow-hidden mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left px-4 py-3 font-semibold">Feature</th>
                      <th className="text-left px-4 py-3 font-semibold">Password Protection</th>
                      <th className="text-left px-4 py-3 font-semibold">Watermark</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100">
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Blocks unauthorized access</td>
                      <td className="px-4 py-3 text-slate-700">Yes — file is encrypted</td>
                      <td className="px-4 py-3 text-slate-700">No — anyone can open the file</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Visible to recipient</td>
                      <td className="px-4 py-3 text-slate-700">No — only a password prompt</td>
                      <td className="px-4 py-3 text-slate-700">Yes — overlay on every page</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Discourages redistribution</td>
                      <td className="px-4 py-3 text-slate-700">Indirectly — password friction</td>
                      <td className="px-4 py-3 text-slate-700">Yes — visible ownership mark</td>
                    </tr>
                    <tr className="bg-gray-50">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Can be reversed</td>
                      <td className="px-4 py-3 text-slate-700">Yes — unlock with password</td>
                      <td className="px-4 py-3 text-slate-700">Yes — unless PDF is flattened</td>
                    </tr>
                    <tr className="bg-white">
                      <td className="px-4 py-3 text-[#14D8C4] font-semibold">Best use case</td>
                      <td className="px-4 py-3 text-slate-700">Contracts, financial records, HR files</td>
                      <td className="px-4 py-3 text-slate-700">Drafts, proposals, branded documents</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-slate-600 text-sm">
                Neither method replaces the other. For high-value documents, use both: encrypt the file so unauthorized parties cannot open it, and watermark it so authorized recipients know how to handle it.
              </p>
            </section>

            {/* Extra Techniques */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Use Cases: Which Method Fits Each Scenario</h2>
              <ul className="space-y-4 text-slate-700">
                <li>
                  &#10003;{" "}
                  <strong>Legal contracts and signed agreements.</strong> Use{" "}
                  <Link href="/encrypt-pdf" className="text-[#14D8C4] hover:underline">password protection</Link> to block access, plus a CONFIDENTIAL watermark to remind the recipient of the document&apos;s sensitivity. Both together are appropriate for NDA packages and settlement agreements.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Draft reports and proposals.</strong> A DRAFT{" "}
                  <Link href="/watermark-pdf" className="text-[#14D8C4] hover:underline">watermark</Link> tells reviewers the content is not final. No encryption needed — you want feedback, not restricted access. Switch to FINAL when approved.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Invoices and client quotes.</strong> Add your logo as a subtle image watermark for brand presence. If the invoice contains pricing you do not want forwarded to competitors, add encryption on top with{" "}
                  <Link href="/encrypt-pdf" className="text-[#14D8C4] hover:underline">Encrypt PDF</Link>.
                </li>
                <li>
                  &#10003;{" "}
                  <strong>Sensitive data that needs permanent removal.</strong> If the document contains personal information (SSNs, account numbers, medical data) that should not be seen at all, use{" "}
                  <Link href="/redact-pdf" className="text-[#14D8C4] hover:underline">Redact PDF</Link> to permanently delete it — a watermark does not hide or remove underlying data.
                </li>
              </ul>
            </section>

            {/* Troubleshooting */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Common Mistakes and How to Avoid Them</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Using a watermark when you needed encryption</h3>
                  <p className="text-slate-600">
                    A CONFIDENTIAL watermark does not stop anyone from opening the document — it is just text on the page. If the content is genuinely sensitive (personal data, financial records, legal terms), encrypt it. If the file is forwarded to someone you did not intend, the watermark will not have protected the contents at all.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sending the password in the same email as the file</h3>
                  <p className="text-slate-600">
                    Encryption is only useful if the password is shared through a separate channel. Send the PDF by email, and the password by text, phone call, or a secure messaging app. If both travel together, anyone who intercepts the email can open the file.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Forgetting to flatten after watermarking</h3>
                  <p className="text-slate-600">
                    A watermark added as an overlay can be removed by someone with PDF editing software. To make the watermark permanent, use{" "}
                    <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> after watermarking. This merges the watermark layer into the page content so it cannot be separated.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section
          className="py-12"
          style={{
            background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.10) 0%, transparent 60%), #0E0F1E`,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Ready to Secure Your PDF?</h2>
            <p className="text-slate-300 mb-6">
              Use Encrypt PDF to lock your file with AES-256 encryption, or Watermark PDF to stamp it with a visible ownership mark. Both available on PDF.it — no software needed.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/encrypt-pdf"
                className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-7 rounded-xl transition-colors"
              >
                <ShieldCheck className="h-5 w-5" /> Encrypt PDF
              </Link>
              <Link
                href="/watermark-pdf"
                className="inline-flex items-center gap-2 border-2 border-[#14D8C4] text-[#14D8C4] hover:bg-[#14D8C4] hover:text-[#0E0F1E] font-bold py-3 px-7 rounded-xl transition-colors"
              >
                <ArrowRight className="h-5 w-5" /> Watermark PDF
              </Link>
            </div>
            <p className="text-slate-400 text-xs mt-4">Watermark PDF requires a Pro or Business plan. Encrypt PDF is free for your first 3 files.</p>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Related Articles</h2>
            <div className="grid gap-3">
              {[
                { title: "How to Password-Protect a PDF Online (Step-by-Step)", href: "/learn/how-to-password-protect-pdf" },
                { title: "How to Add a Watermark to a PDF Online", href: "/learn/how-to-add-watermark-to-pdf" },
                { title: "How to Protect a PDF Before Sending by Email", href: "/learn/protect-pdf-before-sending" },
                { title: "PDF Password Best Practices (Strong Passwords & Permissions)", href: "/learn/pdf-password-best-practices" },
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
                {
                  q: "What is the difference between password-protecting a PDF and watermarking it?",
                  a: "Password protection uses AES encryption to block anyone without the password from opening the file. A watermark is a visible overlay that marks the document — it does not block access but signals ownership, status, or confidentiality. They solve different problems and can be combined.",
                },
                {
                  q: "When should I use password protection instead of a watermark?",
                  a: "Use password protection when the contents of the document must stay private — contracts, financial records, medical files, HR documents, or anything where unauthorized viewing is the threat you are guarding against.",
                },
                {
                  q: "When should I use a watermark instead of a password?",
                  a: "Use a watermark when the recipient is authorized to see the document but you want to discourage redistribution, track who received it, mark it as DRAFT or CONFIDENTIAL, or brand it with your company logo.",
                },
                {
                  q: "Can I use both password protection and a watermark on the same PDF?",
                  a: "Yes. Combining both gives you the strongest coverage: the password blocks unauthorized access, and the watermark discourages redistribution or misuse if the file is shared. Add the watermark first, then apply password protection.",
                },
                {
                  q: "Can a watermark be removed from a PDF?",
                  a: "A watermark added as an overlay can sometimes be removed with advanced editing tools. To make it harder to remove, flatten the PDF after watermarking using PDF.it's Flatten PDF tool, which bakes the watermark into the page content permanently.",
                },
                {
                  q: "Can password protection on a PDF be bypassed?",
                  a: "256-bit AES encryption — the standard used by PDF.it's Encrypt PDF tool — is not practically breakable with current technology. Weak or reused passwords are the most common vulnerability, so always use a strong, unique password for sensitive documents.",
                },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
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
