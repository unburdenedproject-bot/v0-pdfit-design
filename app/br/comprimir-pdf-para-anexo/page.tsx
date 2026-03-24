import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Anexo — Reduza o Tamanho para Enviar por Email | PDF.it",
  description:
    "Comprima PDFs para anexos de email. Reduza o tamanho para cumprir limites do Gmail, Outlook e Yahoo.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-attachment",
      es: "/es/comprimir-pdf-para-adjunto",
      pt: "/br/comprimir-pdf-para-anexo",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF para anexar a um email?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo mantendo o texto e as imagens com boa aparencia, para que seu anexo suba rapidamente e seja facil de abrir." }
    },
    {
      "@type": "Question",
      "name": "Quais sao os limites de tamanho de anexo no Gmail, Outlook e Yahoo?",
      "acceptedAnswer": { "@type": "Answer", "text": "O Gmail permite anexos de ate 25MB, o Outlook permite ate 20MB e o Yahoo Mail permite ate 25MB. Se seu PDF exceder esses limites, o PDF.it o comprime para que caiba sem problemas." }
    },
    {
      "@type": "Question",
      "name": "A compressao afeta a qualidade do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao recomendada preserva a qualidade visual. O texto permanece nitido e claro, e as imagens mantem bom detalhe. O documento ficara profissional quando o destinatario abri-lo." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir varios PDFs para anexar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios Pro podem comprimir multiplos PDFs em lote. Envie todos os seus arquivos, comprima-os juntos e baixe cada um pronto para anexar." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF para anexo pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e anexe o arquivo menor — tudo do seu iPhone ou dispositivo Android sem instalar um app." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF continuar muito grande apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente dividir o PDF em partes menores com nossa ferramenta Dividir PDF, depois comprima e anexe cada parte separadamente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFParaAnexoPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Anexo</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduza o tamanho dos seus PDFs para cumprir os limites de anexo do Gmail, Outlook e Yahoo. A compressao recomendada mantem a qualidade alta enquanto reduz o tamanho do arquivo para que envie sem problemas.
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
          processingMessage="Comprimindo seu PDF para anexo..."
          successMessage="Seu PDF pronto para anexar esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir PDFs para Anexos de Email?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Os provedores de email aplicam limites rigorosos de tamanho para anexos. Se seu PDF exceder o limite, o email volta ou o arquivo nao e anexado. Comprimir seu PDF antes de envia-lo garante que chegue sem problemas na caixa de entrada do destinatario.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; A compressao recomendada preserva a qualidade enquanto reduz o tamanho</li>
              <li>&#10003; Cumpre os limites do Gmail (25MB), Outlook (20MB) e Yahoo (25MB)</li>
              <li>&#10003; Arquivos menores sobem mais rapido para o servidor de email</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima PDFs direto no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Email Limits */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Limites de Tamanho de Anexo por Provedor</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { provider: "Gmail", limit: "25MB", color: "bg-red-50 border-red-200" },
                { provider: "Outlook", limit: "20MB", color: "bg-blue-50 border-blue-200" },
                { provider: "Yahoo Mail", limit: "25MB", color: "bg-purple-50 border-purple-200" },
              ].map((item) => (
                <div key={item.provider} className={`${item.color} border rounded-xl p-6 text-center`}>
                  <div className="text-lg font-bold text-slate-900">{item.provider}</div>
                  <div className="text-3xl font-black text-orange-600 mt-2">{item.limit}</div>
                  <div className="text-sm text-slate-500 mt-1">tamanho maximo de anexo</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Contratos e Faturas</h3>
                <p className="text-slate-600">
                  Contratos com assinaturas e faturas com logos e imagens geralmente excedem os limites de anexo. Comprima esses documentos para envia-los diretamente por email sem que voltem.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Relatorios e Apresentacoes</h3>
                <p className="text-slate-600">
                  Relatorios com graficos, tabelas e imagens podem ser muito pesados. Comprima seus relatorios para envia-los direto por email em vez de usar links de download.
                </p>
              </div>
              <div className="bg-white rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">De Qualquer Dispositivo</h3>
                <p className="text-slate-600">
                  Precisa enviar um PDF comprimido do celular? O PDF.it funciona em qualquer navegador movel — comprima e anexe seu PDF direto do iPhone ou Android sem instalar apps.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Anexo</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it.",
                "Clique em Comprimir PDF — a compressao recomendada e aplicada para reduzir o tamanho preservando a qualidade.",
                "Baixe seu PDF menor e anexe ao seu email. Se ainda estiver muito grande, tente dividir o arquivo primeiro e comprima cada parte.",
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir para 5MB", desc: "Para limites de 5MB.", href: "/br/comprimir-pdf-para-5mb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Dividir PDF", desc: "Divide se ainda for grande.", href: "/br/dividir-pdf", icon: Scissors },
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
                { q: "Como comprimo um PDF para anexar a um email?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz o tamanho do arquivo mantendo o texto e as imagens com boa aparencia, para que seu anexo suba rapidamente e seja facil de abrir." },
                { q: "Quais sao os limites de tamanho de anexo no Gmail, Outlook e Yahoo?", a: "O Gmail permite anexos de ate 25MB, o Outlook permite ate 20MB e o Yahoo Mail permite ate 25MB. Se seu PDF exceder esses limites, o PDF.it o comprime para que caiba sem problemas." },
                { q: "A compressao afeta a qualidade do PDF?", a: "A compressao recomendada preserva a qualidade visual. O texto permanece nitido e claro, e as imagens mantem bom detalhe. O documento ficara profissional quando o destinatario abri-lo." },
                { q: "Posso comprimir varios PDFs para anexar?", a: "Usuarios Pro podem comprimir multiplos PDFs em lote. Envie todos os seus arquivos, comprima-os juntos e baixe cada um pronto para anexar." },
                { q: "Posso comprimir um PDF para anexo pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e anexe o arquivo menor — tudo do seu iPhone ou dispositivo Android sem instalar um app." },
                { q: "O que faco se meu PDF continuar muito grande apos comprimir?", a: "Tente dividir o PDF em partes menores com nossa ferramenta Dividir PDF, depois comprima e anexe cada parte separadamente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias antes de comprimir." },
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
        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Precisa Reduzir um PDF para Anexar?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Comprima seu PDF em segundos para que anexe sem problemas em qualquer provedor de email. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-para-anexo"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir para Anexo Agora
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
