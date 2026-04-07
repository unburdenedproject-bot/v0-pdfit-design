import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Type, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPTX a PDF fuentes faltantes? Soluciona incrustacion y sustituciones | PDF.it",
  description: "Soluciona fuentes faltantes al convertir PowerPoint a PDF. Aprende por que se sustituyen las fuentes, como incrustar fuentes en PPTX y cuales fuentes seguras siempre se convierten correctamente.",
  keywords: "pptx a pdf fuentes faltantes, powerpoint a pdf problemas fuentes, incrustar fuentes powerpoint, sustitucion fuentes pdf, pptx fuentes no aparecen",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que faltan fuentes cuando convierto PPTX a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las fuentes faltan porque estan instaladas en tu computadora pero no incrustadas en el archivo PowerPoint. Cuando el archivo se convierte en un sistema diferente (o en linea), ese sistema no tiene tus fuentes instaladas, asi que sustituye una fuente predeterminada como Arial o Calibri." } },
  { "@type": "Question", "name": "Como incrusto fuentes en PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "Ve a Archivo > Opciones > Guardar. Marca 'Incrustar fuentes en el archivo' y selecciona 'Incrustar todos los caracteres.' Esto incluye los datos de la fuente dentro del archivo PPTX para que se convierta correctamente en cualquier sistema. Nota: algunas fuentes tienen restricciones de licencia que previenen la incrustacion." } },
  { "@type": "Question", "name": "Cuales fuentes son seguras para conversion a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Fuentes preinstaladas en la mayoria de sistemas se convierten confiablemente: Arial, Calibri, Times New Roman, Verdana, Georgia, Tahoma, Trebuchet MS, Segoe UI y Helvetica. Fuentes de Google como Open Sans, Roboto y Lato tambien estan ampliamente disponibles." } },
  { "@type": "Question", "name": "Puedo arreglar problemas de fuentes despues de convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Es dificil arreglar fuentes en un PDF existente. El mejor enfoque es arreglar las fuentes en PowerPoint primero (incrustarlas o cambiar a fuentes seguras), luego reconvertir a PDF. Si solo tienes el PDF, puedes convertirlo de vuelta a PowerPoint, arreglar las fuentes y reconvertir." } },
  { "@type": "Question", "name": "Por que mi PDF se ve diferente a mi PowerPoint?", "acceptedAnswer": { "@type": "Answer", "text": "La causa mas comun es la sustitucion de fuentes — se usa una fuente diferente porque la original no estaba disponible durante la conversion. Esto puede cambiar el espaciado del texto, saltos de linea y diseno general. Incrustar fuentes antes de la conversion lo previene." } },
  { "@type": "Question", "name": "Las Google Fonts funcionan al convertir PPTX a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Las Google Fonts (Open Sans, Roboto, Lato, Montserrat, etc.) funcionan bien si estan instaladas en tu sistema e incrustadas en el PPTX. Como son gratuitas y ampliamente disponibles, son una buena alternativa a fuentes comerciales." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como solucionar fuentes faltantes al convertir PPTX a PDF", "description": "Previene la sustitucion de fuentes y obtiene una salida PDF perfecta desde tus presentaciones PowerPoint.", "step": [
  { "@type": "HowToStep", "name": "Incrusta fuentes en tu archivo PowerPoint", "text": "Abre tu PPTX en PowerPoint. Ve a Archivo > Opciones > Guardar. Marca 'Incrustar fuentes en el archivo' y selecciona 'Incrustar todos los caracteres.' Guarda el archivo." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu PPTX (con fuentes incrustadas) a la herramienta PowerPoint a PDF de PDF.it y haz clic en Convertir. Las fuentes incrustadas aseguran un renderizado correcto." },
  { "@type": "HowToStep", "name": "Verifica la salida", "text": "Abre el PDF y comparalo con tu PowerPoint original. Revisa titulos, texto del cuerpo y fuentes decorativas. Si una fuente sigue viendose mal, puede tener restricciones de licencia — cambia a una alternativa segura y reconvierte." }
] }

export default function PptxAPdfFuentesFaltantesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPTX a PDF fuentes faltantes? Soluciona incrustacion y sustituciones</h1>
          <p className="text-xl text-slate-300">Tu PowerPoint se ve perfecto en tu computadora, pero la salida PDF tiene fuentes incorrectas, espaciado roto o texto ilegible. Aqui te explicamos por que sucede y como solucionarlo.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Type className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Fuentes incrustadas y listas? Convierte tu archivo ahora.</p></div>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir PPT a PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que faltan las fuentes en el PDF?</h2>
            <p className="text-slate-600 mb-4">Cuando usas una fuente en PowerPoint, el software referencia un archivo de fuente instalado en <strong>tu</strong> computadora. Pero ese archivo de fuente no se incluye automaticamente en el PPTX. Cuando el archivo se abre o convierte en un sistema diferente, la fuente podria no existir alli.</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Fuentes personalizadas no incrustadas.</strong> Fuentes decorativas, de marca o compradas solo estan en tu maquina. Sin incrustar, no viajan con el archivo.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Fuentes especificas del sistema.</strong> Algunas fuentes solo existen en Windows (ej. Segoe UI) o solo en Mac (ej. San Francisco). Conversiones multiplataforma pueden provocar sustituciones.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Herramientas de conversion en linea.</strong> Cuando subes un PPTX a un convertidor en linea (incluyendo PDF.it), el servidor puede no tener tus fuentes personalizadas. Incrustar lo soluciona.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Restricciones de licencia de fuentes.</strong> Algunas fuentes comerciales bloquean la incrustacion debido a sus terminos de licencia. PowerPoint no las incluira aunque marques la opcion de incrustar.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como incrustar fuentes en PowerPoint (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Abre tu presentacion en PowerPoint", desc: "Abre el archivo PPTX en la computadora donde se ve correcto (donde todas las fuentes estan instaladas y se muestran correctamente)." },
                { title: "Activa la incrustacion de fuentes", desc: "Ve a Archivo > Opciones > Guardar. Marca 'Incrustar fuentes en el archivo.' Selecciona 'Incrustar todos los caracteres (mejor para edicion por otras personas)' para incrustacion completa. Haz clic en Aceptar." },
                { title: "Guarda y convierte", desc: "Guarda el archivo. El PPTX ahora sera mas grande (los datos de fuente estan incluidos). Subelo a la herramienta PowerPoint a PDF de PDF.it — las fuentes incrustadas se renderizaran correctamente durante la conversion." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
            <p className="text-slate-500 text-sm mt-4"><strong>Nota para usuarios de Mac:</strong> PowerPoint para Mac no soporta incrustacion de fuentes. Usa PowerPoint en Windows, o cambia a fuentes seguras para la web antes de convertir.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Fuentes seguras que siempre se convierten correctamente</h2>
            <p className="text-slate-600 mb-4">Si la incrustacion no es una opcion (o quieres evitar la complicacion), usa fuentes preinstaladas en practicamente todos los sistemas:</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Nombre de fuente</th>
                  <th className="text-left py-3 px-4 font-bold">Estilo</th>
                  <th className="text-left py-3 px-4 font-bold">Disponible en</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Arial</td><td className="py-3 px-4">Sans-serif, limpia</td><td className="py-3 px-4">Windows, Mac, Linux</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Calibri</td><td className="py-3 px-4">Sans-serif, moderna (predeterminada Office)</td><td className="py-3 px-4">Windows, Mac (con Office)</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Times New Roman</td><td className="py-3 px-4">Serif, tradicional</td><td className="py-3 px-4">Windows, Mac, Linux</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Verdana</td><td className="py-3 px-4">Sans-serif, optimizada para pantalla</td><td className="py-3 px-4">Windows, Mac, Linux</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Georgia</td><td className="py-3 px-4">Serif, elegante</td><td className="py-3 px-4">Windows, Mac, Linux</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Tahoma</td><td className="py-3 px-4">Sans-serif, compacta</td><td className="py-3 px-4">Windows, Mac</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4 text-sm"><strong>Google Fonts</strong> como Open Sans, Roboto, Lato y Montserrat tambien son excelentes opciones. Son gratuitas, ampliamente disponibles y permiten incrustacion.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como verificar tu PDF en busca de problemas de fuentes</h2>
            <p className="text-slate-600 mb-4">Despues de convertir, siempre revisa la salida. Esto es lo que debes buscar:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Compara lado a lado.</strong> Abre el PDF y el PowerPoint uno junto al otro. Busca diferencias en apariencia del texto, espaciado y saltos de linea.</li>
              <li>&#10003; <strong>Revisa titulos primero.</strong> Las fuentes decorativas de titulo son las mas susceptibles. Si tu fuente de titulo fue sustituida, todo el diseno de la diapositiva puede desplazarse.</li>
              <li>&#10003; <strong>Busca desbordamiento de texto.</strong> Las fuentes sustituidas a menudo tienen diferentes anchos de caracter. Texto que cabia en un cuadro de texto en PowerPoint puede desbordarse o ajustarse diferente en el PDF.</li>
              <li>&#10003; <strong>Haz zoom al 200%+.</strong> A niveles de zoom mas altos, puedes detectar diferencias sutiles en formas de letras que confirman una sustitucion de fuente.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que hacer si una fuente no se puede incrustar?</h2>
            <p className="text-slate-600 mb-4">Algunas fuentes tienen restricciones de licencia que bloquean la incrustacion. Si PowerPoint no incrusta una fuente, tienes algunas opciones:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Reemplaza con una fuente segura similar.</strong> Encuentra una fuente visualmente similar de la lista segura. Usa la funcion "Reemplazar fuentes" de PowerPoint (Inicio &gt; Reemplazar &gt; Reemplazar fuentes) para cambiar en toda la presentacion.</li>
              <li>&#10003; <strong>Convierte a contornos.</strong> En PowerPoint, puedes convertir texto a formas (clic derecho en cuadro de texto &gt; Guardar como imagen, o usa un complemento). Esto convierte el texto en graficos vectoriales que se ven identicos independientemente de las fuentes.</li>
              <li>&#10003; <strong>Exporta directamente desde PowerPoint.</strong> Usa Archivo &gt; Guardar como &gt; PDF para crear el PDF localmente donde todas las fuentes estan disponibles. Luego verifica la salida.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas de fuentes en otros formatos Office</h2>
            <p className="text-slate-600 mb-4">Los mismos principios de incrustacion de fuentes aplican a otros archivos de Microsoft Office:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> — Incrusta fuentes en Word de la misma manera (Archivo &gt; Opciones &gt; Guardar).</li>
              <li>&#10003; <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">Office a PDF</Link> — Nuestro convertidor universal maneja archivos Word, Excel y PowerPoint.</li>
              <li>&#10003; <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link> — Excel tiene menos problemas de fuentes ya que las hojas de calculo tipicamente usan fuentes estandar.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Fuentes arregladas? Convierte tu PowerPoint ahora</h2>
          <p className="text-slate-300 mb-6">Incrusta tus fuentes, sube el PPTX y obtiene un PDF perfecto en segundos.</p>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><Type className="h-5 w-5" /> Convertir PPT a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir PowerPoint a PDF en linea (PPTX a PDF)", href: "/es/aprender/convertir-ppt-a-pdf" },
              { title: "PPT a PDF para imprimir: mejores consejos de diseno y calidad", href: "/es/aprender/ppt-a-pdf-para-imprimir" },
              { title: "Las animaciones de PowerPoint funcionan en PDF?", href: "/es/aprender/ppt-a-pdf-animaciones" },
              { title: "Convertir PPT a PDF en iPhone (metodo rapido)", href: "/es/aprender/ppt-a-pdf-en-iphone" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterEs />
    </div>
  )
}
