import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Scissors, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Dividir un PDF para Email (Bajo Límites de Adjuntos) | PDF.it",
  description:
    "Aprende cómo dividir un PDF grande en archivos más pequeños que quepan bajo los límites de adjuntos de email. Funciona para Gmail (25MB), Outlook (20MB), y más — gratis, sin software.",
  keywords: "dividir pdf para email, pdf muy grande para email, reducir pdf para adjunto email, dividir pdf en archivos más pequeños",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo divido un PDF que es muy grande para email?", "acceptedAnswer": { "@type": "Answer", "text": "Sube tu PDF a la herramienta Dividir PDF de PDF.it, elige dividir por tamaño de archivo o conteo de páginas, y descarga las partes más pequeñas. Cada parte estará bajo el límite de adjuntos de email." } },
    { "@type": "Question", "name": "¿Cuál es el límite de adjuntos de Gmail?", "acceptedAnswer": { "@type": "Answer", "text": "Gmail permite adjuntos de hasta 25MB por email (total para todos los adjuntos combinados). Si tu PDF es más grande, necesitas dividirlo en archivos más pequeños o comprimirlo para reducir el tamaño." } },
    { "@type": "Question", "name": "¿Cuál es el límite de adjuntos de Outlook?", "acceptedAnswer": { "@type": "Answer", "text": "Microsoft Outlook permite adjuntos de hasta 20MB por email. Outlook.com (Hotmail) tiene el mismo límite de 20MB. Para archivos más grandes, divide o comprime tu PDF." } },
    { "@type": "Question", "name": "¿Debo dividir o comprimir mi PDF para email?", "acceptedAnswer": { "@type": "Answer", "text": "Intenta comprimir primero — es más simple. Si el PDF comprimido sigue siendo muy grande, divídelo en partes. PDF.it ofrece ambas herramientas: Comprimir PDF y Dividir PDF." } },
    { "@type": "Question", "name": "¿Puedo dividir un PDF en partes de un tamaño específico?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it te permite dividir por rangos de páginas, así puedes estimar cuántas páginas caben bajo tu tamaño objetivo. Para control preciso, divide en secciones pequeñas y verifica el tamaño de cada archivo." } },
    { "@type": "Question", "name": "¿Cómo recombino los PDFs divididos después de enviar?", "acceptedAnswer": { "@type": "Answer", "text": "El destinatario puede usar la herramienta Unir PDF de PDF.it para combinar todas las partes en un solo documento. Comparte este enlace: pdf.it.com/es/unir-pdf" } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Dividir un PDF para Email",
  "description": "Divide un PDF grande en archivos más pequeños que quepan bajo los límites de adjuntos de email en 3 simples pasos.",
  "step": [
    { "@type": "HowToStep", "name": "Sube tu PDF grande", "text": "Ve a la herramienta Dividir PDF de PDF.it y sube el PDF que es muy grande para email." },
    { "@type": "HowToStep", "name": "Divide por rangos de páginas", "text": "Divide el PDF en secciones que sean lo suficientemente pequeñas para enviar por email. Por ejemplo, divide un PDF de 40 páginas en dos mitades de 20 páginas." },
    { "@type": "HowToStep", "name": "Descarga y envía cada parte", "text": "Descarga los archivos divididos y adjunta cada uno a un email separado. Etiquétalos claramente (Parte 1 de 3, Parte 2 de 3, etc.)." }
  ]
}

export default function DividirPDFParaEmailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Dividir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir un PDF para Email (Bajo Límites de Adjuntos)</h1>
            <p className="text-xl text-slate-300">¿Tu PDF es muy grande para adjuntarlo a un email? Aquí te explicamos cómo dividirlo en partes más pequeñas que quepan bajo el límite de 25MB de Gmail, 20MB de Outlook, y más.</p>
          </div></div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Scissors className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Necesitas dividir tu PDF ahora mismo? Salta la guía y usa la herramienta.</p>
            </div>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Dividir PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Límites de Adjuntos de Email que Debes Conocer</h2>
              <p className="text-slate-600 mb-4">Cada proveedor de email tiene un tamaño máximo de archivo para adjuntos. Si tu PDF excede el límite, el email rebotará o se negará a enviar. Aquí están los límites más comunes:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Gmail:</strong> 25MB por email (total para todos los adjuntos combinados)</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Outlook / Hotmail:</strong> 20MB por email</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Yahoo Mail:</strong> 25MB por email</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Apple iCloud Mail:</strong> 20MB por email</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">&#8226;</span><span><strong>Servidores de email corporativo:</strong> Frecuentemente 10MB o incluso 5MB, dependiendo de la política de la empresa</span></li>
              </ul>
              <p className="text-slate-600 mt-4">Si tu destinatario usa un sistema de email corporativo, apunta a archivos menores de 10MB para estar seguro. También puedes intentar <Link href="/es/comprimir-pdf-para-email" className="text-orange-600 hover:underline">comprimir tu PDF para email</Link> antes de dividir.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Dividir un PDF para Email (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube tu PDF sobredimensionado", desc: "Ve a la herramienta Dividir PDF de PDF.it y sube tu archivo. Verás el conteo total de páginas y podrás previsualizar cada página. Los usuarios gratuitos pueden subir archivos hasta 25MB; usuarios Pro hasta 200MB." },
                  { title: "Divídelo en partes amigables para email", desc: "Divide el PDF en rangos de páginas que mantengan cada parte bajo el límite de tamaño del email. Por ejemplo, divide un PDF de 60 páginas y 40MB en tres secciones de 20 páginas. Cada sección debería ser aproximadamente 13MB — bien bajo el límite de 25MB de Gmail." },
                  { title: "Descarga y envía cada parte por separado", desc: "Descarga cada archivo dividido. Adjunta la Parte 1 a tu primer email, la Parte 2 a un segundo email, y así sucesivamente. Nombra los asuntos claramente: \"Documento - Parte 1 de 3\", \"Documento - Parte 2 de 3\", etc." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Comprimir o Dividir? (O Ambos)</h2>
              <p className="text-slate-600 mb-4">Antes de dividir tu PDF, intenta comprimirlo primero. La compresión puede reducir tamaños de archivo en un 50-80%, lo que podría poner tu PDF bajo el límite de email sin dividir.</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Intenta comprimir primero</h3>
                  <p className="text-slate-600">Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamaño del archivo. Si tu PDF de 30MB se comprime a 18MB, puedes enviarlo por Gmail sin dividir. Para compresión más específica, prueba <Link href="/es/comprimir-pdf-a-5mb" className="text-orange-600 hover:underline">Comprimir a 5MB</Link> o <Link href="/es/comprimir-pdf-a-2mb" className="text-orange-600 hover:underline">Comprimir a 2MB</Link>.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Divide si la compresión no es suficiente</h3>
                  <p className="text-slate-600">Si tu PDF comprimido sigue siendo muy grande — por ejemplo, un documento de 100 páginas con escaneos de alta resolución — dividir es el camino. Divide el documento en secciones lógicas (capítulos, secciones o conteos de páginas iguales).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Comprime y luego divide para mejores resultados</h3>
                  <p className="text-slate-600">Para los archivos más pequeños posibles, comprime primero, luego divide. Esto te da el menor número de partes de email mientras mantiene cada una bien bajo el límite de tamaño.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Cómo el Destinatario Puede Recombinar las Partes</h2>
              <p className="text-slate-600 mb-4">Después de enviar PDFs divididos, el destinatario necesitará unirlos de nuevo en un documento. Incluye una nota en tu email con estas instrucciones:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Descarga todas las partes</strong> de cada email a la misma carpeta.</li>
                <li>&#10003; <strong>Ve a <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">PDF.it Unir PDF</Link></strong> y sube todas las partes.</li>
                <li>&#10003; <strong>Ordénalas</strong> (Parte 1 primero, Parte 2 segundo, etc.).</li>
                <li>&#10003; <strong>Haz clic en Unir</strong> y descarga el documento completo.</li>
              </ul>
              <p className="text-slate-600 mt-4">Todo el proceso toma menos de un minuto, y el PDF unido será idéntico a tu original.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos Pro para Enviar PDFs Grandes por Email</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Aplana antes de dividir.</strong> Si tu PDF tiene campos de formulario o anotaciones, usa <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> primero para reducir datos incrustados.</li>
                <li>&#10003; <strong>Convierte imágenes a JPG.</strong> Si solo necesitas compartir páginas visuales (no texto editable), convierte las páginas a <Link href="/es/pdf-a-jpg" className="text-orange-600 hover:underline">imágenes JPG</Link> — frecuentemente son mucho más pequeñas que las páginas PDF.</li>
                <li>&#10003; <strong>Usa nombres de archivo claros.</strong> Nombra tus archivos &quot;Informe_Parte1de3.pdf&quot;, &quot;Informe_Parte2de3.pdf&quot;, etc. para que el destinatario sepa el orden.</li>
                <li>&#10003; <strong>Extrae solo lo necesario.</strong> Si el destinatario solo necesita ciertas páginas, <Link href="/es/aprender/extraer-paginas-de-pdf-guia" className="text-orange-600 hover:underline">extrae esas páginas</Link> en vez de enviar el documento completo.</li>
                <li>&#10003; <strong>Prueba contigo mismo primero.</strong> Envía los archivos divididos a tu propio email para asegurarte de que todo se ve bien antes de enviar al destinatario.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿PDF Muy Grande para Email?</h2>
            <p className="text-slate-300 mb-6">Divídelo en archivos más pequeños que quepan bajo cualquier límite de adjuntos — gratis, sin registro.</p>
            <Link href="/es/dividir-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <Scissors className="h-5 w-5" /> Dividir PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Dividir un PDF (Guía Paso a Paso)", href: "/es/aprender/como-dividir-pdf" },
                { title: "Cómo Extraer Páginas de un PDF (Conserva Solo Lo Que Necesitas)", href: "/es/aprender/extraer-paginas-de-pdf-guia" },
                { title: "Dividir PDF en Páginas Individuales (Un Archivo por Página)", href: "/es/aprender/dividir-pdf-en-paginas-individuales" },
                { title: "Cómo Dividir un PDF en tu Teléfono (iPhone y Android)", href: "/es/aprender/dividir-pdf-en-movil" },
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "¿Cómo divido un PDF que es muy grande para email?", a: "Sube tu PDF a la herramienta Dividir PDF de PDF.it, elige dividir por tamaño de archivo o conteo de páginas, y descarga las partes más pequeñas. Cada parte estará bajo el límite de adjuntos de email." },
                { q: "¿Cuál es el límite de adjuntos de Gmail?", a: "Gmail permite adjuntos de hasta 25MB por email (total para todos los adjuntos combinados). Si tu PDF es más grande, necesitas dividirlo en archivos más pequeños o comprimirlo para reducir el tamaño." },
                { q: "¿Cuál es el límite de adjuntos de Outlook?", a: "Microsoft Outlook permite adjuntos de hasta 20MB por email. Outlook.com (Hotmail) tiene el mismo límite de 20MB. Para archivos más grandes, divide o comprime tu PDF." },
                { q: "¿Debo dividir o comprimir mi PDF para email?", a: "Intenta comprimir primero — es más simple. Si el PDF comprimido sigue siendo muy grande, divídelo en partes. PDF.it ofrece ambas herramientas: Comprimir PDF y Dividir PDF." },
                { q: "¿Puedo dividir un PDF en partes de un tamaño específico?", a: "Sí. PDF.it te permite dividir por rangos de páginas, así puedes estimar cuántas páginas caben bajo tu tamaño objetivo. Para control preciso, divide en secciones pequeñas y verifica el tamaño de cada archivo." },
                { q: "¿Cómo recombino los PDFs divididos después de enviar?", a: "El destinatario puede usar la herramienta Unir PDF de PDF.it para combinar todas las partes en un solo documento. Comparte este enlace: pdf.it.com/es/unir-pdf" },
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
