import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Lock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Como Proteger PDF com Senha — Guia Completo | OmnisPDF",
  description: "Aprenda a proteger seus arquivos PDF com senha em segundos. Guia passo a passo para adicionar senha de abertura e senha de permissoes ao seu PDF.",
  keywords: "proteger pdf com senha, senha pdf, criptografar pdf, pdf com senha, proteger documento pdf",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "Como coloco senha em um PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para a ferramenta Proteger PDF do OmnisPDF, defina uma senha e clique em Proteger. O PDF sera criptografado e so podera ser aberto com a senha que voce definiu." } },
  { "@type": "Question", "name": "Qual a diferenca entre senha de abertura e senha de permissoes?", "acceptedAnswer": { "@type": "Answer", "text": "A senha de abertura impede que o PDF seja aberto sem a senha. A senha de permissoes permite abrir o PDF mas restringe acoes como imprimir, copiar texto ou editar. Voce pode usar uma ou ambas." } },
  { "@type": "Question", "name": "A protecao com senha e segura?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF usa criptografia AES-256, o mesmo padrao usado por bancos e governos. Uma senha forte (12+ caracteres, letras, numeros e simbolos) torna o PDF praticamente impossivel de quebrar." } },
  { "@type": "Question", "name": "Posso remover a senha depois?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. Se voce sabe a senha, pode usar a ferramenta Desbloquear PDF do OmnisPDF para remover a protecao. Veja nosso guia de como desbloquear PDF." } },
  { "@type": "Question", "name": "Proteger PDF e gratis?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. A protecao basica com senha e gratuita no OmnisPDF para seus primeiros arquivos. Usuarios Pro tem acesso ilimitado e processamento em lote." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como proteger PDF com senha", "description": "Adicione senha ao seu PDF em 3 passos simples.", "step": [
  { "@type": "HowToStep", "name": "Envie seu PDF", "text": "Acesse a ferramenta Proteger PDF do OmnisPDF e envie o arquivo que deseja proteger." },
  { "@type": "HowToStep", "name": "Defina a senha", "text": "Digite a senha desejada. Use uma senha forte com pelo menos 12 caracteres, combinando letras, numeros e simbolos." },
  { "@type": "HowToStep", "name": "Baixe o PDF protegido", "text": "Clique em Proteger e baixe o PDF criptografado. Agora so quem tem a senha pode abrir o arquivo." }
] }

export default function ComoProtegerPdfComSenhaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Como Proteger PDF com Senha</h1>
          <p className="text-xl text-slate-300">Precisa enviar um documento confidencial? Aprenda a proteger seu PDF com senha em segundos — criptografia de nivel bancario, gratis, sem instalar nada.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Lock className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para proteger? Pule o guia e va direto para a ferramenta.</p></div>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Por que proteger PDF com senha?</h2>
            <p className="text-slate-600 mb-4">Documentos PDF frequentemente contem informacoes sensiveis. Proteger com senha e essencial quando:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Dados financeiros.</strong> Relatorios, faturas e extratos bancarios devem ser protegidos antes de enviar por email.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Documentos juridicos.</strong> Contratos, procuracoes e documentos pessoais precisam de protecao contra acesso nao autorizado.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Dados pessoais.</strong> Curriculos, exames medicos e documentos de identidade devem ser protegidos ao compartilhar.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Propriedade intelectual.</strong> Propostas comerciais, projetos e relatorios de pesquisa merecem protecao.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Como proteger seu PDF (passo a passo)</h2>
            <div className="space-y-4">
              {[
                { title: "Envie seu PDF", desc: "Acesse a ferramenta Proteger PDF e arraste seu arquivo para a area de upload, ou clique para selecionar. Arquivos ate 25MB sao gratis." },
                { title: "Defina uma senha forte", desc: "Digite sua senha. Use pelo menos 12 caracteres, combinando letras maiusculas e minusculas, numeros e simbolos. Veja nossas dicas de melhores praticas para senhas de PDF." },
                { title: "Baixe o PDF protegido", desc: "Clique em Proteger. O OmnisPDF criptografa seu PDF com AES-256 e voce pode baixar o arquivo protegido. Compartilhe a senha separadamente (nunca no mesmo email do PDF)." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Tipos de protecao PDF</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Tipo</th>
                  <th className="text-left py-3 px-4 font-bold">O que faz</th>
                  <th className="text-left py-3 px-4 font-bold">Quando usar</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Senha de abertura</td><td className="py-3 px-4">Impede abrir o PDF sem senha</td><td className="py-3 px-4">Documentos confidenciais</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold">Senha de permissoes</td><td className="py-3 px-4">Permite abrir mas restringe acoes (imprimir, copiar, editar)</td><td className="py-3 px-4">Documentos que podem ser lidos mas nao copiados</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold">Ambas</td><td className="py-3 px-4">Exige senha para abrir E restringe permissoes</td><td className="py-3 px-4">Maxima seguranca</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas de seguranca</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Nunca envie a senha junto com o PDF</strong> — use um canal diferente (SMS, WhatsApp, telefone).</li>
              <li>&#10003; <strong>Use senhas unicas</strong> para cada documento. Nunca reutilize senhas.</li>
              <li>&#10003; <strong>Considere adicionar uma marca d agua</strong> alem da senha. Veja como <Link href="/br/aprender/como-adicionar-marca-dagua-em-pdf" className="text-orange-600 hover:underline">adicionar marca d agua ao PDF</Link>.</li>
              <li>&#10003; Leia nossas <Link href="/br/aprender/melhores-praticas-senha-pdf" className="text-orange-600 hover:underline">melhores praticas para senhas de PDF</Link>.</li>
              <li>&#10003; Se precisar <Link href="/br/aprender/como-desbloquear-pdf" className="text-orange-600 hover:underline">desbloquear um PDF</Link> depois, o OmnisPDF tambem tem essa ferramenta.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Proteja seu PDF agora</h2>
          <p className="text-slate-300 mb-6">Adicione senha ao seu PDF em segundos — criptografia AES-256, gratis, sem cadastro.</p>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Lock className="h-5 w-5" /> Proteger PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Proteger PDF antes de enviar por email", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Proteger PDF no celular (Android e iPhone)", href: "/br/aprender/proteger-pdf-no-celular" },
              { title: "Melhores praticas para senhas de PDF", href: "/br/aprender/melhores-praticas-senha-pdf" },
              { title: "Como desbloquear PDF", href: "/br/aprender/como-desbloquear-pdf" },
            ].map((a) => (<Link key={a.href} href={a.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"><span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{a.title}</span><ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" /></Link>))}
          </div>
        </div></section>

        <section className="py-16 bg-white"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas frequentes</h2>
          <div className="space-y-6">
            {(faqSchema.mainEntity as Array<{name: string; acceptedAnswer: {text: string}}>).map((faq, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200"><h3 className="font-bold text-slate-900 mb-2">{faq.name}</h3><p className="text-slate-600 text-sm">{faq.acceptedAnswer.text}</p></div>
            ))}
          </div>
        </div></section>
      </main>
      <FooterBr />
    </div>
  )
}
