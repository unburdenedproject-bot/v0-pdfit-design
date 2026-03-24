import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "PDF para XLSX — Converta PDF para Planilha Excel Editavel | PDF.it",
  description:
    "Converta PDF para XLSX com o PDF.it. Extraia tabelas e dados de PDFs para planilhas Excel editaveis — rapido, preciso e direto no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-xlsx",
    languages: {
      en: "https://pdf.it.com/pdf-to-xlsx",
      es: "https://pdf.it.com/es/pdf-a-xlsx",
      pt: "https://pdf.it.com/br/pdf-para-xlsx",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Qual a diferenca entre PDF para Excel e PDF para XLSX?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sao a mesma coisa. XLSX e o formato nativo do Microsoft Excel. Ao converter PDF para XLSX voce obtem um arquivo .xlsx que pode abrir e editar no Excel, Google Sheets ou qualquer planilha compativel.",
      },
    },
    {
      "@type": "Question",
      name: "As tabelas do PDF sao preservadas na conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it detecta e extrai tabelas do PDF, preservando a estrutura de linhas e colunas no arquivo XLSX resultante.",
      },
    },
    {
      "@type": "Question",
      name: "Posso editar o arquivo XLSX no Google Sheets?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Baixe o arquivo .xlsx, suba para o Google Drive e abra com o Google Sheets para edita-lo diretamente no navegador.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona com PDFs que contem apenas texto?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, mas o melhor resultado e obtido com PDFs que contem tabelas estruturadas. Texto corrido sera convertido, mas pode nao se organizar em colunas de forma ideal.",
      },
    },
    {
      "@type": "Question",
      name: "Qual o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas gratuitas podem subir arquivos de ate 25MB. Contas Pro e Business podem subir arquivos de ate 200MB.",
      },
    },
  ],
}

export default function PDFParaXLSXPage() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">PDF para XLSX</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas e dados de PDFs para planilhas Excel editaveis. Converta instantaneamente para o formato XLSX e edite no Excel ou Google Sheets.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Formato XLSX</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Excel"
          outputFormat="XLSX"
          processingMessage="Convertendo seu PDF para XLSX..."
          successMessage="Seu arquivo XLSX esta pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta PDF para XLSX do PDF.it para extrair tabelas e dados de PDFs em planilhas Excel editaveis. O formato XLSX e o padrao do Microsoft Excel — compativel com Excel, Google Sheets, LibreOffice Calc e muito mais. Suba seu PDF, converta e baixe um arquivo .xlsx pronto para analise.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Extraia tabelas de PDF para formato XLSX</li>
              <li>&#10003; Preserva estrutura de linhas e colunas</li>
              <li>&#10003; Compativel com Excel, Google Sheets e LibreOffice</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — converta PDFs direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Analise Dados Financeiros</h2>
              <p className="text-slate-600">
                Converta demonstracoes financeiras, balancos e relatorios contabeis em PDF para XLSX. Analise os dados com formulas e graficos no Excel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Tabelas de Relatorios</h2>
              <p className="text-slate-600">
                Transforme tabelas de relatorios empresariais em planilhas editaveis. Atualize dados, crie graficos e compartilhe com sua equipe.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processe Faturas e Recibos</h2>
              <p className="text-slate-600">
                Converta faturas e recibos em PDF para XLSX para facilitar a contabilidade. Organize itens, calcule totais e integre com seu sistema financeiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Trabalhe com Dados Academicos</h2>
              <p className="text-slate-600">
                Extraia dados de pesquisas e artigos academicos em PDF para planilhas. Analise resultados, crie graficos e faca calculos estatisticos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para XLSX</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "Clique em Converter PDF para XLSX.",
                "Baixe seu arquivo .xlsx editavel e abra no Excel ou Google Sheets.",
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
                { q: "Qual a diferenca entre PDF para Excel e PDF para XLSX?", a: "Sao a mesma coisa. XLSX e o formato nativo do Microsoft Excel. Ao converter PDF para XLSX voce obtem um arquivo .xlsx que pode abrir e editar no Excel, Google Sheets ou qualquer planilha compativel." },
                { q: "As tabelas do PDF sao preservadas na conversao?", a: "Sim. O PDF.it detecta e extrai tabelas do PDF, preservando a estrutura de linhas e colunas no arquivo XLSX resultante." },
                { q: "Posso editar o arquivo XLSX no Google Sheets?", a: "Sim. Baixe o arquivo .xlsx, suba para o Google Drive e abra com o Google Sheets para edita-lo diretamente no navegador." },
                { q: "Funciona com PDFs que contem apenas texto?", a: "Sim, mas o melhor resultado e obtido com PDFs que contem tabelas estruturadas. Texto corrido sera convertido, mas pode nao se organizar em colunas de forma ideal." },
                { q: "Qual o tamanho maximo de arquivo que posso converter?", a: "Contas gratuitas podem subir arquivos de ate 25MB. Contas Pro e Business podem subir arquivos de ate 200MB." },
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
