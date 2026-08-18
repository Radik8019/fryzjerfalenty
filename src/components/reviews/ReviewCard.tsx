import { type Review } from '../../data/reviews'
import { useI18n } from '../../hooks/useI18n'

type Props = {
  review: Review
  compact?: boolean
}

export function ReviewCard({ review, compact = false }: Props) {
  const { locale, t } = useI18n()

  if (compact) {
    return (
      <aside className="inline-review">
        <div className="avatar" aria-hidden="true">
          {review.initial}
        </div>
        <div>
          <p className="kicker">{t.services.fromReview}</p>
          <p>{review.quote[locale]}</p>
          <p className="review-meta">
            <span>{review.name}</span>
            <span>·</span>
            <span>{review.service[locale]}</span>
          </p>
        </div>
      </aside>
    )
  }

  return (
    <article className="review-card">
      <div className="avatar" aria-hidden="true">
        {review.initial}
      </div>
      <div>
        <blockquote>{review.quote[locale]}</blockquote>
        <p className="review-meta">
          <span>{review.name}</span>
          <span>·</span>
          <span>{review.service[locale]}</span>
        </p>
      </div>
    </article>
  )
}
