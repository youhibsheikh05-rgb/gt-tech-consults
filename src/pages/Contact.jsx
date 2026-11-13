import { useState } from 'react'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!form.name || !form.email || !form.message) {
      setStatus({ type: 'error', text: 'Please fill in all fields.' })
      return
    }
    setStatus({ type: 'success', text: 'Message sent! We will respond shortly.' })
    setForm({ name: '', email: '', message: '' })
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Contact Us</span>
          <h1>Let's Talk</h1>
          <p>Have a question or project in mind? Reach out — we respond quickly.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <div className="contact-card" style={{ marginBottom: 16 }}>
                <div className="icon">📞</div>
                <div>
                  <strong>Phone / WhatsApp</strong>
                  <a href="tel:+923430374243">03430374243</a>
                </div>
              </div>
              <div className="contact-card" style={{ marginBottom: 16 }}>
                <div className="icon">✉️</div>
                <div>
                  <strong>Email</strong>
                  <a href="mailto:gttechconsults@gmail.com">gttechconsults@gmail.com</a>
                </div>
              </div>
              <div className="contact-card" style={{ marginBottom: 16 }}>
                <div className="icon">💬</div>
                <div>
                  <strong>WhatsApp</strong>
                  <a href="https://wa.me/923430374243" target="_blank" rel="noreferrer">Chat on WhatsApp</a>
                </div>
              </div>
              <div className="contact-card">
                <div className="icon">🌐</div>
                <div>
                  <strong>Social</strong>
                  <a href="https://www.linkedin.com/company/gt-tech-consults/" target="_blank" rel="noreferrer">LinkedIn</a> ·{' '}
                  <a href="https://www.facebook.com/share/19kMeZuECm/" target="_blank" rel="noreferrer">Facebook</a> ·{' '}
                  <a href="https://www.instagram.com/gt_techconsults" target="_blank" rel="noreferrer">Instagram</a>
                </div>
              </div>
            </div>

            <div className="form-wrap">
              <form onSubmit={handleSubmit}>
                <div className="form-group" style={{ marginBottom: 16 }}>
                  <label>Name <span className="req">*</span></label>
                  <input value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} required />
                </div>
                <div className="form-group" style={{ marginBottom: 16 }}>
                  <label>Email <span className="req">*</span></label>
                  <input type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} required />
                </div>
                <div className="form-group" style={{ marginBottom: 16 }}>
                  <label>Message <span className="req">*</span></label>
                  <textarea value={form.message} onChange={e => setForm({ ...form, message: e.target.value })} required />
                </div>
                <button type="submit" className="btn btn-primary">Send Message</button>
                {status && <div className={`form-message ${status.type}`}>{status.text}</div>}
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}