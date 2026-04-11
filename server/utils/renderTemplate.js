import fs from "fs";

export const renderHtmlTemplate = (templatePath, replacements = {}) => {
  const template = fs.readFileSync(templatePath, "utf8");

  return Object.entries(replacements).reduce(
    (html, [key, value]) => html.replaceAll(`{{${key}}}`, String(value ?? "")),
    template
  );
};
