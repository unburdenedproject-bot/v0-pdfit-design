import Script from "next/script"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { WorkflowInterface } from "@/components/workflow-interface"
import { Repeat, Zap, Shield, Layers } from "lucide-react"

export const metadata = {
  title: "Workflow Automation — Chain PDF Tools in One Click | PDF.it",
  description:
    "Automate multi-step PDF workflows. Flatten, compress, watermark, rotate, and protect — all in one click. PDF.it Business feature.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Workflow Automation?",
      "acceptedAnswer": { "@type": "Answer", "text": "Workflow Automation lets you chain multiple PDF tools into one automated process. For example, flatten forms, compress the file, and add a watermark — all in a single click instead of three separate steps." }
    },
    {
      "@type": "Question",
      "name": "Which tools can I chain together?",
      "acceptedAnswer": { "@type": "Answer", "text": "You can combine: Flatten PDF, Compress PDF, Watermark PDF, Rotate PDF, and Password Protect. You can use up to 5 steps per workflow." }
    },
    {
      "@type": "Question",
      "name": "Is Workflow Automation free?",
      "acceptedAnswer": { "@type": "Answer", "text": "Workflow Automation is a Business plan feature ($13.99/month). It includes unlimited workflows along with all other Business tools like Table Extraction, PDF Compare, and eSign." }
    },
    {
      "@type": "Question",
      "name": "Can I create custom workflows?",
      "acceptedAnswer": { "@type": "Answer", "text": "Yes. You can choose from preset workflows or build your own custom workflow by selecting and ordering up to 5 steps. Each step can be configured individually." }
    },
  ]
}

export default function WorkflowAutomationPage() {
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
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Repeat className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Workflow Automation</h1>
              <p className="text-xl text-slate-300 mb-8">
                Chain multiple PDF tools into one automated workflow. Flatten, compress, watermark, and protect — all in a single click.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Up to 5 Steps</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Preset + Custom Workflows</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Files Deleted After Session</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Interface */}
        <WorkflowInterface locale="en" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">How It Works</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Choose Steps", desc: "Pick a preset workflow or build your own by adding up to 5 steps." },
                { step: "2", title: "Upload PDF", desc: "Drop your PDF file into the upload zone." },
                { step: "3", title: "Download Result", desc: "All steps run automatically. Download your processed PDF when done." },
              ].map((item) => (
                <div key={item.step} className="bg-white border border-gray-200 rounded-xl p-6 text-center">
                  <div className="w-10 h-10 bg-indigo-500 text-white rounded-full flex items-center justify-center font-black text-lg mx-auto mb-3">
                    {item.step}
                  </div>
                  <div className="text-lg font-bold text-slate-900 mb-2">{item.title}</div>
                  <p className="text-sm text-slate-600">{item.desc}</p>
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
                { q: "What is Workflow Automation?", a: "It lets you chain multiple PDF tools into one automated process. For example, flatten forms, compress the file, and add a watermark — all in a single click instead of three separate steps." },
                { q: "Which tools can I chain together?", a: "You can combine: Flatten PDF, Compress PDF, Watermark PDF, Rotate PDF, and Password Protect. You can use up to 5 steps per workflow." },
                { q: "Is Workflow Automation free?", a: "Workflow Automation is a Business plan feature ($13.99/month). It includes unlimited workflows along with all other Business tools." },
                { q: "Can I create custom workflows?", a: "Yes. You can choose from preset workflows or build your own custom workflow by selecting and ordering up to 5 steps. Each step can be configured individually." },
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
