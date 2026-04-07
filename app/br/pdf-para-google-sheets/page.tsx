import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { FileSpreadsheet, Zap, Shield, Upload } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF para Google Sheets — Abra Tabelas PDF no Google Sheets | PDF.it",
  description: "Aprenda como converter tabelas PDF para Google Sheets. Converta PDF para Excel com o PDF.it, envie ao Google Drive e abra no Google Sheets para edicao e analise.",
  alternates: { languages: { en: "/pdf-to-google-sheets", es: "/es/pdf-a-google-sheets", pt: "/br/pdf-para-google-sheets" } },
}

export default function PDFParaGoogleSheetsPage() {
  const faqs = [
    { q: "Posso abrir um PDF diretamente no Google Sheets?", a: "Nao. O Google Sheets nao pode abrir arquivos PDF diretamente. A melhor abordagem e converter o PDF para um arquivo Excel XLSX primeiro usando o PDF.it, depois enviar o XLSX ao Google Drive e abrir com o Google Sheets." },
    { q: "Por que devo converter para XLSX antes de enviar ao Google Sheets?", a: "O Google Sheets suporta nativamente arquivos XLSX e preserva estrutura de celulas, formulas e formatacao. O conversor PDF para Excel do PDF.it detecta estruturas de tabelas no seu PDF e as mapeia para linhas e colunas limpas." },
    { q: "Minhas tabelas PDF serao extraidas com precisao?", a: "O PDF.it detecta estruturas de tabelas no seu PDF e as converte para linhas e colunas Excel. Tabelas bem estruturadas com bordas claras convertem com alta precisao." },
    { q: "Este metodo e gratuito?", a: "A conversao de PDF para Excel no PDF.it esta disponivel para assinantes Pro e Business. Enviar ao Google Drive e abrir no Google Sheets e completamente gratuito." },
    { q: "Posso usar formulas e graficos apos a importacao?", a: "Sim. Uma vez que o XLSX e aberto no Google Sheets, voce tem acesso completo a formulas, tabelas dinamicas, graficos, formatacao condicional e todos os outros recursos." },
    { q: "Posso compartilhar a planilha com minha equipe?", a: "Sim. Uma vez no Google Sheets, voce pode compartilhar a planilha com qualquer pessoa, definir permissoes e colaborar em tempo real." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileSpreadsheet className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para Google Sheets</h1>
            <p className="text-xl text-slate-300 mb-8">Extraia tabelas e dados de qualquer PDF para o Google Sheets. Converta para Excel primeiro com o PDF.it, depois envie ao Google Drive para analise e colaboracao.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Deteccao Inteligente de Tabelas</span></div>
              <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
              <div className="flex items-center gap-2"><Upload className="h-4 w-4 text-[#14D8C4]" /><span>Funciona em Qualquer Dispositivo</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">O Google Sheets e um aplicativo de planilhas — ele espera dados estruturados em linhas e colunas. PDFs sao documentos visuais projetados para impressao, nao para analise de dados. Para levar seus dados PDF ao Google Sheets, primeiro extraia as tabelas em formato Excel com o PDF.it, depois envie o XLSX ao Google Drive.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">\u2713 Deteccao automatica de tabelas extrai linhas e colunas</li>
            <li className="flex items-center gap-2">\u2713 Formato XLSX abre nativamente no Google Sheets</li>
            <li className="flex items-center gap-2">\u2713 Acesso completo a formulas, graficos e tabelas dinamicas</li>
            <li className="flex items-center gap-2">\u2713 Compartilhe e colabore com sua equipe em tempo real</li>
          </ul>
        </div></section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <Link href="/br/pdf-para-excel" className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-4 px-10 rounded-xl text-lg transition-colors shadow-lg">Passo 1: Converter PDF para Excel</Link>
          <p className="text-sm text-slate-500 mt-3">Depois envie o XLSX ao Google Drive e abra com o Google Sheets</p>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Analise Dados Financeiros", desc: "Extratos bancarios, relatorios de lucros e resultados trimestrais chegam como PDFs. Converta para Google Sheets para calcular, criar graficos e acompanhar tendencias." },
            { title: "Importe Notas Fiscais e Orcamentos", desc: "Extraia itens de notas fiscais PDF para o Google Sheets. Classifique por fornecedor, calcule totais e reconcilie pagamentos em uma planilha na nuvem." },
            { title: "Colabore em Dados", desc: "Em vez de enviar relatorios PDF por e-mail, converta para Google Sheets. Todos trabalham nos mesmos dados em tempo real — sem conflitos de versao." },
          ].map((feature) => (<div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Abrir Tabelas PDF no Google Sheets</h2>
          <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
            {[{ num: "1", title: "Converta PDF para Excel", desc: "Use o PDF.it para extrair tabelas em formato XLSX" }, { num: "2", title: "Envie ao Google Drive", desc: "Envie o arquivo XLSX para drive.google.com" }, { num: "3", title: "Abra com Google Sheets", desc: "Clique duas vezes no arquivo para editar no Sheets" }].map((step) => (<div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>))}
          </div>
        </div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[{ name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Converta PDF para planilha" }, { name: "PDF para XLSX", href: "/br/pdf-para-xlsx", desc: "Extraia tabelas para XLSX" }, { name: "PDF para Google Docs", href: "/br/pdf-para-google-docs", desc: "Abra PDFs no Google Docs" }, { name: "Extracao de Tabelas", href: "/br/extracao-de-tabelas", desc: "Exportacao avancada de dados" }].map((tool) => (<div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>))}
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
