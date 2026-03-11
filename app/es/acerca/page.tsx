import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import { Heart, Target, Crown, Gift, FileText, Building, GraduationCap, Briefcase } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Acerca de OmnisPDF — Herramientas PDF Gratis y Pro",
  description:
    "OmnisPDF te ayuda a convertir, comprimir, unir, dividir, escanear y proteger PDFs en tu navegador. Empieza gratis, actualiza a Pro cuando necesites más.",
  alternates: {
    languages: {
      "en": "https://omnispdf.com/about",
      "es": "https://omnispdf.com/es/acerca",
    },
  },
}

export default function AcercaPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeaderEs />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Heart className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas PDF Gratis y Pro</h1>
              <p className="text-xl text-slate-300">
                Empieza con herramientas gratuitas de conversión PDF, luego actualiza cuando necesites archivos más grandes y funciones avanzadas.
              </p>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-6">
              OmnisPDF te ayuda a convertir, comprimir, unir, dividir, escanear con OCR y proteger PDFs directamente en tu navegador. Usa el plan gratuito para tareas del día a día, y cambia a Pro cuando necesites más límites y funciones avanzadas.
            </p>

            <div className="bg-gray-50 rounded-xl p-8 mb-8">
              <h2 className="text-xl font-black text-slate-900 mb-4">¿Qué puedes hacer con OmnisPDF?</h2>
              <ul className="space-y-2 text-slate-700">
                <li>✓ Convertir PDFs a Word, Excel, JPG/PNG, TXT y más</li>
                <li>✓ Comprimir PDFs para reducir tamaño de archivo para email y subidas</li>
                <li>✓ Unir y dividir PDFs para envíos y paquetes de documentos</li>
                <li>✓ Ejecutar OCR para hacer PDFs escaneados buscables</li>
                <li>✓ Proteger y agregar marca de agua a PDFs para compartir de forma segura</li>
              </ul>
            </div>

            {/* Free vs Pro */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Gift className="h-6 w-6 text-green-600" />
                  <h3 className="text-xl font-bold text-green-900">Plan Gratuito</h3>
                </div>
                <ul className="space-y-2 text-green-800 text-sm">
                  <li>• 10 conversiones por día</li>
                  <li>• Herramientas PDF esenciales</li>
                  <li>• Archivos hasta 25MB</li>
                  <li>• Sin registro para herramientas gratuitas</li>
                </ul>
              </div>
              <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Crown className="h-6 w-6 text-orange-600" />
                  <h3 className="text-xl font-bold text-orange-900">Pro — $7.99/mes</h3>
                </div>
                <ul className="space-y-2 text-orange-800 text-sm">
                  <li>• Conversiones ilimitadas</li>
                  <li>• Todas las herramientas PDF</li>
                  <li>• Archivos hasta 200MB</li>
                  <li>• OCR, Marca de Agua, Word/Excel/PPT a PDF</li>
                </ul>
              </div>
            </div>

            {/* Mission */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Nuestra Misión</h2>
              <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-xl p-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-orange-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Target className="h-6 w-6 text-white" />
                  </div>
                  <p className="text-slate-800 text-lg leading-relaxed">
                    Ofrecer herramientas PDF confiables basadas en el navegador que funcionan rápida y simplemente — sin instalaciones, sin plugins, sin conocimientos técnicos necesarios.
                  </p>
                </div>
              </div>
            </div>

            {/* Built for real workflows */}
            <div className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Diseñado para Flujos de Trabajo Reales</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="h-7 w-7 text-blue-600" />
                    <h3 className="text-lg font-bold text-blue-900">Estudiantes e Investigadores</h3>
                  </div>
                  <ul className="space-y-2 text-blue-800 text-sm">
                    <li>• Convierte trabajos, extrae tablas, comprime documentos grandes</li>
                    <li>• Divide PDFs de varios capítulos en archivos separados</li>
                    <li>• Escanea con OCR apuntes de clase y libros de texto</li>
                  </ul>
                </div>
                <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Building className="h-7 w-7 text-green-600" />
                    <h3 className="text-lg font-bold text-green-900">Empresas</h3>
                  </div>
                  <ul className="space-y-2 text-green-800 text-sm">
                    <li>• Procesa facturas y contratos</li>
                    <li>• Combina PDFs para envíos</li>
                    <li>• Ejecuta OCR en documentos escaneados</li>
                  </ul>
                </div>
                <div className="bg-purple-50 border border-purple-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Briefcase className="h-7 w-7 text-purple-600" />
                    <h3 className="text-lg font-bold text-purple-900">Freelancers</h3>
                  </div>
                  <ul className="space-y-2 text-purple-800 text-sm">
                    <li>• Prepara entregables para clientes</li>
                    <li>• Agrega marca de agua y contraseña a archivos</li>
                    <li>• Comprime portafolios para compartir</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 rounded-xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="h-7 w-7 text-orange-600" />
                    <h3 className="text-lg font-bold text-orange-900">Uso Personal</h3>
                  </div>
                  <ul className="space-y-2 text-orange-800 text-sm">
                    <li>• Formularios, organización y compartir</li>
                    <li>• Convierte y comprime documentos del día a día</li>
                    <li>• Protege archivos personales con contraseña</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 text-white">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-4">
                  Empieza a convertir gratis
                </h3>
                <p className="text-slate-300 text-lg mb-8 max-w-2xl mx-auto">
                  No necesitas cuenta para las herramientas gratuitas. Actualiza a Pro cuando necesites acceso ilimitado y funciones avanzadas.
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
