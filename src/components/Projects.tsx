import type { CSSProperties } from 'react'
import { profile } from '../data/profile'
import { projects, type Project } from '../data/projects'
import { Icon } from './Icon'
import { ProjectArt } from './ProjectArt'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Tilt } from './Tilt'

type ProjectsProps = {
  onOpen: (project: Project) => void
}

export function Projects({ onOpen }: ProjectsProps) {
  return (
    <section aria-labelledby="work-heading" className="section work" id="work">
      <div className="container">
        <SectionHeading
          id="work-heading"
          index="03"
          label="Selected work"
          lede="Four builds that shaped how I think about components, breakpoints and clarity. Open any card for the longer story."
          title={
            <>
              Work that taught me
              <br />
              <em>the details.</em>
            </>
          }
        />

        <div className="project-grid">
          {projects.map((project, index) => (
            <Reveal delay={(index % 2) * 90} key={project.id}>
              <Tilt className="project-card" glare={false} max={3.8}>
                <article>
                  <button
                    aria-haspopup="dialog"
                    aria-label={`Open case notes for ${project.title}`}
                    className="project-open"
                    onClick={() => onOpen(project)}
                    type="button"
                  />
                  <div
                    className="project-cover"
                    style={
                      { '--project-accent': project.accent } as CSSProperties
                    }
                  >
                    <div className="project-cover-top">
                      <span aria-hidden="true" className="window-dots">
                        <i />
                        <i />
                        <i />
                      </span>
                      <span className="mono">project / {project.index}</span>
                    </div>
                    <ProjectArt glyph={project.glyph} />
                    <span aria-hidden="true" className="project-cover-index">
                      {project.index}
                    </span>
                    <span className="project-category mono">
                      {project.category}
                    </span>
                    <span aria-hidden="true" className="project-scanlines" />
                  </div>

                  <div className="project-body">
                    <div className="project-title-row">
                      <h3>{project.title}</h3>
                      <span aria-hidden="true" className="project-arrow">
                        <Icon name="arrowUpRight" size={18} />
                      </span>
                    </div>
                    <p className="project-short">{project.short}</p>
                    <ul
                      aria-label={`${project.title} technologies`}
                      className="project-tags"
                    >
                      {project.technologies.map((technology) => (
                        <li key={technology}>{technology}</li>
                      ))}
                    </ul>
                    <div className="project-foot">
                      <span className="project-cta">
                        <span>View case notes</span>
                        <Icon name="arrowRight" size={15} />
                      </span>
                      <span className="mono project-year">
                        0{index + 1} / 04
                      </span>
                    </div>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="work-note">
            <p>
              <span className="mono">NOTE</span>
              Live demos and individual repositories are being prepared. Every
              project is available as a walkthrough on request.
            </p>
            <a
              className="text-link"
              href={profile.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub profile
              <Icon name="arrowUpRight" size={15} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
