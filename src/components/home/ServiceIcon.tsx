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
          {/* Astrological haircut icon: scissors + crescent halo + sparkles */}
          <path d="M15 18c4-7 14-7 18 0c-3 9-15 11-18 0z" />
          <path d="M18 22l6 16" />
          <path d="M30 22l-6 16" />
          <circle cx="24" cy="22" r="2.6" />

          <path d="M10.5 14l1.6 3.2 3.4 1.1-3.4 1.1-1.6 3.2-1.6-3.2-3.4-1.1 3.4-1.1z" />
          <circle cx="36.5" cy="13.5" r="1.6" />
          <circle cx="38.5" cy="22" r="1.2" />
        </svg>
      )
    case 'color':
      return (
        <svg {...common}>
          {/* Astrological colour icon: planet + ring + constellation sparkles */}
          <circle cx="24" cy="22" r="7.2" />
          <path d="M16 21c2.8-4.5 12.2-4.5 16 0" />
          <path d="M16 23c2.8 4.5 12.2 4.5 16 0" />

          <circle cx="14" cy="14" r="1.8" />
          <circle cx="18" cy="10.5" r="1.2" />
          <circle cx="22.5" cy="14" r="1.5" />
          <path d="M14 14l8.5-3.5" />
          <path d="M14 14l8 0" />
          <path d="M18 10.5l6 3.5" />

          <path d="M36 34l2.1-4.4 4.2-2.1-4.2-2.1-2.1-4.4-2.1 4.4-4.2 2.1 4.2 2.1z" />
          <circle cx="34.5" cy="26" r="1.4" />
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
          {/* Astrological curly icon: curls + comet tail + planet */}
          <path d="M12 10c0 6-5 8-5 14s5 9 5 15" />
          <path d="M24 8c0 7-6 9-6 16s6 11 6 16" />
          <path d="M36 10c0 6-5 8-5 14s5 9 5 15" />

          <circle cx="34" cy="18" r="2.3" />
          <path d="M26 24c-8 5-12 10-14 18" />
          <path d="M18 16l1.1 2.2 2.4.8-2.4.8-1.1 2.2-1.1-2.2-2.4-.8 2.4-.8z" />
          <circle cx="40.5" cy="25.5" r="1.3" />
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
