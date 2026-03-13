import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
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
  title: "Todas as Ferramentas PDF A–Z | OmnisPDF",
  description:
    "Explore todas as ferramentas do OmnisPDF em ordem alfabetica. Converta, comprima, una, divida, proteja e mais.",
  alternates: {
    canonical: "https://omnispdf.com/br/ferramentas-a-z",
    languages: {
      en: "https://omnispdf.com/tools-a-z",
      es: "https://omnispdf.com/es/herramientas-a-z",
      pt: "https://omnispdf.com/br/ferramentas-a-z",
    },
  },
}

const tools = [
  { name: "Achatar PDF", description: "Trava campos de formulario e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" },
  { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legalmente vinculantes a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" },
  { name: "Automacao de Fluxos", description: "Encadeie multiplas ferramentas PDF em um fluxo automatizado.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" },
  { name: "Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto instantaneamente.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" },
  { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque as diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" },
  { name: "Comprimir PDF", description: "Reduza o tamanho do arquivo com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" },
  { name: "Comprimir PDF para Email", description: "Reduza PDFs para caber nos limites do Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" },
  { name: "Converter Excel para PDF", description: "Transforme planilhas em PDFs compartilhaveis.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" },
  { name: "Converter JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" },
  { name: "Converter PDF para Excel", description: "Extraia tabelas de PDF para uma planilha Excel.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" },
  { name: "Converter PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" },
  { name: "Converter PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" },
  { name: "Converter PDF para PowerPoint", description: "Converta paginas PDF em slides de PowerPoint.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" },
  { name: "Converter PDF para Texto", description: "Extraia texto puro de arquivos PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" },
  { name: "Converter PDF para Word", description: "Converta PDF em um documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" },
  { name: "Converter PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" },
  { name: "Converter PowerPoint para PDF", description: "Converta apresentacoes para formato PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" },
  { name: "Converter Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" },
  { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" },
  { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" },
  { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para planilhas Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" },
  { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de PDFs.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" },
  { name: "Girar PDF", description: "Corrija a orientacao das paginas instantaneamente.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" },
  { name: "Limpeza de Digitalizacao", description: "Transforme fotos de documentos do celular em PDFs limpos e profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" },
  { name: "Marca d'Agua PDF", description: "Adicione marcas d'agua de texto ou imagem a PDFs.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" },
  { name: "PDF Pronto para Upload", description: "Corrija e otimize PDFs para qualquer portal de upload em um clique.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" },
  { name: "Proteger PDF", description: "Adicione protecao com senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" },
  { name: "Redacao PDF", description: "Remova permanentemente texto e dados sensiveis de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" },
  { name: "Scanner OCR", description: "Extraia texto pesquisavel de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" },
  { name: "Unir PDF", description: "Combine multiplos PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" },
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

export default function FerramentasAZPage() {
  const letters = [...new Set(tools.map((t) => t.name[0].toUpperCase()))].sort()

  return (
    <div className="min-h-screen bg-white">
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas A–Z</h1>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Todas as ferramentas do OmnisPDF em um so lugar, em ordem alfabetica.
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
      <FooterBr />
    </div>
  )
}
