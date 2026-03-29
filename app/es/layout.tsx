import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PDF.it — Resuelve Cualquier Problema de Documentos al Instante",
  description:
    "Convierte, comprime, une, divide y edita archivos PDF al instante. Herramientas con IA para profesionales. Sin registro.",
  alternates: {
    canonical: "https://pdf.it.com/es",
    languages: {
      "en": "https://pdf.it.com",
      "es": "https://pdf.it.com/es",
    },
  },
}

export default function EsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
