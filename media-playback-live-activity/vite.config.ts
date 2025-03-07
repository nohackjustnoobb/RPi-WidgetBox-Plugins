import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      preserveEntrySignatures: "strict",
      input: {
        index: "src/media-playback-live-activity.ts",
        background: "src/background.ts",
      },
      output: {
        entryFileNames: "[name].js",
      },
    },
  },
});
