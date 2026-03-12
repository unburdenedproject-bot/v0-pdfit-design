import Script from "next/script"
import { HeaderPt } from "@/components/header-pt"
import { FooterPt } from "@/components/footer-pt"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Tabela PDF para Excel — Converta Tabelas de PDF para Excel | OmnisPDF",
  description:
    "Converta tabelas de PDF para Excel com o OmnisPDF. Extraia dados tabulares e exporte como planilha Excel — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://omnispdf.com/pt/tabela-pdf-para-excel",
    languages: {
      en: "https://omnispdf.com/pdf-table-to-excel",
      es: "https://omnispdf.com/es/tabla-pdf-a-excel",
      pt: "https://omnispdf.com/pt/tabela-pdf-para-excel",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como converto uma tabela de PDF para Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, clique em Converter e a ferramenta detectará as tabelas automaticamente e as exportará como planilha Excel (.xlsx)." }
    },
    {
      "@type": "Question",
      "name": "O formato da tabela é mantido no Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A ferramenta preserva a estrutura de colunas e linhas da tabela original. Formatações visuais como cores e bordas podem variar." }
    },
    {
      "@type": "Question",
      "name": "Funciona com tabelas de várias páginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se o PDF contiver tabelas em múltiplas páginas, a ferramenta detectará e converterá todas elas para o arquivo Excel." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para conversão?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso converter tabelas de PDF para Excel pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o Excel de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis converter tabela de PDF para Excel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm conversões ilimitadas." }
    }
  ]
}

export default function TabelaPDFParaExcelPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Tabela PDF para Excel</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta tabelas de documentos PDF em planilhas Excel editáveis. Extraia dados tabulares — rápido e direto do navegador.
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
          outputFormat="XLSX"
          processingMessage="Convertendo tabela para Excel..."
          successMessage="Sua planilha Excel está pronta!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa converter tabelas de um PDF para Excel? O OmnisPDF detecta automaticamente tabelas no seu documento PDF e as exporta como planilha Excel (.xlsx) que pode ser aberta no Microsoft Excel, Google Sheets ou LibreOffice Calc.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converta tabelas de PDF para Excel automaticamente</li>
              <li>✓ Preserve a estrutura de colunas e linhas</li>
              <li>✓ Compatível com Excel, Google Sheets e LibreOffice</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — converta no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Análise Financeira</h2>
              <p className="text-slate-600">
                Converta tabelas de balanços, demonstrações financeiras e relatórios em PDF para Excel e aplique fórmulas, crie gráficos e faça análises detalhadas dos dados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Controle de Dados</h2>
              <p className="text-slate-600">
                Importe dados de faturas, notas fiscais e relatórios em PDF para planilhas Excel para consolidar informações, criar dashboards e controlar métricas do negócio.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Trabalho Acadêmico</h2>
              <p className="text-slate-600">
                Extraia tabelas de artigos científicos e relatórios de pesquisa em PDF para Excel e use os dados em suas próprias análises, comparações e visualizações.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter Tabela de PDF para Excel</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Converter — as tabelas são detectadas automaticamente.",
                "Baixe a planilha Excel com os dados tabulares extraídos.",
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
                { q: "Como converto uma tabela de PDF para Excel?", a: "Envie seu PDF para o OmnisPDF, clique em Converter e a ferramenta detectará as tabelas automaticamente e as exportará como planilha Excel (.xlsx)." },
                { q: "O formato da tabela é mantido no Excel?", a: "Sim. A ferramenta preserva a estrutura de colunas e linhas da tabela original. Formatações visuais como cores e bordas podem variar." },
                { q: "Funciona com tabelas de várias páginas?", a: "Sim. Se o PDF contiver tabelas em múltiplas páginas, a ferramenta detectará e converterá todas elas para o arquivo Excel." },
                { q: "É seguro enviar meu PDF para conversão?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso converter tabelas de PDF para Excel pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e baixe o Excel de qualquer dispositivo." },
                { q: "É grátis converter tabela de PDF para Excel?", a: "Sim. Contas gratuitas têm 10 conversões por dia. Contas Pro têm conversões ilimitadas." },
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
