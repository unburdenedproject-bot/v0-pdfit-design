import Script from "next/script"
import Link from "next/link"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ResumeBuilderInterface } from "@/components/resume-builder-interface"
import { Sparkles, Zap, Shield, FileText, Merge, Lock, Scan, Target } from "lucide-react"

export const metadata = {
  title: "Create a Professional Resume with AI | PDF.it",
  description:
    "Build an ATS-optimized resume from scratch. Fill in your details and let AI write a polished, job-ready resume you can download as Word and edit anytime.",
  alternates: {
    languages: {
      en: "/create-resume",
      es: "/es/crear-curriculum",
      pt: "/br/criar-curriculo",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How does the AI resume builder work?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "You fill in your personal details, work experience, education, and skills. Our AI then generates a professionally written, ATS-optimized resume that you can download as a Word document and edit anytime."
      }
    },
    {
      "@type": "Question",
      "name": "What format is the resume downloaded in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Your resume is downloaded as a Word (.docx) file, so you can easily edit it in Microsoft Word, Google Docs, or any compatible word processor."
      }
    },
    {
      "@type": "Question",
      "name": "Is the resume ATS-friendly?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. The AI generates resumes with clean formatting, proper section headers, and keyword-rich content designed to pass Applicant Tracking Systems used by most employers."
      }
    },
    {
      "@type": "Question",
      "name": "Can I also generate a cover letter?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. There is an optional cover letter feature that generates a tailored cover letter based on your resume details and the job you are targeting."
      }
    },
    {
      "@type": "Question",
      "name": "Is my personal data stored?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "No. Your information is processed in real time to generate the resume and is not stored on our servers. We never share or sell your personal data."
      }
    }
  ]
}

export default function CreateResumePage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <span className="inline-block bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full mb-4">PRO</span>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Create a Professional Resume</h1>
              <p className="text-xl text-slate-300 mb-8">
                Fill in your details and AI builds a polished, job-ready resume in seconds. Download as Word — edit it anytime.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>AI-Powered</span></div>
                <div className="flex items-center gap-2"><FileText className="h-4 w-4 text-orange-500" /><span>Word Format</span></div>
                <div className="flex items-center gap-2"><Sparkles className="h-4 w-4 text-orange-500" /><span>Cover Letter Option</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Resume Builder Interface */}
        <ResumeBuilderInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">How It Works</h2>
            <div className="space-y-4">
              {[
                { title: "Fill In Your Details", desc: "Enter your contact information, work experience, education, skills, and any other relevant sections." },
                { title: "AI Writes Your Resume", desc: "Our AI takes your input and generates a professionally written, ATS-optimized resume with clean formatting and strong language." },
                { title: "Download Word File", desc: "Download your finished resume as a Word (.docx) file. Open it in any word processor and customize it further if needed." },
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

        {/* Why Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Why Building a Resume From Scratch Is Hard</h2>
            <div className="space-y-4 text-slate-600 text-lg">
              <p>
                Writing a resume from scratch is one of the most stressful parts of job hunting. You have to figure out the right format, choose the right words, highlight the right skills, and make sure the whole thing looks professional — all while competing with hundreds of other applicants.
              </p>
              <p>
                Most people spend hours staring at a blank page or copying outdated templates. Our AI Resume Builder eliminates that struggle. Just fill in your details and let artificial intelligence do the writing. You get a polished, ATS-ready resume in seconds — no design skills or writing experience required.
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
                { title: "First-Time Job Seekers", desc: "Build your first resume with confidence. AI handles formatting, language, and structure so you can focus on your strengths." },
                { title: "Career Changers", desc: "Transitioning to a new field? The AI highlights transferable skills and tailors your resume to your target industry." },
                { title: "Freelancers Going Corporate", desc: "Translate your freelance experience into a corporate-friendly resume that recruiters and ATS systems understand." },
                { title: "International Professionals", desc: "Create a resume that meets local standards and uses professional English, Spanish, or Portuguese — regardless of your native language." },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Frequently Asked Questions</h2>
            <div className="space-y-6">
              {[
                {
                  q: "How does the AI resume builder work?",
                  a: "You fill in your personal details, work experience, education, and skills. Our AI then generates a professionally written, ATS-optimized resume that you can download as a Word document and edit anytime.",
                },
                {
                  q: "What format is the resume downloaded in?",
                  a: "Your resume is downloaded as a Word (.docx) file, so you can easily edit it in Microsoft Word, Google Docs, or any compatible word processor.",
                },
                {
                  q: "Is the resume ATS-friendly?",
                  a: "Yes. The AI generates resumes with clean formatting, proper section headers, and keyword-rich content designed to pass Applicant Tracking Systems used by most employers.",
                },
                {
                  q: "Can I also generate a cover letter?",
                  a: "Yes. There is an optional cover letter feature that generates a tailored cover letter based on your resume details and the job you are targeting.",
                },
                {
                  q: "Is my personal data stored?",
                  a: "No. Your information is processed in real time to generate the resume and is not stored on our servers. We never share or sell your personal data.",
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
            <h2 className="text-3xl font-black mb-4">Ready to Build Your Resume?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Fill in your details and let AI create a professional, job-ready resume in seconds.
            </p>
            <Link
              href="#"
              onClick={undefined}
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              Create Your Resume
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Related Tools</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "ATS Optimizer", href: "/ats-optimizer", icon: Target, desc: "Score your resume for ATS" },
                { name: "PDF to Word", href: "/pdf-to-word", icon: FileText, desc: "Convert PDF to editable Word" },
                { name: "Merge PDF", href: "/merge-pdf", icon: Merge, desc: "Combine multiple PDFs" },
                { name: "Compress PDF", href: "/compress-pdf", icon: Zap, desc: "Reduce PDF file size" },
                { name: "OCR Scanner", href: "/ocr-scanner", icon: Scan, desc: "Extract text from scans" },
                { name: "Protect PDF", href: "/protect-pdf", icon: Lock, desc: "Password-protect your PDF" },
                { name: "URL to PDF", href: "/url-to-pdf", icon: Shield, desc: "Save any webpage as PDF" },
                { name: "Flatten PDF", href: "/flatten-pdf", icon: FileText, desc: "Flatten PDF form fields" },
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
      </main>
      <Footer />
    </div>
  )
}
