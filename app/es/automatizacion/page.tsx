import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { WorkflowInterface } from "@/components/workflow-interface"
import { Repeat, Zap, Shield, Layers } from "lucide-react"

export const metadata = {
  title: "Automatización de Flujos PDF — Encadena Herramientas en Un Clic | PDF.it",
  description:
    "Automatiza flujos de trabajo PDF de múltiples pasos. Aplana, comprime, agrega marca de agua, rota y protege — todo en un clic. Función Business de PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué es la Automatización de Flujos?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Automatización de Flujos te permite encadenar varias herramientas PDF en un solo proceso automatizado. Por ejemplo, aplanar formularios, comprimir el archivo y agregar una marca de agua — todo en un solo clic en vez de tres pasos separados." }
    },
    {
      "@type": "Question",
      "name": "¿Qué herramientas puedo encadenar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes combinar: Aplanar PDF, Comprimir PDF, Marca de Agua PDF, Rotar PDF y Proteger con Contraseña. Puedes usar hasta 5 pasos por flujo de trabajo." }
    },
    {
      "@type": "Question",
      "name": "¿La Automatización de Flujos es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Automatización de Flujos es una función del plan Business ($13.99/mes). Incluye flujos ilimitados junto con todas las demás herramientas Business como Extracción de Tablas, Comparar PDF y Firma Electrónica." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo crear flujos personalizados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes elegir entre flujos preestablecidos o crear tu propio flujo personalizado seleccionando y ordenando hasta 5 pasos. Cada paso se puede configurar individualmente." }
    },
  ]
}

export default function WorkflowAutomationPageEs() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Repeat className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Automatización de Flujos</h1>
              <p className="text-xl text-slate-300 mb-8">
                Encadena múltiples herramientas PDF en un flujo de trabajo automatizado. Aplana, comprime, agrega marca de agua y protege — todo en un solo clic.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Hasta 5 Pasos</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Flujos Preestablecidos + Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Archivos Eliminados Después de la Sesión</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Workflow Interface */}
        <WorkflowInterface locale="es" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Elige los Pasos", desc: "Selecciona un flujo preestablecido o crea el tuyo propio agregando hasta 5 pasos." },
                { step: "2", title: "Sube tu PDF", desc: "Arrastra y suelta tu archivo PDF en la zona de carga." },
                { step: "3", title: "Descarga el Resultado", desc: "Todos los pasos se ejecutan automáticamente. Descarga tu PDF procesado cuando termine." },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Qué es la Automatización de Flujos?", a: "Te permite encadenar varias herramientas PDF en un solo proceso automatizado. Por ejemplo, aplanar formularios, comprimir el archivo y agregar una marca de agua — todo en un solo clic." },
                { q: "¿Qué herramientas puedo encadenar?", a: "Puedes combinar: Aplanar PDF, Comprimir PDF, Marca de Agua PDF, Rotar PDF y Proteger con Contraseña. Puedes usar hasta 5 pasos por flujo." },
                { q: "¿Es gratis?", a: "La Automatización de Flujos es una función del plan Business ($13.99/mes). Incluye flujos ilimitados junto con todas las demás herramientas Business." },
                { q: "¿Puedo crear flujos personalizados?", a: "Sí. Puedes elegir entre flujos preestablecidos o crear tu propio flujo personalizado seleccionando y ordenando hasta 5 pasos." },
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
      <FooterEs />
    </div>
  )
}
