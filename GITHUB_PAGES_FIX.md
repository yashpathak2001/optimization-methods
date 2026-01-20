# Fix: GitHub Pages Showing README Instead of Site

If GitHub Pages is showing the README instead of your application, follow these steps:

## 🔧 Solution

### Step 1: Check GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages** (in the left sidebar)
3. Under **Source**, you should see:
   - **Deploy from a branch** - ❌ **Change this!**
   - **GitHub Actions** - ✅ **Select this instead!**

### Step 2: Switch to GitHub Actions

1. In the Pages settings, change the Source dropdown from "Deploy from a branch" to **"GitHub Actions"**
2. Click **Save**

### Step 3: Trigger the Workflow

If the workflow hasn't run yet:

1. Go to the **Actions** tab
2. You should see "Deploy to GitHub Pages" workflow
3. If it hasn't run, click "Run workflow" → "Run workflow"
4. Wait for it to complete (green checkmark)

### Step 4: Verify Deployment

1. Go back to **Settings** → **Pages**
2. You should see: "Your site is live at https://yashpathak2001.github.io/optimization-methods/"
3. Click the link to verify

## 🐛 If Still Not Working

### Check 1: Verify Files Exist

```bash
# These files should exist:
docs/index.html
docs/static/visualizer/app.js
docs/static/visualizer/styles.css
docs/.nojekyll
```

### Check 2: Verify Workflow Ran

1. Go to **Actions** tab
2. Check if "Deploy to GitHub Pages" workflow has run
3. Click on the latest run to see if it succeeded
4. Look for any error messages

### Check 3: Clear Browser Cache

Sometimes browsers cache the old README page:
- Hard refresh: `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
- Or open in incognito/private mode

### Check 4: Manual Trigger

If the workflow didn't run automatically:

1. Go to **Actions** tab
2. Click "Deploy to GitHub Pages" workflow
3. Click "Run workflow" button (top right)
4. Select branch: `main`
5. Click "Run workflow"

## ✅ Expected Result

After fixing, when you visit:
`https://yashpathak2001.github.io/optimization-methods/`

You should see:
- The Optimization Methods Visualizer application
- Interactive graph builder
- All panels and controls

**NOT** the README.md file.

## 📝 Important Notes

- **Source must be "GitHub Actions"** - not "Deploy from a branch"
- The workflow automatically deploys from the `docs/` folder
- It may take 1-2 minutes after pushing for the site to update
- Check the Actions tab to see deployment status

---

If you're still having issues, check the Actions tab for error messages and share them.
