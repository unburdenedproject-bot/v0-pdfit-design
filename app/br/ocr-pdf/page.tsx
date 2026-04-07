import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"

export const metadata = {
  title: "OCR PDF — Reconhecimento de Texto em PDF com OCR | PDF.it",
  description:
    "Aplique OCR em PDFs com o PDF.it. Extraia texto de PDFs digitalizados e imagens usando reconhecimento optico de caracteres — rapido, preciso e no navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/ocr-pdf",
    languages: {
      en: "https://pdf.it.com/ocr-pdf",
      es: "https://pdf.it.com/es/ocr-pdf",
      pt: "https://pdf.it.com/br/ocr-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "O que e OCR em PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "OCR (Reconhecimento Optico de Caracteres) em PDF e o processo de identificar e extrair texto de imagens dentro de um documento PDF. Isso transforma um PDF baseado em imagens em um documento com texto real, pesquisavel e copiavel.",
      },
    },
    {
      "@type": "Question",
      name: "Quando preciso usar OCR em um PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Use OCR quando voce tem um PDF onde nao consegue selecionar ou copiar o texto. Isso geralmente acontece com documentos digitalizados (escaneados), fotos de documentos ou PDFs criados a partir de imagens.",
      },
    },
    {
      "@type": "Question",
      name: "O OCR funciona com textos escritos a mao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O OCR funciona melhor com texto impresso. Textos escritos a mao podem ser parcialmente reconhecidos dependendo da legibilidade, mas os resultados variam significativamente.",
      },
    },
    {
      "@type": "Question",
      name: "O PDF resultante mantem o layout original?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O OCR do PDF.it adiciona uma camada de texto invisivel sobre as imagens originais. O layout visual do PDF permanece identico, mas agora o texto pode ser selecionado, copiado e pesquisado.",
      },
    },
    {
      "@type": "Question",
      name: "O OCR e gratuito?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O OCR e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB. Para processamento em lote e arquivos maiores, atualize para o plano Pro.",
      },
    },
  ],
}

export default function OCRPDFPage() {
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
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">OCR PDF</h1>
                <span className="bg-[#F0FDFA] text-[#0FBFB0] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Aplique OCR em PDFs para extrair e reconhecer texto de imagens e digitalizacoes. Transforme qualquer PDF em um documento pesquisavel e editavel.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>OCR Avancado</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>100% Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>PDF Pesquisavel</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="OCR Scanner"
          outputFormat="PDF"
          processingMessage="Aplicando OCR no seu PDF..."
          successMessage="OCR concluido com sucesso!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              A ferramenta OCR do PDF.it usa reconhecimento optico de caracteres para identificar texto em imagens dentro de PDFs. O resultado e um PDF pesquisavel onde voce pode selecionar, copiar e buscar texto — mantendo o layout visual original do documento.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Reconheca texto em PDFs digitalizados e baseados em imagens</li>
              <li>&#10003; Suporte a portugues, ingles, espanhol e mais idiomas</li>
              <li>&#10003; Mantenha o layout visual original do PDF</li>
              <li>&#10003; Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — aplique OCR direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">PDFs Pesquisaveis</h2>
              <p className="text-slate-600">
                Transforme digitalizacoes em PDFs pesquisaveis. Use Ctrl+F para encontrar qualquer palavra, facilitando a consulta em documentos longos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Copiar e Colar Texto</h2>
              <p className="text-slate-600">
                Apos o OCR, selecione e copie qualquer trecho de texto do PDF. Ideal para citar documentos, preencher formularios ou transcrever informacoes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Acessibilidade de Documentos</h2>
              <p className="text-slate-600">
                PDFs com texto real sao acessiveis para leitores de tela e tecnologias assistivas. Use OCR para tornar documentos acessiveis a todas as pessoas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Arquivamento Digital</h2>
              <p className="text-slate-600">
                Converta documentos fisicos digitalizados em arquivos pesquisaveis para arquivamento digital a longo prazo. Facilite a recuperacao futura de informacoes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Aplicar OCR em um PDF</h2>
            <div className="space-y-4">
              {[
                "Suba ou arraste seu PDF para o PDF.it.",
                "O OCR identifica automaticamente o texto nas imagens do PDF.",
                "Baixe seu PDF pesquisavel com texto selecionavel e copiavel.",
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
                { q: "O que e OCR em PDF?", a: "OCR (Reconhecimento Optico de Caracteres) em PDF e o processo de identificar e extrair texto de imagens dentro de um documento PDF. Isso transforma um PDF baseado em imagens em um documento com texto real, pesquisavel e copiavel." },
                { q: "Quando preciso usar OCR em um PDF?", a: "Use OCR quando voce tem um PDF onde nao consegue selecionar ou copiar o texto. Isso geralmente acontece com documentos digitalizados (escaneados), fotos de documentos ou PDFs criados a partir de imagens." },
                { q: "O OCR funciona com textos escritos a mao?", a: "O OCR funciona melhor com texto impresso. Textos escritos a mao podem ser parcialmente reconhecidos dependendo da legibilidade, mas os resultados variam significativamente." },
                { q: "O PDF resultante mantem o layout original?", a: "Sim. O OCR do PDF.it adiciona uma camada de texto invisivel sobre as imagens originais. O layout visual do PDF permanece identico, mas agora o texto pode ser selecionado, copiado e pesquisado." },
                { q: "O OCR e gratuito?", a: "O OCR e um recurso Pro do PDF.it. Voce pode testar com arquivos de ate 25MB. Para processamento em lote e arquivos maiores, atualize para o plano Pro." },
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
