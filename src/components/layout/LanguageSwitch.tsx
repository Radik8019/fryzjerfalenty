import { useEffect, useId, useRef, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { type Locale, switchLocalePath } from '../../config/routes'
import { useI18n } from '../../hooks/useI18n'

export function LanguageSwitch() {
  const { locale, t } = useI18n()
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const [open, setOpen] = useState(false)
  const wrapRef = useRef<HTMLDivElement>(null)
  const menuId = useId()

  useEffect(() => {
    if (!open) return
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }
    const onPointerDown = (event: PointerEvent) => {
      if (!wrapRef.current?.contains(event.target as Node)) setOpen(false)
    }
    document.addEventListener('keydown', onKey)
    document.addEventListener('pointerdown', onPointerDown)
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('pointerdown', onPointerDown)
    }
  }, [open])

  const choose = (next: Locale) => {
    try {
      localStorage.setItem('rk-locale', next)
    } catch {
      /* ignore */
    }
    navigate(switchLocalePath(pathname, next))
    setOpen(false)
  }

  return (
    <div className="lang-wrap" ref={wrapRef}>
      <button
        type="button"
        className="icon-btn"
        aria-label={t.chrome.language}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => setOpen((value) => !value)}
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
          <circle cx="12" cy="12" r="9" />
          <path d="M3 12h18M12 3c2.5 3 3.8 6 3.8 9s-1.3 6-3.8 9c-2.5-3-3.8-6-3.8-9s1.3-6 3.8-9z" />
        </svg>
        <span className="lang-code">{locale.toUpperCase()}</span>
      </button>
      {open ? (
        <div className="lang-menu" role="listbox" id={menuId} aria-label={t.chrome.language}>
          <button type="button" role="option" aria-current={locale === 'pl'} onClick={() => choose('pl')}>
            PL · {t.chrome.languagePl}
          </button>
          <button type="button" role="option" aria-current={locale === 'en'} onClick={() => choose('en')}>
            EN · {t.chrome.languageEn}
          </button>
        </div>
      ) : null}
    </div>
  )
}
