interface TrackSelectorProps {
  tracks: string[]
  selectedTrack: string
  onTrackChange: (track: string) => void
}

export default function TrackSelector({
  tracks,
  selectedTrack,
  onTrackChange,
}: TrackSelectorProps) {
  return (
    <div className="mb-8">
      <label className="block text-sm font-semibold text-gray-900 mb-4">
        Select Track
      </label>
      <div className="flex flex-wrap gap-3">
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => onTrackChange(track)}
            className={`px-6 py-2.5 rounded-lg font-medium transition duration-200 ${
              selectedTrack === track
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-white shadow-lg shadow-yellow-400/30 hover:shadow-yellow-400/40'
                : 'bg-gray-100 border border-gray-300 text-gray-700 hover:border-yellow-300 hover:bg-yellow-50'
            }`}
          >
            {track}
          </button>
        ))}
      </div>
    </div>
  )
}
