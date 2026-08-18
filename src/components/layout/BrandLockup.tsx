import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import { useI18n } from '../../hooks/useI18n'

type Props = {
  compact?: boolean
}

export function BrandLockup({ compact = false }: Props) {
  const { locale, path } = useI18n()

  return (
    <Link to={path.home} className={`brand${compact ? ' brand--compact' : ''}`} aria-label={site.name}>
      <span className="brand-name">{site.name}</span>
      <span className="brand-tag">{site.tagline[locale]}</span>
    </Link>
  )
}
