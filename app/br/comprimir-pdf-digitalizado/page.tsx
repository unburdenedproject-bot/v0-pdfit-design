import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, Scissors, ScanLine } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Digitalizado — Reduza o Tamanho de Documentos Digitalizados | PDF.it",
  description:
    "Comprima documentos PDF digitalizados. Digitalizacoes costumam ser arquivos grandes — reduza o tamanho significativamente mantendo a legibilidade.",
  alternates: {
    languages: {
      en: "/compress-scanned-pdf",
      es: "/es/comprimir-pdf-escaneado",
      pt: "/br/comprimir-pdf-digitalizado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Por que PDFs digitalizados sao tao grandes?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs digitalizados contem imagens de pagina inteira em alta resolucao em vez de texto vetorial. Cada pagina e essencialmente uma fotografia, entao um documento de 10 paginas pode pesar 30-50MB facilmente. A compressao se concentra em otimizar essas imagens para reduzir drasticamente o tamanho." }
    },
    {
      "@type": "Question",
      "name": "A compressao tornara meu documento digitalizado ilegivel?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. A compressao recomendada do PDF.it e projetada para preservar a legibilidade. O texto impresso permanece nitido e claro. As imagens sao otimizadas de forma inteligente sem degradar a qualidade visivel do documento." }
    },
    {
      "@type": "Question",
      "name": "Comprimir um PDF digitalizado afeta o texto OCR?",
      "acceptedAnswer": { "@type": "Answer", "text": "Se seu PDF digitalizado ja tem uma camada de texto OCR, a compressao a preserva completamente. A camada de texto e independente da camada de imagem, entao voce pode continuar buscando e copiando texto apos a compressao." }
    },
    {
      "@type": "Question",
      "name": "Quanto pode ser comprimido um PDF digitalizado?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs digitalizados tipicamente comprimem muito bem por serem compostos principalmente de imagens. Reducoes de 50-80% sao comuns, embora os resultados exatos dependam da resolucao da digitalizacao e do numero de paginas." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF digitalizado de muitas paginas?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it comprime todas as paginas do seu PDF digitalizado de uma vez. Digitalizacoes de muitas paginas frequentemente veem as maiores reducoes porque cada pagina contem uma imagem completa que pode ser otimizada." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF digitalizado continuar muito grande apos a compressao?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF, depois comprima cada parte individualmente. Voce tambem pode remover paginas desnecessarias antes de comprimir ou usar o Scanner OCR para converter as imagens em texto pesquisavel e mais leve." }
    }
  ]
}

export default function ComprimirPDFDigitalizadoPagePt() {
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
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Compress className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Digitalizado</h1>
              <p className="text-xl text-slate-300 mb-8">
                Documentos digitalizados sao notoriamente pesados — cada pagina e uma imagem de alta resolucao que pode pesar varios megabytes. O PDF.it comprime as imagens incorporadas de forma inteligente, reduzindo significativamente o tamanho das suas digitalizacoes enquanto mantem o conteudo legivel.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Legibilidade Preservada</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Comprimindo seu PDF digitalizado..."
          successMessage="Seu PDF digitalizado comprimido esta pronto!"
          compressionLevel="recommended"
        />

        {/* Why Scanned PDFs Are Large */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDFs Digitalizados Sao Tao Grandes?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Diferente dos PDFs nativos que armazenam texto como dados vetoriais leves, PDFs digitalizados armazenam cada pagina como uma imagem de alta resolucao. Uma digitalizacao tipica a 300 DPI pode gerar imagens de 3-5MB por pagina. Um documento de 20 paginas pode facilmente alcancar 60-100MB.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><ScanLine className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Imagens de Alta Resolucao</h3></div>
                <p className="text-slate-600 text-sm">Scanners capturam cada pagina como imagem de alta resolucao (300-600 DPI), gerando arquivos muito grandes mesmo para documentos simples de texto.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><ScanLine className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Sem Otimizacao</h3></div>
                <p className="text-slate-600 text-sm">Scanners raramente otimizam as imagens. Salvam cada pagina na maxima qualidade possivel, incluindo areas em branco que poderiam ser comprimidas significativamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><ScanLine className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Cor Desnecessaria</h3></div>
                <p className="text-slate-600 text-sm">Muitos documentos de texto sao digitalizados em cores embora sejam preto e branco, triplicando o tamanho do arquivo desnecessariamente.</p>
              </div>
              <div className="bg-white rounded-xl p-6 border border-gray-200">
                <div className="flex items-center gap-3 mb-3"><ScanLine className="h-5 w-5 text-orange-500" /><h3 className="font-bold text-slate-900">Multiplas Paginas</h3></div>
                <p className="text-slate-600 text-sm">O problema se multiplica com cada pagina. Um contrato de 50 paginas digitalizado pode facilmente ultrapassar 100MB.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Documentos Legais Digitalizados</h3><p className="text-slate-600">Contratos assinados, escrituras, procuracoes e documentos legais digitalizados em alta resolucao podem ser enormes. Comprima-os para um tamanho gerenciavel para anexos de email, armazenamento na nuvem ou upload em sistemas de gestao documental.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Recibos e Notas Fiscais</h3><p className="text-slate-600">Relatorios de despesas e registros contabeis frequentemente incluem recibos e notas fiscais digitalizados. Comprima-os para reduzir custos de armazenamento e facilitar o compartilhamento com seu contador.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Registros Medicos</h3><p className="text-slate-600">Registros medicos digitalizados — resultados de exames, receitas, historico clinico — precisam ser armazenados e compartilhados de forma eficiente. Comprima seus documentos medicos para facilitar sua gestao digital.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Arquivos Historicos</h3><p className="text-slate-600">Digitalizar arquivos em papel cria PDFs massivos. Comprima seus arquivos digitalizados para economizar espaco de armazenamento enquanto mantem os documentos acessiveis e pesquisaveis.</p></div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF Digitalizado</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF digitalizado no PDF.it.",
                "Clique em Comprimir PDF — a compressao inteligente e aplicada automaticamente as imagens incorporadas.",
                "Baixe seu PDF menor. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
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
                { name: "PDF com Imagens", desc: "Comprime imagens.", href: "/br/comprimir-pdf-imagens", icon: Compress },
                { name: "Sem Perder Qualidade", desc: "Compressao inteligente.", href: "/br/comprimir-pdf-sem-perder-qualidade", icon: Compress },
                { name: "Reduzir Tamanho", desc: "Reduz tamanho geral.", href: "/br/reduzir-tamanho-pdf", icon: Compress },
                { name: "Comprimir para Email", desc: "Comprime para email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
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
                { q: "Por que PDFs digitalizados sao tao grandes?", a: "PDFs digitalizados contem imagens de pagina inteira em alta resolucao. Cada pagina e uma fotografia, entao um documento de 10 paginas pode pesar 30-50MB. A compressao otimiza essas imagens para reduzir drasticamente o tamanho." },
                { q: "A compressao tornara meu documento ilegivel?", a: "Nao. A compressao recomendada preserva a legibilidade. O texto impresso permanece nitido e claro. As imagens sao otimizadas sem degradar a qualidade visivel." },
                { q: "Comprimir afeta o texto OCR?", a: "Se seu PDF ja tem camada de texto OCR, a compressao a preserva completamente. Voce pode continuar buscando e copiando texto apos comprimir." },
                { q: "Quanto pode ser comprimido um PDF digitalizado?", a: "Reducoes de 50-80% sao comuns para PDFs digitalizados, que sao compostos principalmente de imagens." },
                { q: "Posso comprimir um PDF digitalizado de muitas paginas?", a: "Sim. O PDF.it comprime todas as paginas de uma vez. Digitalizacoes de muitas paginas veem as maiores reducoes." },
                { q: "O que faco se continuar muito grande?", a: "Divida o PDF em secoes menores e comprima cada parte. Remova paginas desnecessarias ou use o Scanner OCR para converter imagens em texto mais leve." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Comprima Seus PDFs Digitalizados Agora</h2>
            <p className="text-slate-300 text-lg mb-8">Reduza documentos digitalizados sobredimensionados em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/comprimir-pdf-digitalizado" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Comprimir PDF Digitalizado</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
