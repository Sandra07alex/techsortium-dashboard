import axios from 'axios'
import type { Event, Registration } from '../types'

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

// Cache for API responses
const cache = new Map<string, { data: any; timestamp: number }>()
const CACHE_TTL = 5 * 60 * 1000 // 5 minutes

const api = axios.create({
  baseURL: API_URL,
  timeout: 10000,
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching events:', error)
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching registrations:', error)
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
    if (process.env.NODE_ENV === 'development') {
      console.error('Error fetching registration:', error)
    }
    throw new Error('Failed to fetch registration details')
  }
}
