import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html",
      open: true,
    }),
  ],
  build: {
    sourcemap: true, // Generate sourcemaps for use with source-map-explorer
    rollupOptions: {
      // Additional Rollup options if needed
    },
  },
});
