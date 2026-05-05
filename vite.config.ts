import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production base must match the repo segment in the GitHub Pages URL (case-sensitive).
// CI sets GITHUB_PAGES_BASE from the repo name (see .github/workflows/pages.yml).
// Local production check: `GITHUB_PAGES_BASE=/your-repo/ npm run build`
// Dev uses "/" so `npm run dev` stays at http://localhost:5173/
const rawBase = process.env.GITHUB_PAGES_BASE?.trim()
const repoBase =
  rawBase != null && rawBase !== ''
    ? rawBase.startsWith('/')
      ? rawBase.replace(/\/?$/, '/') || '/'
      : `/${rawBase.replace(/\/$/, '')}/`
    : '/mathgpt-clone/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
}))
