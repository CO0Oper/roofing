import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({ root: 'j-roofing', base: '/roofing/j-roofing/', plugins: [react()], build: { outDir: '../dist-j-roofing', emptyOutDir: true } })
