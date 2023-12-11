import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "dist",
    base: "/faq-accordion/",
    sourcemap: true,
  },
  server: {
    open: true,
    port: 3000,
  },
  plugins: [],
});
