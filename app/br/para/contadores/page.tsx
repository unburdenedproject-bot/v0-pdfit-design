import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import type { Metadata } from "next"
import { Calculator, Shield, FileSpreadsheet, Receipt, FileSearch, Archive, Lock, CheckCircle2, ArrowRight } from "lucide-react"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Ferramentas de PDF para Contadores — Extrair Tabelas, Processar Notas e Proteger Dados de Clientes | PDF.it",
  description:
    "Ferramentas de PDF criadas para equipes de contabilidade e escrituração. Extraia tabelas de extratos bancários e notas fiscais, converta PDFs para Excel, comprima arquivos e proteja documentos de clientes. Os arquivos são excluídos imediatamente.",
  keywords: [
    "ferramentas de PDF para contadores",
    "extrato bancário para Excel",
    "extração de dados de notas fiscais",
    "PDF para Excel para contadores",
    "extração de tabelas de PDF",
    "ferramentas de PDF para escrituração contábil",
    "ferramentas de PDF seguras para clientes",
    "ferramentas de PDF para documentos fiscais",
    "ferramentas de PDF para contadores CPA",
    "alternativa ao Adobe Acrobat para contadores",
  ],
  openGraph: {
    title: "Ferramentas de PDF para Contadores — Extrair Tabelas, Processar Notas e Proteger Dados de Clientes | PDF.it",
    description:
      "Extraia tabelas de extratos bancários e notas fiscais, converta PDFs para Excel, comprima arquivos e proteja documentos de clientes. Os arquivos são excluídos imediatamente.",
    url: "https://pdf.it.com/br/para/contadores",
    siteName: "PDF.it",
    images: [{ url: "https://pdf.it.com/og-logo.png", width: 1736, height: 846, alt: "PDF.it para Contadores" }],
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ferramentas de PDF para Contadores — Extrair Tabelas, Processar Notas e Proteger Dados de Clientes",
    description:
      "Extraia tabelas de extratos bancários e notas fiscais, converta PDFs para Excel e proteja documentos de clientes. Os arquivos são excluídos imediatamente.",
    images: ["https://pdf.it.com/og-logo.png"],
  },
  alternates: {
    canonical: "https://pdf.it.com/br/para/contadores",
    languages: {
      en: "https://pdf.it.com/for/accountants",
      es: "https://pdf.it.com/es/para/contadores",
      pt: "https://pdf.it.com/br/para/contadores",
    },
  },
}

const faqs = [
  {
    q: "Qual é a precisão da extração de tabelas em extratos bancários?",
    a: "O PDF.it usa o Form Parser do Google Document AI por baixo dos panos, que lida de forma confiável com extratos bancários multicoluna, faturas de cartão de crédito e notas fiscais de fornecedores com tabelas estruturadas. Para extratos digitalizados, rode o OCR primeiro para que o texto fique legível por máquina e depois faça a extração.",
  },
  {
    q: "Posso extrair tabelas de PDFs digitalizados?",
    a: "Sim. Envie o PDF digitalizado pelo nosso scanner OCR primeiro para adicionar uma camada de texto, depois rode a extração de tabelas. O fluxo combinado transforma extratos em papel, arquivos históricos e notas fiscais enviadas por fax em arquivos XLSX.",
  },
  {
    q: "O PDF.it armazena documentos financeiros dos clientes?",
    a: "Não. Os arquivos são processados em tempo real e excluídos no momento em que você baixa o resultado. Todas as transferências são criptografadas via SSL. Nunca armazenamos, lemos, indexamos ou compartilhamos seus documentos — o que importa muito quando você lida com informes de rendimentos, DIRPF, extratos bancários e declarações de IR.",
  },
  {
    q: "Posso proteger declarações fiscais com senha antes de enviá-las aos clientes?",
    a: "Sim. Nossa ferramenta de criptografia de PDF aplica criptografia AES-256 com a senha da sua escolha. Muitos contadores combinam a senha com os últimos quatro dígitos do CPF do cliente ou uma frase compartilhada estabelecida durante o onboarding.",
  },
  {
    q: "Qual plano cobre os fluxos contábeis?",
    a: "O Business é o ideal para a maioria dos escritórios: 200 páginas/mês de extração de tabelas, arquivos de 1GB, conversões ilimitadas e assinatura eletrônica para cartas-contrato. Escritórios de alto volume ou quem está digitalizando arquivos históricos devem olhar para o Enterprise pelos 2.000 páginas/mês.",
  },
]

export default function ParaContadoresPage() {
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
      <HeaderBr />
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
                <Calculator className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Ferramentas de PDF Criadas para Equipes de Contabilidade</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas de extratos bancários, digitalize notas fiscais de fornecedores, converta PDFs para Excel e proteja declarações de clientes — tudo sem sair do navegador. Os arquivos são excluídos imediatamente após o download.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Link
                  href="/br/cadastro"
                  className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                >
                  Iniciar teste grátis <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
                <Link
                  href="/br/precos"
                  className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                >
                  Ver preços
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── The Problem ── */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Onde Equipes Contábeis Perdem Horas Toda Semana</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Boa parte da semana de um contador é gasta tirando números de PDFs — extratos bancários, notas fiscais de fornecedores, relatórios de despesas, informes de rendimentos. O PDF.it reduz esse trabalho de horas para minutos.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "Extratos bancários presos em PDFs", desc: "O fechamento do mês traz dezenas de extratos para conciliar. Redigitar valores no Excel é lento e propenso a erros." },
                { title: "Notas fiscais que não se encaixam no sistema contábil", desc: "Notas fiscais de fornecedores chegam em layouts inconsistentes. Levar os itens de linha para o software contábil exige digitação manual." },
                { title: "Arquivos históricos digitalizados", desc: "Anos de extratos em papel guardados em arquivos físicos precisam virar legíveis por máquina antes de serem úteis para auditorias ou revisões." },
                { title: "Pacotes de declaração fiscal grandes", desc: "Declarações consolidadas com anexos e demonstrativos facilmente passam de 50MB — grandes demais para portais de cliente e anexos de e-mail." },
                { title: "Cartas-contrato que ficam sem assinar", desc: "Imprimir, assinar, digitalizar e enviar cartas-contrato por e-mail é um gargalo no início de toda temporada de IR." },
                { title: "Dados de clientes que precisam ficar privados", desc: "CPFs, CNPJs e saldos de contas não podem trafegar por canais inseguros. Proteger PDFs de saída com senha é inegociável." },
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">As Seis Ferramentas Que Todo Escritório Usa</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center max-w-3xl mx-auto mb-10">
              Todas as ferramentas abaixo rodam no seu navegador. Sem plugins, sem instalações no desktop, sem arquivos hospedados nos servidores de um fornecedor.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { icon: FileSpreadsheet, title: "Extração de Tabelas para Excel", desc: "Extraia itens de linha de extratos bancários, faturas de cartão e notas fiscais de fornecedores direto para XLSX. Funciona tanto em PDFs digitais quanto digitalizados.", href: "/br/extracao-de-tabelas", cta: "Extrair tabelas" },
                { icon: FileSpreadsheet, title: "PDF para Excel", desc: "Converta PDFs inteiros para XLSX em uma única passagem. Preserva a estrutura das colunas, cabeçalhos e formatação de números sempre que possível.", href: "/br/pdf-para-excel", cta: "Converter PDF para Excel" },
                { icon: Receipt, title: "Extração Inteligente", desc: "Peça campos específicos — número da nota, vencimento, total, nome do fornecedor — e receba uma saída JSON estruturada. Excelente para processar notas fiscais em lote.", href: "/br/extracao-inteligente", cta: "Extrair dados" },
                { icon: FileSearch, title: "Scanner OCR", desc: "Transforme extratos digitalizados e notas fiscais enviadas por fax em texto pesquisável e extraível. Primeiro passo necessário antes de extrair tabelas de digitalizações.", href: "/br/scanner-ocr", cta: "Rodar OCR" },
                { icon: Lock, title: "Proteger com Senha e Assinar", desc: "Criptografia AES-256 em declarações fiscais antes de você enviá-las. Assinatura eletrônica válida apenas para a sessão para cartas-contrato — nenhuma biblioteca de assinaturas no servidor.", href: "/br/criptografar-pdf", cta: "Proteger um PDF" },
                { icon: Archive, title: "Comprimir e Unir Arquivos", desc: "Combine anexos, demonstrativos e planilhas em um único PDF limpo. Comprima pacotes grandes para caber nos limites de upload do portal do cliente.", href: "/br/comprimir-pdf", cta: "Comprimir um PDF" },
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
            <h2 className="text-3xl font-black text-slate-900 mb-4 text-center">Quatro Fluxos de Trabalho Reais</h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center mb-10">
              Estas são sequências que escriturários, contadores e equipes financeiras internas executam no PDF.it durante o fechamento, a auditoria e a temporada de IR.
            </p>
            <div className="space-y-6">
              {[
                {
                  title: "Conciliando um mês de extratos bancários",
                  steps: [
                    "Envie cada extrato para /br/extracao-de-tabelas.",
                    "Deixe o Document AI analisar as transações em linhas estruturadas.",
                    "Baixe o XLSX e importe para o seu sistema contábil ou para o livro razão.",
                    "O tempo total de conciliação cai de horas de redigitação para minutos de revisão.",
                  ],
                },
                {
                  title: "Digitalizando uma pilha de notas fiscais de fornecedores",
                  steps: [
                    "Passe cada nota por /br/extracao-inteligente.",
                    "Solicite número da nota, data, fornecedor, subtotal, imposto e total como campos.",
                    "Receba um JSON limpo que você pode colar no seu sistema contábil ou de contas a pagar.",
                  ],
                },
                {
                  title: "Preparando uma declaração consolidada para um cliente",
                  steps: [
                    "Una a declaração principal, anexos e demonstrativos em /br/unir-pdf.",
                    "Comprima o arquivo unido em /br/comprimir-pdf se ele exceder o limite de tamanho do portal do cliente.",
                    "Proteja o PDF final com senha em /br/criptografar-pdf antes de enviar.",
                  ],
                },
                {
                  title: "Digitalizando um arquivo histórico em papel",
                  steps: [
                    "Digitalize um lote de extratos antigos a 300 DPI.",
                    "Passe-os por /br/scanner-ocr para tornar o texto extraível.",
                    "Empurre os PDFs pesquisáveis por /br/extracao-de-tabelas para montar um Excel pronto para auditoria.",
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
            <h2 className="text-3xl font-black text-white mb-4 text-center">Qual Plano Atende um Escritório de Contabilidade?</h2>
            <p className="text-lg text-slate-300 leading-relaxed text-center mb-10">
              A extração de tabelas é do plano Business. É por aí que a maioria dos escritórios começa. Escritórios de alto volume e quem digitaliza arquivos históricos migram para o Enterprise pelo limite de 2.000 páginas/mês.
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
                  <span className="text-[#6B7CFF] font-semibold">US$ 13,99/mês</span>
                  <span className="text-slate-400 text-sm">— recomendado para contadores e escriturários</span>
                </div>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                  {[
                    "Extração de tabelas — 200 páginas/mês",
                    "Extração inteligente para campos de notas fiscais",
                    "PDF para Excel / Word / PowerPoint",
                    "Scanner OCR",
                    "Assinatura eletrônica válida apenas para a sessão",
                    "Proteção por senha e criptografia AES-256",
                    "Arquivos de até 1GB",
                    "Conversões ilimitadas e processamento em lote",
                  ].map((feature) => (
                    <li key={feature} className="flex items-start gap-2 text-slate-300 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-[#14D8C4] mt-0.5 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  <Link
                    href="/br/cadastro"
                    className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors"
                  >
                    Iniciar teste grátis de 30 dias
                  </Link>
                  <Link
                    href="/br/precos"
                    className="inline-flex items-center justify-center border border-slate-600 text-white hover:bg-slate-800 font-semibold py-3 px-6 rounded-xl transition-colors"
                  >
                    Comparar todos os planos
                  </Link>
                </div>
                <p className="text-xs text-slate-400 mt-4">Conciliando mais de 200 páginas/mês? O Enterprise libera 2.000 páginas + fila de processamento prioritária.</p>
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
                  <h2 className="text-2xl font-black text-slate-900 mb-2">Os Dados do Cliente Permanecem Privados</h2>
                  <p className="text-slate-600 leading-relaxed">
                    O PDF.it processa seus arquivos em tempo real e os exclui no momento em que você baixa o resultado. Nunca armazenamos, lemos, indexamos ou compartilhamos seus documentos. Todas as transferências são criptografadas via SSL. Declarações fiscais, informes de rendimentos e extratos bancários nunca ficam em nossos servidores.
                  </p>
                </div>
              </div>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-700">
                {[
                  "Arquivos excluídos imediatamente após o download",
                  "Transferências criptografadas via SSL",
                  "Criptografia AES-256 em PDFs protegidos por senha",
                  "Sem bibliotecas de assinaturas reutilizáveis no servidor",
                  "Sem armazenamento de arquivos, jamais",
                  "Sem indexação, sem análise do conteúdo dos documentos",
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
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
            <h2 className="text-3xl font-black text-slate-900 mb-4">30 Dias do Plano Business, Grátis</h2>
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              Comece com o plano Business completo — extração de tabelas, extração inteligente, assinatura eletrônica, arquivos de 1GB. Sem cobrança por 30 dias. Cancele quando quiser.
            </p>
            <Link
              href="/br/cadastro"
              className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-8 rounded-xl text-lg transition-colors"
            >
              Iniciar teste grátis <ArrowRight className="h-5 w-5 ml-2" />
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
