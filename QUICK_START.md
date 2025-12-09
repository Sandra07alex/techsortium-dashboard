# Quick Start Guide - TechSortium Dashboard

## 1️⃣ Initial Setup (First Time Only)

### Navigate to Dashboard Folder
```powershell
cd c:\Users\sandr\Desktop\TechSortium\techsortium-dashboard
```

### Install Dependencies
```powershell
npm install
```

This will install all required packages including React, TypeScript, Tailwind CSS, etc.

---

## 2️⃣ Running the Dashboard

### Start Development Server
```powershell
npm run dev
```

Expected output:
```
  VITE v5.0.0  ready in 123 ms

  ➜  Local:   http://localhost:5174/
  ➜  press h to show help
```

Open browser to: **http://localhost:5174**

---

## 3️⃣ Using the Dashboard

### Select an Event
1. Open the dropdown menu labeled "Select Event"
2. Choose from available events
3. Dashboard automatically loads all registrations for that event

### View Analytics
- **Total Registrations** - Count of all registered candidates
- **Payment Verified** - Candidates with payment confirmed
- **Pending Payment** - Candidates awaiting payment verification
- **IEEE Members** - Count of IEEE members

### Search Registrations
1. Use the search box to find candidates by:
   - Name
   - Email
   - College name

### Sort Registrations
1. Click "Sort by:" dropdown to choose:
   - Date (default)
   - Name
   - Status
2. Click ↑ or ↓ to toggle sort order (ascending/descending)

### Export Data
1. Click **"Export CSV"** button
2. File will download as: `registrations-{event-slug}-{date}.csv`
3. Open in Excel/Sheets for further analysis

---

## 4️⃣ Common Commands

```powershell
# Start development server
npm run dev

# Build for production (creates optimized dist folder)
npm run build

# Preview production build locally
npm run preview
```

---

## 5️⃣ Troubleshooting

### Dashboard won't start
```powershell
# Clear node_modules and reinstall
Remove-Item -Recurse node_modules
npm install
npm run dev
```

### Can't connect to backend
- Verify backend is running: `http://localhost:5000/api/events`
- Check `.env` file has correct `VITE_API_URL`
- Look for CORS errors in browser console (F12)

### No registrations showing
- Ensure you have the correct event slug
- Check if registrations exist in MongoDB
- Try selecting a different event

---

## 6️⃣ Environment Configuration

Create `.env` file in project root:
```
VITE_API_URL=http://localhost:5000
```

Change the URL if your backend is running on a different port or server.

---

## 7️⃣ Production Deployment

### Build for Production
```powershell
npm run build
```

This creates an optimized `dist` folder ready for deployment.

### Deploy to Vercel
```powershell
npm install -g vercel
vercel
```

### Deploy to Other Services
- **Netlify**: Connect GitHub repo to Netlify
- **GitHub Pages**: Push `dist` folder
- **Docker**: Use provided Dockerfile
- **Traditional Server**: Upload `dist` folder via FTP/SSH

---

## 📊 Dashboard Features at a Glance

| Feature | How to Use |
|---------|-----------|
| **Event Selection** | Dropdown at top of page |
| **View Stats** | Cards display automatically |
| **Search** | Type in search box |
| **Sort** | Use "Sort by:" buttons |
| **Export** | Click "Export CSV" button |

---

## 🔧 Project Structure

```
techsortium-dashboard/
├── src/
│   ├── App.tsx                    # Main component
│   ├── components/
│   │   ├── EventSelector.tsx      # Event dropdown
│   │   ├── StatCards.tsx          # Analytics cards
│   │   ├── RegistrationTable.tsx  # Candidates table
│   │   └── LoadingSpinner.tsx     # Loading animation
│   ├── services/
│   │   └── api.ts                 # Backend API calls
│   ├── types/
│   │   └── index.ts               # TypeScript types
│   ├── main.tsx                   # React entry point
│   └── index.css                  # Styles
├── package.json
├── vite.config.ts
├── tailwind.config.ts
└── index.html
```

---

## 📝 Notes

- ✅ Dashboard reads MongoDB data through backend API
- ✅ No changes made to frontend or backend code
- ✅ Completely independent and portable
- ✅ Can be deployed separately
- ✅ Supports all modern browsers

---

## 🎯 Next Steps

1. Start the development server: `npm run dev`
2. Open dashboard at `http://localhost:5174`
3. Select an event from the dropdown
4. Explore registrations and export data
5. When ready, build and deploy: `npm run build`

---

For full documentation, see [README.md](./README.md)
