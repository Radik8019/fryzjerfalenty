import { useI18n } from '../../hooks/useI18n'
import { useRotatingLocation } from './RotatingLocationContext'

export function RotatingAddress() {
  const { locale } = useI18n()
  const location = useRotatingLocation()

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
