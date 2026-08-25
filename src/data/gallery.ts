export type GalleryCategory = 'color' | 'cut' | 'styling'



export type GalleryWork = {

  id: string

  category: GalleryCategory

  title: { pl: string; en: string }

  technique: { pl: string; en: string }

  note: { pl: string; en: string }

  tone: string
  image?: string
  focus?: string
  fit?: 'contain'
}



export const galleryWorks: GalleryWork[] = [

  {

    id: 'color-navy-bob',

    category: 'color',

    title: { pl: 'Granatowy bob', en: 'Navy bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/color-navy-bob.webp',

  },

  {

    id: 'color-platinum-profile',

    category: 'color',

    title: { pl: 'Platynowy pixie', en: 'Platinum pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'ivory',

    image: '/images/gallery/color-platinum-profile.webp',
    focus: '50% 32%',

  },

  {

    id: 'color-ash-salon',

    category: 'color',

    title: { pl: 'Popielaty blond', en: 'Ash blonde' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-ash-salon.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-silver-pixie',

    category: 'color',

    title: { pl: 'Srebrny pixie', en: 'Silver pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/color-silver-pixie.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-teal-nape',

    category: 'color',

    title: { pl: 'Ombre teal', en: 'Teal ombre' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/color-teal-nape.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-teal-bob',

    category: 'color',

    title: { pl: 'Bob z teal', en: 'Teal bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/color-teal-bob.webp',
    focus: '28% 8%',

  },

  {

    id: 'color-lilac-bob',

    category: 'color',

    title: { pl: 'Liliowy bob', en: 'Lilac bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/color-lilac-bob.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-burgundy-pixie',

    category: 'color',

    title: { pl: 'Burgundowy pixie', en: 'Burgundy pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/color-burgundy-pixie.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-auburn-nape',

    category: 'color',

    title: { pl: 'Kasztanowy undercut', en: 'Auburn undercut' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/color-auburn-nape.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-strawberry-pixie',

    category: 'color',

    title: { pl: 'Truskawkowy pixie', en: 'Strawberry pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/color-strawberry-pixie.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-peach-pixie',

    category: 'color',

    title: { pl: 'Morelowy pixie', en: 'Peach pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/color-peach-pixie.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-rose-undercut',

    category: 'color',

    title: { pl: 'Różowy undercut', en: 'Rose undercut' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-rose-undercut.webp',
    focus: '50% 6%',

  },

  {

    id: 'color-caramel-bob',

    category: 'color',

    title: { pl: 'Karmelowy bob', en: 'Caramel bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-caramel-bob.webp',

    focus: '50% 42%',

    fit: 'contain',

  },

  {

    id: 'color-crimson-bob',

    category: 'color',

    title: { pl: 'Karmazynowy bob', en: 'Crimson bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/color-crimson-bob.webp',

    focus: '50% 38%',

    fit: 'contain',

  },

  {

    id: 'color-scarlet-bob',

    category: 'color',

    title: { pl: 'Szkarłatny bob', en: 'Scarlet bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/color-scarlet-bob.webp',

    focus: '50% 35%',

    fit: 'contain',

  },

  {

    id: 'color-ash-before-after',

    category: 'color',

    title: { pl: 'Korekta blondu', en: 'Blonde correction' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-ash-before-after-v2.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-asymmetric',

    category: 'cut',

    title: { pl: 'Cięcie asymetryczne', en: 'Asymmetrical cut' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/cut-asymmetric-profile.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-pixie-fringe',

    category: 'cut',

    title: { pl: 'Pixie z grzywką', en: 'Pixie with fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/cut-pixie-fringe.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-mirror',

    category: 'cut',

    title: { pl: 'Bob przy lustrze', en: 'Bob at the mirror' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/cut-mirror.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-bowl-fringe',

    category: 'cut',

    title: { pl: 'Grzywka — miseczka', en: 'Bowl fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/cut-bowl-fringe.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-studio-fringe',

    category: 'cut',

    title: { pl: 'Grzywka — studio', en: 'Studio fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/cut-studio-fringe.webp',
    focus: '50% 6%',

  },

  {

    id: 'cut-honey-angled-bob',

    category: 'cut',

    title: { pl: 'Bob kątowy — miodowy', en: 'Honey angled bob' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'sand',

    image: '/images/gallery/cut-honey-angled-bob.webp',

    fit: 'contain',

  },

  {

    id: 'cut-honey-blunt-nape',

    category: 'cut',

    title: { pl: 'Bob — kark', en: 'Honey blunt bob' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/cut-honey-blunt-nape.webp',

    fit: 'contain',

  },

  {

    id: 'cut-honey-aline-lob',

    category: 'cut',

    title: { pl: 'A-line — miodowy', en: 'Honey A-line bob' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/cut-honey-aline-lob.webp',

    fit: 'contain',

  },

  {

    id: 'curly-volume',

    category: 'styling',

    title: { pl: 'Kręcone — objętość', en: 'Curls — volume' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/curly-volume.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-pattern',

    category: 'styling',

    title: { pl: 'Kręcone — wzór', en: 'Curls — pattern' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/curly-pattern.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-mohawk',

    category: 'styling',

    title: { pl: 'Kręcone — irokez', en: 'Curls — mohawk' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/curly-mohawk.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-shag',

    category: 'styling',

    title: { pl: 'Kręcone — warstwy', en: 'Curls — layers' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/curly-shag.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-salon-front',

    category: 'styling',

    title: { pl: 'Kręcone — salon', en: 'Curls — salon' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/curly-salon-front.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-nape-salon',

    category: 'styling',

    title: { pl: 'Kręcone — tył', en: 'Curls — back' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/curly-nape-salon-portrait.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-portrait-denim',

    category: 'styling',

    title: { pl: 'Kręcone — portret', en: 'Curls — portrait' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/curly-portrait-denim.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-stripe-portrait',

    category: 'styling',

    title: { pl: 'Kręcone — objętość twarzy', en: 'Curls — face-framing volume' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/curly-stripe-portrait.webp',
    focus: '50% 6%',

  },

  {

    id: 'curly-stripe-profile',

    category: 'styling',

    title: { pl: 'Kręcone — profil', en: 'Curls — profile' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/curly-stripe-profile.webp',
    focus: '50% 6%',

  },

]

