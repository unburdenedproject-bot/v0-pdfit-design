import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para 100KB Online — Reduzir Tamanho de PDF | PDF.it",
  description:
    "Comprima seu PDF para cumprir limites de 100KB. Compressao extrema para assinaturas de email, micro-anexos, fotos de cracha e documentos otimizados para celular — rapido, pelo navegador, gratis.",
  alternates: {
    languages: {
      en: "/compress-pdf-to-100kb",
      es: "/es/comprimir-pdf-a-100kb",
      pt: "/br/comprimir-pdf-para-100kb",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF para limite de 100KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta aplica compressao extrema para reduzir a resolucao de imagens e otimizar a estrutura interna, reduzindo drasticamente o tamanho do arquivo. Os resultados dependem do conteudo do seu PDF." }
    },
    {
      "@type": "Question",
      "name": "Meu PDF ficara definitivamente abaixo de 100KB apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao extrema reduz drasticamente o tamanho do arquivo, mas os resultados dependem do conteudo do PDF. Documentos simples de uma pagina com texto podem chegar abaixo de 100KB. Arquivos com muitas imagens ou varias paginas provavelmente precisarao ser divididos em paginas individuais primeiro e depois comprimir cada pagina separadamente." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de arquivos podem ser comprimidos para 100KB de forma realista?",
      "acceptedAnswer": { "@type": "Answer", "text": "Documentos de uma pagina com principalmente texto, assinaturas simples, fotos tamanho cracha e formularios pequenos podem ser comprimidos para menos de 100KB. Documentos de varias paginas ou com imagens de alta resolucao precisarao ser divididos primeiro." }
    },
    {
      "@type": "Question",
      "name": "Meu PDF continuara legivel apos comprimir para 100KB?",
      "acceptedAnswer": { "@type": "Answer", "text": "O texto permanece nitido e legivel. As imagens perderao detalhe notavel com esse nivel de compressao extrema, mas para assinaturas, crachas e documentos simples, o resultado continua utilizavel." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF para 100KB pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "O que faco se meu PDF continuar acima de 100KB apos comprimir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Divida o PDF em paginas individuais com nossa ferramenta Dividir PDF e depois comprima cada pagina separadamente. Para melhores resultados, fique apenas com a pagina necessaria, achateo PDF e converta as imagens para escala de cinza antes de comprimir." }
    }
  ]
}

export default function ComprimirPDFPara100KBPagePt() {
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
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 100KB</h1>
              <p className="text-xl text-slate-300 mb-8">
                Aplique compressao extrema para reduzir drasticamente o tamanho do seu PDF em portais com limites de 100KB. Perfeito para assinaturas de email, micro-anexos, upload de fotos de cracha e documentos otimizados para celular.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Extrema</span></div>
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
          processingMessage="Comprimindo seu PDF para limites de 100KB..."
          successMessage="Seu PDF comprimido esta pronto!"
          compressionLevel="extreme"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para Limites de 100KB?</h2>
            <p className="text-lg text-slate-600 mb-8">
              Algumas plataformas exigem um limite de tamanho extremamente rigoroso de 100KB. Anexos de assinatura de email, upload de fotos de cracha, campos de micro-anexos e certos formularios otimizados para celular exigem arquivos muito pequenos. O PDF.it aplica compressao extrema para reduzir drasticamente o tamanho do seu PDF e ajuda-lo a cumprir esses requisitos de upload rigorosos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao extrema para maxima reducao de tamanho</li>
              <li>&#10003; Perfeito para assinaturas de email, crachas e micro-anexos</li>
              <li>&#10003; O texto permanece nitido e legivel</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima PDFs no navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Anexos de Assinatura de Email</h3>
                <p className="text-slate-600">Sistemas de email corporativo frequentemente limitam anexos de assinatura a 100KB ou menos. Comprima seu logo, vCard ou PDF de folheto para que caiba nas restricoes de tamanho de assinatura sem atrasar a entrega.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Micro-Anexos para Formularios Online</h3>
                <p className="text-slate-600">Alguns formularios online e sistemas de tickets so permitem anexos muito pequenos abaixo de 100KB. Comprima seus documentos de suporte para anexa-los a tickets de suporte, formularios de feedback ou campos de registro.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Documentos Otimizados para Celular</h3>
                <p className="text-slate-600">Enviar PDFs por conexoes moveis lentas ou para dispositivos com armazenamento limitado se beneficia da compressao extrema. Reduza seu arquivo para menos de 100KB para carregamento instantaneo e minimo uso de dados.</p>
              </div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                <h3 className="text-xl font-black text-slate-900 mb-3">Upload de Fotos de Cracha e Identificacao</h3>
                <p className="text-slate-600">Sistemas de crachas de funcionarios, portais de registro de eventos e plataformas de cartoes de membro frequentemente exigem upload de fotos abaixo de 100KB. Comprima sua foto de cracha em PDF para cumprir esses limites rigorosos.</p>
              </div>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 100KB</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF ao PDF.it.",
                "Clique em Comprimir PDF — a compressao extrema e aplicada automaticamente.",
                "Baixe seu PDF menor. Se continuar acima de 100KB, tente dividi-lo em uma unica pagina primeiro e comprima essa pagina.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tips */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Dicas para Chegar Abaixo de 100KB</h2>
              <p className="text-slate-600 mb-4">Chegar abaixo de 100KB requer otimizacao agressiva. Tente estas estrategias:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Use apenas uma pagina</strong> — extraia a pagina necessaria com nossa ferramenta Dividir PDF e comprima apenas essa pagina.</li>
                <li>&#10003; <strong>Remova conteudo desnecessario</strong> — delete paginas, imagens ou elementos que nao sejam estritamente necessarios.</li>
                <li>&#10003; <strong>Use preto e branco</strong> — converta as imagens para escala de cinza antes de comprimir. Dados de cor ocupam muito espaco.</li>
                <li>&#10003; <strong>Achateo PDF</strong> — se o PDF tem campos de formulario, anotacoes ou camadas, achate-o primeiro para eliminar dados ocultos.</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir para 200KB", desc: "Para limites de 200KB.", href: "/br/comprimir-pdf-para-200kb", icon: Compress },
                { name: "Comprimir para 500KB", desc: "Para limites de 500KB.", href: "/br/comprimir-pdf-para-500kb", icon: Compress },
                { name: "Comprimir para 1MB", desc: "Para limites de 1MB.", href: "/br/comprimir-pdf-para-1mb", icon: Compress },
                { name: "Comprimir para Email", desc: "Para anexos de email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide se ainda for grande.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "Girar PDF", desc: "Corrige a orientacao.", href: "/br/girar-pdf", icon: RotateCw },
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
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como comprimo um PDF para limite de 100KB?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta aplica compressao extrema para reduzir a resolucao de imagens e otimizar a estrutura interna, reduzindo drasticamente o tamanho do arquivo." },
                { q: "Meu PDF ficara definitivamente abaixo de 100KB?", a: "A compressao extrema reduz drasticamente o tamanho, mas os resultados dependem do conteudo. Documentos simples de uma pagina com texto podem chegar abaixo de 100KB. Arquivos com muitas imagens precisarao ser divididos primeiro." },
                { q: "Quais tipos de arquivos podem ser comprimidos para 100KB?", a: "Documentos de uma pagina com principalmente texto, assinaturas simples, fotos tamanho cracha e formularios pequenos podem ser comprimidos para menos de 100KB." },
                { q: "O PDF continuara legivel apos comprimir para 100KB?", a: "O texto permanece nitido e legivel. Imagens perderao detalhe com compressao extrema, mas para assinaturas, crachas e documentos simples, o resultado continua utilizavel." },
                { q: "Posso comprimir um PDF para 100KB pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android." },
                { q: "O que faco se meu PDF continuar acima de 100KB?", a: "Divida o PDF em paginas individuais com nossa ferramenta Dividir PDF e comprima cada pagina separadamente. Fique apenas com a pagina necessaria, achate o PDF e converta imagens para escala de cinza." },
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
            <h2 className="text-2xl font-black mb-4">Precisa de Compressao Extrema de PDF?</h2>
            <p className="text-slate-300 text-lg mb-8">Envie seu PDF e aplique compressao maxima em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/comprimir-pdf-para-100kb" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Comprimir para 100KB Agora</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
