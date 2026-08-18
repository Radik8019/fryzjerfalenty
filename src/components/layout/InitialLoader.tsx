import { useEffect, useMemo, useRef, useState } from 'react'

export function InitialLoader() {
  const [isDone, setIsDone] = useState(false)
  const [removed, setRemoved] = useState(false)
  const timersRef = useRef<number[]>([])

  const roleText = useMemo(() => 'Stylista fryzur', [])

  useEffect(() => {
    // Hairqoo preloader keeps animating until the sweep completes (~2.8s),
    // then fades out with 900ms transition and removes itself ~950ms later.
    const IS_DONE_AT_MS = 2800
    const REMOVE_AFTER_MS = 950

    const t1 = window.setTimeout(() => setIsDone(true), IS_DONE_AT_MS)
    const t2 = window.setTimeout(() => setRemoved(true), IS_DONE_AT_MS + REMOVE_AFTER_MS)

    timersRef.current.push(t1, t2)
    return () => {
      timersRef.current.forEach((t) => window.clearTimeout(t))
      timersRef.current = []
    }
  }, [])

  if (removed) return null

  return (
    <div className={`preloader${isDone ? ' is-done' : ''}`} id="preloader" aria-hidden="true">
      {/* canvas kept for structural parity; we don't render stars here */}
      <canvas className="poster-stars" id="preloader-stars" aria-hidden="true" />
      <div className="preloader-horizon" aria-hidden="true" />
      <div className="preloader-core">
        <span className="hairqoo-brand hairqoo-brand--md" role="img" aria-label="Radosław Kostiw">
          <span className="hairqoo-brand__wordmark" aria-hidden="true">
            Radosław Kostiw
          </span>
        </span>

        <div className="preloader-track" aria-hidden="true">
          <div className="preloader-fill" />
        </div>

        <p className="preloader-status" id="preloader-status">
          {roleText}
        </p>
      </div>
    </div>
  )
}

