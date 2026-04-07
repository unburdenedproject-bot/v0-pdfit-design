import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Forgot Your PDF Password? Here's What You Can Do | PDF.it",
  description:
    "Forgot the password to your PDF? Learn the difference between open passwords and permissions passwords, and discover your options for recovering access to locked PDFs.",
  keywords: "forgot pdf password, pdf password recovery, cant open pdf, lost pdf password",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Can I open a PDF if I forgot the password?",
      "acceptedAnswer": { "@type": "Answer", "text": "It depends on the type of password. If the PDF has a permissions password (you can view but not edit/print), PDF.it can remove those restrictions. If it has an open password (you can't view the file at all), you'll need to recover or remember the password — there's no way to bypass strong encryption." }
    },
    {
      "@type": "Question",
      "name": "What's the difference between an open password and a permissions password?",
      "acceptedAnswer": { "@type": "Answer", "text": "An open password prevents you from viewing the PDF entirely — you see a password prompt when you try to open it. A permissions password lets you view the PDF but restricts actions like printing, copying, and editing. Permissions passwords are much easier to remove." }
    },
    {
      "@type": "Question",
      "name": "Can PDF.it crack a PDF open password?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it does not crack or brute-force open passwords. Modern PDF encryption (256-bit AES) is extremely strong and cannot be bypassed. PDF.it can only remove permissions restrictions or unlock PDFs when you provide the correct password." }
    },
    {
      "@type": "Question",
      "name": "How can I recover a forgotten PDF password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Check your email for the original message that contained the password. Look in your browser's saved passwords. Try common passwords you use. Check if the password was shared in a chat or text message. If the PDF is from an organization, contact them for the password." }
    },
    {
      "@type": "Question",
      "name": "Can I remove permissions restrictions without a password?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, in many cases. If you can open and view the PDF (no open password), PDF.it can remove permissions restrictions like print, copy, and edit locks without needing the owner password." }
    },
    {
      "@type": "Question",
      "name": "How do I prevent losing my PDF password in the future?",
      "acceptedAnswer": { "@type": "Answer", "text": "Use a password manager to store PDF passwords. Keep a record of which files are password-protected and what passwords you used. Consider using permissions restrictions instead of open passwords when you only need to control editing and printing." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "What to Do When You Forget a PDF Password",
  "description": "Steps to recover access to a password-protected PDF using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Determine the type of password",
      "text": "Try opening the PDF. If you can view it but can't print, copy, or edit, it has a permissions password. If you can't open it at all, it has an open password."
    },
    {
      "@type": "HowToStep",
      "name": "Upload to PDF.it",
      "text": "Go to PDF.it's Unlock PDF tool and upload the file. For permissions-only restrictions, PDF.it can remove them automatically."
    },
    {
      "@type": "HowToStep",
      "name": "Download or recover the password",
      "text": "If the restrictions were removed, download your unlocked file. If the PDF has an open password, try recovering it from your email, password manager, or the sender."
    }
  ]
}

export default function UnlockPDFForgotPasswordPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Unlock PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Forgot Your PDF Password? Here&apos;s What You Can Do</h1>
              <p className="text-xl text-slate-300">
                Locked out of your own PDF? Don&apos;t panic. Your options depend on what type of password was set. Here&apos;s a clear breakdown of what you can (and can&apos;t) do.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Have a permissions-only lock? Remove it instantly.</p>
            </div>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unlock PDF Now <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Two types of passwords */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">The Two Types of PDF Passwords</h2>
              <p className="text-slate-600 mb-4">
                Before you can solve the problem, you need to understand which kind of password your PDF has. PDFs support two completely different types of password protection:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Open password (user password).</strong> This password is required to open and view the PDF. When you double-click the file, a dialog box asks for the password before showing any content. Without this password, you cannot see anything in the document. This is the harder type to deal with if forgotten.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Permissions password (owner password).</strong> This password restricts specific actions — printing, copying text, editing, or annotating — but still lets you view the PDF. You can open the file and read it, but certain features are locked. This type is much easier to handle if forgotten.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Quick test:</strong> Can you open and read the PDF? If yes, you have a permissions password — and PDF.it&apos;s <Link href="/unlock-pdf" className="text-[#14D8C4] hover:underline">Unlock PDF</Link> tool can remove those restrictions without needing the password.
              </p>
            </section>

            {/* What to do for permissions passwords */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">If You Forgot the Permissions Password</h2>
              <p className="text-slate-600 mb-4">
                Good news — this is the easy scenario. If you can open and view the PDF but can&apos;t print, copy, or edit, PDF.it can remove those restrictions:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Upload the PDF to PDF.it",
                    desc: "Go to the Unlock PDF tool and upload your file. Since you can view the PDF, there's no open password blocking access.",
                  },
                  {
                    title: "PDF.it removes the restrictions",
                    desc: "The tool automatically detects and removes permissions restrictions — no owner password needed. This works because permissions passwords only control what software allows, not the actual content encryption.",
                  },
                  {
                    title: "Download the unrestricted PDF",
                    desc: "Your file is now completely unlocked. You can print, copy text, edit, annotate, and do anything else you need. If you want, use Protect PDF to set a new password you'll remember.",
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

            {/* What to do for open passwords */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">If You Forgot the Open Password</h2>
              <p className="text-slate-600 mb-4">
                This is the harder situation. If you can&apos;t open the PDF at all, the file is encrypted and you need the exact password to decrypt it. Here&apos;s what to try:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Check your email.</strong> Search your inbox for the PDF filename or keywords like &quot;password&quot; or &quot;protected.&quot; The password is often sent in a separate email from the document itself.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Check your password manager.</strong> If you use a password manager (1Password, LastPass, Bitwarden), search for entries related to the PDF or the sender.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Try common passwords.</strong> Think about passwords you commonly use for documents. Try your name, date of birth, company name, or simple passwords like &quot;1234&quot; or &quot;password.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Check chat and text messages.</strong> If someone sent you the PDF, search your WhatsApp, Slack, Teams, or SMS history for the password.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">5.</span>
                  <span><strong>Contact the sender.</strong> If the PDF came from a colleague, client, bank, or government agency, ask them to resend the password or provide an unprotected version of the document.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Important:</strong> Be cautious of online tools that claim to &quot;crack&quot; PDF passwords. Modern PDFs use 256-bit AES encryption, which is essentially unbreakable. Any tool claiming to bypass this is either ineffective against strong passwords or potentially unsafe.
              </p>
            </section>

            {/* How to prevent this in the future */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">How to Avoid Losing PDF Passwords in the Future</h2>
              <p className="text-slate-600 mb-4">
                If you regularly create password-protected PDFs, here are practical steps to avoid getting locked out of your own files:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Use a password manager.</strong> Store every PDF password in your password manager with a note about which file it belongs to. This is the most reliable method.</li>
                <li>✓ <strong>Use permissions restrictions instead of open passwords.</strong> If you only need to prevent editing or printing (not viewing), use a permissions password via <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link>. These are easier to remove if you forget them.</li>
                <li>✓ <strong>Keep an unprotected backup.</strong> Before adding a password to a PDF, save an unprotected copy in a secure location (encrypted folder, secure cloud storage).</li>
                <li>✓ <strong>Use consistent passwords.</strong> For non-critical documents, use a consistent password format you&apos;ll remember (but never reuse passwords from important accounts).</li>
                <li>✓ <strong>Document your passwords.</strong> Keep a secure note (digital or physical, stored safely) listing which files have passwords and what they are.</li>
              </ul>
            </section>

            {/* Related tools */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF.it Tools for Managing PDF Security</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Unlock PDF — Remove Restrictions</h3>
                  <p className="text-slate-600">
                    Use <Link href="/unlock-pdf" className="text-[#14D8C4] hover:underline">Unlock PDF</Link> to remove permissions restrictions (print, copy, edit locks) from PDFs. Works without the owner password for permissions-only restrictions.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Protect PDF — Add Your Own Password</h3>
                  <p className="text-slate-600">
                    Use <Link href="/protect-pdf" className="text-[#14D8C4] hover:underline">Protect PDF</Link> to add a new password to any PDF. Set open passwords, permissions restrictions, or both. Choose exactly which actions to allow or block.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Flatten PDF — Lock Content in Place</h3>
                  <p className="text-slate-600">
                    If you want to prevent editing without using passwords, <Link href="/flatten-pdf" className="text-[#14D8C4] hover:underline">Flatten PDF</Link> permanently merges form fields, annotations, and layers into the page. The content becomes part of the background — no password to remember.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">PDF to Word — Edit Without the Password</h3>
                  <p className="text-slate-600">
                    If you can view a PDF but can&apos;t edit it, another option is converting it to Word using <Link href="/pdf-to-word" className="text-[#14D8C4] hover:underline">PDF to Word</Link>. Make your edits in Word, then convert back with <Link href="/word-to-pdf" className="text-[#14D8C4] hover:underline">Word to PDF</Link>.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Need to Remove PDF Restrictions?</h2>
            <p className="text-slate-300 mb-6">If your PDF has permissions restrictions (not an open password), PDF.it can remove them instantly — free, no signup required.</p>
            <Link
              href="/unlock-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
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
                { title: "How to Unlock a PDF Online (Remove Restrictions)", href: "/learn/how-to-unlock-pdf" },
                { title: "Unlock a PDF for Printing (Remove Print Restrictions)", href: "/learn/unlock-pdf-for-printing" },
                { title: "Unlock a PDF on Your Phone (iPhone & Android)", href: "/learn/unlock-pdf-on-mobile" },
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
                { q: "Can I open a PDF if I forgot the password?", a: "It depends on the type of password. If the PDF has a permissions password (you can view but not edit/print), PDF.it can remove those restrictions. If it has an open password (you can't view the file at all), you'll need to recover or remember the password — there's no way to bypass strong encryption." },
                { q: "What's the difference between an open password and a permissions password?", a: "An open password prevents you from viewing the PDF entirely — you see a password prompt when you try to open it. A permissions password lets you view the PDF but restricts actions like printing, copying, and editing. Permissions passwords are much easier to remove." },
                { q: "Can PDF.it crack a PDF open password?", a: "No. PDF.it does not crack or brute-force open passwords. Modern PDF encryption (256-bit AES) is extremely strong and cannot be bypassed. PDF.it can only remove permissions restrictions or unlock PDFs when you provide the correct password." },
                { q: "How can I recover a forgotten PDF password?", a: "Check your email for the original message that contained the password. Look in your browser's saved passwords. Try common passwords you use. Check if the password was shared in a chat or text message. If the PDF is from an organization, contact them for the password." },
                { q: "Can I remove permissions restrictions without a password?", a: "Yes, in many cases. If you can open and view the PDF (no open password), PDF.it can remove permissions restrictions like print, copy, and edit locks without needing the owner password." },
                { q: "How do I prevent losing my PDF password in the future?", a: "Use a password manager to store PDF passwords. Keep a record of which files are password-protected and what passwords you used. Consider using permissions restrictions instead of open passwords when you only need to control editing and printing." },
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
