import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Key, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Melhores Praticas para Senha de PDF — Guia de Seguranca | PDF.it",
  description: "Aprenda a criar senhas fortes para proteger seus PDFs. Dicas de seguranca, erros comuns e como compartilhar senhas de forma segura.",
  keywords: "melhores praticas senha pdf, senha forte pdf, seguranca pdf, como criar senha pdf, dicas senha documento",
}

const faqSchema = { "@context": "https://schema.org", "@type": "FAQPage", "mainEntity": [
  { "@type": "Question", "name": "O que faz uma senha de PDF ser forte?", "acceptedAnswer": { "@type": "Answer", "text": "Uma senha forte tem pelo menos 12 caracteres e combina letras maiusculas, minusculas, numeros e simbolos. Evite palavras do dicionario, datas de nascimento e sequencias obvias como '123456'." } },
  { "@type": "Question", "name": "Devo usar a mesma senha para todos os PDFs?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca. Use uma senha unica para cada documento. Se uma senha for comprometida, apenas aquele documento estara em risco, nao todos os seus PDFs protegidos." } },
  { "@type": "Question", "name": "Como compartilho a senha de forma segura?", "acceptedAnswer": { "@type": "Answer", "text": "Nunca envie a senha no mesmo canal do PDF. Se enviar o PDF por email, mande a senha por SMS, WhatsApp ou ligacao. Idealmente, use um gerenciador de senhas compartilhado." } },
  { "@type": "Question", "name": "A criptografia AES-256 e realmente segura?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. AES-256 e o padrao de criptografia usado por governos, bancos e forcas armadas em todo o mundo. Com uma senha forte, e considerado inquebravel com a tecnologia atual." } }
] }

const howToSchema = { "@context": "https://schema.org", "@type": "HowTo", "name": "Como criar senhas fortes para PDF", "description": "Crie senhas seguras para proteger seus documentos PDF.", "step": [
  { "@type": "HowToStep", "name": "Use pelo menos 12 caracteres", "text": "Quanto mais longa a senha, mais segura. 12 caracteres e o minimo recomendado." },
  { "@type": "HowToStep", "name": "Combine diferentes tipos de caracteres", "text": "Use letras maiusculas, minusculas, numeros e simbolos especiais." },
  { "@type": "HowToStep", "name": "Evite informacoes pessoais", "text": "Nao use nomes, datas de nascimento ou palavras comuns." }
] }

export default function MelhoresPraticasSenhaPdfPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8"><div className="max-w-3xl mx-auto">
          <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Proteger PDF</p>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">Melhores Praticas para Senha de PDF</h1>
          <p className="text-xl text-slate-300">Proteger um PDF com senha so e eficaz se a senha for forte. Aprenda a criar senhas seguras, evitar erros comuns e compartilhar senhas de forma protegida.</p>
        </div></div></section>

        <section className="py-8 bg-orange-50 border-b border-orange-100"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3"><div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><Key className="h-5 w-5 text-white" /></div><p className="text-slate-700 font-semibold">Pronto para proteger seu PDF? Va direto para a ferramenta.</p></div>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Proteger PDF <ArrowRight className="h-4 w-4" /></Link>
        </div></section>

        <article className="py-16"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">O que faz uma senha ser forte?</h2>
            <p className="text-slate-600 mb-4">Uma senha forte e a diferenca entre protecao real e uma falsa sensacao de seguranca. Aqui estao os criterios essenciais:</p>
            <ul className="space-y-3 text-slate-700">
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">1.</span><span><strong>Comprimento minimo de 12 caracteres.</strong> Cada caractere adicional multiplica exponencialmente o tempo necessario para quebrar a senha.</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">2.</span><span><strong>Mistura de tipos de caracteres.</strong> Combine letras maiusculas (A-Z), minusculas (a-z), numeros (0-9) e simbolos (!@#$%&*).</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">3.</span><span><strong>Sem palavras do dicionario.</strong> Ferramentas de quebra de senha testam palavras comuns primeiro. "Cachorro123" e muito mais fraca que "kX9#mP2&qL5!".</span></li>
              <li className="flex items-start gap-3"><span className="text-orange-500 font-bold mt-0.5">4.</span><span><strong>Sem informacoes pessoais.</strong> Evite nomes, datas de nascimento, telefones ou qualquer informacao que possa ser adivinhada.</span></li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Senhas fracas vs. fortes</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                <thead><tr className="bg-slate-900 text-white">
                  <th className="text-left py-3 px-4 font-bold">Senha fraca</th>
                  <th className="text-left py-3 px-4 font-bold">Por que e fraca</th>
                  <th className="text-left py-3 px-4 font-bold">Alternativa forte</th>
                </tr></thead>
                <tbody className="text-slate-700">
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-red-600">123456</td><td className="py-3 px-4">Sequencia obvia, muito curta</td><td className="py-3 px-4 text-green-600 font-semibold">kX9#mP2&qL5!</td></tr>
                  <tr className="border-t border-gray-200 bg-gray-50"><td className="py-3 px-4 font-semibold text-red-600">senha123</td><td className="py-3 px-4">Palavra do dicionario + sequencia</td><td className="py-3 px-4 text-green-600 font-semibold">Tr0v@o-Neb!na-42</td></tr>
                  <tr className="border-t border-gray-200"><td className="py-3 px-4 font-semibold text-red-600">maria1990</td><td className="py-3 px-4">Nome + ano de nascimento</td><td className="py-3 px-4 text-green-600 font-semibold">9Qw$Lp#mNz&4Xj</td></tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Como compartilhar senhas de forma segura</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <strong>Nunca no mesmo canal.</strong> Se enviar o PDF por email, mande a senha por SMS, WhatsApp ou ligacao.</li>
              <li>&#10003; <strong>Use gerenciadores de senhas.</strong> Ferramentas como 1Password, Bitwarden ou LastPass permitem compartilhar senhas de forma segura.</li>
              <li>&#10003; <strong>Defina prazo de validade.</strong> Se possivel, mude a senha ou remova o acesso apos o destinatario abrir o documento.</li>
              <li>&#10003; <strong>Nao anote em papel.</strong> Evite post-its e cadernos. Use um gerenciador de senhas digital.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Erros comuns ao proteger PDF</h2>
            <ul className="space-y-2 text-slate-700">
              <li>&#10007; <strong>Usar a mesma senha para tudo.</strong> Se uma senha vazar, todos os documentos ficam vulneraveis.</li>
              <li>&#10007; <strong>Enviar senha e PDF juntos.</strong> Isso anula completamente a protecao.</li>
              <li>&#10007; <strong>Usar apenas senha de permissoes.</strong> A senha de permissoes pode ser removida com ferramentas gratuitas. Use sempre senha de abertura para documentos confidenciais.</li>
              <li>&#10007; <strong>Esquecer a senha.</strong> Anote em um gerenciador de senhas. Se perder, veja nosso guia de <Link href="/br/aprender/desbloquear-pdf-senha-esquecida" className="text-orange-600 hover:underline">desbloquear PDF com senha esquecida</Link>.</li>
            </ul>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-black text-slate-900 mb-4">Protecao adicional</h2>
            <p className="text-slate-600 mb-4">Alem de senha, considere estas camadas extras de protecao:</p>
            <ul className="space-y-2 text-slate-700">
              <li>&#10003; <Link href="/br/aprender/como-adicionar-marca-dagua-em-pdf" className="text-orange-600 hover:underline">Marca d agua</Link> — identifica o documento e desencoraja vazamentos.</li>
              <li>&#10003; <strong>Senha de permissoes</strong> — bloqueia impressao e copia de texto alem da senha de abertura.</li>
              <li>&#10003; <strong>Enviar por canais seguros</strong> — use servicos de email criptografados quando possivel.</li>
            </ul>
          </section>
        </div></article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
          <h2 className="text-2xl font-black text-white mb-3">Proteja seu PDF com uma senha forte</h2>
          <p className="text-slate-300 mb-6">Criptografia AES-256, gratis, sem cadastro. Proteja em segundos.</p>
          <Link href="/br/proteger-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><Key className="h-5 w-5" /> Proteger PDF Agora</Link>
        </div></section>

        <section className="py-16 bg-gray-50"><div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos relacionados</h2>
          <div className="grid gap-3">
            {[
              { title: "Como proteger PDF com senha (guia completo)", href: "/br/aprender/como-proteger-pdf-com-senha" },
              { title: "Proteger PDF antes de enviar por email", href: "/br/aprender/proteger-pdf-antes-de-enviar" },
              { title: "Proteger PDF no celular", href: "/br/aprender/proteger-pdf-no-celular" },
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
