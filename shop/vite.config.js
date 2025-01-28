import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'build', // This ensures the build directory is created as 'build'
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:9001", // The backend server you're targeting
        changeOrigin: true, // Modifies the origin of the request to the target URL
      },
    },
  },
});
