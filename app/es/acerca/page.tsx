import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import type { Metadata } from "next"
import { Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase, Shield, Workflow, ScanText } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Acerca de PDF.it — Herramientas PDF Gratis, Pro, Business y Enterprise",
  description:
    "Conoce PDF.it, sus herramientas PDF y sus planes. Compara Gratis, Pro, Business y Enterprise para conversion de PDF, OCR, firma electronica, redaccion, automatizacion y extraccion de tablas.",
  keywords: [
    "acerca de PDF.it",
    "herramientas PDF",
    "herramientas PDF gratis",
    "convertidor PDF",
    "comprimir PDF",
    "unir PDF",
    "dividir PDF",
    "OCR PDF",
    "redaccion PDF",
    "firma electronica PDF",
    "automatizacion de flujos",
    "extraccion de tablas",
    "herramientas PDF Pro",
    "herramientas PDF Business",
    "herramientas PDF Enterprise",
  ],
  alternates: {
    languages: {
      en: "https://pdf.it.com/about",
      es: "https://pdf.it.com/es/acerca",
      pt: "https://pdf.it.com/br/sobre",
    },
  },
}

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderEs />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Planes de PDF.it: Herramientas PDF Gratis, Pro, Business y Enterprise</h1>
              <p className="text-xl text-slate-300">
                Herramientas PDF en el navegador para conversion, compresion, OCR, firma electronica, redaccion, automatizacion de flujos y procesamiento documental empresarial.
              </p>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              PDF.it ayuda a personas, estudiantes, equipos legales, contables, operativos y empresas en crecimiento a trabajar con archivos PDF directamente en el navegador. Puedes convertir PDF a Word, Excel, JPG, PNG y TXT, comprimir PDF para email y limites de subida, unir y dividir documentos PDF, ejecutar OCR sobre PDFs escaneados, agregar firmas electronicas, redactar contenido sensible, automatizar flujos y extraer tablas a Excel.
            </p>
            <p className="text-lg text-slate-600 mb-8">
              Nuestros planes estan pensados para crecer con tu flujo de trabajo. El plan Gratis cubre herramientas PDF esenciales, Pro desbloquea conversion avanzada y utilidades impulsadas por IA, Business agrega flujos documentales de nivel equipo, y Enterprise suma procesamiento de mayor volumen, plantillas de flujo y soporte premium para operaciones documentales exigentes.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">Que puedes hacer con PDF.it</h2>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Convertir PDFs a Word, Excel, JPG/PNG, TXT y mas</li>
                <li>✓ Comprimir PDFs para reducir el tamano de archivo para email y subidas</li>
                <li>✓ Unir y dividir PDFs para envios y paquetes de documentos</li>
                <li>✓ Ejecutar OCR para volver buscables los PDFs escaneados</li>
                <li>✓ Proteger, poner marca de agua, firmar, comparar y redactar PDFs para compartirlos con mas seguridad</li>
                <li>✓ Automatizar flujos PDF recurrentes y extraer tablas a Excel</li>
              </ul>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Comparar planes de PDF.it</h2>
              <p className="text-slate-600 mb-6">
                PDF.it ofrece cuatro niveles de precios para que puedas empezar con herramientas PDF gratis y actualizar solo cuando aumenten tu volumen documental, el tamano de los archivos, el nivel de cumplimiento o la complejidad de tus flujos.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Plan Gratis</h3>
                </div>
                <p className="text-green-900 font-medium text-sm mb-4">Ideal para conversion PDF ocasional, compresion, union, division y tareas documentales cotidianas.</p>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 10 conversiones por dia</li>
                  <li>• Herramientas PDF esenciales</li>
                  <li>• Archivos hasta 25MB</li>
                  <li>• Sin registro para herramientas gratuitas</li>
                  <li>• Ideal para estudiantes, uso personal y trabajo ligero de oficina</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/mes</h3>
                </div>
                <p className="text-orange-900 font-medium text-sm mb-4">Ideal para freelancers, candidatos y profesionales que necesitan conversion PDF avanzada y mayores limites de uso.</p>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Conversiones ilimitadas</li>
                  <li>• Todas las herramientas PDF</li>
                  <li>• Archivos hasta 200MB</li>
                  <li>• OCR, marcas de agua y herramientas Office a PDF</li>
                  <li>• Optimizador ATS, creador de curriculum, URL a PDF y generador de QR</li>
                </ul>
              </div>
              <div className="bg-indigo-50 border border-indigo-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-indigo-600" />
                  <h3 className="text-xl font-bold text-indigo-900">Business — $13.99/mes</h3>
                </div>
                <p className="text-indigo-900 font-medium text-sm mb-4">Ideal para equipos que gestionan contratos, facturas, reportes, documentos escaneados y flujos repetitivos.</p>
                <ul className="space-y-2 text-indigo-800 text-sm">
                  <li>• Todo lo incluido en Pro</li>
                  <li>• Archivos hasta 1GB</li>
                  <li>• Automatizacion de flujos</li>
                  <li>• Extraccion de tablas, comparacion de PDF, firma electronica y redaccion</li>
                  <li>• Pensado para operaciones, finanzas, RR. HH. y equipos documentales</li>
                </ul>
              </div>
              <div className="bg-slate-900 border border-amber-500 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-amber-500" />
                  <h3 className="text-xl font-bold text-white">Enterprise — $49.99/mes</h3>
                </div>
                <p className="text-slate-200 font-medium text-sm mb-4">Ideal para bufetes, contadores, laboratorios y organizaciones que necesitan mas volumen, prioridad y soporte premium.</p>
                <ul className="space-y-2 text-slate-200 text-sm">
                  <li>• Todo lo incluido en Business</li>
                  <li>• Extraccion de tablas a Excel: 2,000 paginas por mes</li>
                  <li>• Plantillas de flujo personalizadas</li>
                  <li>• Cola de procesamiento prioritaria</li>
                  <li>• Soporte dedicado por email con respuesta en 24 horas</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <ScanText className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Conversion PDF Avanzada</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  PDF.it cubre flujos comunes como PDF a Word, PDF a Excel, PDF a PowerPoint, Word a PDF, Excel a PDF, JPG a PDF, PNG a PDF, URL a PDF y OCR para documentos escaneados. Esto hace que la plataforma sea util para limpiar, editar, compartir y archivar documentos.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Workflow className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Herramientas de Flujo Business</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Los planes Business y Enterprise agregan automatizacion de flujos, extraccion de tablas, comparacion de PDF, firma electronica y redaccion PDF. Estas funciones estan disenadas para documentos legales, contratos, procesamiento de facturas, cumplimiento, auditoria y operaciones PDF recurrentes.
                </p>
              </div>
              <div className="bg-slate-50 border border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Shield className="h-6 w-6 text-slate-700" />
                  <h3 className="text-lg font-bold text-slate-900">Capacidad de Nivel Enterprise</h3>
                </div>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Enterprise incluye limites mensuales mas altos para extraccion de tablas, plantillas de flujo, prioridad en cola y soporte dedicado. Esta pensado para firmas y equipos que necesitan procesamiento PDF confiable en el navegador sin depender de software de escritorio en cada equipo.
                </p>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nuestra Mision</h2>
              <div className="bg-[#191B4D] border border-[#252A6A] rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    Ofrecer herramientas PDF confiables basadas en el navegador que funcionen de manera rapida y simple, sin instalaciones, sin plugins y sin necesidad de conocimientos tecnicos. Queremos que la conversion PDF, el OCR, la redaccion, la firma electronica, la extraccion de tablas y la automatizacion esten al alcance de personas y equipos.
                  </p>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Disenado para Flujos de Trabajo Reales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Estudiantes e Investigadores</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Convierte trabajos, extrae tablas y comprime documentos grandes</li>
                    <li>• Divide PDFs de varios capitulos en archivos separados</li>
                    <li>• Ejecuta OCR sobre apuntes y materiales escaneados</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-7 w-7 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Empresas</h3>
                  </div>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Procesa facturas, contratos, paquetes de onboarding y reportes</li>
                    <li>• Combina PDFs para envios y entregables para clientes</li>
                    <li>• Usa OCR, firma electronica, redaccion y automatizacion</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-7 w-7 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Freelancers</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Prepara entregables para clientes</li>
                    <li>• Agrega marcas de agua y contrasenas a tus archivos</li>
                    <li>• Comprime portafolios para compartirlos facilmente</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Uso Personal</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Formularios, organizacion y documentos para compartir</li>
                    <li>• Convierte y comprime archivos del dia a dia</li>
                    <li>• Protege documentos personales con contrasena</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Que plan de PDF.it deberias elegir?</h2>
              <div className="bg-white border border-slate-200 rounded-xl p-8">
                <div className="space-y-4 text-slate-600">
                  <p>
                    Elige <strong>Gratis</strong> si necesitas un convertidor PDF online confiable, compresor PDF, union PDF, division PDF o proteccion con contrasena para archivos cotidianos.
                  </p>
                  <p>
                    Elige <strong>Pro</strong> si necesitas herramientas PDF mas avanzadas como OCR, conversion Office a PDF, herramientas de curriculum con IA, archivos mas grandes y uso ilimitado.
                  </p>
                  <p>
                    Elige <strong>Business</strong> si tu equipo trabaja con contratos, facturas, registros escaneados, comparaciones, firmas o flujos PDF repetitivos.
                  </p>
                  <p>
                    Elige <strong>Enterprise</strong> si necesitas soporte premium, plantillas de flujo, extraccion de tablas de alto volumen y una configuracion mas solida para trabajo legal, contable, financiero, de laboratorio o de cumplimiento.
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center">
              <div className="bg-[#191B4D] rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Empieza a convertir gratis
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  No necesitas cuenta para las herramientas gratuitas. Actualiza cuando necesites acceso ilimitado, archivos mas grandes, OCR, firma electronica, redaccion, extraccion de tablas, automatizacion o soporte Enterprise.
                </p>
                <Link href="/es#tools">
                  <button className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-xl text-lg transition-colors">
                    Empezar Gratis →
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
