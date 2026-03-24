import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download, FileText, Merge, RotateCw, Scissors } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para 1MB Online — Reduzir Tamanho de PDF | PDF.it",
  description: "Comprima seu PDF para cumprir limites de 1MB. Perfeito para portais de upload, formularios e candidaturas com limites rigorosos de tamanho.",
  alternates: { languages: { en: "/compress-pdf-to-1mb", es: "/es/comprimir-pdf-a-1mb", pt: "/br/comprimir-pdf-para-1mb" } },
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como comprimo um PDF para limite de 1MB?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it e clique em Comprimir. A ferramenta aplica compressao forte para otimizar imagens e estrutura interna, reduzindo significativamente o tamanho do arquivo." } },
  { "@type": "Question", "name": "Meu PDF ficara abaixo de 1MB?", "acceptedAnswer": { "@type": "Answer", "text": "Documentos de ate 10-20 paginas com texto e imagens moderadas geralmente ficam abaixo de 1MB. Arquivos com muitas imagens de alta resolucao podem precisar ser divididos primeiro." } },
  { "@type": "Question", "name": "A qualidade sera afetada?", "acceptedAnswer": { "@type": "Answer", "text": "O texto permanece nitido e legivel. As imagens sao otimizadas de forma inteligente mantendo boa qualidade visual." } },
  { "@type": "Question", "name": "Posso comprimir pelo celular?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel no iPhone ou Android." } },
  { "@type": "Question", "name": "Quais portais exigem limite de 1MB?", "acceptedAnswer": { "@type": "Answer", "text": "Muitos portais governamentais, sistemas de candidatura de emprego, plataformas educacionais e formularios online exigem documentos abaixo de 1MB." } },
  { "@type": "Question", "name": "O que faco se continuar acima de 1MB?", "acceptedAnswer": { "@type": "Answer", "text": "Divida o PDF em secoes menores com nossa ferramenta Dividir PDF e comprima cada parte. Tambem pode achatar o PDF ou remover paginas desnecessarias." } }
] }

export default function ComprimirPDFPara1MBPagePt() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema-pt" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6"><Compress className="h-10 w-10 text-white" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Limites de 1MB</h1>
            <p className="text-xl text-slate-300 mb-8">Muitos portais de upload exigem PDFs abaixo de 1MB. O PDF.it aplica compressao forte para reduzir o tamanho do seu arquivo e cumprir esses requisitos — mantendo texto nitido e imagens com boa qualidade.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressao Forte</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para limites de 1MB..." successMessage="Seu PDF comprimido esta pronto!" compressionLevel="extreme" />

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir um PDF para Limites de 1MB?</h2>
            <p className="text-lg text-slate-600 mb-8">O limite de 1MB e extremamente comum em portais de upload. Candidaturas de emprego, formularios governamentais, portais educacionais e sistemas de envio de documentos frequentemente exigem PDFs nesse tamanho. Se seu arquivo exceder o limite, o upload falha.</p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>&#10003; Compressao forte para reducao significativa de tamanho</li>
              <li>&#10003; Produz PDFs padrao aceitos por todos os sistemas</li>
              <li>&#10003; O texto permanece nitido e legivel</li>
              <li>&#10003; Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>&#10003; Sem instalacao — comprima PDFs no navegador</li>
            </ul>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Casos de Uso Comuns</h2>
            <div className="space-y-10">
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Candidaturas de Emprego</h3><p className="text-slate-600">Plataformas como LinkedIn, Indeed e Gupy limitam uploads de curriculo. Comprima seu curriculo para que suba sem problemas.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Portais Governamentais</h3><p className="text-slate-600">Processos de licencas, alvaras e documentos fiscais frequentemente exigem PDFs abaixo de 1MB.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Portais Educacionais</h3><p className="text-slate-600">Historicos, cartas de recomendacao e redacoes para admissao universitaria frequentemente precisam estar abaixo de 1MB.</p></div>
              <div className="bg-gray-50 rounded-xl p-8 border border-gray-200"><h3 className="text-xl font-black text-slate-900 mb-3">Formularios Online</h3><p className="text-slate-600">Seguros, licitacoes e sistemas de envio limitam uploads. Comprima documentos para que subam com sucesso.</p></div>
            </div>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Limites de 1MB</h2>
            <div className="space-y-4">
              {["Envie ou arraste seu PDF ao PDF.it.", "Clique em Comprimir PDF — a compressao forte e aplicada automaticamente.", "Baixe seu PDF menor. Se continuar acima de 1MB, tente dividir o arquivo primeiro."].map((step, i) => (
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
                { name: "Comprimir para 500KB", desc: "Para limites de 500KB.", href: "/br/comprimir-pdf-para-500kb", icon: Compress },
                { name: "Comprimir para 2MB", desc: "Para limites de 2MB.", href: "/br/comprimir-pdf-para-2mb", icon: Compress },
                { name: "Comprimir para 5MB", desc: "Para limites de 5MB.", href: "/br/comprimir-pdf-para-5mb", icon: Compress },
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
                { q: "Como comprimo um PDF para limite de 1MB?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao forte reduz significativamente o tamanho otimizando imagens e estrutura interna." },
                { q: "Meu PDF ficara abaixo de 1MB?", a: "Documentos de ate 10-20 paginas com texto geralmente ficam abaixo de 1MB. Arquivos com muitas imagens podem precisar ser divididos." },
                { q: "A qualidade sera afetada?", a: "O texto permanece nitido. As imagens sao otimizadas mantendo boa qualidade visual." },
                { q: "Posso comprimir pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel." },
                { q: "Quais portais exigem limite de 1MB?", a: "Portais governamentais, plataformas de emprego, sistemas educacionais e formularios online." },
                { q: "O que faco se continuar acima de 1MB?", a: "Divida o PDF em secoes menores e comprima cada parte. Achate o PDF ou remova paginas desnecessarias." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3><p className="text-slate-600 text-sm">{faq.a}</p></div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#191B4D] text-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <h2 className="text-2xl font-black mb-4">Precisa Comprimir PDF para 1MB?</h2>
            <p className="text-slate-300 text-lg mb-8">Envie seu PDF e aplique compressao forte em segundos. Sem cadastro, sem instalacao, sem espera.</p>
            <Link href="/br/comprimir-pdf-para-1mb" className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl text-lg transition-colors shadow-lg">Comprimir para 1MB Agora</Link>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
