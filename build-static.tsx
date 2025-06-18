import { renderToString } from 'react-dom/server'
import App from './bun'

// Create dist directory if it doesn't exist
const distDir = './dist'
try {
  await Bun.file(distDir).exists() || await Bun.write(`${distDir}/.gitkeep`, '')
} catch {
  // Directory creation will happen when we write the file
}

// Render the app to static HTML
console.log('🏗️  Building static HTML...')
const html = renderToString(<App />)
const fullHtml = `<!DOCTYPE html>${html}`

// Write to dist/index.html
await Bun.write('./dist/index.html', fullHtml)

console.log('✅ Static HTML generated successfully!')
console.log('📄 File: dist/index.html')
console.log(`📊 Size: ${(Bun.file('./dist/index.html').size)} bytes`)
console.log('')
console.log('🌐 You can now serve the dist/ directory with any static file server')
console.log('💡 Try: cd dist && python -m http.server 8000')
console.log('🚀 Or deploy the dist/ folder to any static hosting service')
