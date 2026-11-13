import { useState } from 'react'

export default function StartProject() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', budget: '', details: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.details) {
      setStatus({ type: 'error', text: 'Please fill in name, email, and project details.' })
      return
    }
    setStatus({ type: 'success', text: 'Project brief received! We will review and contact you shortly.' })
    setForm({ name: '', email: '', phone: '', type: '', budget: '', details: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Start a Project</span>
          <h1>Tell Us About Your Project</h1>
          <p>Share your goals, scope, and timeline. Our team will review your brief and get back to you.</p>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ maxWidth: 800 }}>
          <div className="form-wrap">
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
                <div className="form-group">
                  <label>Project Type</label>
                  <select value={form.type} onChange={e => setForm({ ...form, type: e.target.value })}>
                    <option value="">Select</option>
                    <option>Website</option>
                    <option>UI/UX</option>
                    <option>Branding</option>
                    <option>AI/Automation</option>
                    <option>Marketing</option>
                    <option>Other</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label>Budget Range (optional)</label>
                  <input value={form.budget} onChange={e => setForm({ ...form, budget: e.target.value })} placeholder="e.g. PKR 50k – 100k" />
                </div>
                <div className="form-group full">
                  <label>Project Details <span className="req">*</span></label>
                  <textarea value={form.details} onChange={e => setForm({ ...form, details: e.target.value })} placeholder="Goals, scope, timeline, features..." required />
                </div>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Submit Brief</button>
              {status && <div className={`form-message ${status.type}`}>{status.text}</div>}
            </form>
          </div>
        </div>
      </section>
    </>
  )
}