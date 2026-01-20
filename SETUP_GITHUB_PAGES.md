# GitHub Pages Setup Guide

This repository is now fully compatible with GitHub Pages! The static version is automatically deployed when you push to the main branch.

## ✅ What's Already Set Up

1. **Static Files**: Located in `docs/` directory
   - `docs/index.html` - Main application page
   - `docs/static/visualizer/app.js` - JavaScript
   - `docs/static/visualizer/styles.css` - Styles

2. **GitHub Actions Workflow**: `.github/workflows/pages.yml`
   - Automatically builds and deploys on push to main
   - Deploys from `docs/` directory

3. **`.nojekyll` file**: Prevents Jekyll processing

## 🚀 Enabling GitHub Pages

### Step 1: Push Your Code

```bash
git add .
git commit -m "Add GitHub Pages static files"
git push origin main
```

### Step 2: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (left sidebar)
3. Under **Source**, select:
   - **GitHub Actions** ⚠️ **IMPORTANT: Select this, NOT "Deploy from a branch"**
4. Click **Save**

**Note**: If you see "Deploy from a branch" selected, change it to **"GitHub Actions"**. This is crucial - the workflow will handle deployment automatically.

### Step 3: Wait for Deployment

- GitHub Actions will automatically build and deploy
- Check the **Actions** tab to see deployment progress
- Your site will be available at: `https://YOUR_USERNAME.github.io/optimization-methods/`

## 🔄 Updating the Static Site

When you update the Django application, sync the static files:

### Option 1: Use the Sync Script (Recommended)

```bash
./sync-static.sh
git add docs/
git commit -m "Update GitHub Pages static files"
git push
```

### Option 2: Manual Sync

1. Copy `visualizer/templates/visualizer/index.html` to `docs/index.html`
2. Remove Django template tags:
   - Remove `{% load static %}`
   - Replace `{% static 'visualizer/...' %}` with `static/visualizer/...`
3. Copy static files:
   ```bash
   cp visualizer/static/visualizer/app.js docs/static/visualizer/app.js
   cp visualizer/static/visualizer/styles.css docs/static/visualizer/styles.css
   ```
4. Commit and push

## 📝 Important Notes

- **No Server Required**: The GitHub Pages version runs entirely client-side
- **All Features Work**: All visualization features work without a backend
- **Automatic Updates**: Every push to main automatically updates the live site
- **Custom Domain**: You can add a custom domain in Settings → Pages

## 🐛 Troubleshooting

### Site Not Updating

1. Check GitHub Actions workflow status
2. Verify files are in `docs/` directory
3. Ensure `.nojekyll` file exists in `docs/`
4. Check GitHub Pages settings (Source should be `/docs`)

### 404 Errors

- Ensure `docs/index.html` exists
- Check file paths are relative (not absolute)
- Verify static files are in `docs/static/visualizer/`

### Build Failures

- Check the Actions tab for error messages
- Verify all required files exist
- Ensure file paths are correct

## 🔗 URLs

- **Repository**: `https://github.com/yashpathak2001/optimization-methods`
- **Live Site**: `https://yashpathak2001.github.io/optimization-methods/`
- **Actions**: `https://github.com/yashpathak2001/optimization-methods/actions`

## 📚 For Students

Students can now:
- Access the tool directly from the GitHub Pages URL
- No installation or setup required
- Works on any device with a browser
- Always up-to-date with latest changes

---

**Your GitHub Pages site is ready!** 🎉
