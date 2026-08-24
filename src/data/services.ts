export type ServiceGroup = 'ladies' | 'gentlemen'

export type Service = {
  id: string
  group: ServiceGroup
  name: { pl: string; en: string }
  detail: { pl: string; en: string }
  price: { pl: string; en: string }
}

const pending = { pl: '—', en: '—' } as const

export const services: Service[] = [
  {
    id: 'ladies-cut-style',
    group: 'ladies',
    name: { pl: 'Strzyżenia i stylizacje', en: 'Cuts and styling' },
    detail: { pl: 'Mycie, pielęgnacja, modelowanie', en: 'Wash, care, styling' },
    price: pending,
  },
  {
    id: 'ladies-curly',
    group: 'ladies',
    name: { pl: 'Włosy naturalnie kręcone', en: 'Naturally curly hair' },
    detail: { pl: 'Cięcie i forma skrętu', en: 'Cut and curl shape' },
    price: pending,
  },
  {
    id: 'ladies-global',
    group: 'ladies',
    name: { pl: 'Koloryzacje globalne', en: 'All-over colour' },
    detail: { pl: 'Kolor na całość', en: 'Full colour' },
    price: pending,
  },
  {
    id: 'ladies-toning',
    group: 'ladies',
    name: { pl: 'Tonowanie włosów', en: 'Hair toning' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-decolour-toning',
    group: 'ladies',
    name: { pl: 'Dekoloryzacja + tonowanie', en: 'Decolouring and toning' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-highlights',
    group: 'ladies',
    name: { pl: 'Refleksy', en: 'Highlights' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-ombre',
    group: 'ladies',
    name: { pl: 'Ombre', en: 'Ombre' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-airtouch',
    group: 'ladies',
    name: { pl: 'Air Touch', en: 'Air Touch' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-sombre',
    group: 'ladies',
    name: { pl: 'Sombre', en: 'Sombre' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-balayage',
    group: 'ladies',
    name: { pl: 'Balayage', en: 'Balayage' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: pending,
  },
  {
    id: 'ladies-care',
    group: 'ladies',
    name: { pl: 'Pielęgnacje', en: 'Treatments' },
    detail: { pl: 'Rytuał pielęgnacyjny', en: 'Care ritual' },
    price: pending,
  },
  {
    id: 'ladies-botox',
    group: 'ladies',
    name: { pl: 'Botoks', en: 'Hair botox' },
    detail: { pl: 'Odbudowa włosa', en: 'Hair reconstruction' },
    price: pending,
  },
  {
    id: 'gents-cut',
    group: 'gentlemen',
    name: { pl: 'Strzyżenia', en: 'Haircuts' },
    detail: { pl: 'Strzyżenie i wykończenie', en: 'Cut and finish' },
    price: pending,
  },
  {
    id: 'gents-beard-trim',
    group: 'gentlemen',
    name: { pl: 'Trymowanie brody', en: 'Beard trim' },
    detail: { pl: 'Broda i kontur', en: 'Beard and contour' },
    price: pending,
  },
  {
    id: 'gents-colour',
    group: 'gentlemen',
    name: { pl: 'Koloryzacje', en: 'Colour' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: pending,
  },
  {
    id: 'gents-toning-light',
    group: 'gentlemen',
    name: { pl: 'Tonowanie — lekki cover', en: 'Toning — light coverage' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: pending,
  },
  {
    id: 'gents-toning-full',
    group: 'gentlemen',
    name: { pl: 'Tonowanie — pełny cover', en: 'Toning — full coverage' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: pending,
  },
  {
    id: 'gents-beard',
    group: 'gentlemen',
    name: { pl: 'Pielęgnacja zarostu', en: 'Beard care' },
    detail: { pl: 'Broda i kontur', en: 'Beard and contour' },
    price: pending,
  },
]

export const ladiesMenu = services.filter((item) => item.group === 'ladies')
export const gentlemenMenu = services.filter((item) => item.group === 'gentlemen')
