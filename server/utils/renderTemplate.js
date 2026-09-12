import fs from "fs";

export const renderHtmlTemplate = (templatePath, replacements = {}, fallbackTemplate = "") => {
  let template = fallbackTemplate;

  try {
    if (templatePath && fs.existsSync(templatePath)) {
      template = fs.readFileSync(templatePath, "utf8");
    }
  } catch (err) {
    console.warn("Could not read template from path:", templatePath, err?.message);
  }

  if (!template) {
    template = fallbackTemplate || "";
  }

  return Object.entries(replacements).reduce(
    (html, [key, value]) => html.replaceAll(`{{${key}}}`, String(value ?? "")),
    template
  );
};
