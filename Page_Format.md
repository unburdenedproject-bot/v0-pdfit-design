# Tool Page Format — Canonical Reference

Every tool page on PDF.it must follow this exact structure and styling. This applies to **all three languages** (EN, ES, BR). The only differences between languages are the text content and locale-specific hrefs. Structure, classes, styles, and section order must be identical.

The canonical reference page is `/pdf-to-jpg` (`app/pdf-to-jpg/page.tsx`).

---

## Section Order (top to bottom)

1. **Hero**
2. **Intro**
3. **Processing Interface**
4. **Feature Blocks** (3 glassmorphism cards)
5. **How It Works** (3 horizontal steps)
6. **Related Tools** (4 metallic cards)
7. **FAQ** (wave-color background)
8. **FAQ Schema** (`<Script>` with JSON-LD)

---

## 1. Hero

- **Background**: Dark cinematic `#0E0F1E` with radial gradients (teal, orange, purple) + noise grain SVG overlay
- **Icon**: Dark gradient circle (`linear-gradient(135deg, #1a1f5e, #252A6A)`) with teal glow shadow, Lucide icon in `text-[#14D8C4]`
- **H1**: `text-4xl lg:text-5xl font-black mb-4` — white
- **Subtitle**: `text-xl text-slate-300 mb-8`
- **Badges**: 3 items with `text-[#14D8C4]` Lucide icons + white text, `text-sm font-semibold`

```jsx
<section
  className="text-white py-16 relative overflow-hidden"
  style={{
    background: `
      radial-gradient(ellipse 70% 50% at 50% 0%, rgba(20,216,196,0.15) 0%, transparent 60%),
      radial-gradient(ellipse 50% 40% at 80% 70%, rgba(232,129,58,0.06) 0%, transparent 50%),
      radial-gradient(ellipse 60% 60% at 15% 80%, rgba(107,124,255,0.10) 0%, transparent 60%),
      #0E0F1E
    `,
  }}
>
  {/* Noise grain overlay */}
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ opacity: 0.04 }}>
    <filter id="heroGrain"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /></filter>
    <rect width="100%" height="100%" filter="url(#heroGrain)" />
  </svg>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
    <div className="max-w-4xl mx-auto text-center">
      {/* Icon */}
      <div
        className="w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6"
        style={{
          background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
          boxShadow: "0 0 30px rgba(20, 216, 196, 0.35), 0 4px 12px rgba(232,129,58,0.1)",
        }}
      >
        <ToolIcon className="h-10 w-10 text-[#14D8C4]" />
      </div>
      <h1 className="text-4xl lg:text-5xl font-black mb-4">...</h1>
      <p className="text-xl text-slate-300 mb-8">...</p>
      <div className="flex flex-wrap justify-center gap-6 mb-8 text-sm font-semibold">
        {/* 3 badges with teal icons */}
      </div>
    </div>
  </div>
</section>
```

---

## 2. Intro

- **Background**: `bg-[#F3F4FF]`, `py-10`
- **Layout**: `max-w-3xl`, centered text
- **Paragraph**: `text-lg text-slate-600 leading-relaxed`
- **Checklist**: 2-column grid (`grid-cols-1 sm:grid-cols-2 gap-3`), plain `✓` prefix, `text-sm font-medium text-slate-700`

```jsx
<section className="py-10 bg-[#F3F4FF]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
    <p className="text-lg text-slate-600 leading-relaxed">...</p>
    <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3 text-left text-slate-700 text-sm font-medium">
      <li className="flex items-center gap-2">✓ ...</li>
      ...
    </ul>
  </div>
</section>
```

---

## 3. Processing Interface

- Placed **after** the Intro section
- The component used depends on the tool type (see variants below), but the **position in the page never changes**
- The Processing Interface IS the call-to-action — do NOT add a separate CTA section anywhere on the page

### Variant A — Standard file conversion (most tools)

Used by: pdf-to-jpg, pdf-to-png, pdf-to-txt, pdf-to-word, pdf-to-excel, pdf-to-powerpoint, extract-images-from-pdf, word-to-pdf, excel-to-pdf, powerpoint-to-pdf, compress-pdf, merge-pdf, split-pdf, rotate-pdf, flatten-pdf, protect-pdf, unlock-pdf, etc.

```jsx
<ProcessingInterface
  acceptedFiles=".pdf"
  toolName="Tool Name"
  outputFormat="FORMAT"
  processingMessage="Converting your file..."
  successMessage="Your file is ready!"
/>
```

### Variant B — Image-to-PDF conversion

Used by: jpg-to-pdf, png-to-pdf

```jsx
<ImageToPdfInterface
  acceptedTypes={["image/jpeg"]}
  acceptedExtensions=".jpg,.jpeg"
  formatLabel="JPG"
/>
```

### Variant C — URL-to-PDF conversion

Used by: url-to-pdf

```jsx
<UrlPdfInterface />
```

### Rules for all variants

- The surrounding page structure (Hero, Intro, Feature Blocks, How It Works, Related Tools, FAQ, Schema) is **identical** regardless of which processing component is used
- No extra sections are allowed between the Processing Interface and the Feature Blocks
- No standalone CTA / banner sections anywhere on the page
- No "Use Cases" sections — condense that content into the 3 Feature Blocks
- No "Why Convert X to Y?" standalone sections — put that content in the Intro paragraph

---

## 4. Feature Blocks (3 glassmorphism cards)

- **Background**: Dark `#0E0F1E` with subtle radial gradients
- **Layout**: 3-column grid (`grid-cols-1 md:grid-cols-3 gap-4`)
- **Cards**: Metallic border wrapper (`p-[1px]`) + glassmorphism inner div
- **Text**: `text-white` title, `text-slate-400 text-sm` description

```jsx
<section
  className="py-16"
  style={{
    background: `
      radial-gradient(ellipse 60% 40% at 50% 0%, rgba(20,216,196,0.04) 0%, transparent 50%),
      radial-gradient(ellipse 50% 50% at 100% 80%, rgba(232,129,58,0.03) 0%, transparent 50%),
      #0E0F1E
    `,
  }}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {[
        { title: "...", desc: "..." },
        { title: "...", desc: "..." },
        { title: "...", desc: "..." },
      ].map((feature) => (
        <div
          key={feature.title}
          className="rounded-xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
          }}
        >
          <div
            className="rounded-[11px] p-6 h-full"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                rgba(255, 255, 255, 0.07)
              `,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
            <p className="text-slate-400 text-sm leading-relaxed">{feature.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 5. How It Works (3 horizontal steps)

- **Background**: `bg-[#F3F4FF]`, `py-16`
- **Heading**: `text-3xl font-black text-slate-900 mb-8 text-center`
- **Layout**: `flex flex-col sm:flex-row gap-6 justify-center text-center`
- **Step circles**: Dark gradient with teal glow + teal number

```jsx
<section className="py-16 bg-[#F3F4FF]">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
    <h2 className="text-3xl font-black text-slate-900 mb-8 text-center">How to ...</h2>
    <div className="flex flex-col sm:flex-row gap-6 justify-center text-center">
      {[
        { num: "1", title: "Upload your file", desc: "Drag and drop or click to choose a file" },
        { num: "2", title: "Click Convert", desc: "Processing usually takes a few seconds" },
        { num: "3", title: "Download your file", desc: "Get your converted file instantly" },
      ].map((step) => (
        <div key={step.num} className="flex-1">
          <div
            className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3"
            style={{
              background: "linear-gradient(135deg, #1a1f5e, #252A6A)",
              boxShadow: "0 0 20px rgba(20, 216, 196, 0.3), 0 4px 8px rgba(232,129,58,0.1)",
              border: "1px solid rgba(20,216,196,0.25)",
            }}
          >
            <span className="text-[#14D8C4] font-black text-lg">{step.num}</span>
          </div>
          <p className="font-semibold text-slate-900">{step.title}</p>
          <p className="text-sm text-slate-500 mt-1">{step.desc}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 6. Related Tools (4 metallic cards)

- **Background**: Solid `#0E0F1E`
- **Heading**: `text-2xl font-black text-white mb-6 text-center`
- **Layout**: `grid grid-cols-2 sm:grid-cols-4 gap-4`
- **Cards**: Metallic gradient border + glassmorphism inner, teal tool name, slate-400 description

```jsx
<section className="py-16" style={{ background: "#0E0F1E" }}>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
    <h2 className="text-2xl font-black text-white mb-6 text-center">Related Tools</h2>
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
      {[
        { name: "...", href: "/...", desc: "..." },
        // 4 tools total
      ].map((tool) => (
        <div
          key={tool.href}
          className="rounded-xl p-[1px]"
          style={{
            background: "linear-gradient(135deg, rgba(20,216,196,0.4), rgba(107,124,255,0.2), rgba(232,129,58,0.25), rgba(20,216,196,0.1))",
          }}
        >
          <Link
            href={tool.href}
            className="rounded-[11px] p-4 transition-all duration-200 hover:-translate-y-1 block h-full text-center flex flex-col justify-center min-h-[80px]"
            style={{
              background: `
                radial-gradient(ellipse 70% 60% at 95% 90%, rgba(232,129,58,0.06) 0%, transparent 70%),
                radial-gradient(ellipse 50% 50% at 5% 10%, rgba(20,216,196,0.04) 0%, transparent 60%),
                rgba(255, 255, 255, 0.07)
              `,
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              boxShadow: "inset 0 -1px 1px rgba(232,129,58,0.08), 0 2px 8px rgba(0,0,0,0.3)",
            }}
          >
            <div className="font-bold text-[#14D8C4] text-sm mb-1">{tool.name}</div>
            <div className="text-xs text-slate-400">{tool.desc}</div>
          </Link>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 7. FAQ (wave-color background)

- **Background**: Dark `#0E0F1E` with 4 radial gradients (orange, teal, purple wave-color glare)
- **Heading**: `text-3xl font-black text-white mb-10 text-center`
- **Cards**: Frosted glass (`rgba(255,255,255,0.04)`, `1px solid rgba(255,255,255,0.08)`)
- **Text**: `text-lg font-bold text-white` question, `text-slate-300 text-sm leading-relaxed` answer

```jsx
<section
  className="py-16"
  style={{
    background: `
      radial-gradient(ellipse 70% 40% at 30% 20%, rgba(232,129,58,0.07) 0%, transparent 55%),
      radial-gradient(ellipse 60% 50% at 80% 80%, rgba(20,216,196,0.06) 0%, transparent 55%),
      radial-gradient(ellipse 50% 40% at 60% 0%, rgba(107,124,255,0.05) 0%, transparent 50%),
      radial-gradient(ellipse 40% 30% at 10% 70%, rgba(232,129,58,0.04) 0%, transparent 50%),
      #0E0F1E
    `,
  }}
>
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
    <h2 className="text-3xl font-black text-white mb-10 text-center">Frequently Asked Questions</h2>
    <div className="space-y-4">
      {faqs.map((faq, i) => (
        <div
          key={i}
          className="rounded-xl p-6"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "1px solid rgba(255,255,255,0.08)",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3 className="text-lg font-bold text-white mb-2">{faq.q}</h3>
          <p className="text-slate-300 leading-relaxed text-sm">{faq.a}</p>
        </div>
      ))}
    </div>
  </div>
</section>
```

---

## 8. FAQ Schema (JSON-LD)

- Placed at the **bottom** of `<main>`, before closing `</main>`
- Must match the FAQ content exactly

```jsx
<Script id="faq-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": "...", "acceptedAnswer": { "@type": "Answer", "text": "..." } },
    // ...
  ]
})}} />
```

---

## Localization Rules

- **EN**: No URL prefix (e.g., `/pdf-to-jpg`). Uses `<Header />` and `<Footer />`.
- **ES**: `/es/` prefix (e.g., `/es/pdf-a-jpg`). Uses `<HeaderEs />` and `<FooterEs />`.
- **BR**: `/br/` prefix (e.g., `/br/pdf-para-jpg`). Uses `<HeaderBr />` and `<FooterBr />`.
- ES and BR pages must include `alternates` in metadata with `canonical` and `languages` hreflangs.
- All three languages must have **identical section structure, order, classes, and inline styles**. Only text content and hrefs differ.
- Related Tools hrefs must use the correct locale prefix.

---

## Upgrade / Tier-Gating Card

When a tool requires a paid plan (Pro, Business, Enterprise) and the user is on a free tier, the Processing Interface component renders an **upgrade card** instead of the tool. This card must match the dark cinematic aesthetic — never use flat white cards with light backgrounds.

- **Section background**: Dark `#0E0F1E` with standard radial gradients (same as other sections)
- **Card border**: Standard metallic gradient with a subtle gold accent woven in — `rgba(214,179,106,0.3)` added to the existing teal/purple/orange gradient
- **Card inner**: Standard glassmorphism plus a faint gold radial glow at top center — `radial-gradient(ellipse 40% 30% at 50% 0%, rgba(214,179,106,0.05) 0%, transparent 50%)`
- **Icon**: Standard dark gradient box with a warm gold glow instead of teal — `boxShadow: "0 0 20px rgba(214,179,106,0.25)"`. Crown icon in gold `text-[#E0C27A]`
- **Title**: `text-white`
- **Subtitle**: `text-[#14D8C4]` (stays teal)
- **Description**: `text-slate-400`
- **Primary CTA**: `bg-[#14D8C4] hover:bg-[#2EE6D6] text-[#0E0F1E]` (teal button)
- **Secondary CTA**: Ghost/outline with `border-[rgba(255,255,255,0.15)] text-slate-300`

The gold is intentionally subtle — just enough to distinguish the upgrade card from standard tool cards. Only 3 things carry the gold: the crown icon color, the icon glow, and a faint warm tint in the border gradient and inner radial.

### Gold accent tokens (upgrade cards only)

| Token | Value | Usage |
|---|---|---|
| Gold icon | `#E0C27A` | Crown icon color |
| Gold glow | `rgba(214,179,106,0.25)` | Icon box-shadow |
| Gold border accent | `rgba(214,179,106,0.3)` | One stop in the metallic border gradient |
| Gold inner tint | `rgba(214,179,106,0.05)` | Faint radial glow at card top center |

This applies to all 3 card types:
1. **Pre-gate** (tool blocked before loading — e.g., url-pdf-interface, paid-only tools)
2. **Upgrade required** (conversion fails because tool requires higher plan)
3. **Daily limit reached** (free conversion quota exhausted)

Components that render this card: `processing-interface.tsx`, `url-pdf-interface.tsx`, and any other interface component with `isPaidUser` checks.

---

## Prohibited Elements

These elements must NOT appear on any tool page:

- **No CTA / banner sections** — the Processing Interface is the call-to-action
- **No "Use Cases" sections** — condense use case content into the 3 Feature Blocks
- **No "Why Convert X to Y?" standalone sections** — put that content in the Intro paragraph
- **No 8-tool Related Tools grids** — always exactly 4 tools
- **No light-themed Related Tools** (white bg, gray borders, orange icons) — always dark metallic glassmorphism
- **No light-themed FAQ** (`bg-gray-50`, white cards, dark text) — always dark wave-color background with frosted glass cards
- **No `bg-[#191B4D]`** anywhere — the Hero uses `#0E0F1E` with radial gradients
- **No `bg-orange-500`** icon boxes — always dark gradient with teal glow
- **No `text-orange-500`** badge icons — always `text-[#14D8C4]`
- **No `bg-gray-50`** sections — use `bg-[#F3F4FF]` for light sections
- **No vertical step lists** with orange circles — always horizontal flex with dark gradient circles
- **No `<Script>` at the top** of the component — always at the bottom of `<main>`
- **No flat white upgrade cards** (`bg-white`, `border-slate-200`, `bg-orange-100` icon) — always dark glassmorphism with metallic border

---

## Color Reference

| Token | Value | Usage |
|---|---|---|
| Dark base | `#0E0F1E` | Hero, Feature Blocks, Related Tools, FAQ backgrounds |
| Surface light | `#F3F4FF` | Intro, How It Works backgrounds |
| Teal accent | `#14D8C4` | Icons, badge icons, step numbers, tool names |
| Teal glow | `rgba(20,216,196,0.3)` | Box shadows on circles and cards |
| Orange smear | `rgba(232,129,58,0.06–0.07)` | Radial gradients for warmth |
| Purple accent | `rgba(107,124,255,0.05–0.10)` | Radial gradients for depth |
| Glassmorphism fill | `rgba(255,255,255,0.07)` | Card backgrounds |
| Metallic border | `linear-gradient(135deg, teal 0.4, purple 0.2, orange 0.25, teal 0.1)` | Card border wrappers |
| Frosted FAQ card | `rgba(255,255,255,0.04)` + `1px solid rgba(255,255,255,0.08)` | FAQ items |
