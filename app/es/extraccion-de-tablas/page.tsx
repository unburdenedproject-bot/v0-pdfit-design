import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { Table2, Zap, Shield, FileText, Lock, Layers, Merge, Repeat, ArrowLeftRight, PenTool } from "lucide-react"

export const metadata = {
  title: "Extraer Tablas de PDF a Excel Online | PDF.it",
  description:
    "Extrae tablas de documentos PDF y conviertelas en hojas de calculo Excel. Detecta y exporta datos tabulares automaticamente — rapido y preciso. Funcion Business de PDF.it.",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Que es la Extraccion de Tablas?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Extraccion de Tablas detecta automaticamente tablas dentro de documentos PDF y las convierte en hojas de calculo Excel (.xlsx) editables. Funciona con reportes financieros, facturas, datos cientificos y cualquier PDF que contenga datos tabulares." }
    },
    {
      "@type": "Question",
      "name": "Que tipos de tablas se pueden extraer?",
      "acceptedAnswer": { "@type": "Answer", "text": "La herramienta puede extraer tablas con bordes visibles, tablas sin bordes (basadas en alineacion), tablas de varias paginas y tablas con encabezados combinados. Funciona mejor con tablas estructuradas y limpias." }
    },
    {
      "@type": "Question",
      "name": "La Extraccion de Tablas es gratis?",
      "acceptedAnswer": { "@type": "Answer", "text": "La Extraccion de Tablas esta disponible como funcion del plan Business por $13.99/mes. Incluye extracciones ilimitadas junto con todas las demas herramientas Business como Automatizacion de Flujos, Comparar PDF, Firma Electronica y Redaccion de PDF." }
    },
    {
      "@type": "Question",
      "name": "Puedo extraer tablas de PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para mejores resultados, primero ejecute OCR en el PDF escaneado usando nuestra herramienta Scanner OCR, luego use la Extraccion de Tablas en el PDF con texto reconocido." }
    },
    {
      "@type": "Question",
      "name": "En que formato se exporta el resultado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las tablas se exportan como archivo Excel (.xlsx) que se puede abrir en Microsoft Excel, Google Sheets, LibreOffice Calc y otras aplicaciones de hojas de calculo." }
    },
  ]
}

export default function TableExtractionPageEs() {
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
                <Table2 className="h-10 w-10 text-white" />
              </div>
              <div className="inline-block bg-indigo-100 text-indigo-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide mb-4">
                Business
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extraccion de Tablas de PDF</h1>
              <p className="text-xl text-slate-300 mb-4">
                Extrae tablas de documentos PDF y conviertelas en hojas de calculo Excel editables. Detecta automaticamente datos tabulares en reportes, facturas, estados financieros y documentos cientificos.
              </p>
              <p className="text-lg text-slate-400 mb-8">
                Deja de copiar datos manualmente — deja que PDF.it extraiga tus tablas con precision.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Table2 className="h-4 w-4 text-indigo-400" /><span>Deteccion Automatica</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-indigo-400" /><span>Exportacion a Excel</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-indigo-400" /><span>Archivos Eliminados Despues de la Sesion</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Table Extraction Interface */}
        <TableExtractionInterface />

        {/* How It Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Como Funciona</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { step: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu PDF que contiene tablas en la zona de carga." },
                { step: "2", title: "Deteccion Automatica", desc: "PDF.it detecta automaticamente todas las tablas en el documento usando reconocimiento con inteligencia artificial." },
                { step: "3", title: "Descarga el Excel", desc: "Descarga las tablas extraidas como archivo Excel (.xlsx) listo para edicion y analisis." },
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

        {/* Why Use */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4 text-center">Por que Extraer Tablas de PDFs?</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              <p className="text-slate-600 text-center">
                Los PDFs son excelentes para compartir documentos, pero terribles para trabajar con datos. Cuando necesitas numeros de un reporte financiero, partidas de una factura o datos de investigacion, copiar celda por celda es lento y propenso a errores.
              </p>
              <p className="text-slate-600 text-center">
                La Extraccion de Tablas usa Google Document AI para detectar y extraer tablas automaticamente de cualquier PDF, entregando hojas de calculo Excel limpias listas para analisis, formulas y graficos.
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
                <h3 className="text-xl font-black text-slate-900 mb-3">Reportes Financieros</h3>
                <p className="text-slate-600">
                  Extrae estados financieros, balances generales y reportes de resultados de PDFs directamente a Excel para analisis y modelado financiero.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Facturas y Ordenes de Compra</h3>
                <p className="text-slate-600">
                  Extrae partidas, cantidades, precios y totales de facturas en PDF para importar en sistemas contables u hojas de calculo de seguimiento.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Datos Cientificos y de Investigacion</h3>
                <p className="text-slate-600">
                  Extrae tablas de datos de articulos cientificos, reportes de investigacion y publicaciones academicas para reutilizar en tus propios analisis.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Gubernamentales y Regulatorios</h3>
                <p className="text-slate-600">
                  Extrae datos estadisticos, tablas de cumplimiento y cifras regulatorias de PDFs gubernamentales en hojas de calculo estructuradas para reportes y analisis.
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
                { q: "Que es la Extraccion de Tablas?", a: "Detecta automaticamente tablas dentro de PDFs y las convierte en hojas de calculo Excel editables. Funciona con reportes financieros, facturas, datos cientificos y cualquier PDF con datos tabulares." },
                { q: "Que tipos de tablas se pueden extraer?", a: "Tablas con bordes visibles, tablas sin bordes, tablas de varias paginas y tablas con encabezados combinados. Funciona mejor con tablas estructuradas y limpias." },
                { q: "Es gratis?", a: "La Extraccion de Tablas esta disponible como funcion del plan Business por $13.99/mes." },
                { q: "Puedo extraer tablas de PDFs escaneados?", a: "Para mejores resultados, primero ejecute OCR usando nuestra herramienta Scanner OCR, luego use la Extraccion de Tablas en el PDF procesado." },
                { q: "En que formato se exporta?", a: "Las tablas se exportan como archivo Excel (.xlsx) compatible con Microsoft Excel, Google Sheets y LibreOffice Calc." },
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
            <h2 className="text-2xl font-black mb-4">Convierte Tablas de PDF en Hojas de Calculo</h2>
            <p className="text-slate-300 text-lg mb-8">
              Extrae cualquier tabla de cualquier PDF y obtiene un archivo Excel limpio y formateado en segundos. Sin copiar manualmente.
            </p>
            <Link
              href="/es/extraccion-de-tablas"
              className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comenzar a Extraer
            </Link>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mas Herramientas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comparar PDF", desc: "Compara dos PDFs lado a lado.", href: "/es/comparar-pdf", icon: ArrowLeftRight },
                { name: "Firma Electronica", desc: "Agrega firmas electronicas a PDFs.", href: "/es/firma-electronica", icon: PenTool },
                { name: "Redaccion PDF", desc: "Elimina informacion sensible.", href: "/es/redaccion-pdf", icon: Shield },
                { name: "Automatizacion", desc: "Encadena herramientas PDF en un flujo.", href: "/es/automatizacion", icon: Repeat },
                { name: "Proteger PDF", desc: "Agrega proteccion con contrasena.", href: "/es/proteger-pdf", icon: Lock },
                { name: "Aplanar PDF", desc: "Bloquea campos y anotaciones.", href: "/es/aplanar-pdf", icon: Layers },
                { name: "Comprimir PDF", desc: "Reduce el tamano sin perder calidad.", href: "/es/comprimir-pdf", icon: FileText },
                { name: "Unir PDF", desc: "Combina varios PDFs en uno solo.", href: "/es/unir-pdf", icon: Merge },
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
