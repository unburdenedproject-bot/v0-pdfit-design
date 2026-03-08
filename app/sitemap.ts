import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://pdf.it.com"

  const tools = [
    "compress",
    "merge",
    "split",
    "rotate",
    "protect",
    "unlock",
    "word-to-pdf",
    "excel-to-pdf",
    "powerpoint-to-pdf",
    "watermark",
    "ocr-scanner",
    "qr-code",
  ]

  const toolUrls = tools.map((tool) => ({
    url: `${baseUrl}/tools/${tool}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }))

  return [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.9 },
    ...toolUrls,
  ]
}
