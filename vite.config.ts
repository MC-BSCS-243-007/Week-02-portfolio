import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Relative base keeps the build portable on GitHub Pages project sites
  // (https://user.github.io/repo/) as well as at a domain root.
  base: './',
  plugins: [react()],
})
// 