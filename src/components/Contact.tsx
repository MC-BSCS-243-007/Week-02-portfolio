import {
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
} from 'react'
import { profile } from '../data/profile'
import { Icon } from './Icon'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

type Field = 'name' | 'email' | 'message'
type Values = Record<Field, string>
type Errors = Partial<Record<Field, string>>

const initialValues: Values = { name: '', email: '', message: '' }
const fields: Field[] = ['name', 'email', 'message']
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function getFieldError(field: Field, value: string) {
  const trimmed = value.trim()

  if (field === 'name') {
    if (!trimmed) return 'Please add your name.'
    if (trimmed.length < 2) return 'That name looks a little short.'
  }

  if (field === 'email') {
    if (!trimmed) return 'Please add your email address.'
    if (!emailPattern.test(trimmed)) {
      return 'Enter a valid email, like you@example.com.'
    }
  }

  if (field === 'message') {
    if (!trimmed) return 'Tell me a little about the project.'
    if (trimmed.length < 10) return 'A little more detail, please (10+ characters).'
  }

  return ''
}

export function Contact() {
  const [values, setValues] = useState<Values>(initialValues)
  const [errors, setErrors] = useState<Errors>({})
  const [prepared, setPrepared] = useState(false)
  const [copyStatus, setCopyStatus] = useState<'idle' | 'copied' | 'error'>(
    'idle',
  )
  const copyTimer = useRef<number | null>(null)
  const mailtoHref = `mailto:${profile.email}`

  useEffect(() => {
    return () => {
      if (copyTimer.current) window.clearTimeout(copyTimer.current)
    }
  }, [])

  const handleChange =
    (field: Field) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setValues((current) => ({ ...current, [field]: value }))
      setPrepared(false)
      if (errors[field]) {
        setErrors((current) => ({ ...current, [field]: undefined }))
      }
    }

  const handleBlur = (field: Field) => () => {
    if (!values[field].trim()) return
    const message = getFieldError(field, values[field])
    setErrors((current) => ({ ...current, [field]: message || undefined }))
  }

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const nextErrors: Errors = {}

    fields.forEach((field) => {
      const message = getFieldError(field, values[field])
      if (message) nextErrors[field] = message
    })

    setErrors(nextErrors)

    const firstInvalid = fields.find((field) => nextErrors[field])
    if (firstInvalid) {
      document.getElementById(`contact-${firstInvalid}`)?.focus()
      return
    }

    const subject = encodeURIComponent(
      `Portfolio enquiry from ${values.name.trim()}`,
    )
    const body = encodeURIComponent(
      `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`,
    )

    window.location.href = `${mailtoHref}?subject=${subject}&body=${body}`
    setPrepared(true)
  }

  const resetForm = () => {
    setValues(initialValues)
    setErrors({})
    setPrepared(false)
  }

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopyStatus('copied')
    } catch {
      setCopyStatus('error')
    }

    if (copyTimer.current) window.clearTimeout(copyTimer.current)
    copyTimer.current = window.setTimeout(() => setCopyStatus('idle'), 2600)
  }

  return (
    <section
      aria-labelledby="contact-heading"
      className="section contact"
      id="contact"
    >
      <span aria-hidden="true" className="contact-ghost">
        HELLO
      </span>
      <div className="container">
        <SectionHeading
          id="contact-heading"
          index="04"
          label="Contact"
          lede="Have an internship, a product idea or a frontend problem worth untangling? Tell me what you're building. I read every message."
          title={
            <>
              Have a problem
              <br />
              <em>worth solving?</em>
            </>
          }
        />

        <div className="contact-grid">
          <div className="contact-info">
            <Reveal>
              <div className="availability-card">
                <div className="availability-top">
                  <span className="status-mini">
                    <i aria-hidden="true" />
                    Available
                  </span>
                  <span className="mono">2026</span>
                </div>
                <p className="availability-title">
                  Open to frontend internships, remote or on-site.
                </p>
                <p className="availability-copy">
                  Based in Multan, Pakistan. I usually reply within a day.
                </p>

                <dl className="contact-list">
                  <div>
                    <dt>Email</dt>
                    <dd>
                      <a href={mailtoHref}>{profile.email}</a>
                      <button
                        aria-label="Copy email address"
                        className="copy-button"
                        onClick={copyEmail}
                        type="button"
                      >
                        <Icon
                          name={copyStatus === 'copied' ? 'check' : 'copy'}
                          size={15}
                        />
                      </button>
                    </dd>
                  </div>
                  <div>
                    <dt>GitHub</dt>
                    <dd>
                      <a
                        href={profile.github}
                        rel="noreferrer"
                        target="_blank"
                      >
                        {profile.githubHandle}
                        <Icon name="arrowUpRight" size={14} />
                      </a>
                    </dd>
                  </div>
                  <div>
                    <dt>Location</dt>
                    <dd>{profile.location}</dd>
                  </div>
                </dl>

                <p aria-live="polite" className="copy-status">
                  {copyStatus === 'copied'
                    ? 'Email copied to clipboard.'
                    : copyStatus === 'error'
                      ? 'Copy failed — select the address above.'
                      : '\u00A0'}
                </p>
              </div>
            </Reveal>

            <Reveal delay={110}>
              <p className="contact-aside">
                <Icon name="spark" size={16} />
                For a faster reply, include the role, timeline and the part of the
                front end you need help with.
              </p>
            </Reveal>
          </div>

          <Reveal className="contact-form-reveal" delay={90}>
            {prepared ? (
              <div aria-live="polite" className="form-success" role="status">
                <span aria-hidden="true" className="success-icon">
                  <Icon name="check" size={22} />
                </span>
                <h3>Your email draft is ready.</h3>
                <p>
                  Your mail app should be opening with the message prefilled. If
                  nothing happened, use the direct link below — nothing was sent to
                  a server.
                </p>
                <a className="btn btn-primary" href={mailtoHref}>
                  <span>Email {profile.email}</span>
                  <Icon name="mail" size={17} />
                </a>
                <button className="text-link" onClick={resetForm} type="button">
                  Write another message
                </button>
              </div>
            ) : (
              <form className="contact-form" noValidate onSubmit={handleSubmit}>
                <div className="form-head">
                  <span className="mono">Start a conversation</span>
                  <p>No forms disappearing into the void. This one opens an email.</p>
                </div>

                <div className="form-row">
                  <div className={`field${errors.name ? ' has-error' : ''}`}>
                    <label htmlFor="contact-name">Name</label>
                    <input
                      aria-describedby={
                        errors.name ? 'contact-name-error' : undefined
                      }
                      aria-invalid={Boolean(errors.name)}
                      autoComplete="name"
                      id="contact-name"
                      name="name"
                      onBlur={handleBlur('name')}
                      onChange={handleChange('name')}
                      placeholder="Your name"
                      type="text"
                      value={values.name}
                    />
                    {errors.name ? (
                      <p className="field-error" id="contact-name-error">
                        {errors.name}
                      </p>
                    ) : null}
                  </div>

                  <div className={`field${errors.email ? ' has-error' : ''}`}>
                    <label htmlFor="contact-email">Email</label>
                    <input
                      aria-describedby={
                        errors.email ? 'contact-email-error' : undefined
                      }
                      aria-invalid={Boolean(errors.email)}
                      autoComplete="email"
                      id="contact-email"
                      name="email"
                      onBlur={handleBlur('email')}
                      onChange={handleChange('email')}
                      placeholder="you@example.com"
                      type="email"
                      value={values.email}
                    />
                    {errors.email ? (
                      <p className="field-error" id="contact-email-error">
                        {errors.email}
                      </p>
                    ) : null}
                  </div>
                </div>

                <div className={`field${errors.message ? ' has-error' : ''}`}>
                  <label htmlFor="contact-message">Message</label>
                  <textarea
                    aria-describedby={
                      errors.message ? 'contact-message-error' : undefined
                    }
                    aria-invalid={Boolean(errors.message)}
                    id="contact-message"
                    name="message"
                    onBlur={handleBlur('message')}
                    onChange={handleChange('message')}
                    placeholder="A sentence about the role or project, and what you'd like help with."
                    rows={5}
                    value={values.message}
                  />
                  {errors.message ? (
                    <p className="field-error" id="contact-message-error">
                      {errors.message}
                    </p>
                  ) : null}
                </div>

                <div className="form-submit-row">
                  <button className="btn btn-primary" type="submit">
                    <span>Send message</span>
                    <Icon name="send" size={17} />
                  </button>
                  <p className="form-privacy">
                    No backend, no tracking. Submitting composes an email in your
                    own mail app.
                  </p>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
