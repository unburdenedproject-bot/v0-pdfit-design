import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, HardDrive } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Reduzir Tamanho de PDF — Deixe seu PDF Menor | PDF.it",
  description:
    "Reduza o tamanho de qualquer arquivo PDF online. Compressao rapida e facil para deixar seus PDFs menores sem perder qualidade.",
  alternates: {
    languages: {
      en: "/reduce-pdf-size",
      es: "/es/reducir-tamano-pdf",
      pt: "/br/reduzir-tamanho-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como reduzo o tamanho de um arquivo PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta analisa seu documento e aplica compressao inteligente — otimizando imagens, fontes e estruturas internas para reduzir o tamanho do arquivo de forma significativa." }
    },
    {
      "@type": "Question",
      "name": "Quanto pode ser reduzido o tamanho de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Os resultados dependem do conteudo do seu PDF. Documentos com muitas imagens tipicamente veem reducoes de 50-80%. PDFs com mais texto costumam reduzir entre 20-40%. Cada documento e diferente." }
    },
    {
      "@type": "Question",
      "name": "Reduzir o tamanho do PDF afeta a qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao recomendada do PDF.it e projetada para preservar a qualidade visual. O texto permanece nitido e completamente legivel. As imagens sao otimizadas de forma inteligente com diferencas praticamente imperceptiveis." }
    },
    {
      "@type": "Question",
      "name": "E seguro reduzir o tamanho do meu PDF online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it processa seu arquivo no navegador e exclui todos os arquivos apos a sessao. Nao armazenamos nem acessamos o conteudo dos seus documentos. Sua privacidade esta protegida." }
    },
    {
      "@type": "Question",
      "name": "Posso reduzir o tamanho de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — iPhone, Android, iPad. Envie seu PDF, reduza o tamanho e baixe o arquivo menor direto no seu dispositivo." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF continuar muito grande apos reduzir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF e comprima cada parte. Voce tambem pode achatar o PDF para remover camadas ocultas, ou remover paginas desnecessarias para reduzir ainda mais o tamanho." }
    }
  ]
}

export default function ReduzirTamanhoPDFPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Reduzir Tamanho de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Seu PDF e grande demais para compartilhar, enviar ou armazenar? O PDF.it reduz o tamanho de qualquer arquivo PDF de forma rapida e facil — otimizando imagens, fontes e estruturas internas para deixar seu documento menor sem perder qualidade visivel.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Reducao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Reduzindo o tamanho do seu PDF..."
          successMessage="Seu PDF reduzido esta pronto!"
          compressionLevel="recommended"
        />

        {/* Why PDFs Get Large */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que os PDFs Ficam Tao Grandes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Os PDFs podem crescer por muitas razoes. Entender por que seu arquivo e grande ajuda a escolher a melhor estrategia para reduzi-lo. O PDF.it analisa e otimiza todos esses componentes automaticamente.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><HardDrive className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Imagens de Alta Resolucao</h3></div>
                <p className="text-slate-600 text-sm">Fotos, graficos e ilustracoes em alta resolucao sao a principal causa de PDFs grandes. Uma unica imagem pode adicionar varios megabytes ao arquivo.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><HardDrive className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Fontes Incorporadas</h3></div>
                <p className="text-slate-600 text-sm">PDFs incorporam fontes completas para garantir que o documento fique igual em qualquer dispositivo. Multiplas fontes podem adicionar megabytes desnecessarios.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><HardDrive className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Metadados e Dados Ocultos</h3></div>
                <p className="text-slate-600 text-sm">Historico de edicao, miniaturas incorporadas, comentarios e metadados acumulados podem inflar significativamente o tamanho do arquivo sem que voce perceba.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><HardDrive className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Camadas e Formularios</h3></div>
                <p className="text-slate-600 text-sm">Campos de formulario, anotacoes, camadas de desenho e elementos interativos adicionam dados extras que aumentam o tamanho do PDF.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Armazenamento na Nuvem</h3><p className="text-slate-600">Economize espaco no Google Drive, Dropbox, OneDrive ou iCloud reduzindo o tamanho dos seus PDFs arquivados. Arquivos menores tambem sincronizam mais rapido entre dispositivos.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Compartilhar por Email</h3><p className="text-slate-600">A maioria dos provedores de email limita anexos a 10-25MB. Reduza o tamanho do seu PDF para que caiba nos limites de email e baixe rapidamente para seus destinatarios.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Upload em Portais</h3><p className="text-slate-600">Candidaturas de emprego, formularios governamentais, plataformas educacionais e portais de clientes frequentemente tem limites rigorosos de tamanho. Reduza seu PDF para cumprir os requisitos de upload.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Economizar Espaco em Disco</h3><p className="text-slate-600">Se voce trabalha com muitos PDFs diariamente, arquivos grandes se acumulam rapidamente. Reduza o tamanho dos seus documentos para liberar espaco no disco rigido ou SSD.</p></div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Reduzir o Tamanho de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it.",
                "Clique em Comprimir PDF — a compressao inteligente e aplicada automaticamente para reduzir o tamanho.",
                "Baixe seu PDF reduzido. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
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
                { name: "Compressao Rapida", desc: "Comprime instantaneamente.", href: "/br/comprimir-pdf-rapido", icon: Compress },
                { name: "Comprimir para Email", desc: "Comprime para email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Sem Perder Qualidade", desc: "Compressao inteligente.", href: "/br/comprimir-pdf-sem-perder-qualidade", icon: Compress },
                { name: "PDF com Imagens", desc: "Comprime imagens.", href: "/br/comprimir-pdf-imagens", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Achatar PDF", desc: "Remove camadas e campos.", href: "/br/achatar-pdf", icon: FileText },
              ].map((tool) => (
                <Link key={tool.href} href={tool.href} className="group flex flex-col items-center text-center rounded-xl border border-gray-200 bg-white p-4 hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-md transition-all duration-200">
                  <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center mb-2 group-hover:scale-110 transition-transform duration-200 shadow-sm"><tool.icon className="h-5 w-5 text-white" /></div>
                  <h4 className="text-sm font-bold text-slate-900 group-hover:text-orange-600 transition-colors mb-1">{tool.name}</h4>
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
                { q: "Como reduzo o tamanho de um arquivo PDF?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta analisa seu documento e aplica compressao inteligente — otimizando imagens, fontes e estruturas internas para reduzir o tamanho significativamente." },
                { q: "Quanto pode ser reduzido o tamanho de um PDF?", a: "Documentos com muitas imagens tipicamente veem reducoes de 50-80%. PDFs com mais texto costumam reduzir entre 20-40%. Cada documento e diferente." },
                { q: "Reduzir o tamanho afeta a qualidade?", a: "A compressao recomendada preserva a qualidade visual. O texto permanece nitido e legivel. As imagens sao otimizadas com diferencas praticamente imperceptiveis." },
                { q: "E seguro reduzir o tamanho online?", a: "Sim. O PDF.it processa no navegador e exclui arquivos apos a sessao. Sua privacidade esta protegida." },
                { q: "Posso reduzir o tamanho pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel — iPhone, Android, iPad." },
                { q: "O que faco se continuar muito grande?", a: "Divida o PDF em secoes menores e comprima cada parte. Achate o PDF para remover camadas ocultas ou remova paginas desnecessarias." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Reduza o Tamanho do Seu PDF Agora</h2>
            <p className="text-slate-300 text-lg mb-8">Deixe seu PDF menor em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/reduzir-tamanho-pdf" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Reduzir Tamanho de PDF</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
