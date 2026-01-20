#!/bin/bash

# Script to sync Django app files to static GitHub Pages version
# Run this script whenever you update the Django application

echo "🔄 Syncing files to GitHub Pages static version..."

# Copy HTML file and remove Django template tags
echo "📄 Copying index.html..."
cp visualizer/templates/visualizer/index.html docs/index.html

# Remove Django template tags
sed -i '' 's/{% load static %}//g' docs/index.html
sed -i '' "s|{% static 'visualizer/\([^']*\)' %}|static/visualizer/\1|g" docs/index.html

# Copy static files
echo "📦 Copying static files..."
mkdir -p docs/static/visualizer
cp visualizer/static/visualizer/app.js docs/static/visualizer/app.js
cp visualizer/static/visualizer/styles.css docs/static/visualizer/styles.css

echo "✅ Sync complete! Files are ready for GitHub Pages."
echo "💡 Commit and push to deploy:"
echo "   git add docs/"
echo "   git commit -m 'Update GitHub Pages static files'"
echo "   git push"
