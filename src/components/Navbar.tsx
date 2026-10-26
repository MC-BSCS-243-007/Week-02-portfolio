import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
} from 'react'
import { navItems, profile } from '../data/profile'
import { useActiveSection } from '../hooks/useActiveSection'
import { trapDialogFocus } from '../lib/focusTrap'
import { Icon } from './Icon'

const sectionIds = navItems.map((item) => item.id)

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection(sectionIds)
  const menuRef = useRef<HTMLDialogElement>(null)
  const menuButtonRef = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    let frame = 0
    const update = () => {
      frame = 0
      setScrolled(window.scrollY > 28)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  useEffect(() => {
    const dialog = menuRef.current
    if (!dialog) return

    if (menuOpen) {
      if (!dialog.open) dialog.showModal()
      document.body.classList.add('menu-open')
    } else {
      if (dialog.open) dialog.close()
      document.body.classList.remove('menu-open')
    }
  }, [menuOpen])

  useEffect(() => {
    const dialog = menuRef.current
    if (!dialog) return

    const handleClose = () => {
      setMenuOpen(false)
      document.body.classList.remove('menu-open')
    }

    dialog.addEventListener('close', handleClose)
    return () => {
      dialog.removeEventListener('close', handleClose)
      document.body.classList.remove('menu-open')
    }
  }, [])

  useEffect(() => {
    if (!menuOpen) return
    const media = window.matchMedia('(min-width: 900px)')
    const onChange = () => {
      if (media.matches) setMenuOpen(false)
    }
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [menuOpen])

  return (
    <>
      <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
        <div className="container nav-shell">
          <a className="brand" href="#home">
            <span className="brand-mark" aria-hidden="true">
              J<span>.</span>
            </span>
            <span className="brand-text">
              <strong>John</strong>
              <span>Frontend developer</span>
            </span>
            <span className="sr-only"> — back to top</span>
          </a>

          <nav aria-label="Primary" className="nav-links">
            {navItems.map((item) => (
              <a
                key={item.id}
                aria-current={active === item.id ? 'location' : undefined}
                className={active === item.id ? 'is-active' : undefined}
                href={`#${item.id}`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="nav-actions">
            <a className="nav-cta" href="#contact">
              <span>Let&apos;s talk</span>
              <Icon name="arrowUpRight" size={16} />
            </a>
            <button
              ref={menuButtonRef}
              aria-controls="mobile-menu"
              aria-expanded={menuOpen}
              aria-haspopup="dialog"
              aria-label="Open navigation"
              className="menu-button"
              onClick={() => setMenuOpen(true)}
              type="button"
            >
              <Icon name="menu" size={20} />
            </button>
          </div>
        </div>
      </header>

      <dialog
        ref={menuRef}
        aria-labelledby="mobile-menu-title"
        className="mobile-menu"
        id="mobile-menu"
        onKeyDown={trapDialogFocus}
      >
        <div className="mobile-menu-top">
          <span className="mono">MENU / 2026</span>
          <button
            aria-label="Close navigation"
            className="icon-button"
            onClick={() => setMenuOpen(false)}
            type="button"
          >
            <Icon name="close" size={20} />
          </button>
        </div>

        <h2 className="sr-only" id="mobile-menu-title">
          Site navigation
        </h2>

        <nav aria-label="Mobile primary" className="mobile-nav">
          <ul>
            {navItems.map((item, index) => (
              <li key={item.id} style={{ '--i': index } as CSSProperties}>
                <a href={`#${item.id}`} onClick={() => setMenuOpen(false)}>
                  <span>{item.label}</span>
                  <span className="mono">0{index + 1}</span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="mobile-menu-foot">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
          <a href={profile.github} rel="noreferrer" target="_blank">
            GitHub <Icon name="arrowUpRight" size={15} />
          </a>
          <span className="mono">{profile.location}</span>
        </div>
      </dialog>
    </>
  )
}
