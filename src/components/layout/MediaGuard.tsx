import { useEffect } from 'react'

const MEDIA = '.protect-media, .glow-tile--photo, .hero-cosmic__figure, .portrait'

export function MediaGuard() {
  useEffect(() => {
    const onContext = (event: MouseEvent) => {
      const node = event.target
      if (!(node instanceof Element)) return
      if (node.closest(MEDIA)) event.preventDefault()
    }
    const onDrag = (event: DragEvent) => {
      const node = event.target
      if (!(node instanceof Element)) return
      if (node.closest(`${MEDIA} img, ${MEDIA}`)) event.preventDefault()
    }
    document.addEventListener('contextmenu', onContext)
    document.addEventListener('dragstart', onDrag)
    return () => {
      document.removeEventListener('contextmenu', onContext)
      document.removeEventListener('dragstart', onDrag)
    }
  }, [])

  return null
}
