import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "OCR un PDF para Hacerlo Buscable (Encontrar Texto en PDFs Escaneados) | PDF.it",
  description: "Aprende como usar OCR para convertir PDFs escaneados en documentos buscables. Encuentra texto en PDFs solo de imagen, copia contenido y haz que tus archivos escaneados sean completamente funcionales.",
  keywords: "ocr pdf buscable, hacer pdf escaneado buscable, buscar texto en pdf escaneado, ocr pdf texto",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Por que no puedo buscar texto en mi PDF escaneado?", "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs escaneados son solo imagenes — contienen fotos de texto, no datos de texto reales. Tu computadora los ve como imagenes planas, asi que Ctrl+F no tiene nada que buscar. Ejecutar OCR agrega una capa de texto invisible que hace el contenido buscable." } },
  { "@type": "Question", "name": "Como hago un PDF escaneado buscable?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF escaneado al Escaner OCR de PDF.it (funcion Pro), selecciona el idioma del documento y procesalo. La herramienta agrega una capa de texto buscable sobre el escaneo original." } },
  { "@type": "Question", "name": "El OCR cambiara la apariencia de mi PDF?", "acceptedAnswer": { "@type": "Answer", "text": "No. OCR agrega una capa de texto invisible detras de la imagen visible del escaneo. El documento se ve exactamente igual — pero ahora puedes buscar, seleccionar y copiar texto." } },
  { "@type": "Question", "name": "Puedo hacer OCR a un PDF con multiples paginas?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El Escaner OCR de PDF.it procesa todas las paginas de tu PDF a la vez. Ya sea que tu documento tenga 1 pagina o 100 paginas, cada pagina recibe una capa de texto OCR." } },
  { "@type": "Question", "name": "Que limites de tamano de archivo aplican para OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden procesar PDFs hasta 200MB con el Escaner OCR. Si tu archivo es mas grande, usa la herramienta Comprimir PDF de PDF.it primero." } },
  { "@type": "Question", "name": "Puedo convertir un PDF buscable a Word despues del OCR?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Una vez que tu PDF tiene una capa de texto del OCR, puedes convertirlo a Word. La conversion sera mucho mas precisa porque la capa de texto le da al convertidor texto real con el que trabajar." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como Hacer OCR a un PDF para Hacerlo Buscable", "description": "Convierte un PDF escaneado en un documento buscable en 3 pasos usando el Escaner OCR de PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Sube tu PDF escaneado", "text": "Ve a la herramienta Escaner OCR de PDF.it y sube el PDF que contiene paginas escaneadas o solo imagenes." },
  { "@type": "HowToStep", "name": "Selecciona el idioma y ejecuta OCR", "text": "Elige el idioma del texto en tu documento para mejor precision, luego haz clic en el boton OCR para iniciar el procesamiento." },
  { "@type": "HowToStep", "name": "Descarga el PDF buscable", "text": "Descarga tu nuevo PDF buscable. Ahora puedes usar Ctrl+F para encontrar texto, seleccionar y copiar contenido, y convertir a otros formatos." }
] }

export default function OCRPDFATextoBuscablePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">OCR un PDF para Hacerlo Buscable (Encontrar Texto en PDFs Escaneados)</h1>
            <p className="text-xl text-slate-300">Tienes un PDF escaneado donde no puedes encontrar, seleccionar o copiar texto? OCR lo soluciona. Aqui esta como convertir cualquier PDF escaneado en un documento completamente buscable.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Haz tu PDF escaneado buscable ahora mismo (funcion Pro).</p>
            </div>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escaner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Tu PDF Escaneado No Es Buscable</h2>
              <p className="text-slate-600 mb-4">Cuando escaneas un documento — ya sea con un escaner plano, una impresora multifuncion o la camara de tu telefono — el resultado es una imagen incrustada dentro de un PDF. Parece texto en pantalla, pero para tu computadora es solo una foto de texto.</p>
              <p className="text-slate-600 mb-4">Esto significa que no puedes presionar Ctrl+F para encontrar una palabra. No puedes seleccionar un parrafo y copiarlo. No puedes convertirlo a Word y obtener texto editable real. El PDF es esencialmente un album de fotos pretendiendo ser un documento.</p>
              <p className="text-slate-600">OCR (Reconocimiento Optico de Caracteres) resuelve esto analizando la imagen, identificando cada caracter y creando una capa de texto oculta que se ubica detras del escaneo. El documento se ve igual, pero ahora tu computadora puede leerlo. Aprende mas sobre la tecnologia en nuestra guia <Link href="/es/aprender/que-es-ocr" className="text-orange-600 hover:underline">Que es OCR?</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Hacer un PDF Escaneado Buscable (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF escaneado", desc: "Abre el Escaner OCR de PDF.it y sube tu archivo. La herramienta acepta PDFs hasta 200MB para usuarios Pro. Si tu archivo es muy grande, comprimelo primero usando la herramienta Comprimir PDF." },
                  { title: "Selecciona el idioma del documento", desc: "Elige el idioma principal de tu documento. Esto ayuda al motor OCR a reconocer caracteres con mayor precision. PDF.it soporta docenas de idiomas incluyendo espanol, ingles, frances, aleman y portugues." },
                  { title: "Descarga el PDF buscable", desc: "Haz clic en el boton OCR y espera el procesamiento. Descarga tu nuevo PDF — se ve identico al original pero ahora puedes buscar, seleccionar, copiar y resaltar texto en todo el documento." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Puedes Hacer Despues del OCR</h2>
              <p className="text-slate-600 mb-4">Una vez que tu PDF tiene una capa de texto buscable, se abren varias posibilidades nuevas:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Encontrar texto especifico.</strong> Presiona Ctrl+F (o Cmd+F en Mac) para buscar cualquier palabra, nombre, fecha o numero en el documento al instante.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Copiar y pegar contenido.</strong> Selecciona cualquier texto en el PDF y pegalo en correos, informes, hojas de calculo u otros documentos — sin necesidad de reescribir manualmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Extraer texto plano.</strong> Usa <Link href="/es/pdf-a-texto" className="text-orange-600 hover:underline">PDF a TXT</Link> para extraer todo el contenido de texto para procesamiento de datos, traduccion o analisis.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Indexar y archivar.</strong> Los PDFs buscables pueden ser indexados correctamente por sistemas de gestion documental, haciendolos faciles de encontrar en archivos grandes.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para Mejores Resultados de OCR</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Comienza con un Escaneo Limpio</h3><p className="text-slate-600">La precision del OCR depende en gran medida de la calidad del escaneo. Usa al menos 300 DPI de resolucion, asegurate de que el texto no este borroso y evita sombras o iluminacion desigual. Si escaneaste con tu telefono, pasa el archivo por <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> antes del OCR.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Selecciona el Idioma Correcto</h3><p className="text-slate-600">Siempre configura el idioma correcto en la herramienta OCR. Esto ayuda al motor a elegir el conjunto de caracteres y diccionario adecuados para verificacion ortografica y correccion de contexto.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Verifica el Resultado</h3><p className="text-slate-600">Despues del OCR, abre el PDF y prueba buscar algunas palabras para verificar que la capa de texto es precisa. Para documentos criticos, compara secciones clave contra el original. Lee nuestra guia completa sobre <Link href="/es/aprender/consejos-precision-ocr" className="text-orange-600 hover:underline">mejorar la precision del OCR</Link>.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">PDF Buscable vs. PDF Editable — Cual es la Diferencia?</h2>
              <p className="text-slate-600 mb-4">Un PDF buscable mantiene la imagen del escaneo original y agrega una capa de texto invisible. Puedes encontrar y copiar texto, pero no puedes editar directamente las palabras en la pagina. La apariencia visual permanece exactamente igual al escaneo original.</p>
              <p className="text-slate-600">Un PDF editable (o documento editable) te permite cambiar, agregar o eliminar texto directamente — como trabajar en Word. Si necesitas edicion completa, ejecuta OCR primero, luego convierte a formato Word donde puedes hacer todos los cambios que necesites, y convierte de vuelta a PDF cuando termines.</p>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Haz Tus PDFs Escaneados Buscables</h2>
            <p className="text-slate-300 mb-6">Sube un PDF escaneado y obtiene una version buscable en segundos. Encuentra cualquier palabra, copia cualquier texto, convierte a cualquier formato.</p>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Probar Escaner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado)", href: "/es/aprender/que-es-ocr" },
                { title: "Como Hacer OCR a un Documento Escaneado (Paso a Paso)", href: "/es/aprender/ocr-documento-escaneado" },
                { title: "Consejos de Precision OCR", href: "/es/aprender/consejos-precision-ocr" },
                { title: "OCR PDF en Movil (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
                { title: "Puede el OCR Leer Texto Manuscrito?", href: "/es/aprender/ocr-texto-manuscrito" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
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
                { q: "Por que no puedo buscar texto en mi PDF escaneado?", a: "Los PDFs escaneados son solo imagenes — contienen fotos de texto, no datos de texto reales. Ejecutar OCR agrega una capa de texto invisible que hace el contenido buscable." },
                { q: "Como hago un PDF escaneado buscable?", a: "Sube tu PDF escaneado al Escaner OCR de PDF.it (funcion Pro), selecciona el idioma del documento y procesalo. La herramienta agrega una capa de texto buscable sobre el escaneo original." },
                { q: "El OCR cambiara la apariencia de mi PDF?", a: "No. OCR agrega una capa de texto invisible. El documento se ve exactamente igual — pero ahora puedes buscar, seleccionar y copiar texto." },
                { q: "Puedo hacer OCR a un PDF con multiples paginas?", a: "Si. El Escaner OCR de PDF.it procesa todas las paginas de tu PDF a la vez." },
                { q: "Que limites de tamano de archivo aplican para OCR?", a: "Los usuarios Pro pueden procesar PDFs hasta 200MB con el Escaner OCR." },
                { q: "Puedo convertir un PDF buscable a Word despues del OCR?", a: "Si. Una vez que tu PDF tiene una capa de texto del OCR, la conversion a Word sera mucho mas precisa." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
