import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// ✅ เพิ่ม server.proxy
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      proxy: {
        '/': {
          target: 'http://localhost:8080',
          changeOrigin: true,
        }
      }
    }
  }
})