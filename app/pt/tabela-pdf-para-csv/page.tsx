import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Tabela PDF para CSV — Converta Tabelas de PDF para CSV | OmnisPDF",
  description:
    "Converta tabelas de PDF para CSV com o OmnisPDF. Extraia dados tabulares e exporte como arquivo CSV — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://omnispdf.com/pt/tabela-pdf-para-csv",
    languages: {
      en: "https://omnispdf.com/pdf-table-to-csv",
      es: "https://omnispdf.com/es/tabla-pdf-a-csv",
      pt: "https://omnispdf.com/pt/tabela-pdf-para-csv",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como converto uma tabela de PDF para CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, clique em Converter e a ferramenta detectará as tabelas automaticamente e as exportará como arquivo CSV." }
    },
    {
      "@type": "Question",
      "name": "O que é um arquivo CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "CSV (Comma-Separated Values) é um formato de texto simples que armazena dados tabulares. Pode ser aberto no Excel, Google Sheets, LibreOffice e qualquer editor de texto." }
    },
    {
      "@type": "Question",
      "name": "Funciona com tabelas grandes e complexas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A ferramenta detecta tabelas com múltiplas colunas e linhas. Tabelas muito complexas com células mescladas podem precisar de ajuste manual após a conversão." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para conversão?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso converter tabelas de PDF para CSV pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o CSV de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis converter tabela de PDF para CSV?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm conversões ilimitadas." }
    }
  ]
}

export default function TabelaPDFParaCSVPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderPt />
      <main>
        {/* Hero */}
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileSpreadsheet className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tabela PDF para CSV</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta tabelas de documentos PDF em arquivos CSV editáveis. Extraia dados tabulares — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Conversão Instantânea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Extract Text"
          outputFormat="CSV"
          processingMessage="Convertendo tabela para CSV..."
          successMessage="Seu arquivo CSV está pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa converter tabelas de um PDF para CSV? O OmnisPDF detecta automaticamente tabelas no seu documento PDF e as exporta como arquivo CSV que pode ser aberto no Excel, Google Sheets, LibreOffice ou importado em bancos de dados e sistemas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converta tabelas de PDF para CSV automaticamente</li>
              <li>✓ Compatível com Excel, Google Sheets e LibreOffice</li>
              <li>✓ Perfeito para importação em bancos de dados e sistemas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — converta no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Importação de Dados</h2>
              <p className="text-slate-600">
                Converta tabelas de relatórios e documentos em PDF para CSV e importe diretamente em bancos de dados, CRMs, ERPs ou qualquer sistema que aceite arquivos CSV.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Análise em Planilhas</h2>
              <p className="text-slate-600">
                Abra o CSV no Excel ou Google Sheets para analisar os dados, criar gráficos, aplicar fórmulas e gerar relatórios personalizados a partir dos dados do PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Automação de Processos</h2>
              <p className="text-slate-600">
                Use arquivos CSV extraídos de PDFs como entrada para scripts de automação, pipelines de dados ou processos ETL que alimentam seus sistemas internos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter Tabela de PDF para CSV</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Converter — as tabelas são detectadas automaticamente.",
                "Baixe o arquivo CSV com os dados tabulares extraídos.",
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
                { name: "Extrair Imagens de PDF", href: "/pt/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
                { name: "PDF para Texto", href: "/pt/pdf-para-texto", desc: "Converta PDF para TXT" },
                { name: "Scanner OCR", href: "/pt/scanner-ocr", desc: "Texto de digitalizações" },
                { name: "Comprimir PDF", href: "/pt/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Unir PDF", href: "/pt/unir-pdf", desc: "Combine vários PDFs em um" },
                { name: "Dividir PDF", href: "/pt/dividir-pdf", desc: "Separe páginas de um PDF" },
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
                { q: "Como converto uma tabela de PDF para CSV?", a: "Envie seu PDF para o OmnisPDF, clique em Converter e a ferramenta detectará as tabelas automaticamente e as exportará como arquivo CSV." },
                { q: "O que é um arquivo CSV?", a: "CSV (Comma-Separated Values) é um formato de texto simples que armazena dados tabulares. Pode ser aberto no Excel, Google Sheets, LibreOffice e qualquer editor de texto." },
                { q: "Funciona com tabelas grandes e complexas?", a: "Sim. A ferramenta detecta tabelas com múltiplas colunas e linhas. Tabelas muito complexas com células mescladas podem precisar de ajuste manual após a conversão." },
                { q: "É seguro enviar meu PDF para conversão?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso converter tabelas de PDF para CSV pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o CSV de qualquer dispositivo." },
                { q: "É grátis converter tabela de PDF para CSV?", a: "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm conversões ilimitadas." },
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
      <FooterPt />
    </div>
  )
}
