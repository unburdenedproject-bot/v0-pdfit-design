import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Precios — Planes PDF Gratis, Pro, Business y Enterprise | PDF.it",
  description:
    "Compara los planes de PDF.it. Comienza gratis con 10 conversiones por dia. Mejora a Pro, Business o Enterprise para conversiones ilimitadas, procesamiento por lotes, firma electronica y automatizacion. Una mejor alternativa a Adobe Acrobat, iLovePDF y SmallPDF.",
  keywords: [
    "precios PDF",
    "planes PDF",
    "editor PDF gratis online",
    "alternativa a Adobe Acrobat",
    "alternativa a iLovePDF",
    "alternativa a SmallPDF",
    "procesamiento PDF por lotes",
    "automatizacion de flujos PDF",
    "firmar PDF online sin cuenta",
    "herramientas PDF seguras sin almacenamiento",
    "PDF sin registro",
    "reducir tamano PDF para email",
    "extraer tablas de PDF a Excel",
  ],
}

export default function PreciosLayout({ children }: { children: React.ReactNode }) {
  return children
}
