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
    return cached
  }
  
  try {
    const response = await api.get('/api/events')
    return response.data
  } catch (error) {
    console.error('Error fetching events:', error)
    if (axios.isAxiosError(error)) {
      console.error('Response status:', error.response?.status)
      console.error('Response data:', error.response?.data)
      console.error('Request URL:', error.config?.url)
    }
    throw new Error('Failed to fetch events from backend')
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
