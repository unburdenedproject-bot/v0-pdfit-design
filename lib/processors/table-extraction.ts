import { readFile } from "fs/promises"
import { logger } from "@/lib/logger"

interface TextSegment {
  startIndex?: number | string
  endIndex?: number | string
}

interface Layout {
  textAnchor?: {
    textSegments?: TextSegment[]
  }
}

interface Cell {
  layout: Layout
}

interface TableRow {
  cells?: Cell[]
}

interface Table {
  headerRows?: TableRow[]
  bodyRows?: TableRow[]
}

interface Page {
  pageNumber?: number
  tables?: Table[]
}

interface DocumentAIDocument {
  pages?: Page[]
  text?: string
}

interface ExtractedTable {
  pageNumber: number
  headerRows: string[][]
  bodyRows: string[][]
}

function extractTextFromLayout(layout: Layout, fullText: string): string {
  if (!layout || !layout.textAnchor || !layout.textAnchor.textSegments) {
    return ""
  }
  let text = ""
  for (const segment of layout.textAnchor.textSegments) {
    const startIndex = Number(segment.startIndex || 0)
    const endIndex = Number(segment.endIndex || 0)
    text += fullText.substring(startIndex, endIndex)
  }
  return text
}

async function getAccessToken(clientEmail: string, privateKey: string): Promise<string> {
  const crypto = await import("crypto")

  const now = Math.floor(Date.now() / 1000)
  const header = { alg: "RS256", typ: "JWT" }
  const payload = {
    iss: clientEmail,
    scope: "https://www.googleapis.com/auth/cloud-platform",
    aud: "https://oauth2.googleapis.com/token",
    iat: now,
    exp: now + 3600,
  }

  const encode = (obj: object) => Buffer.from(JSON.stringify(obj)).toString("base64url")
  const unsignedToken = `${encode(header)}.${encode(payload)}`

  const sign = crypto.createSign("RSA-SHA256")
  sign.update(unsignedToken)
  const signature = sign.sign(privateKey, "base64url")

  const jwt = `${unsignedToken}.${signature}`

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn%3Aietf%3Aparams%3Aoauth%3Agrant-type%3Ajwt-bearer&assertion=${jwt}`,
  })

  if (!tokenResponse.ok) {
    const errText = await tokenResponse.text()
    throw new Error(`Failed to get access token: ${errText}`)
  }

  const tokenData = await tokenResponse.json()
  return tokenData.access_token
}

/**
 * Table Extraction processor — extracted from app/api/table-extraction/route.ts
 * Used by the job queue system for async processing.
 *
 * params.original_name: string
 * params.user_id: string (needed for monthly page limit tracking)
 * params.user_plan: string
 *
 * Note: Monthly page-limit checks are done in the route before creating the job.
 * The processor focuses on Document AI call + Excel generation.
 */
export async function tableExtractionProcessor(
  tmpPath: string,
  params: Record<string, unknown>,
  onProgress: (pct: number) => void
): Promise<{ outputUrl: string; outputFilename: string }> {
  const originalName = (params.original_name as string) || "document"
  const userId = params.user_id as string
  const userPlan = (params.user_plan as string) || "business"

  const projectId = process.env.GOOGLE_CLOUD_PROJECT_ID
  const location = process.env.GOOGLE_CLOUD_LOCATION || "us"
  const processorId = process.env.GOOGLE_CLOUD_PROCESSOR_ID
  const clientEmail = process.env.GOOGLE_CLOUD_CLIENT_EMAIL
  const privateKey = process.env.GOOGLE_CLOUD_PRIVATE_KEY?.replace(/\\n/g, "\n")

  if (!projectId || !processorId || !clientEmail || !privateKey) {
    throw new Error("The table extraction service is temporarily unavailable. Please try again later.")
  }

  onProgress(10)

  const buffer = await readFile(tmpPath)

  // Monthly page limits
  const MONTHLY_PAGE_LIMIT_BUSINESS = 200
  const MONTHLY_PAGE_LIMIT_ENTERPRISE = 2000
  const monthlyPageLimit = userPlan === "enterprise" ? MONTHLY_PAGE_LIMIT_ENTERPRISE : MONTHLY_PAGE_LIMIT_BUSINESS

  // Pre-flight page count
  let serviceClient: any = null
  const serviceUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY
  let usedPagesAtStart = 0

  if (serviceUrl && serviceKey && userId) {
    const { createClient: createServiceClient } = await import("@supabase/supabase-js")
    serviceClient = createServiceClient(serviceUrl, serviceKey)

    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
    const { data } = await serviceClient
      .from("usage_logs")
      .select("id")
      .eq("user_id", userId)
      .eq("tool", "table-extraction-page")
      .gte("created_at", startOfMonth)
    usedPagesAtStart = data?.length ?? 0

    if (usedPagesAtStart >= monthlyPageLimit) {
      throw new Error(
        `Monthly limit reached. You have used ${usedPagesAtStart} of ${monthlyPageLimit} table extraction pages this month.`
      )
    }

    // Check PDF page count against remaining quota
    try {
      const { PDFDocument } = await import("pdf-lib")
      const pdfDoc = await PDFDocument.load(buffer, { ignoreEncryption: true })
      const pdfPageCount = pdfDoc.getPageCount()
      const remaining = monthlyPageLimit - usedPagesAtStart
      if (pdfPageCount > remaining) {
        throw new Error(
          `This PDF has ${pdfPageCount} pages but you only have ${remaining} table extraction pages remaining this month.`
        )
      }
    } catch (err) {
      if ((err as Error).message.includes("pages")) throw err
    }
  }

  onProgress(20)

  // Generate access token and call Document AI
  const accessToken = await getAccessToken(clientEmail, privateKey)
  const endpoint = `https://${location}-documentai.googleapis.com/v1/projects/${projectId}/locations/${location}/processors/${processorId}:process`
  const encodedDocument = buffer.toString("base64")

  const docAiResponse = await fetch(endpoint, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${accessToken}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      rawDocument: {
        content: encodedDocument,
        mimeType: "application/pdf",
      },
    }),
  })

  if (!docAiResponse.ok) {
    const errBody = await docAiResponse.text()
    console.error("Document AI API error:", docAiResponse.status, errBody)
    throw new Error("Table extraction failed. Please try again or use a different file.")
  }

  onProgress(50)

  const result = await docAiResponse.json()
  const document: DocumentAIDocument | undefined = result.document

  if (!document) {
    throw new Error("No data could be extracted from this file. Please try a different PDF.")
  }

  // Check page count against remaining limit
  const pageCount = (document.pages || []).length

  if (serviceClient && userId) {
    const now = new Date()
    const startOfMonth = new Date(now.getFullYear(), now.getMonth(), 1).toISOString()
    const { data } = await serviceClient
      .from("usage_logs")
      .select("id")
      .eq("user_id", userId)
      .eq("tool", "table-extraction-page")
      .gte("created_at", startOfMonth)
    const usedPages = data?.length ?? 0
    const remaining = monthlyPageLimit - usedPages

    if (pageCount > remaining) {
      throw new Error(
        `This PDF has ${pageCount} pages but you only have ${remaining} table extraction pages remaining this month.`
      )
    }
  }

  onProgress(60)

  // Extract tables
  const tables: ExtractedTable[] = []

  for (const page of document.pages || []) {
    for (const table of page.tables || []) {
      const extractedTable: ExtractedTable = {
        pageNumber: page.pageNumber || 1,
        headerRows: [],
        bodyRows: [],
      }

      for (const headerRow of table.headerRows || []) {
        const row: string[] = []
        for (const cell of headerRow.cells || []) {
          row.push(extractTextFromLayout(cell.layout, document.text || "").trim())
        }
        extractedTable.headerRows.push(row)
      }

      for (const bodyRow of table.bodyRows || []) {
        const row: string[] = []
        for (const cell of bodyRow.cells || []) {
          row.push(extractTextFromLayout(cell.layout, document.text || "").trim())
        }
        extractedTable.bodyRows.push(row)
      }

      if (extractedTable.headerRows.length > 0 || extractedTable.bodyRows.length > 0) {
        tables.push(extractedTable)
      }
    }
  }

  if (tables.length === 0) {
    throw new Error("No tables were detected in this PDF. Try a document with clearly formatted tables.")
  }

  onProgress(70)

  // Build Excel workbook
  const ExcelJS = await import("exceljs")
  const workbook = new ExcelJS.default.Workbook()
  workbook.creator = "PDF.it"
  workbook.created = new Date()

  for (let i = 0; i < tables.length; i++) {
    const table = tables[i]
    const sheetName =
      tables.length === 1 ? "Table" : `Page ${table.pageNumber} - Table ${i + 1}`
    const worksheet = workbook.addWorksheet(sheetName.substring(0, 31))

    for (const headerRow of table.headerRows) {
      const row = worksheet.addRow(headerRow)
      row.eachCell((cell: any) => {
        cell.font = { bold: true, color: { argb: "FFFFFFFF" } }
        cell.fill = {
          type: "pattern",
          pattern: "solid",
          fgColor: { argb: "FF4338CA" },
        }
        cell.alignment = { horizontal: "center", vertical: "middle" }
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        }
      })
    }

    for (let r = 0; r < table.bodyRows.length; r++) {
      const row = worksheet.addRow(table.bodyRows[r])
      row.eachCell((cell: any) => {
        cell.border = {
          top: { style: "thin" },
          left: { style: "thin" },
          bottom: { style: "thin" },
          right: { style: "thin" },
        }
        cell.alignment = { vertical: "middle", wrapText: true }
        if (r % 2 === 1) {
          cell.fill = {
            type: "pattern",
            pattern: "solid",
            fgColor: { argb: "FFF1F5F9" },
          }
        }
      })
    }

    worksheet.columns.forEach((column: any) => {
      let maxLength = 10
      column.eachCell({ includeEmpty: true }, (cell: any) => {
        const cellValue = cell.value ? cell.value.toString() : ""
        maxLength = Math.max(maxLength, Math.min(cellValue.length + 4, 50))
      })
      column.width = maxLength
    })
  }

  onProgress(85)

  const excelBuffer = await workbook.xlsx.writeBuffer()

  // Log page usage for monthly tracking
  if (serviceClient && userId) {
    const rows: { user_id: string; tool: string; allowed: boolean; block_reason: null }[] = []
    for (let i = 0; i < pageCount; i++) {
      rows.push({
        user_id: userId,
        tool: "table-extraction-page",
        allowed: true,
        block_reason: null,
      })
    }
    await serviceClient.from("usage_logs").insert(rows).catch((err: any) => {
      console.error("[logPageUsage] insert error:", err)
    })
  }

  onProgress(90)

  // Upload to Vercel Blob
  const { put } = await import("@vercel/blob")
  const baseName = originalName.replace(/\.[^/.]+$/, "").replace(/-[a-zA-Z0-9]{20,}$/g, "")
  const outputFilename = `${baseName}-tables.xlsx`

  const blob = await put(outputFilename, Buffer.from(excelBuffer), {
    access: "public",
    contentType: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  })

  logger.info("table_extraction_complete", { originalName, tables: tables.length, outputUrl: blob.url })

  return { outputUrl: blob.url, outputFilename }
}
