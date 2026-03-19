export const runtime = "nodejs";
export const maxDuration = 300;

import { NextResponse } from "next/server";

function errorResponse(message, status = 500) {
  return Response.json({ error: message }, { status });
}

async function callOpenAI(apiKey, prompt) {
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
        messages: [{ role: "user", content: prompt }],
        temperature: 0.4,
        max_tokens: 3500,
      }),
    });
    if (openaiRes.ok || openaiRes.status !== 429) break;
    await new Promise((r) => setTimeout(r, (attempt + 1) * 5000));
  }

  if (!openaiRes.ok) {
    if (openaiRes.status === 429) throw new Error("AI service is temporarily busy. Please try again.");
    throw new Error(`AI generation failed (${openaiRes.status})`);
  }

  const data = await openaiRes.json();
  return data.choices?.[0]?.message?.content || "";
}

function buildDocx(resumeText, coverLetterText) {
  // Dynamic import inside function to avoid bundling issues
  return import("docx").then(({ Document, Paragraph, TextRun, AlignmentType, BorderStyle, Packer, SectionType }) => {
    const sections = [];

    // Parse resume text into document sections
    const resumeChildren = [];
    const lines = resumeText.split("\n");
    let isFirstLine = true;
    let isContactBlock = true;

    for (const rawLine of lines) {
      const line = rawLine.trim();
      if (line === "") {
        resumeChildren.push(new Paragraph({ spacing: { after: 80 } }));
        continue;
      }

      const isHeading = line === line.toUpperCase() && line.length > 3 && /[A-Z]{3,}/.test(line) && !line.includes("@") && !line.includes("(");

      if (isFirstLine) {
        resumeChildren.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 40 },
          children: [new TextRun({ text: line, bold: true, size: 36, color: "1A2356", font: "Calibri" })],
        }));
        // Add a line under name
        resumeChildren.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "1A2356" } },
          spacing: { after: 80 },
        }));
        isFirstLine = false;
        continue;
      }

      if (isContactBlock && !isHeading) {
        resumeChildren.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 20 },
          children: [new TextRun({ text: line, size: 18, color: "666666", font: "Calibri" })],
        }));
        continue;
      }

      if (isHeading) {
        isContactBlock = false;
        resumeChildren.push(new Paragraph({
          spacing: { before: 200, after: 40 },
          border: { bottom: { style: BorderStyle.SINGLE, size: 4, color: "1A2356" } },
          children: [new TextRun({ text: line, bold: true, size: 22, color: "1A2356", font: "Calibri" })],
        }));
        continue;
      }

      isContactBlock = false;

      const isBullet = line.startsWith("•") || (line.startsWith("-") && line.length > 2 && line[1] === " ");
      const isSubHeading = (line.includes("–") || line.includes("—") || line.includes(" - ")) && !isBullet && line.length < 120;

      if (isSubHeading) {
        resumeChildren.push(new Paragraph({
          spacing: { before: 100, after: 20 },
          children: [new TextRun({ text: line, bold: true, size: 20, font: "Calibri" })],
        }));
      } else if (isBullet) {
        resumeChildren.push(new Paragraph({
          spacing: { after: 20 },
          indent: { left: 360 },
          children: [
            new TextRun({ text: "•  ", size: 19, font: "Calibri" }),
            new TextRun({ text: line.substring(1).trim(), size: 19, font: "Calibri" }),
          ],
        }));
      } else {
        resumeChildren.push(new Paragraph({
          spacing: { after: 40 },
          children: [new TextRun({ text: line, size: 19, font: "Calibri" })],
        }));
      }
    }

    sections.push({
      properties: {
        page: {
          margin: { top: 720, right: 720, bottom: 720, left: 720 },
        },
      },
      children: resumeChildren,
    });

    // Cover letter as second section (new page)
    if (coverLetterText) {
      const clChildren = [];
      const clLines = coverLetterText.split("\n");

      for (const rawLine of clLines) {
        const line = rawLine.trim();
        if (line === "") {
          clChildren.push(new Paragraph({ spacing: { after: 80 } }));
          continue;
        }
        clChildren.push(new Paragraph({
          spacing: { after: 60 },
          children: [new TextRun({ text: line, size: 21, font: "Calibri" })],
        }));
      }

      sections.push({
        properties: {
          type: SectionType.NEXT_PAGE,
          page: {
            margin: { top: 720, right: 720, bottom: 720, left: 720 },
          },
        },
        children: clChildren,
      });
    }

    const doc = new Document({ sections });
    return Packer.toBuffer(doc);
  });
}

export async function POST(request) {
  try {
    // Auth: Pro/Business/Enterprise only
    const { createClient } = await import("@/lib/supabase/server");
    const supabase = await createClient();
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }
    const { data: profile } = await supabase.from("users").select("plan").eq("id", user.id).single();
    if (profile?.plan !== "pro" && profile?.plan !== "business" && profile?.plan !== "enterprise") {
      return NextResponse.json({ error: "upgrade_required" }, { status: 403 });
    }

    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) return errorResponse("OpenAI API is not configured.", 500);

    const body = await request.json();
    const mode = body.mode;
    const includeCoverLetter = body.includeCoverLetter || false;
    const selectedImprovements = body.selectedImprovements || [];
    const selectedKeywords = body.selectedKeywords || [];

    // Build the improvement instructions
    let improvementInstructions = "";
    if (selectedImprovements.length > 0) {
      improvementInstructions += `\n\nThe user specifically wants these improvements applied:\n${selectedImprovements.map((s, i) => `${i + 1}. ${s}`).join("\n")}`;
    }
    if (selectedKeywords.length > 0) {
      improvementInstructions += `\n\nThe user wants these keywords incorporated naturally throughout the resume: ${selectedKeywords.join(", ")}`;
    }

    let resumePrompt = "";

    if (mode === "rewrite") {
      const resumeText = body.resumeText;
      const jobDescription = body.jobDescription || "";
      const analysisFeedback = body.analysisFeedback || "";

      if (!resumeText) return errorResponse("Missing resume text.", 400);

      resumePrompt = `You are an expert resume writer specializing in ATS-optimized resumes. Rewrite the following resume to be fully ATS-compatible.

RULES:
- Use clean, simple formatting with clear section headings in ALL CAPS
- Use standard section names: CONTACT INFORMATION, PROFESSIONAL SUMMARY, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS
- Include quantified achievements where possible
- Use bullet points (starting with •) for experience items
- Include relevant keywords throughout
- Keep it to 1-2 pages worth of content
- Use reverse chronological order
- Do NOT use tables, columns, graphics, or special characters
- Write in a professional, confident tone

${jobDescription ? `TARGET JOB: "${jobDescription}"\nTailor the resume to this specific role.` : ""}
${analysisFeedback ? `ANALYSIS FEEDBACK:\n${analysisFeedback}` : ""}
${improvementInstructions}

ORIGINAL RESUME TEXT:
${resumeText.substring(0, 6000)}

Return the complete rewritten resume as plain text with clear section headings. No explanation — just the resume.`

    } else if (mode === "build") {
      const info = body.info;
      if (!info) return errorResponse("Missing resume information.", 400);

      resumePrompt = `You are an expert resume writer. Create a professional ATS-optimized resume from this information.

RULES:
- Use clean formatting with ALL CAPS section headings
- Standard sections: CONTACT INFORMATION, PROFESSIONAL SUMMARY, EXPERIENCE, EDUCATION, SKILLS, CERTIFICATIONS
- Include quantified achievements (create realistic metrics)
- Use bullet points (•) for experience items (3-5 per job)
- Reverse chronological order
- No tables, columns, or special characters
- Professional, confident tone
- Write a compelling 2-3 sentence Professional Summary

${info.jobTarget ? `TARGET JOB: "${info.jobTarget}"` : ""}
${improvementInstructions}

CANDIDATE INFORMATION:
Full Name: ${info.fullName || "Not provided"}
Email: ${info.email || "Not provided"}
Phone: ${info.phone || "Not provided"}
Location: ${info.location || "Not provided"}
LinkedIn: ${info.linkedin || "Not provided"}

SUMMARY: ${info.summary || "Generate based on experience"}
EXPERIENCE: ${info.experience || "Not provided"}
EDUCATION: ${info.education || "Not provided"}
SKILLS: ${info.skills || "Not provided"}
CERTIFICATIONS: ${info.certifications || "None"}
LANGUAGES: ${info.languages || "Not provided"}
ADDITIONAL: ${info.additional || "None"}

Return the complete resume as plain text. No explanation.`
    } else {
      return errorResponse("Invalid mode.", 400);
    }

    // Generate resume
    const resumeContent = await callOpenAI(apiKey, resumePrompt);
    if (!resumeContent) throw new Error("AI returned no content.");

    // Generate cover letter if requested
    let coverLetterContent = "";
    if (includeCoverLetter) {
      const jobDescription = body.jobDescription || body.info?.jobTarget || "";
      const clPrompt = `You are an expert cover letter writer. Write a professional, compelling cover letter based on this resume.

RULES:
- Professional but warm tone
- 3-4 paragraphs
- Opening: express enthusiasm for the role and company
- Middle: highlight 2-3 key achievements from the resume that match the job
- Closing: express interest in an interview and thank the reader
- Include today's date at the top
- Use standard business letter format
- Do NOT make up company names — use "[Company Name]" as placeholder
${jobDescription ? `TARGET POSITION: "${jobDescription}"` : ""}

RESUME:
${resumeContent.substring(0, 4000)}

Return the cover letter as plain text. No explanation.`

      coverLetterContent = await callOpenAI(apiKey, clPrompt);
    }

    // Generate Word document
    const docxBuffer = await buildDocx(resumeContent, coverLetterContent);

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "generate-resume");

    const filename = includeCoverLetter ? "resume-and-cover-letter.docx" : mode === "rewrite" ? "resume-optimized.docx" : "resume-new.docx";

    return new NextResponse(Buffer.from(docxBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err) {
    console.error("generate-resume route error:", err);
    const message = err && typeof err === "object" && err.message ? err.message : "An unexpected error occurred.";
    return errorResponse(message, 500);
  }
}
