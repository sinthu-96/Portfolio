import { ScrollReveal } from '../hooks/useScrollReveal'

const EXPERIENCES = [
  {
    icon: '📋',
    role: 'Batch Representative',
    org: 'Informatics Institute of Technology (IIT), Colombo',
    period: '2024 – Present',
    bullets: [
      'Represented the undergraduate batch cohort, acting as the primary liaison between students and faculty.',
      'Coordinated academic schedules, communicated institutional updates, and ensured student concerns were addressed promptly.',
      'Facilitated group problem-solving sessions and peer study circles, improving cohort academic performance.',
      'Demonstrated leadership, stakeholder management, and effective communication skills in an academic setting.',
    ],
  },
  {
    icon: '📚',
    role: 'Private Tutor',
    org: 'Self-Employed | Colombo, Sri Lanka',
    period: '2022 – Present',
    bullets: [
      'Provided one-on-one tutoring in Mathematics, Science, and ICT to secondary-level students, improving their academic results.',
      'Developed customized lesson plans and learning materials tailored to each student\'s learning style and pace.',
      'Cultivated strong mentorship relationships, boosting student confidence and analytical thinking skills.',
      'Time management, patience, and adaptive communication enhanced through consistent student engagement.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">My Journey</span>
            <h2 className="section-title">
              Experience &amp; <span className="gradient-text">Roles</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="experience-timeline">
          {EXPERIENCES.map((exp, i) => (
            <ScrollReveal key={i} delay={i * 150}>
              <div className="exp-item">
                <div className="exp-dot">{exp.icon}</div>
                <div className="exp-content">
                  <div className="exp-header">
                    <div className="exp-role">{exp.role}</div>
                    <div className="exp-period">{exp.period}</div>
                  </div>
                  <div className="exp-org">{exp.org}</div>
                  <ul className="exp-bullets">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="exp-bullet">{b}</li>
                    ))}
                  </ul>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
