# Optimization Methods Visualizer - GitHub Pages

This directory contains the static version of the Optimization Methods Visualizer, deployed to GitHub Pages.

## 🚀 Live Demo

The application is available at: `https://yashpathak2001.github.io/optimization-methods/`

## 📁 Structure

```
docs/
├── index.html              # Main application page
└── static/
    └── visualizer/
        ├── app.js         # Application JavaScript
        └── styles.css     # Application styles
```

## 🔄 Updating the Static Site

When you update the Django application:

1. Copy `visualizer/templates/visualizer/index.html` to `docs/index.html`
2. Remove Django template tags (`{% load static %}`, `{% static '...' %}`)
3. Update paths to use relative paths (`static/visualizer/...`)
4. Copy `visualizer/static/visualizer/*` to `docs/static/visualizer/`
5. Commit and push - GitHub Pages will automatically deploy

## 📝 Notes

- This is a static version - no server-side functionality
- All features work client-side using JavaScript
- No database or backend required
- Perfect for GitHub Pages hosting
