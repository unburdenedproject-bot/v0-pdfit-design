import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { ImageIcon, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Converter PDF para JPG Online — Gratis e Sem Cadastro | PDF.it",
  description:
    "Converta PDF para JPG em segundos com o PDF.it. Exporte cada pagina como imagem JPEG de alta qualidade e baixe na hora — sem instalar nada.",
  alternates: {
    canonical: "https://pdf.it.com/br/pdf-para-jpg",
    languages: {
      en: "https://pdf.it.com/pdf-to-jpg",
      es: "https://pdf.it.com/es/pdf-a-jpg",
      pt: "https://pdf.it.com/br/pdf-para-jpg",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Posso converter um PDF de varias paginas para JPG?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it converte cada pagina do PDF em uma imagem JPG individual que voce pode baixar separadamente.",
      },
    },
    {
      "@type": "Question",
      name: "Converter PDF para JPG reduz a qualidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A qualidade depende do PDF original. PDFs de alta resolucao produzem JPGs nitidos; escaneamentos de baixa resolucao podem ficar mais suaves.",
      },
    },
    {
      "@type": "Question",
      name: "Qual e a diferenca entre JPG e PNG para paginas de PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "JPG geralmente cria arquivos menores e e ideal para compartilhar. PNG e melhor para texto muito nitido e graficos. Experimente nossa ferramenta PDF para PNG se precisar de saida sem perda.",
      },
    },
    {
      "@type": "Question",
      name: "Funciona no iPhone e Android?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. O PDF.it funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens JPG.",
      },
    },
    {
      "@type": "Question",
      name: "E seguro enviar meu PDF?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim. Os arquivos sao transferidos por HTTPS e eliminados automaticamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos.",
      },
    },
    {
      "@type": "Question",
      name: "O PDF.it adiciona marcas d'agua?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O PDF.it nao adiciona marcas d'agua aos seus arquivos JPG convertidos.",
      },
    },
  ],
}

export default function PDFparaJPGPage() {
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
                <ImageIcon className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para JPG Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Converta um PDF em imagens JPG nitidas em segundos com o PDF.it — rapido, simples e direto do seu navegador.
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
                  <span>Download em ZIP</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="PDF to JPG"
          outputFormat="JPG"
          processingMessage="Converting your PDF to images..."
          successMessage="Your images are ready!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use o conversor de PDF para JPG do PDF.it para exportar as paginas do seu PDF como imagens JPEG de alta qualidade. Envie seu arquivo, converta em segundos e baixe cada pagina como imagem individual — perfeito para compartilhar, apresentacoes, pre-visualizacoes e e-mails.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Converte paginas completas de PDF em imagens JPG</li>
              <li>✓ Resultado nitido e legivel para texto, graficos e diagramas</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalacao — funciona direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Converta Paginas de PDF em Imagens JPG</h2>
              <p className="text-slate-600">
                Transforme cada pagina do seu PDF em uma imagem JPG. Cada pagina se torna um arquivo independente que voce pode usar em apresentacoes, e-mails, documentos ou redes sociais.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Mantem os Layouts Limpos e Claros</h2>
              <p className="text-slate-600">
                O PDF.it preserva o layout da pagina para que seu conteudo fique legivel e profissional apos a conversao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Download Instantaneo</h2>
              <p className="text-slate-600">
                Baixe seus JPGs imediatamente apos a conversao. Todas as paginas sao empacotadas em um arquivo ZIP para download com um unico clique.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para JPG</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Converter PDF para JPG.",
                "Baixe suas imagens JPG — uma por pagina.",
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
                { name: "PDF para PNG", href: "/br/pdf-para-png", desc: "Imagens sem perda de qualidade" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho antes de converter" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Converta apenas as paginas necessarias" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine varios PDFs em um" },
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
                  q: "Posso converter um PDF de varias paginas para JPG?",
                  a: "Sim. O PDF.it converte cada pagina do PDF em uma imagem JPG individual que voce pode baixar separadamente.",
                },
                {
                  q: "Converter PDF para JPG reduz a qualidade?",
                  a: "A qualidade depende do PDF original. PDFs de alta resolucao produzem JPGs nitidos; escaneamentos de baixa resolucao podem ficar mais suaves.",
                },
                {
                  q: "Qual e a diferenca entre JPG e PNG para paginas de PDF?",
                  a: "JPG geralmente cria arquivos menores e e ideal para compartilhar. PNG e melhor para texto muito nitido e graficos. Experimente nossa ferramenta PDF para PNG se precisar de saida sem perda.",
                },
                {
                  q: "Funciona no iPhone e Android?",
                  a: "Sim. O PDF.it funciona em navegadores moveis — envie seu PDF, converta e baixe suas imagens JPG.",
                },
                {
                  q: "E seguro enviar meu PDF?",
                  a: "Sim. Os arquivos sao transferidos por HTTPS e eliminados automaticamente apos sua sessao. Nunca armazenamos nem compartilhamos seus documentos.",
                },
                {
                  q: "O PDF.it adiciona marcas d'agua?",
                  a: "Nao. O PDF.it nao adiciona marcas d'agua aos seus arquivos JPG convertidos.",
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
