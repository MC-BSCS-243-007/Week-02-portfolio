import { aboutCards, education, learningNow, strengths } from '../data/profile'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Tilt } from './Tilt'

export function About() {
  return (
    <section aria-labelledby="about-heading" className="section about" id="about">
      <div className="container">
        <SectionHeading
          id="about-heading"
          index="01"
          label="About"
          lede="A frontend developer who likes the invisible work: the spacing scale, the keyboard path, the transition that tells you what just happened."
          title={
            <>
              Curious by default.
              <br />
              <em>Detail-driven</em> by practice.
            </>
          }
        />

        <div className="about-grid">
          <div className="about-story">
            <Reveal>
              <p className="about-lead">
                I&apos;m Jhon, a frontend developer and computer science student in
                Multan. I like the moment a rough idea becomes a system: a spacing
                scale that holds, a component that flexes, a transition that makes
                the next action obvious.
              </p>
            </Reveal>
            <Reveal delay={80}>
              <p className="about-copy">
                Most of my work lives in React, TypeScript and Tailwind CSS, with a
                growing interest in design engineering, accessible motion and
                performance. I&apos;m looking for a frontend internship where I can
                contribute to real products and learn from people who care about the
                details.
              </p>
            </Reveal>

            <Reveal delay={150}>
              <div className="now-panel">
                <div className="now-head">
                  <span className="mono">NOW / LEARNING</span>
                  <span className="status-mini">
                    <i aria-hidden="true" />
                    In progress
                  </span>
                </div>
                <ul className="now-list">
                  {learningNow.map((item) => (
                    <li key={item}>
                      <Icon name="arrowUpRight" size={15} />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>

          <div className="about-side">
            {aboutCards.map((card, index) => (
              <Reveal delay={index * 80} key={card.id}>
                <Tilt className="about-card" max={3.4}>
                  <span className="about-card-index mono">{card.id}</span>
                  <div>
                    <h3>{card.title}</h3>
                    <p>{card.body}</p>
                  </div>
                </Tilt>
              </Reveal>
            ))}

            <Reveal delay={240}>
              <ul aria-label="Strengths" className="strength-chips">
                {strengths.map((strength) => (
                  <li key={strength}>{strength}</li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>

        <div className="education">
          <Reveal className="education-head">
            <span className="mono">EDUCATION / 2020 — NOW</span>
            <h3>Clear foundations, built in public.</h3>
          </Reveal>
          <div className="edu-list">
            {education.map((item, index) => (
              <Reveal delay={index * 90} key={item.title}>
                <article className={`edu-item${item.current ? ' is-current' : ''}`}>
                  <span className="edu-period mono">{item.period}</span>
                  <div className="edu-main">
                    <h4>{item.title}</h4>
                    <p className="edu-place">{item.place}</p>
                    <p className="edu-note">{item.note}</p>
                  </div>
                  <span className="edu-status mono">
                    {item.current ? 'In progress' : 'Complete'}
                  </span>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
