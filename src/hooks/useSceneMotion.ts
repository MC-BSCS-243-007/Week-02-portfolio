import { useEffect } from 'react'
import { usePrefersReducedMotion } from './usePrefersReducedMotion'

/**
 * Publishes one shared set of scene variables on <html>:
 *  --mx / --my : smoothed pointer position, -1 to 1
 *  --sy        : raw scroll offset in pixels
 *  --scroll-progress : page progress, 0 to 1
 *
 * Keeping the listeners here means the hero, background and section
 * accents all move from the same source without dozens of listeners.
 */
export function useSceneMotion() {
  const reducedMotion = usePrefersReducedMotion()

  useEffect(() => {
    const root = document.documentElement

    if (reducedMotion) {
      root.style.setProperty('--mx', '0')
      root.style.setProperty('--my', '0')
      root.style.setProperty('--sy', '0')
      root.style.setProperty('--scroll-progress', '0')
      return
    }

    const finePointer = window.matchMedia('(pointer: fine)').matches
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let pointerFrame = 0
    let scrollFrame = 0

    const settlePointer = () => {
      pointerFrame = 0
      currentX += (targetX - currentX) * 0.1
      currentY += (targetY - currentY) * 0.1

      root.style.setProperty('--mx', currentX.toFixed(4))
      root.style.setProperty('--my', currentY.toFixed(4))

      const settled =
        Math.abs(targetX - currentX) < 0.0008 &&
        Math.abs(targetY - currentY) < 0.0008

      if (settled) {
        currentX = targetX
        currentY = targetY
      } else {
        pointerFrame = requestAnimationFrame(settlePointer)
      }
    }

    const schedulePointer = () => {
      if (!pointerFrame) pointerFrame = requestAnimationFrame(settlePointer)
    }

    const onPointerMove = (event: PointerEvent) => {
      if (event.pointerType === 'touch') return
      targetX = Math.max(-1, Math.min(1, (event.clientX / window.innerWidth) * 2 - 1))
      targetY = Math.max(-1, Math.min(1, (event.clientY / window.innerHeight) * 2 - 1))
      schedulePointer()
    }

    const resetPointer = () => {
      targetX = 0
      targetY = 0
      schedulePointer()
    }

    const updateScroll = () => {
      scrollFrame = 0
      const maxScroll = Math.max(
        1,
        document.documentElement.scrollHeight - window.innerHeight,
      )
      root.style.setProperty('--sy', String(window.scrollY))
      root.style.setProperty(
        '--scroll-progress',
        Math.min(1, Math.max(0, window.scrollY / maxScroll)).toFixed(4),
      )
    }

    const onScroll = () => {
      if (!scrollFrame) scrollFrame = requestAnimationFrame(updateScroll)
    }

    updateScroll()

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    if (finePointer) {
      window.addEventListener('pointermove', onPointerMove, { passive: true })
      document.documentElement.addEventListener('pointerleave', resetPointer)
    }

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      window.removeEventListener('pointermove', onPointerMove)
      document.documentElement.removeEventListener('pointerleave', resetPointer)
      if (pointerFrame) cancelAnimationFrame(pointerFrame)
      if (scrollFrame) cancelAnimationFrame(scrollFrame)
    }
  }, [reducedMotion])
}
