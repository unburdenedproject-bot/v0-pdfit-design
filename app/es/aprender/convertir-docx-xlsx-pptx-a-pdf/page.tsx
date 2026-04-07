import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Convertir DOCX, XLSX y PPTX a PDF — Todos los formatos Office | PDF.it",
  description: "Aprende como convertir cualquier archivo de Microsoft Office — Word, Excel o PowerPoint — a PDF en una sola herramienta. Mantiene formato, reduce tamano de archivo y comparte con confianza.",
  keywords: "convertir docx a pdf, xlsx a pdf, pptx a pdf, office a pdf convertidor, word a pdf, excel a pdf, powerpoint a pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Puedo convertir archivos DOCX, XLSX y PPTX a PDF en una sola herramienta?", "acceptedAnswer": { "@type": "Answer", "text": "Si. La herramienta Office a PDF de PDF.it acepta archivos de Word, Excel y PowerPoint todo en un solo lugar. Sube cualquier archivo .docx, .xlsx o .pptx y obtiene un PDF en segundos." } },
  { "@type": "Question", "name": "Convertir archivos Office a PDF cambia el formato?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it preserva fuentes, imagenes, tablas y diseno durante la conversion. Para mejores resultados, usa fuentes estandar y evita macros complejas en tu archivo original." } },
  { "@type": "Question", "name": "Es gratis convertir archivos Office a PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Si. Los usuarios gratuitos obtienen 10 conversiones por dia con archivos hasta 25MB. Los usuarios Pro obtienen conversiones ilimitadas con archivos hasta 200MB y procesamiento por lotes." } },
  { "@type": "Question", "name": "Puedo convertir multiples archivos Office a PDF a la vez?", "acceptedAnswer": { "@type": "Answer", "text": "Los usuarios Pro pueden convertir por lotes multiples archivos Office a PDF en una sola operacion. Los usuarios gratuitos pueden convertir un archivo a la vez." } },
  { "@type": "Question", "name": "Que formatos de archivo Office soporta PDF.it?", "acceptedAnswer": { "@type": "Answer", "text": "PDF.it soporta .docx (Word), .xlsx (Excel), .pptx (PowerPoint), y formatos legacy como .doc, .xls y .ppt a traves del convertidor Office a PDF." } },
  { "@type": "Question", "name": "Puedo convertir archivos Office a PDF en mi telefono?", "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador movil. Sube tu archivo Office, conviertelo y descarga el PDF — sin necesidad de instalar apps." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como convertir DOCX, XLSX y PPTX a PDF", "description": "Convierte cualquier archivo de Microsoft Office a PDF en 3 simples pasos usando PDF.it.", "step": [
  { "@type": "HowToStep", "name": "Sube tu archivo Office", "text": "Ve a la herramienta Office a PDF de PDF.it y sube tu archivo .docx, .xlsx o .pptx haciendo clic o arrastrandolo al area de carga." },
  { "@type": "HowToStep", "name": "Convierte a PDF", "text": "Haz clic en Convertir y PDF.it procesara tu archivo, preservando todo el formato, imagenes y diseno." },
  { "@type": "HowToStep", "name": "Descarga tu PDF", "text": "Descarga tu PDF convertido. Si el archivo es muy grande, usa la herramienta Comprimir PDF para reducir su tamano antes de compartir." }
] }

export default function ConvertirDocxXlsxPptxAPdfPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Office a PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Convertir DOCX, XLSX y PPTX a PDF — Todos los formatos Office</h1>
          <p className="text-xl text-slate-300">Deja de usar tres convertidores diferentes. Ya sea que tengas un documento Word, una hoja de calculo Excel o una presentacion PowerPoint, PDF.it convierte cualquier archivo Office en un PDF limpio en segundos.</p>
        </div></div></section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Listo para convertir? Salta la guia y ve directo a la herramienta.</p></div>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Convertir a PDF Ahora <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que convertir archivos Office a PDF?</h2>
            <p className="text-slate-600 mb-4">Los archivos de Microsoft Office son excelentes para editar, pero no son ideales para compartir. Aqui esta por que PDF es la mejor opcion cuando tu documento sale de tu computadora:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Compatibilidad universal.</strong> Cualquiera puede abrir un PDF sin importar su dispositivo o software. No todos tienen Microsoft Office instalado, pero cualquier dispositivo puede leer PDFs.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>El formato se mantiene intacto.</strong> Un documento Word que se ve perfecto en tu pantalla puede cambiar fuentes, margenes e imagenes en la computadora de otra persona. Los PDFs se ven igual en todas partes.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Apariencia profesional.</strong> Enviar un PDF pulido en lugar de un .docx editable demuestra atencion al detalle — especialmente para curriculos, propuestas y facturas.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Tamanos de archivo mas pequenos.</strong> Los PDFs a menudo son mas pequenos que sus equivalentes Office, haciendolos mas faciles de enviar por email. Puedes <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">comprimir el PDF aun mas</Link> si es necesario.</span></li>
              <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Seguridad.</strong> Los PDFs pueden <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">protegerse con contrasena</Link> para prevenir edicion o visualizacion no autorizada.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como convertir cualquier archivo Office a PDF (paso a paso)</h2>
            <div className="space-y-4">
              {[
                { title: "Sube tu archivo Office", desc: "Ve a la herramienta Office a PDF de PDF.it y arrastra tu archivo .docx, .xlsx o .pptx al area de carga. Archivos hasta 25MB son gratis — usuarios Pro pueden subir archivos hasta 200MB." },
                { title: "Haz clic en Convertir", desc: "PDF.it detecta el tipo de archivo automaticamente y lo convierte a PDF preservando tu formato, imagenes, graficos y tablas." },
                { title: "Descarga tu PDF", desc: "Tu PDF esta listo en segundos. Descargalo directamente o comprimelo despues si necesitas un archivo mas pequeno para email o subir a un portal." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos para cada formato Office</h2>
            <div className="space-y-6">
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Word (.docx) a PDF</h3><p className="text-slate-600">Los documentos Word usualmente se convierten limpiamente. Cuidado con fuentes personalizadas que pueden no estar incrustadas — usa fuentes estandar como Arial, Times New Roman o Calibri para mejores resultados. Si tu documento tiene control de cambios, acepta o rechaza antes de convertir. Usa la herramienta dedicada <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link> para opciones avanzadas.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">Excel (.xlsx) a PDF</h3><p className="text-slate-600">Las hojas de calculo pueden ser complicadas porque tablas anchas pueden cortarse. Antes de convertir, establece tu area de impresion en Excel y elige orientacion horizontal para hojas anchas. La herramienta <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link> maneja esto automaticamente cuando es posible.</p></div>
              <div><h3 className="text-lg font-bold text-slate-900 mb-2">PowerPoint (.pptx) a PDF</h3><p className="text-slate-600">Las presentaciones se convierten con una diapositiva por pagina por defecto. Las animaciones y transiciones no apareceran en el PDF, pero todo el texto, imagenes y graficos se preservan. Usa la herramienta <Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">PowerPoint a PDF</Link> para los mejores resultados.</p></div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Un convertidor vs. tres herramientas separadas</h2>
            <p className="text-slate-600 mb-4">Muchos sitios web te obligan a usar una herramienta diferente para cada tipo de archivo — una para Word, otra para Excel y una tercera para PowerPoint. Eso significa subir a tres paginas diferentes y aprender tres interfaces diferentes.</p>
            <p className="text-slate-600 mb-4">La herramienta <Link href="/es/office-a-pdf" className="text-[#14D8C4] hover:underline">Office a PDF</Link> de PDF.it maneja los tres formatos en un solo lugar. Sube cualquier combinacion de archivos .docx, .xlsx y .pptx y conviertelos todos a la vez. Los usuarios Pro pueden incluso convertir por lotes multiples archivos simultaneamente.</p>
            <p className="text-slate-600">Por supuesto, si solo trabajas con un formato, tambien puedes usar los convertidores dedicados: <Link href="/es/word-a-pdf" className="text-[#14D8C4] hover:underline">Word a PDF</Link>, <Link href="/es/excel-a-pdf" className="text-[#14D8C4] hover:underline">Excel a PDF</Link>, o <Link href="/es/powerpoint-a-pdf" className="text-[#14D8C4] hover:underline">PowerPoint a PDF</Link>.</p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Que hacer despues de convertir</h2>
            <p className="text-slate-600 mb-4">Una vez que tus archivos Office son PDFs, puede que necesites algunos pasos adicionales dependiendo de tu caso de uso:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Unir multiples PDFs</strong> en un documento usando <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> — ideal para combinar carta de presentacion, curriculo y portafolio.</li>
              <li>&#10003; <strong>Comprimir el PDF</strong> si es muy grande para email. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para que quede bajo el limite tipico de 25MB.</li>
              <li>&#10003; <strong>Agregar proteccion con contrasena</strong> con <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> si el documento contiene datos sensibles.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Listo para convertir tus archivos Office?</h2>
          <p className="text-slate-300 mb-6">Sube cualquier archivo Word, Excel o PowerPoint y obtiene un PDF perfecto en segundos — gratis, sin registro.</p>
          <Link href="/es/office-a-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Convertir a PDF Ahora</Link>
        </div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Office a PDF convertidor: DOCX, XLSX, PPTX a PDF", href: "/es/aprender/office-a-pdf-convertidor" },
              { title: "Como mantener el formato al convertir Office a PDF", href: "/es/aprender/office-a-pdf-mantener-formato" },
              { title: "Convertir archivos Office a PDF en movil (iPhone y Android)", href: "/es/aprender/office-a-pdf-en-movil" },
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
