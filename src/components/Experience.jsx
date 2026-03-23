import { ScrollReveal } from '../hooks/useScrollReveal'

const ACTIVITIES = [
  {
    icon: '🎓',
    title: 'Batch Representative',
    subtitle: 'Informatics Institute of Technology • 2024 – Present',
    desc: 'Represented the undergraduate batch cohort, acting as the primary liaison between students and faculty. Coordinated academic schedules and communicated institutional updates.',
  },
  {
    icon: '📢',
    title: 'Public Relations Editor',
    subtitle: 'Leo District 306 D3 • 2025 – Present',
    desc: 'Managing public relations, event coverage, and social media content creation for Leo District 306 D3 initiatives.',
  },
  {
    icon: '💰',
    title: 'Assistant Treasurer',
    subtitle: 'Leo Club of Colombo Waters Meet • 2025 – Present',
    desc: 'Assisting in financial management, budgeting, and treasury operations for the Leo Club community projects.',
  },
  {
    icon: '⚡',
    title: 'Active Member',
    subtitle: 'IEEE Student Branch, IIT • 2024 – Present',
    desc: 'Participating in technical events, workshops, and engineering talks — staying at the forefront of emerging technologies.',
  },
  {
    icon: '📚',
    title: 'Private Tutor',
    subtitle: 'Self-Employed • 2022 – Present',
    desc: 'Provided one-on-one tutoring in Mathematics, Science, and ICT to secondary-level students, improving their academic results and analytical thinking.',
  },
  {
    icon: '🏅',
    title: 'House Vice Captain',
    subtitle: 'Hindu Ladies College • 2022 – 2023',
    desc: 'Led house members in sports, cultural activities, and team-building events, fostering a strong sense of community.',
  },
  {
    icon: '🦁',
    title: 'Secretary, Leo Club',
    subtitle: 'Hindu Ladies College • 2022 – 2023',
    desc: 'Managed club documentation, meeting minutes, and communications for student-led community service projects.',
  },
  {
    icon: '🔤',
    title: 'Secretary, Scrabble Union',
    subtitle: 'Hindu Ladies College • 2022 – 2023',
    desc: 'Organized school-level competitive Scrabble tournaments and weekly workshop sessions for students.',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="section" style={{ background: 'var(--bg-main)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header" style={{ alignItems: 'flex-start', textAlign: 'left', marginBottom: '3rem' }}>
            <span className="section-label" style={{ letterSpacing: '0.15em', fontSize: '0.75rem' }}>
              LEADERSHIP & EXPERIENCE
            </span>
            <h2 className="section-title" style={{ fontSize: '3rem', marginTop: '0.5rem' }}>
              Leadership &amp; <span style={{ color: 'var(--cyan)' }}>Experience</span>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.5rem',
        }}>
          {ACTIVITIES.map((act, i) => (
             <ScrollReveal key={i} delay={i * 100}>
               <div className="lead-card" style={{
                   background: 'var(--bg-card)',
                   border: '1px solid var(--border-glass)',
                   borderRadius: '16px',
                   padding: '2.5rem 2rem',
                   height: '100%',
                   display: 'flex',
                   flexDirection: 'column',
                   transition: 'var(--transition)'
               }}>
                  <div style={{ fontSize: '1.75rem', marginBottom: '1.5rem' }}>{act.icon}</div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 600, marginBottom: '0.5rem', color: '#fff', letterSpacing: '-0.01em' }}>
                    {act.title}
                  </h3>
                  <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.75rem', color: 'var(--text-muted)', marginBottom: '1.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                    {act.subtitle}
                  </div>
                  <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, margin: 0 }}>
                    {act.desc}
                  </p>
               </div>
             </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
