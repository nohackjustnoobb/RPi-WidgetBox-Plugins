import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/fullscreen-clock.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
