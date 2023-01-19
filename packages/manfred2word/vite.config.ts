import { defineConfig } from "vite";

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: "src/index.ts",
      name: "Manfred2Word",
      fileName: (format) => `manfred2word.${format}.js`,
      formats: ["es", "cjs"],
    },
  },
});
