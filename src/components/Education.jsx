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

        <div className="experience-timeline">
          {EDUCATION.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 100} direction="left">
              <div className="exp-item">
                <div className="exp-dot">
                  {edu.icon}
                </div>
                <div className="exp-content">
                  <div className="exp-header" style={{ flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--cyan)', fontFamily: 'var(--font-mono)', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      {edu.period}
                    </div>
                    <h3 style={{ fontSize: '1.2rem', fontWeight: 700, margin: 0 }}>
                      {edu.degree}
                    </h3>
                  </div>
                  <div style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', marginTop: '0.5rem' }}>
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
