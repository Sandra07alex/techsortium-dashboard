import { Users } from 'lucide-react'

interface HeaderProps {
  totalRegistrations: number
}

export default function Header({ totalRegistrations }: HeaderProps) {
  return (
    <header className="border-b border-yellow-200 bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Logo Badge */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center font-bold text-white text-xl shadow-lg shadow-yellow-400/30">
              TS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-gray-900">TechSortium Dashboard</h1>
              <p className="text-xs text-gray-500">Event Registration Analytics</p>
            </div>
          </div>

          {/* Stats Badge */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-yellow-50 rounded-lg border border-yellow-200">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-600" />
              <div>
                <div className="text-xs text-gray-600">Total Registrations</div>
                <div className="text-lg font-bold text-yellow-600">{totalRegistrations}</div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Badge */}
          <div className="sm:hidden px-3 py-1.5 bg-yellow-50 rounded border border-yellow-200">
            <div className="text-sm font-bold text-yellow-600">{totalRegistrations}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
