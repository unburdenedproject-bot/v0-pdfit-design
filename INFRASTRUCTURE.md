# PDF.it — Infrastructure Architecture Plan

## AI Routes — Current Architecture (April 14, 2026)

The 5 AI-over-PDF routes (`question-generator`, `ats-optimizer`, `smart-extraction`, `chat-with-pdf`, `translate-pdf`) no longer use the text-extraction chain. They upload PDFs directly to OpenAI's Files API:

```
User uploads PDF
  ↓
Vercel Blob (via @vercel/blob/client, multipart — bypasses 4.5MB function body limit)
  ↓
API route fetches blob → streams to OpenAI Files API (POST /v1/files, purpose=user_data)
  ↓
OpenAI returns file_id
  ↓
Chat Completions call with {type:"file", file:{file_id}} + text prompt
  ↓
Response returned to user; file_id either deleted (one-shot tools) or cached for reuse (chat-with-pdf)
```

This bypasses iLoveAPI / pdf-parse / pdfjs-dist / Document AI for AI tools. The text-extraction chain remains in use for non-AI tools (`pdf-to-txt`, etc.) and for tools that need the raw text for non-AI post-processing.

## Target Architecture

```
User
  ↓
Frontend (Vercel)
  ↓
Object Storage (R2)
  ↓
Queue (Redis/BullMQ)
  ↓
Worker processors
  ↓
Processed file storage
```

## Why This Matters

Before building new features, stabilize the system:
- Current setup sends files directly through Vercel serverless functions (10s timeout on hobby, 60s on Pro)
- Large files or slow API calls (CloudConvert, iLoveAPI) can timeout
- No retry mechanism if processing fails
- No queue = no way to handle traffic spikes

## Components

### 1. Object Storage (Cloudflare R2)
- Replace Vercel Blob for file uploads
- Cheaper, no egress fees
- Files auto-deleted after 1 hour

### 2. Queue (Redis + BullMQ)
- Job queue for all PDF processing tasks
- Retry failed jobs automatically
- Priority queue for Pro/Business users
- Rate limiting for free users

### 3. Worker Processors
- Separate from Vercel serverless functions
- Can run longer than 60s
- Scale independently based on queue depth
- Each worker handles one tool type (compress, merge, convert, etc.)

### 4. Processed File Storage
- Store results in R2
- Generate signed download URLs
- Auto-cleanup after 1 hour

## Processing Libraries

- **Ghostscript** — PDF rendering, conversion, compression
- **PDFium** — PDF rendering, text extraction, page manipulation
- **Poppler** — PDF to image conversion, text extraction
- **OpenCV** — Image processing, scan cleanup, deskewing
- **Tesseract** — OCR (optical character recognition) for scanned PDFs

## Migration Plan

1. Set up Cloudflare R2 bucket
2. Add Redis instance (Upstash or Railway)
3. Build queue producer (API routes push jobs to queue)
4. Build queue consumer (workers pull and process)
5. Migrate tools one by one (start with compress-pdf as pilot)
6. Remove direct processing from Vercel functions

## Status
- NOT YET STARTED
- Current system works but won't scale past ~100 concurrent users
