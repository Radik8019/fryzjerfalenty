import { useEffect, useRef, useState } from 'react'
import { featuredReviews } from '../../data/reviews'
import { useI18n } from '../../hooks/useI18n'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import { ReviewCard } from './ReviewCard'

export function ReviewSlider() {
  const { t } = useI18n()
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [paused, setPaused] = useState(false)
  const last = featuredReviews.length - 1
  const startX = useRef(0)

  useEffect(() => {
    if (reduced || paused) return
    const id = window.setInterval(() => {
      setIndex((current) => (current === last ? 0 : current + 1))
    }, 6500)
    return () => window.clearInterval(id)
  }, [last, paused, reduced])

  const go = (next: number) => {
    setIndex((next + featuredReviews.length) % featuredReviews.length)
  }

  return (
    <div
      className="review-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={(event) => {
        setPaused(true)
        startX.current = event.touches[0].clientX
      }}
      onTouchEnd={(event) => {
        const dx = event.changedTouches[0].clientX - startX.current
        if (Math.abs(dx) > 40) go(index + (dx < 0 ? 1 : -1))
        setPaused(false)
      }}
    >
      <div className="review-track">
        {featuredReviews.map((review, i) => (
          <div key={review.id} className={`review-slide${i === index ? ' is-active' : ''}`}>
            <ReviewCard review={review} />
          </div>
        ))}
      </div>
      <div className="slider-nav">
        <button type="button" className="icon-btn" aria-label={t.homeReviews.prev} onClick={() => go(index - 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <div className="dots">
          {featuredReviews.map((review, i) => (
            <button
              key={review.id}
              type="button"
              className={i === index ? 'is-on' : ''}
              aria-label={`${i + 1}`}
              aria-current={i === index}
              onClick={() => go(i)}
            />
          ))}
        </div>
        <button type="button" className="icon-btn" aria-label={t.homeReviews.next} onClick={() => go(index + 1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  )
}
