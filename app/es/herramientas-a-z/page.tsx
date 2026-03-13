import { HeaderEs } from "@/components/header-es"
import { FooterEs } from "@/components/footer-es"
import Link from "next/link"
import type { Metadata } from "next"
import {
  FileText,
  FileSpreadsheet,
  Presentation,
  Image,
  Merge,
  Split,
  RotateCw,
  FileArchiveIcon as Compress,
  Lock,
  Unlock,
  Droplets,
  Scan,
  Camera,
  Mail,
  Type,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
} from "lucide-react"

export const metadata: Metadata = {
  title: "Todas las Herramientas PDF A–Z | OmnisPDF",
  description:
    "Explora todas las herramientas de OmnisPDF en orden alfabetico. Convierte, comprime, une, divide, protege y mas.",
  alternates: {
    canonical: "https://omnispdf.com/es/herramientas-a-z",
    languages: {
      en: "https://omnispdf.com/tools-a-z",
      es: "https://omnispdf.com/es/herramientas-a-z",
      pt: "https://omnispdf.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Automatizacion de Flujos", description: "Encadena multiples herramientas PDF en un flujo automatizado.", icon: Repeat, href: "/es/automatizacion", tier: "BUSINESS" },
  { name: "Codigo QR", description: "Genera codigos QR desde cualquier URL o texto al instante.", icon: QrCode, href: "/es/codigo-qr", tier: "PRO" },
  { name: "Comparar PDF", description: "Compara dos PDFs lado a lado y resalta las diferencias.", icon: ArrowLeftRight, href: "/es/comparar-pdf", tier: "BUSINESS" },
  { name: "Comprimir PDF", description: "Reduce el tamano del archivo con compresion Ligera, Media o Extrema.", icon: Compress, href: "/es/comprimir-pdf", tier: "FREE" },
  { name: "Comprimir PDF para Email", description: "Reduce PDFs para cumplir los limites de Gmail, Outlook y Yahoo.", icon: Mail, href: "/es/comprimir-pdf-para-email", tier: "FREE" },
  { name: "Convertir Excel a PDF", description: "Convierte hojas de calculo en PDFs compartibles.", icon: FileSpreadsheet, href: "/es/excel-a-pdf", tier: "PRO" },
  { name: "Convertir JPG a PDF", description: "Convierte imagenes JPG a documentos PDF.", icon: Image, href: "/es/jpg-a-pdf", tier: "FREE" },
  { name: "Convertir PDF a Excel", description: "Extrae tablas de PDF a una hoja de calculo Excel.", icon: FileSpreadsheet, href: "/es/pdf-a-excel", tier: "PRO" },
  { name: "Convertir PDF a JPG", description: "Convierte paginas PDF a imagenes JPG de alta calidad.", icon: Image, href: "/es/pdf-a-jpg", tier: "FREE" },
  { name: "Convertir PDF a PNG", description: "Convierte paginas PDF a imagenes PNG.", icon: Image, href: "/es/pdf-a-png", tier: "FREE" },
  { name: "Convertir PDF a PowerPoint", description: "Convierte paginas PDF en diapositivas de PowerPoint.", icon: Presentation, href: "/es/pdf-a-powerpoint", tier: "PRO" },
  { name: "Convertir PDF a Texto", description: "Extrae texto plano de archivos PDF.", icon: Type, href: "/es/pdf-a-texto", tier: "FREE" },
  { name: "Convertir PDF a Word", description: "Convierte PDF a un documento Word editable.", icon: FileText, href: "/es/pdf-a-word", tier: "PRO" },
  { name: "Convertir PNG a PDF", description: "Convierte imagenes PNG a documentos PDF.", icon: Image, href: "/es/png-a-pdf", tier: "FREE" },
  { name: "Convertir PowerPoint a PDF", description: "Convierte presentaciones a formato PDF.", icon: Presentation, href: "/es/powerpoint-a-pdf", tier: "PRO" },
  { name: "Convertir Word a PDF", description: "Convierte documentos Word a PDF al instante.", icon: FileText, href: "/es/word-a-pdf", tier: "PRO" },
  { name: "Desbloquear PDF", description: "Elimina las restricciones de contrasena de un PDF.", icon: Unlock, href: "/es/desbloquear-pdf", tier: "FREE" },
  { name: "Dividir PDF", description: "Divide un PDF en archivos separados.", icon: Split, href: "/es/dividir-pdf", tier: "FREE" },
  { name: "Escanear OCR", description: "Extrae texto buscable de PDFs escaneados.", icon: Scan, href: "/es/escaner-ocr", tier: "PRO" },
  { name: "Extraccion de Tablas", description: "Extrae tablas de PDFs directamente a hojas de calculo Excel.", icon: FileSpreadsheet, href: "/es/extraccion-de-tablas", tier: "BUSINESS" },
  { name: "Extraer Imagenes", description: "Extrae fotos, logos y graficos de PDFs.", icon: ImageDown, href: "/es/extraer-imagenes-de-pdf", tier: "FREE" },
  { name: "Firma Electronica", description: "Agrega firmas electronicas legalmente vinculantes a PDFs.", icon: PenTool, href: "/es/firma-electronica", tier: "BUSINESS" },
  { name: "Limpiar Escaneo", description: "Convierte fotos de documentos del celular en PDFs limpios y profesionales.", icon: Camera, href: "/es/limpieza-escaneo", tier: "FREE" },
  { name: "Marca de Agua PDF", description: "Agrega marcas de agua de texto o imagen a PDFs.", icon: Droplets, href: "/es/marca-de-agua-pdf", tier: "PRO" },
  { name: "PDF Listo para Subir", description: "Arregla y optimiza PDFs para cualquier portal de carga en un clic.", icon: Upload, href: "/es/pdf-listo-para-subir", tier: "FREE" },
  { name: "Planar PDF", description: "Bloquea campos de formulario y anotaciones en un PDF plano.", icon: Layers, href: "/es/planar-pdf", tier: "FREE" },
  { name: "Proteger PDF", description: "Agrega proteccion con contrasena a tu PDF.", icon: Lock, href: "/es/proteger-pdf", tier: "FREE" },
  { name: "Redaccion PDF", description: "Elimina permanentemente texto y datos sensibles de PDFs.", icon: Shield, href: "/es/redaccion-pdf", tier: "BUSINESS" },
  { name: "Rotar PDF", description: "Corrige la orientacion de las paginas al instante.", icon: RotateCw, href: "/es/rotar-pdf", tier: "FREE" },
  { name: "Unir PDF", description: "Combina multiples PDFs en un solo archivo.", icon: Merge, href: "/es/unir-pdf", tier: "FREE" },
]

function TierBadge({ tier }: { tier: string }) {
  if (tier === "BUSINESS") {
    return <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Business</span>
  }
  if (tier === "PRO") {
    return <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>Pro</span>
  }
  return <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">Gratis</span>
}

export default function HerramientasAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()

  return (
    <div className="min-h-screen bg-white">
      <HeaderEs />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Herramientas A–Z</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Todas las herramientas de OmnisPDF en un solo lugar, ordenadas alfabeticamente.
            </p>
          </div>
        </section>

        <nav className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-1 py-3 justify-center">
              {letters.map((letter) => (
                <a
                  key={letter}
                  href={`#letter-${letter}`}
                  className="w-9 h-9 flex items-center justify-center rounded-lg text-sm font-bold text-slate-700 hover:bg-orange-50 hover:text-orange-600 transition-colors"
                >
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-10">
                  <h2 className="text-2xl font-black text-slate-900 mb-4 border-b-2 border-orange-500 pb-2 inline-block">{letter}</h2>
                  <div className="grid gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <Link
                          key={tool.href}
                          href={tool.href}
                          className="flex items-center gap-4 bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                        >
                          <div className="w-10 h-10 bg-slate-100 group-hover:bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors">
                            <Icon className="h-5 w-5 text-slate-600 group-hover:text-orange-600 transition-colors" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-0.5">
                              <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</span>
                              <TierBadge tier={tool.tier} />
                            </div>
                            <p className="text-sm text-slate-500 truncate">{tool.description}</p>
                          </div>
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>
      </main>
      <FooterEs />
    </div>
  )
}
