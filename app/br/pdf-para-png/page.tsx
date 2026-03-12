import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileImage, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PDF para PNG Online — Gratis e Sem Cadastro | OmnisPDF",
  description:
    "Converta PDF para PNG em segundos com o OmnisPDF. Exporte cada pagina como imagem PNG de alta qualidade — ideal para texto nitido, graficos e transparencia.",
  alternates: {
    canonical: "https://omnispdf.com/br/pdf-para-png",
    languages: {
      en: "https://omnispdf.com/pdf-to-png",
      es: "https://omnispdf.com/es/pdf-a-png",
      pt: "https://omnispdf.com/br/pdf-para-png",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso converter um PDF de varias paginas para PNG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O OmnisPDF converte cada pagina do PDF em uma imagem PNG individual que voce pode baixar separadamente.",
      },
    },
    {
      "@type": "Question",
      name: "Por que escolher PNG em vez de JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNG e melhor para texto nitido, graficos e diagramas porque nao usa compressao agressiva. JPG costuma ser menor e melhor para paginas com muitas fotos.",
      },
    },
    {
      "@type": "Question",
      name: "Posso converter PDF para PNG no celular?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O OmnisPDF funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens PNG.",
      },
    },
    {
      "@type": "Question",
      name: "Por que meus arquivos PNG ficam borrados?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "PNGs borrados geralmente vem de um PDF de baixa qualidade, especialmente documentos escaneados. Experimente nosso Scanner OCR para PDFs escaneados.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e o tamanho maximo de arquivo que posso converter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro e Business podem enviar ate 200MB.",
      },
    },
  ],
}

export default function PDFparaPNGPage() {
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
                <FileImage className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para PNG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta um PDF em imagens PNG de alta qualidade — perfeito para texto nitido, capturas, assets de design e exportacoes limpas.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2">
                  <Zap className="h-4 w-4 text-orange-500" />
                  <span>Alta Resolucao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-orange-500" />
                  <span>Arquivos Eliminados Apos a Sessao</span>
                </div>
                <div className="flex items-center gap-2">
                  <Download className="h-4 w-4 text-orange-500" />
                  <span>Sem Cadastro</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to PNG"
          outputFormat="PNG"
          processingMessage="Converting your PDF to PNG images..."
          successMessage="Your PNG images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de PDF para PNG do OmnisPDF para exportar paginas de PDF como imagens PNG — rapido. PNG e ideal quando voce precisa de texto nitido, graficos limpos e qualidade consistente para apresentacoes, documentos e uso na web. Envie seu PDF, converta e baixe seus PNGs na hora.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte PDF para PNG com resultados nitidos e legiveis</li>
              <li>✓ Ideal para paginas com muito texto, graficos e diagramas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — funciona direto do navegador</li>
              <li>✓ Downloads faceis para paginas individuais ou documentos completos</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta Paginas de PDF em Imagens PNG</h2>
              <p className="text-slate-600">
                Transforme cada pagina de um PDF em um arquivo PNG separado. Cada pagina se torna uma imagem que voce pode usar em apresentacoes, e-mails, documentos, ferramentas de design ou sites.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Por Que Escolher PNG em Vez de JPG?</h2>
              <p className="text-slate-600">
                PNG produz texto e graficos mais limpos que JPG porque evita artefatos de compressao agressiva. Se precisar de arquivos menores, experimente nossa ferramenta PDF para JPG.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Saida de Alta Qualidade para Design e Compartilhamento</h2>
              <p className="text-slate-600">
                As exportacoes PNG sao ideais para diagramas, mockups de interface, recibos, formularios e qualquer PDF onde a clareza e importante.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para PNG</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Clique em Converter PDF para PNG.",
                "Baixe suas imagens PNG — uma por pagina.",
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
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Arquivos menores" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes de converter" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Converta apenas as paginas necessarias" },
                { name: "PDF para Texto", href: "/br/pdf-para-texto", desc: "Extraia texto do PDF" },
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
                {
                  q: "Posso converter um PDF de varias paginas para PNG?",
                  a: "Sim. O OmnisPDF converte cada pagina do PDF em uma imagem PNG individual que voce pode baixar separadamente.",
                },
                {
                  q: "Por que escolher PNG em vez de JPG?",
                  a: "PNG e melhor para texto nitido, graficos e diagramas porque nao usa compressao agressiva. JPG costuma ser menor e melhor para paginas com muitas fotos.",
                },
                {
                  q: "Posso converter PDF para PNG no celular?",
                  a: "Sim. O OmnisPDF funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens PNG.",
                },
                {
                  q: "Por que meus arquivos PNG ficam borrados?",
                  a: "PNGs borrados geralmente vem de um PDF de baixa qualidade, especialmente documentos escaneados. Experimente nosso Scanner OCR para PDFs escaneados.",
                },
                {
                  q: "E seguro enviar meu PDF?",
                  a: "Sim. Todas as transferencias sao criptografadas com SSL e seus arquivos sao eliminados imediatamente apos sua sessao.",
                },
                {
                  q: "Qual e o tamanho maximo de arquivo que posso converter?",
                  a: "Contas gratuitas podem enviar arquivos de ate 25MB. Contas Pro e Business podem enviar ate 200MB.",
                },
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
