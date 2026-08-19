import { Link } from 'react-router-dom'
import { publicUrl } from '../config/assets'
import { CONTACT_FORM_HASH } from '../config/routes'
import { site } from '../config/site'
import { useI18n } from '../hooks/useI18n'

export function AboutPage() {
  const { t, path } = useI18n()
  const paragraphs = [t.about.p1, t.about.p2, t.about.p3, t.about.p4, t.about.p5, t.about.p6, t.about.p7]

  return (
    <section className="section">
      <div className="wrap about-grid">
        <figure className="portrait protect-media">
          <img
            src={publicUrl('/images/about-atelier.png')}
            alt={site.name}
            width={745}
            height={1024}
            loading="eager"
            decoding="async"
            draggable={false}
            referrerPolicy="strict-origin-when-cross-origin"
          />
          <span className="media-shield" aria-hidden="true" />
        </figure>
        <div className="about-copy">
          <p className="kicker">{t.about.kicker}</p>
          <h1 className="display">{t.about.title}</h1>
          <p className="about-lead">{t.about.lead}</p>
          <p className="about-intro display">{t.about.intro}</p>
          {paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="creds">
            <article className="cred">
              <h3>{t.about.cred1t}</h3>
              <p>{t.about.cred1d}</p>
            </article>
            <article className="cred">
              <h3>{t.about.cred2t}</h3>
              <p>{t.about.cred2d}</p>
            </article>
            <article className="cred">
              <h3>{t.about.cred3t}</h3>
              <p>{t.about.cred3d}</p>
            </article>
          </div>
          <Link className="cta" to={`${path.contact}#${CONTACT_FORM_HASH}`}>
            {t.nav.book}
          </Link>
        </div>
      </div>
    </section>
  )
}
