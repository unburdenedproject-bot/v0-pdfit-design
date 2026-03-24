import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Upload — Reduza o Tamanho para Portais de Envio | PDF.it",
  description:
    "Comprima PDFs para cumprir limites de portais de upload. Reduza o tamanho para formularios web, candidaturas e envios online.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-upload",
      es: "/es/comprimir-pdf-para-subir",
      pt: "/br/comprimir-pdf-para-upload",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF para um portal de upload?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo otimizando imagens e a estrutura interna, ajudando voce a cumprir os limites de upload do portal." }
    },
    {
      "@type": "Question",
      "name": "Meu PDF comprimido sera aceito por portais governamentais?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it produz arquivos PDF padrao que sao aceitos por todos os portais principais. O texto permanece nitido e legivel, e a estrutura do arquivo e valida para qualquer sistema que aceite PDFs." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF para cumprir um limite de tamanho especifico?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao recomendada reduz significativamente o tamanho do arquivo, mas o resultado exato depende do conteudo do seu PDF. Documentos com muito texto comprimem muito bem. Se o arquivo continuar grande, tente dividi-lo em partes e comprimir cada uma." }
    },
    {
      "@type": "Question",
      "name": "A qualidade do documento sera afetada ao comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "O texto permanece nitido e completamente legivel. As imagens mantem bom detalhe com a compressao recomendada. O documento continua completamente utilizavel para envios oficiais e uploads em portais." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir PDFs para upload pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android — sem precisar instalar um app." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF continuar muito grande apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF, depois comprima cada parte separadamente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFParaUploadPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Upload</h1>
              <p className="text-xl text-slate-300 mb-8">
                Muitos portais de upload tem limites rigorosos de tamanho. Comprima seu PDF para cumprir os requisitos de formularios web, candidaturas de emprego, processos governamentais e envios online — rapido, gratis e pelo navegador.
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
          processingMessage="Comprimindo seu PDF para upload..."
          successMessage="Seu PDF pronto para upload esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para Portais de Upload?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Sites governamentais, sistemas de admissao universitaria, portais de candidatura de emprego e formularios de processos online frequentemente aplicam limites rigorosos de tamanho — as vezes tao baixos quanto 1MB ou 2MB. Se seu PDF exceder o limite, o upload falha. O PDF.it comprime seu arquivo para que cumpra esses requisitos sem perder legibilidade.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao inteligente para cumprir limites de portais</li>
              <li>&#10003; Produz PDFs padrao aceitos por todos os sistemas</li>
              <li>&#10003; O texto permanece nitido e legivel para envios oficiais</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Candidaturas de Emprego</h3>
                <p className="text-slate-600">
                  Muitos sites de vagas e sistemas de rastreamento de candidatos limitam o upload de curriculos e cartas de apresentacao a poucos megabytes. Comprima seus documentos de candidatura para que subam sem erros no LinkedIn, Indeed, Gupy e outras plataformas.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Formularios Governamentais</h3>
                <p className="text-slate-600">
                  Declaracoes de impostos, solicitacoes de alvaras, formularios de visto e processos regulatorios frequentemente tem limites rigorosos de upload. Comprima seus PDFs para cumprir os requisitos de portais governamentais e evitar erros de envio.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Portais Educacionais</h3>
                <p className="text-slate-600">
                  Os portais de candidatura de universidades e pos-graduacao frequentemente exigem historicos academicos, cartas de recomendacao e redacoes sob limites rigorosos de tamanho. Comprima seus documentos para cumprir esses requisitos sem perder legibilidade.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Plataformas de Envio</h3>
                <p className="text-slate-600">
                  Portais de seguros, plataformas de licitacao e sistemas de envio de documentos frequentemente limitam o upload a tamanhos pequenos. Comprima recibos digitalizados, registros e formularios para que subam com sucesso.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Upload</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it.",
                "Clique em Comprimir PDF — a compressao recomendada e aplicada automaticamente para reduzir o tamanho do arquivo.",
                "Baixe seu PDF menor e envie ao portal. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
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
                { name: "Comprimir para 5MB", desc: "Para limites de 5MB.", href: "/br/comprimir-pdf-para-5mb", icon: Compress },
                { name: "Dividir PDF", desc: "Divide se ainda for grande.", href: "/br/dividir-pdf", icon: Scissors },
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
                { q: "Como comprimo um PDF para um portal de upload?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo otimizando imagens e a estrutura interna, ajudando voce a cumprir os limites de upload do portal." },
                { q: "Meu PDF comprimido sera aceito por portais governamentais?", a: "Sim. O PDF.it produz arquivos PDF padrao que sao aceitos por todos os portais principais. O texto permanece nitido e legivel, e a estrutura do arquivo e valida para qualquer sistema que aceite PDFs." },
                { q: "Posso comprimir um PDF para cumprir um limite de tamanho especifico?", a: "A compressao recomendada reduz significativamente o tamanho do arquivo, mas o resultado exato depende do conteudo do seu PDF. Documentos com muito texto comprimem muito bem. Se o arquivo continuar grande, tente dividi-lo em partes e comprimir cada uma." },
                { q: "A qualidade do documento sera afetada ao comprimir?", a: "O texto permanece nitido e completamente legivel. As imagens mantem bom detalhe com a compressao recomendada. O documento continua completamente utilizavel para envios oficiais e uploads em portais." },
                { q: "Posso comprimir PDFs para upload pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android — sem precisar instalar um app." },
                { q: "O que faco se meu PDF continuar muito grande apos comprimir?", a: "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF, depois comprima cada parte separadamente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias antes de comprimir." },
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
            <h2 className="text-2xl font-black mb-4">Precisa Reduzir um PDF para Upload?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprima seu PDF em segundos e envie sem erros de tamanho. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-para-upload"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para Upload Agora
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
