import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { ScanText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Que es OCR? (Reconocimiento Optico de Caracteres Explicado) | PDF.it",
  description:
    "Aprende que es OCR (Reconocimiento Optico de Caracteres), como funciona y por que es importante para PDFs escaneados. Entiende como OCR convierte imagenes de texto en contenido editable y buscable.",
  keywords: "que es ocr, reconocimiento optico de caracteres, ocr explicado, como funciona ocr",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Que significa OCR?", "acceptedAnswer": { "@type": "Answer", "text": "OCR significa Reconocimiento Optico de Caracteres. Es una tecnologia que convierte imagenes de texto — como documentos escaneados, fotos o PDFs — en texto legible por maquina y buscable." } },
    { "@type": "Question", "name": "Como funciona el OCR?", "acceptedAnswer": { "@type": "Answer", "text": "El software OCR analiza las formas, patrones y disposicion de pixeles en una imagen para identificar caracteres individuales (letras, numeros, simbolos). El OCR moderno usa aprendizaje automatico para mejorar la precision en diferentes fuentes, idiomas y disenos." } },
    { "@type": "Question", "name": "Puede el OCR manejar multiples idiomas?", "acceptedAnswer": { "@type": "Answer", "text": "Si. La mayoria de herramientas OCR modernas, incluyendo el Escaner OCR de PDF.it, soportan docenas de idiomas incluyendo espanol, ingles, frances, aleman, portugues y muchos mas." } },
    { "@type": "Question", "name": "Es el OCR 100% preciso?", "acceptedAnswer": { "@type": "Answer", "text": "El OCR tipicamente tiene 95-99% de precision en escaneos limpios de alta resolucion con fuentes impresas estandar. La precision disminuye con imagenes de baja resolucion, texto manuscrito, fuentes inusuales o documentos con formato complejo." } },
    { "@type": "Question", "name": "Necesito instalar software para usar OCR?", "acceptedAnswer": { "@type": "Answer", "text": "No. El Escaner OCR de PDF.it funciona completamente en tu navegador. Sube tu PDF escaneado, selecciona el idioma y descarga un PDF buscable — sin instalacion de software requerida." } },
    { "@type": "Question", "name": "Es OCR una funcion Pro en PDF.it?", "acceptedAnswer": { "@type": "Answer", "text": "Si. El Escaner OCR esta disponible para suscriptores Pro y Business. Pro cuesta $3.99/mes e incluye conversiones ilimitadas, archivos hasta 200MB, procesamiento por lotes y todas las herramientas avanzadas incluyendo OCR." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Usar OCR en un PDF Escaneado",
  "description": "Convierte un PDF escaneado en texto buscable en 3 simples pasos usando el Escaner OCR de PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF escaneado", "text": "Ve a la herramienta Escaner OCR de PDF.it y sube el PDF escaneado que quieres hacer buscable." },
    { "@type": "HowToStep", "name": "Selecciona tu idioma y ejecuta OCR", "text": "Elige el idioma del texto del documento y haz clic en el boton OCR para iniciar el procesamiento." },
    { "@type": "HowToStep", "name": "Descarga tu PDF buscable", "text": "Una vez completado el procesamiento OCR, descarga tu nuevo PDF buscable. Ahora puedes encontrar texto, copiar contenido y seleccionar palabras en el documento." }
  ]
}

export default function QueEsOCRPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / OCR PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Que es OCR? (Reconocimiento Optico de Caracteres Explicado)</h1>
              <p className="text-xl text-slate-300">OCR es la tecnologia que convierte documentos escaneados e imagenes en texto que puedes buscar, copiar y editar. Aqui esta todo lo que necesitas saber sobre como funciona y por que es importante.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><ScanText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Quieres probar OCR ahora? Usa el Escaner OCR de PDF.it (Pro).</p>
            </div>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Escaner OCR <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que Hace Realmente el OCR?</h2>
              <p className="text-slate-600 mb-4">OCR significa Reconocimiento Optico de Caracteres. Es una tecnologia que mira una imagen — una pagina escaneada, una fotografia de un documento o un PDF hecho desde un escaner — e identifica las letras, numeros y simbolos en ella.</p>
              <p className="text-slate-600 mb-4">Sin OCR, un PDF escaneado es solo una foto. No puedes buscar una palabra, copiar un parrafo o seleccionar ningun texto. El archivo parece un documento, pero para tu computadora es solo una imagen plana — no diferente de una fotografia de un atardecer.</p>
              <p className="text-slate-600">Despues del procesamiento OCR, una capa de texto invisible se coloca sobre la imagen. Ahora puedes presionar Ctrl+F para encontrar palabras, copiar texto a otro documento o extraer el contenido en un <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">archivo de texto plano</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Funciona el OCR (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Preprocesamiento de imagen", desc: "El motor OCR primero limpia la imagen — ajustando contraste, eliminando ruido, enderezando texto torcido y convirtiendo a escala de grises. Por eso la calidad del escaneo es tan importante para la precision." },
                  { title: "Reconocimiento de caracteres", desc: "El software divide la imagen en caracteres individuales y compara cada uno contra formas de letras conocidas. El OCR moderno usa modelos de aprendizaje automatico entrenados con millones de muestras de texto en diferentes fuentes e idiomas." },
                  { title: "Reconstruccion de texto", desc: "Los caracteres reconocidos se ensamblan de nuevo en palabras, oraciones y parrafos. El motor considera el contexto — por ejemplo, 'tbe' probablemente es 'the' — para corregir caracteres ambiguos y producir una salida mas limpia." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que el OCR es Importante para PDFs</h2>
              <p className="text-slate-600 mb-4">Los PDFs son el formato mas comun para documentos escaneados. Cada vez que escaneas un contrato, recibo, informe antiguo o identificacion, el resultado es casi siempre un PDF. Pero esos PDFs escaneados son solo imagenes. Aqui esta por que es importante ejecutar OCR en ellos:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Capacidad de busqueda.</strong> Sin OCR, no puedes encontrar una palabra especifica en un contrato escaneado de 50 paginas. Con OCR, presiona Ctrl+F y encuentralo al instante.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Copiar y pegar.</strong> Necesitas una cita, un numero o un parrafo de un documento escaneado? OCR te permite seleccionar y copiar texto en lugar de reescribirlo manualmente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Accesibilidad.</strong> Los lectores de pantalla no pueden leer PDFs solo de imagen. OCR hace tus documentos accesibles para personas que usan tecnologia asistiva.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Archivado y cumplimiento.</strong> Muchas organizaciones requieren PDFs buscables para cumplimiento legal y regulatorio. OCR transforma escaneos archivados en documentos indexados correctamente.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Conversion de formato.</strong> Una vez que un PDF tiene una capa de texto, puedes convertirlo a <Link href="/es/pdf-a-texto" className="text-[#14D8C4] hover:underline">texto plano</Link> con mucho mejores resultados.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Situaciones Comunes Donde Necesitas OCR</h2>
              <div className="space-y-6">
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Contratos y Documentos Legales Escaneados</h3><p className="text-slate-600">Los despachos de abogados y empresas escanean contratos constantemente. OCR hace esos escaneos buscables para que puedas encontrar clausulas, fechas o montos especificos sin leer cada pagina manualmente.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Recibos y Registros Financieros</h3><p className="text-slate-600">Escaneando recibos para informes de gastos o registros fiscales? OCR te permite extraer montos y fechas. Si tambien necesitas limpiar recibos escaneados con telefono, prueba la herramienta <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Telefono</Link> primero.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Libros Viejos, Documentos y Archivos</h3><p className="text-slate-600">Las bibliotecas e investigadores digitalizan documentos antiguos regularmente. OCR convierte esos escaneos en archivos de texto buscables. Para mejores resultados, escanea a 300 DPI o mas y asegura iluminacion uniforme.</p></div>
                <div><h3 className="text-lg font-bold text-slate-900 mb-2">Fotos de Pizarras o Notas</h3><p className="text-slate-600">Tomaste una foto de notas de reunion en una pizarra? Convierte la imagen a PDF, luego ejecuta OCR para extraer el texto. Tiene en cuenta que el <Link href="/es/aprender/ocr-texto-manuscrito" className="text-[#14D8C4] hover:underline">texto manuscrito</Link> es mas dificil de leer con precision para el OCR.</p></div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Ejecutar OCR en PDF.it</h2>
              <p className="text-slate-600 mb-4">El <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escaner OCR</Link> de PDF.it es una funcion Pro que convierte PDFs escaneados en documentos buscables. Esto es lo que obtienes:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Sube cualquier PDF escaneado — la herramienta detecta paginas solo de imagen automaticamente.</li>
                <li>&#10003; Selecciona el idioma del documento para mejor precision de reconocimiento.</li>
                <li>&#10003; Descarga un PDF buscable con una capa de texto invisible sobre el escaneo original.</li>
                <li>&#10003; Procesa archivos hasta 200MB con una suscripcion Pro ($3.99/mes).</li>
                <li>&#10003; Despues del OCR, usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> si el archivo es muy grande para email o portales de carga.</li>
              </ul>
              <p className="text-slate-600 mt-4">El Escaner OCR esta disponible en los planes <Link href="/es/precios" className="text-[#14D8C4] hover:underline">Pro y Business</Link>. Los usuarios gratuitos pueden explorar todas las demas herramientas de PDF.it con generosos limites diarios.</p>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Hacer Tus PDFs Buscables?</h2>
            <p className="text-slate-300 mb-6">Sube un PDF escaneado y deja que el Escaner OCR extraiga cada palabra — para que puedas buscar, copiar y editar tus documentos.</p>
            <Link href="/es/escaner-ocr" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><ScanText className="h-5 w-5" /> Probar Escaner OCR (Pro)</Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "OCR PDF a Texto Buscable (Encontrar Texto en PDFs Escaneados)", href: "/es/aprender/ocr-pdf-a-texto-buscable" },
                { title: "Como Hacer OCR a un Documento Escaneado (Paso a Paso)", href: "/es/aprender/ocr-documento-escaneado" },
                { title: "Consejos de Precision OCR (Mejores Resultados de Reconocimiento)", href: "/es/aprender/consejos-precision-ocr" },
                { title: "OCR un PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/ocr-pdf-en-movil" },
                { title: "Puede el OCR Leer Texto Manuscrito? (Que Esperar)", href: "/es/aprender/ocr-texto-manuscrito" },
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
                { q: "Que significa OCR?", a: "OCR significa Reconocimiento Optico de Caracteres. Es una tecnologia que convierte imagenes de texto — como documentos escaneados, fotos o PDFs — en texto legible por maquina y buscable." },
                { q: "Como funciona el OCR?", a: "El software OCR analiza las formas, patrones y disposicion de pixeles en una imagen para identificar caracteres individuales. El OCR moderno usa aprendizaje automatico para mejorar la precision en diferentes fuentes, idiomas y disenos." },
                { q: "Puede el OCR manejar multiples idiomas?", a: "Si. La mayoria de herramientas OCR modernas, incluyendo el Escaner OCR de PDF.it, soportan docenas de idiomas incluyendo espanol, ingles, frances, aleman, portugues y muchos mas." },
                { q: "Es el OCR 100% preciso?", a: "El OCR tipicamente tiene 95-99% de precision en escaneos limpios de alta resolucion con fuentes impresas estandar. La precision disminuye con imagenes de baja resolucion, texto manuscrito o fuentes inusuales." },
                { q: "Necesito instalar software para usar OCR?", a: "No. El Escaner OCR de PDF.it funciona completamente en tu navegador. Sube tu PDF escaneado, selecciona el idioma y descarga un PDF buscable — sin instalacion requerida." },
                { q: "Es OCR una funcion Pro en PDF.it?", a: "Si. El Escaner OCR esta disponible para suscriptores Pro y Business. Pro cuesta $3.99/mes e incluye conversiones ilimitadas, archivos hasta 200MB, procesamiento por lotes y todas las herramientas avanzadas." },
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
