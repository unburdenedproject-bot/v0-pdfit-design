import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Online — Reduzir Tamanho de PDF Grátis | OmnisPDF",
  description:
    "Comprima arquivos PDF com o OmnisPDF para reduzir o tamanho do arquivo rapidamente. Reduza PDFs para e-mail e uploads mantendo o texto legível — sem instalar nada.",
  alternates: {
    languages: {
      en: "/compress-pdf",
      es: "/es/comprimir-pdf",
      pt: "/br/comprimir-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF com o OmnisPDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF, clique em Comprimir PDF e baixe o arquivo menor." }
    },
    {
      "@type": "Question",
      "name": "Comprimir um PDF reduz a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressão reduz o tamanho do arquivo otimizando imagens e dados. O texto geralmente permanece legível, mas PDFs com muitas imagens podem perder algum detalhe dependendo do nível de compressão." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF continua grande depois de comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se o PDF já está otimizado ou contém imagens de alta resolução, o tamanho pode não reduzir muito. Tente dividir o PDF em partes menores." }
    },
    {
      "@type": "Question",
      "name": "O OmnisPDF pode comprimir PDFs escaneados?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim — PDFs escaneados geralmente são os melhores candidatos para compressão porque contêm imagens grandes incorporadas." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores móveis — envie, comprima e baixe diretamente do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "Qual é o tamanho máximo de PDF que posso comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB." }
    }
  ]
}

export default function ComprimirPDFPage() {
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduza o tamanho dos seus arquivos PDF com o OmnisPDF. Comprima PDFs para compartilhar mais rápido, fazer uploads mais fáceis e enviar anexos menores por e-mail — rápido e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressão Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF..."
          successMessage="Your compressed PDF is ready!"
          showCompressionSelector
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Comprimir PDF do OmnisPDF para reduzir o tamanho dos seus arquivos PDF em segundos. Perfeito para anexos de e-mail, limites de upload e compartilhamento mais rápido — envie seu PDF, comprima e baixe um arquivo menor instantaneamente.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Reduza o tamanho de PDFs rapidamente para e-mail e uploads</li>
              <li>✓ Mantenha seus PDFs legíveis e compartilháveis após a compressão</li>
              <li>✓ Ideal para PDFs escaneados, arquivos com muitas imagens e documentos longos</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — comprima PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Reduza o Tamanho do PDF para E-mail e Limites de Upload</h2>
              <p className="text-slate-600">
                Muitos serviços limitam o tamanho dos anexos. O OmnisPDF ajuda a reduzir seus PDFs para que sejam mais fáceis de enviar e fazer upload sem precisar dividi-los.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprima PDFs com Muitas Imagens e Escaneados</h2>
              <p className="text-slate-600">
                Escaneamentos e PDFs baseados em fotos podem ser enormes. A compressão de PDF reduz os dados de imagem para criar um arquivo menor mantendo as páginas utilizáveis.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compressão de PDF Rápida e Online</h2>
              <p className="text-slate-600">
                Envie, comprima, baixe. Sem necessidade de software — o OmnisPDF funciona diretamente no seu navegador.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Escolha seu nível de compressão: Leve (melhor qualidade), Média (equilibrada) ou Extrema (máxima redução).",
                "Clique em Comprimir PDF e baixe seu arquivo menor.",
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se continuar muito grande" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine após comprimir" },
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteja após comprimir" },
                { name: "Marca d'Água PDF", href: "/br/marca-dagua-pdf", desc: "Marque após comprimir" },
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
                  q: "Como comprimo um PDF com o OmnisPDF?",
                  a: "Envie seu PDF, clique em Comprimir PDF e baixe o arquivo menor.",
                },
                {
                  q: "Comprimir um PDF reduz a qualidade?",
                  a: "A compressão reduz o tamanho do arquivo otimizando imagens e dados. O texto geralmente permanece legível, mas PDFs com muitas imagens podem perder algum detalhe dependendo do nível de compressão.",
                },
                {
                  q: "Por que meu PDF continua grande depois de comprimir?",
                  a: "Se o PDF já está otimizado ou contém imagens de alta resolução, o tamanho pode não reduzir muito. Tente dividir o PDF em partes menores.",
                },
                {
                  q: "O OmnisPDF pode comprimir PDFs escaneados?",
                  a: "Sim — PDFs escaneados geralmente são os melhores candidatos para compressão porque contêm imagens grandes incorporadas.",
                },
                {
                  q: "Posso comprimir um PDF pelo celular?",
                  a: "Sim. O OmnisPDF funciona em navegadores móveis — envie, comprima e baixe diretamente do seu iPhone ou Android.",
                },
                {
                  q: "Qual é o tamanho máximo de PDF que posso comprimir?",
                  a: "Contas gratuitas podem enviar arquivos de até 25MB. Contas Pro podem enviar até 200MB. Contas Business podem enviar até 1GB.",
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
