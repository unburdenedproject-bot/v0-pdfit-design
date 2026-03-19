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

    // Generate professional PDF from the resume text
    const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
    const pdfDoc = await PDFDocument.create();
    const fontRegular = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontBold = await pdfDoc.embedFont(StandardFonts.HelveticaBold);

    const margin = 55;
    const pageWidth = 612;
    const pageHeight = 792;
    const contentWidth = pageWidth - margin * 2;

    const nameSize = 20;
    const headingSize = 11;
    const bodySize = 9.5;
    const contactSize = 9;
    const bodyLineHeight = bodySize * 1.6;
    const headingLineHeight = headingSize * 2.2;

    const accentColor = rgb(0.16, 0.24, 0.42); // dark navy
    const textColor = rgb(0.12, 0.12, 0.12);
    const lightColor = rgb(0.45, 0.45, 0.45);

    const rawLines = resumeContent.split("\n");
    let page = pdfDoc.addPage([pageWidth, pageHeight]);
    let y = pageHeight - margin;
    let isFirstLine = true;
    let isContactBlock = true;

    function ensureSpace(needed) {
      if (y < margin + needed) {
        page = pdfDoc.addPage([pageWidth, pageHeight]);
        y = pageHeight - margin;
      }
    }

    function drawWrappedText(text, x, font, size, color, maxWidth, leading) {
      const words = text.split(" ");
      let currentLine = "";
      for (const word of words) {
        const testLine = currentLine ? `${currentLine} ${word}` : word;
        const testWidth = font.widthOfTextAtSize(testLine, size);
        if (testWidth > maxWidth && currentLine) {
          ensureSpace(leading);
          page.drawText(currentLine, { x, y, size, font, color });
          y -= leading;
          currentLine = word;
        } else {
          currentLine = testLine;
        }
      }
      if (currentLine) {
        ensureSpace(leading);
        page.drawText(currentLine, { x, y, size, font, color });
        y -= leading;
      }
    }

    for (const rawLine of rawLines) {
      const line = rawLine.trim();

      if (line === "") {
        y -= bodyLineHeight * 0.4;
        continue;
      }

      // First non-empty line = name
      if (isFirstLine) {
        ensureSpace(nameSize + 10);
        // Center the name
        const nameWidth = fontBold.widthOfTextAtSize(line, nameSize);
        const nameX = (pageWidth - nameWidth) / 2;
        page.drawText(line, { x: nameX, y, size: nameSize, font: fontBold, color: accentColor });
        y -= nameSize + 8;

        // Draw a thin accent line under name
        page.drawLine({
          start: { x: margin + 60, y },
          end: { x: pageWidth - margin - 60, y },
          thickness: 1.2,
          color: accentColor,
        });
        y -= 10;

        isFirstLine = false;
        continue;
      }

      // Contact info lines (right after name, before first heading)
      const isHeading =
        line === line.toUpperCase() && line.length > 3 && /[A-Z]{3,}/.test(line) && !line.includes("@") && !line.includes("(");

      if (isContactBlock && !isHeading) {
        // Center contact info
        const contactWidth = fontRegular.widthOfTextAtSize(line, contactSize);
        const contactX = (pageWidth - contactWidth) / 2;
        ensureSpace(contactSize + 4);
        page.drawText(line, { x: contactX, y, size: contactSize, font: fontRegular, color: lightColor });
        y -= contactSize + 4;
        continue;
      }

      if (isHeading) {
        isContactBlock = false;
        y -= 8; // Space before heading

        ensureSpace(headingLineHeight + 6);

        // Draw heading text
        page.drawText(line, { x: margin, y, size: headingSize, font: fontBold, color: accentColor });
        y -= headingSize + 3;

        // Draw accent line under heading
        page.drawLine({
          start: { x: margin, y },
          end: { x: pageWidth - margin, y },
          thickness: 0.8,
          color: accentColor,
        });
        y -= 8;
        continue;
      }

      isContactBlock = false;

      // Detect sub-headings (job title lines — typically contain dates or dashes)
      const isSubHeading = (
        (line.includes("–") || line.includes("—") || line.includes(" - ")) &&
        !line.startsWith("•") && !line.startsWith("-") && line.length < 120
      );

      if (isSubHeading) {
        y -= 3;
        ensureSpace(bodySize + 6);
        drawWrappedText(line, margin, fontBold, bodySize + 0.5, textColor, contentWidth, bodyLineHeight);
        continue;
      }

      // Bullet points
      const isBullet = line.startsWith("•") || (line.startsWith("-") && line.length > 2 && line[1] === " ");
      if (isBullet) {
        const bulletText = line.substring(1).trim();
        ensureSpace(bodyLineHeight);
        page.drawText("•", { x: margin + 8, y, size: bodySize, font: fontRegular, color: textColor });
        drawWrappedText(bulletText, margin + 20, fontRegular, bodySize, textColor, contentWidth - 20, bodyLineHeight);
        continue;
      }

      // Regular text
      drawWrappedText(line, margin, fontRegular, bodySize, textColor, contentWidth, bodyLineHeight);
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
