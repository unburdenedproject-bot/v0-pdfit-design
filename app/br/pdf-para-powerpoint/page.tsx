import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Presentation, Zap, Shield, Download, Crown } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PDF para PowerPoint Online — PDF para PPTX | PDF.it",
  description:
    "Converta arquivos PDF em apresentacoes PowerPoint editaveis com o PDF.it. Transforme documentos estaticos em slides que voce pode editar, apresentar e compartilhar.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-powerpoint",
    languages: {
      en: "https://pdf.it.com/pdf-to-powerpoint",
      es: "https://pdf.it.com/es/pdf-a-powerpoint",
      pt: "https://pdf.it.com/br/pdf-para-powerpoint",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Como converto um PDF para PowerPoint?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Envie seu PDF para o PDF.it, clique em Converter e baixe o arquivo PowerPoint editavel. A conversao preserva o layout, texto e imagens.",
      },
    },
    {
      "@type": "Question",
      name: "A formatacao e mantida apos a conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O PDF.it preserva texto, imagens e layout da melhor forma possivel. Layouts complexos podem precisar de pequenos ajustes no PowerPoint.",
      },
    },
    {
      "@type": "Question",
      name: "Posso editar os slides apos a conversao?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O resultado e um arquivo .pptx completamente editavel que voce pode abrir no PowerPoint, Google Slides ou Keynote.",
      },
    },
    {
      "@type": "Question",
      name: "PDF para PowerPoint e gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PDF para PowerPoint e uma funcao Pro. Usuarios gratuitos podem experimentar outras ferramentas como PDF para JPG ou PDF para PNG.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter PDF para PowerPoint no celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB.",
      },
    },
  ],
}

export default function PDFparaPowerPointPage() {
  return (
    <div className="min-h-screen bg-white">
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
                <Presentation className="h-10 w-10 text-white" />
              </div>
              <div className="flex items-center justify-center gap-3 mb-4">
                <h1 className="text-4xl lg:text-5xl font-black">Converter PDF para PowerPoint</h1>
                <span className="bg-orange-100 text-orange-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                  Pro
                </span>
              </div>
              <p className="text-xl text-slate-300 mb-8">
                Converta arquivos PDF em apresentacoes PowerPoint editaveis. Transforme documentos estaticos em slides que voce pode personalizar, apresentar e compartilhar.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Slides Editaveis</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Layout Preservado</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Qualidade Profissional</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PowerPoint"
          outputFormat="PPTX"
          processingMessage="Converting your PDF to PowerPoint..."
          successMessage="Your PowerPoint presentation is ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o PDF.it para converter arquivos PDF em apresentacoes PowerPoint editaveis. Perfeito para reutilizar relatorios, propostas e documentos em slides que voce pode apresentar e personalizar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte paginas PDF em slides PowerPoint editaveis</li>
              <li>✓ Preserva texto, imagens e layout</li>
              <li>✓ Compativel com PowerPoint, Google Slides e Keynote</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — converta direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta Relatorios em Apresentacoes</h2>
              <p className="text-slate-600">
                Transforme relatorios PDF, propostas e documentos em slides editaveis. Adicione sua propria formatacao, animacoes e notas do apresentador apos a conversao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Preserva Layout e Imagens</h2>
              <p className="text-slate-600">
                O PDF.it mantem texto, imagens e estrutura de pagina intactos para que seus slides fiquem profissionais desde o inicio. Layouts complexos podem precisar de pequenos ajustes.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compativel com Google Slides e Keynote</h2>
              <p className="text-slate-600">
                O arquivo .pptx e compativel com Microsoft PowerPoint, Google Slides, Apple Keynote e outros programas de apresentacoes.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para PowerPoint</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Converter PDF para PowerPoint.",
                "Baixe seu arquivo .pptx editavel e abra no PowerPoint ou Google Slides.",
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
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Edite texto no Word" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extraia tabelas" },
                { name: "PowerPoint para PDF", href: "/br/powerpoint-para-pdf", desc: "Converta de volta para PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho primeiro" },
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
                { q: "Como converto um PDF para PowerPoint?", a: "Envie seu PDF para o PDF.it, clique em Converter e baixe o arquivo PowerPoint editavel. A conversao preserva o layout, texto e imagens." },
                { q: "A formatacao e mantida apos a conversao?", a: "O PDF.it preserva texto, imagens e layout da melhor forma possivel. Layouts complexos podem precisar de pequenos ajustes no PowerPoint." },
                { q: "Posso editar os slides apos a conversao?", a: "Sim. O resultado e um arquivo .pptx completamente editavel que voce pode abrir no PowerPoint, Google Slides ou Keynote." },
                { q: "PDF para PowerPoint e gratis?", a: "PDF para PowerPoint e uma funcao Pro. Usuarios gratuitos podem experimentar outras ferramentas como PDF para JPG ou PDF para PNG." },
                { q: "Posso converter PDF para PowerPoint no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie, converta e baixe do iPhone ou Android." },
                { q: "Qual e o tamanho maximo de arquivo que posso converter?", a: "Contas Pro podem enviar arquivos de ate 200MB. Contas Business podem enviar ate 1GB." },
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
