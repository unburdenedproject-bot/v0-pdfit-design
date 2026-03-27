import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing — Free, Pro, Business & Enterprise PDF Plans | PDF.it",
  description:
    "Compare PDF.it plans. Start free with 10 conversions per day. Upgrade to Pro, Business, or Enterprise for unlimited conversions, batch processing, eSign, and workflow automation. A better alternative to Adobe Acrobat, iLovePDF, and SmallPDF.",
  keywords: [
    "PDF pricing",
    "PDF plans",
    "free PDF editor online",
    "Adobe Acrobat alternative",
    "iLovePDF alternative",
    "SmallPDF alternative",
    "batch PDF processing online",
    "PDF workflow automation",
    "sign PDF online without account",
    "secure PDF tools no file storage",
    "PDF tools no signup required",
    "reduce PDF file size for email",
    "extract tables from PDF to Excel",
  ],
}

export default function PricingLayout({ children }: { children: React.ReactNode }) {
  return children
}
