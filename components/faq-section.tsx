"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqData = [
  {
    question: "Is OmnisPDF free to use?",
    answer:
      "Yes! All core tools like PDF conversion, merging, splitting, and compression are 100% free. Some advanced features will be available under a low-cost Pro plan.",
  },
  {
    question: "Do I need to create an account?",
    answer:
      "Yes, a free account is required to use our tools. Signing up is quick and easy, and free users get up to 10 conversions per day. Upgrade to Pro for unlimited conversions and priority support.",
  },
  {
    question: "Is it safe to upload my files to OmnisPDF?",
    answer:
      "Yes. Your privacy is a priority. Files are processed securely and are never stored permanently on our servers.",
  },
  {
    question: "What file types are supported?",
    answer: "We support PDF, Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX), JPG, PNG, and more.",
  },
  {
    question: "Can I compress large PDF files?",
    answer:
      "Yes, you can compress files up to 5MB for free. Higher limits and more compression control will be available in the Pro plan.",
  },
  {
    question: "How do I merge multiple PDFs?",
    answer:
      'Just select the Merge tool, upload your files, arrange them in order, and click "Merge PDF." A new combined file will be generated instantly.',
  },
  {
    question: "Do you offer digital signatures or secure links?",
    answer:
      "These features are coming soon. You'll be able to request signatures, protect access, and set link expirations with OmnisPDF Pro.",
  },
  {
    question: "Can I use OmnisPDF on my phone or tablet?",
    answer: "Absolutely. OmnisPDF is fully mobile-friendly and works on any modern device.",
  },
  {
    question: "What's the difference between Free and Pro?",
    answer:
      "Free gives you unlimited access to basic tools. Pro unlocks advanced tools like file locking, batch processing, expiration links, and removes ads.",
  },
  {
    question: "How can I get support?",
    answer: "Visit our Contact page or email us at contact@omnispdf.com. We're happy to help!",
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  index: number
}

function FAQItem({ question, answer, isOpen, onToggle, index }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <button
        onClick={onToggle}
        className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${index}`}
      >
        <h3 className="text-lg font-bold text-slate-900 pr-4 leading-relaxed">{question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-5 w-5 text-orange-500 transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-5 w-5 text-slate-600 transition-transform duration-200" />
          )}
        </div>
      </button>
      <div
        id={`faq-answer-${index}`}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-6 pb-5 pt-2">
          <p className="text-slate-700 leading-relaxed">{answer}</p>
        </div>
      </div>
    </div>
  )
}

export function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set())

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index)
    } else {
      newOpenItems.add(index)
    }
    setOpenItems(newOpenItems)
  }

  // JSON-LD Schema for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return (
    <>
      {/* JSON-LD Schema */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="py-20 bg-white" aria-labelledby="faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <div className="w-16 h-16 bg-orange-100 rounded-xl flex items-center justify-center mx-auto mb-6">
                <HelpCircle className="h-8 w-8 text-orange-600" />
              </div>
              <h2 id="faq-heading" className="text-4xl lg:text-5xl font-black text-slate-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto">
                Everything you need to know about OmnisPDF. Can't find what you're looking for?{" "}
                <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium underline">
                  Contact us
                </a>
                .
              </p>
            </div>

            {/* FAQ Items */}
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <FAQItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={openItems.has(index)}
                  onToggle={() => toggleItem(index)}
                  index={index}
                />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-16 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-4">Still have questions?</h3>
                <p className="text-slate-700 mb-6">Our support team is here to help you get the most out of OmnisPDF.</p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-colors duration-200"
                  >
                    Contact Support
                  </a>
                  <a
                    href="mailto:contact@omnispdf.com"
                    className="inline-flex items-center justify-center px-6 py-3 bg-white hover:bg-gray-50 text-slate-700 font-semibold rounded-lg border border-gray-300 transition-colors duration-200"
                  >
                    Email Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
