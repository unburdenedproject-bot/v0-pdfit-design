import Link from "next/link"
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
  Crown,
  QrCode,
  ImageDown,
  Layers,
  Upload,
  PenTool,
  Shield,
  ArrowLeftRight,
  Repeat,
} from "lucide-react"

const categories = [
  {
    name: "Converter de PDF",
    description: "Transforme seus PDFs em formatos editaveis",
    tools: [
      { name: "PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" as const },
      { name: "PDF para Texto", description: "Extraia texto simples de arquivos PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" as const },
      { name: "PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" as const },
      { name: "PDF para Word", description: "Converta PDF em documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" as const },
      { name: "PDF para Excel", description: "Extraia tabelas de PDF para planilhas Excel.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" as const },
      { name: "PDF para PowerPoint", description: "Converta paginas PDF em slides de PowerPoint.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" as const },
      { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de arquivos PDF.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Converter para PDF",
    description: "Crie PDFs a partir de qualquer formato de documento",
    tools: [
      { name: "Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" as const },
      { name: "Excel para PDF", description: "Converta planilhas em PDFs compartilhaveis.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" as const },
      { name: "PowerPoint para PDF", description: "Converta apresentacoes para formato PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" as const },
      { name: "JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" as const },
      { name: "PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Editar e Organizar",
    description: "Modifique e organize seus documentos PDF",
    tools: [
      { name: "Unir PDF", description: "Combine varios PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" as const },
      { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" as const },
      { name: "Girar PDF", description: "Corrija a orientacao das paginas instantaneamente.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" as const },
      { name: "Achatar PDF", description: "Trave campos de formulario e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Seguranca e Protecao",
    description: "Proteja e assegure seus documentos PDF",
    tools: [
      { name: "Proteger PDF", description: "Adicione protecao com senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" as const },
      { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" as const },
      { name: "Marca d'Agua PDF", description: "Adicione marcas d'agua de texto ou imagem a PDFs.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Otimizar e Melhorar",
    description: "Melhore e otimize seus arquivos PDF",
    tools: [
      { name: "Comprimir PDF", description: "Reduza o tamanho do arquivo com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" as const },
      { name: "Comprimir para Email", description: "Reduza PDFs para cumprir os limites de anexo do Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" as const },
      { name: "PDF Pronto para Upload", description: "Corrija e otimize PDFs para qualquer portal de upload em um clique.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" as const },
      { name: "Scanner OCR", description: "Extraia texto pesquisavel de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" as const },
      { name: "Limpeza de Digitalizacao", description: "Converta fotos de documentos em PDFs limpos e profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" as const },
    ],
  },
  {
    name: "Gerar",
    description: "Crie recursos uteis instantaneamente",
    tools: [
      { name: "Gerador de Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto instantaneamente.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" as const },
    ],
  },
  {
    name: "Ferramentas Empresariais",
    description: "Ferramentas avancadas para equipes e profissionais",
    tools: [
      { name: "Automacao de Fluxos", description: "Encadeie multiplas ferramentas PDF em um fluxo automatizado.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" as const },
      { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para planilhas Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" as const },
      { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque as diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" as const },
      { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legalmente validas a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" as const },
      { name: "Redacao de PDF", description: "Remova permanentemente texto e dados sensiveis de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" as const },
    ],
  },
]

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" }) {
  if (tier === "BUSINESS") {
    return (
      <span className="bg-indigo-100 text-indigo-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Business
      </span>
    )
  }
  if (tier === "PRO") {
    return (
      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide" style={{ backgroundColor: "#FDE7C7", color: "#92400E" }}>
        Pro
      </span>
    )
  }
  return (
    <span className="bg-green-100 text-green-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
      Gratis
    </span>
  )
}

function PricingCTA() {
  return (
    <div className="max-w-2xl mx-auto my-8">
      <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
        <h3 className="text-xl font-black text-white mb-2 text-balance">
          Precisa de conversoes ilimitadas ou arquivos maiores?
        </h3>
        <p className="text-slate-300 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
          Atualize para Pro para conversoes ilimitadas, processamento em lote e todas as ferramentas — $7.99/mes. Precisa de assinatura eletronica, faturas e automacao? Experimente Business por $13.99/mes.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/br/precos"
            className="inline-flex items-center justify-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg hover:shadow-xl"
          >
            <Crown className="h-4 w-4" />
            Atualizar para Pro
          </Link>
          <Link
            href="/br/precos"
            className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all border border-white/20 hover:border-white/40"
          >
            Ver Planos
          </Link>
        </div>
      </div>
    </div>
  )
}

export function FeaturesGridBr() {
  return (
    <section id="tools" className="scroll-mt-16 py-10 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl lg:text-4xl font-black text-slate-900 mb-2 text-balance">
            Todas as Ferramentas
          </h2>
          <p className="text-base text-slate-600 max-w-2xl mx-auto">
            Tudo o que voce precisa para trabalhar com PDFs em segundos.
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-8">
          {categories.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="mb-3">
                <h3 className="text-lg font-bold text-slate-900">
                  {category.name}
                </h3>
                <p className="text-sm text-slate-500">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3">
                {category.tools.map((tool, toolIndex) => (
                  <Link
                    key={toolIndex}
                    href={tool.href}
                    className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                  >
                    <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                      <tool.icon className="h-5 w-5 text-white" />
                    </div>
                    <div className="flex items-center gap-1.5 mb-1">
                      <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">
                        {tool.name}
                      </h4>
                      <TierBadge tier={tool.tier} />
                    </div>
                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tool.description}
                    </p>
                  </Link>
                ))}
              </div>
            </div>
          ))}

          <PricingCTA />
        </div>
      </div>
    </section>
  )
}
