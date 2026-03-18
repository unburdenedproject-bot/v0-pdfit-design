import { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://omnispdf.com"

  return [
    // ============================================================
    // ENGLISH PAGES
    // ============================================================

    // Homepage
    { url: baseUrl, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 1 },

    // Static pages
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pricing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tools`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tools-a-z`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // Core tool pages
    { url: `${baseUrl}/merge-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/split-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/compress-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/compress-pdf-to-5mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/compress-pdf-to-2mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/compress-pdf-for-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/rotate-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/protect-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/unlock-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/watermark-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-word`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-to-txt`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/word-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/excel-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/powerpoint-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/office-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/ocr-scanner`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/qr-code`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/extract-images-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/flatten-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/upload-ready-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/phone-scan-cleanup`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-compare`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/pdf-redaction`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/esign`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/workflow-automation`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/table-extraction`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/url-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // Blog
    { url: `${baseUrl}/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/blog/welcome-to-omnispdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog/table-extraction-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/blog/why-three-languages`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/jpg-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/png-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tools/qr-code`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/tools/word-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // SEO cluster pages (compression)
    { url: `${baseUrl}/compress-pdf-to-1mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-to-10mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-to-500kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-to-200kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-to-100kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-for-whatsapp`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-for-upload`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-for-website`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-for-attachment`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-scanned-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-without-losing-quality`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-images`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/compress-pdf-fast`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reduce-pdf-size`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (conversion)
    { url: `${baseUrl}/pdf-to-docx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pdf-to-xlsx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pdf-to-google-docs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pdf-to-google-sheets`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (organization)
    { url: `${baseUrl}/extract-pages-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/remove-pages-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/split-pdf-by-pages`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/split-pdf-by-size`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/add-page-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reorder-pdf-pages`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/combine-pdf-files`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/merge-multiple-pdfs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/merge-scanned-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/merge-documents-online`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/split-large-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/combine-images-into-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/organize-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/reorder-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/batch-merge-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/batch-split-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/batch-organize-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (security)
    { url: `${baseUrl}/remove-password-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/encrypt-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/decrypt-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/redact-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/remove-metadata-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/edit-pdf-metadata`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/remove-watermark-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (data extraction)
    { url: `${baseUrl}/extract-text-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/scan-pdf-to-text`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/convert-scanned-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/extract-tables-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pdf-table-to-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/pdf-table-to-csv`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/extract-fonts-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/extract-links-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/extract-data-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // Learn articles (PDF to JPG)
    { url: `${baseUrl}/learn/convert-pdf-to-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/save-pdf-page-as-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-to-jpg-for-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/why-pdf-to-jpg-looks-blurry`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-to-jpg-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (PDF to PNG)
    { url: `${baseUrl}/learn/convert-pdf-to-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-to-jpg-vs-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/save-pdf-as-png-on-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/convert-pdf-to-png-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-to-png-for-design`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (PDF to TXT)
    { url: `${baseUrl}/learn/convert-pdf-to-txt`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/copy-text-from-pdf-to-notes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-text-garbled-fix`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/convert-scanned-pdf-to-text`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/extract-text-from-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Word to PDF)
    { url: `${baseUrl}/learn/convert-word-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/docx-to-pdf-keep-formatting`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/word-to-pdf-common-formatting-fixes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/convert-resume-word-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/word-to-pdf-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Excel to PDF)
    { url: `${baseUrl}/learn/convert-excel-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/excel-to-pdf-cut-off-columns`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/excel-to-pdf-fit-to-page`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/excel-report-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/excel-to-pdf-on-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (PowerPoint to PDF)
    { url: `${baseUrl}/learn/convert-ppt-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ppt-to-pdf-for-printing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ppt-to-pdf-animations`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pptx-to-pdf-missing-fonts`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ppt-to-pdf-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Office to PDF)
    { url: `${baseUrl}/learn/office-to-pdf-converter`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/convert-docx-xlsx-pptx-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/best-format-to-send-documents`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/office-to-pdf-keep-formatting`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/office-to-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Merge PDF)
    { url: `${baseUrl}/learn/how-to-merge-pdf-files`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/merge-pdfs-in-order`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/merge-scanned-pdfs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/combine-pdfs-for-submission`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/merge-pdf-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Split PDF)
    { url: `${baseUrl}/learn/how-to-split-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/extract-pages-from-pdf-guide`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/extract-pages-from-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/split-pdf-for-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/split-pdf-into-individual-pages`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/split-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Rotate PDF)
    { url: `${baseUrl}/learn/how-to-rotate-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/rotate-pdf-on-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/fix-upside-down-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/rotate-scanned-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Protect PDF)
    { url: `${baseUrl}/learn/how-to-password-protect-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/pdf-password-best-practices`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/protect-pdf-before-sending`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/protect-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Unlock PDF)
    { url: `${baseUrl}/learn/how-to-unlock-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/unlock-pdf-for-printing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/unlock-pdf-forgot-password`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/unlock-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Watermark PDF)
    { url: `${baseUrl}/learn/how-to-add-watermark-to-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/watermark-pdf-confidential`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/watermark-pdf-with-logo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/watermark-pdf-best-practices`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/watermark-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (Compress PDF)
    { url: `${baseUrl}/learn/how-to-compress-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/compress-pdf-without-quality-loss`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/compress-pdf-for-printing`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/compress-large-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/compress-pdf-with-images`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (OCR)
    { url: `${baseUrl}/learn/what-is-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ocr-pdf-to-searchable-text`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ocr-scanned-document`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ocr-accuracy-tips`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ocr-pdf-on-mobile`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/ocr-handwritten-text`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (QR Code)
    { url: `${baseUrl}/learn/how-to-create-qr-code`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-for-business-card`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-for-restaurant-menu`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-for-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-best-practices`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-for-wifi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/learn/qr-code-types-explained`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Legal pages
    { url: `${baseUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/terms-conditions`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },

    // ============================================================
    // SPANISH PAGES (/es)
    // ============================================================

    // Homepage
    { url: `${baseUrl}/es`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },

    // Static pages
    { url: `${baseUrl}/es/acerca`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/contacto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/precios`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/herramientas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/herramientas-a-z`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // Core tool pages
    { url: `${baseUrl}/es/comprimir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/unir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/dividir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/rotar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/comprimir-pdf-para-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/word-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/excel-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/proteger-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/desbloquear-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/marca-de-agua-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/powerpoint-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/office-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-word`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-a-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/escaner-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/extraer-imagenes-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/aplanar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/pdf-listo-para-subir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/limpiar-escaneo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/comparar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/redaccion-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/firma-electronica`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/automatizacion`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/extraccion-de-tablas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/url-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/jpg-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/es/png-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // SEO cluster pages (compression)
    { url: `${baseUrl}/es/comprimir-pdf-a-5mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-2mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-1mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-10mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-500kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-200kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-a-100kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-para-whatsapp`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-para-subir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-para-web`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-para-adjunto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-escaneado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-sin-perder-calidad`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-imagenes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/comprimir-pdf-rapido`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/reducir-tamano-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (conversion)
    { url: `${baseUrl}/es/pdf-a-docx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/pdf-a-xlsx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/pdf-a-google-docs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/pdf-a-google-sheets`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/convertir-pdf-escaneado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (organization)
    { url: `${baseUrl}/es/extraer-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/eliminar-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/dividir-pdf-por-paginas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/dividir-pdf-por-tamano`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/agregar-pagina-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/reordenar-paginas-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/combinar-archivos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/unir-multiples-pdfs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/unir-pdf-escaneado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/unir-documentos-en-linea`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/dividir-pdf-grande`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/combinar-imagenes-en-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/organizar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/reordenar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/unir-pdf-por-lotes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/dividir-pdf-por-lotes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/organizar-pdf-por-lotes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (security)
    { url: `${baseUrl}/es/eliminar-contrasena-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/encriptar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/desencriptar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/redactar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/eliminar-metadatos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/editar-metadatos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/eliminar-marca-de-agua-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (data extraction)
    { url: `${baseUrl}/es/extraer-texto-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/escanear-pdf-a-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/extraer-tablas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/tabla-pdf-a-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/tabla-pdf-a-csv`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/extraer-fuentes-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/extraer-enlaces-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/extraer-datos-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/es/ocr-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // Learn articles (aprender) - PDF to JPG
    { url: `${baseUrl}/es/aprender/convertir-pdf-a-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/guardar-pagina-pdf-como-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pdf-a-jpg-para-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/por-que-pdf-a-jpg-se-ve-borroso`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pdf-a-jpg-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PDF to PNG
    { url: `${baseUrl}/es/aprender/convertir-pdf-a-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pdf-a-jpg-vs-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/guardar-pdf-como-png-en-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/convertir-pdf-a-png-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pdf-a-png-para-diseno`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PDF to TXT
    { url: `${baseUrl}/es/aprender/convertir-pdf-a-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/copiar-texto-de-pdf-a-notas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pdf-texto-ilegible-solucion`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/convertir-pdf-escaneado-a-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/extraer-texto-de-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Word to PDF
    { url: `${baseUrl}/es/aprender/convertir-word-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/docx-a-pdf-mantener-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/word-a-pdf-errores-comunes-de-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/convertir-curriculum-word-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/word-a-pdf-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Excel to PDF
    { url: `${baseUrl}/es/aprender/convertir-excel-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/excel-a-pdf-columnas-cortadas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/excel-a-pdf-ajustar-a-pagina`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/reporte-excel-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/excel-a-pdf-en-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PowerPoint to PDF
    { url: `${baseUrl}/es/aprender/convertir-ppt-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ppt-a-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ppt-a-pdf-animaciones`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/pptx-a-pdf-fuentes-faltantes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ppt-a-pdf-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Office to PDF
    { url: `${baseUrl}/es/aprender/office-a-pdf-convertidor`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/convertir-docx-xlsx-pptx-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/mejor-formato-para-enviar-documentos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/office-a-pdf-mantener-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/office-a-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Merge PDF
    { url: `${baseUrl}/es/aprender/como-unir-archivos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/unir-pdfs-en-orden`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/unir-pdfs-escaneados`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/combinar-pdfs-para-envio`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/unir-pdf-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Split PDF
    { url: `${baseUrl}/es/aprender/como-dividir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/extraer-paginas-de-pdf-guia`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/extraer-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/dividir-pdf-para-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/dividir-pdf-en-paginas-individuales`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/dividir-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Rotate PDF
    { url: `${baseUrl}/es/aprender/como-rotar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/rotar-pdf-en-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/arreglar-pdf-al-reves`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/rotar-pdf-escaneado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Protect PDF
    { url: `${baseUrl}/es/aprender/como-proteger-pdf-con-contrasena`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/mejores-practicas-contrasena-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/proteger-pdf-antes-de-enviar`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/proteger-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Unlock PDF
    { url: `${baseUrl}/es/aprender/como-desbloquear-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/desbloquear-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/desbloquear-pdf-contrasena-olvidada`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/desbloquear-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Watermark PDF
    { url: `${baseUrl}/es/aprender/como-agregar-marca-de-agua-a-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/marca-de-agua-pdf-confidencial`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/marca-de-agua-pdf-con-logo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/marca-de-agua-pdf-mejores-practicas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/marca-de-agua-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Compress PDF
    { url: `${baseUrl}/es/aprender/como-comprimir-un-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/comprimir-pdf-sin-perder-calidad`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/comprimir-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/comprimir-pdf-grande`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/comprimir-pdf-con-imagenes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - OCR
    { url: `${baseUrl}/es/aprender/que-es-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ocr-pdf-a-texto-buscable`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ocr-documento-escaneado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/consejos-precision-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ocr-pdf-en-movil`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/ocr-texto-manuscrito`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - QR Code
    { url: `${baseUrl}/es/aprender/como-crear-codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/codigo-qr-para-tarjeta-de-presentacion`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/codigo-qr-para-menu-de-restaurante`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/codigo-qr-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/mejores-practicas-codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/codigo-qr-para-wifi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/es/aprender/tipos-de-codigo-qr-explicados`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Legal pages
    { url: `${baseUrl}/es/politica-de-privacidad`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/es/terminos-y-condiciones`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },

    // ============================================================
    // BRAZILIAN PORTUGUESE PAGES (/br)
    // ============================================================

    // Homepage
    { url: `${baseUrl}/br`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },

    // Static pages
    { url: `${baseUrl}/br/sobre`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/contato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/precos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/ferramentas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/ferramentas-a-z`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // Core tool pages
    { url: `${baseUrl}/br/comprimir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/unir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/dividir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/girar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/comprimir-pdf-para-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/word-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/excel-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/proteger-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/desbloquear-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/marca-dagua-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/powerpoint-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/office-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-word`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-para-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/scanner-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/extrair-imagens-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/achatar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/pdf-pronto-para-upload`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/limpeza-digitalizacao`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/comparar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/redacao-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/assinatura-eletronica`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/automacao`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/extracao-de-tabelas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/url-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/blog`, lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/jpg-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },
    { url: `${baseUrl}/br/png-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.8 },

    // SEO cluster pages (compression)
    { url: `${baseUrl}/br/comprimir-pdf-para-5mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-2mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-1mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-10mb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-500kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-200kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-100kb`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-whatsapp`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-upload`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-web`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-para-anexo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-digitalizado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-sem-perder-qualidade`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-imagens`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/comprimir-pdf-rapido`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/reduzir-tamanho-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (conversion)
    { url: `${baseUrl}/br/pdf-para-docx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/pdf-para-xlsx`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/pdf-para-google-docs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/pdf-para-google-sheets`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/converter-pdf-digitalizado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (organization)
    { url: `${baseUrl}/br/extrair-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/remover-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/dividir-pdf-por-paginas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/dividir-pdf-por-tamanho`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/adicionar-pagina-ao-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/reordenar-paginas-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/combinar-arquivos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/unir-multiplos-pdfs`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/unir-pdf-digitalizado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/unir-documentos-online`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/dividir-pdf-grande`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/combinar-imagens-em-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/organizar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/reordenar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/unir-pdf-em-lote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/dividir-pdf-em-lote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/organizar-pdf-em-lote`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (security)
    { url: `${baseUrl}/br/remover-senha-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/criptografar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/descriptografar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/redigir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/remover-metadados-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/editar-metadados-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/remover-marca-dagua-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // SEO cluster pages (data extraction)
    { url: `${baseUrl}/br/extrair-texto-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/digitalizar-pdf-para-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/extrair-tabelas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/tabela-pdf-para-excel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/tabela-pdf-para-csv`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/extrair-fontes-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/extrair-links-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/extrair-dados-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: `${baseUrl}/br/ocr-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },

    // Learn articles (aprender) - PDF to JPG
    { url: `${baseUrl}/br/aprender/converter-pdf-para-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/salvar-pagina-pdf-como-jpg`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pdf-para-jpg-para-powerpoint`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/por-que-pdf-para-jpg-fica-borrado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pdf-para-jpg-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PDF to PNG
    { url: `${baseUrl}/br/aprender/converter-pdf-para-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pdf-para-jpg-vs-png`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/salvar-pdf-como-png-no-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/converter-pdf-para-png-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pdf-para-png-para-design`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PDF to TXT
    { url: `${baseUrl}/br/aprender/converter-pdf-para-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/copiar-texto-de-pdf-para-notas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pdf-texto-ilegivel-solucao`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/converter-pdf-digitalizado-para-texto`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/extrair-texto-de-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Word to PDF
    { url: `${baseUrl}/br/aprender/converter-word-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/docx-para-pdf-manter-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/word-para-pdf-erros-comuns-de-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/converter-curriculo-word-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/word-para-pdf-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Excel to PDF
    { url: `${baseUrl}/br/aprender/converter-excel-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/excel-para-pdf-colunas-cortadas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/excel-para-pdf-ajustar-a-pagina`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/relatorio-excel-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/excel-para-pdf-no-mac`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - PowerPoint to PDF
    { url: `${baseUrl}/br/aprender/converter-ppt-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ppt-para-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ppt-para-pdf-animacoes`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/pptx-para-pdf-fontes-faltando`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ppt-para-pdf-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Office to PDF
    { url: `${baseUrl}/br/aprender/office-para-pdf-conversor`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/converter-docx-xlsx-pptx-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/melhor-formato-para-enviar-documentos`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/office-para-pdf-manter-formato`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/office-para-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Merge PDF
    { url: `${baseUrl}/br/aprender/como-unir-arquivos-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/unir-pdfs-em-ordem`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/unir-pdfs-digitalizados`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/combinar-pdfs-para-envio`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/unir-pdf-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Split PDF
    { url: `${baseUrl}/br/aprender/como-dividir-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/extrair-paginas-de-pdf-guia`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/extrair-paginas-de-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/dividir-pdf-para-email`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/dividir-pdf-em-paginas-individuais`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/dividir-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Rotate PDF
    { url: `${baseUrl}/br/aprender/como-girar-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/girar-pdf-no-iphone`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/corrigir-pdf-de-cabeca-para-baixo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/girar-pdf-digitalizado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Protect PDF
    { url: `${baseUrl}/br/aprender/como-proteger-pdf-com-senha`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/melhores-praticas-senha-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/proteger-pdf-antes-de-enviar`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/proteger-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Unlock PDF
    { url: `${baseUrl}/br/aprender/como-desbloquear-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/desbloquear-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/desbloquear-pdf-senha-esquecida`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/desbloquear-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Watermark PDF
    { url: `${baseUrl}/br/aprender/como-adicionar-marca-dagua-em-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/marca-dagua-pdf-confidencial`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/marca-dagua-pdf-com-logo`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/marca-dagua-pdf-melhores-praticas`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/marca-dagua-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - Compress PDF
    { url: `${baseUrl}/br/aprender/como-comprimir-um-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/comprimir-pdf-sem-perder-qualidade`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/comprimir-pdf-para-imprimir`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/comprimir-pdf-grande`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/comprimir-pdf-com-imagens`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - OCR
    { url: `${baseUrl}/br/aprender/o-que-e-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ocr-pdf-para-texto-pesquisavel`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ocr-documento-digitalizado`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/dicas-precisao-ocr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ocr-pdf-no-celular`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/ocr-texto-manuscrito`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Learn articles (aprender) - QR Code
    { url: `${baseUrl}/br/aprender/como-criar-codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/codigo-qr-para-cartao-de-visita`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/codigo-qr-para-cardapio-de-restaurante`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/codigo-qr-para-pdf`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/melhores-praticas-codigo-qr`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/codigo-qr-para-wifi`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },
    { url: `${baseUrl}/br/aprender/tipos-de-codigo-qr-explicados`, lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.6 },

    // Legal pages
    { url: `${baseUrl}/br/politica-de-privacidade`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
    { url: `${baseUrl}/br/termos-e-condicoes`, lastModified: new Date(), changeFrequency: "yearly" as const, priority: 0.3 },
  ]
}
