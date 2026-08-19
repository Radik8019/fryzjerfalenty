import { publicUrl } from '../../config/assets'

export type ThemeIconKind = 'color' | 'cut' | 'curly'

const ICONS: Record<ThemeIconKind, { dark: string; light: string; width: number; height: number }> = {
  color: {
    dark: '/images/icon-color.png?v=2',
    light: '/images/icon-color-light.png?v=1',
    width: 231,
    height: 359,
  },
  cut: {
    dark: '/images/icon-cut.png?v=2',
    light: '/images/icon-cut-light.png?v=1',
    width: 231,
    height: 359,
  },
  curly: {
    dark: '/images/icon-curly.png?v=2',
    light: '/images/icon-curly-light.png?v=1',
    width: 232,
    height: 359,
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

  const inner = (
    <>
      <img
        className="theme-icon__img theme-icon__img--dark"
        src={publicUrl(icon.dark)}
        alt=""
        width={icon.width}
        height={icon.height}
        draggable={false}
      />
      <img
        className="theme-icon__img theme-icon__img--light"
        src={publicUrl(icon.light)}
        alt=""
        width={icon.width}
        height={icon.height}
        draggable={false}
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
