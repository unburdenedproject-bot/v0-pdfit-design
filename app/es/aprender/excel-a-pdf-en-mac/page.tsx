import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileSpreadsheet, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir Excel a PDF en Mac (flujo de trabajo rapido y confiable) | PDF.it",
  description: "Aprende como convertir Excel a PDF en Mac usando Excel para Mac, Preview y PDF.it en linea. Cubre problemas especificos de Mac como diferencias de fuentes, controladores de impresion y resultados consistentes.",
  keywords: "excel a pdf mac, convertir excel a pdf en mac, xlsx a pdf mac, excel para mac pdf, mac hoja de calculo a pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como convierto Excel a PDF en un Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Tienes tres opciones: (1) En Excel para Mac, ve a Archivo > Guardar como y elige PDF. (2) Usa el dialogo de Impresion (Cmd+P) y haz clic en 'Guardar como PDF' en la esquina inferior izquierda. (3) Sube tu archivo Excel al convertidor en linea de PDF.it para los resultados mas consistentes." } },
  { "@type": "Question", "name": "Por que mi PDF de Excel se ve diferente en Mac que en Windows?", "acceptedAnswer": { "@type": "Answer", "text": "Mac y Windows usan diferentes motores de renderizado de fuentes y controladores de impresion. Las fuentes pueden aparecer ligeramente mas grandes o mas pequenas, causando que los anchos de columna se desplacen. Usar un convertidor en linea como PDF.it produce resultados consistentes independientemente de tu sistema operativo." } },
  { "@type": "Question", "name": "Excel para Mac tiene las mismas configuraciones de impresion que Windows?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoria de las configuraciones son iguales (area de impresion, orientacion, margenes, escala) pero las ubicaciones del menu difieren ligeramente. En Mac, las configuraciones de Diseno de pagina estan bajo la pestana Diseno de pagina, y los Titulos de impresion estan bajo Archivo > Configurar pagina." } },
  { "@type": "Question", "name": "Puedo convertir Excel a PDF en Mac sin Microsoft Excel instalado?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Sube tu archivo .xlsx a la herramienta Excel a PDF de PDF.it: funciona en Safari, Chrome o cualquier navegador de Mac. No se necesita instalacion de software. Alternativamente, puedes abrir archivos .xlsx en Numbers (la app gratuita de hojas de calculo de Apple) y exportar a PDF desde alli." } },
  { "@type": "Question", "name": "Por que mis fuentes son diferentes en el PDF generado en Mac?", "acceptedAnswer": { "@type": "Answer", "text": "Mac no incluye algunas fuentes estandar de Windows (como Calibri antes de macOS Ventura). Si Excel para Mac sustituye una fuente, los anchos de columna y el espaciado cambian. Para evitar esto, usa fuentes multiplataforma (Arial, Times New Roman, Verdana) o convierte en linea con PDF.it." } },
  { "@type": "Question", "name": "Como obtengo resultados consistentes de Excel a PDF entre Mac y Windows?", "acceptedAnswer": { "@type": "Answer", "text": "Usa un convertidor en linea como PDF.it. Procesa el archivo del lado del servidor con fuentes y renderizado consistentes, asi que el resultado se ve igual si lo subes desde Mac, Windows o un telefono." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir Excel a PDF en Mac", "description": "Convierte tu hoja de calculo Excel a PDF en Mac usando el metodo mas confiable.", "step": [
  { "@type": "HowToStep", "name": "Prepara tu hoja de calculo", "text": "Abre tu archivo Excel en Mac. Establece el area de impresion (Diseno de pagina > Area de impresion > Establecer area de impresion), elige orientacion y ajusta margenes. Usa Vista previa de impresion (Cmd+P) para verificar el diseno." },
  { "@type": "HowToStep", "name": "Sube a PDF.it", "text": "Abre Safari o Chrome, ve a la herramienta Excel a PDF de PDF.it y sube tu archivo .xlsx. Esto asegura resultados consistentes independientemente de las fuentes o controladores de impresion de tu Mac." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Haz clic en Convertir y descarga el PDF. El archivo se abre en Preview por defecto. Si necesitas reducir el tamano, usa la herramienta Comprimir PDF de PDF.it." }
] }

export default function ExcelAPdfEnMacPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Excel a PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir Excel a PDF en Mac (flujo de trabajo rapido y confiable)</h1>
            <p className="text-xl text-slate-300">Convertir Excel a PDF en un Mac puede producir resultados inesperados: fuentes diferentes, columnas desplazadas, saltos de pagina extranos. Asi es como obtener PDFs limpios y consistentes cada vez.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileSpreadsheet className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Evita las particularidades de Mac: convierte en linea para resultados consistentes.</p>
            </div>
            <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Excel a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">3 formas de convertir Excel a PDF en Mac</h2>
              <p className="text-slate-600 mb-4">Los usuarios de Mac tienen multiples opciones para convertir Excel a PDF. Aqui esta cuando usar cada una:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Metodo 1: Excel para Mac "Guardar como PDF"</h3>
                  <p className="text-slate-600 mb-2">Si tienes Microsoft Excel instalado en tu Mac:</p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Abre tu hoja de calculo en Excel para Mac</li>
                    <li>Ve a <strong>Archivo &gt; Guardar como</strong></li>
                    <li>Elige <strong>PDF</strong> del menu desplegable de formato de archivo</li>
                    <li>Haz clic en Guardar</li>
                  </ol>
                  <p className="text-slate-600 mt-2"><strong>Pros:</strong> Rapido, sin necesidad de subir. <strong>Contras:</strong> Los resultados pueden diferir de Excel para Windows por diferencias de fuentes y renderizado.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Metodo 2: Dialogo de impresion de Mac ("Guardar como PDF")</h3>
                  <p className="text-slate-600 mb-2">Funciona desde cualquier app de Mac, incluyendo Numbers:</p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Abre el archivo y presiona <strong>Cmd+P</strong></li>
                    <li>Haz clic en el desplegable <strong>PDF</strong> en la esquina inferior izquierda</li>
                    <li>Selecciona <strong>"Guardar como PDF"</strong></li>
                    <li>Elige tu ubicacion de guardado y haz clic en Guardar</li>
                  </ol>
                  <p className="text-slate-600 mt-2"><strong>Pros:</strong> Funciona con cualquier app de hojas de calculo (Numbers, Google Sheets en navegador). <strong>Contras:</strong> Usa el controlador de impresion de Mac, que puede producir resultados diferentes a Windows.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Metodo 3: Convertidor en linea PDF.it (recomendado)</h3>
                  <p className="text-slate-600 mb-2">Para los resultados mas consistentes:</p>
                  <ol className="space-y-1 text-slate-700 list-decimal list-inside ml-2">
                    <li>Abre Safari o Chrome y ve a la <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">herramienta Excel a PDF de PDF.it</Link></li>
                    <li>Sube tu archivo .xlsx</li>
                    <li>Haz clic en Convertir y descarga el PDF</li>
                  </ol>
                  <p className="text-slate-600 mt-2"><strong>Pros:</strong> Resultado consistente en todas las plataformas, sin software necesario. <strong>Contras:</strong> Requiere conexion a internet.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Problemas comunes especificos de Mac (y como solucionarlos)</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Sustitucion de fuentes</h3>
                  <p className="text-slate-600 mb-2">Si tu archivo Excel fue creado en Windows usando fuentes como Calibri o Cambria, Mac puede sustituir fuentes diferentes. Esto cambia los anchos de columna y puede empujar datos fuera de la pagina.</p>
                  <p className="text-slate-700"><strong>Solucion:</strong> Usa fuentes multiplataforma (Arial, Times New Roman, Verdana) en tu hoja de calculo. O convierte en linea con <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">PDF.it</Link>, que usa su propia biblioteca de fuentes para renderizado consistente.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Saltos de pagina diferentes</h3>
                  <p className="text-slate-600 mb-2">Los saltos de pagina en Excel para Mac no siempre coinciden con los saltos en Excel para Windows.</p>
                  <p className="text-slate-700"><strong>Solucion:</strong> Siempre revisa la Vista previa de impresion (Cmd+P) en Mac antes de convertir. Ajusta el area de impresion o la escala si el diseno se ve diferente de lo esperado.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Funciones faltantes en Excel para Mac</h3>
                  <p className="text-slate-600 mb-2">Algunas funciones avanzadas de Excel se comportan diferente en Mac, particularmente graficos complejos, tablas dinamicas con formato personalizado y macros VBA.</p>
                  <p className="text-slate-700"><strong>Solucion:</strong> Para hojas de calculo complejas, sube al <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">convertidor Office a PDF de PDF.it</Link>, que maneja estas funciones del lado del servidor.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para resultados consistentes entre Mac y Windows</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa fuentes estandar</strong>: Arial, Times New Roman y Verdana son opciones seguras que se renderizan identicamente en ambas plataformas.</li>
                <li>&#10003; <strong>Establece anchos de columna explicitos</strong>: no dependas del ajuste automatico, que calcula diferente en cada plataforma.</li>
                <li>&#10003; <strong>Define el area de impresion</strong>: esto elimina ambiguedad sobre que celdas incluir en el PDF.</li>
                <li>&#10003; <strong>Usa un convertidor en linea</strong>: <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">PDF.it</Link> procesa archivos del lado del servidor, produciendo resultados identicos sin importar desde donde subas.</li>
                <li>&#10003; <strong>Prueba con Vista previa de impresion</strong>: siempre revisa Cmd+P antes de convertir localmente para detectar problemas de diseno temprano.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">No tienes Excel instalado en tu Mac?</h2>
              <p className="text-slate-600 mb-4">No necesitas Microsoft Excel para convertir archivos .xlsx a PDF. Aqui estan tus opciones:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>PDF.it en linea</strong>: sube el archivo .xlsx directamente en <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link>. Sin software necesario.</li>
                <li>&#10003; <strong>Apple Numbers</strong>: gratis en cada Mac. Abre el archivo .xlsx en Numbers, luego ve a Archivo &gt; Exportar a &gt; PDF.</li>
                <li>&#10003; <strong>Google Sheets</strong>: sube a Google Drive, abre en Sheets, luego Archivo &gt; Descargar &gt; PDF. El formato puede desplazarse ligeramente.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Despues de convertir: comprimir o compartir</h2>
              <p className="text-slate-600">Una vez que tengas tu PDF, tal vez quieras reducir su tamano antes de enviarlo por email. Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el archivo. Los PDFs descargados en Mac se abren automaticamente en Preview, donde puedes verificar rapidamente el resultado antes de enviar.</p>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para convertir en tu Mac?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo Excel y obtiene un PDF consistente y profesional, funciona en Safari, Chrome o cualquier navegador.</p>
            <Link href="/es/excel-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileSpreadsheet className="h-5 w-5" /> Excel a PDF Ahora</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Convertir Excel a PDF en linea (XLSX a PDF)", href: "/es/aprender/convertir-excel-a-pdf" },
                { title: "Excel a PDF: columnas cortadas? Asi se soluciona", href: "/es/aprender/excel-a-pdf-columnas-cortadas" },
                { title: "Excel a PDF ajustar a pagina: mejores configuraciones", href: "/es/aprender/excel-a-pdf-ajustar-a-pagina" },
                { title: "Exportar reportes mensuales: Excel a PDF para email", href: "/es/aprender/reporte-excel-a-pdf" },
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
