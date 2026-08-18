import { useLocation } from 'react-router-dom'
import { localeFromPath, paths } from '../config/routes'
import { messages } from '../i18n'

export function useI18n() {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  return { locale, t: messages[locale], path: paths[locale] }
}
