# GitHub Setup Instructions

This guide will help you set up your repository on GitHub and enable all features.

## 📋 Pre-Setup Checklist

Before pushing to GitHub, make sure you've:

- [ ] Replaced `YOUR_USERNAME` in all files with your actual GitHub username
- [ ] Replaced `YOUR_REPO_NAME` with your actual repository name
- [ ] Reviewed and customized the README.md
- [ ] Set up your local git repository

## 🚀 Initial GitHub Setup

### Step 1: Create Repository on GitHub

1. Go to [github.com/new](https://github.com/new)
2. Repository name: `optimization-methods` (or your preferred name)
3. Description: "Interactive visualization tool for optimization algorithms"
4. Choose **Public** (for students to access)
5. **DO NOT** initialize with README, .gitignore, or license (we've created these)
6. Click "Create repository"

### Step 2: Initialize Local Git Repository

```bash
cd /Users/yashpathak/Documents/GitHub/optimization-methods

# Initialize git (if not already done)
git init

# Add all files
git add .

# Make initial commit
git commit -m "Initial commit: Optimization Methods Visualizer with documentation"
```

### Step 3: Connect to GitHub

```bash
# Add remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Rename branch to main (if needed)
git branch -M main

# Push to GitHub
git push -u origin main
```

## 🔧 Update Placeholder URLs

After creating the repository, update these files with your actual repository URL:

### Files to Update:

1. **README.md**:
   - Replace `YOUR_USERNAME/optimization-methods` with your actual repo path
   - Update clone URL

2. **CONTRIBUTING.md**:
   - Replace `YOUR_USERNAME/optimization-methods` with your actual repo path

3. **.github/ISSUE_TEMPLATE/config.yml**:
   - Replace `YOUR_USERNAME/optimization-methods` with your actual repo path

4. **DEPLOYMENT.md**:
   - Update any references if needed

### Quick Find & Replace:

```bash
# Find all instances (replace YOUR_USERNAME with your username)
grep -r "YOUR_USERNAME" .
```

## ✅ Enable GitHub Features

### 1. Enable Issues

1. Go to your repository on GitHub
2. Click **Settings** → **General**
3. Scroll to **Features**
4. Ensure **Issues** is checked ✅

### 2. Enable Discussions (Optional but Recommended)

1. Go to **Settings** → **General**
2. Scroll to **Features**
3. Check **Discussions** ✅
4. This allows students to ask questions

### 3. Set Up Issue Templates

The issue templates are already created in `.github/ISSUE_TEMPLATE/`. They will automatically appear when students click "New Issue".

### 4. GitHub Pages (Note: Limited for Django)

GitHub Pages cannot directly host Django apps. However:

1. Go to **Settings** → **Pages**
2. Source: Select **GitHub Actions**
3. The workflow file is already created (`.github/workflows/pages.yml`)
4. **Note**: This will only serve documentation, not the Django app
5. For actual hosting, see `DEPLOYMENT.md`

### 5. Enable Branch Protection (Optional)

To protect the main branch:

1. Go to **Settings** → **Branches**
2. Add rule for `main` branch
3. Require pull request reviews (optional)
4. Require status checks (if you add CI/CD)

## 📝 Repository Settings

### Description & Topics

1. Go to repository main page
2. Click the gear icon ⚙️ next to "About"
3. Add description: "Interactive visualization tool for optimization algorithms"
4. Add topics: `django`, `algorithm-visualization`, `education`, `optimization`, `shortest-path`, `bellman-ford`

### Website (After Deployment)

Once deployed, add the live URL in the "Website" field.

## 🎓 For Students

Share this information with students:

1. **Repository URL**: `https://github.com/YOUR_USERNAME/YOUR_REPO_NAME`
2. **How to Report Bugs**: Click "Issues" → "New Issue" → "Bug Report"
3. **How to Suggest Features**: Click "Issues" → "New Issue" → "Feature Request"
4. **How to Contribute**: Read `CONTRIBUTING.md`

## 🔄 Weekly Updates Workflow

When adding new algorithms weekly:

```bash
# Create a new branch
git checkout -b feature/week-X-algorithm-name

# Make your changes
# ... edit files ...

# Commit changes
git add .
git commit -m "Add [Algorithm Name] for Week X"

# Push branch
git push origin feature/week-X-algorithm-name

# Create Pull Request on GitHub
# Or merge directly if you're the maintainer
git checkout main
git merge feature/week-X-algorithm-name
git push origin main
```

## 📊 Repository Insights

GitHub provides useful insights:

- **Insights** → **Traffic**: See how many students are viewing
- **Insights** → **Contributors**: See who's contributing
- **Insights** → **Community**: Check if repository follows best practices

## 🎯 Next Steps

1. ✅ Create repository on GitHub
2. ✅ Push initial code
3. ✅ Update placeholder URLs
4. ✅ Enable Issues and Discussions
5. ✅ Share repository URL with students
6. ✅ Set up deployment (see `DEPLOYMENT.md`)
7. ✅ Start adding weekly algorithms!

## 🆘 Troubleshooting

### "Repository not found"
- Check that you've replaced `YOUR_USERNAME` correctly
- Verify repository name matches

### "Permission denied"
- Check your GitHub credentials
- Use SSH keys or personal access token

### Issues not showing templates
- Ensure `.github/ISSUE_TEMPLATE/` folder is pushed
- Check that Issues are enabled in Settings

---

**You're all set!** 🎉 Your repository is ready for students to use and contribute.
