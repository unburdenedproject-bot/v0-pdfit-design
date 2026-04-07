import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Convertir Office a PDF Online — DOCX, XLSX, PPTX a PDF | PDF.it",
  description:
    "Convierte archivos de Word, Excel y PowerPoint a PDF con PDF.it. Transforma DOCX, XLSX, PPTX y más a PDF — rápido, preciso y seguro.",
  alternates: {
    canonical: "https://pdf.it.com/es/office-a-pdf",
    languages: {
      "en": "https://pdf.it.com/office-to-pdf",
      "es": "https://pdf.it.com/es/office-a-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué formatos de Office puede convertir PDF.it a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it convierte Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX) y formatos OpenDocument (ODT/ODP/ODS) a PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Mi formato se mantiene igual después de convertir a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de los documentos se convierten limpiamente. Algunos diseños complejos con fuentes inusuales o hojas de cálculo muy anchas pueden verse ligeramente diferentes dependiendo del archivo fuente." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo convertir archivos de Office a PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu archivo y descarga el PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Las animaciones de PowerPoint se convierten a PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Los PDFs son estáticos, así que las animaciones y transiciones no se reproducen — las diapositivas se exportan como páginas fijas." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir archivos de Office?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas Pro y Business pueden subir archivos de hasta 200MB." }
    }
  ]
}

export default function OfficeAPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Office a PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Convierte archivos de Word, Excel, PowerPoint y otros archivos de oficina a PDF. Rápido, preciso y seguro.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Formato Preservado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
              <div className="flex flex-wrap justify-center gap-2 text-xs text-slate-400">
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">DOC / DOCX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">XLS / XLSX</span>
                <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700">PPT / PPTX</span>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".doc,.docx,.xls,.xlsx,.ppt,.pptx"
          toolName="Office to PDF"
          outputFormat="PDF"
          processingMessage="Convirtiendo tu archivo..."
          successMessage="¡Tu PDF está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa el convertidor de Office a PDF de PDF.it para transformar documentos de Word, hojas de cálculo de Excel y presentaciones de PowerPoint a PDF en segundos. Convierte tus archivos a un formato universal que se ve igual en cualquier dispositivo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Convierte Word, Excel y PowerPoint a PDF en línea</li>
              <li>✓ Soporta DOC, DOCX, XLS, XLSX, PPT y PPTX</li>
              <li>✓ Crea PDFs compartibles y profesionales</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — funciona desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Convierte Cualquier Archivo de Office a PDF</h2>
              <p className="text-slate-600">
                Ya sea un documento de Word, una hoja de Excel o una presentación de PowerPoint, PDF.it convierte tu archivo a un PDF limpio y profesional que se abre en cualquier dispositivo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Perfecto para Compartir y Archivar</h2>
              <p className="text-slate-600">
                Los PDFs son el formato universal para documentos. Convierte tus archivos de Office a PDF para compartirlos por correo, subirlos a portales o archivarlos de forma segura.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Conversión Rápida y Segura</h2>
              <p className="text-slate-600">
                Sube tu archivo, conviértelo y descárgalo. Sin software adicional — PDF.it funciona directamente desde tu navegador con encriptación SSL.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Convertir Office a PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra y suelta tu archivo de Office (Word, Excel o PowerPoint) en PDF.it.",
                "Haz clic en Convertir a PDF.",
                "Descarga tu PDF listo para compartir.",
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
                { name: "PowerPoint a PDF", href: "/es/powerpoint-a-pdf", desc: "Convierte diapositivas a PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño después de convertir" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina múltiples PDFs" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege tu PDF con contraseña" },
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
                {
                  q: "¿Qué formatos de Office puede convertir PDF.it a PDF?",
                  a: "PDF.it convierte Word (DOC/DOCX), Excel (XLS/XLSX), PowerPoint (PPT/PPTX) y formatos OpenDocument (ODT/ODP/ODS) a PDF.",
                },
                {
                  q: "¿Mi formato se mantiene igual después de convertir a PDF?",
                  a: "La mayoría de los documentos se convierten limpiamente. Algunos diseños complejos con fuentes inusuales o hojas de cálculo muy anchas pueden verse ligeramente diferentes dependiendo del archivo fuente.",
                },
                {
                  q: "¿Puedo convertir archivos de Office a PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube tu archivo y descarga el PDF.",
                },
                {
                  q: "¿Las animaciones de PowerPoint se convierten a PDF?",
                  a: "No. Los PDFs son estáticos, así que las animaciones y transiciones no se reproducen — las diapositivas se exportan como páginas fijas.",
                },
                {
                  q: "¿Es seguro subir archivos de Office?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo que puedo convertir?",
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
