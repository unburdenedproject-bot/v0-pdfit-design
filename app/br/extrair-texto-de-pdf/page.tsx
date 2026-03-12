import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Texto de PDF — Copie Todo o Texto de um PDF | OmnisPDF",
  description:
    "Extraia todo o texto de arquivos PDF com o OmnisPDF. Copie o conteúdo textual completo de qualquer documento PDF — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://omnispdf.com/br/extrair-texto-de-pdf",
    languages: {
      en: "https://omnispdf.com/extract-text-from-pdf",
      es: "https://omnispdf.com/es/extraer-texto-de-pdf",
      pt: "https://omnispdf.com/br/extrair-texto-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como extraio texto de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, clique em Extrair Texto e baixe um arquivo TXT com todo o conteúdo textual do seu documento." }
    },
    {
      "@type": "Question",
      "name": "O texto extraído mantém a formatação original?",
      "acceptedAnswer": { "@type": "Answer", "text": "O texto é extraído em formato plano (TXT), preservando parágrafos e quebras de linha. Formatações como negrito, itálico e cores não são mantidas no arquivo de texto." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair texto de um PDF protegido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se o PDF tiver proteção contra cópia, você pode usar nossa ferramenta Desbloquear PDF primeiro para remover a restrição e depois extrair o texto." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF para extrair texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso extrair texto de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e extraia o texto de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis extrair texto de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." }
    }
  ]
}

export default function ExtrairTextoDePDFPage() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Texto de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Copie todo o conteúdo textual dos seus documentos PDF. Extraia texto completo — rápido e direto do navegador.
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
          processingMessage="Extraindo texto do seu PDF..."
          successMessage="O texto foi extraído!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa copiar o texto de um documento PDF? O extrator de texto do OmnisPDF extrai todo o conteúdo textual — parágrafos, títulos, listas, rodapés — e o disponibiliza em formato TXT limpo para usar em qualquer editor de texto, processador de palavras ou sistema.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Extraia todo o texto de qualquer PDF</li>
              <li>✓ Perfeito para reutilizar conteúdo, editar e reformatar</li>
              <li>✓ Resultado em formato TXT limpo e organizado</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — extraia texto no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reutilização de Conteúdo</h2>
              <p className="text-slate-600">
                Extraia texto de PDFs para reutilizar em novos documentos, apresentações, e-mails ou sites. Economize tempo ao não precisar redigitar o conteúdo manualmente.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edição e Revisão</h2>
              <p className="text-slate-600">
                Copie o texto de um PDF para editá-lo em um processador de palavras. Ideal quando você precisa fazer alterações em um documento que só existe em formato PDF.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Acessibilidade</h2>
              <p className="text-slate-600">
                Converta o conteúdo de PDFs em texto simples para uso com leitores de tela, tradutores automáticos ou ferramentas de texto-para-fala.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Extrair Texto de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Extrair Texto — o conteúdo é processado automaticamente.",
                "Baixe o arquivo TXT com todo o texto extraído.",
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
                { q: "Como extraio texto de um PDF?", a: "Envie seu PDF para o OmnisPDF, clique em Extrair Texto e baixe um arquivo TXT com todo o conteúdo textual do seu documento." },
                { q: "O texto extraído mantém a formatação original?", a: "O texto é extraído em formato plano (TXT), preservando parágrafos e quebras de linha. Formatações como negrito, itálico e cores não são mantidas no arquivo de texto." },
                { q: "Posso extrair texto de um PDF protegido?", a: "Se o PDF tiver proteção contra cópia, você pode usar nossa ferramenta Desbloquear PDF primeiro para remover a restrição e depois extrair o texto." },
                { q: "É seguro enviar meu PDF para extrair texto?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso extrair texto de um PDF pelo celular?", a: "Sim. O OmnisPDF funciona em navegadores móveis — envie seu PDF e extraia o texto de qualquer dispositivo." },
                { q: "É grátis extrair texto de um PDF?", a: "Sim. Contas gratuitas têm 10 extrações por dia. Contas Pro têm extrações ilimitadas." },
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
