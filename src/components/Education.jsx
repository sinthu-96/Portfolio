import { ScrollReveal } from '../hooks/useScrollReveal'

const EDUCATION = [
  {
    level: 'Undergraduate',
    degree: 'BSc (Hons) Computer Science',
    institution: 'Informatics Institute of Technology',
    affiliation: 'Affiliated with University of Westminster, UK',
    period: '2024 – Present',
    result: null,
    icon: '🎓',
    highlight: true,
  },
  {
    level: 'GCE Advanced Level',
    degree: 'Physical Science — C2S',
    institution: 'Hindu Ladies College',
    affiliation: 'Colombo 06, Sri Lanka',
    period: '2021 – 2023',
    result: 'Physical Science — C2S',
    icon: '📘',
    highlight: false,
  },
  {
    level: 'GCE Ordinary Level',
    degree: 'Results: 5A 4B',
    institution: 'Hindu Ladies College',
    affiliation: 'Colombo 06, Sri Lanka',
    period: '2019 – 2020',
    result: '5A 4B',
    icon: '📗',
    highlight: false,
  },
]

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Academic Background</span>
            <h2 className="section-title">
              My <span className="gradient-text">Education</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="edu-grid">
          {EDUCATION.map((edu, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div
                className="edu-card"
                style={edu.highlight ? { borderColor: 'var(--border-glow)', background: 'rgba(0,212,255,0.04)' } : {}}
              >
                <div style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>{edu.icon}</div>
                <div className="edu-level">{edu.level}</div>
                <div className="edu-degree">{edu.degree}</div>
                <div className="edu-institution">{edu.institution}</div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                  {edu.affiliation}
                </div>
                <div className="edu-period">{edu.period}</div>
                {edu.result && (
                  <div className="edu-result">{edu.result}</div>
                )}
                {edu.highlight && (
                  <div className="edu-result" style={{ background: 'rgba(0,212,255,0.08)', borderColor: 'rgba(0,212,255,0.25)', color: 'var(--cyan)', marginTop: '0.75rem' }}>
                    ● Currently Enrolled
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
