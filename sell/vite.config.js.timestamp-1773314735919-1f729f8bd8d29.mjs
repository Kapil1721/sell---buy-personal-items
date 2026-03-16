// vite.config.js
import { defineConfig } from "file:///E:/node/personalitems/sell/node_modules/vite/dist/node/index.js";
import react from "file:///E:/node/personalitems/sell/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { visualizer } from "file:///E:/node/personalitems/sell/node_modules/rollup-plugin-visualizer/dist/plugin/index.js";
var vite_config_default = defineConfig({
  envPrefix: ["VITE_", "SELL_", "BUY_", "SERVER_"],
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
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxub2RlXFxcXHBlcnNvbmFsaXRlbXNcXFxcc2VsbFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiRTpcXFxcbm9kZVxcXFxwZXJzb25hbGl0ZW1zXFxcXHNlbGxcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0U6L25vZGUvcGVyc29uYWxpdGVtcy9zZWxsL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcbmltcG9ydCByZWFjdCBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tcmVhY3RcIjtcbmltcG9ydCB7IHZpc3VhbGl6ZXIgfSBmcm9tIFwicm9sbHVwLXBsdWdpbi12aXN1YWxpemVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XG4gIGVudlByZWZpeDogW1wiVklURV9cIiwgXCJTRUxMX1wiLCBcIkJVWV9cIiwgXCJTRVJWRVJfXCJdLFxuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB2aXN1YWxpemVyKHtcbiAgICAgIGZpbGVuYW1lOiBcIi4vZGlzdC9zdGF0cy5odG1sXCIsXG4gICAgICBvcGVuOiB0cnVlLFxuICAgIH0pLFxuICBdLFxuICBidWlsZDoge1xuICAgIHNvdXJjZW1hcDogdHJ1ZSwgLy8gR2VuZXJhdGUgc291cmNlbWFwcyBmb3IgdXNlIHdpdGggc291cmNlLW1hcC1leHBsb3JlclxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIC8vIEFkZGl0aW9uYWwgUm9sbHVwIG9wdGlvbnMgaWYgbmVlZGVkXG4gICAgfSxcbiAgfSxcbn0pOyJdLAogICJtYXBwaW5ncyI6ICI7QUFBd1EsU0FBUyxvQkFBb0I7QUFDclMsT0FBTyxXQUFXO0FBQ2xCLFNBQVMsa0JBQWtCO0FBRTNCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFdBQVcsQ0FBQyxTQUFTLFNBQVMsUUFBUSxTQUFTO0FBQUEsRUFDL0MsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sV0FBVztBQUFBLE1BQ1QsVUFBVTtBQUFBLE1BQ1YsTUFBTTtBQUFBLElBQ1IsQ0FBQztBQUFBLEVBQ0g7QUFBQSxFQUNBLE9BQU87QUFBQSxJQUNMLFdBQVc7QUFBQTtBQUFBLElBQ1gsZUFBZTtBQUFBO0FBQUEsSUFFZjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
