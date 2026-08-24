export const site = {
  name: 'Radosław Kostiw',
  tagline: {
    pl: 'Fryzjer Falenty Nowe · Warszawa',
    en: 'Hair Stylist · Falenty Nowe · Warsaw',
  },
  city: {
    pl: 'Falenty Nowe · Warszawa',
    en: 'Falenty Nowe · Warsaw',
  },
  phone: '+48 666 627 107',
  phoneHref: 'tel:+48666627107',
  email: 'falenty.hair@wp.pl',
  emailHref: 'mailto:falenty.hair@wp.pl',
  instagram: '',
  rating: '4.9',
  ratingMax: '5',
  hours: {
    pl: 'Tylko na umówienie',
    en: 'By appointment only',
  },
  address: {
    pl: 'Droga Hrabska 6/10, Falenty Nowe',
    en: 'Droga Hrabska 6/10, Falenty Nowe',
  },
  mapLink:
    'https://www.google.com/maps/search/?api=1&query=Droga+Hrabska+6%2F10%2C+Falenty+Nowe',
  locations: [
    {
      address: {
        pl: 'Droga Hrabska 6/10, Falenty Nowe',
        en: 'Droga Hrabska 6/10, Falenty Nowe',
      },
      mapLink:
        'https://www.google.com/maps/search/?api=1&query=Droga+Hrabska+6%2F10%2C+Falenty+Nowe',
    },
    {
      address: {
        pl: 'ul. Mokotowska 65/5, Warszawa',
        en: 'Mokotowska 65/5, Warsaw',
      },
      mapLink:
        'https://www.google.com/maps/search/?api=1&query=ul.+Mokotowska+65%2F5%2C+Warszawa',
    },
  ],
  splitforms: {
    endpoint: 'https://splitforms.com/api/submit',
    accessKey: String(import.meta.env.VITE_SPLITFORMS_ACCESS_KEY ?? ''),
  },
} as const

export const turnstileSiteKey = String(import.meta.env.VITE_TURNSTILE_SITE_KEY ?? '')

export const titles = {
  pl: 'Radosław Kostiw — Fryzjer Falenty Nowe · Warszawa',
  en: 'Radosław Kostiw — Hair Stylist · Falenty Nowe · Warsaw',
} as const

export const descriptions = {
  pl: 'Prywatne atelier haute coiffure Radosława Kostiwa. Koloryzacja, cięcie i stylizacja dla kobiet, które nie godzą się na kompromis. Falenty Nowe · Warszawa.',
  en: 'The private haute coiffure atelier of Radosław Kostiw. Colour, cut and styling for women who refuse to compromise. Falenty Nowe · Warsaw.',
} as const
