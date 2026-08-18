import { services, type Service } from '../../data/services'
import { useI18n } from '../../hooks/useI18n'
import { ServiceIcon, type ServiceIconKind } from './ServiceIcon'

type BentoConfig = {
  id: string
  icon: ServiceIconKind
  size: 'large' | 'small'
  name?: { pl: string; en: string }
}

const bentoConfig: BentoConfig[] = [
  { id: 'ladies-cut-style', icon: 'cut', size: 'large' },
  { id: 'ladies-global', icon: 'color', size: 'large' },
  { id: 'ladies-ombre', icon: 'ombre', size: 'small' },
  { id: 'ladies-airtouch', icon: 'balayage', size: 'small' },
  { id: 'ladies-curly', icon: 'curly', size: 'small' },
  { id: 'ladies-toning', icon: 'care', size: 'small', name: { pl: 'Tonowanie', en: 'Toning' } },
]

export function ServiceBento() {
  const { locale, t } = useI18n()

  const items = bentoConfig
    .map((config) => {
      const service = services.find((entry) => entry.id === config.id)
      if (!service) return null
      return { ...config, service }
    })
    .filter((entry): entry is BentoConfig & { service: Service } => entry !== null)

  return (
    <div className="service-bento" aria-label={t.nav.services}>
      {items.map(({ id, icon, size, name, service }) => (
        <div key={id} className={`service-bento__card service-bento__card--${size}`}>
          <span className="service-bento__icon">
            <ServiceIcon kind={icon} />
          </span>
          <span className="service-bento__name">{name?.[locale] ?? service.name[locale]}</span>
        </div>
      ))}
    </div>
  )
}
