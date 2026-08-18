export type ReviewId =
  | 'marzena'
  | 'aga'
  | 'julia'
  | 'kaska'
  | 'karolina'
  | 'malgosia'
  | 'katarzyna'

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
    id: 'marzena',
    name: 'Marzena',
    initial: 'M',
    featured: true,
    service: { pl: 'Koloryzacja', en: 'Colour' },
    quote: {
      pl: 'Chodzę do Ciebie już pięć lat. Za każdym razem znajdziesz coś, co pasuje do mnie i do pory roku. Włosy układają się naturalnie. Czuję się tu spokojnie i zaopiekowana.',
      en: 'I have been coming to you for five years. Each time you find something that suits me — and the season. My hair falls naturally. I leave feeling calm and looked after.',
    },
  },
  {
    id: 'aga',
    name: 'Aga',
    initial: 'A',
    featured: true,
    service: { pl: 'Cięcie', en: 'Cut' },
    quote: {
      pl: 'Lubię cięcia Radka. Od sześciu lat wychodzę z poczuciem, że fryzura jest naprawdę moja. Słucha i dopasowuje — nic na siłę. Z każdej z nas wydobywa to, co jej służy.',
      en: 'I like Radek’s cuts. For six years I have left feeling the hair is truly mine. He listens and adjusts — nothing forced. He draws out what suits each of us.',
    },
  },
  {
    id: 'julia',
    name: 'Julia',
    initial: 'J',
    featured: true,
    service: { pl: 'Metamorfoza', en: 'Transformation' },
    quote: {
      pl: 'Lubię, że każda wizyta jest inna. Radek nie powtarza tego samego schematu. Wychodzę spokojniejsza i z fryzurą, która po prostu do mnie pasuje.',
      en: 'I like that every visit is different. Radek does not repeat the same formula. I leave calmer, with a cut that simply belongs to me.',
    },
  },
  {
    id: 'kaska',
    name: 'Kaśka',
    initial: 'K',
    featured: true,
    service: { pl: 'Metamorfoza', en: 'Transformation' },
    quote: {
      pl: 'Zmiana, którą zrobił, naprawdę mi służy. Kolor i cięcie wyszły tak, jak potrzebowałam. Wracam, bo jest spokojnie i czuję się zaopiekowana.',
      en: 'The change he made really suits me. Colour and cut came out just as I needed. I come back because it is quiet here, and I feel looked after.',
    },
  },
  {
    id: 'karolina',
    name: 'Karolina',
    initial: 'K',
    service: { pl: 'Koloryzacja i strzyżenie', en: 'Colour and cut' },
    quote: {
      pl: 'Zależało mi, żeby dobrze wyglądać. Nie zawiodłam się. Pan Radek spełnił oczekiwania zarówno względem koloru, jak i perfekcyjnego strzyżenia.',
      en: 'I needed to look myself. I was not disappointed. Mr Kostiw met every expectation: the colour, and a perfect cut.',
    },
  },
  {
    id: 'malgosia',
    name: 'Małgosia W.',
    initial: 'M',
    service: { pl: 'Cięcie klasyczne', en: 'Classic cut' },
    quote: {
      pl: 'Zostałam potraktowana super indywidualnie. Rzadko zdarza się taki stylista. Mam śliczną klasyczną fryzurę — dokładnie taką, jakiej potrzebowałam. Kolor również piękny. Nigdy nie czułam się lepiej po wizycie u fryzjera.',
      en: 'I was treated with true individuality. Such a stylist is rare. I have a beautiful classic cut — exactly what I needed. The colour, too, is exquisite. I have never felt better after a salon visit.',
    },
  },
  {
    id: 'katarzyna',
    name: 'Katarzyna',
    initial: 'K',
    service: { pl: 'Włosy kręcone', en: 'Curly hair' },
    quote: {
      pl: 'Ujarzmił moje kręcone włosy tak, że mogę pozwolić sobie zarówno na naturalne, jak i proste. Strzyżenie wręcz idealne. Z włosów robi dzieło sztuki dopasowane do osobowości i trybu życia.',
      en: 'He tamed my curls so that I can wear them natural or straight. The cut is simply ideal. From hair he makes a work of art, matched to personality and the way one lives.',
    },
  },
]

export const featuredReviews = reviews.filter((review) => review.featured)
