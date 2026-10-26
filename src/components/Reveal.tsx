import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type RevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  distance?: number
}

export function Reveal({
  children,
  className,
  delay = 0,
  distance = 30,
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()
  const [shown, setShown] = useState(
    () => typeof window === 'undefined' || !('IntersectionObserver' in window),
  )

  useEffect(() => {
    const node = ref.current
    if (reducedMotion || shown || !node) return

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          setShown(true)
          observer.disconnect()
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [reducedMotion, shown])

  const visible = shown || reducedMotion

  const classes = ['reveal', visible ? 'is-in' : '', className]
    .filter(Boolean)
    .join(' ')

  return (
    <div
      ref={ref}
      className={classes}
      style={
        {
          '--reveal-delay': `${delay}ms`,
          '--reveal-distance': `${distance}px`,
        } as CSSProperties
      }
    >
      {children}
    </div>
  )
}
