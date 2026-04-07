import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { Merge, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Unir PDFs em Ordem (Organizar e Combinar) | PDF.it",
  description:
    "Aprenda como unir PDFs em uma ordem especifica. Organize documentos antes de combinar para criar o PDF final perfeito — online, gratis.",
  keywords: "unir pdf em ordem, organizar pdf, combinar pdf ordem certa, juntar pdf sequencia, mesclar pdf ordenado",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Como unir PDFs em uma ordem especifica?",
      "acceptedAnswer": { "@type": "Answer", "text": "Envie seus PDFs para o PDF.it e use a funcao arrastar e soltar para reorganizar os arquivos na ordem desejada antes de clicar em Unir. Os PDFs serao combinados exatamente na sequencia que voce definir." }
    },
    {
      "@type": "Question",
      "name": "Posso mudar a ordem depois de enviar os arquivos?",
      "acceptedAnswer": { "@type": "Answer", "text": "Sim. Apos o upload, voce pode arrastar e soltar os arquivos para qualquer posicao. Tambem pode remover arquivos individuais e adicionar novos antes de combinar." }
    },
    {
      "@type": "Question",
      "name": "Como garantir que as paginas fiquem na ordem certa?",
      "acceptedAnswer": { "@type": "Answer", "text": "Nomeie seus arquivos com numeros (01_, 02_, 03_) antes do upload. O PDF.it mantem a ordem em que voce organiza os thumbnails na tela." }
    }
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Unir PDFs em Ordem",
  "description": "Combine varios PDFs na ordem exata que voce precisa.",
  "step": [
    {
      "@type": "HowToStep",
      "name": "Envie todos os PDFs",
      "text": "Acesse a ferramenta Unir PDF e envie todos os arquivos que deseja combinar."
    },
    {
      "@type": "HowToStep",
      "name": "Reorganize na ordem desejada",
      "text": "Arraste e solte os arquivos para definir a sequencia correta. O primeiro arquivo sera o inicio do documento final."
    },
    {
      "@type": "HowToStep",
      "name": "Una e baixe",
      "text": "Clique em Unir PDF e baixe o documento combinado na ordem que voce definiu."
    }
  ]
}

export default function UnirPDFsEmOrdemPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
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
        <section className="text-white py-16 relative overflow-hidden" style={{ background: `radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%), radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%), #0E0F1E` }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-[#14D8C4] font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Unir PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Unir PDFs em Ordem</h1>
              <p className="text-xl text-slate-300">
                Precisa combinar PDFs em uma sequencia especifica? Veja como organizar e unir seus documentos na ordem exata que voce precisa.
              </p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-[#F0FDFA] border-b border-[#14D8C4]/10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-[#14D8C4] rounded-lg flex items-center justify-center flex-shrink-0">
                <Merge className="h-5 w-5 text-white" />
              </div>
              <p className="text-slate-700 font-semibold">Pronto para unir em ordem? Va direto para a ferramenta.</p>
            </div>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap"
            >
              Unir PDF Agora <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que a Ordem Importa ao Unir PDFs?</h2>
              <p className="text-slate-600 mb-4">
                A ordem dos PDFs define a sequencia das paginas no documento final. Isso e crucial quando voce esta:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Montando um dossie</strong> — documentos precisam seguir uma sequencia logica ou cronologica.</li>
                <li>&#10003; <strong>Criando um relatorio</strong> — capa, sumario, capitulos e anexos devem estar na ordem correta.</li>
                <li>&#10003; <strong>Preparando documentacao legal</strong> — contratos e aditivos precisam estar em ordem de data.</li>
                <li>&#10003; <strong>Organizando um portfolio</strong> — seus melhores trabalhos devem aparecer primeiro.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Unir em Ordem (Passo a Passo)</h2>
              <div className="space-y-4">
                {[
                  {
                    title: "Envie todos os PDFs",
                    desc: "Acesse a ferramenta Unir PDF e envie todos os arquivos. Dica: nomeie os arquivos com numeros (01_capa.pdf, 02_sumario.pdf) para facilitar a organizacao.",
                  },
                  {
                    title: "Arraste para reorganizar",
                    desc: "Os PDFs aparecerao como thumbnails na tela. Arraste cada um para a posicao correta. O PDF na posicao 1 sera o inicio do documento final.",
                  },
                  {
                    title: "Confira e combine",
                    desc: "Verifique a ordem uma ultima vez, depois clique em Unir PDF. O resultado respeitara exatamente a sequencia que voce definiu.",
                  },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-[#14D8C4] text-[#0E0F1E] rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">
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
              <h2 className="text-2xl font-black text-slate-900 mb-4">Dicas para Manter a Ordem Correta</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; <strong>Nomeie com numeros:</strong> use prefixos como 01_, 02_, 03_ nos nomes dos arquivos para facilitar a identificacao visual.</li>
                <li>&#10003; <strong>Confira os thumbnails:</strong> o PDF.it mostra uma previa de cada PDF — use isso para confirmar a identidade de cada arquivo.</li>
                <li>&#10003; <strong>Envie em lotes:</strong> se tem muitos PDFs, envie por grupos (documentos pessoais, comprovantes, etc.) para nao se confundir.</li>
                <li>&#10003; <strong>Apos unir</strong>, abra o resultado e navegue pelas paginas para confirmar que tudo esta na ordem certa.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que Fazer Se a Ordem Ficou Errada?</h2>
              <p className="text-slate-600 mb-4">
                Se voce ja uniu e percebeu que a ordem esta errada, nao precisa comecar do zero:
              </p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Use <Link href="/br/dividir-pdf" className="text-[#14D8C4] hover:underline">Dividir PDF</Link> para separar as paginas do PDF combinado.</li>
                <li>&#10003; Depois, envie novamente para <Link href="/br/unir-pdf" className="text-[#14D8C4] hover:underline">Unir PDF</Link> na ordem correta.</li>
                <li>&#10003; Ou use <Link href="/br/girar-pdf" className="text-[#14D8C4] hover:underline">Girar PDF</Link> se alguma pagina ficou na orientacao errada.</li>
              </ul>
            </section>

          </div>
        </article>

        <section className="py-12" style={{ background: "#0E0F1E" }}>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Pronto para Unir Seus PDFs em Ordem?</h2>
            <p className="text-slate-300 mb-6">Organize e combine seus documentos na sequencia perfeita — gratis, sem cadastro.</p>
            <Link
              href="/br/unir-pdf"
              className="inline-flex items-center gap-2 bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E] font-bold py-3 px-8 rounded-xl transition-colors"
            >
              <Merge className="h-5 w-5" /> Unir PDF Agora
            </Link>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "Como Unir Arquivos PDF", href: "/br/aprender/como-unir-arquivos-pdf" },
                { title: "Unir PDFs Digitalizados", href: "/br/aprender/unir-pdfs-digitalizados" },
                { title: "Combinar PDFs para Envio", href: "/br/aprender/combinar-pdfs-para-envio" },
                { title: "Unir PDF no iPhone", href: "/br/aprender/unir-pdf-no-iphone" },
              ].map((article) => (
                <Link
                  key={article.href}
                  href={article.href}
                  className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/20 hover:bg-[#F0FDFA] transition-all group"
                >
                  <span className="font-semibold text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                  <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-[#F3F4FF]">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-8 text-center">Perguntas Frequentes</h2>
            <div className="space-y-6">
              {[
                { q: "Como unir PDFs em uma ordem especifica?", a: "Envie seus PDFs para o PDF.it e use a funcao arrastar e soltar para reorganizar os arquivos na ordem desejada antes de clicar em Unir." },
                { q: "Posso mudar a ordem depois de enviar os arquivos?", a: "Sim. Apos o upload, voce pode arrastar e soltar os arquivos para qualquer posicao. Tambem pode remover arquivos individuais e adicionar novos." },
                { q: "Como garantir que as paginas fiquem na ordem certa?", a: "Nomeie seus arquivos com numeros (01_, 02_, 03_) antes do upload. O PDF.it mantem a ordem em que voce organiza os thumbnails na tela." },
              ].map((faq, i) => (
                <div key={i} className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", boxShadow: "0 2px 8px rgba(0,0,0,0.1)" }}>
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
