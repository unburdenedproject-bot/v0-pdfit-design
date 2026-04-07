import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir Documentos Online — Combine Arquivos em Um Unico PDF | PDF.it",
  description:
    "Una documentos online com PDF.it. Combine varios arquivos em um unico PDF para compartilhar, imprimir ou arquivar — rapido, gratis e no seu navegador.",
  alternates: {
    languages: {
      en: "/merge-documents-online",
      es: "/es/unir-documentos-en-linea",
      pt: "/br/unir-documentos-online",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como posso unir documentos online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seus documentos PDF para o PDF.it, organize-os na ordem desejada e clique em Unir. Seu documento combinado estara pronto para download em segundos — sem necessidade de software." }
    },
    {
      "@type": "Question",
      "name": "Quais tipos de documentos posso unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "O PDF.it une arquivos PDF diretamente. Se voce tem arquivos Word, Excel ou PowerPoint, use as ferramentas de conversao do PDF.it para converte-los em PDF primeiro e depois una-os em um unico documento." }
    },
    {
      "@type": "Question",
      "name": "E seguro unir documentos online?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos enviados apos sua sessao. Seus documentos nunca sao armazenados permanentemente em nossos servidores." }
    },
    {
      "@type": "Question",
      "name": "Posso unir documentos sem instalar software?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it e 100% baseado em navegador. Sem downloads, sem plugins, sem software de desktop — basta enviar, unir e baixar." }
    },
    {
      "@type": "Question",
      "name": "Existe um limite de tamanho de arquivo para unir documentos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem enviar arquivos de ate 25MB cada. Usuarios Pro tem um limite de 200MB por arquivo para lidar com documentos grandes como apresentacoes, relatorios e manuais." }
    },
    {
      "@type": "Question",
      "name": "Por que devo unir documentos online em vez de usar software de desktop?",
      "acceptedAnswer": { "@type": "Answer", "text": "Unir online e mais rapido, nao requer instalacao e funciona em qualquer dispositivo. Voce pode unir documentos do seu celular, tablet ou qualquer computador com um navegador — sem necessidade de Adobe Acrobat ou software pago." }
    }
  ]
}

export default function UnirDocumentosOnlinePage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
              <div className="w-20 h-20 bg-gradient-to-br from-[#1a1f5e] to-[#252A6A] rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir Documentos Online</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine varios documentos em um unico PDF para compartilhar, imprimir ou arquivar. Sem software para instalar — una documentos diretamente no seu navegador, rapido e gratis.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-[#14D8C4]" /><span>Uniao Instantanea</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-[#14D8C4]" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-[#14D8C4]" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Merge PDF"
          outputFormat="PDF"
          processingMessage="Unindo seus documentos..."
          successMessage="Seu documento combinado esta pronto!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Pare de lidar com varios arquivos separados. O PDF.it permite unir documentos online em um unico PDF — perfeito para combinar relatorios, contratos, apresentacoes e materiais de referencia em um unico arquivo profissional. Sem software de desktop, sem assinaturas, sem complicacoes.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Una qualquer documento PDF em um unico arquivo</li>
              <li>✓ Converta Word, Excel ou PowerPoint para PDF primeiro e depois una-os</li>
              <li>✓ Sem perda de qualidade — formato e layout preservados</li>
              <li>✓ Funciona em qualquer dispositivo com um navegador moderno</li>
              <li>✓ Sem instalacao de software ou conta necessaria</li>
            </ul>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Combine Relatorios de Trabalho em Um Unico Documento</h2>
              <p className="text-slate-600">
                Montando um relatorio trimestral, atualizacao de projeto ou trabalho de pesquisa com varios arquivos? Envie cada secao, organize-as e una-as em um documento limpo pronto para distribuicao.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Una Documentos Legais e Contratos</h2>
              <p className="text-slate-600">
                Combine acordos assinados, aditivos, anexos e documentos de apoio em um unico PDF para registros legais. Um unico arquivo significa menos confusao e arquivamento mais facil.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Crie Pacotes de Candidatura e Portfolios</h2>
              <p className="text-slate-600">
                Enviando varios arquivos para um cliente ou colega? Una tudo em um unico PDF — mais facil de compartilhar por email, enviar para portais ou imprimir como um unico pacote.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Unir Documentos Online</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seus documentos PDF para o PDF.it.",
                "Organize os documentos na sequencia desejada.",
                "Clique em Unir e baixe seu documento PDF combinado.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-white rounded-xl p-5 border border-gray-200">
                  <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                    {i + 1}
                  </div>
                  <p className="text-slate-700 pt-1">{step}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Tools */}
        <section className="py-16" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
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
                  className="rounded-xl p-4 transition-all text-center flex flex-col justify-center min-h-[80px] hover:-translate-y-1" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(20,216,196,0.25)", boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.2)" }}
                >
                  <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
                  <div className="text-xs text-slate-400">{tool.desc}</div>
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
                { q: "Como posso unir documentos online?", a: "Envie seus documentos PDF para o PDF.it, organize-os na ordem desejada e clique em Unir. Seu documento combinado estara pronto para download em segundos — sem necessidade de software." },
                { q: "Quais tipos de documentos posso unir?", a: "O PDF.it une arquivos PDF diretamente. Se voce tem arquivos Word, Excel ou PowerPoint, use as ferramentas de conversao do PDF.it para converte-los em PDF primeiro e depois una-os em um unico documento." },
                { q: "E seguro unir documentos online?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos enviados apos sua sessao. Seus documentos nunca sao armazenados permanentemente em nossos servidores." },
                { q: "Posso unir documentos sem instalar software?", a: "Sim. O PDF.it e 100% baseado em navegador. Sem downloads, sem plugins, sem software de desktop — basta enviar, unir e baixar." },
                { q: "Existe um limite de tamanho de arquivo para unir documentos?", a: "Usuarios gratuitos podem enviar arquivos de ate 25MB cada. Usuarios Pro tem um limite de 200MB por arquivo para lidar com documentos grandes como apresentacoes, relatorios e manuais." },
                { q: "Por que devo unir documentos online em vez de usar software de desktop?", a: "Unir online e mais rapido, nao requer instalacao e funciona em qualquer dispositivo. Voce pode unir documentos do seu celular, tablet ou qualquer computador com um navegador — sem necessidade de Adobe Acrobat ou software pago." },
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
