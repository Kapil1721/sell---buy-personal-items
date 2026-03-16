import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ["primary"]: "#1e62a4",
        ["light"]: "#577694",
        ["secondary"]: "#3ebd8d",
        ["helper"]: "#72ad97",
        ["bdr"]: "#d5eeda",
        ["loader"]: "#f2f7fc",
      },
      backgroundColor: {
        ["btn-primay"]: "#3ebd8d",
        ["active"]: "#3ebd8d",
        ["pending"]: "#72ad97",
      },
      fontFamily: {
        ["monoton"]: "Monoton",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio", nextui()],
};
