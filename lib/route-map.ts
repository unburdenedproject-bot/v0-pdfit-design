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
  "/compress-pdf-for-email": "/es/comprimir-pdf-para-email",
  "/compress-pdf-to-100kb": "/es/comprimir-pdf-a-100kb",
  "/compress-pdf-to-200kb": "/es/comprimir-pdf-a-200kb",
  "/compress-pdf-to-500kb": "/es/comprimir-pdf-a-500kb",
  "/compress-pdf-to-1mb": "/es/comprimir-pdf-a-1mb",
  "/compress-pdf-to-2mb": "/es/comprimir-pdf-a-2mb",
  "/compress-pdf-to-5mb": "/es/comprimir-pdf-a-5mb",
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
}

// Reverse map: Spanish → English
const reverseMap: Record<string, string> = {}
for (const [en, es] of Object.entries(routeMap)) {
  reverseMap[es] = en
}

/** Given the current pathname, return the equivalent path in the other language. */
export function getAlternateRoute(pathname: string): string {
  // English → Spanish
  if (routeMap[pathname]) return routeMap[pathname]
  // Spanish → English
  if (reverseMap[pathname]) return reverseMap[pathname]
  // Fallback: if on a Spanish page, go to English home; otherwise go to Spanish home
  return pathname.startsWith("/es") ? "/" : "/es"
}
