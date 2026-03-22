import { ScrollReveal } from '../hooks/useScrollReveal'

const PROJECTS = [
  {
    number: '01',
    icon: '🌿',
    iconBg: 'linear-gradient(135deg, #00d4ff22, #7b2ff722)',
    name: 'AgriVora',
    subtitle: 'Smart Crop Recommendation System',
    desc: 'Developed a mobile application that analyzes soil and environmental data to recommend suitable crops. Integrated ML models (LightGBM, CNN, TensorFlow) for crop prediction and IoT data collection using ESP32 sensors with a scalable FastAPI + Firebase backend.',
    stack: ['Python', 'FastAPI', 'Flutter', 'LightGBM', 'CNN', 'TensorFlow', 'Firebase', 'ESP32'],
    contribution: 'Backend architecture, ML integration, IoT pipeline',
    github: 'https://github.com/sinthu-96',
    featured: true,
  },
  {
    number: '02',
    icon: '💻',
    iconBg: 'linear-gradient(135deg, #7b2ff722, #f72f8e22)',
    name: 'CodeSphere',
    subtitle: 'Online Code Execution Platform',
    desc: 'Built a web platform that allows users to write and execute Python code in the browser. Implemented a backend code execution engine and automated test case evaluation for competitive coding challenges.',
    stack: ['Python', 'Node.js', 'ReactJS', 'REST APIs'],
    contribution: 'Full-stack development, execution engine, test case system',
    github: 'https://github.com/sinthu-96',
    featured: false,
  },
  {
    number: '03',
    icon: '📦',
    iconBg: 'linear-gradient(135deg, #00ff8822, #00d4ff22)',
    name: 'StockPilot',
    subtitle: 'Inventory & Sales Management',
    desc: 'Developed a comprehensive business management system for tracking product inventory, managing sales transactions, and generating analytics dashboards with real-time insights.',
    stack: ['Node.js', 'MySQL', 'REST APIs', 'JavaScript'],
    contribution: 'Dashboard design, inventory logic, REST API development',
    github: 'https://github.com/sinthu-96',
    featured: false,
  },
  {
    number: '04',
    icon: '✅',
    iconBg: 'linear-gradient(135deg, #f72f8e22, #7b2ff722)',
    name: 'TaskFlow',
    subtitle: 'Smart Task & Productivity Manager',
    desc: 'Created a productivity application that helps users organize tasks, set priorities and deadlines, and track progress through interactive dashboards with analytics and productivity metrics.',
    stack: ['ReactJS', 'Node.js', 'MySQL', 'REST APIs', 'Express'],
    contribution: 'Full-stack development, authentication, analytics dashboard',
    github: 'https://github.com/sinthu-96',
    featured: true,
  },
  {
    number: '05',
    icon: '🍽️',
    iconBg: 'linear-gradient(135deg, #00d4ff22, #00ff8822)',
    name: 'QuickServe',
    subtitle: 'Restaurant Order Queue System',
    desc: 'Developed a restaurant order system using a queue-based scheduling mechanism to efficiently manage and prioritize incoming orders, improving kitchen workflow and reducing wait times.',
    stack: ['Java', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    contribution: 'Queue algorithm design, backend logic, order management UI',
    github: 'https://github.com/sinthu-96',
    featured: false,
  },
  {
    number: '06',
    icon: '🛍️',
    iconBg: 'linear-gradient(135deg, #7b2ff722, #00d4ff22)',
    name: 'ShopEase',
    subtitle: 'E-Commerce Web Application',
    desc: 'Built an online shopping platform that enables users to browse products, manage shopping carts, and securely place orders. Features include user authentication, product catalog, and order management.',
    stack: ['PHP', 'MySQL', 'HTML', 'CSS', 'JavaScript'],
    contribution: 'Full-stack development, cart logic, secure checkout flow',
    github: 'https://github.com/sinthu-96',
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
              A collection of projects spanning AI/ML, full-stack development, and real-world systems.
            </p>
          </div>
        </ScrollReveal>

        <div className="projects-grid">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={i} delay={i * 80}>
              <div className="project-card">
                {p.featured && <div className="featured-badge">★ Featured</div>}

                <div className="project-number">{p.number}</div>

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
