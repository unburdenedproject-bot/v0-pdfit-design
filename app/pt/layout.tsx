import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "OmnisPDF - As ferramentas PDF mais rapidas do mundo",
  description:
    "Converta, comprima, una, divida e edite arquivos PDF instantaneamente. Sem cadastro. Processamento ultrarapido.",
  alternates: {
    canonical: "https://omnispdf.com/pt",
    languages: {
      "en": "https://omnispdf.com",
      "es": "https://omnispdf.com/es",
      "pt": "https://omnispdf.com/pt",
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
