import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { SmartExtractionInterface } from "@/components/smart-extraction-interface"
import { FileSearch, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Extração Inteligente de Dados — Extraia Nomes, Datas e Dados Chave de PDFs | PDF.it",
  description:
    "Extraia automaticamente nomes, datas, valores, informações de contato e campos chave de qualquer PDF. Extração de dados com IA para contratos, faturas, relatórios e formulários. Função do plano Business.",
  alternates: {
    canonical: "https://pdf.it.com/br/extracao-inteligente",
    languages: {
      "en": "https://pdf.it.com/smart-extraction",
      "es": "https://pdf.it.com/es/extraccion-inteligente",
      "pt-BR": "https://pdf.it.com/br/extracao-inteligente",
    },
  },
}

const faqs = [
  { q: "O que é a Extração Inteligente de Dados?", a: "A Extração Inteligente usa IA para identificar e extrair automaticamente dados estruturados de qualquer PDF — nomes, datas, valores monetários, informações de contato, campos chave e cláusulas importantes. Sem copiar manualmente." },
  { q: "Que tipos de documentos funcionam melhor?", a: "Contratos, faturas, recibos, demonstrações financeiras, documentos legais, formulários, relatórios e cartas. Qualquer documento com informações estruturadas como nomes, datas ou valores." },
  { q: "Como é diferente da Extração de Tabelas?", a: "A Extração de Tabelas extrai dados tabulares (linhas e colunas) para Excel. A Extração Inteligente encontra dados espalhados pelo documento — nomes em cabeçalhos, datas em parágrafos, valores em cláusulas — e os organiza em categorias estruturadas." },
  { q: "Posso baixar os dados extraídos?", a: "Sim. Todos os dados extraídos podem ser baixados como arquivo JSON, compatível com planilhas, bancos de dados e ferramentas de automação." },
  { q: "Qual plano eu preciso?", a: "A Extração Inteligente é uma função do plano Business a $13.99/mês. Inclui todas as outras ferramentas Business como Chat com PDF, Extração de Tabelas, Comparar PDF, Assinatura Eletrônica e Redação de PDF." },
  { q: "Meu documento está seguro?", a: "Sim. Seu PDF é processado com segurança e excluído imediatamente após a extração. Nunca armazenamos seus documentos em nossos servidores." },
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

export default function ExtracaoInteligentePage() {
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
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}>
                <FileSearch className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extração Inteligente de Dados</h1>
              <p className="text-xl text-slate-300 mb-8">Extraia automaticamente nomes, datas, valores, informações de contato e campos chave de qualquer documento PDF com IA.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><FileSearch className="h-4 w-4 text-[#14D8C4]" /><span>Impulsionado por IA</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Resultados Instantâneos</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Seguro e Privado</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">Pare de copiar dados manualmente de PDFs. Envie seu documento e nossa IA identifica e extrai automaticamente pessoas, organizações, datas, valores, dados de contato, campos chave e cláusulas importantes — organizados e prontos para uso.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extraia nomes, funções e organizações</li>
              <li className="flex items-center gap-2">✓ Identifique datas, valores e moedas</li>
              <li className="flex items-center gap-2">✓ Encontre emails, telefones e endereços</li>
              <li className="flex items-center gap-2">✓ Baixe como JSON para qualquer fluxo</li>
            </ul>
          </div>
        </section>

        <SmartExtractionInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Contratos e Documentos Legais", desc: "Extraia nomes das partes, datas efetivas, cláusulas de rescisão, limites de responsabilidade e obrigações chave de qualquer contrato ou acordo." },
                { title: "Faturas e Documentos Financeiros", desc: "Identifique números de fatura, datas de vencimento, itens de linha, totais, impostos e termos de pagamento de faturas, recibos e extratos." },
                { title: "Formulários e Relatórios", desc: "Extraia valores de campos, informações de respondentes, datas, números de referência e descobertas chave de formulários, solicitações e relatórios." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Funciona a Extração Inteligente</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para selecionar" },
                { num: "2", title: "A IA extrai dados", desc: "Nomes, datas, valores e mais" },
                { num: "3", title: "Revise e baixe", desc: "Obtenha dados estruturados como JSON" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}>
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
                { name: "Extração de Tabelas", href: "/br/extracao-de-tabelas", desc: "Extrair tabelas para Excel" },
                { name: "Chat com PDF", href: "/br/chat-com-pdf", desc: "Perguntas sobre PDFs" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extrair texto de PDFs" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Tornar PDFs pesquisáveis" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      </main>
      <FooterBr />
    </div>
  )
}
