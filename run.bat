@echo off
echo 🔥 Starting the JavaScript Roast Server...
echo ⚡ Built with Bun - Zero config, maximum roast
echo.

REM Check if Bun is installed
where bun >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Bun is not installed!
    echo 📦 Install it with: powershell -c "irm bun.sh/install.ps1 | iex"
    pause
    exit /b 1
)

REM Install dependencies if needed
if not exist "node_modules" (
    echo 📦 Installing dependencies...
    bun install
    echo.
)

echo 🚀 Starting server at http://localhost:3000
echo 🎯 Prepare for the most beautiful JavaScript roast of 2024
echo.

bun run --watch server.ts
