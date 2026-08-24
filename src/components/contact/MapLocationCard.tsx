import { useI18n } from '../../hooks/useI18n'
import { useRotatingLocation } from './RotatingLocationContext'

export function MapLocationCard() {
  const { t, locale } = useI18n()
  const location = useRotatingLocation()

  return (
    <aside className="map-card">
      <p className="kicker">{t.contact.map}</p>
      <p className="map-card__address rotating-address" aria-live="polite">
        <span key={location.mapLink} className="rotating-address__text">
          {location.address[locale]}
        </span>
      </p>
      <a
        key={location.mapLink}
        className="cta"
        href={location.mapLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        {t.contact.mapOpen}
      </a>
    </aside>
  )
}
