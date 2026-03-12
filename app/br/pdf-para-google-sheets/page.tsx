import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF para Google Sheets — Converta Tabelas de PDF para Google Sheets | OmnisPDF",
  description:
    "Converta PDF para Google Sheets com o OmnisPDF. Extraia tabelas de PDFs para planilhas editaveis no Google Sheets — rapido, preciso e no navegador.",
  alternates: {
    canonical: "https://omnispdf.com/br/pdf-para-google-sheets",
    languages: {
      en: "https://omnispdf.com/pdf-to-google-sheets",
      es: "https://omnispdf.com/es/pdf-a-google-sheets",
      pt: "https://omnispdf.com/br/pdf-para-google-sheets",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converter PDF para Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Suba seu PDF no OmnisPDF para converte-lo em formato XLSX. Depois, suba o arquivo .xlsx para o Google Drive e abra com o Google Sheets para editar e analisar os dados.",
      },
    },
    {
      "@type": "Question",
      name: "As tabelas do PDF sao preservadas no Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O OmnisPDF detecta e extrai tabelas do PDF, preservando linhas e colunas. O Google Sheets mantem essa estrutura ao abrir o arquivo XLSX.",
      },
    },
    {
      "@type": "Question",
      name: "Posso usar formulas no Google Sheets apos a conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Apos abrir o arquivo no Google Sheets, voce pode usar formulas, criar graficos, filtrar dados e todas as funcionalidades normais de uma planilha.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona com PDFs digitalizados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Para PDFs digitalizados (imagens de documentos), recomendamos primeiro usar nossa ferramenta OCR para extrair o texto, e depois converter para XLSX.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito converter PDF para Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A conversao de PDF para XLSX (compativel com Google Sheets) e um recurso Pro do OmnisPDF. Voce pode testar com arquivos de ate 25MB na versao gratuita.",
      },
    },
  ],
}

export default function PDFParaGoogleSheetsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">PDF para Google Sheets</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas e dados de PDFs para o Google Sheets. Converta para XLSX e abra diretamente no Google Sheets para editar e analisar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Compativel com Google Sheets</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Convertendo seu PDF para formato Google Sheets..."
          successMessage="Seu arquivo esta pronto para o Google Sheets!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              O OmnisPDF converte seu PDF em formato XLSX, totalmente compativel com o Google Sheets. Extraia tabelas, dados numericos e informacoes estruturadas do PDF. Suba o arquivo convertido para o Google Drive e abra com o Google Sheets para analisar, editar e compartilhar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extraia tabelas de PDF para formato compativel com Google Sheets</li>
              <li>&#10003; Preserva estrutura de linhas e colunas</li>
              <li>&#10003; Use formulas, graficos e filtros no Google Sheets</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — converta direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Analise Colaborativa de Dados</h2>
              <p className="text-slate-600">
                Converta relatorios em PDF para Google Sheets e analise dados com sua equipe em tempo real. Adicione formulas, crie graficos e compartilhe insights.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Controle Financeiro</h2>
              <p className="text-slate-600">
                Extraia dados de extratos bancarios e faturas em PDF para Google Sheets. Organize suas financas, calcule totais e acompanhe gastos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pesquisa e Educacao</h2>
              <p className="text-slate-600">
                Converta dados de pesquisas academicas em PDF para planilhas. Analise resultados, crie graficos e faca calculos estatisticos no Google Sheets.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Integracao com Fluxos de Trabalho</h2>
              <p className="text-slate-600">
                Dados no Google Sheets podem ser conectados a outras ferramentas Google e aplicativos de terceiros. Converta PDFs para integrar dados nos seus fluxos de trabalho existentes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para Google Sheets</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o OmnisPDF.",
                "Clique em Converter — o OmnisPDF gera um arquivo .xlsx compativel.",
                "Baixe o .xlsx, suba para o Google Drive e abra com o Google Sheets.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extraia tabelas para planilha" },
                { name: "PDF para PowerPoint", href: "/br/pdf-para-powerpoint", desc: "Converta PDF para apresentacao" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Reconhecimento de texto" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extraia texto do PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como converter PDF para Google Sheets?", a: "Suba seu PDF no OmnisPDF para converte-lo em formato XLSX. Depois, suba o arquivo .xlsx para o Google Drive e abra com o Google Sheets para editar e analisar os dados." },
                { q: "As tabelas do PDF sao preservadas no Google Sheets?", a: "Sim. O OmnisPDF detecta e extrai tabelas do PDF, preservando linhas e colunas. O Google Sheets mantem essa estrutura ao abrir o arquivo XLSX." },
                { q: "Posso usar formulas no Google Sheets apos a conversao?", a: "Sim. Apos abrir o arquivo no Google Sheets, voce pode usar formulas, criar graficos, filtrar dados e todas as funcionalidades normais de uma planilha." },
                { q: "Funciona com PDFs digitalizados?", a: "Para PDFs digitalizados (imagens de documentos), recomendamos primeiro usar nossa ferramenta OCR para extrair o texto, e depois converter para XLSX." },
                { q: "E gratuito converter PDF para Google Sheets?", a: "A conversao de PDF para XLSX (compativel com Google Sheets) e um recurso Pro do OmnisPDF. Voce pode testar com arquivos de ate 25MB na versao gratuita." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
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
