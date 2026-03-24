import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF a XLSX — Convierte PDF a Hoja de Cálculo Excel | PDF.it",
  description:
    "Convierte PDF a XLSX con PDF.it. Extrae tablas y datos de tus archivos PDF en hojas de calculo Excel .xlsx editables — rapido, seguro y desde tu navegador.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-xlsx",
    languages: {
      en: "https://pdf.it.com/pdf-to-xlsx",
      es: "https://pdf.it.com/es/pdf-a-xlsx",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Cual es la diferencia entre PDF a Excel y PDF a XLSX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Son lo mismo. XLSX es el formato nativo de Microsoft Excel. Al convertir PDF a XLSX obtienes un archivo .xlsx que puedes abrir y editar en Excel, Google Sheets o cualquier hoja de calculo compatible.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se extraen las tablas con precision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Los resultados pueden variar dependiendo de como fue creado el PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo abrir el archivo XLSX en Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Descarga el archivo .xlsx, subelo a Google Drive y abrelo con Google Sheets para editarlo directamente en tu navegador.",
      },
    },
    {
      "@type": "Question",
      name: "¿Es seguro subir mi PDF?",
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
        text: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB.",
      },
    },
  ],
}

export default function PDFaXLSXPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">PDF a XLSX</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Extrae tablas y datos de tus PDFs en hojas de calculo XLSX editables. Perfecto para analisis financiero y reportes.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Extraccion de Tablas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Archivos Eliminados Tras la Sesion</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Formato XLSX</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Convirtiendo tu PDF a XLSX..."
          successMessage="¡Tu archivo XLSX está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta de PDF a XLSX de PDF.it para extraer tablas y datos de archivos PDF en hojas de calculo Excel editables. El formato XLSX es el estandar de Microsoft Excel — compatible con Excel, Google Sheets, LibreOffice Calc y mas. Sube tu PDF, convierte y descarga un archivo .xlsx listo para analizar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte tablas y datos de PDF a formato XLSX</li>
              <li>✓ Extrae filas, columnas y celdas con precision</li>
              <li>✓ Compatible con Excel, Google Sheets y LibreOffice Calc</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalacion — convierte PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Datos Financieros en Segundos</h2>
              <p className="text-slate-600">
                Convierte estados de cuenta, balances y reportes financieros en PDF a hojas de calculo XLSX editables. Analiza datos, crea graficos y genera formulas sin copiar manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Inventarios y Listas de Precios</h2>
              <p className="text-slate-600">
                Extrae inventarios, catalogos y listas de precios de PDFs para actualizarlos facilmente en Excel. Ideal para comercios, almacenes y equipos de ventas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Tablas de Datos para Analisis</h2>
              <p className="text-slate-600">
                Convierte cualquier tabla de datos en PDF a un formato XLSX que puedes filtrar, ordenar y analizar. Perfecto para investigadores, analistas y equipos de datos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Herramienta Pro para Profesionales</h2>
              <p className="text-slate-600">
                PDF a XLSX es una funcion Pro. Actualiza tu plan para acceder a conversiones ilimitadas, archivos de hasta 200MB y procesamiento prioritario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF a XLSX</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir PDF a XLSX.",
                "Descarga tu archivo .xlsx y abrelo en Excel o Google Sheets.",
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF a hoja de calculo" },
                { name: "Tabla PDF a Excel", href: "/es/tabla-pdf-a-excel", desc: "Extrae tablas especificas" },
                { name: "Tabla PDF a CSV", href: "/es/tabla-pdf-a-csv", desc: "Exporta tablas como CSV" },
                { name: "PDF a Word", href: "/es/pdf-a-word", desc: "Convierte PDF a documento Word" },
                { name: "Excel a PDF", href: "/es/excel-a-pdf", desc: "Convierte Excel a PDF" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa paginas del PDF" },
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
                { q: "¿Cual es la diferencia entre PDF a Excel y PDF a XLSX?", a: "Son lo mismo. XLSX es el formato nativo de Microsoft Excel. Al convertir PDF a XLSX obtienes un archivo .xlsx que puedes abrir y editar en Excel, Google Sheets o cualquier hoja de calculo compatible." },
                { q: "¿Se extraen las tablas con precision?", a: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Los resultados pueden variar dependiendo de como fue creado el PDF original." },
                { q: "¿Puedo abrir el archivo XLSX en Google Sheets?", a: "Si. Descarga el archivo .xlsx, subelo a Google Drive y abrelo con Google Sheets para editarlo directamente en tu navegador." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cual es el tamano maximo de archivo que puedo convertir?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir archivos de hasta 200MB." },
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
