import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
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
      "pt": "https://pdf.it.com/br/desbloquear-pdf",
    },
  },
}

export default function DesbloquearPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Unlock className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF (Quitar Contraseña)</h1>
              <p className="text-xl text-slate-300 mb-8">
                Quita la protección con contraseña de cualquier PDF que sea tuyo — ingresa la contraseña, desbloquea y descarga un archivo sin restricciones en segundos.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-[#14D8C4]" />
                  <span>Desbloqueo Instantáneo</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-[#14D8C4]" />
                  <span>Archivos Eliminados Después de la Sesión</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-[#14D8C4]" />
                  <span>Sin Registro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Usa la herramienta Desbloquear PDF de PDF.it para quitar la protección con contraseña de un PDF cuando conozcas la contraseña. Sube el archivo, ingresa la contraseña y descarga un PDF desbloqueado que puedes editar, imprimir, unir o comprimir.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Desbloquea archivos PDF que sean tuyos o tengas permiso para editar</li>
              <li className="flex items-center gap-2">✓ Quita la protección con contraseña cuando conoces la contraseña</li>
              <li className="flex items-center gap-2">✓ Facilita la edición, impresión, unión y firma de PDFs</li>
              <li className="flex items-center gap-2">✓ Funciona en Mac, Windows, iOS, Android y Linux</li>
            </ul>
          </div>
        </section>

        {/* Unlock Interface */}
        <UnlockPdfInterface />

        {/* Feature Blocks */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Quita la Contraseña del PDF (Con Permiso)", desc: "Si tienes la contraseña correcta, PDF.it desencripta el archivo y guarda una nueva versión sin el requisito de contraseña. Diseñado para archivos que son tuyos o a los que tienes acceso legítimo." },
                { title: "Desbloquea PDFs para Editar e Imprimir", desc: "Una vez desbloqueado, tu PDF funciona sin problemas con editores, impresoras, herramientas de unir y dividir, y flujos de firma electrónica." },
                { title: "Desbloqueo Rápido en Línea", desc: "Sube, ingresa la contraseña, desbloquea y descarga. Un flujo simple de cuatro pasos diseñado para que obtengas un PDF utilizable en segundos." },
              ].map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Desbloquear un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir tu archivo protegido" },
                { num: "2", title: "Ingresa la contraseña", desc: "Escribe la contraseña correcta y haz clic en Desbloquear" },
                { num: "3", title: "Descarga el PDF desbloqueado", desc: "Obtén tu archivo sin restricciones al instante" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
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
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {[
                { q: "¿Puede PDF.it quitar la contraseña de un PDF sin conocerla?", a: "No. PDF.it requiere la contraseña correcta. No puede recuperar ni omitir contraseñas desconocidas." },
                { q: "¿Es legal desbloquear un PDF?", a: "Solo debes desbloquear PDFs que sean tuyos o para los que tengas permiso explícito. PDF.it está diseñado para usos legítimos." },
                { q: "¿Puedo volver a proteger mi PDF después de desbloquearlo?", a: "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña a cualquier PDF cuando lo necesites." },
                { q: "¿Puedo desbloquear un PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles — sube el archivo, ingresa la contraseña, desbloquea y descarga." },
                { q: "¿Es seguro subir un PDF protegido?", a: "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." },
                { q: "¿Cuál es el tamaño máximo de archivo que puedo desbloquear?", a: "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." },
              ].map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            { "@type": "Question", "name": "¿Puede PDF.it quitar la contraseña de un PDF sin conocerla?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it requiere la contraseña correcta. No puede recuperar ni omitir contraseñas desconocidas." } },
            { "@type": "Question", "name": "¿Es legal desbloquear un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Solo debes desbloquear PDFs que sean tuyos o para los que tengas permiso explícito. PDF.it está diseñado para usos legítimos." } },
            { "@type": "Question", "name": "¿Puedo volver a proteger mi PDF después de desbloquearlo?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Usa la herramienta Proteger PDF de PDF.it para agregar una nueva contraseña a cualquier PDF cuando lo necesites." } },
            { "@type": "Question", "name": "¿Puedo desbloquear un PDF desde mi celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles — sube el archivo, ingresa la contraseña, desbloquea y descarga." } },
            { "@type": "Question", "name": "¿Es seguro subir un PDF protegido?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Todas las transferencias están encriptadas con SSL y tus archivos se eliminan inmediatamente después de tu sesión. Nunca almacenamos ni compartimos tus documentos." } },
            { "@type": "Question", "name": "¿Cuál es el tamaño máximo de archivo que puedo desbloquear?", "acceptedAnswer": { "@type": "Answer", "text": "Las cuentas gratuitas pueden subir archivos de hasta 25MB. Las cuentas Pro pueden subir hasta 200MB. Las cuentas Business pueden subir hasta 1GB." } }
          ]
        })}} />
      </main>
      <FooterEs />
    </div>
  )
}
