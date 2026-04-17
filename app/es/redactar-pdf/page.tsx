import type { Metadata } from "next"
import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Shield, Zap, Lock, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Redactar PDF en Línea — Elimina Información Sensible Permanentemente | PDF.it",
  description: "Redacta texto y datos sensibles de PDFs con PDF.it. Oculta permanentemente información confidencial antes de compartir — seguro, rápido y desde tu navegador.",
  alternates: {
    canonical: "https://www.pdf.it.com/es/redactar-pdf",
    languages: { "en": "https://www.pdf.it.com/redact-pdf", "es": "https://www.pdf.it.com/es/redactar-pdf", "pt-BR": "https://www.pdf.it.com/br/redactar-pdf" },
  },
}

export default function RedactarPDFPage() {
  const faqs = [
    { q: "Que significa redactar un PDF?", a: "Redactar un PDF significa eliminar permanentemente información sensible — como nombres, números de seguro social, datos financieros o texto confidencial — marcandola en negro para que no pueda recuperarse ni copiarse." },
    { q: "La redacción de PDF es verdaderamente permanente?", a: "Si. A diferencia de colocar un rectangulo negro sobre texto, la verdadera redacción elimina permanentemente los datos subyacentes del archivo. El contenido redactado no puede recuperarse, copiarse ni buscarse." },
    { q: "Cual es la diferencia entre redacción y ocultar texto?", a: "Ocultar texto con un cuadro negro es puramente visual — el texto sigue en el archivo y puede copiarse o extraerse. La redacción elimina permanentemente los datos del PDF, haciendo imposible su recuperacion." },
    { q: "La redacción de PDF es necesaria para cumplimiento HIPAA y GDPR?", a: "Si. HIPAA requiere que la información de salud protegida sea eliminada permanentemente antes de compartir documentos. GDPR requiere que los datos personales sean anonimizados adecuadamente. La redacción de PDF es el método estándar." },
    { q: "PDF.it ofrece redacción de PDF?", a: "Si. La Redacción de PDF está disponible en el plan Business de PDF.it ($13.99/mes). Elimina permanentemente texto sensible, imágenes y metadatos de tus documentos directamente en tu navegador." },
    { q: "Que tipos de contenido se pueden redactar de un PDF?", a: "Puedes redactar texto (nombres, direcciones, números de cuenta), imágenes (fotos, firmas, logos) y metadatos (nombre del autor, fecha de creación, info del software). La herramienta de redacción de PDF.it maneja los tres tipos." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Shield className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Redactar PDF en Línea</h1>
            <p className="text-xl text-slate-300 mb-8">Elimina permanentemente información sensible de PDFs antes de compartir. La verdadera redacción elimina datos — no solo los oculta.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Eliminación Permanente</span></div>
              <div className="flex items-center gap-2"><Lock className="h-4 w-4 text-[#14D8C4]" /><span>Cumple HIPAA y GDPR</span></div>
              <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Desde el Navegador</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">La redacción de PDF es el proceso de eliminar permanentemente información sensible, confidencial o privada de un documento. A diferencia de cubrir texto con un cuadro negro, la verdadera redacción elimina los datos subyacentes para que nunca puedan ser recuperados, copiados o buscados. Requerido para cumplimiento de HIPAA, GDPR y legal.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Elimina permanentemente texto, imágenes y metadatos</li>
            <li className="flex items-center gap-2">✓ Requerido para cumplimiento HIPAA y GDPR</li>
            <li className="flex items-center gap-2">✓ Previene fugas accidentales de datos al compartir</li>
            <li className="flex items-center gap-2">✓ Sin software que instalar — redacta en tu navegador</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Redacta PDFs con PDF.it</h2>
          <p className="text-slate-600 mb-6">La Redacción de PDF está disponible en nuestro plan Business. Elimina permanentemente texto, imágenes y metadatos sensibles de tus documentos.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/redaccion-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Probar Redacción PDF</Link>
            <Link href="/es/precios" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Ver Plan Business</Link>
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Cumplimiento Legal y Regulatorio", desc: "Tribunales, agencias gubernamentales y organizaciones de salud requieren eliminación permanente de datos antes de compartir documentos. La redacción de PDF cumple con HIPAA, GDPR, FOIA y reglas judiciales." },
            { title: "Requisitos HIPAA y GDPR", desc: "HIPAA exige eliminación permanente de información de salud protegida. GDPR requiere anonimización adecuada. Simplemente cubrir texto con un cuadro negro no cumple estos estándares." },
            { title: "Redacción Permanente vs Visual", desc: "La redacción visual (rectangulos negros) deja el texto en el archivo. La verdadera redacción elimina permanentemente los datos. PDF.it usa redacción verdadera para asegurar que la información sensible desaparezca completamente." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Redactar un PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[{ num: "1", title: "Sube tu PDF", desc: "Usa la herramienta Redacción PDF de PDF.it" },{ num: "2", title: "Selecciona contenido a redactar", desc: "Elige texto, imágenes o areas a eliminar" },{ num: "3", title: "Descarga el PDF redactado", desc: "Obtiene tu archivo seguro y redactado al instante" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[{ name: "Redacción PDF", href: "/es/redaccion-pdf", desc: "Redacta PDFs (Business)" },{ name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege PDFs con contraseña" },{ name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Bloquea el contenido" },{ name: "Marca de Agua", href: "/es/marca-agua-pdf", desc: "Agrega marcas de agua (Pro)" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
        </div></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2><div className="space-y-4">
          {faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}
        </div></div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
