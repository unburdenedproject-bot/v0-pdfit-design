import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Upload, Zap, Shield, CheckCircle } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF Listo para Subir — Optimizar PDF para Portales | PDF.it",
  description:
    "Prepara tu PDF para subir con un clic. PDF.it aplana formularios, comprime el tamaño y corrige errores comunes — funciona con cualquier portal, sin registro.",
  alternates: {
    languages: {
      en: "/upload-ready-pdf",
      es: "/es/pdf-listo-para-subir",
    },
  },
}

export default function PDFListoParaSubirPage() {
  const faqs = [
    { q: "¿Qué hace PDF Listo para Subir?", a: "Automáticamente aplana campos de formulario y anotaciones, comprime el tamaño del archivo y optimiza la estructura del PDF — todo en un clic. El resultado es un PDF limpio que funciona con cualquier portal de carga." },
    { q: "¿Por qué mi PDF es rechazado cuando lo subo?", a: "Las razones más comunes son: archivo muy grande, campos de formulario interactivos que no se muestran correctamente, funciones PDF no compatibles o estructura corrupta. PDF Listo para Subir corrige todo esto automáticamente." },
    { q: "¿Con qué portales funciona?", a: "Con cualquier portal — formularios del gobierno, aplicaciones universitarias, sitios de empleo, solicitudes de visa, reclamos de seguro, trámites judiciales y más. El resultado es un PDF universalmente compatible." },
    { q: "¿Se preservan los datos de mi formulario?", a: "Sí. Todos tus datos ingresados, firmas y anotaciones se fusionan permanentemente en el PDF. No se pierde nada — simplemente se vuelve no editable." },
    { q: "¿Es diferente a solo comprimir un PDF?", a: "Sí. La compresión solo reduce el tamaño del archivo. PDF Listo para Subir también aplana formularios, fusiona anotaciones y optimiza la estructura del PDF para prevenir rechazos causados por elementos interactivos." },
    { q: "¿Es gratis?", a: "Sí. Las cuentas gratuitas tienen 10 conversiones por día con optimización automática. Las cuentas Pro tienen conversiones ilimitadas con controles avanzados como tamaño objetivo y nivel de compresión." },
  ]

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
                <Upload className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF Listo para Subir</h1>
              <p className="text-xl text-slate-300 mb-8">
                Un clic para arreglar y optimizar tu PDF para cualquier portal de carga. Aplana formularios, comprime el tamaño y corrige errores comunes de rechazo — automáticamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Optimización en Un Clic</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><CheckCircle className="h-4 w-4 text-[#14D8C4]" /><span>Funciona con Cualquier Portal</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              ¿Cansado de que los portales rechacen tu PDF? La herramienta PDF Listo para Subir de PDF.it corrige los problemas más comunes en un clic — archivos demasiado grandes, campos de formulario en blanco, anotaciones no compatibles y funciones PDF incompatibles. El resultado es un PDF limpio y universalmente compatible que funciona en todas partes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Aplana campos de formulario para que los datos se muestren correctamente</li>
              <li className="flex items-center gap-2">✓ Comprime el tamaño del archivo para límites de carga</li>
              <li className="flex items-center gap-2">✓ Funciona con portales del gobierno, universidades y empleo</li>
              <li className="flex items-center gap-2">✓ Sin instalación — optimiza PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Upload Ready PDF"
          outputFormat="PDF"
          processingMessage="Preparando tu PDF para subir..."
          successMessage="¡Tu PDF listo para subir está preparado!"
        />

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
                { title: "Aplanar, Comprimir y Optimizar", desc: "Los campos de formulario y anotaciones se fusionan en la página, el tamaño se reduce y la estructura del PDF se limpia — todo en un clic." },
                { title: "Portales de Gobierno y Visas", desc: "Los portales del gobierno son estrictos con el formato y tamaño del PDF. PDF Listo para Subir asegura que tus formularios estén aplanados, comprimidos y compatibles." },
                { title: "Empleo, Universidad y Trámites Legales", desc: "Los portales de RR.HH., sistemas universitarios y trámites judiciales frecuentemente rechazan PDFs con campos interactivos o archivos grandes. Un clic lo soluciona." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Preparar un PDF para Subir</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
                { num: "2", title: "Haz clic en Listo para Subir", desc: "El aplanado y la compresión se aplican automáticamente" },
                { num: "3", title: "Descarga tu PDF", desc: "Obtén tu archivo optimizado al instante" },
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
                { name: "Comprimir a 5MB", href: "/es/comprimir-pdf-a-5mb", desc: "Cumple límites de 5MB" },
                { name: "Comprimir a 2MB", href: "/es/comprimir-pdf-a-2mb", desc: "Cumple límites de 2MB" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Solo aplanar formularios" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Solo reducir tamaño" },
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
              {faqs.map((faq, i) => (
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

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
