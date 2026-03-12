import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Rotar un PDF Escaneado (Corregir Orientacion Despues de Escanear) | OmnisPDF",
  description:
    "Aprende como corregir un PDF escaneado que salio rotado o de lado. Corrige problemas de orientacion horizontal vs vertical despues de escanear — herramienta online gratis.",
  keywords: "rotar pdf escaneado, pdf escaneado de lado, corregir orientacion documento escaneado, rotar paginas escaneadas",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como roto un PDF escaneado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube el PDF escaneado a la herramienta Rotar PDF de OmnisPDF, selecciona las paginas que estan rotadas incorrectamente, elige el angulo correcto (90° o 180°) y descarga el archivo corregido. No se necesita instalar software." }
    },
    {
      "@type": "Question",
      "name": "Por que mi PDF escaneado salio de lado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Los escaneres no siempre detectan correctamente la orientacion de la pagina. Si el documento se coloco en el angulo incorrecto en la cama del escaner, o si el alimentador automatico de documentos jalo la pagina de lado, el escaneo estara rotado." }
    },
    {
      "@type": "Question",
      "name": "Debo rotar antes o despues de ejecutar OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Siempre rota primero, luego ejecuta OCR. El reconocimiento optico de caracteres funciona mucho mejor cuando el texto esta orientado correctamente. El texto de lado o al reves produce resultados de OCR pobres con muchos errores." }
    },
    {
      "@type": "Question",
      "name": "Rotar un PDF escaneado reducira la calidad de imagen?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. La rotacion solo cambia los metadatos de orientacion de la pagina. Los datos de imagen escaneada permanecen intactos en su resolucion y calidad original." }
    },
    {
      "@type": "Question",
      "name": "Puedo corregir multiples paginas escaneadas a la vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. Puedes seleccionar todas las paginas que necesitan rotacion y aplicar el mismo angulo a todas a la vez. Si diferentes paginas necesitan diferentes rotaciones, puedes aplicarlas en lotes separados." }
    },
    {
      "@type": "Question",
      "name": "Como evito que los PDFs escaneados salgan rotados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Coloca los documentos rectos en la cama del escaner, alineados con los bordes. Usa las marcas de alineacion impresas en la mayoria de los escaneres. Para alimentadores automaticos de documentos, asegurate de que las paginas esten apiladas ordenadamente y las guias de papel esten ajustadas contra los bordes." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Rotar un PDF Escaneado",
  "description": "Corrige la orientacion de un PDF escaneado en 3 simples pasos usando OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube el PDF escaneado",
      "text": "Ve a la herramienta Rotar PDF de OmnisPDF y sube el documento escaneado haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona las paginas rotadas y corrige el angulo",
      "text": "Identifica que paginas estan rotadas incorrectamente usando la vista previa. Selecciona esas paginas y elige el angulo de rotacion necesario — 90° en sentido horario, 90° en sentido antihorario o 180°."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el escaneo corregido",
      "text": "Haz clic en Rotar y descarga tu documento corregido. Las paginas escaneadas ahora se muestran en la orientacion correcta."
    }
  ]
}

export default function RotarPDFEscaneadoPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Rotar un PDF Escaneado (Corregir Orientacion Despues de Escanear)</h1>
              <p className="text-xl text-slate-300">
                Escaneaste un documento y las paginas salieron de lado o al reves? Este es uno de los problemas de escaneo mas comunes. Aqui te mostramos como corregir la orientacion al instante sin volver a escanear.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un escaneo rotado? Corrigelo en segundos.</p>
            </div>
            <Link href="/es/rotar-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">
              Rotar PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que los PDFs Escaneados Salen Rotados?</h2>
              <p className="text-slate-600 mb-4">Entender por que los escaneos se rotan te ayuda a prevenirlo en el futuro — y corregirlo mas rapido cuando sucede:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Papel colocado en angulo incorrecto.</strong> Los escaneres de cama plana escanean desde una esquina fija. Si colocas el documento con un desfase de 90° o 180°, el escaneo sale rotado. La mayoria de las personas no lo notan hasta que abren el PDF despues.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Orientacion del alimentador automatico (ADF).</strong> Al alimentar paginas por un ADF, el escaner espera una orientacion especifica. Si cargas las paginas de forma incorrecta, cada pagina sale de lado — y puede que no lo descubras hasta que todo el lote este escaneado.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Documentos horizontales escaneados como verticales.</strong> Hojas de calculo, certificados y documentos con orientacion horizontal colocados en un escaner vertical producen escaneos de lado. El escaner no auto-detecta la orientacion horizontal.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Escaneo con camara del telefono.</strong> Usar tu telefono para escanear documentos puede producir resultados rotados dependiendo de como sostenias el dispositivo. <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> ayuda con la calidad de imagen, pero la rotacion puede necesitar una correccion manual.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Lotes con orientacion mixta.</strong> Cuando escaneas una pila de documentos que incluye paginas tanto verticales como horizontales, algunas paginas inevitablemente estaran rotadas respecto a otras.</span></li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Corregir un Escaneo Rotado (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  { title: "Sube el PDF escaneado", desc: "Ve a la herramienta Rotar PDF y sube tu documento escaneado. Arrastalo al area de carga o haz clic para buscar. Archivos de hasta 25MB son gratis — los usuarios Pro obtienen hasta 200MB para lotes de escaneo grandes." },
                  { title: "Identifica y selecciona las paginas rotadas", desc: "La herramienta muestra miniaturas de paginas para que puedas ver cuales estan rotadas. Selecciona las paginas que necesitan correccion — puedes seleccionar todas las paginas a la vez o elegir individualmente. Luego elige el angulo de rotacion: 90° en sentido horario, 90° en sentido antihorario o 180°." },
                  { title: "Descarga el PDF corregido", desc: "Haz clic en Rotar y descarga el documento corregido. Cada pagina ahora se muestra en la orientacion correcta. Si necesitas ejecutar OCR en el escaneo, hazlo como siguiente paso — el OCR funciona mejor en paginas correctamente orientadas." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Horizontal vs. Vertical: Errores Comunes de Escaneo</h2>
              <p className="text-slate-600 mb-4">El desajuste horizontal-vertical es la razon numero uno por la que los PDFs escaneados terminan rotados. Asi puedes manejar diferentes escenarios:</p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Documento Horizontal en un Escaner Vertical</h3>
                  <p className="text-slate-600">Este es el caso mas comun. Un certificado, hoja de calculo o tabla ancha colocada en un escaner vertical estandar produce un escaneo rotado 90°. La correccion es simple: selecciona las paginas y rota 90° en sentido horario o antihorario (prueba una direccion — si empeora, deshaz e intenta la otra).</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Paginas Mixtas Verticales y Horizontales</h3>
                  <p className="text-slate-600">Cuando un documento tiene tanto paginas de texto vertical como graficos horizontales, necesitas rotarlos por separado. En OmnisPDF, selecciona solo las paginas horizontales, rotalas y descarga. Las paginas verticales permanecen sin tocar. Si necesitas reorganizar de forma mas compleja, <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">divide el documento</Link> primero.</p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Lote Completo Escaneado Incorrectamente</h3>
                  <p className="text-slate-600">Si cada pagina en un lote de escaneo esta rotada de la misma forma, selecciona todas las paginas y aplica una sola rotacion. Esta es la correccion mas rapida — un clic corrige el documento completo.</p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Deberias Rotar Antes de Ejecutar OCR</h2>
              <p className="text-slate-600 mb-4">Si planeas hacer tu PDF escaneado buscable con reconocimiento optico de caracteres, el orden de operaciones importa:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Rota primero, OCR despues.</strong> Los motores de OCR analizan el texto linea por linea, esperando texto horizontal. El texto de lado o al reves produce resultados confusos con altas tasas de error.</li>
                <li>&#10003; <strong>Corrige la orientacion completamente.</strong> Asegurate de que cada pagina este derecha antes de ejecutar <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escaner OCR</Link>. Incluso una sola pagina rotada producira texto inutilizable para esa pagina.</li>
                <li>&#10003; <strong>Limpia los escaneos de telefono.</strong> Si el escaneo vino de una camara de telefono, usa <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> para mejorar el contraste y eliminar sombras antes de ejecutar OCR. Mejor calidad de entrada significa mejor precision de OCR.</li>
                <li>&#10003; <strong>Verifica la salida del OCR.</strong> Despues de ejecutar OCR, intenta seleccionar y copiar texto del PDF para verificar que el reconocimiento funciono correctamente. Si no funciono, la orientacion de la pagina podria seguir ligeramente incorrecta.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">El Flujo de Trabajo Completo para Documentos Escaneados</h2>
              <p className="text-slate-600 mb-4">Para los mejores resultados con documentos escaneados, sigue este orden de operaciones:</p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Rotar</strong> — Corrige cualquier pagina que este de lado o al reves usando <Link href="/es/rotar-pdf" className="text-orange-600 hover:underline">Rotar PDF</Link>.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Limpiar</strong> — Si fue escaneado con un telefono, usa <Link href="/es/limpiar-escaneo" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> para mejorar el contraste y eliminar sombras.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>OCR</strong> — Ejecuta <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escaner OCR</Link> para hacer el texto buscable y copiable.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Comprimir</strong> — Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano del archivo para compartir o subir.</span></li>
                <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">5.</span><span><strong>Aplanar</strong> — Usa <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> para finalizar el documento y hacerlo compatible con todos los portales de envio.</span></li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Corregir Tu PDF Escaneado?</h2>
            <p className="text-slate-300 mb-6">Sube tu escaneo y corrige la orientacion en segundos — gratis, sin registro.</p>
            <Link href="/es/rotar-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors">
              <RotateCw className="h-5 w-5" /> Rotar PDF Ahora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF Online (90°, 180° o Personalizado)", href: "/es/aprender/como-rotar-pdf" },
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Arreglar un PDF al Reves (Rotar 180° al Instante)", href: "/es/aprender/arreglar-pdf-al-reves" },
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
                { q: "Como roto un PDF escaneado?", a: "Sube el PDF escaneado a la herramienta Rotar PDF de OmnisPDF, selecciona las paginas que estan rotadas incorrectamente, elige el angulo correcto (90° o 180°) y descarga el archivo corregido. No se necesita instalar software." },
                { q: "Por que mi PDF escaneado salio de lado?", a: "Los escaneres no siempre detectan correctamente la orientacion de la pagina. Si el documento se coloco en el angulo incorrecto en la cama del escaner, o si el alimentador automatico de documentos jalo la pagina de lado, el escaneo estara rotado." },
                { q: "Debo rotar antes o despues de ejecutar OCR?", a: "Siempre rota primero, luego ejecuta OCR. El reconocimiento optico de caracteres funciona mucho mejor cuando el texto esta orientado correctamente. El texto de lado o al reves produce resultados de OCR pobres con muchos errores." },
                { q: "Rotar un PDF escaneado reducira la calidad de imagen?", a: "No. La rotacion solo cambia los metadatos de orientacion de la pagina. Los datos de imagen escaneada permanecen intactos en su resolucion y calidad original." },
                { q: "Puedo corregir multiples paginas escaneadas a la vez?", a: "Si. Puedes seleccionar todas las paginas que necesitan rotacion y aplicar el mismo angulo a todas a la vez. Si diferentes paginas necesitan diferentes rotaciones, puedes aplicarlas en lotes separados." },
                { q: "Como evito que los PDFs escaneados salgan rotados?", a: "Coloca los documentos rectos en la cama del escaner, alineados con los bordes. Usa las marcas de alineacion impresas en la mayoria de los escaneres. Para alimentadores automaticos de documentos, asegurate de que las paginas esten apiladas ordenadamente y las guias de papel esten ajustadas contra los bordes." },
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
