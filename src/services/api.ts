import axios from 'axios'
import type { Event, Registration } from '../types'

const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Log API URL for debugging (in development only)
if (import.meta.env.DEV) {
  console.log('API Base URL:', API_BASE_URL)
}

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

const api = axios.create({
  baseURL: API_BASE_URL,
  timeout: 15000,
  headers: {
    'Content-Type': 'application/json',
  },
})

// Request interceptor for debugging
api.interceptors.request.use((config) => {
  const fullUrl = `${config.baseURL}${config.url}`
  console.log(`📡 Requesting: ${config.method?.toUpperCase()} ${fullUrl}`)
  return config
})

// Cache interceptor
api.interceptors.response.use(
  (response) => {
    if (response.config.method === 'get') {
      const cacheKey = response.config.url || ''
      cache.set(cacheKey, {
        data: response.data,
        timestamp: Date.now(),
      })
    }
    return response
  },
  (error) => Promise.reject(error)
)

// Helper to get cached data if available
function getCachedData(key: string) {
  const cached = cache.get(key)
  if (cached && Date.now() - cached.timestamp < CACHE_TTL) {
    return cached.data
  }
  cache.delete(key)
  return null
}

export async function fetchAllEvents(): Promise<Event[]> {
  const cacheKey = '/api/events'
  
  // Return cached data if available
  const cached = getCachedData(cacheKey)
  if (cached) {
    console.log('✅ Returning cached events')
    return cached
  }
  
  try {
    console.log('🔍 Fetching events from API...')
    console.log(`   Base URL: ${API_BASE_URL}`)
    console.log(`   Full URL: ${API_BASE_URL}/api/events`)
    
    const response = await api.get('/api/events')
    console.log('✅ Events fetched successfully:', response.data)
    return response.data
  } catch (error) {
    console.error('❌ Error fetching events:', error)
    
    // Try to get more detailed error info
    let errorDetails = 'Unknown error'
    if (axios.isAxiosError(error)) {
      console.error('  - Status:', error.response?.status)
      console.error('  - Status Text:', error.response?.statusText)
      console.error('  - Data:', error.response?.data)
      console.error('  - Message:', error.message)
      
      if (error.response?.status === 503) {
        errorDetails = 'Backend database connection failed. Is MongoDB configured?'
      } else if (error.response?.status === 500) {
        errorDetails = `Backend error: ${error.response?.data?.error || error.response?.data?.message}`
      } else if (error.code === 'ECONNREFUSED') {
        errorDetails = `Cannot connect to backend at ${API_BASE_URL}. Is the backend running?`
      } else if (error.message.includes('CORS')) {
        errorDetails = 'CORS error - check backend CORS configuration'
      } else {
        errorDetails = error.response?.data?.message || error.message || 'Network error'
      }
    } else if (error instanceof Error) {
      errorDetails = error.message
    }
    
    console.error('❌ Final error:', errorDetails)
    throw new Error(errorDetails)
  }
}

export async function fetchRegistrations(eventSlug: string): Promise<Registration[]> {
  const cacheKey = `/api/registrations/${eventSlug}`
  
  // Return cached data if available
  const cached = getCachedData(cacheKey)
  if (cached) {
    return cached
  }
  
  try {
    const response = await api.get(`/api/registrations/${eventSlug}`)
    return response.data
  } catch (error) {
    console.error('Error fetching registrations:', error)
    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status)
      console.error('Response data:', error.response?.data)
    }
    throw new Error('Failed to fetch registrations for this event')
  }
}

export async function fetchRegistrationById(registrationId: string): Promise<Registration> {
  const cacheKey = `/api/registration/${registrationId}`
  
  // Return cached data if available
  const cached = getCachedData(cacheKey)
  if (cached) {
    return cached
  }
  
  try {
    const response = await api.get(`/api/registration/${registrationId}`)
    return response.data.data
  } catch (error) {
    console.error('Error fetching registration:', error)
    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status)
    }
    throw new Error('Failed to fetch registration details')
  }
}
