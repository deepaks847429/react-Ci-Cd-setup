import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {configDefaults} from 'jest-config'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.js',
    exclude:[...configDefaults.exclude, 'e2e/*'] // Add this line if you have a setup file
  },
})