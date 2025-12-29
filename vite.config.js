import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
    https: false,
    proxy: {
      '/gdacs': {
        target: 'https://www.gdacs.org',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.replace(/^\/gdacs/, '')
      }
    }
  }
})