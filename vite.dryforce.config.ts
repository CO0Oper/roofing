import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'dryforce',
  base: '/roofing/dryforce/',
  publicDir: '../public',
  plugins: [react()],
  build: {
    outDir: '../dist-dryforce',
    emptyOutDir: true,
  },
})
