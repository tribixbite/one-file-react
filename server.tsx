import { renderToString } from 'react-dom/server'
import App from './bun'

// Bun server using native JSX/TSX support
Bun.serve({
  port: 3002,
  async fetch(req) {
    const url = new URL(req.url)
    
    // Serve the main app
    if (url.pathname === '/') {
      const html = renderToString(<App />)
      return new Response(`<!DOCTYPE html>${html}`, {
        headers: { 
          'Content-Type': 'text/html',
          'Cache-Control': 'no-cache'
        }
      })
    }
    
    // 404 for other routes
    return new Response('Not Found', { status: 404 })
  }
})

console.log(`🔥 Bun server running at http://localhost:3002`)
console.log(`⚡ Serving the most visceral JavaScript roast with native TSX support`)
console.log(`🎯 Zero config, zero build step, maximum roast`)
