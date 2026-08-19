import { publicUrl } from '../../config/assets'

export type ThemeIconKind = 'color' | 'cut' | 'curly'

const ICONS: Record<
  ThemeIconKind,
  { dark: string; light: string; width: number; height: number }
> = {
  color: {
    dark: '/images/icon-color.webp?v=3',
    light: '/images/icon-color-light.webp?v=3',
    width: 354,
    height: 418,
  },
  cut: {
    dark: '/images/icon-cut.webp?v=3',
    light: '/images/icon-cut-light.webp?v=4',
    width: 355,
    height: 381,
  },
  curly: {
    dark: '/images/icon-curly.webp?v=3',
    light: '/images/icon-curly-light.webp?v=3',
    width: 361,
    height: 378,
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

  const imgProps = {
    alt: '',
    draggable: false as const,
    decoding: 'async' as const,
    loading: (tilt ? 'eager' : 'lazy') as 'eager' | 'lazy',
  }

  const inner = (
    <>
      <img
        className="theme-icon__img theme-icon__img--dark"
        src={publicUrl(icon.dark)}
        width={icon.width}
        height={icon.height}
        {...imgProps}
      />
      <img
        className="theme-icon__img theme-icon__img--light"
        src={publicUrl(icon.light)}
        width={icon.width}
        height={icon.height}
        {...imgProps}
      />
    </>
  )

  if (tilt) {
    return <div className={wrapperClass}>{inner}</div>
  }

  return <span className={wrapperClass}>{inner}</span>
}

export function galleryIconKind(filter: 'color' | 'cut' | 'styling'): ThemeIconKind {
  if (filter === 'styling') return 'curly'
  return filter
}
