import { useCallback, useState } from 'react'
import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Marquee } from './components/Marquee'
import { Navbar } from './components/Navbar'
import { ProjectModal } from './components/ProjectModal'
import { Projects } from './components/Projects'
import { ScrollProgress } from './components/ScrollProgress'
import { Skills } from './components/Skills'
import { projects, type Project } from './data/projects'
import { useSceneMotion } from './hooks/useSceneMotion'

// 

export default function App() {
  useSceneMotion()

  const [activeProject, setActiveProject] = useState<Project | null>(null)

  const closeProject = useCallback(() => setActiveProject(null), [])

  const moveProject = useCallback((direction: 1 | -1) => {
    setActiveProject((current) => {
      if (!current) return current
      const index = projects.findIndex((project) => project.id === current.id)
      const nextIndex =
        (index + direction + projects.length) % projects.length
      return projects[nextIndex] ?? current
    })
  }, [])

  return (
    <div className="site">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <ScrollProgress />

      <div aria-hidden="true" className="ambient">
        <div className="ambient-glow ambient-glow-a" />
        <div className="ambient-glow ambient-glow-b" />
        <div className="ambient-grid" />
        <div className="ambient-grain" />
      </div>

      <Navbar />

      <main id="main" tabIndex={-1}>
        <Hero />
        <Marquee />
        <About />
        <Skills />
        <Projects onOpen={setActiveProject} />
        <Contact />
      </main>

      <Footer />

      <ProjectModal
        onClose={closeProject}
        onNext={() => moveProject(1)}
        onPrevious={() => moveProject(-1)}
        project={activeProject}
      />
    </div>
  )
}
