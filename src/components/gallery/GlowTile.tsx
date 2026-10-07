import { useEffect, useId, useRef, useState, type CSSProperties, type PointerEvent } from 'react'
import { createPortal } from 'react-dom'
import { publicUrl } from '../../config/assets'
import { type GalleryWork } from '../../data/gallery'
import { useI18n } from '../../hooks/useI18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'

type Props = {
  work: GalleryWork
}

export function GlowTile({ work }: Props) {
  const { locale, t } = useI18n()
  const reduced = usePrefersReducedMotion()
  const ref = useRef<HTMLButtonElement>(null)
  const closeRef = useRef<HTMLButtonElement>(null)
  const [open, setOpen] = useState(false)
  const titleId = useId()

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    const html = document.documentElement
    const body = document.body

    html.classList.add('gallery-lightbox-open')
    body.classList.add('gallery-lightbox-open')

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    closeRef.current?.focus({ preventScroll: true })

    return () => {
      document.removeEventListener('keydown', onKey)
      html.classList.remove('gallery-lightbox-open')
      body.classList.remove('gallery-lightbox-open')
      window.scrollTo(0, scrollY)
    }
  }, [open])

  const onMove = (event: PointerEvent<HTMLButtonElement>) => {
    if (reduced || event.pointerType !== 'mouse' || open) return
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

  const close = () => setOpen(false)

  const lightbox =
    open && work.image
      ? createPortal(
          <div
            className="gallery-lightbox"
            role="dialog"
            aria-modal="true"
            aria-labelledby={titleId}
          >
            <button
              type="button"
              className="gallery-lightbox__backdrop"
              aria-label={t.nav.close}
              onClick={close}
            />
            <div className="gallery-lightbox__panel">
              <p id={titleId} className="gallery-lightbox__title">
                {work.title[locale]}
              </p>
              <div
                className={`gallery-lightbox__stage glow-tile--${work.tone}${work.fit === 'contain' ? ' gallery-lightbox__stage--contain' : ''}`}
              >
                <img
                  className="gallery-lightbox__img"
                  src={publicUrl(work.image)}
                  alt={work.title[locale]}
                  decoding="async"
                  draggable={false}
                  referrerPolicy="strict-origin-when-cross-origin"
                  style={work.focus ? ({ '--photo-focus': work.focus } as CSSProperties) : undefined}
                />
              </div>
              <button
                ref={closeRef}
                type="button"
                className="gallery-lightbox__close icon-btn"
                aria-label={t.nav.close}
                onClick={close}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
          </div>,
          document.body,
        )
      : null

  return (
    <>
      <button
        ref={ref}
        type="button"
        className={`glow-tile glow-tile--${work.tone}${work.image ? ' glow-tile--photo' : ''}${work.fit === 'contain' ? ' glow-tile--contain' : ''}${open ? ' is-open' : ''}`}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={work.title[locale]}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
        onClick={() => setOpen((value) => !value)}
      >
        <span className="glow-tile__media" aria-hidden="true">
          {work.image ? (
            <>
              <img
                className="glow-tile__photo"
                src={publicUrl(work.image)}
                alt=""
                loading="lazy"
                decoding="async"
                draggable={false}
                referrerPolicy="strict-origin-when-cross-origin"
                style={work.focus ? ({ '--photo-focus': work.focus } as CSSProperties) : undefined}
              />
              <span className="glow-tile__shield" aria-hidden="true" />
            </>
          ) : null}
        </span>
        <span className="glow-tile__spot" aria-hidden="true" />
        <span className="glow-tile__rim" aria-hidden="true" />
      </button>
      {lightbox}
    </>
  )
}
