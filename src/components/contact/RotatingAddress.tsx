import { useEffect, useState } from 'react'
import { site } from '../../config/site'
import { useI18n } from '../../hooks/useI18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

const INTERVAL_MS = 3000

export function RotatingAddress() {
  const { locale } = useI18n()
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
    <span className="rotating-address" aria-live="polite">
      <a
        key={location.mapLink}
        className="rotating-address__link"
        href={location.mapLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {location.address[locale]}
      </a>
    </span>
  )
}
