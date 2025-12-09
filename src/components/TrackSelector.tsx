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
      <label className="block text-sm font-semibold text-white mb-4">
        Select Track
      </label>
      <div className="flex flex-wrap gap-3">
        {tracks.map((track) => (
          <button
            key={track}
            onClick={() => onTrackChange(track)}
            className={`px-6 py-2.5 rounded-lg font-medium transition duration-200 ${
              selectedTrack === track
                ? 'bg-gradient-to-r from-yellow-400 to-yellow-500 text-black shadow-lg shadow-yellow-500/30'
                : 'bg-slate-800/60 border border-slate-700 text-slate-300 hover:border-slate-600 hover:bg-slate-800'
            }`}
          >
            {track}
          </button>
        ))}
      </div>
    </div>
  )
}
