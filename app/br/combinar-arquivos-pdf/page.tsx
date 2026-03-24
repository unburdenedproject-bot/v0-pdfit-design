import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Combinar Arquivos PDF — Junte PDFs em Um Unico Documento | PDF.it",
  description:
    "Combine arquivos PDF em um unico documento com PDF.it. Junte relatorios, contratos e apresentacoes — rapido, gratis e sem instalar software.",
  alternates: {
    languages: {
      en: "/combine-pdf-files",
      es: "/es/combinar-archivos-pdf",
      pt: "/br/combinar-arquivos-pdf",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como combinar arquivos PDF online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seus arquivos PDF para o PDF.it, organize-os na ordem desejada e clique em Combinar. Seu PDF combinado estara pronto para download em segundos." }
    },
    {
      "@type": "Question",
      "name": "Combinar PDFs afeta o formato dos documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. O PDF.it preserva texto, imagens, fontes e layout de cada arquivo original ao combina-los em um unico PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso combinar PDFs de tamanhos diferentes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode combinar PDFs com tamanhos de pagina diferentes (A4, carta, etc.) em um unico arquivo. Cada pagina mantem suas dimensoes originais." }
    },
    {
      "@type": "Question",
      "name": "Preciso de conta para combinar arquivos PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. Voce pode combinar PDFs sem criar conta. Basta enviar, combinar e baixar. Uma conta gratuita desbloqueia mais conversoes por dia." }
    },
    {
      "@type": "Question",
      "name": "Existe limite de quantos arquivos posso combinar?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem combinar varios PDFs de ate 25MB cada. Usuarios Pro tem limite de 200MB por arquivo e processamento em lote." }
    },
    {
      "@type": "Question",
      "name": "Posso combinar arquivos PDF no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel — combine PDFs diretamente do seu iPhone ou Android sem instalar apps." }
    }
  ]
}

export default function CombinarArquivosPdfPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Combinar Arquivos PDF</h1>
              <p className="text-xl text-slate-300 mb-8">
                Junte varios arquivos PDF em um unico documento. Perfeito para reunir relatorios, contratos, apresentacoes e qualquer documento PDF — tudo online e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Combinacao Rapida</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Combinando seus arquivos PDF..."
          successMessage="Seus arquivos PDF foram combinados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Chega de enviar varios anexos separados. O PDF.it permite combinar todos os seus arquivos PDF em um unico documento profissional — ideal para trabalho, estudos ou uso pessoal. Sem software para baixar, sem custos escondidos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Combine qualquer numero de arquivos PDF</li>
              <li>✓ Organize a ordem antes de combinar</li>
              <li>✓ Formato e qualidade 100% preservados</li>
              <li>✓ Funciona em desktop, tablet e celular</li>
              <li>✓ Sem registro obrigatorio</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Documentos para Email</h2>
              <p className="text-slate-600">
                Em vez de enviar 5 anexos separados, combine tudo em um unico PDF. Seu destinatario recebe um arquivo limpo e organizado — muito mais profissional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prepare Documentacao Completa</h2>
              <p className="text-slate-600">
                Junte formularios preenchidos, comprovantes, declaracoes e documentos de apoio em um unico pacote PDF para envio a orgaos publicos ou empresas.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Organize Materiais de Estudo</h2>
              <p className="text-slate-600">
                Combine apostilas, artigos, anotacoes e slides em um unico PDF para ter todo o material de estudo em um so lugar.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Combinar Arquivos PDF</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seus arquivos PDF para o PDF.it.",
                "Organize os arquivos na ordem que preferir.",
                "Clique em Combinar e baixe seu PDF unificado.",
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
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Separe paginas" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Achatar PDF", href: "/br/achatar-pdf", desc: "Achate campos" },
                { name: "PDF para JPG", href: "/br/pdf-para-jpg", desc: "Converta em imagens" },
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
                { q: "Como combinar arquivos PDF online?", a: "Envie seus arquivos PDF para o PDF.it, organize-os na ordem desejada e clique em Combinar. Seu PDF combinado estara pronto para download em segundos." },
                { q: "Combinar PDFs afeta o formato dos documentos?", a: "Nao. O PDF.it preserva texto, imagens, fontes e layout de cada arquivo original ao combina-los em um unico PDF." },
                { q: "Posso combinar PDFs de tamanhos diferentes?", a: "Sim. Voce pode combinar PDFs com tamanhos de pagina diferentes (A4, carta, etc.) em um unico arquivo. Cada pagina mantem suas dimensoes originais." },
                { q: "Preciso de conta para combinar arquivos PDF?", a: "Nao. Voce pode combinar PDFs sem criar conta. Basta enviar, combinar e baixar. Uma conta gratuita desbloqueia mais conversoes por dia." },
                { q: "Existe limite de quantos arquivos posso combinar?", a: "Usuarios gratuitos podem combinar varios PDFs de ate 25MB cada. Usuarios Pro tem limite de 200MB por arquivo e processamento em lote." },
                { q: "Posso combinar arquivos PDF no celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel — combine PDFs diretamente do seu iPhone ou Android sem instalar apps." },
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
