import { profile } from '../data/profile'
import { HeroCard } from './HeroCard'
import { Icon } from './Icon'
import { Reveal } from './Reveal'

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="hero" id="home">
      <div aria-hidden="true" className="hero-bg">
        <div className="hero-orb hero-orb-a" />
        <div className="hero-orb hero-orb-b" />
        <div className="hero-orb hero-orb-c" />
        <div className="hero-grid-floor" />
        <div className="hero-spotlight" />
        <span className="hero-ghost">J</span>
        <span className="hero-star star-a" />
        <span className="hero-star star-b" />
        <span className="hero-star star-c" />
        <span className="hero-star star-d" />
        <div className="hero-side-label hero-side-left mono">
          PORTFOLIO — 2026
        </div>
        <div className="hero-side-label hero-side-right mono">
          MULTAN / PK
        </div>
      </div>

      <div className="container hero-inner">
        <div className="hero-copy">
          <Reveal distance={18}>
            <p className="hero-eyebrow">
              <span aria-hidden="true" className="pulse-dot" />
              {profile.availability}
              <span className="hero-eyebrow-rule" aria-hidden="true" />
              <span className="mono">PK / 2026</span>
            </p>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="hero-title" id="hero-title">
              {profile.name}
              <span aria-hidden="true" className="hero-title-dot">
                .
              </span>
            </h1>
          </Reveal>

          <Reveal delay={140}>
            <p className="hero-role">
              <span>Frontend developer</span>
              <span className="hero-role-tail">
                <span aria-hidden="true" className="hero-role-slash">
                  /
                </span>
                <span className="hero-role-alt">interface builder</span>
              </span>
            </p>
          </Reveal>

          <Reveal delay={210}>
            <p className="hero-lede">{profile.intro}</p>
          </Reveal>

          <Reveal delay={280}>
            <div className="hero-actions">
              <a className="btn btn-primary" href="#work">
                <span>Explore selected work</span>
                <Icon name="arrowDown" size={18} />
              </a>
              <a className="btn btn-ghost" href="#contact">
                <span>Let&apos;s talk</span>
                <Icon name="arrowUpRight" size={17} />
              </a>
            </div>
          </Reveal>

          <Reveal delay={340}>
            <ul className="hero-meta">
              <li>
                <strong>04</strong>
                <span>selected projects</span>
              </li>
              <li>
                <strong>BSCS</strong>
                <span>Times University</span>
              </li>
              <li>
                <strong>Remote</strong>
                <span>internship ready</span>
              </li>
            </ul>
          </Reveal>
        </div>

        <Reveal className="hero-visual-reveal" delay={220} distance={44}>
          <HeroCard />
        </Reveal>
      </div>

      <div className="container hero-footer">
        <a className="scroll-cue" href="#about">
          <span aria-hidden="true" className="scroll-cue-line">
            <i />
          </span>
          <span className="mono">Scroll to explore</span>
        </a>
        <p className="hero-coords mono">
          30.16° N / 71.52° E <span aria-hidden="true">—</span> Multan, PK
        </p>
      </div>
    </section>
  )
}
