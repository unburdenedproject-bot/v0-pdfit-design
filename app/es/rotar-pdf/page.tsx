import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { RotatePdfInterface } from "@/components/rotate-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { RotateCw, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Rotar PDF Online — Girar Páginas de PDF | OmnisPDF",
  description:
    "Rota páginas de PDF online con OmnisPDF. Corrige páginas de lado o al revés, rota páginas específicas y descarga un PDF corregido al instante.",
  alternates: {
    languages: {
      en: "/rotate-pdf",
      es: "/es/rotar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puedo rotar solo una página de un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF te permite rotar páginas individuales sin modificar el resto del documento." }
    },
    {
      "@type": "Question",
      "name": "¿Qué ángulos de rotación están disponibles?",
      "acceptedAnswer": { "@type": "Answer", "text": "Puedes rotar páginas 90°, 180° o 270° — en sentido horario o antihorario." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo rotar un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí — la rotación es especialmente útil para documentos escaneados que quedan de lado o al revés." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo rotar un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. OmnisPDF funciona en navegadores móviles — sube, rota y descarga desde tu iPhone o Android." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir mi PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo que puedo rotar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir hasta 200MB." }
    }
  ]
}

export default function RotarPDFPage() {
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
                <RotateCw className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Rotar PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Corrige páginas de lado o al revés con OmnisPDF. Rota páginas individuales de PDF o el documento completo y descarga un PDF con la orientación correcta.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>90°, 180°, 270°</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Rotate Interface */}
        <RotatePdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Rotar PDF de OmnisPDF para girar páginas de PDF y corregir la orientación en segundos. Rota una sola página o varias páginas 90°, 180° o 270°, y descarga un PDF limpio que sea fácil de leer, imprimir y compartir.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Rota PDFs de lado y corrige páginas al revés</li>
              <li>✓ Rota una sola página o varias páginas en un mismo archivo</li>
              <li>✓ Ideal para PDFs escaneados, formularios, recibos y documentos</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — rota PDFs en tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Rota Páginas Individuales de PDF</h2>
              <p className="text-slate-600">
                Corrige solo las páginas que lo necesitan. Rota una página, un rango o varias páginas seleccionadas sin cambiar el resto del documento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Corrige PDFs Escaneados y Documentos de Lado</h2>
              <p className="text-slate-600">
                Los escáneres a menudo guardan las páginas rotadas de forma incorrecta. OmnisPDF te ayuda a girar las páginas rápidamente a la dirección correcta de lectura.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Guarda un PDF con la Orientación Correcta</h2>
              <p className="text-slate-600">
                Después de rotar, descarga un nuevo PDF con la orientación de página actualizada — listo para imprimir, enviar por email y subir.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Rotar un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube o arrastra tu PDF a OmnisPDF.",
                "Selecciona las páginas a rotar o elige rotar todas.",
                "Elige la dirección de rotación: 90° en sentido horario, 90° en sentido antihorario o 180°.",
                "Haz clic en Rotar PDF y descarga el archivo actualizado.",
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
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Extrae páginas antes de rotar" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina PDFs después de rotar" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce tamaño después de guardar" },
                { name: "OCR Scanner", href: "/ocr-scanner", desc: "Extrae texto de PDFs escaneados" },
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
                  q: "¿Puedo rotar solo una página de un PDF?",
                  a: "Sí. OmnisPDF te permite rotar páginas individuales sin modificar el resto del documento.",
                },
                {
                  q: "¿Qué ángulos de rotación están disponibles?",
                  a: "Puedes rotar páginas 90°, 180° o 270° — en sentido horario o antihorario.",
                },
                {
                  q: "¿Puedo rotar un PDF escaneado?",
                  a: "Sí — la rotación es especialmente útil para documentos escaneados que quedan de lado o al revés.",
                },
                {
                  q: "¿Puedo rotar un PDF desde mi celular?",
                  a: "Sí. OmnisPDF funciona en navegadores móviles — sube, rota y descarga desde tu iPhone o Android.",
                },
                {
                  q: "¿Es seguro subir mi PDF?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo que puedo rotar?",
                  a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro y Business pueden subir hasta 200MB.",
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
