import { HeaderBr } from "@/components/header-br"
import { FooterBr } from "@/components/footer-br"
import Link from "next/link"
import { BookOpen, ArrowRight } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Aprender — Guias, Dicas e Tutoriais de PDF | PDF.it",
  description:
    "Guias e tutoriais gratuitos para cada tarefa com PDF. Aprenda a comprimir, unir, dividir, converter, proteger e otimizar arquivos PDF — passo a passo.",
  alternates: {
    canonical: "https://pdf.it.com/br/aprender",
    languages: {
      en: "https://pdf.it.com/learn",
      es: "https://pdf.it.com/es/aprender",
      pt: "https://pdf.it.com/br/aprender",
    },
  },
}

const categories = [
  {
    name: "Comprimir PDF",
    articles: [
      { href: "/br/aprender/como-comprimir-um-pdf", title: "Como Comprimir um PDF (Reduzir Tamanho Rapidamente)" },
      { href: "/br/aprender/comprimir-pdf-sem-perder-qualidade", title: "Como Comprimir um PDF Sem Perder Qualidade" },
      { href: "/br/aprender/comprimir-pdf-grande", title: "Como Comprimir um PDF Grande (50MB, 100MB ou Mais)" },
      { href: "/br/aprender/comprimir-pdf-com-imagens", title: "Comprimir um PDF com Imagens (Fotos, Digitalizacoes, Graficos)" },
      { href: "/br/aprender/comprimir-pdf-para-imprimir", title: "Comprimir um PDF para Imprimir (Manter Qualidade de Impressao)" },
    ],
  },
  {
    name: "Unir e Dividir PDF",
    articles: [
      { href: "/br/aprender/como-unir-arquivos-pdf", title: "Como Unir Arquivos PDF" },
      { href: "/br/aprender/unir-pdfs-em-ordem", title: "Unir PDFs na Ordem Correta" },
      { href: "/br/aprender/unir-pdf-no-iphone", title: "Unir PDFs no iPhone" },
      { href: "/br/aprender/unir-pdfs-digitalizados", title: "Unir PDFs Digitalizados" },
      { href: "/br/aprender/combinar-pdfs-para-envio", title: "Combinar PDFs para Envios (Escola, Visto, Portais)" },
      { href: "/br/aprender/como-dividir-pdf", title: "Como Dividir um PDF" },
      { href: "/br/aprender/dividir-pdf-em-paginas-individuais", title: "Dividir um PDF em Paginas Individuais" },
      { href: "/br/aprender/dividir-pdf-para-email", title: "Dividir um PDF para Email" },
      { href: "/br/aprender/dividir-pdf-no-celular", title: "Dividir um PDF no Celular" },
      { href: "/br/aprender/extrair-paginas-de-pdf", title: "Extrair Paginas de um PDF" },
      { href: "/br/aprender/extrair-paginas-de-pdf-guia", title: "Extrair Paginas de um PDF — Guia Completo" },
    ],
  },
  {
    name: "Converter PDF",
    articles: [
      { href: "/br/aprender/converter-pdf-para-jpg", title: "Como Converter PDF para JPG" },
      { href: "/br/aprender/converter-pdf-para-png", title: "Como Converter PDF para PNG" },
      { href: "/br/aprender/converter-pdf-para-texto", title: "Converter PDF para TXT (Texto Simples)" },
      { href: "/br/aprender/pdf-para-jpg-vs-png", title: "PDF para JPG vs PNG — Qual Escolher?" },
      { href: "/br/aprender/pdf-para-jpg-no-iphone", title: "PDF para JPG no iPhone" },
      { href: "/br/aprender/pdf-para-jpg-para-powerpoint", title: "PDF para JPG para PowerPoint" },
      { href: "/br/aprender/converter-pdf-para-png-no-iphone", title: "Converter PDF para PNG no iPhone" },
      { href: "/br/aprender/pdf-para-png-para-design", title: "PDF para PNG para Design" },
      { href: "/br/aprender/salvar-pagina-pdf-como-jpg", title: "Salvar uma Pagina de PDF como JPG" },
      { href: "/br/aprender/salvar-pdf-como-png-no-mac", title: "Salvar PDF como PNG no Mac" },
      { href: "/br/aprender/por-que-pdf-para-jpg-fica-borrado", title: "Por Que PDF para JPG Fica Borrado (E Como Corrigir)" },
      { href: "/br/aprender/converter-pdf-digitalizado-para-texto", title: "Converter PDF Digitalizado para Texto (OCR)" },
      { href: "/br/aprender/extrair-texto-de-pdf-no-celular", title: "Extrair Texto de PDF no Celular" },
      { href: "/br/aprender/copiar-texto-de-pdf-para-notas", title: "Copiar Texto de PDF para Notas" },
      { href: "/br/aprender/pdf-texto-ilegivel-solucao", title: "Texto do PDF Ilegivel? Aqui a Solucao" },
    ],
  },
  {
    name: "Word, Excel e PowerPoint para PDF",
    articles: [
      { href: "/br/aprender/converter-word-para-pdf", title: "Converter Word para PDF" },
      { href: "/br/aprender/converter-excel-para-pdf", title: "Converter Excel para PDF" },
      { href: "/br/aprender/converter-ppt-para-pdf", title: "Converter PowerPoint para PDF" },
      { href: "/br/aprender/converter-docx-xlsx-pptx-para-pdf", title: "Converter DOCX, XLSX e PPTX para PDF" },
      { href: "/br/aprender/converter-curriculo-word-para-pdf", title: "Converter Curriculo de Word para PDF (Dicas ATS)" },
      { href: "/br/aprender/docx-para-pdf-manter-formato", title: "DOCX para PDF Sem Problemas de Formato" },
      { href: "/br/aprender/word-para-pdf-erros-comuns-de-formato", title: "Word para PDF: Erros Comuns de Formato" },
      { href: "/br/aprender/word-para-pdf-no-iphone", title: "Word para PDF no iPhone" },
      { href: "/br/aprender/excel-para-pdf-ajustar-a-pagina", title: "Excel para PDF — Ajustar a Pagina" },
      { href: "/br/aprender/excel-para-pdf-colunas-cortadas", title: "Excel para PDF Cortando Colunas? Corrija Isso" },
      { href: "/br/aprender/excel-para-pdf-no-mac", title: "Excel para PDF no Mac" },
      { href: "/br/aprender/relatorio-excel-para-pdf", title: "Exportar Relatorios Mensais: Excel para PDF" },
      { href: "/br/aprender/ppt-para-pdf-animacoes", title: "PowerPoint para PDF — O Que Acontece com as Animacoes?" },
      { href: "/br/aprender/ppt-para-pdf-para-imprimir", title: "PowerPoint para PDF para Imprimir" },
      { href: "/br/aprender/ppt-para-pdf-no-iphone", title: "PowerPoint para PDF no iPhone" },
      { href: "/br/aprender/pptx-para-pdf-fontes-faltando", title: "PPTX para PDF: Fontes Faltando — Solucao" },
      { href: "/br/aprender/office-para-pdf-conversor", title: "Conversor de Office para PDF" },
      { href: "/br/aprender/office-para-pdf-manter-formato", title: "Office para PDF — Manter Formato" },
      { href: "/br/aprender/office-para-pdf-no-celular", title: "Office para PDF no Celular" },
      { href: "/br/aprender/melhor-formato-para-enviar-documentos", title: "Melhor Formato para Enviar Documentos (PDF vs DOCX)" },
    ],
  },
  {
    name: "Girar e Organizar PDF",
    articles: [
      { href: "/br/aprender/como-girar-pdf", title: "Como Girar um PDF" },
      { href: "/br/aprender/girar-pdf-no-iphone", title: "Girar PDF no iPhone" },
      { href: "/br/aprender/girar-pdf-digitalizado", title: "Girar um PDF Digitalizado" },
      { href: "/br/aprender/corrigir-pdf-de-cabeca-para-baixo", title: "Corrigir um PDF de Cabeca para Baixo" },
    ],
  },
  {
    name: "Proteger e Desbloquear PDF",
    articles: [
      { href: "/br/aprender/como-proteger-pdf-com-senha", title: "Como Proteger um PDF com Senha" },
      { href: "/br/aprender/melhores-praticas-senha-pdf", title: "Melhores Praticas de Senha para PDF" },
      { href: "/br/aprender/proteger-pdf-antes-de-enviar", title: "Proteger um PDF Antes de Enviar" },
      { href: "/br/aprender/proteger-pdf-no-celular", title: "Proteger um PDF no Celular" },
      { href: "/br/aprender/como-desbloquear-pdf", title: "Como Desbloquear um PDF" },
      { href: "/br/aprender/desbloquear-pdf-senha-esquecida", title: "Desbloquear PDF — Senha Esquecida" },
      { href: "/br/aprender/desbloquear-pdf-para-imprimir", title: "Desbloquear PDF para Imprimir" },
      { href: "/br/aprender/desbloquear-pdf-no-celular", title: "Desbloquear PDF no Celular" },
    ],
  },
  {
    name: "Marca d'Agua em PDF",
    articles: [
      { href: "/br/aprender/como-adicionar-marca-dagua-em-pdf", title: "Como Adicionar uma Marca d'Agua em um PDF" },
      { href: "/br/aprender/marca-dagua-pdf-com-logo", title: "Marca d'Agua em PDF com Logo" },
      { href: "/br/aprender/marca-dagua-pdf-confidencial", title: "Marca d'Agua em PDF: Confidencial" },
      { href: "/br/aprender/marca-dagua-pdf-melhores-praticas", title: "Marca d'Agua em PDF: Melhores Praticas" },
      { href: "/br/aprender/marca-dagua-pdf-no-celular", title: "Marca d'Agua em PDF no Celular" },
    ],
  },
  {
    name: "OCR e Digitalizacao",
    articles: [
      { href: "/br/aprender/o-que-e-ocr", title: "O Que e OCR?" },
      { href: "/br/aprender/ocr-documento-digitalizado", title: "OCR em um Documento Digitalizado" },
      { href: "/br/aprender/ocr-pdf-para-texto-pesquisavel", title: "OCR: PDF para Texto Pesquisavel" },
      { href: "/br/aprender/ocr-pdf-no-celular", title: "OCR em PDF no Celular" },
      { href: "/br/aprender/ocr-texto-manuscrito", title: "OCR de Texto Manuscrito" },
      { href: "/br/aprender/dicas-precisao-ocr", title: "Dicas de Precisao para OCR" },
    ],
  },
  {
    name: "Codigos QR",
    articles: [
      { href: "/br/aprender/como-criar-codigo-qr", title: "Como Criar um Codigo QR" },
      { href: "/br/aprender/tipos-de-codigo-qr-explicados", title: "Tipos de Codigo QR Explicados" },
      { href: "/br/aprender/melhores-praticas-codigo-qr", title: "Melhores Praticas de Codigo QR" },
      { href: "/br/aprender/codigo-qr-para-pdf", title: "Codigo QR para PDF" },
      { href: "/br/aprender/codigo-qr-para-wifi", title: "Codigo QR para WiFi" },
      { href: "/br/aprender/codigo-qr-para-cardapio-de-restaurante", title: "Codigo QR para Cardapio de Restaurante" },
      { href: "/br/aprender/codigo-qr-para-cartao-de-visita", title: "Codigo QR para Cartao de Visita" },
    ],
  },
]

export default function AprenderPage() {
  return (
    <div className="min-h-screen bg-[#F3F4FF]">
      <HeaderBr />
      <main>
        {/* Hero */}
        <section
          className="text-white py-16 relative overflow-hidden"
          style={{
            background: `
              radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
              radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
              radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
              #0E0F1E
            `,
          }}
        >
          <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
            <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
            <rect width="100%" height="100%" filter="url(#heroGrain)" />
          </svg>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
                style={{
                  background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
                  boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
                }}
              >
                <BookOpen className="h-10 w-10 text-[#14D8C4]" />
              </div>
              <h1 className="text-4xl lg:text-5xl font-black mb-4">Aprender</h1>
              <p className="text-xl text-slate-300 mb-4">
                Guias e tutoriais gratuitos para cada tarefa com PDF. Instrucoes passo a passo, dicas e melhores praticas — sem necessidade de cadastro.
              </p>
              <p className="text-sm text-slate-400">{categories.reduce((sum, c) => sum + c.articles.length, 0)} artigos em {categories.length} categorias</p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
            <div className="space-y-12">
              {categories.map((category) => (
                <div key={category.name}>
                  <h2 className="text-2xl font-black text-slate-900 mb-4">{category.name}</h2>
                  <div className="grid gap-2">
                    {category.articles.map((article) => (
                      <Link
                        key={article.href}
                        href={article.href}
                        className="flex items-center justify-between bg-white rounded-xl p-4 border border-gray-200 hover:border-[#14D8C4]/30 hover:bg-[#F0FDFA] transition-all group"
                      >
                        <span className="font-medium text-slate-900 text-sm group-hover:text-[#14D8C4] transition-colors">{article.title}</span>
                        <ArrowRight className="h-4 w-4 text-slate-400 group-hover:text-[#14D8C4] transition-colors flex-shrink-0 ml-3" />
                      </Link>
                    ))}
                  </div>
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
