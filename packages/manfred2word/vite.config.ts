import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import { fileURLToPath } from 'node:url';

export default ({ mode }) =>
  defineConfig({
    plugins: [dts()],
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'Manfred2Word',
      },
      sourcemap: mode === 'development',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  });
