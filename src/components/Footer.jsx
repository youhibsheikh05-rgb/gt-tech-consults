import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="footer-brand">
              <img src="/logo.png" alt="GT Tech Consults logo" />
              <div className="logo-text">
                <strong>GT Tech</strong>
                <span>CONSULTS</span>
              </div>
            </div>
            <p>
              Technology Consulting & Digital Solutions Agency. Learn practical
              skills, build real projects, and grow with us.
            </p>
            <div className="socials">
              <a href="https://wa.me/923430374243" target="_blank" rel="noreferrer" aria-label="WhatsApp">WA</a>
              <a href="https://www.linkedin.com/company/gt-tech-consults/" target="_blank" rel="noreferrer" aria-label="LinkedIn">in</a>
              <a href="https://www.facebook.com/share/19kMeZuECm/" target="_blank" rel="noreferrer" aria-label="Facebook">f</a>
              <a href="https://www.instagram.com/gt_techconsults" target="_blank" rel="noreferrer" aria-label="Instagram">ig</a>
            </div>
          </div>

          <div>
            <h4>Quick Links</h4>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/portfolio">Portfolio</Link></li>
              <li><Link to="/team">Our Team</Link></li>
              <li><Link to="/careers">Join Our Team</Link></li>
            </ul>
          </div>

          <div>
            <h4>Services</h4>
            <ul>
              <li><Link to="/services">Web Development</Link></li>
              <li><Link to="/services">UI/UX Design</Link></li>
              <li><Link to="/services">AI & Automation</Link></li>
              <li><Link to="/services">Digital Marketing</Link></li>
              <li><Link to="/services">Technology Consulting</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contact</h4>
            <ul>
              <li><a href="tel:+923430374243">03430374243</a></li>
              <li><a href="mailto:gttechconsults@gmail.com">gttechconsults@gmail.com</a></li>
              <li><Link to="/start-project">Start a Project</Link></li>
              <li><Link to="/faqs">FAQs</Link></li>
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} GT Tech Consults. All rights reserved.</span>
          <div style={{ display: 'flex', gap: 20 }}>
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/terms">Terms & Conditions</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}