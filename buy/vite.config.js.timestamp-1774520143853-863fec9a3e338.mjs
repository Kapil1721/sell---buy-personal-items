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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxub2RlXFxcXHBlcnNvbmFsaXRlbXNcXFxcYnV5XCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxub2RlXFxcXHBlcnNvbmFsaXRlbXNcXFxcYnV5XFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9ub2RlL3BlcnNvbmFsaXRlbXMvYnV5L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIHBsdWdpbnM6IFtcbiAgICByZWFjdCgpLFxuICAgIHZpc3VhbGl6ZXIoe1xuICAgICAgZmlsZW5hbWU6IFwiLi9kaXN0L3N0YXRzLmh0bWxcIixcbiAgICAgIG9wZW46IHRydWUsXG4gICAgfSksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgc291cmNlbWFwOiB0cnVlLCAvLyBHZW5lcmF0ZSBzb3VyY2VtYXBzIGZvciB1c2Ugd2l0aCBzb3VyY2UtbWFwLWV4cGxvcmVyXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgLy8gQWRkaXRpb25hbCBSb2xsdXAgb3B0aW9ucyBpZiBuZWVkZWRcbiAgICB9LFxuICB9LFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQXFRLFNBQVMsb0JBQW9CO0FBQ2xTLE9BQU8sV0FBVztBQUNsQixTQUFTLGtCQUFrQjtBQUUzQixJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxNQUFNO0FBQUEsSUFDTixXQUFXO0FBQUEsTUFDVCxVQUFVO0FBQUEsTUFDVixNQUFNO0FBQUEsSUFDUixDQUFDO0FBQUEsRUFDSDtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsV0FBVztBQUFBO0FBQUEsSUFDWCxlQUFlO0FBQUE7QUFBQSxJQUVmO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
