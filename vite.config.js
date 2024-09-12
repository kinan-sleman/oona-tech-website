import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/oona-tech-website/",
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        assetFileNames: 'assets/[name][extname]',
        entryFileNames: '[name].js',
        chunkFileNames: '[name].js',
      },
    },
  },
})
