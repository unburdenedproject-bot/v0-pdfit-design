import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileText, Zap, Shield, Upload } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF para Google Docs — Abra PDFs no Google Docs | PDF.it",
  description: "Converta PDF para formato Google Docs. Converta PDF para Word com o PDF.it, envie ao Google Drive e abra no Google Docs para edicao facil.",
  alternates: { languages: { en: "/pdf-to-google-docs", es: "/es/pdf-a-google-docs", pt: "/br/pdf-para-google-docs" } },
}

export default function PDFParaGoogleDocsPage() {
  const faqs = [
    {
        "q": "Posso abrir um PDF diretamente no Google Docs?",
        "a": "O Google Drive pode abrir PDFs, mas a formatacao geralmente fica quebrada. Para melhores resultados, converta o PDF para DOCX primeiro usando o PDF.it."
    },
    {
        "q": "Por que converter para DOCX antes?",
        "a": "O Google Docs lida muito melhor com arquivos DOCX. Converter para DOCX primeiro preserva a formatacao."
    },
    {
        "q": "Este metodo e gratuito?",
        "a": "A conversao de PDF para Word esta disponivel para assinantes Pro e Business. Enviar ao Google Drive e abrir no Google Docs e gratuito."
    },
    {
        "q": "A formatacao sera preservada?",
        "a": "Converter PDF para DOCX com o PDF.it preserva a maioria da formatacao incluindo fontes, tabelas, imagens e layout."
    },
    {
        "q": "Posso colaborar no documento apos a conversao?",
        "a": "Sim. No Google Docs voce pode compartilhar com outros, usar colaboracao em tempo real e rastrear alteracoes."
    },
    {
        "q": "Posso fazer isso em um Chromebook?",
        "a": "Sim. O PDF.it funciona em qualquer navegador. Converta, baixe, envie ao Google Drive e abra no Google Docs."
    }
]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileText className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para Google Docs</h1>
            <p className="text-xl text-slate-300 mb-8">Abra qualquer PDF no Google Docs com formatacao perfeita. Converta para Word primeiro com o PDF.it, depois envie ao Google Drive para edicao e colaboracao facil.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Preserva Formatacao</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-[#14D8C4]" /><span>Funciona em Qualquer Dispositivo</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">O Google Drive pode tecnicamente abrir PDFs, mas os resultados sao frequentemente decepcionantes — tabelas quebram, fontes mudam e imagens se deslocam. Convertendo para DOCX primeiro com o PDF.it, voce obtem um documento limpo e editavel que o Google Docs pode renderizar corretamente.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Melhor formatacao que abrir PDFs diretamente</li>
              <li className="flex items-center gap-2">✓ Tabelas, imagens e estrutura de texto preservadas</li>
              <li className="flex items-center gap-2">✓ Edicao completa e colaboracao no Google Docs</li>
              <li className="flex items-center gap-2">✓ Compartilhe e colabore em tempo real com sua equipe</li>
          </ul>
        </div></section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center"><Link href="/br/pdf-para-word" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">Passo 1: Converter PDF para Word</Link><p className="text-sm text-slate-500 mt-3">Depois envie o DOCX ao Google Drive e abra com o Google Docs</p></div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Edicao Colaborativa", desc: "Precisa que varias pessoas editem um PDF? Converta para formato Google Docs para que toda a equipe possa fazer alteracoes simultaneamente com colaboracao em tempo real." },
                { title: "Funciona em Chromebooks", desc: "Chromebooks rodam Google Docs nativamente mas nao podem instalar o Word. Converta seu PDF para DOCX com o PDF.it, depois abra no Google Docs para edicao completa." },
                { title: "Fluxo de Trabalho na Nuvem", desc: "Mantenha todos os seus documentos no Google Drive. Converta PDFs para formato Google Docs para que tudo fique em um sistema organizado e baseado na nuvem." },
              ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
            </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Abrir um PDF no Google Docs</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Converta PDF para Word", desc: "Use o PDF.it para converter seu PDF para DOCX" }, { num: "2", title: "Envie ao Google Drive", desc: "Envie o arquivo DOCX para drive.google.com" }, { num: "3", title: "Abra com Google Docs", desc: "Clique duas vezes no arquivo para editar" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word DOC" }, { name: "PDF para DOCX", href: "/br/pdf-para-docx", desc: "Converta PDF para formato DOCX" }, { name: "PDF para Google Sheets", href: "/br/pdf-para-google-sheets", desc: "Tabelas PDF para Google Sheets" }, { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de escaneamentos" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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
