import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/repository-name/',  // replace with your repository name
  plugins: [react()],
  build: {
    outDir: 'docs',  // GitHub Pages default directory
  },
})
