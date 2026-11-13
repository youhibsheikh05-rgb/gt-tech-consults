import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="page-hero" style={{ minHeight: '60vh', display: 'grid', placeItems: 'center' }}>
      <div className="container center">
        <h1 style={{ fontSize: '5rem', color: 'var(--royal)' }}>404</h1>
        <h2>Page Not Found</h2>
        <p style={{ margin: '14px auto 28px' }}>The page you are looking for does not exist or has moved.</p>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
          <Link to="/contact" className="btn btn-outline">Contact Us</Link>
        </div>
      </div>
    </section>
  )
}