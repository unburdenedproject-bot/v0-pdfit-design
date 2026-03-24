import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir Excel a PDF en linea (XLSX a PDF) | PDF.it",
  description: "Aprende como convertir hojas de calculo de Excel a PDF en linea. Guia paso a paso que cubre formato, manejo de multiples hojas y consejos para compartir, imprimir y archivar.",
  keywords: "convertir excel a pdf en linea, xlsx a pdf, excel a pdf, hoja de calculo a pdf, convertir hoja de calculo a pdf en linea",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como convierto Excel a PDF en linea gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu archivo Excel (.xlsx o .xls) a la herramienta Excel a PDF de PDF.it, haz clic en Convertir y descarga tu PDF. No se requiere registro para tus primeros 3 archivos." } },
  { "@type": "Question", "name": "Se preservara el formato de mi Excel en el PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it preserva bordes de celda, colores, texto en negrita/cursiva, formato de numeros y celdas combinadas. Para mejores resultados, establece tu area de impresion y diseno de pagina en Excel antes de convertir." } },
  { "@type": "Question", "name": "Puedo convertir un archivo Excel con multiples hojas a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Cuando conviertes un libro de Excel con multiples hojas, cada hoja se convierte en una seccion separada en el PDF. Todas las hojas se incluyen por defecto." } },
  { "@type": "Question", "name": "Que formatos de archivo Excel son compatibles?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it es compatible con .xlsx (Excel moderno), .xls (Excel legacy), .csv (valores separados por comas) y .ods (hoja de calculo OpenDocument). Todos se convierten a PDFs limpios y formateados." } },
  { "@type": "Question", "name": "Por que deberia convertir Excel a PDF en lugar de compartir el archivo .xlsx?", "acceptedAnswer": { "@type": "Answer", "text": "Los PDFs se ven iguales en cualquier dispositivo, no se pueden editar accidentalmente y no requieren Excel para abrirse. Son mejores para compartir reportes, facturas y cualquier hoja de calculo donde el diseno debe permanecer fijo." } },
  { "@type": "Question", "name": "Puedo convertir Excel a PDF en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil. Sube tu archivo Excel, conviertelo y descarga el PDF directamente en iPhone o Android, sin necesidad de app." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir Excel a PDF en linea", "description": "Convierte tu hoja de calculo Excel a PDF en 3 simples pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Sube tu archivo Excel", "text": "Ve a la herramienta Excel a PDF de PDF.it y sube tu archivo .xlsx, .xls o .csv haciendo clic o arrastrando al area de carga." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Haz clic en Convertir. PDF.it procesa tu hoja de calculo y genera un PDF que preserva tu formato, bordes de celda y colores." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Descarga el PDF convertido. Si el archivo es grande, usa la herramienta Comprimir PDF de PDF.it para reducir el tamano antes de compartir." }
] }

export default function ConvertirExcelAPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Excel a PDF en linea (XLSX a PDF)</h1>
            <p className="text-xl text-slate-300">Necesitas compartir una hoja de calculo sin preocuparte por formato roto o ediciones accidentales? Asi es como convertir Excel a PDF en segundos: gratis, en linea, sin software.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por que convertir Excel a PDF?</h2>
              <p className="text-slate-600 mb-4">Los archivos Excel son excelentes para trabajar con datos, pero no son ideales para compartir. He aqui por que convertir a PDF es la opcion mas inteligente:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Visualizacion universal.</strong> No todos tienen Excel instalado. Los PDFs se abren en cualquier dispositivo, cualquier sistema operativo, cualquier navegador, sin software especial.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Formato fijo.</strong> Las hojas de calculo se ven diferentes segun el tamano de pantalla del visor, version de Excel y fuentes instaladas. Los PDFs se ven identicos en todas partes.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Sin ediciones accidentales.</strong> Cuando envias un archivo .xlsx, cualquiera puede cambiar los numeros. Un PDF mantiene tus datos seguros de modificaciones no intencionales.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Listo para imprimir.</strong> Los PDFs estan disenados para impresion. Lo que ves en pantalla es exactamente lo que sale de la impresora.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Archivado.</strong> Los PDFs son el formato estandar para almacenamiento a largo plazo de documentos. Reportes financieros, facturas y registros se archivan mejor como PDFs.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir Excel a PDF (paso a paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu archivo Excel", desc: "Ve a la herramienta Excel a PDF y arrastra tu archivo .xlsx, .xls o .csv al area de carga. Archivos de hasta 25MB son gratis; usuarios Pro pueden subir hasta 200MB." },
                  { title: "Haz clic en Convertir", desc: "PDF.it procesa tu hoja de calculo del lado del servidor, preservando formato de celdas, bordes, colores, celdas combinadas y formatos numericos. Libros con multiples hojas son totalmente compatibles." },
                  { title: "Descarga tu PDF", desc: "Una vez que termine la conversion, descarga tu PDF. Si necesitas reducir el tamano del archivo para email, usa la herramienta Comprimir PDF. Si combinas multiples hojas de calculo, usa Unir PDF." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como preservar el formato de celdas en tu PDF</h2>
              <p className="text-slate-600 mb-4">La queja mas comun sobre la conversion de Excel a PDF son problemas de formato: columnas cortadas, texto diminuto o datos faltantes. Asi es como evitarlo:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Establece un area de impresion</strong> en Excel antes de convertir. Ve a Diseno de pagina &gt; Area de impresion &gt; Establecer area de impresion.</li>
                <li>&#10003; <strong>Usa la vista Diseno de pagina</strong> (Vista &gt; Diseno de pagina) para ver exactamente como se vera tu hoja de calculo en una pagina impresa.</li>
                <li>&#10003; <strong>Cambia a Horizontal</strong> para hojas de calculo anchas. Diseno de pagina &gt; Orientacion &gt; Horizontal previene que las columnas se corten.</li>
                <li>&#10003; <strong>Ajusta el ancho de las columnas</strong> para que todos los datos sean visibles. Si una columna muestra "###" en lugar de numeros, ensanchala antes de convertir.</li>
                <li>&#10003; <strong>Usa escala "Ajustar a pagina".</strong> Ve a Diseno de pagina &gt; Ajustar a y establece Ancho en 1 pagina. Esto encoge la hoja de calculo para que quepa en un ancho de pagina.</li>
              </ul>
              <p className="text-slate-600 mt-4">Tienes problemas con columnas cortadas? Lee nuestra guia detallada sobre <Link href="/es/aprender/excel-a-pdf-columnas-cortadas" className="text-orange-600 hover:underline">solucionar columnas cortadas en Excel a PDF</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Convertir libros con multiples hojas</h2>
              <p className="text-slate-600 mb-4">Si tu archivo Excel tiene multiples hojas (pestanas), PDF.it las convierte todas en un solo PDF. Cada hoja comienza en una nueva pagina, manteniendo el orden de pestanas de tu libro.</p>
              <p className="text-slate-600 mb-4"><strong>Consejo:</strong> Si solo necesitas hojas especificas en el PDF, elimina las hojas extras antes de subir u ocultalas (clic derecho en la pestana &gt; Ocultar). Las hojas ocultas se excluyen de la conversion.</p>
              <p className="text-slate-600">Despues de convertir, si necesitas extraer solo ciertas paginas, usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para sacar las hojas que necesitas. O si combinas PDFs de multiples libros, usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link>.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Casos de uso comunes para Excel a PDF</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Facturas y cotizaciones</h3>
                  <p className="text-slate-600">Crea tu plantilla de factura en Excel, llena los detalles y convierte a PDF antes de enviar a clientes. El PDF asegura que tu formato permanezca intacto y el cliente no pueda cambiar accidentalmente los numeros.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Reportes financieros</h3>
                  <p className="text-slate-600">Reportes mensuales o trimestrales con graficos y tablas se convierten limpiamente a PDF. Establece tu area de impresion para incluir solo los datos de resumen, convierte y comparte con las partes interesadas.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Exportaciones de datos para archivado</h3>
                  <p className="text-slate-600">Para mantener registros a largo plazo, PDF es mas confiable que .xlsx. Convierte tus exportaciones de datos anuales a PDF y guardalos sabiendo que se abriran correctamente en 10 o 20 anos.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Necesitas convertir otros archivos de Office?</h2>
              <p className="text-slate-600">PDF.it maneja todos los formatos principales de Office. Usa <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">Office a PDF</Link> para convertir documentos de Word, presentaciones de PowerPoint y otros formatos. O ve directamente a la herramienta especifica que necesitas.</p>
            </section>
          </div>
        </article>

        <section className="py-12 bg-[#191B4D]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tu archivo Excel?</h2>
            <p className="text-slate-300 mb-6">Sube tu hoja de calculo y obtiene un PDF limpio en segundos, gratis y sin registro.</p>
            <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Excel a PDF: columnas cortadas? Asi se soluciona", href: "/es/aprender/excel-a-pdf-columnas-cortadas" },
                { title: "Excel a PDF ajustar a pagina: mejores configuraciones de impresion", href: "/es/aprender/excel-a-pdf-ajustar-a-pagina" },
                { title: "Exportar reportes mensuales: Excel a PDF para email", href: "/es/aprender/reporte-excel-a-pdf" },
                { title: "Convertir Excel a PDF en Mac", href: "/es/aprender/excel-a-pdf-en-mac" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas frecuentes</h2>
            <div className="space-y-6">
              {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3>
                  <p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p>
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
