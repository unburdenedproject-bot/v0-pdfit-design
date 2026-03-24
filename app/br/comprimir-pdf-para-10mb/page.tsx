import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para 10MB Online — Reduzir Tamanho de PDF | PDF.it",
  description: "Comprima seu PDF para cumprir limites de 10MB. Compressao inteligente para email, uploads e compartilhamento — rapido, pelo navegador, gratis.",
  alternates: { languages: { en: "/compress-pdf-to-10mb", es: "/es/comprimir-pdf-a-10mb", pt: "/br/comprimir-pdf-para-10mb" } },
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como comprimo um PDF para limite de 10MB?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada otimiza imagens e estrutura interna para reduzir o tamanho preservando a qualidade." } },
  { "@type": "Question", "name": "Meu PDF ficara abaixo de 10MB?", "acceptedAnswer": { "@type": "Answer", "text": "A grande maioria dos documentos ficam abaixo de 10MB apos compressao. Apenas documentos muito grandes com centenas de paginas ou imagens de alta resolucao podem precisar de compressao extrema." } },
  { "@type": "Question", "name": "A qualidade sera preservada?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A compressao recomendada preserva excelente qualidade visual. O texto permanece nitido e as imagens mantem otimo detalhe." } },
  { "@type": "Question", "name": "Posso comprimir pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel." } },
  { "@type": "Question", "name": "Quais plataformas exigem limite de 10MB?", "acceptedAnswer": { "@type": "Answer", "text": "Muitos provedores de email pessoais, sistemas de mensagens, portais de upload e plataformas de compartilhamento limitam arquivos a 10MB." } },
  { "@type": "Question", "name": "O que faco se continuar acima de 10MB?", "acceptedAnswer": { "@type": "Answer", "text": "Tente compressao extrema ou divida o PDF em secoes menores. Achate o PDF ou remova paginas desnecessarias." } }
] }

export default function ComprimirPDFPara10MBPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Compress className="h-10 w-10 text-white" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 10MB</h1>
            <p className="text-xl text-slate-300 mb-8">Comprima seu PDF para cumprir limites de upload de 10MB. Ideal para email, plataformas de mensagens e portais que restringem o tamanho do arquivo. A compressao inteligente preserva a qualidade enquanto reduz significativamente o tamanho.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Inteligente</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para limites de 10MB..." successMessage="Seu PDF comprimido esta pronto!" compressionLevel="recommended" />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para Limites de 10MB?</h2>
            <p className="text-lg text-slate-600 mb-8">Muitos provedores de email, sistemas de compartilhamento e portais de upload limitam arquivos a 10MB. Relatorios com graficos, apresentacoes com imagens e documentos digitalizados frequentemente excedem esse limite. O PDF.it aplica compressao inteligente para reduzir o tamanho preservando a qualidade.</p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao inteligente que preserva excelente qualidade visual</li>
              <li>&#10003; Perfeito para email, compartilhamento e uploads</li>
              <li>&#10003; O texto permanece nitido e completamente legivel</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima PDFs no navegador</li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Anexos de Email</h3><p className="text-slate-600">Muitos provedores de email limitam anexos a 10MB. Comprima relatorios, apresentacoes e documentos para envia-los direto por email sem precisar de links externos.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Compartilhamento por Mensagens</h3><p className="text-slate-600">Plataformas como Slack, Teams e Telegram podem limitar uploads. Comprima PDFs para compartilha-los rapidamente nas conversas.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Armazenamento na Nuvem</h3><p className="text-slate-600">Economize espaco no Google Drive, Dropbox e OneDrive comprimindo PDFs antes de subi-los. Arquivos menores sincronizam mais rapido entre dispositivos.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Portais de Upload</h3><p className="text-slate-600">Sistemas de gestao documental e portais de envio frequentemente limitam uploads a 10MB. Comprima para que seus documentos subam sem erros.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 10MB</h2>
            <div className="space-y-4">
              {["Envie ou arraste seu PDF ao PDF.it.", "Clique em Comprimir PDF — a compressao inteligente e aplicada automaticamente.", "Baixe seu PDF menor. Se continuar acima de 10MB, tente compressao extrema ou divida o arquivo."].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200"><div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div><p className="text-slate-700 pt-1">{step}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Mais Ferramentas PDF</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
              {[
                { name: "Comprimir para 5MB", desc: "Para limites de 5MB.", href: "/br/comprimir-pdf-para-5mb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
                { name: "Comprimir PDF", desc: "Compressao padrao.", href: "/br/comprimir-pdf", icon: Compress },
                { name: "Comprimir para Email", desc: "Para anexos de email.", href: "/br/comprimir-pdf-para-email", icon: Compress },
                { name: "Dividir PDF", desc: "Divide se ainda for grande.", href: "/br/dividir-pdf", icon: Scissors },
                { name: "Unir PDF", desc: "Combina varios PDFs.", href: "/br/unir-pdf", icon: Merge },
                { name: "Achatar PDF", desc: "Remove campos.", href: "/br/achatar-pdf", icon: FileText },
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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como comprimo um PDF para limite de 10MB?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao recomendada reduz significativamente o tamanho preservando a qualidade." },
                { q: "Meu PDF ficara abaixo de 10MB?", a: "A grande maioria dos documentos ficam abaixo de 10MB apos compressao. Documentos muito grandes podem precisar de compressao extrema." },
                { q: "A qualidade sera preservada?", a: "Sim. O texto permanece nitido e as imagens mantem otimo detalhe." },
                { q: "Posso comprimir pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel." },
                { q: "Quais plataformas exigem limite de 10MB?", a: "Provedores de email, plataformas de mensagens, portais de upload e sistemas de compartilhamento." },
                { q: "O que faco se continuar acima de 10MB?", a: "Tente compressao extrema ou divida o PDF. Achate o PDF ou remova paginas desnecessarias." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Precisa Comprimir PDF para 10MB?</h2>
            <p className="text-slate-300 text-lg mb-8">Envie seu PDF e aplique compressao inteligente em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/comprimir-pdf-para-10mb" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Comprimir para 10MB Agora</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
