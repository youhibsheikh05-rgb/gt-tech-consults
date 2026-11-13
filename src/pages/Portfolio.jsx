import { useState } from 'react'

const projects = [
  { cat: 'Websites', title: 'Business Landing Page', desc: 'A conversion-focused landing page with clear sections, CTA flow, and responsive layout.', icon: '🖥️', tone: '' },
  { cat: 'UI/UX', title: 'Mobile App Interface Concept', desc: 'User-flow driven mobile interface concept with clean hierarchy and accessible components.', icon: '📱', tone: 'alt' },
  { cat: 'Branding', title: 'Brand Identity Kit', desc: 'Logo direction, color system, and brand guidelines for a consistent visual presence.', icon: '🎨', tone: 'alt2' },
  { cat: 'AI/Automation', title: 'Automation Workflow Demo', desc: 'A practical automation workflow showing prompt-based tasks reducing repetitive work.', icon: '🤖', tone: '' },
  { cat: 'Marketing', title: 'Digital Marketing Blueprint', desc: 'Channel strategy, content plan, and measurable campaign structure for growth.', icon: '📊', tone: 'alt' },
  { cat: 'Content', title: 'Short-Form Content Pack', desc: 'Editing, caption direction, and a consistent content style for social platforms.', icon: '🎬', tone: 'alt2' },
]

const categories = ['all', 'Websites', 'UI/UX', 'Branding', 'AI/Automation', 'Marketing', 'Content']

export default function Portfolio() {
  const [active, setActive] = useState('all')
  const filtered = active === 'all' ? projects : projects.filter(p => p.cat === active)

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Portfolio</span>
          <h1>Our Work</h1>
          <p>Real, authentic project work and capabilities across digital solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filters">
            {categories.map(c => (
              <button
                key={c}
                className={`filter-btn ${active === c ? 'active' : ''}`}
                onClick={() => setActive(c)}
              >
                {c === 'all' ? 'All' : c}
              </button>
            ))}
          </div>

          <div className="grid-3">
            {filtered.map(p => (
              <div className="work-card" key={p.title}>
                <div className={`work-thumb ${p.tone}`}>{p.icon}</div>
                <div className="work-body">
                  <span className="cat">{p.cat}</span>
                  <h3>{p.title}</h3>
                  <p>{p.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}