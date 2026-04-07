import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Cómo Unir PDFs en el Orden Correcto (Sin Errores de Páginas) | PDF.it",
  description:
    "Aprende cómo unir PDFs en el orden correcto cada vez. Consejos de nombres de archivos, arrastrar y soltar, y evitar errores de páginas al combinar PDFs.",
  keywords: "unir pdfs en orden, combinar pdfs en orden correcto, unir pdf páginas en secuencia, ordenar pdf antes de unir",
}

const faqSchema = {
  "@context": "https://schema.org", "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "¿Cómo uno PDFs en un orden específico?", "acceptedAnswer": { "@type": "Answer", "text": "Sube todos tus PDFs a la herramienta Unir de PDF.it, luego arrastra y suelta los archivos en el orden exacto que deseas. El primer archivo en la lista aparecerá primero en el documento unido. Haz clic en Unir cuando el orden sea correcto." } },
    { "@type": "Question", "name": "¿Por qué mi PDF unido salió en el orden incorrecto?", "acceptedAnswer": { "@type": "Answer", "text": "La mayoría de las herramientas de unión procesan archivos en el orden en que fueron subidos o alfabéticamente por nombre de archivo. Si subiste archivos en un orden aleatorio sin reorganizarlos, las páginas pueden estar fuera de secuencia. Siempre verifica el orden de los archivos antes de hacer clic en Unir." } },
    { "@type": "Question", "name": "¿Puedo reorganizar páginas después de unir?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Si notas que el orden es incorrecto después de unir, usa la herramienta Dividir PDF de PDF.it para extraer páginas individuales, luego únelas nuevamente en el orden correcto. También puedes usar la herramienta Reordenar Páginas PDF para reorganizar páginas dentro de un solo PDF." } },
    { "@type": "Question", "name": "¿Cómo debo nombrar mis archivos para ordenarlos fácilmente?", "acceptedAnswer": { "@type": "Answer", "text": "Usa un prefijo numérico como 01-, 02-, 03- al inicio de cada nombre de archivo. Por ejemplo: '01-carta-presentacion.pdf', '02-curriculum.pdf', '03-referencias.pdf'. Esto asegura que los archivos se ordenen correctamente en cualquier administrador de archivos." } },
    { "@type": "Question", "name": "¿PDF.it me permite previsualizar antes de unir?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. Puedes ver la lista de archivos subidos y su orden antes de hacer clic en Unir. Arrastra y suelta para reorganizarlos hasta que el orden sea exactamente correcto, luego procede con la unión." } },
    { "@type": "Question", "name": "¿Puedo unir PDFs en orden desde mi teléfono?", "acceptedAnswer": { "@type": "Answer", "text": "Sí. PDF.it funciona en navegadores móviles. Sube tus archivos, reorganízalos arrastrando al orden correcto, y únelos — todo desde el navegador de tu teléfono sin instalar ninguna app." } }
  ]
}

const howToSchema = {
  "@context": "https://schema.org", "@type": "HowTo", "name": "Cómo Unir PDFs en el Orden Correcto",
  "description": "Combina múltiples PDFs en un orden específico sin errores de páginas usando PDF.it.",
  "step": [
    { "@type": "HowToStep", "name": "Sube y nombra tus archivos lógicamente", "text": "Antes de subir, renombra tus archivos con prefijos numéricos (01-, 02-, 03-) para que se ordenen correctamente. Luego sube todos los archivos a la herramienta Unir de PDF.it." },
    { "@type": "HowToStep", "name": "Arrastra los archivos al orden correcto", "text": "Usa arrastrar y soltar para organizar los archivos en la secuencia exacta que deseas. El archivo superior se convierte en las primeras páginas del PDF unido." },
    { "@type": "HowToStep", "name": "Une y verifica el resultado", "text": "Haz clic en Unir PDF, descarga el resultado, y revisa cada página para confirmar que el orden sea correcto antes de enviarlo." }
  ]
}

export default function UnirPDFsEnOrdenPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
            <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDFs en el Orden Correcto (Sin Errores de Páginas)</h1>
            <p className="text-xl text-slate-300">No hay nada peor que enviar un PDF unido con las páginas desordenadas. Aquí te explicamos cómo hacerlo bien cada vez — con trucos simples de nombres y un flujo de arrastrar y soltar.</p>
          </div></div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0"><Merge className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">¿Listo para unir en orden? Salta la guía y ve directo a la herramienta.</p>
            </div>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Unir PDFs Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Qué Importa el Orden de Páginas al Unir PDFs</h2>
              <p className="text-slate-600 mb-4">Cuando combinas múltiples PDFs en uno, la herramienta los procesa en una secuencia específica. Si no controlas esa secuencia, puedes terminar con:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Una carta de presentación después de tu currículum</strong> en vez de antes — causando una mala primera impresión en los reclutadores.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Documentos de respaldo antes del formulario principal de solicitud</strong> — confundiendo a la persona que revisa tu envío.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Anexos mezclados en el cuerpo de un informe</strong> — haciendo que tu documento luzca poco profesional.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">La solución es simple: controla el orden <strong>antes</strong> de unir.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nombra Tus Archivos para Ordenarlos Fácilmente</h2>
              <p className="text-slate-600 mb-4">La forma más fácil de mantener los archivos en orden es agregar prefijos numéricos a tus nombres de archivo <strong>antes</strong> de subirlos. Así, incluso si la herramienta ordena alfabéticamente, tus archivos estarán en la secuencia correcta.</p>
              <div className="bg-gray-50 rounded-xl p-5 border border-gray-200 mb-4">
                <p className="font-bold text-slate-900 mb-3">Ejemplo de buenos nombres:</p>
                <ul className="space-y-1 text-slate-700 text-sm font-mono">
                  <li>01-carta-presentacion.pdf</li>
                  <li>02-curriculum.pdf</li>
                  <li>03-certificado-estudios.pdf</li>
                  <li>04-carta-recomendacion.pdf</li>
                  <li>05-muestras-portafolio.pdf</li>
                </ul>
              </div>
              <p className="text-slate-600">Usa números de dos dígitos (01, 02, 03) en vez de un solo dígito (1, 2, 3) — esto evita que "10" se ordene antes de "2" en algunos sistemas.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Cómo Unir PDFs en Orden (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Renombra tus archivos con prefijos numéricos", desc: "Antes de subir, renombra cada archivo con un prefijo numérico (01-, 02-, 03-). Esto asegura que se ordenen correctamente sin importar cómo la herramienta los organice inicialmente." },
                  { title: "Sube y reorganiza en PDF.it", desc: "Sube todos los archivos a la herramienta Unir PDF. Usa arrastrar y soltar para verificar el orden — el primer archivo en la lista aparecerá primero en el documento unido. Mueve cualquier archivo fuera de lugar a la posición correcta." },
                  { title: "Une, descarga y verifica", desc: "Haz clic en Unir PDF, descarga el resultado, y revisa cada página para confirmar que todo está en el orden correcto. Esta verificación final toma 30 segundos y previene errores de envío." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">¿Ya Uniste en el Orden Incorrecto?</h2>
              <p className="text-slate-600 mb-4">Si ya uniste tus PDFs y las páginas están desordenadas, no necesitas empezar de nuevo. Así puedes arreglarlo:</p>
              <ul className="space-y-2 text-slate-700">
                <li>✓ <strong>Usa Dividir PDF</strong> para separar el documento unido en páginas individuales usando <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link>.</li>
                <li>✓ <strong>Reorganiza las páginas</strong> y únelas nuevamente en el orden correcto.</li>
                <li>✓ <strong>O usa Reordenar Páginas PDF</strong> — las <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">herramientas de gestión de páginas</Link> te permiten arrastrar páginas a la posición correcta dentro de un solo PDF sin dividir.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Consejos de Orden para Escenarios Comunes</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Solicitudes de Empleo</h3>
                  <p className="text-slate-600">Orden estándar: carta de presentación primero, luego currículum, luego referencias o documentos adicionales. Algunos empleadores especifican su orden preferido — siempre sigue sus instrucciones exactamente.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Envíos Universitarios</h3>
                  <p className="text-slate-600">Orden típico: portada, ensayo/informe principal, bibliografía, anexos. Revisa las pautas de envío de tu universidad — algunas requieren una página de declaración firmada primero.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Solicitudes de Visa e Inmigración</h3>
                  <p className="text-slate-600">Sigue la lista de verificación proporcionada por la embajada o la oficina de inmigración exactamente. Generalmente: formulario de solicitud, copia de pasaporte, fotos, documentos financieros, cartas de respaldo. Equivocarse en este orden puede retrasar el procesamiento.</p>
                </div>
              </div>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">¿Listo para Unir Tus PDFs en Orden?</h2>
            <p className="text-slate-300 mb-6">Sube tus archivos, arrástralos a la secuencia correcta, y combínalos — gratis, sin registro.</p>
            <Link href="/es/unir-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <Merge className="h-5 w-5" /> Unir PDFs Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Cómo Unir Archivos PDF en Línea (Combinar PDFs en Uno)", href: "/es/aprender/como-unir-archivos-pdf" },
                { title: "Cómo Unir PDFs Escaneados (Y Mantenerlos Legibles)", href: "/es/aprender/unir-pdfs-escaneados" },
                { title: "Combinar PDFs para Envíos (Escuela, Visa, Portales de Empleo)", href: "/es/aprender/combinar-pdfs-para-envio" },
                { title: "Unir Archivos PDF en iPhone (Método Rápido por Navegador)", href: "/es/aprender/unir-pdf-en-iphone" },
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
                { q: "¿Cómo uno PDFs en un orden específico?", a: "Sube todos tus PDFs a la herramienta Unir de PDF.it, luego arrastra y suelta los archivos en el orden exacto que deseas. El primer archivo en la lista aparecerá primero en el documento unido. Haz clic en Unir cuando el orden sea correcto." },
                { q: "¿Por qué mi PDF unido salió en el orden incorrecto?", a: "La mayoría de las herramientas de unión procesan archivos en el orden en que fueron subidos o alfabéticamente por nombre de archivo. Si subiste archivos en un orden aleatorio sin reorganizarlos, las páginas pueden estar fuera de secuencia. Siempre verifica el orden de los archivos antes de hacer clic en Unir." },
                { q: "¿Puedo reorganizar páginas después de unir?", a: "Sí. Si notas que el orden es incorrecto después de unir, usa la herramienta Dividir PDF de PDF.it para extraer páginas individuales, luego únelas nuevamente en el orden correcto." },
                { q: "¿Cómo debo nombrar mis archivos para ordenarlos fácilmente?", a: "Usa un prefijo numérico como 01-, 02-, 03- al inicio de cada nombre de archivo. Por ejemplo: '01-carta-presentacion.pdf', '02-curriculum.pdf', '03-referencias.pdf'. Esto asegura que los archivos se ordenen correctamente en cualquier administrador de archivos." },
                { q: "¿PDF.it me permite previsualizar antes de unir?", a: "Sí. Puedes ver la lista de archivos subidos y su orden antes de hacer clic en Unir. Arrastra y suelta para reorganizarlos hasta que el orden sea exactamente correcto, luego procede con la unión." },
                { q: "¿Puedo unir PDFs en orden desde mi teléfono?", a: "Sí. PDF.it funciona en navegadores móviles. Sube tus archivos, reorganízalos arrastrando al orden correcto, y únelos — todo desde el navegador de tu teléfono sin instalar ninguna app." },
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
