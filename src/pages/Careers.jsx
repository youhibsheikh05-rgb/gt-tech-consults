import { useState } from 'react'

const trades = [
  'Web & App Development',
  'UI/UX and Graphic Design',
  'AI & Automation',
  'Digital Marketing and Social Media Marketing',
  'Video Shooting, Editing, and Content Creation',
  'Other technology-related roles',
]

export default function Careers() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', trade: '', level: '', motivation: '', consent: false,
  })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.trade || !form.consent) {
      setStatus({ type: 'error', text: 'Please fill required fields and accept the consent.' })
      return
    }
    setStatus({ type: 'success', text: 'Application received! Our team will review and contact you.' })
    setForm({ name: '', email: '', phone: '', trade: '', level: '', motivation: '', consent: false })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Join Our Team</span>
          <h1>Beginner-Friendly Opportunities</h1>
          <p>Learn, practice, contribute to real projects, and potentially progress toward team or paid opportunities. We do not guarantee placement or paid work.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="form-wrap">
            <h2 style={{ marginBottom: 24 }}>Application Form</h2>
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
                  <label>Contact Number</label>
                  <input value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} />
                </div>
                <div className="form-group">
                  <label>Area / Trade <span className="req">*</span></label>
                  <select value={form.trade} onChange={e => setForm({ ...form, trade: e.target.value })} required>
                    <option value="">Select</option>
                    {trades.map(t => <option key={t}>{t}</option>)}
                  </select>
                </div>
                <div className="form-group full">
                  <label>Current Skill / Experience Level</label>
                  <input value={form.level} onChange={e => setForm({ ...form, level: e.target.value })} placeholder="e.g. Beginner, Intermediate" />
                </div>
                <div className="form-group full">
                  <label>Short Motivation</label>
                  <textarea value={form.motivation} onChange={e => setForm({ ...form, motivation: e.target.value })} placeholder="Why do you want to join?" />
                </div>
                <div className="form-group full">
                  <label className="form-check">
                    <input type="checkbox" checked={form.consent} onChange={e => setForm({ ...form, consent: e.target.checked })} required />
                    <span>I consent to the privacy notice and confirm my information is accurate. <span className="req">*</span></span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit Application</button>
              {status && <div className={`form-message ${status.type}`}>{status.text}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}