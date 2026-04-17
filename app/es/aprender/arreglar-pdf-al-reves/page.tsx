import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Arreglar un PDF al Reves (Rotar 180° al Instante) | PDF.it",
  description:
    "Aprende como arreglar un PDF al reves rotandolo 180°. Común con documentos escaneados — corrige la orientación al instante en línea, sin software.",
  keywords: "arreglar pdf al reves, pdf invertido, rotar pdf 180, voltear pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como arreglo un PDF al reves?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube el PDF a la herramienta Rotar PDF de PDF.it, seleccióna las páginas al reves, elige rotación de 180° y descarga el archivo corregido. La corrección toma segundos y es gratis para archivos de hasta 25MB." }
    },
    {
      "@type": "Question",
      "name": "Por qué mi PDF esta al reves?",
      "acceptedAnswer": { "@type": "Answer", "text": "Esto generalmente sucede cuando un documento se coloca boca abajo o en el ángulo incorrecto en un escáner. También puede ocurrir con el escaneo a doble cara cuando las páginas traseras se voltean, o cuando el software de exportación de PDF tiene un error de rotación." }
    },
    {
      "@type": "Question",
      "name": "Puedo arreglar solo las páginas al reves sin afectar el resto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it te permite selecciónar páginas individuales para rotar. Puedes corregir solo las páginas al reves mientras dejas las páginas correctamente orientadas sin tocar." }
    },
    {
      "@type": "Question",
      "name": "Arreglar la rotación afectara la calidad del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotar un PDF solo cambia los metadatos de orientación — no re-renderiza, comprime ni modifica el contenido real. El texto, las imágenes y el formato permanecen identicos." }
    },
    {
      "@type": "Question",
      "name": "Puedo arreglar un PDF al reves en mi teléfono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. PDF.it funciona en cualquier navegador móvil. Abre pdf.it.com/rotate-pdf en Safari o Chrome, sube el PDF, rota 180° y descarga la version corregida directamente en tu teléfono." }
    },
    {
      "@type": "Question",
      "name": "Como se si mi PDF esta al reves o solo de lado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el texto se lee de abajo hacia arriba (completamente invertido), esta al reves y necesita una rotación de 180°. Si el texto se lee de lado, esta de costado y necesita una rotación de 90°. La vista previa de PDF.it te muestra la orientación actual antes de aplicar la corrección." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Arreglar un PDF al Reves",
  "description": "Rota un PDF al reves 180° en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube el PDF al reves",
      "text": "Ve a la herramienta Rotar PDF de PDF.it y sube el archivo con páginas al reves haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona rotación de 180°",
      "text": "Selecciona las páginas al reves (o todas las páginas si el documento completo esta invertido) y elige rotación de 180° para voltearlas correctamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF corregido",
      "text": "Haz clic en Rotar y descarga el PDF corregido. Todas las páginas ahora se muestran correctamente en cualquier visor de PDF."
    }
  ]
}

export default function ArreglarPDFAlRevesPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Arreglar un PDF al Reves (Rotar 180° al Instante)</h1>
              <p className="text-xl text-slate-300">
                Abriste un PDF y la página completa esta al reves? Este es uno de los problemas de escaneo más comunes. Aqui te mostramos como voltearlo correctamente en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Necesitas una solución rápida? Salta la guia y voltea tu PDF ahora.</p>
            </div>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Arreglar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los PDFs Terminan al Reves?</h2>
              <p className="text-slate-600 mb-4">
                Un PDF al reves es frustrante, pero es más común de lo que piensas. Estas son las causas principales:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">1.</span>
                  <span><strong>Documento colocado al reves en el escáner.</strong> La causa más común. Cuando pones una página boca abajo en un escáner de cama plana con la orientación incorrecta, el escaneo sale invertido. Esto sucede constantemente en oficinas ocupadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">2.</span>
                  <span><strong>Errores de escaneo a doble cara.</strong> Los alimentadores automáticos de documentos (ADF) en impresoras de oficina pueden voltear el lado trasero de las páginas incorrectamente, resultando en páginas alternadas entre correctas y al reves.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">3.</span>
                  <span><strong>Orientación de camara del teléfono.</strong> Tomar una foto de un documento mientras sostienes tu teléfono al reves (o en un ángulo de 180°) produce una imagen invertida. Incluso <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> no siempre puede detectar esto automáticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#14D8C4] font-bold mt-0.5">4.</span>
                  <span><strong>Errores de exportación de software.</strong> Algunas herramientas de creación de PDF ocasionalmente aplican metadatos de rotación incorrectos, causando que las páginas se muestren al reves aunque el contenido fue creado correctamente.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Arreglar un PDF al Reves (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube el PDF",
                    desc: "Ve a la herramienta Rotar PDF y sube el archivo con páginas al reves. Arrastalo al area de carga o haz clic para buscar. Gratis para archivos de hasta 25MB — los usuarios Pro obtienen hasta 200MB.",
                  },
                  {
                    title: "Selecciona rotación de 180°",
                    desc: "Si el documento completo esta al reves, seleccióna todas las páginas y elige rotación de 180°. Si solo algunas páginas están invertidas (común con escaneos a doble cara), seleccióna solo esas páginas. La vista previa te ayuda a identificar que páginas necesitan corrección.",
                  },
                  {
                    title: "Descarga el PDF corregido",
                    desc: "Haz clic en Rotar y descarga el documento corregido. Abrelo en cualquier visor de PDF para confirmar que cada página esta correcta. La corrección es permanente — cada visor e impresora mostrara las páginas correctamente.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Al Reves vs. De Lado: Que Rotación Necesitas?</h2>
              <p className="text-slate-600 mb-4">
                Antes de rotar, necesitas identificar que tipo de problema de rotación tiene tu PDF. Asi puedes determinarlo:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Al Reves (Necesita Rotación de 180°)</h3>
                  <p className="text-slate-600">
                    El texto aparece completamente invertido — necesitarias voltear tu monitor al reves para leerlo. La parte superior de la página esta en la parte inferior. Este es el caso cubierto en esta guia. Aplica una rotación de 180° para corregirlo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">De Lado a la Izquierda (Necesita Rotación de 90° en Sentido Horario)</h3>
                  <p className="text-slate-600">
                    El texto va de abajo hacia arriba a lo largo del lado izquierdo de la página. Necesitarias inclinar tu cabeza a la derecha para leerlo. Aplica una rotación de 90° en sentido horario. Consulta nuestra guia completa sobre <Link href="/es/aprender/como-rotar-pdf" className="text-[#14D8C4] hover:underline">como rotar un PDF</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">De Lado a la Derecha (Necesita Rotación de 90° en Sentido Antihorario)</h3>
                  <p className="text-slate-600">
                    El texto va de arriba hacia abajo a lo largo del lado derecho de la página. Necesitarias inclinar tu cabeza a la izquierda para leerlo. Aplica una rotación de 90° en sentido antihorario (270°).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Corregir Problemas de Escaneo a Doble Cara</h2>
              <p className="text-slate-600 mb-4">
                Uno de los escenarios más molestos es cuando un escaneo a doble cara produce orientaciones alternadas — las páginas impares están correctas pero las pares están al reves, o viceversa. Asi puedes manejarlo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Selecciona solo las páginas al reves.</strong> En PDF.it, puedes hacer clic en las miniaturas de páginas individuales para selecciónar solo las páginas invertidas. Luego aplica rotación de 180° solo a esas páginas.</li>
                <li>&#10003; <strong>Verifica el patron.</strong> Con escáneres ADF, el problema generalmente es consistente — cada otra página esta volteada. Selecciona todas las páginas pares (o todas las impares, las que esten mal) y rotalas juntas.</li>
                <li>&#10003; <strong>Re-escanea si es posible.</strong> Si tienes acceso a los documentos originales y al escáner, puede ser más rápido re-escanear con la configuración duplex correcta. Pero si los originales no están disponibles, PDF.it lo corrige al instante.</li>
                <li>&#10003; <strong>Ejecuta OCR después de corregir.</strong> Si el documento escaneado necesita texto buscable, corrige la rotación primero, luego usa <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link>. El OCR funciona mucho mejor cuando las páginas están correctamente orientadas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Siguientes Pasos Después de Corregir Tu PDF</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tus páginas están correctas, puedes tomar pasos adicionales para preparar el documento:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime el archivo.</strong> Los PDFs escaneados suelen ser innecesariamente grandes. Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamaño — especialmente útil si necesitas enviarlo por correo electrónico o subirlo a un portal con límites de tamaño.</li>
                <li>&#10003; <strong>Extrae páginas específicas.</strong> Si solo necesitas ciertas páginas del documento, usa <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para extraerlas en un archivo separado.</li>
                <li>&#10003; <strong>Une con otros documentos.</strong> Necesitas combinar este PDF corregido con otros archivos? Usa <Link href="/es/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> para crear un solo documento.</li>
                <li>&#10003; <strong>Hazlo listo para enviar.</strong> Para envios a gobiernos o instituciones, usa <Link href="/es/pdf-listo-para-subir" className="text-[#14D8C4] hover:underline">PDF Listo para Subir</Link> para aplanar y optimizar el archivo en un solo paso.</li>
                <li>&#10003; <strong>Agrega protección con contraseña.</strong> Si el documento contiene información sensible, usa <Link href="/es/proteger-pdf" className="text-[#14D8C4] hover:underline">Proteger PDF</Link> para agregar una contraseña antes de compartir.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Arreglar Tu PDF al Reves?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y voltealo correctamente en segundos — gratis, sin registro.</p>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Arreglar PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF Online (90°, 180° o Personalizado)", href: "/es/aprender/como-rotar-pdf" },
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Rotar un PDF Escaneado (Corregir Orientación Después de Escanear)", href: "/es/aprender/rotar-pdf-escaneado" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como arreglo un PDF al reves?", a: "Sube el PDF a la herramienta Rotar PDF de PDF.it, seleccióna las páginas al reves, elige rotación de 180° y descarga el archivo corregido. La corrección toma segundos y es gratis para archivos de hasta 25MB." },
                { q: "Por qué mi PDF esta al reves?", a: "Esto generalmente sucede cuando un documento se coloca boca abajo o en el ángulo incorrecto en un escáner. También puede ocurrir con el escaneo a doble cara cuando las páginas traseras se voltean, o cuando el software de exportación de PDF tiene un error de rotación." },
                { q: "Puedo arreglar solo las páginas al reves sin afectar el resto?", a: "Si. PDF.it te permite selecciónar páginas individuales para rotar. Puedes corregir solo las páginas al reves mientras dejas las páginas correctamente orientadas sin tocar." },
                { q: "Arreglar la rotación afectara la calidad del PDF?", a: "No. Rotar un PDF solo cambia los metadatos de orientación — no re-renderiza, comprime ni modifica el contenido real. El texto, las imágenes y el formato permanecen identicos." },
                { q: "Puedo arreglar un PDF al reves en mi teléfono?", a: "Si. PDF.it funciona en cualquier navegador móvil. Abre pdf.it.com/rotate-pdf en Safari o Chrome, sube el PDF, rota 180° y descarga la version corregida directamente en tu teléfono." },
                { q: "Como se si mi PDF esta al reves o solo de lado?", a: "Si el texto se lee de abajo hacia arriba (completamente invertido), esta al reves y necesita una rotación de 180°. Si el texto se lee de lado, esta de costado y necesita una rotación de 90°. La vista previa de PDF.it te muestra la orientación actual antes de aplicar la corrección." },
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
