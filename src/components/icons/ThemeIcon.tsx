import { publicUrl } from '../../config/assets'

export type ThemeIconKind = 'color' | 'cut' | 'curly'

const ICONS: Record<ThemeIconKind, { src: string; width: number; height: number }> = {
  color: {
    src: '/images/icon-color.webp?v=6',
    width: 400,
    height: 461,
  },
  cut: {
    src: '/images/icon-cut.webp?v=5',
    width: 400,
    height: 459,
  },
  curly: {
    src: '/images/icon-curly.webp?v=5',
    width: 400,
    height: 429,
  },
}

type Props = {
  kind: ThemeIconKind
  className?: string
  tilt?: boolean
}

export function ThemeIcon({ kind, className = '', tilt = false }: Props) {
  const icon = ICONS[kind]
  const wrapperClass = ['theme-icon', className, tilt ? 'theme-icon--tilt tilt3d__subject' : '']
    .filter(Boolean)
    .join(' ')

  const img = (
    <img
      className="theme-icon__img"
      src={publicUrl(icon.src)}
      width={icon.width}
      height={icon.height}
      alt=""
      draggable={false}
      decoding="async"
      loading={tilt ? 'eager' : 'lazy'}
    />
  )

  if (tilt) {
    return <div className={wrapperClass}>{img}</div>
  }

  return <span className={wrapperClass}>{img}</span>
}

export function galleryIconKind(filter: 'color' | 'cut' | 'styling'): ThemeIconKind {
  if (filter === 'styling') return 'curly'
  return filter
}
