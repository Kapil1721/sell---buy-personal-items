import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

export const getTemplatePath = (templateName, callerUrl = import.meta.url) => {
  const callerDir = path.dirname(fileURLToPath(callerUrl));

  const candidatePaths = [
    path.resolve(callerDir, "../templates", templateName),
    path.resolve(callerDir, "templates", templateName),
    path.resolve(process.cwd(), "server/templates", templateName),
    path.resolve(process.cwd(), "templates", templateName),
    path.resolve("/var/task/server/templates", templateName),
    path.resolve("/var/task/templates", templateName),
  ];

  for (const candidate of candidatePaths) {
    if (fs.existsSync(candidate)) {
      return candidate;
    }
  }

  return candidatePaths[0];
};
