import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF | OmnisPDF",
  description: "Convierte archivos Word, Excel y PowerPoint a PDF en un solo lugar. Aprende cuando usar el convertidor todo-en-uno Office a PDF vs herramientas individuales, formatos soportados y consejos de calidad.",
  keywords: "office a pdf convertidor, convertir office a pdf, docx a pdf, xlsx a pdf, pptx a pdf, archivos office a pdf en linea",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que formatos Office puedo convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "OmnisPDF soporta DOCX (Word), XLSX (Excel), PPTX (PowerPoint), DOC, XLS, PPT y otros formatos comunes de Microsoft Office. Sube cualquier archivo Office y obtiene un PDF en segundos." } },
  { "@type": "Question", "name": "Es gratuito el convertidor Office a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes convertir hasta 10 archivos por dia gratis (3 sin cuenta, luego registrate para mas). Los usuarios Pro obtienen conversiones ilimitadas y limites de tamano de archivo mayores." } },
  { "@type": "Question", "name": "Se preservara mi formato al convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "En la mayoria de los casos, si. OmnisPDF usa un motor de conversion de alta fidelidad que preserva fuentes, tablas, imagenes y diseno. Si notas problemas, verifica que tus fuentes sean fuentes estandar del sistema y tus margenes esten configurados correctamente." } },
  { "@type": "Question", "name": "Debo usar el convertidor todo-en-uno o herramientas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta todo-en-uno Office a PDF cuando tengas tipos de archivo mixtos (Word + Excel + PowerPoint) para convertir en un lote. Usa herramientas individuales (Word a PDF, Excel a PDF, etc.) cuando necesites configuraciones especificas del formato como ajuste de pagina de Excel u orientacion de diapositivas de PowerPoint." } },
  { "@type": "Question", "name": "Puedo convertir multiples archivos Office a PDF a la vez?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Los usuarios Pro pueden convertir por lotes multiples archivos Office en una sola carga. Cada archivo se convierte independientemente y puedes descargarlos todos como un archivo ZIP." } },
  { "@type": "Question", "name": "Necesito Microsoft Office instalado para convertir archivos?", "acceptedAnswer": { "@type": "Answer", "text": "No. OmnisPDF es una herramienta completamente en linea — todo se ejecuta en la nube. No necesitas Office, LibreOffice ni ningun software instalado. Solo sube tu archivo desde cualquier navegador." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir archivos Office a PDF en linea", "description": "Convierte cualquier documento de Microsoft Office a PDF en 3 simples pasos usando OmnisPDF.", "step": [
  { "@type": "HowToStep", "name": "Sube tu archivo Office", "text": "Ve a la herramienta Office a PDF de OmnisPDF y sube tu archivo Word, Excel o PowerPoint haciendo clic o arrastrandolo al area de carga." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Haz clic en Convertir a PDF. OmnisPDF procesa el archivo en la nube, preservando tu formato original, fuentes y diseno." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Una vez completada la conversion, descarga tu PDF. Tambien puedes comprimirlo, unirlo con otros PDFs o agregar proteccion con contrasena." }
] }

export default function OfficeAPdfConvertidorPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Office a PDF convertidor: DOCX, XLSX, PPTX a PDF</h1>
          <p className="text-xl text-slate-300">Convierte cualquier archivo de Microsoft Office a PDF — documentos Word, hojas de calculo Excel y presentaciones PowerPoint — todo desde una sola herramienta, sin software necesario.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Office a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que es un convertidor Office a PDF?</h2>
            <p className="text-slate-600 mb-4">Un convertidor Office a PDF toma archivos de Microsoft Office — <strong>DOCX, XLSX, PPTX</strong> (y sus equivalentes antiguos DOC, XLS, PPT) — y los convierte en documentos PDF universalmente legibles. Los PDFs se ven igual en cualquier dispositivo y no pueden ser editados accidentalmente, lo que los hace el estandar para compartir versiones finales de documentos.</p>
            <p className="text-slate-600">El <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">convertidor Office a PDF</Link> de OmnisPDF maneja los tres formatos en un solo lugar. Sube un documento Word, una hoja Excel o una presentacion PowerPoint — obtendras un PDF correctamente formateado en segundos.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Formatos soportados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Aplicacion</th>
                  <th className="text-left py-3 px-4 font-bold">Formatos aceptados</th>
                  <th className="text-left py-3 px-4 font-bold">Herramienta dedicada</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Microsoft Word</td><td className="py-3 px-4">.docx, .doc</td><td className="py-3 px-4"><Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link></td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-orange-600">Microsoft Excel</td><td className="py-3 px-4">.xlsx, .xls</td><td className="py-3 px-4"><Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link></td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-orange-600">Microsoft PowerPoint</td><td className="py-3 px-4">.pptx, .ppt</td><td className="py-3 px-4"><Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Convertidor todo-en-uno vs. herramientas individuales</h2>
            <p className="text-slate-600 mb-4">OmnisPDF ofrece tanto una herramienta unificada <Link href="/es/office-a-pdf" className="text-orange-600 hover:underline">Office a PDF</Link> como herramientas separadas para cada formato. Aqui te decimos cuando usar cual:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Usa el convertidor todo-en-uno</strong> cuando tengas una mezcla de archivos Word, Excel y PowerPoint para convertir en un solo lote. Una carga, multiples formatos, todos convertidos a la vez.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Usa <Link href="/es/word-a-pdf" className="text-orange-600 hover:underline">Word a PDF</Link></strong> cuando necesites opciones especificas de formato Word o quieras ajustar margenes y diseno.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Usa <Link href="/es/excel-a-pdf" className="text-orange-600 hover:underline">Excel a PDF</Link></strong> cuando necesites controlar el ajuste de pagina, anchos de columna u orientacion horizontal para hojas anchas.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Usa <Link href="/es/powerpoint-a-pdf" className="text-orange-600 hover:underline">PowerPoint a PDF</Link></strong> cuando quieras control sobre el diseno de diapositivas, formato de folletos o paginas de notas.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir archivos Office a PDF (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Sube tu archivo Office", desc: "Ve a la herramienta Office a PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Acepta .docx, .xlsx, .pptx y sus equivalentes antiguos. Usuarios gratuitos pueden subir archivos hasta 25MB." },
                { title: "Convierte a PDF", desc: "Haz clic en Convertir a PDF. La conversion se ejecuta en la nube — sin software necesario. Tu formato, fuentes, imagenes y diseno se preservan automaticamente." },
                { title: "Descarga tu PDF", desc: "Descarga el PDF convertido. Desde aqui puedes comprimirlo, unirlo con otros archivos, agregar contrasena o compartirlo — todo dentro de OmnisPDF." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para conversiones de alta calidad</h2>
            <p className="text-slate-600 mb-4">La mayoria de las conversiones Office a PDF funcionan perfectamente la primera vez. Pero si necesitas resultados pixel-perfect, sigue estos consejos:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa fuentes estandar.</strong> Arial, Calibri, Times New Roman y otras fuentes del sistema se convierten sin problemas. Fuentes personalizadas o decorativas pueden ser sustituidas.</li>
              <li>&#10003; <strong>Verifica margenes antes de convertir.</strong> Margenes estrechos en Word a veces causan que el texto se recorte en el PDF. Establece margenes en "Normal" (1 pulgada) si ves problemas.</li>
              <li>&#10003; <strong>Guarda tu archivo antes de subir.</strong> Asegurate de que todos los cambios esten guardados en el formato .docx/.xlsx/.pptx mas reciente — formatos antiguos (.doc, .xls) pueden tener ligeras diferencias de renderizado.</li>
              <li>&#10003; <strong>Para Excel, establece el area de impresion.</strong> Los PDFs de Excel usan el area de impresion para determinar que aparece en cada pagina. Configura esto en Diseno de pagina antes de convertir.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que convertir archivos Office a PDF?</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compatibilidad universal</h3><p className="text-slate-600">No todos tienen Microsoft Office. Los PDFs se abren en cualquier dispositivo, cualquier sistema operativo, en cualquier navegador. Tu destinatario ve exactamente lo que tu ves — sin fuentes faltantes, sin diseno desplazado.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Previene ediciones accidentales</h3><p className="text-slate-600">Enviar un documento Word invita ediciones. Los PDFs son de solo lectura por defecto, haciendolos ideales para contratos, propuestas y reportes finales. Para seguridad extra, puedes <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">agregar una contrasena</Link>.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Tamanos de archivo mas pequenos</h3><p className="text-slate-600">La conversion a PDF a menudo reduce el tamano del archivo comparado con el archivo Office original, especialmente para documentos con muchas imagenes. Si el PDF sigue siendo grande, pasalo por <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reduccion adicional.</p></div>
            </div>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tus archivos Office?</h2>
          <p className="text-slate-300 mb-6">Sube cualquier archivo Word, Excel o PowerPoint y obtiene un PDF perfecto en segundos — gratis, sin registro.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir DOCX, XLSX y PPTX a PDF (un flujo de trabajo)", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              { title: "Office a PDF sin cambios de diseno (soluciones comunes)", href: "/es/aprender/office-a-pdf-mantener-formato" },
              { title: "Convertir archivos Office a PDF en movil (iPhone/Android)", href: "/es/aprender/office-a-pdf-en-movil" },
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
