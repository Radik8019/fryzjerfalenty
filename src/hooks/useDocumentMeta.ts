import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { localeFromPath } from '../config/routes'
import { descriptions, titles } from '../config/site'
import { messages } from '../i18n'

export function useDocumentMeta() {
  const { pathname } = useLocation()
  const locale = localeFromPath(pathname)
  const t = messages[locale]

  useEffect(() => {
    document.documentElement.lang = locale
    document.title = titles[locale]
    const description = document.querySelector('meta[name="description"]')
    if (description) description.setAttribute('content', descriptions[locale])
  }, [locale, t])
}
