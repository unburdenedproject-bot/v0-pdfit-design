import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Lock, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Criptografar PDF — Proteja seu PDF com Senha | PDF.it",
  description:
    "Criptografe seu PDF com senha usando o PDF.it. Proteja documentos confidenciais com criptografia segura online — rápido, sem cadastro e direto do navegador.",
  alternates: {
    canonical: "https://pdf.it.com/br/criptografar-pdf",
    languages: {
      en: "https://pdf.it.com/encrypt-pdf",
      es: "https://pdf.it.com/es/encriptar-pdf",
      pt: "https://pdf.it.com/br/criptografar-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "O que significa criptografar um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Criptografar um PDF significa aplicar um algoritmo de cifragem que protege o conteúdo do arquivo com uma senha. Somente as pessoas que conhecerem a senha poderão abrir e visualizar o documento." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de senha existem para um PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Existem dois tipos: a senha de abertura (impede abrir o PDF sem ela) e a senha de permissões (restringe ações como imprimir, copiar ou editar). O PDF.it aplica uma senha de abertura para máxima proteção." }
    },
    {
      "@type": "Question",
      "name": "Qual é o nível de segurança da criptografia?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it utiliza criptografia padrão da indústria para proteger seus PDFs. O arquivo resultante requer a senha correta para ser aberto em qualquer leitor de PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso descriptografar o PDF depois?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a senha de qualquer PDF criptografado, desde que você conheça a senha original." }
    },
    {
      "@type": "Question",
      "name": "É seguro enviar documentos confidenciais para criptografá-los?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos nem compartilhamos seus documentos." }
    },
    {
      "@type": "Question",
      "name": "Posso criptografar um PDF pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF, defina uma senha e baixe o arquivo criptografado de qualquer dispositivo." }
    }
  ]
}

export default function CriptografarPDFPage() {
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
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Criptografar PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Proteja seu PDF com senha e criptografia usando o PDF.it. Cifre documentos confidenciais antes de enviá-los, armazená-los ou compartilhá-los — rápido, seguro e direto do navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Criptografia Segura</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Eliminados Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Protect PDF"
          outputFormat="PDF"
          processingMessage="Criptografando seu PDF..."
          successMessage="Seu PDF criptografado está pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Use a ferramenta Criptografar PDF do PDF.it para cifrar e proteger com senha qualquer arquivo PDF em segundos. Ideal para proteger documentos confidenciais, informações financeiras, contratos legais e dados pessoais antes de enviá-los por e-mail ou armazená-los na nuvem.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Criptografe arquivos PDF com senha online</li>
              <li>✓ Proteja documentos confidenciais antes de compartilhá-los</li>
              <li>✓ Ideal para contratos, extratos, faturas e dados pessoais</li>
              <li>✓ Funciona no Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — criptografe PDFs direto do navegador</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Cifre Documentos Confidenciais</h2>
              <p className="text-slate-600">
                A criptografia de PDF adiciona uma camada de proteção com senha que impede que pessoas não autorizadas acessem o conteúdo do seu documento. Somente quem tiver a senha correta poderá abri-lo.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Proteja Informações Financeiras e Contratos</h2>
              <p className="text-slate-600">
                Antes de enviar extratos bancários, faturas, contratos ou propostas comerciais por e-mail, criptografe com uma senha. Envie a senha por um canal separado para maior segurança.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Resguarde Dados Pessoais e Sensíveis</h2>
              <p className="text-slate-600">
                Documentos com informações pessoais como identidades, prontuários médicos, declarações de imposto de renda ou dados de funcionários devem ser criptografados antes de serem armazenados ou compartilhados digitalmente.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Criptografar um PDF</h2>
            <div className="space-y-4">
              {[
                "Envie seu PDF para o PDF.it.",
                "Digite uma senha segura e confirme.",
                "Clique em Criptografar PDF e baixe seu arquivo protegido.",
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
                { q: "O que significa criptografar um PDF?", a: "Criptografar um PDF significa aplicar um algoritmo de cifragem que protege o conteúdo do arquivo com uma senha. Somente as pessoas que conhecerem a senha poderão abrir e visualizar o documento." },
                { q: "Quais tipos de senha existem para um PDF?", a: "Existem dois tipos: a senha de abertura (impede abrir o PDF sem ela) e a senha de permissões (restringe ações como imprimir, copiar ou editar). O PDF.it aplica uma senha de abertura para máxima proteção." },
                { q: "Qual é o nível de segurança da criptografia?", a: "O PDF.it utiliza criptografia padrão da indústria para proteger seus PDFs. O arquivo resultante requer a senha correta para ser aberto em qualquer leitor de PDF." },
                { q: "Posso descriptografar o PDF depois?", a: "Sim. Use a ferramenta Desbloquear PDF do PDF.it para remover a senha de qualquer PDF criptografado, desde que você conheça a senha original." },
                { q: "É seguro enviar documentos confidenciais para criptografá-los?", a: "Sim. Todas as transferências são criptografadas com SSL e seus arquivos são eliminados imediatamente após a sessão. Nunca armazenamos nem compartilhamos seus documentos." },
                { q: "Posso criptografar um PDF pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — envie seu PDF, defina uma senha e baixe o arquivo criptografado de qualquer dispositivo." },
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
