import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Published at /roofing/ultimate/v2/ — the repository root itself serves a blank page.
export default defineConfig({
  base: '/roofing/ultimate/v2/',
  plugins: [react()],
  build: {
    outDir: 'dist-ultimate-v2',
    emptyOutDir: true,
  },
})
