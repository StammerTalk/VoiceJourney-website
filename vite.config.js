import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import mdx from '@mdx-js/rollup'
import remarkFrontmatter from 'remark-frontmatter'
import remarkMdxFrontmatter from 'remark-mdx-frontmatter'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    mdx({
      remarkPlugins: [remarkFrontmatter, remarkMdxFrontmatter],
      rehypePlugins: []
    })
  ],
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