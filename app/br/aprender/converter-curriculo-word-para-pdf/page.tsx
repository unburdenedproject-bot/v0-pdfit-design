import Script from "next/script"
import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { FileText, ArrowRight } from "lucide-react"

export const metadata = {
  title: "Converter Curriculo Word para PDF (Dicas para ATS) | OmnisPDF",
  description:
    "Converta seu curriculo de Word para PDF mantendo compatibilidade com sistemas ATS. Fontes, layout e formatacao que ajudam seu curriculo a passar pelos filtros automaticos.",
  keywords: "converter curriculo word pdf, curriculo pdf ats, curriculo word para pdf, cv word para pdf formatacao",
}

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "Devo enviar curriculo em Word ou PDF?", "acceptedAnswer": { "@type": "Answer", "text": "PDF e a melhor opcao na maioria dos casos. Mantem a formatacao identica em qualquer dispositivo e sistema operacional. Envie em Word apenas se a vaga pedir explicitamente formato .docx." } },
    { "@type": "Question", "name": "O que e ATS e por que importa?", "acceptedAnswer": { "@type": "Answer", "text": "ATS (Applicant Tracking System) e o software que empresas usam para filtrar curriculos automaticamente. Se o PDF nao for compativel com ATS, seu curriculo pode ser rejeitado antes de um humano le-lo." } },
    { "@type": "Question", "name": "Como tornar meu curriculo PDF compativel com ATS?", "acceptedAnswer": { "@type": "Answer", "text": "Use fontes padrao (Arial, Calibri), evite tabelas complexas, nao coloque informacoes em cabecalhos/rodapes, evite imagens e graficos para dados importantes, e use titulos de secao simples." } },
    { "@type": "Question", "name": "O OmnisPDF mantem a formatacao do curriculo?", "acceptedAnswer": { "@type": "Answer", "text": "Sim. O conversor Word para PDF do OmnisPDF preserva fontes, espacamento e layout. Se o curriculo estiver bem formatado no Word, o PDF ficara identico." } },
  ]
}

const howToSchema = {
  "@context": "https://schema.org",
  "@type": "HowTo",
  "name": "Como Converter Curriculo Word para PDF",
  "description": "Converta seu curriculo mantendo formatacao e compatibilidade ATS.",
  "step": [
    { "@type": "HowToStep", "name": "Prepare o curriculo no Word", "text": "Use fontes padrao, layout simples, evite tabelas complexas e imagens para dados criticos." },
    { "@type": "HowToStep", "name": "Converta para PDF", "text": "Use o conversor Word para PDF do OmnisPDF para gerar o PDF com formatacao preservada." },
    { "@type": "HowToStep", "name": "Verifique o resultado", "text": "Abra o PDF, selecione todo o texto (Ctrl+A) para confirmar que e selecionavel — essencial para ATS." }
  ]
}

export default function ConverterCurriculoWordPDFPage() {
  return (
    <div className="min-h-screen bg-white">
      <Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <Script id="howto-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }} />
      <HeaderBr />
      <main>
        <section className="bg-gradient-to-br from-slate-900 to-slate-800 text-white py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <p className="text-orange-400 font-semibold text-sm mb-3 uppercase tracking-wide">Aprender / Word para PDF</p>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Converter Curriculo Word para PDF</h1>
              <p className="text-xl text-slate-300">Converta seu curriculo mantendo a formatacao e garantindo compatibilidade com sistemas ATS. Dicas praticas para que seu CV passe pelos filtros automaticos.</p>
            </div>
          </div>
        </section>

        <section className="py-8 bg-orange-50 border-b border-orange-100">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"><FileText className="h-5 w-5 text-white" /></div>
              <p className="text-slate-700 font-semibold">Converta seu curriculo agora.</p>
            </div>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-2.5 px-6 rounded-xl text-sm transition-colors whitespace-nowrap">Word para PDF <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </section>

        <article className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Por Que PDF e Melhor para Curriculos?</h2>
              <p className="text-slate-600 mb-4">Quando voce envia um curriculo em Word, a formatacao pode mudar dependendo da versao do Word, sistema operacional e fontes instaladas no computador do recrutador. Um curriculo que parece perfeito no seu Mac pode ficar desformatado no Windows do RH.</p>
              <p className="text-slate-600 mb-4">O PDF resolve isso: a formatacao e fixada no arquivo. O curriculo fica identico em qualquer dispositivo, sistema operacional e leitor de PDF.</p>
              <p className="text-slate-600">Excecao: se a vaga pedir explicitamente formato .docx, envie em Word. Caso contrario, PDF e sempre a escolha mais segura.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">O Que E ATS e Por Que Importa</h2>
              <p className="text-slate-600 mb-4">ATS (Applicant Tracking System) e o software que grandes empresas usam para filtrar curriculos automaticamente antes que um recrutador humano os veja. O ATS le o texto do PDF, procura palavras-chave da vaga e classifica os candidatos.</p>
              <p className="text-slate-600">Se o ATS nao conseguir ler o texto do seu curriculo (porque esta em imagem, em tabela complexa ou com formatacao problematica), seu curriculo pode ser rejeitado automaticamente — mesmo que voce seja perfeito para a vaga.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-6">Como Preparar o Curriculo (Antes de Converter)</h2>
              <div className="space-y-4">
                {[
                  { title: "Use fontes padrao", desc: "Arial, Calibri, Times New Roman ou Georgia. Fontes criativas podem nao ser reconhecidas pelo ATS e podem ser substituidas na conversao." },
                  { title: "Layout de coluna unica", desc: "Evite layouts de duas colunas. A maioria dos sistemas ATS le de cima para baixo, esquerda para direita. Colunas podem misturar a ordem das informacoes." },
                  { title: "Evite tabelas para conteudo principal", desc: "Tabelas sao problematicas para ATS. Use tabulacoes e espacamento normal em vez de tabelas para alinhar conteudo." },
                  { title: "Titulos de secao claros", desc: "Use titulos simples e padrao: 'Experiencia Profissional', 'Formacao Academica', 'Habilidades'. O ATS procura esses termos." },
                  { title: "Nao coloque dados no cabecalho/rodape", desc: "Muitos sistemas ATS ignoram cabecalhos e rodapes. Coloque nome, telefone e e-mail no corpo do documento." },
                ].map((step, i) => (
                  <div key={i} className="flex items-start gap-4 bg-gray-50 rounded-xl p-5 border border-gray-200">
                    <div className="w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-black text-sm flex-shrink-0">{i + 1}</div>
                    <div><h3 className="font-bold text-slate-900 mb-1">{step.title}</h3><p className="text-slate-600 text-sm">{step.desc}</p></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Convertendo para PDF</h2>
              <p className="text-slate-600 mb-4">Com o curriculo preparado no Word, use o <Link href="/br/word-para-pdf" className="text-orange-600 hover:underline">conversor Word para PDF</Link> do OmnisPDF:</p>
              <ul className="space-y-2 text-slate-700">
                <li>&#10003; Faca upload do arquivo DOCX.</li>
                <li>&#10003; A conversao preserva fontes, espacamento e layout.</li>
                <li>&#10003; Baixe o PDF e verifique o resultado.</li>
              </ul>
              <p className="text-slate-600 mt-4"><strong>Teste essencial:</strong> Abra o PDF e pressione Ctrl+A (selecionar tudo). Todo o texto deve ficar selecionado. Se alguma parte nao for selecionavel, o ATS nao conseguira le-la.</p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-black text-slate-900 mb-4">Checklist Final</h2>
              <ul className="space-y-2 text-slate-700">
                <li>&#9745; Fontes padrao (Arial, Calibri, Times New Roman).</li>
                <li>&#9745; Layout de coluna unica.</li>
                <li>&#9745; Sem tabelas para conteudo principal.</li>
                <li>&#9745; Informacoes de contato no corpo (nao no cabecalho).</li>
                <li>&#9745; Titulos de secao padrao e claros.</li>
                <li>&#9745; Todo o texto selecionavel no PDF (Ctrl+A).</li>
                <li>&#9745; Tamanho do arquivo razoavel (menos de 1MB).</li>
                <li>&#9745; Nome do arquivo profissional: &quot;Nome_Sobrenome_Curriculo.pdf&quot;.</li>
              </ul>
            </section>
          </div>
        </article>

        <section className="py-12 bg-gradient-to-br from-slate-900 to-slate-800">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-2xl text-center">
            <h2 className="text-2xl font-black text-white mb-3">Converta Seu Curriculo Agora</h2>
            <p className="text-slate-300 mb-6">Word para PDF com formatacao preservada e compativel com ATS.</p>
            <Link href="/br/word-para-pdf" className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-8 rounded-xl transition-colors"><FileText className="h-5 w-5" /> Word para PDF</Link>
          </div>
        </section>

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
            <h2 className="text-2xl font-black text-slate-900 mb-6">Artigos Relacionados</h2>
            <div className="grid gap-3">
              {[
                { title: "DOCX para PDF — Manter Formato", href: "/br/aprender/docx-para-pdf-manter-formato" },
              ].map((article) => (
                <Link key={article.href} href={article.href} className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-orange-200 hover:bg-orange-50/40 transition-all group">
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
                { q: "Devo enviar curriculo em Word ou PDF?", a: "PDF e a melhor opcao na maioria dos casos. Mantem formatacao em qualquer dispositivo. Envie em Word apenas se a vaga pedir explicitamente." },
                { q: "O que e ATS?", a: "Software que empresas usam para filtrar curriculos automaticamente. Se o ATS nao ler seu PDF, seu curriculo pode ser rejeitado antes de um humano ve-lo." },
                { q: "Como tornar o PDF compativel com ATS?", a: "Fontes padrao, layout simples, sem tabelas complexas, informacoes no corpo (nao cabecalho/rodape), titulos de secao claros." },
                { q: "O OmnisPDF mantem a formatacao?", a: "Sim. Se o documento Word estiver bem formatado, o PDF sera identico ao original." },
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
