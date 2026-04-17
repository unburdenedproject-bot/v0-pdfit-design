import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF | PDF.it",
  description: "Convierte archivos Word, Excel y PowerPoint a PDF en un solo lugar. Aprende cuando usar el convertidor todo-en-uno Office a PDF vs herramientas individuales, formatos soportados y consejos de calidad.",
  keywords: "office a pdf convertidor, convertir office a pdf, docx a pdf, xlsx a pdf, pptx a pdf, archivos office a pdf en línea",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Que formatos Office puedo convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it soporta DOCX (Word), XLSX (Excel), PPTX (PowerPoint), DOC, XLS, PPT y otros formatos comunes de Microsoft Office. Sube cualquier archivo Office y obtiene un PDF en segundos." } },
  { "@type": "Question", "name": "Es gratuito el convertidor Office a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes convertir hasta 10 archivos por día gratis (3 sin cuenta, luego registrate para más). Los usuarios Pro obtienen conversiónes ilimitadas y límites de tamaño de archivo mayores." } },
  { "@type": "Question", "name": "Se preservara mi formato al convertir a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "En la mayoría de los casos, si. PDF.it usa un motor de conversión de alta fidelidad que preserva fuentes, tablas, imágenes y diseño. Si notas problemas, verifica que tus fuentes sean fuentes estándar del sistema y tus margenes esten configurados correctamente." } },
  { "@type": "Question", "name": "Debo usar el convertidor todo-en-uno o herramientas individuales?", "acceptedAnswer": { "@type": "Answer", "text": "Usa la herramienta todo-en-uno Office a PDF cuando tengas tipos de archivo mixtos (Word + Excel + PowerPoint) para convertir en un lote. Usa herramientas individuales (Word a PDF, Excel a PDF, etc.) cuando necesites configuraciónes específicas del formato como ajuste de página de Excel u orientación de diapositivas de PowerPoint." } },
  { "@type": "Question", "name": "Puedo convertir múltiples archivos Office a PDF a la vez?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Los usuarios Pro pueden convertir por lotes múltiples archivos Office en una sola carga. Cada archivo se convierte independientemente y puedes descargarlos todos como un archivo ZIP." } },
  { "@type": "Question", "name": "Necesito Microsoft Office instalado para convertir archivos?", "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it es una herramienta completamente en línea — todo se ejecuta en la nube. No necesitas Office, LibreOffice ni ningun software instalado. Solo sube tu archivo desde cualquier navegador." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir archivos Office a PDF en línea", "description": "Convierte cualquier documento de Microsoft Office a PDF en 3 simples pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Sube tu archivo Office", "text": "Ve a la herramienta Office a PDF de PDF.it y sube tu archivo Word, Excel o PowerPoint haciendo clic o arrastrandolo al area de carga." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Haz clic en Convertir a PDF. PDF.it procesa el archivo en la nube, preservando tu formato original, fuentes y diseño." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Una vez completada la conversión, descarga tu PDF. También puedes comprimirlo, unirlo con otros PDFs o agregar protección con contraseña." }
] }

export default function OfficeAPdfConvertidorPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Office a PDF convertidor: DOCX, XLSX, PPTX a PDF</h1>
          <p className="text-xl text-slate-300">Convierte cualquier archivo de Microsoft Office a PDF — documentos Word, hojas de cálculo Excel y presentaciones PowerPoint — todo desde una sola herramienta, sin software necesario.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Office a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Qué es un convertidor Office a PDF?</h2>
            <p className="text-slate-600 mb-4">Un convertidor Office a PDF toma archivos de Microsoft Office — <strong>DOCX, XLSX, PPTX</strong> (y sus equivalentes antiguos DOC, XLS, PPT) — y los convierte en documentos PDF universalmente legibles. Los PDFs se ven igual en cualquier dispositivo y no pueden ser editados accidentalmente, lo que los hace el estándar para compartir versiones finales de documentos.</p>
            <p className="text-slate-600">El <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">convertidor Office a PDF</Link> de PDF.it maneja los tres formatos en un solo lugar. Sube un documento Word, una hoja Excel o una presentación PowerPoint — obtendras un PDF correctamente formateado en segundos.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Formatos soportados</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Aplicación</th>
                  <th className="text-left py-3 px-4 font-bold">Formatos aceptados</th>
                  <th className="text-left py-3 px-4 font-bold">Herramienta dedicada</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Microsoft Word</td><td className="py-3 px-4">.docx, .doc</td><td className="py-3 px-4"><Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link></td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Microsoft Excel</td><td className="py-3 px-4">.xlsx, .xls</td><td className="py-3 px-4"><Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link></td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-[#14D8C4]">Microsoft PowerPoint</td><td className="py-3 px-4">.pptx, .ppt</td><td className="py-3 px-4"><Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">PowerPoint a PDF</Link></td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Convertidor todo-en-uno vs. herramientas individuales</h2>
            <p className="text-slate-600 mb-4">PDF.it ofrece tanto una herramienta unificada <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">Office a PDF</Link> como herramientas separadas para cada formato. Aqui te decimos cuando usar cual:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Usa el convertidor todo-en-uno</strong> cuando tengas una mezcla de archivos Word, Excel y PowerPoint para convertir en un solo lote. Una carga, múltiples formatos, todos convertidos a la vez.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Usa <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link></strong> cuando necesites opciones específicas de formato Word o quieras ajustar margenes y diseño.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Usa <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link></strong> cuando necesites controlar el ajuste de página, anchos de columna u orientación horizontal para hojas anchas.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Usa <Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">PowerPoint a PDF</Link></strong> cuando quieras control sobre el diseño de diapositivas, formato de folletos o páginas de notas.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir archivos Office a PDF (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Sube tu archivo Office", desc: "Ve a la herramienta Office a PDF y arrastra tu archivo al area de carga, o haz clic para buscar. Acepta .docx, .xlsx, .pptx y sus equivalentes antiguos. Usuarios gratuitos pueden subir archivos hasta 25MB." },
                { title: "Convierte a PDF", desc: "Haz clic en Convertir a PDF. La conversión se ejecuta en la nube — sin software necesario. Tu formato, fuentes, imágenes y diseño se preservan automáticamente." },
                { title: "Descarga tu PDF", desc: "Descarga el PDF convertido. Desde aquí puedes comprimirlo, unirlo con otros archivos, agregar contraseña o compartirlo — todo dentro de PDF.it." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para conversiónes de alta calidad</h2>
            <p className="text-slate-600 mb-4">La mayoría de las conversiónes Office a PDF funcionan perfectamente la primera vez. Pero si necesitas resultados pixel-perfect, sigue estos consejos:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Usa fuentes estándar.</strong> Arial, Calibri, Times New Roman y otras fuentes del sistema se convierten sin problemas. Fuentes personalizadas o decorativas pueden ser sustituidas.</li>
              <li>&#10003; <strong>Verifica margenes antes de convertir.</strong> Margenes estrechos en Word a veces causan que el texto se recorte en el PDF. Establece margenes en "Normal" (1 pulgada) si ves problemas.</li>
              <li>&#10003; <strong>Guarda tu archivo antes de subir.</strong> Asegurate de que todos los cambios esten guardados en el formato .docx/.xlsx/.pptx más reciente — formatos antiguos (.doc, .xls) pueden tener ligeras diferencias de renderizado.</li>
              <li>&#10003; <strong>Para Excel, establece el area de impresión.</strong> Los PDFs de Excel usan el area de impresión para determinar que aparece en cada página. Configura esto en Diseño de página antes de convertir.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por qué convertir archivos Office a PDF?</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Compatibilidad universal</h3><p className="text-slate-600">No todos tienen Microsoft Office. Los PDFs se abren en cualquier dispositivo, cualquier sistema operativo, en cualquier navegador. Tu destinatario ve exactamente lo que tu ves — sin fuentes faltantes, sin diseño desplazado.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Previene ediciónes accidentales</h3><p className="text-slate-600">Enviar un documento Word invita ediciónes. Los PDFs son de solo lectura por defecto, haciendolos ideales para contratos, propuestas y reportes finales. Para seguridad extra, puedes <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">agregar una contraseña</Link>.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Tamaños de archivo más pequeños</h3><p className="text-slate-600">La conversión a PDF a menudo reduce el tamaño del archivo comparado con el archivo Office original, especialmente para documentos con muchas imágenes. Si el PDF sigue siendo grande, pásalo por <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducción adicional.</p></div>
            </div>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tus archivos Office?</h2>
          <p className="text-slate-300 mb-6">Sube cualquier archivo Word, Excel o PowerPoint y obtiene un PDF perfecto en segundos — gratis, sin registro.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Convertir DOCX, XLSX y PPTX a PDF (un flujo de trabajo)", href: "/es/aprender/convertir-docx-xlsx-pptx-a-pdf" },
              { title: "Office a PDF sin cambios de diseño (soluciónes comunes)", href: "/es/aprender/office-a-pdf-mantener-formato" },
              { title: "Convertir archivos Office a PDF en móvil (iPhone/Android)", href: "/es/aprender/office-a-pdf-en-movil" },
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
