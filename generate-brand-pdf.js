const { chromium } = require("@playwright/test");
const path = require("path");

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  const htmlPath = path.join(__dirname, "PDF.it-Guia-de-Marca.html");
  const fileUrl = "file:///" + htmlPath.replace(/\\/g, "/");
  await page.goto(fileUrl, { waitUntil: "networkidle" });
  await page.pdf({
    path: path.join(__dirname, "PDF.it-Guia-de-Marca.pdf"),
    format: "Letter",
    printBackground: true,
    margin: { top: "0", right: "0", bottom: "0", left: "0" },
  });
  await browser.close();
  console.log("PDF generated: PDF.it-Guia-de-Marca.pdf");
})();
