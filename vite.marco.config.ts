import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'marco',
  base: '/topguard-roofing-demo/marco-roofing/',
  plugins: [react()],
  build: {
    outDir: '../dist-marco',
    emptyOutDir: true,
  },
})
