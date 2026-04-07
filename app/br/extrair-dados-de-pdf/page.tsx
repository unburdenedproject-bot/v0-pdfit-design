import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileSpreadsheet, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Dados de PDF — Extraia Informacoes de Arquivos PDF | PDF.it",
  description: "Extraia dados de arquivos PDF com PDF.it. Extraia texto, tabelas, imagens e dados estruturados de PDFs para analise, edicao e reutilizacao — rapido e no navegador.",
  alternates: {
    canonical: "/br/extrair-dados-de-pdf",
    languages: { en: "/extract-data-from-pdf", es: "/es/extraer-datos-de-pdf", pt: "/br/extrair-dados-de-pdf" },
  },
}

export default function ExtrairDadosDePdfPage() {
  const faqs = [
    { q: "Quais tipos de dados posso extrair de um PDF?", a: "Voce pode extrair conteudo de texto, dados tabulares (tabelas e planilhas), imagens incorporadas e metadados de PDFs. O PDF.it oferece ferramentas especializadas para cada: PDF para TXT para texto, PDF para Excel para tabelas, Extrair Imagens para graficos e Scanner OCR para documentos digitalizados." },
    { q: "Como extraio tabelas de um PDF para Excel?", a: "Use o conversor PDF para Excel do PDF.it. Envie seu PDF e a ferramenta detectara estruturas de tabelas e as convertera em formato de planilha Excel com linhas e colunas preservadas." },
    { q: "Posso extrair dados de um PDF digitalizado?", a: "Sim, mas PDFs digitalizados requerem OCR primeiro. Use o Scanner OCR do PDF.it para converter paginas digitalizadas em texto selecionavel e pesquisavel. Depois use a ferramenta apropriada para extrair os dados." },
    { q: "Qual a diferenca entre PDF digital e PDF digitalizado?", a: "Um PDF digital foi criado a partir de um aplicativo de computador (Word, Excel, etc.) e contem texto e dados reais que podem ser selecionados e extraidos diretamente. Um PDF digitalizado e essencialmente uma fotografia de um documento — contem apenas dados de imagem e requer OCR para extrair texto." },
    { q: "Posso extrair dados de PDFs protegidos por senha?", a: "Se voce sabe a senha, use a ferramenta Desbloquear PDF do PDF.it primeiro para remover a protecao, depois extraia os dados normalmente." },
    { q: "Como extraio dados de varios PDFs de uma vez?", a: "O PDF.it Pro suporta processamento em lote. Envie varios PDFs e processe-os simultaneamente para extracao de texto, conversao ou extracao de imagens. Os resultados sao entregues como arquivo ZIP." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Dados de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Extraia texto, tabelas, imagens e dados estruturados de qualquer PDF. Seja para dados financeiros, dados de pesquisa ou conteudo de documentos, o PDF.it tem a ferramenta certa para o trabalho.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Multiplas Ferramentas de Extracao</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Processamento no Navegador</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">PDFs sao projetados para visualizacao, nao edicao — o que torna a extracao de dados um desafio comum. Seja para extrair dados financeiros de relatorios anuais, descobertas de pesquisa de artigos academicos ou converter dados tabulares para analise, o PDF.it fornece ferramentas especializadas para cada cenario de extracao.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extraia texto puro de qualquer PDF digital</li>
              <li className="flex items-center gap-2">✓ Converta tabelas de PDF para planilhas Excel</li>
              <li className="flex items-center gap-2">✓ Extraia imagens incorporadas de documentos</li>
              <li className="flex items-center gap-2">✓ OCR para documentos digitalizados e fotografados</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Escolha Sua Ferramenta de Extracao</h2>
          <p className="text-slate-600 mb-8">O PDF.it oferece diversas formas de extrair dados de PDFs:</p>
          <div className="grid grid-cols-2 gap-4 max-w-md mx-auto">
            <Link href="/br/pdf-para-txt" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extrair Texto</Link>
            <Link href="/br/pdf-para-excel" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extrair Tabelas</Link>
            <Link href="/br/extrair-imagens-de-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Extrair Imagens</Link>
            <Link href="/br/scanner-ocr" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-6 rounded-xl transition-colors text-sm">Scanner OCR</Link>
          </div>
        </div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Extrair Dados Financeiros de Relatorios", desc: "Relatorios anuais e demonstracoes financeiras quase sempre sao PDFs. O PDF.it detecta estruturas de tabelas e preserva linhas, colunas e dados numericos para analise em planilha." },
                { title: "Extrair Dados de Pesquisa de Artigos Academicos", desc: "Converta PDFs para texto para analise de conteudo, extraia tabelas para Excel para revisao estatistica ou extraia imagens para apresentacoes e revisoes de literatura." },
                { title: "Extrair Conteudo de Qualquer Documento", desc: "De contratos juridicos a catalogos de produtos, faturas a manuais tecnicos — qualquer informacao presa em um PDF pode ser extraida usando a ferramenta certa." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extrair Dados de um PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Escolha a ferramenta certa", desc: "Texto, Tabelas, Imagens ou OCR para digitalizacoes" },
                { num: "2", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "3", title: "Baixe seus dados", desc: "Receba os dados extraidos no formato preferido" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "PDF para TXT", href: "/br/pdf-para-txt", desc: "Extrair conteudo de texto" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extrair tabelas e dados" },
                { name: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf", desc: "Extrair imagens incorporadas" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Texto de PDFs digitalizados" },
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
