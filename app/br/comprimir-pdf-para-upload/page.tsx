import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para Upload — Reduza o Tamanho do PDF | PDF.it",
  description: "Comprima seu PDF para cumprir limites de tamanho de portais de upload. Compressao extrema para formularios governamentais, admissoes universitarias, candidaturas de emprego e sinistros de seguro — gratis e pelo navegador.",
  alternates: { canonical: "/br/comprimir-pdf-para-upload", languages: { en: "/compress-pdf-for-upload", es: "/es/comprimir-pdf-para-subir", pt: "/br/comprimir-pdf-para-upload" } },
}

export default function ComprimirPDFParaUploadPageBr() {
  const faqs = [
    { q: "Como comprimo um PDF para um portal de upload?", a: "Envie seu PDF ao PDF.it e clique em Comprimir. A compressao extrema reduz a resolucao de imagens e otimiza a estrutura do arquivo, reduzindo drasticamente o tamanho para ajudar a cumprir limites de upload de portais." },
    { q: "Meu PDF comprimido sera aceito por portais governamentais?", a: "Sim. O PDF.it produz arquivos PDF padrao aceitos por todos os principais portais. O texto permanece nitido e legivel, e a estrutura do arquivo permanece valida para qualquer sistema que aceite PDFs." },
    { q: "Posso comprimir um PDF para cumprir um limite especifico?", a: "A compressao extrema reduz drasticamente o tamanho do arquivo, mas o resultado exato depende do conteudo do seu PDF. Documentos com muito texto comprimem muito bem. Se o arquivo ainda for grande demais, tente dividi-lo em partes e comprimir cada uma." },
    { q: "A qualidade do documento sera afetada?", a: "O texto permanece nitido e totalmente legivel. As imagens podem perder algum detalhe em niveis de compressao extrema, mas o documento continua utilizavel para envios e uploads." },
    { q: "Posso comprimir PDFs para upload pelo celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Envie seu PDF, comprima-o e baixe o arquivo menor direto no seu iPhone ou Android — sem instalacao de app." },
    { q: "O que faco se meu PDF ainda for grande demais apos comprimir?", a: "Tente dividir o PDF em secoes menores com nossa ferramenta Dividir PDF e comprima cada parte separadamente. Voce tambem pode achatar o PDF ou remover paginas desnecessarias antes de comprimir." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Compress className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Portais de Upload</h1>
            <p className="text-xl text-slate-300 mb-8">Muitos portais de upload tem limites rigorosos de tamanho. Aplique compressao extrema para reduzir drasticamente o tamanho do seu PDF para formularios governamentais, admissoes universitarias, portais de emprego e mais.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Compressao Extrema</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Sites governamentais, sistemas de admissao universitaria, portais de candidatura de emprego e formularios de sinistros de seguro frequentemente impoem limites rigorosos de tamanho — as vezes tao baixos quanto 1MB ou 2MB. Se seu PDF exceder o limite, o upload falha. O PDF.it aplica compressao extrema para reduzir drasticamente o tamanho do arquivo, ajudando voce a enviar seus documentos sem problemas.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Compressao extrema para maxima reducao de tamanho</li>
            <li className="flex items-center gap-2">✓ Produz PDFs padrao aceitos por todos os portais</li>
            <li className="flex items-center gap-2">✓ Texto permanece nitido e legivel para envios</li>
            <li className="flex items-center gap-2">✓ Sem instalacao — comprima PDFs no navegador</li>
          </ul>
        </div></section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="Compress PDF" outputFormat="PDF" processingMessage="Comprimindo seu PDF para upload..." successMessage="Seu PDF comprimido esta pronto para enviar!" compressionLevel="extreme" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Candidaturas de Emprego e Admissoes", desc: "Portais de emprego, sistemas de rastreamento de candidatos e portais universitarios frequentemente limitam uploads a poucos megabytes. Comprima seu curriculo, historico escolar e cartas para enviar sem erros." },
            { title: "Filings Governamentais e de Seguro", desc: "Declaracoes de impostos, solicitacoes de alvara, formularios de visto e sinistros de seguro tem limites rigorosos de upload. Comprima seus PDFs para cumprir requisitos e evitar erros de envio." },
            { title: "Saida em PDF Padrao", desc: "O PDF.it produz arquivos PDF padrao aceitos por todos os principais portais. O texto permanece nitido e legivel, e a estrutura do arquivo permanece valida para qualquer sistema." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para Portais de Upload</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" }, { num: "2", title: "Clique em Comprimir", desc: "A compressao extrema e aplicada automaticamente" }, { num: "3", title: "Baixe e envie", desc: "Receba seu arquivo menor e envie ao portal" }].map((step) => (
              <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Compressao padrao" }, { name: "Comprimir para 1MB", href: "/br/comprimir-pdf-para-1mb", desc: "Para limites de 1MB" }, { name: "Comprimir para 2MB", href: "/br/comprimir-pdf-para-2mb", desc: "Para limites de 2MB" }, { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se ainda for grande" }].map((tool) => (
              <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
            ))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
          <div className="space-y-4">{faqs.map((faq, i) => (<div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>))}</div>
        </div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}
