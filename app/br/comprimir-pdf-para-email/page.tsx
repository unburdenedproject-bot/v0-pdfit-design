import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { FileArchiveIcon as Compress, Zap, Shield, Mail } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Comprimir PDF para E-mail — Reduzir PDF para Anexar | PDF.it",
  description:
    "Comprima arquivos PDF para anexos de e-mail com o PDF.it. Reduza PDFs para cumprir os limites do Gmail, Outlook e Yahoo — rápido, pelo navegador, sem cadastro.",
  alternates: {
    languages: {
      en: "/compress-pdf-for-email",
      es: "/es/comprimir-pdf-para-email",
      pt: "/br/comprimir-pdf-para-email",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como comprimo um PDF para e-mail?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF ao PDF.it, clique em Comprimir e baixe um arquivo menor pronto para anexar ao seu e-mail." }
    },
    {
      "@type": "Question",
      "name": "Qual é o tamanho máximo de anexo em e-mail?",
      "acceptedAnswer": { "@type": "Answer", "text": "Gmail permite 25MB, Outlook permite 20MB e Yahoo Mail permite 25MB. O PDF.it comprime seu PDF para caber dentro desses limites." }
    },
    {
      "@type": "Question",
      "name": "O PDF vai ficar bom após a compressão?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa compressão inteligente que mantém o texto nítido e as páginas legíveis. A qualidade da imagem pode reduzir levemente, mas o documento continua profissional." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir vários PDFs para e-mail?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Envie vários PDFs e o PDF.it comprimirá cada um individualmente. Você também pode uni-los primeiro com a ferramenta Unir PDF." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF para e-mail pelo celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em navegadores móveis — comprima e envie PDFs por e-mail diretamente do seu iPhone ou Android." }
    },
    {
      "@type": "Question",
      "name": "O que faço se meu PDF continuar muito grande para e-mail?",
      "acceptedAnswer": { "@type": "Answer", "text": "Tente usar a ferramenta Dividir PDF do PDF.it para separar o documento em partes menores, depois comprima e envie cada parte separadamente." }
    }
  ]
}

export default function ComprimirPDFParaEmailPage() {
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
              <div className="w-20 h-20 bg-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                <Mail className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para E-mail</h1>
              <p className="text-xl text-slate-300 mb-8">
                Reduza seu PDF para caber como anexo de e-mail. Funciona com Gmail, Outlook, Yahoo Mail e qualquer provedor de e-mail — compressão instantânea no navegador.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Compressão Inteligente</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Removidos Após a Sessão</span></div>
                <div className="flex items-center gap-2"><Mail className="h-4 w-4 text-orange-500" /><span>Tamanho Pronto para E-mail</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Compress PDF"
          outputFormat="PDF"
          processingMessage="Compressing your PDF for email..."
          successMessage="Your email-ready PDF is ready!"
          compressionLevel="recommended"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Anexos de e-mail têm limites de tamanho — Gmail tem limite de 25MB, Outlook de 20MB. O PDF.it comprime seu PDF para caber como anexo de e-mail sem perder legibilidade. Envie, comprima, baixe e anexe em segundos.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Comprima PDFs para cumprir os limites do Gmail, Outlook e Yahoo</li>
              <li>✓ Compressão inteligente que mantém documentos profissionais</li>
              <li>✓ Ideal para contratos, faturas, relatórios e formulários</li>
              <li>✓ Funciona em Mac, Windows, iOS, Android e Linux</li>
              <li>✓ Sem instalação — comprima PDFs no seu navegador</li>
            </ul>
          </div>
        </section>

        {/* Email Limits */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Limites de Tamanho de Anexo por E-mail</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {[
                { provider: "Gmail", limit: "25MB", color: "bg-red-50 border-red-200" },
                { provider: "Outlook", limit: "20MB", color: "bg-blue-50 border-blue-200" },
                { provider: "Yahoo Mail", limit: "25MB", color: "bg-purple-50 border-purple-200" },
              ].map((item) => (
                <div key={item.provider} className={`${item.color} border rounded-xl p-6 text-center`}>
                  <div className="text-lg font-bold text-slate-900">{item.provider}</div>
                  <div className="text-3xl font-black text-orange-600 mt-2">{item.limit}</div>
                  <div className="text-sm text-slate-500 mt-1">anexo máximo</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Feature Sections */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Envie Contratos e Faturas Sem Rejeição</h2>
              <p className="text-slate-600">
                Contratos e faturas grandes com assinaturas frequentemente ultrapassam os limites de e-mail. O PDF.it os comprime para um tamanho enviável mantendo cada página nítida e profissional.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Comprima Relatórios e Apresentações</h2>
              <p className="text-slate-600">
                Relatórios com gráficos, imagens e tabelas podem ser enormes. O PDF.it reduz o tamanho do arquivo para que você possa enviá-los por e-mail diretamente em vez de usar links de arquivos compartilhados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Funciona de Qualquer Dispositivo</h2>
              <p className="text-slate-600">
                Precisa enviar um PDF comprimido pelo celular? O PDF.it funciona em navegadores móveis — comprima e envie por e-mail em qualquer lugar.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Comprimir um PDF para E-mail</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o PDF.it.",
                "Clique em Comprimir PDF — a compressão inteligente é aplicada automaticamente.",
                "Baixe o PDF menor e anexe ao seu e-mail.",
              ].map((step, i) => (
                <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
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
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <h2 className="text-2xl font-black text-white mb-6 text-center">Ferramentas Relacionadas</h2>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { name: "Comprimir a 5MB", href: "/compress-pdf-to-5mb", desc: "Cumpra limites de 5MB" },
                { name: "Comprimir a 2MB", href: "/compress-pdf-to-2mb", desc: "Tamanhos restritos" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine antes de enviar" },
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Divida se continuar grande" },
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
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como comprimo um PDF para e-mail?", a: "Envie seu PDF ao PDF.it, clique em Comprimir e baixe um arquivo menor pronto para anexar ao seu e-mail." },
                { q: "Qual é o tamanho máximo de anexo em e-mail?", a: "Gmail permite 25MB, Outlook permite 20MB e Yahoo Mail permite 25MB. O PDF.it comprime seu PDF para caber dentro desses limites." },
                { q: "O PDF vai ficar bom após a compressão?", a: "Sim. O PDF.it usa compressão inteligente que mantém o texto nítido e as páginas legíveis. A qualidade da imagem pode reduzir levemente, mas o documento continua profissional." },
                { q: "Posso comprimir vários PDFs para e-mail?", a: "Sim. Envie vários PDFs e o PDF.it comprimirá cada um individualmente. Você também pode uni-los primeiro com a ferramenta Unir PDF." },
                { q: "Posso comprimir um PDF para e-mail pelo celular?", a: "Sim. O PDF.it funciona em navegadores móveis — comprima e envie PDFs por e-mail diretamente do seu iPhone ou Android." },
                { q: "O que faço se meu PDF continuar muito grande para e-mail?", a: "Tente usar a ferramenta Dividir PDF do PDF.it para separar o documento em partes menores, depois comprima e envie cada parte separadamente." },
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
