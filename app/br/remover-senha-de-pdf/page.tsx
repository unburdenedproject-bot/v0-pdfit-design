import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { KeyRound, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Remover Senha de PDF — Tire a Senha do seu PDF | PDF.it",
  description:
    "Remova a senha de arquivos PDF com o PDF.it. Desbloqueie PDFs protegidos por senha — rápido, no navegador, sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br/remover-senha-de-pdf",
    languages: {
      en: "https://pdf.it.com/remove-password-from-pdf",
      es: "https://pdf.it.com/es/eliminar-contrasena-de-pdf",
      pt: "https://pdf.it.com/br/remover-senha-de-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como removo a senha de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF protegido para o PDF.it, insira a senha atual do documento e a ferramenta gerará um novo PDF sem proteção por senha." }
    },
    {
      "@type": "Question",
      "name": "Preciso saber a senha atual para removê-la?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Para remover a senha de abertura de um PDF, você precisa fornecer a senha correta. Não oferecemos remoção de senha sem autorização." }
    },
    {
      "@type": "Question",
      "name": "O conteúdo do PDF é alterado ao remover a senha?",
      "acceptedAnswer": { "@type": "Answer", "text": "Não. O conteúdo do PDF permanece exatamente o mesmo. A única diferença é que o arquivo resultante não exigirá mais uma senha para ser aberto." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar meu PDF protegido?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são protegidas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso remover a senha de um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF, insira a senha e baixe o arquivo desbloqueado de qualquer dispositivo." }
    },
    {
      "@type": "Question",
      "name": "É grátis remover a senha de um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." }
    }
  ]
}

export default function RemoverSenhaDePDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeaderBr />
      <main>
        {/* Hero */}
        <section className="bg-[#191B4D] text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <KeyRound className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Remover Senha de PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Remova a proteção por senha do seu PDF com o PDF.it. Desbloqueie documentos protegidos para acessá-los livremente — rápido, seguro e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Remoção Instantânea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Unlock PDF"
          outputFormat="PDF"
          processingMessage="Removendo a senha do seu PDF..."
          successMessage="A senha foi removida do seu PDF!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Precisa remover a senha de um PDF? A ferramenta do PDF.it permite tirar a proteção por senha de qualquer arquivo PDF em segundos, gerando um documento limpo que pode ser aberto sem senha. Ideal quando você não precisa mais da proteção ou quando quer compartilhar o documento livremente.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Remova a senha de qualquer PDF protegido</li>
              <li>✓ O conteúdo do documento permanece intacto</li>
              <li>✓ Ideal para simplificar o acesso a documentos próprios</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — remova senhas direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Simplifique o Acesso aos Seus PDFs</h2>
              <p className="text-slate-600">
                Se você tem PDFs protegidos por senha que precisa abrir frequentemente, remova a senha para acessá-los rapidamente sem precisar digitar a senha toda vez.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartilhe Documentos Livremente</h2>
              <p className="text-slate-600">
                Remova a senha de PDFs antes de compartilhá-los com equipes, clientes ou parceiros que precisam acessar o conteúdo sem a complicação de gerenciar senhas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Facilite a Impressão e Edição</h2>
              <p className="text-slate-600">
                Alguns PDFs protegidos impedem a impressão ou edição. Remova a senha para poder imprimir, converter ou editar o documento com total liberdade.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Remover a Senha de um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF protegido por senha para o PDF.it.",
                "Insira a senha atual do documento.",
                "Clique em Remover Senha e baixe o PDF desbloqueado.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Proteger PDF", href: "/br/proteger-pdf", desc: "Adicione senha ao seu PDF" },
                { name: "Desbloquear PDF", href: "/br/desbloquear-pdf", desc: "Remova a proteção por senha" },
                { name: "Redação PDF", href: "/br/redacao-pdf", desc: "Oculte informações sensíveis" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Bloqueie formulários e camadas" },
                { name: "Marca d'Água", href: "/br/marca-dagua-pdf", desc: "Adicione marcas d'água ao PDF" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho do arquivo" },
              ].map((tool) => (
                <Link
                  key={tool.href}
                  href={tool.href}
                  className="border border-orange-200 bg-orange-50 rounded-xl p-4 hover:border-orange-400 hover:bg-orange-100 transition-all text-center flex flex-col justify-center min-h-[80px]"
                >
                  <div className="font-bold text-orange-600 text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-500">{tool.desc}</div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como removo a senha de um PDF?", a: "Envie seu PDF protegido para o PDF.it, insira a senha atual do documento e a ferramenta gerará um novo PDF sem proteção por senha." },
                { q: "Preciso saber a senha atual para removê-la?", a: "Sim. Para remover a senha de abertura de um PDF, você precisa fornecer a senha correta. Não oferecemos remoção de senha sem autorização." },
                { q: "O conteúdo do PDF é alterado ao remover a senha?", a: "Não. O conteúdo do PDF permanece exatamente o mesmo. A única diferença é que o arquivo resultante não exigirá mais uma senha para ser aberto." },
                { q: "É seguro enviar meu PDF protegido?", a: "Sim. Todas as transferências são protegidas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos seus documentos." },
                { q: "Posso remover a senha de um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF, insira a senha e baixe o arquivo desbloqueado de qualquer dispositivo." },
                { q: "É grátis remover a senha de um PDF?", a: "Sim. Contas gratuitas têm 10 operações por dia. Contas Pro têm operações ilimitadas." },
              ].map((faq, i) => (
                <div key={i} className="bg-white rounded-xl p-6 border border-gray-200">
                  <h3 className="font-bold text-slate-900 mb-2">{faq.q}</h3>
                  <p className="text-slate-600 text-sm">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <FooterBr />
    </div>
  )
}
