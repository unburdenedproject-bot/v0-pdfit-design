"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react"
import { cn } from "@/lib/utils"

const faqCategories = [
  {
    title: "General Use",
    questions: [
      {
        question: "Is PDF.it free to use?",
        answer:
          "Yes. PDF.it offers a free tier with 10 conversions per day and files up to 25MB. No account is required for free tools. Upgrade to Pro ($7.99/month) for unlimited conversions, all tools, and files up to 200MB. Business ($13.99/month) supports files up to 1GB.",
      },
      {
        question: "Do I need to create an account?",
        answer:
          "No account is required to use free tools — just upload and convert. An account is required to access Pro features and manage your subscription.",
      },
      {
        question: "What devices and browsers are supported?",
        answer:
          "PDF.it works in modern browsers including Chrome, Firefox, Safari, and Edge on desktop, tablet, and mobile.",
      },
      {
        question: "How fast are the conversions?",
        answer:
          "Most files process quickly, but speed depends on file size, page count, and the tool being used. OCR and large file conversions typically take longer than simple merges or compressions.",
      },
    ],
  },
  {
    title: "Security & Privacy",
    questions: [
      {
        question: "Is it safe to upload my files?",
        answer:
          "Yes. All file transfers use SSL/HTTPS encryption. Files are processed securely and deleted automatically after your session ends. We do not store, review, or share your documents.",
      },
      {
        question: "What happens to my files after conversion?",
        answer:
          "Your uploaded files and converted outputs are deleted from our servers automatically after your session ends. We do not retain your document contents.",
      },
      {
        question: "Can I process confidential documents?",
        answer:
          "Yes. Files are transferred over encrypted connections and deleted after your session. For highly sensitive data, review our Privacy Policy for full details on how files are handled.",
      },
    ],
  },
  {
    title: "Tool Capabilities",
    questions: [
      {
        question: "What file formats are supported?",
        answer:
          "PDF.it supports PDF, JPG, PNG, TXT, and Office formats (Word, Excel, PowerPoint). Tools include convert, compress, merge, split, rotate, protect, unlock, watermark, and OCR.",
      },
      {
        question: "What is the maximum file size?",
        answer:
          "Free accounts can upload files up to 25MB. Pro accounts can upload files up to 200MB. Business accounts can upload files up to 1GB — ideal for legal, accounting, and enterprise documents.",
      },
      {
        question: "Do you preserve formatting and quality?",
        answer:
          "Results are typically very close to the original. Some conversions — particularly complex PDFs, unusual fonts, wide spreadsheets, and scanned documents — may vary depending on the source file.",
      },
      {
        question: "Do you support scanned PDFs and OCR?",
        answer:
          "Yes. The OCR Scanner tool can make scanned PDFs searchable and extract text. It supports 16+ languages and works best with clean, high-resolution scans.",
      },
    ],
  },
  {
    title: "Pricing & Plans",
    questions: [
      {
        question: "What does the free plan include?",
        answer:
          "The free plan includes 10 conversions per day, essential PDF tools, and files up to 25MB. No account required for free tools.",
      },
      {
        question: "What does Pro include?",
        answer:
          "Pro ($7.99/month) includes unlimited conversions, all PDF tools (including OCR, Watermark, and Office to PDF), and files up to 200MB. Business ($13.99/month) adds files up to 1GB, workflow automation, table extraction, PDF comparison, eSign, and PDF redaction.",
      },
    ],
  },
  {
    title: "Support",
    questions: [
      {
        question: "How can I get help?",
        answer:
          "Visit our Contact page or email us at contact@pdf.it.com. We aim to respond within one business day.",
      },
      {
        question: "Why is my PDF conversion not looking right?",
        answer:
          "Formatting issues are most common with complex layouts, custom fonts, or wide spreadsheets. Try simplifying the source file before converting, or use a different export setting if available.",
      },
    ],
  },
]

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onToggle: () => void
  questionId: string
}

function FAQItem({ question, answer, isOpen, onToggle, questionId }: FAQItemProps) {
  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden bg-white">
      <button
        onClick={onToggle}
        className="w-full px-5 py-3 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-inset"
        aria-expanded={isOpen}
        aria-controls={questionId}
      >
        <h4 className="text-sm font-bold text-slate-900 pr-4 leading-relaxed">{question}</h4>
        <div className="flex-shrink-0">
          {isOpen ? (
            <ChevronUp className="h-4 w-4 text-orange-500 transition-transform duration-200" />
          ) : (
            <ChevronDown className="h-4 w-4 text-slate-600 transition-transform duration-200" />
          )}
        </div>
      </button>
      <div
        id={questionId}
        className={cn(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <div className="px-5 pb-3 pt-0.5">
          <p
            className="text-slate-700 text-xs leading-relaxed"
            dangerouslySetInnerHTML={{
              __html: answer,
            }}
          />
        </div>
      </div>
    </div>
  )
}

interface FAQCategoryProps {
  category: (typeof faqCategories)[0]
  openItems: Set<string>
  toggleItem: (itemId: string) => void
}

function FAQCategory({ category, openItems, toggleItem }: FAQCategoryProps) {
  return (
    <div className="mb-5">
      <h3 className="text-base font-bold text-slate-900 mb-2">
        {category.title}
      </h3>
      <div className="space-y-2">
        {category.questions.map((faq, index) => {
          const itemId = `${category.title.toLowerCase().replace(/\s+/g, "-")}-${index}`
          return (
            <FAQItem
              key={itemId}
              question={faq.question}
              answer={faq.answer}
              isOpen={openItems.has(itemId)}
              onToggle={() => toggleItem(itemId)}
              questionId={`faq-answer-${itemId}`}
            />
          )
        })}
      </div>
    </div>
  )
}

export function ComprehensiveFAQSection() {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set())

  const toggleItem = (itemId: string) => {
    const newOpenItems = new Set(openItems)
    if (newOpenItems.has(itemId)) {
      newOpenItems.delete(itemId)
    } else {
      newOpenItems.add(itemId)
    }
    setOpenItems(newOpenItems)
  }

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqCategories.flatMap((category) =>
      category.questions.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer.replace(/<[^>]*>/g, ""),
        },
      })),
    ),
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="py-10 bg-[#F3F4FF]" aria-labelledby="comprehensive-faq-heading">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-8">
              <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                <HelpCircle className="h-5 w-5 text-orange-600" />
              </div>
              <h2 id="comprehensive-faq-heading" className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">
                Frequently Asked Questions
              </h2>
              <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                {"Everything you need to know about PDF.it. Can't find what you're looking for? "}
                <a href="/contact" className="text-orange-500 hover:text-orange-600 font-medium underline">
                  Contact our support team
                </a>
                .
              </p>
            </div>

            {/* FAQ Categories */}
            <div>
              {faqCategories.map((category, index) => (
                <FAQCategory key={index} category={category} openItems={openItems} toggleItem={toggleItem} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div className="mt-8 text-center">
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6">
                <h3 className="text-lg font-bold text-slate-900 mb-2">Still have questions?</h3>
                <p className="text-slate-700 text-xs mb-4 max-w-xl mx-auto leading-relaxed">
                  Our support team is here to help you get the most out of PDF.it.
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:contact@pdf.it.com"
                    onClick={(e) => {
                      e.preventDefault()
                      window.location.href = "mailto:contact@pdf.it.com"
                    }}
                    className="inline-flex items-center justify-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors duration-200 shadow-lg hover:shadow-xl"
                  >
                    Email Us Directly
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
