import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from 'tailwindcss'; // Import Tailwind CSS

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: { // เพิ่มส่วนนี้สำหรับ Tailwind CSS
    postcss: {
      plugins: [tailwindcss()],
    },
  },
  server: {
    watch: {
      usePolling: true, // จำเป็นสำหรับ Docker container hot reload
    },
    host: true, // อนุญาตการเข้าถึงจากภายนอก container (เช่น browser บน host machine)
    strictPort: true,
    port: 5173, // Port ที่ Vite dev server จะรัน (สามารถเปลี่ยนได้)
  }
})