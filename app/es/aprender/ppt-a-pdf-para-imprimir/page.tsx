import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Printer, ArrowRight } from "lucide-react"

export const metadata = {
  title: "PPT a PDF para imprimir: mejores consejos de diseno y calidad | PDF.it",
  description: "Aprende como convertir PowerPoint a PDF para impresion de alta calidad. Consejos sobre tamano de diapositiva, resolucion, sangrado, margenes y como obtener PDFs listos para imprenta desde tus presentaciones.",
  keywords: "ppt a pdf para imprimir, powerpoint a pdf calidad impresion, pptx a pdf alta resolucion, imprimir diapositivas powerpoint, configuraciones impresion pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que tamano de diapositiva debo usar para imprimir PowerPoint como PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Para impresion en papel estandar, usa 10 x 7.5 pulgadas (Estandar 4:3) o establece un tamano personalizado que coincida con tu papel objetivo (ej. 8.5 x 11 para Carta, A4 para internacional). Evita Panoramico 16:9 para impresion — deja margenes grandes en papel estandar." } },
  { "@type": "Question", "name": "Como obtengo imagenes de alta resolucion al convertir PPT a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Usa imagenes de al menos 300 DPI en tu PowerPoint. Evita escalar imagenes pequenas hacia arriba — esto causa pixelacion. En PowerPoint, ve a Archivo > Opciones > Avanzado y establece 'Resolucion predeterminada' en Alta fidelidad o 330 PPI para prevenir compresion automatica." } },
  { "@type": "Question", "name": "Que es el sangrado y lo necesito para imprimir mis diapositivas?", "acceptedAnswer": { "@type": "Answer", "text": "El sangrado es area de imagen extra que se extiende mas alla de la linea de corte, para que cuando se corte el papel, no haya bordes blancos. Para imprentas profesionales, agrega 0.125 pulgadas (3mm) de sangrado en todos los lados. Para impresion casera u oficina, el sangrado usualmente no es necesario." } },
  { "@type": "Question", "name": "Debo convertir a PDF antes de enviar a la imprenta?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Las imprentas prefieren PDF porque bloquea el diseno y las fuentes. Si envias un archivo PPTX, diferentes versiones de PowerPoint o fuentes faltantes pueden desplazar elementos. Siempre convierte a PDF y revisa la salida antes de enviar a la imprenta." } },
  { "@type": "Question", "name": "Por que mis diapositivas impresas se ven borrosas?", "acceptedAnswer": { "@type": "Answer", "text": "Las impresiones borrosas casi siempre son causadas por imagenes de baja resolucion. Imagenes que se ven bien en pantalla (72 o 96 DPI) se ven pixeladas cuando se imprimen a 300 DPI. Reemplaza las imagenes de baja resolucion con originales de mayor resolucion antes de convertir a PDF." } },
  { "@type": "Question", "name": "Puedo imprimir multiples diapositivas por pagina desde un PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. En PowerPoint, selecciona Archivo > Imprimir > elige un diseno de multiples diapositivas (ej. 2, 4, 6 diapositivas por pagina) antes de exportar a PDF. Alternativamente, imprime el PDF usando la opcion 'Multiples paginas por hoja' de tu visor de PDF." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir PowerPoint a PDF para impresion de alta calidad", "description": "Obtiene PDFs listos para imprimir desde tus presentaciones de PowerPoint en 3 pasos.", "step": [
  { "@type": "HowToStep", "name": "Establece tamano de diapositiva y resolucion", "text": "En PowerPoint, ve a Diseno > Tamano de diapositiva y elige un tamano que coincida con tu papel objetivo. Establece resolucion de imagen en Alta fidelidad en Archivo > Opciones > Avanzado." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Sube tu PPTX a la herramienta PowerPoint a PDF de PDF.it y haz clic en Convertir. La herramienta preserva tus imagenes de alta resolucion y fuentes." },
  { "@type": "HowToStep", "name": "Revisa e imprime", "text": "Abre el PDF y haz zoom al 100% para verificar la calidad de imagen. Busca problemas de fuentes o desplazamientos de diseno. Una vez satisfecho, envia a tu impresora o imprenta." }
] }

export default function PptAPdfParaImprimirPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / PowerPoint a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">PPT a PDF para imprimir: mejores consejos de diseno y calidad</h1>
          <p className="text-xl text-slate-300">Convertir una presentacion para imprimir es diferente a compartirla en pantalla. Aqui te mostramos como obtener diapositivas impresas nitidas y de calidad profesional desde tu archivo PowerPoint.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Printer className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir PPT a PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Eligiendo el tamano de diapositiva correcto para impresion</h2>
            <p className="text-slate-600 mb-4">El error mas comun al imprimir diapositivas PowerPoint es usar el tamano de diapositiva incorrecto. PowerPoint usa por defecto Panoramico (16:9), que esta disenado para proyectores y pantallas — no para papel.</p>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Tamano de diapositiva</th>
                  <th className="text-left py-3 px-4 font-bold">Dimensiones</th>
                  <th className="text-left py-3 px-4 font-bold">Mejor para</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Estandar (4:3)</td><td className="py-3 px-4">10 x 7.5 pulg</td><td className="py-3 px-4">Impresion general en papel Carta o A4</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">Panoramico (16:9)</td><td className="py-3 px-4">13.33 x 7.5 pulg</td><td className="py-3 px-4">Solo presentaciones en pantalla — no ideal para impresion</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Personalizado (Carta)</td><td className="py-3 px-4">8.5 x 11 pulg</td><td className="py-3 px-4">Impresion a pagina completa en Carta</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">Personalizado (A4)</td><td className="py-3 px-4">11.69 x 8.27 pulg</td><td className="py-3 px-4">Impresion a pagina completa en A4 (estandar internacional)</td></tr>
                </tbody>
              </table>
            </div>
            <p className="text-slate-600 mt-4 text-sm">Para cambiar el tamano de diapositiva en PowerPoint: ve a <strong>Diseno &gt; Tamano de diapositiva &gt; Tamano personalizado</strong> e ingresa tus dimensiones objetivo.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir PowerPoint a PDF listo para imprimir</h2>
            <div className="space-y-4">
              {[
                { title: "Establece tamano de diapositiva y verifica resolucion", desc: "Haz coincidir el tamano de diapositiva con el papel en que imprimiras. Luego ve a Archivo > Opciones > Avanzado y establece 'Resolucion predeterminada' en Alta fidelidad (330 PPI) para que las imagenes no se compriman durante la exportacion." },
                { title: "Convierte a PDF usando PDF.it", desc: "Sube tu PPTX a la herramienta PowerPoint a PDF. PDF.it preserva tus imagenes de alta resolucion, fuentes incrustadas y diseno — dandote un archivo PDF listo para imprimir." },
                { title: "Revisa el PDF al 100% de zoom", desc: "Abre el PDF y haz zoom al 100% (tamano real). Verifica que las imagenes esten nitidas, las fuentes se vean correctas y nada se haya desplazado. Si algo se ve mal, corrigelo en PowerPoint y reconvierte." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Obteniendo imagenes de alta calidad en tu PDF impreso</h2>
            <p className="text-slate-600 mb-4">Imagenes que se ven geniales en pantalla pueden aparecer borrosas al imprimirse. Aqui esta el por que y como solucionarlo:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa imagenes de 300 DPI</strong> para impresion profesional. La resolucion de pantalla (72-96 DPI) no es suficiente para impresion.</li>
              <li>&#10003; <strong>No escales imagenes hacia arriba</strong> en PowerPoint. Una imagen pequena estirada para llenar una diapositiva se vera pixelada al imprimirse.</li>
              <li>&#10003; <strong>Desactiva la auto-compresion.</strong> PowerPoint comprime imagenes por defecto. Ve a Archivo &gt; Opciones &gt; Avanzado y establece resolucion en "Alta fidelidad" o desmarca "Descartar datos de edicion."</li>
              <li>&#10003; <strong>Usa PNG para graficos</strong> (logos, diagramas) y JPEG para fotografias. PNG preserva bordes nitidos; JPEG es mejor para fotos.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Sangrado y margenes para impresion profesional</h2>
            <p className="text-slate-600 mb-4">Si envias tu PDF a una imprenta profesional, puede que necesites agregar sangrado — espacio extra alrededor de los bordes que se recorta durante el corte.</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Sangrado estandar</strong> es 0.125 pulgadas (3mm) en cada lado.</li>
              <li>&#10003; <strong>Agrega sangrado en PowerPoint</strong> haciendo tu tamano de diapositiva ligeramente mas grande que el tamano final del papel (ej. 8.75 x 11.25 pulgadas para un corte final en Carta).</li>
              <li>&#10003; <strong>Mantiene el contenido importante</strong> (texto, logos) al menos 0.25 pulgadas de los bordes — esta es tu "zona segura."</li>
              <li>&#10003; <strong>Para impresion casera/oficina</strong>, el sangrado no es necesario. Solo usa margenes estandar.</li>
            </ul>
            <p className="text-slate-600 mt-4">Despues de convertir, si el archivo es muy grande para subir o enviar por email, usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> con compresion Ligera para reducir el tamano sin perder calidad de impresion.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Imprimiendo multiples diapositivas por pagina</h2>
            <p className="text-slate-600 mb-4">Si estas imprimiendo folletos (no diapositivas a pagina completa), PowerPoint puede organizar multiples diapositivas en cada pagina antes de exportar a PDF:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; Ve a <strong>Archivo &gt; Imprimir</strong> en PowerPoint.</li>
              <li>&#10003; En "Configuracion," cambia de "Diapositivas de pagina completa" a <strong>2, 3, 4, 6,</strong> o <strong>9 diapositivas por pagina</strong>.</li>
              <li>&#10003; Selecciona <strong>"Imprimir a PDF"</strong> como tu impresora (o usa Microsoft Print to PDF).</li>
              <li>&#10003; El PDF resultante tiene multiples diapositivas por pagina, listo para imprimir como folletos.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas comunes de impresion (y como solucionarlos)</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Bordes blancos alrededor de las diapositivas</h3><p className="text-slate-600">Esto sucede cuando el tamano de diapositiva no coincide con el tamano del papel. Establece un tamano de diapositiva personalizado que coincida con tu papel objetivo, o ajusta las configuraciones de tu impresora a "Ajustar a pagina." Para impresion borde a borde, agrega sangrado.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Los colores se ven diferentes al imprimir</h3><p className="text-slate-600">Los colores de pantalla (RGB) y los colores de impresion (CMYK) se muestran de manera diferente. Los neon brillantes y colores muy saturados no se reproduciran con precision en impresion. Usa colores solidos y atenuados para los resultados mas predecibles.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Fuentes cambiadas o faltantes</h3><p className="text-slate-600">Incrusta las fuentes antes de convertir: Archivo &gt; Opciones &gt; Guardar &gt; "Incrustar fuentes en el archivo." Lee nuestra guia completa sobre <Link href="/es/aprender/pptx-a-pdf-fuentes-faltantes" className="text-orange-600 hover:underline">como solucionar fuentes faltantes en PPTX a PDF</Link>.</p></div>
            </div>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para crear un PDF listo para imprimir?</h2>
          <p className="text-slate-300 mb-6">Sube tu PowerPoint y obtiene un PDF de alta calidad — gratis, sin registro.</p>
          <Link href="/es/powerpoint-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Printer className="h-5 w-5" /> Convertir PPT a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir PowerPoint a PDF en linea (PPTX a PDF)", href: "/es/aprender/convertir-ppt-a-pdf" },
              { title: "Las animaciones de PowerPoint funcionan en PDF?", href: "/es/aprender/ppt-a-pdf-animaciones" },
              { title: "PPTX a PDF fuentes faltantes? Soluciona incrustacion y sustituciones", href: "/es/aprender/pptx-a-pdf-fuentes-faltantes" },
              { title: "Convertir PPT a PDF en iPhone (metodo rapido)", href: "/es/aprender/ppt-a-pdf-en-iphone" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
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
