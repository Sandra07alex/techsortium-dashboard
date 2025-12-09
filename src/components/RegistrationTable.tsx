import { ChevronDown, Eye, X, Search } from 'lucide-react'
import { useState } from 'react'
import type { Registration } from '../types'

interface RegistrationTableProps {
  registrations: Registration[]
}

export default function RegistrationTable({ registrations }: RegistrationTableProps) {
  const [sortBy, setSortBy] = useState<'name' | 'date' | 'status'>('date')
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('desc')
  const [searchTerm, setSearchTerm] = useState('')
  const [expandedRow, setExpandedRow] = useState<string | null>(null)

  const sortedRegistrations = [...registrations].sort((a, b) => {
    let compareA: any = a[sortBy === 'date' ? 'createdAt' : sortBy === 'status' ? 'status' : 'name']
    let compareB: any = b[sortBy === 'date' ? 'createdAt' : sortBy === 'status' ? 'status' : 'name']

    if (typeof compareA === 'string') compareA = compareA.toLowerCase()
    if (typeof compareB === 'string') compareB = compareB.toLowerCase()

    if (compareA < compareB) return sortOrder === 'asc' ? -1 : 1
    if (compareA > compareB) return sortOrder === 'asc' ? 1 : -1
    return 0
  })

  const filteredRegistrations = sortedRegistrations.filter(reg =>
    reg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
    reg.college.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const getStatusBadge = (status: string) => {
    const statusMap: Record<string, { bg: string; text: string; label: string }> = {
      pending_verification: { bg: 'bg-yellow-500/10 border-yellow-500/30', text: 'text-yellow-400', label: 'Pending Verification' },
      pending_payment: { bg: 'bg-orange-500/10 border-orange-500/30', text: 'text-orange-400', label: 'Pending Payment' },
      verified: { bg: 'bg-green-500/10 border-green-500/30', text: 'text-green-400', label: 'Verified' },
      rejected: { bg: 'bg-red-500/10 border-red-500/30', text: 'text-red-300', label: 'Rejected' },
    }
    const config = statusMap[status] || statusMap.pending_payment
    return (
      <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium border ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    )
  }

  return (
    <>
      <div className="bg-slate-800/30 border border-slate-700/50 rounded-xl overflow-hidden">
        {/* Search & Filter Bar */}
        <div className="p-4 border-b border-slate-700/50 bg-slate-900/30 space-y-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
            <input
              type="text"
              placeholder="Search by name, email, or college..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 bg-slate-800/60 border border-slate-700 rounded-lg text-white placeholder-slate-500 text-sm focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition duration-200"
            />
          </div>

          {/* Sort Controls */}
          <div className="flex flex-col sm:flex-row gap-3 justify-between items-start sm:items-center">
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 rounded text-sm text-slate-300 focus:border-yellow-400 transition duration-200"
              >
                <option value="date">Date</option>
                <option value="name">Name</option>
                <option value="status">Status</option>
              </select>
              <button
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
                className="px-3 py-1.5 bg-slate-800/60 border border-slate-700 rounded text-sm text-slate-300 hover:border-slate-600 transition duration-200"
              >
                {sortOrder === 'asc' ? '↑' : '↓'}
              </button>
            </div>
            <span className="text-xs text-slate-400">
              Showing {filteredRegistrations.length} of {registrations.length}
            </span>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="bg-slate-900/50 border-b border-slate-700/50">
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">ID</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Name</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Email</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">College</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">IEEE</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Status</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Payment</th>
                <th className="px-4 py-3 text-left text-xs font-semibold text-slate-300 uppercase tracking-wider">Date</th>
              </tr>
            </thead>
            <tbody>
              {filteredRegistrations.map((registration) => (
                <tr
                  key={registration.registrationId}
                  className="border-b border-slate-700/30 hover:bg-slate-800/50 transition duration-150"
                >
                  <td className="px-4 py-3">
                    <span className="text-xs font-mono text-yellow-400">{registration.registrationId}</span>
                  </td>
                  <td className="px-4 py-3 font-medium text-white truncate">{registration.name}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs truncate">{registration.email}</td>
                  <td className="px-4 py-3 text-slate-400 text-xs truncate">{registration.college}</td>
                  <td className="px-4 py-3">
                    {registration.isIEEEMember ? (
                      <span className="inline-flex items-center px-2 py-1 rounded text-xs font-mono bg-yellow-500/10 border border-yellow-500/30 text-yellow-400">
                        {registration.membershipNumber || 'Yes'}
                      </span>
                    ) : (
                      <span className="text-xs text-slate-500">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3">{getStatusBadge(registration.status)}</td>
                  <td className="px-4 py-3">
                    {registration.paymentScreenshotUrl ? (
                      <button
                        onClick={() => setExpandedRow(expandedRow === registration.registrationId ? null : registration.registrationId)}
                        className="flex items-center gap-1 px-2 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-400 rounded hover:bg-blue-500/20 transition duration-200 text-xs font-medium"
                      >
                        <Eye className="w-3 h-3" />
                        View
                      </button>
                    ) : (
                      <span className="text-xs text-slate-500">—</span>
                    )}
                  </td>
                  <td className="px-4 py-3 text-slate-400 text-xs">
                    {new Date(registration.createdAt).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredRegistrations.length === 0 && (
          <div className="text-center py-12 text-slate-400">
            <p className="text-sm">No registrations match your search</p>
          </div>
        )}
      </div>

      {/* Screenshot Modal */}
      {expandedRow && (
        <ScreenshotModal
          registration={filteredRegistrations.find(r => r.registrationId === expandedRow)!}
          onClose={() => setExpandedRow(null)}
        />
      )}
    </>
  )
}

// Screenshot Modal Component
interface ScreenshotModalProps {
  registration: Registration
  onClose: () => void
}

function ScreenshotModal({ registration, onClose }: ScreenshotModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-in fade-in duration-200">
      <div className="bg-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-slate-700">
        {/* Modal Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-700/50 sticky top-0 bg-slate-800">
          <div>
            <h3 className="text-lg font-bold text-white">{registration.name}</h3>
            <p className="text-xs text-slate-400 mt-1">Payment Screenshot</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 hover:bg-slate-700 rounded-lg transition duration-200"
          >
            <X className="w-5 h-5 text-slate-400" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6">
          {registration.paymentScreenshotUrl ? (
            <div className="flex justify-center">
              <img
                src={registration.paymentScreenshotUrl}
                alt="Payment Screenshot"
                className="max-w-full h-auto rounded-lg border border-slate-700"
              />
            </div>
          ) : (
            <p className="text-slate-400 italic text-center py-8">No screenshot available</p>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-700/50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-700 hover:bg-slate-600 text-white rounded-lg font-medium transition duration-200"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
