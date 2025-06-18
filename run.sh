#!/bin/bash

echo "🔥 Starting the JavaScript Roast Server..."
echo "⚡ Built with Bun - Zero config, maximum roast"
echo ""

# Check if Bun is installed
if ! command -v bun &> /dev/null; then
    echo "❌ Bun is not installed!"
    echo "📦 Install it with: curl -fsSL https://bun.sh/install | bash"
    exit 1
fi

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    bun install
    echo ""
fi

echo "🚀 Starting server at http://localhost:3000"
echo "🎯 Prepare for the most beautiful JavaScript roast of 2024"
echo ""

bun run --watch server.ts
