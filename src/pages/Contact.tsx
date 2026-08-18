import { useState, type FormEvent } from 'react'
import { site } from '../config/site'
import { useI18n } from '../hooks/useI18n'

type FormStatus = 'idle' | 'loading' | 'ok' | 'error'

export function ContactPage() {
  const { t, locale } = useI18n()
  const [status, setStatus] = useState<FormStatus>('idle')

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    setStatus('loading')

    const payload = new FormData(form)
    payload.set('access_key', site.splitforms.accessKey)
    payload.set('subject', `${site.name} — zapytanie ze strony`)
    payload.set('from_name', String(payload.get('name') ?? site.name))

    try {
      const response = await fetch(site.splitforms.endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: payload,
      })
      const json = (await response.json()) as { success?: boolean }
      if (!response.ok || !json.success) {
        setStatus('error')
        return
      }
      form.reset()
      setStatus('ok')
    } catch {
      setStatus('error')
    }
  }

  const statusMessage =
    status === 'ok' ? t.contact.sent : status === 'error' ? t.contact.formError : t.contact.formNote

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">{t.contact.kicker}</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.6rem, 6vw, 4.4rem)', marginTop: 10 }}>
          {t.contact.title}
        </h1>
        <p className="lead" style={{ marginTop: 16, marginBottom: 40 }}>
          {t.contact.lead}
        </p>
        <div className="contact-grid">
          <div>
            <div className="contact-card">
              <p className="kicker">{site.name}</p>
              <p className="brand-tag" style={{ marginTop: 8 }}>
                {site.tagline[locale]}
              </p>
              <dl>
                <div>
                  <dt>{t.contact.phone}</dt>
                  <dd>
                    <a href={site.phoneHref}>{site.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.email}</dt>
                  <dd>
                    <a href={site.emailHref}>{site.email}</a>
                  </dd>
                </div>
                <div>
                  <dt>{t.contact.hours}</dt>
                  <dd>{site.hours[locale]}</dd>
                </div>
                <div>
                  <dt>{t.contact.address}</dt>
                  <dd>
                    <a href={site.mapLink} target="_blank" rel="noreferrer">
                      {site.address[locale]}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <figure className="map-frame">
              <iframe
                title={t.contact.map}
                src={site.mapEmbed}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <a className="map-open" href={site.mapLink} target="_blank" rel="noreferrer">
                {t.contact.mapOpen}
              </a>
            </figure>
          </div>
          <form id="formularz" className="form" onSubmit={onSubmit}>
            <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label>
              {t.contact.formName}
              <input name="name" required autoComplete="name" autoCapitalize="words" autoCorrect="off" />
            </label>
            <label>
              {t.contact.formEmail}
              <input name="email" type="email" required autoComplete="email" />
            </label>
            <label>
              {t.contact.formPhone}
              <input name="phone" type="tel" autoComplete="tel" />
            </label>
            <label>
              {t.contact.formMessage}
              <textarea name="message" required />
            </label>
            <button className="cta" type="submit" disabled={status === 'loading'}>
              {status === 'loading' ? t.contact.formSending : t.contact.formSubmit}
            </button>
            <p className={`lead${status === 'error' ? ' form-status--error' : ''}${status === 'ok' ? ' form-status--ok' : ''}`} aria-live="polite">
              {statusMessage}
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
