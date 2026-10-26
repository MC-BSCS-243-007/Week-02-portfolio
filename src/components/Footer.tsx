import { profile } from '../data/profile'
import { Icon } from './Icon'

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-top">
          <a aria-label="Jhon — back to top" className="footer-word" href="#home">
            Jhon<span aria-hidden="true">.</span>
          </a>

          <div className="footer-cta">
            <p className="mono">Open for frontend internships · 2026</p>
            <a className="footer-email" href={`mailto:${profile.email}`}>
              {profile.email}
              <Icon name="arrowUpRight" size={18} />
            </a>
          </div>

          <nav aria-label="Footer" className="footer-nav">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#work">Work</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>

        <div className="footer-bottom">
          <p>© 2026 Jhon. Designed and built from Multan.</p>
          <p className="mono">React · Vite · CSS 3D</p>
          <a className="footer-top-link" href="#home">
            Back to top
            <Icon name="arrowUpRight" size={14} />
          </a>
        </div>
      </div>
    </footer>
  )
}
