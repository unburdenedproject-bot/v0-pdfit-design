import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Presentation, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir PowerPoint a PDF en línea (PPTX a PDF) | PDF.it",
  description: "Aprende como convertir PowerPoint a PDF en línea en segundos. Guia paso a paso sobre calidad de diapositivas, páginas de notas y por qué PDF es el mejor formato para compartir presentaciones.",
  keywords: "convertir powerpoint a pdf en línea, pptx a pdf, powerpoint a pdf, convertidor ppt a pdf, convertir ppt a pdf gratis",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como convierto PowerPoint a PDF gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu archivo PPTX o PPT a la herramienta PowerPoint a PDF de PDF.it, haz clic en Convertir y descarga el PDF. No se requiere registro para tus primeros 3 archivos. La conversión preserva el diseño de diapositivas, fuentes e imágenes." } },
  { "@type": "Question", "name": "Convertir PowerPoint a PDF mantiene el formato?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Convertir a PDF preserva tu texto, imágenes, formas, gráficos y diseño exactamente como aparecen en PowerPoint. Los únicos elementos que no se transfieren son animaciones y transiciones, ya que PDF es un formato estático." } },
  { "@type": "Question", "name": "Puedo convertir PPTX a PDF sin tener PowerPoint instalado?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it es una herramienta en línea que funciona en cualquier navegador. No necesitas PowerPoint, Microsoft Office ni ningun software instalado. Solo sube tu archivo y conviertelo." } },
  { "@type": "Question", "name": "Como incluyo las notas del orador en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "En PowerPoint, ve a Archivo > Exportar > Crear PDF y elige 'Páginas de notas' como diseño. Esto imprime cada diapositiva con sus notas debajo. Si estas convirtiendo en línea, exporta como Páginas de notas desde PowerPoint primero, luego convierte el archivo resultante." } },
  { "@type": "Question", "name": "Mis fuentes de PowerPoint se veran igual en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si usas fuentes estándar (Arial, Calibri, Times New Roman), si. Fuentes personalizadas o poco comunes pueden ser sustituidas si no están incrustadas. Para evitar esto, incrusta las fuentes en PowerPoint antes de convertir: ve a Archivo > Opciones > Guardar > marca 'Incrustar fuentes en el archivo'." } },
  { "@type": "Question", "name": "Puedo convertir el PDF de vuelta a PowerPoint después?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it ofrece una herramienta PDF a PowerPoint que convierte tu PDF de vuelta a un archivo PPTX editable. Ten en cuenta que diseños complejos pueden necesitar ajustes menores después de la conversión." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir PowerPoint a PDF en línea", "description": "Convierte tu presentación PPTX o PPT a PDF en 3 simples pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Sube tu archivo PowerPoint", "text": "Ve a la herramienta PowerPoint a PDF de PDF.it y sube tu archivo PPTX o PPT haciendo clic o arrastrandolo al area de carga." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Haz clic en Convertir. PDF.it procesa tu presentación y crea un PDF que preserva tus diapositivas, fuentes e imágenes." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Descarga el archivo PDF convertido. Esta listo para compartir por email, subir a portales o imprimir — y se vera igual en cualquier dispositivo." }
] }

export default function ConvertirPptAPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir PowerPoint a PDF en línea (PPTX a PDF)</h1>
          <p className="text-xl text-slate-300">Necesitas compartir una presentación sin preocuparte por fuentes, formato o compatibilidad de software? Aqui te mostramos como convertir PowerPoint a PDF en segundos — gratis, en línea, sin software necesario.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Presentation className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir PPT a PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por qué convertir PowerPoint a PDF?</h2>
            <p className="text-slate-600 mb-4">Los archivos PowerPoint son excelentes para crear y editar presentaciones, pero no son ideales para compartir. Esta es la razon por la que PDF es el mejor formato para distribución:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Visualización universal.</strong> Los PDFs se abren en cualquier dispositivo — Windows, Mac, iPhone, Android — sin necesitar PowerPoint instalado. Tu audiencia ve exactamente lo que tu quisiste.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Sin ediciónes accidentales.</strong> Enviar un PPTX significa que cualquiera puede modificar tus diapositivas. Un PDF bloquea el contenido para que tu trabajo permanezca intacto.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Diseño consistente.</strong> Las fuentes se desplazan, las imágenes se mueven y los gráficos se rompen cuando un PPTX se abre en otra computadora. PDF congela el diseño pixel por pixel.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Tamaño de archivo más pequeño.</strong> Los PDFs a menudo son más pequeños que el PPTX original. Si el archivo sigue siendo grande, puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir el PDF</Link> aun más.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir PowerPoint a PDF (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Sube tu archivo PowerPoint", desc: "Ve a la herramienta PowerPoint a PDF y arrastra tu archivo PPTX o PPT al area de carga, o haz clic para buscar. Archivos hasta 25MB son gratis — usuarios Pro pueden subir hasta 200MB." },
                { title: "Haz clic en Convertir", desc: "PDF.it convierte tu presentación a un PDF de alta calidad. Cada diapositiva se convierte en una página. Texto, imágenes, formas y gráficos se preservan exactamente como aparecen en PowerPoint." },
                { title: "Descarga tu PDF", desc: "Descarga el PDF terminado y compartelo con confianza. El archivo se ve identico en cada dispositivo y plataforma — no se necesita PowerPoint para verlo." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que se convierte a PDF (y que no)</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Elemento</th>
                  <th className="text-left py-3 px-4 font-bold">Se convierte?</th>
                  <th className="text-left py-3 px-4 font-bold">Notas</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Texto y fuentes</td><td className="py-3 px-4 text-green-600 font-semibold">Si</td><td className="py-3 px-4">Fuentes estándar se convierten perfectamente; fuentes personalizadas deben incrustarse primero</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Imágenes y formas</td><td className="py-3 px-4 text-green-600 font-semibold">Si</td><td className="py-3 px-4">Preservadas en calidad original</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Gráficos y diagramas</td><td className="py-3 px-4 text-green-600 font-semibold">Si</td><td className="py-3 px-4">Renderizados como imágenes estáticas en el PDF</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Animaciones</td><td className="py-3 px-4 text-red-600 font-semibold">No</td><td className="py-3 px-4">PDF es estático — <Link href="/es/aprender/ppt-a-pdf-animaciones" className="text-[#14D8C4] hover:underline">aprende más</Link></td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Transiciones</td><td className="py-3 px-4 text-red-600 font-semibold">No</td><td className="py-3 px-4">Las transiciones de diapositivas se pierden en PDF</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Videos incrustados</td><td className="py-3 px-4 text-red-600 font-semibold">No</td><td className="py-3 px-4">Solo se conserva la miniatura/poster del video</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4 text-sm">Tienes curiosidad sobre las animaciones específicamente? Lee nuestra guia completa sobre <Link href="/es/aprender/ppt-a-pdf-animaciones" className="text-[#14D8C4] hover:underline">que sucede con las animaciones de PowerPoint en PDF</Link>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como obtener la mejor calidad de diapositivas en tu PDF</h2>
            <p className="text-slate-600 mb-4">La calidad de tu PDF depende de la calidad de tu PowerPoint original. Aqui tienes consejos para obtener los resultados más nitidos:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa imágenes de alta resolución</strong> en tus diapositivas (al menos 150 DPI para pantalla, 300 DPI para impresión).</li>
              <li>&#10003; <strong>Incrusta tus fuentes</strong> antes de convertir. Ve a Archivo &gt; Opciones &gt; Guardar &gt; marca "Incrustar fuentes en el archivo." Esto previene <Link href="/es/aprender/pptx-a-pdf-fuentes-faltantes" className="text-[#14D8C4] hover:underline">problemas de fuentes faltantes</Link>.</li>
              <li>&#10003; <strong>Evita la compresión excesiva</strong> de imágenes dentro de PowerPoint — deja que la calidad original se transfiera al PDF.</li>
              <li>&#10003; <strong>Verifica el tamaño de diapositiva</strong> antes de convertir. Estándar (4:3) y Panoramico (16:9) funcionan, pero asegurate de que la relación de aspecto coincida con tu salida deseada. Ve nuestra <Link href="/es/aprender/ppt-a-pdf-para-imprimir" className="text-[#14D8C4] hover:underline">guia de impresión</Link> para detalles.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Incluyendo notas del orador en tu PDF</h2>
            <p className="text-slate-600 mb-4">Por defecto, convertir un PowerPoint a PDF solo incluye las diapositivas mismas. Si necesitas notas del orador en el PDF:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; En PowerPoint, ve a <strong>Archivo &gt; Exportar &gt; Crear PDF/XPS</strong>.</li>
              <li>&#10003; Haz clic en <strong>Opciones</strong> y seleccióna <strong>"Páginas de notas"</strong> en "Publicar que."</li>
              <li>&#10003; Esto crea un PDF donde cada página muestra la diapositiva arriba y las notas del orador abajo.</li>
              <li>&#10003; Alternativamente, imprime a PDF usando el diseño "Páginas de notas" en Archivo &gt; Imprimir.</li>
            </ul>
            <p className="text-slate-600 mt-4">Si ya tienes un archivo PPTX y no puedes acceder a PowerPoint, subelo al <Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">convertidor de PDF.it</Link> para una conversión rápida solo de diapositivas.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Convirtiendo otros archivos de Office a PDF</h2>
            <p className="text-slate-600 mb-4">PowerPoint no es el único tipo de archivo que puedes convertir. PDF.it también maneja:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> — Convierte archivos DOCX y DOC a PDF.</li>
              <li>&#10003; <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link> — Convierte hojas de cálculo preservando diseños de tablas.</li>
              <li>&#10003; <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">Office a PDF</Link> — Una herramienta para cualquier archivo de Microsoft Office.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu PowerPoint?</h2>
          <p className="text-slate-300 mb-6">Sube tu archivo PPTX y obtiene un PDF perfecto en segundos — gratis, sin registro.</p>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Presentation className="h-5 w-5" /> Convertir PPT a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "PPT a PDF para imprimir: mejores consejos de diseño y calidad", href: "/es/aprender/ppt-a-pdf-para-imprimir" },
              { title: "Las animaciones de PowerPoint funcionan en PDF? Que se convierte (y que no)", href: "/es/aprender/ppt-a-pdf-animaciones" },
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
