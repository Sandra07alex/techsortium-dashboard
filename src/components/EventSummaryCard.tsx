import type { Event } from '../types'

interface EventSummaryCardProps {
  event: Event
}

export default function EventSummaryCard({ event }: EventSummaryCardProps) {
  return (
    <div className="bg-slate-800/40 border border-slate-700/50 rounded-xl p-6 h-full flex flex-col justify-between">
      <div>
        <h3 className="text-lg font-bold text-white">{event.title}</h3>
      </div>

      {/* Badges and Info */}
      <div className="space-y-3">
        <div className="flex flex-wrap gap-2">
          {event.track && (
            <span className="px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 text-yellow-300 text-xs font-medium rounded-full">
              {event.track}
            </span>
          )}
          {event.fee && (
            <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-medium rounded-full">
              ₹{event.fee.toLocaleString()}
            </span>
          )}
          {event.capacity && (
            <span className="px-3 py-1 bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs font-medium rounded-full">
              {event.capacity} seats
            </span>
          )}
        </div>

        {/* Quick Stats */}
        <div className="text-xs text-slate-500 pt-2 border-t border-slate-700/50">
          {event.lastDate && (
            <p>Deadline: {new Date(event.lastDate).toLocaleDateString()}</p>
          )}
        </div>
      </div>
    </div>
  )
}
