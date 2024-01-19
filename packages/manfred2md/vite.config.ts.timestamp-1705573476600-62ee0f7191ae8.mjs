// vite.config.ts
import { defineConfig } from 'file:///C:/Users/abeld/manfred-export-app/node_modules/vite/dist/node/index.js';
import dts from 'file:///C:/Users/abeld/manfred-export-app/node_modules/vite-plugin-dts/dist/index.mjs';
import { fileURLToPath } from 'node:url';
var __vite_injected_original_import_meta_url =
  'file:///C:/Users/abeld/manfred-export-app/packages/manfred2md/vite.config.ts';
var vite_config_default = ({ mode }) =>
  defineConfig({
    plugins: [dts()],
    build: {
      lib: {
        entry: 'src/index.ts',
        name: 'Manfred2Md',
      },
      sourcemap: mode === 'development',
    },
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url)),
      },
    },
  });
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmVsZFxcXFxtYW5mcmVkLWV4cG9ydC1hcHBcXFxccGFja2FnZXNcXFxcbWFuZnJlZDJtZFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcYWJlbGRcXFxcbWFuZnJlZC1leHBvcnQtYXBwXFxcXHBhY2thZ2VzXFxcXG1hbmZyZWQybWRcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL2FiZWxkL21hbmZyZWQtZXhwb3J0LWFwcC9wYWNrYWdlcy9tYW5mcmVkMm1kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT5cclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW2R0cygpXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGxpYjoge1xyXG4gICAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcclxuICAgICAgICBuYW1lOiAnTWFuZnJlZDJNZCcsXHJcbiAgICAgIH0sXHJcbiAgICAgIHNvdXJjZW1hcDogbW9kZSA9PT0gJ2RldmVsb3BtZW50JyxcclxuICAgIH0sXHJcbiAgICByZXNvbHZlOiB7XHJcbiAgICAgIGFsaWFzOiB7XHJcbiAgICAgICAgJ0AnOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoJy4vc3JjJywgaW1wb3J0Lm1ldGEudXJsKSksXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0pO1xyXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQTZWLFNBQVMsb0JBQW9CO0FBQzFYLE9BQU8sU0FBUztBQUNoQixTQUFTLHFCQUFxQjtBQUYrTCxJQUFNLDJDQUEyQztBQUk5USxJQUFPLHNCQUFRLENBQUMsRUFBRSxLQUFLLE1BQ3JCLGFBQWE7QUFBQSxFQUNYLFNBQVMsQ0FBQyxJQUFJLENBQUM7QUFBQSxFQUNmLE9BQU87QUFBQSxJQUNMLEtBQUs7QUFBQSxNQUNILE9BQU87QUFBQSxNQUNQLE1BQU07QUFBQSxJQUNSO0FBQUEsSUFDQSxXQUFXLFNBQVM7QUFBQSxFQUN0QjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
