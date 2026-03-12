import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Unlock, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Desbloquear PDF com Senha Esquecida — O Que Fazer? | OmnisPDF",
  description: "Esqueceu a senha do PDF? Descubra suas opcoes para recuperar acesso a documentos PDF protegidos com senha. Dicas para senha de abertura e senha de permissoes.",
  keywords: "desbloquear pdf senha esquecida, esqueci senha pdf, recuperar senha pdf, pdf senha perdida, abrir pdf sem senha",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "E possivel abrir um PDF se esqueci a senha de abertura?", "acceptedAnswer": { "@type": "Answer", "text": "Se o PDF usa criptografia forte (AES-256), recuperar a senha e praticamente impossivel sem ferramentas especializadas. Tente lembrar variações da senha, verifique emails antigos onde a senha possa ter sido compartilhada, ou procure uma versao nao protegida do documento." } },
  { "@type": "Question", "name": "E se o PDF so tem senha de permissoes (consigo abrir mas nao imprimir)?", "acceptedAnswer": { "@type": "Answer", "text": "Se voce consegue abrir o PDF mas esta bloqueado para imprimir, copiar ou editar, a ferramenta Desbloquear PDF do OmnisPDF pode remover essas restricoes sem precisar da senha de permissoes." } },
  { "@type": "Question", "name": "Existem programas para quebrar senha de PDF?", "acceptedAnswer": { "@type": "Answer", "text": "Existem ferramentas de forca bruta, mas elas so funcionam com senhas curtas e fracas. Senhas fortes com AES-256 levariam milhoes de anos para serem quebradas. Essas ferramentas tambem podem ter riscos de seguranca." } },
  { "@type": "Question", "name": "Como evitar esquecer a senha no futuro?", "acceptedAnswer": { "@type": "Answer", "text": "Use um gerenciador de senhas como 1Password, Bitwarden ou LastPass. Eles armazenam senhas de forma segura e voce so precisa lembrar de uma senha mestra." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "O que fazer quando esquece a senha do PDF", "description": "Passos para tentar recuperar acesso ao seu PDF protegido.", "step": [
  { "@type": "HowToStep", "name": "Tente variacoes da senha", "text": "Tente variacoes comuns: maiusculas/minusculas diferentes, com/sem numeros no final, senhas que voce usa frequentemente." },
  { "@type": "HowToStep", "name": "Verifique comunicacoes anteriores", "text": "Procure em emails, mensagens ou anotacoes onde a senha possa ter sido registrada." },
  { "@type": "HowToStep", "name": "Use o OmnisPDF para restricoes de permissao", "text": "Se o PDF abre mas tem restricoes, use a ferramenta Desbloquear PDF para remover as permissoes." }
] }

export default function DesbloquearPdfSenhaEsquecidaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Desbloquear PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Desbloquear PDF — Senha Esquecida</h1>
          <p className="text-xl text-slate-300">Esqueceu a senha do seu PDF? Nao entre em panico. Descubra suas opcoes dependendo do tipo de protecao e como evitar esse problema no futuro.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Unlock className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">PDF com restricoes de permissao? Tente a ferramenta.</p></div>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Desbloquear PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Primeiro: identifique o tipo de protecao</h2>
            <p className="text-slate-600 mb-4">O que voce pode fazer depende de qual tipo de senha o PDF tem:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">A.</span><span><strong>Senha de abertura (nao consigo abrir o PDF).</strong> Esse e o caso mais dificil. O PDF e criptografado e sem a senha correta, o conteudo e inacessivel.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">B.</span><span><strong>Senha de permissoes (consigo abrir mas nao imprimir/copiar).</strong> Esse caso tem solucao! A ferramenta Desbloquear PDF do OmnisPDF pode remover essas restricoes.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Se voce NAO consegue abrir o PDF (senha de abertura)</h2>
            <p className="text-slate-600 mb-4">Tente estas alternativas antes de desistir:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Tente variacoes da senha.</strong> Maiusculas diferentes, com/sem numeros, espacos antes/depois. Muitas vezes a senha e uma variacao de algo que voce usa.</li>
              <li>&#10003; <strong>Procure em emails.</strong> Se alguem enviou o PDF e a senha, procure no historico de emails, WhatsApp ou mensagens.</li>
              <li>&#10003; <strong>Verifique gerenciadores de senhas.</strong> Se voce usa Chrome, Safari ou um gerenciador, a senha pode estar salva la.</li>
              <li>&#10003; <strong>Peca ao remetente.</strong> Se outra pessoa criou o PDF, peca a senha novamente.</li>
              <li>&#10003; <strong>Procure uma copia nao protegida.</strong> Talvez voce tenha o documento original (DOCX, XLSX, etc.) antes de ter sido convertido e protegido.</li>
            </ul>
            <div className="bg-red-50 border border-red-200 rounded-xl p-4 mt-4">
              <p className="text-red-700 text-sm"><strong>Importante:</strong> Com criptografia AES-256 e uma senha forte, nao existe forma pratica de "quebrar" a senha. Ferramentas de forca bruta so funcionam com senhas muito curtas e fracas, e podem conter malware.</p>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Se voce CONSEGUE abrir mas nao imprimir/copiar (senha de permissoes)</h2>
            <p className="text-slate-600 mb-4">Boa noticia! Esse tipo de restricao pode ser removido facilmente:</p>
            <div className="space-y-4">
              {[
                { title: "Envie o PDF para o OmnisPDF", desc: "Acesse a ferramenta Desbloquear PDF e envie o arquivo. Como o PDF abre sem senha, voce nao precisa digitar nenhuma senha." },
                { title: "Remova as restricoes", desc: "O OmnisPDF detecta as restricoes de permissao e as remove automaticamente." },
                { title: "Baixe o PDF desbloqueado", desc: "Agora voce pode imprimir, copiar texto e fazer tudo que estava bloqueado." },
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                  <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                </div>
              ))}
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como evitar esse problema no futuro</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Use um gerenciador de senhas.</strong> 1Password, Bitwarden ou LastPass armazenam senhas de forma segura.</li>
              <li>&#10003; <strong>Salve senhas de PDFs importantes.</strong> Crie uma nota segura no gerenciador para cada PDF protegido.</li>
              <li>&#10003; <strong>Guarde o arquivo original.</strong> Mantenha o documento nao protegido em um local seguro (pasta criptografada, nuvem com 2FA).</li>
              <li>&#10003; Leia nossas <Link href="/br/aprender/melhores-praticas-senha-pdf" className="text-orange-600 hover:underline">melhores praticas para senhas de PDF</Link>.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">PDF com restricoes? Desbloqueie agora</h2>
          <p className="text-slate-300 mb-6">Remova restricoes de impressao e copia em segundos — gratis, sem cadastro.</p>
          <Link href="/br/desbloquear-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Unlock className="h-5 w-5" /> Desbloquear PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como desbloquear PDF (guia completo)", href: "/br/aprender/como-desbloquear-pdf" },
              { title: "Desbloquear PDF para imprimir", href: "/br/aprender/desbloquear-pdf-para-imprimir" },
              { title: "Desbloquear PDF no celular", href: "/br/aprender/desbloquear-pdf-no-celular" },
              { title: "Como proteger PDF com senha", href: "/br/aprender/como-proteger-pdf-com-senha" },
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
