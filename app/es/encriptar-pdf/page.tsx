import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Encriptar PDF Online — Agrega Protección con Contraseña | PDF.it",
  description: "Encripta un PDF con protección de contraseña usando PDF.it. Asegura tus documentos con encriptación antes de compartir — rápido, gratis y en tu navegador.",
  alternates: { canonical: "https://www.pdf.it.com/es/encriptar-pdf", languages: { en: "/encrypt-pdf", es: "/es/encriptar-pdf" } },
}

export default function EncriptarPDFPage() {
  const faqs = [
    {
        "q": "¿Qué encriptación usa PDF.it para proteger PDFs?",
        "a": "PDF.it usa encriptación AES estándar de la industria. Es el mismo estándar usado por bancos y agencias gubernamentales para asegurar datos sensibles."
    },
    {
        "q": "¿Cómo abro un PDF encriptado?",
        "a": "Cualquier persona que reciba el PDF encriptado necesitará ingresar la contraseña que estableciste para poder abrirlo. Los lectores PDF estándar como Adobe Acrobat, Preview y Chrome soportan PDFs protegidos."
    },
    {
        "q": "¿Puedo eliminar la encriptación después?",
        "a": "Sí. Usa la herramienta Desbloquear PDF de PDF.it para eliminar la protección. Necesitarás ingresar la contraseña actual para desencriptar el archivo."
    },
    {
        "q": "¿Encriptar un PDF cambia su contenido o calidad?",
        "a": "No. La encriptación agrega protección sin alterar el contenido, diseño, imágenes ni calidad de tu PDF."
    },
    {
        "q": "¿Puedo encriptar un PDF desde mi celular?",
        "a": "Sí. PDF.it funciona en navegadores móviles en iPhone y Android. Sube tu PDF, establece una contraseña y descarga el archivo encriptado — sin necesidad de app."
    },
    {
        "q": "¿Es seguro encriptar PDFs con PDF.it?",
        "a": "Sí. Tus archivos se procesan de forma segura y se eliminan de nuestros servidores después de tu sesión. Nunca almacenamos tus contraseñas ni compartimos tus documentos."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Lock className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Encriptar PDF con Contraseña</h1>
            <p className="text-xl text-slate-300 mb-8">Asegura documentos sensibles con encriptación de contraseña antes de compartir o subir. Establece una contraseña y solo los destinatarios autorizados podrán abrir tu PDF.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Encriptación AES</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Archivos Eliminados Tras la Sesión</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sin Registro</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">¿Envías documentos sensibles por email o los subes a plataformas compartidas? Encripta tu PDF con una contraseña primero. PDF.it agrega encriptación de nivel industrial para que solo las personas con la contraseña puedan abrir tu archivo — protegiendo contratos, registros financieros, documentos médicos y más.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Agrega encriptación fuerte con contraseña a cualquier PDF</li>
            <li className="flex items-center gap-2">✓ Encriptación AES de nivel industrial</li>
            <li className="flex items-center gap-2">✓ Contenido, formato y calidad preservados</li>
            <li className="flex items-center gap-2">✓ Sin instalación — encripta en tu navegador</li>
          </ul>
        </div></section>

        <ProtectPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "Encripta PDFs Antes de Enviar por Email", desc: "El email no es seguro por defecto. Encripta contratos sensibles, documentos fiscales o registros personales con una contraseña antes de adjuntar. Comparte la contraseña por separado para máxima seguridad." },
              { title: "Asegura Documentos Financieros", desc: "Estados financieros, reportes de auditoría y memos internos contienen información sensible. Encripta estos PDFs antes de subirlos al almacenamiento en la nube o compartirlos." },
              { title: "Protege Documentos Legales", desc: "Contratos, NDAs y acuerdos legales requieren confidencialidad. La encriptación con contraseña asegura que solo las partes destinadas puedan acceder al documento, incluso si es interceptado." },
            ].map((feature) => (
              <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                </div>
              </div>
            ))}
          </div></div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Encriptar un PDF con Contraseña</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[
              { num: "1", title: "Sube tu PDF", desc: "Arrastra y suelta o haz clic para elegir un archivo" },
              { num: "2", title: "Establece una contraseña", desc: "Ingresa una contraseña fuerte para proteger tu documento" },
              { num: "3", title: "Descarga PDF encriptado", desc: "Obtén tu archivo protegido con contraseña al instante" },
            ].map((step) => (
              <div key={step.num} className="flex-1">
                <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                <p className="font-semibold text-slate-900">{step.title}</p>
                <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
              </div>
            ))}
          </div>
        </div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Agrega protección con contraseña" },
              { name: "Desbloquear PDF", href: "/es/desbloquear-pdf", desc: "Elimina contraseñas de PDF" },
              { name: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf", desc: "Agrega marcas de agua visuales" },
              { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Aplana campos de formulario" },
            ].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
                </Link>
              </div>
            ))}
          </div>
        </div></section>

        {/* FAQ */}
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
