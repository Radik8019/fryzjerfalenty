import { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { CONTACT_FORM_HASH } from '../../config/routes'
import { useI18n } from '../../hooks/useI18n'
import { BrandLockup } from './BrandLockup'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeToggle } from './ThemeToggle'

type Props = {
  hero?: boolean
}

export function Header({ hero = false }: Props) {
  const { t, path } = useI18n()
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { to: path.about, label: t.nav.about },
    { to: path.gallery, label: t.nav.gallery },
    { to: path.services, label: t.nav.services },
    { to: path.contact, label: t.nav.contact },
  ]

  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const y = window.scrollY
    const { style } = document.body
    const html = document.documentElement
    style.overflow = 'hidden'
    style.position = 'fixed'
    style.top = `-${y}px`
    style.left = '0'
    style.right = '0'
    html.style.overflow = 'hidden'
    return () => {
      style.overflow = ''
      style.position = ''
      style.top = ''
      style.left = ''
      style.right = ''
      html.style.overflow = ''
      window.scrollTo(0, y)
    }
  }, [open])

  return (
    <header className={`site-header${hero ? ' site-header--hero' : ''}${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="header-inner">
        <BrandLockup compact />
        <div className="header-end">
          <nav className="nav-desktop" aria-label={t.nav.home}>
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} end={false}>
                {link.label}
              </NavLink>
            ))}
          </nav>
          <div className="header-tools">
            <LanguageSwitch />
            <ThemeToggle />
            <NavLink className="cta cta-desktop" to={`${path.contact}#${CONTACT_FORM_HASH}`}>
              {t.nav.book}
            </NavLink>
            <button
              type="button"
              className="icon-btn menu-toggle"
              aria-expanded={open}
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
                  <path d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {open ? (
        <nav className="mobile-nav" aria-label={t.nav.menu}>
          {links.map((link) => (
            <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
              {link.label}
            </NavLink>
          ))}
          <NavLink className="cta" to={`${path.contact}#${CONTACT_FORM_HASH}`} onClick={() => setOpen(false)}>
            {t.nav.book}
          </NavLink>
        </nav>
      ) : null}
    </header>
  )
}
