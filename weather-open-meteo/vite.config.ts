import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: "src/weather-open-meteo.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
