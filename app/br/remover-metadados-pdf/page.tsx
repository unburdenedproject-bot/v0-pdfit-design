import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { Shield, Zap, Eye, FileCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Metadados de PDF — Eliminar Dados Ocultos de PDFs | PDF.it",
  description: "Remova metadados ocultos de arquivos PDF com PDF.it. Elimine nomes de autores, datas, dados GPS e informacoes de software antes de compartilhar — proteja sua privacidade.",
  alternates: { canonical: "/br/remover-metadados-pdf", languages: { en: "/remove-metadata-pdf", es: "/es/eliminar-metadatos-pdf", pt: "/br/remover-metadados-pdf" } },
}

export default function RemoverMetadadosPdfPage() {
  const faqs = [
    { q: "O que sao metadados de PDF?", a: "Metadados de PDF sao informacoes ocultas incorporadas no arquivo, incluindo nome do autor, datas de criacao e modificacao, software usado para criar o PDF e, as vezes, coordenadas GPS ou nomes de empresas. Esses dados nao sao visiveis nas paginas, mas podem ser vistos nas propriedades do documento." },
    { q: "Por que devo remover metadados de um PDF?", a: "Metadados podem revelar informacoes privadas como seu nome, empresa, software que voce usa ou quando um documento foi criado ou editado. Remove-los protege sua privacidade e evita vazamentos de dados ao compartilhar arquivos publicamente." },
    { q: "Quais metadados os PDFs normalmente contem?", a: "Campos comuns incluem Titulo, Autor, Assunto, Palavras-chave, Criador (aplicativo), Produtor (biblioteca PDF), data de criacao, data de modificacao e, as vezes, propriedades customizadas adicionadas por software corporativo." },
    { q: "A remocao de metadados e reversivel?", a: "Nao. Uma vez que os metadados sao removidos e o arquivo e salvo, os metadados originais nao podem ser recuperados. Sempre mantenha um backup do original caso precise dos metadados depois." },
    { q: "Achatar um PDF remove metadados?", a: "Achatar um PDF remove campos de formulario, anotacoes e camadas, mas pode nao remover todos os campos de metadados. Para remocao completa, use uma ferramenta dedicada de limpeza ou redacao." },
    { q: "Metadados de PDF podem representar um risco de seguranca?", a: "Sim. Metadados podem expor nomes de usuario internos, caminhos de rede, versoes de software e historico de revisoes. Atacantes podem usar essas informacoes para engenharia social ou para identificar vulnerabilidades." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Shield className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Metadados de PDF</h1>
            <p className="text-xl text-slate-300 mb-8">Elimine nomes de autores, datas, dados GPS e informacoes de software ocultos dos seus PDFs antes de compartilhar — proteja sua privacidade.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
              <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Eliminar Dados Ocultos</span></div>
              <div className="flex items-center gap-2"><Eye className="h-4 w-4 text-[#14D8C4]" /><span>Proteja Sua Privacidade</span></div>
              <div className="flex items-center gap-2"><FileCheck className="h-4 w-4 text-[#14D8C4]" /><span>Compartilhe com Seguranca</span></div>
            </div>
          </div></div>
        </section>

        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Todo PDF carrega metadados ocultos — seu nome, o software usado, quando voce criou ou editou o arquivo e, as vezes, ate coordenadas GPS. Antes de compartilhar documentos publicamente ou com clientes, limpar esses metadados protege sua privacidade e previne vazamentos nao intencionais de dados.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
            <li className="flex items-center gap-2">✓ Remova nomes de autores, informacoes da empresa e nomes de usuario</li>
            <li className="flex items-center gap-2">✓ Elimine datas de criacao e modificacao</li>
            <li className="flex items-center gap-2">✓ Delete informacoes de software e versao</li>
            <li className="flex items-center gap-2">✓ Proteja contra engenharia social e vazamentos</li>
          </ul>
        </div></section>

        <section className="py-12 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-md text-center">
          <p className="text-slate-600 mb-6">Use Achatar PDF para remover campos de formulario e anotacoes, ou Redacao de PDF para remocao completa de metadados e conteudo.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/br/achatar-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Achatar PDF (Gratis)</Link>
            <Link href="/br/redacao-de-pdf" className="inline-flex items-center justify-center bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors">Redacao de PDF (Business)</Link>
          </div>
        </div></section>

        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
            { title: "Riscos de Privacidade dos Metadados", desc: "Ao compartilhar um PDF, voce pode estar compartilhando seu nome completo, email, empresa, software e nome de usuario. Isso pode ser usado para engenharia social ou ataques de phishing." },
            { title: "Quais Metadados os PDFs Contem?", desc: "PDFs armazenam Titulo, Autor, Assunto, Palavras-chave, aplicativo Criador, Produtor, data de criacao, data de modificacao e, as vezes, historico de revisoes e campos corporativos personalizados." },
            { title: "Quando Limpar Metadados de PDF", desc: "Remova metadados antes de compartilhar documentos publicamente, enviar arquivos a clientes, publicar PDFs online ou protocolar em tribunais. Tambem e boa pratica para conformidade com a LGPD." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Remover Metadados de um PDF</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
            { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
            { num: "2", title: "Achate ou redacione", desc: "Use Achatar PDF ou Redacao de PDF para eliminar dados" },
            { num: "3", title: "Baixe o PDF limpo", desc: "Receba seu arquivo sem metadados instantaneamente" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Remova camadas e campos" },
            { name: "Redacao de PDF", href: "/br/redacao-de-pdf", desc: "Redacionar conteudo (Business)" },
            { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Proteja PDFs com senha" },
            { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
          ].map((tool) => (
            <div key={tool.href} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><Link href={tool.href} className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div><div className="text-xs text-slate-400">{tool.desc}</div></Link></div>
          ))}
        </div></div></section>

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
