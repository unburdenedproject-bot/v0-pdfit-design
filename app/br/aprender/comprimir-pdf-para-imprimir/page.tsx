import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileArchiveIcon as Compress, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Comprimir PDF para Imprimir (Manter Qualidade de Impressao) | OmnisPDF",
  description:
    "Aprenda como comprimir um PDF para impressao sem perder qualidade. Reduza o tamanho mantendo 300 DPI para resultados profissionais — online, gratis.",
  keywords: "comprimir pdf para imprimir, comprimir pdf qualidade impressao, reduzir pdf manter qualidade, comprimir pdf 300 dpi",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Posso comprimir um PDF sem perder qualidade de impressao?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Use a compressao Leve do OmnisPDF, que mantem as imagens em alta resolucao (300 DPI) e reduz o tamanho eliminando metadados desnecessarios e otimizando a estrutura do arquivo." }
    },
    {
      "@type": "Question",
      "name": "Qual nivel de compressao usar para impressao?",
      "acceptedAnswer": { "@type": "Answer", "text": "Para impressao profissional, use sempre a compressao Leve. Ela reduz o tamanho do arquivo sem afetar visivelmente a qualidade das imagens e textos quando impressos." }
    },
    {
      "@type": "Question",
      "name": "A compressao afeta a resolucao DPI?",
      "acceptedAnswer": { "@type": "Answer", "text": "A compressao Leve mantem a resolucao original. A compressao Media pode reduzir levemente a resolucao. A Extrema reduz significativamente a resolucao e nao e recomendada para impressao profissional." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Comprimir PDF para Impressao",
  "description": "Reduza o tamanho do PDF mantendo a qualidade necessaria para impressao profissional.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie seu PDF",
      "text": "Acesse a ferramenta Comprimir PDF do OmnisPDF e envie seu arquivo para impressao."
    },
    {
      "@type": "HowToStep",
      "name": "Selecione compressao Leve",
      "text": "Escolha a compressao Leve para manter a qualidade das imagens em 300 DPI, ideal para impressao."
    },
    {
      "@type": "HowToStep",
      "name": "Baixe e imprima",
      "text": "Baixe o PDF comprimido. O arquivo sera menor mas mantera a qualidade visual necessaria para impressao profissional."
    }
  ]
}

export default function ComprimirPDFParaImprimirPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <Script
        id="howto-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Comprimir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Comprimir PDF para Imprimir</h1>
              <p className="text-xl text-slate-300">
                Precisa reduzir o tamanho de um PDF para enviar para a grafica, mas sem perder qualidade de impressao? Veja como fazer isso corretamente.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                <Compress className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para comprimir? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Comprimir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que Comprimir PDF para Impressao?</h2>
              <p className="text-slate-600 mb-4">
                PDFs para impressao profissional geralmente sao grandes porque contem imagens em alta resolucao (300 DPI ou mais). Comprimir corretamente ajuda a:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Enviar mais rapido</strong> para a grafica ou servico de impressao</li>
                <li>&#10003; <strong>Caber em limites de upload</strong> de portais de graficas online</li>
                <li>&#10003; <strong>Economizar espaco</strong> no armazenamento sem sacrificar a qualidade final</li>
                <li>&#10003; <strong>Compartilhar previews</strong> por email antes da impressao final</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Comprimir para Impressao (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie seu PDF de impressao",
                    desc: "Acesse a ferramenta Comprimir PDF e envie o arquivo. Certifique-se de que o PDF original esta em qualidade de impressao (300 DPI).",
                  },
                  {
                    title: "Selecione compressao Leve",
                    desc: "Importante: para impressao, sempre use compressao Leve. Este nivel otimiza a estrutura do arquivo e metadados sem reduzir a resolucao das imagens.",
                  },
                  {
                    title: "Verifique a qualidade antes de enviar",
                    desc: "Baixe o PDF comprimido e abra em 100% de zoom. Verifique se as imagens, textos e cores estao preservados. Se tudo estiver OK, envie para impressao.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
                      {i + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-1">{step.title}</h3>
                      <p className="text-slate-600 text-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Compressao Leve vs Media vs Extrema para Impressao</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm border border-gray-200 rounded-xl overflow-hidden">
                  <thead>
                    <tr className="bg-slate-900 text-white">
                      <th className="text-left py-3 px-4 font-bold">Nivel</th>
                      <th className="text-left py-3 px-4 font-bold">Resolucao</th>
                      <th className="text-left py-3 px-4 font-bold">Recomendado para Impressao?</th>
                    </tr>
                  </thead>
                  <tbody className="text-slate-700">
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Leve</td>
                      <td className="py-3 px-4">Mantem 300 DPI</td>
                      <td className="py-3 px-4 font-semibold text-green-600">Sim — ideal</td>
                    </tr>
                    <tr className="border-t border-gray-200 bg-gray-50">
                      <td className="py-3 px-4 font-semibold text-orange-600">Media</td>
                      <td className="py-3 px-4">Pode reduzir para 150-200 DPI</td>
                      <td className="py-3 px-4 text-yellow-600">Aceitavel para impressao domestica</td>
                    </tr>
                    <tr className="border-t border-gray-200">
                      <td className="py-3 px-4 font-semibold text-orange-600">Extrema</td>
                      <td className="py-3 px-4">Reduz significativamente</td>
                      <td className="py-3 px-4 text-red-600">Nao recomendado</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Melhor Qualidade de Impressao</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Sempre use compressao Leve</strong> para materiais que serao impressos profissionalmente.</li>
                <li>&#10003; <strong>Achate o PDF</strong> com <Link href="/br/achatar-pdf" className="text-orange-600 hover:underline">Achatar PDF</Link> antes de comprimir — remove camadas desnecessarias sem afetar a qualidade visual.</li>
                <li>&#10003; <strong>Remova paginas extras</strong> como capas em branco ou paginas de rascunho antes de comprimir.</li>
                <li>&#10003; <strong>Mantenha o original:</strong> sempre guarde uma copia do PDF original em alta resolucao como backup.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Comprimir Seu PDF?</h2>
            <p className="text-slate-300 mb-6">Reduza o tamanho mantendo a qualidade de impressao — gratis, sem cadastro.</p>
            <Link
              href="/br/comprimir-pdf"
              className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Compress className="h-5 w-5" /> Comprimir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Comprimir um PDF", href: "/br/aprender/como-comprimir-um-pdf" },
                { title: "Comprimir PDF Grande (50MB, 100MB ou Mais)", href: "/br/aprender/comprimir-pdf-grande" },
                { title: "Comprimir PDF com Imagens", href: "/br/aprender/comprimir-pdf-com-imagens" },
                { title: "Comprimir PDF Sem Perder Qualidade", href: "/br/aprender/comprimir-pdf-sem-perder-qualidade" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-orange-600 transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-orange-500 transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Posso comprimir um PDF sem perder qualidade de impressao?", a: "Sim. Use a compressao Leve do OmnisPDF, que mantem as imagens em alta resolucao (300 DPI) e reduz o tamanho eliminando metadados desnecessarios e otimizando a estrutura do arquivo." },
                { q: "Qual nivel de compressao usar para impressao?", a: "Para impressao profissional, use sempre a compressao Leve. Ela reduz o tamanho do arquivo sem afetar visivelmente a qualidade das imagens e textos quando impressos." },
                { q: "A compressao afeta a resolucao DPI?", a: "A compressao Leve mantem a resolucao original. A compressao Media pode reduzir levemente a resolucao. A Extrema reduz significativamente a resolucao e nao e recomendada para impressao profissional." },
              ].map((faq, i) => (
                <div key={i} className="bg-gray-50 rounded-xl p-6 border border-gray-200">
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
