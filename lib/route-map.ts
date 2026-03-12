// Bidirectional route mapping between English and Spanish pages
const routeMap: Record<string, string> = {
  "/": "/es",
  "/about": "/es/acerca",
  "/contact": "/es/contacto",
  "/pricing": "/es/precios",
  "/privacy-policy": "/es/politica-de-privacidad",
  "/terms-conditions": "/es/terminos-y-condiciones",
  "/tools": "/es/herramientas",
  "/dashboard": "/es/dashboard",
  "/login": "/es/login",
  "/signup": "/es/registro",
  "/signup-required": "/es/registro-requerido",
  "/signup/success": "/es/registro/exito",
  "/auth/error": "/es/auth/error",
  "/auth/confirm": "/es/auth/confirmar",
  "/jpg-to-pdf": "/es/jpg-a-pdf",
  "/png-to-pdf": "/es/png-a-pdf",
  "/pdf-to-jpg": "/es/pdf-a-jpg",
  "/pdf-to-png": "/es/pdf-a-png",
  "/pdf-to-txt": "/es/pdf-a-texto",
  "/pdf-to-word": "/es/pdf-a-word",
  "/pdf-to-excel": "/es/pdf-a-excel",
  "/pdf-to-powerpoint": "/es/pdf-a-powerpoint",
  "/word-to-pdf": "/es/word-a-pdf",
  "/excel-to-pdf": "/es/excel-a-pdf",
  "/powerpoint-to-pdf": "/es/powerpoint-a-pdf",
  "/office-to-pdf": "/es/office-a-pdf",
  "/compress-pdf": "/es/comprimir-pdf",
  "/compress-pdf-fast": "/es/comprimir-pdf-rapido",
  "/compress-pdf-for-attachment": "/es/comprimir-pdf-para-adjunto",
  "/compress-pdf-for-email": "/es/comprimir-pdf-para-email",
  "/compress-pdf-for-upload": "/es/comprimir-pdf-para-subir",
  "/compress-pdf-for-website": "/es/comprimir-pdf-para-web",
  "/compress-pdf-for-whatsapp": "/es/comprimir-pdf-para-whatsapp",
  "/compress-pdf-images": "/es/comprimir-pdf-imagenes",
  "/compress-pdf-without-losing-quality": "/es/comprimir-pdf-sin-perder-calidad",
  "/compress-pdf-to-100kb": "/es/comprimir-pdf-a-100kb",
  "/compress-pdf-to-200kb": "/es/comprimir-pdf-a-200kb",
  "/compress-pdf-to-500kb": "/es/comprimir-pdf-a-500kb",
  "/compress-pdf-to-1mb": "/es/comprimir-pdf-a-1mb",
  "/compress-pdf-to-2mb": "/es/comprimir-pdf-a-2mb",
  "/compress-pdf-to-5mb": "/es/comprimir-pdf-a-5mb",
  "/compress-pdf-to-10mb": "/es/comprimir-pdf-a-10mb",
  "/compress-scanned-pdf": "/es/comprimir-pdf-escaneado",
  "/reduce-pdf-size": "/es/reducir-tamano-pdf",
  "/merge-pdf": "/es/unir-pdf",
  "/split-pdf": "/es/dividir-pdf",
  "/rotate-pdf": "/es/rotar-pdf",
  "/protect-pdf": "/es/proteger-pdf",
  "/unlock-pdf": "/es/desbloquear-pdf",
  "/watermark-pdf": "/es/marca-de-agua-pdf",
  "/flatten-pdf": "/es/aplanar-pdf",
  "/extract-images-from-pdf": "/es/extraer-imagenes-de-pdf",
  "/ocr-scanner": "/es/escaner-ocr",
  "/phone-scan-cleanup": "/es/limpiar-escaneo",
  "/tools/qr-code": "/es/codigo-qr",
  "/upload-ready-pdf": "/es/pdf-listo-para-subir",
  "/pdf-compare": "/es/comparar-pdf",
  "/pdf-redaction": "/es/redaccion-pdf",
  "/esign": "/es/firma-electronica",
  "/workflow-automation": "/es/automatizacion",
  "/table-extraction": "/es/extraccion-de-tablas",
  // Merge cluster
  "/merge-documents-online": "/es/unir-documentos-en-linea",
  "/merge-multiple-pdfs": "/es/unir-multiples-pdfs",
  "/merge-scanned-pdf": "/es/unir-pdf-escaneado",
  "/batch-merge-pdf": "/es/unir-pdf-por-lotes",
  "/combine-pdf-files": "/es/combinar-archivos-pdf",
  "/combine-images-into-pdf": "/es/combinar-imagenes-en-pdf",
  // Split cluster
  "/split-large-pdf": "/es/dividir-pdf-grande",
  "/split-pdf-by-pages": "/es/dividir-pdf-por-paginas",
  "/split-pdf-by-size": "/es/dividir-pdf-por-tamano",
  "/batch-split-pdf": "/es/dividir-pdf-por-lotes",
  "/extract-pages-from-pdf": "/es/extraer-paginas-de-pdf",
  "/remove-pages-from-pdf": "/es/eliminar-paginas-de-pdf",
  // Extract/Data cluster
  "/extract-data-from-pdf": "/es/extraer-datos-de-pdf",
  "/extract-fonts-from-pdf": "/es/extraer-fuentes-de-pdf",
  "/extract-links-from-pdf": "/es/extraer-enlaces-de-pdf",
  "/extract-tables-from-pdf": "/es/extraer-tablas-de-pdf",
  "/extract-text-from-pdf": "/es/extraer-texto-de-pdf",
  "/pdf-table-to-csv": "/es/tabla-pdf-a-csv",
  "/pdf-table-to-excel": "/es/tabla-pdf-a-excel",
  "/scan-pdf-to-text": "/es/escanear-pdf-a-texto",
  // Security cluster
  "/encrypt-pdf": "/es/encriptar-pdf",
  "/decrypt-pdf": "/es/desencriptar-pdf",
  "/remove-password-from-pdf": "/es/eliminar-contrasena-de-pdf",
  "/redact-pdf": "/es/redactar-pdf",
  "/remove-watermark-pdf": "/es/eliminar-marca-de-agua-pdf",
  // Edit/Organization cluster
  "/add-page-to-pdf": "/es/agregar-pagina-a-pdf",
  "/edit-pdf-metadata": "/es/editar-metadatos-pdf",
  "/remove-metadata-pdf": "/es/eliminar-metadatos-pdf",
  "/organize-pdf": "/es/organizar-pdf",
  "/batch-organize-pdf": "/es/organizar-pdf-por-lotes",
  "/reorder-pdf": "/es/reordenar-pdf",
  "/reorder-pdf-pages": "/es/reordenar-paginas-pdf",
  // Conversion cluster
  "/pdf-to-docx": "/es/pdf-a-docx",
  "/pdf-to-xlsx": "/es/pdf-a-xlsx",
  "/pdf-to-google-docs": "/es/pdf-a-google-docs",
  "/pdf-to-google-sheets": "/es/pdf-a-google-sheets",
  "/convert-scanned-pdf": "/es/convertir-pdf-escaneado",
  "/ocr-pdf": "/es/ocr-pdf",
}

// Reverse map: Spanish → English
const reverseMap: Record<string, string> = {}
for (const [en, es] of Object.entries(routeMap)) {
  reverseMap[es] = en
}

/** Given the current pathname, return the equivalent path in the other language. */
export function getAlternateRoute(pathname: string): string {
  // Normalize: strip trailing slash (except for root "/")
  const normalized = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname
  // English → Spanish
  if (routeMap[normalized]) return routeMap[normalized]
  // Spanish → English
  if (reverseMap[normalized]) return reverseMap[normalized]
  // Fallback: if on a Spanish page, go to English home; otherwise go to Spanish home
  return normalized.startsWith("/es") ? "/" : "/es"
}
