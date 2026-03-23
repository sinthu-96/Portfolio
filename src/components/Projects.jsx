import { ScrollReveal } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    number: '01',
    icon: '🌿',
    iconBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(59, 130, 246, 0.15))',
    name: 'AgriVora',
    subtitle: 'Smart Crop Recommendation System',
    desc: 'Developed a mobile application that analyzes soil and environmental data to recommend suitable crops. Implemented data processing algorithms for crop prediction and sensor-based data collection.',
    stack: ['Python', 'FastAPI', 'Flutter', 'Firebase', 'ESP32'],
    contribution: 'Backend architecture, data modeling, API development',
    github: 'https://github.com/sinthu-96',
    image: '/projects/agrivora.png',
    featured: true,
  },
  {
    number: '02',
    icon: '💻',
    iconBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(14, 165, 233, 0.15))',
    name: 'CodeSphere',
    subtitle: 'Online Code Execution Platform',
    desc: 'An online IDE and test bed for competitive programmers. Built with a scalable microservices architecture to handle multiple language runtimes and high-concurrency requests.',
    stack: ['Node.js', 'ReactJS', 'Python', 'Docker', 'Redis'],
    contribution: 'Sandboxed code execution engine, full-stack development',
    github: 'https://github.com/sinthu-96',
    image: '/projects/codesphere.png',
    featured: true,
  },
  {
    number: '03',
    icon: '📦',
    iconBg: 'linear-gradient(135deg, rgba(16, 185, 129, 0.15), rgba(99, 102, 241, 0.15))',
    name: 'StockPilot',
    subtitle: 'Inventory & Sales Management',
    desc: 'Comprehensive inventory solution for SME businesses. Features automated low-stock alerts, sales analytics dashboards, and multi-user access control.',
    stack: ['Node.js', 'MySQL', 'REST APIs', 'ChartJS'],
    contribution: 'Database design, authentication, analytics modules',
    github: 'https://github.com/sinthu-96/Stockpilot',
    image: '/projects/stockpilot.png',
    featured: false,
  },
  {
    number: '04',
    icon: '✅',
    iconBg: 'linear-gradient(135deg, rgba(14, 165, 233, 0.15), rgba(99, 102, 241, 0.15))',
    name: 'TaskFlow',
    subtitle: 'Task & Productivity Manager',
    desc: 'Built a productivity application that helps users organize tasks, set priorities and deadlines, and track progress through interactive dashboards.',
    stack: ['ReactJS', 'Node.js', 'MySQL', 'Express'],
    contribution: 'Full-stack development, UX design, dashboard logic',
    github: 'https://github.com/sinthu-96/taskflow-backend',
    image: '/projects/taskflow.png',
    featured: true,
  },
  {
    number: '05',
    icon: '🍽️',
    iconBg: 'linear-gradient(135deg, rgba(99, 102, 241, 0.15), rgba(16, 185, 129, 0.15))',
    name: 'QuickServe',
    subtitle: 'Restaurant Order Queue System',
    desc: 'Developed a restaurant order system using a queue-based scheduling mechanism to efficiently manage and prioritize kitchen workflow.',
    stack: ['Java', 'MySQL', 'Swing', 'JDBC'],
    contribution: 'Queue algorithm design, backend logic, priority system',
    github: 'https://github.com/sinthu-96/QuickServe',
    image: '/projects/quickserve.png',
    featured: false,
  },
  {
    number: '06',
    icon: '🛍️',
    iconBg: 'linear-gradient(135deg, rgba(59, 130, 246, 0.15), rgba(99, 102, 241, 0.15))',
    name: 'ShopEase',
    subtitle: 'E-Commerce Web Application',
    desc: 'Built an online shopping platform with user authentication, product catalog, and secure checkout. Optimized for performance and high traffic.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'TailwindCSS'],
    contribution: 'Full-stack development, cart management, DB optimization',
    github: 'https://github.com/sinthu-96/shopease',
    image: '/projects/shopease.png',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <ScrollReveal>
          <div className="section-header">
            <span className="section-label">What I've Built</span>
            <h2 className="section-title">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', marginTop: '0.75rem', maxWidth: '500px', margin: '0.75rem auto 0' }}>
              A collection of projects spanning full-stack development, system architecture, and real-world applications.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="project-card">
                {p.featured && <div className="featured-badge">★ Featured</div>}

                <div className="project-number">{p.number}</div>

                <div className="project-preview">
                  <img src={p.image} alt={p.name} className="project-image" />
                  <div className="project-overlay">
                    <a href={p.github} target="_blank" rel="noopener noreferrer" className="btn btn-outline btn-sm">
                      View Code ⟨/⟩
                    </a>
                  </div>
                </div>

                <div className="project-header">
                  <div
                    className="project-icon"
                    style={{ background: p.iconBg, border: '1px solid var(--border-glass)' }}
                  >
                    {p.icon}
                  </div>
                  <div className="project-info">
                    <div className="project-name">{p.name}</div>
                    <div className="project-subtitle">{p.subtitle}</div>
                  </div>
                </div>

                <p className="project-desc">{p.desc}</p>

                <div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.4rem', fontFamily: 'var(--font-mono)' }}>
                    CONTRIBUTION
                  </div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-secondary)' }}>{p.contribution}</div>
                </div>

                <div className="project-stack">
                  {p.stack.map((tech, j) => (
                    <span key={j} className={`tag${j % 3 === 1 ? ' tag-purple' : j % 3 === 2 ? ' tag-pink' : ''}`}>
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="project-links">
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    id={`project-github-${i}`}
                  >
                    <span>⟨/⟩</span> GitHub
                  </a>
                  {p.live && (
                    <a
                      href={p.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      id={`project-live-${i}`}
                    >
                      <span>↗</span> Live Demo
                    </a>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
