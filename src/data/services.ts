export type ServiceGroup = 'ladies' | 'gentlemen'

export type Service = {
  id: string
  group: ServiceGroup
  name: { pl: string; en: string }
  detail: { pl: string; en: string }
  price: { pl: string; en: string }
}

const from = (amount: number) =>
  ({
    pl: `od ${amount} zł`,
    en: `from ${amount} zł`,
  }) as const

export const services: Service[] = [
  {
    id: 'ladies-cut-style',
    group: 'ladies',
    name: { pl: 'Strzyżenie + czesanie', en: 'Cut + styling' },
    detail: { pl: 'Mycie, pielęgnacja, modelowanie', en: 'Wash, care, styling' },
    price: from(220),
  },
  {
    id: 'ladies-curly',
    group: 'ladies',
    name: { pl: 'Strzyżenie włosy kręcone', en: 'Curly hair cut' },
    detail: { pl: 'Cięcie i forma skrętu', en: 'Cut and curl shape' },
    price: from(230),
  },
  {
    id: 'ladies-global',
    group: 'ladies',
    name: { pl: 'Koloryzacje globalne (1 kolor)', en: 'All-over colour (1 colour)' },
    detail: { pl: 'Kolor na całość', en: 'Full colour' },
    price: from(450),
  },
  {
    id: 'ladies-toning',
    group: 'ladies',
    name: { pl: 'Tonowanie włosów', en: 'Hair toning' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(200),
  },
  {
    id: 'ladies-decolour-toning',
    group: 'ladies',
    name: { pl: 'Dekoloryzacja + tonowanie', en: 'Decolouring + toning' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(800),
  },
  {
    id: 'ladies-highlights',
    group: 'ladies',
    name: { pl: 'Refleksy', en: 'Highlights' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(400),
  },
  {
    id: 'ladies-ombre',
    group: 'ladies',
    name: { pl: 'Ombre', en: 'Ombre' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(550),
  },
  {
    id: 'ladies-airtouch',
    group: 'ladies',
    name: { pl: 'AirTouch', en: 'AirTouch' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(1200),
  },
  {
    id: 'ladies-sombre',
    group: 'ladies',
    name: { pl: 'Sombre', en: 'Sombre' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(550),
  },
  {
    id: 'ladies-balayage',
    group: 'ladies',
    name: { pl: 'Balayage', en: 'Balayage' },
    detail: { pl: 'Koloryzacja', en: 'Colour' },
    price: from(650),
  },
  {
    id: 'ladies-care',
    group: 'ladies',
    name: { pl: 'Pielęgnacje', en: 'Treatments' },
    detail: { pl: 'Rytuał pielęgnacyjny', en: 'Care ritual' },
    price: from(150),
  },
  {
    id: 'ladies-botox',
    group: 'ladies',
    name: { pl: 'Botoks', en: 'Hair botox' },
    detail: { pl: 'Odbudowa włosa', en: 'Hair reconstruction' },
    price: from(400),
  },
  {
    id: 'ladies-keratin',
    group: 'ladies',
    name: { pl: 'Keratynowe prostowanie włosów', en: 'Keratin hair straightening' },
    detail: { pl: 'Prostowanie keratynowe', en: 'Keratin treatment' },
    price: from(750),
  },
  {
    id: 'gents-cut',
    group: 'gentlemen',
    name: { pl: 'Strzyżenie', en: 'Haircut' },
    detail: { pl: 'Strzyżenie i wykończenie', en: 'Cut and finish' },
    price: from(120),
  },
  {
    id: 'gents-beard-trim',
    group: 'gentlemen',
    name: { pl: 'Trymowanie brody', en: 'Beard trim' },
    detail: { pl: 'Broda i kontur', en: 'Beard and contour' },
    price: from(80),
  },
  {
    id: 'gents-colour',
    group: 'gentlemen',
    name: { pl: 'Koloryzacje', en: 'Colour' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: from(300),
  },
  {
    id: 'gents-toning-light',
    group: 'gentlemen',
    name: { pl: 'Tonowanie zarostu lekki cover', en: 'Beard toning — light coverage' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: from(100),
  },
  {
    id: 'gents-toning-full',
    group: 'gentlemen',
    name: { pl: 'Tonowanie zarostu pełny cover', en: 'Beard toning — full coverage' },
    detail: { pl: 'Kolor', en: 'Colour' },
    price: from(120),
  },
  {
    id: 'gents-beard',
    group: 'gentlemen',
    name: { pl: 'Pielęgnacja zarostu', en: 'Beard care' },
    detail: { pl: 'Broda i kontur', en: 'Beard and contour' },
    price: { pl: 'w cenie zabiegów', en: 'included with services' },
  },
]

export const ladiesMenu = services.filter((item) => item.group === 'ladies')
export const gentlemenMenu = services.filter((item) => item.group === 'gentlemen')
