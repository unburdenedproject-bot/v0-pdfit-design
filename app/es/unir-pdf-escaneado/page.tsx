import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Escaneado — Combina Documentos Escaneados | PDF.it",
  description:
    "Combina múltiples PDFs escaneados en un solo documento con PDF.it. Une páginas escaneadas de diferentes fuentes en un archivo limpio — rápido, gratis y desde tu navegador.",
  alternates: {
    languages: {
      en: "/merge-scanned-pdf",
      es: "/es/unir-pdf-escaneado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo uno PDFs escaneados en un solo documento?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tus archivos PDF escaneados a PDF.it, ordénalos y haz clic en Unir. PDF.it combina las páginas escaneadas en un solo documento sin alterar la calidad de imagen." }
    },
    {
      "@type": "Question",
      "name": "¿Unir PDFs escaneados reduce la calidad de imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it une tus páginas escaneadas sin recomprimirlas. Cada página conserva la calidad y resolución original del escaneo." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo aplicar OCR después de unir PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Después de unir tus PDFs escaneados, usa la herramienta Escáner OCR de PDF.it para hacer el texto buscable y seleccionable. El OCR está disponible para usuarios Pro." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tan grandes pueden ser los archivos PDF escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios gratuitos pueden subir PDFs escaneados de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo, ideal para escaneos de alta resolución." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir recibos e facturas escaneadas en un solo PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Por supuesto. Sube todos tus recibos o facturas escaneadas, ordénalos cronológicamente y únelos en un solo documento para contabilidad o informes de gastos." }
    },
    {
      "@type": "Question",
      "name": "¿Funciona con escaneos de la cámara del teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona con PDFs escaneados de cualquier fuente — cámaras de teléfono, escáneres planos, impresoras multifunción o apps de escaneo como CamScanner y Adobe Scan." }
    }
  ]
}

export default function UnirPDFEscaneadoPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF Escaneado</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina PDFs escaneados de diferentes fuentes en un solo documento organizado. Perfecto para recibos, contratos, identificaciones y documentos archivados — rápido, gratis y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Preserva Calidad del Escaneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Uniendo tus PDFs escaneados..."
          successMessage="¡Tu PDF escaneado combinado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Los documentos escaneados frecuentemente terminan como archivos PDF separados — uno por página, uno por lote o uno por sesión de escaneo. PDF.it te permite unir todos tus PDFs escaneados en un solo archivo, manteniendo cada página en su calidad original. Ideal para combinar contratos escaneados, recibos, identificaciones y documentos archivados.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Une PDFs escaneados sin pérdida de calidad</li>
              <li>✓ Combina escaneos de teléfonos, escáneres y apps</li>
              <li>✓ Ordena las páginas antes de unir</li>
              <li>✓ Aplica OCR después para hacer el texto buscable (Pro)</li>
              <li>✓ Funciona en cualquier dispositivo — sin instalación de software</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une Documentos Legales Escaneados</h2>
              <p className="text-slate-600">
                Los contratos firmados frecuentemente llegan como páginas escaneadas separadas. Combina todas las páginas en un documento profesional para tus registros, archivos legales o entregas a clientes — sin páginas faltantes, sin confusión.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina Recibos Escaneados para Informes de Gastos</h2>
              <p className="text-slate-600">
                Escanea tus recibos durante el mes y luego únelos todos en un solo PDF para tu informe de gastos. Contadores y gerentes reciben un solo archivo en vez de una carpeta llena de escaneos sueltos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organiza Registros Médicos y Archivos Escaneados</h2>
              <p className="text-slate-600">
                ¿Digitalizando documentos antiguos? Une lotes de páginas escaneadas en documentos organizados por categoría, fecha o proyecto. Luego usa la herramienta Comprimir PDF de PDF.it para reducir el tamaño de archivos para almacenamiento a largo plazo.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Unir PDFs Escaneados</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tus archivos PDF escaneados a PDF.it.",
                "Ordena las páginas escaneadas en el orden correcto.",
                "Haz clic en Unir y descarga tu documento escaneado combinado.",
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
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs estándar" },
                { name: "Comprimir PDF Escaneado", href: "/es/comprimir-pdf-escaneado", desc: "Reduce tamaño de escaneos" },
                { name: "Escáner OCR", href: "/es/escaner-ocr", desc: "Texto buscable en escaneos" },
                { name: "Limpiar Escaneo", href: "/es/limpiar-escaneo", desc: "Mejora escaneos de teléfono" },
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
                { q: "¿Cómo uno PDFs escaneados en un solo documento?", a: "Sube tus archivos PDF escaneados a PDF.it, ordénalos y haz clic en Unir. PDF.it combina las páginas escaneadas en un solo documento sin alterar la calidad de imagen." },
                { q: "¿Unir PDFs escaneados reduce la calidad de imagen?", a: "No. PDF.it une tus páginas escaneadas sin recomprimirlas. Cada página conserva la calidad y resolución original del escaneo." },
                { q: "¿Puedo aplicar OCR después de unir PDFs escaneados?", a: "Sí. Después de unir tus PDFs escaneados, usa la herramienta Escáner OCR de PDF.it para hacer el texto buscable y seleccionable. El OCR está disponible para usuarios Pro." },
                { q: "¿Qué tan grandes pueden ser los archivos PDF escaneados?", a: "Los usuarios gratuitos pueden subir PDFs escaneados de hasta 25MB cada uno. Los usuarios Pro tienen un límite de 200MB por archivo, ideal para escaneos de alta resolución." },
                { q: "¿Puedo unir recibos e facturas escaneadas en un solo PDF?", a: "Por supuesto. Sube todos tus recibos o facturas escaneadas, ordénalos cronológicamente y únelos en un solo documento para contabilidad o informes de gastos." },
                { q: "¿Funciona con escaneos de la cámara del teléfono?", a: "Sí. PDF.it funciona con PDFs escaneados de cualquier fuente — cámaras de teléfono, escáneres planos, impresoras multifunción o apps de escaneo como CamScanner y Adobe Scan." },
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
