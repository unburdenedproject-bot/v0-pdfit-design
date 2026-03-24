import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { LinkIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Links de PDF — Obtenha Todos os URLs de um PDF | PDF.it",
  description:
    "Extraia todos os links e URLs de arquivos PDF com o PDF.it. Obtenha uma lista completa de hyperlinks — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/extrair-links-de-pdf",
    languages: {
      en: "https://pdf.it.com/extract-links-from-pdf",
      es: "https://pdf.it.com/es/extraer-enlaces-de-pdf",
      pt: "https://pdf.it.com/br/extrair-links-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio links de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o PDF.it e a ferramenta extrairá automaticamente todos os hyperlinks e URLs encontrados no documento." }
    },
    {
      "@type": "Question",
      "name": "Que tipos de links são extraídos?",
      "acceptedAnswer": { "@type": "Answer", "text": "A ferramenta extrai URLs de sites, links de e-mail (mailto), links internos do documento e qualquer outro hyperlink incorporado no PDF." }
    },
    {
      "@type": "Question",
      "name": "Os links extraídos são clicáveis?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Os URLs extraídos são apresentados em texto plano que você pode copiar e colar no navegador ou usar em planilhas e outros documentos." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para extrair links?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair links de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e obtenha a lista de links de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair links de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairLinksDePDFPage() {
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
                <LinkIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Links de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Obtenha todos os hyperlinks e URLs dos seus documentos PDF. Extraia links rapidamente — direto do navegador.
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
          processingMessage="Extraindo links do seu PDF..."
          successMessage="Os links foram extraídos!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa obter todos os links de um documento PDF? O extrator de links do PDF.it analisa seu arquivo e lista todos os hyperlinks encontrados — URLs de sites, endereços de e-mail e links internos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia todos os URLs e hyperlinks de qualquer PDF</li>
              <li>✓ Perfeito para auditoria de links, SEO e verificação de referências</li>
              <li>✓ Detecta links de sites, e-mails e links internos</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — extraia links no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Auditoria de Links e SEO</h2>
              <p className="text-slate-600">
                Extraia todos os links de e-books, whitepapers e relatórios em PDF para verificar se os URLs ainda estão ativos, auditar referências ou criar listas de recursos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Pesquisa e Referências</h2>
              <p className="text-slate-600">
                Obtenha rapidamente todas as referências e fontes citadas em artigos acadêmicos, relatórios de pesquisa e documentos técnicos em formato PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Verificação de Documentos</h2>
              <p className="text-slate-600">
                Verifique todos os links em propostas comerciais, apresentações e materiais de marketing para garantir que apontam para os destinos corretos antes da distribuição.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Links de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Extrair — todos os links são detectados automaticamente.",
                "Baixe a lista completa de URLs encontrados no documento.",
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
                { q: "Como extraio links de um PDF?", a: "Envie seu PDF para o PDF.it e a ferramenta extrairá automaticamente todos os hyperlinks e URLs encontrados no documento." },
                { q: "Que tipos de links são extraídos?", a: "A ferramenta extrai URLs de sites, links de e-mail (mailto), links internos do documento e qualquer outro hyperlink incorporado no PDF." },
                { q: "Os links extraídos são clicáveis?", a: "Sim. Os URLs extraídos são apresentados em texto plano que você pode copiar e colar no navegador ou usar em planilhas e outros documentos." },
                { q: "É seguro enviar meu PDF para extrair links?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso extrair links de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF e obtenha a lista de links de qualquer dispositivo." },
                { q: "É grátis extrair links de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
