import { ScrollReveal } from '../hooks/useScrollReveal'

const HIGHLIGHTS = [
  {
    icon: '🧠',
    title: 'Analytical Thinking',
    desc: 'Breaking down complex problems into elegant solutions',
  },
  {
    icon: '⚡',
    title: 'Fast Learner',
    desc: 'Adapts quickly to new technologies and frameworks',
  },
  {
    icon: '🤝',
    title: 'Team Player',
    desc: 'Collaborative mindset with strong communication skills',
  },
  {
    icon: '🎯',
    title: 'Impact-Driven',
    desc: 'Building real-world solutions that make a difference',
  },
]

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Who I Am</span>
            <h2 className="section-title">About <span className="gradient-text">Me</span></h2>
          </div>
        </ScrollReveal>

        <div className="about-grid">
          {/* Orbital Tech Ring */}
          <ScrollReveal direction="left">
            <div className="about-orbital-container">
              <div className="orbit-center">SK.</div>
              
              {/* Ring 1 - Inner */}
              <div className="orbit-ring orbit-ring-1">
                <div className="orbit-sat" style={{ transform: 'rotate(0deg)' }}>
                  <div className="orbit-content orbit-content-1"><span style={{color: 'var(--cyan)'}}>&lt;</span> React <span style={{color: 'var(--cyan)'}}>/&gt;</span></div>
                </div>
                <div className="orbit-sat" style={{ transform: 'rotate(180deg)' }}>
                  <div className="orbit-content orbit-content-1"><span style={{color: 'var(--purple)'}}>&lt;</span> Python <span style={{color: 'var(--purple)'}}>/&gt;</span></div>
                </div>
              </div>

              {/* Ring 2 - Middle */}
              <div className="orbit-ring orbit-ring-2">
                <div className="orbit-sat" style={{ transform: 'rotate(90deg)' }}>
                  <div className="orbit-content orbit-content-2">Backend</div>
                </div>
                <div className="orbit-sat" style={{ transform: 'rotate(270deg)' }}>
                  <div className="orbit-content orbit-content-2">Full-Stack</div>
                </div>
              </div>
              
              {/* Ring 3 - Outer */}
              <div className="orbit-ring orbit-ring-3">
                <div className="orbit-sat" style={{ transform: 'rotate(45deg)' }}>
                  <div className="orbit-content orbit-content-3">FastAPI</div>
                </div>
                <div className="orbit-sat" style={{ transform: 'rotate(225deg)' }}>
                  <div className="orbit-content orbit-content-3">Data Structures</div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal direction="right">
            <div className="about-text">
              <h2>
                Passionate about <span className="gradient-text">Technology</span> &amp; Innovation
              </h2>
              <p className="about-summary">
                I'm a Computer Science undergraduate at the Informatics Institute of Technology (affiliated with the
                University of Westminster), with a strong passion for software development and problem-solving.
                I thrive at the intersection of creativity and technical depth — building applications that are
                not just functional, but impactful.
              </p>
              <p className="about-summary">
                From developing smart crop recommendation systems to building full-stack e-commerce platforms,
                I consistently challenge myself to explore new domains. I believe great software is born from
                a deep understanding of the problem — and I bring that mindset to every project I tackle.
              </p>

              <div className="about-highlights">
                {HIGHLIGHTS.map((h, i) => (
                  <div className="highlight-item" key={i}>
                    <div className="highlight-icon">{h.icon}</div>
                    <h4>{h.title}</h4>
                    <p>{h.desc}</p>
                  </div>
                ))}
              </div>

              <div className="about-languages">
                <span className="tag">🌍 English</span>
                <span className="tag">🇱🇰 Tamil</span>
                <span className="tag">🇱🇰 Sinhala</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  )
}
