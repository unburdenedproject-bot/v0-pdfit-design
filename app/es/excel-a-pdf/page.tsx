import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, CheckCircle, Zap, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir Excel a PDF Online — XLSX a PDF Gratis | OmnisPDF",
  description:
    "Convierte Excel a PDF en segundos con OmnisPDF. Transforma hojas de calculo XLS o XLSX en un PDF limpio y listo para compartir — rapido, facil y desde tu navegador.",
  alternates: {
    canonical: "https://omnispdf.com/es/excel-a-pdf",
    languages: {
      en: "https://omnispdf.com/excel-to-pdf",
      es: "https://omnispdf.com/es/excel-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿OmnisPDF puede convertir tanto XLS como XLSX a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. OmnisPDF soporta ambos formatos de archivo .xls y .xlsx.",
      },
    },
    {
      "@type": "Question",
      name: "¿El formato de mi Excel se mantendra en el PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "En la mayoria de los casos, si. Hojas de calculo complejas con columnas muy anchas o fuentes personalizadas pueden verse ligeramente diferentes segun el archivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Por que las columnas se cortan en mi conversion de Excel a PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Esto generalmente ocurre cuando la hoja es mas ancha que la pagina PDF. Intenta usar un diseno de impresion ajustado a la pagina en Excel antes de subir el archivo.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo convertir Excel a PDF en mi celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. OmnisPDF funciona en navegadores moviles — sube el archivo XLSX y descarga el PDF.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi archivo Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "¿Cual es el tamano maximo de archivo que puedo convertir?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function ExcelaPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Table className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Excel a PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte XLS/XLSX a PDF con OmnisPDF — ideal para compartir reportes, facturas y hojas de calculo en un formato consistente y listo para imprimir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4 text-orange-500" />
                  <span>Tablas Preservadas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>XLS y XLSX Soportados</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".xls,.xlsx"
          toolName="Excel to PDF"
          outputFormat="PDF"
          processingMessage="Converting your spreadsheet..."
          successMessage="Your PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de Excel a PDF de OmnisPDF para transformar una hoja de calculo XLS o XLSX en un PDF que puedes compartir con cualquier persona. Ideal para reportes, impresion, envio por correo y entrega de archivos — convierte en segundos y descarga tu PDF al instante.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte Excel a PDF online en segundos</li>
              <li>✓ Soporta hojas de calculo .xls y .xlsx</li>
              <li>✓ Crea PDFs listos para compartir, imprimir y enviar por correo</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — conversion desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Exporta XLSX a PDF para Compartir Facilmente</h2>
              <p className="text-slate-600">
                PDF es la forma mas sencilla de compartir hojas de calculo sin sorpresas de diseno. Convierte Excel a PDF para que los destinatarios lo vean de manera consistente — sin necesitar Excel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">PDFs Listos para Imprimir para Reportes y Facturas</h2>
              <p className="text-slate-600">
                Transforma hojas de calculo en PDFs que son mas faciles de imprimir, adjuntar a correos o subir a portales para contabilidad, escuela y trabajo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantiene las Tablas Legibles</h2>
              <p className="text-slate-600">
                OmnisPDF convierte tus hojas en un PDF optimizado para visualizacion e impresion estandar, manteniendo tus datos claros y organizados.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir Excel a PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu archivo XLS/XLSX a OmnisPDF.",
                "Haz clic en Convertir Excel a PDF.",
                "Descarga tu PDF.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Word a PDF", href: "/es/word-a-pdf", desc: "Convierte documentos Word a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del PDF" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "PDF a JPG", href: "/es/pdf-a-jpg", desc: "Extrae paginas como imagenes" },
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

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                {
                  q: "¿OmnisPDF puede convertir tanto XLS como XLSX a PDF?",
                  a: "Si. OmnisPDF soporta ambos formatos de archivo .xls y .xlsx.",
                },
                {
                  q: "¿El formato de mi Excel se mantendra en el PDF?",
                  a: "En la mayoria de los casos, si. Hojas de calculo complejas con columnas muy anchas o fuentes personalizadas pueden verse ligeramente diferentes segun el archivo.",
                },
                {
                  q: "¿Por que las columnas se cortan en mi conversion de Excel a PDF?",
                  a: "Esto generalmente ocurre cuando la hoja es mas ancha que la pagina PDF. Intenta usar un diseno de impresion ajustado a la pagina en Excel antes de subir el archivo.",
                },
                {
                  q: "¿Puedo convertir Excel a PDF en mi celular?",
                  a: "Si. OmnisPDF funciona en navegadores moviles — sube el archivo XLSX y descarga el PDF.",
                },
                {
                  q: "¿Es seguro subir mi archivo Excel?",
                  a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cual es el tamano maximo de archivo que puedo convertir?",
                  a: "Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
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
      </main>
      <FooterEs />
    </div>
  )
}
