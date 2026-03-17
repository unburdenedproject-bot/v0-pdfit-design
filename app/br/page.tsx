"use client"

import { useEffect } from "react"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import {
  Shield, ArrowRight, Crown, Gift, Zap, Globe, Award, HelpCircle,
  FileText, FileSpreadsheet, Presentation, Image, Merge, Split, RotateCw,
  FileArchiveIcon as Compress, Lock, Unlock, Droplets, Scan, Camera, Mail,
  Type, QrCode, ImageDown, Layers, Upload, PenTool, ArrowLeftRight, Repeat,
} from "lucide-react"

function TierBadge({ tier }: { tier: "FREE" | "PRO" | "BUSINESS" | "ENTERPRISE" }) {
  if (tier === "ENTERPRISE") {
    return (
      <span className="bg-amber-100 text-amber-700 text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide">
        Enterprise
      </span>
    )
  }
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

const categories = [
  {
    name: "Converter de PDF",
    description: "Transforme seus PDFs em formatos editaveis",
    tools: [
      { name: "PDF para JPG", description: "Converta paginas PDF em imagens JPG de alta qualidade.", icon: Image, href: "/br/pdf-para-jpg", tier: "FREE" as const },
      { name: "PDF para Texto", description: "Extraia o texto de um PDF.", icon: Type, href: "/br/pdf-para-texto", tier: "FREE" as const },
      { name: "PDF para PNG", description: "Converta paginas PDF em imagens PNG.", icon: Image, href: "/br/pdf-para-png", tier: "FREE" as const },
      { name: "PDF para Word", description: "Converta PDF em documento Word editavel.", icon: FileText, href: "/br/pdf-para-word", tier: "PRO" as const },
      { name: "PDF para Excel", description: "Extraia tabelas de PDF para planilha.", icon: FileSpreadsheet, href: "/br/pdf-para-excel", tier: "PRO" as const },
      { name: "PDF para PowerPoint", description: "Converta paginas PDF em slides.", icon: Presentation, href: "/br/pdf-para-powerpoint", tier: "PRO" as const },
      { name: "Extrair Imagens", description: "Extraia fotos, logos e graficos de um PDF.", icon: ImageDown, href: "/br/extrair-imagens-de-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Converter para PDF",
    description: "Crie PDFs a partir de qualquer formato",
    tools: [
      { name: "Word para PDF", description: "Converta documentos Word para PDF instantaneamente.", icon: FileText, href: "/br/word-para-pdf", tier: "PRO" as const },
      { name: "Excel para PDF", description: "Converta planilhas para PDF.", icon: FileSpreadsheet, href: "/br/excel-para-pdf", tier: "PRO" as const },
      { name: "PowerPoint para PDF", description: "Converta apresentacoes para PDF.", icon: Presentation, href: "/br/powerpoint-para-pdf", tier: "PRO" as const },
      { name: "JPG para PDF", description: "Converta imagens JPG em documentos PDF.", icon: Image, href: "/br/jpg-para-pdf", tier: "FREE" as const },
      { name: "PNG para PDF", description: "Converta imagens PNG em documentos PDF.", icon: Image, href: "/br/png-para-pdf", tier: "FREE" as const },
      { name: "URL para PDF", description: "Converta qualquer pagina web em um PDF.", icon: Globe, href: "/br/url-para-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Organizar PDF",
    description: "Modifique e organize seus documentos PDF",
    tools: [
      { name: "Unir PDF", description: "Combine varios PDFs em um unico arquivo.", icon: Merge, href: "/br/unir-pdf", tier: "FREE" as const },
      { name: "Dividir PDF", description: "Divida um PDF em arquivos separados.", icon: Split, href: "/br/dividir-pdf", tier: "FREE" as const },
      { name: "Girar PDF", description: "Corrija a orientacao das paginas.", icon: RotateCw, href: "/br/girar-pdf", tier: "FREE" as const },
      { name: "Achatar PDF", description: "Trave campos e anotacoes em um PDF plano.", icon: Layers, href: "/br/achatar-pdf", tier: "FREE" as const },
    ],
  },
  {
    name: "Seguranca",
    description: "Proteja e assegure seus documentos PDF",
    tools: [
      { name: "Proteger PDF", description: "Adicione senha ao seu PDF.", icon: Lock, href: "/br/proteger-pdf", tier: "FREE" as const },
      { name: "Desbloquear PDF", description: "Remova restricoes de senha de um PDF.", icon: Unlock, href: "/br/desbloquear-pdf", tier: "FREE" as const },
      { name: "Marca d'Agua", description: "Adicione marcas d'agua de texto ou imagem.", icon: Droplets, href: "/br/marca-dagua-pdf", tier: "PRO" as const },
    ],
  },
  {
    name: "Comprimir",
    description: "Otimize e reduza seus arquivos PDF",
    tools: [
      { name: "Comprimir PDF", description: "Reduza o tamanho com compressao Leve, Media ou Extrema.", icon: Compress, href: "/br/comprimir-pdf", tier: "FREE" as const },
      { name: "Comprimir para Email", description: "Reduza PDFs para anexar no Gmail, Outlook e Yahoo.", icon: Mail, href: "/br/comprimir-pdf-para-email", tier: "FREE" as const },
      { name: "PDF Pronto para Upload", description: "Otimize PDFs para qualquer portal de upload.", icon: Upload, href: "/br/pdf-pronto-para-upload", tier: "FREE" as const },
    ],
  },
  {
    name: "Digitalizar",
    description: "Digitalize e melhore seus documentos",
    tools: [
      { name: "Scanner OCR", description: "Extraia texto de PDFs digitalizados.", icon: Scan, href: "/br/scanner-ocr", tier: "PRO" as const },
      { name: "Limpeza de Digitalizacao", description: "Converta fotos de documentos em PDFs profissionais.", icon: Camera, href: "/br/limpeza-digitalizacao", tier: "FREE" as const },
      { name: "Codigo QR", description: "Gere codigos QR a partir de qualquer URL ou texto.", icon: QrCode, href: "/br/codigo-qr", tier: "PRO" as const },
    ],
  },
  {
    name: "Business e Enterprise",
    description: "Ferramentas avancadas para profissionais, equipes, escritorios e laboratorios",
    tools: [
      { name: "Automacao", description: "Encadeie varias ferramentas PDF em um fluxo automatico.", icon: Repeat, href: "/br/automacao", tier: "BUSINESS" as const },
      { name: "Extracao de Tabelas", description: "Extraia tabelas de PDFs diretamente para Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "BUSINESS" as const },
      { name: "Comparar PDF", description: "Compare dois PDFs lado a lado e destaque diferencas.", icon: ArrowLeftRight, href: "/br/comparar-pdf", tier: "BUSINESS" as const },
      { name: "Assinatura Eletronica", description: "Adicione assinaturas eletronicas legais a PDFs.", icon: PenTool, href: "/br/assinatura-eletronica", tier: "BUSINESS" as const },
      { name: "Redacao de PDF", description: "Remova permanentemente texto sensivel de PDFs.", icon: Shield, href: "/br/redacao-pdf", tier: "BUSINESS" as const },
      { name: "Modelos de Fluxo", description: "Fluxos predefinidos para documentos juridicos, contabeis e de laboratorio.", icon: Layers, href: "/br/automacao", tier: "ENTERPRISE" as const },
      { name: "Extracao de Alto Volume", description: "Extraia ate 2.000 paginas de tabelas por mes para Excel.", icon: FileSpreadsheet, href: "/br/extracao-de-tabelas", tier: "ENTERPRISE" as const },
    ],
  },
]

export default function HomePagePt() {
  useEffect(() => {
    const hash = window.location.hash
    if (hash === "#tools") {
      setTimeout(() => {
        const toolsSection = document.getElementById("tools")
        if (toolsSection) {
          const headerHeight = 64
          const elementPosition = toolsSection.offsetTop
          const offsetPosition = elementPosition - headerHeight
          window.scrollTo({ top: offsetPosition, behavior: "smooth" })
        }
      }, 100)
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-14 lg:py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-5xl lg:text-7xl font-black mb-4 leading-tight text-balance">
                Ferramentas PDF para Equipes Juridicas, Contabeis, Empresariais <span className="text-orange-500">e para o Estudante do Dia a Dia</span>
              </h1>
              <p className="text-xl lg:text-2xl text-slate-300 mb-6 font-medium leading-relaxed max-w-3xl mx-auto text-pretty">
                Comprima, converta, extraia tabelas, assine e redija — em ingles, espanhol e portugues. A ferramenta de confianca de profissionais em todo o mundo.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-6 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Gift className="h-4 w-4 text-green-400" />
                  <span>10 conversoes gratis/dia</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Arquivos removidos apos o uso</span>
                </div>
                <div className="flex items-center gap-2">
                  <Crown className="h-4 w-4 text-purple-400" />
                  <span>Pro: Acesso Ilimitado</span>
                </div>
              </div>

              <p className="text-sm text-slate-400 mb-8 max-w-xl mx-auto leading-relaxed">
                Tenha 10 conversoes gratis por dia. Atualize para acesso ilimitado e arquivos maiores.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <a
                  href="#tools"
                  className="group bg-orange-500 hover:bg-orange-600 text-white font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 flex items-center gap-2"
                >
                  Comecar Gratis
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </a>
                <Link
                  href="/br/precos"
                  className="group bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-3.5 px-8 rounded-xl text-lg transition-all duration-300 border border-white/20 hover:border-white/40 flex items-center gap-2"
                >
                  Ver Ferramentas
                  <Crown className="h-5 w-5 group-hover:scale-110 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Tools Grid */}
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
                    <h3 className="text-lg font-bold text-slate-900">{category.name}</h3>
                    <p className="text-sm text-slate-500">{category.description}</p>
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
                          <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors">{tool.name}</h4>
                          <TierBadge tier={tool.tier} />
                        </div>
                        <p className="text-xs text-slate-500 leading-relaxed">{tool.description}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}

              {/* Pricing CTA */}
              <div className="max-w-2xl mx-auto my-8">
                <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 text-center">
                  <h3 className="text-xl font-black text-white mb-2 text-balance">
                    Precisa de conversoes ilimitadas ou arquivos maiores?
                  </h3>
                  <p className="text-slate-300 text-sm mb-5 max-w-lg mx-auto leading-relaxed">
                    Atualize para Pro para conversoes ilimitadas, processamento em lote e todas as ferramentas — $7.99/mes. Precisa de assinatura eletronica e automacao? Experimente Business por $13.99/mes.
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
            </div>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: Shield, label: "Seguranca", value: "HTTPS", description: "Transferencia criptografada com TLS" },
                { icon: Zap, label: "Velocidade", value: "Rapido", description: "Segundos para a maioria dos arquivos" },
                { icon: Globe, label: "Limite Gratis", value: "25MB", description: "200MB Pro · 1GB Business" },
                { icon: Gift, label: "Conversoes Gratis", value: "10/dia", description: "Ilimitadas com Pro" },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                    <stat.icon className="h-5 w-5 text-orange-600" />
                  </div>
                  <div className="text-2xl font-black text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-xs font-semibold text-slate-700">{stat.label}</div>
                  <div className="text-xs text-slate-500">{stat.description}</div>
                </div>
              ))}
            </div>

            <div className="text-center mb-6">
              <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2 text-balance">
                Por Que OmnisPDF?
              </h2>
              <p className="text-base text-slate-600 max-w-2xl mx-auto">
                Ferramentas PDF online com funcoes Pro quando voce precisar — converta, comprima, una, divida e digitalize no seu navegador.
              </p>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
              {[
                { icon: Gift, title: "Gratis para Comecar", description: "10 conversoes gratis por dia. Sem cartao de credito." },
                { icon: Zap, title: "Processamento Rapido", description: "Converta PDFs em segundos — sem instalar nada." },
                { icon: Crown, title: "Funcoes Pro", description: "Conversoes ilimitadas, arquivos maiores e acesso a todas as ferramentas." },
                { icon: Award, title: "Alta Qualidade", description: "Projetado para manter texto claro, layout limpo e formatacao intacta." },
              ].map((feature, index) => (
                <div key={index} className="text-center">
                  <div className="w-11 h-11 bg-gradient-to-br from-slate-800 to-slate-900 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-5 w-5 text-orange-500" />
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-1">{feature.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{feature.description}</p>
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl p-8 max-w-3xl mx-auto">
                <h3 className="text-xl font-black text-white mb-2 text-balance">Pronto para converter seu primeiro arquivo?</h3>
                <p className="text-slate-300 text-sm mb-5 max-w-xl mx-auto leading-relaxed">
                  10 conversoes gratis por dia. Sem conta necessaria para ferramentas gratuitas. Atualize quando quiser.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="#tools"
                    className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors shadow-lg hover:shadow-xl"
                  >
                    Comecar Gratis
                  </a>
                  <Link
                    href="/br/precos"
                    className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-all border border-white/20 hover:border-white/40"
                  >
                    Ver Planos
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-10 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-8">
                <div className="w-11 h-11 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <HelpCircle className="h-5 w-5 text-orange-600" />
                </div>
                <h2 className="text-2xl lg:text-3xl font-black text-slate-900 mb-2">
                  Perguntas Frequentes
                </h2>
                <p className="text-sm text-slate-600 max-w-2xl mx-auto leading-relaxed">
                  Tudo o que voce precisa saber sobre o OmnisPDF. Nao encontrou o que procura?{" "}
                  <a href="/br/contato" className="text-orange-500 hover:text-orange-600 font-medium underline">
                    Fale conosco
                  </a>.
                </p>
              </div>

              <div className="space-y-4">
                {[
                  { q: "O OmnisPDF e gratis?", a: "Sim. O OmnisPDF oferece um plano gratuito com 10 conversoes por dia e arquivos ate 25MB. Nao precisa de conta para ferramentas gratuitas. Atualize para Pro ($7.99/mes) para conversoes ilimitadas, todas as ferramentas e arquivos ate 200MB." },
                  { q: "Preciso criar uma conta?", a: "Nao precisa de conta para usar as ferramentas gratuitas — basta enviar seu arquivo e converter. Conta e necessaria para funcoes Pro e gerenciar sua assinatura." },
                  { q: "E seguro enviar meus arquivos?", a: "Sim. Todas as transferencias usam criptografia SSL/HTTPS. Os arquivos sao processados de forma segura e removidos automaticamente quando sua sessao termina. Nao armazenamos, revisamos ou compartilhamos seus documentos." },
                  { q: "Quais formatos de arquivo sao suportados?", a: "O OmnisPDF suporta PDF, JPG, PNG, TXT e formatos Office (Word, Excel, PowerPoint). As ferramentas incluem converter, comprimir, unir, dividir, girar, proteger, desbloquear, marca d'agua e OCR." },
                  { q: "Qual e o tamanho maximo de arquivo?", a: "Contas gratuitas podem enviar arquivos ate 25MB. Contas Pro podem enviar ate 200MB. Contas Business podem enviar ate 1GB." },
                  { q: "O que inclui o plano Pro?", a: "Pro ($7.99/mes) inclui conversoes ilimitadas, todas as ferramentas PDF (incluindo OCR, Marca d'Agua e Office para PDF), e arquivos ate 200MB. Business ($13.99/mes) adiciona assinatura eletronica, automacao e mais." },
                  { q: "Funciona no celular?", a: "Sim. O OmnisPDF funciona em navegadores modernos incluindo Chrome, Firefox, Safari e Edge em computador, tablet e celular." },
                  { q: "Como posso obter ajuda?", a: "Visite nossa pagina de Contato ou escreva para suporte@omnispdf.com. Respondemos em menos de um dia util." },
                ].map((faq, i) => (
                  <div key={i} className="bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <h3 className="font-bold text-slate-900 mb-2 text-sm">{faq.q}</h3>
                    <p className="text-slate-600 text-xs leading-relaxed">{faq.a}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 text-center">
                <div className="bg-gradient-to-r from-orange-50 to-orange-100 border border-orange-200 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-2">Ainda tem perguntas?</h3>
                  <p className="text-slate-700 text-xs mb-4 max-w-xl mx-auto leading-relaxed">
                    Nossa equipe de suporte esta aqui para ajudar voce a aproveitar o OmnisPDF ao maximo.
                  </p>
                  <div className="flex justify-center">
                    <a
                      href="mailto:suporte@omnispdf.com"
                      className="inline-flex items-center justify-center px-5 py-2.5 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-xl text-sm transition-colors duration-200 shadow-lg hover:shadow-xl"
                    >
                      Escreva para Nos
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
