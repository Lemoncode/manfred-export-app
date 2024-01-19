// vite.config.ts
import { defineConfig } from 'file:///C:/Users/abeld/manfred-export-app/node_modules/vite/dist/node/index.js';
import dts from 'file:///C:/Users/abeld/manfred-export-app/node_modules/vite-plugin-dts/dist/index.mjs';
import { fileURLToPath } from 'node:url';
var __vite_injected_original_import_meta_url =
  'file:///C:/Users/abeld/manfred-export-app/packages/manfred2word/vite.config.ts';
var vite_config_default = ({ mode }) =>
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
        '@': fileURLToPath(new URL('./src', __vite_injected_original_import_meta_url)),
      },
    },
  });
export { vite_config_default as default };
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmVsZFxcXFxtYW5mcmVkLWV4cG9ydC1hcHBcXFxccGFja2FnZXNcXFxcbWFuZnJlZDJ3b3JkXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxhYmVsZFxcXFxtYW5mcmVkLWV4cG9ydC1hcHBcXFxccGFja2FnZXNcXFxcbWFuZnJlZDJ3b3JkXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy9hYmVsZC9tYW5mcmVkLWV4cG9ydC1hcHAvcGFja2FnZXMvbWFuZnJlZDJ3b3JkL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCBkdHMgZnJvbSAndml0ZS1wbHVnaW4tZHRzJztcclxuaW1wb3J0IHsgZmlsZVVSTFRvUGF0aCB9IGZyb20gJ25vZGU6dXJsJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0ICh7IG1vZGUgfSkgPT5cclxuICBkZWZpbmVDb25maWcoe1xyXG4gICAgcGx1Z2luczogW2R0cygpXSxcclxuICAgIGJ1aWxkOiB7XHJcbiAgICAgIGxpYjoge1xyXG4gICAgICAgIGVudHJ5OiAnc3JjL2luZGV4LnRzJyxcclxuICAgICAgICBuYW1lOiAnTWFuZnJlZDJXb3JkJyxcclxuICAgICAgfSxcclxuICAgICAgc291cmNlbWFwOiBtb2RlID09PSAnZGV2ZWxvcG1lbnQnLFxyXG4gICAgfSxcclxuICAgIHJlc29sdmU6IHtcclxuICAgICAgYWxpYXM6IHtcclxuICAgICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSk7XHJcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBbVcsU0FBUyxvQkFBb0I7QUFDaFksT0FBTyxTQUFTO0FBQ2hCLFNBQVMscUJBQXFCO0FBRm1NLElBQU0sMkNBQTJDO0FBSWxSLElBQU8sc0JBQVEsQ0FBQyxFQUFFLEtBQUssTUFDckIsYUFBYTtBQUFBLEVBQ1gsU0FBUyxDQUFDLElBQUksQ0FBQztBQUFBLEVBQ2YsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTztBQUFBLE1BQ1AsTUFBTTtBQUFBLElBQ1I7QUFBQSxJQUNBLFdBQVcsU0FBUztBQUFBLEVBQ3RCO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
