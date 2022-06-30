import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import path from 'node:path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.ts'),
      name: 'MyLib',
      fileName: (format) => `my-lib.${format}.js`
    },
    manifest: true,
    rollupOptions: {
      input: 'index.html'
    }
  },
  define: {
    "process.env": {}
  },
  resolve: {
    mainFields: ['browser', 'module', 'main'],
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  preview: {
    port: 5050
  }
})
