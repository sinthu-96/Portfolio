import { ScrollReveal } from '../hooks/useScrollReveal'

const ACHIEVEMENTS = [
  {
    icon: '🏆',
    title: 'Hult Prize Participant',
    desc: 'Participated in the Hult Prize competition, developing innovative startup ideas aligned with the UN Sustainable Development Goals (2026).',
    year: '2026',
  },
  {
    icon: '⚡',
    title: 'IEEEXtreme 19.0',
    desc: 'Participated in the 24-hour global competitive programming hackathon organized by the IEEE Student branch of IIT — demonstrating endurance, teamwork, and problem-solving under pressure.',
    year: '2025',
  },
  {
    icon: '⚡',
    title: 'IEEEXtreme 18.0',
    desc: 'Participated in the 24-hour global competitive programming hackathon organized by the IEEE Student branch of IIT.',
    year: '2024',
  },
  {
    icon: '💡',
    title: 'CodeRally 6.0',
    desc: 'Competed in the competitive programming challenge focused on problem-solving and algorithmic thinking, organized by IEEE Computer Society.',
    year: '2025',
  },
]

const ACTIVITIES = [
  { icon: '📡', role: 'Member — IEEE', org: 'IEEE Student Branch, IIT', period: '2024 – Present' },
  { icon: '📢', role: 'Public Relations Editor', org: 'Leo District 306 D3', period: '2025 – Present' },
  { icon: '💰', role: 'Assistant Treasurer', org: 'Leo Club of Colombo Waters Meet', period: '2025 – Present' },
  { icon: '🏅', role: 'House Vice Captain', org: 'Hindu Ladies College', period: '2022 – 2023' },
  { icon: '🔤', role: 'Secretary — Scrabble Union', org: 'Hindu Ladies College', period: '2022 – 2023' },
  { icon: '🦁', role: 'Secretary — Leo Club', org: 'Hindu Ladies College', period: '2022 – 2023' },
]

export default function Achievements() {
  return (
    <section id="achievements" className="section" style={{ background: 'rgba(0,0,0,0.15)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">Recognition & Activities</span>
            <h2 className="section-title">
              Achievements &amp; <span className="gradient-text">Involvement</span>
            </h2>
          </div>
        </ScrollReveal>

        {/* Certifications / Competitions */}
        <ScrollReveal delay={100}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            marginBottom: '1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ color: 'var(--cyan)' }}>///</span> Competitions &amp; Certifications
          </h3>
        </ScrollReveal>

        <div className="achieve-grid">
          {ACHIEVEMENTS.map((a, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="achieve-card">
                <div className="achieve-icon">{a.icon}</div>
                <div className="achieve-content">
                  <h4>{a.title}</h4>
                  <p>{a.desc}</p>
                  <span className="achieve-year">{a.year}</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Extracurricular Activities */}
        <ScrollReveal delay={200}>
          <h3 style={{
            fontSize: '1.1rem',
            fontWeight: 700,
            color: 'var(--text-secondary)',
            margin: '3rem 0 1.25rem',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem',
          }}>
            <span style={{ color: 'var(--purple)' }}>///</span> Extracurricular Activities
          </h3>
        </ScrollReveal>

        <div className="activities-grid">
          {ACTIVITIES.map((act, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="activity-item">
                <div className="activity-icon">{act.icon}</div>
                <div className="activity-role">{act.role}</div>
                <div className="activity-org">{act.org}</div>
                <div className="activity-period">{act.period}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
