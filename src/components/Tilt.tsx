import {
  useRef,
  type CSSProperties,
  type PointerEvent,
  type ReactNode,
} from 'react'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'

type TiltProps = {
  children: ReactNode
  className?: string
  max?: number
  glare?: boolean
  style?: CSSProperties
}

export function Tilt({
  children,
  className,
  max = 5,
  glare = true,
  style,
}: TiltProps) {
  const ref = useRef<HTMLDivElement>(null)
  const reducedMotion = usePrefersReducedMotion()

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reducedMotion || event.pointerType === 'touch') return

    const node = ref.current
    if (!node) return

    const rect = node.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width
    const y = (event.clientY - rect.top) / rect.height

    node.style.setProperty('--tilt-x', `${(0.5 - y) * max * 2}deg`)
    node.style.setProperty('--tilt-y', `${(x - 0.5) * max * 2}deg`)
    node.style.setProperty('--glare-x', `${x * 100}%`)
    node.style.setProperty('--glare-y', `${y * 100}%`)
  }

  const resetTilt = () => {
    const node = ref.current
    if (!node) return
    node.style.setProperty('--tilt-x', '0deg')
    node.style.setProperty('--tilt-y', '0deg')
  }

  return (
    <div
      ref={ref}
      className={['tilt', glare ? 'has-glare' : '', className]
        .filter(Boolean)
        .join(' ')}
      onPointerLeave={resetTilt}
      onPointerMove={handlePointerMove}
      style={style}
    >
      <div className="tilt-inner">{children}</div>
    </div>
  )
}
