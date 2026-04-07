import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { OcrPdfInterface } from "@/components/ocr-pdf-interface"
import { Scan, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Digitalizar PDF para Texto — OCR para Documentos Digitalizados | PDF.it",
  description: "Converta PDFs digitalizados em texto pesquisavel e copiavel com o OCR do PDF.it. Extraia texto de digitalizacoes, fotos e PDFs baseados em imagem — rapido e no navegador.",
  alternates: {
    canonical: "/br/digitalizar-pdf-para-texto",
    languages: { en: "/scan-pdf-to-text", es: "/es/escanear-pdf-a-texto", pt: "/br/digitalizar-pdf-para-texto" },
  },
}

export default function DigitalizarPdfParaTextoPage() {
  const faqs = [
    { q: "Como funciona o OCR em PDFs digitalizados?", a: "OCR (Reconhecimento Optico de Caracteres) analisa as imagens no seu PDF digitalizado e identifica letras, palavras e paragrafos. O PDF.it converte isso em texto selecionavel, pesquisavel e copiavel." },
    { q: "Quao preciso e o OCR em documentos digitalizados?", a: "A precisao do OCR depende da qualidade da digitalizacao. Digitalizacoes claras e de alta resolucao geralmente produzem resultados muito precisos. Digitalizacoes borradas, tortas ou de baixo contraste podem ter alguns erros que precisam de revisao manual." },
    { q: "Quais idiomas o OCR suporta?", a: "O OCR do PDF.it suporta multiplos idiomas incluindo portugues, ingles, espanhol, frances, alemao, italiano e muitos mais. Selecione o idioma do documento antes de processar para melhores resultados." },
    { q: "Qual a diferenca entre um PDF digitalizado e um PDF digital?", a: "Um PDF digital contem dados de texto reais que podem ser selecionados e copiados. Um PDF digitalizado e essencialmente uma imagem de um documento — o texto faz parte da imagem e nao pode ser selecionado sem processamento OCR." },
    { q: "O scanner OCR e gratuito?", a: "O Scanner OCR e um recurso Pro. Usuarios gratuitos podem testa-lo com uso limitado. Assinantes Pro tem processamento OCR ilimitado com velocidade prioritaria." },
    { q: "Posso digitalizar um PDF para texto no celular?", a: "Sim. O PDF.it funciona em navegadores moveis — envie seu PDF digitalizado, execute OCR e obtenha texto pesquisavel no iPhone ou Android." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Scan className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Digitalizar PDF para Texto</h1>
            <p className="text-xl text-slate-300 mb-8">Converta PDFs digitalizados em texto pesquisavel e copiavel usando OCR. Extraia texto de digitalizacoes, fotos e PDFs baseados em imagem — rapido e no navegador.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Motor OCR Poderoso</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Saida Pesquisavel</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">PDFs digitalizados sao apenas imagens — voce nao pode selecionar, pesquisar ou copiar o texto. A tecnologia OCR do PDF.it le o texto nos seus documentos digitalizados e o converte em texto pesquisavel, copiavel e editavel. Suporte para multiplos idiomas incluido.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converta PDFs digitalizados em texto pesquisavel</li>
              <li className="flex items-center gap-2">✓ OCR le texto de imagens, fotos e digitalizacoes</li>
              <li className="flex items-center gap-2">✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — execute OCR no navegador</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        <OcrPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Digitalizar Documentos em Papel", desc: "Contratos digitalizados, recibos, cartas e formularios estao presos como imagens. O OCR do PDF.it le o texto dessas digitalizacoes e o torna selecionavel e copiavel — transformando papel em dados digitais." },
                { title: "Tornar PDFs Digitalizados Pesquisaveis", desc: "Apos o processamento OCR, seu PDF digitalizado se torna pesquisavel. Use Ctrl+F para encontrar palavras, nomes, datas ou valores especificos em documentos que antes eram apenas imagens estaticas." },
                { title: "Extrair Dados de Documentos Antigos", desc: "Tem anos de faturas, registros ou correspondencias digitalizadas? Execute OCR para extrair o texto e copie-o para planilhas, bancos de dados ou sistemas modernos de gestao documental." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Digitalizar um PDF para Texto</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Envie seu PDF digitalizado", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Selecione o idioma e execute OCR", desc: "Escolha o idioma do documento para melhores resultados" },
                { num: "3", title: "Baixe o PDF pesquisavel", desc: "Receba seu arquivo pesquisavel instantaneamente" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Processamento OCR completo" },
                { name: "PDF para TXT", href: "/br/pdf-para-txt", desc: "Extrair texto de PDFs digitais" },
                { name: "Extrair Texto", href: "/br/extrair-texto-de-pdf", desc: "Copiar texto de qualquer PDF" },
                { name: "Limpar Digitalizacao", href: "/br/limpar-digitalizacao", desc: "Limpar digitalizacoes do celular" },
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
