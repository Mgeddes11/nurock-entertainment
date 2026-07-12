import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const siteOrigin = env.VITE_SITE_ORIGIN || 'https://nurockentertainment.com'

  return {
    server: {
      host: '127.0.0.1',
      port: 5173,
    },
    plugins: [
      tailwindcss(),
      react(),
      {
        name: 'html-site-origin',
        transformIndexHtml(html) {
          return html.replaceAll('__SITE_ORIGIN__', siteOrigin)
        },
      },
    ],
  }
})
