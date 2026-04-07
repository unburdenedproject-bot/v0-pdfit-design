import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno) | PDF.it",
  description:
    "Aprende cómo unir archivos PDF en línea en un solo documento. Guía paso a paso para combinar PDFs para envíos, informes y portafolios — gratis, sin software.",
  keywords: "unir archivos pdf en línea, combinar pdfs en uno, unir pdf, juntar archivos pdf, cómo unir pdfs",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo uno archivos PDF en línea gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tus PDFs a la herramienta Unir PDF de PDF.it, ordénalos como desees, haz clic en Unir y descarga el archivo combinado. No se requiere registro para tus primeros 3 archivos." } },
    { "@type": "Question", "name": "¿Puedo unir más de dos PDFs a la vez?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite subir y unir tantos PDFs como necesites en una sola operación. Los usuarios gratuitos pueden unir archivos uno a la vez, mientras que los usuarios Pro obtienen procesamiento por lotes." } },
    { "@type": "Question", "name": "¿Unir PDFs aumentará el tamaño del archivo?", "acceptedAnswer": { "@type": "Answer", "text": "El archivo unido será aproximadamente la suma de todos los archivos individuales. Si el resultado es muy grande, usa la herramienta Comprimir PDF de PDF.it después de unir para reducir el tamaño significativamente." } },
    { "@type": "Question", "name": "¿Puedo reordenar páginas antes de unir?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite arrastrar y soltar archivos en el orden exacto que deseas antes de unir. También puedes reordenar páginas individuales después de unir usando la herramienta Dividir o Reordenar." } },
    { "@type": "Question", "name": "¿Es seguro unir PDFs en línea?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it procesa los archivos de forma segura y los elimina del servidor después del procesamiento. Tus documentos nunca se almacenan permanentemente ni se comparten con terceros." } },
    { "@type": "Question", "name": "¿Puedo unir PDFs en mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en cualquier navegador móvil — Safari, Chrome o Firefox. Sube tus PDFs, únelos y descarga el resultado directamente en tu teléfono. No necesitas instalar ninguna app." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Unir Archivos PDF en Línea",
  "description": "Combina múltiples PDFs en un documento en 3 simples pasos usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tus archivos PDF", "text": "Ve a la herramienta Unir PDF de PDF.it y sube todos los archivos que deseas combinar haciendo clic o arrastrándolos al área de carga." },
    { "@type": "HowToStep", "name": "Ordena los archivos", "text": "Arrastra y suelta los archivos en el orden correcto. El primer archivo en la lista aparecerá primero en el documento unido." },
    { "@type": "HowToStep", "name": "Descarga el PDF unido", "text": "Haz clic en Unir PDF y descarga tu documento combinado. Si el archivo es muy grande, comprímelo después usando la herramienta Comprimir PDF." }
  ]
}

export default function ComoUnirArchivosPDFPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno)</h1>
            <p className="text-xl text-slate-300">¿Necesitas combinar múltiples PDFs en un solo documento? Ya sea para una solicitud de empleo, un envío escolar o un informe de negocios — aquí te explicamos cómo unir PDFs en segundos.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Merge className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para unir? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Unir PDFs Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Por Qué Necesitarías Unir PDFs?</h2>
              <p className="text-slate-600 mb-4">Hay muchas situaciones donde combinar múltiples PDFs en un solo archivo facilita la vida. Estas son las razones más comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Solicitudes de empleo.</strong> Muchos empleadores piden un solo PDF con tu currículum, carta de presentación y referencias combinados. Enviar tres archivos separados se ve desorganizado.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Envíos escolares y universitarios.</strong> Los portales de tareas frecuentemente aceptan solo una carga de archivo. Une tu ensayo, bibliografía y apéndice en un solo documento.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Informes y propuestas.</strong> Combina una portada, resumen ejecutivo, páginas de datos y apéndices en un documento pulido para clientes o interesados.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Portafolios.</strong> Diseñadores, fotógrafos y arquitectos necesitan compilar muestras de trabajo en un solo portafolio PDF para compartir.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Solicitudes de visa y gobierno.</strong> Los formularios de inmigración frecuentemente requieren un solo PDF con tu pasaporte, fotos, estados de cuenta bancarios y cartas de apoyo.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Unir Archivos PDF (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tus archivos PDF", desc: "Ve a la herramienta Unir PDF y arrastra todos tus archivos al área de carga, o haz clic para buscar. Puedes subir tantos PDFs como necesites. Archivos hasta 25MB cada uno son gratis — los usuarios Pro pueden subir archivos de hasta 200MB." },
                  { title: "Ordena los archivos", desc: "Arrastra y suelta los archivos en el orden que quieres que aparezcan en el documento final. El primer archivo en la lista se convierte en las primeras páginas de tu PDF unido." },
                  { title: "Descarga el PDF unido", desc: "Haz clic en Unir PDF y espera unos segundos. Descarga tu documento combinado — todos tus archivos están ahora en un solo PDF. Si el resultado es muy grande, comprímelo después." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Reordenando Archivos Antes de Unir</h2>
              <p className="text-slate-600 mb-4">Obtener el orden de páginas correcto es crítico — especialmente para envíos formales. Algunos consejos:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nombra tus archivos lógicamente</strong> antes de subir (por ejemplo, "01-carta-presentacion.pdf", "02-curriculum.pdf", "03-referencias.pdf"). Esto facilita el ordenamiento.</li>
                <li>&#10003; <strong>Usa arrastrar y soltar</strong> en PDF.it para reordenar archivos visualmente antes de unir.</li>
                <li>&#10003; <strong>Previsualiza el resultado unido</strong> antes de descargar para asegurarte de que todo está en el orden correcto.</li>
                <li>&#10003; Si necesitas reordenar páginas individuales (no solo archivos), usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para extraer páginas, luego únelas de nuevo en el orden correcto.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Gestionando el Tamaño del Archivo Después de Unir</h2>
              <p className="text-slate-600 mb-4">Cuando unes múltiples PDFs, el archivo resultante es aproximadamente la suma de todos los tamaños individuales. Un currículum de 3MB + una transcripción de 5MB + una carta de presentación de 2MB = aproximadamente 10MB. Si eso es muy grande para tus necesidades:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime después de unir.</strong> Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamaño del archivo unido significativamente — frecuentemente en 50-80%.</li>
                <li>&#10003; <strong>Aplana antes de unir.</strong> Si alguno de tus PDFs tiene campos de formulario, anotaciones o capas, <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">aplánalo primero</Link> para eliminar datos innecesarios.</li>
                <li>&#10003; <strong>Elimina páginas extra.</strong> Usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para eliminar páginas en blanco o secciones innecesarias antes de unir.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Mejores Prácticas para Unir PDFs</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Verifica la Orientación de las Páginas</h3>
                  <p className="text-slate-600">Los documentos escaneados a veces tienen páginas rotadas incorrectamente. Antes de unir, asegúrate de que todas las páginas estén orientadas correctamente. Puedes corregir páginas rotadas usando la herramienta <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link> de PDF.it.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Siempre Revisa el Documento Final</h3>
                  <p className="text-slate-600">Antes de enviar tu PDF unido, ábrelo y desplázate por cada página. Asegúrate de que no falten páginas, estén duplicadas o en el orden incorrecto. Esto toma 30 segundos y puede salvarte de solicitudes rechazadas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Considera la Protección con Contraseña</h3>
                  <p className="text-slate-600">Si tu PDF unido contiene información sensible (documentos financieros, copias de identificación, registros médicos), considera agregar una contraseña después de unir. La herramienta <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> de PDF.it te permite proteger tu archivo.</p>
                </div>
              </div>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Unir Tus PDFs?</h2>
            <p className="text-slate-300 mb-6">Sube tus archivos y combínalos en un documento en segundos — gratis, sin registro.</p>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Merge className="h-5 w-5" /> Unir PDFs Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Unir PDFs en el Orden Correcto (Sin Errores de Página)", href: "/es/aprender/unir-pdfs-en-orden" },
                { title: "Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles)", href: "/es/aprender/unir-pdfs-escaneados" },
                { title: "Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo)", href: "/es/aprender/combinar-pdfs-para-envio" },
                { title: "Unir Archivos PDF en iPhone (Método Rápido por Navegador)", href: "/es/aprender/unir-pdf-en-iphone" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo uno archivos PDF en línea gratis?", a: "Sube tus PDFs a la herramienta Unir PDF de PDF.it, ordénalos como desees, haz clic en Unir y descarga el archivo combinado. No se requiere registro para tus primeros 3 archivos." },
                { q: "¿Puedo unir más de dos PDFs a la vez?", a: "Sí. PDF.it te permite subir y unir tantos PDFs como necesites en una sola operación. Los usuarios gratuitos pueden unir archivos uno a la vez, mientras que los usuarios Pro obtienen procesamiento por lotes." },
                { q: "¿Unir PDFs aumentará el tamaño del archivo?", a: "El archivo unido será aproximadamente la suma de todos los archivos individuales. Si el resultado es muy grande, usa la herramienta Comprimir PDF de PDF.it después de unir para reducir el tamaño significativamente." },
                { q: "¿Puedo reordenar páginas antes de unir?", a: "Sí. PDF.it te permite arrastrar y soltar archivos en el orden exacto que deseas antes de unir. También puedes reordenar páginas individuales después de unir usando la herramienta Dividir o Reordenar." },
                { q: "¿Es seguro unir PDFs en línea?", a: "PDF.it procesa los archivos de forma segura y los elimina del servidor después del procesamiento. Tus documentos nunca se almacenan permanentemente ni se comparten con terceros." },
                { q: "¿Puedo unir PDFs en mi teléfono?", a: "Sí. PDF.it funciona en cualquier navegador móvil — Safari, Chrome o Firefox. Sube tus PDFs, únelos y descarga el resultado directamente en tu teléfono. No necesitas instalar ninguna app." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
