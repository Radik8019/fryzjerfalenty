import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { site } from '../../config/site'

const INTERVAL_MS = 5000

type Location = (typeof site.locations)[number]

const RotatingLocationContext = createContext<Location | null>(null)

export function RotatingLocationProvider({ children }: { children: ReactNode }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (site.locations.length < 2) return

    let id = 0

    const clear = () => {
      window.clearInterval(id)
      id = 0
    }

    const start = () => {
      clear()
      id = window.setInterval(() => {
        setIndex((current) => (current + 1) % site.locations.length)
      }, INTERVAL_MS)
    }

    const onVisibility = () => {
      // iOS Safari freezes timers in background; resume a clean cadence when visible again.
      if (document.visibilityState === 'hidden') {
        clear()
        return
      }
      start()
    }

    start()
    document.addEventListener('visibilitychange', onVisibility)
    window.addEventListener('pageshow', start)

    return () => {
      clear()
      document.removeEventListener('visibilitychange', onVisibility)
      window.removeEventListener('pageshow', start)
    }
  }, [])

  const location = site.locations[index] ?? site.locations[0]

  return (
    <RotatingLocationContext.Provider value={location}>{children}</RotatingLocationContext.Provider>
  )
}

export function useRotatingLocation() {
  const location = useContext(RotatingLocationContext)
  if (!location) {
    throw new Error('useRotatingLocation must be used within RotatingLocationProvider')
  }
  return location
}
