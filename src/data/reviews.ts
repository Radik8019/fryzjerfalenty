export type ReviewId = 'ania' | 'basia' | 'mado' | 'ania77' | 'natalia' | 'agnieszka'

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
    service: { pl: 'Koloryzacja', en: 'Colour' },
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
      pl: 'Dzień dobry. Chciałam podziękować za świetne strzyżenie. Włosy układają się same i czuję się w nich bardzo komfortowo. Pozdrowienia dla Pana Radka.',
      en: 'Good morning. I wanted to thank you for a wonderful cut. My hair falls into place on its own and I feel very comfortable with it. Regards to Mr Radek.',
    },
  },
  {
    id: 'mado',
    name: 'Mado',
    initial: 'M',
    featured: true,
    service: { pl: 'Strzyżenie', en: 'Cut' },
    quote: {
      pl: 'Strzygę włosy u Radka już chyba 3 lata. Za każdym razem proponuje mi coś nowego i coś co doskonale pasuje do aktualnej mojej sytuacji i stanu ducha. Świetny fryzjer, niezwykły człowiek. Polecam wszystkim.',
      en: 'I have been getting my hair cut by Radek for about three years now. Every time he suggests something new that perfectly matches my current situation and state of mind. A great hairdresser, an extraordinary person. I recommend him to everyone.',
    },
  },
  {
    id: 'ania77',
    name: 'ania77',
    initial: 'A',
    featured: true,
    service: { pl: 'Koloryzacja i strzyżenie', en: 'Colour and cut' },
    quote: {
      pl: 'Miałam ochotę na zmianę wizerunku i Radek poradził sobie doskonale. Mam nową bardzo dobrze układającą się fryzurę, oraz super kolor. Fajny facet przy okazji :) Dzięki i pozdrawiam. Do zobaczenia wkrótce.',
      en: 'I felt like a change of image and Radek handled it perfectly. I have a new hairstyle that falls beautifully, and a superb colour. A nice guy too :) Thanks and regards. See you soon.',
    },
  },
  {
    id: 'natalia',
    name: 'Natalia',
    initial: 'N',
    featured: true,
    service: { pl: 'Pielęgnacja włosów kręconych', en: 'Curly hair care' },
    quote: {
      pl: 'Od lat Radek opiekuje się moimi kręconymi włosami i nigdy wcześniej nie były tak zdrowe, zadbane i szczęśliwe. Polecam !',
      en: 'For years Radek has been looking after my curly hair, and never before has it been so healthy, well cared for and happy. I recommend him!',
    },
  },
  {
    id: 'agnieszka',
    name: 'Agnieszka',
    initial: 'A',
    featured: true,
    service: { pl: 'Doradztwo', en: 'Consultation' },
    quote: {
      pl: 'Zdecydowanie polecam Radka! To fryzjer, który przede wszystkim naprawdę słucha swojego klienta i potrafi doskonale wsłuchać się w jego potrzeby oraz oczekiwania. Nie tylko wykonuje usługę, ale przede wszystkim potrafi doradzić i znaleźć rozwiązanie, które rzeczywiście pasuje do danej osoby.',
      en: 'I definitely recommend Radek! He is a hairdresser who truly listens to his clients and is excellent at understanding their needs and expectations. He does not just perform a service — above all, he can advise and find a solution that really suits the person.',
    },
  },
]

export const featuredReviews = reviews.filter((review) => review.featured)
