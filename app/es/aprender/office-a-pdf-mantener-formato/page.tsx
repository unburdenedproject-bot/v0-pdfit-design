import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como mantener el formato al convertir Office a PDF | PDF.it",
  description: "Solucióna problemas de formato al convertir Word, Excel o PowerPoint a PDF. Aprende como preservar fuentes, diseño, imágenes y tablas para que tu PDF se vea exactamente como el original.",
  keywords: "office a pdf mantener formato, word a pdf problemas formato, preservar formato pdf, convertir a pdf sin perder formato",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por qué mi documento Word se ve diferente después de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "La causa más común son fuentes no estándar. Si el convertidor no tiene la misma fuente instalada, sustituye una similar — lo que cambia el espaciado, saltos de línea y diseño de página. Usa fuentes estándar o incrusta tus fuentes antes de convertir." } },
  { "@type": "Question", "name": "Como solucióno problemas de formato de tablas en Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Establece el area de impresión en Excel antes de convertir, cambia a orientación horizontal para tablas anchas, y usa 'Ajustar hoja en una página' en configuraciónes de Diseño de página. Esto asegura que las columnas no se corten en el PDF." } },
  { "@type": "Question", "name": "Las imágenes se comprimen al convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Algunos convertidores comprimen imágenes durante la conversión. PDF.it preserva la calidad de imagen por defecto. Si necesitas un archivo más pequeño después, usa la herramienta Comprimir PDF para reducir tamaño sin afectar la legibilidad." } },
  { "@type": "Question", "name": "Mis animaciones de PowerPoint se mostraran en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF es un formato estático, así que animaciones y transiciones de diapositivas no se preservan. Cada diapositiva se convierte en una página del PDF con todos los elementos visibles mostrados en su estado final." } },
  { "@type": "Question", "name": "Puedo convertir archivos Office a PDF sin perder hiperenlaces?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it preserva hiperenlaces clicables durante la conversión. Enlaces a sitios web, direcciones de email y marcadores dentro del documento permanecen funcionales en el PDF." } },
  { "@type": "Question", "name": "Que fuentes debo usar para evitar problemas de formato?", "acceptedAnswer": { "@type": "Answer", "text": "Usa fuentes estándar como Arial, Calibri, Times New Roman, Verdana o Helvetica. Estas están disponibles en practicamente todos los sistemas y se renderizaran correctamente en cualquier convertidor de PDF." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como mantener el formato al convertir Office a PDF", "description": "Preserva el diseño, fuentes e imágenes de tu documento al convertir a PDF en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara tu documento", "text": "Usa fuentes estándar, establece margenes correctos y define areas de impresión (para Excel). Acepta o rechaza el control de cambios en documentos Word." },
  { "@type": "HowToStep", "name": "Convierte con PDF.it", "text": "Sube tu archivo a la herramienta Office a PDF de PDF.it. El convertidor preserva formato, fuentes, imágenes y diseño automáticamente." },
  { "@type": "HowToStep", "name": "Verifica el resultado", "text": "Abre el PDF y revisa cada página. Confirma que fuentes, imágenes, tablas y saltos de página se vean correctos antes de compartir o enviar." }
] }

export default function OfficeAPdfMantenerFormatoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como mantener el formato al convertir Office a PDF</h1>
          <p className="text-xl text-slate-300">Fuentes que cambian, tablas que se desplazan, imágenes que desaparecen — los problemas de formato son la parte más frustrante de convertir archivos Office a PDF. Aqui te mostramos como prevenir cada problema común.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Nuestra herramienta preserva el formato automáticamente.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas comunes de formato (y por qué suceden)</h2>
            <p className="text-slate-600 mb-4">La mayoría de los problemas de formato durante la conversión caen en categorias predecibles. Entender la causa raiz los hace fáciles de soluciónar:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Sustitucion de fuentes.</strong> Si tu documento usa una fuente que el convertidor no tiene, la cambia por una similar. Esto cambia el espaciado entre letras, saltos de línea y a veces empuja contenido a la siguiente página.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Diferencias de margenes y tamaño de página.</strong> Si tu documento fue diseñado para papel A4 pero el convertidor usa tamaño Carta (o viceversa), el contenido cerca de los bordes puede cortarse o desplazarse.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Desplazamiento de imágenes.</strong> Las imágenes ancladas al texto pueden desplazarse cuando el interlineado cambia debido a la sustitucion de fuentes. Las imágenes configuradas como "en línea con texto" son más estables que las flotantes.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Desbordamiento de tablas.</strong> Las tablas anchas de Excel pueden extenderse más alla del ancho de página del PDF, cortando columnas del lado derecho.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Caracteres especiales faltantes.</strong> Simbolos, emojis o caracteres de escrituras no latinas pueden no renderizarse si la fuente no los soporta.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como prevenir problemas de formato (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Usa fuentes estándar y ampliamente disponibles", desc: "Usa Arial, Calibri, Times New Roman, Verdana o Helvetica. Estas fuentes están disponibles en cada sistema operativo y cada convertidor de PDF. Evita fuentes decorativas o personalizadas para documentos criticos." },
                { title: "Prepara tu documento antes de convertir", desc: "En Word: acepta control de cambios y elimina comentarios. En Excel: establece el area de impresión y elige horizontal para tablas anchas. En PowerPoint: verifica que ningun texto se desborde más alla de los límites de la diapositiva." },
                { title: "Convierte y verifica el resultado", desc: "Sube a la herramienta Office a PDF de PDF.it, descarga el PDF y abrelo para verificar cada página. Busca imágenes desplazadas, fuentes faltantes, tablas cortadas y saltos de página incorrectos." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Word a PDF: consejos de formato</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Incrusta fuentes en tu documento</h3><p className="text-slate-600">En Microsoft Word, ve a Archivo &gt; Opciones &gt; Guardar y marca "Incrustar fuentes en el archivo." Esto incluye tus fuentes en el documento para que el convertidor las use exactamente como fueron diseñadas. Esto aumenta ligeramente el tamaño del archivo pero elimina problemas de sustitucion de fuentes.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Configura imágenes como "En línea con texto"</h3><p className="text-slate-600">Las imágenes flotantes (configuradas como "cuadrado," "estrecho" o "detrás del texto") son las más propensas a desplazarse durante la conversión. Haz clic derecho en cada imagen, elige "Ajustar texto" y seleccióna "En línea con texto" para máxima estabilidad. Usa la herramienta <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> para la conversión más confiable.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Elimina control de cambios y comentarios</h3><p className="text-slate-600">El control de cambios y los comentarios pueden aparecer inesperadamente en el PDF si no se resuelven. Ve a Revision &gt; Aceptar todos los cambios, luego elimina todos los comentarios antes de convertir.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Excel a PDF: consejos de formato</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Establece el area de impresión.</strong> Selecciona las celdas que quieres en el PDF, luego ve a Diseño de página &gt; Area de impresión &gt; Establecer area de impresión. Esto previene que columnas vacias extras aparezcan en el PDF.</li>
              <li>&#10003; <strong>Usa orientación horizontal</strong> para hojas de cálculo anchas. Ve a Diseño de página &gt; Orientación &gt; Horizontal.</li>
              <li>&#10003; <strong>Ajusta a una página.</strong> En Configurar página, establece Ancho en "1 página" para prevenir que se corten columnas. Ten cuidado con hojas muy anchas — el texto puede quedar muy pequeño para leer.</li>
              <li>&#10003; <strong>Revisa Vista previa de impresión primero.</strong> Antes de convertir, usa Archivo &gt; Vista previa de impresión para ver exactamente como se vera tu hoja como PDF. Corrige cualquier problema en la hoja antes de subir a <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">PowerPoint a PDF: consejos de formato</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Verifica desbordamiento de texto.</strong> Texto que se extiende más alla del límite de la diapositiva en PowerPoint puede recortarse en el PDF. Asegurate de que todo el texto quepa dentro del area visible de cada diapositiva.</li>
              <li>&#10003; <strong>Entiende que no se transfiere.</strong> Animaciones, transiciones de diapositivas, videos incrustados y audio no apareceran en el PDF. Cada diapositiva se convierte en una página estática mostrando todos los elementos en su posición final.</li>
              <li>&#10003; <strong>Usa tamaños de diapositiva estándar.</strong> Si usaste un tamaño de diapositiva personalizado, las páginas del PDF coincidiran con ese tamaño. Diapositivas estándar 16:9 o 4:3 se convierten de forma más confiable con la herramienta <Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">PowerPoint a PDF</Link>.</li>
              <li>&#10003; <strong>Incrusta fuentes en PowerPoint.</strong> Igual que en Word, ve a Archivo &gt; Opciones &gt; Guardar &gt; "Incrustar fuentes en el archivo" para prevenir sustitucion de fuentes.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Convierte sin perder formato</h2>
          <p className="text-slate-300 mb-6">PDF.it preserva fuentes, imágenes y diseño automáticamente. Sube tu archivo Office y obtiene un PDF pixel-perfect.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF", href: "/es/aprender/office-a-pdf-convertidor" },
              { title: "Convertir DOCX, XLSX y PPTX a PDF — Todos los formatos Office", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              { title: "Convertir archivos Office a PDF en móvil (iPhone y Android)", href: "/es/aprender/office-a-pdf-en-movil" },
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
