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
        ["primary"]: "#374B5C",
        ["light"]: "#73818c",
        ["secondary"]: "#FFB300",
        ["helper"]: "#537cd9",
        ["bdr"]: "#D5E3EE",
        ["loader"]: "#F3F4F6",
      },
      backgroundColor: {
        ["btn-primay"]: "#ffb300",
        ["active"]: "#FFB300",
        ["pending"]: "#537CD9",
      },
      fontFamily: {
        ["monoton"]: "Monoton",
      },
    },
  },
  plugins: ["@tailwindcss/aspect-ratio", nextui()],
};
