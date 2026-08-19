import { useCallback, useEffect, useRef } from 'react'

type TiltConfig = {
  maxAngle?: number
  perspective?: number
  scale?: number
  glowShift?: number
  easing?: number
}

const DEFAULT: Required<TiltConfig> = {
  maxAngle: 10,
  perspective: 600,
  scale: 1.045,
  glowShift: 12,
  easing: 0.08,
}

type TiltState = { rx: number; ry: number; gx: number; gy: number; active: boolean }

export function useTilt3D(cfg?: TiltConfig) {
  const opts = { ...DEFAULT, ...cfg }
  const ref = useRef<HTMLDivElement>(null)
  const state = useRef<TiltState>({ rx: 0, ry: 0, gx: 0, gy: 0, active: false })
  const raf = useRef(0)
  const gyroPermitted = useRef(false)

  const lerp = (a: number, b: number, t: number) => a + (b - a) * t

  const loop = useCallback(() => {
    const el = ref.current
    if (!el) return
    const s = state.current
    const img = el.querySelector<HTMLElement>('.tilt3d__subject')
    if (!img) return

    const currentRx = Number.parseFloat(img.dataset.rx ?? '0')
    const currentRy = Number.parseFloat(img.dataset.ry ?? '0')
    const currentGx = Number.parseFloat(img.dataset.gx ?? '0')
    const currentGy = Number.parseFloat(img.dataset.gy ?? '0')

    const targetRx = s.active ? s.rx : 0
    const targetRy = s.active ? s.ry : 0
    const targetGx = s.active ? s.gx : 0
    const targetGy = s.active ? s.gy : 0

    const ease = s.active ? opts.easing : 0.04
    const rx = lerp(currentRx, targetRx, ease)
    const ry = lerp(currentRy, targetRy, ease)
    const gx = lerp(currentGx, targetGx, ease)
    const gy = lerp(currentGy, targetGy, ease)

    img.dataset.rx = String(rx)
    img.dataset.ry = String(ry)
    img.dataset.gx = String(gx)
    img.dataset.gy = String(gy)

    const sc = s.active ? opts.scale : 1
    const currentScale = Number.parseFloat(img.dataset.sc ?? '1')
    const newScale = lerp(currentScale, sc, ease)
    img.dataset.sc = String(newScale)

    img.style.transform =
      `perspective(${opts.perspective}px) rotateX(${rx}deg) rotateY(${ry}deg) scale3d(${newScale},${newScale},1)`

    img.style.filter =
      `drop-shadow(${-gx}px ${-gy}px 20px rgba(194,158,93,0.7)) drop-shadow(${-gx * 1.5}px ${-gy * 1.5}px 40px rgba(194,158,93,0.3))`

    raf.current = requestAnimationFrame(loop)
  }, [opts])

  const onMouse = useCallback((e: MouseEvent) => {
    const el = ref.current
    if (!el) return
    const rect = el.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const px = (e.clientX - cx) / (rect.width / 2)
    const py = (e.clientY - cy) / (rect.height / 2)

    const clamp = (v: number) => Math.max(-1, Math.min(1, v))
    const x = clamp(px)
    const y = clamp(py)

    state.current.ry = x * opts.maxAngle
    state.current.rx = -y * opts.maxAngle
    state.current.gx = x * opts.glowShift
    state.current.gy = y * opts.glowShift
    state.current.active = true
  }, [opts])

  const onLeave = useCallback(() => {
    state.current.active = false
  }, [])

  const onOrientation = useCallback((e: DeviceOrientationEvent) => {
    if (!gyroPermitted.current) return
    const gamma = e.gamma ?? 0
    const beta = e.beta ?? 0

    const clampedGamma = Math.max(-30, Math.min(30, gamma)) / 30
    const clampedBeta = Math.max(-30, Math.min(30, beta - 45)) / 30

    state.current.ry = clampedGamma * opts.maxAngle
    state.current.rx = -clampedBeta * opts.maxAngle
    state.current.gx = clampedGamma * opts.glowShift
    state.current.gy = clampedBeta * opts.glowShift
    state.current.active = true
  }, [opts])

  useEffect(() => {
    const el = ref.current
    if (!el) return

    el.addEventListener('mousemove', onMouse)
    el.addEventListener('mouseleave', onLeave)

    raf.current = requestAnimationFrame(loop)

    const isTouchDevice = 'ontouchstart' in window
    if (isTouchDevice && typeof DeviceOrientationEvent !== 'undefined') {
      const requestPerm = (DeviceOrientationEvent as unknown as { requestPermission?: () => Promise<string> }).requestPermission
      if (requestPerm) {
        const handler = () => {
          requestPerm().then((perm) => {
            if (perm === 'granted') {
              gyroPermitted.current = true
              window.addEventListener('deviceorientation', onOrientation)
            }
          }).catch(() => {})
          el.removeEventListener('touchstart', handler, { capture: true })
        }
        el.addEventListener('touchstart', handler, { capture: true, once: true })
      } else {
        gyroPermitted.current = true
        window.addEventListener('deviceorientation', onOrientation)
      }

      state.current.active = true
    }

    return () => {
      el.removeEventListener('mousemove', onMouse)
      el.removeEventListener('mouseleave', onLeave)
      window.removeEventListener('deviceorientation', onOrientation)
      cancelAnimationFrame(raf.current)
    }
  }, [onMouse, onLeave, onOrientation, loop])

  return ref
}
