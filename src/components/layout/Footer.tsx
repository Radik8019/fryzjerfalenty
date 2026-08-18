import { Link } from 'react-router-dom'
import { site } from '../../config/site'
import { useI18n } from '../../hooks/useI18n'
import { BrandLockup } from './BrandLockup'
import { LanguageSwitch } from './LanguageSwitch'
import { ThemeToggle } from './ThemeToggle'

export function Footer() {
  const { t, path, locale } = useI18n()
  const year = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="footer-grid">
          <div>
            <BrandLockup />
            <p className="lead" style={{ marginTop: 16 }}>
              {site.address[locale]} · {site.hours[locale]}
            </p>
          </div>
          <nav className="footer-nav" aria-label="Footer">
            <Link to={path.gallery}>{t.nav.gallery}</Link>
            <Link to={path.about}>{t.nav.about}</Link>
            <Link to={path.services}>{t.nav.services}</Link>
            <Link to={path.contact}>{t.nav.contact}</Link>
            <Link to={path.privacy}>{t.footer.privacy}</Link>
          </nav>
          <div className="footer-meta">
            <a href={site.phoneHref}>{site.phone}</a>
            <a href={site.emailHref}>{site.email}</a>
            <p>{site.hours[locale]}</p>
            {site.instagram ? <a href={site.instagram}>{t.footer.instagram}</a> : <p>{t.footer.instagram}</p>}
            <div className="header-tools" style={{ marginTop: 8 }}>
              <LanguageSwitch />
              <ThemeToggle />
            </div>
          </div>
        </div>
        <div className="footer-copy">
          <p>
            © {year} {site.name}. {t.footer.rights}
          </p>
          <Link to={path.privacy}>{t.footer.privacy}</Link>
        </div>
      </div>
    </footer>
  )
}
