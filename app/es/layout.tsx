import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "PDF.it - Las herramientas PDF más rápidas del mundo",
  description:
    "Convierte, comprime, une, divide y edita archivos PDF al instante. Sin registro. Procesamiento ultrarrápido.",
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
