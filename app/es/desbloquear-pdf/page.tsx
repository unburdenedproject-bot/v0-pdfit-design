import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Desbloquear PDF Online — Quitar Contraseña de PDF | PDF.it",
  description:
    "Desbloquea un PDF protegido con contraseña usando PDF.it. Quita la protección de contraseña del PDF (con permiso) y descarga un PDF desbloqueado en segundos.",
  alternates: {
    canonical: "https://pdf.it.com/es/desbloquear-pdf",
    languages: {
      "en": "https://pdf.it.com/unlock-pdf",
      "es": "https://pdf.it.com/es/desbloquear-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Puede PDF.it quitar la contraseña de un PDF sin conocerla?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it requiere la contraseña correcta. No puede recuperar ni omitir contraseñas desconocidas." }
    },
    {
      "@type": "Question",
      "name": "¿Es legal desbloquear un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Solo debes desbloquear PDFs que sean tuyos o para los que tengas permiso explícito. PDF.it está diseñado para usos legítimos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo volver a proteger mi PDF después de desbloquearlo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña a cualquier PDF cuando lo necesites." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo desbloquear un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube el archivo, ingresa la contraseña, desbloquea y descarga." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir un PDF protegido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo que puedo desbloquear?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." }
    }
  ]
}

export default function DesbloquearPDFPage() {
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
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Unlock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF (Quitar Contraseña)</h1>
              <p className="text-xl text-slate-300 mb-8">
                Usa PDF.it para desbloquear un PDF protegido con contraseña cuando tengas la contraseña. Quita las restricciones y descarga un PDF desbloqueado para editar, imprimir o compartir.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Desbloqueo Instantáneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Unlock Interface */}
        <UnlockPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Desbloquear PDF de PDF.it para quitar la protección con contraseña de un PDF cuando conozcas la contraseña. Sube el archivo, ingresa la contraseña y descarga un PDF desbloqueado que puedes editar, imprimir, unir o comprimir.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Desbloquea archivos PDF que sean tuyos o tengas permiso para editar</li>
              <li>✓ Quita la protección con contraseña cuando conoces la contraseña</li>
              <li>✓ Facilita la edición, impresión, unión y firma de PDFs</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — desbloquea PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Quita la Contraseña del PDF (Con Permiso)</h2>
              <p className="text-slate-600">
                Si tienes la contraseña correcta, PDF.it puede desencriptar el PDF y guardar una nueva versión sin el requisito de contraseña. Esta herramienta está diseñada para archivos que son tuyos o a los que tienes acceso legítimo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Desbloquea PDFs para Editar e Imprimir</h2>
              <p className="text-slate-600">
                Los PDFs desbloqueados son más fáciles de usar con editores de PDF, impresoras, herramientas de unir y dividir, y flujos de trabajo de firma electrónica.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Desbloqueo Rápido en Línea</h2>
              <p className="text-slate-600">
                Sube, ingresa la contraseña, desbloquea y descarga. Un flujo simple diseñado para que obtengas un PDF utilizable rápidamente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Desbloquear un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF protegido con contraseña a PDF.it.",
                "Ingresa la contraseña correcta.",
                "Haz clic en Desbloquear PDF y descarga el archivo desbloqueado.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agregar protección con contraseña" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combinar después de desbloquear" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Extraer páginas después de desbloquear" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reducir tamaño después de desbloquear" },
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
                  q: "¿Puede PDF.it quitar la contraseña de un PDF sin conocerla?",
                  a: "No. PDF.it requiere la contraseña correcta. No puede recuperar ni omitir contraseñas desconocidas.",
                },
                {
                  q: "¿Es legal desbloquear un PDF?",
                  a: "Solo debes desbloquear PDFs que sean tuyos o para los que tengas permiso explícito. PDF.it está diseñado para usos legítimos.",
                },
                {
                  q: "¿Puedo volver a proteger mi PDF después de desbloquearlo?",
                  a: "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña a cualquier PDF cuando lo necesites.",
                },
                {
                  q: "¿Puedo desbloquear un PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube el archivo, ingresa la contraseña, desbloquea y descarga.",
                },
                {
                  q: "¿Es seguro subir un PDF protegido?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo que puedo desbloquear?",
                  a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB.",
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
