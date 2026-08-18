import { Link } from 'react-router-dom'

import { ServiceBento } from '../components/home/ServiceBento'

import { ReviewSlider } from '../components/reviews/ReviewSlider'

import { publicUrl } from '../config/assets'
import { CONTACT_FORM_HASH, galleryCategoryHref } from '../config/routes'

import { site } from '../config/site'

import { useI18n } from '../hooks/useI18n'



export function HomePage() {

  const { t, path, locale } = useI18n()



  return (

    <>

      <section className="hero-cosmic">

        <div className="wrap hero-cosmic__grid">

          <div className="hero-cosmic__copy">

            <div className="hero-lockup">

              <span className="kicker">{t.hero.kicker}</span>

              <h1 className="brand-name display">{site.name}</h1>

              <span className="brand-tag">{site.tagline[locale]}</span>

            </div>

            <p className="hero-lead">{t.hero.lead}</p>

            <div className="hero-actions">

              <Link className="cta cta--wide" to={`${path.contact}#${CONTACT_FORM_HASH}`}>

                {t.hero.cta}

              </Link>

              <Link className="cta cta-ghost" to={path.gallery}>

                {t.hero.gallery}

              </Link>

            </div>

          </div>

          <div className="hero-cosmic__figure" aria-hidden="true">
            <div className="hero-cosmic__photo-stack">
              <img
                className="hero-cosmic__photo"
                src={publicUrl('/images/hero-atelier-curls.png')}
                alt=""
                width={1024}
                height={679}
                loading="eager"
                decoding="async"
              />
            </div>
          </div>

        </div>

        <div className="wrap hero-cosmic__bento">

          <ServiceBento />

        </div>

      </section>



      <section className="section home-positioning">

        <div className="wrap">

          <p className="kicker">{t.positioning.kicker}</p>

          <h2 className="display display--lg home-positioning__title">{t.positioning.title}</h2>

          <p className="lead lead--wide home-positioning__lead">{t.positioning.body}</p>

        </div>

      </section>



      <section className="section section--follow home-gallery-cats">

        <div className="wrap">

          <h2 className="display">{t.homeGallery.kicker}</h2>

          <div className="gallery-cats">
            <Link className="gallery-cat" to={galleryCategoryHref(path.gallery, 'color')}>
              <span className="gallery-cat__name">{t.gallery.color}</span>
            </Link>
            <Link className="gallery-cat" to={galleryCategoryHref(path.gallery, 'cut')}>
              <span className="gallery-cat__name">{t.gallery.cut}</span>
            </Link>
            <Link className="gallery-cat" to={galleryCategoryHref(path.gallery, 'styling')}>
              <span className="gallery-cat__name">{t.gallery.styling}</span>
            </Link>
          </div>

        </div>

      </section>



      <section className="section section--follow home-reviews">

        <div className="wrap">

          <div className="section-head">

            <div>

              <p className="kicker">{t.homeReviews.kicker}</p>

              <h2 className="display">{t.homeReviews.title}</h2>

            </div>

          </div>

          <ReviewSlider />

        </div>

      </section>



      <section className="section section--follow section--end home-cta">

        <div className="wrap">

          <h2 className="display display--cta">{t.homeCta.title}</h2>

          <p className="lead home-cta__lead">{t.homeCta.body}</p>

          <Link className="cta" to={`${path.contact}#${CONTACT_FORM_HASH}`}>

            {t.nav.book}

          </Link>

        </div>

      </section>

    </>

  )

}


