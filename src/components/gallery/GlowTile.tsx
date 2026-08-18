import { useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { type GalleryWork } from '../../data/gallery'
import { useI18n } from '../../hooks/useI18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Props = {
  work: GalleryWork
}

export function GlowTile({ work }: Props) {
  const { locale } = useI18n()
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)

  const onMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (reduced || event.pointerType !== 'mouse') return
    const node = ref.current
    if (!node) return
    const rect = node.getBoundingClientRect()
    const x = ((event.clientX - rect.left) / rect.width) * 100
    const y = ((event.clientY - rect.top) / rect.height) * 100
    node.style.setProperty('--spot-x', `${x}%`)
    node.style.setProperty('--spot-y', `${y}%`)
    const rx = ((y - 50) / 50) * -5
    const ry = ((x - 50) / 50) * 6
    node.style.setProperty('--rx', `${rx}deg`)
    node.style.setProperty('--ry', `${ry}deg`)
  }

  const onLeave = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--rx', '0deg')
    node.style.setProperty('--ry', '0deg')
  }

  return (
    <button
      ref={ref}
      type="button"
      className={`glow-tile glow-tile--${work.tone}${work.image ? ' glow-tile--photo' : ''}${open ? ' is-open' : ''}`}
      aria-expanded={open}
      aria-label={work.title[locale]}
      onPointerMove={onMove}
      onPointerLeave={onLeave}
      onClick={() => setOpen((value) => !value)}
    >
      <span className="glow-tile__media" aria-hidden="true">
        {work.image ? (
          <img
            className="glow-tile__photo"
            src={work.image}
            alt=""
            style={work.focus ? ({ '--photo-focus': work.focus } as CSSProperties) : undefined}
          />
        ) : null}
      </span>
      <span className="glow-tile__spot" aria-hidden="true" />
      <span className="glow-tile__rim" aria-hidden="true" />
    </button>
  )
}
