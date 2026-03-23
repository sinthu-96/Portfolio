import { useState } from 'react'
import { ScrollReveal } from '../hooks/useScrollReveal'

const CONTACT_LINKS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'sinthuk456@gmail.com',
    href: 'mailto:sinthuk456@gmail.com',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 770702673',
    href: 'tel:+94770702673',
  },
  {
    icon: '⟨/⟩',
    label: 'GitHub',
    value: 'github.com/sinthu-96',
    href: 'https://github.com/sinthu-96',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sinthujah-kanagasundaram',
    href: 'https://www.linkedin.com/in/sinthujah-kanagasundaram',
  },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = e => {
    e.preventDefault()
    setLoading(true)
    // Simulate async submit
    setTimeout(() => {
      setLoading(false)
      setSubmitted(true)
      setForm({ name: '', email: '', subject: '', message: '' })
    }, 1500)
  }

  return (
    <section id="contact" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Let's Connect</span>
            <h2 className="section-title">
              Get in <span className="italic-text">Touch</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginTop: '1.25rem',
              maxWidth: '650px',
              margin: '1.25rem auto 0',
              fontSize: '1rem',
              lineHeight: '1.8'
            }}>
              I'm open to internships, collaborations, creative opportunities, and meaningful 
              tech projects. Let's build something impactful together.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="contact-info">
              <h3 style={{ textTransform: 'uppercase', letterSpacing: '0.1em', fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
                Contact Details
              </h3>
              <div className="contact-links">
                {CONTACT_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-link-item"
                    id={`contact-link-${i}`}
                    style={{ padding: '0.85rem 1.25rem' }}
                  >
                    <div className="contact-link-value" style={{ fontSize: '0.95rem' }}>{link.value}</div>
                  </a>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Form */}
          <ScrollReveal direction="right">
            <form className="contact-form" onSubmit={handleSubmit} id="contact-form">
              <div className="form-group">
                <label className="form-label" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  className="form-input"
                  placeholder="Your name"
                  value={form.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="email">Email Address</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  className="form-input"
                  placeholder="Your email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="subject">Subject</label>
                <input
                  id="subject"
                  name="subject"
                  type="text"
                  className="form-input"
                  placeholder="Subject"
                  value={form.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Your message"
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', flexWrap: 'wrap' }}>
                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ flex: 1, minWidth: '160px' }}
                  id="contact-submit-btn"
                  disabled={loading}
                >
                  {loading ? 'Sending...' : 'Send Message'}
                </button>

                <a 
                  href="/Sinthujah_Kanagasundaram_CV.pdf" 
                  download="Sinthujah_Kanagasundaram_CV.pdf"
                  className="btn btn-secondary"
                  style={{ flex: 1, minWidth: '160px', opacity: 0.8 }}
                  id="contact-cv-btn"
                >
                  Download CV
                </a>
              </div>

              {submitted && (
                <div className="success-message" style={{ marginTop: '1.5rem' }}>
                  ✅ Message sent! I'll get back to you soon.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
