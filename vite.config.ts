import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), vueJsx()],
  build: {
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
