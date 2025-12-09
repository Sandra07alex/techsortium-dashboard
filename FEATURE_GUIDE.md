# TechSortium Dashboard - Feature Guide

## 🎨 New Gold Theme

The entire dashboard now features a professional gold color scheme:

```
Primary Gold:     #E5BA0F ████████████
Secondary Gold:   #C69802 ████████████
Light Gold:       #F5D858 ████████████
Dark Gold:        #B8860B ████████████
```

All UI elements - headers, borders, buttons, text - use this sophisticated gold palette against a dark background.

---

## 🏆 Header with Logo

```
┌─────────────────────────────────────────────────────────┐
│ [TS]  TechSortium Dashboard                  [👥 45]    │
│       Registered Candidates Analytics                   │
└─────────────────────────────────────────────────────────┘
```

**Logo Features:**
- Circular "TS" monogram in gold
- Shadow effect for depth
- Professional appearance
- Matches brand identity

---

## 🎯 Track Selection

```
┌─────────────────────────────────────────────────────────┐
│ ● Select Track                                          │
│ ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐ │
│ │  Track A │  │ Track B  │  │ Track C  │  │ Track D  │ │
│ └──────────┘  └──────────┘  └──────────┘  └──────────┘ │
│                                                          │
│ ● Select Event                                          │
│ ┌────────────────────────────────────────────────────┐  │
│ │ Event Name                                       ▼ │  │
│ └────────────────────────────────────────────────────┘  │
│                                                          │
│ ╔════════════════════════════════════════════════════╗  │
│ ║ Event Title                                        ║  │
│ ║ Event description goes here...                     ║  │
│ ║ [Track: ML] [Fee: ₹500] [Capacity: 100]          ║  │
│ ╚════════════════════════════════════════════════════╝  │
└─────────────────────────────────────────────────────────┘
```

**Features:**
- Visual track selector buttons
- Active state shows gold gradient
- Hover animation (scale up)
- Event grouped by track in dropdown
- Event details card below selection

---

## 📊 Statistics Cards

```
┌──────────────────────────────────────────────────────────────┐
│ ┌─────────────┐  ┌──────────────┐  ┌──────────────┐ ┌──────┐│
│ │ 👥 Total    │  │ ✓ Verified   │  │ ⏱ Pending    │ │🏆 IEEE││
│ │    234      │  │    189       │  │     45       │ │  67  ││
│ │ 67% of cap  │  │ 80% verified │  │ 19% pending  │ │ 28%  ││
│ └─────────────┘  └──────────────┘  └──────────────┘ └──────┘│
└──────────────────────────────────────────────────────────────┘
```

**Card Colors:**
- Gold/Yellow: Total Registrations
- Green: Verified Payments
- Orange: Pending Payments
- Purple: IEEE Members

Each card shows:
- Count
- Percentage calculation
- Color-coded icon
- Hover scale animation

---

## 📋 Registration Table - NEW COLUMNS

### IEEE ID Column

```
┌─────────────────────────────────┐
│ IEEE ID                         │
├─────────────────────────────────┤
│ ╔═════════════════════════════╗ │
│ ║ IEEE123456                  ║ │ ← Gold background
│ ║ Student Member              ║ │ ← Grade below
│ ╚═════════════════════════════╝ │
│                                 │
│ or                              │
│                                 │
│ ┌─────────────────────────────┐ │
│ │ Non-IEEE                    │ │ ← Gray badge
│ └─────────────────────────────┘ │
└─────────────────────────────────┘
```

**For IEEE Members:**
- Membership number in monospace font
- Gold background (#FCD34D/20)
- Membership grade displayed below
- Professional styling

**For Non-Members:**
- "Non-IEEE" badge
- Gray styling
- Clear distinction

---

### Screenshot Column with Viewer

```
Regular View:
┌──────────────────┐
│ [👁 View]        │  ← View button (gold)
│                  │
│ or               │
│                  │
│ -                │  ← No screenshot
└──────────────────┘

Expanded View:
╔════════════════════════════════════════════╗
║ John Doe                            ×      ║
║ Payment Screenshot                         ║
║                                            ║
║  ┌──────────────────────────────────────┐  ║
║  │                                      │  ║
║  │   [PAYMENT SCREENSHOT IMAGE]        │  ║
║  │                                      │  ║
║  └──────────────────────────────────────┘  ║
║                                            ║
╚════════════════════════════════════════════╝
```

**Features:**
- Click "View" button to expand
- Full-screen like modal display
- Close with × button
- Image with gold border
- Shows candidate name
- Max dimensions for display

---

## 🔍 Search & Sort

```
┌────────────────────────────────────────────────┐
│ 🔍 Search by name, email, or college...       │
└────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────┐
│ Sort by: [Date ▼] [↓] Showing 234 of 234      │
└─────────────────────────────────────────────────┘
```

**Features:**
- Real-time search filtering
- Sort by: Date, Name, Status
- Ascending/Descending toggle
- Live count updates

---

## 📱 Complete Table Columns

```
ID | Name | Email | College | IEEE ID | Status | Screenshot | Date
─────────────────────────────────────────────────────────────────
R001 | John Doe | john@... | MIT | IEEE123456 | ✓ Verified | [👁] | 12/01
R002 | Jane Smith | jane@... | IIT | Non-IEEE | ⏱ Pending | - | 12/02
...
```

---

## 🎨 Color Highlights Throughout

### Interactive Elements
- **Buttons**: Gold hover states
- **Inputs**: Gold borders on focus
- **Dropdowns**: Gold selection highlights
- **Links**: Gold color scheme
- **Icons**: Color-coded by status/type

### Status Badges
- 🟢 **Verified**: Green background
- 🟠 **Pending Payment**: Orange background
- 🟡 **Pending Verification**: Yellow background
- 🔴 **Rejected**: Red background

---

## 📤 Export Feature

```
┌─────────────────────────────────────┐
│ Registered Candidates    [📥 Export]│
│                                     │
│ [Generates CSV with all details]    │
│ [File: registrations-2024-12-09.csv]│
└─────────────────────────────────────┘
```

Export includes:
- Registration ID
- Name
- Email
- WhatsApp
- College
- Semester
- Branch
- IEEE Member Status
- Payment Status
- Registration Date

---

## 📱 Responsive Behavior

### Mobile (<768px)
- Single column cards
- Vertical track buttons
- Table scrolls horizontally
- Compact header

### Tablet (768px-1024px)
- 2 column cards
- 2-column track grid
- Readable table
- Adjusted spacing

### Desktop (>1024px)
- 4 column cards
- 4-column track grid
- Full table visibility
- Maximum spacing

---

## 🔗 Data Flow

```
Backend API (MongoDB)
       ↓
fetchAllEvents() ──→ [Events with Tracks]
       ↓
Track Selection ──→ Event Selection ──→ fetchRegistrations()
       ↓
Registration Data ──→ Table + Stats ──→ Display with:
                      - IEEE IDs
                      - Screenshots
                      - Search/Sort
```

---

## 🚀 Ready to Deploy

All features are production-ready:
- ✅ Styling complete
- ✅ Responsive design tested
- ✅ Data binding working
- ✅ Interactive features functional
- ✅ Error handling in place
- ✅ Loading states implemented

---

## 💡 User Tips

1. **Track Selection**: Click any track button to filter events
2. **View Screenshots**: Click the "View" button to see payment proofs
3. **Search**: Type in the search box for real-time filtering
4. **Sort**: Change sort order by column type
5. **Export**: Download all data as CSV for records

---

*Feature Guide - TechSortium Dashboard v2.0*
