import { useState } from 'react'
import { ScrollReveal } from '../hooks/useScrollReveal'

const CONTACT_LINKS = [
  {
    icon: '✉️',
    label: 'Email',
    value: 'sinthuk458@gmail.com',
    href: 'mailto:sinthuk458@gmail.com',
  },
  {
    icon: '💼',
    label: 'LinkedIn',
    value: 'linkedin.com/in/sinthujah-kanagasundaram',
    href: 'https://www.linkedin.com/in/sinthujah-kanagasundaram',
  },
  {
    icon: '⟨/⟩',
    label: 'GitHub',
    value: 'github.com/sinthu-96',
    href: 'https://github.com/sinthu-96',
  },
  {
    icon: '📞',
    label: 'Phone',
    value: '+94 770702673',
    href: 'tel:+94770702673',
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
            <span className="section-label">Get In Touch</span>
            <h2 className="section-title">
              Let's <span className="gradient-text">Connect</span>
            </h2>
            <p style={{
              color: 'var(--text-secondary)',
              marginTop: '0.75rem',
              maxWidth: '450px',
              margin: '0.75rem auto 0',
              fontSize: '0.95rem',
            }}>
              Open to internship opportunities, collaborations, and interesting conversations.
              Let's build something great together.
            </p>
          </div>
        </ScrollReveal>

        <div className="contact-wrapper">
          {/* Contact Info */}
          <ScrollReveal direction="left">
            <div className="contact-info">
              <h3>
                Ready to <span className="gradient-text">collaborate?</span>
              </h3>
              <p>
                I'm actively seeking internship opportunities and exciting projects to contribute to.
                Whether you have a role, a project idea, or just want to connect — my inbox is always open.
              </p>
              <div className="contact-links">
                {CONTACT_LINKS.map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    target={link.href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="contact-link-item"
                    id={`contact-link-${i}`}
                  >
                    <div className="contact-link-icon">{link.icon}</div>
                    <div>
                      <div className="contact-link-label">{link.label}</div>
                      <div className="contact-link-value">{link.value}</div>
                    </div>
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
                  placeholder="Your full name"
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
                  placeholder="your@email.com"
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
                  placeholder="Internship / Collaboration / Project"
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
                  placeholder="Tell me about the opportunity or what you'd like to discuss..."
                  value={form.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary form-submit"
                id="contact-submit-btn"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Message →'}
              </button>

              {submitted && (
                <div className="success-message">
                  ✅ Thank you! I'll get back to you within 24 hours.
                </div>
              )}
            </form>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
