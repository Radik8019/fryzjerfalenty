type IconKind = 'cut' | 'color' | 'ombre' | 'balayage' | 'curly' | 'care'

export type ServiceIconKind = IconKind

type Props = {
  kind: IconKind
}

export function ServiceIcon({ kind }: Props) {
  const common = {
    viewBox: '0 0 48 48',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.25,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true as const,
  }

  switch (kind) {
    case 'cut':
      return (
        <svg {...common}>
          <circle cx="15" cy="14" r="5" />
          <circle cx="15" cy="34" r="5" />
          <path d="M19.5 16.5 40 28" />
          <path d="M19.5 31.5 40 20" />
        </svg>
      )
    case 'color':
      return (
        <svg {...common}>
          <path d="M24 6l2.6 8h8.4l-6.8 5 2.6 8.1L24 22.2l-6.8 4.9 2.6-8.1-6.8-5h8.4z" />
          <path d="M18 34h12" />
          <path d="M21 38h6" />
        </svg>
      )
    case 'ombre':
      return (
        <svg {...common}>
          <path d="M16 8c4 6 4 10 0 16 4 6 4 10 0 16" />
          <path d="M24 8c4 6 4 10 0 16 4 6 4 10 0 16" />
          <path d="M32 8c4 6 4 10 0 16 4 6 4 10 0 16" />
        </svg>
      )
    case 'balayage':
      return (
        <svg {...common}>
          <path d="M14 40c2-12 8-20 20-28" />
          <path d="M20 40c2-10 7-16 16-24" />
          <path d="M26 40c1.5-7 5-12 12-18" />
          <circle cx="34" cy="12" r="3" />
        </svg>
      )
    case 'curly':
      return (
        <svg {...common}>
          <path d="M12 10c0 5-5 7-5 13s5 8 5 13" />
          <path d="M24 8c0 6-6 8-6 15s6 9 6 15" />
          <path d="M36 10c0 5-5 7-5 13s5 8 5 13" />
        </svg>
      )
    case 'care':
      return (
        <svg {...common}>
          <path d="M24 8c-7 9-14 13-14 22a14 14 0 1 0 28 0c0-9-7-13-14-22z" />
        </svg>
      )
  }
}
