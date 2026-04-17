import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { PlayCircle, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Las animaciones de PowerPoint funcionan en PDF? Que se convierte (y que no) | PDF.it",
  description: "Descubre que sucede con las animaciones, transiciones y videos incrustados de PowerPoint al convertir a PDF. Aprende que se transfiere, que se pierde y las mejores alternativas.",
  keywords: "animaciones powerpoint a pdf, ppt animaciones en pdf, funcionan animaciones en pdf, transiciones powerpoint pdf, pptx a pdf animaciones",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Las animaciones de PowerPoint se transfieren a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF es un formato de documento estático y no soporta animaciones. Cuando conviertes PowerPoint a PDF, cada diapositiva se captura en su estado final — todos los elementos animados aparecen en sus posiciones finales, pero los efectos de movimiento se eliminan." } },
  { "@type": "Question", "name": "Que sucede con las transiciones de diapositivas en PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las transiciones de diapositivas (desvanecimiento, barrido, empuje, etc.) se pierden completamente al convertir a PDF. Cada diapositiva se convierte en una página estática en el PDF. No hay forma de preservar transiciones en un archivo PDF." } },
  { "@type": "Question", "name": "Los videos incrustados funcionan en PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. Los videos incrustados no se incluyen en el PDF. Solo se muestra el poster o miniatura del video como imagen estática. Si tu audiencia necesita ver el video, comparte el PPTX original o enlaza al video por separado." } },
  { "@type": "Question", "name": "Que elementos de PowerPoint SI se convierten a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Texto, imágenes, formas, SmartArt, gráficos, tablas y formato de fondo se convierten a PDF. Estos elementos aparecen exactamente como en el estado final de cada diapositiva. Los hiperenlaces también se preservan en la mayoría de los casos." } },
  { "@type": "Question", "name": "Como puedo compartir una presentación animada sin usar PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Tienes varias opciones: exportar como video (MP4) desde PowerPoint, usar PowerPoint Online para visualización gratuita, compartir via Google Slides (importa tu PPTX), o subir a SlideShare. Cada método preserva las animaciones mejor que PDF." } },
  { "@type": "Question", "name": "Si convierto un PDF de vuelta a PowerPoint, vuelven las animaciones?", "acceptedAnswer": { "@type": "Answer", "text": "No. Una vez que una presentación se convierte a PDF, los datos de animación se pierden permanentemente. Convertir el PDF de vuelta a PowerPoint te da diapositivas editables, pero necesitarias volver a agregar las animaciones manualmente." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como manejar animaciones de PowerPoint al convertir a PDF", "description": "Entiende que sucede con las animaciones y aprende el mejor enfoque para convertir presentaciones animadas.", "step": [
  { "@type": "HowToStep", "name": "Revisa tu presentación en busca de animaciones", "text": "Abre tu PowerPoint y revisa cada diapositiva. Anota cuales diapositivas tienen animaciones, transiciones o videos incrustados. Decide si estos elementos son esenciales para tu audiencia." },
  { "@type": "HowToStep", "name": "Elige tu formato de exportación", "text": "Si las animaciones son criticas, exporta como video MP4 en lugar de PDF. Si las animaciones son solo decorativas y el contenido importa más, convierte a PDF — todo el texto, imágenes y gráficos se preservaran." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu PPTX a la herramienta PowerPoint a PDF de PDF.it y convierte. Cada diapositiva se captura en su estado animado final, preservando todo el contenido visible sin los efectos de movimiento." }
] }

export default function PptAPdfAnimacionesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Las animaciones de PowerPoint funcionan en PDF? Que se convierte (y que no)</h1>
          <p className="text-xl text-slate-300">Creaste una presentación con animaciones impresionantes y transiciones. Pero cuando la conviertas a PDF, sobrevivira algo de eso? Aqui esta la respuesta honesta — y que puedes hacer al respecto.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><PlayCircle className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Necesitas convertir de todas formas? Ve directo a la herramienta.</p></div>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir PPT a PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">La respuesta corta: las animaciones no se transfieren a PDF</h2>
            <p className="text-slate-600 mb-4">PDF es un <strong>formato de documento estático</strong>. Fue diseñado para preservar la apariencia de una página impresa — no para reproducir efectos de movimiento. Cuando conviertes una presentación PowerPoint a PDF:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold mt-0.5">&#10007;</span><span><strong>Las animaciones se eliminan.</strong> Animaciones de entrada, enfasis, salida y trayectorias de movimiento se pierden. Cada elemento aparece en su posición final.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold mt-0.5">&#10007;</span><span><strong>Las transiciones se eliminan.</strong> Desvanecimiento, barrido, empuje, transformacion — ninguna se transfiere. Cada diapositiva simplemente aparece como la siguiente página.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold mt-0.5">&#10007;</span><span><strong>Los videos incrustados se eliminan.</strong> Solo se muestra el poster (miniatura). El video no se incluye en el PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-red-500 font-bold mt-0.5">&#10007;</span><span><strong>Los clips de audio se eliminan.</strong> Narracion, musica de fondo y efectos de sonido no se incluyen en archivos PDF.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que SI se convierte exitosamente</h2>
            <p className="text-slate-600 mb-4">La buena noticia es que todo el <strong>contenido visual</strong> de tus diapositivas se convierte perfectamente:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Texto y fuentes</strong> — Todo el texto se preserva con formato (negrita, cursiva, colores, tamaños). Fuentes estándar se convierten perfectamente; incrusta fuentes personalizadas para estar seguro.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Imágenes y fotos</strong> — Preservadas en su calidad original en el PDF.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Formas, líneas y SmartArt</strong> — Todos los gráficos vectoriales se renderizan correctamente.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Gráficos y diagramas</strong> — Renderizados como imágenes estáticas, preservando la apariencia exacta de PowerPoint.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Tablas</strong> — Diseño y formato se mantienen.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Hiperenlaces</strong> — Los enlaces clicables usualmente sobreviven la conversión.</span></li>
              <li className="flex items-start gap-3"><span className="text-green-500 font-bold mt-0.5">&#10003;</span><span><strong>Fondos de diapositivas</strong> — Degradados, patrones e imágenes de fondo se preservan.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como manejar presentaciones animadas</h2>
            <div className="space-y-4">
              {[
                { title: "Decide si las animaciones son esenciales", desc: "Preguntate: la audiencia necesita ver el movimiento, o solo el contenido? Si las animaciones son decorativas (ej. puntos apareciendo), PDF funciona bien. Si las animaciones cuentan una historia (ej. un diagrama de proceso construyendose paso a paso), considera exportar como video." },
                { title: "Para compartir estático, convierte a PDF", desc: "Si el contenido importa más que el movimiento, convierte a PDF usando PDF.it. Todo el texto, imágenes, gráficos y diseños se preservan. Tu audiencia puede leer la presentación en cualquier dispositivo sin PowerPoint." },
                { title: "Para compartir animado, exporta como video", desc: "En PowerPoint, ve a Archivo > Exportar > Crear un video. Elige Full HD (1080p) para calidad. Esto crea un MP4 que incluye todas las animaciones, transiciones y hasta tiempos de narracion." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Alternativas a PDF para compartir presentaciones animadas</h2>
            <p className="text-slate-600 mb-4">Si necesitas que tu audiencia vea las animaciones, aquí hay mejores opciones que PDF:</p>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Exportar como video MP4</h3><p className="text-slate-600">PowerPoint puede exportar tu presentación completa como archivo de video (Archivo &gt; Exportar &gt; Crear un video). Todas las animaciones, transiciones y tiempos se preservan. La desventaja: los espectadores no pueden saltar fácilmente a diapositivas específicas.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compartir via PowerPoint Online</h3><p className="text-slate-600">Sube tu PPTX a OneDrive y comparte un enlace de solo lectura. Los destinatarios pueden ver la presentación en su navegador con las animaciones intactas — no necesitan instalar PowerPoint.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Importar a Google Slides</h3><p className="text-slate-600">Sube tu PPTX a Google Slides y comparte un enlace. La mayoría de las animaciones son soportadas, aunque efectos complejos pueden renderizarse diferente. Gratis y accesible para cualquiera con una cuenta de Google.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Se pueden recuperar las animaciones después de convertir a PDF?</h2>
            <p className="text-slate-600 mb-4">No. Una vez que una presentación se convierte a PDF, los datos de animación se pierden permanentemente. Incluso si conviertes el PDF de vuelta a PowerPoint, el PPTX resultante tendrá diapositivas estáticas. Necesitarias volver a agregar las animaciones manualmente.</p>
            <p className="text-slate-600">Por eso es importante <strong>conservar tu archivo PPTX original</strong>. El PDF debe tratarse como una copia de distribución, no un reemplazo del archivo fuente.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Cuando PDF ES la opción correcta (incluso con animaciones)</h2>
            <p className="text-slate-600 mb-4">A pesar de perder animaciones, PDF sigue siendo el mejor formato para muchas situaciones:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Entregar tareas o reportes</strong> — profesores y revisores esperan PDF.</li>
              <li>&#10003; <strong>Adjuntar a emails</strong> — PDF es universalmente visible y más pequeño que PPTX.</li>
              <li>&#10003; <strong>Subir a portales</strong> — solicitudes de empleo, becas y tramites regulatorios usualmente requieren PDF.</li>
              <li>&#10003; <strong>Imprimir folletos</strong> — para copias fisicas, PDF da los <Link href="/es/aprender/ppt-a-pdf-para-imprimir" className="text-[#14D8C4] hover:underline">resultados de impresión más confiables</Link>.</li>
              <li>&#10003; <strong>Archivar presentaciones</strong> — PDF asegura que el contenido sea legible años después, en cualquier dispositivo.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu PowerPoint?</h2>
          <p className="text-slate-300 mb-6">Animaciones aparte, tu contenido se vera perfecto. Sube y convierte en segundos.</p>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><PlayCircle className="h-5 w-5" /> Convertir PPT a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir PowerPoint a PDF en línea (PPTX a PDF)", href: "/es/aprender/convertir-ppt-a-pdf" },
              { title: "PPT a PDF para imprimir: mejores consejos de diseño y calidad", href: "/es/aprender/ppt-a-pdf-para-imprimir" },
              { title: "PPTX a PDF fuentes faltantes? Solucióna incrustacion y sustituciones", href: "/es/aprender/pptx-a-pdf-fuentes-faltantes" },
              { title: "Convertir PPT a PDF en iPhone (método rápido)", href: "/es/aprender/ppt-a-pdf-en-iphone" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
