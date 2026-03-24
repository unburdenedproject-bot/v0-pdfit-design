import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { PdfCompareInterface } from "@/components/pdf-compare-interface"
import { ArrowLeftRight, Eye, Layers, Zap, Shield, Lock, PenTool, FileText, Merge, Repeat } from "lucide-react"

export const metadata = {
  title: "Comparar PDFs en Línea — Visor de Diferencias Lado a Lado | PDF.it",
  description:
    "Compara dos documentos PDF lado a lado y ve exactamente qué cambió. Resaltado visual de diferencias en rojo. Vistas superpuesta y lado a lado. Función Business de PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo funciona Comparar PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube dos PDFs — un original y una versión modificada. La herramienta renderiza cada página y las compara píxel por píxel. Las diferencias se resaltan en rojo para que puedas ver exactamente qué cambió entre los dos documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Qué modos de vista están disponibles?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tres modos de vista: Lado a Lado muestra ambos documentos uno junto al otro, Superpuesto los mezcla con transparencia, y Diferencias resalta las áreas cambiadas en rojo contra un fondo atenuado." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo comparar PDFs con diferente número de páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Si un PDF tiene más páginas que el otro, la herramienta compara las páginas que existen en ambos documentos y marca las páginas extras como 100% diferentes." }
    },
    {
      "@type": "Question",
      "name": "¿Comparar PDF detecta cambios de texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Comparar PDF realiza una comparación visual píxel por píxel. Detecta cualquier cambio visible en la página incluyendo ediciones de texto, elementos movidos, contenido agregado o eliminado, cambios de imagen y diferencias de formato." }
    },
    {
      "@type": "Question",
      "name": "¿Comparar PDF es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Comparar PDF está disponible como función del plan Business por $13.99/mes. Incluye la herramienta de comparación junto con otras herramientas Business como Automatización de Flujos, Redacción de PDF, Firma Electrónica y Extracción de Tablas." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo descargar un reporte de comparación?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Haz clic en el botón Reporte para descargar un resumen de texto mostrando el porcentaje de diferencia para cada página, categorizado como Idéntico, Cambios menores, Cambios moderados o Cambios mayores." }
    },
  ]
}

export default function PdfComparePageEs() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema-es"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ArrowLeftRight className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comparar PDFs en Línea</h1>
              <p className="text-xl text-slate-300 mb-4">
                Sube dos documentos PDF y ve exactamente qué cambió entre ellos. Compara contratos, propuestas, reportes y cualquier revisión de documento con un visor visual lado a lado que resalta cada diferencia.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Detecta ediciones, adiciones, eliminaciones y cambios de formato al instante — sin necesidad de lectura manual.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><ArrowLeftRight className="h-4 w-4 text-indigo-400" /><span>Lado a Lado</span></div>
                <div className="flex items-center gap-2"><Layers className="h-4 w-4 text-indigo-400" /><span>Vista Superpuesta</span></div>
                <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-indigo-400" /><span>Resaltado de Diferencias</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Compare Interface */}
        <PdfCompareInterface locale="es" />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube Dos PDFs", desc: "Sube el documento original y la versión modificada. Cada PDF se renderiza página por página para la comparación." },
                { step: "2", title: "Elige un Modo de Vista", desc: "Cambia entre Lado a Lado, Superpuesto y vista de Diferencias. Cada modo muestra los cambios de una manera diferente." },
                { step: "3", title: "Revisa y Reporta", desc: "Navega por las páginas, ve los porcentajes de diferencia y descarga un reporte resumen mostrando qué cambió en cada página." },
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

        {/* Why Compare PDFs */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">¿Por Qué Comparar PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Cuando recibes un contrato revisado, un reporte actualizado o una propuesta editada, necesitas saber exactamente qué cambió. Leer el documento completo manualmente es lento y propenso a errores.
              </p>
              <p className="text-slate-600 text-center">
                Comparar PDF te muestra cada diferencia de un vistazo — texto cambiado, elementos movidos, contenido agregado o eliminado — para que puedas revisar revisiones con confianza y detectar ediciones inesperadas antes de firmar o aprobar.
              </p>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comunes</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Revisiones de Contratos</h3>
                <p className="text-slate-600">
                  Compara contratos originales y revisados para detectar cambios en términos, precios, fechas y lenguaje legal. Asegúrate de que nada fue agregado o eliminado sin tu conocimiento antes de firmar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Actualizaciones de Reportes</h3>
                <p className="text-slate-600">
                  Compara diferentes versiones de reportes financieros, actualizaciones de proyectos o documentos de cumplimiento. Ve qué datos, gráficos o secciones cambiaron entre borradores.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Revisión de Diseño y Maquetación</h3>
                <p className="text-slate-600">
                  Compara pruebas de PDF, folletos o materiales de marketing para verificar cambios de diseño, fuentes, imágenes y otras diferencias visuales entre revisiones.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legales y de Cumplimiento</h3>
                <p className="text-slate-600">
                  Revisa actualizaciones de políticas, presentaciones regulatorias y acuerdos legales para asegurar que solo se hicieron cambios autorizados. La comparación visual facilita detectar ediciones no autorizadas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo funciona Comparar PDF?", a: "Sube dos PDFs — un original y una versión modificada. La herramienta renderiza cada página y las compara píxel por píxel. Las diferencias se resaltan en rojo." },
                { q: "¿Qué modos de vista hay?", a: "Tres modos: Lado a Lado muestra ambos documentos juntos, Superpuesto los mezcla con transparencia, y Diferencias resalta las áreas cambiadas en rojo." },
                { q: "¿Puedo comparar PDFs con diferente número de páginas?", a: "Sí. La herramienta compara las páginas que existen en ambos documentos y marca las páginas extras como 100% diferentes." },
                { q: "¿Detecta cambios de texto?", a: "Realiza una comparación visual píxel por píxel. Detecta cualquier cambio visible incluyendo ediciones de texto, elementos movidos, contenido agregado o eliminado." },
                { q: "¿Es gratis?", a: "Comparar PDF está disponible como función del plan Business por $13.99/mes." },
                { q: "¿Puedo descargar un reporte?", a: "Sí. Haz clic en el botón Reporte para descargar un resumen mostrando el porcentaje de diferencia para cada página." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
            <h2 className="text-2xl font-black mb-4">No Pierdas Ningún Cambio</h2>
            <p className="text-slate-300 text-lg mb-8">
              Compara cualquier par de PDFs y ve exactamente qué fue agregado, eliminado o modificado. Revisa revisiones de contratos, actualizaciones de reportes y ediciones de documentos con confianza.
            </p>
            <Link
              href="/es/comparar-pdf"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Empezar a Comparar
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Más Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Redacción PDF", desc: "Elimina permanentemente texto sensible de PDFs.", href: "/es/redaccion-pdf", icon: Shield },
                { name: "Firma Electrónica", desc: "Agrega firmas electrónicas a PDFs.", href: "/es/firma-electronica", icon: PenTool },
                { name: "Proteger PDF", desc: "Agrega protección con contraseña.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
                { name: "Automatización", desc: "Encadena herramientas PDF en un flujo.", href: "/es/automatizacion", icon: Repeat },
                { name: "Comprimir PDF", desc: "Reduce el tamaño sin perder calidad.", href: "/es/comprimir-pdf", icon: FileText },
                { name: "Dividir PDF", desc: "Divide un PDF en archivos separados.", href: "/es/dividir-pdf", icon: FileText },
                { name: "PDF a JPG", desc: "Convierte páginas PDF a imágenes JPG.", href: "/es/pdf-a-jpg", icon: FileText },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
