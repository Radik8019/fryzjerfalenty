export type Locale = 'pl' | 'en'
export type PageId = 'home' | 'gallery' | 'about' | 'services' | 'contact' | 'privacy'

export const CONTACT_FORM_HASH = 'formularz'
export const GALLERY_WORKS_HASH = 'prace'

export type GalleryCatParam = 'color' | 'cut' | 'styling'

export function galleryCategoryHref(galleryPath: string, category: GalleryCatParam) {
  return `${galleryPath}?cat=${category}#${GALLERY_WORKS_HASH}`
}

export const paths: Record<Locale, Record<PageId, string>> = {
  pl: {
    home: '/',
    gallery: '/galeria',
    about: '/o-mnie',
    services: '/uslugi',
    contact: '/kontakt',
    privacy: '/polityka-prywatnosci',
  },
  en: {
    home: '/en',
    gallery: '/en/gallery',
    about: '/en/about',
    services: '/en/services',
    contact: '/en/contact',
    privacy: '/en/privacy',
  },
}

export function localeFromPath(pathname: string): Locale {
  return pathname === '/en' || pathname.startsWith('/en/') ? 'en' : 'pl'
}

export function pageFromPath(pathname: string): PageId {
  const locale = localeFromPath(pathname)
  const table = paths[locale]
  const match = (Object.keys(table) as PageId[]).find((id) => table[id] === pathname)
  return match ?? 'home'
}

export function switchLocalePath(pathname: string, next: Locale): string {
  return paths[next][pageFromPath(pathname)]
}
