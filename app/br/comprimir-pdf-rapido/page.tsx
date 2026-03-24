import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF Rapido — Compressao Instantanea Online | PDF.it",
  description:
    "Comprima arquivos PDF instantaneamente online. Sem software, sem contas. Envie, comprima, baixe — pronto em segundos.",
  alternates: {
    languages: {
      en: "/compress-pdf-fast",
      es: "/es/comprimir-pdf-rapido",
      pt: "/br/comprimir-pdf-rapido",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Qual a velocidade da compressao do PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "A maioria dos PDFs e comprimida em apenas alguns segundos. O tempo de processamento depende do tamanho e da complexidade do arquivo, mas documentos tipicos ficam prontos para download quase imediatamente apos clicar em Comprimir." }
    },
    {
      "@type": "Question",
      "name": "Preciso criar uma conta para comprimir um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Voce pode comprimir PDFs imediatamente sem se cadastrar ou fazer login. Basta enviar seu arquivo, clicar em Comprimir e baixar o resultado. Usuarios gratuitos tem ate 10 compressoes por dia." }
    },
    {
      "@type": "Question",
      "name": "Preciso instalar algum software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it funciona inteiramente no seu navegador. Nao ha nada para baixar ou instalar. Funciona em qualquer dispositivo — Mac, Windows, iPhone, Android, Linux, Chromebook." }
    },
    {
      "@type": "Question",
      "name": "Meu PDF esta seguro quando comprimo online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Seus arquivos sao processados de forma segura e excluidos automaticamente ao final da sua sessao. O PDF.it nao armazena nem compartilha seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Quanto meu PDF sera comprimido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Os resultados dependem do conteudo do seu PDF. Documentos com imagens e estruturas nao otimizadas geralmente veem reducoes significativas de tamanho. PDFs ja otimizados podem ver reducoes menores." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir PDFs pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — Safari, Chrome, Firefox ou Samsung Internet. Envie da sua galeria ou gerenciador de arquivos, comprima e baixe o arquivo menor instantaneamente." }
    }
  ]
}

export default function ComprimirPDFRapidoPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF Rapido</h1>
              <p className="text-xl text-slate-300 mb-8">
                Sem software para instalar, sem contas para criar. Envie seu PDF, clique em Comprimir e baixe o arquivo menor — pronto em segundos. Funciona em qualquer dispositivo, qualquer navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Instantanea</span></div>
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
          processingMessage="Comprimindo seu PDF..."
          successMessage="Seu PDF comprimido esta pronto!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Usar o PDF.it para Compressao Rapida?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Quando voce precisa de um PDF menor agora mesmo, a ultima coisa que quer e baixar software, criar uma conta ou esperar numa fila. O PDF.it e uma ferramenta baseada no navegador que comprime seu PDF em segundos — sem instalacao, sem cadastro, sem complicacoes. Basta enviar, comprimir e baixar.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Comprima PDFs em segundos — sem espera</li>
              <li>&#10003; Sem software para instalar ou atualizar</li>
              <li>&#10003; Sem conta necessaria para compressao basica</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Arquivos excluidos automaticamente apos sua sessao</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Anexos de Ultima Hora</h3>
                <p className="text-slate-600">
                  Seu PDF e grande demais para anexar e o email precisa ser enviado ja. Comprima em segundos e anexe a versao menor — sem precisar instalar nada nem criar conta.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compartilhamento Rapido de Arquivos</h3>
                <p className="text-slate-600">
                  Precisa compartilhar um PDF pelo Slack, Teams ou um app de mensagens? Comprima rapidamente para que suba e baixe mais rapido para todos os envolvidos.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Entregas com Prazo</h3>
                <p className="text-slate-600">
                  Portais de upload falham porque seu arquivo e grande demais? Comprima seu PDF em segundos para cumprir o prazo sem procurar software para desktop.
                </p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Compressao pelo Celular</h3>
                <p className="text-slate-600">
                  Longe do computador? Comprima PDFs direto do seu celular ou tablet usando qualquer navegador movel. Nao precisa baixar nenhum app — abra o PDF.it e pronto.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF Rapido</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste e solte seu PDF no PDF.it — leva apenas um segundo.",
                "Clique em Comprimir PDF — seu arquivo e processado em segundos.",
                "Baixe seu PDF menor instantaneamente. Se precisar de mais compressao, tente o modo extremo ou divida o arquivo primeiro.",
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
                { name: "Comprimir para 5MB", desc: "Para limites de 5MB.", href: "/br/comprimir-pdf-para-5mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para limites de anexo.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide documentos grandes.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Achatar PDF", desc: "Remove campos de formulario.", href: "/br/achatar-pdf", icon: FileText },
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
                { q: "Qual a velocidade da compressao do PDF.it?", a: "A maioria dos PDFs e comprimida em apenas alguns segundos. O tempo de processamento depende do tamanho e da complexidade do arquivo, mas documentos tipicos ficam prontos para download quase imediatamente apos clicar em Comprimir." },
                { q: "Preciso criar uma conta para comprimir um PDF?", a: "Nao. Voce pode comprimir PDFs imediatamente sem se cadastrar ou fazer login. Basta enviar seu arquivo, clicar em Comprimir e baixar o resultado. Usuarios gratuitos tem ate 10 compressoes por dia." },
                { q: "Preciso instalar algum software?", a: "Nao. O PDF.it funciona inteiramente no seu navegador. Nao ha nada para baixar ou instalar. Funciona em qualquer dispositivo — Mac, Windows, iPhone, Android, Linux, Chromebook." },
                { q: "Meu PDF esta seguro quando comprimo online?", a: "Sim. Seus arquivos sao processados de forma segura e excluidos automaticamente ao final da sua sessao. O PDF.it nao armazena nem compartilha seus documentos." },
                { q: "Quanto meu PDF sera comprimido?", a: "Os resultados dependem do conteudo do seu PDF. Documentos com imagens e estruturas nao otimizadas geralmente veem reducoes significativas de tamanho. PDFs ja otimizados podem ver reducoes menores." },
                { q: "Posso comprimir PDFs pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel — Safari, Chrome, Firefox ou Samsung Internet. Envie da sua galeria ou gerenciador de arquivos, comprima e baixe o arquivo menor instantaneamente." },
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
            <h2 className="text-2xl font-black mb-4">Precisa Comprimir um PDF Agora Mesmo?</h2>
            <p className="text-slate-300 text-lg mb-8">
              Envie, comprima, baixe — pronto em segundos. Sem cadastro, sem instalacao, sem espera.
            </p>
            <Link
              href="/br/comprimir-pdf-rapido"
              className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg"
            >
              Comprimir PDF Agora
            </Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
