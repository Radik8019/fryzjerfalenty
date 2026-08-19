import { Outlet, useLocation } from 'react-router-dom'
import { useDocumentMeta } from '../../hooks/useDocumentMeta'
import { useI18n } from '../../hooks/useI18n'
import { CookieNotice } from './CookieNotice'
import { Footer } from './Footer'
import { Header } from './Header'
import { InitialLoader } from './InitialLoader'
import { MediaGuard } from './MediaGuard'

export function Layout() {
  const { pathname } = useLocation()
  const { t } = useI18n()
  useDocumentMeta()
  const isHome = pathname === '/' || pathname === '/en'

  return (
    <>
      <a className="skip-link" href="#main">
        {t.nav.home}
      </a>
      <InitialLoader />
      <MediaGuard />
      <div className={`site-scroll${isHome ? ' site-scroll--home' : ''}`}>
        <Header hero={isHome} />
        <main id="main" className="page-enter" key={pathname}>
          <Outlet />
        </main>
        <Footer />
      </div>
      <CookieNotice />
    </>
  )
}
