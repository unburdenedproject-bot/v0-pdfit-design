import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PDF.it — Resolva Qualquer Problema de Documentos Instantaneamente",
  description:
    "Converta, comprima, una, divida e edite arquivos PDF instantaneamente. Ferramentas com IA para profissionais. Sem cadastro.",
  alternates: {
    canonical: "https://pdf.it.com/br",
    languages: {
      "en": "https://pdf.it.com",
      "es": "https://pdf.it.com/es",
      "pt": "https://pdf.it.com/br",
    },
  },
}

export default function PtLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
