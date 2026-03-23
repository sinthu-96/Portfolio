import { useState, useEffect } from 'react'
import { Link } from 'react-scroll'

const TITLES = [
  'Software Engineer',
  'Full-Stack Developer',
  'Computer Science Undergraduate',
  'Problem Solver',
  'Tech Enthusiast',
]

function TypewriterText() {
  const [titleIndex, setTitleIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)
  const [charIndex, setCharIndex] = useState(0)

  useEffect(() => {
    const current = TITLES[titleIndex]
    let timeout

    if (!deleting && charIndex <= current.length) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex))
        setCharIndex(i => i + 1)
      }, 70)
    } else if (!deleting && charIndex > current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000)
    } else if (deleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayed(current.slice(0, charIndex - 1))
        setCharIndex(i => i - 1)
      }, 40)
    } else if (deleting && charIndex === 0) {
      setDeleting(false)
      setTitleIndex(i => (i + 1) % TITLES.length)
    }

    return () => clearTimeout(timeout)
  }, [charIndex, deleting, titleIndex])

  return (
    <span className="hero-typewriter">
      <span style={{ color: 'var(--cyan)', fontWeight: 600 }}>{displayed}</span>
      <span className="typewriter-cursor" />
    </span>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero">
      {/* Background layers */}
      <div className="hero-grid" />
      <div className="bg-gradient-orb hero-orb-1" />
      <div className="bg-gradient-orb hero-orb-2" />
      <div className="bg-gradient-orb hero-orb-3" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-eyebrow">
            <span>Hello, World! I'm</span>
          </div>

          <h1 className="hero-name">
            <span className="gradient-text">Sinthujah</span><br />
            <span>Kanagasundaram</span>
          </h1>

          <TypewriterText />

          <p className="hero-tagline">
            Crafting <span>innovative digital solutions</span> that bridge the gap between
            complex technology and real-world impact. Passionate about building systems that matter.
          </p>

          <div className="hero-cta">
            <Link to="projects" smooth duration={700} offset={-80}>
              <button className="btn btn-primary" id="hero-view-projects-btn">
                <span>View Projects</span>
                <span>→</span>
              </button>
            </Link>
            
            <a 
              href="/Sinthujah_Kanagasundaram_CV.pdf" 
              download="Sinthujah_Kanagasundaram_CV.pdf"
              className="btn btn-secondary"
              id="hero-cv-btn"
            >
              <span>Download CV</span>
              <span>↓</span>
            </a>

            <Link to="contact" smooth duration={700} offset={-80}>
              <button className="btn btn-outline" id="hero-contact-btn">
                <span>Contact Me</span>
              </button>
            </Link>
          </div>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-number">6+</span>
              <span className="hero-stat-label">Projects Built</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">10+</span>
              <span className="hero-stat-label">Technologies</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">2+</span>
              <span className="hero-stat-label">Years Coding</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-number">IEEE</span>
              <span className="hero-stat-label">Member</span>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-mouse">
          <div className="scroll-wheel" />
        </div>
        <span>SCROLL</span>
      </div>
    </section>
  )
}
