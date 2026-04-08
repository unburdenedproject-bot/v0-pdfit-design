import { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/api/", "/dashboard"],
    },
    sitemap: [
      "https://www.pdf.it.com/sitemap/0.xml",
      "https://www.pdf.it.com/sitemap/1.xml",
      "https://www.pdf.it.com/sitemap/2.xml",
    ],
  }
}
