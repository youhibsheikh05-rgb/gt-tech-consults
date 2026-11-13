import { Link } from 'react-router-dom'

const departments = [
  { role: 'Technology & Development', desc: 'Web development, software solutions, and technical project delivery.' },
  { role: 'Design & UI/UX', desc: 'Interface design, branding, and visual communication for digital products.' },
  { role: 'AI & Automation', desc: 'Practical AI integration, prompt workflows, and business automation.' },
  { role: 'Digital Marketing', desc: 'SEO, social media strategy, content, and campaign execution.' },
  { role: 'Content & Video', desc: 'Video editing, short-form content, and promotional creative production.' },
  { role: 'Operations & Support', desc: 'Client coordination, learner support, and smooth project delivery.' },
]

export default function Team() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Our Team</span>
          <h1>A Team Built Around Practical Delivery</h1>
          <p>We work across technology, design, AI, marketing, and content — with a shared focus on real results.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-3">
            {departments.map(d => (
              <div className="card" key={d.role}>
                <div className="icon">👥</div>
                <h3>{d.role}</h3>
                <p>{d.desc}</p>
              </div>
            ))}
          </div>

          <div className="center mt-4">
            <Link to="/careers" className="btn btn-primary">Join Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}