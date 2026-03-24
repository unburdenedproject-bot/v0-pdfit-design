import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, Settings } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF sem Perder Qualidade — Compressao Inteligente | PDF.it",
  description:
    "Comprima PDFs sem perder qualidade visivel. Compressao inteligente que reduz o tamanho mantendo texto nitido e imagens claras.",
  alternates: {
    languages: {
      en: "/compress-pdf-without-losing-quality",
      es: "/es/comprimir-pdf-sin-perder-calidad",
      pt: "/br/comprimir-pdf-sem-perder-qualidade",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como o PDF.it comprime sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao inteligente do PDF.it elimina metadados desnecessarios, otimiza fontes incorporadas, reestrutura dados internos do PDF e aplica compressao leve de imagens. Isso reduz o tamanho do arquivo enquanto preserva a qualidade visual — texto nitido, imagens claras e formatacao intacta." }
    },
    {
      "@type": "Question",
      "name": "As imagens ficarao diferentes apos a compressao?",
      "acceptedAnswer": { "@type": "Answer", "text": "Com a compressao recomendada, as imagens sao otimizadas de forma inteligente. A diferenca e praticamente imperceptivel para a maioria dos documentos. O texto, graficos e diagramas permanecem nitidos e claros." }
    },
    {
      "@type": "Question",
      "name": "Quanto menor ficara meu PDF sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Os resultados dependem do conteudo do seu PDF. Documentos com fontes incorporadas, metadados excessivos e estruturas nao otimizadas tipicamente veem reducao de 20-50%. Arquivos ja otimizados podem ver reducoes menores." }
    },
    {
      "@type": "Question",
      "name": "O que a compressao inteligente faz exatamente?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao inteligente realiza quatro otimizacoes principais: elimina metadados desnecessarios e dados ocultos, otimiza e reduz fontes incorporadas, reestrutura os dados internos do PDF para maior eficiencia, e aplica compressao leve de imagens que preserva a qualidade visual." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir documentos profissionais sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Com certeza. A compressao recomendada e projetada especificamente para documentos onde a qualidade importa — relatorios profissionais, portfolios de design, documentos legais e material de marketing. Seu documento mantera sua aparencia profissional." }
    },
    {
      "@type": "Question",
      "name": "Ha limite de tamanho ou numero de paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem comprimir PDFs de ate 25MB. Usuarios Pro podem processar arquivos de ate 200MB com processamento em lote. Nao ha limite de numero de paginas." }
    }
  ]
}

export default function ComprimirPDFSemPerderQualidadePagePt() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <Script
        id="faq-schema-pt"
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
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF sem Perder Qualidade</h1>
              <p className="text-xl text-slate-300 mb-8">
                A compressao inteligente do PDF.it reduz o tamanho do seu PDF sem sacrificar a qualidade visual. Elimina metadados desnecessarios, otimiza fontes, reestrutura dados internos e comprime imagens de forma leve — mantendo texto nitido e imagens claras.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Qualidade Preservada</span></div>
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
          processingMessage="Comprimindo seu PDF sem perder qualidade..."
          successMessage="Seu PDF comprimido com qualidade preservada esta pronto!"
          compressionLevel="recommended"
        />

        {/* How Smart Compression Works */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como Funciona a Compressao Inteligente?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Nem toda compressao e igual. A compressao inteligente se concentra em otimizar a estrutura interna do seu PDF em vez de degradar o conteudo visivel. O resultado e um arquivo notavelmente menor que parece praticamente identico ao original.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Elimina Metadados</h3>
                </div>
                <p className="text-slate-600 text-sm">Remove dados ocultos, miniaturas incorporadas, historico de edicao e metadados desnecessarios que inflam o tamanho do arquivo sem agregar valor.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Otimiza Fontes</h3>
                </div>
                <p className="text-slate-600 text-sm">Reduz as fontes incorporadas eliminando caracteres nao utilizados e otimizando as tabelas de fontes, sem afetar como o texto aparece.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Reestrutura Dados</h3>
                </div>
                <p className="text-slate-600 text-sm">Reorganiza as estruturas internas do PDF, elimina objetos duplicados e otimiza os fluxos de dados para maior eficiencia.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3">
                  <Settings className="h-5 w-5 text-orange-500" />
                  <h3 className="font-bold text-slate-900">Compressao Leve de Imagens</h3>
                </div>
                <p className="text-slate-600 text-sm">Aplica otimizacao leve as imagens incorporadas — o suficiente para reduzir o tamanho sem diferencas visiveis a olho nu.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Profissionais</h3>
                <p className="text-slate-600">
                  Relatorios anuais, resumos financeiros e analises empresariais precisam ter aparencia impecavel. A compressao inteligente reduz o tamanho do arquivo para compartilhar facilmente enquanto mantem graficos, tabelas e formatacao impecaveis.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portfolios de Design</h3>
                <p className="text-slate-600">
                  Portfolios criativos dependem da qualidade de imagem para causar impressao. A compressao que preserva qualidade permite compartilhar seu trabalho por email ou portais de upload sem degradar seus designs.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legais</h3>
                <p className="text-slate-600">
                  Contratos, acordos e documentos legais devem permanecer completamente legiveis. A compressao inteligente otimiza o tamanho do arquivo garantindo que cada palavra, assinatura e selo permaneca nitido e legivel.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Material de Marketing</h3>
                <p className="text-slate-600">
                  Folhetos, catalogos e apresentacoes com graficos de marca precisam ter aparencia profissional. Comprima para compartilhar por email ou web sem comprometer a imagem da sua marca.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir PDF Sem Perder Qualidade</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it.",
                "Clique em Comprimir PDF — a compressao inteligente e aplicada para otimizar seu arquivo preservando a qualidade.",
                "Baixe seu PDF otimizado. Se precisar de arquivos ainda menores, tente a compressao extrema — mas tenha em mente que pode reduzir o detalhe das imagens.",
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
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "PDF com Imagens", desc: "Comprime imagens.", href: "/br/comprimir-pdf-imagens", icon: Compress },
                { name: "Compressao Rapida", desc: "Comprime instantaneamente.", href: "/br/comprimir-pdf-rapido", icon: Compress },
                { name: "Achatar PDF", desc: "Remove camadas e campos.", href: "/br/achatar-pdf", icon: FileText },
                { name: "Reduzir Tamanho", desc: "Reduz tamanho geral.", href: "/br/reduzir-tamanho-pdf", icon: Compress },
                { name: "Comprimir para Email", desc: "Comprime para email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
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
                { q: "Como o PDF.it comprime sem perder qualidade?", a: "A compressao inteligente do PDF.it elimina metadados desnecessarios, otimiza fontes incorporadas, reestrutura dados internos do PDF e aplica compressao leve de imagens. Isso reduz o tamanho do arquivo enquanto preserva a qualidade visual — texto nitido, imagens claras e formatacao intacta." },
                { q: "As imagens ficarao diferentes apos a compressao?", a: "Com a compressao recomendada, as imagens sao otimizadas de forma inteligente. A diferenca e praticamente imperceptivel para a maioria dos documentos. O texto, graficos e diagramas permanecem nitidos e claros." },
                { q: "Quanto menor ficara meu PDF sem perder qualidade?", a: "Os resultados dependem do conteudo do seu PDF. Documentos com fontes incorporadas, metadados excessivos e estruturas nao otimizadas tipicamente veem reducao de 20-50%. Arquivos ja otimizados podem ver reducoes menores." },
                { q: "O que a compressao inteligente faz exatamente?", a: "A compressao inteligente realiza quatro otimizacoes principais: elimina metadados desnecessarios e dados ocultos, otimiza e reduz fontes incorporadas, reestrutura os dados internos do PDF para maior eficiencia, e aplica compressao leve de imagens que preserva a qualidade visual." },
                { q: "Posso comprimir documentos profissionais sem perder qualidade?", a: "Com certeza. A compressao recomendada e projetada especificamente para documentos onde a qualidade importa — relatorios profissionais, portfolios de design, documentos legais e material de marketing. Seu documento mantera sua aparencia profissional." },
                { q: "Ha limite de tamanho ou numero de paginas?", a: "Usuarios gratuitos podem comprimir PDFs de ate 25MB. Usuarios Pro podem processar arquivos de ate 200MB com processamento em lote. Nao ha limite de numero de paginas." },
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
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Comprima Seu PDF — Mantenha a Qualidade</h2>
            <p className="text-slate-300 text-lg mb-8">
              A compressao inteligente reduz o tamanho do arquivo sem sacrificar a legibilidade. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-sem-perder-qualidade"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir Sem Perder Qualidade
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
