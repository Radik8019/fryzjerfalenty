export type ReviewId = 'ania' | 'basia' | 'wiki' | 'ania77'

export type Review = {
  id: ReviewId
  name: string
  initial: string
  service: { pl: string; en: string }
  quote: { pl: string; en: string }
  featured?: boolean
}

export const reviews: Review[] = [
  {
    id: 'ania',
    name: 'Ania',
    initial: 'A',
    featured: true,
    service: { pl: 'Stylizacja', en: 'Styling' },
    quote: {
      pl: 'Super przemiły człowiek z poczuciem humoru. Zna się doskonale na tym, co robi i z przyjemnością doradzi. Wie, jak zadbać o włosy oraz klienta. Bardzo polecam',
      en: 'A wonderfully warm person with a sense of humour. He knows his craft inside out and advises with pleasure. He knows how to care for both hair and client. Highly recommended',
    },
  },
  {
    id: 'basia',
    name: 'Basia',
    initial: 'B',
    featured: true,
    service: { pl: 'Strzyżenie', en: 'Cut' },
    quote: {
      pl: 'Dzień dobry. Chciałam podziękować za świetne strzyżenie.Włosy układają się same i czuję się w nich bardzo komfortowo. Pozdrowienia dla Pana Radka.',
      en: 'Good morning. I wanted to thank you for a wonderful cut. My hair falls into place on its own and I feel very comfortable with it. Regards to Mr Radek.',
    },
  },
  {
    id: 'wiki',
    name: 'Wiki',
    initial: 'W',
    featured: true,
    service: { pl: 'Metamorfoza', en: 'Transformation' },
    quote: {
      pl: 'Nowy rok i mam nową fryzurę.Radku,u Ciebie zawsze można liczyć na pozytywną zmianę.Czuję się świetnie w nowej odsłonie.Dzięki Ci za te pozytywne wibracje na mej głowie :)',
      en: 'New year and a new hairstyle. Radek, with you I can always count on a positive change. I feel great in this new look. Thank you for those positive vibes on my head :)',
    },
  },
  {
    id: 'ania77',
    name: 'ania77',
    initial: 'A',
    featured: true,
    service: { pl: 'Koloryzacja i strzyżenie', en: 'Colour and cut' },
    quote: {
      pl: 'Miałam ochotę na zmianę wizerunku i Radek poradził sobie doskonale.Mam nową bardzo dobrze układającą się fryzurę,oraz super kolor.Fajny facet przy okazji :) Dzięki i pozdrawiam.Do zobaczenia wkrótce.',
      en: 'I felt like a change of image and Radek handled it perfectly. I have a new hairstyle that falls beautifully, and a superb colour. A nice guy too :) Thanks and regards. See you soon.',
    },
  },
]

export const featuredReviews = reviews.filter((review) => review.featured)
