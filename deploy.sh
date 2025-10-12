#!/bin/bash
# Quick deployment script for Vercel

echo "🚀 Deploying BuildVerse to Vercel..."

# Initialize git if not already
git init
git add .
git commit -m "Initial BuildVerse website"

# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

echo "✅ Deployment complete! Copy the URL from above."


