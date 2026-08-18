import { useI18n } from '../hooks/useI18n'

export function LegalPage() {
  const { t } = useI18n()

  return (
    <section className="section">
      <div className="wrap">
        <p className="kicker">{t.legal.kicker}</p>
        <h1 className="display" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.8rem)', marginTop: 10 }}>
          {t.legal.title}
        </h1>
        <div className="legal-prose" style={{ marginTop: 28 }}>
          <p>{t.legal.p1}</p>
          <p>{t.legal.p2}</p>
          <p>{t.legal.p3}</p>
          <p>{t.legal.p4}</p>
          <p>{t.legal.cookies}</p>
        </div>
      </div>
    </section>
  )
}
