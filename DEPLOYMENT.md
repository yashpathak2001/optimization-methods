# Deployment Guide

This guide explains how to deploy the Optimization Methods Visualizer for students to access.

## ⚠️ Important Note

**GitHub Pages cannot host Django applications directly** as it only serves static files. Django requires a Python server. Use one of the deployment options below.

## 🚀 Deployment Options

### Option 1: Render (Recommended for Free Hosting)

[Render](https://render.com) offers free hosting for Django applications.

1. **Sign up** at [render.com](https://render.com) (free tier available)

2. **Create a new Web Service**:
   - Connect your GitHub repository
   - Select "Web Service"
   - Choose your repository

3. **Configure settings**:
   ```
   Build Command: pip install -r requirements.txt && python manage.py collectstatic --noinput
   Start Command: gunicorn optimization_site.wsgi:application
   ```

4. **Environment Variables**:
   - `SECRET_KEY`: Generate a new secret key
   - `DEBUG`: Set to `False` for production
   - `ALLOWED_HOSTS`: Your render domain (e.g., `your-app.onrender.com`)

5. **Deploy**: Click "Create Web Service"

### Option 2: Railway

[Railway](https://railway.app) provides easy Django deployment.

1. **Sign up** at [railway.app](https://railway.app)

2. **Create New Project**:
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository

3. **Configure**:
   - Railway auto-detects Django
   - Add environment variables as needed
   - Deploy automatically

### Option 3: Heroku

1. **Install Heroku CLI**: [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)

2. **Create `Procfile`**:
   ```
   web: gunicorn optimization_site.wsgi:application
   ```

3. **Create `runtime.txt`**:
   ```
   python-3.11.0
   ```

4. **Deploy**:
   ```bash
   heroku create your-app-name
   git push heroku main
   heroku open
   ```

### Option 4: PythonAnywhere

1. **Sign up** at [pythonanywhere.com](https://www.pythonanywhere.com)

2. **Upload your code**:
   - Use the Files tab to upload your project
   - Or clone from GitHub

3. **Configure Web App**:
   - Go to Web tab
   - Create new web app
   - Point to your WSGI file

### Option 5: Local Network (For Classroom)

If students are on the same network:

1. **Find your IP address**:
   ```bash
   # macOS/Linux
   ifconfig | grep "inet "
   
   # Windows
   ipconfig
   ```

2. **Update settings.py**:
   ```python
   ALLOWED_HOSTS = ['*']  # For development only
   ```

3. **Run server**:
   ```bash
   python manage.py runserver 0.0.0.0:8000
   ```

4. **Share the URL**: `http://YOUR_IP:8000`

## 📋 Pre-Deployment Checklist

Before deploying, ensure:

- [ ] `DEBUG = False` in production settings
- [ ] `SECRET_KEY` is set as environment variable
- [ ] `ALLOWED_HOSTS` includes your domain
- [ ] Static files are collected (`python manage.py collectstatic`)
- [ ] Database migrations are run
- [ ] Dependencies are in `requirements.txt`
- [ ] `.gitignore` excludes sensitive files

## 🔧 Production Settings

Create a `production_settings.py` or use environment variables:

```python
import os

DEBUG = os.environ.get('DEBUG', 'False') == 'True'
SECRET_KEY = os.environ.get('SECRET_KEY', 'your-secret-key-here')
ALLOWED_HOSTS = os.environ.get('ALLOWED_HOSTS', '').split(',')

# Database (if using PostgreSQL)
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': os.environ.get('DB_NAME'),
        'USER': os.environ.get('DB_USER'),
        'PASSWORD': os.environ.get('DB_PASSWORD'),
        'HOST': os.environ.get('DB_HOST', 'localhost'),
        'PORT': os.environ.get('DB_PORT', '5432'),
    }
}

# Static files
STATIC_ROOT = os.path.join(BASE_DIR, 'staticfiles')
STATIC_URL = '/static/'
```

## 📝 Adding Gunicorn

For production, add Gunicorn to `requirements.txt`:

```
django>=5.0,<6.0
gunicorn>=21.2.0
```

## 🔒 Security Considerations

1. **Never commit** `SECRET_KEY` or sensitive data
2. Use environment variables for secrets
3. Enable HTTPS in production
4. Keep Django and dependencies updated
5. Use strong `SECRET_KEY` (generate with `python -c "from django.core.management.utils import get_random_secret_key; print(get_random_secret_key())"`)

## 🌐 Custom Domain (Optional)

Most hosting services allow custom domains:

1. Purchase a domain (e.g., from Namecheap, Google Domains)
2. Configure DNS to point to your hosting service
3. Update `ALLOWED_HOSTS` with your domain

## 📚 For Students

Once deployed, share the URL with students. They can:

1. Access the application in their browser
2. No installation required
3. Works on any device with a browser

## 🆘 Troubleshooting

### Static files not loading
```bash
python manage.py collectstatic --noinput
```

### Database errors
```bash
python manage.py migrate
```

### Port already in use
```bash
python manage.py runserver 8001  # Use different port
```

## 📞 Need Help?

- Check hosting service documentation
- Open an issue on GitHub
- Review Django deployment docs: [docs.djangoproject.com/en/stable/howto/deployment/](https://docs.djangoproject.com/en/stable/howto/deployment/)

---

**Recommended for Course Use**: Render or Railway for easy, free hosting with automatic deployments from GitHub.
