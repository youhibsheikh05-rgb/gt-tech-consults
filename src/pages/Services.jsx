import { Link } from 'react-router-dom'

const services = [
  { icon: '🌐', title: 'Web Development & Website Design', desc: 'Responsive business websites, landing pages, web platforms, and user-focused design that perform across devices.' },
  { icon: '🎨', title: 'UI/UX Design', desc: 'User flows, wireframes, interface design, usability, and product experience that people love to use.' },
  { icon: '🖌️', title: 'Graphic Design & Branding', desc: 'Brand identity, visual assets, promotional creatives, and consistent brand communication.' },
  { icon: '🤖', title: 'AI, Prompt Engineering & Automation', desc: 'Practical AI integration, prompt workflows, and business process automation where appropriate.' },
  { icon: '📈', title: 'Digital Marketing & SEO', desc: 'Digital growth strategy, search optimization, social media marketing, and campaign support.' },
  { icon: '🎬', title: 'Video Editing & Content Creation', desc: 'Editing, short-form content, promotional videos, and digital content support.' },
  { icon: '💻', title: 'Software & Digital Solutions', desc: 'Tailored software and digital tools built around your exact business needs.' },
  { icon: '🧭', title: 'Technology Consulting', desc: 'Technology guidance, solution planning, workflow improvement, and digital transformation support.' },
]

export default function Services() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <span className="eyebrow">Services</span>
          <h1>Digital Solutions That Move You Forward</h1>
          <p>Practical, professional services designed to improve your digital presence and operations.</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="grid-2">
            {services.map(s => (
              <div className="card" key={s.title}>
                <div className="icon">{s.icon}</div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="center mt-4">
            <Link to="/start-project" className="btn btn-primary">Start a Project</Link>
          </div>
        </div>
      </section>
    </>
  )
}