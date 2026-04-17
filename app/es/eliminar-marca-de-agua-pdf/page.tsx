import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Droplets, Zap, AlertTriangle, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Eliminar Marca de Agua de PDF — Como Borrar Marcas de Agua | PDF.it",
  description: "Aprende como manejar PDFs con marca de agua. PDF.it ofrece herramientas para agregar marcas de agua, pero eliminar marcas de PDFs ajenos puede violar derechos de autor.",
  alternates: { canonical: "https://www.pdf.it.com/es/eliminar-marca-de-agua-pdf", languages: { en: "/remove-watermark-pdf", es: "/es/eliminar-marca-de-agua-pdf" } },
}

export default function EliminarMarcaDeAguaPDFPage() {
  const faqs = [
    { q: "¿PDF.it puede eliminar marcas de agua de PDFs?", a: "No. PDF.it no ofrece eliminación de marcas de agua porque podría fácilitar la infracción de derechos de autor y la piratería. En su lugar, PDF.it ofrece herramientas para agregar tus propias marcas de agua y proteger tus documentos." },
    { q: "¿Es legal eliminar una marca de agua de un PDF?", a: "Depende. Si eres dueño del documento original y agregaste la marca de agua tú mismo, puedes eliminarla. Sin embargo, eliminar marcas de agua de documentos que no te pertenecen — como fotos de stock, contenido licenciado o software de prueba — generalmente viola la ley de derechos de autor y los términos de servicio." },
    { q: "¿Por qué los PDFs tienen marcas de agua?", a: "Las marcas de agua sirven para varios propósitos: proteger la propiedad intelectual, marcar documentos como borradores o confidenciales, identificar documentos con un logo de empresa, disuadir la copia no autorizada e indicar el estado del documento (ej. MUESTRA, BORRADOR, APROBADO)." },
    { q: "¿Cómo puedo obtener un PDF sin la marca de agua?", a: "La forma legítima es comprar o licenciar la versión completa del documento. Para marcas de borrador, pide al autor la versión final. Para marcas de prueba, compra la licencia del software. Para contenido de stock, compra la versión en alta resolución." },
    { q: "¿Puedo agregar mi propia marca de agua a un PDF con PDF.it?", a: "Sí. La herramienta Marca de Agua PDF de PDF.it (disponible en el plan Pro) te permite agregar marcas de agua de texto o imagen personalizadas a tus PDFs. Puedes controlar la posición, opacidad, rotación y tamaño de la marca de agua." },
    { q: "¿Qué hago si accidentalmente puse marca de agua a mi propio PDF?", a: "Si agregaste una marca de agua a tu propio documento y aún tienes el archivo original sin marca, simplemente usa esa versión. Si solo tienes la versión con marca de agua, puede que necesites recrear el documento desde el archivo fuente (Word, PowerPoint, etc.) y exportar un nuevo PDF sin la marca de agua." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Droplets className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Eliminar Marca de Agua de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Aprende sobre las marcas de agua en PDFs — por qué existen, cuándo se pueden eliminar legítimamente y cómo trabajar con documentos con marca de agua.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Entiende las Marcas de Agua</span></div>
              <div className="flex items-center gap-2"><AlertTriangle className="h-4 w-4 text-[#14D8C4]" /><span>Conoce tus Derechos</span></div>
              <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Opciones Legítimas</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Las marcas de agua en PDFs son superposiciones de texto o imagen colocadas sobre las páginas del documento para indicar propiedad, estado o licenciamiento. Aunque hay razones legítimas para eliminar una marca de agua de tus propios documentos, PDF.it no ofrece eliminación de marcas de agua como herramienta porque podría fácilitar la infracción de derechos de autor. Esta página explica tus opciones.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Entiende por qué los PDFs tienen marcas de agua</li>
            <li className="flex items-center gap-2">✓ Aprende cuándo la eliminación es legítima</li>
            <li className="flex items-center gap-2">✓ Encuentra alternativas a eliminar marcas de agua</li>
            <li className="flex items-center gap-2">✓ Agrega tus propias marcas de agua para proteger documentos</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">¿Necesitas Trabajar con Marcas de Agua?</h2>
          <p className="text-slate-600 mb-6">Agrega tus propias marcas de agua profesionales para proteger tus documentos, o aplana PDFs para fijar el contenido existente.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/es/marca-de-agua-pdf" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Agregar Marca de Agua (Pro)</Link>
            <Link href="/es/aplanar-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Aplanar PDF (Gratis)</Link>
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "¿Por Qué los PDFs Tienen Marcas de Agua?", desc: "Las marcas de agua protegen la propiedad intelectual, marcan documentos como borradores o confidenciales, identifican contenido con logos y disuaden la copia no autorizada en industrias legales, corporativas y editoriales." },
            { title: "Escenarios Legítimos de Eliminación", desc: "Puedes eliminar legítimamente una marca de agua si eres el autor original, compraste una licencia o la marca de agua se agregó por error. Vuelve al archivo fuente para exportar un PDF limpio." },
            { title: "Alternativas a la Eliminación", desc: "Compra la versión completa con licencia, contacta al propietario para una copia sin marca de agua, úsala solo como vista previa o crea tu propio contenido. Usa PDF.it para agregar tus propias marcas de agua." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Cómo Manejar PDFs con Marca de Agua</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Determina la propiedad", desc: "Quién es dueño del documento y por qué se agregó la marca" }, { num: "2", title: "Re-exporta si es tuyo", desc: "Vuelve al archivo fuente y exporta sin la marca de agua" }, { num: "3", title: "Licencia o agrega la tuya", desc: "Compra la versión completa o agrega tu propia marca de agua" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Herramientas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Marca de Agua PDF", href: "/es/marca-de-agua-pdf", desc: "Agrega marcas de agua (Pro)" }, { name: "Aplanar PDF", href: "/es/aplanar-pdf", desc: "Fija el contenido" }, { name: "Proteger PDF", href: "/es/proteger-pdf", desc: "Protege con contraseña" }, { name: "Comprimir PDF", href: "/es/comprimir-pdf", desc: "Reduce el tamaño" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Preguntas Frecuentes</h2>
          <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div>
        </div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterEs />
    </div>
  )
}
