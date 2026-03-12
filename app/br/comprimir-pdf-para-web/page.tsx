import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Web — Otimize PDFs para seu Site | OmnisPDF",
  description:
    "Otimize PDFs para seu site. Reduza o tamanho para carregamentos mais rapidos e melhor experiencia do usuario.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-website",
      es: "/es/comprimir-pdf-para-web",
      pt: "/br/comprimir-pdf-para-web",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como otimizo um PDF para meu site?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao OmnisPDF e clique em Comprimir. A compressao recomendada equilibra qualidade e tamanho de arquivo, produzindo um PDF que carrega rapidamente em paginas web enquanto mantem o texto e as imagens com boa aparencia." }
    },
    {
      "@type": "Question",
      "name": "Os PDFs otimizados para web ficarao bons ao baixar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. A compressao recomendada reduz o tamanho do arquivo preservando a qualidade visual. O texto permanece nitido e as imagens mantem bom detalhe — os visitantes podem baixar e ler o PDF sem problemas." }
    },
    {
      "@type": "Question",
      "name": "Por que devo comprimir PDFs antes de enviar ao meu site?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs grandes tornam os tempos de carregamento mais lentos, prejudicam o posicionamento SEO e frustram visitantes em dispositivos moveis. Comprimir PDFs garante downloads mais rapidos, menores custos de banda e melhor experiencia do usuario." }
    },
    {
      "@type": "Question",
      "name": "O tamanho do PDF afeta o SEO do site?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O Google considera a velocidade de carregamento como fator de posicionamento. Se um PDF demora muito para carregar, pode afetar negativamente seu posicionamento nas buscas. PDFs menores carregam mais rapido e contribuem para melhores pontuacoes de Core Web Vitals." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir varios PDFs para meu site de uma vez?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios Pro podem comprimir multiplos PDFs em lote. Envie todos os seus arquivos, comprima-os juntos e baixe tudo como ZIP — perfeito para otimizar toda uma biblioteca de recursos web." }
    },
    {
      "@type": "Question",
      "name": "Qual nivel de compressao devo usar para PDFs web?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao recomendada e ideal para uso web. Reduz significativamente o tamanho do arquivo enquanto mantem as imagens e o texto com aparencia profissional. Use compressao extrema apenas se precisar do arquivo mais pequeno possivel e puder aceitar alguma perda de qualidade." }
    }
  ]
}

export default function ComprimirPDFParaWebPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Web</h1>
              <p className="text-xl text-slate-300 mb-8">
                Otimize seus PDFs para seu site. Reduza o tamanho do arquivo para carregamentos mais rapidos, melhor experiencia do usuario e melhor posicionamento SEO — tudo pelo navegador, gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Inteligente</span></div>
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
          processingMessage="Otimizando seu PDF para web..."
          successMessage="Seu PDF otimizado para web esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Otimizar PDFs para seu Site?</h2>
            <p className="text-lg text-slate-600 mb-8">
              PDFs hospedados no seu site sao baixados por visitantes, indexados por mecanismos de busca e afetam sua velocidade de carregamento. PDFs grandes tornam tudo mais lento — aumentam as taxas de rejeicao, prejudicam o SEO e custam mais banda. Comprimir seus PDFs antes de envia-los ao site mantem os downloads rapidos e seus visitantes satisfeitos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; A compressao recomendada equilibra qualidade e tamanho de arquivo</li>
              <li>&#10003; Downloads mais rapidos melhoram a experiencia do usuario e reduzem a rejeicao</li>
              <li>&#10003; Arquivos menores economizam banda e custos de hospedagem</li>
              <li>&#10003; Melhor velocidade de carregamento ajuda seu posicionamento SEO</li>
              <li>&#10003; Sem instalacao — otimize PDFs direto no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Catalogos de Produtos</h3>
                <p className="text-slate-600">
                  Sites de e-commerce e fabricantes costumam hospedar catalogos de produtos como PDFs para download. Comprimi-los garante que os clientes possam baixar rapidamente sem espera, especialmente em dispositivos moveis.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Cardapios de Restaurantes</h3>
                <p className="text-slate-600">
                  Restaurantes que linkam cardapios em PDF no site precisam de arquivos de carregamento rapido. Um visitante no celular deveria poder ver seu cardapio em segundos, nao esperar um arquivo grande baixar.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentacao Tecnica</h3>
                <p className="text-slate-600">
                  Manuais de usuario, guias de instalacao e documentacao tecnica hospedados no site devem carregar rapidamente. Usuarios tecnicos esperam acesso imediato as informacoes — PDFs otimizados tornam isso possivel.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recursos para Download</h3>
                <p className="text-slate-600">
                  Whitepapers, ebooks, estudos de caso e guias usados para marketing de conteudo devem carregar rapidamente. Comprimir esses recursos significa que os visitantes tem mais chances de completar o download e interagir com seu conteudo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Otimizar um PDF para seu Site</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no OmnisPDF.",
                "Clique em Comprimir PDF — a compressao recomendada e aplicada para equilibrar qualidade e tamanho.",
                "Baixe seu PDF otimizado e envie ao seu site. Seus visitantes vao desfrutar de downloads mais rapidos.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "Comprimir para 1MB", desc: "Para limites de 1MB.", href: "/br/comprimir-pdf-para-1mb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para limites de anexo.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide PDFs grandes.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Achatar PDF", desc: "Remove campos e anotacoes.", href: "/br/achatar-pdf", icon: FileText },
                { name: "Girar PDF", desc: "Corrige a orientacao.", href: "/br/girar-pdf", icon: RotateCw },
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
                { q: "Como otimizo um PDF para meu site?", a: "Envie seu PDF ao OmnisPDF e clique em Comprimir. A compressao recomendada equilibra qualidade e tamanho de arquivo, produzindo um PDF que carrega rapidamente em paginas web enquanto mantem o texto e as imagens com boa aparencia." },
                { q: "Os PDFs otimizados para web ficarao bons ao baixar?", a: "Sim. A compressao recomendada reduz o tamanho do arquivo preservando a qualidade visual. O texto permanece nitido e as imagens mantem bom detalhe — os visitantes podem baixar e ler o PDF sem problemas." },
                { q: "Por que devo comprimir PDFs antes de enviar ao meu site?", a: "PDFs grandes tornam os tempos de carregamento mais lentos, prejudicam o posicionamento SEO e frustram visitantes em dispositivos moveis. Comprimir PDFs garante downloads mais rapidos, menores custos de banda e melhor experiencia do usuario." },
                { q: "O tamanho do PDF afeta o SEO do site?", a: "Sim. O Google considera a velocidade de carregamento como fator de posicionamento. Se um PDF demora muito para carregar, pode afetar negativamente seu posicionamento nas buscas. PDFs menores carregam mais rapido e contribuem para melhores pontuacoes de Core Web Vitals." },
                { q: "Posso comprimir varios PDFs para meu site de uma vez?", a: "Usuarios Pro podem comprimir multiplos PDFs em lote. Envie todos os seus arquivos, comprima-os juntos e baixe tudo como ZIP — perfeito para otimizar toda uma biblioteca de recursos web." },
                { q: "Qual nivel de compressao devo usar para PDFs web?", a: "A compressao recomendada e ideal para uso web. Reduz significativamente o tamanho do arquivo enquanto mantem as imagens e o texto com aparencia profissional. Use compressao extrema apenas se precisar do arquivo mais pequeno possivel e puder aceitar alguma perda de qualidade." },
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
            <h2 className="text-2xl font-black mb-4">Otimize os PDFs do seu Site</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprima seus PDFs para carregamentos mais rapidos e visitantes mais satisfeitos. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-para-web"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Otimizar PDF para Web Agora
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
