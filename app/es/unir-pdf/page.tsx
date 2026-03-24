import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Online — Combinar Archivos PDF en Uno | PDF.it",
  description:
    "Une archivos PDF en un solo documento con PDF.it. Combina PDFs online, reordena páginas y descarga un único PDF — rápido y sencillo.",
  alternates: {
    languages: {
      en: "/merge-pdf",
      es: "/es/unir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Cómo uno varios archivos PDF en uno solo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube tus PDFs a PDF.it, reordénalos como necesites y haz clic en Unir PDFs para descargar un solo archivo combinado." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo reordenar los PDFs antes de unirlos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Sube tus archivos y ordénalos en la secuencia correcta — PDF.it los une en ese orden." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir PDFs desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube, une y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo unir PDFs protegidos con contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs protegidos con contraseña necesitan ser desbloqueados antes de unirlos. Usa nuestra herramienta Desbloquear PDF primero." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mis PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo para unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB cada uno. Las cuentas Pro pueden subir archivos de hasta 200MB. Las cuentas Business pueden subir archivos de hasta 1GB." }
    }
  ]
}

export default function UnirPDFPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Archivos PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combina varios PDFs en un solo archivo con PDF.it. Sube, reordena, une y descarga — rápido, limpio y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Archivos Ilimitados</span></div>
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
          processingMessage="Merging your PDF files..."
          successMessage="Your merged PDF is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Unir PDF de PDF.it para combinar PDFs en un solo archivo en segundos. Sube varios documentos PDF, ordénalos correctamente y descarga un único PDF unido — perfecto para entregas, contratos, facturas e informes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Une varios archivos PDF en un solo PDF</li>
              <li>✓ Reordena archivos antes de unir para la secuencia correcta de páginas</li>
              <li>✓ Ideal para informes, recibos, facturas y formularios</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — une PDFs directamente en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combina PDFs en un Solo Documento</h2>
              <p className="text-slate-600">
                Une PDFs en un solo archivo para compartir. Ideal para enviar un adjunto en vez de muchos, o entregar un paquete completo a escuelas, bancos o empleadores.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reordena Archivos PDF Antes de Unir</h2>
              <p className="text-slate-600">
                Sube tus archivos y ordénalos en el orden exacto que quieras. PDF.it los une en la secuencia que tú elijas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Une PDFs para Imprimir y Compartir</h2>
              <p className="text-slate-600">
                Crea un solo PDF limpio para imprimir, enviar por email, archivar o subir — sin manejar múltiples archivos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Unir PDFs</h2>
            <div className="space-y-4">
              {[
                "Sube dos o más archivos PDF a PDF.it.",
                "Arrastra para reordenarlos en la secuencia correcta.",
                "Haz clic en Unir PDFs.",
                "Descarga el PDF combinado.",
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Divide un PDF en partes" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño después de unir" },
                { name: "Rotar PDF", href: "/es/rotar-pdf", desc: "Corrige la orientación" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña" },
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
                  q: "¿Cómo uno varios archivos PDF en uno solo?",
                  a: "Sube tus PDFs a PDF.it, reordénalos como necesites y haz clic en Unir PDFs para descargar un solo archivo combinado.",
                },
                {
                  q: "¿Puedo reordenar los PDFs antes de unirlos?",
                  a: "Sí. Sube tus archivos y ordénalos en la secuencia correcta — PDF.it los une en ese orden.",
                },
                {
                  q: "¿Puedo unir PDFs desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube, une y descarga desde tu iPhone o Android.",
                },
                {
                  q: "¿Puedo unir PDFs protegidos con contraseña?",
                  a: "Los PDFs protegidos con contraseña necesitan ser desbloqueados antes de unirlos. Usa nuestra herramienta Desbloquear PDF primero.",
                },
                {
                  q: "¿Es seguro subir mis PDFs?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo para unir?",
                  a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB cada uno. Las cuentas Pro pueden subir archivos de hasta 200MB. Las cuentas Business pueden subir archivos de hasta 1GB.",
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
