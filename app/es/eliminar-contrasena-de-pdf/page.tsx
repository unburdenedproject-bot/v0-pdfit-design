import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { UnlockPdfInterface } from "@/components/unlock-pdf-interface"
import { Unlock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Contraseña de PDF Online — Desbloquea PDFs Protegidos | PDF.it",
  description: "Elimina la protección con contraseña de un PDF con PDF.it. Ingresa la contraseña, desbloquea tu archivo y descarga un PDF sin protección — rápido, gratis y en tu navegador.",
  alternates: { canonical: "https://www.pdf.it.com/es/eliminar-contraseña-de-pdf", languages: { en: "/remove-password-from-pdf", es: "/es/eliminar-contraseña-de-pdf" } },
}

export default function EliminarContrasenaDePDFPage() {
  const faqs = [
    { q: "¿Es legal eliminar la contraseña de un PDF?", a: "Sí, siempre que seas el propietario del documento o tengas autorización para acceder a él. PDF.it requiere que ingreses la contraseña correcta antes de eliminar la protección — no elude ni descifra contraseñas." },
    { q: "¿Necesito saber la contraseña para eliminarla?", a: "Sí. PDF.it requiere que ingreses la contraseña actual para desbloquear el PDF. No puede eliminar contraseñas que no conoces — esto garantiza que tu uso sea autorizado." },
    { q: "¿Eliminar la contraseña afecta la calidad del PDF?", a: "No. Eliminar la protección con contraseña no altera el contenido, formato ni calidad de tu PDF. El archivo permanece idéntico — solo se elimina la restricción de contraseña." },
    { q: "¿Puedo eliminar contraseñas de múltiples PDFs a la vez?", a: "Sí. PDF.it Pro soporta procesamiento por lotes, así que puedes desbloquear múltiples PDFs protegidos en una sesión. Los usuarios gratuitos pueden procesar un archivo a la vez." },
    { q: "¿Puedo eliminar una contraseña de PDF desde mi celular?", a: "Sí. PDF.it funciona en navegadores móviles en iPhone y Android — sube tu PDF, ingresa la contraseña y descarga el archivo desbloqueado." },
    { q: "¿Qué pasa con mi archivo después de eliminar la contraseña?", a: "Tus archivos se procesan de forma segura y se eliminan de los servidores de PDF.it después de que termina tu sesión. Nunca almacenamos ni compartimos tus documentos." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Unlock className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Contraseña de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">Ingresa la contraseña que ya conoces y PDF.it eliminará la protección para que puedas compartir, editar e imprimir tu PDF libremente sin restricciones.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Desbloqueo Instantáneo</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Los PDFs protegidos con contraseña son excelentes para la seguridad, pero pueden ser un inconveniente cuando necesitas compartir, imprimir o editar el archivo libremente. PDF.it te permite eliminar la contraseña de cualquier PDF — siempre que conozcas la contraseña actual — para que trabajes con tu documento sin restricciones.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Elimina la protección con contraseña en segundos</li>
              <li className="flex items-center gap-2">✓ Contenido, formato y calidad preservados</li>
              <li className="flex items-center gap-2">✓ Requiere la contraseña correcta — no descifra</li>
              <li className="flex items-center gap-2">✓ Sin instalación — desbloquea en tu navegador</li>
            </ul>
          </div>
        </section>

        <UnlockPdfInterface />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Elimina Restricciones para Compartir", desc: "¿Necesitas compartir un PDF sin la molestia de la contraseña? Elimínala y comparte una versión sin restricciones que cualquiera pueda abrir al instante." },
                { title: "Desbloquea PDFs para Editar e Imprimir", desc: "Algunos PDFs protegidos restringen la edición, copia o impresión. Elimina la contraseña para recuperar el control total — anota, llena formularios e imprime libremente." },
                { title: "Elimina Contraseñas Obsoletas", desc: "Con el tiempo, los archivos protegidos se acumulan y recordar cada contraseña se vuelve tedioso. Elimina contraseñas obsoletas para un archivo más fácil y acceso futuro." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Eliminar una Contraseña de un PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta tu PDF protegido con contraseña" },
                { num: "2", title: "Ingresa la contraseña", desc: "Escribe la contraseña actual cuando se solicite" },
                { num: "3", title: "Descarga PDF desbloqueado", desc: "Obtén tu archivo sin protección al instante" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Elimina restricciones de PDF" },
                { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña" },
                { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana campos de formulario" },
                { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
