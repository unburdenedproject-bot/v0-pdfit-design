import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Database, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Dados de PDF — Obtenha Informações de Documentos PDF | PDF.it",
  description:
    "Extraia dados, texto e informações de arquivos PDF com o PDF.it. Obtenha os dados que precisa de qualquer documento PDF — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/extrair-dados-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-data-from-pdf",
      es: "https://pdf.it.com/es/extraer-datos-de-pdf",
      pt: "https://pdf.it.com/br/extrair-dados-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio dados de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it, clique em Extrair e baixe um arquivo TXT com todos os dados e texto encontrados no seu documento PDF." }
    },
    {
      "@type": "Question",
      "name": "Que tipo de dados posso extrair de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Você pode extrair texto, números, tabelas, datas e qualquer informação textual contida no seu PDF. Para tabelas estruturadas, use nossa ferramenta de extração de tabelas." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair dados de um PDF digitalizado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para PDFs digitalizados, você precisa usar primeiro nosso Scanner OCR para converter as imagens em texto. Depois pode extrair os dados do resultado." }
    },
    {
      "@type": "Question",
      "name": "É seguro extrair dados dos meus PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados no seu navegador e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair dados de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie, extraia e baixe do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair dados de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairDadosDePDFPage() {
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
                <Database className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Dados de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Obtenha todas as informações, texto e dados dos seus documentos PDF. Extraia o que precisa — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Extração Instantânea</span></div>
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
          processingMessage="Extraindo dados do seu PDF..."
          successMessage="Seus dados foram extraídos!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa obter informações de um documento PDF? O extrator de dados do PDF.it permite extrair todo o conteúdo textual — parágrafos, números, datas, listas — e baixá-lo como texto simples para usar em qualquer outro programa ou sistema.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia todo o texto e dados de qualquer PDF</li>
              <li>✓ Perfeito para pesquisa, análise e migração de dados</li>
              <li>✓ Resultado em formato TXT limpo e organizado</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — extraia dados no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pesquisa e Análise de Dados</h2>
              <p className="text-slate-600">
                Extraia dados de relatórios, estudos e documentos acadêmicos para analisá-los em planilhas, bancos de dados ou ferramentas de análise. Economize horas de copiar e colar manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Migração de Sistemas</h2>
              <p className="text-slate-600">
                Migrando dados de um sistema antigo? Extraia as informações de PDFs gerados pelo seu sistema anterior e use-as para alimentar sua nova plataforma sem perder nenhum dado.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Geração de Relatórios</h2>
              <p className="text-slate-600">
                Obtenha dados de faturas, recibos, contratos e relatórios financeiros em PDF para criar seus próprios relatórios consolidados, comparativos ou resumos executivos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Dados de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Extrair Dados — todo o conteúdo é processado automaticamente.",
                "Baixe o arquivo TXT com todos os dados extraídos.",
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
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
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
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "Como extraio dados de um PDF?", a: "Envie seu PDF para o PDF.it, clique em Extrair e baixe um arquivo TXT com todos os dados e texto encontrados no seu documento PDF." },
                { q: "Que tipo de dados posso extrair de um PDF?", a: "Você pode extrair texto, números, tabelas, datas e qualquer informação textual contida no seu PDF. Para tabelas estruturadas, use nossa ferramenta de extração de tabelas." },
                { q: "Posso extrair dados de um PDF digitalizado?", a: "Para PDFs digitalizados, você precisa usar primeiro nosso Scanner OCR para converter as imagens em texto. Depois pode extrair os dados do resultado." },
                { q: "É seguro extrair dados dos meus PDFs?", a: "Sim. Todos os arquivos são processados no seu navegador e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso extrair dados de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie, extraia e baixe do seu iPhone ou Android." },
                { q: "É grátis extrair dados de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
