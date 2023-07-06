import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  build: {
    emptyOutDir: false,
    lib: {
      entry: 'src/index.ts',
      name: 'Manfred2Md',
      fileName: format => `manfred2md.${format}.js`,
      formats: ['es', 'cjs'],
    },
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
});
