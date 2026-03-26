import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { TableExtractionInterface } from "@/components/table-extraction-interface"
import { FileSpreadsheet, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Extracao de Tabelas — Extrair Tabelas de PDF para Excel | PDF.it",
  description:
    "Extraia tabelas de documentos PDF e converta-as em planilhas Excel. Detecte automaticamente dados tabulares de relatorios financeiros, faturas e documentos de pesquisa. 200 paginas/mes no plano Business.",
  alternates: {
    canonical: "https://pdf.it.com/br/extracao-de-tabelas",
    languages: {
      "en": "https://pdf.it.com/table-extraction",
      "es": "https://pdf.it.com/es/extraccion-de-tablas",
      "pt-BR": "https://pdf.it.com/br/extracao-de-tabelas",
    },
  },
}

const faqs = [
  { q: "O que e a Extracao de Tabelas?", a: "Detecta automaticamente tabelas dentro de PDFs e as converte em planilhas Excel editaveis. Funciona com relatorios financeiros, faturas, dados cientificos e qualquer PDF com dados tabulados." },
  { q: "Quantas paginas posso extrair por mes?", a: "O plano Business ($13,99/mes) inclui 200 paginas por mes. Para maior volume, o Enterprise ($49,99/mes) oferece 2.000 paginas por mes com processamento prioritario." },
  { q: "Quais tipos de tabelas podem ser extraidos?", a: "Tabelas com bordas visiveis, tabelas sem bordas, tabelas de varias paginas e tabelas com cabecalhos mesclados. Funciona melhor com tabelas estruturadas e limpas." },
  { q: "Posso extrair tabelas de PDFs escaneados?", a: "Para melhores resultados, primeiro execute OCR usando nossa ferramenta Scanner OCR, depois use a Extracao de Tabelas no PDF processado." },
  { q: "Em qual formato e a saida?", a: "As tabelas sao exportadas como arquivos Excel (.xlsx) compativeis com Microsoft Excel, Google Sheets e LibreOffice Calc." },
  { q: "A Extracao de Tabelas e gratis?", a: "A Extracao de Tabelas e uma funcao do plano Business a $13,99/mes com 200 paginas/mes. Inclui todas as outras ferramentas Business como Comparar PDF, Assinatura Eletronica e Redacao de PDF." },
]

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": { "@type": "Answer", "text": faq.a },
  })),
}

export default function ExtracaoTabelasPageBr() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
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
                <FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extracao de Tabelas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas de documentos PDF e converta-as em planilhas Excel editaveis. Detecte automaticamente dados tabulares de relatorios financeiros, faturas e documentos de pesquisa. 200 paginas/mes no plano Business.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><FileSpreadsheet className="h-4 w-4 text-[#14D8C4]" /><span>Deteccao Automatica</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Exportacao para Excel</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>200 Paginas/Mes</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              PDFs trancam seus dados dentro de paginas estaticas. Quando voce precisa de numeros de um relatorio financeiro, itens de uma fatura ou dados de pesquisa de um documento, copiar celula por celula e lento e propenso a erros. A Extracao de Tabelas usa IA para detectar e extrair tabelas automaticamente de qualquer PDF, entregando planilhas Excel limpas prontas para analise. O plano Business inclui 200 paginas por mes — precisa de mais? Atualize para Enterprise com 2.000 paginas/mes.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Detecta tabelas com linhas, colunas e celulas</li>
              <li className="flex items-center gap-2">✓ Exporta para Excel (.xlsx) para edicao e analise</li>
              <li className="flex items-center gap-2">✓ 200 paginas/mes no plano Business</li>
              <li className="flex items-center gap-2">✓ Precisa de mais? Enterprise oferece 2.000 paginas/mes</li>
            </ul>
          </div>
        </section>

        {/* Interface */}
        <TableExtractionInterface />

        {/* Feature Blocks */}
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
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Relatorios Financeiros e Faturas", desc: "Extraia demonstracoes financeiras, balancos patrimoniais e itens de faturas diretamente para Excel para analise, modelagem e contabilidade." },
                { title: "Dados de Pesquisa e Regulatorios", desc: "Extraia tabelas de dados de artigos cientificos, relatorios de mercado e documentos governamentais em planilhas estruturadas para sua propria analise." },
                { title: "200 Paginas/Mes — Escale com Enterprise", desc: "O plano Business inclui 200 paginas de extracao de tabelas por mes. Para necessidades de alto volume, o Enterprise oferece 2.000 paginas/mes com processamento prioritario." },
              ].map((feature) => (
                <div
                  key={feature.title}
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
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extrair Tabelas de PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte seu arquivo" },
                { num: "2", title: "Tabelas detectadas", desc: "A IA identifica as estruturas das tabelas" },
                { num: "3", title: "Baixe o Excel", desc: "Obtenha seus dados em uma planilha" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div
                    className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
                      border: "1px solid rgba(20,216,196,0.25)",
                    }}
                  >
                    <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
                  </div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Extracao de Tabelas Alto Volume", href: "/br/extracao-tabelas-alto-volume", desc: "2.000 paginas/mes — Enterprise" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Converta PDFs completos para Excel" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Torne PDFs escaneados pesquisaveis" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
              ].map((tool) => (
                <div
                  key={tool.href}
                  className="rounded-xl p-[1px]"
                  style={{
                    background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
                  }}
                >
                  <Link
                    href={tool.href}
                    className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
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
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section
          className="py-16"
          style={{
            background: `
              radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
              radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
              radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
              radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
              #0E0F1E
            `,
          }}
        >
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl p-6"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                  }}
                >
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Schema */}
        <Script
          id="faq-schema-br"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterBr />
    </div>
  )
}
