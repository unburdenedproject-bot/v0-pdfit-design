import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileText, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "PDF para DOCX — Converter PDF para Documento Word | PDF.it",
  description: "Converta PDF para DOCX online com o PDF.it. Transforme qualquer PDF em um arquivo Word .docx editavel — preserva formatacao, tabelas e imagens. Rapido, seguro, sem instalacao.",
  alternates: { canonical: "https://pdf.it.com/br/pdf-para-docx", languages: { en: "/pdf-to-docx", es: "/es/pdf-a-docx", pt: "/br/pdf-para-docx" } },
}

export default function PDFParaDocxPage() {
  const faqs = [
    { q: "Qual a diferenca entre DOCX e DOC?", a: "DOCX e o formato Word moderno introduzido com o Microsoft Office 2007. Usa compressao baseada em XML, tornando os arquivos menores e mais compativeis que o formato DOC antigo. O PDF.it converte PDFs para DOCX para maxima compatibilidade com processadores de texto modernos." },
    { q: "Como converto um PDF para DOCX?", a: "Envie seu PDF ao PDF.it, clique em Converter e baixe seu arquivo DOCX editavel. A conversao preserva layout, fontes, tabelas e imagens o mais fielmente possivel." },
    { q: "Posso editar o arquivo DOCX apos a conversao?", a: "Sim. O arquivo DOCX e totalmente editavel no Microsoft Word, Google Docs, LibreOffice Writer, Apple Pages e qualquer outro processador de texto que suporte o formato DOCX." },
    { q: "Tabelas e imagens serao preservadas no DOCX?", a: "O PDF.it preserva tabelas, imagens, cabecalhos, rodapes e formatacao de texto durante a conversao. Layouts complexos com elementos sobrepostos podem exigir pequenos ajustes apos a conversao." },
    { q: "O conversor PDF para DOCX e gratuito?", a: "A conversao de PDF para DOCX esta disponivel para assinantes Pro e Business. Contas gratuitas podem usar ferramentas basicas de PDF, enquanto o Pro desbloqueia conversoes avancadas incluindo PDF para DOCX, XLSX e PPTX." },
    { q: "Posso converter um PDF escaneado para DOCX?", a: "PDFs escaneados contem imagens de texto em vez de texto real. Use a ferramenta Scanner OCR do PDF.it primeiro para extrair o texto, depois converta o resultado para DOCX para edicao." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><FileText className="h-10 w-10 text-[#14D8C4]" /></div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter PDF para DOCX</h1>
              <p className="text-xl text-slate-300 mb-8">Transforme qualquer PDF em um arquivo DOCX editavel — o formato moderno do Microsoft Word. Preserva formatacao, tabelas e imagens.</p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Super Rapido</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Qualidade Perfeita</span></div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
            <p className="text-lg text-slate-600 leading-relaxed">DOCX e o formato moderno de documento Word usado pelo Microsoft Word, Google Docs e LibreOffice. Diferente do formato DOC antigo, arquivos DOCX sao menores, mais seguros e universalmente compativeis. Ao converter um PDF para DOCX com o PDF.it, voce obtem um documento totalmente editavel que abre em qualquer processador de texto moderno — pronto para edicao, comentarios e colaboracao.</p>
            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Converta PDF para formato DOCX editavel online</li>
              <li className="flex items-center gap-2">✓ Preserva layout, fontes, tabelas e imagens</li>
              <li className="flex items-center gap-2">✓ Abre no Word, Google Docs e LibreOffice</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — converta PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        <ProcessingInterface acceptedFiles=".pdf" toolName="PDF to Word" outputFormat="DOCX" processingMessage="Convertendo seu PDF para DOCX..." successMessage="Seu arquivo DOCX esta pronto!" />

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: "Edite Contratos e Propostas", desc: "Converta contratos PDF para DOCX para fazer edicoes, adicionar comentarios, rastrear alteracoes e enviar revisoes limpas — tudo no Microsoft Word ou Google Docs." },
                { title: "Atualize Curriculos e Relatorios", desc: "Precisa atualizar um curriculo ou relatorio mas so tem o PDF? Converta para DOCX e edite instantaneamente sem comecar do zero." },
                { title: "Colabore em Tempo Real", desc: "Converta PDFs para DOCX para habilitar colaboracao em tempo real. Compartilhe via Google Docs ou OneDrive para edicao em equipe com controle de alteracoes." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Converter PDF para DOCX</h2>
            <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
              {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher" },
                { num: "2", title: "Clique em Converter", desc: "Seu PDF e transformado em DOCX editavel" },
                { num: "3", title: "Baixe seu DOCX", desc: "Abra no Word, Google Docs ou qualquer editor" },
              ].map((step) => (
                <div key={step.num} className="flex-1">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div>
                  <p className="font-semibold text-slate-900">{step.title}</p>
                  <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "PDF para Word", href: "/br/pdf-para-word", desc: "Converta PDF para Word DOC" },
                { name: "PDF para Excel", href: "/br/pdf-para-excel", desc: "Extraia tabelas para planilha" },
                { name: "Scanner OCR", href: "/br/scanner-ocr", desc: "Extraia texto de escaneamentos" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do PDF" },
              ].map((tool) => (
                <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}>
                  <Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}>
                    <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                    <div className="text-xs text-slate-400">{tool.desc}</div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%), radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-3xl font-black text-white mb-10 text-center">Perguntas Frequentes</h2>
            <div className="space-y-4">
              {faqs.map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
                  <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
                  <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({ "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": faqs.map(faq => ({ "@type": "Question", "name": faq.q, "acceptedAnswer": { "@type": "Answer", "text": faq.a } })) })}} />
      </main>
      <FooterBr />
    </div>
  )
}
