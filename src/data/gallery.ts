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
}



export const galleryWorks: GalleryWork[] = [

  {

    id: 'color-navy-bob',

    category: 'color',

    title: { pl: 'Granatowy bob', en: 'Navy bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/color-navy-bob.png',

  },

  {

    id: 'color-platinum-profile',

    category: 'color',

    title: { pl: 'Platynowy pixie', en: 'Platinum pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'ivory',

    image: '/images/gallery/color-platinum-profile.png',
    focus: '50% 32%',

  },

  {

    id: 'color-ash-salon',

    category: 'color',

    title: { pl: 'Popielaty blond', en: 'Ash blonde' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-ash-salon.png',
    focus: '50% 6%',

  },

  {

    id: 'color-silver-pixie',

    category: 'color',

    title: { pl: 'Srebrny pixie', en: 'Silver pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/color-silver-pixie.png',
    focus: '50% 6%',

  },

  {

    id: 'color-teal-nape',

    category: 'color',

    title: { pl: 'Ombre teal', en: 'Teal ombre' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/color-teal-nape.png',
    focus: '50% 6%',

  },

  {

    id: 'color-teal-bob',

    category: 'color',

    title: { pl: 'Bob z teal', en: 'Teal bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/color-teal-bob.png',
    focus: '28% 8%',

  },

  {

    id: 'color-lilac-bob',

    category: 'color',

    title: { pl: 'Liliowy bob', en: 'Lilac bob' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/color-lilac-bob.png',
    focus: '50% 6%',

  },

  {

    id: 'color-burgundy-pixie',

    category: 'color',

    title: { pl: 'Burgundowy pixie', en: 'Burgundy pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/color-burgundy-pixie.png',
    focus: '50% 6%',

  },

  {

    id: 'color-auburn-nape',

    category: 'color',

    title: { pl: 'Kasztanowy undercut', en: 'Auburn undercut' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/color-auburn-nape.png',
    focus: '50% 6%',

  },

  {

    id: 'color-peach-pixie',

    category: 'color',

    title: { pl: 'Morelowy pixie', en: 'Peach pixie' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/color-peach-pixie.png',
    focus: '50% 6%',

  },

  {

    id: 'color-rose-undercut',

    category: 'color',

    title: { pl: 'Różowy undercut', en: 'Rose undercut' },

    technique: { pl: 'Koloryzacja', en: 'Colour' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/color-rose-undercut.png',
    focus: '50% 6%',

  },

  {

    id: 'cut-asymmetric',

    category: 'cut',

    title: { pl: 'Cięcie asymetryczne', en: 'Asymmetric cut' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/cut-asymmetric-profile.png',
    focus: '50% 6%',

  },

  {

    id: 'cut-pixie-fringe',

    category: 'cut',

    title: { pl: 'Pixie z grzywką', en: 'Pixie with fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/cut-pixie-fringe.png',
    focus: '50% 6%',

  },

  {

    id: 'cut-mirror',

    category: 'cut',

    title: { pl: 'Bob przy lustrze', en: 'Bob at the mirror' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/cut-mirror.png',
    focus: '50% 6%',

  },

  {

    id: 'cut-bowl-fringe',

    category: 'cut',

    title: { pl: 'Grzywka — miseczka', en: 'Bowl fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/cut-bowl-fringe.png',
    focus: '50% 6%',

  },

  {

    id: 'cut-studio-fringe',

    category: 'cut',

    title: { pl: 'Grzywka — studio', en: 'Studio fringe' },

    technique: { pl: 'Strzyżenie', en: 'Cut' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/cut-studio-fringe.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-volume',

    category: 'styling',

    title: { pl: 'Kręcone — objętość', en: 'Curls — volume' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'rose',

    image: '/images/gallery/curly-volume.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-shag',

    category: 'styling',

    title: { pl: 'Kręcone — warstwy', en: 'Curls — layers' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'noir',

    image: '/images/gallery/curly-shag.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-mohawk',

    category: 'styling',

    title: { pl: 'Kręcone — irokez', en: 'Curls — mohawk' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'espresso',

    image: '/images/gallery/curly-mohawk.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-pattern',

    category: 'styling',

    title: { pl: 'Kręcone — wzór', en: 'Curls — pattern' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'stone',

    image: '/images/gallery/curly-pattern.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-portrait-denim',

    category: 'styling',

    title: { pl: 'Kręcone — portret', en: 'Curls — portrait' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'champagne',

    image: '/images/gallery/curly-portrait-denim.png',
    focus: '50% 6%',

  },

  {

    id: 'curly-nape-salon',

    category: 'styling',

    title: { pl: 'Kręcone — tył', en: 'Curls — back' },

    technique: { pl: 'Włosy kręcone', en: 'Curly hair' },

    note: { pl: '', en: '' },

    tone: 'copper',

    image: '/images/gallery/curly-nape-salon.png',
    focus: '50% 6%',

  },

]

