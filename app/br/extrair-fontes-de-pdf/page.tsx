import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Type, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Fontes de PDF — Identifique Fontes Usadas em PDFs | PDF.it",
  description: "Saiba como identificar e extrair fontes usadas em documentos PDF. O PDF.it ajuda voce a trabalhar com conteudo de PDF incluindo extracao de texto e conversao de documentos.",
  alternates: {
    canonical: "/br/extrair-fontes-de-pdf",
    languages: { en: "/extract-fonts-from-pdf", es: "/es/extraer-fuentes-de-pdf", pt: "/br/extrair-fontes-de-pdf" },
  },
}

export default function ExtrairFontesDePdfPage() {
  const faqs = [
    { q: "Posso extrair fontes diretamente de um PDF?", a: "PDFs incorporam dados de fontes para renderizacao, mas extrair arquivos de fontes utilizaveis requer ferramentas especializadas. Voce pode identificar quais fontes sao usadas examinando propriedades do PDF ou convertendo para formato editavel como Word, que preserva nomes de fontes." },
    { q: "E legal extrair fontes de um PDF?", a: "O licenciamento de fontes varia. A maioria das fontes comerciais sao licenciadas por usuario ou por dispositivo. Extrair e reutilizar fontes incorporadas sem licenca adequada pode violar o contrato de licenca da fonte. Sempre verifique a licenca antes de reutilizar fontes extraidas." },
    { q: "Como posso identificar quais fontes sao usadas em um PDF?", a: "Voce pode verificar propriedades do PDF na maioria dos leitores (Arquivo > Propriedades > Fontes), converter o PDF para Word para ver nomes de fontes no editor, ou extrair o texto e compara-lo visualmente usando servicos de identificacao como WhatTheFont ou Font Squirrel." },
    { q: "O que acontece com fontes quando converto PDF para Word?", a: "Quando voce converte um PDF para Word, o conversor identifica as fontes usadas e as referencia no documento Word. Se a fonte estiver instalada no seu sistema, ela e exibida corretamente. Se nao, o Word substitui por uma fonte semelhante." },
    { q: "Posso extrair fontes de um PDF digitalizado?", a: "PDFs digitalizados contem imagens, nao texto ou dados de fontes. Voce precisaria primeiro executar OCR para extrair o texto, depois usar uma ferramenta de identificacao visual para corresponder a tipografia usada no documento digitalizado." },
    { q: "O que sao fontes incorporadas em um PDF?", a: "Fontes incorporadas sao arquivos de fontes incluidos dentro de um PDF para que o documento seja exibido corretamente em qualquer dispositivo, mesmo que o leitor nao tenha a fonte instalada. A maioria dos PDFs profissionais incorpora fontes para garantir renderizacao consistente." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Type className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Fontes de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Saiba como identificar e extrair fontes usadas em documentos PDF. Descubra quais tipografias estao incorporadas em qualquer PDF e encontre formas de reutiliza-las em seus projetos.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Identifique Qualquer Fonte</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Processamento Seguro</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Instalacao</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Fontes sao uma parte critica da identidade visual de qualquer PDF. Seja para combinar a tipografia de uma marca, recriar um layout de documento ou simplesmente identificar qual fonte foi usada, entender como fontes sao incorporadas em PDFs e o primeiro passo. Converta seu PDF para Word para revelar nomes de fontes ou extraia texto para comparacao visual.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Identifique fontes incorporadas em qualquer documento PDF</li>
              <li className="flex items-center gap-2">✓ Converta PDFs para Word para revelar nomes de fontes</li>
              <li className="flex items-center gap-2">✓ Extraia conteudo de texto para comparacao visual de fontes</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — use o PDF.it no navegador</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Trabalhe com Conteudo de Texto de PDF</h2>
          <p className="text-slate-600 mb-6">Enquanto a extracao direta de fontes estara disponivel em breve, voce pode extrair conteudo de texto ou converter PDFs para formatos editaveis para identificar e reutilizar estilos de texto.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/br/pdf-para-txt" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Extrair Texto (Gratis)</Link>
            <Link href="/br/pdf-para-word" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">PDF para Word (Pro)</Link>
          </div>
        </div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Por Que Extrair Fontes de PDFs", desc: "Designers combinam tipografia entre projetos, profissionais de marketing mantem consistencia de marca e desenvolvedores identificam fontes para projetos web. Identificar fontes de PDFs e um fluxo de trabalho comum." },
                { title: "Como Identificar Fontes em um PDF", desc: "Converta seu PDF para Word usando o PDF.it. O documento convertido preserva nomes de fontes para que voce possa selecionar qualquer texto e ver a tipografia. Ou use WhatTheFont para comparacao visual." },
                { title: "Consideracoes sobre Licenciamento de Fontes", desc: "So porque uma fonte esta incorporada em um PDF nao significa que voce pode usa-la livremente. A maioria das fontes comerciais requer licenca. Muitas alternativas gratuitas excelentes existem no Google Fonts." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Identificar Fontes em um PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Converta PDF para Word", desc: "Envie seu PDF e converta para formato Word" },
                { num: "2", title: "Verifique os nomes das fontes", desc: "Selecione qualquer texto para ver a fonte no menu" },
                { num: "3", title: "Encontre a fonte online", desc: "Pesquise opcoes de licenciamento ou alternativas gratuitas" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "PDF para TXT", href: "/br/pdf-para-txt", desc: "Extrair conteudo de texto" },
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Editavel com nomes de fontes" },
                { name: "Extrair Texto", href: "/br/extrair-texto-de-pdf", desc: "Copiar todo texto de PDFs" },
                { name: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf", desc: "Obter imagens incorporadas" },
          ].map((tool) => (
            <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
          ))}
        </div></div></section>

        {/* FAQ */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2><div className="space-y-4">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}><h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3><p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p></div>
          ))}
        </div></div></section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}
