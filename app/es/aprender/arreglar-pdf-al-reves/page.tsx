import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { RotateCw, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Arreglar un PDF al Reves (Rotar 180° al Instante) | OmnisPDF",
  description:
    "Aprende como arreglar un PDF al reves rotandolo 180°. Comun con documentos escaneados — corrige la orientacion al instante en linea, sin software.",
  keywords: "arreglar pdf al reves, pdf invertido, rotar pdf 180, voltear pdf",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como arreglo un PDF al reves?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sube el PDF a la herramienta Rotar PDF de OmnisPDF, selecciona las paginas al reves, elige rotacion de 180° y descarga el archivo corregido. La correccion toma segundos y es gratis para archivos de hasta 25MB." }
    },
    {
      "@type": "Question",
      "name": "Por que mi PDF esta al reves?",
      "acceptedAnswer": { "@type": "Answer", "text": "Esto generalmente sucede cuando un documento se coloca boca abajo o en el angulo incorrecto en un escaner. Tambien puede ocurrir con el escaneo a doble cara cuando las paginas traseras se voltean, o cuando el software de exportacion de PDF tiene un error de rotacion." }
    },
    {
      "@type": "Question",
      "name": "Puedo arreglar solo las paginas al reves sin afectar el resto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. OmnisPDF te permite seleccionar paginas individuales para rotar. Puedes corregir solo las paginas al reves mientras dejas las paginas correctamente orientadas sin tocar." }
    },
    {
      "@type": "Question",
      "name": "Arreglar la rotacion afectara la calidad del PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. Rotar un PDF solo cambia los metadatos de orientacion — no re-renderiza, comprime ni modifica el contenido real. El texto, las imagenes y el formato permanecen identicos." }
    },
    {
      "@type": "Question",
      "name": "Puedo arreglar un PDF al reves en mi telefono?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si. OmnisPDF funciona en cualquier navegador movil. Abre omnispdf.com/rotate-pdf en Safari o Chrome, sube el PDF, rota 180° y descarga la version corregida directamente en tu telefono." }
    },
    {
      "@type": "Question",
      "name": "Como se si mi PDF esta al reves o solo de lado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si el texto se lee de abajo hacia arriba (completamente invertido), esta al reves y necesita una rotacion de 180°. Si el texto se lee de lado, esta de costado y necesita una rotacion de 90°. La vista previa de OmnisPDF te muestra la orientacion actual antes de aplicar la correccion." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Arreglar un PDF al Reves",
  "description": "Rota un PDF al reves 180° en 3 simples pasos usando OmnisPDF.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Sube el PDF al reves",
      "text": "Ve a la herramienta Rotar PDF de OmnisPDF y sube el archivo con paginas al reves haciendo clic o arrastrandolo al area de carga."
    },
    {
      "@type": "HowToStep",
      "name": "Selecciona rotacion de 180°",
      "text": "Selecciona las paginas al reves (o todas las paginas si el documento completo esta invertido) y elige rotacion de 180° para voltearlas correctamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga el PDF corregido",
      "text": "Haz clic en Rotar y descarga el PDF corregido. Todas las paginas ahora se muestran correctamente en cualquier visor de PDF."
    }
  ]
}

export default function ArreglarPDFAlRevesPage() {
  return (
    <div className="min-h-screen bg-white">
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Rotar PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Arreglar un PDF al Reves (Rotar 180° al Instante)</h1>
              <p className="text-xl text-slate-300">
                Abriste un PDF y la pagina completa esta al reves? Este es uno de los problemas de escaneo mas comunes. Aqui te mostramos como voltearlo correctamente en segundos.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <RotateCw className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Necesitas una solucion rapida? Salta la guia y voltea tu PDF ahora.</p>
            </div>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
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
                Un PDF al reves es frustrante, pero es mas comun de lo que piensas. Estas son las causas principales:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Documento colocado al reves en el escaner.</strong> La causa mas comun. Cuando pones una pagina boca abajo en un escaner de cama plana con la orientacion incorrecta, el escaneo sale invertido. Esto sucede constantemente en oficinas ocupadas.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Errores de escaneo a doble cara.</strong> Los alimentadores automaticos de documentos (ADF) en impresoras de oficina pueden voltear el lado trasero de las paginas incorrectamente, resultando en paginas alternadas entre correctas y al reves.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Orientacion de camara del telefono.</strong> Tomar una foto de un documento mientras sostienes tu telefono al reves (o en un angulo de 180°) produce una imagen invertida. Incluso <Link href="/es/limpieza-escaneo-telefono" className="text-orange-600 hover:underline">Limpieza de Escaneo de Telefono</Link> no siempre puede detectar esto automaticamente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Errores de exportacion de software.</strong> Algunas herramientas de creacion de PDF ocasionalmente aplican metadatos de rotacion incorrectos, causando que las paginas se muestren al reves aunque el contenido fue creado correctamente.</span>
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Arreglar un PDF al Reves (Paso a Paso)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube el PDF",
                    desc: "Ve a la herramienta Rotar PDF y sube el archivo con paginas al reves. Arrastalo al area de carga o haz clic para buscar. Gratis para archivos de hasta 25MB — los usuarios Pro obtienen hasta 200MB.",
                  },
                  {
                    title: "Selecciona rotacion de 180°",
                    desc: "Si el documento completo esta al reves, selecciona todas las paginas y elige rotacion de 180°. Si solo algunas paginas estan invertidas (comun con escaneos a doble cara), selecciona solo esas paginas. La vista previa te ayuda a identificar que paginas necesitan correccion.",
                  },
                  {
                    title: "Descarga el PDF corregido",
                    desc: "Haz clic en Rotar y descarga el documento corregido. Abrelo en cualquier visor de PDF para confirmar que cada pagina esta correcta. La correccion es permanente — cada visor e impresora mostrara las paginas correctamente.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Al Reves vs. De Lado: Que Rotacion Necesitas?</h2>
              <p className="text-slate-600 mb-4">
                Antes de rotar, necesitas identificar que tipo de problema de rotacion tiene tu PDF. Asi puedes determinarlo:
              </p>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Al Reves (Necesita Rotacion de 180°)</h3>
                  <p className="text-slate-600">
                    El texto aparece completamente invertido — necesitarias voltear tu monitor al reves para leerlo. La parte superior de la pagina esta en la parte inferior. Este es el caso cubierto en esta guia. Aplica una rotacion de 180° para corregirlo.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">De Lado a la Izquierda (Necesita Rotacion de 90° en Sentido Horario)</h3>
                  <p className="text-slate-600">
                    El texto va de abajo hacia arriba a lo largo del lado izquierdo de la pagina. Necesitarias inclinar tu cabeza a la derecha para leerlo. Aplica una rotacion de 90° en sentido horario. Consulta nuestra guia completa sobre <Link href="/es/aprender/como-rotar-pdf" className="text-orange-600 hover:underline">como rotar un PDF</Link>.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">De Lado a la Derecha (Necesita Rotacion de 90° en Sentido Antihorario)</h3>
                  <p className="text-slate-600">
                    El texto va de arriba hacia abajo a lo largo del lado derecho de la pagina. Necesitarias inclinar tu cabeza a la izquierda para leerlo. Aplica una rotacion de 90° en sentido antihorario (270°).
                  </p>
                </div>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Corregir Problemas de Escaneo a Doble Cara</h2>
              <p className="text-slate-600 mb-4">
                Uno de los escenarios mas molestos es cuando un escaneo a doble cara produce orientaciones alternadas — las paginas impares estan correctas pero las pares estan al reves, o viceversa. Asi puedes manejarlo:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Selecciona solo las paginas al reves.</strong> En OmnisPDF, puedes hacer clic en las miniaturas de paginas individuales para seleccionar solo las paginas invertidas. Luego aplica rotacion de 180° solo a esas paginas.</li>
                <li>&#10003; <strong>Verifica el patron.</strong> Con escaneres ADF, el problema generalmente es consistente — cada otra pagina esta volteada. Selecciona todas las paginas pares (o todas las impares, las que esten mal) y rotalas juntas.</li>
                <li>&#10003; <strong>Re-escanea si es posible.</strong> Si tienes acceso a los documentos originales y al escaner, puede ser mas rapido re-escanear con la configuracion duplex correcta. Pero si los originales no estan disponibles, OmnisPDF lo corrige al instante.</li>
                <li>&#10003; <strong>Ejecuta OCR despues de corregir.</strong> Si el documento escaneado necesita texto buscable, corrige la rotacion primero, luego usa <Link href="/es/escaner-ocr" className="text-orange-600 hover:underline">Escaner OCR</Link>. El OCR funciona mucho mejor cuando las paginas estan correctamente orientadas.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Siguientes Pasos Despues de Corregir Tu PDF</h2>
              <p className="text-slate-600 mb-4">
                Una vez que tus paginas estan correctas, puedes tomar pasos adicionales para preparar el documento:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Comprime el archivo.</strong> Los PDFs escaneados suelen ser innecesariamente grandes. Usa <Link href="/es/comprimir-pdf" className="text-orange-600 hover:underline">Comprimir PDF</Link> para reducir el tamano — especialmente util si necesitas enviarlo por correo electronico o subirlo a un portal con limites de tamano.</li>
                <li>&#10003; <strong>Extrae paginas especificas.</strong> Si solo necesitas ciertas paginas del documento, usa <Link href="/es/dividir-pdf" className="text-orange-600 hover:underline">Dividir PDF</Link> para extraerlas en un archivo separado.</li>
                <li>&#10003; <strong>Une con otros documentos.</strong> Necesitas combinar este PDF corregido con otros archivos? Usa <Link href="/es/unir-pdf" className="text-orange-600 hover:underline">Unir PDF</Link> para crear un solo documento.</li>
                <li>&#10003; <strong>Hazlo listo para enviar.</strong> Para envios a gobiernos o instituciones, usa <Link href="/es/pdf-listo-para-subir" className="text-orange-600 hover:underline">PDF Listo para Subir</Link> para aplanar y optimizar el archivo en un solo paso.</li>
                <li>&#10003; <strong>Agrega proteccion con contrasena.</strong> Si el documento contiene informacion sensible, usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para agregar una contrasena antes de compartir.</li>
              </ul>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Listo para Arreglar Tu PDF al Reves?</h2>
            <p className="text-slate-300 mb-6">Sube tu archivo y voltealo correctamente en segundos — gratis, sin registro.</p>
            <Link
              href="/es/rotar-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <RotateCw className="h-5 w-5" /> Arreglar PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Rotar un PDF Online (90°, 180° o Personalizado)", href: "/es/aprender/como-rotar-pdf" },
                { title: "Como Rotar un PDF en iPhone (Sin App)", href: "/es/aprender/rotar-pdf-en-iphone" },
                { title: "Rotar un PDF Escaneado (Corregir Orientacion Despues de Escanear)", href: "/es/aprender/rotar-pdf-escaneado" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como arreglo un PDF al reves?", a: "Sube el PDF a la herramienta Rotar PDF de OmnisPDF, selecciona las paginas al reves, elige rotacion de 180° y descarga el archivo corregido. La correccion toma segundos y es gratis para archivos de hasta 25MB." },
                { q: "Por que mi PDF esta al reves?", a: "Esto generalmente sucede cuando un documento se coloca boca abajo o en el angulo incorrecto en un escaner. Tambien puede ocurrir con el escaneo a doble cara cuando las paginas traseras se voltean, o cuando el software de exportacion de PDF tiene un error de rotacion." },
                { q: "Puedo arreglar solo las paginas al reves sin afectar el resto?", a: "Si. OmnisPDF te permite seleccionar paginas individuales para rotar. Puedes corregir solo las paginas al reves mientras dejas las paginas correctamente orientadas sin tocar." },
                { q: "Arreglar la rotacion afectara la calidad del PDF?", a: "No. Rotar un PDF solo cambia los metadatos de orientacion — no re-renderiza, comprime ni modifica el contenido real. El texto, las imagenes y el formato permanecen identicos." },
                { q: "Puedo arreglar un PDF al reves en mi telefono?", a: "Si. OmnisPDF funciona en cualquier navegador movil. Abre omnispdf.com/rotate-pdf en Safari o Chrome, sube el PDF, rota 180° y descarga la version corregida directamente en tu telefono." },
                { q: "Como se si mi PDF esta al reves o solo de lado?", a: "Si el texto se lee de abajo hacia arriba (completamente invertido), esta al reves y necesita una rotacion de 180°. Si el texto se lee de lado, esta de costado y necesita una rotacion de 90°. La vista previa de OmnisPDF te muestra la orientacion actual antes de aplicar la correccion." },
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
