import { ChevronDown } from 'lucide-react'
import type { Event } from '../types'

interface EventSelectorProps {
  events: Event[]
  selectedSlug: string
  selectedTrack: string
  onEventChange: (slug: string) => void
}

export default function EventSelector({
  events,
  selectedSlug,
  selectedTrack,
  onEventChange,
}: EventSelectorProps) {
  // Filter events for the selected track
  const trackEvents = events.filter(e => e.track === selectedTrack)

  return (
    <div className="flex flex-col gap-3">
      <label className="text-sm font-semibold text-white">Select Event</label>
      <div className="relative">
        <select
          value={selectedSlug}
          onChange={(e) => onEventChange(e.target.value)}
          className="w-full px-4 py-3 bg-slate-800/60 border border-slate-700 rounded-lg text-white font-medium appearance-none cursor-pointer focus:border-yellow-400 focus:ring-2 focus:ring-yellow-400/20 transition duration-200"
        >
          {trackEvents.map((event) => (
            <option key={event.slug} value={event.slug}>
              {event.title}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-slate-400 pointer-events-none" />
      </div>
    </div>
  )
}
