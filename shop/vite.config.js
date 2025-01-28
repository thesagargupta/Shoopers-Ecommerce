import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    // Ensure the build output directory is 'shop/build' (or adjust to your needs)
    outDir: 'shop/build', // This ensures the build output is inside 'shop/build'
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9001", // Your backend API
        changeOrigin: true,
      },
    },
  },
});
