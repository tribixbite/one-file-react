# JavaScript Roast App 🔥

A visceral takedown of JavaScript's evolution from 2016 to 2025, built with Bun's native TSX support.

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

## Would You Like To Know More?

### Hint: Check Branches
To run locally and perform automated testing, see the `dev` branch.