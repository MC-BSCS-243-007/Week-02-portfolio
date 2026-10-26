import { principles, skillGroups } from '../data/profile'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'
import { Tilt } from './Tilt'

export function Skills() {
  return (
    <section aria-labelledby="skills-heading" className="section skills" id="skills">
      <div className="container">
        <SectionHeading
          id="skills-heading"
          index="02"
          label="Skills"
          lede="A working toolkit, not a keyword list. These are the tools I use to take an interface from layout to a tested, responsive build."
          title={
            <>
              A toolkit I can
              <br />
              <em>actually explain.</em>
            </>
          }
        />

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <Reveal
              className={`skill-reveal skill-reveal-${index + 1}`}
              delay={index * 90}
              key={group.id}
            >
              <Tilt className="skill-panel" max={3.2}>
                <div className="skill-panel-top">
                  <div>
                    <span className="mono skill-number">0{index + 1}</span>
                    <h3>{group.title}</h3>
                  </div>
                  <span className="skill-level">
                    <i aria-hidden="true" />
                    {group.level}
                  </span>
                </div>
                <p className="skill-blurb">{group.blurb}</p>
                <ul aria-label={`${group.title} skills`} className="skill-tags">
                  {group.skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                  ))}
                </ul>
                <span aria-hidden="true" className="skill-signal">
                  <i />
                  <i />
                  <i />
                  <i />
                  <i />
                </span>
              </Tilt>
            </Reveal>
          ))}
        </div>

        <div className="principles-band">
          {principles.map((principle, index) => (
            <Reveal delay={index * 80} key={principle.id}>
              <div className="principle">
                <span className="mono">{principle.id}</span>
                <h4>{principle.title}</h4>
                <p>{principle.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <p className="skills-note">
            <Icon name="spark" size={16} />
            I only list what I can build with, debug and explain. Everything else is
            on the learning list.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
