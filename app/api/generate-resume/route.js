export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

export async function POST(request) {
  try {
    // Auth: Pro/Business/Enterprise only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase
      .from("users")
      .select("plan")
      .eq("id", user.id)
      .single();
    if (
      profile?.plan !== "pro" &&
      profile?.plan !== "business" &&
      profile?.plan !== "enterprise"
    ) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return errorResponse("OpenAI API is not configured.", 500);
    }

    const body = await request.json();
    const mode = body.mode; // "rewrite" or "build"

    let prompt = "";

    if (mode === "rewrite") {
      const resumeText = body.resumeText;
      const jobDescription = body.jobDescription || "";
      const analysisFeedback = body.analysisFeedback || "";

      if (!resumeText) {
        return errorResponse("Missing resume text.", 400);
      }

      prompt = `You are an expert resume writer specializing in ATS-optimized resumes. Rewrite the following resume to be fully ATS-compatible.

RULES:
- Use clean, simple formatting with clear section headings
- Use standard section names: CONTACT INFORMATION, PROFESSIONAL SUMMARY, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS
- Include quantified achievements where possible (add realistic numbers if none exist)
- Use bullet points for experience items
- Include relevant keywords throughout
- Keep it to 1-2 pages worth of content
- Use reverse chronological order for experience and education
- Do NOT use tables, columns, graphics, or special characters
- Write in a professional, confident tone

${jobDescription ? `TARGET JOB: "${jobDescription}"\nTailor the resume to this specific role.` : ""}

${analysisFeedback ? `PREVIOUS ANALYSIS FEEDBACK:\n${analysisFeedback}\n\nAddress all these issues in the rewrite.` : ""}

ORIGINAL RESUME TEXT:
${resumeText.substring(0, 6000)}

Return the complete rewritten resume as plain text with clear section headings. Do not include any explanation — just the resume content.`

    } else if (mode === "build") {
      const info = body.info;
      if (!info) {
        return errorResponse("Missing resume information.", 400);
      }

      prompt = `You are an expert resume writer specializing in ATS-optimized resumes. Create a professional resume from the following information.

RULES:
- Use clean, simple formatting with clear section headings
- Use standard section names: CONTACT INFORMATION, PROFESSIONAL SUMMARY, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS
- Include quantified achievements where possible (create realistic metrics based on the role)
- Use bullet points for experience items (3-5 per job)
- Include relevant keywords throughout
- Keep it to 1-2 pages worth of content
- Use reverse chronological order
- Do NOT use tables, columns, graphics, or special characters
- Write in a professional, confident tone
- Write a compelling 2-3 sentence Professional Summary

${info.jobTarget ? `TARGET JOB: "${info.jobTarget}"\nTailor the resume to this specific role.` : ""}

CANDIDATE INFORMATION:
Full Name: ${info.fullName || "Not provided"}
Email: ${info.email || "Not provided"}
Phone: ${info.phone || "Not provided"}
Location: ${info.location || "Not provided"}
LinkedIn: ${info.linkedin || "Not provided"}

PROFESSIONAL SUMMARY / OBJECTIVE:
${info.summary || "Generate based on experience and target job"}

WORK EXPERIENCE:
${info.experience || "Not provided"}

EDUCATION:
${info.education || "Not provided"}

SKILLS:
${info.skills || "Not provided"}

CERTIFICATIONS / LICENSES:
${info.certifications || "None"}

LANGUAGES:
${info.languages || "Not provided"}

ADDITIONAL INFORMATION:
${info.additional || "None"}

Return the complete resume as plain text with clear section headings. Do not include any explanation — just the resume content.`

    } else {
      return errorResponse("Invalid mode. Use 'rewrite' or 'build'.", 400);
    }

    // Call OpenAI with retry
    let openaiRes;
    for (let attempt = 0; attempt < 3; attempt++) {
      openaiRes = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${apiKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          model: "gpt-4o-mini",
          messages: [
            { role: "user", content: prompt },
          ],
          temperature: 0.4,
          max_tokens: 3000,
        }),
      });

      if (openaiRes.ok || openaiRes.status !== 429) break;
      const waitMs = (attempt + 1) * 5000;
      await new Promise((r) => setTimeout(r, waitMs));
    }

    if (!openaiRes.ok) {
      const errBody = await openaiRes.text();
      console.error("OpenAI API error:", openaiRes.status, errBody);
      if (openaiRes.status === 429) {
        throw new Error("AI service is temporarily busy. Please try again in a few seconds.");
      }
      throw new Error(`Resume generation failed (${openaiRes.status})`);
    }

    const openaiData = await openaiRes.json();
    const resumeContent = openaiData.choices?.[0]?.message?.content;

    if (!resumeContent) {
      throw new Error("AI returned no content.");
    }

    // Generate PDF from the resume text
    const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
    const pdfDoc = await PDFDocument.create();
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const fontSize = 10;
    const headingSize = 13;
    const lineHeight = fontSize * 1.5;
    const headingHeight = headingSize * 1.8;
    const margin = 50;
    const pageWidth = 612; // Letter
    const pageHeight = 792;
    const contentWidth = pageWidth - margin * 2;

    const lines = resumeContent.split("\n");
    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;

    for (const rawLine of lines) {
      const line = rawLine.trim();

      // Check if we need a new page
      if (y < margin + 30) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }

      // Detect section headings (ALL CAPS or lines ending with :)
      const isHeading =
        (line === line.toUpperCase() && line.length > 3 && /[A-Z]/.test(line)) ||
        (line.endsWith(":") && line.length < 40);

      if (line === "") {
        y -= lineHeight * 0.5;
        continue;
      }

      if (isHeading) {
        y -= 5;
        // Draw a thin line under heading
        page.drawLine({
          start: { x: margin, y: y - 2 },
          end: { x: pageWidth - margin, y: y - 2 },
          thickness: 0.5,
          color: rgb(0.7, 0.7, 0.7),
        });
        y -= 4;

        // Word wrap heading
        const words = line.split(" ");
        let currentLine = "";
        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          const testWidth = fontBold.widthOfTextAtSize(testLine, headingSize);
          if (testWidth > contentWidth && currentLine) {
            page.drawText(currentLine, { x: margin, y, size: headingSize, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
            y -= headingHeight;
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          page.drawText(currentLine, { x: margin, y, size: headingSize, font: fontBold, color: rgb(0.1, 0.1, 0.1) });
          y -= headingHeight;
        }
      } else {
        // Word wrap body text
        const isBullet = line.startsWith("•") || line.startsWith("-") || line.startsWith("*");
        const indent = isBullet ? 15 : 0;
        const textToRender = isBullet ? "• " + line.substring(1).trim() : line;
        const words = textToRender.split(" ");
        let currentLine = "";

        for (const word of words) {
          const testLine = currentLine ? `${currentLine} ${word}` : word;
          const testWidth = font.widthOfTextAtSize(testLine, fontSize);
          if (testWidth > contentWidth - indent && currentLine) {
            if (y < margin + 20) {
              page = pdfDoc.addPage([pageWidth, pageHeight]);
              y = pageHeight - margin;
            }
            page.drawText(currentLine, { x: margin + indent, y, size: fontSize, font, color: rgb(0.15, 0.15, 0.15) });
            y -= lineHeight;
            currentLine = word;
          } else {
            currentLine = testLine;
          }
        }
        if (currentLine) {
          if (y < margin + 20) {
            page = pdfDoc.addPage([pageWidth, pageHeight]);
            y = pageHeight - margin;
          }
          page.drawText(currentLine, { x: margin + indent, y, size: fontSize, font, color: rgb(0.15, 0.15, 0.15) });
          y -= lineHeight;
        }
      }
    }

    const pdfBytes = await pdfDoc.save();

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "generate-resume");

    const filename = mode === "rewrite" ? "resume-optimized.pdf" : "resume-new.pdf";

    return new NextResponse(Buffer.from(pdfBytes), {
      status: 200,
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("generate-resume route error:", err);
    const message =
      err && typeof err === "object" && err.message
        ? err.message
        : "An unexpected error occurred.";
    return errorResponse(message, 500);
  }
}
