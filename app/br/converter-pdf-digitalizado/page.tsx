import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "Converter PDF Digitalizado — Transforme Digitalizacoes em Texto Editavel | PDF.it",
  description:
    "Converta PDFs digitalizados em documentos editaveis com o PDF.it. Use OCR para extrair texto de imagens e digitalizacoes — rapido, preciso e no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/converter-pdf-digitalizado",
    languages: {
      en: "https://pdf.it.com/convert-scanned-pdf",
      es: "https://pdf.it.com/es/convertir-pdf-escaneado",
      pt: "https://pdf.it.com/br/converter-pdf-digitalizado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que e um PDF digitalizado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Um PDF digitalizado e um arquivo que contem imagens de paginas em vez de texto real. Ele e criado quando voce digitaliza (escaneia) um documento fisico. O texto nas imagens nao pode ser selecionado, copiado ou editado sem OCR.",
      },
    },
    {
      "@type": "Question",
      name: "O que e OCR?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCR (Reconhecimento Optico de Caracteres) e uma tecnologia que identifica e extrai texto de imagens. O PDF.it usa OCR para converter PDFs digitalizados em documentos com texto real e editavel.",
      },
    },
    {
      "@type": "Question",
      name: "Quais idiomas o OCR suporta?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O OCR do PDF.it suporta portugues, ingles, espanhol e dezenas de outros idiomas. O reconhecimento funciona com a maioria dos alfabetos e caracteres.",
      },
    },
    {
      "@type": "Question",
      name: "A qualidade da digitalizacao afeta o resultado?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Digitalizacoes com boa resolucao (300 DPI ou mais), texto nitido e bom contraste produzem melhores resultados. Documentos borrados ou com baixa resolucao podem ter erros de reconhecimento.",
      },
    },
    {
      "@type": "Question",
      name: "E gratuito converter PDFs digitalizados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O OCR e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB. Para processamento em lote e arquivos maiores, atualize para o plano Pro.",
      },
    },
  ],
}

export default function ConverterPDFDigitalizadoPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Converter PDF Digitalizado</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Transforme PDFs digitalizados em documentos com texto editavel usando OCR. Extraia texto de imagens e digitalizacoes automaticamente.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>OCR Avancado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Texto Editavel</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="PDF"
          processingMessage="Reconhecendo texto do seu PDF digitalizado..."
          successMessage="Texto extraido com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              PDFs digitalizados contem imagens de paginas, nao texto real. O PDF.it usa tecnologia OCR (Reconhecimento Optico de Caracteres) para identificar e extrair texto dessas imagens, criando um PDF pesquisavel e editavel. Ideal para documentos antigos, formularios escaneados e contratos digitalizados.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Converta imagens de texto em texto real editavel</li>
              <li>&#10003; Suporte a portugues, ingles, espanhol e mais idiomas</li>
              <li>&#10003; Crie PDFs pesquisaveis a partir de digitalizacoes</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — processe direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Digitalize Documentos Antigos</h2>
              <p className="text-slate-600">
                Converta documentos antigos digitalizados em texto pesquisavel. Torne acessiveis contratos, certidoes e documentos historicos que estao apenas em papel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Processe Formularios Escaneados</h2>
              <p className="text-slate-600">
                Extraia dados de formularios preenchidos a mao ou impressos que foram digitalizados. Transforme as informacoes em texto copiavel e editavel.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crie Arquivos Pesquisaveis</h2>
              <p className="text-slate-600">
                Converta seus PDFs digitalizados em arquivos pesquisaveis. Use Ctrl+F para encontrar qualquer palavra no documento, facilitando a consulta e organizacao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Extraia Texto para Reutilizar</h2>
              <p className="text-slate-600">
                Copie texto de documentos digitalizados para usar em outros arquivos. Ideal para transcrever informacoes de documentos fisicos para formato digital.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter um PDF Digitalizado</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF digitalizado para o PDF.it.",
                "O OCR identifica e extrai automaticamente o texto das imagens.",
                "Baixe seu PDF com texto pesquisavel e editavel.",
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
        <section className="py-16 bg-[#F3F4FF]">
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
                { q: "O que e um PDF digitalizado?", a: "Um PDF digitalizado e um arquivo que contem imagens de paginas em vez de texto real. Ele e criado quando voce digitaliza (escaneia) um documento fisico. O texto nas imagens nao pode ser selecionado, copiado ou editado sem OCR." },
                { q: "O que e OCR?", a: "OCR (Reconhecimento Optico de Caracteres) e uma tecnologia que identifica e extrai texto de imagens. O PDF.it usa OCR para converter PDFs digitalizados em documentos com texto real e editavel." },
                { q: "Quais idiomas o OCR suporta?", a: "O OCR do PDF.it suporta portugues, ingles, espanhol e dezenas de outros idiomas. O reconhecimento funciona com a maioria dos alfabetos e caracteres." },
                { q: "A qualidade da digitalizacao afeta o resultado?", a: "Sim. Digitalizacoes com boa resolucao (300 DPI ou mais), texto nitido e bom contraste produzem melhores resultados. Documentos borrados ou com baixa resolucao podem ter erros de reconhecimento." },
                { q: "E gratuito converter PDFs digitalizados?", a: "O OCR e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB. Para processamento em lote e arquivos maiores, atualize para o plano Pro." },
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
