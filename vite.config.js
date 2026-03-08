import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// GitHub Pages project URL format: https://<user>.github.io/<repo>/
const repositoryBase = "/studiobox/";

export default defineConfig({
  plugins: [react()],
  base: repositoryBase,
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },
});
