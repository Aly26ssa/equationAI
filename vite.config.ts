import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Production base must match the repository name in the GitHub Pages URL (path is case-sensitive).
// Repository: github.com/Aly26ssa/equation-ai → https://aly26ssa.github.io/equation-ai/
// Dev uses "/" so `npm run dev` stays at http://localhost:5173/
const repoBase = '/equation-ai/'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? repoBase : '/',
  plugins: [react()],
  server: {
    // Browser → same-origin `/api/ollama/...` → Ollama on localhost (avoids CORS in dev).
    proxy: {
      '/api/ollama': {
        target: 'http://127.0.0.1:11434',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ollama/, ''),
      },
    },
  },
  // `vite preview` does not inherit `server.proxy`; mirror it for local production builds.
  preview: {
    proxy: {
      '/api/ollama': {
        target: 'http://127.0.0.1:11434',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/ollama/, ''),
      },
    },
  },
}))
