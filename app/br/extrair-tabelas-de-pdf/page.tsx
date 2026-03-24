import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Table, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Tabelas de PDF — Converta Tabelas PDF para Excel/CSV | PDF.it",
  description:
    "Extraia tabelas de arquivos PDF com o PDF.it. Converta tabelas de PDF para Excel ou CSV — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/extrair-tabelas-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-tables-from-pdf",
      es: "https://pdf.it.com/es/extraer-tablas-de-pdf",
      pt: "https://pdf.it.com/br/extrair-tabelas-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio tabelas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it, clique em Extrair e a ferramenta detectará automaticamente as tabelas no documento e as converterá para um formato editável." }
    },
    {
      "@type": "Question",
      "name": "Em que formato posso obter as tabelas extraídas?",
      "acceptedAnswer": { "@type": "Answer", "text": "As tabelas podem ser extraídas em formato de texto estruturado. Para exportação direta para Excel ou CSV, use nossas ferramentas especializadas de Tabela PDF para Excel ou Tabela PDF para CSV." }
    },
    {
      "@type": "Question",
      "name": "Funciona com tabelas complexas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A ferramenta detecta tabelas com múltiplas colunas, cabeçalhos e linhas mescladas. Tabelas muito complexas podem precisar de ajuste manual após a extração." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para extrair tabelas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair tabelas de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e extraia tabelas de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair tabelas de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairTabelasDePDFPage() {
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
                <Table className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Tabelas de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Extraia tabelas dos seus documentos PDF e converta-as em dados editáveis. Recupere dados tabulares — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Detecção Automática</span></div>
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
          outputFormat="TXT"
          processingMessage="Extraindo tabelas do seu PDF..."
          successMessage="As tabelas foram extraídas!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa extrair tabelas de um documento PDF? O extrator de tabelas do PDF.it detecta automaticamente tabelas no seu PDF e converte os dados tabulares em formato editável que você pode usar em planilhas, bancos de dados ou outros sistemas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia tabelas de qualquer PDF automaticamente</li>
              <li>✓ Perfeito para relatórios financeiros, faturas e dados tabulares</li>
              <li>✓ Detecta tabelas com múltiplas colunas e linhas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — extraia tabelas no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Relatórios Financeiros</h2>
              <p className="text-slate-600">
                Extraia tabelas de balanços, demonstrações de resultados e relatórios financeiros em PDF para analisá-los em Excel ou Google Sheets. Economize horas de digitação manual.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Faturas e Notas Fiscais</h2>
              <p className="text-slate-600">
                Obtenha dados tabulares de faturas, notas fiscais e recibos em PDF para importar em seu sistema contábil ou planilha de controle financeiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Dados de Pesquisa</h2>
              <p className="text-slate-600">
                Extraia tabelas de artigos científicos, relatórios de pesquisa e documentos acadêmicos para usar em suas próprias análises estatísticas e comparações.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Tabelas de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Extrair — as tabelas são detectadas automaticamente.",
                "Baixe os dados tabulares extraídos do documento.",
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
                { name: "Extrair Imagens de PDF", href: "/br/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Converta PDF para TXT" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Texto de digitalizações" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine vários PDFs em um" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe páginas de um PDF" },
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
                { q: "Como extraio tabelas de um PDF?", a: "Envie seu PDF para o PDF.it, clique em Extrair e a ferramenta detectará automaticamente as tabelas no documento e as converterá para um formato editável." },
                { q: "Em que formato posso obter as tabelas extraídas?", a: "As tabelas podem ser extraídas em formato de texto estruturado. Para exportação direta para Excel ou CSV, use nossas ferramentas especializadas." },
                { q: "Funciona com tabelas complexas?", a: "Sim. A ferramenta detecta tabelas com múltiplas colunas, cabeçalhos e linhas mescladas. Tabelas muito complexas podem precisar de ajuste manual após a extração." },
                { q: "É seguro enviar meu PDF para extrair tabelas?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso extrair tabelas de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e extraia tabelas de qualquer dispositivo." },
                { q: "É grátis extrair tabelas de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
