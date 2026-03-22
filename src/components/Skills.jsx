import { ScrollReveal } from '../hooks/useScrollReveal'

const SKILL_CATEGORIES = [
  {
    icon: '💻',
    title: 'Programming & Web',
    skills: [
      { name: 'Python', color: 'cyan' },
      { name: 'Java', color: 'purple' },
      { name: 'JavaScript', color: 'cyan' },
      { name: 'HTML', color: 'pink' },
      { name: 'CSS', color: 'pink' },
      { name: 'ReactJS', color: 'cyan' },
      { name: 'Node.js', color: 'purple' },
      { name: 'PHP', color: 'purple' },
    ],
  },
  {
    icon: '🗄️',
    title: 'Databases & Backend',
    skills: [
      { name: 'MySQL', color: 'cyan' },
      { name: 'Firebase Firestore', color: 'pink' },
      { name: 'REST APIs', color: 'purple' },
      { name: 'FastAPI', color: 'cyan' },
      { name: 'Firebase', color: 'pink' },
    ],
  },
  {
    icon: '🛠️',
    title: 'Tools & Software',
    skills: [
      { name: 'GitHub', color: 'purple' },
      { name: 'VS Code', color: 'cyan' },
      { name: 'Figma', color: 'pink' },
      { name: 'Adobe Photoshop', color: 'cyan' },
      { name: 'Flutter', color: 'purple' },
      { name: 'ESP32', color: 'pink' },
    ],
  },
  {
    icon: '🌟',
    title: 'Soft Skills',
    skills: [
      { name: 'Problem Solving', color: 'cyan' },
      { name: 'Analytical Thinking', color: 'purple' },
      { name: 'Teamwork', color: 'pink' },
      { name: 'Communication', color: 'cyan' },
      { name: 'Time Management', color: 'purple' },
      { name: 'Leadership', color: 'pink' },
    ],
  },
]

const ALL_SKILLS = [
  'Python', 'JavaScript', 'ReactJS', 'Node.js', 'Java', 'PHP', 'HTML', 'CSS',
  'MySQL', 'Firebase', 'FastAPI', 'REST APIs', 'Flutter', 'TensorFlow', 'LightGBM',
  'CNN', 'ESP32', 'GitHub', 'VS Code', 'Figma', 'Photoshop', 'Postman', 'Sequelize',
]

export default function Skills() {
  const marqueeItems = [...ALL_SKILLS, ...ALL_SKILLS]

  return (
    <section id="skills" className="section" style={{ background: 'rgba(0,0,0,0.2)' }}>
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">What I Know</span>
            <h2 className="section-title">
              Technical <span className="gradient-text">Skills</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="skills-categories">
          {SKILL_CATEGORIES.map((cat, i) => (
            <ScrollReveal key={i} delay={i * 100}>
              <div className="skill-category">
                <div className="skill-category-header">
                  <div className="skill-category-icon">{cat.icon}</div>
                  <div className="skill-category-title">{cat.title}</div>
                </div>
                <div className="skill-tags">
                  {cat.skills.map((s, j) => (
                    <span
                      key={j}
                      className={`tag${s.color === 'purple' ? ' tag-purple' : s.color === 'pink' ? ' tag-pink' : ''}`}
                    >
                      {s.name}
                    </span>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Marquee */}
        <ScrollReveal delay={400}>
          <div className="skills-marquee">
            <div className="marquee-track">
              {marqueeItems.map((skill, i) => (
                <div key={i} className="marquee-item">
                  <span>⚡</span>
                  <span>{skill}</span>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
