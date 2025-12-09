import React, { useState, useEffect } from 'react'
import { Download } from 'lucide-react'
import Header from './components/Header'
import TrackSelector from './components/TrackSelector'
import EventSelector from './components/EventSelector'
import EventSummaryCard from './components/EventSummaryCard'
import StatCards from './components/StatCards'
import RegistrationTable from './components/RegistrationTable'
import LoadingSpinner from './components/LoadingSpinner'
import { fetchAllEvents, fetchRegistrations } from './services/api'
import type { Event, Registration } from './types'

export default function App() {
  const [events, setEvents] = useState<Event[]>([])
  const [selectedEventSlug, setSelectedEventSlug] = useState<string>('')
  const [registrations, setRegistrations] = useState<Registration[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string>('')
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null)
  const [selectedTrack, setSelectedTrack] = useState<string>('')

  // Fetch all events on mount
  useEffect(() => {
    const loadEvents = async () => {
      try {
        setError('')
        setLoading(true)
        const eventsData = await fetchAllEvents()
        setEvents(eventsData)
        if (eventsData.length > 0) {
          // Filter out Hackathon and get first valid event
          const validEvents = eventsData.filter(e => e.track !== 'Hackathon')
          if (validEvents.length > 0) {
            const firstEvent = validEvents[0]
            setSelectedEventSlug(firstEvent.slug)
            setSelectedEvent(firstEvent)
            setSelectedTrack(firstEvent.track)
          }
        }
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load events')
      } finally {
        setLoading(false)
      }
    }

    loadEvents()
  }, [])

  // Fetch registrations when event changes
  useEffect(() => {
    if (!selectedEventSlug) return

    const loadRegistrations = async () => {
      try {
        setError('')
        setLoading(true)
        const data = await fetchRegistrations(selectedEventSlug)
        setRegistrations(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load registrations')
      } finally {
        setLoading(false)
      }
    }

    loadRegistrations()
  }, [selectedEventSlug])

  const handleEventChange = (slug: string) => {
    setSelectedEventSlug(slug)
    const event = events.find(e => e.slug === slug)
    if (event) {
      setSelectedEvent(event)
      setSelectedTrack(event.track)
    }
  }

  const handleTrackChange = (track: string) => {
    setSelectedTrack(track)
    // Get first event from selected track
    const trackEvents = events.filter(e => e.track === track)
    if (trackEvents.length > 0) {
      handleEventChange(trackEvents[0].slug)
    }
  }

  const handleExportCSV = () => {
    if (registrations.length === 0) {
      alert('No registrations to export')
      return
    }

    const headers = ['Registration ID', 'Name', 'Email', 'WhatsApp', 'College', 'Semester', 'Branch', 'IEEE Member', 'Payment Status', 'Registration Date']
    const rows = registrations.map(reg => [
      reg.registrationId,
      reg.name,
      reg.email,
      reg.whatsapp,
      reg.college,
      reg.semester,
      reg.branch,
      reg.isIEEEMember ? 'Yes' : 'No',
      reg.status,
      new Date(reg.createdAt).toLocaleDateString(),
    ])

    const csv = [headers, ...rows]
      .map(row => row.map(cell => `"${cell}"`).join(','))
      .join('\n')

    const blob = new Blob([csv], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `registrations-${selectedEventSlug}-${new Date().toISOString().split('T')[0]}.csv`
    document.body.appendChild(a)
    a.click()
    window.URL.revokeObjectURL(url)
    document.body.removeChild(a)
  }

  if (loading && events.length === 0) {
    return <LoadingSpinner message="Loading dashboard..." />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <Header totalRegistrations={registrations.length} />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Error Alert */}
        {error && (
          <div className="mb-6 p-4 bg-red-900/10 border border-red-800/30 rounded-lg text-red-200 text-sm">
            ⚠️ {error}
          </div>
        )}

        {/* Track Selection */}
        <TrackSelector
          tracks={Array.from(new Set(events.filter(e => e.track !== 'Hackathon').map(e => e.track)))}
          selectedTrack={selectedTrack}
          onTrackChange={handleTrackChange}
        />

        {/* Event Selection & Summary */}
        <div className="grid lg:grid-cols-3 gap-6 mb-8">
          <EventSelector
            events={events}
            selectedSlug={selectedEventSlug}
            selectedTrack={selectedTrack}
            onEventChange={handleEventChange}
          />
          {selectedEvent && (
            <div className="lg:col-span-2">
              <EventSummaryCard event={selectedEvent} />
            </div>
          )}
        </div>

        {/* Analytics Cards */}
        {selectedEvent && (
          <StatCards event={selectedEvent} registrations={registrations} />
        )}

        {/* Registered Candidates Section */}
        <div className="mt-10">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white">Registered Candidates</h2>
              <p className="text-sm text-slate-400 mt-1">{registrations.length} total registrations</p>
            </div>
            <button
              onClick={handleExportCSV}
              disabled={registrations.length === 0 || loading}
              className="flex items-center justify-center gap-2 px-4 py-2.5 bg-green-600 hover:bg-green-700 disabled:bg-slate-700 disabled:cursor-not-allowed text-white rounded-lg font-medium transition duration-200"
            >
              <Download className="w-4 h-4" />
              Export CSV
            </button>
          </div>

          {loading ? (
            <LoadingSpinner message="Loading registrations..." />
          ) : registrations.length === 0 ? (
            <div className="text-center py-16 bg-slate-800/30 rounded-lg border border-slate-700/50">
              <div className="text-slate-500 mb-2">📋</div>
              <p className="text-slate-400 font-medium">No registrations yet</p>
              <p className="text-slate-500 text-sm mt-1">Registrations will appear here</p>
            </div>
          ) : (
            <RegistrationTable registrations={registrations} />
          )}
        </div>
      </main>
    </div>
  )
}
