import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ChatWithPdfInterface } from "@/components/chat-with-pdf-interface"
import { MessageCircle, Zap, Shield } from "lucide-react"

export const metadata = {
  title: "Chat com PDF — Faça Perguntas e Obtenha Respostas Instantâneas | PDF.it",
  description:
    "Envie qualquer PDF e faça perguntas sobre seu conteúdo. Obtenha respostas instantâneas com IA de contratos, relatórios, documentos de pesquisa e qualquer documento. Função do plano Business.",
  alternates: {
    canonical: "https://pdf.it.com/br/chat-com-pdf",
    languages: {
      "en": "https://pdf.it.com/chat-with-pdf",
      "es": "https://pdf.it.com/es/chat-con-pdf",
      "pt-BR": "https://pdf.it.com/br/chat-com-pdf",
    },
  },
}

const faqs = [
  { q: "O que é Chat com PDF?", a: "Chat com PDF permite que você envie qualquer documento PDF e faça perguntas sobre seu conteúdo. Nossa IA lê todo o documento e fornece respostas precisas baseadas apenas no que está no arquivo." },
  { q: "Que tipos de documentos funcionam melhor?", a: "PDFs baseados em texto funcionam melhor — contratos, relatórios, documentos de pesquisa, manuais, demonstrações financeiras e documentos legais. Para PDFs digitalizados, primeiro execute OCR usando nossa ferramenta Scanner OCR." },
  { q: "Quantas perguntas posso fazer por documento?", a: "Não há limite no número de perguntas por documento. Envie uma vez e faça quantas perguntas precisar. A IA lembra o contexto da sua conversa." },
  { q: "Meu documento está seguro?", a: "Sim. Seu PDF é processado com segurança e excluído imediatamente após a extração de texto. Nunca armazenamos seus documentos ou histórico de conversas em nossos servidores." },
  { q: "Qual plano eu preciso?", a: "Chat com PDF é uma função do plano Business a $13.99/mês. Inclui todas as outras ferramentas Business como Extração de Tabelas, Comparar PDF, Assinatura Eletrônica e Redação de PDF." },
  { q: "Pode lidar com documentos longos?", a: "Sim. Chat com PDF funciona com documentos de até várias centenas de páginas. A IA extrai e analisa todo o conteúdo de texto para responder suas perguntas com precisão." },
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

export default function ChatComPdfPage() {
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
                <MessageCircle className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Chat com PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Envie qualquer PDF e faça perguntas sobre seu conteúdo. Obtenha respostas instantâneas com IA de contratos, relatórios, documentos de pesquisa e qualquer documento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><MessageCircle className="h-4 w-4 text-[#14D8C4]" /><span>Respostas Instantâneas</span></div>
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Impulsionado por IA</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Seguro e Privado</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">
              Pare de ler PDFs inteiros para encontrar uma resposta. Envie seu documento e faça perguntas em linguagem natural — nossa IA lê por você e entrega respostas precisas em segundos. Perfeito para contratos, documentos de pesquisa, relatórios financeiros, manuais e documentos legais.
            </p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Perguntas ilimitadas por documento</li>
              <li className="flex items-center gap-2">✓ A IA responde baseada apenas no seu documento</li>
              <li className="flex items-center gap-2">✓ Funciona com contratos, relatórios e documentos</li>
              <li className="flex items-center gap-2">✓ Seus arquivos são excluídos após o processamento</li>
            </ul>
          </div>
        </section>

        {/* Interface */}
        <ChatWithPdfInterface />

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
                { title: "Contratos e Documentos Legais", desc: "Pergunte sobre cláusulas específicas, obrigações, termos de rescisão ou seções de responsabilidade. Obtenha respostas precisas sem ler todo o acordo." },
                { title: "Documentos de Pesquisa e Relatórios", desc: "Extraia descobertas-chave, detalhes de metodologia, estatísticas e conclusões de documentos acadêmicos e relatórios empresariais instantaneamente." },
                { title: "Demonstrações Financeiras e Faturas", desc: "Pergunte sobre cifras de receita, detalhamentos de despesas, termos de pagamento e métricas financeiras de qualquer documento financeiro." },
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
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Chatear com PDF</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para selecionar" },
                { num: "2", title: "Faça uma pergunta", desc: "Digite sua pergunta em linguagem natural" },
                { num: "3", title: "Obtenha sua resposta", desc: "A IA responde instantaneamente do documento" },
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
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extrair texto de PDFs" },
                { name: "Extração de Tabelas", href: "/br/extracao-de-tabelas", desc: "Extrair tabelas para Excel" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Tornar PDFs digitalizados pesquisáveis" },
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converter PDF para Word editável" },
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
          id="faq-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
        />
      </main>
      <FooterBr />
    </div>
  )
}
