import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para 500KB Online — Reduzir Tamanho de PDF | OmnisPDF",
  description: "Comprima seu PDF para cumprir limites de 500KB. Compressao forte para formularios web, candidaturas e portais com limites de upload — rapido, pelo navegador, gratis.",
  alternates: { languages: { en: "/compress-pdf-to-500kb", es: "/es/comprimir-pdf-a-500kb", pt: "/br/comprimir-pdf-para-500kb" } },
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como comprimo um PDF para limite de 500KB?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao OmnisPDF e clique em Comprimir. A ferramenta aplica compressao forte para reduzir imagens e otimizar a estrutura interna, reduzindo significativamente o tamanho do arquivo." } },
  { "@type": "Question", "name": "Meu PDF ficara abaixo de 500KB?", "acceptedAnswer": { "@type": "Answer", "text": "Documentos de ate 5-10 paginas com texto e poucas imagens geralmente ficam abaixo de 500KB. Arquivos com muitas imagens de alta resolucao podem precisar ser divididos primeiro." } },
  { "@type": "Question", "name": "A qualidade sera afetada?", "acceptedAnswer": { "@type": "Answer", "text": "O texto permanece nitido e legivel. As imagens sao otimizadas mantendo boa qualidade visual para a maioria dos documentos." } },
  { "@type": "Question", "name": "Posso comprimir pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em qualquer navegador movel no iPhone ou Android." } },
  { "@type": "Question", "name": "Para que serve o limite de 500KB?", "acceptedAnswer": { "@type": "Answer", "text": "Muitos portais de candidatura, formularios governamentais e sistemas de envio de documentos exigem arquivos abaixo de 500KB. E um limite comum em plataformas de emprego e portais educacionais." } },
  { "@type": "Question", "name": "O que faco se continuar acima de 500KB?", "acceptedAnswer": { "@type": "Answer", "text": "Divida o PDF em secoes menores com nossa ferramenta Dividir PDF e comprima cada parte. Tambem pode achatar o PDF ou remover paginas desnecessarias." } }
] }

export default function ComprimirPDFPara500KBPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Compress className="h-10 w-10 text-white" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 500KB</h1>
            <p className="text-xl text-slate-300 mb-8">Aplique compressao forte para reduzir seu PDF para portais com limites de 500KB. Ideal para candidaturas de emprego, formularios governamentais, portais educacionais e envios de documentos online.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Forte</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para limites de 500KB..." successMessage="Seu PDF comprimido esta pronto!" compressionLevel="extreme" />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para Limites de 500KB?</h2>
            <p className="text-lg text-slate-600 mb-8">O limite de 500KB e um dos mais comuns em portais de upload. Plataformas de candidatura de emprego, sistemas de admissao universitaria, formularios governamentais e portais de documentos frequentemente exigem arquivos nesse tamanho. O OmnisPDF aplica compressao forte para ajuda-lo a cumprir esses limites.</p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao forte para reducao significativa de tamanho</li>
              <li>&#10003; Ideal para candidaturas, formularios e documentos oficiais</li>
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
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Candidaturas de Emprego</h3><p className="text-slate-600">Muitas plataformas de emprego limitam uploads de curriculo a 500KB. Comprima seu curriculo e carta de apresentacao para que subam sem erros.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Portais Educacionais</h3><p className="text-slate-600">Sistemas de admissao de universidades frequentemente exigem historicos, cartas de recomendacao e redacoes abaixo de 500KB.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Formularios Governamentais</h3><p className="text-slate-600">Processos governamentais, licencas e alvaras frequentemente exigem documentos abaixo de 500KB para upload online.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Envio de Documentos</h3><p className="text-slate-600">Portais de seguros, plataformas de licitacao e sistemas de envio limitam uploads a 500KB. Comprima recibos, registros e formularios para que subam com sucesso.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 500KB</h2>
            <div className="space-y-4">
              {["Envie ou arraste seu PDF ao OmnisPDF.", "Clique em Comprimir PDF — a compressao forte e aplicada automaticamente.", "Baixe seu PDF menor. Se continuar acima de 500KB, tente dividi-lo em secoes menores primeiro."].map((step, i) => (
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
                { name: "Comprimir para 200KB", desc: "Para limites de 200KB.", href: "/br/comprimir-pdf-para-200kb", icon: Compress },
                { name: "Comprimir para 1MB", desc: "Para limites de 1MB.", href: "/br/comprimir-pdf-para-1mb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
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
                { q: "Como comprimo um PDF para limite de 500KB?", a: "Envie seu PDF ao OmnisPDF e clique em Comprimir. A compressao forte reduz significativamente o tamanho otimizando imagens e estrutura interna." },
                { q: "Meu PDF ficara abaixo de 500KB?", a: "Documentos de ate 5-10 paginas com texto geralmente ficam abaixo de 500KB. Arquivos com muitas imagens podem precisar ser divididos." },
                { q: "A qualidade sera afetada?", a: "O texto permanece nitido. As imagens sao otimizadas mantendo boa qualidade visual para a maioria dos documentos." },
                { q: "Posso comprimir pelo celular?", a: "Sim. O OmnisPDF funciona em qualquer navegador movel no iPhone ou Android." },
                { q: "Para que serve o limite de 500KB?", a: "Plataformas de emprego, portais educacionais, formularios governamentais e sistemas de envio de documentos frequentemente exigem arquivos abaixo de 500KB." },
                { q: "O que faco se continuar acima de 500KB?", a: "Divida o PDF em secoes menores e comprima cada parte. Achate o PDF ou remova paginas desnecessarias." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-gradient-to-br from-slate-900 to-slate-800 text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Precisa Comprimir PDF para 500KB?</h2>
            <p className="text-slate-300 text-lg mb-8">Envie seu PDF e aplique compressao forte em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/comprimir-pdf-para-500kb" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Comprimir para 500KB Agora</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
