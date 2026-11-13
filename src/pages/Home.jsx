import { Link } from 'react-router-dom'

const services = [
  { icon: '🌐', title: 'Web Development', desc: 'Responsive business websites, landing pages, and web platforms.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User flows, wireframes, interface design, and product experience.' },
  { icon: '🤖', title: 'AI & Automation', desc: 'Practical AI integration, prompt workflows, and business automation.' },
  { icon: '📈', title: 'Digital Marketing & SEO', desc: 'Growth strategy, search optimization, and campaign support.' },
  { icon: '🖌️', title: 'Graphic Design & Branding', desc: 'Brand identity, visual assets, and consistent communication.' },
  { icon: '💻', title: 'Software Solutions', desc: 'Tailored software and digital tools based on client needs.' },
]

const courses = [
  { tag: 'Popular', title: 'Web Development', desc: 'Build responsive websites and web apps from the ground up.', duration: '3–4 Months' },
  { tag: 'In-Demand', title: 'Digital Marketing', desc: 'Learn SEO, social media, content, and campaign strategy.', duration: '2–3 Months' },
  { tag: 'Creative', title: 'Graphic Design', desc: 'Master design fundamentals, branding, and visual storytelling.', duration: '2–3 Months' },
  { tag: 'AI Track', title: 'Python with A.I.', desc: 'Learn Python foundations and practical AI concepts.', duration: '3–4 Months' },
]

const works = [
  { icon: '🖥️', title: 'Business Landing Page', cat: 'Websites', tone: '' },
  { icon: '📱', title: 'Mobile App Interface', cat: 'UI/UX', tone: 'alt' },
  { icon: '🎨', title: 'Brand Identity Kit', cat: 'Branding', tone: 'alt2' },
]

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>Learn. Build.<br /><span>Earn. Grow.</span></h1>
            <p className="hero-lead">
              Learn practical tech skills. Build real projects. Turn your skills
              into meaningful opportunities — with a team that blends technology
              consulting and hands-on digital training.
            </p>
            <div className="hero-actions">
              <Link to="/courses" className="btn btn-primary">Explore Courses</Link>
              <Link to="/start-project" className="btn btn-outline">Start a Project</Link>
            </div>
            <div className="hero-badges">
              <div className="hero-badge"><strong>8+</strong><span>Digital Services</span></div>
              <div className="hero-badge"><strong>4</strong><span>Practical Courses</span></div>
              <div className="hero-badge"><strong>100%</strong><span>Project-Based Learning</span></div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="orb" />
            <div className="hero-card">
              <h4>What you can do with GT Tech</h4>
              <div className="hero-line"><span className="dot">L</span> Learn in-demand digital skills</div>
              <div className="hero-line"><span className="dot">B</span> Build real client-ready projects</div>
              <div className="hero-line"><span className="dot">E</span> Earn through practical experience</div>
              <div className="hero-line"><span className="dot">G</span> Grow toward meaningful opportunities</div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our Services</span>
            <h2>Digital Solutions That Move You Forward</h2>
            <p style={{ marginTop: 14 }}>
              From websites to AI automation, we deliver practical digital
              solutions designed around real business needs.
            </p>
          </div>
          <div className="grid-3">
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="center mt-4">
            <Link to="/services" className="btn btn-outline">View All Services</Link>
          </div>
        </div>
      </section>

      {/* COURSES */}
      <section className="section section--alt">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Practical Learning</span>
            <h2>Courses That Build Real Skills</h2>
            <p style={{ marginTop: 14 }}>
              Learn by doing. Every course includes hands-on projects, guidance,
              and portfolio-ready work.
            </p>
          </div>
          <div className="grid-4">
            {courses.map(c => (
              <div className="card course-card" key={c.title}>
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="course-meta"><span>{c.duration}</span></div>
                <p>{c.desc}</p>
                <Link to="/courses" className="link">Learn more →</Link>
              </div>
            ))}
          </div>
          <div className="center mt-4">
            <Link to="/courses" className="btn btn-primary">View All Courses</Link>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Our Work</span>
            <h2>Selected Projects & Capabilities</h2>
            <p style={{ marginTop: 14 }}>
              A look at the type of digital work we deliver. Authentic projects
              only — no fabricated client names or metrics.
            </p>
          </div>
          <div className="grid-3">
            {works.map(w => (
              <div className="work-card" key={w.title}>
                <div className={`work-thumb ${w.tone}`}>{w.icon}</div>
                <div className="work-body">
                  <span className="cat">{w.cat}</span>
                  <h3>{w.title}</h3>
                  <p>Practical, user-focused digital work built with modern tools.</p>
                </div>
              </div>
            ))}
          </div>
          <div className="center mt-4">
            <Link to="/portfolio" className="btn btn-outline">View Full Portfolio</Link>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="section section--navy">
        <div className="container">
          <div className="section-head center">
            <span className="eyebrow">Why GT Tech Consults</span>
            <h2>Practical Training Meets Real Delivery</h2>
          </div>
          <div className="grid-4">
            {[
              { icon: '🎯', t: 'Practical Approach', d: 'Skills and solutions that work in real situations.' },
              { icon: '🛠️', t: 'Project-Based', d: 'Learn by building real, portfolio-ready work.' },
              { icon: '🤝', t: 'Guided Support', d: 'Clear guidance from experienced team members.' },
              { icon: '🚀', t: 'Real-World Value', d: 'Focused on outcomes that move you forward.' },
            ].map(x => (
              <div key={x.t} style={{ padding: 24, background: 'rgba(255,255,255,0.05)', borderRadius: 14, border: '1px solid rgba(255,255,255,0.08)' }}>
                <div style={{ fontSize: '1.8rem', marginBottom: 14 }}>{x.icon}</div>
                <h3 style={{ color: '#fff', marginBottom: 8 }}>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section">
        <div className="container">
          <div className="cta-band">
            <h2>Ready to Learn or Build?</h2>
            <p>
              Whether you want to develop practical skills or need a reliable
              team to deliver a digital solution — we are ready to help.
            </p>
            <div className="cta-actions">
              <Link to="/courses" className="btn btn-light">Start Learning</Link>
              <Link to="/start-project" className="btn btn-primary">Discuss a Project</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}