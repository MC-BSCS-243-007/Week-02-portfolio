import type { ReactNode } from 'react'
import { Reveal } from './Reveal'

type SectionHeadingProps = {
  id?: string
  index: string
  label: string
  title: ReactNode
  lede?: ReactNode
}

export function SectionHeading({
  id,
  index,
  label,
  title,
  lede,
}: SectionHeadingProps) {
  return (
    <header className="section-head">
      <Reveal className="section-kicker" distance={18}>
        <span className="section-index">{index}</span>
        <span className="section-rule" aria-hidden="true" />
        <span className="section-label">{label}</span>
      </Reveal>
      <div className="section-head-copy">
        <Reveal delay={70}>
          <h2 id={id}>{title}</h2>
        </Reveal>
        {lede ? (
          <Reveal delay={140}>
            <p className="section-lede">{lede}</p>
          </Reveal>
        ) : null}
      </div>
    </header>
  )
}
