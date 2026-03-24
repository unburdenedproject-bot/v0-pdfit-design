import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Link from "next/link"
import { Shield, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PDF Password Best Practices (Strong Passwords & Permissions) | PDF.it",
  description:
    "Learn how to choose strong passwords for your PDFs, set the right permissions, and avoid common security mistakes. A complete guide to PDF password security.",
  keywords: "pdf password best practices, strong pdf password, pdf permissions, pdf security settings",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What makes a strong PDF password?",
      "acceptedAnswer": { "@type": "Answer", "text": "A strong PDF password is at least 12 characters long, combines uppercase and lowercase letters, numbers, and special characters, and avoids dictionary words or personal information like birthdays." }
    },
    {
      "@type": "Question",
      "name": "Should I use the same password for all my PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Using the same password for every PDF means that if one password is compromised, all your documents are exposed. Use a unique password for each sensitive document and store them in a password manager." }
    },
    {
      "@type": "Question",
      "name": "What PDF permissions can I restrict?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can restrict printing, copying text, editing content, extracting pages, adding annotations, and filling in forms. PDF.it lets you set all of these permissions when you protect a PDF." }
    },
    {
      "@type": "Question",
      "name": "Is 128-bit encryption enough for PDF security?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes, 128-bit AES encryption is strong enough for most business and personal documents. For highly confidential files like legal contracts or medical records, 256-bit AES provides an extra layer of security." }
    },
    {
      "@type": "Question",
      "name": "Can someone bypass PDF permissions?",
      "acceptedAnswer": { "@type": "Answer", "text": "Permissions passwords are less secure than open passwords — some tools can bypass them. For maximum security, always set an open password in addition to permissions restrictions. This requires the password just to view the file." }
    },
    {
      "@type": "Question",
      "name": "How should I share the password with the recipient?",
      "acceptedAnswer": { "@type": "Answer", "text": "Never send the password in the same email as the PDF. Share the password through a different channel — a text message, phone call, or secure messaging app. This way, even if the email is intercepted, the file stays locked." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "How to Set Strong PDF Passwords and Permissions",
  "description": "Secure your PDFs with strong passwords and the right permission settings in 3 steps using PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Choose a strong password",
      "text": "Create a password that is at least 12 characters long with a mix of uppercase letters, lowercase letters, numbers, and special characters. Avoid dictionary words and personal details."
    },
    {
      "@type": "HowToStep",
      "name": "Set the right permissions",
      "text": "Decide what the recipient should be able to do — view only, print, or edit. Set a permissions password to restrict actions like copying, printing, or modifying the document."
    },
    {
      "@type": "HowToStep",
      "name": "Apply encryption and download",
      "text": "Upload your PDF to PDF.it's Protect PDF tool, enter your password and permissions, select 256-bit AES encryption, and download the secured file."
    }
  ]
}

export default function PDFPasswordBestPracticesPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Learn / Protect PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Password Best Practices (Strong Passwords & Permissions)</h1>
              <p className="text-xl text-slate-300">
                A weak password is almost as bad as no password at all. Learn how to choose strong passwords, set the right permissions, and avoid the most common PDF security mistakes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Ready to secure your PDF? Skip the guide and go straight to the tool.</p>
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

            {/* Why passwords matter */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Why Your PDF Password Matters More Than You Think</h2>
              <p className="text-slate-600 mb-4">
                Most people pick a password in two seconds — their pet's name, a birthday, or the classic "1234". The problem is that automated tools can guess these passwords in minutes. A PDF with a weak password gives you a false sense of security while leaving your data exposed.
              </p>
              <p className="text-slate-600 mb-4">
                According to security research, the top 10 most common passwords account for a significant percentage of all breaches. If your PDF contains contracts, financial data, medical records, or employee information, a weak password is a liability — not a safeguard.
              </p>
              <p className="text-slate-600">
                The good news is that creating a strong PDF password takes only a few extra seconds. Here is everything you need to know.
              </p>
            </section>

            {/* Creating strong passwords */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">How to Create a Strong PDF Password</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Use at least 12 characters",
                    desc: "Every additional character makes your password exponentially harder to crack. An 8-character password can be brute-forced in hours. A 12-character password takes years. Aim for 12 to 16 characters minimum.",
                  },
                  {
                    title: "Mix character types",
                    desc: "Combine uppercase letters (A-Z), lowercase letters (a-z), numbers (0-9), and special characters (!@#$%^&*). A password like 'Tr4v3l$afe!2024' is far stronger than 'travelsafe2024'.",
                  },
                  {
                    title: "Avoid personal information",
                    desc: "Never use your name, birthday, company name, or the document subject as a password. Attackers who know you (or can find information about you online) will try these first.",
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
              <div className="mt-6 bg-orange-50 border border-orange-200 rounded-xl p-5">
                <p className="text-slate-700 text-sm">
                  <strong>Pro tip:</strong> Use a passphrase instead of a single word. For example, "BlueCoffee$Rain42!" is easy to remember but extremely hard to crack. Even better, use a password manager to generate and store random passwords.
                </p>
              </div>
            </section>

            {/* Permissions settings */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Setting the Right PDF Permissions</h2>
              <p className="text-slate-600 mb-4">
                Beyond locking a file with a password, you can control exactly what people can do with your PDF. PDF.it's <Link href="/protect-pdf" className="text-orange-600 hover:underline">Protect PDF tool</Link> lets you restrict the following actions:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>No printing.</strong> Prevents the recipient from printing the document. Useful for draft reports, confidential memos, and materials shared for review only.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>No copying text.</strong> Blocks text selection and copy-paste. This protects intellectual property, legal language, and original content from being lifted.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>No editing.</strong> Prevents modifications to the document content. Essential for finalized contracts and official records.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>No extracting pages.</strong> Stops users from pulling individual pages out of the document using PDF tools.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>No annotations.</strong> Prevents adding comments, highlights, or sticky notes. Use this when you want the document to remain clean and unmodified.</span>
                </li>
              </ul>
            </section>

            {/* Common mistakes */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Common PDF Password Mistakes to Avoid</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sending the Password in the Same Email</h3>
                  <p className="text-slate-600">
                    This defeats the entire purpose of encryption. If someone intercepts your email, they get both the file and the password. Always share the password through a separate channel — text message, phone call, or a secure messaging app like Signal.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Reusing the Same Password for Every PDF</h3>
                  <p className="text-slate-600">
                    If one password is compromised, every document using that password is exposed. Use unique passwords for each sensitive document. A password manager makes this easy.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Relying Only on Permissions Without an Open Password</h3>
                  <p className="text-slate-600">
                    A permissions-only password can be bypassed by some PDF tools. For truly sensitive documents, always set an open password (required to view the file) in addition to any permission restrictions. Learn how in our <Link href="/learn/how-to-password-protect-pdf" className="text-orange-600 hover:underline">step-by-step protection guide</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Forgetting to Flatten Before Protecting</h3>
                  <p className="text-slate-600">
                    PDFs with form fields, comments, or layers may contain hidden data that a password alone cannot protect. <Link href="/flatten-pdf" className="text-orange-600 hover:underline">Flatten your PDF</Link> before adding a password to ensure all content is baked into the pages and nothing can be extracted separately.
                  </p>
                </div>
              </div>
            </section>

            {/* Choosing encryption */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Which Encryption Level Should You Use?</h2>
              <p className="text-slate-600 mb-4">
                PDF.it offers multiple encryption levels. Here is a practical guide for choosing the right one:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>128-bit AES:</strong> Fast, widely compatible, strong enough for most business documents. Use this for internal reports, general correspondence, and everyday files.</li>
                <li>&#10003; <strong>256-bit AES:</strong> Maximum security. Use this for legal contracts, financial records, medical data, government documents, and anything with regulatory compliance requirements.</li>
              </ul>
              <p className="text-slate-600 mt-4">
                If you are unsure, go with 256-bit AES. The processing time difference is negligible, and you get the strongest protection available. After protecting your PDF, you can also <Link href="/compress-pdf" className="text-orange-600 hover:underline">compress it</Link> if the file is too large to send by email.
              </p>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Secure Your PDF with a Strong Password</h2>
            <p className="text-slate-300 mb-6">Upload your file, set a strong password and permissions, and download the protected PDF in seconds.</p>
            <Link
              href="/protect-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Shield className="h-5 w-5" /> Protect PDF Now
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
                { title: "How to Protect a PDF Before Sending by Email", href: "/learn/protect-pdf-before-sending" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                { q: "What makes a strong PDF password?", a: "A strong PDF password is at least 12 characters long, combines uppercase and lowercase letters, numbers, and special characters, and avoids dictionary words or personal information like birthdays." },
                { q: "Should I use the same password for all my PDFs?", a: "No. Using the same password for every PDF means that if one password is compromised, all your documents are exposed. Use a unique password for each sensitive document and store them in a password manager." },
                { q: "What PDF permissions can I restrict?", a: "You can restrict printing, copying text, editing content, extracting pages, adding annotations, and filling in forms. PDF.it lets you set all of these permissions when you protect a PDF." },
                { q: "Is 128-bit encryption enough for PDF security?", a: "Yes, 128-bit AES encryption is strong enough for most business and personal documents. For highly confidential files like legal contracts or medical records, 256-bit AES provides an extra layer of security." },
                { q: "Can someone bypass PDF permissions?", a: "Permissions passwords are less secure than open passwords — some tools can bypass them. For maximum security, always set an open password in addition to permissions restrictions." },
                { q: "How should I share the password with the recipient?", a: "Never send the password in the same email as the PDF. Share the password through a different channel — a text message, phone call, or secure messaging app. This way, even if the email is intercepted, the file stays locked." },
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
