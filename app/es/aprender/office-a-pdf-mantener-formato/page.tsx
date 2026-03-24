import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como mantener el formato al convertir Office a PDF | PDF.it",
  description: "Soluciona problemas de formato al convertir Word, Excel o PowerPoint a PDF. Aprende como preservar fuentes, diseno, imagenes y tablas para que tu PDF se vea exactamente como el original.",
  keywords: "office a pdf mantener formato, word a pdf problemas formato, preservar formato pdf, convertir a pdf sin perder formato",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que mi documento Word se ve diferente despues de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "La causa mas comun son fuentes no estandar. Si el convertidor no tiene la misma fuente instalada, sustituye una similar — lo que cambia el espaciado, saltos de linea y diseno de pagina. Usa fuentes estandar o incrusta tus fuentes antes de convertir." } },
  { "@type": "Question", "name": "Como soluciono problemas de formato de tablas en Excel a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Establece el area de impresion en Excel antes de convertir, cambia a orientacion horizontal para tablas anchas, y usa 'Ajustar hoja en una pagina' en configuraciones de Diseno de pagina. Esto asegura que las columnas no se corten en el PDF." } },
  { "@type": "Question", "name": "Las imagenes se comprimen al convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Algunos convertidores comprimen imagenes durante la conversion. PDF.it preserva la calidad de imagen por defecto. Si necesitas un archivo mas pequeno despues, usa la herramienta Comprimir PDF para reducir tamano sin afectar la legibilidad." } },
  { "@type": "Question", "name": "Mis animaciones de PowerPoint se mostraran en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF es un formato estatico, asi que animaciones y transiciones de diapositivas no se preservan. Cada diapositiva se convierte en una pagina del PDF con todos los elementos visibles mostrados en su estado final." } },
  { "@type": "Question", "name": "Puedo convertir archivos Office a PDF sin perder hiperenlaces?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it preserva hiperenlaces clicables durante la conversion. Enlaces a sitios web, direcciones de email y marcadores dentro del documento permanecen funcionales en el PDF." } },
  { "@type": "Question", "name": "Que fuentes debo usar para evitar problemas de formato?", "acceptedAnswer": { "@type": "Answer", "text": "Usa fuentes estandar como Arial, Calibri, Times New Roman, Verdana o Helvetica. Estas estan disponibles en practicamente todos los sistemas y se renderizaran correctamente en cualquier convertidor de PDF." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como mantener el formato al convertir Office a PDF", "description": "Preserva el diseno, fuentes e imagenes de tu documento al convertir a PDF en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Prepara tu documento", "text": "Usa fuentes estandar, establece margenes correctos y define areas de impresion (para Excel). Acepta o rechaza el control de cambios en documentos Word." },
  { "@type": "HowToStep", "name": "Convierte con PDF.it", "text": "Sube tu archivo a la herramienta Office a PDF de PDF.it. El convertidor preserva formato, fuentes, imagenes y diseno automaticamente." },
  { "@type": "HowToStep", "name": "Verifica el resultado", "text": "Abre el PDF y revisa cada pagina. Confirma que fuentes, imagenes, tablas y saltos de pagina se vean correctos antes de compartir o enviar." }
] }

export default function OfficeAPdfMantenerFormatoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como mantener el formato al convertir Office a PDF</h1>
          <p className="text-xl text-slate-300">Fuentes que cambian, tablas que se desplazan, imagenes que desaparecen — los problemas de formato son la parte mas frustrante de convertir archivos Office a PDF. Aqui te mostramos como prevenir cada problema comun.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Nuestra herramienta preserva el formato automaticamente.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas comunes de formato (y por que suceden)</h2>
            <p className="text-slate-600 mb-4">La mayoria de los problemas de formato durante la conversion caen en categorias predecibles. Entender la causa raiz los hace faciles de solucionar:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Sustitucion de fuentes.</strong> Si tu documento usa una fuente que el convertidor no tiene, la cambia por una similar. Esto cambia el espaciado entre letras, saltos de linea y a veces empuja contenido a la siguiente pagina.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Diferencias de margenes y tamano de pagina.</strong> Si tu documento fue disenado para papel A4 pero el convertidor usa tamano Carta (o viceversa), el contenido cerca de los bordes puede cortarse o desplazarse.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Desplazamiento de imagenes.</strong> Las imagenes ancladas al texto pueden desplazarse cuando el interlineado cambia debido a la sustitucion de fuentes. Las imagenes configuradas como "en linea con texto" son mas estables que las flotantes.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Desbordamiento de tablas.</strong> Las tablas anchas de Excel pueden extenderse mas alla del ancho de pagina del PDF, cortando columnas del lado derecho.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Caracteres especiales faltantes.</strong> Simbolos, emojis o caracteres de escrituras no latinas pueden no renderizarse si la fuente no los soporta.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como prevenir problemas de formato (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Usa fuentes estandar y ampliamente disponibles", desc: "Usa Arial, Calibri, Times New Roman, Verdana o Helvetica. Estas fuentes estan disponibles en cada sistema operativo y cada convertidor de PDF. Evita fuentes decorativas o personalizadas para documentos criticos." },
                { title: "Prepara tu documento antes de convertir", desc: "En Word: acepta control de cambios y elimina comentarios. En Excel: establece el area de impresion y elige horizontal para tablas anchas. En PowerPoint: verifica que ningun texto se desborde mas alla de los limites de la diapositiva." },
                { title: "Convierte y verifica el resultado", desc: "Sube a la herramienta Office a PDF de PDF.it, descarga el PDF y abrelo para verificar cada pagina. Busca imagenes desplazadas, fuentes faltantes, tablas cortadas y saltos de pagina incorrectos." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Word a PDF: consejos de formato</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Incrusta fuentes en tu documento</h3><p className="text-slate-600">En Microsoft Word, ve a Archivo &gt; Opciones &gt; Guardar y marca "Incrustar fuentes en el archivo." Esto incluye tus fuentes en el documento para que el convertidor las use exactamente como fueron diseñadas. Esto aumenta ligeramente el tamaño del archivo pero elimina problemas de sustitucion de fuentes.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Configura imagenes como "En linea con texto"</h3><p className="text-slate-600">Las imagenes flotantes (configuradas como "cuadrado," "estrecho" o "detras del texto") son las mas propensas a desplazarse durante la conversion. Haz clic derecho en cada imagen, elige "Ajustar texto" y selecciona "En linea con texto" para maxima estabilidad. Usa la herramienta <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link> para la conversion mas confiable.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Elimina control de cambios y comentarios</h3><p className="text-slate-600">El control de cambios y los comentarios pueden aparecer inesperadamente en el PDF si no se resuelven. Ve a Revision &gt; Aceptar todos los cambios, luego elimina todos los comentarios antes de convertir.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Excel a PDF: consejos de formato</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Establece el area de impresion.</strong> Selecciona las celdas que quieres en el PDF, luego ve a Diseno de pagina &gt; Area de impresion &gt; Establecer area de impresion. Esto previene que columnas vacias extras aparezcan en el PDF.</li>
              <li>&#10003; <strong>Usa orientacion horizontal</strong> para hojas de calculo anchas. Ve a Diseno de pagina &gt; Orientacion &gt; Horizontal.</li>
              <li>&#10003; <strong>Ajusta a una pagina.</strong> En Configurar pagina, establece Ancho en "1 pagina" para prevenir que se corten columnas. Ten cuidado con hojas muy anchas — el texto puede quedar muy pequeno para leer.</li>
              <li>&#10003; <strong>Revisa Vista previa de impresion primero.</strong> Antes de convertir, usa Archivo &gt; Vista previa de impresion para ver exactamente como se vera tu hoja como PDF. Corrige cualquier problema en la hoja antes de subir a <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">PowerPoint a PDF: consejos de formato</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Verifica desbordamiento de texto.</strong> Texto que se extiende mas alla del limite de la diapositiva en PowerPoint puede recortarse en el PDF. Asegurate de que todo el texto quepa dentro del area visible de cada diapositiva.</li>
              <li>&#10003; <strong>Entiende que no se transfiere.</strong> Animaciones, transiciones de diapositivas, videos incrustados y audio no apareceran en el PDF. Cada diapositiva se convierte en una pagina estatica mostrando todos los elementos en su posicion final.</li>
              <li>&#10003; <strong>Usa tamanos de diapositiva estandar.</strong> Si usaste un tamano de diapositiva personalizado, las paginas del PDF coincidiran con ese tamano. Diapositivas estandar 16:9 o 4:3 se convierten de forma mas confiable con la herramienta <Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link>.</li>
              <li>&#10003; <strong>Incrusta fuentes en PowerPoint.</strong> Igual que en Word, ve a Archivo &gt; Opciones &gt; Guardar &gt; "Incrustar fuentes en el archivo" para prevenir sustitucion de fuentes.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-[#191B4D]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Convierte sin perder formato</h2>
          <p className="text-slate-300 mb-6">PDF.it preserva fuentes, imagenes y diseno automaticamente. Sube tu archivo Office y obtiene un PDF pixel-perfect.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF", href: "/es/aprender/office-a-pdf-convertidor" },
              { title: "Convertir DOCX, XLSX y PPTX a PDF — Todos los formatos Office", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              { title: "Convertir archivos Office a PDF en movil (iPhone y Android)", href: "/es/aprender/office-a-pdf-en-movil" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
