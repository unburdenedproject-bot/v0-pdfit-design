import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Image, Merge, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF com Imagens — Reduza PDFs com Fotos e Imagens | OmnisPDF",
  description:
    "Comprima PDFs que contem imagens e fotos. Reduza significativamente o tamanho sem perder a qualidade visual do documento.",
  alternates: {
    languages: {
      en: "/compress-pdf-images",
      es: "/es/comprimir-pdf-imagenes",
      pt: "/br/comprimir-pdf-imagens",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como o OmnisPDF comprime as imagens dentro de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "O OmnisPDF analisa cada imagem incorporada no seu PDF e aplica compressao inteligente que reduz a resolucao e otimiza o formato de cada imagem. O texto, as fontes e a formatacao do documento permanecem intactos." }
    },
    {
      "@type": "Question",
      "name": "Quanto pode ser reduzido um PDF com muitas imagens?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs com muitas imagens geralmente veem as maiores reducoes — tipicamente entre 50-80%. Os resultados exatos dependem da resolucao, quantidade e tipo de imagens no seu documento." }
    },
    {
      "@type": "Question",
      "name": "Ha perda de qualidade visivel nas imagens apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao recomendada do OmnisPDF e projetada para preservar a qualidade visual. As imagens sao otimizadas de forma inteligente — a diferenca e praticamente imperceptivel para a maioria dos documentos, incluindo portfolios e catalogos." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de imagens sao comprimidas dentro do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "O OmnisPDF comprime todos os tipos de imagens incorporadas: fotografias JPEG, graficos PNG, ilustracoes vetoriais rasterizadas e qualquer outro formato de imagem que seu PDF contenha." }
    },
    {
      "@type": "Question",
      "name": "A compressao afeta o texto ou as fontes do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O texto nos PDFs e armazenado como dados vetoriais, completamente separado das imagens. A compressao se concentra exclusivamente nas imagens incorporadas — o texto, as fontes e a formatacao permanecem 100% intactos e nitidos." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF com centenas de imagens?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF processa todas as imagens incorporadas no seu PDF independente de quantas existam. Documentos com muitas imagens — catalogos, portfolios, apresentacoes — tipicamente veem as maiores reducoes de tamanho." }
    }
  ]
}

export default function ComprimirPDFImagensPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema-pt"
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF com Imagens</h1>
              <p className="text-xl text-slate-300 mb-8">
                PDFs com muitas imagens — portfolios fotograficos, catalogos de produtos, apresentacoes e documentos digitalizados — costumam ser os maiores arquivos com que voce trabalha. O OmnisPDF comprime as imagens incorporadas de forma inteligente, reduzindo significativamente o tamanho sem perder a qualidade visual do documento.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Inteligente de Imagens</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
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
          processingMessage="Comprimindo seu PDF com imagens..."
          successMessage="Seu PDF comprimido esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir PDFs com Imagens?</h2>
            <p className="text-lg text-slate-600 mb-8">
              As imagens sao quase sempre o componente maior em um PDF. Uma unica foto de alta resolucao pode adicionar varios megabytes. Quando seu PDF contem dezenas ou centenas de imagens — fotos de produtos, ilustracoes, graficos — o tamanho do arquivo pode inflar para 50MB ou mais. A compressao inteligente do OmnisPDF se concentra nessas imagens incorporadas, reduzindo-as significativamente enquanto preserva a qualidade visual.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Foca em imagens incorporadas para maxima reducao de tamanho</li>
              <li>&#10003; Preserva a qualidade visual de fotos e ilustracoes</li>
              <li>&#10003; O texto e a formatacao permanecem intactos e nitidos</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portfolios Fotograficos</h3>
                <p className="text-slate-600">
                  Portfolios de fotografia exportados como PDFs podem facilmente ultrapassar 100MB. Comprima as imagens incorporadas para criar uma versao compartilhavel que baixe rapidamente sem deixar de mostrar seu trabalho com qualidade profissional.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Catalogos de Produtos</h3>
                <p className="text-slate-600">
                  Catalogos de e-commerce com fotos de produtos em cada pagina criam PDFs enormes. Comprima as imagens para que seu catalogo seja facil de enviar por email, baixar do site ou compartilhar com distribuidores.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Apresentacoes com Imagens</h3>
                <p className="text-slate-600">
                  Apresentacoes exportadas para PDF com graficos, fotos e diagramas podem ser muito pesadas. Comprima as imagens para compartilhar suas apresentacoes por email, subi-las em plataformas ou envia-las a clientes sem problemas de tamanho.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Digitalizados</h3>
                <p className="text-slate-600">
                  Documentos digitalizados sao essencialmente imagens de pagina inteira, o que os torna extremamente grandes. Comprima as imagens incorporadas para reduzir drasticamente o tamanho enquanto mantem o conteudo legivel.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF com Imagens</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF com imagens no OmnisPDF.",
                "Clique em Comprimir PDF — a compressao inteligente e aplicada automaticamente a todas as imagens incorporadas.",
                "Baixe seu PDF menor. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "Sem Perder Qualidade", desc: "Compressao inteligente.", href: "/br/comprimir-pdf-sem-perder-qualidade", icon: Compress },
                { name: "PDF Digitalizado", desc: "Comprime digitalizacoes.", href: "/br/comprimir-pdf-digitalizado", icon: Compress },
                { name: "PDF para JPG", desc: "Converte em imagens.", href: "/br/pdf-para-jpg", icon: Image },
                { name: "Comprimir para Email", desc: "Comprime para email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Reduzir Tamanho", desc: "Reduz tamanho geral.", href: "/br/reduzir-tamanho-pdf", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200"
                >
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm">
                    <tool.icon className="h-5 w-5 text-white" />
                  </div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-slate-500 leading-relaxed">{tool.desc}</p>
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
                { q: "Como o OmnisPDF comprime as imagens dentro de um PDF?", a: "O OmnisPDF analisa cada imagem incorporada no seu PDF e aplica compressao inteligente que reduz a resolucao e otimiza o formato de cada imagem. O texto, as fontes e a formatacao do documento permanecem intactos." },
                { q: "Quanto pode ser reduzido um PDF com muitas imagens?", a: "PDFs com muitas imagens geralmente veem as maiores reducoes — tipicamente entre 50-80%. Os resultados exatos dependem da resolucao, quantidade e tipo de imagens no seu documento." },
                { q: "Ha perda de qualidade visivel nas imagens apos comprimir?", a: "A compressao recomendada do OmnisPDF e projetada para preservar a qualidade visual. As imagens sao otimizadas de forma inteligente — a diferenca e praticamente imperceptivel para a maioria dos documentos, incluindo portfolios e catalogos." },
                { q: "Quais tipos de imagens sao comprimidas dentro do PDF?", a: "O OmnisPDF comprime todos os tipos de imagens incorporadas: fotografias JPEG, graficos PNG, ilustracoes vetoriais rasterizadas e qualquer outro formato de imagem que seu PDF contenha." },
                { q: "A compressao afeta o texto ou as fontes do PDF?", a: "Nao. O texto nos PDFs e armazenado como dados vetoriais, completamente separado das imagens. A compressao se concentra exclusivamente nas imagens incorporadas — o texto, as fontes e a formatacao permanecem 100% intactos e nitidos." },
                { q: "Posso comprimir um PDF com centenas de imagens?", a: "Sim. O OmnisPDF processa todas as imagens incorporadas no seu PDF independente de quantas existam. Documentos com muitas imagens — catalogos, portfolios, apresentacoes — tipicamente veem as maiores reducoes de tamanho." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Comprima Seus PDFs com Imagens Agora</h2>
            <p className="text-slate-300 text-lg mb-8">
              Reduza PDFs sobredimensionados cheios de imagens em segundos. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-imagens"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF com Imagens
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
