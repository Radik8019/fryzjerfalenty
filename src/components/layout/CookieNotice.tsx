import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useI18n } from '../../hooks/useI18n'

const STORAGE_KEY = 'rk-cookie-notice'

export function CookieNotice() {
  const { t, path } = useI18n()
  const [open, setOpen] = useState(false)

  useEffect(() => {
    try {
      setOpen(localStorage.getItem(STORAGE_KEY) !== '1')
    } catch {
      setOpen(true)
    }
  }, [])

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1')
    } catch {
      /* private mode */
    }
    setOpen(false)
  }

  if (!open) return null

  return (
    <div className="cookie-notice" role="dialog" aria-label={t.cookies.title}>
      <p>
        {t.cookies.body}{' '}
        <Link to={path.privacy}>{t.footer.privacy}</Link>
      </p>
      <button type="button" className="cta" onClick={accept}>
        {t.cookies.accept}
      </button>
    </div>
  )
}
