import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Link2, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Extrair Links de PDF — Encontre Todas as URLs em um PDF | PDF.it",
  description: "Encontre e extraia todos os hyperlinks e URLs de documentos PDF. O PDF.it ajuda a extrair conteudo de texto incluindo links incorporados de qualquer PDF.",
  alternates: {
    canonical: "/br/extrair-links-de-pdf",
    languages: { en: "/extract-links-from-pdf", es: "/es/extraer-enlaces-de-pdf", pt: "/br/extrair-links-de-pdf" },
  },
}

export default function ExtrairLinksDePdfPage() {
  const faqs = [
    { q: "Como extraio links de um PDF?", a: "Converta seu PDF para texto usando a ferramenta PDF para TXT do PDF.it. O texto extraido contera todas as URLs visiveis do documento. Voce pode pesquisar padroes http://, https:// ou www. para encontrar cada link." },
    { q: "Posso extrair hyperlinks ocultos atras de texto?", a: "Hyperlinks clicaveis incorporados atras de texto ancora (como \"clique aqui\") requerem examinar as anotacoes de link do PDF. Converter para formato Word preserva esses hyperlinks, permitindo ver e clicar as URLs reais." },
    { q: "Como extraio links de um PDF digitalizado?", a: "PDFs digitalizados sao imagens, entao links nao sao clicaveis nem incorporados como texto. Use o Scanner OCR do PDF.it primeiro para converter as paginas em texto selecionavel, depois extraia o texto para encontrar URLs impressas." },
    { q: "Posso extrair todos os links de um PDF de uma vez?", a: "Sim. Converta o PDF inteiro para texto e pesquise por padroes de URL. Isso captura todas as URLs visiveis em todo o documento em um unico passo." },
    { q: "Por que eu precisaria extrair links de um PDF?", a: "Razoes comuns incluem auditar referencias em artigos de pesquisa, verificar links quebrados em documentacao, compilar listas de recursos de relatorios, verificar citacoes e migrar conteudo de PDFs para sites ou bancos de dados." },
    { q: "Quais tipos de links podem ser encontrados em PDFs?", a: "PDFs podem conter texto de URL visivel (impresso na pagina), hyperlinks clicaveis atras de texto ancora, links de email mailto, links internos do documento (pulando para outras paginas) e links para arquivos externos." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Link2 className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Extrair Links de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Encontre e extraia todos os hyperlinks e URLs incorporados em documentos PDF. Extraia cada referencia, citacao e link de recurso de artigos de pesquisa, relatorios e documentacao.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Encontre Todas as URLs Instantaneamente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Instalacao</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">PDFs frequentemente contem dezenas ou centenas de links — referencias em artigos academicos, URLs de recursos em relatorios e hyperlinks em documentacao. Extrair esses links manualmente e tedioso. O PDF.it ajuda a extrair todo o conteudo de texto de PDFs, facilitando encontrar e compilar cada URL no seu documento.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Extraia URLs visiveis impressas no texto do PDF</li>
              <li className="flex items-center gap-2">✓ Converta para Word para preservar hyperlinks clicaveis</li>
              <li className="flex items-center gap-2">✓ Use OCR para documentos digitalizados com URLs impressas</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — extraia links no navegador</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-slate-900 mb-4">Extrair Conteudo de PDFs</h2>
          <p className="text-slate-600 mb-6">Converta seu PDF para texto para encontrar todas as URLs e links incorporados no documento. Funciona com qualquer PDF que contenha texto selecionavel.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/br/pdf-para-txt" className="inline-flex items-center justify-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">PDF para TXT (Gratis)</Link>
            <Link href="/br/extrair-texto-de-pdf" className="inline-flex items-center justify-center gap-2 bg-slate-800 hover:bg-slate-900 text-white font-bold py-3 px-8 rounded-xl transition-colors">Extrair Texto</Link>
          </div>
        </div></section>

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Encontrar URLs em Artigos de Pesquisa", desc: "Artigos academicos e relatorios estao repletos de referencias. Converta o PDF para texto e pesquise todas as URLs de uma vez — perfeito para revisoes de literatura e verificacao de fatos." },
                { title: "Extrair Referencias e Citacoes", desc: "Muitos PDFs incluem secoes de bibliografia com URLs de obras citadas. Extraia o texto completo para compilar rapidamente uma lista de todos os links referenciados para verificacao." },
                { title: "Auditar Links de Documentos", desc: "Antes de publicar ou distribuir um PDF, verifique se todos os links estao corretos e ativos. Extraia cada URL e verifique cada um quanto a links quebrados ou referencias desatualizadas." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Extrair Links de um PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Envie seu PDF", desc: "Use o conversor PDF para TXT do PDF.it" },
                { num: "2", title: "Baixe o texto", desc: "Obtenha o texto extraido com todo o conteudo" },
                { num: "3", title: "Pesquise por URLs", desc: "Encontre padroes http://, https://, www." },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "PDF para TXT", href: "/br/pdf-para-txt", desc: "Extrair todo o conteudo de texto" },
                { name: "Extrair Texto", href: "/br/extrair-texto-de-pdf", desc: "Copiar texto de PDFs" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Texto de PDFs digitalizados" },
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Preservar hyperlinks" },
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
