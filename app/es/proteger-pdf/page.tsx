import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { TrustBadges } from "@/components/trust-badges"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Proteger PDF con Contraseña Online | PDF.it",
  description:
    "Protege un PDF con contraseña usando PDF.it. Encripta tu PDF en línea, restringe el acceso y descarga un archivo protegido en segundos.",
  alternates: {
    canonical: "https://pdf.it.com/es/proteger-pdf",
    languages: {
      "en": "https://pdf.it.com/protect-pdf",
      "es": "https://pdf.it.com/es/proteger-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué significa proteger un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Significa agregar seguridad con contraseña al PDF para que solo las personas con la contraseña puedan abrirlo." }
    },
    {
      "@type": "Question",
      "name": "¿Qué pasa si olvido la contraseña?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs protegidos con contraseña generalmente no se pueden recuperar sin la contraseña. PDF.it no puede recuperarla — guárdala en un lugar seguro." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo quitar la contraseña después?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Desbloquear PDF de PDF.it para quitar la protección con contraseña de cualquier PDF del que tengas la contraseña." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo proteger un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube el PDF, establece una contraseña y descarga el archivo protegido." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir PDFs confidenciales?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Cuál es el tamaño máximo de archivo que puedo proteger?",
      "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." }
    }
  ]
}

export default function ProtegerPDFPage() {
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
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Proteger PDF con Contraseña</h1>
              <p className="text-xl text-slate-300 mb-8">
                Agrega una contraseña a tu PDF con PDF.it. Encripta tu documento para compartirlo, almacenarlo y enviarlo de forma más segura — rápido y desde el navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Encriptación Segura</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Protect Interface */}
        <ProtectPdfInterface />
        <TrustBadges />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Proteger PDF de PDF.it para agregar contraseña y encriptar un PDF en segundos. Agrega una contraseña antes de enviar por correo, subir o almacenar archivos sensibles como contratos, estados de cuenta, facturas o documentos personales.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Protege archivos PDF con contraseña en línea</li>
              <li>✓ Encripta PDFs para compartir y almacenar de forma segura</li>
              <li>✓ Ideal para contratos, estados de cuenta, formularios médicos e identificaciones</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — protege PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Agrega una Contraseña a tu PDF</h2>
              <p className="text-slate-600">
                Establece una contraseña para restringir quién puede abrir tu PDF. PDF.it asegura el archivo usando protección estándar con contraseña para que el contenido no sea accesible sin ella.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protege Documentos Sensibles Antes de Compartir</h2>
              <p className="text-slate-600">
                La protección con contraseña de PDF es útil al enviar archivos confidenciales por correo electrónico o al subirlos a servicios donde quieres una capa extra de control de acceso.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Descarga un PDF Protegido al Instante</h2>
              <p className="text-slate-600">
                Después de aplicar la protección, descarga tu PDF asegurado y compártelo con el destinatario — envía la contraseña por separado a través de un canal más seguro.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Proteger un PDF con Contraseña</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF a PDF.it.",
                "Ingresa una contraseña segura y confírmala.",
                "Haz clic en Proteger PDF y descarga tu archivo protegido.",
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
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Quitar protección con contraseña" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combinar y luego proteger" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Extraer páginas antes de proteger" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reducir tamaño después de proteger" },
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
                  q: "¿Qué significa proteger un PDF?",
                  a: "Significa agregar seguridad con contraseña al PDF para que solo las personas con la contraseña puedan abrirlo.",
                },
                {
                  q: "¿Qué pasa si olvido la contraseña?",
                  a: "Los PDFs protegidos con contraseña generalmente no se pueden recuperar sin la contraseña. PDF.it no puede recuperarla — guárdala en un lugar seguro.",
                },
                {
                  q: "¿Puedo quitar la contraseña después?",
                  a: "Sí. Usa la herramienta Desbloquear PDF de PDF.it para quitar la protección con contraseña de cualquier PDF del que tengas la contraseña.",
                },
                {
                  q: "¿Puedo proteger un PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube el PDF, establece una contraseña y descarga el archivo protegido.",
                },
                {
                  q: "¿Es seguro subir PDFs confidenciales?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Cuál es el tamaño máximo de archivo que puedo proteger?",
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
