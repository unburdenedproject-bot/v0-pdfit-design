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
  ["/create-resume", "/es/crear-curriculum", "/br/criar-curriculo"],
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
  ["/chat-with-pdf", "/es/chat-con-pdf", "/br/chat-com-pdf"],
  ["/smart-extraction", "/es/extraccion-inteligente", "/br/extracao-inteligente"],
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
  // Learn articles
  ["/learn/best-format-to-send-documents", "/es/aprender/mejor-formato-para-enviar-documentos", "/br/aprender/melhor-formato-para-enviar-documentos"],
  ["/learn/combine-pdfs-for-submission", "/es/aprender/combinar-pdfs-para-envio", "/br/aprender/combinar-pdfs-para-envio"],
  ["/learn/compress-large-pdf", "/es/aprender/comprimir-pdf-grande", "/br/aprender/comprimir-pdf-grande"],
  ["/learn/compress-pdf-for-printing", "/es/aprender/comprimir-pdf-para-imprimir", "/br/aprender/comprimir-pdf-para-imprimir"],
  ["/learn/compress-pdf-with-images", "/es/aprender/comprimir-pdf-con-imagenes", "/br/aprender/comprimir-pdf-com-imagens"],
  ["/learn/compress-pdf-without-quality-loss", "/es/aprender/comprimir-pdf-sin-perder-calidad", "/br/aprender/comprimir-pdf-sem-perder-qualidade"],
  ["/learn/convert-docx-xlsx-pptx-to-pdf", "/es/aprender/convertir-docx-xlsx-pptx-a-pdf", "/br/aprender/converter-docx-xlsx-pptx-para-pdf"],
  ["/learn/convert-excel-to-pdf", "/es/aprender/convertir-excel-a-pdf", "/br/aprender/converter-excel-para-pdf"],
  ["/learn/convert-pdf-to-jpg", "/es/aprender/convertir-pdf-a-jpg", "/br/aprender/converter-pdf-para-jpg"],
  ["/learn/convert-pdf-to-png", "/es/aprender/convertir-pdf-a-png", "/br/aprender/converter-pdf-para-png"],
  ["/learn/convert-pdf-to-png-on-iphone", "/es/aprender/convertir-pdf-a-png-en-iphone", "/br/aprender/converter-pdf-para-png-no-iphone"],
  ["/learn/convert-pdf-to-txt", "/es/aprender/convertir-pdf-a-texto", "/br/aprender/converter-pdf-para-texto"],
  ["/learn/convert-ppt-to-pdf", "/es/aprender/convertir-ppt-a-pdf", "/br/aprender/converter-ppt-para-pdf"],
  ["/learn/convert-resume-word-to-pdf", "/es/aprender/convertir-curriculum-word-a-pdf", "/br/aprender/converter-curriculo-word-para-pdf"],
  ["/learn/convert-scanned-pdf-to-text", "/es/aprender/convertir-pdf-escaneado-a-texto", "/br/aprender/converter-pdf-digitalizado-para-texto"],
  ["/learn/convert-word-to-pdf", "/es/aprender/convertir-word-a-pdf", "/br/aprender/converter-word-para-pdf"],
  ["/learn/copy-text-from-pdf-to-notes", "/es/aprender/copiar-texto-de-pdf-a-notas", "/br/aprender/copiar-texto-de-pdf-para-notas"],
  ["/learn/docx-to-pdf-keep-formatting", "/es/aprender/docx-a-pdf-mantener-formato", "/br/aprender/docx-para-pdf-manter-formato"],
  ["/learn/excel-report-to-pdf", "/es/aprender/reporte-excel-a-pdf", "/br/aprender/relatorio-excel-para-pdf"],
  ["/learn/excel-to-pdf-cut-off-columns", "/es/aprender/excel-a-pdf-columnas-cortadas", "/br/aprender/excel-para-pdf-colunas-cortadas"],
  ["/learn/excel-to-pdf-fit-to-page", "/es/aprender/excel-a-pdf-ajustar-a-pagina", "/br/aprender/excel-para-pdf-ajustar-a-pagina"],
  ["/learn/excel-to-pdf-on-mac", "/es/aprender/excel-a-pdf-en-mac", "/br/aprender/excel-para-pdf-no-mac"],
  ["/learn/extract-pages-from-pdf", "/es/aprender/extraer-paginas-de-pdf", "/br/aprender/extrair-paginas-de-pdf"],
  ["/learn/extract-pages-from-pdf-guide", "/es/aprender/extraer-paginas-de-pdf-guia", "/br/aprender/extrair-paginas-de-pdf-guia"],
  ["/learn/extract-text-from-pdf-on-mobile", "/es/aprender/extraer-texto-de-pdf-en-movil", "/br/aprender/extrair-texto-de-pdf-no-celular"],
  ["/learn/fix-upside-down-pdf", "/es/aprender/arreglar-pdf-al-reves", "/br/aprender/corrigir-pdf-de-cabeca-para-baixo"],
  ["/learn/how-to-add-watermark-to-pdf", "/es/aprender/como-agregar-marca-de-agua-a-pdf", "/br/aprender/como-adicionar-marca-dagua-em-pdf"],
  ["/learn/how-to-compress-a-pdf", "/es/aprender/como-comprimir-un-pdf", "/br/aprender/como-comprimir-um-pdf"],
  ["/learn/how-to-create-qr-code", "/es/aprender/como-crear-codigo-qr", "/br/aprender/como-criar-codigo-qr"],
  ["/learn/how-to-merge-pdf-files", "/es/aprender/como-unir-archivos-pdf", "/br/aprender/como-unir-arquivos-pdf"],
  ["/learn/how-to-password-protect-pdf", "/es/aprender/como-proteger-pdf-con-contrasena", "/br/aprender/como-proteger-pdf-com-senha"],
  ["/learn/how-to-rotate-pdf", "/es/aprender/como-rotar-pdf", "/br/aprender/como-girar-pdf"],
  ["/learn/how-to-split-pdf", "/es/aprender/como-dividir-pdf", "/br/aprender/como-dividir-pdf"],
  ["/learn/how-to-unlock-pdf", "/es/aprender/como-desbloquear-pdf", "/br/aprender/como-desbloquear-pdf"],
  ["/learn/merge-pdf-on-iphone", "/es/aprender/unir-pdf-en-iphone", "/br/aprender/unir-pdf-no-iphone"],
  ["/learn/merge-pdfs-in-order", "/es/aprender/unir-pdfs-en-orden", "/br/aprender/unir-pdfs-em-ordem"],
  ["/learn/merge-scanned-pdfs", "/es/aprender/unir-pdfs-escaneados", "/br/aprender/unir-pdfs-digitalizados"],
  ["/learn/ocr-accuracy-tips", "/es/aprender/consejos-precision-ocr", "/br/aprender/dicas-precisao-ocr"],
  ["/learn/ocr-handwritten-text", "/es/aprender/ocr-texto-manuscrito", "/br/aprender/ocr-texto-manuscrito"],
  ["/learn/ocr-pdf-on-mobile", "/es/aprender/ocr-pdf-en-movil", "/br/aprender/ocr-pdf-no-celular"],
  ["/learn/ocr-pdf-to-searchable-text", "/es/aprender/ocr-pdf-a-texto-buscable", "/br/aprender/ocr-pdf-para-texto-pesquisavel"],
  ["/learn/ocr-scanned-document", "/es/aprender/ocr-documento-escaneado", "/br/aprender/ocr-documento-digitalizado"],
  ["/learn/office-to-pdf-converter", "/es/aprender/office-a-pdf-convertidor", "/br/aprender/office-para-pdf-conversor"],
  ["/learn/office-to-pdf-keep-formatting", "/es/aprender/office-a-pdf-mantener-formato", "/br/aprender/office-para-pdf-manter-formato"],
  ["/learn/office-to-pdf-on-mobile", "/es/aprender/office-a-pdf-en-movil", "/br/aprender/office-para-pdf-no-celular"],
  ["/learn/pdf-password-best-practices", "/es/aprender/mejores-practicas-contrasena-pdf", "/br/aprender/melhores-praticas-senha-pdf"],
  ["/learn/pdf-text-garbled-fix", "/es/aprender/pdf-texto-ilegible-solucion", "/br/aprender/pdf-texto-ilegivel-solucao"],
  ["/learn/pdf-to-jpg-for-powerpoint", "/es/aprender/pdf-a-jpg-para-powerpoint", "/br/aprender/pdf-para-jpg-para-powerpoint"],
  ["/learn/pdf-to-jpg-on-iphone", "/es/aprender/pdf-a-jpg-en-iphone", "/br/aprender/pdf-para-jpg-no-iphone"],
  ["/learn/pdf-to-jpg-vs-png", "/es/aprender/pdf-a-jpg-vs-png", "/br/aprender/pdf-para-jpg-vs-png"],
  ["/learn/pdf-to-png-for-design", "/es/aprender/pdf-a-png-para-diseno", "/br/aprender/pdf-para-png-para-design"],
  ["/learn/ppt-to-pdf-animations", "/es/aprender/ppt-a-pdf-animaciones", "/br/aprender/ppt-para-pdf-animacoes"],
  ["/learn/ppt-to-pdf-for-printing", "/es/aprender/ppt-a-pdf-para-imprimir", "/br/aprender/ppt-para-pdf-para-imprimir"],
  ["/learn/ppt-to-pdf-on-iphone", "/es/aprender/ppt-a-pdf-en-iphone", "/br/aprender/ppt-para-pdf-no-iphone"],
  ["/learn/pptx-to-pdf-missing-fonts", "/es/aprender/pptx-a-pdf-fuentes-faltantes", "/br/aprender/pptx-para-pdf-fontes-faltando"],
  ["/learn/protect-pdf-before-sending", "/es/aprender/proteger-pdf-antes-de-enviar", "/br/aprender/proteger-pdf-antes-de-enviar"],
  ["/learn/protect-pdf-on-mobile", "/es/aprender/proteger-pdf-en-movil", "/br/aprender/proteger-pdf-no-celular"],
  ["/learn/qr-code-best-practices", "/es/aprender/mejores-practicas-codigo-qr", "/br/aprender/melhores-praticas-codigo-qr"],
  ["/learn/qr-code-for-business-card", "/es/aprender/codigo-qr-para-tarjeta-de-presentacion", "/br/aprender/codigo-qr-para-cartao-de-visita"],
  ["/learn/qr-code-for-pdf", "/es/aprender/codigo-qr-para-pdf", "/br/aprender/codigo-qr-para-pdf"],
  ["/learn/qr-code-for-restaurant-menu", "/es/aprender/codigo-qr-para-menu-de-restaurante", "/br/aprender/codigo-qr-para-cardapio-de-restaurante"],
  ["/learn/qr-code-for-wifi", "/es/aprender/codigo-qr-para-wifi", "/br/aprender/codigo-qr-para-wifi"],
  ["/learn/qr-code-types-explained", "/es/aprender/tipos-de-codigo-qr-explicados", "/br/aprender/tipos-de-codigo-qr-explicados"],
  ["/learn/rotate-pdf-on-iphone", "/es/aprender/rotar-pdf-en-iphone", "/br/aprender/girar-pdf-no-iphone"],
  ["/learn/rotate-scanned-pdf", "/es/aprender/rotar-pdf-escaneado", "/br/aprender/girar-pdf-digitalizado"],
  ["/learn/save-pdf-as-png-on-mac", "/es/aprender/guardar-pdf-como-png-en-mac", "/br/aprender/salvar-pdf-como-png-no-mac"],
  ["/learn/save-pdf-page-as-jpg", "/es/aprender/guardar-pagina-pdf-como-jpg", "/br/aprender/salvar-pagina-pdf-como-jpg"],
  ["/learn/split-pdf-for-email", "/es/aprender/dividir-pdf-para-email", "/br/aprender/dividir-pdf-para-email"],
  ["/learn/split-pdf-into-individual-pages", "/es/aprender/dividir-pdf-en-paginas-individuales", "/br/aprender/dividir-pdf-em-paginas-individuais"],
  ["/learn/split-pdf-on-mobile", "/es/aprender/dividir-pdf-en-movil", "/br/aprender/dividir-pdf-no-celular"],
  ["/learn/unlock-pdf-for-printing", "/es/aprender/desbloquear-pdf-para-imprimir", "/br/aprender/desbloquear-pdf-para-imprimir"],
  ["/learn/unlock-pdf-forgot-password", "/es/aprender/desbloquear-pdf-contrasena-olvidada", "/br/aprender/desbloquear-pdf-senha-esquecida"],
  ["/learn/unlock-pdf-on-mobile", "/es/aprender/desbloquear-pdf-en-movil", "/br/aprender/desbloquear-pdf-no-celular"],
  ["/learn/watermark-pdf-best-practices", "/es/aprender/marca-de-agua-pdf-mejores-practicas", "/br/aprender/marca-dagua-pdf-melhores-praticas"],
  ["/learn/watermark-pdf-confidential", "/es/aprender/marca-de-agua-pdf-confidencial", "/br/aprender/marca-dagua-pdf-confidencial"],
  ["/learn/watermark-pdf-on-mobile", "/es/aprender/marca-de-agua-pdf-en-movil", "/br/aprender/marca-dagua-pdf-no-celular"],
  ["/learn/watermark-pdf-with-logo", "/es/aprender/marca-de-agua-pdf-con-logo", "/br/aprender/marca-dagua-pdf-com-logo"],
  ["/learn/what-is-ocr", "/es/aprender/que-es-ocr", "/br/aprender/o-que-e-ocr"],
  ["/learn/why-pdf-to-jpg-looks-blurry", "/es/aprender/por-que-pdf-a-jpg-se-ve-borroso", "/br/aprender/por-que-pdf-para-jpg-fica-borrado"],
  ["/learn/word-to-pdf-common-formatting-fixes", "/es/aprender/word-a-pdf-errores-comunes-de-formato", "/br/aprender/word-para-pdf-erros-comuns-de-formato"],
  ["/learn/word-to-pdf-on-iphone", "/es/aprender/word-a-pdf-en-iphone", "/br/aprender/word-para-pdf-no-iphone"],
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
