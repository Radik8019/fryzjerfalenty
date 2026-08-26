import { useEffect, useState, type MouseEvent as ReactMouseEvent } from 'react'
import { createPortal } from 'react-dom'
import { NavLink, useLocation } from 'react-router-dom'
import { CONTACT_FORM_HASH } from '../../config/routes'
import { useI18n } from '../../hooks/useI18n'
import { BrandLockup } from './BrandLockup'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeToggle } from './ThemeToggle'

const MOBILE_NAV_MQ = '(max-width: 960px)'
const MENU_LINK_GUARD_MS = 400

type Props = {
  hero?: boolean
}

function useMobileNav() {
  const [isMobileNav, setIsMobileNav] = useState(
    () => typeof window !== 'undefined' && window.matchMedia(MOBILE_NAV_MQ).matches,
  )

  useEffect(() => {
    const mq = window.matchMedia(MOBILE_NAV_MQ)
    const onChange = () => setIsMobileNav(mq.matches)
    onChange()
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return isMobileNav
}

export function Header({ hero = false }: Props) {
  const { t, path } = useI18n()
  const { pathname } = useLocation()
  const isMobileNav = useMobileNav()
  const [open, setOpen] = useState(false)
  const [menuReady, setMenuReady] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const links = [
    { to: path.about, label: t.nav.about },
    { to: path.gallery, label: t.nav.gallery },
    { to: path.services, label: t.nav.services },
    { to: path.contact, label: t.nav.contact },
  ]

  useEffect(() => {
    if (!isMobileNav && open) setOpen(false)
  }, [isMobileNav, open])

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
    if (!open) {
      setMenuReady(false)
      return
    }

    const timer = window.setTimeout(() => setMenuReady(true), MENU_LINK_GUARD_MS)
    return () => window.clearTimeout(timer)
  }, [open])

  useEffect(() => {
    if (!open) return

    const scrollY = window.scrollY
    const html = document.documentElement
    const body = document.body

    html.classList.add('menu-open')
    body.classList.add('menu-open')

    return () => {
      html.classList.remove('menu-open')
      body.classList.remove('menu-open')
      window.scrollTo(0, scrollY)
    }
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  const handleToggle = (event: ReactMouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
    event.stopPropagation()
    setOpen((value) => !value)
  }

  const handleNavClick = (event: ReactMouseEvent<HTMLAnchorElement>) => {
    if (!menuReady) {
      event.preventDefault()
      event.stopPropagation()
      return
    }

    setOpen(false)
  }

  const mobileMenu =
    open && isMobileNav
      ? createPortal(
          <>
            <div
              className="mobile-nav-backdrop"
              aria-hidden="true"
              onClick={() => setOpen(false)}
            />
            <nav
              id="mobile-nav-panel"
              className={`mobile-nav${menuReady ? ' is-ready' : ''}`}
              aria-label={t.nav.menu}
              aria-hidden={!menuReady}
            >
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} onClick={handleNavClick}>
                  {link.label}
                </NavLink>
              ))}
              <NavLink
                className="cta"
                to={`${path.contact}#${CONTACT_FORM_HASH}`}
                onClick={handleNavClick}
              >
                {t.nav.book}
              </NavLink>
            </nav>
          </>,
          document.body,
        )
      : null

  return (
    <header className={`site-header${hero ? ' site-header--hero' : ''}${scrolled ? ' is-scrolled' : ''}${open ? ' is-open' : ''}`}>
      <div className="header-inner">
        <BrandLockup compact />
        <div className="header-end">
          {!isMobileNav ? (
            <nav className="nav-desktop" aria-label={t.nav.home}>
              {links.map((link) => (
                <NavLink key={link.to} to={link.to} end={false}>
                  {link.label}
                </NavLink>
              ))}
            </nav>
          ) : null}
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
              aria-controls={open ? 'mobile-nav-panel' : undefined}
              aria-label={open ? t.nav.close : t.nav.menu}
              onClick={handleToggle}
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
      {mobileMenu}
    </header>
  )
}
