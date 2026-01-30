#!/bin/bash

# Personal Website - Local Development Script

set -e

echo "🚀 Starting local development server..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Start dev server
echo "🌐 Opening http://localhost:3000"
npm run dev
