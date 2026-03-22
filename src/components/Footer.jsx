import { Link } from 'react-scroll'

const SOCIALS = [
  { icon: '✉️', href: 'mailto:sinthuk458@gmail.com', label: 'Email' },
  { icon: '💼', href: 'https://www.linkedin.com/in/sinthujah-kanagasundaram', label: 'LinkedIn' },
  { icon: '⟨/⟩', href: 'https://github.com/sinthu-96', label: 'GitHub' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-logo">SK.</div>

        <div className="footer-socials">
          {SOCIALS.map((s, i) => (
            <a
              key={i}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="footer-social-link"
              aria-label={s.label}
              title={s.label}
            >
              {s.icon}
            </a>
          ))}
        </div>

        <nav style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
          {['about', 'skills', 'projects', 'contact'].map(id => (
            <Link
              key={id}
              to={id}
              smooth
              duration={700}
              offset={-80}
              style={{
                fontSize: '0.8rem',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                textTransform: 'capitalize',
                transition: 'color 0.2s',
              }}
              className="nav-link"
            >
              {id}
            </Link>
          ))}
        </nav>

        <p className="footer-text">
          Designed &amp; Built with ❤️ by{' '}
          <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>Sinthujah Kanagasundaram</span>
        </p>
        <p className="footer-text" style={{ fontSize: '0.75rem' }}>
          © {new Date().getFullYear()} · All Rights Reserved
        </p>
      </div>
    </footer>
  )
}
