import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Converter PDF para Excel Online — Extrair Tabelas de PDF | PDF.it",
  description:
    "Converta PDF para Excel com o PDF.it. Extraia tabelas e dados dos seus arquivos PDF em planilhas .xlsx editaveis — rapido, seguro e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-excel",
    languages: {
      en: "https://pdf.it.com/pdf-to-excel",
      es: "https://pdf.it.com/es/pdf-a-excel",
      pt: "https://pdf.it.com/br/pdf-para-excel",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converto um PDF para Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envie seu PDF para o PDF.it, clique em Converter e baixe sua planilha Excel.",
      },
    },
    {
      "@type": "Question",
      name: "Os dados das tabelas sao extraidos com precisao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it extrai tabelas e dados estruturados com a maior precisao possivel. Os resultados podem variar dependendo de como o PDF original foi criado.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter um PDF escaneado para Excel?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDFs escaneados requerem OCR para extrair texto e tabelas. Use primeiro a ferramenta Scanner OCR do PDF.it e depois converta para Excel.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter PDF para Excel no celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB.",
      },
    },
  ],
}

export default function PDFparaExcelPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para Excel Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas e dados de PDFs em planilhas Excel editaveis — perfeito para relatorios financeiros, faturas e analise de dados.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Extracao de Tabelas</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Converting your PDF to Excel..."
          successMessage="Your Excel file is ready!"
        />

        {/* About */}
        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <div
              className="rounded-2xl p-8 mb-8 text-center"
              style={{
                background: "linear-gradient(135deg, rgba(20,216,196,0.06), rgba(107,124,255,0.04), rgba(232,129,58,0.03))",
                border: "1px solid rgba(20,216,196,0.12)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.04)",
              }}
            >
              <p className="text-lg text-slate-600 leading-relaxed">
                Use a ferramenta PDF para Excel do PDF.it para extrair tabelas e dados de arquivos PDF em planilhas editaveis. Envie seu PDF, converta e baixe um arquivo .xlsx pronto para analisar — sem precisar instalar nenhum software.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Converte tabelas e dados de PDF para planilhas Excel",
                "Ideal para relatorios financeiros, faturas e exportacoes de dados",
                "Baixe um arquivo .xlsx pronto para abrir no Excel ou Google Sheets",
                "Funciona no Mac, Windows, iOS, Android e Linux",
                "Sem instalacao — converta PDFs direto do navegador",
              ].map((item, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 rounded-xl px-4 py-3"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(20,216,196,0.1)",
                    boxShadow: "0 2px 8px rgba(0,0,0,0.03)",
                  }}
                >
                  <div
                    className="w-6 h-6 rounded-full flex items-center justify-center flex-shrink-0"
                    style={{
                      background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                      boxShadow: "0 0 10px rgba(20,216,196,0.25)",
                    }}
                  >
                    <svg className="w-3.5 h-3.5 text-[#14D8C4]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Tabelas de PDF para Planilhas</h2>
              <p className="text-slate-600">
                O PDF.it detecta e extrai tabelas dos seus arquivos PDF, convertendo linhas e colunas em celulas do Excel que voce pode editar, filtrar e analisar.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ideal para Relatorios Financeiros e Faturas</h2>
              <p className="text-slate-600">
                Converta extratos bancarios, faturas e relatorios em planilhas editaveis. Economize horas de trabalho manual copiando dados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Baixe .xlsx — Compativel com Excel e Google Sheets</h2>
              <p className="text-slate-600">
                Seu arquivo convertido abre diretamente no Microsoft Excel, Google Sheets ou qualquer app de planilhas. Sem necessidade de limpar a formatacao.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para Excel</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste ou clique para escolher um arquivo" },
                { num: "2", title: "Clique em Converter", desc: "O processamento leva apenas segundos" },
                { num: "3", title: "Baixe seu arquivo Excel", desc: "Abra no Excel ou Google Sheets" },
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
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para documento editavel" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta paginas em imagens" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes de converter" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: "radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255,255,255,0.07)", backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16" style={{ background: "radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-white mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {[
                { q: "Como converto um PDF para Excel?", a: "Envie seu PDF para o PDF.it, clique em Converter e baixe sua planilha Excel." },
                { q: "Os dados das tabelas sao extraidos com precisao?", a: "O PDF.it extrai tabelas e dados estruturados com a maior precisao possivel. Os resultados podem variar dependendo de como o PDF original foi criado." },
                { q: "Posso converter um PDF escaneado para Excel?", a: "PDFs escaneados requerem OCR para extrair texto e tabelas. Use primeiro a ferramenta Scanner OCR do PDF.it e depois converta para Excel." },
                { q: "Posso converter PDF para Excel no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
