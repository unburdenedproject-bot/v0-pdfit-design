import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { ScanLine, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Digitalizar PDF para Texto — OCR de PDF Digitalizado | PDF.it",
  description:
    "Converta PDFs digitalizados em texto editável com OCR do PDF.it. Extraia texto de documentos escaneados — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/digitalizar-pdf-para-texto",
    languages: {
      en: "https://pdf.it.com/scan-pdf-to-text",
      es: "https://pdf.it.com/es/escanear-pdf-a-texto",
      pt: "https://pdf.it.com/br/digitalizar-pdf-para-texto",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como converto um PDF digitalizado em texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF digitalizado para o PDF.it. A tecnologia OCR reconhecerá o texto nas imagens e o converterá em texto editável que pode ser copiado e usado." }
    },
    {
      "@type": "Question",
      "name": "O que é OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que identifica texto em imagens e PDFs digitalizados e o converte em texto editável e pesquisável." }
    },
    {
      "@type": "Question",
      "name": "Funciona com documentos de baixa qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "O OCR funciona melhor com imagens nítidas e boa resolução. Documentos de baixa qualidade, com manchas ou texto muito pequeno podem resultar em menor precisão." }
    },
    {
      "@type": "Question",
      "name": "Quais idiomas são suportados pelo OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "O OCR do PDF.it suporta vários idiomas incluindo português, inglês, espanhol, francês, alemão e muitos outros." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF digitalizado?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "É grátis digitalizar PDF para texto?",
      "acceptedAnswer": { "@type": "Answer", "text": "O Scanner OCR está disponível para contas Pro. Contas gratuitas podem testar com funcionalidade limitada." }
    }
  ]
}

export default function DigitalizarPDFParaTextoPage() {
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <ScanLine className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Digitalizar PDF para Texto</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta PDFs digitalizados em texto editável com tecnologia OCR. Extraia texto de documentos escaneados — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>OCR Avançado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="TXT"
          processingMessage="Reconhecendo texto no seu PDF digitalizado..."
          successMessage="O texto foi reconhecido e extraído!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Tem um PDF digitalizado e precisa do texto? O Scanner OCR do PDF.it usa tecnologia de reconhecimento óptico de caracteres para converter imagens de texto em texto editável e pesquisável. Perfeito para documentos escaneados, fotos de documentos e PDFs baseados em imagem.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converta PDFs digitalizados em texto editável</li>
              <li>✓ Tecnologia OCR com suporte a múltiplos idiomas</li>
              <li>✓ Perfeito para documentos escaneados e fotos</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — use OCR direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Digitalização de Documentos Antigos</h2>
              <p className="text-slate-600">
                Converta documentos físicos escaneados em texto digital pesquisável. Ideal para arquivos, registros históricos, contratos antigos e documentos em papel que precisam ser digitalizados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processamento de Recibos e Notas</h2>
              <p className="text-slate-600">
                Escaneou recibos, notas fiscais ou comprovantes? Use o OCR para extrair o texto e importar as informações em planilhas ou sistemas de controle financeiro.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Acessibilidade de Documentos</h2>
              <p className="text-slate-600">
                Torne documentos escaneados acessíveis convertendo-os em texto pesquisável. Essencial para leitores de tela, buscas internas e indexação de documentos.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Digitalizar PDF para Texto</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF digitalizado para o PDF.it.",
                "O OCR reconhece automaticamente o texto nas imagens.",
                "Baixe o arquivo com o texto extraído do documento.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
                { q: "Como converto um PDF digitalizado em texto?", a: "Envie seu PDF digitalizado para o PDF.it. A tecnologia OCR reconhecerá o texto nas imagens e o converterá em texto editável que pode ser copiado e usado." },
                { q: "O que é OCR?", a: "OCR (Reconhecimento Óptico de Caracteres) é uma tecnologia que identifica texto em imagens e PDFs digitalizados e o converte em texto editável e pesquisável." },
                { q: "Funciona com documentos de baixa qualidade?", a: "O OCR funciona melhor com imagens nítidas e boa resolução. Documentos de baixa qualidade, com manchas ou texto muito pequeno podem resultar em menor precisão." },
                { q: "Quais idiomas são suportados pelo OCR?", a: "O OCR do PDF.it suporta vários idiomas incluindo português, inglês, espanhol, francês, alemão e muitos outros." },
                { q: "É seguro enviar meu PDF digitalizado?", a: "Sim. Todos os arquivos são processados com segurança e eliminados automaticamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "É grátis digitalizar PDF para texto?", a: "O Scanner OCR está disponível para contas Pro. Contas gratuitas podem testar com funcionalidade limitada." },
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
