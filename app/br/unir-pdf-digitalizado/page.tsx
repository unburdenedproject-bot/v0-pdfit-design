import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Merge, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Unir PDF Digitalizado — Combine PDFs Escaneados em Um Arquivo | PDF.it",
  description:
    "Una PDFs digitalizados em um unico documento com PDF.it. Combine documentos escaneados, recibos e formularios — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/merge-scanned-pdf",
      es: "/es/unir-pdf-escaneado",
      pt: "/br/unir-pdf-digitalizado",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Posso unir PDFs digitalizados sem perder qualidade?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it combina PDFs digitalizados sem recomprimir as imagens. A qualidade original das digitalizacoes e mantida integralmente." }
    },
    {
      "@type": "Question",
      "name": "PDFs digitalizados costumam ser grandes — qual o limite de tamanho?",
      "acceptedAnswer": { "@type": "Answer", "text": "Usuarios gratuitos podem enviar arquivos de ate 25MB. Usuarios Pro tem limite de 200MB por arquivo — ideal para digitalizacoes de alta resolucao." }
    },
    {
      "@type": "Question",
      "name": "Posso unir PDFs digitalizados no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it funciona em qualquer navegador movel. Digitalize documentos com seu celular, converta para PDF e una-os diretamente." }
    },
    {
      "@type": "Question",
      "name": "E possivel aplicar OCR nos PDFs digitalizados antes de unir?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a ferramenta OCR Scanner do PDF.it para tornar seus PDFs digitalizados pesquisaveis antes de uni-los. Assim o documento final tera texto selecionavel." }
    },
    {
      "@type": "Question",
      "name": "E seguro enviar documentos digitalizados para o PDF.it?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Seus documentos nunca sao armazenados permanentemente." }
    },
    {
      "@type": "Question",
      "name": "Posso comprimir o PDF apos unir as digitalizacoes?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos unir seus PDFs digitalizados, use a ferramenta Comprimir PDF do PDF.it para reduzir o tamanho do arquivo final, facilitando o envio por email." }
    }
  ]
}

export default function UnirPdfDigitalizadoPage() {
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
                <Merge className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDF Digitalizado</h1>
              <p className="text-xl text-slate-300 mb-8">
                Combine documentos escaneados em um unico PDF organizado. Perfeito para reunir recibos, formularios, contratos digitalizados e documentos de identidade em um arquivo so.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Qualidade Preservada</span></div>
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
          processingMessage="Unindo seus PDFs digitalizados..."
          successMessage="Seus PDFs digitalizados foram combinados!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Documentos digitalizados costumam ficar espalhados em varios arquivos separados. O PDF.it permite unir todos os seus PDFs escaneados em um unico documento — mantendo a qualidade original das imagens e a ordem correta das paginas.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Una PDFs digitalizados sem perder qualidade de imagem</li>
              <li>✓ Combine recibos, formularios e documentos escaneados</li>
              <li>✓ Use OCR depois para tornar o texto pesquisavel</li>
              <li>✓ Comprima o resultado final para facilitar o envio</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Recibos e Notas Fiscais Digitalizados</h2>
              <p className="text-slate-600">
                Junte todos os recibos e notas fiscais digitalizados do mes em um unico PDF para contabilidade ou declaracao de impostos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Documentos de Identidade e Certidoes</h2>
              <p className="text-slate-600">
                Combine copias digitalizadas de RG, CPF, comprovante de endereco e certidoes em um unico arquivo para processos burocraticos.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Prontuarios e Exames Medicos</h2>
              <p className="text-slate-600">
                Reuna exames medicos, laudos e receitas digitalizadas em um unico PDF para consultas ou para manter um historico organizado.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Unir PDFs Digitalizados</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seus PDFs digitalizados para o PDF.it.",
                "Organize os documentos na ordem desejada.",
                "Clique em Unir e baixe seu PDF combinado.",
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
                { q: "Posso unir PDFs digitalizados sem perder qualidade?", a: "Sim. O PDF.it combina PDFs digitalizados sem recomprimir as imagens. A qualidade original das digitalizacoes e mantida integralmente." },
                { q: "PDFs digitalizados costumam ser grandes — qual o limite de tamanho?", a: "Usuarios gratuitos podem enviar arquivos de ate 25MB. Usuarios Pro tem limite de 200MB por arquivo — ideal para digitalizacoes de alta resolucao." },
                { q: "Posso unir PDFs digitalizados no celular?", a: "Sim. O PDF.it funciona em qualquer navegador movel. Digitalize documentos com seu celular, converta para PDF e una-os diretamente." },
                { q: "E possivel aplicar OCR nos PDFs digitalizados antes de unir?", a: "Sim. Use a ferramenta OCR Scanner do PDF.it para tornar seus PDFs digitalizados pesquisaveis antes de uni-los. Assim o documento final tera texto selecionavel." },
                { q: "E seguro enviar documentos digitalizados para o PDF.it?", a: "Sim. O PDF.it usa conexoes criptografadas e exclui todos os arquivos apos sua sessao. Seus documentos nunca sao armazenados permanentemente." },
                { q: "Posso comprimir o PDF apos unir as digitalizacoes?", a: "Sim. Apos unir seus PDFs digitalizados, use a ferramenta Comprimir PDF do PDF.it para reduzir o tamanho do arquivo final, facilitando o envio por email." },
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
