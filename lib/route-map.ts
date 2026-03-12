// Trilingual route mapping: English ↔ Spanish ↔ Portuguese
// Each entry maps [English, Spanish, Portuguese]
const routes: [string, string, string][] = [
  // Static pages
  ["/", "/es", "/pt"],
  ["/about", "/es/acerca", "/pt/sobre"],
  ["/contact", "/es/contacto", "/pt/contato"],
  ["/pricing", "/es/precios", "/pt/precos"],
  ["/privacy-policy", "/es/politica-de-privacidad", "/pt/politica-de-privacidade"],
  ["/terms-conditions", "/es/terminos-y-condiciones", "/pt/termos-e-condicoes"],
  ["/tools", "/es/herramientas", "/pt/ferramentas"],
  ["/dashboard", "/es/dashboard", "/pt/painel"],
  ["/login", "/es/login", "/pt/login"],
  ["/signup", "/es/registro", "/pt/cadastro"],
  ["/signup-required", "/es/registro-requerido", "/pt/cadastro-necessario"],
  ["/signup/success", "/es/registro/exito", "/pt/cadastro/sucesso"],
  ["/auth/error", "/es/auth/error", "/pt/auth/erro"],
  ["/auth/confirm", "/es/auth/confirmar", "/pt/auth/confirmar"],
  // Core tools
  ["/jpg-to-pdf", "/es/jpg-a-pdf", "/pt/jpg-para-pdf"],
  ["/png-to-pdf", "/es/png-a-pdf", "/pt/png-para-pdf"],
  ["/pdf-to-jpg", "/es/pdf-a-jpg", "/pt/pdf-para-jpg"],
  ["/pdf-to-png", "/es/pdf-a-png", "/pt/pdf-para-png"],
  ["/pdf-to-txt", "/es/pdf-a-texto", "/pt/pdf-para-texto"],
  ["/pdf-to-word", "/es/pdf-a-word", "/pt/pdf-para-word"],
  ["/pdf-to-excel", "/es/pdf-a-excel", "/pt/pdf-para-excel"],
  ["/pdf-to-powerpoint", "/es/pdf-a-powerpoint", "/pt/pdf-para-powerpoint"],
  ["/word-to-pdf", "/es/word-a-pdf", "/pt/word-para-pdf"],
  ["/excel-to-pdf", "/es/excel-a-pdf", "/pt/excel-para-pdf"],
  ["/powerpoint-to-pdf", "/es/powerpoint-a-pdf", "/pt/powerpoint-para-pdf"],
  ["/office-to-pdf", "/es/office-a-pdf", "/pt/office-para-pdf"],
  ["/compress-pdf", "/es/comprimir-pdf", "/pt/comprimir-pdf"],
  ["/compress-pdf-for-email", "/es/comprimir-pdf-para-email", "/pt/comprimir-pdf-para-email"],
  ["/merge-pdf", "/es/unir-pdf", "/pt/unir-pdf"],
  ["/split-pdf", "/es/dividir-pdf", "/pt/dividir-pdf"],
  ["/rotate-pdf", "/es/rotar-pdf", "/pt/girar-pdf"],
  ["/protect-pdf", "/es/proteger-pdf", "/pt/proteger-pdf"],
  ["/unlock-pdf", "/es/desbloquear-pdf", "/pt/desbloquear-pdf"],
  ["/watermark-pdf", "/es/marca-de-agua-pdf", "/pt/marca-dagua-pdf"],
  ["/flatten-pdf", "/es/aplanar-pdf", "/pt/achatar-pdf"],
  ["/extract-images-from-pdf", "/es/extraer-imagenes-de-pdf", "/pt/extrair-imagens-de-pdf"],
  ["/ocr-scanner", "/es/escaner-ocr", "/pt/scanner-ocr"],
  ["/phone-scan-cleanup", "/es/limpiar-escaneo", "/pt/limpeza-digitalizacao"],
  ["/tools/qr-code", "/es/codigo-qr", "/pt/codigo-qr"],
  ["/upload-ready-pdf", "/es/pdf-listo-para-subir", "/pt/pdf-pronto-para-upload"],
  ["/pdf-compare", "/es/comparar-pdf", "/pt/comparar-pdf"],
  ["/pdf-redaction", "/es/redaccion-pdf", "/pt/redacao-pdf"],
  ["/esign", "/es/firma-electronica", "/pt/assinatura-eletronica"],
  ["/workflow-automation", "/es/automatizacion", "/pt/automacao"],
  ["/table-extraction", "/es/extraccion-de-tablas", "/pt/extracao-de-tabelas"],
  // Compression cluster
  ["/compress-pdf-fast", "/es/comprimir-pdf-rapido", "/pt/comprimir-pdf-rapido"],
  ["/compress-pdf-for-attachment", "/es/comprimir-pdf-para-adjunto", "/pt/comprimir-pdf-para-anexo"],
  ["/compress-pdf-for-upload", "/es/comprimir-pdf-para-subir", "/pt/comprimir-pdf-para-upload"],
  ["/compress-pdf-for-website", "/es/comprimir-pdf-para-web", "/pt/comprimir-pdf-para-web"],
  ["/compress-pdf-for-whatsapp", "/es/comprimir-pdf-para-whatsapp", "/pt/comprimir-pdf-para-whatsapp"],
  ["/compress-pdf-images", "/es/comprimir-pdf-imagenes", "/pt/comprimir-pdf-imagens"],
  ["/compress-pdf-without-losing-quality", "/es/comprimir-pdf-sin-perder-calidad", "/pt/comprimir-pdf-sem-perder-qualidade"],
  ["/compress-pdf-to-100kb", "/es/comprimir-pdf-a-100kb", "/pt/comprimir-pdf-para-100kb"],
  ["/compress-pdf-to-200kb", "/es/comprimir-pdf-a-200kb", "/pt/comprimir-pdf-para-200kb"],
  ["/compress-pdf-to-500kb", "/es/comprimir-pdf-a-500kb", "/pt/comprimir-pdf-para-500kb"],
  ["/compress-pdf-to-1mb", "/es/comprimir-pdf-a-1mb", "/pt/comprimir-pdf-para-1mb"],
  ["/compress-pdf-to-2mb", "/es/comprimir-pdf-a-2mb", "/pt/comprimir-pdf-para-2mb"],
  ["/compress-pdf-to-5mb", "/es/comprimir-pdf-a-5mb", "/pt/comprimir-pdf-para-5mb"],
  ["/compress-pdf-to-10mb", "/es/comprimir-pdf-a-10mb", "/pt/comprimir-pdf-para-10mb"],
  ["/compress-scanned-pdf", "/es/comprimir-pdf-escaneado", "/pt/comprimir-pdf-digitalizado"],
  ["/reduce-pdf-size", "/es/reducir-tamano-pdf", "/pt/reduzir-tamanho-pdf"],
  // Merge cluster
  ["/merge-documents-online", "/es/unir-documentos-en-linea", "/pt/unir-documentos-online"],
  ["/merge-multiple-pdfs", "/es/unir-multiples-pdfs", "/pt/unir-multiplos-pdfs"],
  ["/merge-scanned-pdf", "/es/unir-pdf-escaneado", "/pt/unir-pdf-digitalizado"],
  ["/batch-merge-pdf", "/es/unir-pdf-por-lotes", "/pt/unir-pdf-em-lote"],
  ["/combine-pdf-files", "/es/combinar-archivos-pdf", "/pt/combinar-arquivos-pdf"],
  ["/combine-images-into-pdf", "/es/combinar-imagenes-en-pdf", "/pt/combinar-imagens-em-pdf"],
  // Split cluster
  ["/split-large-pdf", "/es/dividir-pdf-grande", "/pt/dividir-pdf-grande"],
  ["/split-pdf-by-pages", "/es/dividir-pdf-por-paginas", "/pt/dividir-pdf-por-paginas"],
  ["/split-pdf-by-size", "/es/dividir-pdf-por-tamano", "/pt/dividir-pdf-por-tamanho"],
  ["/batch-split-pdf", "/es/dividir-pdf-por-lotes", "/pt/dividir-pdf-em-lote"],
  ["/extract-pages-from-pdf", "/es/extraer-paginas-de-pdf", "/pt/extrair-paginas-de-pdf"],
  ["/remove-pages-from-pdf", "/es/eliminar-paginas-de-pdf", "/pt/remover-paginas-de-pdf"],
  // Extract/Data cluster
  ["/extract-data-from-pdf", "/es/extraer-datos-de-pdf", "/pt/extrair-dados-de-pdf"],
  ["/extract-fonts-from-pdf", "/es/extraer-fuentes-de-pdf", "/pt/extrair-fontes-de-pdf"],
  ["/extract-links-from-pdf", "/es/extraer-enlaces-de-pdf", "/pt/extrair-links-de-pdf"],
  ["/extract-tables-from-pdf", "/es/extraer-tablas-de-pdf", "/pt/extrair-tabelas-de-pdf"],
  ["/extract-text-from-pdf", "/es/extraer-texto-de-pdf", "/pt/extrair-texto-de-pdf"],
  ["/pdf-table-to-csv", "/es/tabla-pdf-a-csv", "/pt/tabela-pdf-para-csv"],
  ["/pdf-table-to-excel", "/es/tabla-pdf-a-excel", "/pt/tabela-pdf-para-excel"],
  ["/scan-pdf-to-text", "/es/escanear-pdf-a-texto", "/pt/digitalizar-pdf-para-texto"],
  // Security cluster
  ["/encrypt-pdf", "/es/encriptar-pdf", "/pt/criptografar-pdf"],
  ["/decrypt-pdf", "/es/desencriptar-pdf", "/pt/descriptografar-pdf"],
  ["/remove-password-from-pdf", "/es/eliminar-contrasena-de-pdf", "/pt/remover-senha-de-pdf"],
  ["/redact-pdf", "/es/redactar-pdf", "/pt/redigir-pdf"],
  ["/remove-watermark-pdf", "/es/eliminar-marca-de-agua-pdf", "/pt/remover-marca-dagua-pdf"],
  // Edit/Organization cluster
  ["/add-page-to-pdf", "/es/agregar-pagina-a-pdf", "/pt/adicionar-pagina-ao-pdf"],
  ["/edit-pdf-metadata", "/es/editar-metadatos-pdf", "/pt/editar-metadados-pdf"],
  ["/remove-metadata-pdf", "/es/eliminar-metadatos-pdf", "/pt/remover-metadados-pdf"],
  ["/organize-pdf", "/es/organizar-pdf", "/pt/organizar-pdf"],
  ["/batch-organize-pdf", "/es/organizar-pdf-por-lotes", "/pt/organizar-pdf-em-lote"],
  ["/reorder-pdf", "/es/reordenar-pdf", "/pt/reordenar-pdf"],
  ["/reorder-pdf-pages", "/es/reordenar-paginas-pdf", "/pt/reordenar-paginas-pdf"],
  // Conversion cluster
  ["/pdf-to-docx", "/es/pdf-a-docx", "/pt/pdf-para-docx"],
  ["/pdf-to-xlsx", "/es/pdf-a-xlsx", "/pt/pdf-para-xlsx"],
  ["/pdf-to-google-docs", "/es/pdf-a-google-docs", "/pt/pdf-para-google-docs"],
  ["/pdf-to-google-sheets", "/es/pdf-a-google-sheets", "/pt/pdf-para-google-sheets"],
  ["/convert-scanned-pdf", "/es/convertir-pdf-escaneado", "/pt/converter-pdf-digitalizado"],
  ["/ocr-pdf", "/es/ocr-pdf", "/pt/ocr-pdf"],
]

// Build lookup maps: path → [en, es, pt]
const pathToRoute: Record<string, [string, string, string]> = {}
for (const route of routes) {
  for (const path of route) {
    pathToRoute[path] = route
  }
}

/** Given the current pathname, return the equivalent path in the target language. */
export function getAlternateRoute(pathname: string, targetLang?: "en" | "es" | "pt"): string {
  // Normalize: strip trailing slash (except for root "/")
  const normalized = pathname.length > 1 && pathname.endsWith("/")
    ? pathname.slice(0, -1)
    : pathname

  const route = pathToRoute[normalized]

  if (route) {
    if (targetLang === "en") return route[0]
    if (targetLang === "es") return route[1]
    if (targetLang === "pt") return route[2]

    // Auto-detect: cycle to next language
    if (normalized.startsWith("/pt")) return route[0] // PT → EN
    if (normalized.startsWith("/es")) return route[0] // ES → EN
    return route[1] // EN → ES (default)
  }

  // Fallback
  if (targetLang === "en") return "/"
  if (targetLang === "es") return "/es"
  if (targetLang === "pt") return "/pt"
  if (normalized.startsWith("/pt")) return "/"
  if (normalized.startsWith("/es")) return "/"
  return "/es"
}
