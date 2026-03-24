import Script from "next/script"
import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Olvidaste Tu Contrasena de PDF? Esto Es Lo Que Puedes Hacer | PDF.it",
  description:
    "Olvidaste la contrasena de tu PDF? Aprende la diferencia entre contrasenas de apertura y de permisos, y descubre tus opciones para recuperar acceso a PDF bloqueados.",
  keywords: "olvide contrasena pdf, recuperar contrasena pdf, no puedo abrir pdf, contrasena pdf perdida",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Puedo abrir un PDF si olvide la contrasena?",
      "acceptedAnswer": { "@type": "Answer", "text": "Depende del tipo de contrasena. Si el PDF tiene una contrasena de permisos (puedes verlo pero no editar/imprimir), PDF.it puede eliminar esas restricciones. Si tiene una contrasena de apertura (no puedes ver el archivo en absoluto), necesitaras recuperar o recordar la contrasena — no hay forma de eludir el cifrado fuerte." }
    },
    {
      "@type": "Question",
      "name": "Cual es la diferencia entre una contrasena de apertura y una de permisos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Una contrasena de apertura impide que veas el PDF por completo — ves un mensaje de contrasena cuando intentas abrirlo. Una contrasena de permisos te permite ver el PDF pero restringe acciones como imprimir, copiar y editar. Las contrasenas de permisos son mucho mas faciles de eliminar." }
    },
    {
      "@type": "Question",
      "name": "PDF.it puede descifrar una contrasena de apertura de PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "No. PDF.it no descifra ni usa fuerza bruta en contrasenas de apertura. El cifrado moderno de PDF (AES de 256 bits) es extremadamente fuerte y no puede ser eludido. PDF.it solo puede eliminar restricciones de permisos o desbloquear PDF cuando proporcionas la contrasena correcta." }
    },
    {
      "@type": "Question",
      "name": "Como puedo recuperar una contrasena de PDF olvidada?",
      "acceptedAnswer": { "@type": "Answer", "text": "Revisa tu correo electronico buscando el mensaje original que contenia la contrasena. Busca en las contrasenas guardadas de tu navegador. Prueba contrasenas comunes que uses. Verifica si la contrasena fue compartida en un chat o mensaje de texto. Si el PDF es de una organizacion, contactalos para obtener la contrasena." }
    },
    {
      "@type": "Question",
      "name": "Puedo eliminar restricciones de permisos sin contrasena?",
      "acceptedAnswer": { "@type": "Answer", "text": "Si, en muchos casos. Si puedes abrir y ver el PDF (sin contrasena de apertura), PDF.it puede eliminar las restricciones de permisos como bloqueos de impresion, copia y edicion sin necesitar la contrasena del propietario." }
    },
    {
      "@type": "Question",
      "name": "Como evito perder mi contrasena de PDF en el futuro?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usa un gestor de contrasenas para almacenar contrasenas de PDF. Mantien un registro de que archivos estan protegidos con contrasena y que contrasenas usaste. Considera usar restricciones de permisos en lugar de contrasenas de apertura cuando solo necesites controlar la edicion e impresion." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Que Hacer Cuando Olvidas una Contrasena de PDF",
  "description": "Pasos para recuperar acceso a un PDF protegido con contrasena usando PDF.it.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Determina el tipo de contrasena",
      "text": "Intenta abrir el PDF. Si puedes verlo pero no puedes imprimir, copiar o editar, tiene una contrasena de permisos. Si no puedes abrirlo en absoluto, tiene una contrasena de apertura."
    },
    {
      "@type": "HowToStep",
      "name": "Sube a PDF.it",
      "text": "Ve a la herramienta Desbloquear PDF de PDF.it y sube el archivo. Para restricciones solo de permisos, PDF.it puede eliminarlas automaticamente."
    },
    {
      "@type": "HowToStep",
      "name": "Descarga o recupera la contrasena",
      "text": "Si las restricciones fueron eliminadas, descarga tu archivo desbloqueado. Si el PDF tiene una contrasena de apertura, intenta recuperarla de tu correo electronico, gestor de contrasenas o el remitente."
    }
  ]
}

export default function DesbloquearPDFContrasenaOlvidadaPage() {
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
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Olvidaste Tu Contrasena de PDF? Esto Es Lo Que Puedes Hacer</h1>
              <p className="text-xl text-slate-300">
                Bloqueado fuera de tu propio PDF? No te preocupes. Tus opciones dependen del tipo de contrasena que se configuro. Aqui tienes un desglose claro de lo que puedes (y no puedes) hacer.
              </p>
            </div>
          </div>
        </section>

        {/* CTA — Tool Link */}
        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Unlock className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Tienes un bloqueo solo de permisos? Eliminalo al instante.</p>
            </div>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Desbloquear PDF Ahora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        {/* Article Content */}
        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            {/* Dos tipos de contrasenas */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Los Dos Tipos de Contrasenas de PDF</h2>
              <p className="text-slate-600 mb-4">
                Antes de poder resolver el problema, necesitas entender que tipo de contrasena tiene tu PDF. Los PDF admiten dos tipos completamente diferentes de proteccion con contrasena:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Contrasena de apertura (contrasena de usuario).</strong> Esta contrasena es necesaria para abrir y ver el PDF. Cuando haces doble clic en el archivo, un cuadro de dialogo pide la contrasena antes de mostrar cualquier contenido. Sin esta contrasena, no puedes ver nada en el documento. Este es el tipo mas dificil de manejar si se olvida.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Contrasena de permisos (contrasena de propietario).</strong> Esta contrasena restringe acciones especificas — imprimir, copiar texto, editar o anotar — pero aun te permite ver el PDF. Puedes abrir el archivo y leerlo, pero ciertas funciones estan bloqueadas. Este tipo es mucho mas facil de manejar si se olvida.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Prueba rapida:</strong> Puedes abrir y leer el PDF? Si es asi, tienes una contrasena de permisos — y la herramienta <Link href="/es/desbloquear-pdf" className="text-orange-600 hover:underline">Desbloquear PDF</Link> de PDF.it puede eliminar esas restricciones sin necesitar la contrasena.
              </p>
            </section>

            {/* Contrasena de permisos */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Si Olvidaste la Contrasena de Permisos</h2>
              <p className="text-slate-600 mb-4">
                Buenas noticias — este es el escenario facil. Si puedes abrir y ver el PDF pero no puedes imprimir, copiar o editar, PDF.it puede eliminar esas restricciones:
              </p>
              <div className="space-y-4">
                {[
                  {
                    title: "Sube el PDF a PDF.it",
                    desc: "Ve a la herramienta Desbloquear PDF y sube tu archivo. Como puedes ver el PDF, no hay contrasena de apertura bloqueando el acceso.",
                  },
                  {
                    title: "PDF.it elimina las restricciones",
                    desc: "La herramienta detecta y elimina automaticamente las restricciones de permisos — no se necesita la contrasena del propietario. Esto funciona porque las contrasenas de permisos solo controlan lo que el software permite, no el cifrado real del contenido.",
                  },
                  {
                    title: "Descarga el PDF sin restricciones",
                    desc: "Tu archivo ahora esta completamente desbloqueado. Puedes imprimir, copiar texto, editar, anotar y hacer cualquier otra cosa que necesites. Si quieres, usa Proteger PDF para establecer una nueva contrasena que recordaras.",
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

            {/* Contrasena de apertura */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Si Olvidaste la Contrasena de Apertura</h2>
              <p className="text-slate-600 mb-4">
                Esta es la situacion mas dificil. Si no puedes abrir el PDF en absoluto, el archivo esta cifrado y necesitas la contrasena exacta para descifrarlo. Esto es lo que puedes intentar:
              </p>
              <ul className="space-y-3 text-slate-700">
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">1.</span>
                  <span><strong>Revisa tu correo electronico.</strong> Busca en tu bandeja de entrada el nombre del archivo PDF o palabras clave como &quot;contrasena&quot; o &quot;protegido.&quot; La contrasena a menudo se envia en un correo separado del documento.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">2.</span>
                  <span><strong>Revisa tu gestor de contrasenas.</strong> Si usas un gestor de contrasenas (1Password, LastPass, Bitwarden), busca entradas relacionadas con el PDF o el remitente.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">3.</span>
                  <span><strong>Prueba contrasenas comunes.</strong> Piensa en contrasenas que usas frecuentemente para documentos. Prueba tu nombre, fecha de nacimiento, nombre de empresa o contrasenas simples como &quot;1234&quot; o &quot;password.&quot;</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">4.</span>
                  <span><strong>Revisa chats y mensajes de texto.</strong> Si alguien te envio el PDF, busca en tu historial de WhatsApp, Slack, Teams o SMS la contrasena.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-orange-500 font-bold mt-0.5">5.</span>
                  <span><strong>Contacta al remitente.</strong> Si el PDF vino de un colega, cliente, banco o agencia gubernamental, pideles que reenvien la contrasena o proporcionen una version sin proteccion del documento.</span>
                </li>
              </ul>
              <p className="text-slate-600 mt-4">
                <strong>Importante:</strong> Ten cuidado con herramientas en linea que afirman &quot;descifrar&quot; contrasenas de PDF. Los PDF modernos usan cifrado AES de 256 bits, que es esencialmente indescifrable. Cualquier herramienta que afirme eludir esto es ineficaz contra contrasenas fuertes o potencialmente insegura.
              </p>
            </section>

            {/* Como prevenir */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Como Evitar Perder Contrasenas de PDF en el Futuro</h2>
              <p className="text-slate-600 mb-4">
                Si creas regularmente PDF protegidos con contrasena, aqui hay pasos practicos para evitar quedar bloqueado de tus propios archivos:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Usa un gestor de contrasenas.</strong> Almacena cada contrasena de PDF en tu gestor de contrasenas con una nota sobre a que archivo pertenece. Este es el metodo mas confiable.</li>
                <li>&#10003; <strong>Usa restricciones de permisos en lugar de contrasenas de apertura.</strong> Si solo necesitas prevenir la edicion o impresion (no la visualizacion), usa una contrasena de permisos via <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link>. Estas son mas faciles de eliminar si las olvidas.</li>
                <li>&#10003; <strong>Mantien una copia de respaldo sin proteccion.</strong> Antes de agregar una contrasena a un PDF, guarda una copia sin proteccion en un lugar seguro (carpeta cifrada, almacenamiento en la nube seguro).</li>
                <li>&#10003; <strong>Usa contrasenas consistentes.</strong> Para documentos no criticos, usa un formato de contrasena consistente que recordaras (pero nunca reutilices contrasenas de cuentas importantes).</li>
                <li>&#10003; <strong>Documenta tus contrasenas.</strong> Mantien una nota segura (digital o fisica, almacenada de forma segura) listando que archivos tienen contrasenas y cuales son.</li>
              </ul>
            </section>

            {/* Herramientas relacionadas */}
            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Herramientas de PDF.it para Gestionar la Seguridad de PDF</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Desbloquear PDF — Eliminar Restricciones</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/desbloquear-pdf" className="text-orange-600 hover:underline">Desbloquear PDF</Link> para eliminar restricciones de permisos (bloqueos de impresion, copia, edicion) de PDF. Funciona sin la contrasena del propietario para restricciones solo de permisos.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Proteger PDF — Agregar Tu Propia Contrasena</h3>
                  <p className="text-slate-600">
                    Usa <Link href="/es/proteger-pdf" className="text-orange-600 hover:underline">Proteger PDF</Link> para agregar una nueva contrasena a cualquier PDF. Establece contrasenas de apertura, restricciones de permisos o ambas. Elige exactamente que acciones permitir o bloquear.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Aplanar PDF — Fijar Contenido en Su Lugar</h3>
                  <p className="text-slate-600">
                    Si quieres prevenir la edicion sin usar contrasenas, <Link href="/es/aplanar-pdf" className="text-orange-600 hover:underline">Aplanar PDF</Link> fusiona permanentemente los campos de formulario, anotaciones y capas en la pagina. El contenido se convierte en parte del fondo — no hay contrasena que recordar.
                  </p>
                </div>
              </div>
            </section>

          </div>
        </article>

        {/* Tool CTA */}
        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Necesitas Eliminar Restricciones de PDF?</h2>
            <p className="text-slate-300 mb-6">Si tu PDF tiene restricciones de permisos (no una contrasena de apertura), PDF.it puede eliminarlas al instante — gratis, sin necesidad de registro.</p>
            <Link
              href="/es/desbloquear-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Unlock className="h-5 w-5" /> Desbloquear PDF Ahora
            </Link>
          </div>
        </section>

        {/* Related Articles */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Articulos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Desbloquear un PDF en Linea (Quitar Restricciones)", href: "/es/aprender/como-desbloquear-pdf" },
                { title: "Desbloquear un PDF para Imprimir (Quitar Restricciones de Impresion)", href: "/es/aprender/desbloquear-pdf-para-imprimir" },
                { title: "Desbloquear un PDF en Tu Telefono (iPhone y Android)", href: "/es/aprender/desbloquear-pdf-en-movil" },
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
                { q: "Puedo abrir un PDF si olvide la contrasena?", a: "Depende del tipo de contrasena. Si el PDF tiene una contrasena de permisos (puedes verlo pero no editar/imprimir), PDF.it puede eliminar esas restricciones. Si tiene una contrasena de apertura (no puedes ver el archivo en absoluto), necesitaras recuperar o recordar la contrasena — no hay forma de eludir el cifrado fuerte." },
                { q: "Cual es la diferencia entre una contrasena de apertura y una de permisos?", a: "Una contrasena de apertura impide que veas el PDF por completo — ves un mensaje de contrasena cuando intentas abrirlo. Una contrasena de permisos te permite ver el PDF pero restringe acciones como imprimir, copiar y editar. Las contrasenas de permisos son mucho mas faciles de eliminar." },
                { q: "PDF.it puede descifrar una contrasena de apertura de PDF?", a: "No. PDF.it no descifra ni usa fuerza bruta en contrasenas de apertura. El cifrado moderno de PDF (AES de 256 bits) es extremadamente fuerte y no puede ser eludido. PDF.it solo puede eliminar restricciones de permisos o desbloquear PDF cuando proporcionas la contrasena correcta." },
                { q: "Como puedo recuperar una contrasena de PDF olvidada?", a: "Revisa tu correo electronico buscando el mensaje original que contenia la contrasena. Busca en las contrasenas guardadas de tu navegador. Prueba contrasenas comunes que uses. Verifica si la contrasena fue compartida en un chat o mensaje de texto. Si el PDF es de una organizacion, contactalos para obtener la contrasena." },
                { q: "Puedo eliminar restricciones de permisos sin contrasena?", a: "Si, en muchos casos. Si puedes abrir y ver el PDF (sin contrasena de apertura), PDF.it puede eliminar las restricciones de permisos como bloqueos de impresion, copia y edicion sin necesitar la contrasena del propietario." },
                { q: "Como evito perder mi contrasena de PDF en el futuro?", a: "Usa un gestor de contrasenas para almacenar contrasenas de PDF. Mantien un registro de que archivos estan protegidos con contrasena y que contrasenas usaste. Considera usar restricciones de permisos en lugar de contrasenas de apertura cuando solo necesites controlar la edicion e impresion." },
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
