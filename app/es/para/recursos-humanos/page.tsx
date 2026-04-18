import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import type { Metadata } from "next"
import { Users, Shield, FileSignature, EyeOff, FileSpreadsheet, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Herramientas PDF para Equipos de RR.HH. — Firmar Ofertas, Redactar Datos Personales y Procesar Paquetes de Onboarding | PDF.it",
  description:
    "Herramientas PDF creadas para equipos de Recursos Humanos y People Ops. Firma electrónicamente cartas oferta, redacta datos personales de las solicitudes, une paquetes de onboarding y extrae datos de formularios a Excel. Los archivos se eliminan inmediatamente después de descargarlos.",
  keywords: [
    "herramientas PDF para RR.HH.",
    "herramientas PDF para onboarding de RR.HH.",
    "firma electrónica de cartas oferta",
    "redactar datos personales del solicitante en PDF",
    "extracción de datos de formularios PDF para RR.HH.",
    "automatización de documentos de RR.HH.",
    "PDF de paquete de onboarding del empleado",
    "herramientas PDF para formularios laborales",
    "herramientas PDF para alta de empleados",
    "herramientas PDF seguras para RR.HH.",
  ],
  openGraph: {
    title: "Herramientas PDF para Equipos de RR.HH. — Firmar Ofertas, Redactar Datos Personales y Procesar Paquetes de Onboarding | PDF.it",
    description:
      "Firma electrónicamente cartas oferta, redacta datos personales de las solicitudes, une paquetes de onboarding y extrae datos de formularios a Excel. Los archivos se eliminan inmediatamente.",
    url: "https://pdf.it.com/es/para/recursos-humanos",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Equipos de RR.HH." }],
    locale: "es_ES",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Herramientas PDF para Equipos de RR.HH. — Firmar Ofertas, Redactar Datos Personales y Procesar Paquetes de Onboarding",
    description:
      "Firma ofertas, redacta datos personales, une paquetes de onboarding y extrae datos de formularios. Los archivos se eliminan inmediatamente.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/es/para/recursos-humanos",
    languages: {
      en: "https://pdf.it.com/for/hr-teams",
      es: "https://pdf.it.com/es/para/recursos-humanos",
      pt: "https://pdf.it.com/br/para/equipes-rh",
    },
  },
}

const faqs = [
  {
    q: "¿Puedo firmar electrónicamente una carta oferta en PDF.it?",
    a: "Sí. Sube la carta oferta, agrega campos de firma y envíala al candidato. Las firmas son solo de sesión — nunca almacenamos bibliotecas reutilizables de firmas en el servidor, lo que mantiene los datos del candidato fuera de cualquier base de datos de proveedor.",
  },
  {
    q: "¿RR.HH. puede redactar datos personales del material del solicitante para una revisión a ciegas?",
    a: "Sí. Nuestra herramienta de redacción elimina de forma permanente nombres, direcciones, fotos y cualquier otra información identificable de los PDFs de los solicitantes. El contenido redactado se borra a nivel de objeto — no se cubre con una caja negra.",
  },
  {
    q: "¿PDF.it almacena los documentos de los empleados?",
    a: "No. Los archivos se procesan en tiempo real y se eliminan en cuanto descargas el resultado. Todas las transferencias están cifradas con SSL. Los formularios laborales, las cartas oferta y las evaluaciones de desempeño nunca se quedan en nuestros servidores.",
  },
  {
    q: "¿Puedo extraer datos de un montón de PDFs de onboarding?",
    a: "Sí. Usa la extracción inteligente para solicitar campos específicos — nombre legal, fecha de inicio, departamento, contacto de emergencia — y obtén una salida estructurada que puedes cargar en tu HRIS o en una hoja de cálculo de nuevos ingresos.",
  },
  {
    q: "¿Qué plan debería elegir un equipo de RR.HH.?",
    a: "El plan Business cubre la mayoría de los flujos de People Ops: redacción, firma electrónica, extracción inteligente, archivos de 1GB y conversiones ilimitadas. Enterprise es el plan adecuado para equipos de RR.HH. en organizaciones más grandes que ejecutan automatización de flujos en decenas de contrataciones por mes.",
  },
]

export default function ParaRecursosHumanosPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqs.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          }),
        }}
      />
      <HeaderEs />
      <main>
        {/* ── Hero ── */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <Users className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas PDF Creadas para RR.HH. y People Ops</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envía cartas oferta para firma, redacta datos personales para revisiones a ciegas, une paquetes de onboarding y extrae datos de formularios — sin instalar software. Los archivos se eliminan inmediatamente después de descargarlos.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/es/registro"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Comenzar prueba gratis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/es/precios"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver precios
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Dónde RR.HH. Pasa Más Tiempo del que Debería</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              La contratación, el onboarding y los eventos del ciclo de vida del empleado están llenos de PDFs que necesitan firmarse, redactarse, unirse o parsearse. PDF.it resuelve los seis problemas que más tiempo consumen en una semana de People Ops.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Cartas oferta sin firmar", desc: "Los ciclos de imprimir-firmar-escanear-enviar alargan el tiempo entre la oferta y la oferta aceptada. Los candidatos pierden interés cuando mover el papeleo toma días." },
                { title: "Datos personales en revisiones de solicitantes", desc: "Los procesos de revisión a ciegas necesitan que se eliminen nombres, fotos y detalles identificables — de forma permanente, no cubiertos con una figura." },
                { title: "Paquetes de onboarding en diez archivos", desc: "Formularios laborales, manual del empleado, depósito directo, contacto de emergencia, formularios de prestaciones — los nuevos ingresos reciben todo esto como archivos sueltos cuando deberían ser un solo paquete." },
                { title: "Formularios que tienen que volverse filas de hoja de cálculo", desc: "Cuando 40 nuevos ingresos entregan formularios en papel, convertir esa pila en una carga al HRIS es un trabajo manual pesado." },
                { title: "Documentos de empleados que deben mantenerse privados", desc: "Información de salario, datos personales, papeleo de incapacidad médica — esto no puede quedar en los servidores de un proveedor externo ni circular por canales no seguros." },
                { title: "Guías de prestaciones y manuales grandes", desc: "Los paquetes de prestaciones y los manuales del empleado tienen cientos de páginas. Exceden los límites de correo y entorpecen las cadenas de email de nuevos ingresos." },
              ].map((item) => (
                <div key={item.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-base font-bold text-slate-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── The Core Tools ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">Las Seis Herramientas que RR.HH. Usa Cada Semana</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Cada herramienta a continuación funciona en tu navegador. Sin instalaciones de escritorio, sin archivos cargados que queden en el servidor de un proveedor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSignature, title: "Firmar Cartas Oferta", desc: "Envía ofertas para firma en segundos. Firmas solo de sesión — nada persiste en nuestros servidores. Los candidatos firman en su navegador y tú recibes el PDF firmado.", href: "/es/firma-electronica", cta: "Enviar para firma" },
                { icon: EyeOff, title: "Redacción de PDF", desc: "Elimina de forma permanente nombres, fotos y detalles identificables del material de los solicitantes para revisiones a ciegas. Redacción a nivel de objeto — el contenido desaparece, no se cubre.", href: "/es/redaccion-pdf", cta: "Redactar un PDF" },
                { icon: Archive, title: "Unir Paquetes de Onboarding", desc: "Combina formularios laborales, manual del empleado y formularios de prestaciones en un solo PDF de onboarding. Los nuevos ingresos ven un archivo limpio en lugar de diez adjuntos.", href: "/es/unir-pdf", cta: "Unir documentos" },
                { icon: FileSpreadsheet, title: "Extracción Inteligente", desc: "Extrae campos específicos de pilas de formularios de onboarding — nombre, fecha de inicio, departamento, contacto de emergencia — y obtén datos estructurados listos para tu HRIS.", href: "/es/extraccion-inteligente", cta: "Extraer datos" },
                { icon: Lock, title: "Proteger con Contraseña", desc: "Encriptación AES-256 en evaluaciones de desempeño, cartas de salario y papeleo de terminación. Comparte PDFs sensibles sin preocuparte por adjuntos reenviados.", href: "/es/encriptar-pdf", cta: "Proteger un PDF" },
                { icon: FileSpreadsheet, title: "Comprimir Guías de Prestaciones", desc: "Reduce paquetes de prestaciones de 200 páginas para que entren en correos de bienvenida y no reboten por límites de tamaño de bandeja.", href: "/es/comprimir-pdf", cta: "Comprimir un PDF" },
              ].map((tool) => (
                <div
                  key={tool.title}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <div
                    className="rounded-[11px] p-6 h-full"
                    style={{
                      background: `
                        radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                        radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                        rgba(255, 255, 255, 0.07)
                      `,
                      backdropFilter: "blur(12px)",
                      WebkitBackdropFilter: "blur(12px)",
                      boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                    }}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <tool.icon className="h-6 w-6 text-[#14D8C4]" />
                      <h3 className="text-lg font-bold text-white">{tool.title}</h3>
                    </div>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">{tool.desc}</p>
                    <Link href={tool.href} className="inline-flex items-center text-sm font-semibold text-[#14D8C4] hover:text-[#2EE6D6]">
                      {tool.cta} <ArrowRight className="h-4 w-4 ml-1" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Workflows ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Cuatro Flujos de Trabajo Reales</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Estas son las secuencias que los equipos de RR.HH. y People Ops ejecutan en PDF.it durante la contratación, el onboarding y los eventos del ciclo de vida del empleado.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Enviar una carta oferta y recibirla firmada",
                  steps: [
                    "Abre /es/firma-electronica y sube la carta oferta.",
                    "Agrega campos de firma y fecha para el candidato.",
                    "Envía por enlace de correo. El candidato firma en su navegador.",
                    "Descarga el PDF firmado para el expediente del empleado. Las versiones original y firmada nunca persisten en nuestros servidores.",
                  ],
                },
                {
                  title: "Preparar una revisión a ciegas del material de solicitantes",
                  steps: [
                    "Sube el paquete de cada solicitante a /es/redaccion-pdf.",
                    "Redacta nombre, foto, nombres de escuelas y cualquier otro contenido identificable.",
                    "Descarga las versiones redactadas y entrégalas al panel de entrevistas.",
                  ],
                },
                {
                  title: "Armar un paquete de onboarding para nuevo ingreso",
                  steps: [
                    "Combina formularios laborales, manual del empleado, depósito directo y formularios de prestaciones en /es/unir-pdf.",
                    "Comprime el paquete unido en /es/comprimir-pdf para que entre en el correo de bienvenida.",
                    "Protégelo con contraseña si incluye información bancaria o de salario.",
                  ],
                },
                {
                  title: "Convertir una pila de formularios en papel en filas del HRIS",
                  steps: [
                    "Escanea los formularios de nuevo ingreso a 300 DPI.",
                    "Pásalos por /es/escaner-ocr para añadir una capa de texto.",
                    "Usa /es/extraccion-inteligente para solicitar nombre, fecha de inicio, departamento y contacto de emergencia como campos.",
                    "Descarga los datos estructurados y cárgalos a tu HRIS.",
                  ],
                },
              ].map((w) => (
                <div key={w.title} className="rounded-xl p-6 bg-white border border-slate-200">
                  <h3 className="text-lg font-bold text-slate-900 mb-4">{w.title}</h3>
                  <ol className="space-y-2">
                    {w.steps.map((step, i) => (
                      <li key={i} className="flex gap-3 text-sm text-slate-700">
                        <span className="flex-shrink-0 w-6 h-6 rounded-full bg-[#14D8C4]/15 text-[#0B9B8B] font-bold text-xs flex items-center justify-center">{i + 1}</span>
                        <span className="leading-relaxed">{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Plan Pick ── */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-white mb-4 text-center">¿Qué Plan Conviene a un Equipo de RR.HH.?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              La firma electrónica, la redacción y la extracción inteligente son del nivel Business. Ahí es donde aterrizan la mayoría de los equipos de People Ops.
            </p>
            <div
              className="rounded-xl p-[1px]"
              style={{ background: "linear-gradient(135deg, rgba(107,124,255,0.5), rgba(20,216,196,0.3), rgba(107,124,255,0.35), rgba(107,124,255,0.4))" }}
            >
              <div
                className="rounded-[11px] p-8"
                style={{
                  background: `
                    radial-gradient(ellipse 40% 30% at 50% 0%, rgba(107,124,255,0.06) 0%, transparent 50%),
                    radial-gradient(ellipse 70% 60% at 95% 90%, rgba(20,216,196,0.04) 0%, transparent 70%),
                    rgba(255, 255, 255, 0.07)
                  `,
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  boxShadow: "inset 0 -1px 1px rgba(107,124,255,0.08), 0 2px 8px rgba(0,0,0,0.3)",
                }}
              >
                <div className="flex flex-wrap items-baseline gap-3 mb-6">
                  <h3 className="text-2xl font-bold text-white">Business</h3>
                  <span className="text-[#6B7CFF] font-semibold">$13.99/mes</span>
                  <span className="text-slate-400 text-sm">— recomendado para RR.HH. y People Ops</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Firma electrónica con firmas solo de sesión",
                    "Redacción de PDF (a nivel de objeto)",
                    "Extracción inteligente para formularios",
                    "Escáner OCR",
                    "Protección con contraseña y encriptación AES-256",
                    "Archivos de hasta 1GB",
                    "Conversiones ilimitadas y procesamiento por lotes",
                    "Extracción de tablas — 200 páginas/mes",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/es/registro"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comenzar prueba gratis de 30 días
                  </Link>
                  <Link
                    href="/es/precios"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comparar todos los planes
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">¿Contratas a gran escala? Enterprise desbloquea plantillas de automatización de flujos, 2,000 páginas/mes de extracción de tablas y procesamiento prioritario.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ── Privacy & Compliance ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div className="rounded-xl p-8 bg-white border border-slate-200">
              <div className="flex items-start gap-4 mb-4">
                <Shield className="h-8 w-8 text-[#14D8C4] flex-shrink-0 mt-1" />
                <div>
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Los Datos del Empleado Quedan Privados</h2>
                  <p className="text-slate-600 leading-relaxed">
                    PDF.it procesa tus archivos en tiempo real y los elimina en cuanto descargas el resultado. Nunca almacenamos, leemos, indexamos ni compartimos tus documentos. Datos personales, formularios laborales, cartas de salario y evaluaciones de desempeño nunca se quedan en nuestros servidores.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Archivos eliminados inmediatamente después de descargarlos",
                  "Transferencias cifradas con SSL",
                  "Encriptación AES-256 en PDFs protegidos con contraseña",
                  "Sin bibliotecas reutilizables de firmas almacenadas en el servidor",
                  "Sin almacenamiento de archivos, jamás",
                  "Sin indexación, sin analítica sobre el contenido de los documentos",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* ── FAQ ── */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Preguntas Frecuentes</h2>
            <div className="space-y-4">
              {faqs.map((f) => (
                <details key={f.q} className="rounded-xl border border-slate-200 bg-slate-50 p-5 group">
                  <summary className="cursor-pointer list-none flex items-center justify-between font-semibold text-slate-900">
                    <span>{f.q}</span>
                    <span className="text-[#14D8C4] text-xl group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="mt-3 text-sm text-slate-600 leading-relaxed">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Días de Plan Business, Gratis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Empieza con el nivel Business completo — firma electrónica, redacción, extracción inteligente, archivos de 1GB. Sin cargo durante 30 días. Cancela cuando quieras.
            </p>
            <Link
              href="/es/registro"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Comenzar prueba gratis <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
