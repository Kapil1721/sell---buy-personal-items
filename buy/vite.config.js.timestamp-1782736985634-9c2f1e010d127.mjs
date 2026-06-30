// vite.config.js
import { defineConfig } from "file:///E:/node/personalitems/buy/node_modules/vite/dist/node/index.js";
import react from "file:///E:/node/personalitems/buy/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///E:/node/personalitems/buy/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    visualizer({
      filename: "./dist/stats.html",
      open: true
    })
  ],
  build: {
    sourcemap: true,
    // Generate sourcemaps for use with source-map-explorer
    rollupOptions: {
      // Additional Rollup options if needed
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxub2RlXFxcXHBlcnNvbmFsaXRlbXNcXFxcYnV5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxub2RlXFxcXHBlcnNvbmFsaXRlbXNcXFxcYnV5XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9ub2RlL3BlcnNvbmFsaXRlbXMvYnV5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgeyB2aXN1YWxpemVyIH0gZnJvbSBcInJvbGx1cC1wbHVnaW4tdmlzdWFsaXplclwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcclxuICBwbHVnaW5zOiBbXHJcbiAgICByZWFjdCgpLFxyXG4gICAgdmlzdWFsaXplcih7XHJcbiAgICAgIGZpbGVuYW1lOiBcIi4vZGlzdC9zdGF0cy5odG1sXCIsXHJcbiAgICAgIG9wZW46IHRydWUsXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJ1aWxkOiB7XHJcbiAgICBzb3VyY2VtYXA6IHRydWUsIC8vIEdlbmVyYXRlIHNvdXJjZW1hcHMgZm9yIHVzZSB3aXRoIHNvdXJjZS1tYXAtZXhwbG9yZXJcclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcclxuICAgICAgLy8gQWRkaXRpb25hbCBSb2xsdXAgb3B0aW9ucyBpZiBuZWVkZWRcclxuICAgIH0sXHJcbiAgfSxcclxufSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBcVEsU0FBUyxvQkFBb0I7QUFDbFMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBRTNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLFdBQVc7QUFBQSxNQUNULFVBQVU7QUFBQSxNQUNWLE1BQU07QUFBQSxJQUNSLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUE7QUFBQSxJQUNYLGVBQWU7QUFBQTtBQUFBLElBRWY7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
