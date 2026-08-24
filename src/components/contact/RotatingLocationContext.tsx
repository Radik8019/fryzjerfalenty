import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { site } from '../../config/site'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const INTERVAL_MS = 4000

type Location = (typeof site.locations)[number]

const RotatingLocationContext = createContext<Location | null>(null)

export function RotatingLocationProvider({ children }: { children: ReactNode }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (reduced || site.locations.length < 2) return
    const id = window.setInterval(() => {
      setIndex((current) => (current + 1) % site.locations.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [reduced])

  const location = site.locations[reduced ? 0 : index]

  return (
    <RotatingLocationContext.Provider value={location}>
      {children}
    </RotatingLocationContext.Provider>
  )
}

export function useRotatingLocation() {
  const location = useContext(RotatingLocationContext)
  if (!location) {
    throw new Error('useRotatingLocation must be used within RotatingLocationProvider')
  }
  return location
}
