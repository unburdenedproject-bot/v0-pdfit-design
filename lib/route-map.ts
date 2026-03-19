// Trilingual route mapping: English ↔ Spanish ↔ Portuguese
// Each entry maps [English, Spanish, Portuguese]
const routes: [string, string, string][] = [
  // Static pages
  ["/", "/es", "/br"],
  ["/about", "/es/acerca", "/br/sobre"],
  ["/contact", "/es/contacto", "/br/contato"],
  ["/pricing", "/es/precios", "/br/precos"],
  ["/privacy-policy", "/es/politica-de-privacidad", "/br/politica-de-privacidade"],
  ["/terms-conditions", "/es/terminos-y-condiciones", "/br/termos-e-condicoes"],
  ["/blog", "/es/blog", "/br/blog"],
  ["/ats-optimizer", "/es/optimizador-ats", "/br/otimizador-ats"],
  ["/tools", "/es/herramientas", "/br/ferramentas"],
  ["/tools-a-z", "/es/herramientas-a-z", "/br/ferramentas-a-z"],
  ["/dashboard", "/es/dashboard", "/br/painel"],
  ["/login", "/es/login", "/br/login"],
  ["/signup", "/es/registro", "/br/cadastro"],
  ["/signup-required", "/es/registro-requerido", "/br/cadastro-necessario"],
  ["/signup/success", "/es/registro/exito", "/br/cadastro/sucesso"],
  ["/auth/error", "/es/auth/error", "/br/auth/erro"],
  ["/auth/confirm", "/es/auth/confirmar", "/br/auth/confirmar"],
  // Core tools
  ["/jpg-to-pdf", "/es/jpg-a-pdf", "/br/jpg-para-pdf"],
  ["/png-to-pdf", "/es/png-a-pdf", "/br/png-para-pdf"],
  ["/pdf-to-jpg", "/es/pdf-a-jpg", "/br/pdf-para-jpg"],
  ["/pdf-to-png", "/es/pdf-a-png", "/br/pdf-para-png"],
  ["/pdf-to-txt", "/es/pdf-a-texto", "/br/pdf-para-texto"],
  ["/pdf-to-word", "/es/pdf-a-word", "/br/pdf-para-word"],
  ["/pdf-to-excel", "/es/pdf-a-excel", "/br/pdf-para-excel"],
  ["/pdf-to-powerpoint", "/es/pdf-a-powerpoint", "/br/pdf-para-powerpoint"],
  ["/word-to-pdf", "/es/word-a-pdf", "/br/word-para-pdf"],
  ["/excel-to-pdf", "/es/excel-a-pdf", "/br/excel-para-pdf"],
  ["/powerpoint-to-pdf", "/es/powerpoint-a-pdf", "/br/powerpoint-para-pdf"],
  ["/office-to-pdf", "/es/office-a-pdf", "/br/office-para-pdf"],
  ["/compress-pdf", "/es/comprimir-pdf", "/br/comprimir-pdf"],
  ["/compress-pdf-for-email", "/es/comprimir-pdf-para-email", "/br/comprimir-pdf-para-email"],
  ["/merge-pdf", "/es/unir-pdf", "/br/unir-pdf"],
  ["/split-pdf", "/es/dividir-pdf", "/br/dividir-pdf"],
  ["/rotate-pdf", "/es/rotar-pdf", "/br/girar-pdf"],
  ["/protect-pdf", "/es/proteger-pdf", "/br/proteger-pdf"],
  ["/unlock-pdf", "/es/desbloquear-pdf", "/br/desbloquear-pdf"],
  ["/watermark-pdf", "/es/marca-de-agua-pdf", "/br/marca-dagua-pdf"],
  ["/flatten-pdf", "/es/aplanar-pdf", "/br/achatar-pdf"],
  ["/extract-images-from-pdf", "/es/extraer-imagenes-de-pdf", "/br/extrair-imagens-de-pdf"],
  ["/ocr-scanner", "/es/escaner-ocr", "/br/scanner-ocr"],
  ["/phone-scan-cleanup", "/es/limpiar-escaneo", "/br/limpeza-digitalizacao"],
  ["/tools/qr-code", "/es/codigo-qr", "/br/codigo-qr"],
  ["/upload-ready-pdf", "/es/pdf-listo-para-subir", "/br/pdf-pronto-para-upload"],
  ["/pdf-compare", "/es/comparar-pdf", "/br/comparar-pdf"],
  ["/pdf-redaction", "/es/redaccion-pdf", "/br/redacao-pdf"],
  ["/esign", "/es/firma-electronica", "/br/assinatura-eletronica"],
  ["/workflow-automation", "/es/automatizacion", "/br/automacao"],
  ["/table-extraction", "/es/extraccion-de-tablas", "/br/extracao-de-tabelas"],
  ["/url-to-pdf", "/es/url-a-pdf", "/br/url-para-pdf"],
  // Compression cluster
  ["/compress-pdf-fast", "/es/comprimir-pdf-rapido", "/br/comprimir-pdf-rapido"],
  ["/compress-pdf-for-attachment", "/es/comprimir-pdf-para-adjunto", "/br/comprimir-pdf-para-anexo"],
  ["/compress-pdf-for-upload", "/es/comprimir-pdf-para-subir", "/br/comprimir-pdf-para-upload"],
  ["/compress-pdf-for-website", "/es/comprimir-pdf-para-web", "/br/comprimir-pdf-para-web"],
  ["/compress-pdf-for-whatsapp", "/es/comprimir-pdf-para-whatsapp", "/br/comprimir-pdf-para-whatsapp"],
  ["/compress-pdf-images", "/es/comprimir-pdf-imagenes", "/br/comprimir-pdf-imagens"],
  ["/compress-pdf-without-losing-quality", "/es/comprimir-pdf-sin-perder-calidad", "/br/comprimir-pdf-sem-perder-qualidade"],
  ["/compress-pdf-to-100kb", "/es/comprimir-pdf-a-100kb", "/br/comprimir-pdf-para-100kb"],
  ["/compress-pdf-to-200kb", "/es/comprimir-pdf-a-200kb", "/br/comprimir-pdf-para-200kb"],
  ["/compress-pdf-to-500kb", "/es/comprimir-pdf-a-500kb", "/br/comprimir-pdf-para-500kb"],
  ["/compress-pdf-to-1mb", "/es/comprimir-pdf-a-1mb", "/br/comprimir-pdf-para-1mb"],
  ["/compress-pdf-to-2mb", "/es/comprimir-pdf-a-2mb", "/br/comprimir-pdf-para-2mb"],
  ["/compress-pdf-to-5mb", "/es/comprimir-pdf-a-5mb", "/br/comprimir-pdf-para-5mb"],
  ["/compress-pdf-to-10mb", "/es/comprimir-pdf-a-10mb", "/br/comprimir-pdf-para-10mb"],
  ["/compress-scanned-pdf", "/es/comprimir-pdf-escaneado", "/br/comprimir-pdf-digitalizado"],
  ["/reduce-pdf-size", "/es/reducir-tamano-pdf", "/br/reduzir-tamanho-pdf"],
  // Merge cluster
  ["/merge-documents-online", "/es/unir-documentos-en-linea", "/br/unir-documentos-online"],
  ["/merge-multiple-pdfs", "/es/unir-multiples-pdfs", "/br/unir-multiplos-pdfs"],
  ["/merge-scanned-pdf", "/es/unir-pdf-escaneado", "/br/unir-pdf-digitalizado"],
  ["/batch-merge-pdf", "/es/unir-pdf-por-lotes", "/br/unir-pdf-em-lote"],
  ["/combine-pdf-files", "/es/combinar-archivos-pdf", "/br/combinar-arquivos-pdf"],
  ["/combine-images-into-pdf", "/es/combinar-imagenes-en-pdf", "/br/combinar-imagens-em-pdf"],
  // Split cluster
  ["/split-large-pdf", "/es/dividir-pdf-grande", "/br/dividir-pdf-grande"],
  ["/split-pdf-by-pages", "/es/dividir-pdf-por-paginas", "/br/dividir-pdf-por-paginas"],
  ["/split-pdf-by-size", "/es/dividir-pdf-por-tamano", "/br/dividir-pdf-por-tamanho"],
  ["/batch-split-pdf", "/es/dividir-pdf-por-lotes", "/br/dividir-pdf-em-lote"],
  ["/extract-pages-from-pdf", "/es/extraer-paginas-de-pdf", "/br/extrair-paginas-de-pdf"],
  ["/remove-pages-from-pdf", "/es/eliminar-paginas-de-pdf", "/br/remover-paginas-de-pdf"],
  // Extract/Data cluster
  ["/extract-data-from-pdf", "/es/extraer-datos-de-pdf", "/br/extrair-dados-de-pdf"],
  ["/extract-fonts-from-pdf", "/es/extraer-fuentes-de-pdf", "/br/extrair-fontes-de-pdf"],
  ["/extract-links-from-pdf", "/es/extraer-enlaces-de-pdf", "/br/extrair-links-de-pdf"],
  ["/extract-tables-from-pdf", "/es/extraer-tablas-de-pdf", "/br/extrair-tabelas-de-pdf"],
  ["/extract-text-from-pdf", "/es/extraer-texto-de-pdf", "/br/extrair-texto-de-pdf"],
  ["/pdf-table-to-csv", "/es/tabla-pdf-a-csv", "/br/tabela-pdf-para-csv"],
  ["/pdf-table-to-excel", "/es/tabla-pdf-a-excel", "/br/tabela-pdf-para-excel"],
  ["/scan-pdf-to-text", "/es/escanear-pdf-a-texto", "/br/digitalizar-pdf-para-texto"],
  // Security cluster
  ["/encrypt-pdf", "/es/encriptar-pdf", "/br/criptografar-pdf"],
  ["/decrypt-pdf", "/es/desencriptar-pdf", "/br/descriptografar-pdf"],
  ["/remove-password-from-pdf", "/es/eliminar-contrasena-de-pdf", "/br/remover-senha-de-pdf"],
  ["/redact-pdf", "/es/redactar-pdf", "/br/redigir-pdf"],
  ["/remove-watermark-pdf", "/es/eliminar-marca-de-agua-pdf", "/br/remover-marca-dagua-pdf"],
  // Edit/Organization cluster
  ["/add-page-to-pdf", "/es/agregar-pagina-a-pdf", "/br/adicionar-pagina-ao-pdf"],
  ["/edit-pdf-metadata", "/es/editar-metadatos-pdf", "/br/editar-metadados-pdf"],
  ["/remove-metadata-pdf", "/es/eliminar-metadatos-pdf", "/br/remover-metadados-pdf"],
  ["/organize-pdf", "/es/organizar-pdf", "/br/organizar-pdf"],
  ["/batch-organize-pdf", "/es/organizar-pdf-por-lotes", "/br/organizar-pdf-em-lote"],
  ["/reorder-pdf", "/es/reordenar-pdf", "/br/reordenar-pdf"],
  ["/reorder-pdf-pages", "/es/reordenar-paginas-pdf", "/br/reordenar-paginas-pdf"],
  // Conversion cluster
  ["/pdf-to-docx", "/es/pdf-a-docx", "/br/pdf-para-docx"],
  ["/pdf-to-xlsx", "/es/pdf-a-xlsx", "/br/pdf-para-xlsx"],
  ["/pdf-to-google-docs", "/es/pdf-a-google-docs", "/br/pdf-para-google-docs"],
  ["/pdf-to-google-sheets", "/es/pdf-a-google-sheets", "/br/pdf-para-google-sheets"],
  ["/convert-scanned-pdf", "/es/convertir-pdf-escaneado", "/br/converter-pdf-digitalizado"],
  ["/ocr-pdf", "/es/ocr-pdf", "/br/ocr-pdf"],
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
    if (normalized.startsWith("/br")) return route[0] // PT → EN
    if (normalized.startsWith("/es")) return route[0] // ES → EN
    return route[1] // EN → ES (default)
  }

  // Fallback
  if (targetLang === "en") return "/"
  if (targetLang === "es") return "/es"
  if (targetLang === "pt") return "/br"
  if (normalized.startsWith("/br")) return "/"
  if (normalized.startsWith("/es")) return "/"
  return "/es"
}
