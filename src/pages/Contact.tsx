import { useEffect, useState, type FormEvent } from 'react'
import { site, turnstileSiteKey } from '../config/site'
import { useI18n } from '../hooks/useI18n'

type FormStatus = 'idle' | 'loading' | 'ok' | 'error'

const NAME_MAX = 80
const EMAIL_MAX = 120
const PHONE_MAX = 24
const MESSAGE_MIN = 10
const MESSAGE_MAX = 2000

export function ContactPage() {
  const { t, locale } = useI18n()
  const [status, setStatus] = useState<FormStatus>('idle')

  useEffect(() => {
    if (!turnstileSiteKey) return
    const script = document.createElement('script')
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js'
    script.async = true
    script.defer = true
    document.body.appendChild(script)
    return () => {
      script.remove()
    }
  }, [])

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = event.currentTarget
    const payload = new FormData(form)

    if (payload.get('botcheck')) {
      setStatus('ok')
      form.reset()
      return
    }

    const name = String(payload.get('name') ?? '').trim()
    const email = String(payload.get('email') ?? '').trim()
    const phone = String(payload.get('phone') ?? '').trim()
    const message = String(payload.get('message') ?? '').trim()

    if (
      name.length < 2 ||
      name.length > NAME_MAX ||
      email.length > EMAIL_MAX ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ||
      phone.length > PHONE_MAX ||
      message.length < MESSAGE_MIN ||
      message.length > MESSAGE_MAX
    ) {
      setStatus('error')
      return
    }

    if (turnstileSiteKey && !String(payload.get('cf-turnstile-response') ?? '')) {
      setStatus('error')
      return
    }

    setStatus('loading')
    payload.set('name', name)
    payload.set('email', email)
    payload.set('phone', phone)
    payload.set('message', message)
    payload.set('access_key', site.splitforms.accessKey)
    payload.set('subject', `${site.name} — zapytanie ze strony`)
    payload.set('from_name', name || site.name)

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
                    <a href={site.mapLink} target="_blank" rel="noopener noreferrer">
                      {site.address[locale]}
                    </a>
                  </dd>
                </div>
              </dl>
            </div>
            <aside className="map-card">
              <p className="kicker">{t.contact.map}</p>
              <p className="map-card__address">{site.address[locale]}</p>
              <a className="cta" href={site.mapLink} target="_blank" rel="noopener noreferrer">
                {t.contact.mapOpen}
              </a>
            </aside>
          </div>
          <form id="formularz" className="form" onSubmit={onSubmit}>
            <input type="checkbox" name="botcheck" className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" />
            <label>
              {t.contact.formName}
              <input name="name" required autoComplete="name" autoCapitalize="words" autoCorrect="off" minLength={2} maxLength={NAME_MAX} />
            </label>
            <label>
              {t.contact.formEmail}
              <input name="email" type="email" required autoComplete="email" maxLength={EMAIL_MAX} inputMode="email" />
            </label>
            <label>
              {t.contact.formPhone}
              <input name="phone" type="tel" autoComplete="tel" maxLength={PHONE_MAX} inputMode="tel" />
            </label>
            <label>
              {t.contact.formMessage}
              <textarea name="message" required minLength={MESSAGE_MIN} maxLength={MESSAGE_MAX} />
            </label>
            {turnstileSiteKey ? (
              <div className="cf-turnstile" data-sitekey={turnstileSiteKey} data-theme="auto" />
            ) : null}
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
