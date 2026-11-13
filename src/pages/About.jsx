import { Link } from 'react-router-dom'

export default function About() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">About Us</span>
          <h1>Bridging Learning & Real-World Application</h1>
          <p>GT Tech Consults helps people learn useful technology skills and helps businesses build practical digital solutions.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            <div>
              <h2>Our Mission</h2>
              <p style={{ marginTop: 14 }}>
                To bridge the gap between learning technology and applying it in
                real-world situations. We help learners practice through projects
                and help clients improve their digital presence with reliable,
                professional delivery.
              </p>
            </div>
            <div>
              <h2>Our Vision</h2>
              <p style={{ marginTop: 14 }}>
                To become a trusted technology consulting and digital solutions
                agency where learning and real-world application grow together —
                creating opportunities for learners and value for clients.
              </p>
            </div>
          </div>

          <div className="grid-4 mt-4">
            {[
              { icon: '🎯', t: 'Practical First', d: 'Skills and solutions that work in real situations.' },
              { icon: '🤝', t: 'Trust & Transparency', d: 'Clear communication and honest delivery.' },
              { icon: '📚', t: 'Continuous Learning', d: 'We learn, practice, and adapt with every project.' },
              { icon: '🚀', t: 'Real-World Growth', d: 'Every project is designed to move you forward.' },
            ].map(x => (
              <div className="card" key={x.t}>
                <div className="icon">{x.icon}</div>
                <h3>{x.t}</h3>
                <p>{x.d}</p>
              </div>
            ))}
          </div>

          <div className="center mt-4">
            <Link to="/start-project" className="btn btn-primary">Work With Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}