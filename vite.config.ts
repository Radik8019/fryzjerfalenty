import { defineConfig, type Plugin } from 'vite'
import react from '@vitejs/plugin-react'

const PRODUCTION_CSP = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "object-src 'none'",
  "frame-ancestors 'none'",
  "img-src 'self' data:",
  "font-src 'self'",
  "style-src 'self' 'unsafe-inline'",
  "script-src 'self' https://challenges.cloudflare.com",
  "frame-src https://challenges.cloudflare.com",
  "connect-src 'self' https://splitforms.com https://challenges.cloudflare.com",
  'upgrade-insecure-requests',
].join('; ')

function productionCsp(): Plugin {
  return {
    name: 'production-csp',
    transformIndexHtml: {
      order: 'pre',
      handler(html, ctx) {
        if (!ctx.server) {
          return html.replace(
            '<head>',
            `<head>\n    <meta http-equiv="Content-Security-Policy" content="${PRODUCTION_CSP}" />`,
          )
        }
        return html
      },
    },
  }
}

export default defineConfig({
  plugins: [react(), productionCsp()],
  base: '/',
  build: {
    sourcemap: false,
  },
})
