import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { WorkflowInterface } from "@/components/workflow-interface"
import { Repeat, Zap, Shield, Layers } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Automatización de Flujos PDF — Encadena Herramientas en Un Clic | PDF.it",
  description:
    "Automatiza flujos de trabajo PDF de múltiples pasos con PDF.it. Aplana, comprime, agrega marca de agua, rota y protege — todo en un clic. Elige flujos preestablecidos o crea flujos personalizados de hasta 5 pasos.",
  alternates: {
    canonical: "https://pdf.it.com/es/automatizacion",
    languages: {
      en: "https://pdf.it.com/workflow-automation",
      es: "https://pdf.it.com/es/automatizacion",
      pt: "https://pdf.it.com/br/automacao",
    },
  },
}

export default function WorkflowAutomationPageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Repeat className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Automatización de Flujos</h1>
              <p className="text-xl text-slate-300 mb-8">
                Encadena múltiples herramientas PDF en un flujo de trabajo automatizado. Aplana, comprime, agrega marca de agua y protege — todo en un solo clic.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Hasta 5 Pasos</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-[#14D8C4]" /><span>Flujos Preestablecidos + Personalizados</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Después de la Sesión</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Deja de usar herramientas PDF una a la vez. La Automatización de Flujos te permite encadenar múltiples operaciones — aplanar formularios, comprimir, agregar marca de agua, rotar y proteger con contraseña — en un solo proceso automatizado. Elige entre flujos preestablecidos o crea el tuyo propio con hasta 5 pasos.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Encadena hasta 5 herramientas PDF en un flujo</li>
              <li className="flex items-center gap-2">✓ Opciones de flujos preestablecidos y personalizados</li>
              <li className="flex items-center gap-2">✓ Aplana, comprime, marca de agua, rota, protege</li>
              <li className="flex items-center gap-2">✓ Archivos eliminados después de tu sesión</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <WorkflowInterface locale="es" />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Flujos Preestablecidos", desc: "Combinaciones comunes listas para usar: aplanar + comprimir, aplanar + comprimir + marca de agua, y más." },
                { title: "Flujos Personalizados", desc: "Crea el tuyo propio seleccionando y ordenando hasta 5 pasos, cada uno configurable individualmente." },
                { title: "Procesamiento en Un Clic", desc: "Sube tu PDF, selecciona tu flujo y descarga el resultado — todos los pasos se ejecutan automáticamente." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Funciona</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Elige tu flujo", desc: "Selecciona un preestablecido o crea uno personalizado" },
                { num: "2", title: "Sube tu PDF", desc: "Arrastra y suelta tu archivo" },
                { num: "3", title: "Descarga el resultado", desc: "Todos los pasos se ejecutan automáticamente" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Extracción de Tablas", href: "/es/extraccion-de-tablas", desc: "Extrae tablas de PDFs" },
                { name: "Comparar PDF", href: "/es/comparar-pdf", desc: "Compara dos archivos PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana campos de formulario" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Qué es la Automatización de Flujos?", a: "Te permite encadenar varias herramientas PDF en un solo proceso automatizado. Por ejemplo, aplanar formularios, comprimir el archivo y agregar una marca de agua — todo en un solo clic en vez de tres pasos separados." },
                { q: "¿Qué herramientas puedo encadenar?", a: "Puedes combinar: Aplanar PDF, Comprimir PDF, Marca de Agua PDF, Rotar PDF y Proteger con Contraseña. Puedes usar hasta 5 pasos por flujo de trabajo." },
                { q: "¿La Automatización de Flujos es gratis?", a: "La Automatización de Flujos está disponible en el plan Business ($13.99/mes) y superiores. Incluye flujos ilimitados junto con todas las demás herramientas Business." },
                { q: "¿Puedo crear flujos personalizados?", a: "Sí. Puedes elegir entre flujos preestablecidos o crear tu propio flujo personalizado seleccionando y ordenando hasta 5 pasos. Cada paso se puede configurar individualmente." },
                { q: "¿Cuántos pasos puedo encadenar?", a: "Hasta 5 pasos por flujo de trabajo. Cada paso se ejecuta en secuencia sobre tu PDF." },
                { q: "¿Mi PDF se almacena después del procesamiento?", a: "No. Todos los archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos tus documentos." },
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
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script id="faq-schema-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Qué es la Automatización de Flujos?", "acceptedAnswer": { "@type": "Answer", "text": "La Automatización de Flujos te permite encadenar varias herramientas PDF en un solo proceso automatizado. Por ejemplo, aplanar formularios, comprimir el archivo y agregar una marca de agua — todo en un solo clic en vez de tres pasos separados." } },
            { "@type": "Question", "name": "¿Qué herramientas puedo encadenar?", "acceptedAnswer": { "@type": "Answer", "text": "Puedes combinar: Aplanar PDF, Comprimir PDF, Marca de Agua PDF, Rotar PDF y Proteger con Contraseña. Puedes usar hasta 5 pasos por flujo de trabajo." } },
            { "@type": "Question", "name": "¿La Automatización de Flujos es gratis?", "acceptedAnswer": { "@type": "Answer", "text": "La Automatización de Flujos está disponible en el plan Business ($13.99/mes) y superiores. Incluye flujos ilimitados junto con todas las demás herramientas Business." } },
            { "@type": "Question", "name": "¿Puedo crear flujos personalizados?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes elegir entre flujos preestablecidos o crear tu propio flujo personalizado seleccionando y ordenando hasta 5 pasos. Cada paso se puede configurar individualmente." } },
            { "@type": "Question", "name": "¿Cuántos pasos puedo encadenar?", "acceptedAnswer": { "@type": "Answer", "text": "Hasta 5 pasos por flujo de trabajo. Cada paso se ejecuta en secuencia sobre tu PDF." } },
            { "@type": "Question", "name": "¿Mi PDF se almacena después del procesamiento?", "acceptedAnswer": { "@type": "Answer", "text": "No. Todos los archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos tus documentos." } },
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
