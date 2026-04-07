import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProtectPdfInterface } from "@/components/protect-pdf-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Criptografar PDF Online — Adicionar Protecao por Senha ao PDF | PDF.it",
  description: "Criptografe um PDF com protecao por senha usando PDF.it. Proteja seus documentos com criptografia antes de compartilhar ou enviar — rapido, gratis e no navegador.",
  alternates: {
    canonical: "/br/criptografar-pdf",
    languages: { en: "/encrypt-pdf", es: "/es/encriptar-pdf", pt: "/br/criptografar-pdf" },
  },
}

export default function CriptografarPdfPage() {
  const faqs = [
    { q: "Qual criptografia o PDF.it usa para proteger PDFs?", a: "O PDF.it usa criptografia AES padrao da industria para proteger seus arquivos PDF. E o mesmo padrao de criptografia usado por bancos e agencias governamentais para proteger dados sensiveis." },
    { q: "Como abro um PDF criptografado?", a: "Qualquer pessoa que receber o PDF criptografado precisara inserir a senha que voce definiu para abri-lo. Leitores de PDF padrao como Adobe Acrobat, Preview e o visualizador integrado do Chrome suportam PDFs protegidos por senha." },
    { q: "Posso remover a criptografia depois?", a: "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a protecao por senha. Voce precisara inserir a senha atual para descriptografar o arquivo." },
    { q: "Criptografar um PDF altera seu conteudo ou qualidade?", a: "Nao. A criptografia adiciona protecao por senha sem alterar o conteudo, layout, imagens ou qualidade do seu PDF. O documento permanece identico — apenas requer uma senha para abrir." },
    { q: "Posso criptografar um PDF no celular?", a: "Sim. O PDF.it funciona em navegadores moveis no iPhone e Android. Envie seu PDF, defina uma senha e baixe o arquivo criptografado — sem app necessario." },
    { q: "E seguro criptografar PDFs com o PDF.it?", a: "Sim. Seus arquivos sao processados com seguranca e excluidos dos nossos servidores apos o fim da sessao. Nunca armazenamos suas senhas ou compartilhamos seus documentos." },
  ]

  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}><filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter><rect width="100%" height="100%" filter="url(#heroGrain)" /></svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10"><div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)" }}><Lock className="h-10 w-10 text-[#14D8C4]" /></div>
            <h1 className="text-4xl lg:text-5xl font-black mb-4">Criptografar PDF com Senha</h1>
            <p className="text-xl text-slate-300 mb-8">Proteja documentos sensiveis com criptografia por senha antes de compartilhar ou enviar. Defina uma senha e somente destinatarios autorizados poderao abrir seu PDF.</p>
            <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Criptografia AES</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
            </div>
          </div></div>
        </section>

        {/* Intro */}
        <section className="py-10 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <p className="text-lg text-slate-600 leading-relaxed">Enviando documentos sensiveis por email ou subindo para plataformas compartilhadas? Criptografe seu PDF com senha primeiro. O PDF.it adiciona criptografia padrao da industria para que apenas pessoas com a senha possam abrir seu arquivo — protegendo contratos, registros financeiros, documentos medicos e mais.</p>
          <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
              <li className="flex items-center gap-2">✓ Adicione criptografia forte por senha a qualquer PDF</li>
              <li className="flex items-center gap-2">✓ Criptografia AES padrao da industria</li>
              <li className="flex items-center gap-2">✓ Conteudo, formatacao e qualidade preservados</li>
              <li className="flex items-center gap-2">✓ Sem instalacao — criptografe no navegador</li>
          </ul>
        </div></section>

        {/* Processing Interface */}
        <ProtectPdfInterface />

        {/* Feature Blocks */}
        <section className="py-16" style={{ background: `radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%), radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%), #0E0F1E` }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[
                { title: "Criptografar PDFs Antes de Enviar por Email", desc: "Email nao e seguro por padrao. Criptografe contratos sensiveis, documentos fiscais ou registros pessoais com senha antes de anexar. Compartilhe a senha separadamente para maxima seguranca." },
                { title: "Proteger Documentos Financeiros", desc: "Demonstracoes financeiras, relatorios de auditoria e memorandos internos contem informacoes sensiveis. Criptografe esses PDFs antes de enviar ao armazenamento em nuvem ou compartilhar com partes interessadas." },
                { title: "Proteger Documentos Juridicos", desc: "Contratos, NDAs e acordos juridicos exigem confidencialidade. A criptografia por senha garante que apenas as partes pretendidas possam acessar o documento, mesmo se o arquivo for interceptado." },
          ].map((feature) => (
            <div key={feature.title} className="rounded-xl p-[1px]" style={{ background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))" }}><div className="rounded-[11px] p-6 h-full" style={{ background: `radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%), radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%), rgba(255, 255, 255, 0.07)`, backdropFilter: "blur(12px)", WebkitBackdropFilter: "blur(12px)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)" }}><h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3><p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p></div></div>
          ))}
        </div></div></section>

        {/* How It Works */}
        <section className="py-16 bg-[#F3F4FF]"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl"><h2 className="text-3xl font-black text-slate-900 mb-8 text-center">Como Criptografar um PDF com Senha</h2><div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
          {[
                { num: "1", title: "Envie seu PDF", desc: "Arraste e solte ou clique para escolher um arquivo" },
                { num: "2", title: "Defina uma senha", desc: "Insira uma senha forte para proteger seu documento" },
                { num: "3", title: "Baixe o PDF criptografado", desc: "Receba seu arquivo protegido por senha instantaneamente" },
          ].map((step) => (
            <div key={step.num} className="flex-1"><div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3" style={{ background: "linear-gradient(135deg, #1a1f5e, #252A6A)", boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)", border: "1px solid rgba(20,216,196,0.25)" }}><span className="text-[#14D8C4] font-black text-lg">{step.num}</span></div><p className="font-semibold text-slate-900">{step.title}</p><p className="text-sm text-slate-500 mt-1">{step.desc}</p></div>
          ))}
        </div></div></section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl"><h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2><div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicionar protecao por senha" },
                { name: "Desbloquear PDF", href: "/br/desbloquear-pdf", desc: "Remover senhas de PDF" },
                { name: "Marca D'agua PDF", href: "/br/marca-dagua-pdf", desc: "Adicionar marcas d'agua" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achatar campos de formulario" },
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
