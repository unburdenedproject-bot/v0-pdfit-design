import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import { ProcessingInterface } from "@/components/processing-interface"
import { Scissors, Zap, Shield, Download } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "Dividir PDF por Tamanho — Separe PDFs em Partes por MB | OmnisPDF",
  description:
    "Divida seu PDF por tamanho de arquivo com OmnisPDF. Separe documentos grandes em partes que respeitem limites de email e upload — rapido, gratis e online.",
  alternates: {
    languages: {
      en: "/split-pdf-by-size",
      es: "/es/dividir-pdf-por-tamano",
      pt: "/br/dividir-pdf-por-tamanho",
    },
  },
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como dividir um PDF por tamanho de arquivo?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seu PDF para o OmnisPDF, defina o tamanho maximo desejado para cada parte (ex: 5MB, 10MB, 25MB) e clique em Dividir. O OmnisPDF divide automaticamente o documento em partes que respeitam o limite definido." }
    },
    {
      "@type": "Question",
      "name": "Para que serve dividir PDF por tamanho?",
      "acceptedAnswer": { "@type": "Answer", "text": "E ideal quando voce precisa enviar um PDF grande por email (limite de 25MB) ou subir para um portal que tem limite de tamanho. Cada parte resultante respeita o tamanho maximo definido." }
    },
    {
      "@type": "Question",
      "name": "Dividir por tamanho afeta a qualidade do PDF?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nao. As paginas sao extraidas sem recodificar. A qualidade, texto, imagens e formatacao permanecem iguais ao original." }
    },
    {
      "@type": "Question",
      "name": "Qual o tamanho minimo de cada parte?",
      "acceptedAnswer": { "@type": "Answer", "text": "O tamanho minimo depende das paginas individuais do seu PDF. Se uma unica pagina excede o tamanho definido, ela sera salva como um arquivo separado." }
    },
    {
      "@type": "Question",
      "name": "E gratis dividir PDF por tamanho?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Voce pode dividir PDFs de ate 25MB gratis. Para arquivos maiores (ate 200MB), faca upgrade para o plano Pro." }
    },
    {
      "@type": "Question",
      "name": "Posso dividir um PDF por tamanho no celular?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. O OmnisPDF funciona em navegadores moveis — defina o tamanho maximo, divida e baixe as partes diretamente do seu celular." }
    }
  ]
}

export default function DividirPdfPorTamanhoPage() {
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
                <Scissors className="h-10 w-10 text-white" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Dividir PDF por Tamanho</h1>
              <p className="text-xl text-slate-300 mb-8">
                Separe PDFs grandes em partes que respeitam limites de tamanho. Defina o tamanho maximo por arquivo e o OmnisPDF divide automaticamente — perfeito para email e uploads.
              </p>
              <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
                <div className="flex items-center gap-2"><Zap className="h-4 w-4 text-orange-500" /><span>Divisao por MB</span></div>
                <div className="flex items-center gap-2"><Shield className="h-4 w-4 text-orange-500" /><span>Arquivos Excluidos Apos a Sessao</span></div>
                <div className="flex items-center gap-2"><Download className="h-4 w-4 text-orange-500" /><span>Sem Cadastro</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* Processing Interface */}
        <ProcessingInterface
          acceptedFiles=".pdf"
          toolName="Split PDF"
          outputFormat="PDF"
          processingMessage="Dividindo seu PDF por tamanho..."
          successMessage="Seu PDF foi dividido por tamanho!"
        />

        {/* About */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <p className="text-lg text-slate-600 mb-8">
              Muitos servicos de email e portais de upload tem limites de tamanho de arquivo. O OmnisPDF permite dividir seu PDF automaticamente em partes que respeitam esses limites — basta definir o tamanho maximo desejado e o resto e automatico.
            </p>
            <ul className="space-y-2 text-slate-700 mb-8">
              <li>✓ Defina o tamanho maximo por parte (ex: 5MB, 10MB, 25MB)</li>
              <li>✓ Divisao automatica inteligente por paginas</li>
              <li>✓ Ideal para limites de email e upload</li>
              <li>✓ Sem perda de qualidade — paginas extraidas, nao recodificadas</li>
              <li>✓ Funciona em qualquer dispositivo com navegador</li>
            </ul>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl space-y-12">
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Envio por Email</h2>
              <p className="text-slate-600">
                A maioria dos provedores de email limita anexos a 25MB. Divida seu PDF em partes de ate 25MB cada e envie como multiplos anexos ou em emails separados.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Upload em Portais</h2>
              <p className="text-slate-600">
                Portais governamentais, bancarios e de empresas costumam ter limites de upload. Divida o PDF no tamanho exigido pelo portal e envie cada parte.
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-black text-slate-900 mb-3">Compartilhamento em Nuvem</h2>
              <p className="text-slate-600">
                Servicos de armazenamento gratuitos tem limites. Divida PDFs grandes para que cada parte caiba nos limites do seu plano de armazenamento.
              </p>
            </div>
          </div>
        </section>

        {/* How To */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Como Dividir PDF por Tamanho</h2>
            <div className="space-y-4">
              {[
                "Envie ou arraste seu PDF para o OmnisPDF.",
                "Defina o tamanho maximo desejado para cada parte.",
                "Clique em Dividir PDF e baixe as partes resultantes.",
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
                { name: "Dividir PDF", href: "/br/dividir-pdf", desc: "Ferramenta padrao de divisao" },
                { name: "Unir PDF", href: "/br/unir-pdf", desc: "Combine PDFs em um" },
                { name: "Comprimir PDF", href: "/br/comprimir-pdf", desc: "Reduza o tamanho" },
                { name: "Girar PDF", href: "/br/girar-pdf", desc: "Corrija a orientacao" },
                { name: "Extrair Imagens", href: "/br/extrair-imagens-de-pdf", desc: "Extraia imagens do PDF" },
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
                { q: "Como dividir um PDF por tamanho de arquivo?", a: "Envie seu PDF para o OmnisPDF, defina o tamanho maximo desejado para cada parte (ex: 5MB, 10MB, 25MB) e clique em Dividir. O OmnisPDF divide automaticamente o documento em partes que respeitam o limite definido." },
                { q: "Para que serve dividir PDF por tamanho?", a: "E ideal quando voce precisa enviar um PDF grande por email (limite de 25MB) ou subir para um portal que tem limite de tamanho. Cada parte resultante respeita o tamanho maximo definido." },
                { q: "Dividir por tamanho afeta a qualidade do PDF?", a: "Nao. As paginas sao extraidas sem recodificar. A qualidade, texto, imagens e formatacao permanecem iguais ao original." },
                { q: "Qual o tamanho minimo de cada parte?", a: "O tamanho minimo depende das paginas individuais do seu PDF. Se uma unica pagina excede o tamanho definido, ela sera salva como um arquivo separado." },
                { q: "E gratis dividir PDF por tamanho?", a: "Sim. Voce pode dividir PDFs de ate 25MB gratis. Para arquivos maiores (ate 200MB), faca upgrade para o plano Pro." },
                { q: "Posso dividir um PDF por tamanho no celular?", a: "Sim. O OmnisPDF funciona em navegadores moveis — defina o tamanho maximo, divida e baixe as partes diretamente do seu celular." },
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
