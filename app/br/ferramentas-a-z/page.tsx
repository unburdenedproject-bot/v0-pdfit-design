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
  ArrowRight,
  Search,
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
  const totalFree = tools.filter((t) => t.tier === "FREE").length
  const totalPro = tools.filter((t) => t.tier === "PRO").length
  const totalBusiness = tools.filter((t) => t.tier === "BUSINESS").length

  return (
    <div className="min-h-screen bg-gray-50">
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <Search className="h-4 w-4 text-orange-400" />
              <span className="text-sm font-medium text-slate-300">{tools.length} ferramentas disponiveis</span>
            </div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas PDF A–Z</h1>
            <p className="text-lg text-slate-400 max-w-xl mx-auto mb-8">
              Todas as ferramentas em um so lugar, em ordem alfabetica. Clique em uma letra para pular.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalFree} Gratis</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>{totalPro} Pro</span>
              </div>
              <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-lg px-4 py-2">
                <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase">{totalBusiness} Business</span>
              </div>
            </div>
          </div>
        </section>

        <nav className="sticky top-0 z-10 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-0.5 py-3 justify-center">
              {letters.map((letter) => (
                <a key={letter} href={`#letter-${letter}`} className="w-10 h-10 flex items-center justify-center rounded-xl text-sm font-black text-slate-500 hover:bg-orange-500 hover:text-white transition-all duration-200">
                  {letter}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <section className="py-12">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
            {letters.map((letter) => {
              const letterTools = tools.filter((t) => t.name[0].toUpperCase() === letter)
              return (
                <div key={letter} id={`letter-${letter}`} className="mb-12 scroll-mt-20">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 bg-slate-900 text-white rounded-2xl flex items-center justify-center font-black text-xl flex-shrink-0">{letter}</div>
                    <div className="h-px flex-1 bg-gradient-to-r from-slate-200 to-transparent" />
                    <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">{letterTools.length} ferramenta{letterTools.length !== 1 ? "s" : ""}</span>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {letterTools.map((tool) => {
                      const Icon = tool.icon
                      return (
                        <Link key={tool.href} href={tool.href} className="flex items-start gap-4 bg-white rounded-2xl p-5 border border-gray-200 hover:border-orange-300 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 group">
                          <div className="w-11 h-11 bg-gradient-to-br from-slate-50 to-slate-100 group-hover:from-orange-50 group-hover:to-orange-100 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors duration-300 border border-slate-200 group-hover:border-orange-200">
                            <Icon className="h-5 w-5 text-slate-500 group-hover:text-orange-600 transition-colors duration-300" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 mb-1">
                              <span className="font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</span>
                              <TierBadge tier={tool.tier} />
                            </div>
                            <p className="text-sm text-slate-500 leading-relaxed">{tool.description}</p>
                          </div>
                          <ArrowRight className="h-4 w-4 text-slate-300 group-hover:text-orange-500 flex-shrink-0 mt-1 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1" />
                        </Link>
                      )
                    })}
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para comecar?</h2>
            <p className="text-slate-400 mb-6">Escolha qualquer ferramenta ou comece pelas mais populares.</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/br/comprimir-pdf" className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-colors">
                Comprimir PDF <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/br/unir-pdf" className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-3 px-6 rounded-xl border border-white/20 transition-colors">
                Unir PDF <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
