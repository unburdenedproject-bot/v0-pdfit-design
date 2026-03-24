import Script from "next/script"
import Link from "next/link"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download, Crown } from "lucide-react"

export const metadata = {
  title: "Converter PDF para Word Online — PDF para DOCX Editavel | PDF.it",
  description:
    "Converta PDF para Word editavel com o PDF.it. Transforme seus arquivos PDF em documentos DOCX que voce pode editar na hora — rapido, seguro e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-word",
    languages: {
      en: "https://pdf.it.com/pdf-to-word",
      es: "https://pdf.it.com/es/pdf-a-word",
      pt: "https://pdf.it.com/br/pdf-para-word",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converto um PDF para Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envie seu PDF para o PDF.it, clique em Converter e baixe seu documento Word editavel.",
      },
    },
    {
      "@type": "Question",
      name: "A formatacao e mantida apos a conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it preserva o layout, fontes e estrutura da melhor forma possivel. Formatacoes complexas podem variar dependendo do PDF original.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter um PDF escaneado para Word?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDFs escaneados requerem OCR para extrair o texto. Use primeiro a ferramenta Scanner OCR do PDF.it e depois converta para Word.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter PDF para Word no celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB.",
      },
    },
  ],
}

export default function PDFparaWordPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero Section */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <FileText className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Converter PDF para Word</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Converta seus arquivos PDF em documentos Word editaveis na hora. Formatacao perfeita garantida.
              </p>

              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Conversao Rapida</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>100% Seguro</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Qualidade Perfeita</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to Word"
          outputFormat="DOCX"
          processingMessage="Converting your PDF to Word..."
          successMessage="Your Word document is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta PDF para Word do PDF.it para converter arquivos PDF em documentos Word editaveis em segundos. Envie seu PDF, converta e baixe um arquivo .docx pronto para editar — sem precisar instalar nenhum software.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte PDF para documentos Word editaveis online</li>
              <li>✓ Preserva o layout, fontes e estrutura</li>
              <li>✓ Ideal para contratos, relatorios, formularios e cartas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — converta PDFs direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Edite Qualquer PDF como Documento Word</h2>
              <p className="text-slate-600">
                Converta seus PDFs em arquivos DOCX completamente editaveis. Modifique texto, tabelas e formatacao diretamente no Word, Google Docs ou qualquer processador de texto.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Formatacao Preservada com Precisao</h2>
              <p className="text-slate-600">
                O PDF.it mantem o layout, fontes e imagens do PDF original para que seu documento Word fique profissional desde o primeiro momento.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Ferramenta Pro para Profissionais</h2>
              <p className="text-slate-600">
                PDF para Word e uma funcao Pro. Atualize seu plano para ter acesso a conversoes ilimitadas, arquivos de ate 200MB e processamento prioritario.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para Word</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Converter PDF para Word.",
                "Baixe seu arquivo .docx editavel e abra no Word ou Google Docs.",
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
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extraia tabelas para planilha" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta paginas em imagens" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de PDFs escaneados" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes de converter" },
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
                { q: "Como converto um PDF para Word?", a: "Envie seu PDF para o PDF.it, clique em Converter e baixe seu documento Word editavel." },
                { q: "A formatacao e mantida apos a conversao?", a: "O PDF.it preserva o layout, fontes e estrutura da melhor forma possivel. Formatacoes complexas podem variar dependendo do PDF original." },
                { q: "Posso converter um PDF escaneado para Word?", a: "PDFs escaneados requerem OCR para extrair o texto. Use primeiro a ferramenta Scanner OCR do PDF.it e depois converta para Word." },
                { q: "Posso converter PDF para Word no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android." },
                { q: "E seguro enviar meu PDF?", a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
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
