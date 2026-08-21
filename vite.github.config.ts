import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  base: '/topguard-roofing-demo/',
  plugins: [react()],
  build: {
    outDir: 'dist-github',
    emptyOutDir: true,
  },
})
