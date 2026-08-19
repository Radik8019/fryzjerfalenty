import { useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { GlowTile } from '../components/gallery/GlowTile'
import { GALLERY_WORKS_HASH } from '../config/routes'
import { type GalleryCategory, galleryWorks } from '../data/gallery'
import { useI18n } from '../hooks/useI18n'

function parseGalleryCat(value: string | null): GalleryCategory | null {
  if (value === 'color' || value === 'cut' || value === 'styling') return value
  return null
}

export function GalleryPage() {
  const { t } = useI18n()
  const [searchParams, setSearchParams] = useSearchParams()
  const catFromUrl = parseGalleryCat(searchParams.get('cat')) ?? 'color'
  const [filter, setFilter] = useState<GalleryCategory>(catFromUrl)

  useEffect(() => {
    setFilter(catFromUrl)
  }, [catFromUrl])

  const works = useMemo(
    () => galleryWorks.filter((work) => work.category === filter && work.image),
    [filter],
  )

  const chips: { id: GalleryCategory; label: string }[] = [
    { id: 'color', label: t.gallery.color },
    { id: 'cut', label: t.gallery.cut },
    { id: 'styling', label: t.gallery.styling },
  ]

  const iconSrc =
    filter === 'color' ? '/images/icon-color.png?v=2'
    : filter === 'cut' ? '/images/icon-cut.png?v=2'
    : '/images/icon-curly.png?v=2'

  return (
    <section className="section">
      <div className="wrap">
        <div className="gallery-hero-icon">
          <img key={filter} className="gallery-hero-icon__img" src={iconSrc} alt="" />
        </div>
        <p className="kicker">{t.gallery.kicker}</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', marginTop: 10 }}>
          {t.gallery.title}
        </h1>
        <p className="lead" style={{ marginTop: 16 }}>
          {t.gallery.lead}
        </p>
        <div id={GALLERY_WORKS_HASH} className="gallery-works">
          <div className="filters" role="group" aria-label={t.gallery.title}>
            {chips.map((chip) => (
              <button
                key={chip.id}
                type="button"
                className="chip"
                aria-pressed={filter === chip.id}
                onClick={() => {
                  setFilter(chip.id)
                  setSearchParams({ cat: chip.id }, { replace: true })
                }}
              >
                {chip.label}
              </button>
            ))}
          </div>
          <div className="glow-grid dense">
            {works.map((work) => (
              <GlowTile key={work.id} work={work} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
