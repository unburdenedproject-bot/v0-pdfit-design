import Script from "next/script"
import Link from "next/link"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF a Google Sheets — Convierte Tablas PDF para Google Sheets | PDF.it",
  description:
    "Convierte tablas de PDF a Google Sheets con PDF.it. Extrae datos en formato XLSX y subelos a Google Drive para editar en Google Sheets — rapido y seguro.",
  alternates: {
    canonical: "https://pdf.it.com/es/pdf-a-google-sheets",
    languages: {
      en: "https://pdf.it.com/pdf-to-google-sheets",
      es: "https://pdf.it.com/es/pdf-a-google-sheets",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "¿Como abro tablas de un PDF en Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Convierte tu PDF a XLSX con PDF.it, luego sube el archivo .xlsx a Google Drive. Haz clic derecho en el archivo y selecciona 'Abrir con Google Sheets' para editar los datos directamente.",
      },
    },
    {
      "@type": "Question",
      name: "¿Se extraen las tablas con precision?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Tablas simples y bien formateadas producen los mejores resultados. Tablas complejas con celdas combinadas pueden requerir ajustes manuales.",
      },
    },
    {
      "@type": "Question",
      name: "¿Puedo colaborar en la hoja de calculo con mi equipo?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Si. Una vez que el archivo esta en Google Sheets, puedes compartirlo y colaborar en tiempo real. Filtra, ordena y analiza los datos con tu equipo.",
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
      name: "¿Funciona con PDFs escaneados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Los PDFs escaneados requieren OCR para extraer datos primero. Usa la herramienta de Escaner OCR de PDF.it antes de convertir las tablas a XLSX para Google Sheets.",
      },
    },
  ],
}

export default function PDFaGoogleSheetsPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">PDF a Google Sheets</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extrae tablas y datos de tus PDFs para editar y analizar en Google Sheets. Colabora con tu equipo en tiempo real.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Extraccion de Tablas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Listo para Google Sheets</span>
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
          processingMessage="Convirtiendo tu PDF para Google Sheets..."
          successMessage="¡Tu archivo listo para Google Sheets está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa PDF.it para convertir tablas de PDF en archivos XLSX compatibles con Google Sheets. Simplemente convierte, descarga el .xlsx y subelo a Google Drive para editar, filtrar y analizar los datos con tu equipo. Google Sheets abre archivos XLSX de forma nativa.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extrae tablas de PDF a formato XLSX para Google Sheets</li>
              <li>✓ Sube el archivo a Google Drive y edita directamente</li>
              <li>✓ Colabora en hojas de calculo en tiempo real</li>
              <li>✓ Preserva filas, columnas y estructura de datos</li>
              <li>✓ Sin instalacion — convierte desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Analisis de Datos Colaborativo</h2>
              <p className="text-slate-600">
                Convierte reportes y tablas de PDF a Google Sheets para que tu equipo pueda analizar datos, crear graficos y generar formulas en tiempo real. Perfecto para equipos de finanzas y operaciones.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reportes Compartidos en la Nube</h2>
              <p className="text-slate-600">
                Transforma reportes mensuales, trimestrales o anuales de PDF en hojas de calculo compartidas. Compara periodos, agrega comentarios y mantiene a todo el equipo informado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Presupuestos Colaborativos</h2>
              <p className="text-slate-600">
                Convierte presupuestos y cotizaciones en PDF a Google Sheets para editarlos con tu equipo. Ajusta numeros, agrega partidas y comparte versiones actualizadas al instante.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Seguimiento de Proyectos</h2>
              <p className="text-slate-600">
                Extrae cronogramas y tablas de seguimiento de PDFs para gestionarlos en Google Sheets. Actualiza estados, asigna tareas y filtra por prioridad directamente en la nube.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Convertir PDF para Google Sheets</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a PDF.it.",
                "Haz clic en Convertir para obtener un archivo XLSX.",
                "Descarga el .xlsx y subelo a Google Drive.",
                "Haz clic derecho en el archivo y selecciona 'Abrir con Google Sheets'.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
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
                { name: "PDF a Excel", href: "/es/pdf-a-excel", desc: "Convierte PDF a hoja de calculo" },
                { name: "PDF a XLSX", href: "/es/pdf-a-xlsx", desc: "Convierte PDF a formato XLSX" },
                { name: "Tabla PDF a Excel", href: "/es/tabla-pdf-a-excel", desc: "Extrae tablas especificas" },
                { name: "Tabla PDF a CSV", href: "/es/tabla-pdf-a-csv", desc: "Exporta tablas como CSV" },
                { name: "PDF a Google Docs", href: "/es/pdf-a-google-docs", desc: "PDF para Google Docs" },
                { name: "Escaner OCR", href: "/es/escaner-ocr", desc: "Extrae texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamano del archivo" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa paginas del PDF" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "¿Como abro tablas de un PDF en Google Sheets?", a: "Convierte tu PDF a XLSX con PDF.it, luego sube el archivo .xlsx a Google Drive. Haz clic derecho en el archivo y selecciona 'Abrir con Google Sheets' para editar los datos directamente." },
                { q: "¿Se extraen las tablas con precision?", a: "PDF.it extrae tablas y datos estructurados con la mayor precision posible. Tablas simples y bien formateadas producen los mejores resultados. Tablas complejas con celdas combinadas pueden requerir ajustes manuales." },
                { q: "¿Puedo colaborar en la hoja de calculo con mi equipo?", a: "Si. Una vez que el archivo esta en Google Sheets, puedes compartirlo y colaborar en tiempo real. Filtra, ordena y analiza los datos con tu equipo." },
                { q: "¿Es seguro subir mi PDF?", a: "Si. Todas las transferencias estan cifradas con SSL y tus archivos se eliminan inmediatamente despues de tu sesion. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Funciona con PDFs escaneados?", a: "Los PDFs escaneados requieren OCR para extraer datos primero. Usa la herramienta de Escaner OCR de PDF.it antes de convertir las tablas a XLSX para Google Sheets." },
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
