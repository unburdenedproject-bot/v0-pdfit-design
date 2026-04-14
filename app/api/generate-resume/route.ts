export const runtime = "nodejs";
export const maxDuration = 300;

import { NextRequest, NextResponse } from "next/server";

function errorResponse(message: string, status: number = 500): Response {
  return Response.json({ error: message }, { status });
}

async function callOpenAI(apiKey: string, prompt: string): Promise<string> {
  let openaiRes: globalThis.Response | undefined;
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

  if (!openaiRes!.ok) {
    if (openaiRes!.status === 429) throw new Error("AI service is temporarily busy. Please try again.");
    console.error("AI generation request failed:", openaiRes!.status); throw new Error("An error occurred while generating your resume. Please try again.");
  }

  const data = await openaiRes!.json();
  return data.choices?.[0]?.message?.content || "";
}

interface ResumeInfo {
  jobTarget?: string;
  fullName?: string;
  email?: string;
  phone?: string;
  location?: string;
  linkedin?: string;
  summary?: string;
  experience?: string;
  education?: string;
  skills?: string;
  certifications?: string;
  languages?: string;
  additional?: string;
}

function buildDocx(resumeText: string, coverLetterText: string): Promise<Buffer> {
  // Dynamic import inside function to avoid bundling issues
  return import("docx").then(({ Document, Paragraph, TextRun, AlignmentType, BorderStyle, Packer, SectionType }) => {
    const sections: any[] = [];

    // Parse resume text into document sections
    const resumeChildren: any[] = [];
    const lines: string[] = resumeText.split("\n");
    let isFirstLine: boolean = true;
    let isContactBlock: boolean = true;

    for (const rawLine of lines) {
      const line: string = rawLine.trim();
      if (line === "") {
        resumeChildren.push(new Paragraph({ spacing: { after: 80 } }));
        continue;
      }

      const isHeading: boolean = line === line.toUpperCase() && line.length > 3 && /[A-Z]{3,}/.test(line) && !line.includes("@") && !line.includes("(");

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

      const isBullet: boolean = line.startsWith("•") || (line.startsWith("-") && line.length > 2 && line[1] === " ");
      const isSubHeading: boolean = (line.includes("–") || line.includes("—") || line.includes(" - ")) && !isBullet && line.length < 120;

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
      const clChildren: any[] = [];
      const clLines: string[] = coverLetterText.split("\n");

      for (const rawLine of clLines) {
        const line: string = rawLine.trim();
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

export async function POST(request: NextRequest): Promise<Response> {
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

    const apiKey: string | undefined = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      console.error("OPENAI_API_KEY is not set");
      return errorResponse("The service is temporarily unavailable. Please try again later.", 500);
    }

    const body = await request.json();
    const mode: string = body.mode;
    const includeCoverLetter: boolean = body.includeCoverLetter || false;
    const selectedImprovements: string[] = body.selectedImprovements || [];
    const selectedKeywords: string[] = body.selectedKeywords || [];

    // ---- Async mode: create a job and return immediately ----
    // generate-resume has no input file upload — we create a placeholder blob
    if (body.async === true) {
      const { createJob } = await import("@/lib/job-queue");
      const { put } = await import("@vercel/blob");
      const placeholder = await put("generate-resume-placeholder.txt", mode, {
        access: "public",
        contentType: "text/plain",
      });
      const jobResult = await createJob({
        userId: user.id,
        userPlan: profile?.plan,
        tool: "generate-resume",
        inputBlobUrl: placeholder.url,
        inputParams: {
          mode,
          include_cover_letter: includeCoverLetter,
          selected_improvements: selectedImprovements,
          selected_keywords: selectedKeywords,
          resume_text: body.resumeText || "",
          job_description: body.jobDescription || "",
          analysis_feedback: body.analysisFeedback || "",
          info: body.info || null,
        },
      });
      if ("error" in jobResult) {
        return errorResponse(jobResult.error, 500);
      }
      const { logUsage } = await import("@/lib/usage-check");
      await logUsage(user.id, "generate-resume");
      return NextResponse.json({ jobId: jobResult.jobId, status: "pending" }, { status: 202 });
    }

    // Build the improvement instructions
    let improvementInstructions: string = "";
    if (selectedImprovements.length > 0) {
      improvementInstructions += `\n\nThe user specifically wants these improvements applied:\n${selectedImprovements.map((s: string, i: number) => `${i + 1}. ${s}`).join("\n")}`;
    }
    if (selectedKeywords.length > 0) {
      improvementInstructions += `\n\nThe user wants these keywords incorporated naturally throughout the resume: ${selectedKeywords.join(", ")}`;
    }

    let resumePrompt: string = "";

    if (mode === "rewrite") {
      const resumeText: string = body.resumeText;
      const jobDescription: string = body.jobDescription || "";
      const analysisFeedback: string = body.analysisFeedback || "";

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
      const info: ResumeInfo = body.info;
      if (!info) return errorResponse("Missing resume information.", 400);

      // Server-side required-field + format validation (belt-and-braces with the UI).
      const missing: string[] = []
      if (!info.fullName || !info.fullName.trim()) missing.push("Full Name")
      if (!info.email || !info.email.trim()) missing.push("Email")
      if (!info.experience || !info.experience.trim()) missing.push("Work Experience")
      if (!info.education || !info.education.trim()) missing.push("Education")
      if (!info.skills || !info.skills.trim()) missing.push("Skills")
      if (missing.length > 0) {
        return errorResponse(`Please fill in the required fields: ${missing.join(", ")}.`, 400);
      }

      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
      if (!emailPattern.test((info.email || "").trim())) {
        return errorResponse("Please enter a valid email address.", 400);
      }

      if (info.phone && info.phone.trim()) {
        // Accept digits, spaces, (), +, -, and dots. 7-20 characters after stripping.
        const digits = info.phone.replace(/[^\d]/g, "")
        if (digits.length < 7 || digits.length > 20 || !/^[\d\s().+\-]+$/.test(info.phone.trim())) {
          return errorResponse("Please enter a valid phone number.", 400);
        }
      }

      // Detect literal "no X" / "none" / "n/a" inputs -- user is telling us a section is empty, not asking us to invent.
      const isEmptyIntent = (v?: string): boolean => {
        if (!v) return false
        const s = v.trim().toLowerCase()
        return s === "none" || s === "n/a" || s === "na" || s === "-" || /^no\s+\w+$/.test(s)
      }
      const skillsIntentEmpty = isEmptyIntent(info.skills)
      const certsIntentEmpty = isEmptyIntent(info.certifications)
      const langsIntentEmpty = isEmptyIntent(info.languages)

      const allowedSections: string[] = ["CONTACT INFORMATION", "PROFESSIONAL SUMMARY", "EXPERIENCE", "EDUCATION"]
      if (!skillsIntentEmpty && info.skills && info.skills.trim()) allowedSections.push("SKILLS")
      if (!certsIntentEmpty && info.certifications && info.certifications.trim()) allowedSections.push("CERTIFICATIONS")
      if (!langsIntentEmpty && info.languages && info.languages.trim()) allowedSections.push("LANGUAGES")

      resumePrompt = `You are an expert resume writer. Create a professional ATS-optimized resume STRICTLY from the information the candidate provided below.

ABSOLUTE CONTENT RULES — these override everything else below:
- Use ONLY the information the candidate provided. Do NOT invent employers, job titles, dates, schools, metrics, skills, certifications, languages, or achievements that were not given.
- If the candidate wrote "No Skills", "No Certifications", "None", "N/A", or similar, treat that section as EMPTY and do NOT include the heading or any content for it. Do not substitute generic or default values.
- If EXPERIENCE is sparse, keep it sparse. Do not invent bullet points the candidate didn't mention.
- You may rephrase and polish the candidate's words, but do not fabricate new facts.

SECTIONS TO INCLUDE (in this order, and ONLY these — do not add any section not listed here):
${allowedSections.map((s) => `- ${s}`).join("\n")}

FORMATTING RULES:
- Use ALL CAPS for section headings
- Use bullet points (•) for experience items
- Reverse chronological order
- No tables, columns, or special characters
- Professional, confident tone

${info.jobTarget ? `TARGET JOB: "${info.jobTarget}"` : ""}
${improvementInstructions}

CANDIDATE INFORMATION (use exactly what is provided):
Full Name: ${info.fullName || "Not provided"}
Email: ${info.email || "Not provided"}
Phone: ${info.phone || "Not provided"}
Location: ${info.location || "Not provided"}
LinkedIn: ${info.linkedin || "Not provided"}

SUMMARY (write from the candidate's experience -- do not invent new facts): ${info.summary || "(none provided)"}
EXPERIENCE: ${info.experience || "(none provided)"}
EDUCATION: ${info.education || "(none provided)"}
SKILLS: ${skillsIntentEmpty ? "(candidate indicated none -- OMIT the SKILLS section entirely)" : (info.skills || "(none provided)")}
CERTIFICATIONS: ${certsIntentEmpty ? "(candidate indicated none -- OMIT the CERTIFICATIONS section entirely)" : (info.certifications || "(none provided)")}
LANGUAGES: ${langsIntentEmpty ? "(candidate indicated none -- OMIT the LANGUAGES section entirely)" : (info.languages || "(none provided)")}
ADDITIONAL: ${info.additional || "(none provided)"}

Return the complete resume as plain text. No explanation.`
    } else {
      return errorResponse("Invalid mode.", 400);
    }

    // Generate resume
    const resumeContent: string = await callOpenAI(apiKey, resumePrompt);
    if (!resumeContent) throw new Error("AI returned no content.");

    // Generate cover letter if requested
    let coverLetterContent: string = "";
    if (includeCoverLetter) {
      const jobDescription: string = body.jobDescription || body.info?.jobTarget || "";
      const clPrompt: string = `You are an expert cover letter writer. Write a professional, compelling cover letter based on this resume.

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
    const docxBuffer: Buffer = await buildDocx(resumeContent, coverLetterContent);

    // Log usage
    const { logUsage } = await import("@/lib/usage-check");
    await logUsage(user.id, "generate-resume");

    const filename: string = includeCoverLetter ? "resume-and-cover-letter.docx" : mode === "rewrite" ? "resume-optimized.docx" : "resume-new.docx";

    return new NextResponse(Buffer.from(docxBuffer), {
      status: 200,
      headers: {
        "Content-Type": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        "Content-Disposition": `attachment; filename="${filename}"`,
        "Cache-Control": "no-store",
      },
    });
  } catch (err: unknown) {
    console.error("generate-resume route error:", err);
    const raw: string = err && typeof err === "object" && (err as Error).message ? (err as Error).message : "";
    const safe: string = /CloudConvert|iLoveAPI|ILovePDF|Document AI|Google Cloud|blob\.vercel/i.test(raw)
      ? "An error occurred while generating your resume. Please try again."
      : (raw || "An unexpected error occurred.");
    return errorResponse(safe, 500);
  }
}
