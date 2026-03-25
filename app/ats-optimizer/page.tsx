import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { AtsOptimizerInterface } from "@/components/ats-optimizer-interface"
import { Target, Zap, Shield, FileText, Merge, Lock, Scan, Type } from "lucide-react"

export const metadata = {
  title: "Resume ATS Optimizer — Score Your Resume for ATS Compatibility | PDF.it",
  description:
    "Upload your resume and get an instant ATS compatibility score. PDF.it's AI-powered Resume ATS Optimizer analyzes formatting, keywords, sections, and structure — then tells you exactly what to fix.",
  alternates: {
    languages: {
      en: "/ats-optimizer",
      es: "/es/optimizador-ats",
      pt: "/br/otimizador-ats",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is an ATS and why does it matter for my resume?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "An Applicant Tracking System (ATS) is software used by employers to filter and rank resumes before a human ever sees them. If your resume isn't ATS-friendly, it may be automatically rejected — even if you're qualified for the job."
      }
    },
    {
      "@type": "Question",
      "name": "How does the ATS scoring work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Our AI analyzes your resume across multiple dimensions: formatting compatibility, keyword relevance, section structure, and readability. You receive a score from 0 to 100 along with specific recommendations to improve each area."
      }
    },
    {
      "@type": "Question",
      "name": "What is a good ATS score?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A score of 80 or above is considered strong. Scores between 60–79 are average and may pass some systems. Below 60 means your resume likely needs significant improvements to pass ATS filters."
      }
    },
    {
      "@type": "Question",
      "name": "Does the ATS optimizer work for resumes in multiple languages?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Our AI can analyze resumes written in English, Spanish, Portuguese, and many other languages. The scoring criteria are universal across all languages."
      }
    },
    {
      "@type": "Question",
      "name": "Is my resume stored after analysis?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your resume is processed in real time and deleted from our servers immediately after analysis. We never store, share, or sell your personal data."
      }
    }
  ]
}

export default function AtsOptimizerPage() {
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
                <Target className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Resume ATS Optimizer</h1>
              <p className="text-xl text-slate-300 mb-8">
                Upload your resume and get an instant ATS compatibility score. Our AI analyzes formatting, keywords, sections, and structure — then tells you exactly what to fix.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>AI-Powered Analysis</span></div>
                <div className="flex items-center gap-2"><Target className="h-4 w-4 text-orange-500" /><span>ATS Score 0-100</span></div>
                <div className="flex items-center gap-2"><Scan className="h-4 w-4 text-orange-500" /><span>Keyword Analysis</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* ATS Optimizer Interface */}
        <AtsOptimizerInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How It Works</h2>
            <div className="space-y-4">
              {[
                { title: "Upload Resume", desc: "Upload your resume in PDF format. Drag and drop or click to browse." },
                { title: "AI Analyzes", desc: "Our AI scans your resume for ATS compatibility — checking formatting, keywords, sections, and structure." },
                { title: "Get Results", desc: "Receive a detailed ATS score from 0 to 100 with actionable recommendations to improve your resume." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900">{step.title}</h3>
                    <p className="text-slate-700 text-sm">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why ATS Matters */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Why ATS Compatibility Matters</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Over 75% of resumes are rejected by Applicant Tracking Systems before a human recruiter ever sees them. These automated filters scan for specific keywords, formatting patterns, and section headers — and if your resume doesn't match, it gets discarded regardless of your qualifications.
              </p>
              <p>
                That means even highly qualified candidates can miss out on interviews simply because their resume wasn't formatted for ATS software. Our Resume ATS Optimizer helps you identify and fix these issues so your resume reaches the hiring manager's desk.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Who Is This For?</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { title: "Job Seekers", desc: "Optimize your resume before applying to maximize your chances of passing ATS filters and landing interviews." },
                { title: "Career Changers", desc: "Ensure your resume highlights transferable skills and uses the right keywords for your new industry." },
                { title: "Recent Graduates", desc: "Get your first resume right. Learn what ATS systems look for and structure your resume to stand out." },
                { title: "Recruiters", desc: "Quickly assess whether candidate resumes are ATS-optimized before submitting them to client companies." },
              ].map((card, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{card.title}</h3>
                  <p className="text-slate-600 text-sm">{card.desc}</p>
                </div>
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
                  q: "What is an ATS and why does it matter for my resume?",
                  a: "An Applicant Tracking System (ATS) is software used by employers to filter and rank resumes before a human ever sees them. If your resume isn't ATS-friendly, it may be automatically rejected — even if you're qualified for the job.",
                },
                {
                  q: "How does the ATS scoring work?",
                  a: "Our AI analyzes your resume across multiple dimensions: formatting compatibility, keyword relevance, section structure, and readability. You receive a score from 0 to 100 along with specific recommendations to improve each area.",
                },
                {
                  q: "What is a good ATS score?",
                  a: "A score of 80 or above is considered strong. Scores between 60–79 are average and may pass some systems. Below 60 means your resume likely needs significant improvements to pass ATS filters.",
                },
                {
                  q: "Does the ATS optimizer work for resumes in multiple languages?",
                  a: "Yes. Our AI can analyze resumes written in English, Spanish, Portuguese, and many other languages. The scoring criteria are universal across all languages.",
                },
                {
                  q: "Is my resume stored after analysis?",
                  a: "No. Your resume is processed in real time and deleted from our servers immediately after analysis. We never store, share, or sell your personal data.",
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

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black mb-4">Ready to Beat the ATS?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Upload your resume now and get an instant ATS compatibility score with actionable recommendations.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Optimize Your Resume
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF to Word", href: "/pdf-to-word", icon: FileText, desc: "Convert PDF to editable Word" },
                { name: "Merge PDF", href: "/merge-pdf", icon: Merge, desc: "Combine multiple PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", icon: Zap, desc: "Reduce PDF file size" },
                { name: "OCR Scanner", href: "/ocr-scanner", icon: Scan, desc: "Extract text from scans" },
                { name: "Word to PDF", href: "/word-to-pdf", icon: Type, desc: "Convert Word to PDF" },
                { name: "Protect PDF", href: "/protect-pdf", icon: Lock, desc: "Password-protect your PDF" },
                { name: "URL to PDF", href: "/url-to-pdf", icon: Shield, desc: "Save any webpage as PDF" },
                { name: "Flatten PDF", href: "/flatten-pdf", icon: FileText, desc: "Flatten PDF form fields" },
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
      </main>
      <Footer />
    </div>
  )
}
