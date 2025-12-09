# TechSortium Dashboard

A dedicated dashboard application to view and manage registered candidates for TechSortium events. This dashboard reads data directly from MongoDB through the existing backend API without making any changes to the frontend or backend.

## Features

✅ **Event Selection** - Switch between different TechSortium events  
✅ **Registration Analytics** - View stats for total registrations, verified payments, pending payments, and IEEE members  
✅ **Candidate List** - Display all registered candidates with detailed information  
✅ **Search & Filter** - Search candidates by name, email, or college  
✅ **Sorting** - Sort by date, name, or registration status  
✅ **Export to CSV** - Download candidate data as CSV file  
✅ **Real-time Updates** - Data synced from MongoDB via backend API  

## Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **API Client**: Axios
- **Backend Integration**: Connects to existing TechSortium backend API

## Project Structure

```
techsortium-dashboard/
├── src/
│   ├── components/          # React components
│   │   ├── EventSelector.tsx
│   │   ├── RegistrationTable.tsx
│   │   ├── StatCards.tsx
│   │   └── LoadingSpinner.tsx
│   ├── services/
│   │   └── api.ts          # API integration
│   ├── types/
│   │   └── index.ts        # TypeScript types
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── public/                 # Static files
├── index.html              # HTML template
├── package.json
├── vite.config.ts          # Vite configuration
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── .env.example            # Environment variables template
```

## Setup Instructions

### Prerequisites
- Node.js 16+ installed
- NPM or Yarn package manager
- TechSortium backend running (on `http://localhost:5000` by default)

### 1. Clone and Navigate
```bash
cd techsortium-dashboard
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Create Environment File
```bash
# Copy the example file
cp .env.example .env

# Update .env with your backend URL (if different from default)
# VITE_API_URL=http://localhost:5000
```

### 4. Development Server
```bash
npm run dev
```

The dashboard will be available at `http://localhost:5174`

## Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm preview

# Start production server (requires build first)
npm start
```

## API Integration

The dashboard connects to the existing backend API endpoints:

### Events Endpoint
- **URL**: `GET /api/events`
- **Purpose**: Fetch all available events
- **Returns**: Array of events with details

### Registrations Endpoint
- **URL**: `GET /api/registrations/:slug`
- **Purpose**: Fetch all registrations for a specific event
- **Parameters**: 
  - `slug` (string) - Event slug
- **Returns**: Array of registration objects

### Single Registration Endpoint
- **URL**: `GET /api/registration/:id`
- **Purpose**: Fetch a single registration by ID
- **Parameters**: 
  - `id` (string) - Registration ID
- **Returns**: Single registration object

## Data Structure

### Event Object
```typescript
{
  id: string
  title: string
  slug: string
  shortDescription: string
  longDescription: string
  posterUrl: string
  lastDate: string
  capacity: number | null
  fee: number | null
  feeDescription: string
  track: string
  qrPaymentRequired: boolean
}
```

### Registration Object
```typescript
{
  registrationId: string
  eventSlug: string
  eventTitle: string
  name: string
  email: string
  whatsapp: string
  college: string
  semester: string
  branch: string
  isIEEEMember: boolean
  paymentDone: boolean
  status: 'pending_payment' | 'pending_verification' | 'verified'
  createdAt: string
  updatedAt: string
  membershipGrade?: string
  membershipNumber?: string
}
```

## Features in Detail

### 1. Event Selection
- Dropdown menu to select from all available events
- Displays event description

### 2. Analytics Dashboard
Four key metrics displayed:
- **Total Registrations**: Overall count and capacity percentage
- **Payment Verified**: Number of verified payments
- **Pending Payment**: Registrations awaiting payment verification
- **IEEE Members**: Count of IEEE members among registrations

### 3. Candidates Table
- Searchable and sortable table with all candidate details
- Columns: Registration ID, Name, Email, College, Branch, Semester, IEEE Status, Payment Status, Registration Date
- Sort by: Date, Name, or Status
- Search by: Name, Email, or College

### 4. Export Feature
- Download all current registrations as CSV file
- Filename includes event slug and date
- Includes all important candidate information

## Deployment

### Vercel (Recommended)

The dashboard is pre-configured for Vercel deployment:

1. Push your code to GitHub
2. Go to https://vercel.com and import the repository
3. Set environment variable: `VITE_API_URL=your-backend-url`
4. Click "Deploy"

Your dashboard will be live at: `https://your-project-name.vercel.app`

See [VERCEL_DEPLOYMENT.md](./VERCEL_DEPLOYMENT.md) for detailed instructions.

### Traditional Server

```bash
# Build the project
npm run build

# Upload the dist/ folder to your server
# Configure web server (nginx/Apache) to serve the dist folder
```

## Configuration

### Environment Variables
- `VITE_API_URL` - Backend API URL (default: `http://localhost:5000`)

### CORS Notes
The backend already has CORS configured to allow requests from:
- `localhost:*` (any port)
- `127.0.0.1:*` (any port)
- Vercel domains

If deploying to a different domain, ensure the backend's CORS configuration includes your dashboard URL.

## Troubleshooting

### Dashboard shows "Failed to load events"
- Check if backend is running at the configured API URL
- Verify `VITE_API_URL` environment variable is correct
- Check browser console for CORS errors
- Ensure backend port is accessible from dashboard location

### Registrations show as empty
- Verify the event slug is correct
- Check if there are actual registrations in MongoDB for that event
- Check backend logs for any errors

### API requests timing out
- Increase `timeout` in `src/services/api.ts` if needed
- Check backend server status and performance
- Verify network connectivity

## Development Notes

### Adding New Features
1. Create new component in `src/components/`
2. Add types to `src/types/index.ts` if needed
3. Add API calls to `src/services/api.ts` if needed
4. Import and use in `App.tsx` or other components

### Modifying the Table
- Edit `src/components/RegistrationTable.tsx`
- Add new columns by modifying the `<th>` and `<td>` elements
- Update `sortBy` options and filtering logic

### Customizing Styles
- Modify Tailwind classes in components
- Edit `tailwind.config.ts` for theme customization
- Edit `src/index.css` for global styles

## Important Notes

✅ **No Changes to Existing Systems**: This dashboard only reads from the backend - no modifications to backend or frontend code  
✅ **Uses Existing APIs**: Leverages already available API endpoints from the backend  
✅ **MongoDB Direct Access**: Connects through the backend API to MongoDB collections  
✅ **Independent Deployment**: Can be deployed separately from frontend/backend  

## Support

For issues or questions:
1. Check the Troubleshooting section above
2. Review backend logs for API errors
3. Check browser console for client-side errors
4. Verify MongoDB connection and data integrity

## License

ISC

## Future Enhancements

- [ ] Authentication for admin access
- [ ] Payment screenshot verification interface
- [ ] Bulk actions (approve/reject registrations)
- [ ] Advanced filtering and analytics
- [ ] Email notifications integration
- [ ] Multiple event comparison view
- [ ] Candidate registration timeline
- [ ] QR code verification system
