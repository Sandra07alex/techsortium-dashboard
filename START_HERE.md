# 🎯 TechSortium Dashboard - Start Here

## 📌 What You Need to Know

I've created a **complete, independent dashboard** for viewing registered candidates. Here's what you need to do:

---

## ⚡ Super Quick Start (3 Steps - 2 Minutes)

### Step 1: Open PowerShell and Navigate
```powershell
cd c:\Users\sandr\Desktop\TechSortium\techsortium-dashboard
```

### Step 2: Install Dependencies (First Time Only)
```powershell
npm install
```

### Step 3: Start the Dashboard
```powershell
npm run dev
```

**Open in browser**: http://localhost:5174

---

## ✅ What You'll See

1. **Event Dropdown** - Select which event to view
2. **4 Analytics Cards** - Total registrations, verified payments, pending payments, IEEE members
3. **Registrations Table** - All candidates with search, sort, and export features
4. **Export CSV Button** - Download candidate data

---

## 📚 Documentation

Read these in order:

### 1️⃣ **For Quick Start** (5 minutes)
📄 `techsortium-dashboard/QUICK_START.md`

### 2️⃣ **For Complete Setup** (30 minutes)
📄 `DASHBOARD_SETUP_GUIDE.md` (in root TechSortium folder)

### 3️⃣ **For Technical Details** (reference)
📄 `PROJECT_STRUCTURE.md` (in root TechSortium folder)

### 4️⃣ **For Full Features**
📄 `techsortium-dashboard/README.md`

---

## 🔄 How It Works

```
┌──────────────────────────────────────────┐
│  Dashboard (React App)                   │
│  http://localhost:5174                   │
│                                          │
│  - Shows events                          │
│  - Shows registrations                   │
│  - Search & filter                       │
│  - Export to CSV                         │
└──────────────────────────────────────────┘
          ↓ (API calls)
┌──────────────────────────────────────────┐
│  Backend (Express.js)                    │
│  http://localhost:5000                   │
│                                          │
│  /api/events                             │
│  /api/registrations/:slug                │
└──────────────────────────────────────────┘
          ↓ (read data)
┌──────────────────────────────────────────┐
│  MongoDB Database                        │
│                                          │
│  - events collection                     │
│  - registrations collection              │
└──────────────────────────────────────────┘
```

---

## 🎯 Key Points

✅ **Dashboard is INDEPENDENT**
- Separate folder from frontend/backend
- Can be developed separately
- Can be deployed separately

✅ **NO CHANGES to Existing Code**
- Frontend untouched
- Backend untouched
- MongoDB untouched

✅ **READ-ONLY Dashboard**
- Only fetches data
- Does not modify anything
- Safe to use alongside existing system

✅ **Production Ready**
- Fully documented
- Docker support
- Multiple deployment options

---

## 📋 Required Prerequisites

- ✅ Node.js 16+ installed
- ✅ Backend running (http://localhost:5000)
- ✅ MongoDB connection configured in backend

**Check backend is running:**
```powershell
curl http://localhost:5000/api/events
```
(Should return JSON with events)

---

## 🛠️ What's Included

### React Components (4 total)
- **EventSelector** - Dropdown to choose events
- **StatCards** - Display 4 key metrics
- **RegistrationTable** - Searchable, sortable table
- **LoadingSpinner** - Loading animation

### Services
- **api.ts** - All backend API calls

### Configuration Files
- **package.json** - Dependencies
- **vite.config.ts** - Build configuration
- **tailwind.config.ts** - Styling
- **tsconfig.json** - TypeScript settings

### Documentation
- **README.md** - Full documentation
- **QUICK_START.md** - 5-minute setup
- **Dockerfile** - Docker support
- **.env.example** - Environment template

---

## 🚀 Common Tasks

### Start Development
```powershell
npm run dev
```

### Build for Production
```powershell
npm run build
```

### Check API Connection
```powershell
curl http://localhost:5000/api/events
```

### Reinstall Dependencies
```powershell
Remove-Item -Recurse node_modules
npm install
npm run dev
```

---

## 🔍 Directory Structure

```
techsortium-dashboard/
├── src/
│   ├── components/          ← React components
│   ├── services/            ← API calls
│   ├── types/               ← TypeScript types
│   ├── App.tsx              ← Main app
│   ├── main.tsx             ← Entry point
│   └── index.css            ← Styles
│
├── package.json             ← Dependencies
├── vite.config.ts           ← Build config
├── tailwind.config.ts       ← Styling config
├── .env.example             ← Environment template
├── README.md                ← Full docs
├── QUICK_START.md           ← Quick setup
├── Dockerfile               ← Docker support
└── index.html               ← HTML template
```

---

## ⚙️ Environment Setup

**First Time Only:**

Create `.env` file in `techsortium-dashboard/` folder:

```
VITE_API_URL=http://localhost:5000
```

Change the URL if your backend runs on different port or server.

---

## 🎨 Dashboard Features

| Feature | How to Use |
|---------|-----------|
| **Event Selection** | Use dropdown at top |
| **View Stats** | Cards show automatically |
| **Search** | Type in search box |
| **Sort** | Click Sort by buttons |
| **Export** | Click Export CSV button |

---

## 🧪 Testing the Dashboard

### Test Checklist

- [ ] Dashboard loads at http://localhost:5174
- [ ] Events dropdown shows multiple events
- [ ] Select event loads registrations
- [ ] Registrations table displays candidates
- [ ] Search by name works
- [ ] Sort by date works
- [ ] Analytics cards show correct numbers
- [ ] CSV export works
- [ ] No errors in console (F12)
- [ ] Responsive on mobile view

---

## 📞 Troubleshooting

### Dashboard Won't Start
```powershell
npm install
npm run dev
```

### Can't Connect to Backend
- Check backend is running: `npm run dev` in backend folder
- Verify URL in `.env` file
- Check browser console (F12) for CORS errors

### No Registrations Showing
- Make sure backend is running
- Check if event has registrations in MongoDB
- Try selecting different event

---

## 🌐 Deployment

When ready to deploy:

### Option 1: Vercel (Easiest)
```powershell
npm install -g vercel
vercel
```

### Option 2: Docker
```powershell
docker build -t dashboard .
docker run -p 5174:5174 -e VITE_API_URL=http://backend:5000 dashboard
```

### Option 3: Build & Upload
```powershell
npm run build
# Upload dist/ folder to your web server
```

---

## 📞 Support

### Quick Links
- **Quick Start**: `techsortium-dashboard/QUICK_START.md`
- **Full Setup**: `DASHBOARD_SETUP_GUIDE.md`
- **Tech Details**: `PROJECT_STRUCTURE.md`
- **Dashboard Docs**: `techsortium-dashboard/README.md`

### Common Issues
1. **Backend not running?** → Start it: `cd techsortium-backend && npm run dev`
2. **Port in use?** → Change port in `vite.config.ts`
3. **API errors?** → Check backend logs for errors

---

## 🎓 Next Steps

### Immediate (Now)
1. Run `npm install` in dashboard folder
2. Run `npm run dev`
3. Open http://localhost:5174
4. Test with different events

### This Week
1. Familiarize yourself with dashboard
2. Test CSV export feature
3. Share with team if needed

### This Month
1. Deploy to production
2. Configure permanent backend URL
3. Set up monitoring

---

## ✨ Features Included

✅ Event selection dropdown  
✅ Analytics dashboard (4 key metrics)  
✅ Searchable registrations table  
✅ Sort by date, name, or status  
✅ IEEE member indicator  
✅ Payment status display  
✅ CSV export functionality  
✅ Loading states and error handling  
✅ Responsive design  
✅ Dark theme  
✅ TypeScript support  
✅ Tailwind CSS styling  

---

## 📊 Technology Stack

- React 18 (UI Framework)
- TypeScript (Type Safety)
- Vite (Build Tool)
- Tailwind CSS (Styling)
- Axios (API Calls)

---

## 🔒 Security Notes

✅ **Read-Only** - No data modifications  
✅ **CORS** - Backend configured for localhost  
✅ **Environment** - API URL in `.env` file  
✅ **No Sensitive Data** - Filtered before display  

---

## 📈 Performance

⚡ **Fast** - Built with Vite (sub-second startup)  
📦 **Small Bundle** - Optimized for production  
🚀 **Responsive** - Smooth user interactions  
♻️ **Efficient** - React optimization built-in  

---

## ✅ Final Checklist

Before using dashboard:

- [ ] Read this file
- [ ] Node.js 16+ installed
- [ ] Backend running on port 5000
- [ ] Run `npm install` in dashboard
- [ ] Run `npm run dev`
- [ ] Dashboard loads at http://localhost:5174
- [ ] Select an event
- [ ] See registrations display
- [ ] Try search and sort
- [ ] Try CSV export
- [ ] All working? You're good to go! 🎉

---

## 🎉 You're Ready!

```powershell
cd c:\Users\sandr\Desktop\TechSortium\techsortium-dashboard
npm install
npm run dev
```

Open: **http://localhost:5174**

---

## 📖 Documentation Map

```
START HERE
    ↓
This file (START_HERE.md)
    ↓
Choose one:
├─ QUICK_START.md (5 minutes) → Quick setup
├─ DASHBOARD_SETUP_GUIDE.md (30 minutes) → Complete guide
├─ README.md → Full features documentation
└─ PROJECT_STRUCTURE.md → Technical reference
```

---

**Status**: ✅ READY TO USE  
**Version**: 1.0.0  
**Created**: December 2025

🚀 **Let's go!**
