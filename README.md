# JavaScript Roast App 🔥

A visceral takedown of JavaScript's evolution from 2016 to 2025, built with Bun's native TSX support.

## Development

### Local Development Server
Run the dynamic server with hot reloading:
```bash
bun run dev
```
Visit http://localhost:3002

### Build Static Site
Generate a static HTML file for deployment:
```bash
bun run build:static
```

This creates a `dist/index.html` file that contains the entire app as static HTML.

### Preview Static Site
After building, preview the static site locally:
```bash
bun run preview
```
Visit http://localhost:8000

## Deployment

### GitHub Pages
This repository includes a GitHub Action that automatically:
1. Builds the static HTML using Bun
2. Deploys to GitHub Pages

To enable:
1. Push to `main` or `master` branch
2. Go to your repository settings → Pages
3. Set source to "GitHub Actions"
4. The site will be available at `https://tribixbite.github.io/one-file-react`

### Manual Deployment
You can deploy the `dist/` folder to any static hosting service:
- Netlify: Drag and drop the `dist` folder
- Vercel: `vercel --prod dist`
- Surge: `cd dist && surge`
- GitHub Pages: Push the `dist` contents to a `gh-pages` branch

## How It Works

1. **bun.tsx** - A React component that returns a complete HTML document
2. **server.tsx** - Bun server for local development (SSR)
3. **build-static.tsx** - Renders the React component to static HTML
4. **GitHub Action** - Automates the static build and deployment process

The magic is that Bun can directly run TypeScript/TSX files without any build configuration, and React's `renderToString` converts the component tree into static HTML.

## Features

- ⚡ **Zero Config**: No webpack, no babel, no complex build setup
- 🚀 **Fast Development**: Bun's native TSX support with hot reloading  
- 📦 **Static Export**: Converts to plain HTML for CDN deployment
- 🎨 **Beautiful UI**: Animated charts, gradients, and modern design
- 📊 **Data Visualization**: ApexCharts integration
- 📱 **Responsive**: Works on all device sizes

## The JavaScript Evolution Story

This app tells the story of JavaScript's evolution from the tooling chaos of 2016 to the streamlined development experience of 2025, with interactive charts and a healthy dose of humor about our collective journey through JavaScript fatigue.

Built with love, Bun, and a deep appreciation for how far we've come. 🎯
