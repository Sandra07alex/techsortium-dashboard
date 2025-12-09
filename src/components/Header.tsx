import { Users } from 'lucide-react'

interface HeaderProps {
  totalRegistrations: number
}

export default function Header({ totalRegistrations }: HeaderProps) {
  return (
    <header className="border-b border-slate-800/50 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Brand */}
          <div className="flex items-center gap-3">
            {/* Logo Badge */}
            <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-400 to-yellow-500 flex items-center justify-center font-bold text-black text-xl shadow-lg shadow-yellow-500/20">
              TS
            </div>
            <div>
              <h1 className="text-2xl font-bold text-white">TechSortium Dashboard</h1>
              <p className="text-xs text-slate-400">Event Registration Analytics</p>
            </div>
          </div>

          {/* Stats Badge */}
          <div className="hidden sm:flex items-center gap-3 px-4 py-2 bg-slate-800/50 rounded-lg border border-slate-700/50">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-yellow-400" />
              <div>
                <div className="text-xs text-slate-400">Total Registrations</div>
                <div className="text-lg font-bold text-yellow-300">{totalRegistrations}</div>
              </div>
            </div>
          </div>

          {/* Mobile Stats Badge */}
          <div className="sm:hidden px-3 py-1.5 bg-slate-800/50 rounded border border-slate-700/50">
            <div className="text-sm font-bold text-yellow-300">{totalRegistrations}</div>
          </div>
        </div>
      </div>
    </header>
  )
}
