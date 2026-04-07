import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProcessingInterface } from "@/components/processing-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Encriptar PDF — Protege tu PDF con Contraseña | PDF.it",
  description:
    "Encripta tu PDF con contraseña usando PDF.it. Protege documentos confidenciales con encriptación segura en línea — rápido, sin registro y desde tu navegador.",
  alternates: {
    languages: {
      en: "/protect-pdf",
      es: "/es/encriptar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "¿Qué significa encriptar un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Encriptar un PDF significa aplicar un algoritmo de cifrado que protege el contenido del archivo con una contraseña. Solo las personas que conozcan la contraseña podrán abrir y ver el documento." }
    },
    {
      "@type": "Question",
      "name": "¿Qué tipos de contraseña existen para un PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Existen dos tipos: la contraseña de apertura (impide abrir el PDF sin ella) y la contraseña de permisos (restringe acciones como imprimir, copiar o editar). PDF.it aplica una contraseña de apertura para máxima protección." }
    },
    {
      "@type": "Question",
      "name": "¿Qué nivel de seguridad tiene la encriptación?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDF.it utiliza encriptación estándar de la industria para proteger tus PDFs. El archivo resultante requiere la contraseña correcta para ser abierto en cualquier visor PDF." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo desencriptar el PDF después?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contraseña de cualquier PDF encriptado, siempre que conozcas la contraseña original." }
    },
    {
      "@type": "Question",
      "name": "¿Es seguro subir documentos confidenciales para encriptarlos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." }
    },
    {
      "@type": "Question",
      "name": "¿Puedo encriptar un PDF desde mi celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, establece una contraseña y descarga el archivo encriptado desde cualquier dispositivo." }
    }
  ]
}

export default function EncriptarPDFPage() {
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
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Encriptar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Protege tu PDF con contraseña y encriptación usando PDF.it. Cifra documentos confidenciales antes de enviarlos, almacenarlos o compartirlos — rápido, seguro y desde tu navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Encriptación Segura</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Después de la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Protect PDF"
          outputFormat="PDF"
          processingMessage="Encriptando tu PDF..."
          successMessage="¡Tu PDF encriptado está listo!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Usa la herramienta Encriptar PDF de PDF.it para cifrar y proteger con contraseña cualquier archivo PDF en segundos. Ideal para asegurar documentos confidenciales, información financiera, contratos legales y datos personales antes de enviarlos por correo o subirlos a la nube.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Encripta archivos PDF con contraseña en línea</li>
              <li>✓ Protege documentos confidenciales antes de compartirlos</li>
              <li>✓ Ideal para contratos, estados de cuenta, facturas y datos personales</li>
              <li>✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
              <li>✓ Sin instalación — encripta PDFs desde tu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cifra Documentos Confidenciales</h2>
              <p className="text-slate-600">
                La encriptación de PDF agrega una capa de protección con contraseña que impide que personas no autorizadas accedan al contenido de tu documento. Solo quienes tengan la contraseña correcta podrán abrirlo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Protege Información Financiera y Contratos</h2>
              <p className="text-slate-600">
                Antes de enviar estados de cuenta, facturas, contratos o propuestas comerciales por correo electrónico, encríptalo con una contraseña. Envía la contraseña por un canal separado para mayor seguridad.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Resguarda Datos Personales y Sensibles</h2>
              <p className="text-slate-600">
                Documentos con información personal como identificaciones, historiales médicos, declaraciones fiscales o datos de empleados deben estar encriptados antes de almacenarse o compartirse digitalmente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Cómo Encriptar un PDF</h2>
            <div className="space-y-4">
              {[
                "Sube tu PDF a PDF.it.",
                "Ingresa una contraseña segura y confírmala.",
                "Haz clic en Encriptar PDF y descarga tu archivo protegido.",
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
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega contraseña a tu PDF" },
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Quita la protección con contraseña" },
                { name: "Redacción PDF", href: "/es/redaccion-pdf", desc: "Oculta información sensible" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea formularios y capas" },
                { name: "Marca de Agua", href: "/es/marca-de-agua-pdf", desc: "Agrega marcas de agua al PDF" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño del archivo" },
                { name: "Unir PDF", href: "/es/unir-pdf", desc: "Combina varios PDFs en uno" },
                { name: "Dividir PDF", href: "/es/dividir-pdf", desc: "Separa páginas de un PDF" },
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
                  q: "¿Qué significa encriptar un PDF?",
                  a: "Encriptar un PDF significa aplicar un algoritmo de cifrado que protege el contenido del archivo con una contraseña. Solo las personas que conozcan la contraseña podrán abrir y ver el documento.",
                },
                {
                  q: "¿Qué tipos de contraseña existen para un PDF?",
                  a: "Existen dos tipos: la contraseña de apertura (impide abrir el PDF sin ella) y la contraseña de permisos (restringe acciones como imprimir, copiar o editar). PDF.it aplica una contraseña de apertura para máxima protección.",
                },
                {
                  q: "¿Qué nivel de seguridad tiene la encriptación?",
                  a: "PDF.it utiliza encriptación estándar de la industria para proteger tus PDFs. El archivo resultante requiere la contraseña correcta para ser abierto en cualquier visor PDF.",
                },
                {
                  q: "¿Puedo desencriptar el PDF después?",
                  a: "Sí. Usa la herramienta Desbloquear PDF de PDF.it para quitar la contraseña de cualquier PDF encriptado, siempre que conozcas la contraseña original.",
                },
                {
                  q: "¿Es seguro subir documentos confidenciales para encriptarlos?",
                  a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos.",
                },
                {
                  q: "¿Puedo encriptar un PDF desde mi celular?",
                  a: "Sí. PDF.it funciona en navegadores móviles — sube tu PDF, establece una contraseña y descarga el archivo encriptado desde cualquier dispositivo.",
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
