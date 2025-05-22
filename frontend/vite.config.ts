import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/': {
        target: 'http://backend:8080',
        changeOrigin: true,
      },
      '/login': { // หรืออาจจะรวมอยู่ใน /api
        target: 'http://backend:8080', // ตรวจสอบตรงนี้!
        changeOrigin: true,
      },
      '/register': 'http://backend:8080',
      '/jobs': 'http://backend:8080',
      '/apply': 'http://backend:8080',
      '/applications': 'http://backend:8080',
    }
  }
})
