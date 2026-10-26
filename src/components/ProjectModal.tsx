import {
  useEffect,
  useRef,
  type CSSProperties,
  type MouseEvent,
} from 'react'
import { profile } from '../data/profile'
import { projectMailto, projects, type Project } from '../data/projects'
import { trapDialogFocus } from '../lib/focusTrap'
import { Icon } from './Icon'
import { ProjectArt } from './ProjectArt'

type ProjectModalProps = {
  project: Project | null
  onClose: () => void
  onPrevious: () => void
  onNext: () => void
}

export function ProjectModal({
  project,
  onClose,
  onPrevious,
  onNext,
}: ProjectModalProps) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const closeButtonRef = useRef<HTMLButtonElement>(null)
  const onCloseRef = useRef(onClose)

  useEffect(() => {
    onCloseRef.current = onClose
  }, [onClose])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (project) {
      if (!dialog.open) {
        dialog.showModal()
        document.body.classList.add('modal-open')
        window.requestAnimationFrame(() => closeButtonRef.current?.focus())
      }
      dialog.scrollTop = 0
    } else if (dialog.open) {
      dialog.close()
    }
  }, [project])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    const handleNativeClose = () => {
      document.body.classList.remove('modal-open')
      onCloseRef.current()
    }

    dialog.addEventListener('close', handleNativeClose)
    return () => {
      dialog.removeEventListener('close', handleNativeClose)
      document.body.classList.remove('modal-open')
    }
  }, [])

  const handleBackdropClick = (event: MouseEvent<HTMLDialogElement>) => {
    if (event.target === dialogRef.current) onCloseRef.current()
  }

  const primaryHref = project?.liveUrl ?? project?.repoUrl ?? profile.github
  const primaryLabel = project?.liveUrl
    ? 'View live project'
    : project?.repoUrl
      ? 'View repository'
      : 'GitHub profile'

  return (
    <dialog
      aria-labelledby="project-modal-title"
      className="project-modal"
      onClick={handleBackdropClick}
      onKeyDown={trapDialogFocus}
      ref={dialogRef}
    >
      {project ? (
        <div className="modal-panel">
          <div
            className="modal-cover"
            style={{ '--project-accent': project.accent } as CSSProperties}
          >
            <ProjectArt glyph={project.glyph} />
            <div className="modal-cover-top">
              <span className="mono">
                CASE {project.index} — {project.category}
              </span>
              <button
                aria-label="Close case notes"
                className="modal-close"
                onClick={onClose}
                ref={closeButtonRef}
                type="button"
              >
                <Icon name="close" size={20} />
              </button>
            </div>
            <span aria-hidden="true" className="modal-cover-index">
              {project.index}
            </span>
          </div>

          <div className="modal-body">
            <p className="modal-kicker mono">Selected work / {project.index}</p>
            <h2 id="project-modal-title">{project.title}</h2>
            <p className="modal-lead">{project.short}</p>
            <p className="modal-description">{project.description}</p>

            <div className="modal-columns">
              <div>
                <h3 className="mono">Highlights</h3>
                <ul className="modal-highlights">
                  {project.highlights.map((highlight) => (
                    <li key={highlight}>
                      <Icon name="check" size={15} />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mono">Stack</h3>
                <ul className="project-tags">
                  {project.technologies.map((technology) => (
                    <li key={technology}>{technology}</li>
                  ))}
                </ul>
              </div>
            </div>

            <p className="modal-note">
              <span className="mono">NOTE</span>
              This is a build walkthrough. Live demo and repository links will be
              published once the project is public — ask me and I&apos;ll happily
              share the code and decisions behind it.
            </p>

            <div className="modal-actions">
              <a
                className="btn btn-primary"
                href={primaryHref}
                rel="noreferrer"
                target="_blank"
              >
                <span>{primaryLabel}</span>
                <Icon name="arrowUpRight" size={17} />
              </a>
              <a className="btn btn-ghost" href={projectMailto}>
                <span>Request a walkthrough</span>
                <Icon name="mail" size={17} />
              </a>
            </div>

            <div className="modal-nav">
              <button onClick={onPrevious} type="button">
                <Icon name="chevronLeft" size={17} />
                <span>Previous case</span>
              </button>
              <span className="mono">
                {project.index} / 0{projects.length}
              </span>
              <button onClick={onNext} type="button">
                <span>Next case</span>
                <Icon name="chevronRight" size={17} />
              </button>
            </div>

            <p className="modal-esc mono">Press Esc to close</p>
          </div>
        </div>
      ) : null}
    </dialog>
  )
}
