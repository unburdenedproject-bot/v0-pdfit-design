import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Rotar un PDF Escaneado (Corregir Orientación Después de Escanear) | PDF.it",
  description:
    "Aprende como corregir un PDF escaneado que salio rotado o de lado. Corrige problemas de orientación horizontal vs vertical después de escanear — herramienta online gratis.",
  keywords: "rotar pdf escaneado, pdf escaneado de lado, corregir orientación documento escaneado, rotar páginas escaneadas",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como roto un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube el PDF escaneado a la herramienta Rotar PDF de PDF.it, seleccióna las páginas que están rotadas incorrectamente, elige el ángulo correcto (90° o 180°) y descarga el archivo corregido. No se necesita instalar software." }
    },
    {
      "@type": "Question",
      "name": "Por qué mi PDF escaneado salio de lado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los escáneres no siempre detectan correctamente la orientación de la página. Si el documento se coloco en el ángulo incorrecto en la cama del escáner, o si el alimentador automático de documentos jalo la página de lado, el escaneo estara rotado." }
    },
    {
      "@type": "Question",
      "name": "Debo rotar antes o después de ejecutar OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Siempre rota primero, luego ejecuta OCR. El reconocimiento optico de caracteres funciona mucho mejor cuando el texto esta orientado correctamente. El texto de lado o al reves produce resultados de OCR pobres con muchos errores." }
    },
    {
      "@type": "Question",
      "name": "Rotar un PDF escaneado reducira la calidad de imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La rotación solo cambia los metadatos de orientación de la página. Los datos de imagen escaneada permanecen intactos en su resolución y calidad original." }
    },
    {
      "@type": "Question",
      "name": "Puedo corregir múltiples páginas escaneadas a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes selecciónar todas las páginas que necesitan rotación y aplicar el mismo ángulo a todas a la vez. Si diferentes páginas necesitan diferentes rotaciones, puedes aplicarlas en lotes separados." }
    },
    {
      "@type": "Question",
      "name": "Como evito que los PDFs escaneados salgan rotados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Coloca los documentos rectos en la cama del escáner, alineados con los bordes. Usa las marcas de alineacion impresas en la mayoría de los escáneres. Para alimentadores automáticos de documentos, asegurate de que las páginas esten apiladas ordenadamente y las guias de papel esten ajustadas contra los bordes." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Rotar un PDF Escaneado",
  "description": "Corrige la orientación de un PDF escaneado en 3 simples pasos usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube el PDF escaneado",
      "text": "Ve a la herramienta Rotar PDF de PDF.it y sube el documento escaneado haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona las páginas rotadas y corrige el ángulo",
      "text": "Identifica que páginas están rotadas incorrectamente usando la vista previa. Selecciona esas páginas y elige el ángulo de rotación necesario — 90° en sentido horario, 90° en sentido antihorario o 180°."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el escaneo corregido",
      "text": "Haz clic en Rotar y descarga tu documento corregido. Las páginas escaneadas ahora se muestran en la orientación correcta."
    }
  ]
}

export default function RotarPDFEscaneadoPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Rotar un PDF Escaneado (Corregir Orientación Después de Escanear)</h1>
              <p className="text-xl text-slate-300">
                Escaneaste un documento y las páginas salieron de lado o al reves? Este es uno de los problemas de escaneo más comunes. Aqui te mostramos como corregir la orientación al instante sin volver a escanear.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un escaneo rotado? Corrigelo en segundos.</p>
            </div>
            <Link href="/es/rotar-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Rotar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los PDFs Escaneados Salen Rotados?</h2>
              <p className="text-slate-600 mb-4">Entender por qué los escaneos se rotan te ayuda a prevenirlo en el futuro — y corregirlo más rápido cuando sucede:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Papel colocado en ángulo incorrecto.</strong> Los escáneres de cama plana escanean desde una esquina fija. Si colocas el documento con un desfase de 90° o 180°, el escaneo sale rotado. La mayoría de las personas no lo notan hasta que abren el PDF después.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Orientación del alimentador automático (ADF).</strong> Al alimentar páginas por un ADF, el escáner espera una orientación específica. Si cargas las páginas de forma incorrecta, cada página sale de lado — y puede que no lo descubras hasta que todo el lote este escaneado.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>Documentos horizontales escaneados como verticales.</strong> Hojas de cálculo, certificados y documentos con orientación horizontal colocados en un escáner vertical producen escaneos de lado. El escáner no auto-detecta la orientación horizontal.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Escaneo con camara del teléfono.</strong> Usar tu teléfono para escanear documentos puede producir resultados rotados dependiendo de como sostenias el dispositivo. <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> ayuda con la calidad de imagen, pero la rotación puede necesitar una corrección manual.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Lotes con orientación mixta.</strong> Cuando escaneas una pila de documentos que incluye páginas tanto verticales como horizontales, algunas páginas inevitablemente estaran rotadas respecto a otras.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Corregir un Escaneo Rotado (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube el PDF escaneado", desc: "Ve a la herramienta Rotar PDF y sube tu documento escaneado. Arrastalo al area de carga o haz clic para buscar. Archivos de hasta 25MB son gratis — los usuarios Pro obtienen hasta 200MB para lotes de escaneo grandes." },
                  { title: "Identifica y seleccióna las páginas rotadas", desc: "La herramienta muestra miniaturas de páginas para que puedas ver cuales están rotadas. Selecciona las páginas que necesitan corrección — puedes selecciónar todas las páginas a la vez o elegir individualmente. Luego elige el ángulo de rotación: 90° en sentido horario, 90° en sentido antihorario o 180°." },
                  { title: "Descarga el PDF corregido", desc: "Haz clic en Rotar y descarga el documento corregido. Cada página ahora se muestra en la orientación correcta. Si necesitas ejecutar OCR en el escaneo, hazlo como siguiente paso — el OCR funciona mejor en páginas correctamente orientadas." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Horizontal vs. Vertical: Errores Comunes de Escaneo</h2>
              <p className="text-slate-600 mb-4">El desajuste horizontal-vertical es la razon número uno por la que los PDFs escaneados terminan rotados. Asi puedes manejar diferentes escenarios:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documento Horizontal en un Escáner Vertical</h3>
                  <p className="text-slate-600">Este es el caso más común. Un certificado, hoja de cálculo o tabla ancha colocada en un escáner vertical estándar produce un escaneo rotado 90°. La corrección es simple: seleccióna las páginas y rota 90° en sentido horario o antihorario (prueba una dirección — si empeora, deshaz e intenta la otra).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Páginas Mixtas Verticales y Horizontales</h3>
                  <p className="text-slate-600">Cuando un documento tiene tanto páginas de texto vertical como gráficos horizontales, necesitas rotarlos por separado. En PDF.it, seleccióna solo las páginas horizontales, rotalas y descarga. Las páginas verticales permanecen sin tocar. Si necesitas reorganizar de forma más compleja, <Link href="/es/dividir-pdf" className="text-[#14D8C4] hover:underline">divide el documento</Link> primero.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Lote Completo Escaneado Incorrectamente</h3>
                  <p className="text-slate-600">Si cada página en un lote de escaneo esta rotada de la misma forma, seleccióna todas las páginas y aplica una sola rotación. Esta es la corrección más rápida — un clic corrige el documento completo.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Deberias Rotar Antes de Ejecutar OCR</h2>
              <p className="text-slate-600 mb-4">Si planeas hacer tu PDF escaneado buscable con reconocimiento optico de caracteres, el orden de operaciones importa:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rota primero, OCR después.</strong> Los motores de OCR analizan el texto línea por línea, esperando texto horizontal. El texto de lado o al reves produce resultados confusos con altas tasas de error.</li>
                <li>&#10003; <strong>Corrige la orientación completamente.</strong> Asegurate de que cada página este derecha antes de ejecutar <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link>. Incluso una sola página rotada producira texto inutilizable para esa página.</li>
                <li>&#10003; <strong>Limpia los escaneos de teléfono.</strong> Si el escaneo vino de una camara de teléfono, usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> para mejorar el contraste y eliminar sombras antes de ejecutar OCR. Mejor calidad de entrada significa mejor precisión de OCR.</li>
                <li>&#10003; <strong>Verifica la salida del OCR.</strong> Después de ejecutar OCR, intenta selecciónar y copiar texto del PDF para verificar que el reconocimiento funciono correctamente. Si no funciono, la orientación de la página podría seguir ligeramente incorrecta.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">El Flujo de Trabajo Completo para Documentos Escaneados</h2>
              <p className="text-slate-600 mb-4">Para los mejores resultados con documentos escaneados, sigue este orden de operaciones:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">1.</span><span><strong>Rotar</strong> — Corrige cualquier página que este de lado o al reves usando <Link href="/es/rotar-pdf" className="text-[#14D8C4] hover:underline">Rotar PDF</Link>.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">2.</span><span><strong>Limpiar</strong> — Si fue escaneado con un teléfono, usa <Link href="/es/limpiar-escaneo" className="text-[#14D8C4] hover:underline">Limpieza de Escaneo de Teléfono</Link> para mejorar el contraste y eliminar sombras.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">3.</span><span><strong>OCR</strong> — Ejecuta <Link href="/es/escaner-ocr" className="text-[#14D8C4] hover:underline">Escáner OCR</Link> para hacer el texto buscable y copiable.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">4.</span><span><strong>Comprimir</strong> — Usa <Link href="/es/comprimir-pdf" className="text-[#14D8C4] hover:underline">Comprimir PDF</Link> para reducir el tamaño del archivo para compartir o subir.</span></li>
                <li className="flex items-start gap-3"><span className="text-[#14D8C4] font-bold mt-0.5">5.</span><span><strong>Aplanar</strong> — Usa <Link href="/es/aplanar-pdf" className="text-[#14D8C4] hover:underline">Aplanar PDF</Link> para finalizar el documento y hacerlo compatible con todos los portales de envio.</span></li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Corregir Tu PDF Escaneado?</h2>
            <p className="text-slate-300 mb-6">Sube tu escaneo y corrige la orientación en segundos — gratis, sin registro.</p>
            <Link href="/es/rotar-pdf" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">
              <RotateCw className="h-5 w-5" /> Rotar PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artículos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF Online (90°, 180° o Personalizado)", href: "/es/aprender/como-rotar-pdf" },
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Arreglar un PDF al Reves (Rotar 180° al Instante)", href: "/es/aprender/arreglar-pdf-al-reves" },
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
                { q: "Como roto un PDF escaneado?", a: "Sube el PDF escaneado a la herramienta Rotar PDF de PDF.it, seleccióna las páginas que están rotadas incorrectamente, elige el ángulo correcto (90° o 180°) y descarga el archivo corregido. No se necesita instalar software." },
                { q: "Por qué mi PDF escaneado salio de lado?", a: "Los escáneres no siempre detectan correctamente la orientación de la página. Si el documento se coloco en el ángulo incorrecto en la cama del escáner, o si el alimentador automático de documentos jalo la página de lado, el escaneo estara rotado." },
                { q: "Debo rotar antes o después de ejecutar OCR?", a: "Siempre rota primero, luego ejecuta OCR. El reconocimiento optico de caracteres funciona mucho mejor cuando el texto esta orientado correctamente. El texto de lado o al reves produce resultados de OCR pobres con muchos errores." },
                { q: "Rotar un PDF escaneado reducira la calidad de imagen?", a: "No. La rotación solo cambia los metadatos de orientación de la página. Los datos de imagen escaneada permanecen intactos en su resolución y calidad original." },
                { q: "Puedo corregir múltiples páginas escaneadas a la vez?", a: "Si. Puedes selecciónar todas las páginas que necesitan rotación y aplicar el mismo ángulo a todas a la vez. Si diferentes páginas necesitan diferentes rotaciones, puedes aplicarlas en lotes separados." },
                { q: "Como evito que los PDFs escaneados salgan rotados?", a: "Coloca los documentos rectos en la cama del escáner, alineados con los bordes. Usa las marcas de alineacion impresas en la mayoría de los escáneres. Para alimentadores automáticos de documentos, asegurate de que las páginas esten apiladas ordenadamente y las guias de papel esten ajustadas contra los bordes." },
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
