import { useState } from 'react'

const courses = [
  { tag: 'Popular', title: 'Web Development', desc: 'Build responsive websites and web apps from the ground up using modern tools.', duration: '3–4 Months', level: 'Beginner Friendly', skills: ['HTML', 'CSS', 'JavaScript', 'React'], project: 'Portfolio website + landing page' },
  { tag: 'In-Demand', title: 'Digital Marketing', desc: 'Learn SEO, social media, content, and campaign strategy through live projects.', duration: '2–3 Months', level: 'Beginner Friendly', skills: ['SEO', 'Meta Ads', 'Content', 'Analytics'], project: 'Marketing plan + live campaign' },
  { tag: 'Creative', title: 'Graphic Design', desc: 'Master design fundamentals, branding, and visual storytelling for real clients.', duration: '2–3 Months', level: 'Beginner Friendly', skills: ['Canva', 'Figma', 'Branding', 'Layout'], project: 'Brand identity + social kit' },
  { tag: 'AI Track', title: 'Python with A.I.', desc: 'Learn Python foundations and practical AI concepts with hands-on exercises.', duration: '3–4 Months', level: 'Beginner Friendly', skills: ['Python', 'AI Basics', 'Automation', 'Projects'], project: 'AI-powered mini project' },
]

export default function Courses() {
  const [selected, setSelected] = useState(null)
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email) {
      setStatus({ type: 'error', text: 'Please fill in name and email.' })
      return
    }
    setStatus({ type: 'success', text: 'Application received! We will contact you shortly.' })
    setForm({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Courses</span>
          <h1>Practical Skills. Real Projects. Career Growth.</h1>
          <p>Project-based learning designed to help you build real skills and a portfolio.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {courses.map(c => (
              <div className="card course-card" key={c.title}>
                <span className="tag">{c.tag}</span>
                <h3>{c.title}</h3>
                <div className="course-meta">
                  <span>{c.duration}</span>
                  <span>{c.level}</span>
                </div>
                <p>{c.desc}</p>
                <div className="chip-row">
                  {c.skills.map(s => <span className="chip" key={s}>{s}</span>)}
                </div>
                <p style={{ marginTop: 14, fontSize: '0.86rem' }}>
                  <strong>Project:</strong> {c.project}
                </p>
                <button
                  className="btn btn-primary btn-sm mt-3"
                  onClick={() => setSelected(c)}
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>

          {selected && (
            <div className="form-wrap mt-4">
              <h2 style={{ marginBottom: 8 }}>Apply for: {selected.title}</h2>
              <p style={{ marginBottom: 24 }}>Fill in your details and we will get back to you.</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="form-group">
                    <label>Full Name <span className="req">*</span></label>
                    <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Email <span className="req">*</span></label>
                    <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                  </div>
                  <div className="form-group">
                    <label>Phone</label>
                    <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                  </div>
                  <div className="form-group full">
                    <label>Message</label>
                    <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} />
                  </div>
                </div>
                <button type="submit" className="btn btn-primary mt-3">Submit Application</button>
                {status && <div className={`form-message ${status.type}`}>{status.text}</div>}
              </form>
            </div>
          )}
        </div>
      </section>
    </>
  )
}