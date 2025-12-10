import { Loader } from 'lucide-react'

interface LoadingSpinnerProps {
  message?: string
}

export default function LoadingSpinner({ message = 'Loading...' }: LoadingSpinnerProps) {
  return (
    <div className="flex flex-col items-center justify-center py-12">
      <div className="relative w-12 h-12">
        <Loader className="w-12 h-12 text-yellow-500 animate-spin" />
      </div>
      <p className="mt-4 text-yellow-700">{message}</p>
    </div>
  )
}
