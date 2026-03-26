import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { PdfCompareInterface } from "@/components/pdf-compare-interface"
import { ArrowLeftRight, Eye, Layers } from "lucide-react"

export const metadata = {
  title: "Comparar PDFs en Línea — Visor de Diferencias Lado a Lado | PDF.it",
  description:
    "Compara dos documentos PDF lado a lado y ve exactamente qué cambió. Resaltado visual de diferencias en rojo. Vistas superpuesta y lado a lado. Función Business de PDF.it.",
  alternates: {
    canonical: "https://pdf.it.com/es/comparar-pdf",
    languages: {
      en: "https://pdf.it.com/pdf-compare",
      es: "https://pdf.it.com/es/comparar-pdf",
      pt: "https://pdf.it.com/br/comparar-pdf",
    },
  },
}

export default function PdfComparePageEs() {
  const faqs = [
    { q: "¿Cómo funciona Comparar PDF?", a: "Sube dos PDFs — un original y una versión modificada. La herramienta renderiza cada página y las compara píxel por píxel. Las diferencias se resaltan en rojo para que puedas ver exactamente qué cambió entre los dos documentos." },
    { q: "¿Qué modos de vista están disponibles?", a: "Tres modos de vista: Lado a Lado muestra ambos documentos uno junto al otro, Superpuesto los mezcla con transparencia, y Diferencias resalta las áreas cambiadas en rojo contra un fondo atenuado." },
    { q: "¿Puedo comparar PDFs con diferente número de páginas?", a: "Sí. Si un PDF tiene más páginas que el otro, la herramienta compara las páginas que existen en ambos documentos y marca las páginas extras como 100% diferentes." },
    { q: "¿Comparar PDF detecta cambios de texto?", a: "Comparar PDF realiza una comparación visual píxel por píxel. Detecta cualquier cambio visible en la página incluyendo ediciones de texto, elementos movidos, contenido agregado o eliminado, cambios de imagen y diferencias de formato." },
    { q: "¿Comparar PDF es gratis?", a: "Comparar PDF está disponible como función del plan Business por $13.99/mes. Incluye la herramienta de comparación junto con otras herramientas Business como Automatización de Flujos, Redacción de PDF, Firma Electrónica y Extracción de Tablas." },
    { q: "¿Puedo descargar un reporte de comparación?", a: "Sí. Haz clic en el botón Reporte para descargar un resumen de texto mostrando el porcentaje de diferencia para cada página, categorizado como Idéntico, Cambios menores, Cambios moderados o Cambios mayores." },
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
                <ArrowLeftRight className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comparar PDFs en Línea</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sube dos documentos PDF y ve exactamente qué cambió entre ellos. Compara contratos, propuestas, reportes y cualquier revisión de documento con un visor visual lado a lado que resalta cada diferencia.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-[#14D8C4]" /><span>Lado a Lado</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-[#14D8C4]" /><span>Vista Superpuesta</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Resaltado de Diferencias</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Cuando recibes un contrato revisado, un reporte actualizado o una propuesta editada, necesitas saber exactamente qué cambió. Comparar PDF sube dos documentos, renderiza cada página y los compara píxel por píxel — resaltando cada diferencia en rojo para que puedas revisar revisiones con confianza.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Comparación visual píxel por píxel</li>
              <li className="flex items-center gap-2">✓ Vistas lado a lado, superpuesta y de diferencias</li>
              <li className="flex items-center gap-2">✓ Reporte de comparación descargable</li>
              <li className="flex items-center gap-2">✓ Funciona en cualquier dispositivo — desde el navegador</li>
            </ul>
          </div>
        </section>

        {/* Interface */}
        <PdfCompareInterface locale="es" />

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
                { title: "Revisiones de Contratos y Legales", desc: "Compara contratos originales y revisados para detectar cambios en términos, precios, fechas y lenguaje legal antes de firmar." },
                { title: "Actualizaciones de Reportes y Datos", desc: "Compara reportes financieros, actualizaciones de proyectos o documentos de cumplimiento para ver qué datos, gráficos o secciones cambiaron entre borradores." },
                { title: "Revisión de Diseño y Maquetación", desc: "Compara pruebas de PDF, folletos o materiales de marketing para verificar cambios de diseño, fuentes, imágenes y diferencias visuales." },
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
                { num: "1", title: "Sube dos PDFs", desc: "Versión original y modificada" },
                { num: "2", title: "Elige el modo de vista", desc: "Lado a lado, superpuesto o diferencias" },
                { num: "3", title: "Revisa y descarga", desc: "Ve las diferencias y obtén un reporte" },
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
                { name: "Redacción PDF", href: "/es/redaccion-pdf", desc: "Elimina permanentemente texto sensible de PDFs." },
                { name: "Firma Electrónica", href: "/es/firma-electronica", desc: "Agrega firmas electrónicas a PDFs." },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña a tus documentos." },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en un solo archivo." },
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

        {/* FAQ Schema */}
        <Script id="faq-schema-es" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a },
          })),
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
