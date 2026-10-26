import { profile } from '../data/profile'
import { Icon } from './Icon'

export function HeroCard() {
  return (
    <div className="hero-visual">
      <div aria-hidden="true" className="hero-visual-glow" />
      <div aria-hidden="true" className="orbit orbit-a">
        <span className="orbit-dot" />
      </div>
      <div aria-hidden="true" className="orbit orbit-b" />
      <div aria-hidden="true" className="orbit orbit-c" />

      <div className="id-card-wrap">
        <article aria-label="Portfolio identity card for Jhon" className="id-card">
          <div className="id-top">
            <span className="id-status">
              <span aria-hidden="true" className="status-dot" />
              {profile.availability}
            </span>
            <span className="id-number mono">ID·001</span>
          </div>

          <div className="id-profile">
            <div className="id-avatar">
              <img
                alt="Jhon"
                decoding="async"
                height="460"
                src={profile.avatar}
                width="460"
              />
              <span aria-hidden="true" className="id-avatar-ring" />
            </div>
            <div className="id-identity">
              <p className="id-name">
                {profile.name}
                <span aria-hidden="true">.</span>
              </p>
              <p className="id-role">{profile.role}</p>
              <p className="id-location">
                <Icon name="mapPin" size={13} />
                {profile.location}
              </p>
            </div>
          </div>

          <div aria-hidden="true" className="id-code">
            <div className="id-code-top">
              <span className="code-dots">
                <i />
                <i />
                <i />
              </span>
              <span className="mono">stack.ts</span>
              <span className="code-live">
                <i />
                live
              </span>
            </div>
            <code>
              <span className="code-line">
                <span className="tok-key">const</span>{' '}
                <span className="tok-var">stack</span>{' '}
                <span className="tok-op">=</span> [
              </span>
              <span className="code-line code-indent">
                <span className="tok-str">&apos;React&apos;</span>,{' '}
                <span className="tok-str">&apos;TypeScript&apos;</span>,
              </span>
              <span className="code-line code-indent">
                <span className="tok-str">&apos;Next.js&apos;</span>,{' '}
                <span className="tok-str">&apos;Tailwind&apos;</span>
              </span>
              <span className="code-line">];</span>
              <span className="code-line">
                <span className="tok-comment">// building with intent</span>
                <span className="code-caret" />
              </span>
            </code>
          </div>

          <div className="id-meta">
            <div>
              <span className="mono">PROJECTS</span>
              <strong>04</strong>
            </div>
            <div>
              <span className="mono">BASE</span>
              <strong>Multan</strong>
            </div>
            <div>
              <span className="mono">STATUS</span>
              <strong>Open</strong>
            </div>
          </div>

          <div className="id-foot">
            <span className="mono">PORTFOLIO / 2026</span>
            <span aria-hidden="true" className="id-bars">
              <i />
              <i />
              <i />
              <i />
              <i />
            </span>
          </div>
        </article>

        <div aria-hidden="true" className="float-chip chip-a">
          <Icon name="code" size={14} />
          React · TS
        </div>
        <div aria-hidden="true" className="float-chip chip-b">
          <span className="pulse-dot" />
          Open to remote
        </div>
        <div aria-hidden="true" className="float-chip chip-c">
          <Icon name="spark" size={14} />
          Detail obsessed
        </div>
      </div>
    </div>
  )
}
