# Vercel Deployment Guide

## Quick Deploy to Vercel

The dashboard is configured for easy deployment to Vercel with zero additional setup needed.

### Step 1: Push to GitHub
```bash
git add .
git commit -m "Add TechSortium Dashboard"
git push origin main
```

### Step 2: Deploy to Vercel
Go to https://vercel.com and:
1. Click "New Project"
2. Import your GitHub repository
3. Configure environment variables:
   ```
   VITE_API_URL=https://your-backend-url.com
   ```
4. Click "Deploy"

That's it! Vercel will automatically:
- ✅ Install dependencies
- ✅ Build with `npm run build`
- ✅ Deploy to production
- ✅ Create automatic preview deployments

### Environment Variables
Set `VITE_API_URL` to your backend URL:
- **Development**: `http://localhost:5000`
- **Production**: Your production backend URL

### Vercel Configuration
The `vercel.json` file is pre-configured with:
- Build command: `npm run build`
- Dev command: `npm run dev`
- Output directory: `dist`

### Files Needed for Vercel
- ✅ `package.json` - Dependencies
- ✅ `vercel.json` - Configuration
- ✅ `vite.config.ts` - Build config
- ✅ `.env.example` - Environment template

### After Deployment
Your dashboard will be live at:
```
https://your-project-name.vercel.app
```

### Update Backend URL (Optional)
If your backend URL changes, update it in Vercel dashboard:
1. Go to project settings
2. Environment Variables
3. Update `VITE_API_URL`
4. Redeploy

---

**That's all you need to know for Vercel deployment!** 🚀
