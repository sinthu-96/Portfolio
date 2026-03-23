import { ScrollReveal } from '../hooks/useScrollReveal'

const EDUCATION = [
  {
    degree: 'BSc (Hons) Computer Science',
    institution: 'University of Westminster – IIT Sri Lanka',
    period: '2024 – Present',
    icon: '🎓',
  },
  {
    degree: 'G.C.E Advanced Level – Physical Science',
    institution: 'Hindu Ladies’ College',
    period: '2021 – 2023',
    icon: '🏫',
  },
  {
    degree: 'G.C.E Ordinary Level',
    institution: 'Hindu Ladies’ College',
    period: '2019 – 2020',
    icon: '📖',
  },
]

export default function Education() {
  return (
    <section id="education" className="section" style={{ background: 'rgba(0,0,0,0.05)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">
              My <span className="gradient-text">Education</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="experience-timeline" style={{ maxWidth: '900px', margin: '0 auto' }}>
          {EDUCATION.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="exp-item">
                <div className="exp-dot" style={{ border: '2px solid var(--border-glow)', background: 'var(--bg-card)' }}>
                  {edu.icon}
                </div>
                <div className="exp-content" style={{ padding: '2rem' }}>
                  <div className="exp-header" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '0.25rem' }}>
                    <div className="exp-period" style={{ color: 'var(--purple)', fontWeight: 600, marginBottom: '0.5rem' }}>
                      {edu.period}
                    </div>
                    <div className="exp-role" style={{ fontSize: '1.25rem', fontWeight: 800 }}>
                      {edu.degree}
                    </div>
                  </div>
                  <div className="exp-org" style={{ fontSize: '0.95rem', opacity: 0.8, marginTop: '0.4rem' }}>
                    {edu.institution}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
