import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  plugins: [dts()],
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'Manfred2Word',
      fileName: format => `manfred2word.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
