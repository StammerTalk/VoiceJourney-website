import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Set the base path to match your GitHub repository name
  build: {
    outDir: 'dist',
    // Add 404.html that redirects to index.html for client-side routing support
    rollupOptions: {
      output: {
        manualChunks: undefined,
      },
    },
  },
})