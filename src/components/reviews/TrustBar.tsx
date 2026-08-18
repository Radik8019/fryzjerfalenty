import { site } from '../../config/site'
import { useI18n } from '../../hooks/useI18n'

function Star() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2.6l2.4 6.9h7.2l-5.8 4.3 2.2 7-6-4.4-6 4.4 2.2-7-5.8-4.3h7.2z"
      />
    </svg>
  )
}

export function TrustBar() {
  const { t } = useI18n()

  return (
    <section className="trust-bar" aria-label={t.trust.label}>
      <div className="wrap trust-inner">
        <div className="trust-score">
          <span className="stars" aria-hidden="true">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </span>
          <strong>{site.rating}/{site.ratingMax}</strong>
          <span>{t.trust.label}</span>
        </div>
        <div className="trust-logos">
          <span>{t.trust.on}</span>
          <span className="trust-logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <rect x="3" y="3" width="18" height="18" rx="4" fill="none" stroke="currentColor" strokeWidth="1.5" />
              <path d="M8 14.5V9.5h3.2c1.4 0 2.3.8 2.3 2s-.9 2-2.3 2H8zm3-1.2c.5 0 .8-.3.8-.8s-.3-.8-.8-.8H9.3v1.6H11z" fill="currentColor" />
            </svg>
            {t.trust.booksy}
          </span>
          <span className="trust-logo">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                fill="currentColor"
                d="M21.4 12.2c0-.7-.1-1.4-.2-2H12v3.8h5.3c-.2 1.2-.9 2.2-2 2.9v2.4h3.2c1.9-1.7 3-4.3 3-7.1z"
                opacity="0.9"
              />
              <path
                fill="currentColor"
                d="M12 22c2.7 0 5-0.9 6.6-2.4l-3.2-2.4c-.9.6-2 1-3.4 1-2.6 0-4.8-1.7-5.6-4.1H3.1v2.5C4.8 19.8 8.1 22 12 22z"
                opacity="0.75"
              />
            </svg>
            {t.trust.google}
          </span>
        </div>
      </div>
    </section>
  )
}
