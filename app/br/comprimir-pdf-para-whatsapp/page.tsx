import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para WhatsApp — Envie PDFs pelo WhatsApp | PDF.it",
  description:
    "Comprima PDFs para enviar pelo WhatsApp. O WhatsApp tem limite de 100MB para documentos — reduza o tamanho do seu PDF para enviar facilmente.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-whatsapp",
      es: "/es/comprimir-pdf-para-whatsapp",
      pt: "/br/comprimir-pdf-para-whatsapp",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF para enviar pelo WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo otimizando imagens e a estrutura interna, tornando-o muito menor e mais rapido de enviar pelo WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "Qual o limite de tamanho de arquivo no WhatsApp para PDFs?",
      "acceptedAnswer": { "@type": "Answer", "text": "O WhatsApp permite anexos de documentos de ate 100MB. Porem, PDFs grandes sao lentos para subir e baixar em redes moveis. Comprimir seu PDF garante entrega rapida mesmo em conexoes lentas e economiza dados moveis." }
    },
    {
      "@type": "Question",
      "name": "O PDF continuara legivel apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O texto permanece nitido e completamente legivel. As imagens mantem bom detalhe com a compressao recomendada. O documento continua perfeitamente utilizavel para compartilhar pelo WhatsApp." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF para WhatsApp pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel no iPhone ou Android. Comprima seu PDF e compartilhe diretamente no WhatsApp sem instalar nenhum app adicional." }
    },
    {
      "@type": "Question",
      "name": "Por que meu PDF e grande demais para enviar pelo WhatsApp?",
      "acceptedAnswer": { "@type": "Answer", "text": "PDFs com imagens digitalizadas, graficos de alta resolucao ou fontes incorporadas podem ser muito grandes. A compressao reduz esses elementos mantendo o documento legivel, tornando-o muito mais facil de compartilhar." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF continuar muito grande apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente dividir o PDF em partes menores com nossa ferramenta Dividir PDF, depois comprima cada parte individualmente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias para reduzir ainda mais o tamanho." }
    }
  ]
}

export default function ComprimirPDFParaWhatsAppPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para WhatsApp</h1>
              <p className="text-xl text-slate-300 mb-8">
                O WhatsApp permite documentos de ate 100MB, mas PDFs grandes sao lentos para enviar e baixar — especialmente com dados moveis. Comprima seu PDF para que envie e baixe rapidamente, economizando dados e tempo.
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
          processingMessage="Comprimindo seu PDF para WhatsApp..."
          successMessage="Seu PDF pronto para WhatsApp esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para WhatsApp?</h2>
            <p className="text-lg text-slate-600 mb-8">
              O WhatsApp admite anexos de documentos de ate 100MB, mas PDFs grandes sao lentos para enviar e baixar — especialmente com dados moveis. Comprimir seu PDF antes de compartilhar garante entrega rapida, economiza dados e facilita que o destinatario abra o arquivo em qualquer dispositivo.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao inteligente para compartilhamento rapido no celular</li>
              <li>&#10003; Envie documentos, recibos e contratos instantaneamente</li>
              <li>&#10003; O texto permanece nitido e legivel em qualquer tela</li>
              <li>&#10003; Funciona no iPhone, Android, Mac e Windows</li>
              <li>&#10003; Sem instalar apps — comprima no navegador e compartilhe</li>
            </ul>
          </div>
        </section>

        {/* WhatsApp Limit */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Limite do WhatsApp para Documentos</h2>
            <div className="max-w-md mx-auto">
              <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <div className="text-lg font-bold text-slate-900">WhatsApp</div>
                <div className="text-4xl font-black text-orange-600 mt-2">100MB</div>
                <div className="text-sm text-slate-500 mt-1">limite para documentos</div>
                <p className="text-sm text-slate-600 mt-4">
                  Embora o limite seja de 100MB, arquivos menores enviam e baixam muito mais rapido — especialmente com dados moveis. Comprimir seu PDF melhora a experiencia tanto para voce quanto para o destinatario.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartilhar Faturas</h3>
                <p className="text-slate-600">
                  Envie rapidamente faturas e orcamentos para clientes pelo WhatsApp. PDFs comprimidos chegam instantaneamente e abrem sem problemas em qualquer celular, melhorando a comunicacao com seus clientes.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Enviar Contratos</h3>
                <p className="text-slate-600">
                  Precisa que alguem revise um contrato na hora? Comprima o PDF para que baixe instantaneamente no celular da pessoa. Podem ler e responder sem esperar um arquivo grande carregar.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Escolares</h3>
                <p className="text-slate-600">
                  Estudantes e professores costumam compartilhar tarefas, anotacoes e material de estudo em grupos de WhatsApp. Comprimir os PDFs garante que todos possam baixa-los rapidamente sem gastar muitos dados moveis.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Recibos e Comprovantes</h3>
                <p className="text-slate-600">
                  Compartilhe recibos de compra, confirmacoes de pagamento e comprovantes pelo WhatsApp. A compressao mantem os arquivos pequenos para que enviem em segundos, mesmo com conexoes lentas.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para WhatsApp</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it.",
                "Clique em Comprimir PDF — a compressao recomendada e aplicada automaticamente para reduzir o tamanho do arquivo.",
                "Baixe seu PDF menor e compartilhe no WhatsApp. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "Comprimir para 1MB", desc: "Para limites de 1MB.", href: "/br/comprimir-pdf-para-1mb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para anexos de email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como comprimo um PDF para enviar pelo WhatsApp?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo otimizando imagens e a estrutura interna, tornando-o muito menor e mais rapido de enviar pelo WhatsApp." },
                { q: "Qual o limite de tamanho de arquivo no WhatsApp para PDFs?", a: "O WhatsApp permite anexos de documentos de ate 100MB. Porem, PDFs grandes sao lentos para subir e baixar em redes moveis. Comprimir seu PDF garante entrega rapida mesmo em conexoes lentas e economiza dados moveis." },
                { q: "O PDF continuara legivel apos comprimir?", a: "Sim. O texto permanece nitido e completamente legivel. As imagens mantem bom detalhe com a compressao recomendada. O documento continua perfeitamente utilizavel para compartilhar pelo WhatsApp." },
                { q: "Posso comprimir um PDF para WhatsApp pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel no iPhone ou Android. Comprima seu PDF e compartilhe diretamente no WhatsApp sem instalar nenhum app adicional." },
                { q: "Por que meu PDF e grande demais para enviar pelo WhatsApp?", a: "PDFs com imagens digitalizadas, graficos de alta resolucao ou fontes incorporadas podem ser muito grandes. A compressao reduz esses elementos mantendo o documento legivel, tornando-o muito mais facil de compartilhar." },
                { q: "O que faco se meu PDF continuar muito grande apos comprimir?", a: "Tente dividir o PDF em partes menores com nossa ferramenta Dividir PDF, depois comprima cada parte individualmente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias para reduzir ainda mais o tamanho." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
            <h2 className="text-2xl font-black mb-4">Pronto para Compartilhar PDFs no WhatsApp?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprima seu PDF em segundos e compartilhe instantaneamente. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-para-whatsapp"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para WhatsApp Agora
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
